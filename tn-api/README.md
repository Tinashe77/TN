# TN investment enquiries

The website's `/invest` page is a three-step form: **Your details → Your interests → Review & submit**. It validates each step, retains entered information when navigating back, and allows edits from the review screen. Details are sent only on final submission; nothing is saved to browser storage.

## Storage and features

Successful enquiries are stored in PostgreSQL and return a reference number. The record includes applicant/contact details, ID type and number, investment choice, consent text/version/time and enquiry status. **There are no file uploads and DigitalOcean Spaces is not required.** The API rejects the obsolete `idFile` field.

Identical retries reuse a request UUID to prevent duplicate enquiries. Email notifications retry independently of saving the record, so email failures do not lose enquiries. Notifications contain a reference and a staff portal link, not applicant details. Delivery is at-least-once; the reference identifies duplicate notifications after a crash.

The password-protected staff portal at `/admin/` on the API host supports search, pagination, filters, enquiry review and status updates. Listing, viewing and status updates are audited. It uses one configured staff account with browser Basic authentication; individual accounts/SSO are not included. Use a private browsing window and close all private windows when finished to clear cached credentials.

## Local development

Use Node 22.14 or later in the Node 22 release line, and a local PostgreSQL database.

```sh
cd tn-api
npm ci
cp .env.example .env
# Fill in local database and staff credentials.
npm start
```

The API defaults to port 8080. Startup runs pending migrations transactionally; `npm run migrate` runs them explicitly. Migration failures stop startup. Without `DATABASE_URL`, the API starts for frontend development but submissions and `/ready` return 503.

In another terminal:

```sh
cd tn-landing
npm ci
npm run dev
```

Open the Vite URL with `/invest`. Vite proxies `/api` to port 8080. Staff access `http://localhost:8080/admin/`. Set `ADMIN_USERNAME` and a randomly generated `ADMIN_PASSWORD` of at least 20 characters. Do not expose the local HTTP portal publicly; production staff access requires HTTPS.

## Tests

```sh
cd tn-api
npm test
```

Tests use the in-process PGlite PostgreSQL engine and simulated email delivery. They cover migrations, consent persistence, deduplication, uncertain commit recovery, email retries, authentication, status updates, audit records and rejection of uploads. HTTP tests need permission to bind a temporary local port. No cloud resources or real email are used. PGlite is a test dependency, not the production database.

## Render deployment — step by step

The root `render.yaml` provisions a **paid** Node service and a paid Render PostgreSQL database in Frankfurt. It is separate from `tn-landing/render.yaml`. External database access is disabled; the API uses the database's internal connection.

1. When authorised, commit and push the reviewed changes to the branch Render will use. Development has not pushed or deployed these changes.
2. In Render, select **New → Blueprint**, connect the repository and select that branch. Use the repository-root `render.yaml`.
3. Review the service/database plans, costs and region before provisioning. Both resources use Frankfurt; change both together if needed.
4. Set `ADMIN_USERNAME`, `ADMIN_URL`, `SMTP_USER`, `SMTP_PASS` and `INVESTMENT_ENQUIRY_TO` when prompted. Render injects `DATABASE_URL` and generates `ADMIN_PASSWORD`. No Spaces credentials are needed.
5. Deploy the Blueprint. The API builds with `npm ci --omit=dev`, starts with `npm start`, binds to Render's `PORT` on `0.0.0.0` and creates its tables automatically. It uses certificate-verified database TLS.
6. Check `https://<api-host>/health` for `{"status":"ok"}` and `/ready` for `{"status":"ready"}`. The latter queries PostgreSQL.
7. In the API service environment, retrieve the generated staff password and store it securely. Update `ADMIN_URL` to `https://<api-host>/admin/` and deploy the environment change. Sign in at that URL.
8. On the DigitalOcean frontend, set `VITE_API_BASE_URL=https://<api-host>` at build time, without `/api`. Deploy the updated frontend and rebuild it. The API already allows the TN production domains; explicitly add other staging origins in `server.js` if needed.
9. Test with synthetic details: complete all three steps, edit from the review screen, submit, confirm the reference, find the record in the staff portal, update its status and confirm the notification.
10. Automatic service code deployments are disabled in the Blueprint. Also set Blueprint **Settings → Auto Sync → No** if Blueprint configuration changes should require manual syncing.

Render's free service blocks SMTP port 587 and sleeps when idle; use the paid plan in the Blueprint. Office 365 must permit the configured SMTP authentication method. If it does not, switch to Microsoft Graph/OAuth or an approved email API. Records remain queued if the sender/recipient is absent or email is unavailable.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | PostgreSQL connection string, server only |
| `DATABASE_SSL` | `true` in production; `false` for local PostgreSQL |
| `ADMIN_USERNAME` / `ADMIN_PASSWORD` | Staff credentials; password minimum 20 characters |
| `ADMIN_URL` | HTTPS staff portal link for notifications |
| `SMTP_USER` / `SMTP_PASS` | Office 365 SMTP credentials |
| `INVESTMENT_ENQUIRY_TO` | Approved notification mailbox; no fallback or CC |
| `VITE_API_BASE_URL` | Frontend build variable containing only the public API origin |

## Operation and existing data

The original database migration retains nullable document metadata columns for compatibility with any database already migrated. New records leave those columns empty. Upload/download code and Spaces dependencies have been removed; no existing cloud files or historical database references are deleted automatically. If a previous deployment collected documents, manage their retention separately.

ID type and ID number are optional and may be omitted independently. Missing identity fields are stored as NULL and displayed as “Not provided”. Migration 002 removes the previous NOT NULL constraints automatically on API startup, preserving existing records. Set the organisation's retention period for records/backups before collecting live data. Enable and verify the paid database backup policy. The request limiter is in-process for the single-instance deployment; use shared limiting before scaling. Replace the shared staff account with individual accounts/SSO when per-person audit identities are needed.
