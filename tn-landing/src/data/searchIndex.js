// Search index for site-wide search functionality
// Each item contains title, description, category, path, and keywords

const searchIndex = [
  // Home
  {
    title: 'Home',
    description: 'TN CyberTech Bank - The Future of Banking',
    category: 'Main',
    path: '/',
    keywords: ['home', 'main', 'banking', 'cybertech'],
  },

  // ============ FOR YOU ============
  {
    title: 'For You',
    description: 'Personal banking services and products',
    category: 'For You',
    path: '/for-you',
    keywords: ['personal', 'individual', 'banking', 'services'],
  },

  // Mobile Banking
  {
    title: 'Mobile Banking',
    description: 'Bank whenever and wherever with our digital channels',
    category: 'For You',
    path: '/for-you/mobile-banking',
    keywords: ['mobile', 'digital', 'app', 'online', 'ussd'],
  },
  {
    title: 'TN CyberCash App',
    description: 'Mobile banking application for iOS and Android',
    category: 'For You',
    path: '/for-you/mobile-banking/app',
    keywords: ['app', 'mobile', 'cybercash', 'download', 'ios', 'android'],
  },
  {
    title: 'App Features',
    description: 'What you can do with the TN CyberCash App',
    category: 'For You',
    path: '/for-you/mobile-banking/app/features',
    keywords: ['features', 'app', 'mobile', 'transfers', 'payments'],
  },
  {
    title: 'How to Register - App',
    description: 'Get started with the TN CyberCash App',
    category: 'For You',
    path: '/for-you/mobile-banking/app/register',
    keywords: ['register', 'signup', 'app', 'mobile', 'start'],
  },
  {
    title: 'Internet Banking',
    description: 'Online banking portal for web access',
    category: 'For You',
    path: '/for-you/mobile-banking/online',
    keywords: ['internet', 'online', 'web', 'portal', 'banking'],
  },
  {
    title: 'Internet Banking - Individuals',
    description: 'Personal online banking services',
    category: 'For You',
    path: '/for-you/mobile-banking/online/individuals',
    keywords: ['internet', 'online', 'personal', 'individual'],
  },
  {
    title: 'Internet Banking - Businesses',
    description: 'Corporate online banking services',
    category: 'For You',
    path: '/for-you/mobile-banking/online/businesses',
    keywords: ['internet', 'online', 'business', 'corporate'],
  },
  {
    title: 'USSD Banking',
    description: 'Dial *236# from any phone for banking',
    category: 'For You',
    path: '/for-you/mobile-banking/ussd',
    keywords: ['ussd', '*236#', 'dial', 'phone', 'sms'],
  },

  // Personal Accounts
  {
    title: 'Personal Accounts',
    description: 'Savings, current and student accounts',
    category: 'For You',
    path: '/for-you/accounts',
    keywords: ['accounts', 'savings', 'current', 'personal'],
  },
  {
    title: 'iSave USD Account',
    description: 'Zero monthly charges, no minimum balance savings account',
    category: 'For You',
    path: '/for-you/accounts/isave',
    keywords: ['isave', 'savings', 'usd', 'dollar', 'zero charges'],
  },
  {
    title: 'Current Account',
    description: 'For everyday transactions and payments',
    category: 'For You',
    path: '/for-you/accounts/current',
    keywords: ['current', 'transactional', 'everyday', 'checking'],
  },

  // Cards
  {
    title: 'Cards',
    description: 'Zimswitch and VISA cards for local and global transactions',
    category: 'For You',
    path: '/for-you/cards',
    keywords: ['cards', 'debit', 'credit', 'visa', 'zimswitch'],
  },
  {
    title: 'Zimswitch Debit Card',
    description: 'Local transactions card for Zimbabwe',
    category: 'For You',
    path: '/for-you/cards/zimswitch',
    keywords: ['zimswitch', 'debit', 'local', 'atm', 'pos'],
  },
  {
    title: 'VISA Cards',
    description: 'Global payment cards accepted worldwide',
    category: 'For You',
    path: '/for-you/cards/visa',
    keywords: ['visa', 'international', 'global', 'credit', 'debit'],
  },
  {
    title: 'VISA Prepaid Card',
    description: 'Reloadable prepaid VISA card - USD 10,000/month limit',
    category: 'For You',
    path: '/for-you/cards/visa/prepaid',
    keywords: ['visa', 'prepaid', 'reloadable', 'travel'],
  },
  {
    title: 'VISA Debit Card',
    description: 'VISA debit card - USD 100,000/month limit',
    category: 'For You',
    path: '/for-you/cards/visa/debit',
    keywords: ['visa', 'debit', 'international'],
  },
  {
    title: 'VISA Debit Infinite',
    description: 'Premium VISA debit - USD 250,000/month limit',
    category: 'For You',
    path: '/for-you/cards/visa/debit-infinite',
    keywords: ['visa', 'debit', 'infinite', 'premium', 'luxury'],
  },
  {
    title: 'VISA Credit Classic',
    description: 'VISA credit card for everyday purchases',
    category: 'For You',
    path: '/for-you/cards/visa/credit-classic',
    keywords: ['visa', 'credit', 'classic'],
  },
  {
    title: 'VISA Credit Infinite',
    description: 'Premium VISA credit - USD 250,000/month limit',
    category: 'For You',
    path: '/for-you/cards/visa/credit-infinite',
    keywords: ['visa', 'credit', 'infinite', 'premium', 'luxury'],
  },

  // Loans
  {
    title: 'Nano Loans',
    description: 'Quick loans disbursed in under 60 seconds',
    category: 'For You',
    path: '/for-you/loans',
    keywords: ['loans', 'nano', 'quick', 'instant', 'micro', '60 seconds'],
  },
  {
    title: 'About Nano Loans',
    description: 'Learn about our instant loan products',
    category: 'For You',
    path: '/for-you/loans/about',
    keywords: ['loans', 'nano', 'about', 'information'],
  },
  {
    title: 'How Nano Loans Work',
    description: 'Four easy steps to get your loan',
    category: 'For You',
    path: '/for-you/loans/how-it-works',
    keywords: ['loans', 'how', 'process', 'steps'],
  },
  {
    title: 'Nano Loans via Bank',
    description: 'Apply for loans by dialing *236#',
    category: 'For You',
    path: '/for-you/loans/bank',
    keywords: ['loans', 'bank', '*236#', 'ussd'],
  },
  {
    title: 'Nano Loans via EcoCash',
    description: 'Apply for loans by dialing *151#',
    category: 'For You',
    path: '/for-you/loans/ecocash',
    keywords: ['loans', 'ecocash', '*151#', 'mobile money'],
  },

  // ============ FOR BUSINESS ============
  {
    title: 'For Business',
    description: 'Business banking solutions and services',
    category: 'For Business',
    path: '/for-business',
    keywords: ['business', 'corporate', 'sme', 'enterprise'],
  },

  // Business Accounts
  {
    title: 'Business Accounts',
    description: 'SME, Corporate and Non-profit accounts',
    category: 'For Business',
    path: '/for-business/accounts',
    keywords: ['business', 'accounts', 'sme', 'corporate'],
  },
  {
    title: 'Sole Trader Account',
    description: 'Flexible KYC-lite account for sole traders',
    category: 'For Business',
    path: '/for-business/accounts/sole-trader',
    keywords: ['sole trader', 'individual', 'small business'],
  },
  {
    title: 'Business SME Account',
    description: 'For Small to Medium Enterprises',
    category: 'For Business',
    path: '/for-business/accounts/sme',
    keywords: ['sme', 'small business', 'medium enterprise'],
  },
  {
    title: 'Corporate Current Account',
    description: 'For large corporates and enterprises',
    category: 'For Business',
    path: '/for-business/accounts/corporate',
    keywords: ['corporate', 'large business', 'enterprise'],
  },
  {
    title: 'Non-Profit Current Account',
    description: 'For schools, churches, NGOs and non-profits',
    category: 'For Business',
    path: '/for-business/accounts/nonprofit',
    keywords: ['nonprofit', 'ngo', 'charity', 'school', 'church'],
  },

  // International Banking
  {
    title: 'International Banking',
    description: 'Global reach with local expertise',
    category: 'For Business',
    path: '/for-business/international',
    keywords: ['international', 'global', 'foreign', 'exchange'],
  },
  {
    title: 'Foreign Trade and Investment Facilitation',
    description: 'Foreign trade and investment transactions',
    category: 'For Business',
    path: '/for-business/international/exchange-control',
    keywords: ['exchange control', 'foreign trade', 'investment', 'forex'],
  },
  {
    title: 'Cross-border Payments',
    description: 'SWIFT payments worldwide',
    category: 'For Business',
    path: '/for-business/international/payments',
    keywords: ['swift', 'international payments', 'cross-border', 'remittance'],
  },
  {
    title: 'Trade Finance',
    description: 'Letters of credit, bank guarantees, documentary collections',
    category: 'For Business',
    path: '/for-business/international/trade-finance',
    keywords: ['trade finance', 'letter of credit', 'lc', 'import', 'export'],
  },

  // Merchant Services
  {
    title: 'Merchant Services - POS',
    description: 'Point of Sale machines for your business',
    category: 'For Business',
    path: '/for-business/merchant',
    keywords: ['pos', 'point of sale', 'merchant', 'card machine'],
  },

  // Business Loans
  {
    title: 'Business Loans',
    description: 'Working capital, mortgages, asset finance, guarantees',
    category: 'For Business',
    path: '/for-business/loans',
    keywords: ['business loans', 'financing', 'credit'],
  },
  {
    title: 'Working Capital Loans',
    description: 'Capital expenditure and working capital financing',
    category: 'For Business',
    path: '/for-business/loans/working-capital',
    keywords: ['working capital', 'overdraft', 'cash flow'],
  },
  {
    title: 'Commercial Mortgages',
    description: 'Property acquisition financing for businesses',
    category: 'For Business',
    path: '/for-business/loans/commercial-mortgages',
    keywords: ['mortgage', 'property', 'real estate', 'commercial'],
  },
  {
    title: 'Asset Finance',
    description: 'Equipment acquisition and upgrades financing',
    category: 'For Business',
    path: '/for-business/loans/asset-finance',
    keywords: ['asset finance', 'equipment', 'leasing', 'machinery'],
  },
  {
    title: 'Bank Guarantees / Bid Bonds',
    description: 'Tender and contract support guarantees',
    category: 'For Business',
    path: '/for-business/loans/bank-guarantees',
    keywords: ['bank guarantee', 'bid bond', 'tender', 'contract'],
  },

  // Corporate & Investment Banking
  {
    title: 'Corporate & Investment Banking',
    description: 'Strategic financing for high-value corporate clients',
    category: 'For Business',
    path: '/for-business/corporate',
    keywords: ['corporate banking', 'investment banking', 'cib'],
  },
  {
    title: 'Healthcare Financing',
    description: 'Private healthcare development funding',
    category: 'For Business',
    path: '/for-business/corporate/healthcare',
    keywords: ['healthcare', 'medical', 'hospital', 'clinic'],
  },
  {
    title: 'Renewable Energy Financing',
    description: 'Clean and affordable energy solutions financing',
    category: 'For Business',
    path: '/for-business/corporate/renewable-energy',
    keywords: ['renewable', 'solar', 'energy', 'green', 'sustainable'],
  },
  {
    title: 'Exporters Financing',
    description: 'Export-oriented business funding',
    category: 'For Business',
    path: '/for-business/corporate/exporters',
    keywords: ['exporters', 'export', 'international trade'],
  },
  {
    title: 'Research, Capital Markets & Advisory',
    description: 'Expert financial advisory services',
    category: 'For Business',
    path: '/for-business/corporate/advisory',
    keywords: ['advisory', 'capital markets', 'research', 'consulting'],
  },
  {
    title: 'CIB Product Offerings',
    description: 'Working capital, mortgages and asset finance products',
    category: 'For Business',
    path: '/for-business/corporate/products',
    keywords: ['cib', 'products', 'corporate', 'offerings'],
  },

  // VISA Corporate Card
  {
    title: 'VISA Corporate Card',
    description: 'Reloadable international prepaid card for business',
    category: 'For Business',
    path: '/for-business/visa-corporate-card',
    keywords: ['visa', 'corporate card', 'business card', 'prepaid'],
  },
  {
    title: 'VISA Corporate Card Security',
    description: 'Chip & PIN protection, 3D Secure',
    category: 'For Business',
    path: '/for-business/visa-corporate-card/security',
    keywords: ['security', 'chip', 'pin', '3d secure'],
  },
  {
    title: 'VISA Corporate Card Flexibility',
    description: 'Multiple cards, Visa Direct enabled',
    category: 'For Business',
    path: '/for-business/visa-corporate-card/flexibility',
    keywords: ['flexibility', 'visa direct', 'multiple cards'],
  },
  {
    title: 'VISA Corporate Card Management',
    description: 'Statements and card controls',
    category: 'For Business',
    path: '/for-business/visa-corporate-card/management',
    keywords: ['management', 'statements', 'controls'],
  },
  {
    title: 'VISA Corporate Card Reporting',
    description: 'Web portal, mobile app, 24/7 support',
    category: 'For Business',
    path: '/for-business/visa-corporate-card/reporting',
    keywords: ['reporting', 'portal', 'support'],
  },
  {
    title: 'How to Apply - VISA Corporate Card',
    description: 'Requirements and application process',
    category: 'For Business',
    path: '/for-business/visa-corporate-card/apply',
    keywords: ['apply', 'application', 'requirements'],
  },

  // Agency Banking
  {
    title: 'Agency Banking',
    description: 'Earn income by processing customer transactions',
    category: 'For Business',
    path: '/for-business/agents',
    keywords: ['agent', 'agency', 'partner', 'earn'],
  },
  {
    title: 'About Agency Banking',
    description: 'Benefits and overview of becoming an agent',
    category: 'For Business',
    path: '/for-business/agents/about',
    keywords: ['agent', 'about', 'benefits'],
  },
  {
    title: 'Agency Services',
    description: 'Transactions you can process as an agent',
    category: 'For Business',
    path: '/for-business/agents/services',
    keywords: ['agent', 'services', 'transactions'],
  },
  {
    title: 'Agency Banking - Sole Traders',
    description: 'Application requirements for sole traders',
    category: 'For Business',
    path: '/for-business/agents/sole-trader',
    keywords: ['agent', 'sole trader', 'application'],
  },
  {
    title: 'Agency Banking - Corporates',
    description: 'Application requirements for corporates',
    category: 'For Business',
    path: '/for-business/agents/corporate',
    keywords: ['agent', 'corporate', 'application'],
  },

  // ============ DIASPORA ============
  {
    title: 'Diaspora Banking',
    description: 'Banking solutions for Zimbabweans living abroad',
    category: 'Diaspora',
    path: '/diaspora',
    keywords: ['diaspora', 'abroad', 'overseas', 'foreign'],
  },
  {
    title: 'Diaspora Accounts',
    description: 'Current and Savings FCA accounts for diaspora',
    category: 'Diaspora',
    path: '/diaspora/accounts',
    keywords: ['diaspora', 'fca', 'foreign currency', 'accounts'],
  },
  {
    title: 'Diaspora Account Benefits',
    description: 'Features and requirements for diaspora accounts',
    category: 'Diaspora',
    path: '/diaspora/benefits',
    keywords: ['diaspora', 'benefits', 'features'],
  },
  {
    title: 'International Remittances',
    description: 'Send and receive money globally',
    category: 'Diaspora',
    path: '/diaspora/remittances',
    keywords: ['remittance', 'send money', 'transfer', 'international'],
  },
  {
    title: 'Remittance Partners',
    description: 'Our global remittance partners',
    category: 'Diaspora',
    path: '/diaspora/partners',
    keywords: ['partners', 'worldremit', 'mukuru', 'ria', 'sasai'],
  },

  // ============ ABOUT ============
  {
    title: 'About Us',
    description: 'The Future of Banking - Our story and values',
    category: 'About',
    path: '/about',
    keywords: ['about', 'company', 'history', 'values'],
  },
  {
    title: 'Our Belief',
    description: 'The Future of Banking philosophy',
    category: 'About',
    path: '/about/our-belief',
    keywords: ['belief', 'philosophy', 'future'],
  },
  {
    title: 'Our History',
    description: 'A Legacy of Innovation',
    category: 'About',
    path: '/about/our-history',
    keywords: ['history', 'legacy', 'timeline'],
  },
  {
    title: "What We're Building",
    description: 'An Embedded Bank for the future',
    category: 'About',
    path: '/about/what-were-building',
    keywords: ['building', 'embedded', 'innovation'],
  },
  {
    title: 'Our Vision',
    description: 'Embedded Banking for Everyone',
    category: 'About',
    path: '/about/our-vision',
    keywords: ['vision', 'future', 'goals'],
  },
  {
    title: 'Our Mission',
    description: 'Innovative Banking Services',
    category: 'About',
    path: '/about/our-mission',
    keywords: ['mission', 'purpose', 'services'],
  },
  {
    title: 'Our Values',
    description: 'Innovation, Dignity, Industry',
    category: 'About',
    path: '/about/our-values',
    keywords: ['values', 'innovation', 'dignity', 'industry'],
  },
  {
    title: 'Our Promise',
    description: 'Building Trust Through Action',
    category: 'About',
    path: '/about/our-promise',
    keywords: ['promise', 'trust', 'commitment'],
  },
  {
    title: 'Board of Directors',
    description: 'Our leadership board',
    category: 'About',
    path: '/board-of-directors',
    keywords: ['board', 'directors', 'leadership', 'management'],
  },
  {
    title: 'Management Team',
    description: 'Executive management team',
    category: 'About',
    path: '/management-team',
    keywords: ['management', 'executives', 'team', 'leadership'],
  },
  {
    title: 'Financial Statements',
    description: 'Annual reports and financial disclosures',
    category: 'About',
    path: '/financial-statements',
    keywords: ['financial', 'statements', 'reports', 'annual'],
  },

  // ============ SUPPORT ============
  {
    title: 'Contact Us',
    description: 'Get in touch with TN CyberTech Bank',
    category: 'Support',
    path: '/contact',
    keywords: ['contact', 'phone', 'email', 'branch', 'location'],
  },
  {
    title: 'Customer Service',
    description: 'Help and support for customers',
    category: 'Support',
    path: '/customer-service',
    keywords: ['customer service', 'help', 'support', 'assistance'],
  },
  {
    title: 'Our Partners',
    description: 'Strategic partnerships and collaborations',
    category: 'Support',
    path: '/partners',
    keywords: ['partners', 'partnerships', 'collaborations'],
  },
  {
    title: 'Calculators',
    description: 'Financial calculators for loans and savings',
    category: 'Support',
    path: '/calculators',
    keywords: ['calculator', 'loan calculator', 'interest', 'savings'],
  },
  {
    title: 'Media Centre',
    description: 'News, press releases and media resources',
    category: 'Support',
    path: '/media-centre',
    keywords: ['media', 'news', 'press', 'releases'],
  },
  {
    title: 'Corporate Social Investment',
    description: 'Our community initiatives and CSI programs',
    category: 'Support',
    path: '/corporate-social-investment',
    keywords: ['csi', 'corporate social', 'community', 'investment'],
  },
  {
    title: 'Financial Reports',
    description: 'Quarterly and annual financial reports',
    category: 'Support',
    path: '/financial-reports',
    keywords: ['financial', 'reports', 'quarterly', 'annual'],
  },

  // ============ LEGAL ============
  {
    title: 'Privacy Statement',
    description: 'Our privacy policy and data protection',
    category: 'Legal',
    path: '/privacy-statement',
    keywords: ['privacy', 'policy', 'data', 'protection'],
  },
  {
    title: 'Terms of Use',
    description: 'Website terms and conditions',
    category: 'Legal',
    path: '/terms-of-use',
    keywords: ['terms', 'conditions', 'legal', 'use'],
  },
]

export default searchIndex
