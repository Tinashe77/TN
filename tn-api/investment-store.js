import { createHash, randomUUID } from 'node:crypto'
import { consentText } from './investment-config.js'
export const consentVersion = 'investment-enquiry-v1'
const publicFields = {
  _id: 0, id: 1, first_name: 1, last_name: 1, email: 1, phone: 1, id_type: 1, id_number: 1,
  contact_method: 1, product: 1, other_product: 1, consent_text: 1, consent_version: 1,
  consent_accepted_at: 1, status: 1, created_at: 1, updated_at: 1, notification_sent_at: 1,
}

export function createInvestmentStore(database) {
  const { enquiries, audit } = database
  return {
    async save({ id, data }) {
      id = id.toLowerCase()
      const canonical = {
        firstName: data.firstName, lastName: data.lastName, email: data.email, phone: data.phone,
        idType: data.idType || null, idNumber: data.idNumber || null, contactMethod: data.contactMethod,
        product: data.product, otherProduct: data.otherProduct || null,
      }
      const hash = createHash('sha256').update(JSON.stringify(canonical)).digest('hex')
      const now = new Date()
      try {
        await enquiries.insertOne({
          _id: id, id, request_hash: hash,
          first_name: data.firstName, last_name: data.lastName, email: data.email, phone: data.phone,
          id_type: canonical.idType, id_number: canonical.idNumber, contact_method: data.contactMethod,
          product: data.product, other_product: canonical.otherProduct,
          consent_text: consentText, consent_version: consentVersion, consent_accepted_at: now,
          status: 'new', created_at: now, updated_at: now, status_history: [],
          notification_sent_at: null, notification_attempts: 0, next_notification_at: now,
        })
        return { reference: id, duplicate: false }
      } catch (error) {
        if (error.code !== 11000) throw error
        const existing = await enquiries.findOne({ _id: id }, { projection: { request_hash: 1 } })
        if (!existing) throw error
        if (existing.request_hash !== hash) {
          const conflict = new Error('This submission reference has already been used for different details. Please reload the page before submitting.')
          conflict.status = 409
          throw conflict
        }
        return { reference: id, duplicate: true }
      }
    },
    async list({ page, status, search, actor }) {
      const filter = {}
      if (status) filter.status = status
      if (search) {
        const literal = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        filter.$or = ['first_name', 'last_name', 'email', 'id'].map(field => ({ [field]: { $regex: literal, $options: 'i' } }))
        filter.$or.push({ $expr: { $regexMatch: { input: { $concat: ['$first_name', ' ', '$last_name'] }, regex: literal, options: 'i' } } })
      }
      const rows = await enquiries.find(filter, { projection: { _id: 0, id: 1, first_name: 1, last_name: 1, product: 1, status: 1, created_at: 1 }, maxTimeMS: 5000 })
        .sort({ created_at: -1, _id: -1 }).skip((page - 1) * 25).limit(26).toArray()
      await audit.insertOne({ actor, action: 'list', created_at: new Date() })
      return { enquiries: rows.slice(0, 25), hasMore: rows.length > 25, page }
    },
    async get(id, actor) {
      const row = await enquiries.findOne({ _id: id.toLowerCase() }, { projection: publicFields })
      if (row) await audit.insertOne({ enquiry_id: row.id, actor, action: 'view', created_at: new Date() })
      return row
    },
    async updateStatus(id, status, actor) {
      if (!['new', 'contacted', 'closed'].includes(status)) throw new Error('Invalid status')
      const now = new Date()
      // Status and its audit event commit together in one atomic document update.
      return enquiries.findOneAndUpdate({ _id: id.toLowerCase() }, {
        $set: { status, updated_at: now },
        $push: { status_history: { actor, action: `status:${status}`, created_at: now } },
      }, { returnDocument: 'after', includeResultMetadata: false, projection: { _id: 0, id: 1, status: 1 } })
    },
    async claimNotification() {
      const now = new Date()
      return enquiries.findOneAndUpdate({ notification_sent_at: null, next_notification_at: { $lte: now } }, {
        $set: { next_notification_at: new Date(now.getTime() + 300000), notification_lease: randomUUID() },
        $inc: { notification_attempts: 1 },
      }, { sort: { next_notification_at: 1 }, returnDocument: 'after', includeResultMetadata: false,
        projection: { _id: 0, id: 1, notification_attempts: 1, notification_lease: 1 } })
    },
    async markNotified(id, lease) {
      await enquiries.updateOne({ _id: id, notification_lease: lease }, {
        $set: { notification_sent_at: new Date() }, $unset: { notification_lease: '' },
      })
    },
    async retryNotification(id, lease, delay) {
      await enquiries.updateOne({ _id: id, notification_lease: lease }, {
        $set: { next_notification_at: new Date(Date.now() + delay * 1000) }, $unset: { notification_lease: '' },
      })
    },
  }
}
