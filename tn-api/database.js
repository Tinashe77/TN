import pg from 'pg'
import { readFile, readdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

export function createDatabase(env = process.env) {
  if (!env.DATABASE_URL) return null
  const pool = new pg.Pool({
    connectionString: env.DATABASE_URL,
    // Production TLS verifies the certificate. Local PostgreSQL can explicitly disable TLS.
    ssl: env.DATABASE_SSL === 'false' ? false : { rejectUnauthorized: true },
    max: 5, connectionTimeoutMillis: 5000, idleTimeoutMillis: 30000,
    statement_timeout: 30000,
  })
  pool.on('error', () => console.error('Database connection unavailable'))
  return pool
}

export async function migrate(pool) {
  const client = await pool.connect()
  try {
    await client.query('BEGIN')
    await client.query('CREATE TABLE IF NOT EXISTS schema_migrations (name text PRIMARY KEY, applied_at timestamptz NOT NULL DEFAULT now())')
    await client.query('LOCK TABLE schema_migrations IN EXCLUSIVE MODE')
    const directory = new URL('./migrations/', import.meta.url)
    for (const name of (await readdir(directory)).filter(name => name.endsWith('.sql')).sort()) {
      const result = await client.query('SELECT name FROM schema_migrations WHERE name = $1', [name])
      if (!result.rows.length) {
        await client.query(await readFile(new URL(name, directory), 'utf8'))
        await client.query('INSERT INTO schema_migrations (name) VALUES ($1)', [name])
      }
    }
    await client.query('COMMIT')
  } catch (error) {
    await client.query('ROLLBACK').catch(() => {})
    throw error
  } finally { client.release() }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const pool = createDatabase()
  if (!pool) throw new Error('DATABASE_URL is required for migrations')
  try { await migrate(pool); console.log('Database migrations complete') }
  catch { console.error('Database migration failed. Check database connectivity and configuration.'); process.exitCode = 1 }
  finally { await pool.end() }
}
