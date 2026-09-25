import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { investmentProducts, contactMethods, consentText } from '../shared/investment'
import '../components/PageStyles.css'
import './Invest.css'

const steps = [
  { title: 'Your details', description: 'Let’s get to know you.', hint: 'Enter your contact and identity details so our team can follow up.' },
  { title: 'Your interests', description: 'Find your next opportunity.', hint: 'Choose what you would like to explore and how we should contact you.' },
  { title: 'Review & submit', description: 'Make sure everything looks right.', hint: 'Check your details, then confirm your consent to send your enquiry.' },
]
const initialDetails = { firstName: '', lastName: '', phone: '', email: '', idType: '', idNumber: '', product: '', otherProduct: '', contactMethod: '', consent: false }

export default function Invest() {
  const [details, setDetails] = useState(initialDetails)
  const [step, setStep] = useState(0)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [reference, setReference] = useState('')
  const submission = useRef(null)
  const busy = useRef(false)
  const feedback = useRef(null)
  const heading = useRef(null)
  const sending = status === 'sending'

  function change(event) {
    const { name, value, checked, type } = event.target
    event.target.setCustomValidity('')
    setDetails(previous => ({ ...previous, [name]: type === 'checkbox' ? checked : value, ...(name !== 'consent' ? { consent: false } : {}) }))
    setError('')
  }

  function navigate(next) {
    if (busy.current) return
    setStep(next)
    setError('')
    requestAnimationFrame(() => {
      heading.current?.focus({ preventScroll: true })
      heading.current?.scrollIntoView({ block: 'start' })
    })
  }

  function validate(form) {
    for (const input of form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]')) {
      input.setCustomValidity(input.required && !input.value.trim() ? 'Please fill in this field.' : '')
      if (input.name === 'phone' && input.value.trim()) {
        const digits = input.value.replace(/\D/g, '').length
        if (!/^\+?[\d ()-]+$/.test(input.value.trim()) || digits < 7 || digits > 15) input.setCustomValidity('Enter a valid phone number with 7–15 digits, including your country code.')
      }
    }
    return form.reportValidity()
  }

  async function submit(event) {
    event.preventDefault()
    if (busy.current || !validate(event.currentTarget)) return
    if (step < 2) { navigate(step + 1); return }
    const values = { ...details, otherProduct: details.product === 'Other' ? details.otherProduct : '' }
    busy.current = true
    setStatus('sending')
    setError('')
    try {
      const signature = JSON.stringify(values)
      if (submission.current?.signature !== signature) submission.current = { signature, id: crypto.randomUUID() }
      values.requestId = submission.current.id
      const response = await fetch(`${(import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')}/api/investment-enquiries`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values), signal: AbortSignal.timeout(60000),
      })
      const data = await response.json().catch(() => ({}))
      if (!response.ok || data.success !== true) throw new Error(data.error || 'We could not confirm your submission. Please try again later or contact us.')
      setReference(data.reference)
      submission.current = null
      setDetails(initialDetails)
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setError(err.name === 'TimeoutError' ? 'Your request timed out. Please retry without changing your details; your submission reference prevents duplicates.' : err.message === 'Failed to fetch' ? 'Unable to connect. Please check your connection and try again.' : err.message)
    } finally {
      busy.current = false
      requestAnimationFrame(() => feedback.current?.focus())
    }
  }

  function textField(name, label, options = {}) {
    return <label>{label} <span aria-hidden="true">*</span><input type="text" name={name} value={details[name]} onChange={change} required {...options} /></label>
  }

  return (
    <div className="page-container invest-page">
      <Header />
      <main>
        <section className="invest-hero"><div className="container">
          <span className="invest-eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
          <h1>Discover your opportunity.<br /><em>Invest in Zimbabwe.</em></h1>
          <p>A few details. A world of possibilities. Start a conversation with TN.</p>
        </div></section>
        <nav className="breadcrumb" aria-label="Breadcrumb"><div className="container"><Link to="/">Home</Link><span className="separator">/</span><span aria-current="page" className="current">Invest in Zimbabwe</span></div></nav>
        <div className="container invest-layout">
          <aside className="invest-intro">
            <span className="invest-eyebrow">LET’S START A CONVERSATION</span>
            <h2>Your ambitions.<br />Our next conversation.</h2>
            <p>Tell us what you have in mind. We’ll help you explore the opportunities available through TN.</p>
            <ol className="invest-steps" aria-label="Enquiry steps">{steps.map((item, index) => <li key={item.title} className={status === 'success' || index < step ? 'complete' : index === step ? 'current' : ''} aria-current={index === step && status !== 'success' ? 'step' : undefined}>
              <span aria-hidden="true">{status === 'success' || index < step ? '✓' : `0${index + 1}`}</span><div><strong>{item.title}</strong><p>{item.description}</p></div>
            </li>)}</ol>
            <div className="invest-help"><strong>A personal approach, from the start.</strong><p>Our team will follow up using your preferred contact method.</p><Link to="/contact">Have a question? Contact TN <span aria-hidden="true">↗</span></Link></div>
          </aside>
          <section className="invest-card" aria-label="Investment enquiry">
            {status === 'success' ? <div className="invest-success" ref={feedback} tabIndex={-1} role="status">
              <span className="invest-success-icon" aria-hidden="true">✓</span><span className="invest-eyebrow">ENQUIRY RECEIVED</span>
              <h2>You’ve taken the first step.</h2><p>Your enquiry has been saved with TN. Our team will get in touch using your preferred contact method.</p>
              <p className="invest-reference">Your reference<br /><strong>{reference}</strong></p>
              <Link className="invest-submit" to="/">Back to home <span aria-hidden="true">→</span></Link>
            </div> : <>
              <div className="invest-progress-label"><span>REGISTER YOUR INTEREST</span><span aria-live="polite">Step {step + 1} of {steps.length}</span></div>
              <ol className="invest-progress" aria-label="Form progress">{steps.map((item, index) => <li key={item.title} className={index <= step ? 'active' : ''} aria-current={index === step ? 'step' : undefined}>
                <button type="button" disabled={index >= step || sending} onClick={() => navigate(index)} aria-label={`Return to ${item.title}`}><span aria-hidden="true">{index < step ? '✓' : index + 1}</span>{item.title}</button>
              </li>)}</ol>
              <div className="invest-form-heading"><h2 ref={heading} tabIndex={-1}>{steps[step].description}</h2><p>{steps[step].hint}</p></div>
              <form onSubmit={submit} noValidate aria-busy={sending}>
                <fieldset disabled={sending} className="invest-fields">
                  <legend className="invest-sr-only">{steps[step].title}</legend>
                  {step === 0 && <div className="invest-step-content">
                    <p className="invest-required">All fields are required.</p>
                    <div className="invest-grid">
                      {textField('firstName', 'First name', { autoComplete: 'given-name', maxLength: 100 })}
                      {textField('lastName', 'Last name', { autoComplete: 'family-name', maxLength: 100 })}
                      {textField('phone', 'Mobile phone number', { type: 'tel', autoComplete: 'tel', maxLength: 30, placeholder: '+263 77 123 4567', 'aria-describedby': 'phone-help' })}
                      {textField('email', 'Email address', { type: 'email', autoComplete: 'email', maxLength: 254, placeholder: 'you@example.com' })}
                    </div>
                    <p id="phone-help" className="invest-hint">Include your country code in your phone number.</p>
                    <div className="invest-identity"><h3>Identity details</h3><div className="invest-grid">
                      <label>Type of ID <span aria-hidden="true">*</span><select name="idType" value={details.idType} onChange={change} required><option value="" disabled>Select ID type</option><option value="ID">National ID</option><option value="Passport">Passport</option></select></label>
                      {textField('idNumber', details.idType === 'Passport' ? 'Passport number' : 'ID number', { maxLength: 60 })}
                    </div></div>
                  </div>}
                  {step === 1 && <div className="invest-step-content">
                    <fieldset className="invest-choice-group"><legend>Which opportunity interests you? *</legend><p className="invest-hint">Choose one to start the conversation.</p>
                      <div className="invest-options">{investmentProducts.map(item => { const [brand, title] = item.split(': '); return <label key={item} className="invest-option"><input type="radio" name="product" value={item} checked={details.product === item} onChange={change} required /><span>{title ? <><small>{brand}</small><strong>{title}</strong></> : <strong>Other opportunity</strong>}</span><span className="invest-option-arrow" aria-hidden="true">↗</span></label> })}</div>
                      {details.product === 'Other' && <div className="invest-other">{textField('otherProduct', 'What would you like to explore?', { maxLength: 300 })}</div>}
                    </fieldset>
                    <fieldset className="invest-choice-group invest-contact"><legend>How should we contact you? *</legend><div className="invest-contact-options">{contactMethods.map(method => <label key={method} className="invest-option"><input type="radio" name="contactMethod" value={method} checked={details.contactMethod === method} onChange={change} required /><span>{method}</span></label>)}</div></fieldset>
                  </div>}
                  {step === 2 && <div className="invest-step-content">
                    <div className="invest-review"><div className="invest-review-heading"><h3>Your details</h3><button type="button" onClick={() => navigate(0)}>Edit details</button></div><dl>
                      <div><dt>Full name</dt><dd>{details.firstName} {details.lastName}</dd></div><div><dt>Mobile number</dt><dd>{details.phone}</dd></div><div><dt>Email address</dt><dd>{details.email}</dd></div><div><dt>{details.idType === 'ID' ? 'National ID' : 'Passport'}</dt><dd>{details.idNumber}</dd></div>
                    </dl></div>
                    <div className="invest-review"><div className="invest-review-heading"><h3>Your interests</h3><button type="button" onClick={() => navigate(1)}>Edit interests</button></div><dl><div><dt>Investment opportunity</dt><dd>{details.product === 'Other' ? details.otherProduct : details.product}</dd></div><div><dt>Preferred contact</dt><dd>{details.contactMethod}</dd></div></dl></div>
                    <div className="invest-consent"><label><input type="checkbox" name="consent" checked={details.consent} onChange={change} required /><span>{consentText}</span></label><p>Read our <Link to="/privacy-statement" target="_blank" rel="noopener noreferrer">Privacy Statement (opens in a new tab)</Link>.</p></div>
                  </div>}
                </fieldset>
                {error && <p className="invest-error" ref={feedback} tabIndex={-1} role="alert">{error}</p>}
                <div className="invest-actions">{step > 0 && <button className="invest-back" type="button" disabled={sending} onClick={() => navigate(step - 1)}><span aria-hidden="true">←</span> Back</button>}<button className="invest-submit" type="submit" disabled={sending}>{sending ? 'Submitting…' : step === 2 ? 'Submit enquiry' : 'Continue'}<span aria-hidden="true">→</span></button></div>
                <p className="invest-note">{step === 2 ? 'Registering your interest does not commit you to an investment.' : 'Your details are only submitted when you finish the final step.'}</p>
              </form>
            </>}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
