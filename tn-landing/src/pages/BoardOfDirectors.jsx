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
      bio: `Dr Titus Murefu is a distinguished scholar, seasoned university lecturer, and dedicated pastor with over 47 years of impactful service in theological education, leadership, and institutional governance. His commitment to academic excellence, spiritual growth, and community development has shaped generations of leaders in Zimbabwe and beyond.

He has played a vital role in advancing theological thought, mentoring leaders, and promoting ethical leadership. His contributions span curriculum development, strategic planning, and governance across church and academic institutions. Dr Murefu also participates in the Barnabas Ministries Leadership Seminar, reflecting his dedication to Christian leadership development.

He holds a PhD in Eschatology from the Heart of America Christian College & Theological Seminary (USA), a Master's in Peace, Leadership & Governance from Africa University (Zimbabwe), and a Master's in Theological Studies from Vision Graduate School (USA). His foundational theological training includes a Bachelor of Arts in Theology from Zion Bible Institute (USA), a Diploma in Theology from Living Waters Theological Seminary (Harare), and a Diploma in Teaching from Zion College, Evangelical Training Association.`
    },
    {
      name: 'Mr Dominic Musengi',
      title: 'Deputy Group Chairman',
      subtitle: 'Non-Executive Director (Independent)',
      image: '/management-pics/Mr-Dominic-Musengi.png',
      bio: `Mr Dominic Musengi is a highly experienced Registered Legal Practitioner, whose legal career began in 1993, spanning both private practice and public service. With over two decades of professional work, he has demonstrated expertise across a diverse range of fields, including company secretarial duties, financial and legal advisory services, human resources, and general management.

He currently serves as Senior Partner at Musengi & Sigauke Legal Practitioners, where he focuses on commercial law, corporate law, banking and finance, labour law, and conveyancing. His firm is recognised for providing comprehensive legal services, including corporate restructuring, civil litigation, property matters, arbitration, pension fund administration, and notarial practices.

In terms of academic qualifications, Mr Musengi holds an LLM from the University of South Africa, an LLB (Hons) from the University of Zimbabwe, and a Diploma in Personnel Management.`
    },
    {
      name: 'Mr Tawanda Nyambirai',
      title: 'Executive Director',
      subtitle: '',
      image: '/management-pics/Mr-Tawanda-Nyambirai.png',
      bio: `Tawanda Nyambirai is a distinguished lawyer with outstanding skills. In a book, How to Build a Multi-Billion Dollar Business in Africa From Scratch, Strive Masiyiwa wrote: "Over the years, I have had the privilege to work with great lawyers from all around the world; but I say this with humility, Tawanda Nyambirai has one of the finest legal minds, I have ever met."

Tawanda holds a Bachelor of Laws Honours Degree from the University of Zimbabwe and a Certificate in Conflict Resolution from Uppsala University, Sweden. He has handled a few landmark cases in Constitutional Law and Human Rights, Commercial Law, Tax Law and Labour Law, including: Tawanda Nyambirai vs NSSA, Econet vs Minister of Telecommunications, a case that resulted in Econet Wireless being declared duly licensed to operate a Mobile Telecommunications Company in Zimbabwe. Econet vs Trustco, Freddy Goronga and others vs City of Harare, a case that was instrumental to the development of Dzivarasekwa Extension to accommodate the Porta Farm Squatters, among many other cases.

At the Retail Banking Africa 2011 Conference held in Johannesburg on 26 July 2011, Tawanda Nyambirai mooted the idea of cattle banking as a way to "bank the unbanked" in Africa. He has gone on to establish TN Livestock Trust (Private) Limited, a "cattle bank" that is growing in Zimbabwe and seeks to establish itself in other countries on the African Continent and beyond.

Tawanda founded TN Bank Ltd, which is now TN CyberTech Bank after he sold it to Econet Wireless for Econet Shares. He owns TN Asset Management (Pvt) Ltd, now the third largest Asset Management Company in Zimbabwe by Funds Under Management based on the ratings by the Securities Exchange Commission. He owns TN Gold (Pvt) Ltd, a company which in turn owns TN Gold-Optimist (Pvt) Ltd.

His accolades include:
1. Zimbabwe National Chamber of Commerce – Harare Branch Businessman of the Year 2010
2. Zimbabwe National Chamber of Commerce Special Award – Businessman of the Year 2010
3. Megafest Business Awards Zimbabwe's Top 20 Outstanding Business Personality for the year 2012
4. Zimbabwe CEO's Network Best CEO of the Year 2022
5. Zimbabwe CEO's Network Outstanding Leader in Mining & Exploration Platinum Winner 2023`
    },
    {
      name: 'Mr Roy Chimanikire',
      title: 'Non-Executive Director',
      subtitle: '',
      image: '/management-pics/Mr-Roy-Chimanikire.png',
      bio: `Mr Roy Chimanikire is the Deputy Chief Executive Officer of Econet Wireless Zimbabwe Limited, a position he has held since 2016. He joined the Econet Group in 2009 from Deloitte, where he served as a Partner, bringing with him a wealth of expertise in Finance, governance, and strategic leadership. He also sits on the board of Telrad Networks Limited, part of the Cassava Technologies Group.

Mr Chimanikire is a former President and current Council Member of the Institute of Chartered Accountants of Zimbabwe (ICAZ). He is highly regarded for his significant contributions to accounting standards, Financial regulation, and corporate governance in Zimbabwe. Over the years, he has played a pivotal role in major corporate initiatives and has been recognised with several prestigious accolades, including the ICAZ Excellence in Business Award (2021) and the Institute of Directors Zimbabwe (IODZ) Director of the Year Award (2022).

He holds a Bachelor of Accounting Science (Honours) Degree from the University of South Africa (UNISA) and a Certificate in the Theory of Accounting from ICAZ. He is a qualified Chartered Accountant and a registered Public Accountant.`
    },
    {
      name: 'Mr Evaristo Mudhikwa',
      title: 'Non-Executive Director',
      subtitle: '(Independent)',
      image: '/management-pics/Mr-Evaristo-Mudhikwa.png',
      bio: `Mr Evaristo Mudhikwa is the Managing Director and owner of Generation Bricks, a prominent enterprise in Zimbabwe's brick manufacturing sector. As a seasoned entrepreneur, he brings extensive expertise in business management, sales, marketing, and advisory services related to import and export clearance. His strong commercial acumen has enabled him to successfully navigate shifting market dynamics and drive sustained business growth.

Beyond his business ventures, Mr Mudhikwa is deeply involved in community service. He serves as the Chairman of St. Joseph's House for Boys, a charitable organization dedicated to the care and development of orphaned, abandoned, and vulnerable children. His leadership in both the business and non-profit sectors highlights a balanced commitment to economic advancement and social responsibility.

He holds Diplomas in Marketing, which have provided him with a strong foundation in market strategy, customer engagement, and business development.`
    },
    {
      name: 'Mr Morgen Mufowo',
      title: 'Non-Executive Director',
      subtitle: '',
      image: '/management-pics/Mr-Morgen-Mufowo.png',
      bio: `Mr Morgan Mufowo is an agriculture start-up consultant, a position he has held since August 2021. He brings a unique blend of business insight and technological expertise, developed through extensive experience in the telecommunications and media sectors—particularly in leading information systems. His understanding of how technology drives performance has been instrumental in delivering solutions across telecommunications, media, and financial services.

In addition to his consulting work, Mr Mufowo is a full member of the Computer Society of Zimbabwe, maintaining active engagement with professional networks in the ICT industry.

He holds an MBA with a focus on Arts, Leadership, and Management, and a BSc in Computer Science and Biology from the University of Zimbabwe. He is also an alumnus of the Africa Leadership Development Academy, hosted by the University of Zimbabwe.`
    },
    {
      name: 'Ms Elizabeth Tanyaradzwa Masiyiwa',
      title: 'Non-Executive Director',
      subtitle: '',
      image: '/management-pics/Ms-Elizabeth-Tanyaradzwa-Masiyiwa.png',
      bio: `Ms Elizabeth Tanyaradzwa Masiyiwa is an accomplished social entrepreneur and executive leader with a dynamic international career spanning philanthropy, education, and innovation. She currently serves as Executive Director and Special Advisor for Innovation and Strategy at Delta Philanthropies in London, United Kingdom.

Ms Masiyiwa is the Co-Founder and Director of Star Leadership Academy in Harare, Zimbabwe, and the Founder and CEO of Simba Education—a Johannesburg-based start-up leveraging technology to expand access to quality early childhood education for children aged 0 to 6 living in urban slums. Previously, she served as Lead Analyst for the Innovation Venture Fund at the United Nations Children's Fund (UNICEF) in New York, where she was responsible for sourcing and assessing investment opportunities across UNICEF's 142 country offices, supporting entrepreneurs and making strategic funding recommendations.

Her academic background includes a Master's in Social Entrepreneurship from Hult International Business School in San Francisco, USA; a Bachelor of Science (Honours) in Banking and International Finance from Cass Business School, City University London, UK; and a Diploma in Business and Economics from Royal Holloway, University of London, UK.`
    },
    {
      name: 'Mr Rugare Chidembo',
      title: 'Non-Executive Director',
      subtitle: '',
      image: '/management-pics/Mr-Rugare-Chidembo.png',
      bio: `Mr Rugare Chidembo is the Founder and Director of Narru Holdings (Pvt) Ltd, a family-owned business involved in property investments, consultancy, and trade. With a career spanning several decades, he has built a strong portfolio across both the corporate and entrepreneurial sectors.

He has held senior executive roles in several leading organizations, including serving as Chief Operating Officer for Econet Wireless International, Managing Director of Econet Wireless (Pvt) Ltd, and Director of Finance at the same company. His earlier career includes key positions at Lonrho Africa and First Merchant Bank.

Mr Chidembo's extensive experience spans corporate financial management, general management, and strategic leadership across diverse industries such as telecommunications, banking, and property development.

He is a qualified Chartered Accountant and holds a Master of Business Administration (MBA) and a Bachelor of Accountancy (Honours) Degree, both from the University of Zimbabwe.`
    },
    {
      name: 'Mrs Nadine Gabi Levy',
      title: 'Non-Executive Director',
      subtitle: '(Independent)',
      image: '/management-pics/Mrs-Nadine-Gabi-Levy.png',
      bio: `Mrs Nadine Gabi Levy is an accomplished Consultant with a focus on strategic planning, business development, and conflict resolution. She brings more than 20 years of experience in the financial services sector, underpinned by a strong legal and compliance background.

She previously served as a Structured Finance Specialist at ABSA Bank, where she was responsible for managing the team's risk, legal, and compliance functions. Her work in this role demonstrated her ability to navigate complex regulatory environments and contribute to high-level financial structuring.

Mrs Levy holds both an LLB and a BCom from the University of South Africa. She is also a Registered Legal Practitioner and a certified Compliance Officer with the South African Futures Exchange and the Financial Services Board of South Africa.`
    },
    {
      name: 'Mr Godknows Mudzingwa',
      title: 'Executive Director',
      subtitle: '',
      image: '/management-pics/Mr-Godknows-Mudzingwa.png',
      bio: `Mr Godknows Mudzingwa is an accomplished professional in the banking and financial services sector, with a distinguished career spanning key roles in complex corporate transactions. He has been instrumental in numerous strategic initiatives including corporate turnarounds, mergers and acquisitions, capital raising, schemes of arrangement, share splits, stock exchange listings and delistings, demergers, due diligence exercises, and business valuations.

In addition to serving as a Director, Mr Mudzingwa holds the position of Group Operations Officer, where he oversees the Properties and Channel Strategy functions within the Group. His leadership ensures alignment between operational efficiency and strategic growth across key business units.

He holds a Master of Business Administration (MBA) with a specialization in Financial Services from the University of Zimbabwe Graduate School of Management, and a Bachelor of Business Studies Honours Degree in Finance and Banking from the University of Zimbabwe.`
    },
  ]

  const bankBoard = [
    {
      name: 'Mr James Andrew Kurasha-Mushore',
      title: 'Bank Chairman',
      subtitle: '(Independent)',
      image: '/management-pics/Mr-James-Andrew-Kurasha-Mushore.png',
      bio: `Mr James Mushore is a seasoned Financial and Management Consultant, offering strategic guidance to a range of businesses. With over 30 years of experience in the Financial services sector, he has played a significant role in shaping Zimbabwe's banking landscape. He was instrumental in the establishment of the National Merchant Bank of Zimbabwe in 1993—the country's first wholly Zimbabwean indigenous merchant bank—and went on to serve as Group Chief Executive Officer of NMBZ Holdings Limited. He also led the successful dual listing of NMB on both the Zimbabwe Stock Exchange and the London Stock Exchange.

Mr Mushore has held several key public and professional leadership roles, including serving as a Director of the Zimbabwe Revenue Authority, Chairman of the Zimbabwe Tourism Authority, and President of the Institute of Chartered Accountants of Zimbabwe (ICAZ). He is a Chartered Accountant and holds a Bachelor of Science in Accounting from South Africa.`
    },
    {
      name: 'Mr Tawanda Nyambirai',
      title: 'Non-Executive Director',
      subtitle: '',
      image: '/management-pics/Mr-Tawanda-Nyambirai.png',
      bio: `Tawanda Nyambirai is a distinguished lawyer with outstanding skills. In a book, How to Build a Multi-Billion Dollar Business in Africa From Scratch, Strive Masiyiwa wrote: "Over the years, I have had the privilege to work with great lawyers from all around the world; but I say this with humility, Tawanda Nyambirai has one of the finest legal minds, I have ever met."

Tawanda holds a Bachelor of Laws Honours Degree from the University of Zimbabwe and a Certificate in Conflict Resolution from Uppsala University, Sweden. He has handled a few landmark cases in Constitutional Law and Human Rights, Commercial Law, Tax Law and Labour Law, including: Tawanda Nyambirai vs NSSA, Econet vs Minister of Telecommunications, a case that resulted in Econet Wireless being declared duly licensed to operate a Mobile Telecommunications Company in Zimbabwe. Econet vs Trustco, Freddy Goronga and others vs City of Harare, a case that was instrumental to the development of Dzivarasekwa Extension to accommodate the Porta Farm Squatters, among many other cases.

At the Retail Banking Africa 2011 Conference held in Johannesburg on 26 July 2011, Tawanda Nyambirai mooted the idea of cattle banking as a way to "bank the unbanked" in Africa. He has gone on to establish TN Livestock Trust (Private) Limited, a "cattle bank" that is growing in Zimbabwe and seeks to establish itself in other countries on the African Continent and beyond.

Tawanda founded TN Bank Ltd, which is now TN CyberTech Bank after he sold it to Econet Wireless for Econet Shares. He owns TN Asset Management (Pvt) Ltd, now the third largest Asset Management Company in Zimbabwe by Funds Under Management based on the ratings by the Securities Exchange Commission. He owns TN Gold (Pvt) Ltd, a company which in turn owns TN Gold-Optimist (Pvt) Ltd.

His accolades include:
1. Zimbabwe National Chamber of Commerce – Harare Branch Businessman of the Year 2010
2. Zimbabwe National Chamber of Commerce Special Award – Businessman of the Year 2010
3. Megafest Business Awards Zimbabwe's Top 20 Outstanding Business Personality for the year 2012
4. Zimbabwe CEO's Network Best CEO of the Year 2022
5. Zimbabwe CEO's Network Outstanding Leader in Mining & Exploration Platinum Winner 2023`
    },
    {
      name: 'Mr Roy Chimanikire',
      title: 'Non-Executive Director',
      subtitle: '',
      image: '/management-pics/Mr-Roy-Chimanikire.png',
      bio: `Mr Roy Chimanikire is the Deputy Chief Executive Officer of Econet Wireless Zimbabwe Limited, a position he has held since 2016. He joined the Econet Group in 2009 from Deloitte, where he served as a Partner, bringing with him a wealth of expertise in Finance, governance, and strategic leadership. He also sits on the board of Telrad Networks Limited, part of the Cassava Technologies Group.

Mr Chimanikire is a former President and current Council Member of the Institute of Chartered Accountants of Zimbabwe (ICAZ). He is highly regarded for his significant contributions to accounting standards, Financial regulation, and corporate governance in Zimbabwe. Over the years, he has played a pivotal role in major corporate initiatives and has been recognised with several prestigious accolades, including the ICAZ Excellence in Business Award (2021) and the Institute of Directors Zimbabwe (IODZ) Director of the Year Award (2022).

He holds a Bachelor of Accounting Science (Honours) Degree from the University of South Africa (UNISA) and a Certificate in the Theory of Accounting from ICAZ. He is a qualified Chartered Accountant and a registered Public Accountant.`
    },
    {
      name: 'Mr Zvichapera Katiyo',
      title: 'Non-Executive Director',
      subtitle: '',
      image: '/management-pics/Mr-Zvichapera-Katiyo.png',
      bio: `Mr Zvichapera Katiyo is the Group Chief Executive Officer of Delta Philanthropies and the Higher Life Foundation. With over 24 years of experience, he brings deep expertise in investment banking, project finance, corporate strategy, rural development, and social impact initiatives.

Under his leadership, both organizations have made significant strides in advancing sustainable development and delivering impactful philanthropic programs across multiple sectors in Zimbabwe and beyond.

His academic qualifications include a Master of Science in Banking and Financial Services from the National University of Science and Technology (NUST) and a Bachelor of Science (Honours) in Economics from the University of Zimbabwe.`
    },
    {
      name: 'Mr David Alexander Rhodes',
      title: 'Non-Executive Director',
      subtitle: '(Independent)',
      image: '/management-pics/Mr-David-Alexander-Rhodes.png',
      bio: `Mr David Alexander Rhodes is a seasoned agricultural professional with over 40 years of experience in Zimbabwe's agricultural and tourism sectors. He currently serves as a Senior Tobacco Buyer at Intercontinental Leaf Tobacco, where he works closely with both commercial and small-scale farmers to source high-quality tobacco. His role is crucial in strengthening the supply chain and ensuring the delivery of premium leaf to international markets.

In addition to his role at Intercontinental Leaf Tobacco, Mr. Rhodes is the Founder and Director of Callnigh Trading (Private) Limited, a family-owned company with diverse interests spanning tourism, trade, and tobacco. Through this venture, he has made significant contributions to the development of Zimbabwe's tourism infrastructure and the growth of its agricultural exports.

Mr. Rhodes received his education at Gwebi College and Durban Technical College, where he gained a solid foundation in agricultural sciences and business management.`
    },
    {
      name: 'Mr George Agu',
      title: 'Non-Executive Director',
      subtitle: '(Independent)',
      image: '/management-pics/Mr-George-Agu.png',
      bio: `Mr George Agu is the Founder and Chief Executive Officer of ActivEdge Technologies Limited, a Pan-African IT solutions provider headquartered in Lagos, Nigeria, with extended operations in Ghana, Kenya, Uganda, and Zimbabwe. With over 25 years of experience in the IT industry, he has led numerous digital transformation initiatives across both established and emerging markets.

Mr Agu is a seasoned executive with deep expertise in Financial services, manufacturing, digital innovation, and strategic business development. Under his leadership, ActivEdge Technologies has become a key player in delivering cutting-edge technology solutions across Africa.

His academic and professional qualifications include certifications in Public Policy Analysis and MBA Essentials from the London School of Economics and Political Science; a Bachelor of Science in Computer Science and Statistics from the University of Nigeria, Nsukka; and global professional designations as a Certified Information Systems Auditor (CISA) and Certified Information Security Manager (CISM), awarded by ISACA.`
    },
    {
      name: 'Mr Hazvinei Kapfunde',
      title: 'Chief Executive Officer',
      subtitle: '',
      image: '/management-pics/Mr-Hazvinei-Kapfunde.png',
      bio: `Mr Hazvinei Kapfunde is the Chief Executive Officer of TN CyberTech Bank, bringing over 22 years of experience in Zimbabwe's financial services sector. His role as an Executive director at TN Asset Management (Pvt) Ltd played a pivotal role in enhancing operational efficiencies and expanding the group's footprint within the agricultural and manufacturing sectors.

As a visionary leader, Mr Kapfunde provides strategic direction for the group's domestic and international markets, focusing on optimizing performance and driving sustainable growth. His expertise spans risk management, financial planning, and corporate governance.

He holds an MBA from ESAMI-Maastricht, a Bachelor of Commerce in Risk Management and Insurance from the University of South Africa, and an Institute of Bankers of Zimbabwe qualification. He also holds an International Certificate in Financial Markets.`
    },
    {
      name: 'Trevor Ramanzi',
      title: 'Executive Director',
      subtitle: '',
      image: '/management-pics/Trevor-Ramanzi.png',
      bio: `Mr. Ramanzi is the Chief Financial Officer of TN CyberTech Bank Limited, bringing extensive experience in financial leadership within Zimbabwe's banking and investment sectors. Prior to his current role, he served as Group Financial Controller at Masawara, where he worked closely with investee companies across diverse industries, strengthening financial reporting, governance, and compliance frameworks.

As a seasoned Chartered Accountant, Mr. Ramanzi possesses deep expertise in financial reporting, regulatory compliance, risk management and strategic financial planning. He is a member of the Institute of Chartered Accountants of Zimbabwe (ICAZ) and the South African Institute of Chartered Accountants (SAICA).`
    },
    {
      name: 'Mrs Eddright Mujaya',
      title: 'Non-Executive Director',
      subtitle: '',
      image: '/management-pics/Mrs-Eddright-Mujaya.png',
      bio: `Mrs Eddright Mujaya is a distinguished accountant and financial leader with over 25 years of expertise in finance, administration, audit, and company secretarial services. Throughout her expansive career, she has led financial and governance functions across diverse sectors, including corporate boards, audit engagements, and executive administration.

Renowned for her strategic vision and ethical leadership, Mrs Mujaya combines technical excellence with innovative management to consistently drive organizational performance and ensure compliance.

Her academic and professional qualifications include a Bachelor of Accountancy (Honours) from the University of Zimbabwe and a Master's in Business Leadership (MBL) from UNISA. She holds several prestigious designations, including Associate of the Chartered Institute of Secretaries (ACIS), Chartered Institute of Management Accountants (CIMA), and the globally recognized Chartered Global Management Accountant (CGMA) credential. Additionally, she is an Associate Certified Professional Accountant with the Botswana Institute of Chartered Accountants (BICA) and a Registered Public Accountant with Zimbabwe's Public Accountants and Auditors Board (PAAB).`
    },
    {
      name: 'Dr Nyepudzai Mercy Nyangulu',
      title: 'Non-Executive Director',
      subtitle: '',
      image: '/management-pics/Dr-Nyepudzai-Mercy-Nyangulu.png',
      bio: `Dr Nyepudzai Mercy Nyangulu currently serves as a Commissioner at the Zimbabwe Gender Commission, bringing extensive cross-sectoral experience to the role. She is a seasoned board member with a proven track record across the banking sector, government institutions, private enterprises, and non-governmental organizations.

Widely respected for her strategic insight, policy expertise, and commitment to advancing gender equity and institutional transformation, Dr Nyangulu has made significant contributions to leadership and governance in Zimbabwe and beyond.

Her academic credentials include a PhD in Organisational Science and Management Learning from the University of Lancaster's Centre for the Study of Management Learning (CSML), a Master's in Manpower Studies from the University of Westminster, UK, and an MBA with a Finance major from the University of Zimbabwe.`
    },
    {
      name: 'Mrs Cynthia Mugwira-Jowa',
      title: 'Non-Executive Director',
      subtitle: '',
      image: '/management-pics/Mrs-Cynthia-Mugwira-Jowai.png',
      bio: `Mrs Cynthia Mugwira-Jowa is a seasoned legal and governance professional with extensive experience across Zimbabwe's public, private, and regulatory sectors. She currently serves as Director of Legal Services at the Zimbabwe Revenue Authority (ZIMRA) and is a member of the University of Zimbabwe Council, where she contributes to executive, audit, and disciplinary committees.

Widely recognized for her expertise in legal strategy, compliance, and corporate governance, Cynthia has held leadership roles including Vice Chairperson of the Zimbabwe Association of Pension Funds (ZAPF), Trustee of PROWEB, and board member positions in several industry bodies such as Women in Insurance Zimbabwe and the ICAZ Pensions Sub-Committee. Her career also includes key roles at the Medicines Control Authority of Zimbabwe and the National Social Security Authority (NSSA).

A 2017 alumna of the prestigious Fortune–U.S. State Department–Vital Voices Global Women's Mentorship Program, she is passionate about advancing ethical leadership, gender equity, and institutional accountability in Zimbabwe and beyond. Her academic qualifications include an LLM in Law from Ulster University (UK), an MBA from ESAMI, and an LLB (Hons) from the University of Zimbabwe.`
    },
    {
      name: 'Ms Elizabeth Tanyaradzwa Masiyiwa',
      title: 'Non-Executive Director',
      subtitle: '',
      image: '/management-pics/Ms-Elizabeth-Tanyaradzwa-Masiyiwa.png',
      bio: `Ms Elizabeth Tanyaradzwa Masiyiwa is an accomplished social entrepreneur and executive leader with a dynamic international career spanning philanthropy, education, and innovation. She currently serves as Executive Director and Special Advisor for Innovation and Strategy at Delta Philanthropies in London, United Kingdom.

Ms Masiyiwa is the Co-Founder and Director of Star Leadership Academy in Harare, Zimbabwe, and the Founder and CEO of Simba Education—a Johannesburg-based start-up leveraging technology to expand access to quality early childhood education for children aged 0 to 6 living in urban slums. Previously, she served as Lead Analyst for the Innovation Venture Fund at the United Nations Children's Fund (UNICEF) in New York, where she was responsible for sourcing and assessing investment opportunities across UNICEF's 142 country offices, supporting entrepreneurs and making strategic funding recommendations.

Her academic background includes a Master's in Social Entrepreneurship from Hult International Business School in San Francisco, USA; a Bachelor of Science (Honours) in Banking and International Finance from Cass Business School, City University London, UK; and a Diploma in Business and Economics from Royal Holloway, University of London, UK.`
    },
    {
      name: 'Mr. Courage Mashavave',
      title: 'Non-Executive Director',
      subtitle: '',
      image: '/management-pics/Mr.-Courage-Mashavave.png',
      bio: `Mr Courage Mashavave is the former Chief Executive Officer of TN CyberTech Bank (formerly Steward Bank Limited), with more than 20 years of experience in the financial services industry. He has held significant leadership positions in Retail, Corporate, and Investment Banking, specialising in Treasury, Portfolio Management, and Private Banking. Mr Mashavave's extensive expertise and strategic vision have played an essential role in advancing digital transformation and innovation within Zimbabwe's banking sector.

He is a Fellow of the Association of Chartered Certified Accountants (ACCA) and a graduate of the Senior Executive Leadership Program at Harvard Business School (2022). Additionally, Mr Mashavave holds a Master of Business Administration (MBA-UZ) with a concentration in Finance and previously served as Chairman of the Institute of Bankers Zimbabwe (IOBZ).`
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
              The introduction of the new Leadership Team marks a significant milestone in the organisation's transformation toward becoming Zimbabwe's first technology-driven, platform-based digital financial services hub, focused on embedding banking seamlessly into everyday products and services through trusted partnerships and digital technology.
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
