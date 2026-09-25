import { MongoClient } from 'mongodb'
import { databaseErrorSummary } from './database-errors.js'
import { fileURLToPath } from 'node:url'

export function createDatabase(env = process.env) {
  if (!env.MONGODB_URI) return null
  const client = new MongoClient(env.MONGODB_URI, {
    maxPoolSize: 5, serverSelectionTimeoutMS: 10000, connectTimeoutMS: 10000,
    writeConcern: { w: 'majority', wtimeoutMS: 10000 },
    ...(env.NODE_ENV === 'production' ? { tls: true, tlsAllowInvalidCertificates: false, tlsAllowInvalidHostnames: false } : {}),
  })
  const db = client.db(env.MONGODB_DB_NAME || 'tn_investments')
  return {
    enquiries: db.collection('investment_enquiries'),
    audit: db.collection('investment_audit_log'),
    async initialize() {
      await client.connect()
      await db.command({ ping: 1 })
      await db.collection('investment_enquiries').createIndexes([
        { key: { created_at: -1, _id: -1 }, name: 'created_at' },
        { key: { status: 1, created_at: -1, _id: -1 }, name: 'status_created' },
        { key: { notification_sent_at: 1, next_notification_at: 1 }, name: 'notification_queue' },
      ])
      await db.collection('investment_audit_log').createIndex({ created_at: -1 })
    },
    ping: () => db.command({ ping: 1 }),
    close: () => client.close(),
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  let database
  try {
    database = createDatabase()
    if (!database) throw new Error('MONGODB_URI is required')
    await database.initialize()
    console.log('MongoDB connection and indexes ready')
  } catch (error) { console.error('MongoDB setup failed.', databaseErrorSummary(error)); process.exitCode = 1 }
  finally { await database?.close() }
}
