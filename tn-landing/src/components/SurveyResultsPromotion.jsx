import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './SurveyResultsPromotion.css'

const metrics = [
  {
    short: 'CSI',
    name: 'Customer Satisfaction Index',
    value: '79%',
    sector: '75%',
    position: '4 points ahead',
    tone: 'ahead',
    description: 'Customers rated their overall experience with our products, services and interactions above the sector benchmark.',
  },
  {
    short: 'NPS',
    name: 'Net Promoter Score',
    value: '+33',
    sector: '+42',
    position: '9 points behind',
    tone: 'focus',
    description: 'Customer advocacy is strong, with a clear opportunity to close the gap to the sector benchmark.',
  },
  {
    short: 'CES',
    name: 'Customer Effort Score',
    value: '4.33/5',
    sector: '3.5/5',
    position: '0.83 points ahead',
    tone: 'ahead',
    description: 'Customers rated the ease of banking with us ahead of the sector benchmark.',
  },
]

export default function SurveyResultsPromotion({ suspended = false }) {
  const dialog = useRef(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [open])

  function openResults() {
    dialog.current.showModal()
    setOpen(true)
  }

  function closeResults() {
    dialog.current.close()
    setOpen(false)
  }

  return (
    <section className="survey-promotion" aria-label="Q3 2026 customer survey results">
      {!open && !suspended && (
        <button className="survey-promotion-launcher" onClick={openResults} aria-haspopup="dialog" aria-controls="tn-survey-dialog">
          <span className="survey-launcher-score" aria-hidden="true">79<small>%</small></span>
          <span><small>Q3 CUSTOMER SURVEY</small>See what you told us</span>
          <span aria-hidden="true">↗</span>
        </button>
      )}

      <div className="survey-promotion-inner">
        <div className="survey-promotion-heading">
          <p className="survey-promotion-eyebrow">CUSTOMER EXPERIENCE · Q3 2026</p>
          <h2>Your feedback.<br /><span>Our way forward.</span></h2>
          <p>See how TN CyberTech Bank compares with the sector across satisfaction, advocacy and ease of banking.</p>
          <button type="button" onClick={openResults} aria-haspopup="dialog" aria-controls="tn-survey-dialog">
            Explore the results <span aria-hidden="true">↗</span>
          </button>
        </div>
        <div className="survey-promotion-scores" aria-label="Survey highlights">
          {metrics.map(metric => (
            <div key={metric.short} className={`survey-promotion-score survey-promotion-score-${metric.tone}`}>
              <span>{metric.short}</span>
              <strong>{metric.value}</strong>
              <small>{metric.position}</small>
            </div>
          ))}
        </div>
      </div>

      <dialog ref={dialog} id="tn-survey-dialog" className="survey-dialog" aria-labelledby="survey-results-heading" onClose={() => setOpen(false)}>
        <div className="survey-dialog-toolbar">
          <span>TN CYBERTECH BANK · Q3 2026</span>
          <button type="button" onClick={closeResults} autoFocus aria-label="Close customer survey results">Close <span aria-hidden="true">×</span></button>
        </div>

        <article className="survey-results">
          <header className="survey-results-hero">
            <p className="survey-results-kicker"><span /> CUSTOMER SATISFACTION &amp; LOYALTY</p>
            <h2 id="survey-results-heading">Your voice is shaping<br /><span>the way we bank.</span></h2>
            <p>We continuously seek feedback to understand your needs, improve our services and deliver banking experiences that are simple, reliable and rewarding.</p>
            <div className="survey-results-period"><span>INDEPENDENT SURVEY</span><strong>Q3 2026</strong></div>
          </header>

          <section className="survey-results-metrics" aria-labelledby="survey-metrics-heading">
            <div className="survey-section-heading">
              <p>THE RESULTS AT A GLANCE</p>
              <h3 id="survey-metrics-heading">Three measures. One customer experience.</h3>
            </div>
            <div className="survey-metric-grid">
              {metrics.map(metric => (
                <article key={metric.short} className={`survey-metric survey-metric-${metric.tone}`}>
                  <div className="survey-metric-top"><span>{metric.short}</span><small>{metric.position}</small></div>
                  <strong>{metric.value}</strong>
                  <p>{metric.name}</p>
                  <div className="survey-benchmark"><span>TN CyberTech Bank <b>{metric.value}</b></span><span>Sector <b>{metric.sector}</b></span></div>
                  <p className="survey-metric-description">{metric.description}</p>
                </article>
              ))}
            </div>
            <p className="survey-results-honesty"><strong>Our opportunity:</strong> Our NPS of +33 is nine points below the sector benchmark of +42. We are focused on turning more positive experiences into lasting customer advocacy.</p>
          </section>

          <section className="survey-results-explainer" aria-labelledby="survey-explainer-heading">
            <div className="survey-section-heading">
              <p>UNDERSTANDING THE MEASURES</p>
              <h3 id="survey-explainer-heading">What each score tells us</h3>
            </div>
            <div className="survey-explainer-grid">
              <article><span>01</span><h4>Customer satisfaction</h4><p>CSI measures how satisfied customers are with their overall experience of the Bank, including products, services and interactions.</p></article>
              <article><span>02</span><h4>Customer advocacy</h4><p>NPS measures the likelihood of customers recommending TN CyberTech Bank to family, friends and colleagues.</p></article>
              <article><span>03</span><h4>Ease of banking</h4><p>CES measures how easy customers find it to transact, access services or resolve issues when banking with us.</p></article>
            </div>
          </section>

          <section className="survey-results-commitment" aria-labelledby="survey-commitment-heading">
            <div>
              <p className="survey-results-kicker"><span /> OUR COMMITMENT TO YOU</p>
              <h3 id="survey-commitment-heading">We are listening.<br />And we are acting.</h3>
              <p>These results are encouraging, but they also show where we can do better. Your feedback will continue to guide our service improvements and customer experience priorities.</p>
            </div>
            <ul>
              <li><span>01</span>Enhance our digital banking platforms</li>
              <li><span>02</span>Strengthen service across every touchpoint</li>
              <li><span>03</span>Make everyday banking easier</li>
              <li><span>04</span>Build long-term trust and advocacy</li>
            </ul>
          </section>

          <footer className="survey-results-footer">
            <div><strong>Thank you for speaking up.</strong><p>Your feedback helps shape the future of our products, services and customer experience.</p></div>
            <Link to="/contact" onClick={closeResults}>Talk to our team <span aria-hidden="true">↗</span></Link>
          </footer>
        </article>
      </dialog>
    </section>
  )
}
