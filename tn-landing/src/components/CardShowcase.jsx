import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './CardShowcase.css'

import { cards } from './cardCollection'

export default function CardShowcase({ suspended = false, initialIndex = 0, onNavigate }) {
  const [active, setActive] = useState(initialIndex)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [hidden, setHidden] = useState(() => document.hidden)
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const touchStart = useRef(null)
  const card = cards[active]
  const rotating = !paused && !hovered && !focused && !hidden && !reducedMotion && !suspended

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
    if (!rotating) return
    const timer = setTimeout(() => setActive(index => (index + 1) % cards.length), 6500)
    return () => clearTimeout(timer)
  }, [active, rotating])

  function select(index) {
    setActive((index + cards.length) % cards.length)
    setPaused(true)
  }

  return (
    <section className="card-showcase" aria-labelledby="card-showcase-heading" aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false) }}>
      <div className="card-showcase-heading">
        <p className="card-eyebrow"><span />THE TN CARD COLLECTION</p>
        <h2 id="card-showcase-heading">Our cards.<br /><span>A bold new look.</span></h2>
        <p className="card-showcase-intro">Get to know the new faces of TN CyberTech Bank.<br className="card-desktop-break" /> Discover our Visa and Zimswitch card collection.</p>
      </div>

      <div className={`card-stage card-theme-${card.theme}`}>
        <div className="card-stage-top"><span>{card.network}<span className="card-stage-divider">/</span>{card.category}</span><span className="card-count">{String(active + 1).padStart(2, '0')} <span>/ {String(cards.length).padStart(2, '0')}</span></span></div>
        <div className="card-artwork"
          onTouchStart={event => { touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY } }}
          onTouchEnd={event => {
            if (!touchStart.current) return
            const dx = event.changedTouches[0].clientX - touchStart.current.x
            const dy = event.changedTouches[0].clientY - touchStart.current.y
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) select(active + (dx < 0 ? 1 : -1))
            touchStart.current = null
          }} onTouchCancel={() => { touchStart.current = null }}>
          <div className="card-orbit" aria-hidden="true" />
          <img src={card.image} className="card-feature-image"
            alt={`${card.name} — new TN CyberTech Bank card design`}
            fetchPriority="high" decoding="async" draggable="false" />
        </div>
        <div className="card-stage-bottom">
          <div className="card-caption" aria-live={rotating ? 'off' : 'polite'} aria-atomic="true">
            <h3>{card.name}</h3><p>{card.description}</p>
          </div>
          <Link className="card-detail-link" to={card.link} onClick={onNavigate}>{card.linkLabel}<span aria-hidden="true">↗</span></Link>
        </div>
      </div>

      <div className="card-carousel-controls">
        <p>Find your TN card <span>· {active + 1} of {cards.length}</span></p>
        <div className="card-carousel-buttons">
          {!reducedMotion && <button type="button" className="card-rotation-toggle" onClick={() => setPaused(value => !value)} aria-pressed={paused} aria-label={paused ? 'Start automatic card rotation' : 'Pause automatic card rotation'}>{paused ? 'Play' : 'Pause'}<span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span></button>}
          <button type="button" onClick={() => select(active - 1)} aria-label="Previous card">←</button>
          <button type="button" onClick={() => select(active + 1)} aria-label="Next card">→</button>
        </div>
      </div>
      <div className="card-selector" role="group" aria-label="Choose a card">
        {cards.map((item, index) => <button type="button" key={item.name}
          className={`card-selector-item${active === index ? ' is-selected' : ''}`}
          aria-label={`Show ${item.name}`} aria-pressed={active === index} onClick={() => select(index)}>
          <img src={item.image} alt="" decoding="async" draggable="false" />
          <span>{item.shortName}</span><small>{item.network === 'VISA' ? 'Visa' : 'Zimswitch'}</small>
        </button>)}
      </div>
      <p className="card-showcase-note">Want to know which card is right for you? <Link to="/contact" onClick={onNavigate}>Talk to our team <span aria-hidden="true">↗</span></Link></p>
    </section>
  )
}
