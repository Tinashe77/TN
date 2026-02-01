import '../components/PageStyles.css'

function MaintenancePage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      padding: '2rem'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        {/* Logo */}
        <div style={{ marginBottom: '2rem' }}>
          <img
            src="/logo.png"
            alt="TN CyberTech Bank"
            style={{ height: '60px' }}
          />
        </div>

        {/* Icon */}
        <div style={{
          width: '100px',
          height: '100px',
          margin: '0 auto 2rem',
          background: 'linear-gradient(135deg, #d4a853, #c4972e)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" style={{ width: '50px', height: '50px' }}>
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>

        {/* Heading */}
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          color: '#ffffff',
          marginBottom: '1rem',
          fontWeight: '600'
        }}>
          Coming Soon
        </h1>

        {/* Subheading */}
        <p style={{
          fontSize: '1.25rem',
          color: 'rgba(255, 255, 255, 0.8)',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          We're building something amazing for you.
        </p>

        <p style={{
          color: 'rgba(255, 255, 255, 0.6)',
          lineHeight: '1.8',
          marginBottom: '3rem'
        }}>
          TN CyberTech Bank is working on a new digital experience.
          Our website will be live soon with all the information you need
          about our banking services.
        </p>

        {/* Contact Info */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '16px',
          padding: '2rem',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '1rem' }}>
            In the meantime, you can reach us at:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a
              href="mailto:customerservice@tncybertechbank.co.zw"
              style={{
                color: '#d4a853',
                textDecoration: 'none',
                fontSize: '1rem'
              }}
            >
              customerservice@tncybertechbank.co.zw
            </a>
            <a
              href="tel:08088888"
              style={{
                color: '#d4a853',
                textDecoration: 'none',
                fontSize: '1rem'
              }}
            >
              0808 8888
            </a>
          </div>
        </div>

        {/* Footer */}
        <p style={{
          marginTop: '3rem',
          color: 'rgba(255, 255, 255, 0.4)',
          fontSize: '0.875rem'
        }}>
          TN CyberTech Bank Limited - The Future of Banking
        </p>
      </div>
    </div>
  )
}

export default MaintenancePage
