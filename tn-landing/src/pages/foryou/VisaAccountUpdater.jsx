import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import './VisaAccountUpdater.css'

const methods = [
  {
    id: 'cybercash',
    label: 'Cybercash App',
    eyebrow: '12 simple steps',
    title: 'Update subscriptions using the Cybercash App',
    description: 'Link your new VISA card in the app, opt in to VISA Account Updater, and keep recurring online subscriptions connected.',
    success: 'Your online subscriptions have been successfully updated to your new VISA card.',
    steps: [
      {
        title: 'Download the Cybercash App',
        description: 'Download the TN CyberTech Bank Cybercash app from Google Play or the Apple App Store.',
        icon: 'download',
      },
      {
        title: 'Create Account or Profile',
        description: 'Fill in your personal details to create an account or profile.',
        icon: 'profile',
      },
      {
        title: 'Tap the Cards Icon',
        description: "Tap the 'Cards' icon at the top of the page.",
        icon: 'card',
      },
      {
        title: 'Link Existing Card',
        description: "Go to 'Link Existing Card'.",
        icon: 'link',
      },
      {
        title: 'Select VISA Card',
        description: "Select 'VISA Card'.",
        icon: 'visa',
      },
      {
        title: 'Select OTP Confirmation',
        description: "Select 'OTP Confirmation'.",
        icon: 'lock',
      },
      {
        title: 'Enter Your Details',
        description: 'Enter your VISA card number, National ID, email address, new VISA card expiry month and expiry year.',
        icon: 'details',
      },
      {
        title: 'Receive OTP',
        description: 'An OTP will be sent to your registered mobile number or email address.',
        icon: 'mail',
      },
      {
        title: 'Card Linked Successfully',
        description: 'Your VISA card has been successfully linked to Cybercash.',
        icon: 'check',
      },
      {
        title: 'Go to VISA Account Updater',
        description: 'Go to the VISA Account Updater (VAU) tab.',
        icon: 'vau',
      },
      {
        title: 'Select "Opt In"',
        description: 'Select "Opt In".',
        icon: 'tap',
      },
      {
        title: 'Subscriptions Updated',
        description: 'Your existing online subscriptions will automatically be transferred from your old VISA card to your new VISA card.',
        icon: 'refresh',
      },
    ],
  },
  {
    id: 'internet-banking',
    label: 'Internet Banking',
    eyebrow: '10 simple steps',
    title: 'Update subscriptions using Internet Banking',
    description: 'Use TN CyberTech Bank Internet Banking to link your new VISA card and opt in to VISA Account Updater.',
    success: 'Your online subscriptions have been successfully updated to your new VISA card.',
    steps: [
      {
        title: 'Log In or Create an Online Banking Profile',
        description: 'Visit the TN CyberTech Bank Internet Banking portal to log in or create an Online Banking profile.',
        icon: 'globe',
      },
      {
        title: 'Link an Existing Card',
        description: "Select the 'Cards' tab, then choose 'Link Existing Card'.",
        icon: 'link',
      },
      {
        title: 'Select VISA Card',
        description: "Select 'VISA Card'.",
        icon: 'visa',
      },
      {
        title: 'Select OTP Confirmation',
        description: "Select 'OTP Confirmation'.",
        icon: 'lock',
      },
      {
        title: 'Fill Your Details',
        description: 'Fill the card number, new VISA card expiry year, expiry month, national ID and email address.',
        icon: 'details',
      },
      {
        title: 'Receive OTP',
        description: 'An OTP will be sent to your registered mobile number or email address.',
        icon: 'mail',
      },
      {
        title: 'Card Linked Successfully',
        description: 'Your VISA card has been successfully linked to Online Banking.',
        icon: 'check',
      },
      {
        title: 'Go to VISA Account Updater',
        description: 'Go to the VISA Account Updater (VAU) tab.',
        icon: 'vau',
      },
      {
        title: 'Select "Opt In"',
        description: 'Select "Opt In".',
        icon: 'tap',
      },
      {
        title: 'Subscriptions Updated',
        description: 'Your existing online subscriptions will automatically be transferred from your old VISA card to your new VISA card.',
        icon: 'refresh',
      },
    ],
  },
]

function StepIcon({ type }) {
  const commonProps = {
    viewBox: '0 0 64 64',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '4',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  const icons = {
    download: (
      <svg {...commonProps}>
        <path d="M32 10v28" />
        <path d="M20 27l12 12 12-12" />
        <path d="M14 46v8h36v-8" />
      </svg>
    ),
    profile: (
      <svg {...commonProps}>
        <circle cx="32" cy="22" r="10" />
        <path d="M14 54c2-11 10-17 18-17s16 6 18 17" />
      </svg>
    ),
    card: (
      <svg {...commonProps}>
        <rect x="12" y="18" width="40" height="28" rx="2" />
        <path d="M12 27h40" />
        <circle cx="42" cy="38" r="4" />
      </svg>
    ),
    globe: (
      <svg {...commonProps}>
        <circle cx="32" cy="32" r="22" />
        <path d="M10 32h44" />
        <path d="M32 10c7 7 10 14 10 22s-3 15-10 22" />
        <path d="M32 10c-7 7-10 14-10 22s3 15 10 22" />
      </svg>
    ),
    link: (
      <svg {...commonProps}>
        <path d="M27 39l-4 4a11 11 0 0 1-16-16l7-7a11 11 0 0 1 16 0" />
        <path d="M37 25l4-4a11 11 0 0 1 16 16l-7 7a11 11 0 0 1-16 0" />
        <path d="M24 32h16" />
      </svg>
    ),
    visa: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <text x="9" y="40" className="vau-step-visa-mark">VISA</text>
      </svg>
    ),
    lock: (
      <svg {...commonProps}>
        <rect x="16" y="27" width="32" height="25" rx="3" />
        <path d="M23 27v-7a9 9 0 0 1 18 0v7" />
        <path d="M32 38v5" />
      </svg>
    ),
    details: (
      <svg {...commonProps}>
        <rect x="12" y="14" width="40" height="34" rx="3" />
        <path d="M18 22h3" />
        <path d="M27 22h3" />
        <path d="M18 33h12" />
        <circle cx="25" cy="39" r="4" />
        <path d="M17 47c1.5-5 5-8 8-8s6.5 3 8 8" />
        <path d="M42 39l8 8" />
        <path d="M42 39l-1 11" />
        <path d="M42 39l11 1" />
      </svg>
    ),
    mail: (
      <svg {...commonProps}>
        <rect x="10" y="18" width="44" height="30" rx="2" />
        <path d="M12 21l20 17 20-17" />
      </svg>
    ),
    check: (
      <svg {...commonProps}>
        <path d="M16 33l11 11 22-25" />
      </svg>
    ),
    vau: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <text x="10" y="40" className="vau-step-vau-mark">VAU</text>
      </svg>
    ),
    tap: (
      <svg {...commonProps}>
        <path d="M31 13a7 7 0 0 1 7 7v18" />
        <path d="M31 39V20a7 7 0 0 0-14 0v18" />
        <path d="M17 38l-4-4a6 6 0 0 0-8 8l19 19h18c8 0 14-6 14-14V35a6 6 0 0 0-12 0" />
        <path d="M44 39v-5a6 6 0 0 0-12 0v5" />
      </svg>
    ),
    refresh: (
      <svg {...commonProps}>
        <path d="M50 24a20 20 0 0 0-34-8l-5 5" />
        <path d="M11 10v11h11" />
        <path d="M14 40a20 20 0 0 0 34 8l5-5" />
        <path d="M53 54V43H42" />
      </svg>
    ),
  }

  return icons[type]
}

function VisaAccountUpdater() {
  const [activeMethodId, setActiveMethodId] = useState(methods[0].id)
  const activeMethod = methods.find((method) => method.id === activeMethodId)

  return (
    <div className="page-container visa-account-updater-page">
      <Header />

      <section className="page-hero vau-page-hero" style={{ backgroundImage: "url('/banners/Visa card.jpg')" }}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>VISA Account Updater</h1>
          <p>Keep your online subscriptions connected to your new VISA card.</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-you">For You</Link>
          <span className="separator">/</span>
          <Link to="/for-you/cards">Cards</Link>
          <span className="separator">/</span>
          <Link to="/for-you/cards/visa">VISA Cards</Link>
          <span className="separator">/</span>
          <span className="current">VISA Account Updater</span>
        </div>
      </nav>

      <main>
        <section className="content-section white-section">
          <div className="container">
            <Link to="/for-you/cards/visa" className="back-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to VISA Cards
            </Link>

            <div className="vau-intro">
              <span className="section-label">Card Services</span>
              <h2>Update recurring card payments in a few guided steps</h2>
              <p>
                VISA Account Updater helps move eligible online subscriptions from an old VISA card to a new VISA card.
                Choose the channel you use, then follow the steps below to link your card and opt in.
              </p>
            </div>

            <div className="vau-method-switch" role="tablist" aria-label="VISA Account Updater channels">
              {methods.map((method) => (
                <button
                  key={method.id}
                  type="button"
                  className={`vau-method-button ${activeMethodId === method.id ? 'active' : ''}`}
                  onClick={() => setActiveMethodId(method.id)}
                  role="tab"
                  aria-selected={activeMethodId === method.id}
                >
                  <span>{method.label}</span>
                  <strong>{method.eyebrow}</strong>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section light-section vau-guide-section">
          <div className="container">
            <div className="section-header">
              <span className="section-label">How It Works</span>
              <h2>{activeMethod.title}</h2>
              <p>{activeMethod.description}</p>
            </div>

            <div className="vau-steps-grid">
              {activeMethod.steps.map((step, index) => (
                <article className="vau-step-card" key={`${activeMethod.id}-${step.title}`}>
                  <div className="vau-step-top">
                    <span className="vau-step-number">{index + 1}</span>
                    <div className="vau-step-icon">
                      <StepIcon type={step.icon} />
                    </div>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>

            <div className="vau-success-banner">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M24 5l15 6v11c0 10-6 17-15 21C15 39 9 32 9 22V11l15-6z" />
                <path d="M16 24l6 6 12-14" />
              </svg>
              <p>{activeMethod.success}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default VisaAccountUpdater
