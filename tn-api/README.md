# TN investment enquiries — MongoDB

The website at `/invest` collects enquiries in three steps: **Your details → Your interests → Review & submit**. ID type and ID number are independently optional. There are no file uploads. The Node API runs on Render and stores records in MongoDB Atlas.

## Activate the existing Render API

1. Create a MongoDB Atlas project and cluster in a region near the API (the Render configuration uses Frankfurt). Choose a cluster plan and backup policy suitable for production.
2. In Atlas **Database Access**, create a dedicated database user with `readWrite` access to the `tn_investments` database. This is separate from your Atlas dashboard account.
3. In Render, open the API service's connection/network information and copy its **outbound IP addresses/ranges**. Add those to the Atlas project's **Network Access / IP access list**. Do not use your laptop's IP as the only entry for the deployed API.
4. In Atlas select **Connect → Drivers → Node.js** and copy the connection string. Replace the username/password placeholders; URL-encode special characters in credentials. Keep the URI secret.
5. In the existing Render API's **Environment** settings, add:

   ```env
   MONGODB_URI=mongodb+srv://USER:ENCODED_PASSWORD@YOUR_CLUSTER.mongodb.net/?retryWrites=true&w=majority
   MONGODB_DB_NAME=tn_investments
   ```

   Keep `NODE_ENV=production`, Node 22 and your existing admin/email variables. `DATABASE_URL` and `DATABASE_SSL` are no longer used and may be removed from this API's environment. Do not delete the old PostgreSQL service as part of this change.
6. Once this code is committed and pushed, select **Manual Deploy → Deploy latest commit**. Startup connects to MongoDB and creates indexes automatically; no SQL migrations run. The service uses `npm ci --omit=dev`, `npm start`, root directory `tn-api`, and health check `/ready`.
7. Open `https://<api-host>/ready` and confirm `{"status":"ready"}`. `/health` checks process liveness only. Database startup failures log a safe error category without connection strings or applicant details.
8. Sign in at `https://<api-host>/admin/`. The same staff credentials continue to work. Submit a synthetic enquiry with both ID fields blank, confirm the reference, find it in the portal and update its status.
9. The DigitalOcean website still uses `VITE_API_BASE_URL=https://<api-host>` at build time, without `/api`. If the API address has not changed, no frontend environment change is needed.

If Render manages this service through a Blueprint, manually sync the updated **root** `render.yaml` as well. New `sync: false` variables on an existing Blueprint must be entered on the service's Environment page. The updated Blueprint defines the API only; it does not create an Atlas cluster. Removing the PostgreSQL resource from the Blueprint does not delete the existing database or stop its billing.

## First-time Render setup

Connect the repository through **New → Blueprint**, choose the desired branch and repository-root `render.yaml` (not `tn-landing/render.yaml`). The Blueprint provisions a paid Starter Node service. Supply `MONGODB_URI`, staff username, staff portal URL and email settings. Render generates `ADMIN_PASSWORD`. Review the plan before provisioning. Automatic service deployments are disabled; Blueprint Auto Sync can also be disabled separately.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `MONGODB_URI` | Secret MongoDB connection string; use Atlas SRV URI in production |
| `MONGODB_DB_NAME` | Database name; defaults to `tn_investments` |
| `ADMIN_USERNAME` / `ADMIN_PASSWORD` | Staff credentials; password minimum 20 characters |
| `ADMIN_URL` | HTTPS portal URL ending in `/admin/` |
| `SMTP_USER` / `SMTP_PASS` | Office 365 SMTP credentials |
| `INVESTMENT_ENQUIRY_TO` | Approved notification mailbox; no fallback or CC |
| `VITE_API_BASE_URL` | Frontend build variable containing only the public API origin |

Production MongoDB connections enforce TLS and certificate/hostname verification. Atlas must permit the Render service's outbound addresses. Never put MongoDB credentials in frontend variables or commit `.env` files.

Office 365 must permit the configured SMTP authentication method. The paid Render service supports the SMTP port used here. Records remain saved if email is unavailable, and notifications retry independently. A missing notification sender/recipient leaves notifications queued.

## Data and reliability

- `investment_enquiries` stores applicant/contact details, optional identity fields as null when omitted, investment choice, consent text/version/time, status and notification state. UUID `_id` values enforce uniqueness for submission retries. Reusing a reference with different details returns 409.
- Enquiry creation and notification queue state are one atomic MongoDB document insert. A retry after an uncertain write acknowledgement finds the existing record rather than creating a duplicate.
- Notifications use atomic claims with five-minute leases and exponential retry delays. A stale worker cannot acknowledge a later worker's claim. Delivery is at-least-once; the reference identifies duplicates after a crash. Emails contain a reference and portal link, not applicant details.
- The staff portal supports search, paging, filters, review and status updates. Listing/viewing are recorded in `investment_audit_log`. Each status change and its audit entry commit together in the enquiry's `status_history` array. Internal hashes and audit histories are not returned through the portal API.
- The current portal uses one configured staff account with Basic authentication and requires HTTPS in production. Use a private browsing window and close all private windows when finished. Individual staff accounts/SSO are a separate enhancement.

## Existing PostgreSQL data

**This switch does not transfer or delete PostgreSQL records.** The MongoDB portal displays MongoDB records only. Historical SQL migrations are retained in `legacy-postgres/` for reference and are never run by the API. If the old database has enquiries, export/import and verify them before retiring it. Keep original references, timestamps, consent and audit records during any future migration. No cloud resource is deleted automatically.

## Local development

Use Node 22.14+ in the Node 22 release line and local MongoDB, or a dedicated development Atlas database.

```sh
cd tn-api
npm ci
cp .env.example .env
# Set MONGODB_URI and staff credentials in .env.
npm start
```

Startup sets up collections/indexes automatically. `npm run db:setup` explicitly checks the connection and prepares indexes. Without `MONGODB_URI`, the server can start for frontend development but submissions and `/ready` return 503.

In another terminal run `npm run dev` in `tn-landing`. Vite proxies `/api` to port 8080. The staff portal is at `http://localhost:8080/admin/`. Do not expose local HTTP access publicly.

## Tests

```sh
cd tn-api
npm test
```

The suite starts a temporary local MongoDB 7.0.14 server using `mongodb-memory-server`; its first run downloads the official MongoDB binary. It needs download access and permission to bind local ports. Tests use isolated databases and mocked mail delivery, never Atlas credentials or real emails. They cover persistence, concurrent duplicate requests, optional identity fields, uncertain-write recovery, notification leases/retries, staff authentication, literal search, pagination and audit updates.

## Operations

Configure the organisation's retention period and database backups before collecting live data. Do not log request bodies, database credentials or ID numbers. The request limiter is in-process for the single-instance deployment; use shared limiting before scaling. Archive historical status events according to the organisation's policy if records accumulate very large histories.
