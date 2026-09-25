CREATE TABLE IF NOT EXISTS investment_enquiries (
  id uuid PRIMARY KEY,
  request_hash char(64) NOT NULL,
  first_name varchar(100) NOT NULL,
  last_name varchar(100) NOT NULL,
  email varchar(254) NOT NULL,
  phone varchar(30) NOT NULL,
  id_type varchar(20) NOT NULL CHECK (id_type IN ('ID', 'Passport')),
  id_number varchar(60) NOT NULL,
  contact_method varchar(20) NOT NULL CHECK (contact_method IN ('Phone call', 'SMS', 'WhatsApp', 'Email')),
  product varchar(120) NOT NULL,
  other_product varchar(300),
  consent_text text NOT NULL,
  consent_version varchar(40) NOT NULL,
  consent_accepted_at timestamptz NOT NULL DEFAULT now(),
  document_key text,
  document_type varchar(40),
  document_size integer CHECK (document_size > 0 AND document_size <= 10485760),
  status varchar(20) NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  notification_sent_at timestamptz,
  notification_attempts integer NOT NULL DEFAULT 0,
  next_notification_at timestamptz NOT NULL DEFAULT now(),
  CHECK ((document_key IS NULL AND document_type IS NULL AND document_size IS NULL) OR
         (document_key IS NOT NULL AND document_type IS NOT NULL AND document_size IS NOT NULL))
);
CREATE INDEX IF NOT EXISTS investment_enquiries_created_idx ON investment_enquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS investment_enquiries_status_idx ON investment_enquiries (status, created_at DESC);
CREATE INDEX IF NOT EXISTS investment_enquiries_notification_idx ON investment_enquiries (next_notification_at) WHERE notification_sent_at IS NULL;
CREATE TABLE IF NOT EXISTS investment_audit_log (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  enquiry_id uuid REFERENCES investment_enquiries(id) ON DELETE SET NULL,
  actor varchar(100) NOT NULL,
  action varchar(40) NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
