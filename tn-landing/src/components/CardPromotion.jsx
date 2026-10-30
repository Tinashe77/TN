import { useEffect, useRef, useState } from 'react'
import CardShowcase from './CardShowcase'
import { cards } from './cardCollection'
import './CardPromotion.css'

export default function CardPromotion({ suspended = false }) {
  const dialog = useRef(null)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [interacting, setInteracting] = useState(false)
  const [hidden, setHidden] = useState(() => document.hidden)
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotion = () => setReducedMotion(media.matches)
    const updateVisibility = () => setHidden(document.hidden)
    media.addEventListener('change', updateMotion)
    document.addEventListener('visibilitychange', updateVisibility)
    return () => {
      media.removeEventListener('change', updateMotion)
      document.removeEventListener('visibilitychange', updateVisibility)
    }
  }, [])

  useEffect(() => {
    if (open || paused || interacting || hidden || reducedMotion || suspended) return
    const timer = setInterval(() => setActive(index => (index + 1) % cards.length), 6500)
    return () => clearInterval(timer)
  }, [open, paused, interacting, hidden, reducedMotion, suspended])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [open])

  function openCards() {
    dialog.current.showModal()
    setOpen(true)
  }

  function closeCards() {
    dialog.current.close()
    setOpen(false)
  }

  const card = cards[active]
  return (
    <section className="card-promotion" aria-label="Discover the TN card collection">
      {!open && !suspended && <button className="card-promotion-launcher" onClick={openCards} aria-haspopup="dialog" aria-controls="tn-card-dialog">
        <img src={cards[0].image} alt="" />
        <span><small>OUR NEW LOOK</small>Explore our cards</span>
        <span aria-hidden="true">↗</span>
      </button>}
      <div className="card-promotion-inner">
        <button className="card-promotion-preview" onClick={openCards} aria-label={`Explore ${card.name} and the TN card collection`} aria-haspopup="dialog" aria-controls="tn-card-dialog"
          onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)} onFocus={() => setInteracting(true)} onBlur={() => setInteracting(false)}>
          <img src={card.image} alt={card.name} loading="lazy" />
          <span>{card.name}<small>{String(active + 1).padStart(2, '0')} / 06</small></span>
        </button>
        <div className="card-promotion-copy">
          <p className="card-promotion-eyebrow">THE TN CARD COLLECTION</p>
          <h2>Familiar bank. Fresh new cards.</h2>
          <p>Discover the new look of our Visa and Zimswitch cards.</p>
          <button className="card-promotion-open" onClick={openCards} aria-haspopup="dialog" aria-controls="tn-card-dialog">Explore our cards <span aria-hidden="true">↗</span></button>
        </div>
        {!reducedMotion && <button className="card-promotion-pause" onClick={() => setPaused(value => !value)} aria-pressed={paused} aria-label={paused ? 'Start card preview rotation' : 'Pause card preview rotation'}>{paused ? 'Play' : 'Pause'} <span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span></button>}
      </div>

      <dialog ref={dialog} id="tn-card-dialog" className="card-dialog" aria-labelledby="card-showcase-heading" onClose={() => setOpen(false)}>
        <div className="card-dialog-toolbar"><span>TN CYBERTECH BANK</span><button type="button" onClick={closeCards} autoFocus aria-label="Close card collection">Close <span aria-hidden="true">×</span></button></div>
        <div className="card-dialog-content">{open && <CardShowcase initialIndex={active} onNavigate={closeCards} />}</div>
      </dialog>
    </section>
  )
}
