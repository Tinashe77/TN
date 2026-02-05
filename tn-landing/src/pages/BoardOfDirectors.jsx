import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../components/PageStyles.css'
import './BoardOfDirectors.css'

function BoardOfDirectors() {
  const [selectedPerson, setSelectedPerson] = useState(null)

  const groupBoard = [
    {
      name: 'Dr Rev. Titus Murefu',
      title: 'Group Chairman',
      subtitle: '(Independent)',
      image: '/management-pics/Dr-Rev-Titus-Murefu.png',
      bio: `Dr Titus Murufu is a distinguished scholar, renowned university lecturer, and dedicated servant-leader with over 40 years of impactful service in theological education, leadership, and governance. His career has been marked by academic excellence, spiritual growth, and the development of leaders in Zimbabwe and beyond. He has played a vital role in advancing theological education, mentoring leaders, and promoting ethical leadership across communities. His contributions have strengthened institutions and empowered individuals to achieve their full potential.

Dr Murufu holds a rich scholarship from the University of South Africa (UNISA), a Master of Arts in Leadership from Asbury Theological Seminary, and various advanced certifications. He was awarded an Honorary Doctorate from Zion Bible Institute and has completed leadership programs from institutions including Harvard University and Gordon Conwell Theological Seminary.`
    },
    {
      name: 'Mr Dominic Musengi',
      title: 'Deputy Group Chairman',
      subtitle: 'Non-Executive Director (Independent)',
      image: '/management-pics/Mr-Dominic-Musengi.png',
      bio: `Mr Dominic Musengi is a highly experienced Registered Legal Practitioner, whose legal career began in 1991, spanning both private practice and corporate law. With decades of professional service, he has demonstrated expertise across multiple domains, including commercial law, corporate governance, financial services, human resources, and general management. He currently serves as Senior Partner at Musengi & Sagas Legal Practitioners, specializing in litigation, corporate law, banking and finance, labour relations, and governance. His leadership has influenced policy development and institutional strengthening across multiple sectors.

His academic qualifications include an LLB from the University of Zimbabwe and a Diploma in Personnel Management.`
    },
    {
      name: 'Mr Tawanda Nyambirai',
      title: 'Group Chief Executive Officer',
      subtitle: '',
      image: '/management-pics/Mr-Tawanda-Nyambirai.png',
      bio: `Tawanda Nyambirai is a distinguished business leader with outstanding skills in corporate governance and strategic leadership. As a founder and entrepreneur, he has built and managed successful businesses across multiple sectors, including telecommunications, financial services, and agriculture.

He holds a Bachelor of Laws Honours and a Certificate in Conflict Resolution from the University of Zimbabwe. Tawanda is a qualified legal practitioner and a member of the Law Society of Zimbabwe. His leadership roles have included serving as Group Chief Executive Officer of Econet Wireless Zimbabwe and TN Holdings Limited, where he spearheaded transformative initiatives that reshaped the business landscape.

Tawanda has gone on to establish TN Holdings, a diversified group with interests in banking, insurance, retail, and agriculture. His vision and strategic acumen have positioned TN Holdings as a leading player in Zimbabwe's economy.

His accolades include:
1. Zimbabwe's Most Influential Business Leader Award – Zimbabwe Business Awards
2. Zimbabwe's Most Admired Business Leader Award – Zimbabwe Business Awards
3. Zimbabwe CEO Network Best CEO of the Year Award
4. Zimbabwe CEO Network Outstanding Banking & Exploitation Platform Winner 2023`
    },
    {
      name: 'Mr Roy Chimanikire',
      title: 'Non-Executive Director',
      subtitle: '',
      image: '/management-pics/Mr-Roy-Chimanikire.png',
      bio: `Mr Roy Chimanikire is the Deputy Chief Executive Officer of Econet Wireless Zimbabwe Limited, a position he has held since 2016. He joined Econet in 2009 as a Finance Director and later served as a Partner, bringing with him a wealth of experience in finance, auditing, and corporate governance.

He is a Council Member of the Institute of Chartered Accountants of Zimbabwe and has served on numerous boards and committees, contributing to the development of sound financial and governance practices.

He holds a Bachelor of Accounting Science from the University of South Africa and is a Chartered Accountant with the Institute of Accounting from ICAZ. He is also a registered Public Accountant.`
    },
    {
      name: 'Mr Evaristo Mudhikwa',
      title: 'Non-Executive Director',
      subtitle: '(Independent)',
      image: '/management-pics/Mr-Evaristo-Mudhikwa.png',
      bio: `Mr Evaristo Mudhikwa is the Managing Director and owner of Generation Bricks, a prominent enterprise in Zimbabwe's brick manufacturing sector. As a seasoned entrepreneur, he brings strong expertise in operations management, customer engagement, and business development. His strong commitment to excellence has helped the company navigate challenging market dynamics and drive sustained business growth.

Beyond his business ventures, Mr. Mudhikwa is deeply involved in community initiatives. He serves as the Chairman of Sport 4 Joy, a non-profit organization that promotes youth development through sports. His leadership extends to various boards and committees, where he contributes to shaping policies and strategies that foster economic empowerment and social progress.`
    },
    {
      name: 'Mr Morgen Mufowo',
      title: 'Non-Executive Director',
      subtitle: '',
      image: '/management-pics/Mr-Morgen-Mufowo.png',
      bio: `Mr Morgen Mufowo is an agriculture start-up consultant, a position he has held since August 2021. He brings a unique blend of practical farming experience and strategic insight into agricultural innovation and commercialization. His understanding of modern technologies and market trends has been instrumental in helping agribusinesses scale operations and access international markets.

In addition to his consulting work, Mr. Mufowo is a member of the Zimbabwe Economic Society, where he actively contributes to discussions on economic development and policy formulation.

He holds an MBA with a focus on Arts, Science, and Business from Africa Leadership Business Academy, hosted by the University of Zimbabwe.`
    },
    {
      name: 'Ms Elizabeth Tanyaradzwa Masiyiwa',
      title: 'Non-Executive Director',
      subtitle: '',
      image: '/management-pics/Ms-Elizabeth-Tanyaradzwa-Masiyiwa.png',
      bio: `Ms Elizabeth Tanyaradzwa Masiyiwa is an accomplished social entrepreneur and philanthropist. She serves as Executive Director of Delta Philanthropies and Social Impact Director at Econet Wireless Zimbabwe. Her work focuses on education, health, and youth empowerment initiatives across Africa.

Ms Masiyiwa is the founder and Director of Star Leadership Academy in Harare, a leadership development institution that equips young Africans with skills to thrive in a rapidly changing world. She also sits on several boards, including Higherlife Foundation and UNICEF's Generation Unlimited Board. Previously, she worked as Lead Analyst for Delta Philanthropies, where she oversaw strategic planning and program implementation for various social impact projects.

Her academic background includes a Master's in Social Innovation and Entrepreneurship from the London School of Economics, UK; a Bachelor of Science in Banking and International Finance from Cass Business School, London, UK; and a Diploma in Global Business from Royal Holloway, University of London, UK.`
    },
    {
      name: 'Mr Rugare Chidembo',
      title: 'Non-Executive Director',
      subtitle: '',
      image: '/management-pics/Mr-Rugare-Chidembo.png',
      bio: `Mr Rugare Chidembo is the Founder and Director of Naru Holdings (Pvt) Ltd, a family-owned business involved in property investments, consultancy, and trade. With a career spanning several decades, he has built a strong portfolio across the real estate and financial sectors.

He has held senior executive roles in several organizations, including serving as Chief Operating Officer for Econet Wireless International, Managing Director of Econet Media, and Head of Finance and Administration at Econet Wireless International. He also has extensive experience in cross-border investments and trade across Africa.

Mr Chidembo's extensive experience spans corporate finance, strategic planning, and operational management. He holds a Master of Business Administration (MBA) and a Bachelor of Accountancy Degree, both from the University of Zimbabwe.`
    },
    {
      name: 'Mrs Nadine Gabi Levy',
      title: 'Non-Executive Director',
      subtitle: '(Independent)',
      image: '/management-pics/Mrs-Nadine-Gabi-Levy.png',
      bio: `Mrs Nadine Gabi Levy is an accomplished Consultant with a focus on strategic planning, business development, and operations. She brings more than 15 years of experience in the financial services sector, including roles in banking and asset management. She previously worked as a Structured Finance Specialist at ABSA Bank, where she was responsible for managing large-scale projects and transactions. Her expertise lies in risk analysis, financial modeling, and regulatory compliance.

Mrs Levy holds both an LLB and a BCom degree from the University of Cape Town. She is also a qualified Legal Practitioner and a certified Financial Analyst with accreditation from the Financial Services Board of South Africa.`
    },
    {
      name: 'Mr Godknows Mudzingwa',
      title: 'Executive Director',
      subtitle: '',
      image: '/management-pics/Mr-Godknows-Mudzingwa.png',
      bio: `Mr Godknows Mudzingwa is an accomplished professional in the banking and financial services sector, with a strong background in corporate strategy and operations. He has held senior roles in several organizations, where he was responsible for driving growth, managing risk, and implementing innovative solutions.

His expertise spans strategic planning, business development, and financial analysis. He has successfully led initiatives that improved operational efficiency and enhanced shareholder value.

In addition to serving as a Director, Mr Mudzingwa is a member of various professional boards and committees, including the Association of Group Treasurers and Chartered Strategy Institute. He brings a wealth of experience in managing complex projects and aligning business strategies across key business units.

He holds a Master of Business Administration (MBA) from the University of Zimbabwe Graduate School of Management, and a Bachelor of Business Studies Honours Degree in Finance and Banking from the University of Zimbabwe.`
    },
  ]

  const bankBoard = [
    {
      name: 'Mr James Andrew Kurasha-Mushore',
      title: 'Bank Chairman',
      subtitle: '(Independent)',
      image: '/management-pics/Mr-James-Andrew-Kurasha-Mushore.png',
      bio: `Mr James Mushore is a seasoned Financial and Management Consultant, offering strategic guidance to organizations. With over 30 years of experience in the financial services sector, he has played a significant role in shaping Zimbabwe's banking landscape.

He was instrumental in the establishment of the National Merchant Bank of Zimbabwe in 1990—the country's first wholly Zimbabwean-owned merchant bank—and later went on to serve as Group Chief Executive Officer of NMBZ Holdings Limited. He also led the successful dual listing of NMB on both the Zimbabwe Stock Exchange and London Stock Exchange.

Mr Mushore has held several key public and professional leadership positions, including as a Director of the Zimbabwe Revenue Authority, Chairman of the Zimbabwe Investment Authority, and President of the Institute of Chartered Accountants of Zimbabwe (ICAZ).

He is a Chartered Accountant and holds a Bachelor of Science in Accounting from South Africa.`
    },
    {
      name: 'Mr Tawanda Nyambirai',
      title: 'Group Chief Executive Officer',
      subtitle: '',
      image: '/management-pics/Mr-Tawanda-Nyambirai.png',
      bio: `Tawanda Nyambirai is a distinguished business leader with outstanding skills in corporate governance and strategic leadership. As a founder and entrepreneur, he has built and managed successful businesses across multiple sectors, including telecommunications, financial services, and agriculture.

He holds a Bachelor of Laws Honours and a Certificate in Conflict Resolution from the University of Zimbabwe. Tawanda is a qualified legal practitioner and a member of the Law Society of Zimbabwe. His leadership roles have included serving as Group Chief Executive Officer of Econet Wireless Zimbabwe and TN Holdings Limited, where he spearheaded transformative initiatives that reshaped the business landscape.

Tawanda has gone on to establish TN Holdings, a diversified group with interests in banking, insurance, retail, and agriculture. His vision and strategic acumen have positioned TN Holdings as a leading player in Zimbabwe's economy.

His accolades include:
1. Zimbabwe's Most Influential Business Leader Award – Zimbabwe Business Awards
2. Zimbabwe's Most Admired Business Leader Award – Zimbabwe Business Awards
3. Zimbabwe CEO Network Best CEO of the Year Award
4. Zimbabwe CEO Network Outstanding Banking & Exploitation Platform Winner 2023`
    },
    {
      name: 'Mr Roy Chimanikire',
      title: 'Non-Executive Director',
      subtitle: '',
      image: '/management-pics/Mr-Roy-Chimanikire.png',
      bio: `Mr Roy Chimanikire is the Deputy Chief Executive Officer of Econet Wireless Zimbabwe Limited, a position he has held since 2016. He joined Econet in 2009 as a Finance Director and later served as a Partner, bringing with him a wealth of experience in finance, auditing, and corporate governance.

He is a Council Member of the Institute of Chartered Accountants of Zimbabwe and has served on numerous boards and committees, contributing to the development of sound financial and governance practices.

He holds a Bachelor of Accounting Science from the University of South Africa and is a Chartered Accountant with the Institute of Accounting from ICAZ. He is also a registered Public Accountant.`
    },
    {
      name: 'Mr Zvichapera Katiyo',
      title: 'Non-Executive Director',
      subtitle: '',
      image: '/management-pics/Mr-Zvichapera-Katiyo.png',
      bio: `Mr Zvichapera Katiyo is the Group Chief Executive Officer of Delta Philanthropies and the Higher Life Foundation. With over 20 years of experience, he brings expertise in impact investing, banking, financial services, corporate strategy, rural development, and social impact initiatives.

Under his leadership, both organizations have made significant strides in advancing impactful development programs across multiple sectors in Zimbabwe and beyond.

His academic qualifications include a Master of Science in Banking and Financial Services from the National University of Science and Technology (NUST) and a Bachelor of Business Studies in Economics from the University of Zimbabwe.`
    },
    {
      name: 'Mr David Alexander Rhodes',
      title: 'Non-Executive Director',
      subtitle: '(Independent)',
      image: '/management-pics/Mr-David-Alexander-Rhodes.png',
      bio: `Mr David Alexander Rhodes is a seasoned agricultural professional with over 40 years of experience in Zimbabwe's agricultural and farming sectors. He has served in numerous leadership roles, managing both commercial and small-scale farms.

He has contributed significantly to the development of Zimbabwe's agricultural sector, ensuring the delivery of premium quality produce and enhancing food security.

In addition to his role as International Director for Africa, Mr Rhodes has served on various boards and committees, where he has driven strategic initiatives to improve farming practices and sustainability.

He holds a Bachelor of Science Degree in Agriculture from the University of Zimbabwe.`
    },
    {
      name: 'Mr George Agu',
      title: 'Non-Executive Director',
      subtitle: '(Independent)',
      image: '/management-pics/Mr-George-Agu.png',
      bio: `Mr George Agu is the Founder and Chief Executive Officer of Fintech Solutions International, a Pan-African organization with operations in multiple countries. He brings over 25 years of experience in financial services and technology, having held senior leadership roles in global firms.

Mr Agu is a seasoned executive and has deep expertise in financial services, technology, and risk management. He has successfully led initiatives that improved operational efficiency and enhanced shareholder value.

He holds a Bachelor of Science Degree in Computer Science and is a Certified Information Security Manager (CISM), accredited by ISACA.`
    },
    {
      name: 'Mr Hazvinei Kapfunde',
      title: 'Executive Director',
      subtitle: '',
      image: '/management-pics/Mr-Hazvinei-Kapfunde.png',
      bio: `Mr Hazvinei Kapfunde is the Chief Executive Officer of TN CyberTech Bank, bringing over 22 years of experience in Zimbabwe's financial services sector. His current role as Executive Director for TN Asset Management (Pvt) Ltd has played a pivotal role in enhancing operational efficiencies and expanding the group's footprint within the agricultural and manufacturing sectors.

As a visionary leader, Mr Kapfunde provides strategic direction for the group's domestic and international markets, focusing on optimizing performance and driving sustainable growth. His expertise spans risk management, financial planning, and corporate governance.

He holds an MBA from ESAMI-Maastricht, a Bachelor of Commerce in Risk Management and Insurance from the University of South Africa, and an Institute of Bankers of Zimbabwe qualification. He also holds an International Certificate in Financial Markets.`
    },
    {
      name: 'Mrs Eddright Mujaya',
      title: 'Non-Executive Director',
      subtitle: '',
      image: '/management-pics/Mrs-Eddright-Mujaya.png',
      bio: `Mrs Eddright Mujaya is a distinguished accountant and financial leader with over 25 years of experience in finance, administration, audit, and company secretarial services. She has served on several boards and committees, advising on governance, risk, and compliance issues across industries.

Renowned for her strategic vision and leadership, Mrs Eddright Mujaya has contributed to the development of sound financial systems and corporate governance frameworks.

Her academic and professional qualifications include a Master of Business Leadership (MBL) from UNISA, a Bachelor of Commerce in Accounting from the University of Zimbabwe, and certifications from the Institute of Chartered Secretaries and Administrators (ICSA), the Chartered Institute of Management Accountants (CIMA), and the Association of Certified Fraud Examiners (ACFE). She is also a Registered Public Accountant with Zimbabwe's Public Accountants and Auditors Board (PAAB).`
    },
    {
      name: 'Dr Nyepudzai Mercy Nyangulu',
      title: 'Non-Executive Director',
      subtitle: '',
      image: '/management-pics/Dr-Nyepudzai-Mercy-Nyangulu.png',
      bio: `Dr Nyepudzai Mercy Nyangulu currently serves as a senior executive at the Zimbabwe Gender Commission, bringing extensive experience in governance, policy formulation, and institutional strengthening. Her work focuses on promoting gender equality, human rights, and social justice.

Widely respected for her strategic insight, Dr Nyangulu has contributed to numerous national and regional initiatives aimed at advancing gender equity and human development.

Her academic credentials include a Ph.D. in Development Studies from the University of Zimbabwe, a Master of Management and Leadership from the University of Lancaster (UK), and an MBA from the University of Zimbabwe.`
    },
    {
      name: 'Mrs Cynthia Mugwira-Jowai',
      title: 'Non-Executive Director',
      subtitle: '',
      image: '/management-pics/Mrs-Cynthia-Mugwira-Jowai.png',
      bio: `Mrs Cynthia Mugwira-Jowa is a seasoned legal and governance professional with extensive experience across Zimbabwe's public and private sectors. She currently serves as Deputy Director of Legal Services at the Zimbabwe Revenue Authority (ZIMRA) and is a member of various professional boards and regulatory committees.

Widely recognized for her expertise in corporate governance, Mrs Mugwira-Jowa has held leadership roles in numerous organizations, including Vice Chairperson of the Public Entities Corporate Governance Board. She has also represented Zimbabwe at regional and international forums, including the World Bank, Industry Associations, and the African Tax Administration Forum.

Her academic qualifications include an LLM in Law from UNISA, an LLB, and an MBA from the University of Zimbabwe.`
    },
    {
      name: 'Ms Elizabeth Tanyaradzwa Masiyiwa',
      title: 'Non-Executive Director',
      subtitle: '',
      image: '/management-pics/Ms-Elizabeth-Tanyaradzwa-Masiyiwa.png',
      bio: `Ms Elizabeth Tanyaradzwa Masiyiwa is an accomplished social entrepreneur and philanthropist. She serves as Executive Director of Delta Philanthropies and Social Impact Director at Econet Wireless Zimbabwe. Her work focuses on education, health, and youth empowerment initiatives across Africa.

Ms Masiyiwa is the founder and Director of Star Leadership Academy in Harare, a leadership development institution that equips young Africans with skills to thrive in a rapidly changing world. She also sits on several boards, including Higherlife Foundation and UNICEF's Generation Unlimited Board. Previously, she worked as Lead Analyst for Delta Philanthropies, where she oversaw strategic planning and program implementation for various social impact projects.

Her academic background includes a Master's in Social Innovation and Entrepreneurship from the London School of Economics, UK; a Bachelor of Science in Banking and International Finance from Cass Business School, London, UK; and a Diploma in Global Business from Royal Holloway, University of London, UK.`
    },
    {
      name: 'Mr. Courage Mashavave',
      title: 'Non-Executive Director',
      subtitle: '',
      image: '/management-pics/Mr.-Courage-Mashavave.png',
      bio: `Mr. Courage Mashavave is the former Chief Executive Officer of TN CyberTech Bank (formerly Steward Bank Limited), with more than 30 years of experience in the financial services industry. He has held significant leadership positions in Risk Management, Internal Audit, and Corporate Governance in banking institutions.

His expertise and insights have played a critical role in shaping the regulatory and operational frameworks that underpin Zimbabwe's banking sector.

He is a Fellow of the Association of Chartered Certified Accountants (ACCA) and a graduate of Senior Executive Leadership Programs from Harvard University. Mr Mashavave holds a Master of Business Administration (MBA) and a qualification from the Institute of Bankers Zimbabwe (IOBZ).`
    },
  ]

  const closeModal = () => setSelectedPerson(null)

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero" style={{ backgroundImage: "url('/banners/About-us-op.jpg')" }}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Board of Directors</h1>
          <p>Leadership for a New Financial Future</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/about">About Us</Link>
          <span className="separator">/</span>
          <span className="current">Board of Directors</span>
        </div>
      </nav>

      {/* Group Board Section */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <span className="section-label">Leadership</span>
            <h2>Group Board of Directors</h2>
            <p style={{ color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
              TN CyberTech Bank introduces its new Executive Management Team, marking a pivotal step in its transformation into Zimbabwe's first technology-driven, platform-based digital financial services hub.
            </p>
          </div>

          <div className="directors-grid">
            {groupBoard.map((person) => (
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

      {/* Bank Board Section */}
      <section className="content-section light-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <span className="section-label">Bank Leadership</span>
            <h2>Bank Board of Directors</h2>
            <p style={{ color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
              Backed by deep expertise in digital innovation and scalable systems, the team is mandated to drive long-term value through secure, efficient, and integrated financial solutions at scale.
            </p>
          </div>

          <div className="directors-grid">
            {bankBoard.map((person) => (
              <div
                key={`bank-${person.name}`}
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

      <section className="content-section white-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <Link to="/management-team" className="cta-btn cta-btn-primary">
            View Management Team
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

export default BoardOfDirectors
