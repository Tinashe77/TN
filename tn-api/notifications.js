// Claim one persisted notification at a time. Expired leases are retried after a
// crash; delivery is at-least-once, and the reference identifies duplicates.
export function createNotificationWorker({ pool, sendMail, sender, recipient, adminUrl, logger = console }) {
  let running = false
  async function tick() {
    if (running || !pool || !sender || !recipient) return
    running = true
    try {
      const { rows } = await pool.query(`UPDATE investment_enquiries SET
        next_notification_at = now() + interval '5 minutes', notification_attempts = notification_attempts + 1
        WHERE id = (SELECT id FROM investment_enquiries WHERE notification_sent_at IS NULL AND next_notification_at <= now()
          ORDER BY next_notification_at FOR UPDATE SKIP LOCKED LIMIT 1)
        RETURNING id, notification_attempts`)
      if (!rows.length) return
      const { id, notification_attempts: attempts } = rows[0]
      try {
        await sendMail({
          from: sender, to: recipient,
          subject: `TN investment enquiry received: ${id}`,
          text: `A new investment enquiry has been saved.\nReference: ${id}\n${adminUrl ? `Review it in the protected staff portal: ${adminUrl}` : 'Sign in to the investment staff portal to review it.'}\nApplicant details are available only in the staff portal.`,
        })
        await pool.query('UPDATE investment_enquiries SET notification_sent_at = now() WHERE id = $1', [id])
      } catch {
        const delay = Math.min(21600, 60 * 2 ** Math.min(attempts, 9))
        await pool.query("UPDATE investment_enquiries SET next_notification_at = now() + ($2 * interval '1 second') WHERE id = $1", [id, delay])
        logger.error('Investment notification failed; retry scheduled')
      }
    } catch { logger.error('Investment notification worker unavailable') }
    finally { running = false }
  }
  return { tick, start() { const timer = setInterval(tick, 10000); timer.unref(); void tick(); return () => clearInterval(timer) } }
}
