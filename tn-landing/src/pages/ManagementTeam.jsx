import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../components/PageStyles.css'
import './BoardOfDirectors.css'

function ManagementTeam() {
  const [selectedPerson, setSelectedPerson] = useState(null)

  const management = [
    {
      name: 'Hazvinei Kapfunde',
      title: 'Chief Executive Officer',
      subtitle: '',
      image: '/management-pics/Hazvinei Kapfunde.png',
      bio: `Mr. Hazvinei Kapfunde is the Chief Executive Officer of TN CyberTech Bank, bringing over 27 years of experience in Zimbabwe's financial sector. Mr Kapfunde possesses deep expertise in treasury operations, domestic and international markets, business risk, and compliance. Renowned for his strategic vision and operational excellence, he now leads innovation and growth initiatives at TN CyberTech Bank, building on a solid track record of financial leadership.

He holds an MBA, BCom Risk (UNISA) and is an Associate of the Institute of Bankers of Zimbabwe (AIOBZ).`
    },
    {
      name: 'Nhlanhla Nyathi',
      title: 'Chief Operations Officer',
      subtitle: '',
      image: '/management-pics/Nhlanhla Nyathi.png',
      bio: `Mr Nyathi is an investment banking professional with over 17 years' experience in Asset Management, Corporate Finance and Banking at senior and executive level management. He has served as Chief Executive Officer of TN Asset Management Zimbabwe from 2010 to 2013 and Head of Corporate Finance for TN Financial Services and Cosmos Capital. Prior to assuming his current role as Chief Operations Officer at TN CyberTech Bank Limited, he was Group Senior Executive responsible for group strategy and business development for Lifestyle Holdings.

He holds a Bachelor of Commerce Honors Degree in Finance (NUST) and certificates in Leadership and Financial Management.`
    },
    {
      name: 'Trevor Ramanzi',
      title: 'Chief Finance Officer',
      subtitle: '',
      image: '/management-pics/Trevor Ramanzi.png',
      bio: `Mr. Ramanzi is the Chief Financial Officer of TN CyberTech Bank Limited, bringing extensive experience in financial leadership within Zimbabwe's banking and investment sectors. Prior to his current role, he served as Group Financial Controller at Masawara, where he worked closely with investee companies across diverse industries, strengthening financial reporting, governance, and compliance frameworks.

As a seasoned Chartered Accountant, Mr. Ramanzi possesses deep expertise in financial reporting, regulatory compliance, risk management and strategic financial planning. He is a member of both the ICAZ and SAICA.`
    },
    {
      name: 'Fungai Ndigwirei',
      title: 'Chief Human Resources Officer',
      subtitle: '',
      image: '/management-pics/Fungai Ndigwirei.png',
      bio: `Mrs Ndigwirei is the Chief Human Resources Officer for TN CyberTech Bank. Before this role, she served as the Group Human Resources Manager for the TN Group covering TN Financial Services, TN Gold Arcturus & Optimist Mines, TN Livestock Trust, TN Asset Management, and TN Harlequin Luxaire Limited. She is a seasoned HR Executive with 15+ years of progressive leadership across financial services with proven ability to align people strategy with business transformation. Skilled in navigating complex labour relations, driving compliance with labour law, and leading organisational culture change.

She holds a Bachelor of Science Degree in Human Resource Management from Midlands State University and is currently studying for a master's degree with the same institution.`
    },
    {
      name: 'Patricia Chizengeya',
      title: 'Chief Channels & Agency Officer',
      subtitle: '',
      image: '/management-pics/Patricia Chizengeya.png',
      bio: `Patricia Chizengeya is a results-driven, innovative, and people-centred banking executive with a strong reputation for execution excellence and transformational leadership. She is recognized for building new business units, driving financial inclusion, and translating strategy into practical, customer-focused solutions delivered on time and at scale. She has served through the transformation of TN Bank, Steward Bank, and now TN CyberTech Bank. Patricia is widely regarded as a strategic executor, innovator, and trusted leader in banking transformation and financial inclusion.

She holds a Master of Business Administration and advanced qualifications in agriculture, enhancing her expertise in agribusiness banking and community-level economic empowerment.`
    },
    {
      name: 'Ruth Takawira',
      title: 'Chief Proprietary Channels Officer',
      subtitle: '',
      image: '/management-pics/Ruth Takawira.png',
      bio: `Mrs Ruth Takawira is a fully qualified, tested, and proven Banking professional 35+ years of broad and deep working experience in Retail Banking, Operations, and International Banking. She accrued skills in Strategic Management, Problem Solving, Conflict Resolution, Client Acquisition, Customer Experience, Customer Satisfaction, Operational Efficiency, and Compliance.

She holds an Executive Diploma in Credit and Risk Management University of Zimbabwe, a Bachelor of Business Administration from IMM Graduate School SA, Master's in Business Administration from Nottingham Trent University (UK).`
    },
    {
      name: 'Merry Phiri',
      title: 'Chief Digital Banking Officer',
      subtitle: '',
      image: '/management-pics/Merry Phiri.png',
      bio: `Ms. Merry Phiri is the Chief Digital Banking Officer, leading the bank's digital strategy, revenue growth and hyper-integration initiatives. She oversees the full digital product lifecycle, delivering inclusive, data-driven innovation that advances financial inclusion. A seasoned digital banking and financial technology leader.

She holds a Master's in Strategy & Innovation and multiple leadership certifications. She also serves as President and Board Member of the Rotary Club of Harare CBD, reflecting her principled, community-focused leadership.`
    },
    {
      name: 'Forget Toruvanda',
      title: 'Chief Technology Officer',
      subtitle: '',
      image: '/management-pics/Forget Toruvanda.png',
      bio: `Forget Toruvanda is the Chief Technology Officer at TN CyberTech Bank, with over 15 years of experience spanning banking, fintech, telecommunications, and retail. He excels in core banking systems, cloud migration, enterprise architecture, and cybersecurity. Known for driving innovation and building resilient, customer-focused solutions, Forget leads a dynamic IT team advancing the bank's technology vision.

He holds an MBA, a Bachelor's in Business Studies and Computing Science, and is a Certified Data Protection Officer (DPO) with multiple industry certifications.`
    },
    {
      name: 'Canny Mlambo',
      title: 'Head: Corporate Banking',
      subtitle: '',
      image: '/management-pics/Canny Mlambo.png',
      bio: `Mr. Canny Mlambo is the Head of Corporate Banking of TN CyberTech Bank Limited, with over two decades of experience in Zimbabwe's financial services sector. He provides leadership in broad bank management and corporate banking and has advised the Board on governance and regulatory compliance.

He is a registered legal practitioner, conveyancer, and notary public, and an Associate of the Institute of Bankers of Zimbabwe, and has effectively coordinated Board and Committee meetings to support sound decision-making.`
    },
    {
      name: 'David Mapangela',
      title: 'Head: Credit',
      subtitle: '',
      image: '/management-pics/David Mapangela.png',
      bio: `David Mapangela, Head of Credit at TN Cybertech Bank, brings 30+ years of banking leadership experience across credit, risk, and operations in local and international markets. He builds resilient portfolios and robust risk governance.

Credentials include a degree in Economics, certificates in Risk Management, Institute of Enterprise Risk Practitioners (Malaysia), and advanced credit-risk certifications.`
    },
    {
      name: 'Vimbai Chinyadza',
      title: 'Head: Internal Audit',
      subtitle: '',
      image: '/management-pics/Vimbai Chinyadza.png',
      bio: `Vimbai Chinyadza is Head of Internal Audit at TN CyberTech Bank, where she leads the Internal Audit function. With over a decade of expertise in internal audit, enterprise risk management, and ESG integration across the banking and public sectors, she is recognised for strengthening corporate governance frameworks and advising executive committees.

A Certified Internal Auditor (CIA) and Certified Enterprise Risk Manager (CERM), Vimbai also serves as a board member, inspiring excellence in leadership.`
    },
    {
      name: 'Musiwa Chirimuuta',
      title: 'Head: International Banking & Exchange Control',
      subtitle: '',
      image: '/management-pics/Musiwa Chirimuuta.png',
      bio: `Mr. Chirimuuta is Head of International Banking & Exchange Control. He brings over 27 years of experience in Zimbabwe's financial sector. He previously worked at AfrAsia Bank Zimbabwe Limited and also Zimbabwe Bank Corporation Limited.

He holds a Bachelor Commerce Honours degree in Economics from Midlands State University, a Diploma in Banking from the Institute of Bankers in Zimbabwe and an Advance Diploma in Treasury Management and Trade Finance from the Institute of Bankers in South Africa. He holds several Intermediate and Advanced Certificates in Trade Finance from International Finance Corporation and the African Export and Import Bank.`
    },
    {
      name: 'Steven Wadi',
      title: 'Head: Bank Operations',
      subtitle: '',
      image: '/management-pics/Steven Wadi.png',
      bio: `Steve Wadi is a seasoned career banker with over 30 years of banking experience covering banking operations, retail, credit, digital banking, ICT Operations, and International Banking. Expert knowledge in process formulation and optimisation, operational risk management, service quality, internal controls, banking systems, automations, and operational resilience. Proven track record in operational excellence, coaching teams, automation and innovation, stakeholder management, and compliance.

He Holds MCom Business Administration, BCompt degrees, and multiple Diplomas in Computing, Banking, Accounting, and Management Services.`
    },
    {
      name: 'Nyasha Fiosi',
      title: 'Head: Security & Governance',
      subtitle: '',
      image: '/management-pics/Nyasha Fiosi.png',
      bio: `An experienced IT executive with more than 20 years experience in the Financial services industry. Possess skills in IT Management, cybersecurity management, governance, quality assurance, compliance, strategic management and digital banking. He possesses excellent communication and collaboration skills needed to work in diverse groups.

Holds various certifications and qualifications in management, information security, business continuity and technology service management. He holds a BTech (Hons) Information Technology, an MSc in Information Systems and a Masters in Leadership and Management.`
    },
    {
      name: 'Ronald Nyawera',
      title: 'Head: Treasury',
      subtitle: '',
      image: '/management-pics/Ronald Nyawera.png',
      bio: `Mr. Nyawera is the Head of Treasury, bringing over 18 years of progressive experience in banking, investments, trading, research, analysis, and structured finance. He has previously worked for African Century and Barclays Bank Zimbabwe. Ronald combines technical expertise with strong leadership and advisory skills.

He holds an MSc and BSc in Economics from the University of Zimbabwe, an MSc in Banking and Financial Services from the National University of Science and Technology, and certificates in Project Planning and Management, Portfolio Management, Bonds and Swaps, Money and Capital Markets, and FX Technical Analysis and Trading.`
    },
    {
      name: 'Fungai Kambarami',
      title: 'Acting: Head of Risk',
      subtitle: '',
      image: '/management-pics/Fungai Kambarami.png',
      bio: `Mr Kambarami is the Acting Head of Risk, with 15 years of experience developing and implementing risk management frameworks, policies, procedures, and training programs. He has a proven track record in business continuity management, identifying and evaluating potential risks, implementing risk management strategies, and improving stakeholder satisfaction. He previously worked for Nedbank Zimbabwe.

He Holds a Bachelor of Commerce Honours Degree in Banking and a Master's of Business Degree in Banking and Finance from NUST. He also holds a certificate in the Senior Management Development Program from Stellenbosch University.`
    },
    {
      name: 'Chiedza Shana',
      title: 'Acting Company Secretary',
      subtitle: '',
      image: '/management-pics/Chiedza Shana.png',
      bio: `Chiedza Shana is a legal and corporate governance professional with over a decade of experience spanning private legal practice and senior in-house counsel roles across diverse sectors. She currently serves as the Acting Company Secretary. Chiedza provides strategic legal advisory, manages regulatory risk, negotiating complex contracts, and aligns corporate operations with evolving legal frameworks.

Chiedza holds a Bachelor of Laws (LLB) and a Master of Laws (LLM) in Commercial Law from the University of Zimbabwe. She is also an alumna of the Executive Women in Leadership (EWiL) Programme from the University of Cape Town Graduate School of Business.`
    },
  ]

  const closeModal = () => setSelectedPerson(null)

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Management Team</h1>
          <p>The Future of Banking</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/about">About Us</Link>
          <span className="separator">/</span>
          <span className="current">Management Team</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <span className="section-label">Leadership</span>
            <h2>Executive Management Team</h2>
            <p style={{ color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
              Backed by deep expertise in digital innovation and scalable systems, the team is mandated to drive long-term value through secure, efficient, and integrated financial solutions at scale.
            </p>
          </div>

          <div className="directors-grid">
            {management.map((person) => (
              <div
                key={person.name}
                className="director-card"
                onClick={() => setSelectedPerson(person)}
              >
                <div className="director-image">
                  <img src={person.image} alt={person.name} />
                </div>
                <div className="director-info">
                  <h3>{person.name}</h3>
                  <p className="director-title">{person.title}</p>
                  {person.subtitle && <p className="director-subtitle">{person.subtitle}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section light-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <Link to="/board-of-directors" className="cta-btn cta-btn-primary">
            View Board of Directors
          </Link>
        </div>
      </section>

      {/* Modal */}
      {selectedPerson && (
        <div className="director-modal-overlay" onClick={closeModal}>
          <div className="director-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className="modal-content">
              <div className="modal-image">
                <img src={selectedPerson.image} alt={selectedPerson.name} />
              </div>
              <div className="modal-info">
                <h2>{selectedPerson.name}</h2>
                <p className="modal-title">{selectedPerson.title}</p>
                {selectedPerson.subtitle && <p className="modal-subtitle">{selectedPerson.subtitle}</p>}
                <div className="modal-bio">
                  {selectedPerson.bio.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default ManagementTeam
