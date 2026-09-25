-- Customers may independently omit either identity field. Preserve existing values.
ALTER TABLE investment_enquiries ALTER COLUMN id_type DROP NOT NULL;
ALTER TABLE investment_enquiries ALTER COLUMN id_number DROP NOT NULL;
