import { createHash } from 'node:crypto'
import { consentText } from './investment-config.js'
export const consentVersion = 'investment-enquiry-v1'

export function createInvestmentStore(pool) {
  return {
    async save({ id, data }) {
      const requestHash = createHash('sha256').update(JSON.stringify(data)).digest('hex')
      const client = await pool.connect()
      try {
        await client.query('BEGIN')
        const inserted = await client.query(`INSERT INTO investment_enquiries
          (id, request_hash, first_name, last_name, email, phone, id_type, id_number, contact_method, product, other_product,
           consent_text, consent_version)
          VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
          ON CONFLICT (id) DO NOTHING RETURNING id`, [
          id, requestHash, data.firstName, data.lastName, data.email, data.phone, data.idType, data.idNumber,
          data.contactMethod, data.product, data.otherProduct || null, consentText, consentVersion,
        ])
        if (!inserted.rows.length) {
          const { rows } = await client.query('SELECT request_hash FROM investment_enquiries WHERE id = $1', [id])
          if (rows[0]?.request_hash !== requestHash) {
            const error = new Error('This submission reference has already been used for different details. Please reload the page before submitting.')
            error.status = 409
            throw error
          }
        }
        await client.query('COMMIT')
        return { reference: id, duplicate: !inserted.rows.length }
      } catch (error) {
        await client.query('ROLLBACK').catch(() => {})
        throw error
      } finally { client.release() }
    },
  }
}
