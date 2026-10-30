export const rateDisclaimer = 'Rates are indicative and subject to availability of matching assets. Please confirm with Treasury.'

export function rateError(message, status = 400) {
  return Object.assign(new Error(message), { status })
}

export function harareDate(now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Africa/Harare', year: 'numeric', month: '2-digit', day: '2-digit' }).format(now)
}

export function validateRates(input) {
  const date = input?.effectiveDate
  if (typeof date !== 'string' || !/^20\d{2}-\d{2}-\d{2}$/.test(date) ||
      !Number.isFinite(Date.parse(date)) || new Date(date).toISOString().slice(0, 10) !== date) {
    throw rateError('Enter a valid effective date.')
  }
  if (date > harareDate()) throw rateError('Future rates cannot be published. Use today or an earlier effective date.')
  if (input.baseCurrency !== 'ZWG') throw rateError('This template uses ZWG as the base currency.')
  if (!Array.isArray(input.rates) || input.rates.length < 1 || input.rates.length > 40) throw rateError('Enter between 1 and 40 currencies.')
  const seen = new Set()
  const rates = input.rates.map(row => {
    if (!row || typeof row.code !== 'string' || !/^[A-Z]{3}$/.test(row.code) || row.code === 'ZWG' || seen.has(row.code)) {
      throw rateError('Use unique three-letter currency codes, excluding ZWG.')
    }
    seen.add(row.code)
    if (typeof row.name !== 'string' || !row.name.trim() || row.name.length > 80 || /[\x00-\x1f<>]/.test(row.name)) throw rateError(`${row.code}: enter a currency name (maximum 80 characters).`)
    for (const key of ['buying', 'mid', 'selling']) {
      if (typeof row[key] !== 'number' || !Number.isFinite(row[key]) || row[key] <= 0 || row[key] > 1e9) throw rateError(`${row.code}: ${key} must be a positive number below 1 billion.`)
    }
    if (row.buying > row.mid || row.mid > row.selling) throw rateError(`${row.code}: buying must not exceed mid, and mid must not exceed selling.`)
    if (row.change !== null && (typeof row.change !== 'number' || !Number.isFinite(row.change) || Math.abs(row.change) > 1e6)) throw rateError(`${row.code}: enter a valid percentage change, or leave it blank.`)
    if (typeof row.indirect !== 'boolean') throw rateError(`${row.code}: select the quote type.`)
    return { code: row.code, name: row.name.trim(), buying: row.buying, mid: row.mid, selling: row.selling, change: row.change, indirect: row.indirect }
  })
  return { effectiveDate: date, baseCurrency: 'ZWG', rates }
}

export function createExchangeRateStore(database) {
  const collection = database.exchangeRates
  return {
    async current() {
      const doc = await collection.findOne({ _id: 'published' }, { projection: { _id: 0, current: 1 } })
      return doc?.current || null
    },
    async history() {
      const doc = await collection.findOne({ _id: 'published' }, { projection: { _id: 0, history: 1 } })
      return (doc?.history || []).slice().reverse()
    },
    async publish(input, actor) {
      const values = validateRates(input)
      if (!Number.isSafeInteger(input.expectedRevision) || input.expectedRevision < 0) throw rateError('Reload the published rates before publishing.')
      const current = { ...values, revision: input.expectedRevision + 1, publishedAt: new Date(), publishedBy: actor }
      try {
        // The current table and its audit snapshot change atomically, including the first publication.
        const result = await collection.updateOne({ _id: 'published', revision: input.expectedRevision }, {
          $set: { current, revision: current.revision },
          $push: { history: { $each: [current], $slice: -100 } },
        }, { upsert: input.expectedRevision === 0 })
        if (!result.matchedCount && !result.upsertedCount) throw rateError('Rates changed in another session. Reload and review before publishing.', 409)
        return current
      } catch (error) {
        if (error.code === 11000) throw rateError('Rates changed in another session. Reload and review before publishing.', 409)
        throw error
      }
    },
  }
}

export function publicRateTable(current) {
  if (!current) return null
  const { effectiveDate, baseCurrency, rates, publishedAt, revision } = current
  return { effectiveDate, baseCurrency, rates, publishedAt, revision, disclaimer: rateDisclaimer }
}

export function publicRatesHandler(store) {
  return async (req, res) => {
    res.set('Cache-Control', 'no-store')
    try {
      if (!store) throw new Error('Unavailable')
      res.json({ table: publicRateTable(await store.current()) })
    } catch { res.status(503).json({ error: 'Exchange rates are temporarily unavailable.' }) }
  }
}
