/**
 * Other Career Options Audit Data (12 Careers)
 * Covers: lawyer, corporate-lawyer, hotel-manager, chef, airline-pilot,
 * cabin-crew, logistics-manager, agricultural-scientist, agricultural-officer,
 * veterinarian, environmental-scientist, entrepreneur.
 * Validated for Indian regulatory bodies (BCI, DGCA, NCHMCT, VCI, ICAR, CPCB),
 * realistic INR salary figures, and structured educational pathways.
 */

const otherCareers = [
  {
    slug: 'lawyer',
    title: 'Litigation Lawyer / Advocate',
    description: 'Represents individuals, organizations, and the state in civil, criminal, constitutional, and appellate court proceedings. Drafts legal pleadings, conducts oral advocacy before District Courts, High Courts, and the Supreme Court of India, and upholds statutory justice under the Advocates Act 1961.',
    educationRequirements: 'LL.B degree (3-year post-graduation or 5-year integrated B.A. LL.B / B.B.A. LL.B) recognized by the Bar Council of India (BCI). Mandatory enrollment with State Bar Council and clearance of the All India Bar Examination (AIBE) to receive the Certificate of Practice (COP).',
    educationPathways: [
      '5-Year Integrated B.A. LL.B / B.B.A. LL.B from National Law Universities (NLUs) via CLAT (Common Law Admission Test)',
      '3-Year LL.B program post-graduation (Faculty of Law Delhi University, GLC Mumbai, ILS Pune via entrance tests)',
      'LL.M (Master of Laws - 1 or 2 years) for specialization or judicial services preparation'
    ],
    eligibilityRequirements: '10+2 with minimum 45% aggregate (for 5-year integrated law) or Bachelor\'s degree with minimum 45-50% aggregate (for 3-year LL.B). Mandatory enrollment with the State Bar Council and clearance of AIBE within 2 years of provisional enrollment.',
    certificationsAndExams: [
      'CLAT (Common Law Admission Test - Consortium of NLUs)',
      'All India Bar Examination (AIBE - Bar Council of India)',
      'State Judicial Services Examination (for Civil Judge Junior Division recruitment)'
    ],
    workEnvironment: 'District and Sessions Courts, High Courts, Supreme Court of India (New Delhi), advocate chambers, legal aid clinics, and arbitration tribunals.',
    marketDemand: 'High',
    jobOutlook: 'Steady and recession-proof; increasing litigation across commercial arbitration, criminal law, property disputes, consumer rights, and public interest litigations (PIL).',
    salaryRange: { min: 300000, max: 2500000, currency: 'INR', source: 'Bar Council of India Guidelines, AmbitionBox Litigation Lawyer Salary' },
    salarySource: 'Bar Council of India Guidelines, AmbitionBox Litigation Lawyer Salary',
    salaryByExperience: {
      entryLevel: { min: 300000, max: 600000, label: 'Junior Advocate / Chamber Associate (0–2 yrs)' },
      earlyCareer: { min: 600000, max: 1400000, label: 'Practicing Advocate / Independent Counsel (3–5 yrs)' },
      experienced: { min: 1400000, max: 3500000, label: 'Senior Counsel / Designated Senior Advocate (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Junior advocates in senior chambers start with stipends of ₹20,000–45,000/month; established independent trial advocates in High Courts earn ₹15–30+ LPA; designated Senior Advocates (Senior Counsel) charging per-appearance fees earn upwards of ₹50 Lakhs to several Crores.'
    },
    careerProgression: [
      'Junior Advocate / Chamber Apprentice',
      'Independent Practicing Advocate (Trial Courts)',
      'High Court Counsel / Advocate-on-Record (AOR - Supreme Court)',
      'Designated Senior Advocate (by High Court / Supreme Court)',
      'High Court / Supreme Court Judge / Advocate General'
    ],
    employmentSectors: {
      government: 'Public Prosecutors (APO / APP via State PSC), Standing Counsel for Union of India, State Judicial Services (Civil Judge / Magistrate), Government Pleaders',
      privateSector: 'Independent Chamber Litigation Practices, Senior Counsel Chambers, Law Firms, Legal Aid NGOs'
    },
    timelineOverview: {
      totalEstimatedDuration: '5.5–6 Years from 10+2 (5 Years B.A. LL.B + AIBE examination)',
      educationDuration: '5 Years (Integrated) or 3 Years (Post-Graduation)',
      prepDuration: '6–12 Months preparation for CLAT or university law entrance',
      practicalTrainingDuration: 'Mandatory moot courts and 20 weeks total internships during law school',
      jobSearchDuration: 'Immediate chamber attachment post-enrollment with State Bar Council',
      overlapNotes: 'Court internships with trial advocates and judges take place during semester vacations.',
      confidenceNote: 'Clearing the Supreme Court Advocate-on-Record (AOR) examination after 5 years of practice grants exclusive right to file cases before the Supreme Court of India.'
    },
    sources: [
      { title: 'Bar Council of India (BCI) Official Rules & Regulations', url: 'https://www.barcouncilofindia.org', sourceAuthority: 'Bar Council of India', verifiedDate: '2024-10-14' },
      { title: 'Consortium of National Law Universities (CLAT)', url: 'https://consortiumofnlus.ac.in', sourceAuthority: 'Consortium of NLUs', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Litigation Lawyer Career Roadmap',
      description: 'Court advocacy pathway: CLAT entrance, BCI-approved LL.B degree, moot court advocacy, court internships, State Bar Council enrollment, AIBE clearance, and chamber practice.',
      totalEstimatedDuration: '5.5 Years',
      durationBreakdown: 'Integrated Law Degree (B.A. LL.B): 5 Years | Bar Council Enrollment & AIBE Exam: 6 Months | Junior Chamber Practice: 2 Years',
      overlapNotes: 'Court internships and legal aid clinic work proceed during each semester break.',
      steps: [
        {
          stepNumber: 1,
          title: 'CLAT Entrance & Constitutional Law Foundations',
          stageType: 'education',
          duration: 'Years 1–2 (Law School)',
          description: 'Crack CLAT or university entrance; master Constitutional Law, Law of Torts, Indian Penal Code (Bharatiya Nyaya Sanhita - BNS), Law of Contracts, and Family Law.',
          topics: ['Constitutional Law & Fundamental Rights Writs', 'Criminal Law (IPC / BNS & CrPC / BNSS)', 'Law of Contracts & Specific Relief Act', 'Legal Method & Case Law Precedent Research'],
          skillsToAcquire: ['Legal Research on SCC Online / Manupatra', 'Briefing Landmark Case Judgments', 'Oral Legal Argumentation'],
          activities: ['Participate in 2 national moot court competitions drafting memorial memorials', 'Complete a 4-week trial court internship observing criminal and civil proceedings'],
          completionCriteria: 'Clear 1st and 2nd year law school examinations with good academic standing.',
          dependencies: '10+2 from recognized board and qualifying CLAT score',
          resources: [
            { name: 'Consortium of NLUs Official Portal', url: 'https://consortiumofnlus.ac.in', type: 'Official Portal', isFree: true },
            { name: 'SCC Online Legal Research Platform', url: 'https://www.scconline.com', type: 'Legal Database', isFree: false }
          ]
        },
        {
          stepNumber: 2,
          title: 'Procedural Codes, Evidence Act & Moot Court Mastery',
          stageType: 'skill_acquisition',
          duration: 'Years 3–4 (Law School)',
          description: 'Master procedural laws: Code of Civil Procedure (CPC), Bharatiya Sakshya Adhiniyam (Indian Evidence Act), commercial arbitration, and drafting of plaints and petitions.',
          topics: ['Civil Procedure Code (Pleadings, Injunctions, Appeals)', 'Law of Evidence & Burden of Proof', 'Drafting, Pleading and Conveyancing (Plaints, Written Statements)', 'Arbitration and Conciliation Act 1996'],
          skillsToAcquire: ['Drafting Legal Notices and Plaints', 'Formulating Cross-Examination Questions', 'Moot Court Oral Advocacy'],
          activities: ['Draft a comprehensive civil suit plaint and interim injunction application in drafting clinic', 'Win best memorial or speaker citation in a national inter-university moot court competition'],
          completionCriteria: 'Pass procedural law and drafting clinical papers with high marks.',
          dependencies: 'Constitutional and Substantive Law Foundations',
          resources: [
            { name: 'Supreme Court of India Official Judgments Archive', url: 'https://main.sci.gov.in', type: 'Official Judicial Portal', isFree: true },
            { name: 'Bar Council of India Legal Education Rules', url: 'https://www.barcouncilofindia.org', type: 'Official Rules', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'State Bar Council Enrollment & All India Bar Examination (AIBE)',
          stageType: 'certification',
          duration: 'Year 5 + 6 Months Post-Graduation',
          description: 'Graduate with LL.B degree; apply for provisional enrollment with the State Bar Council, take the legal oath, and clear the open-book All India Bar Examination (AIBE) to receive the Certificate of Practice (COP).',
          topics: ['Advocates Act 1961 & Professional Ethics Standards', 'All India Bar Examination Core Bare Acts', 'State Bar Council Enrollment Formalities'],
          skillsToAcquire: ['Rapid Bare Act Navigation under Exam Conditions', 'Professional Ethics Compliance'],
          activities: ['Enroll with State Bar Council and obtain Advocate ID card and provisional license', 'Appear for and clear the AIBE examination to obtain the lifetime Certificate of Practice (COP)'],
          completionCriteria: 'Issuance of Certificate of Practice (COP) by the Bar Council of India.',
          dependencies: 'Award of LL.B Degree from BCI-recognized college',
          resources: [
            { name: 'All India Bar Examination (AIBE) Official Portal', url: 'https://allindiabarexamination.com', type: 'Official Examination', isFree: true },
            { name: 'Bar Council of India Advocates Act 1961 Text', url: 'https://www.barcouncilofindia.org', type: 'Official Statute', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Chamber Apprenticeship & Independent Court Practice',
          stageType: 'practical_experience',
          duration: '1–2 Years',
          description: 'Join the chambers of an established Senior Advocate or trial court practitioner; prepare case briefs, examine witnesses, argue interim bail/stay applications, and build independent clientele.',
          topics: ['Chamber File Management & Brief Reading', 'Witness Examination & Cross-Examination Strategy', 'Oral Submissions during Admission and Final Hearing'],
          skillsToAcquire: ['Courtroom Demeanor and Spontaneous Rebuttal', 'Cross-Examining Hostile Witnesses', 'Client Counseling and Retainer Structuring'],
          activities: ['Argue independent bail and injunction applications before District and High Courts', 'Manage 20+ active trial court case files under senior mentorship'],
          completionCriteria: 'Establish successful independent litigation practice or partnership in a litigation firm.',
          dependencies: 'Certificate of Practice from BCI',
          resources: [
            { name: 'High Court Rules and Orders of Respective States', url: 'https://main.sci.gov.in', type: 'Official Rules', isFree: true },
            { name: 'LiveLaw Legal News and Analysis Portal', url: 'https://www.livelaw.in', type: 'Legal Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'corporate-lawyer',
    title: 'Corporate Lawyer (M&A / PE-VC / Banking Law)',
    description: 'Structures cross-border mergers & acquisitions (M&A), private equity (PE) and venture capital (VC) fundraising rounds, commercial joint ventures, and capital market IPO filings. Drafts Shareholders\' Agreements (SHA), conducts legal due diligence, and advises on SEBI and FDI compliance across Tier-1 law firms and multinational corporations.',
    educationRequirements: '5-Year Integrated B.A. LL.B / B.B.A. LL.B (preferred from top National Law Universities like NLSIU Bengaluru, NALSAR Hyderabad, WBNUJS Kolkata) or 3-Year LL.B. BCI enrollment and corporate internship pedigree.',
    educationPathways: [
      'Top National Law University (NLU) degree via CLAT -> Campus Recruitment by Tier-1 Law Firms (CAM, SAM, Khaitan, Trilegal)',
      'LL.B + Company Secretary (CS) dual qualification (highly prized for corporate governance and secretarial compliance)',
      'LL.M in Corporate & Commercial Law (from global universities like Harvard, Oxford, Cambridge, NUS or top Indian NLUs)'
    ],
    eligibilityRequirements: 'Graduation in Law (LL.B) from a BCI-recognized university. Enrollment with the Bar Council of India. High analytical contract drafting capability and mastery of Companies Act 2013 and SEBI regulations.',
    certificationsAndExams: [
      'All India Bar Examination (AIBE)',
      'SEBI Listing Regulations (LODR) & Takeover Code Specialization',
      'Certificate in Cross-Border M&A and Private Equity Drafting'
    ],
    workEnvironment: 'Tier-1 corporate law firms (Cyril Amarchand Mangaldas, Shardul Amarchand Mangaldas, Khaitan & Co, Trilegal, AZB & Partners) and corporate in-house legal departments in Mumbai, Delhi NCR, and Bengaluru.',
    marketDemand: 'Very High',
    jobOutlook: 'Surging demand driven by record Indian M&A activity, private equity investments, startup funding rounds, and booming IPO listings on BSE/NSE.',
    salaryRange: { min: 900000, max: 3500000, currency: 'INR', source: 'Tier-1 Law Firm Pay Scales 2024, AmbitionBox Corporate Lawyer Salary' },
    salarySource: 'Tier-1 Law Firm Pay Scales 2024, AmbitionBox Corporate Lawyer Salary',
    salaryByExperience: {
      entryLevel: { min: 900000, max: 1800000, label: 'Junior Associate (Tier-1 Firm) (0–2 yrs)' },
      earlyCareer: { min: 1800000, max: 3200000, label: 'Senior Associate / Principal Associate (3–5 yrs)' },
      experienced: { min: 3200000, max: 6500000, label: 'Partner / General Counsel (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Tier-1 law firms (CAM, SAM, Khaitan, Trilegal, AZB) pay starting packages of ₹16–20 LPA for fresh NLU graduates. Equity Partners in top corporate law firms earn ₹1 to ₹4+ Crores annually.'
    },
    careerProgression: [
      'Associate (Corporate Practice)',
      'Senior Associate',
      'Principal Associate',
      'Partner (Salaried / Non-Equity)',
      'Equity Partner / In-House General Counsel'
    ],
    employmentSectors: {
      government: 'Insolvency and Bankruptcy Board of India (IBBI), Competition Commission of India (CCI), SEBI Legal Division, National Company Law Tribunal (NCLT)',
      privateSector: 'Tier-1 Corporate Law Firms (Cyril Amarchand, Shardul Amarchand, Khaitan & Co, Trilegal, AZB), In-House Legal Departments (Google, Amazon, Reliance, Tata, HDFC)'
    },
    timelineOverview: {
      totalEstimatedDuration: '5 Years (Integrated B.A. LL.B)',
      educationDuration: '5 Years (10 Semesters at National Law University)',
      prepDuration: 'CLAT coaching during 11th/12th grade',
      practicalTrainingDuration: 'Multiple 4-8 week internships at corporate law firms throughout law school',
      jobSearchDuration: 'Direct campus placement in 4th/5th year at premier NLUs (zero waiting period)',
      overlapNotes: 'Law school corporate internships frequently lead to Pre-Placement Offers (PPOs) in the 4th year.',
      confidenceNote: 'Corporate law firm hiring at premier NLUs (NLSIU, NALSAR, NUJS) achieves nearly 100% placement for candidates with top corporate internships.'
    },
    sources: [
      { title: 'National Law School of India University (NLSIU) Placement Trends', url: 'https://www.nls.ac.in', sourceAuthority: 'NLSIU Bengaluru', verifiedDate: '2024-10-14' },
      { title: 'Bar Council of India Corporate Practice Regulations', url: 'https://www.barcouncilofindia.org', sourceAuthority: 'Bar Council of India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Corporate Lawyer (M&A & PE Track) Career Roadmap',
      description: 'Corporate legal pathway: CLAT, National Law University curriculum, corporate due diligence, Share Purchase Agreements (SPA), SEBI securities regulations, Tier-1 law firm associate hiring, and partnership.',
      totalEstimatedDuration: '5 Years',
      durationBreakdown: 'Law School Foundations (Corporate & Contract Law): 2 Years | M&A, Securities & Due Diligence Internships: 2 Years | Pre-Placement Offer & Law Firm Induction: 1 Year',
      overlapNotes: 'Internships at Tier-1 law firms during winter and summer breaks are essential for securing PPOs.',
      steps: [
        {
          stepNumber: 1,
          title: 'Corporate Law, Contracts & Commercial Jurisprudence',
          stageType: 'education',
          duration: 'Years 1–2',
          description: 'Master Indian Contract Act 1872, Companies Act 2013 (incorporation, share capital, directors\' duties, board meetings), and corporate financial accounting.',
          topics: ['Companies Act 2013 Key Provisions', 'Breach of Contract & Liquidated Damages Principles', 'Corporate Governance & Director Fiduciary Duties', 'Understanding Balance Sheets and Corporate Finance'],
          skillsToAcquire: ['Close Reading of Statutory Corporate Sections', 'Analyzing Company Financial Disclosures', 'Legal Research on MCA Notifications'],
          activities: ['Draft a comprehensive commercial service agreement with indemnification and limitation of liability clauses', 'Maintain top 10% class rank in corporate law subjects at law school'],
          completionCriteria: 'Clear corporate law and contract examinations with high distinction.',
          dependencies: 'Admission to BCI-recognized law program via CLAT',
          resources: [
            { name: 'Ministry of Corporate Affairs Portal (MCA21)', url: 'https://www.mca.gov.in', type: 'Government Portal', isFree: true },
            { name: 'Ramasaiya’s Guide to the Companies Act', url: 'https://www.lexisnexis.in', type: 'Essential Commentary', isFree: false }
          ]
        },
        {
          stepNumber: 2,
          title: 'Legal Due Diligence, M&A & Private Equity Transactions',
          stageType: 'skill_acquisition',
          duration: 'Years 3–4',
          description: 'Master transaction documents: Non-Disclosure Agreements (NDA), Term Sheets, Shareholders\' Agreements (SHA), Share Purchase Agreements (SPA), and legal due diligence audits.',
          topics: ['Legal Due Diligence Audit Checklists (Corporate, Labor, IP, Litigation)', 'Share Purchase Agreement (SPA) Representations and Warranties', 'Shareholders\' Agreement (SHA) Governance Clauses (Tag-Along, Drag-Along, RoFR)', 'Foreign Direct Investment (FDI) & FEMA Regulations'],
          skillsToAcquire: ['Red-Flag Legal Due Diligence Report Compilation', 'Drafting Complex Condition Precedents (CPs) and Indemnity Clauses', 'Negotiating Term Sheet Valuation Clauses'],
          activities: ['Review a simulated Virtual Data Room (VDR) and prepare a comprehensive legal due diligence report', 'Draft a complete Shareholders\' Agreement for a venture capital funding round'],
          completionCriteria: 'Complete successful corporate internships at Tier-1/Tier-2 law firms with excellent mentor ratings.',
          dependencies: 'Corporate and Contract Law Foundations',
          resources: [
            { name: 'Reserve Bank of India (RBI) Foreign Exchange Management Guidelines', url: 'https://www.rbi.org.in', type: 'Government Regulations', isFree: true },
            { name: 'Lawctopus Law Student Internship Guides', url: 'https://www.lawctopus.com', type: 'Community Resource', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Capital Markets, SEBI Regulations & Competition Law',
          stageType: 'skill_acquisition',
          duration: 'Year 5',
          description: 'Master SEBI ICDR (Issue of Capital and Disclosure Requirements) for IPO filings (DRHP drafting), SEBI LODR compliance, SEBI Takeover Code (SAST), and Competition Commission of India (CCI) merger clearances.',
          topics: ['Draft Red Herring Prospectus (DRHP) Preparation', 'SEBI (SAST) Mandatory Open Offer Triggers', 'SEBI (Prohibition of Insider Trading) Regulations 2015', 'Competition Act 2002 Merger Thresholds (Form I / II Filings)'],
          skillsToAcquire: ['Drafting DRHP Risk Factors and Business Overview', 'Insider Trading Code of Conduct Verification', 'CCI Combination Notification Assessment'],
          activities: ['Review an active commercial IPO DRHP filed on SEBI portal analyzing risk disclosures', 'Draft a notification form for a hypothetical cross-border merger seeking CCI clearance'],
          completionCriteria: 'Securing a Pre-Placement Offer (PPO) or campus placement offer at a leading corporate law firm.',
          dependencies: 'M&A and Transaction Law Proficiency',
          resources: [
            { name: 'Securities and Exchange Board of India (SEBI) Regulations Portal', url: 'https://www.sebi.gov.in', type: 'Regulatory Portal', isFree: true },
            { name: 'Competition Commission of India (CCI)', url: 'https://www.cci.gov.in', type: 'Government Portal', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Tier-1 Law Firm Associate Appointment & Transaction Closing',
          stageType: 'practical_experience',
          duration: 'Post-Graduation Progression',
          description: 'Join corporate law firm as Associate; manage transaction closings, coordinate regulatory filings, redline agreements during live client negotiations, and advance toward partnership.',
          topics: ['Transaction Signing & Closing Mechanics', 'Escrow Agreements & Deferred Consideration Accounts', 'Managing Cross-Border Client Video Negotiations'],
          skillsToAcquire: ['High-Stakes Live Contract Redlining', 'Managing Multi-Firm Closing Calls', 'Client Commercial Relationship Building'],
          activities: ['Execute closing formalities for a $50M+ private equity acquisition', 'Complete State Bar Council enrollment and clear AIBE'],
          completionCriteria: 'Promotion to Senior Associate within 3–4 years; building book of commercial client business.',
          dependencies: 'Degree completion and law firm recruitment',
          resources: [
            { name: 'Cyril Amarchand Mangaldas Careers', url: 'https://www.cyrilshroff.com/careers/', type: 'Firm Portal', isFree: true },
            { name: 'Khaitan & Co Careers', url: 'https://www.khaitanco.com/careers', type: 'Firm Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'hotel-manager',
    title: 'Hotel General Manager (Hospitality & Luxury Resort)',
    description: 'Oversees luxury hotel and resort operations including front office guest services, food & beverage (F&B) operations, housekeeping standards, revenue management (RevPAR, ADR), and corporate banquet sales across Indian and global hotel chains (Taj, Oberoi, ITC, Marriott).',
    educationRequirements: 'B.Sc in Hospitality and Hotel Administration (3 years) via the National Council for Hotel Management and Catering Technology (NCHMCT JEE) from premier Institutes of Hotel Management (IHM Pusa, IHM Mumbai, IHM Bengaluru).',
    educationPathways: [
      'B.Sc in Hospitality & Hotel Administration (3 years via NCHMCT JEE from central IHMs)',
      'Management Training Program (MT): Direct corporate selection into premier luxury hotel management training (e.g., Taj Management Training Programme - TMTP, Oberoi Centre of Learning & Development - OCLD)',
      'MBA in Hospitality & Tourism Management (2 years)'
    ],
    eligibilityRequirements: '10+2 with English as a compulsory subject from any recognized board. Clearing NCHMCT JEE national entrance examination. Excellent interpersonal communication and customer service orientation.',
    certificationsAndExams: [
      'NCHMCT JEE (National Council for Hotel Management Joint Entrance Exam)',
      'Certified Hotel Administrator (CHA - AHLEI)',
      'Food Safety Supervisor Certification (FSSAI FoSTaC)'
    ],
    workEnvironment: 'Luxury 5-star hotels, heritage palaces (Udaipur, Jaipur), business hotels in metros, destination beach resorts (Goa, Kerala), and cruise liners.',
    marketDemand: 'High',
    jobOutlook: 'Rapid expansion driven by India\'s tourism boom, wedding hospitality, business conferences (MICE tourism), and international hotel chains opening 100+ new properties across Tier-2/3 cities.',
    salaryRange: { min: 400000, max: 2200000, currency: 'INR', source: 'IHM Campus Placement Reports 2024, AmbitionBox Hotel Manager' },
    salarySource: 'IHM Campus Placement Reports 2024, AmbitionBox Hotel Manager',
    salaryByExperience: {
      entryLevel: { min: 400000, max: 650000, label: 'Management Trainee / Assistant Manager (0–2 yrs)' },
      earlyCareer: { min: 650000, max: 1200000, label: 'Front Office / F&B Operations Manager (3–5 yrs)' },
      experienced: { min: 1200000, max: 3000000, label: 'Hotel General Manager (GM) / Resident Manager (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'General Managers of premier luxury 5-star properties (Taj Mahal Palace, Oberoi Mumbai) earn ₹25–50+ LPA plus fully furnished on-property luxury residential suite, executive car, and club memberships.'
    },
    careerProgression: [
      'Operational Trainee / Management Trainee (MT)',
      'Assistant Manager (Front Office / F&B)',
      'Department Head (F&B Director / Rooms Division Manager)',
      'Resident Manager / Hotel Operations Manager',
      'Hotel General Manager (GM) / Area Director'
    ],
    employmentSectors: {
      government: 'India Tourism Development Corporation (ITDC Ashok Group), State Tourism Development Corporations, IRCTC Luxury Train Operations (Maharajas\' Express)',
      privateSector: 'Luxury Hospitality Chains (IHCL Taj Group, Oberoi Hotels & Resorts, ITC Hotels), Global Hotel MNCs (Marriott International, Hyatt, Accor, Hilton)'
    },
    timelineOverview: {
      totalEstimatedDuration: '3–5 Years (3 Years B.Sc IHM + 1–2 Years Management Trainee tenure)',
      educationDuration: '3 Years (6 Semesters B.Sc Hospitality)',
      prepDuration: '3–6 Months NCHMCT JEE entrance preparation',
      practicalTrainingDuration: '20 Weeks mandatory industrial exposure training in a 5-star hotel',
      jobSearchDuration: 'Direct campus recruitment at IHM centralized placement drives',
      overlapNotes: 'Industrial training takes place during the 3rd or 4th semester.',
      confidenceNote: 'Securing entry into the Oberoi Centre of Learning & Development (OCLD) or Taj Management Training Programme (TMTP) guarantees fast-track promotion to General Manager within 7–10 years.'
    },
    sources: [
      { title: 'National Council for Hotel Management and Catering Technology (NCHMCT)', url: 'https://nchm.gov.in', sourceAuthority: 'Ministry of Tourism India', verifiedDate: '2024-10-14' },
      { title: 'Oberoi Centre of Learning and Development (OCLD)', url: 'https://www.oberoihotels.com/careers/', sourceAuthority: 'The Oberoi Group', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Hotel General Manager Career Roadmap',
      description: 'Hospitality leadership route: NCHMCT JEE, IHM curriculum, 20-week 5-star industrial training, management training program (TMTP/OCLD), room division management, and hotel General Manager leadership.',
      totalEstimatedDuration: '5 Years',
      durationBreakdown: 'B.Sc Hospitality Degree & 20-Week Industrial Training: 3 Years | Luxury Hotel Management Training (MT): 2 Years | General Manager Progression: Post-MT',
      overlapNotes: '20 weeks of full-time operational hospital training in a 5-star hotel is integrated into the 2nd year.',
      steps: [
        {
          stepNumber: 1,
          title: 'NCHMCT JEE & Four Core Hotel Operational Disciplines',
          stageType: 'education',
          duration: 'Year 1',
          description: 'Qualify NCHMCT JEE; master the 4 core hotel operational departments: Food Production (Culinary), Food & Beverage Service, Front Office Operations, and Housekeeping.',
          topics: ['Front Office Check-in / Check-out & Property Management Systems (Opera)', 'Housekeeping Room Cleaning Standards & Laundry Operations', 'F&B Service Table Laying & French/Russian Service Styles', 'Basic Food Production, Knife Skills & Hygiene Norms'],
          skillsToAcquire: ['Property Management System (Opera PMS) Navigation', 'Polished Hospitality Etiquette and Grooming', 'Table Setting and Silver Service'],
          activities: ['Operate mock hotel front desk check-in simulations in IHM laboratory', 'Prepare 3-course French classical menu in training production kitchen'],
          completionCriteria: 'Clear 1st year university theory and practical examinations.',
          dependencies: '10+2 with English and qualifying NCHMCT JEE rank',
          resources: [
            { name: 'NCHMCT Official Academic Portal', url: 'https://nchm.gov.in', type: 'Official Portal', isFree: true },
            { name: 'Hotel Front Office Management by James Bardi', url: 'https://www.wiley.com', type: 'Textbook Reference', isFree: false }
          ]
        },
        {
          stepNumber: 2,
          title: '20-Week Industrial Exposure Training in a 5-Star Hotel',
          stageType: 'practical_experience',
          duration: 'Year 2 (Semesters 3–4)',
          description: 'Complete 20 weeks of mandatory, rotational on-the-job industrial training in an accredited 5-star hotel, spending 5 weeks each in Kitchen, F&B Service, Front Office, and Housekeeping.',
          topics: ['Live VIP Guest Arrival and Luggage Handling', 'Banquet Event Setup & High-Volume Dining Service', 'Turn-down Housekeeping Service in Luxury Guest Rooms', 'Kitchen Prep and Mise en Place under Executive Chefs'],
          skillsToAcquire: ['Guest Complaint De-escalation Techniques', 'High-Stamina Shift Work under Demanding Operational Standards', 'Cross-Departmental Shift Communication'],
          activities: ['Log 800+ operational hours across all 4 core departments in a luxury hotel', 'Obtain satisfactory industrial training appraisal report certified by Hotel General Manager'],
          completionCriteria: 'Completion of 20 weeks industrial training and submission of training logbook.',
          dependencies: 'Passing 1st Year IHM Coursework',
          resources: [
            { name: 'IHCL Taj Hotels Industrial Training Program', url: 'https://www.tajhotels.com', type: 'Company Portal', isFree: true },
            { name: 'Marriott International Training Portal', url: 'https://www.marriott.com/careers', type: 'Company Portal', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Hotel Revenue Management, Marketing & Management Training Selection',
          stageType: 'skill_acquisition',
          duration: 'Year 3',
          description: 'Master hotel revenue management metrics: Average Daily Rate (ADR), Revenue Per Available Room (RevPAR), Occupancy Percentage, dynamic pricing, and clear luxury management trainee interviews.',
          topics: ['Revenue Management Formulas (RevPAR, ADR, GOPPAR)', 'Hotel Financial Accounting & Uniform System of Accounts for Lodging (USALI)', 'F&B Menu Engineering & Beverage Cost Control', 'Corporate Management Trainee (MT) Assessment Panels'],
          skillsToAcquire: ['Dynamic Room Rate Pricing Calculations', 'Hotel Operating P&L Analysis', 'Corporate Group Discussion Leadership'],
          activities: ['Model dynamic room rate pricing scenarios to optimize RevPAR during peak conference season', 'Clear rigorous multi-round selection for Taj Management Training (TMTP) or Oberoi OCLD'],
          completionCriteria: 'Award of B.Sc degree and selection into a corporate Management Trainee (MT) program.',
          dependencies: 'Completion of Industrial Training and academic coursework',
          resources: [
            { name: 'AHLEI Hospitality Management Certifications', url: 'https://www.ahlei.org', type: 'Professional Society', isFree: false },
            { name: 'OCLD Program Application Portal', url: 'https://www.oberoigroup.com/careers/ocld', type: 'Corporate Academy', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Management Trainee Program & General Manager Appointment',
          stageType: 'practical_experience',
          duration: '2 Years Post-Graduation',
          description: 'Complete 18-24 months intensive leadership training in luxury hotel chain; assume departmental leadership as Operations Manager, advancing to Hotel General Manager.',
          topics: ['Total Quality Management (TQM) in Luxury Hospitality', 'Leading 200+ Multi-Departmental Hotel Staff', 'Owner-Operator Asset Management Alignment'],
          skillsToAcquire: ['Comprehensive Hotel Budget & CAPEX Management', 'VIP Protocol and Diplomatic Dignitary Handling', 'Crisis Evacuation and Emergency Operations'],
          activities: ['Manage an entire hotel department (e.g., Front Office or F&B) achieving 95%+ guest satisfaction scores', 'Deliver annual hotel budget presentation to property owners and corporate vice presidents'],
          completionCriteria: 'Appointment as Resident Manager or Hotel General Manager.',
          dependencies: 'Successful completion of Management Training Program',
          resources: [
            { name: 'ITC Hotels Careers Portal', url: 'https://www.itchotels.com/careers', type: 'Company Portal', isFree: true },
            { name: 'Marriott Voyage Leadership Development Program', url: 'https://www.marriott.com/careers/voyage', type: 'Leadership Program', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'chef',
    title: 'Professional Chef / Culinary Arts Specialist',
    description: 'Directs kitchen food production, menu development, culinary recipe formulation, kitchen brigade coordination, and strict food hygiene (HACCP/FSSAI) across luxury hotel kitchens, fine-dining restaurants, and international cruise liners.',
    educationRequirements: 'B.Sc in Hospitality & Hotel Administration / B.A. in Culinary Arts (3 to 4 years from IHM, Culinary Academy of India Hyderabad, or Welcomgroup Graduate School Manipal) or Diploma in Food Production + hands-on kitchen brigade experience.',
    educationPathways: [
      'B.A. / B.Sc in Culinary Arts (3 years from Culinary Academy of India or IHM)',
      'Diploma in Food Production (1.5 years including 6 months industrial training)',
      'Apprenticeship Route: Commis Chef in professional hotel kitchen climbing the brigade system'
    ],
    eligibilityRequirements: '10+2 from any recognized board. Passion for gastronomy, sensory palette excellence, culinary stamina, and knife precision.',
    certificationsAndExams: [
      'FSSAI FoSTaC (Food Safety Training and Certification)',
      'HACCP (Hazard Analysis Critical Control Point) Food Safety Level 3',
      'Certified Executive Chef (CEC - World Association of Chefs\' Societies - WACS)'
    ],
    workEnvironment: 'Luxury hotel production kitchens (cold kitchen, butchery, hot ranges, bakery & pastry), Michelin-style fine dining standalone restaurants, and luxury banquet facilities.',
    marketDemand: 'High',
    jobOutlook: 'Surging demand driven by India\'s booming standalone gourmet restaurant culture, luxury destination weddings, boutique cafes, and cloud kitchen networks.',
    salaryRange: { min: 300000, max: 1500000, currency: 'INR', source: 'Indian Federation of Culinary Associations (IFCA), AmbitionBox Chef Salary' },
    salarySource: 'Indian Federation of Culinary Associations (IFCA), AmbitionBox Chef Salary',
    salaryByExperience: {
      entryLevel: { min: 300000, max: 480000, label: 'Commis III / Commis II Chef (0–2 yrs)' },
      earlyCareer: { min: 480000, max: 900000, label: 'Demi Chef de Partie (DCDP) / Chef de Partie (CDP) (3–5 yrs)' },
      experienced: { min: 900000, max: 2200000, label: 'Sous Chef / Executive Chef (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Executive Chefs managing mega-banqueting operations and multi-outlet luxury 5-star properties in Mumbai/Delhi earn ₹20–40+ LPA; celebrity chefs and restaurant co-owners earn significantly higher.'
    },
    careerProgression: [
      'Commis III / Commis II (Line Cook)',
      'Commis I / Demi Chef de Partie (DCDP)',
      'Chef de Partie (Station Chef / CDP)',
      'Sous Chef / Executive Sous Chef',
      'Executive Chef / Director of Culinary Operations'
    ],
    employmentSectors: {
      government: 'Indian Railway Catering and Tourism Corporation (IRCTC Executive Chefs), State Bhavan Guest Kitchens, Defense Mess Establishments',
      privateSector: 'Luxury Hotels (Taj, Oberoi, ITC, Marriott), Standalone Fine-Dining Chains, International Cruise Liners (Royal Caribbean, Carnival), Airline Catering Units (TajSats, Ambassador Sky Chef)'
    },
    timelineOverview: {
      totalEstimatedDuration: '3–5 Years (Culinary Degree + Progressive Kitchen Brigade Experience)',
      educationDuration: '3 Years (Degree) or 1.5 Years (Diploma)',
      prepDuration: 'Hands-on kitchen knife skills and classical cooking techniques practice',
      practicalTrainingDuration: '6 Months mandatory industrial kitchen training in a 5-star hotel kitchen',
      jobSearchDuration: 'Immediate kitchen trial (food tasting trade test) and placement',
      overlapNotes: 'Kitchen trials (cooking 3 dishes under timed conditions) decide hiring regardless of degree.',
      confidenceNote: 'Chefs must be prepared for rigorous 12–14 hour shifts on their feet in hot commercial kitchen environments.'
    },
    sources: [
      { title: 'Indian Federation of Culinary Associations (IFCA)', url: 'https://ifcaindia.com', sourceAuthority: 'IFCA India', verifiedDate: '2024-10-14' },
      { title: 'World Association of Chefs\' Societies (Worldchefs)', url: 'https://worldchefs.org', sourceAuthority: 'Worldchefs', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Professional Chef Career Roadmap',
      description: 'Culinary arts route: classical knife skills, French mother sauces, butchery fabrication, HACCP food hygiene, station line cooking (CDP), menu engineering, and Executive Chef leadership.',
      totalEstimatedDuration: '4 Years',
      durationBreakdown: 'Culinary Fundamentals & Knife Skills: 1 Year | European & Indian Regional Gastronomy: 1 Year | 5-Star Hotel Kitchen Internship & Commis Role: 1 Year | Chef de Partie & Menu Design: 1 Year',
      overlapNotes: 'Daily cooking practice in commercial labs proceeds alongside academic culinary theory.',
      steps: [
        {
          stepNumber: 1,
          title: 'Culinary Foundations, Knife Skills & Food Safety (HACCP)',
          stageType: 'education',
          duration: '1 Year',
          description: 'Master commercial knife cuts (Julienne, Brunoise, Batonnet, Chiffonade), kitchen brigade hierarchy (Escoffier system), food hygiene (temperature danger zone 5°C–60°C), and kitchen equipment operation.',
          topics: ['Classic French Knife Cuts & Whetstone Sharpening', 'Escoffier Kitchen Brigade System Roles', 'HACCP Food Safety & FSSAI Cleanliness Protocols', 'Mise en Place & Kitchen Organization'],
          skillsToAcquire: ['High-Speed Precision Knife Skills', 'Safe Food Handling & Cross-Contamination Prevention', 'Kitchen Station Organization'],
          activities: ['Execute 500 grams of flawless brunoise and julienne vegetable cuts under timed evaluation', 'Complete FSSAI Food Safety Supervisor (FoSTaC) certification training'],
          completionCriteria: 'Pass knife skills trade test with zero safety violations.',
          dependencies: '10+2 from recognized board',
          resources: [
            { name: 'The Professional Chef by Culinary Institute of America (CIA)', url: 'https://www.ciachef.edu', type: 'Essential Textbook', isFree: false },
            { name: 'FSSAI Food Safety Training & Certification (FoSTaC)', url: 'https://fostac.fssai.gov.in', type: 'Government Certification', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Stocks, Mother Sauces & Regional Indian Gastronomy',
          stageType: 'skill_acquisition',
          duration: '1 Year',
          description: 'Master white/brown stocks, the 5 classic French mother sauces (Béchamel, Velouté, Espagnole, Tomato, Hollandaise), and regional Indian gravies (Makhani, Korma, Chettinad, Rogan Josh).',
          topics: ['Classical French 5 Mother Sauces & Derivatives', 'Stock Preparation (White Veal, Brown Beef, Fish Fumet)', 'Regional Indian Spices, Tempering (Tadka) & Gravies', 'Meat, Poultry & Seafood Butchery Fabrication'],
          skillsToAcquire: ['Emulsifying Hollandaise Sauce without Breaking', 'Butchery Whole Chicken Fabrication into 8 Cuts', 'Balancing Complex Indian Spice Profiles'],
          activities: ['Prepare all 5 French mother sauces from scratch with correct viscosity and seasoning', 'Fabricate whole fish and poultry verifying zero yield waste'],
          completionCriteria: 'Clear regional and international culinary practical exams with high sensory evaluation scores.',
          dependencies: 'Foundational Knife Skills and Food Safety',
          resources: [
            { name: 'Larousse Gastronomique Reference Encyclopedia', url: 'https://www.hachette.co.uk', type: 'Culinary Encyclopedia', isFree: false },
            { name: 'Indian Federation of Culinary Associations Knowledge Base', url: 'https://ifcaindia.com', type: 'Industry Association', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: '5-Star Hotel Kitchen Internship & Commis Chef Appointment',
          stageType: 'practical_experience',
          duration: '1 Year',
          description: 'Complete 6-month industrial kitchen training in a 5-star hotel kitchen, work as Commis Chef handling live dinner service orders, and master fast station execution.',
          topics: ['Commercial Line Cooking under Rush Hour Tickets', 'Grill, Sauté, and Tandoor Station Operation', 'Cold Kitchen (Garde Manger) Salad and Charcuterie Prep'],
          skillsToAcquire: ['High-Speed Station Line Cooking', 'Maintaining Perfect Ticket Timing during Peak Service', 'Consistent Flavor Replication across 100+ Covers'],
          activities: ['Operate hot line sauté or tandoor station during a 150-cover dinner rush with zero customer returns', 'Complete trade test (cooking a 3-course basket tasting menu for the Executive Chef)'],
          completionCriteria: 'Appointment as Commis I / Demi Chef de Partie in a recognized hotel kitchen.',
          dependencies: 'Culinary degree/diploma completion',
          resources: [
            { name: 'Taj Hotels Culinary Careers', url: 'https://www.tajhotels.com', type: 'Company Portal', isFree: true },
            { name: 'World Association of Chefs\' Societies (Worldchefs)', url: 'https://worldchefs.org', type: 'Global Association', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Menu Engineering, Food Costing & Executive Chef Leadership',
          stageType: 'skill_acquisition',
          duration: '1–2 Years',
          description: 'Advance to Chef de Partie and Sous Chef; design seasonal menus, engineer food cost percentages (< 28–32%), manage kitchen staff scheduling, and lead kitchen brigade.',
          topics: ['Menu Engineering (Stars, Plowhorses, Puzzles, Dogs)', 'Food Costing & Yield Management (EP vs AP Costing)', 'Plating Aesthetics & Modern Gastronomy Techniques (Sous Vide)'],
          skillsToAcquire: ['Controlling Commercial Kitchen Food Cost (< 30%)', 'Modern Fine-Dining Plating Aesthetics', 'Kitchen Brigade Leadership and Scheduling'],
          activities: ['Design and price a complete seasonal restaurant menu achieving target 28% food cost margin', 'Supervise a brigade of 15 cooks and stewards during banqueting service'],
          completionCriteria: 'Promotion to Sous Chef or appointment as Head Chef in fine-dining restaurant.',
          dependencies: '3+ years continuous commercial kitchen experience',
          resources: [
            { name: 'The Flavor Bible by Karen Page and Andrew Dornenburg', url: 'https://www.hachettebookgroup.com', type: 'Flavor Reference', isFree: false },
            { name: 'Restaurant Hospitality Management Guidelines', url: 'https://www.restaurant-hospitality.com', type: 'Industry Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'airline-pilot',
    title: 'Commercial Airline Pilot (DGCA CPL / ATPL)',
    description: 'Commands commercial multi-engine passenger aircraft across domestic and international flight routes. Conducts pre-flight navigation planning, instrument flying under Instrument Flight Rules (IFR), emergency procedures, and crew resource management (CRM) under DGCA flight safety regulations.',
    educationRequirements: '10+2 with Physics and Mathematics (minimum 50% aggregate) + Commercial Pilot License (CPL) issued by the Directorate General of Civil Aviation (DGCA) with Multi-Engine Rating and Instrument Rating (IR). Type Rating on commercial jet (Airbus A320 / Boeing 737).',
    educationPathways: [
      'Cadet Pilot Program: Sponsored airline cadet programs (IndiGo Cadet Pilot Program, Air India Flying Academy) covering CPL + Type Rating',
      'Conventional Flying School Route: DGCA ground exams (5 papers) + 200 hours flying training at a DGCA-approved Flying Training Organisation (FTO: IGRUA Raebareli, NFTI Gondia)',
      'Overseas Flight Training (FAA/EASA CPL) with DGCA CPL license conversion in India'
    ],
    eligibilityRequirements: '10+2 with Physics and Mathematics. Minimum age 18 years for CPL issue. Mandatory DGCA Class 1 Medical Fitness certificate with 6/6 distance eyesight (correctable with spectacles).',
    certificationsAndExams: [
      'DGCA Theoretical Examinations (Air Navigation, Aviation Meteorology, Air Regulations, Technical General, Technical Specific)',
      'Radio Telephony Restricted (Aeronautical) License - RTR(A) from WPC Ministry of Communications',
      'DGCA Commercial Pilot License (CPL) with Multi-Engine Instrument Rating',
      'Type Rating on Airbus A320 or Boeing 737-800/MAX'
    ],
    workEnvironment: 'Flight decks of commercial airliners (IndiGo, Air India, SpiceJet, Akasa Air), flight simulators, and international airport flight dispatch operations.',
    marketDemand: 'Very High',
    jobOutlook: 'Massive unprecedented pilot demand fueled by Indian airlines placing record-breaking aircraft orders (over 1,200+ new aircraft ordered by IndiGo and Air India); projected requirement of 1,000+ new pilots annually.',
    salaryRange: { min: 1800000, max: 7500000, currency: 'INR', source: 'DGCA / Indian Airline Pilot Salary Scales 2024, AmbitionBox Airline Pilot' },
    salarySource: 'DGCA / Indian Airline Pilot Salary Scales 2024, AmbitionBox Airline Pilot',
    salaryByExperience: {
      entryLevel: { min: 1800000, max: 2800000, label: 'Junior First Officer (JFO) / First Officer (0–2 yrs)' },
      earlyCareer: { min: 2800000, max: 4500000, label: 'Senior First Officer (SFO) (3–5 yrs)' },
      experienced: { min: 4500000, max: 8500000, label: 'Captain / Commander / Airline Pilot (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'First Officers earn starting salaries of ₹1.5–2.5 Lakhs/month gross; Airline Captains (Commanders) on narrowbody jets (A320/B737) earn ₹4.5–7+ Lakhs/month (~₹55–80+ LPA); Widebody international Captains earn up to ₹1 Crore annually.'
    },
    careerProgression: [
      'Trainee Pilot / Junior First Officer (JFO)',
      'First Officer (FO)',
      'Senior First Officer (SFO)',
      'Captain / Commander (Post 1,500 flight hours & ATPL)',
      'Line Training Captain (LTC) / Type Rating Examiner (TRE) / Chief Pilot'
    ],
    employmentSectors: {
      government: 'Indian Air Force / Coast Guard (Military aviation track), Pawan Hans (Government Helicopter Services), VIP Flight Squadrons',
      privateSector: 'Commercial Passenger Airlines (IndiGo, Air India Group, Vistara, Akasa Air, SpiceJet), Cargo Airlines (Blue Dart Aviation), Private Charter / Business Jet Operators'
    },
    timelineOverview: {
      totalEstimatedDuration: '2–3 Years (from 10+2 to First Officer cockpit seat)',
      educationDuration: '10+2 with Physics and Mathematics',
      prepDuration: '6–9 Months clearing 5 DGCA ground theory exams and RTR(A)',
      practicalTrainingDuration: '12–18 Months logging 200 hours flight training (solo, cross-country, night, multi-engine)',
      jobSearchDuration: '3–6 Months airline recruitment screening, simulator assessment, and Type Rating course',
      overlapNotes: 'DGCA ground exams can be cleared before or during flight training hours.',
      confidenceNote: 'Training costs are capital-intensive (₹45–60 Lakhs for CPL + ₹18–25 Lakhs for Type Rating); airline cadet programs offer financing tie-ups and direct airline job guarantees.'
    },
    sources: [
      { title: 'Directorate General of Civil Aviation (DGCA) Official Portal', url: 'https://dgca.gov.in', sourceAuthority: 'Ministry of Civil Aviation India', verifiedDate: '2024-10-14' },
      { title: 'IndiGo Cadet Pilot Program Details', url: 'https://www.goindigo.in/careers/cadet-pilot-programme.html', sourceAuthority: 'IndiGo Airlines', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Commercial Airline Pilot (DGCA CPL) Career Roadmap',
      description: 'Aviation flight deck route: DGCA Class 1 medical, 5 DGCA ground theory exams, 200 flying hours on single/multi-engine aircraft, DGCA CPL issuance, A320/B737 Type Rating, and Airline First Officer induction.',
      totalEstimatedDuration: '2.5–3 Years',
      durationBreakdown: 'Class 2 & Class 1 Medicals: 3 Months | DGCA Ground Theory Exams & RTR(A): 6 Months | 200 Flying Hours Training at FTO: 12–15 Months | Airline Induction & Type Rating: 6 Months',
      overlapNotes: 'DGCA ground exams and radio telephony exams are cleared alongside simulator/flying training.',
      steps: [
        {
          stepNumber: 1,
          title: 'DGCA Medical Fitness (Class 2 & Class 1) & Computer Number',
          stageType: 'certification',
          duration: '3–4 Months',
          description: 'Obtain DGCA Class 2 medical certificate from an empaneled medical examiner, followed by comprehensive DGCA Class 1 initial medical examination at designated military/civil centers (IAM Bengaluru, AFCME New Delhi), and register for a DGCA Computer Number on eGCA.',
          topics: ['DGCA Class 1 Medical Standards (Vision, Audiometry, ECG, EEG)', 'Applying for DGCA Computer Number on eGCA Portal', 'Verification of 10+2 Marksheets with State/Central Boards'],
          skillsToAcquire: ['Aviation Medical Protocols Compliance', 'eGCA Portal Profile Registration'],
          activities: ['Undergo comprehensive Class 1 medical evaluation at Air Force Central Medical Establishment (AFCME)', 'Receive official DGCA Computer Number enabling registration for pilot examinations'],
          completionCriteria: 'Issuance of DGCA Class 1 Medical Assessment and active Computer Number.',
          dependencies: '10+2 with Physics and Mathematics (minimum 50%)',
          resources: [
            { name: 'DGCA eGCA Online Portal for Pilots', url: 'https://egca.dgca.gov.in', type: 'Official Portal', isFree: true },
            { name: 'DGCA Medical Examination Centers Directory', url: 'https://dgca.gov.in', type: 'Official Directory', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'DGCA Ground Theory Exams & Radio Telephony RTR(A) License',
          stageType: 'education',
          duration: '6–9 Months',
          description: 'Clear all 5 DGCA pilot ground theory examinations: Air Navigation, Aviation Meteorology, Air Regulations, Technical General, and Technical Specific, plus the RTR(A) exam conducted by WPC Ministry of Communications.',
          topics: ['Air Navigation (Plotting, Dead Reckoning, VOR, ILS, GNSS)', 'Aviation Meteorology (Monsoons, Jet Streams, CAT, Thunderstorms)', 'Air Regulations (ICAO Annexes, DGCA CARs, Airspace Classes)', 'Radio Telephony Restricted (Aeronautical) Transmission Procedures'],
          skillsToAcquire: ['Aeronautical Navigation Chart Plotting', 'Aviation Weather METAR and TAF Decoding', 'Standard ICAO Phraseology Radio Communications'],
          activities: ['Solve past question banks for all 5 DGCA ground theory examination modules', 'Pass WPC RTR(A) Part 1 (Transmission) and Part 2 (Viva) examination'],
          completionCriteria: 'Passing score (> 70%) in all 5 DGCA ground theory exams and award of RTR(A) license.',
          dependencies: 'Active DGCA Computer Number',
          resources: [
            { name: 'DGCA Examination Division (Pariksha Portal)', url: 'https://pariksha.dgca.gov.in', type: 'Official Portal', isFree: true },
            { name: 'Wireless Planning & Coordination (WPC) Wing', url: 'https://wpc.dot.gov.in', type: 'Licensing Body', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: '200 Flying Hours Training at Flying School (FTO) & CPL Issue',
          stageType: 'practical_experience',
          duration: '12–15 Months',
          description: 'Enroll in a DGCA-approved Flying Training Organisation (FTO); log 200 flying hours: 100 hours Pilot-in-Command (PIC), 50 hours cross-country, 10 hours night flying, and multi-engine rating checks.',
          topics: ['Basic Flight Maneuvers & Stalls/Spins Recovery', 'Cross-Country Navigation Flights (Minimum 300 NM with 2 Full Stops)', 'Instrument Flight Rules (IFR) Cockpit Blind Flying', 'Multi-Engine Rating (Cessna 172 / Piper Seneca / Diamond DA42)'],
          skillsToAcquire: ['Smooth Visual and Instrument Landings', 'Engine Failure Emergency Procedures in Multi-Engine Aircraft', 'Cockpit Situational Awareness'],
          activities: ['Complete 200 hours of certified flying hours logged in official pilot logbook', 'Clear DGCA Flight Test Checks with Designated Examiners (Skill Tests: Day/Night/IR)'],
          completionCriteria: 'Issuance of official Commercial Pilot License (CPL) with ME/IR endorsement by DGCA.',
          dependencies: 'Clearing DGCA Ground Exams and Class 1 Medical Fitness',
          resources: [
            { name: 'Indira Gandhi Rashtriya Uran Akademi (IGRUA Raebareli)', url: 'https://igrua.gov.in', type: 'National Flying Academy', isFree: true },
            { name: 'DGCA Approved Flying Training Organisations List', url: 'https://dgca.gov.in', type: 'Official Directory', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Airline Selection, Type Rating (A320/B737) & First Officer Induction',
          stageType: 'practical_experience',
          duration: '6 Months',
          description: 'Clear airline pilot recruitment screening (CASS psychometric testing, group tasks, personal interview, simulator assessment); complete Type Rating on Airbus A320 or Boeing 737, and commence airline line training.',
          topics: ['Compass / Pilot Aptitude Screening Battery', 'Full Flight Simulator (FFS Level-D) Jet Assessment', 'Jet Aircraft Type Rating (Systems, FCOM, Flight Management Guidance System)', 'Line Oriented Flight Training (LOFT) & Line Checks'],
          skillsToAcquire: ['Multi-Crew Cooperation (MCC) & Crew Resource Management (CRM)', 'Automated Flight Deck Automation Management (Autopilot / Flight Directors)', 'High-Speed Commercial Jet Energy Management'],
          activities: ['Complete 40+ hours in Level-D Full Flight Simulator executing engine failures and emergency landings', 'Complete 100 hours of commercial passenger route line flying under Check Captain supervision'],
          completionCriteria: 'Release as qualified commercial First Officer operating revenue passenger flights.',
          dependencies: 'Possession of DGCA CPL with ME/IR and Airline Selection',
          resources: [
            { name: 'Air India Pilot Careers Portal', url: 'https://www.airindia.com/careers', type: 'Company Portal', isFree: true },
            { name: 'IndiGo Pilot Recruitment', url: 'https://www.goindigo.in/careers', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'cabin-crew',
    title: 'Flight Attendant / Cabin Crew Specialist',
    description: 'Ensures in-flight passenger safety, performs pre-flight emergency safety checks, operates aircraft emergency doors and evacuation slides, administers aviation first aid, and provides world-class in-flight hospitality across domestic and international passenger airlines.',
    educationRequirements: '10+2 from any recognized board (Graduation preferred for international airlines). Minimum height requirements (Females: 155–157 cm; Males: 170–172 cm; or reach test of 212 cm). Fluency in English and Hindi. Clear medical and aviation security standards.',
    educationPathways: [
      '10+2 / Graduation in any discipline -> Direct Airline Cabin Crew Walk-in Recruitment (IndiGo, Air India, Emirates, Qatar Airways)',
      'Airline In-House Ab-Initio Training: 3 Months intensive residential emergency safety & service training at airline training academies',
      'Diploma in Aviation Hospitality and Travel Management (Optional)'
    ],
    eligibilityRequirements: '10+2 passed from a recognized board. Age between 18 and 27 years. Unblemished skin complexion, normal BMI proportion, excellent eyesight (correctable), clear speech, and swimming proficiency (for international ditching safety).',
    certificationsAndExams: [
      'DGCA Cabin Crew Competency Card / Initial Safety Training Certificate',
      'Aviation First Aid & CPR Certification (St. John Ambulance / DGCA approved)',
      'Dangerous Goods Regulations (DGR) Category 11 Certification'
    ],
    workEnvironment: 'Passenger aircraft passenger cabins (Airbus A320, A350, Boeing 777, 787 Dreamliner), domestic and international transit hotels, and airport base operations.',
    marketDemand: 'Very High',
    jobOutlook: 'Surging demand driven by Indian airlines acquiring 1,200+ new commercial aircraft over the next decade; massive ongoing hiring drives across tier-1 and tier-2 Indian cities.',
    salaryRange: { min: 450000, max: 1400000, currency: 'INR', source: 'Airline Cabin Crew Pay Structure 2024 (Flying Pay + Layover Allowances), AmbitionBox' },
    salarySource: 'Airline Cabin Crew Pay Structure 2024 (Flying Pay + Layover Allowances), AmbitionBox',
    salaryByExperience: {
      entryLevel: { min: 450000, max: 750000, label: 'Trainee Cabin Crew / Flight Attendant (0–2 yrs)' },
      earlyCareer: { min: 750000, max: 1200000, label: 'Lead Cabin Attendant / Senior Crew (3–5 yrs)' },
      experienced: { min: 1200000, max: 2000000, label: 'In-Flight Service Manager (IFSM) / Cabin In-Charge (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Domestic cabin crew earn ₹50,000–85,000/month (Basic + Flying Hourly Pay + Layover Per Diem). International airlines (Emirates, Qatar Airways, Etihad) pay tax-free compensation of ₹1.8–2.5 Lakhs/month plus fully furnished accommodation in Dubai/Doha.'
    },
    careerProgression: [
      'Trainee Cabin Crew',
      'Flight Attendant / Cabin Crew (Economy Class)',
      'Premium Cabin Specialist (Business & First Class)',
      'Lead Flight Attendant / Senior Cabin Crew',
      'In-Flight Service Manager (IFSM) / Base Cabin Crew Manager'
    ],
    employmentSectors: {
      government: 'Air India (VVIP Government Aircraft Fleet), Pawan Hans Helicopter Services',
      privateSector: 'Domestic Commercial Airlines (IndiGo, Air India Group, Vistara, Akasa Air, SpiceJet), International Gulf Carriers (Emirates, Qatar Airways, Etihad, Gulf Air), Private VIP Jet Operators'
    },
    timelineOverview: {
      totalEstimatedDuration: '1–1.5 Years post-10+2 (Interview screening + 3 Months Intensive Airline Training)',
      educationDuration: '10+2 (Higher Secondary)',
      prepDuration: '3–6 Months grooming, conversational English fluency, and interview prep',
      practicalTrainingDuration: '3 Months intensive airline residential safety and emergency training',
      jobSearchDuration: 'Immediate employment upon clearing airline recruitment walk-in drive',
      overlapNotes: 'Airlines provide fully paid training and immediate employment upon completion.',
      confidenceNote: 'Airlines prioritize passenger safety over glamour; passing emergency door evacuation and smoke simulator drills within 90 seconds is mandatory.'
    },
    sources: [
      { title: 'DGCA Civil Aviation Requirements (CAR) Section 7: Cabin Crew Training', url: 'https://dgca.gov.in', sourceAuthority: 'DGCA India', verifiedDate: '2024-10-14' },
      { title: 'IndiGo Cabin Crew Careers Portal', url: 'https://www.goindigo.in/careers/cabin-crew.html', sourceAuthority: 'IndiGo Airlines', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Cabin Crew Career Roadmap',
      description: 'Aviation hospitality and safety pathway: Airline walk-in screening, 3-month DGCA emergency safety training (SEP), firefighting, medical first aid, and in-flight passenger service.',
      totalEstimatedDuration: '1 Year',
      durationBreakdown: 'Grooming & Communication Preparation: 3–6 Months | Airline Recruitment Walk-in: 1 Month | Airline Safety & Emergency Procedures (SEP) Training: 3 Months | Revenue Flight Induction: Post-Training',
      overlapNotes: 'Airline training includes safety mock-ups, pool wet drills, and smoke evacuation simulators.',
      steps: [
        {
          stepNumber: 1,
          title: 'Grooming, Language Fluency & Airline Eligibility Standards',
          stageType: 'education',
          duration: '3–6 Months',
          description: 'Meet mandatory physical criteria (height 155cm+ for females, 170cm+ for males, proportionate BMI), practice clear conversational English/Hindi, customer empathy, and flawless professional grooming.',
          topics: ['Professional Airline Grooming Standards & Posture', 'Conversational English & Hindi Fluency Drills', 'Customer Service Mindset & Emotional Composure', 'Basic Aviation Terminology & Aircraft Types'],
          skillsToAcquire: ['Poised Public Speaking', 'Personal Grooming and Skincare Discipline', 'Customer Complaint Empathy'],
          activities: ['Practice 2-minute extempore speaking rounds on random customer service topics', 'Verify personal height and BMI parameters against official airline eligibility criteria'],
          completionCriteria: 'Pass simulated cabin crew mock recruitment interview.',
          dependencies: '10+2 from recognized board with English',
          resources: [
            { name: 'IndiGo Official Cabin Crew Eligibility Guidelines', url: 'https://www.goindigo.in/careers', type: 'Official Guidelines', isFree: true },
            { name: 'Air India Cabin Crew Career Page', url: 'https://www.airindia.com/careers', type: 'Official Portal', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Airline Selection Days & Assessment Rounds',
          stageType: 'certification',
          duration: '1–2 Months',
          description: 'Attend official airline recruitment open days; clear preliminary height/weight screening, skin inspection (no visible tattoos in uniform), group discussion, and personal interview.',
          topics: ['Group Discussion Dynamics & Active Listening', 'Situational Customer Conflict Scenarios', 'Personal Interview Biodata Presentation'],
          skillsToAcquire: ['Collaborative Group Discussion Leadership', 'Grace under Evaluator Pressure', 'Authentic Welcoming Body Language'],
          activities: ['Participate in airline walk-in interview day competing among 500+ candidates', 'Clear final personal interview round and receive provisional Letter of Intent (LOI)'],
          completionCriteria: 'Receipt of Airline Letter of Intent (LOI) for Cabin Crew Ab-Initio Training.',
          dependencies: 'Meeting physical and educational standards',
          resources: [
            { name: 'Emirates Cabin Crew Open Day Calendar', url: 'https://www.emiratesgroupcareers.com', type: 'Global Airline Portal', isFree: true },
            { name: 'DGCA Medical Examination Standards for Cabin Crew', url: 'https://dgca.gov.in', type: 'Government Regulations', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Safety Equipment and Procedures (SEP) & Emergency Drills',
          stageType: 'practical_experience',
          duration: '3 Months (Airline Academy)',
          description: 'Undergo 3 months paid residential training in airline training center: aircraft emergency door operation, slide raft evacuation, live firefighting in smoke simulators, and ditching pool drills.',
          topics: ['Safety Equipment and Procedures (SEP) for Aircraft Types', 'Emergency Evacuation Commands & Slide Deployments (90-Second Rule)', 'Live Firefighting Drills (Halon Fire Extinguishers & PBE Hoods)', 'Water Ditching Drills & Life Raft Boarding in Wave Pools'],
          skillsToAcquire: ['Evacuating 180+ Passengers in Under 90 Seconds', 'Extinguishing In-Flight Lithium Battery & Galley Fires', 'Defibrillator (AED) and Aviation First Aid Administration'],
          activities: ['Successfully evacuate full aircraft simulator mock-up down high-speed evacuation slides', 'Administer CPR and manage simulated in-flight medical emergencies (hypoxia, cardiac arrest, childbirth)'],
          completionCriteria: 'Clear all DGCA SEP safety examinations with minimum 85% passing score.',
          dependencies: 'Selection into Airline Training Academy',
          resources: [
            { name: 'DGCA Cabin Crew Safety Training Manual', url: 'https://dgca.gov.in', type: 'Official Manual', isFree: true },
            { name: 'St. John Ambulance First Aid Guidelines', url: 'https://stjohnambulanceindia.org', type: 'First Aid Standards', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Familiarisation Flights & Commercial Line Flying Release',
          stageType: 'practical_experience',
          duration: '1–2 Months Post-Training',
          description: 'Complete 4-6 sectors of supernumerary familiarisation flights under senior check crew observation, obtain DGCA competency endorsement, and commence regular revenue flying roster.',
          topics: ['In-Flight Bar and Food Service Protocols', 'Duty Time Limitations (FDTL) & Rest Regulations', 'Customs and Immigration Formalities for International Flights'],
          skillsToAcquire: ['Multi-Tasking in Narrow Aircraft Galleys', 'Managing Unruly Passenger Protocols under DGCA Civil Aviation Requirements', 'Pre-Flight Safety Briefing Delivery'],
          activities: ['Perform 4 scheduled passenger sectors under senior instructor observation with zero safety infractions', 'Receive commercial flying wings and permanent crew roster schedule'],
          completionCriteria: 'Release as independent Flight Attendant on domestic and international sectors.',
          dependencies: 'Passing DGCA Safety and First Aid certifications',
          resources: [
            { name: 'DGCA Flight Duty Time Limitations (FDTL) for Cabin Crew', url: 'https://dgca.gov.in', type: 'Government Regulations', isFree: true },
            { name: 'International Air Transport Association (IATA) Cabin Safety', url: 'https://www.iata.org/cabin-safety', type: 'Global Standards', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'logistics-manager',
    title: 'Logistics & Supply Chain Manager',
    description: 'Orchestrates end-to-end freight transportation, multimodal shipping, distribution warehouse networks, customs clearance, inventory optimization, and last-mile delivery across Indian supply chain companies, e-commerce giants, and 3PL freight forwarders.',
    educationRequirements: 'B.Tech / BBA / B.Com + MBA in Supply Chain & Logistics Management (from premier institutes like IIMs, NITIE/IIM Mumbai, SCMHRD) or APICS Certified Supply Chain Professional (CSCP).',
    educationPathways: [
      'B.Tech / Commerce Degree -> MBA in Supply Chain & Logistics Management (2 years via CAT)',
      'APICS Certified Supply Chain Professional (CSCP) / Certified in Logistics, Transportation and Distribution (CLTD)',
      'Post Graduate Diploma in Logistics and Supply Chain (CILT India)'
    ],
    eligibilityRequirements: 'Bachelor\'s degree in any discipline. Strong analytical capability in operations research, inventory modeling (JIT, VMI), transportation economics, and supply chain software (SAP SCM, Blue Yonder).',
    certificationsAndExams: [
      'APICS CSCP (Certified Supply Chain Professional - ASCM)',
      'APICS CLTD (Certified in Logistics, Transportation and Distribution)',
      'Chartered Institute of Logistics and Transport (CILT) Certification'
    ],
    workEnvironment: 'Multimodal logistics parks (MMLPs), inland container depots (ICDs), ocean container freight stations, airport cargo terminals, and corporate supply chain offices in Mumbai, NCR, Chennai, and Bengaluru.',
    marketDemand: 'Very High',
    jobOutlook: 'Rapid expansion driven by India\'s National Logistics Policy (NLP), PM Gati Shakti Master Plan, Dedicated Freight Corridors (DFC), and explosive e-commerce fulfillment.',
    salaryRange: { min: 550000, max: 2000000, currency: 'INR', source: 'AmbitionBox Logistics Manager Salary 2024, IIM Mumbai (NITIE) Placement Reports' },
    salarySource: 'AmbitionBox Logistics Manager Salary 2024, IIM Mumbai (NITIE) Placement Reports',
    salaryByExperience: {
      entryLevel: { min: 550000, max: 850000, label: 'Logistics Operations Executive / SCM Trainee (0–2 yrs)' },
      earlyCareer: { min: 850000, max: 1500000, label: 'Logistics Manager / Freight Sourcing Lead (3–5 yrs)' },
      experienced: { min: 1500000, max: 2800000, label: 'Head of Logistics / Supply Chain Director (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Supply chain management graduates from IIM Mumbai (formerly NITIE) command median starting packages of ₹22–28 LPA. Global logistics leaders in shipping lines (Maersk, DHL) and FMCG (HUL, P&G) earn ₹35–60+ LPA.'
    },
    careerProgression: [
      'Logistics Coordinator / SCM Analyst',
      'Logistics Manager (Fleet / Freight / Warehousing)',
      'Senior Supply Chain Manager / 3PL Partner Lead',
      'Director of Supply Chain & Distribution',
      'Chief Supply Chain Officer (CSCO) / VP Logistics'
    ],
    employmentSectors: {
      government: 'Container Corporation of India (CONCOR), Central Warehousing Corporation (CWC), Inland Waterways Authority of India (IWAI), Indian Ports Association',
      privateSector: 'Top Third-Party Logistics (Delhivery, Blue Dart, Mahindra Logistics, Allcargo), Global Freight Forwarders (Maersk, DHL, Kuehne+Nagel), E-Commerce & Retail (Amazon, Reliance Retail)'
    },
    timelineOverview: {
      totalEstimatedDuration: '5 Years (3–4 Years Undergrad + 2 Years MBA in SCM)',
      educationDuration: '2 Years (MBA in Supply Chain / Logistics)',
      prepDuration: '6 Months CAT/XAT entrance test preparation',
      practicalTrainingDuration: '2 Months corporate summer internship in logistics routing or warehouse automation',
      jobSearchDuration: 'Immediate campus placement through premier business school recruitment',
      overlapNotes: 'Supply chain optimization projects run parallel to MBA coursework.',
      confidenceNote: 'Knowledge of customs tariff rules, GST E-Way bill regulations, and ocean freight Incoterms (CIF, FOB, DDP) is fundamental for freight operations.'
    },
    sources: [
      { title: 'Ministry of Commerce & Industry: National Logistics Policy (NLP)', url: 'https://dpiit.gov.in', sourceAuthority: 'DPIIT India', verifiedDate: '2024-10-14' },
      { title: 'Association for Supply Chain Management (ASCM) APICS Portal', url: 'https://www.ascm.org', sourceAuthority: 'ASCM Global', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Logistics & Supply Chain Manager Career Roadmap',
      description: 'End-to-end logistics pathway: transportation modeling, Incoterms 2020, customs clearance, warehouse management systems (WMS), freight sourcing, and APICS CSCP certification.',
      totalEstimatedDuration: '5 Years',
      durationBreakdown: 'Degree Foundations: 3–4 Years | MBA in Supply Chain & Logistics: 2 Years | APICS CSCP Certification & Freight Leadership: Post-MBA',
      overlapNotes: 'Industry internships in multimodal container logistics occur during summer breaks.',
      steps: [
        {
          stepNumber: 1,
          title: 'Transportation Systems, Incoterms & Trade Regulations',
          stageType: 'education',
          duration: '1 Year',
          description: 'Master multimodal transportation networks (road freight, rail rakes, coastal shipping, air cargo), international commercial terms (Incoterms 2020: FOB, CIF, EXW, DDP), and GST E-Way bill portals.',
          topics: ['Incoterms 2020 Risk and Cost Allocations', 'Multimodal Freight Transport Economics', 'GST E-Way Bill Generation & Transshipment Compliance', 'Bill of Lading (B/L) and Shipping Documentation'],
          skillsToAcquire: ['Interpreting International Shipping Contracts', 'Route Cost Optimization Calculations', 'Freight Rate Benchmarking'],
          activities: ['Calculate complete landed freight cost for an imported container shipment comparing road vs rail freight', 'Map end-to-end export documentation workflow from factory to discharge seaport'],
          completionCriteria: 'Clear foundational university courses in logistics and international trade.',
          dependencies: 'Bachelor\'s degree in Engineering, Business, or Commerce',
          resources: [
            { name: 'International Chamber of Commerce (ICC) Incoterms Guidelines', url: 'https://iccwbo.org', type: 'International Standard', isFree: true },
            { name: 'NPTEL Supply Chain Analytics (IIT Kharagpur)', url: 'https://nptel.ac.in', type: 'Course', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Warehouse Management Systems (WMS) & Inventory Control',
          stageType: 'skill_acquisition',
          duration: '1 Year',
          description: 'Master warehouse layout slotting, automated sortation systems, inventory control models (ABC-XYZ analysis, Safety Stock, Reorder Point), and Warehouse Management Systems (WMS - Manhattan, SAP EWM).',
          topics: ['Warehouse Layout Slotting Optimization', 'ABC-XYZ Inventory Classification Matrix', 'Cross-Docking Strategies & Hub-and-Spoke Logistics', 'Barcode, RFID & Automated Guided Vehicles (AGVs) in Logistics'],
          skillsToAcquire: ['Safety Stock Calculations under Demand Uncertainty', 'WMS Inbound/Outbound Workflow Configuration', 'Vehicle Routing Problem (VRP) Algorithms'],
          activities: ['Perform ABC-XYZ analysis on a 5,000-SKU retail inventory dataset in Excel to optimize working capital', 'Design a high-throughput fulfillment center layout minimizing forklift travel distance by 20%'],
          completionCriteria: 'Complete advanced coursework in warehouse management and supply chain modeling.',
          dependencies: 'Transportation and Inventory Fundamentals',
          resources: [
            { name: 'APICS CSCP Learning System Overview', url: 'https://www.ascm.org', type: 'Professional Society', isFree: false },
            { name: 'Supply Chain Management by Sunil Chopra and Peter Meindl', url: 'https://www.pearson.com', type: 'Essential Textbook', isFree: false }
          ]
        },
        {
          stepNumber: 3,
          title: 'Freight Forwarding, Customs Brokerage & 3PL Contract Negotiation',
          stageType: 'skill_acquisition',
          duration: '1 Year',
          description: 'Oversee third-party logistics (3PL/4PL) partnerships, ocean container line contracts, ICEGATE customs e-filing (Bill of Entry, Shipping Bill), and freight rate tenders.',
          topics: ['3PL Service Level Agreements (SLAs) & KPI Penalties', 'ICEGATE Customs Electronic Filing Procedures', 'Customs Tariff Harmonized System (HS Codes)', 'Reverse Logistics & Green Supply Chain Practices'],
          skillsToAcquire: ['3PL Performance Contract Negotiation', 'Customs Clearance Exception Management', 'Container Freight Rate Index Monitoring (Drewry/SCFI)'],
          activities: ['Draft an SLA contract with key performance indicators for a 3PL cold-chain distribution partner', 'Prepare full customs documentation package for commercial container customs release on ICEGATE'],
          completionCriteria: 'Pass APICS CSCP examination or earn postgraduate diploma in supply chain management.',
          dependencies: 'WMS and Logistics Operations Knowledge',
          resources: [
            { name: 'ICEGATE Customs Electronic Data Interchange Portal', url: 'https://www.icegate.gov.in', type: 'Government Portal', isFree: true },
            { name: 'Chartered Institute of Logistics and Transport (CILT India)', url: 'https://ciltindia.org', type: 'Professional Institute', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Supply Chain Leadership & Network Transformation',
          stageType: 'practical_experience',
          duration: '1–2 Years',
          description: 'Lead enterprise logistics operations; deploy supply chain control towers for real-time shipment visibility, optimize multi-echelon network costs, and direct regional warehouse hubs.',
          topics: ['Supply Chain Control Towers & GPS Fleet Telematics', 'Network Design Optimization (Center of Gravity Method)', 'Sales and Operations Planning (S&OP) Integration'],
          skillsToAcquire: ['Executive S&OP Cross-Functional Alignment', 'Managing Supply Chain Disruptions and Port Congestions', 'Total Cost of Ownership (TCO) Reduction'],
          activities: ['Lead logistics turnaround reducing corporate freight spend by 8% while improving delivery SLA to 99.2%', 'Oversee commissioning of a 100,000 sq.ft automated regional distribution center'],
          completionCriteria: 'Appointment as Head of Logistics or Director of Supply Chain.',
          dependencies: 'Demonstrated freight and inventory cost optimization track record',
          resources: [
            { name: 'Delhivery Careers Portal', url: 'https://www.delhivery.com/careers/', type: 'Company Portal', isFree: true },
            { name: 'Maersk Careers India', url: 'https://www.maersk.com/careers', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'agricultural-scientist',
    title: 'Agricultural Scientist (ICAR / Agronomist / Plant Breeder)',
    description: 'Researches crop genetics, hybrid seed breeding, precision agronomy, soil health chemistry, drought resilience, and climate-smart agriculture across Indian Council of Agricultural Research (ICAR) institutes, state agricultural universities, and multinational seed corporations.',
    educationRequirements: 'B.Sc (Hons) Agriculture (4 years) recognized by the Indian Council of Agricultural Research (ICAR) via AIEEA UG + M.Sc in Agriculture (Agronomy, Genetics & Plant Breeding, Soil Science) via AIEEA PG. Ph.D. and ASRB NET mandatory for scientific recruitment.',
    educationPathways: [
      'B.Sc (Hons) Agriculture (4 years via ICAR AIEEA / State Agriculture CETs)',
      'M.Sc (Agriculture) in Genetics & Plant Breeding / Agronomy (2 years via ICAR AIEEA PG)',
      'Ph.D. in Agricultural Sciences + clearing Agricultural Scientists Recruitment Board (ASRB) NET'
    ],
    eligibilityRequirements: '10+2 with Physics, Chemistry, and Biology/Mathematics/Agriculture (minimum 50% aggregate). Qualifying ICAR AIEEA entrance examination. Master\'s/Ph.D. with minimum 55-60% for ASRB scientist recruitment.',
    certificationsAndExams: [
      'ICAR AIEEA (All India Entrance Examination for Admission - UG/PG)',
      'ASRB NET (Agricultural Scientists Recruitment Board National Eligibility Test)',
      'ARS (Agricultural Research Service Examination for ICAR Scientist appointments)'
    ],
    workEnvironment: 'ICAR national research institutes (IARI New Delhi, CRRI Cuttack, IIPR Kanpur), state agricultural university research farms, and seed biotechnology R&D complexes in Hyderabad, Bengaluru, and Pune.',
    marketDemand: 'Moderate to High',
    jobOutlook: 'Strategic national importance backed by India\'s emphasis on food security, climate-resilient millets (Shree Anna), biofortified crop varieties, bio-fertilizers, and sustainable precision agriculture.',
    salaryRange: { min: 450000, max: 1800000, currency: 'INR', source: '7th CPC ICAR Scientist Pay Scales (Level 10 to Level 14), ASRB Gazette Notifications' },
    salarySource: '7th CPC ICAR Scientist Pay Scales (Level 10 to Level 14), ASRB Gazette Notifications',
    salaryByExperience: {
      entryLevel: { min: 450000, max: 850000, label: 'Scientist (ARS Entry Level / Level 10) (0–3 yrs)' },
      earlyCareer: { min: 850000, max: 1400000, label: 'Senior Scientist / Assistant Professor (Level 11–12) (4–8 yrs)' },
      experienced: { min: 1400000, max: 2600000, label: 'Principal Scientist / Head of Research Division (Level 13A–14) (9–20+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'ICAR Scientists recruited through the ARS examination enter at 7th CPC Level 10 (Basic ₹57,700/month, resulting in starting gross pay of ~₹85,000–1,05,000/month plus campus housing and research allowances). Lead seed breeders in multinational seed MNCs (Bayer, Syngenta, Corteva) earn ₹20–35+ LPA.'
    },
    careerProgression: [
      'Scientist (ICAR ARS - Entry Level)',
      'Senior Scientist',
      'Principal Scientist / Project Coordinator',
      'Head of Division / Joint Director (Research)',
      'Director of National Institute / Deputy Director General (DDG, ICAR)'
    ],
    employmentSectors: {
      government: 'Indian Council of Agricultural Research (102 ICAR Research Institutes nationwide), State Agricultural Universities (SAUs), Krishi Vigyan Kendras (KVKs), National Seed Corporation (NSC)',
      privateSector: 'Multinational Seed Corporations (Bayer CropScience, Syngenta, Corteva Agriscience, UPL, Mahyco, Rasi Seeds), Agro-Biotech Research Firms'
    },
    timelineOverview: {
      totalEstimatedDuration: '6–9 Years (4 Years B.Sc + 2 Years M.Sc + 3 Years Ph.D. / ARS Exam)',
      educationDuration: '4 Years (B.Sc Hons Agriculture) + 2 Years (M.Sc Agriculture)',
      prepDuration: '6–12 Months intensive preparation for ICAR ASRB NET / ARS examination',
      practicalTrainingDuration: 'Rural Agricultural Work Experience (RAWE) & Agro-Industrial Attachment during B.Sc 4th year',
      jobSearchDuration: 'Direct appointment upon clearing ARS national competitive examination',
      overlapNotes: 'Doctoral research on crop field breeding plots proceeds concurrently with ASRB exam preparation.',
      confidenceNote: 'Agricultural Scientists recruited through the prestigious ARS examination enjoy parity with central civil service perks and research sabbaticals.'
    },
    sources: [
      { title: 'Indian Council of Agricultural Research (ICAR) Official Portal', url: 'https://icar.org.in', sourceAuthority: 'Ministry of Agriculture India', verifiedDate: '2024-10-14' },
      { title: 'Agricultural Scientists Recruitment Board (ASRB)', url: 'https://www.asrb.org.in', sourceAuthority: 'ASRB India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Agricultural Scientist (ICAR ARS) Career Roadmap',
      description: 'Agronomic science pathway: ICAR AIEEA entrance, 4-year B.Sc (Hons) Agriculture, RAWE rural attachment, M.Sc plant breeding/agronomy, ASRB NET clearance, and ARS scientist selection.',
      totalEstimatedDuration: '6.5–7 Years',
      durationBreakdown: 'B.Sc (Hons) Agriculture Degree: 4 Years | M.Sc (Agriculture) & Thesis Research: 2 Years | ASRB ARS Examination Clearance & NAARM Induction: 1 Year',
      overlapNotes: 'Field experimental plot breeding runs continuously throughout master\'s and doctoral studies.',
      steps: [
        {
          stepNumber: 1,
          title: 'B.Sc (Hons) Agriculture Degree & RAWE Rural Attachment',
          stageType: 'education',
          duration: '4 Years',
          description: 'Master core agricultural sciences (agronomy, genetics, soil science, plant pathology, agricultural entomology) and complete 6-month Rural Agricultural Work Experience (RAWE) living with farming communities.',
          topics: ['Agronomy of Field Crops (Kharif and Rabi Cereals, Pulses, Oilseeds)', 'Principles of Genetics and Cytogenetics', 'Soil Chemistry, Fertility & NPK Nutrient Management', 'Rural Agricultural Work Experience (RAWE) Field Attachment'],
          skillsToAcquire: ['Soil Testing & Nutrient Recommendation Formulation', 'Field Crop Pest and Disease Identification', 'Farmer Participatory Extension Communication'],
          activities: ['Perform soil sampling and chemical analysis on 20 farm soil plots determining NPK fertilizer requirements', 'Spend 16 weeks embedded in a farming village evaluating rural crop management practices under RAWE'],
          completionCriteria: 'Graduate with 4-year ICAR-accredited B.Sc (Hons) Agriculture degree with OGPA > 7.0/10.',
          dependencies: '10+2 with PCB/PCM/Agriculture and qualifying ICAR AIEEA UG rank',
          resources: [
            { name: 'ICAR 5th Deans’ Committee B.Sc Agriculture Curriculum', url: 'https://icar.org.in', type: 'Official Curriculum', isFree: true },
            { name: 'e-Krishi Shiksha Agricultural MOOCs Portal', url: 'https://ecourses.icar.org.in', type: 'Government Learning', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Master’s Degree (M.Sc Agriculture) in Core Specialization',
          stageType: 'education',
          duration: '2 Years',
          description: 'Crack ICAR AIEEA PG entrance to secure admission in premier institutes (IARI Pusa New Delhi, PAU Ludhiana, TNAU Coimbatore); conduct thesis research on hybridization, yield genetics, or precision agronomy.',
          topics: ['Classical & Molecular Plant Breeding Methodologies', 'Quantitative Genetics & Biometrical Techniques', 'Marker-Assisted Selection (MAS) & QTL Mapping', 'Statistical Design of Field Experiments (RBD, Split-Plot)'],
          skillsToAcquire: ['Emasculation and Controlled Hand Pollination', 'Field Trial Layout and ANOVA Statistical Analysis', 'DNA Extraction and PCR Molecular Marker Screening'],
          activities: ['Conduct field hybridization trials crossing crop varieties to evaluate hybrid vigor and disease resistance', 'Author master\'s research dissertation on genetic variability and yield traits in a commercial crop'],
          completionCriteria: 'Obtain M.Sc in Agriculture with approved research thesis.',
          dependencies: 'B.Sc (Hons) Agriculture and ICAR AIEEA PG qualification',
          resources: [
            { name: 'Indian Agricultural Research Institute (IARI Pusa New Delhi)', url: 'https://www.iari.res.in', type: 'Premier Institute', isFree: true },
            { name: 'Principles of Plant Breeding by Allard (Reference)', url: 'https://www.wiley.com', type: 'Classic Reference', isFree: false }
          ]
        },
        {
          stepNumber: 3,
          title: 'ASRB NET & Agricultural Research Service (ARS) Examination',
          stageType: 'certification',
          duration: '6–12 Months',
          description: 'Clear the Agricultural Research Service (ARS) examination conducted by ASRB comprising Preliminary screening, descriptive Mains exam in specialized discipline, and personal interview.',
          topics: ['ARS Discipline-Specific Advanced Syllabus (e.g., Genetics & Plant Breeding)', 'Indian Agriculture Policies, WTO Agreements & IPR Protection', 'Scientific Essay Writing and Experimental Design Formulation'],
          skillsToAcquire: ['High-Scoring Descriptive Scientific Writing', 'Formulating Interdisciplinary Agricultural Research Proposals', 'Technical Interview Defense'],
          activities: ['Solve past 10 years ARS question papers in target agricultural discipline', 'Clear the ASRB National Eligibility Test (NET) and ARS written examination'],
          completionCriteria: 'Securing merit ranking in Agricultural Research Service (ARS) final selection list.',
          dependencies: 'Master\'s degree in relevant agricultural science specialization',
          resources: [
            { name: 'ASRB Official Examination Portal', url: 'https://www.asrb.org.in', type: 'Official Portal', isFree: true },
            { name: 'Protection of Plant Varieties and Farmers\' Rights Authority (PPV&FRA)', url: 'https://plantauthority.gov.in', type: 'Government Portal', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'FOCARS Induction Training & ICAR Research Appointment',
          stageType: 'practical_experience',
          duration: '1 Year Post-Selection',
          description: 'Complete mandatory Foundation Course for Agricultural Research Service (FOCARS) at the National Academy of Agricultural Research Management (NAARM Hyderabad); join ICAR institute as Scientist.',
          topics: ['FOCARS Interdisciplinary Research Project Planning', 'Field Farm Machinery & Precision Agtech Integration', 'Scientific Grant Sourcing and Intellectual Property Rights (Patents / Plant Variety Registration)'],
          skillsToAcquire: ['Leading Multi-Location All India Coordinated Research Projects (AICRP)', 'Farmer Participatory Variety Release Trials', 'Publishing in High-Impact Agricultural Journals'],
          activities: ['Complete 3-month FOCARS residential training at NAARM Hyderabad including rural field immersion', 'Release an officially registered high-yielding or biofortified crop variety notified in the Gazette of India'],
          completionCriteria: 'Permanent confirmation as Scientist in Indian Council of Agricultural Research (ICAR).',
          dependencies: 'ARS selection and medical fitness',
          resources: [
            { name: 'National Academy of Agricultural Research Management (NAARM Hyderabad)', url: 'https://naarm.org.in', type: 'National Academy', isFree: true },
            { name: 'Indian Journal of Agricultural Sciences (ICAR Open Access)', url: 'https://epubs.icar.org.in', type: 'Official Journal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'agricultural-officer',
    title: 'Agriculture Field Officer (IBPS SO AFO / ADO)',
    description: 'Evaluates agricultural credit proposals, sanctions rural crop loans (Kisan Credit Card - KCC), inspects farming assets, distributes government agricultural subsidies, and disseminates modern agronomic technologies across Indian public sector banks and state agriculture departments.',
    educationRequirements: '4-Year Bachelor\'s Degree in Agriculture, Horticulture, Dairy Science, Agricultural Engineering, or Forestry from an ICAR-recognized university. Mandatory clearance of IBPS Specialist Officer (SO) Agriculture Field Officer exam or State Agriculture Development Officer (ADO) exam.',
    educationPathways: [
      'B.Sc (Hons) Agriculture / Horticulture (4 years) -> IBPS Specialist Officer (AFO Scale I) Examination',
      'B.Sc Agriculture -> State Public Service Commission Agriculture Development Officer (ADO / AO) Examination',
      'NABARD Grade A Officer (Assistant Manager - Rural Development Banking Service via national exam)'
    ],
    eligibilityRequirements: '4-Year degree in Agriculture or allied subjects (Horticulture, Animal Husbandry, Veterinary Science, Dairy Science, Agri-Engineering). Age between 20 and 30 years. Indian citizenship.',
    certificationsAndExams: [
      'IBPS Specialist Officer (SO) - Agriculture Field Officer (AFO Scale I)',
      'NABARD Grade A (RDBS - Rural Development Banking Service) Examination',
      'State PSC Agriculture Officer Examination'
    ],
    workEnvironment: 'Rural and semi-urban bank branches, regional agricultural loan processing centers, block agriculture offices, and farmer cooperative societies across rural India.',
    marketDemand: 'Very High',
    jobOutlook: 'Substantial mandatory public recruitment; Reserve Bank of India mandates that 18% of adjusted net bank credit (ANBC) must be lent to the Priority Sector Agriculture, requiring dedicated agricultural banking officers across all public sector banks.',
    salaryRange: { min: 650000, max: 1600000, currency: 'INR', source: 'IBA 12th Bipartite Settlement Pay Scales (Scale I Officer), IBPS SO Notices' },
    salarySource: 'IBA 12th Bipartite Settlement Pay Scales (Scale I Officer), IBPS SO Notices',
    salaryByExperience: {
      entryLevel: { min: 650000, max: 950000, label: 'Agriculture Field Officer (Scale I) (0–2 yrs)' },
      earlyCareer: { min: 950000, max: 1400000, label: 'Manager (Agricultural Loans / Scale II) (3–5 yrs)' },
      experienced: { min: 1400000, max: 2400000, label: 'Chief Manager (Priority Sector Credit / Scale IV) (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Starting gross salary under the 12th Bipartite Settlement is ~₹65,000–75,000/month plus leased housing quarters, fuel reimbursement, and rural hardship allowances. NABARD Grade A officers receive ~₹90,000–1,05,000/month.'
    },
    careerProgression: [
      'Agriculture Field Officer (Scale I - Assistant Manager)',
      'Manager (Agricultural Lending / Scale II)',
      'Senior Manager (Priority Sector / Scale III)',
      'Chief Manager / Assistant General Manager (Rural Banking)',
      'Deputy General Manager / Head of Priority Sector Lending'
    ],
    employmentSectors: {
      government: 'Public Sector Commercial Banks (State Bank of India, Punjab National Bank, Bank of Baroda, Canara Bank), National Bank for Agriculture and Rural Development (NABARD), State Department of Agriculture (ADO/AO)',
      privateSector: 'Private Banks Agricultural Lending Arms (HDFC, ICICI Bank Agri-business), Microfinance Institutions, Agro-Chemical Corporate Marketing'
    },
    timelineOverview: {
      totalEstimatedDuration: '4.5 Years (4 Years B.Sc Agriculture + 6 Months IBPS SO preparation)',
      educationDuration: '4 Years (8 Semesters B.Sc Hons Agriculture)',
      prepDuration: '6 Months dedicated professional knowledge and aptitude exam preparation',
      practicalTrainingDuration: '1 Year probationary training in rural and semi-urban bank branches',
      jobSearchDuration: 'Direct appointment upon clearing annual IBPS SO national merit list',
      overlapNotes: 'Preparation for the Professional Knowledge paper proceeds directly from B.Sc Agriculture textbooks.',
      confidenceNote: 'Unlike general bank exams where millions compete, IBPS SO AFO is reserved strictly for 4-year agriculture graduates, ensuring much higher selection ratios.'
    },
    sources: [
      { title: 'Institute of Banking Personnel Selection (IBPS) Specialist Officers Portal', url: 'https://www.ibps.in', sourceAuthority: 'IBPS India', verifiedDate: '2024-10-14' },
      { title: 'NABARD Rural Development Banking Service Recruitment', url: 'https://www.nabard.org', sourceAuthority: 'NABARD India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Agriculture Field Officer (IBPS SO AFO) Career Roadmap',
      description: 'Rural banking and agricultural administration route: 4-year B.Sc Agriculture, IBPS SO Prelims (Aptitude/Reasoning/English), Mains (Professional Agricultural Knowledge), interview, and branch credit management.',
      totalEstimatedDuration: '4.5 Years',
      durationBreakdown: 'B.Sc (Hons) Agriculture Degree: 4 Years | IBPS SO AFO Prelims & Mains Preparation: 6 Months | Interview & Branch Allotment: 3 Months | Rural Banking Probation: 1 Year',
      overlapNotes: 'Agricultural professional knowledge preparation runs concurrently with 8th semester studies.',
      steps: [
        {
          stepNumber: 1,
          title: '4-Year Agriculture Degree & Agronomic Concepts',
          stageType: 'education',
          duration: '4 Years',
          description: 'Master ICAR curriculum covering field crops, horticultural production, soil science, plant protection, dairy farming, agricultural economics, and farm machinery.',
          topics: ['Agronomy of Major Crops & Seed Rates', 'Soil Science & Fertilizer Calculation Formulas', 'Horticultural Propagation Techniques (Grafting, Layering)', 'Government Priority Sector Lending Schemes (PM-KISAN, KCC, PMFBY)'],
          skillsToAcquire: ['Crop Cost of Cultivation Calculations', 'Assessing Crop Yield Loss in Field Inspections', 'Agricultural Terminology Fluency'],
          activities: ['Perform practical farm budgeting calculating input costs and net returns for 1 hectare of wheat/paddy', 'Conduct field visits evaluating drip and sprinkler micro-irrigation installations'],
          completionCriteria: 'Obtain 4-year B.Sc (Hons) Agriculture or allied degree from recognized university.',
          dependencies: '10+2 with Science or Agriculture',
          resources: [
            { name: 'ICAR Agronomy and Soil Science Study Materials', url: 'https://ecourses.icar.org.in', type: 'Official Courseware', isFree: true },
            { name: 'Ministry of Agriculture Welfare Schemes Portal', url: 'https://agricoop.nic.in', type: 'Government Portal', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'IBPS SO Prelims (Aptitude, Reasoning, English)',
          stageType: 'certification',
          duration: '3–6 Months',
          description: 'Clear Prelims screening test consisting of 150 questions (125 marks in 120 minutes) across English Language, Reasoning Ability, and Quantitative Aptitude with sectional cutoffs.',
          topics: ['Quantitative Aptitude (Percentages, Profit/Loss, Data Interpretation)', 'Reasoning Ability (Puzzles, Syllogisms, Inequalities, Seating)', 'English Language (Error Detection, Cloze Test, Comprehension)', 'Sectional Cutoff Management under Negative Marking'],
          skillsToAcquire: ['Solving Arithmetic and Puzzle Questions within Sectional Timers', 'Meeting Sectional Qualifying Cutoffs'],
          activities: ['Attempt 30 full-length Prelims computer-based mock tests on online simulators', 'Score comfortably above previous year cutoff scores (typically 20–35 marks out of 125)'],
          completionCriteria: 'Clearing IBPS SO Prelims sectional and overall cut-off marks.',
          dependencies: 'Completed 4-year Agriculture degree',
          resources: [
            { name: 'IBPS Official Examination Portal', url: 'https://www.ibps.in', type: 'Official Portal', isFree: true },
            { name: 'Testbook IBPS SO Agriculture Mock Series', url: 'https://testbook.com', type: 'Practice Platform', isFree: false }
          ]
        },
        {
          stepNumber: 3,
          title: 'IBPS SO Mains (Professional Agricultural Knowledge)',
          stageType: 'skill_acquisition',
          duration: '3 Months',
          description: 'Master the 60 objective questions (60 marks in 45 minutes) testing professional agricultural knowledge: crops, animal husbandry, poultry, fisheries, forestry, Nabard norms, and PSL guidelines.',
          topics: ['NABARD Refinance Norms & Unit Cost Parameters', 'Animal Husbandry (Cattle Breeds, Gestation Periods, Milk Yields)', 'Fisheries, Sericulture, and Apiculture Fundamentals', 'Priority Sector Lending (PSL) Targets and KCC Scale of Finance'],
          skillsToAcquire: ['Rapid Agricultural Fact Retrieval (60 Questions in 45 Minutes)', 'Scale of Finance Crop Loan Computations'],
          activities: ['Solve past 10 years IBPS SO Agriculture Field Officer Mains question papers', 'Score > 35/60 marks on national professional knowledge mock test series'],
          completionCriteria: 'Clear IBPS SO AFO Mains examination with high competitive merit marks.',
          dependencies: 'Clearing Prelims Examination',
          resources: [
            { name: 'NABARD Model Bankable Projects Guidelines', url: 'https://www.nabard.org', type: 'Official Banking Standards', isFree: true },
            { name: 'Nem Raj Sunda: An Objective Book of Agriculture', url: 'https://www.amazon.in', type: 'Essential Practice Book', isFree: false }
          ]
        },
        {
          stepNumber: 4,
          title: 'Interview Panel, Bank Allotment & Rural Branch Credit Management',
          stageType: 'practical_experience',
          duration: '1 Year (Probation)',
          description: 'Clear personal interview panel evaluated by General Managers; receive allotment to a public sector bank as Scale-I AFO, inspect agricultural fields, and sanction crop/term loans.',
          topics: ['Kisan Credit Card (KCC) Sanctioning Protocols', 'Farm Tractor and Agricultural Equipment Loan Appraisals', 'Recovery of Non-Performing Assets (NPA) and Lok Adalat Settlements', 'National Bank Agriculture Core Software Modules'],
          skillsToAcquire: ['On-Site Agricultural Land Verification', 'Title Deed & Land Revenue Record (7/12, Patta) Verification', 'Farmer Loan Appraisal and Subsidy Processing'],
          activities: ['Conduct on-site verification of 50+ agricultural farming land holdings prior to loan sanction', 'Sanction and disburse seasonal crop loans and poultry/dairy term loans meeting branch priority sector targets'],
          completionCriteria: 'Confirmation as permanent Scale-I Officer / Agriculture Field Officer.',
          dependencies: 'Selection in final combined IBPS merit list',
          resources: [
            { name: 'State Bank of India Agricultural Banking Operations', url: 'https://sbi.co.in', type: 'Bank Portal', isFree: true },
            { name: 'Punjab National Bank Rural Lending Guidelines', url: 'https://pnbindia.in', type: 'Bank Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'veterinarian',
    title: 'Veterinarian / Veterinary Doctor (B.V.Sc & A.H.)',
    description: 'Diagnoses, treats, and performs surgery on companion pets, farm livestock (cattle, buffaloes, sheep), poultry, and wildlife. Prevents zoonotic disease transmission, oversees artificial insemination breeding, and inspects animal food safety under Veterinary Council of India (VCI) regulations.',
    educationRequirements: 'B.V.Sc & A.H. (Bachelor of Veterinary Science and Animal Husbandry - 5.5 years including 1-year compulsory internship) recognized by the Veterinary Council of India (VCI) via NEET UG score. Mandatory registration with the State Veterinary Council / VCI.',
    educationPathways: [
      'NEET UG qualification -> 5.5 Years B.V.Sc & A.H. (4.5 Years Academic + 1 Year Paid Rotatory Internship) in a VCI-recognized veterinary college',
      'M.V.Sc (Master of Veterinary Science - 2 years via ICAR AIEEA PG) in Veterinary Surgery, Medicine, Pathology, or Animal Reproduction',
      'State Veterinary Officer Examination (via State Public Service Commission)'
    ],
    eligibilityRequirements: '10+2 with Physics, Chemistry, Biology and English with minimum 50% aggregate (40% for reserved categories). Minimum age 17 years. Qualifying rank in NEET UG (conducted by NTA for 15% VCI all-India seats and 85% state quota seats).',
    certificationsAndExams: [
      'NEET UG (National Eligibility cum Entrance Test - Undergraduate)',
      'Veterinary Council of India (VCI) Permanent Registration Certificate',
      'ICAR AIEEA PG (for Master of Veterinary Science admissions)'
    ],
    workEnvironment: 'Government veterinary hospitals and polyclinics, private companion animal clinics, livestock breeding farms, dairy cooperatives (Amul, Mother Dairy), zoological parks, and equine studs.',
    marketDemand: 'High',
    jobOutlook: 'Rapidly expanding driven by India’s booming pet care industry in urban metros ($1B+ pet care market), massive national livestock economy (India is world\'s largest milk producer), and disease control programs.',
    salaryRange: { min: 450000, max: 1600000, currency: 'INR', source: 'State Veterinary Services Pay Scales (Level 10 equivalent), AmbitionBox Veterinarian' },
    salarySource: 'State Veterinary Services Pay Scales (Level 10 equivalent), AmbitionBox Veterinarian',
    salaryByExperience: {
      entryLevel: { min: 450000, max: 800000, label: 'Veterinary Officer / Associate Vet (0–2 yrs)' },
      earlyCareer: { min: 800000, max: 1300000, label: 'Senior Veterinary Surgeon / Clinic Lead (3–5 yrs)' },
      experienced: { min: 1300000, max: 2400000, label: 'Chief Veterinary Officer / Pet Hospital Owner (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Government Veterinary Assistant Surgeons enter at 7th CPC Level 10 (~₹75,000–90,000/month basic + Non-Practicing Allowance NPA). Established companion pet clinic owners in urban Tier-1 cities earn ₹18–35+ LPA.'
    },
    careerProgression: [
      'Veterinary Intern',
      'Veterinary Assistant Surgeon (VAS) / Clinical Veterinarian',
      'Senior Veterinary Officer / Livestock Development Officer (LDO)',
      'Deputy Director of Animal Husbandry / Clinic Director',
      'Director of Animal Husbandry & Veterinary Services'
    ],
    employmentSectors: {
      government: 'State Animal Husbandry Departments (Veterinary Hospitals, Dispensaries), Central Armed Police Forces (ITBP, BSF, SSB Dog & Animal Transport Units), Remount Veterinary Corps (RVC Indian Army), Zoos and Wildlife Sanctuaries',
      privateSector: 'Companion Animal Pet Hospitals (MaxPetZ, DCC Animal Hospital), Dairy Giants (Amul, Hatsun, Mother Dairy), Pharmaceutical Animal Health (Zoetis, Boehringer Ingelheim, Virbac), Poultry Integrators'
    },
    timelineOverview: {
      totalEstimatedDuration: '5.5 Years (4.5 Years Academic + 1 Year Compulsory Rotatory Internship)',
      educationDuration: '4.5 Years (9 Semesters under VCI Minimum Standards of Veterinary Education MSVE 2016)',
      prepDuration: '1–2 Years NEET UG preparation during 11th/12th grade',
      practicalTrainingDuration: '1 Year compulsory paid rotational internship (clinical hospital, livestock farm, zoo, ambulatory clinic)',
      jobSearchDuration: 'Immediate employment in private companion clinics or state government VAS walk-in recruitment',
      overlapNotes: 'Clinical postings in teaching veterinary clinical complexes (TVCC) begin from 3rd professional year.',
      confidenceNote: 'Veterinarians have dual career avenues: stable Class-1 government gazetted posts in Animal Husbandry or highly lucrative private companion animal pet practices in urban cities.'
    },
    sources: [
      { title: 'Veterinary Council of India (VCI) MSVE Regulations 2016', url: 'https://vci.dadf.gov.in', sourceAuthority: 'Veterinary Council of India', verifiedDate: '2024-10-14' },
      { title: 'Department of Animal Husbandry and Dairying (DAHD)', url: 'https://dahd.nic.in', sourceAuthority: 'Ministry of Fisheries, Animal Husbandry & Dairying', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Veterinary Doctor (B.V.Sc & A.H.) Career Roadmap',
      description: 'Veterinary medicine journey: NEET UG, VCI-approved 5.5-year degree, anatomy/physiology, veterinary pharmacology, surgery and radiology, 1-year clinical internship, and VCI licensing.',
      totalEstimatedDuration: '5.5 Years',
      durationBreakdown: 'Pre-Clinical Veterinary Sciences: 1 Year | Para-Clinical Pathology & Pharmacology: 1.5 Years | Clinical Medicine, Surgery & Gynaecology: 2 Years | Compulsory Rotatory Internship: 1 Year',
      overlapNotes: 'Clinical TVCC rotations run concurrently with classroom lectures during the final two professional years.',
      steps: [
        {
          stepNumber: 1,
          title: 'NEET UG Qualification & Pre-Clinical Veterinary Sciences',
          stageType: 'education',
          duration: '1 Year',
          description: 'Qualify NEET UG and master veterinary gross anatomy (comparative osteology, arthrology, myology of ox, horse, dog, fowl), veterinary physiology, and livestock production management.',
          topics: ['Comparative Veterinary Anatomy (Bovine, Equine, Canine, Avian)', 'Veterinary General & Systemic Physiology', 'Livestock Production Management (Dairy, Sheep, Goat Housing)', 'Animal Nutrition Principles & Ration Formulation'],
          skillsToAcquire: ['Large and Small Animal Restraint Techniques', 'Equine and Bovine Anatomical Dissection', 'Formulating Balanced Animal Feed Rations'],
          activities: ['Perform systemic dissection of domestic animal specimens in veterinary anatomy laboratory', 'Handle and restrain dairy cattle and dogs safely for clinical examination'],
          completionCriteria: 'Clear 1st Professional B.V.Sc & A.H. university examinations under VCI MSVE guidelines.',
          dependencies: '10+2 with PCB (minimum 50%) and valid NEET UG rank',
          resources: [
            { name: 'Veterinary Council of India Minimum Standards of Education (MSVE 2016)', url: 'https://vci.dadf.gov.in', type: 'Official Regulations', isFree: true },
            { name: 'Dukes’ Physiology of Domestic Animals (Reference)', url: 'https://www.wiley.com', type: 'Classic Textbook', isFree: false }
          ]
        },
        {
          stepNumber: 2,
          title: 'Para-Clinical Pathology, Microbiology & Veterinary Pharmacology',
          stageType: 'education',
          duration: '1.5 Years',
          description: 'Master veterinary pathology (post-mortem examinations), veterinary microbiology (viral and bacterial animal plagues: FMD, Rabies, Anthrax), parasitology, and veterinary pharmacology.',
          topics: ['Veterinary Systemic Pathology & Post-Mortem Examination Techniques', 'Major Animal Infectious Diseases (Foot-and-Mouth Disease, Anthrax, Brucellosis)', 'Veterinary Pharmacology, Toxicology & Anesthetic Dosages', 'Veterinary Parasitology (Tick-Borne Diseases, Helminths)'],
          skillsToAcquire: ['Veterinary Autopsy (Necropsy) Execution', 'Calculating Drug Dosages by Animal Weight (mg/kg)', 'Blood Smear Examination for Babesiosis and Theileriosis'],
          activities: ['Conduct supervised post-mortem examination on livestock carcasses documenting pathological lesion findings', 'Administer intramuscular, subcutaneous, and intravenous injections in animal hospital'],
          completionCriteria: 'Pass 2nd Professional B.V.Sc & A.H. university theory and practical viva voce.',
          dependencies: 'Passing 1st Professional Veterinary Examinations',
          resources: [
            { name: 'Merck Veterinary Manual Online', url: 'https://www.merckvetmanual.com', type: 'Veterinary Reference', isFree: true },
            { name: 'Veterinary Pharmacology and Therapeutics by Adams', url: 'https://www.wiley.com', type: 'Textbook Reference', isFree: false }
          ]
        },
        {
          stepNumber: 3,
          title: 'Clinical Veterinary Medicine, Surgery & Animal Reproduction',
          stageType: 'practical_experience',
          duration: '2 Years',
          description: 'Diagnose and treat patients in Teaching Veterinary Clinical Complex (TVCC); perform soft-tissue surgeries (spay, neuter, rumenotomy), orthopedic pinning, and veterinary obstetrics (dystocia, artificial insemination).',
          topics: ['Veterinary Clinical Medicine (Canine & Large Animal Internal Medicine)', 'Veterinary Surgery & Anesthesiology (General Anesthesia, Fracture Fixation)', 'Veterinary Gynaecology & Obstetrics (Dystocia Management, AI)', 'Veterinary Diagnostic Imaging (X-Ray & Ultrasound Scanning)'],
          skillsToAcquire: ['Canine Ovariohysterectomy (Spay) and Castration', 'Rectal Palpation & Pregnancy Diagnosis in Cattle', 'Ultrasonography in Small Animals'],
          activities: ['Perform 20+ supervised surgical procedures in TVCC operation theaters', 'Execute artificial insemination and pregnancy diagnosis on 50+ cattle in ambulatory mobile clinics'],
          completionCriteria: 'Pass final composite B.V.Sc & A.H. university clinical case examinations.',
          dependencies: 'Passing Para-Clinical Veterinary Examinations',
          resources: [
            { name: 'Slatter’s Textbook of Small Animal Surgery', url: 'https://www.elsevier.com', type: 'Surgical Reference', isFree: false },
            { name: 'Veterinary Reproduction and Obstetrics by Noakes', url: 'https://www.elsevier.com', type: 'Textbook Reference', isFree: false }
          ]
        },
        {
          stepNumber: 4,
          title: 'Compulsory Rotatory Internship & VCI Licensure',
          stageType: 'practical_experience',
          duration: '12 Months',
          description: 'Complete 1-year mandatory paid rotational internship across clinical complexes, veterinary polyclinics, poultry farms, zoo/wildlife centres, and abattoirs; obtain permanent VCI registration.',
          topics: ['Emergency Trauma & Critical Care in Pets', 'Mass Vaccination Campaigns against Rabies and FMD', 'Wildlife Chemical Restraint & Tranquilization Protocols', 'State Veterinary Council Registration Procedures'],
          skillsToAcquire: ['Autonomous Emergency Outpatient Treatment', 'Zoonotic Disease Outbreak Containment', 'Managing Private Veterinary Clinical Operations'],
          activities: ['Rotate through clinical rotations treating over 500+ animal patients independently under faculty guidance', 'Submit verified internship completion logbook to State Veterinary Council to receive permanent registration certificate'],
          completionCriteria: 'Award of B.V.Sc & A.H. degree and issuance of VCI Certificate of Practice.',
          dependencies: 'Passing all academic B.V.Sc coursework',
          resources: [
            { name: 'Veterinary Council of India Registration Portal', url: 'https://vci.dadf.gov.in', type: 'Official Licensing', isFree: true },
            { name: 'MaxPetZ Small Animal Hospital Careers', url: 'https://maxpetz.com', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'environmental-scientist',
    title: 'Environmental Scientist & Sustainability Consultant (ESG / EIA)',
    description: 'Evaluates environmental impact assessments (EIA), air and water pollution monitoring, ecological biodiversity conservation, industrial effluent compliance (CPCB/SPCB), and corporate Environmental, Social, and Governance (ESG) sustainability reporting across consultancies and industrial corporations in India.',
    educationRequirements: 'B.Sc / B.Tech in Environmental Science / Environmental Engineering (3 to 4 years) + M.Sc in Environmental Science / Ecology (2 years). NABET (National Accreditation Board for Education and Training) EIA Coordinator / Functional Area Expert (FAE) accreditation.',
    educationPathways: [
      'B.Sc in Environmental Science / Life Sciences (3 years) -> M.Sc in Environmental Science (2 years via CUET PG)',
      'B.Tech in Environmental Engineering (4 years via JEE Main) -> M.Tech in Environmental Engineering via GATE',
      'ESG & Sustainability Reporting Professional (GRI / SASB / BRSR frameworks)'
    ],
    eligibilityRequirements: 'Bachelor\'s degree in Environmental Science, Chemical/Civil Engineering, Biology, or Chemistry. Understanding of the Environment (Protection) Act 1986, Air and Water Acts, and SEBI BRSR reporting guidelines.',
    certificationsAndExams: [
      'NABET Certified EIA Coordinator / Functional Area Expert (FAE)',
      'GRI (Global Reporting Initiative) Certified Sustainability Professional',
      'Lead Auditor ISO 14001:2015 Environmental Management Systems (EMS)'
    ],
    workEnvironment: 'Environmental consultancies, central and state pollution control boards (CPCB, SPCBs), industrial manufacturing plants, renewable energy developers, and corporate ESG teams in major metros.',
    marketDemand: 'High',
    jobOutlook: 'Rapid expansion driven by mandatory SEBI Business Responsibility and Sustainability Reporting (BRSR) for top 1,000 listed companies, stringent industrial effluent norms, and renewable energy carbon credits.',
    salaryRange: { min: 400000, max: 1500000, currency: 'INR', source: 'AmbitionBox Environmental Scientist Salary 2024, PayScale India' },
    salarySource: 'AmbitionBox Environmental Scientist Salary 2024, PayScale India',
    salaryByExperience: {
      entryLevel: { min: 400000, max: 650000, label: 'Junior Environmental Officer / ESG Analyst (0–2 yrs)' },
      earlyCareer: { min: 650000, max: 1100000, label: 'EIA Specialist / Environmental Consultant (3–5 yrs)' },
      experienced: { min: 1100000, max: 2200000, label: 'Principal Sustainability Consultant / Head of ESG (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Senior ESG and sustainability directors in Big 4 consultancies (EY, PwC, Deloitte ESG teams) and multinational corporations earn ₹22–38+ LPA.'
    },
    careerProgression: [
      'Environmental Analyst / Field Chemist',
      'Environmental Consultant / EIA Specialist',
      'Senior Sustainability Consultant / Functional Area Expert (FAE)',
      'Head of Environmental Affairs & Sustainability',
      'Chief Sustainability Officer (CSO) / VP ESG & Climate Risk'
    ],
    employmentSectors: {
      government: 'Ministry of Environment, Forest and Climate Change (MoEFCC), Central Pollution Control Board (CPCB), State Pollution Control Boards (SPCBs), National Green Tribunal (NGT Support Cells), CSIR-NEERI Nagpur',
      privateSector: 'Environmental Consultancies (ERM India, AECOM, WSP, Tata Consulting Engineers), Big 4 Sustainability Advisory, Corporate Industrial Conglomerates (Tata Steel, Reliance, Aditya Birla)'
    },
    timelineOverview: {
      totalEstimatedDuration: '5 Years (3 Years B.Sc + 2 Years M.Sc in Environmental Science)',
      educationDuration: '5 Years (B.Sc + M.Sc)',
      prepDuration: '3–6 Months EIA notification guidelines and ESG framework study',
      practicalTrainingDuration: '6 Months dissertation field research on air/water quality assessment or industrial effluent treatment',
      jobSearchDuration: '1–3 Months placement in environmental consulting firms or corporate industry',
      overlapNotes: 'Field environmental sampling (stack emission, ambient air PM2.5/PM10, wastewater BOD/COD) is conducted during master\'s dissertation.',
      confidenceNote: 'Accreditation as a Functional Area Expert (FAE) by Quality Council of India (QCI / NABET) is essential for signing EIA reports submitted to MoEFCC for environmental clearances.'
    },
    sources: [
      { title: 'Ministry of Environment, Forest and Climate Change (MoEFCC)', url: 'https://moef.gov.in', sourceAuthority: 'MoEFCC India', verifiedDate: '2024-10-14' },
      { title: 'Central Pollution Control Board (CPCB) Guidelines', url: 'https://cpcb.nic.in', sourceAuthority: 'CPCB India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Environmental Scientist (EIA & ESG) Career Roadmap',
      description: 'Environmental stewardship route: environmental chemistry, air/water pollution monitoring, EIA notification 2006 compliance, CPCB effluent standards, ISO 14001 auditing, and corporate ESG reporting.',
      totalEstimatedDuration: '5 Years',
      durationBreakdown: 'B.Sc Environmental Science / Chemistry: 3 Years | M.Sc Environmental Science & Industrial Pollution: 2 Years | QCI-NABET FAE Accreditation & ESG Consulting: Post-M.Sc',
      overlapNotes: 'Master\'s thesis sampling runs concurrently with academic 4th semester.',
      steps: [
        {
          stepNumber: 1,
          title: 'Environmental Chemistry, Ecology & Environmental Legislation',
          stageType: 'education',
          duration: '3 Years (B.Sc)',
          description: 'Master ecological principles, environmental chemistry, atmospheric chemistry, soil pollution, and statutory environmental laws (Environment Protection Act 1986, Air Act 1981, Water Act 1974).',
          topics: ['Ecosystem Dynamics & Biodiversity Conservation', 'Environmental Chemistry (Heavy Metals, Pesticides, Ozone Depletion)', 'Water Quality Parameters (BOD, COD, DO, Turbidity, Total Dissolved Solids)', 'Key Environmental Legislation & National Green Tribunal (NGT) Powers'],
          skillsToAcquire: ['Standard Water Quality Testing (BOD/COD Titration)', 'Air Quality Sampler Operation (Respirable Dust Sampler)', 'Statutory Environmental Law Interpretation'],
          activities: ['Collect and test 30 surface water and wastewater samples in environmental laboratory measuring BOD and heavy metal content', 'Draft a case analysis on landmark National Green Tribunal environmental jurisprudence judgments'],
          completionCriteria: 'Graduate with B.Sc in Environmental Science or Chemistry with minimum 55% marks.',
          dependencies: '10+2 with Science (PCB/PCM)',
          resources: [
            { name: 'NPTEL Ecology and Environmental Sciences (IISc Bengaluru)', url: 'https://nptel.ac.in', type: 'Course', isFree: true },
            { name: 'Ministry of Environment Legislative Acts Compendium', url: 'https://moef.gov.in', type: 'Government Regulations', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Environmental Impact Assessment (EIA) & Industrial Pollution Control',
          stageType: 'skill_acquisition',
          duration: '2 Years (M.Sc)',
          description: 'Master MoEFCC EIA Notification 2006, air dispersion modeling (AERMOD), Effluent Treatment Plant (ETP) and Sewage Treatment Plant (STP) design, and hazardous waste management rules.',
          topics: ['EIA Notification 2006 Methodology (Screening, Scoping, Public Consultation, Appraisal)', 'Air Quality Dispersion Modeling (AERMOD / CALPUFF)', 'Industrial Effluent Treatment Plant (ETP) Unit Operations (Coagulation, Activated Sludge, RO)', 'Solid and Hazardous Waste Management Rules 2016'],
          skillsToAcquire: ['Baseline Environmental Data Collection', 'AERMOD Industrial Chimney Smoke Dispersion Modeling', 'Designing Biological Effluent Treatment Processes'],
          activities: ['Conduct a comprehensive simulated Environmental Impact Assessment for a proposed industrial manufacturing plant', 'Model industrial sulfur dioxide and particulate emissions dispersion using AERMOD software'],
          completionCriteria: 'Obtain M.Sc in Environmental Science with verified dissertation on pollution mitigation.',
          dependencies: 'B.Sc in Environmental Science or relevant science degree',
          resources: [
            { name: 'MoEFCC PARIVESH Environmental Clearance Portal', url: 'https://parivesh.nic.in', type: 'Government Clearance Portal', isFree: true },
            { name: 'Central Pollution Control Board (CPCB) Effluent Standards', url: 'https://cpcb.nic.in', type: 'Official Standards', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'ISO 14001 Auditing & QCI-NABET Accreditation',
          stageType: 'certification',
          duration: '6 Months',
          description: 'Earn Lead Auditor certification in ISO 14001:2015 Environmental Management Systems (EMS) and prepare qualifications for Quality Council of India (QCI / NABET) Functional Area Expert (FAE).',
          topics: ['ISO 14001:2015 Environmental Management Systems Auditing', 'Environmental Risk Assessment & Hazard Identification', 'QCI-NABET Schemes for EIA Consultants (Functional Areas: Air, Water, Ecology, Noise)', 'Corporate Environmental Auditing and Compliance Filings'],
          skillsToAcquire: ['Conducting ISO 14001 Environmental Compliance Audits', 'Preparing Annual Environmental Statements (Form V)', 'QCI-NABET Technical Functional Area Defense'],
          activities: ['Perform a comprehensive ISO 14001 environmental gap audit for a commercial facility', 'Submit technical qualifications portfolio to QCI-NABET for Functional Area Expert accreditation'],
          completionCriteria: 'Earn ISO 14001:2015 Lead Auditor certification.',
          dependencies: 'M.Sc degree in Environmental Science and practical field experience',
          resources: [
            { name: 'QCI-NABET Scheme for Accreditation of EIA Consultant Organizations', url: 'https://nabet.qci.org.in', type: 'Official Accreditation', isFree: true },
            { name: 'ISO 14001 Environmental Management Standards', url: 'https://www.iso.org', type: 'International Standard', isFree: false }
          ]
        },
        {
          stepNumber: 4,
          title: 'Corporate ESG Reporting & Sustainability Leadership',
          stageType: 'practical_experience',
          duration: '1–2 Years',
          description: 'Join corporate sustainability team or environmental consultancy; execute SEBI Business Responsibility and Sustainability Reports (BRSR), greenhouse gas (GHG Scope 1, 2, 3) accounting, and net-zero strategy.',
          topics: ['SEBI BRSR (Business Responsibility & Sustainability Reporting) Framework', 'GHG Protocol Corporate Accounting (Scope 1, Scope 2, Scope 3 Emissions)', 'Global Reporting Initiative (GRI) Standards & Science Based Targets (SBTi)', 'Circular Economy & Zero Liquid Discharge (ZLD) Systems'],
          skillsToAcquire: ['Corporate Carbon Footprint Computation in Excel/SaaS', 'Drafting Official BRSR Disclosures for Listed Corporates', 'Decarbonization Roadmap Formulation'],
          activities: ['Calculate comprehensive corporate Scope 1, 2, and 3 carbon emissions for a listed public company', 'Publish complete corporate sustainability report compliant with SEBI BRSR and GRI standards'],
          completionCriteria: 'Appointment as Senior Sustainability Consultant or Corporate Environmental Manager.',
          dependencies: 'EIA, ISO 14001, and environmental data expertise',
          resources: [
            { name: 'SEBI Circular on Business Responsibility and Sustainability Reporting (BRSR)', url: 'https://www.sebi.gov.in', type: 'Government Regulations', isFree: true },
            { name: 'Global Reporting Initiative (GRI) Standards Portal', url: 'https://www.globalreporting.org', type: 'International Framework', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'entrepreneur',
    title: 'Startup Founder & Technology Entrepreneur',
    description: 'Envisions, bootstraps, and scales commercial startup ventures in India. Discovers customer problem-solution fit, builds minimum viable products (MVPs), validates unit economics (CAC, LTV, Gross Margins), pitches to venture capital investors (angel, seed, Series A), and navigates Startup India compliance.',
    educationRequirements: 'No formal statutory degree mandated; Bachelor\'s / Master\'s in Engineering, Business, or Design provides strong technical and analytical advantage. Deep domain expertise, grit, financial literacy, and executive hiring leadership.',
    educationPathways: [
      'B.Tech / B.E. / BCA / MCA -> Building technical prototype -> Y Combinator / Indian Incubator (NSRCEL IIMB, IIT Incubation Cells)',
      'MBA from Tier-1 Business School (IIMs/ISB) -> Founding venture with co-founders',
      'Industry Domain Specialist: 5+ years corporate domain expertise identifying market inefficiencies and launching venture'
    ],
    eligibilityRequirements: 'No educational barrier. Commercial enterprise incorporation as a Private Limited Company under the Companies Act 2013. Registration with DPIIT under the Startup India initiative for tax exemptions.',
    certificationsAndExams: [
      'DPIIT Recognized Startup Certification (Startup India Portal)',
      'Incubator Acceleration Selection (Y Combinator, Surge by Peak XV, Techstars)',
      'AngelList / Venture Capital Investment Term Sheet Execution'
    ],
    workEnvironment: 'Coworking spaces (WeWork, Innov8), technology incubator hubs (IIT Madras Research Park, T-Hub Hyderabad), and fast-moving startup office spaces across Bengaluru, Gurugram, Mumbai, and Pune.',
    marketDemand: 'Very High',
    jobOutlook: 'India is the world\'s 3rd largest startup ecosystem (120,000+ DPIIT-recognized startups, 110+ unicorns); fueled by digital public infrastructure (UPI, ONDC, Aadhaar/India Stack), domestic venture capital, and booming consumer markets.',
    salaryRange: { min: 400000, max: 3500000, currency: 'INR', source: 'Kalaari Capital / Peak XV Indian Startup Founder Compensation Reports 2024' },
    salarySource: 'Kalaari Capital / Peak XV Indian Startup Founder Compensation Reports 2024',
    salaryByExperience: {
      entryLevel: { min: 400000, max: 900000, label: 'Bootstrapped Founder / Seed Stage (0–2 yrs)' },
      earlyCareer: { min: 900000, max: 1800000, label: 'Series A Funded CEO / Co-Founder (3–5 yrs)' },
      experienced: { min: 1800000, max: 4500000, label: 'Series B+ / Profitable Scale-up Founder (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Seed-stage founders typically draw modest subsistence salaries (₹35,000–75,000/month) while preserving equity; upon Series A ($3–10M funding), founder compensation ranges between ₹18–35 LPA plus high equity value creation (holding 15–40% equity worth millions of dollars).'
    },
    careerProgression: [
      'Solo Founder / Ideation Phase',
      'Co-Founder & CEO / CTO (Pre-Seed / Seed Stage)',
      'Growth Stage CEO (Series A & B Funded)',
      'Scaling Enterprise CEO / Board Chairman',
      'Serial Entrepreneur / Angel Investor / Venture Partner'
    ],
    employmentSectors: {
      government: 'Startup India Initiative (Department for Promotion of Industry and Internal Trade - DPIIT), Atal Innovation Mission (AIM NITI Aayog), Biotechnology Industry Research Assistance Council (BIRAC Grants)',
      privateSector: 'Independent Private Limited Venture, Venture Capital Backed Tech Startups, D2C Consumer Brands, B2B SaaS Scale-ups'
    },
    timelineOverview: {
      totalEstimatedDuration: '3–7 Years to build a scalable, sustainable business venture',
      educationDuration: 'Bachelor\'s / Master\'s Degree (optional but beneficial)',
      prepDuration: '3–6 Months customer discovery, prototype building, and co-founder alignment',
      practicalTrainingDuration: 'Continuous real-world execution across product development, sales, and hiring',
      jobSearchDuration: 'Self-employed enterprise creation; ongoing investor fundraising cycles',
      overlapNotes: 'Initial customer validation and prototype building can occur while working or studying.',
      confidenceNote: 'Over 90% of startups fail within 5 years; capital discipline, early revenue validation, and founder resilience determine long-term survival.'
    },
    sources: [
      { title: 'Startup India Official Government Portal (DPIIT)', url: 'https://www.startupindia.gov.in', sourceAuthority: 'Ministry of Commerce & Industry', verifiedDate: '2024-10-14' },
      { title: 'Atal Innovation Mission (AIM NITI Aayog)', url: 'https://aim.gov.in', sourceAuthority: 'NITI Aayog India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Startup Founder & Entrepreneur Career Roadmap',
      description: 'Venture creation route: customer problem discovery, MVP prototype development, unit economics validation (CAC, LTV), DPIIT company incorporation, VC fundraising pitch, and scaling.',
      totalEstimatedDuration: '4–5 Years',
      durationBreakdown: 'Problem Validation & Prototype MVP: 6 Months | Company Incorporation & Early Traction: 6 Months | Seed / Angel Fundraising: 6 Months | Growth Scaling & Series A: 2–3 Years',
      overlapNotes: 'Customer interviews and MVP building can be executed in evenings and weekends prior to full-time commitment.',
      steps: [
        {
          stepNumber: 1,
          title: 'Problem Discovery, Customer Validation & MVP Prototyping',
          stageType: 'education',
          duration: '3–6 Months',
          description: 'Identify an acute, underserved customer pain point; conduct 50+ discovery interviews using "The Mom Test" framework, and build a low-code or no-code Minimum Viable Product (MVP).',
          topics: ['Customer Discovery ("The Mom Test" Interviewing Principles)', 'Lean Startup Methodology (Build-Measure-Learn Loop)', 'Low-Code / No-Code MVP Building (Webflow, Bubble, FlutterFlow)', 'Value Proposition Canvas & Business Model Canvas'],
          skillsToAcquire: ['Unbiased Customer Interviewing', 'Rapid MVP Prototyping', 'Hypothesis-Driven Experimentation'],
          activities: ['Interview 30 prospective target customers without pitching the solution to validate acute willingness-to-pay', 'Launch a functional MVP prototype within 30 days and acquire first 10 paying customers'],
          completionCriteria: 'Demonstrate verified customer problem with paying customer commitments.',
          dependencies: 'Entrepreneurial initiative and domain observation',
          resources: [
            { name: 'The Mom Test by Rob Fitzpatrick', url: 'https://www.momtestbook.com', type: 'Essential Book', isFree: false },
            { name: 'Y Combinator Startup School Free Courses', url: 'https://www.startupschool.org', type: 'Free Academy', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Company Incorporation, Legal Hygiene & Startup India Recognition',
          stageType: 'certification',
          duration: '3 Months',
          description: 'Incorporate as a Private Limited Company with Ministry of Corporate Affairs (MCA), establish Founder Shareholder Agreement (reverse vesting over 4 years), and obtain DPIIT Startup India certification.',
          topics: ['Private Limited Company Incorporation via SPICe+ MCA Portal', 'Founder Vesting Agreements (4-Year Vesting with 1-Year Cliff)', 'DPIIT Recognition for Section 80-IAC Tax Exemption & Angel Tax Relief', 'Intellectual Property Assignment Agreements'],
          skillsToAcquire: ['Corporate Legal Hygiene Architecture', 'Founder Equity Cap Table Structuring', 'GST and Statutory Tax Setup'],
          activities: ['Incorporate Private Limited Company and obtain Certificate of Incorporation, PAN, TAN, and GST', 'Register on Startup India portal and secure official DPIIT Certificate of Recognition'],
          completionCriteria: 'Legally compliant corporate entity with signed 4-year reverse vesting agreements.',
          dependencies: 'Validated MVP and committed co-founders',
          resources: [
            { name: 'Startup India DPIIT Recognition Application', url: 'https://www.startupindia.gov.in', type: 'Government Portal', isFree: true },
            { name: 'Ministry of Corporate Affairs SPICe+ Incorporation', url: 'https://www.mca.gov.in', type: 'Government Portal', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Unit Economics Validation, Product-Market Fit & Angel Pitching',
          stageType: 'skill_acquisition',
          duration: '6–12 Months',
          description: 'Validate unit economics: Customer Acquisition Cost (CAC), Lifetime Value (LTV > 3x CAC), gross margins (> 60% for software, > 35% for D2C); assemble pitch deck and raise Angel / Pre-Seed funding.',
          topics: ['Unit Economics Mastery (LTV, CAC, Monthly Recurring Revenue - MRR, Churn)', 'Cohort Analysis & Retention Curves', 'Pitch Deck Storytelling (10–12 Slides)', 'SAFE Notes and iSAFE (India-SAFE) Convertible Notes'],
          skillsToAcquire: ['Cohort Retention Tracking in Analytics', 'Financial Projection Modeling in Excel', '10-Minute Angel Investor Pitch Delivery'],
          activities: ['Demonstrate consistent month-on-month revenue growth (> 15% MoM) over 4 consecutive months', 'Pitch to 30+ angel investors/syndicates and close a ₹50L–2 Cr pre-seed round using iSAFE notes'],
          completionCriteria: 'Securing signed investment term sheets and funds disbursed to company bank account.',
          dependencies: 'Incorporated company and operational traction',
          resources: [
            { name: 'Sequoia / Peak XV Pitch Deck Template', url: 'https://www.peakxv.com', type: 'Pitch Guide', isFree: true },
            { name: 'iSAFE Convertible Note Documentation (100X.VC)', url: 'https://www.100x.vc/isafe', type: 'Open Legal Templates', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Hiring Core Team, Scaling Operations & Institutional Series A',
          stageType: 'practical_experience',
          duration: '1–2 Years',
          description: 'Recruit early core engineering and growth talent with ESOP pools (10–15% pool), scale sales channels, achieve repeatable product-market fit, and close an institutional Series A round ($2–5M).',
          topics: ['Employee Stock Option Plan (ESOP) Pool Creation & Policies', 'Building Scalable Inbound and Outbound Go-To-Market (GTM) Engines', 'Institutional Venture Capital Due Diligence', 'Board Governance & Investor Reporting'],
          skillsToAcquire: ['Hiring A-Player Executive Talent', 'Scaling Operational Playbooks', 'Institutional VC Board Representation'],
          activities: ['Scale company to ₹50L–1 Cr in monthly revenue with healthy retention metrics', 'Close an institutional Series A venture capital funding round with top venture funds (Peak XV, Accel, Matrix, Elevation)'],
          completionCriteria: 'Establish a self-sustaining, high-growth scalable enterprise with strong institutional backing.',
          dependencies: 'Demonstrated product-market fit and repeatable growth engine',
          resources: [
            { name: 'High Growth Handbook by Elad Gil', url: 'https://growth.eladgil.com', type: 'Free Scaling Guide', isFree: true },
            { name: 'Inc42 Indian Startup Intelligence Reports', url: 'https://inc42.com', type: 'Industry Portal', isFree: false }
          ]
        }
      ]
    }
  }
];

module.exports = otherCareers;
