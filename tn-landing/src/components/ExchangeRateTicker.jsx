import { useEffect, useRef, useState } from 'react'
import './ExchangeRateTicker.css'

const formatRate = value => Number(value).toLocaleString('en-GB', { minimumFractionDigits: 4, maximumFractionDigits: 4 })
const formatChange = value => value === null ? '—' : `${value > 0 ? '+' : ''}${value.toFixed(2)}%`
const displayDate = value => new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`))
const today = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'Africa/Harare', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date())

export default function ExchangeRateTicker() {
  const [table, setTable] = useState(null)
  const [status, setStatus] = useState('loading')
  const [paused, setPaused] = useState(false)
  const dialog = useRef(null)
  useEffect(() => {
    let active = true
    let timer
    let controller
    async function refresh() {
      controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 12000)
      try {
        const base = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')
        const response = await fetch(`${base}/api/exchange-rates`, { signal: controller.signal, cache: 'no-store' })
        if (!response.ok) throw new Error('Unavailable')
        const data = await response.json()
        if (active) { setTable(data.table); setStatus('ready') }
      } catch { if (active) setStatus('error') }
      finally { clearTimeout(timeout); if (active) timer = setTimeout(refresh, 60000) }
    }
    void refresh()
    return () => { active = false; clearTimeout(timer); controller?.abort() }
  }, [])
  const stale = table && table.effectiveDate < today()
  const label = status === 'error' ? 'Refresh unavailable' : stale ? 'Latest available' : 'Indicative rates'
  return <>
    <section className={`fx-ticker${paused ? ' fx-paused' : ''}`} aria-label="Indicative exchange rates">
      <div className="fx-label"><span className="fx-label-title"><span className="fx-dot" />Exchange rates</span><span className="fx-date">{table ? `${label} · ${displayDate(table.effectiveDate)}` : 'ZWG base currency'}</span></div>
      {table ? <>
        <div className="fx-window" aria-hidden="true"><div className="fx-track" key={table.revision}>
          {[0, 1].map(copy => <div className="fx-group" key={copy}>{table.rates.map(rate => <div className="fx-item" key={rate.code}>
            <strong>{rate.code}{rate.indirect ? '*' : ''}</strong>
            <span><small>BUY</small>{formatRate(rate.buying)}</span><span><small>MID</small>{formatRate(rate.mid)}</span><span><small>SELL</small>{formatRate(rate.selling)}</span>
            <span className={`fx-change ${rate.change > 0 ? 'fx-up' : rate.change < 0 ? 'fx-down' : ''}`}>{formatChange(rate.change)}</span>
          </div>)}</div>)}
        </div></div>
        <div className="fx-controls"><button type="button" className="fx-pause" aria-label={paused ? 'Resume exchange rate ticker' : 'Pause exchange rate ticker'} aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? '▶' : 'Ⅱ'}</button><button type="button" className="fx-view" onClick={() => dialog.current.showModal()}>All rates <span aria-hidden="true">↗</span></button></div>
      </> : <p className="fx-empty">{status === 'loading' ? 'Loading indicative rates…' : status === 'error' ? 'Rates temporarily unavailable. Please contact Treasury.' : 'Exchange rates will appear here once published.'}</p>}
    </section>
    <dialog ref={dialog} className="fx-dialog" aria-labelledby="fx-title">
      <div className="fx-dialog-header"><div><p className="fx-eyebrow">TN CYBERTECH BANK</p><h2 id="fx-title">Indicative exchange rates</h2></div><button type="button" onClick={() => dialog.current.close()} aria-label="Close exchange rates">✕</button></div>
      {table && <>
        <p className="fx-table-date">Effective {displayDate(table.effectiveDate)} <span>Base currency: {table.baseCurrency}</span></p>
        {stale && <p className="fx-notice">These are the latest available published rates, dated {displayDate(table.effectiveDate)}.</p>}
        {status === 'error' && <p className="fx-notice">We couldn’t refresh the rates. This is the last table loaded. Please confirm with Treasury.</p>}
        <div className="fx-table-scroll" tabIndex="0" role="region" aria-label="Exchange rate table"><table><caption className="fx-sr-only">Buying, mid and selling rates, with percentage change in mid rate</caption><thead><tr><th scope="col">Currency</th><th scope="col">Buying</th><th scope="col">Mid</th><th scope="col">Selling</th><th scope="col">Change (mid)</th></tr></thead><tbody>{table.rates.map(rate => <tr key={rate.code}><th scope="row"><strong>{rate.code}{rate.indirect ? '*' : ''}</strong><span>{rate.name}</span></th><td>{formatRate(rate.buying)}</td><td>{formatRate(rate.mid)}</td><td>{formatRate(rate.selling)}</td><td className={rate.change > 0 ? 'fx-up' : rate.change < 0 ? 'fx-down' : ''}>{formatChange(rate.change)}</td></tr>)}</tbody></table></div>
        <p className="fx-footnote">* Denotes indirect quotes. Quote conventions follow the Bank’s daily rate sheet.</p><p className="fx-footnote">{table.disclaimer}</p>
      </>}
    </dialog>
  </>
}
