import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../components/PageStyles.css'

function PrivacyStatement() {
  return (
    <div className="page-container">
      <Header />

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Privacy Statement</h1>
          <p>Your privacy matters to us</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <span className="current">Privacy Statement</span>
        </div>
      </nav>

      {/* Content */}
      <section className="content-section white-section">
        <div className="container">
          <div className="legal-content">
            <h2>1. Introduction</h2>
            <p>
              TN CyberTech Bank Limited ("TN CyberTech Bank" or "the Bank") understands the importance of protecting your personal information. This Privacy Statement outlines how we collect, use, and safeguard your data when you share it with the Bank and entrust us with your information. We are committed to maintaining the highest standards of security and privacy for our customers.
            </p>
            <p>
              This Privacy Statement details how we collect, use, and share your personal information, including the types of data we gather, our methods for doing so, the reasons for sharing it, our security measures, and your choices regarding our use of your data. This notice applies to our websites, mobile applications, and services that display this Privacy Statement.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              Throughout your relationship with us, and for a period thereafter as required by our data retention policies, we collect and process various categories of personal information. This information is essential for providing our services and meeting our legal and regulatory obligations. The types of information we may collect include:
            </p>

            <h3>2.1 Identification and Contact Information</h3>
            <p>This includes basic details such as your name, address, date of birth, contact details, nationality, government-issued identifiers (e.g., national identification numbers, driver's license numbers), and signatures.</p>

            <h3>2.2 Background Information</h3>
            <p>We may collect background information, including results of background checks and information regarding criminal convictions, where permitted by applicable law.</p>

            <h3>2.3 Biometric Information</h3>
            <p>In certain circumstances, we may collect biometric information such as voice prints, iris or retina scans, facial geometry, and palm prints or fingerprints.</p>

            <h3>2.4 Commercial Information</h3>
            <p>This includes details related to your interactions with our services, such as purchase and transaction history, product reviews, travel and vacation information, and participation in sweepstakes and contests.</p>

            <h3>2.5 Communications Data</h3>
            <p>We may collect information related to your communications with us, including the content of emails, text messages, and other correspondence, as well as call logs and calendar information where TN CyberTech Bank is a party to the exchange.</p>

            <h3>2.6 Demographic Information</h3>
            <p>We may collect demographic information such as age, gender, citizenship, ethnicity, date of birth, family or marital status, household income, education, professional and employment information, family health information, number of children, vehicle ownership, and information about software or virtual assets owned.</p>

            <h3>2.7 Device and Online Identifiers</h3>
            <p>This includes information related to your online activity and devices, such as account login details, Internet Protocol (IP) addresses, smart device information, location coordinates, online and mobile banking security authentication data, mobile phone network information, search history, site visits, and spending patterns.</p>

            <h3>2.8 Financial Information</h3>
            <p>We collect financial information such as account and transaction details and history, as well as payment and payee information.</p>

            <h3>2.9 Financial Circumstances</h3>
            <p>We may collect information about your financial circumstances, including personal wealth, assets and liabilities, proof of income and expenditure, credit and borrowing history, and financial needs and goals.</p>

            <h3>2.10 Sensory Information</h3>
            <p>This may include visual images and personal appearance (e.g., photos, copies of passports, CCTV images), voice recordings, and fingerprints.</p>

            <h3>2.11 Transaction Information</h3>
            <p>Our payment services and third-party companies may collect information related to transactions performed by our account holders.</p>

            <h2>3. Use of Your Information</h2>
            <p>We use your personal data to provide our products and services, manage and maintain our client relationships, and operate our business efficiently and securely. In particular, your information may be used for:</p>

            <h3>3.1.1 Provision of Products and Services</h3>
            <ul>
              <li>To open, administer, and manage accounts and banking facilities</li>
              <li>To process transactions, payments, and instructions</li>
              <li>To respond to enquiries, requests, or complaints</li>
              <li>To provide customer support and relationship management services</li>
            </ul>

            <h3>3.1.2 Business Operations and Product Development</h3>
            <ul>
              <li>To improve, develop, test, and enhance existing and new banking products, services, and digital platforms</li>
              <li>To conduct internal research, data analysis, and service quality assessments</li>
              <li>To monitor and improve the performance, security, and functionality of our systems and channels</li>
            </ul>

            <h3>3.1.3 Marketing and Promotional Activities</h3>
            <ul>
              <li>To inform you about products, services, offers, and promotions that may be relevant to you</li>
              <li>To conduct targeted marketing and customer engagement activities, subject to your marketing preferences and applicable law</li>
              <li>To carry out surveys, feedback requests, and market research to better understand customer needs</li>
            </ul>
            <p>You may opt out of marketing communications at any time in accordance with our opt-out procedures.</p>

            <h3>3.1.4 Legal, Regulatory, and Risk Management Purposes</h3>
            <ul>
              <li>To comply with applicable legal, regulatory, and supervisory obligations</li>
              <li>To conduct customer due diligence, fraud prevention, and anti-money laundering checks</li>
              <li>To manage risk, audit, and compliance functions</li>
            </ul>

            <h3>3.1.5 Security and Protection</h3>
            <ul>
              <li>To protect the security and integrity of our systems, premises, customers, and staff</li>
              <li>To prevent, detect, and investigate fraud, cyber threats, and other unlawful activities</li>
            </ul>

            <h2>4. How We Obtain Your Information</h2>
            <p>We collect personal data directly from a variety of sources, including:</p>
            <ul>
              <li><strong>Directly from you:</strong> When you interact with us by phone, in branch, or through our online channels (website, mobile apps, online banking, or electronic messaging).</li>
              <li><strong>From third parties:</strong> This may include service providers, credit reference and fraud prevention agencies, law enforcement and government bodies, industry and trade associations, and other banks (where legally permitted).</li>
              <li><strong>Through your account activity:</strong> Information generated by your use of our services, such as payment transactions and payee details.</li>
              <li><strong>From your device and technology:</strong> Data from the devices you use to access our services (e.g., device data, location, IP address, or phone number) and information about how you use those services.</li>
              <li><strong>From publicly available sources:</strong> Such as press reports, company registers, and online search engines.</li>
              <li><strong>From public social media:</strong> Information you have chosen to share publicly on platforms like Facebook and Twitter.</li>
            </ul>

            <h2>5. Sharing Your Information</h2>
            <p>To effectively provide our services and meet legal obligations, we may share your personal data with certain internal and external parties, including:</p>
            <ul>
              <li><strong>TN CyberTech Bank Subsidiaries:</strong> Information may be shared within our corporate group to improve operational efficiency and provide integrated services.</li>
              <li><strong>Service Providers:</strong> We engage trusted third-party service providers who assist us in delivering our products and services. These providers are contractually obligated to protect your information.</li>
              <li><strong>Regulatory Bodies:</strong> We may disclose information to regulatory bodies or when legally required to comply with applicable laws and regulations or in the public interest.</li>
              <li><strong>Banking and Financial Services:</strong> In certain circumstances, we may share information with other financial institutions, such as correspondent banks, remittance partners, stock exchanges, and credit rating agencies, to facilitate transactions and provide specific financial services.</li>
              <li><strong>Account and Service Management:</strong> We may share information with service providers and agents who assist us in managing your accounts and providing related services.</li>
            </ul>
            <p>We ensure that any sharing of your information is conducted securely and in accordance with applicable data protection laws.</p>

            <h2>6. Your Rights</h2>
            <p>You have certain rights regarding the personal information we hold about you:</p>

            <div className="rights-table">
              <div className="rights-item">
                <h4>6.1 Access</h4>
                <p>You have a right to get access to the personal information we hold about you. If you would like a copy of the personal information we hold about you, please visit our nearest branch or contact us at TN CyberTech Bank on <strong>+263 867 702 0267</strong>.</p>
              </div>
              <div className="rights-item">
                <h4>6.2 Rectification</h4>
                <p>You have the right to correct any inaccuracies in your personal information and to complete any information that is missing.</p>
              </div>
              <div className="rights-item">
                <h4>6.3 Right to be Informed</h4>
                <p>You have a right to know what specific types of personal data is being collected, why it is being collected, how the data will be used and how it will be stored.</p>
              </div>
              <div className="rights-item">
                <h4>6.4 Right to Give and Withdraw Consent</h4>
                <p>You have a right to object to us processing your personal information. Please note that if you object to us processing your information, we may have to suspend the operation of your account and/or the products and services we provide to you.</p>
              </div>
              <div className="rights-item">
                <h4>6.5 Right to Deletion</h4>
                <p>You have a right to request that we delete false or misleading information you feel we hold about you.</p>
              </div>
              <div className="rights-item">
                <h4>6.6 Right to Complaint</h4>
                <p>You have the right to lodge a complaint with the Data Protection Authority if you believe your rights have been infringed. Contact the Data Protection Officer at TN CyberTech Bank, 79 Livingstone Ave, Harare. Phone: <strong>+263 867 702 0267</strong> or email <strong>dataprotection@tncybertechbank.co.zw</strong></p>
              </div>
              <div className="rights-item">
                <h4>6.7 Right to Object to Automated Decision-Making</h4>
                <p>Under certain circumstances, the Bank adopts automated processing which may be required to offer you services.</p>
              </div>
              <div className="rights-item">
                <h4>6.8 Marketing</h4>
                <p>You have a right to object at any time to processing of your personal information for direct marketing purposes, including profiling you for the purposes of direct marketing.</p>
              </div>
            </div>

            <h2>7. How Do We Secure Your Information?</h2>
            <p>
              We are committed to protecting the security of your information. To prevent unauthorized access or disclosure, we have implemented appropriate physical, electronic, and managerial safeguards. These include encryption for all online transactions and adherence to internationally recognized banking security practices for storing personal information.
            </p>

            <h2>8. How Long Do We Retain Your Personal Information?</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfil the purposes described in this Privacy Statement or any other notice provided when we collected the data. This retention period will not exceed what is required or permitted by applicable law or our internal data policies. We dispose of personal information in accordance with TN CyberTech Bank's established policies and procedures.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We reserve the right to modify this Privacy Policy Statement as and when required. We will post any changes to our Privacy Policy Statement on our website: <a href="https://www.tncybertechbank.co.zw" target="_blank" rel="noopener noreferrer">www.tncybertechbank.co.zw</a>. Any amendment or modification to this policy will take effect from the date of notification on the TN CyberTech Bank website.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PrivacyStatement
