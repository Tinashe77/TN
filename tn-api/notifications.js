// Claim one persisted notification at a time. Expired leases are retried after a
// crash; delivery is at-least-once, and the reference identifies duplicates.
export function createNotificationWorker({ store, sendMail, sender, recipient, adminUrl, logger = console }) {
  let running = false
  async function tick() {
    if (running || !store || !sender || !recipient) return
    running = true
    try {
      const claimed = await store.claimNotification()
      if (!claimed) return
      const { id, notification_attempts: attempts, notification_lease: lease } = claimed
      try {
        await sendMail({
          from: sender, to: recipient,
          subject: `TN investment enquiry received: ${id}`,
          text: `A new investment enquiry has been saved.\nReference: ${id}\n${adminUrl ? `Review it in the protected staff portal: ${adminUrl}` : 'Sign in to the investment staff portal to review it.'}\nApplicant details are available only in the staff portal.`,
        })
        await store.markNotified(id, lease)
      } catch {
        const delay = Math.min(21600, 60 * 2 ** Math.min(attempts, 9))
        await store.retryNotification(id, lease, delay)
        logger.error('Investment notification failed; retry scheduled')
      }
    } catch { logger.error('Investment notification worker unavailable') }
    finally { running = false }
  }
  return { tick, start() { const timer = setInterval(tick, 10000); timer.unref(); void tick(); return () => clearInterval(timer) } }
}
