/**
 * Business and Finance Careers Audit Data (11 Careers)
 * Covers: chartered-accountant, company-secretary, financial-analyst, accountant,
 * banking-officer, actuary, business-consultant, human-resources-specialist,
 * operations-manager, project-manager, business-development-manager.
 * Validated for Indian regulatory bodies (ICAI, ICSI, IAI, SEBI, RBI),
 * realistic INR salary benchmarks, and official career progression.
 */

const businessFinanceCareers = [
  {
    slug: 'chartered-accountant',
    title: 'Chartered Accountant (CA)',
    description: 'Conducts statutory financial auditing, corporate taxation, forensic accounting, financial reporting under Ind AS/IFRS, and strategic business advisory. Holds exclusive statutory authority under the Companies Act 2013 to audit and sign company financial statements in India.',
    educationRequirements: 'Chartered Accountancy qualification from the Institute of Chartered Accountants of India (ICAI). Requires clearing CA Foundation, CA Intermediate, 2-Year Practical Training (Articleship under the New Scheme of Education and Training 2023), and CA Final examinations.',
    educationPathways: [
      'Foundation Route: 10+2 -> CA Foundation -> CA Intermediate -> 2 Years Mandatory Articleship -> CA Final',
      'Direct Entry Route: Commerce Graduates (> 55%) or Non-Commerce Graduates (> 60%) can register directly for CA Intermediate',
      'Post-qualification: ICAI Certificate Courses in Forensic Accounting, International Taxation, or Valuation'
    ],
    eligibilityRequirements: '10+2 from any recognized board for CA Foundation route; or Bachelor\'s degree with required percentage for Direct Entry. Mandatory membership with ICAI upon clearing CA Final.',
    certificationsAndExams: [
      'ICAI CA Foundation Exam',
      'ICAI CA Intermediate Exam (Group I & II)',
      'ICAI Advanced Integrated Course on Information Technology and Soft Skills (AICITSS)',
      'ICAI CA Final Exam (Group I & II)'
    ],
    workEnvironment: 'Big 4 audit firms (Deloitte, PwC, EY, KPMG), top Indian accounting consultancies (BDO, Grant Thornton), corporate finance headquarters, and independent CA practices across Mumbai, Delhi NCR, Bengaluru, Chennai, and Kolkata.',
    marketDemand: 'Very High',
    jobOutlook: 'Strong sustained demand driven by GST compliance, corporate governance reforms under SEBI/MCA, startup valuations, and India’s burgeoning economy.',
    salaryRange: { min: 800000, max: 3000000, currency: 'INR', source: 'ICAI Campus Placement Committee Report 2024, AmbitionBox CA Salary' },
    salarySource: 'ICAI Campus Placement Committee Report 2024, AmbitionBox CA Salary',
    salaryByExperience: {
      entryLevel: { min: 800000, max: 1300000, label: 'Fresher CA / Senior Associate (0–2 yrs)' },
      earlyCareer: { min: 1300000, max: 2200000, label: 'Manager / Assistant Vice President (3–5 yrs)' },
      experienced: { min: 2200000, max: 4500000, label: 'Director / Partner / CFO (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'ICAI Campus Placement average fresher salary is ₹11.5–12.5 LPA. Ranks (AIR 1–50) and first-attempt qualifiers secure offers of ₹18–28+ LPA from Big 4 and global investment banks. Chief Financial Officers (CFOs) earn ₹60 Lakhs to ₹2+ Crores.'
    },
    careerProgression: [
      'Articled Assistant (Articleship Trainee)',
      'Senior Associate / Audit Senior (Big 4 / Corporate)',
      'Assistant Manager / Audit Manager',
      'Associate Director / Senior Finance Controller',
      'Partner (CA Firm) / Chief Financial Officer (CFO)'
    ],
    employmentSectors: {
      government: 'Comptroller and Auditor General of India (CAG), Public Sector Undertakings (PSUs: ONGC, IOCL, BHEL Finance Officers via ICAI), Reserve Bank of India (RBI Grade B)',
      privateSector: 'Big 4 Professional Services (Deloitte, PwC, EY, KPMG), Indian Accounting Firms (Grant Thornton, BDO, Haribhakti), Global Investment Banks, Listed Corporates'
    },
    timelineOverview: {
      totalEstimatedDuration: '4.5–5 Years from 10+2 (Foundation to Final)',
      educationDuration: 'Self-study and coaching aligned with ICAI curriculum',
      prepDuration: '8 Months Foundation + 8 Months Intermediate + 6 Months Final dedicated study leave',
      practicalTrainingDuration: '2 Years mandatory full-time articleship under a practicing CA firm (ICAI New Scheme 2023)',
      jobSearchDuration: 'Direct placement via ICAI National Campus Placement program (held twice annually)',
      overlapNotes: 'Articleship is full-time on-the-job training in audit and taxation alongside evening/weekend coaching.',
      confidenceNote: 'Articleship stipend under ICAI revised guidelines ranges from ₹5,000–15,000/month in Tier-1 cities.'
    },
    sources: [
      { title: 'ICAI New Scheme of Education and Training (2023 Guidelines)', url: 'https://www.icai.org/post/new-scheme-of-education-and-training', sourceAuthority: 'Institute of Chartered Accountants of India', verifiedDate: '2024-10-14' },
      { title: 'ICAI Committee for Members in Industry & Business Placement Reports', url: 'https://cmib.icai.org', sourceAuthority: 'ICAI CMIB', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Chartered Accountant (CA) Career Roadmap',
      description: 'ICAI-prescribed professional route: CA Foundation, CA Intermediate (Group I & II), 2-year mandatory articleship training, AICITSS, and CA Final examination.',
      totalEstimatedDuration: '4.5–5 Years',
      durationBreakdown: 'CA Foundation: 6–8 Months | CA Intermediate: 9–10 Months | Mandatory Articleship Training: 24 Months | CA Final Preparation & Clearance: 6–12 Months',
      overlapNotes: 'Under the 2023 New Scheme, CA Final exams are taken after completing the 2 years of practical articleship and clearing self-paced online modules.',
      steps: [
        {
          stepNumber: 1,
          title: 'CA Foundation Examination',
          stageType: 'education',
          duration: '6–8 Months',
          description: 'Register with ICAI post-10th/12th and clear CA Foundation: Accounting, Business Laws, Quantitative Aptitude (Maths, Stats, Logical Reasoning), and Business Economics.',
          topics: ['Principles and Practice of Accounting', 'Business Laws & Indian Contract Act', 'Business Mathematics & Statistics', 'Business Economics'],
          skillsToAcquire: ['Double-Entry Ledger Balancing', 'Legal Case Law Interpretation', 'Business Financial Calculations'],
          activities: ['Solve ICAI Revision Test Papers (RTP) and Mock Test Papers (MTP)', 'Practice 50+ previous year accounting numericals under timed conditions'],
          completionCriteria: 'Clear CA Foundation with minimum 40% in each subject and 50% aggregate.',
          dependencies: '10+2 from a recognized board (or appearing)',
          resources: [
            { name: 'ICAI BoS Knowledge Portal (Foundation Study Material)', url: 'https://www.icai.org/post/bos-knowledge-portal', type: 'Official Study Material', isFree: true },
            { name: 'ICAI Cloud Campus Lectures', url: 'https://live.icai.org/bos/vchannel/', type: 'Free Official Lectures', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'CA Intermediate Examination & ICITSS Training',
          stageType: 'education',
          duration: '9–10 Months',
          description: 'Master advanced accounting, corporate laws, taxation (Income Tax & GST), cost management, auditing, and financial management across Group 1 & Group 2.',
          topics: ['Advanced Accounting (Ind AS Framework)', 'Corporate & Other Laws', 'Direct Taxation & Indirect Taxation (GST)', 'Auditing and Ethics & Financial Management'],
          skillsToAcquire: ['Tax Computations (ITR & GST returns)', 'Audit Working Paper Documentation', 'Ratio and Cash Flow Analysis'],
          activities: ['Complete mandatory 4-week ICITSS (Information Technology and Orientation Course)', 'Attempt full syllabus mock tests for Group 1 and Group 2'],
          completionCriteria: 'Pass both Groups of CA Intermediate examination.',
          dependencies: 'Passing CA Foundation or Direct Entry Graduate route',
          resources: [
            { name: 'ICAI Intermediate BoS Study Material (New Scheme)', url: 'https://www.icai.org', type: 'Official Curriculum', isFree: true },
            { name: 'Central Board of Direct Taxes (CBDT) Tax Guidance', url: 'https://incometaxindia.gov.in', type: 'Government Portal', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Mandatory 2-Year Articleship Practical Training & Self-Paced Modules',
          stageType: 'practical_experience',
          duration: '24 Months',
          description: 'Undergo 2 years of unbroken practical training under a practicing Chartered Accountant, auditing company books, filing tax audits, and clearing ICAI Self-Paced Modules (SET A & B).',
          topics: ['Statutory & Internal Audit Execution', 'Tax Audit under Section 44AB', 'Ind AS Financial Statement Preparation', 'ICAI Self-Paced Online Modules (Corporate Law, Economic Law)'],
          skillsToAcquire: ['Vouching and Verification Techniques', 'Audit Sampling in SAP/Tally', 'Client Communication & Management Representation Letters'],
          activities: ['Execute statutory year-end audit field visits for listed and unlisted corporate clients', 'Draft tax audit reports (Form 3CD) and statutory audit opinions'],
          completionCriteria: 'Completion of 2 years of articleship documented in Form 109/108; clearance of Self-Paced Modules.',
          dependencies: 'Passing both groups of CA Intermediate and completing ICITSS',
          resources: [
            { name: 'ICAI Articleship Vacancy Portal', url: 'https://www.icai.org', type: 'Portal', isFree: true },
            { name: 'Standards on Auditing (SAs) Compendium (ICAI)', url: 'https://www.icai.org/post/auditing-assurance-standards', type: 'Official Standards', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'CA Final Examination, ICAI Membership & Campus Placement',
          stageType: 'certification',
          duration: '6–12 Months',
          description: 'Clear CA Final (Financial Reporting, Advanced Financial Management, Advanced Auditing, Direct & International Taxation, Indirect Taxation), complete AICITSS, and register as Associate Chartered Accountant (ACA).',
          topics: ['Indian Accounting Standards (Ind AS) Full Framework', 'Advanced Financial Management (Derivatives, Mergers)', 'Advanced Auditing, Assurance & Professional Ethics', 'Direct Tax Laws & International Taxation'],
          skillsToAcquire: ['Business Valuation & M&A Analysis', 'Complex Ind AS Consolidation', 'International Transfer Pricing Evaluation'],
          activities: ['Complete 4-week Advanced ICITSS training course', 'Participate in ICAI National Campus Placement interviews with Big 4 and corporate firms'],
          completionCriteria: 'Passing score in CA Final examination; enrollment as Member of ICAI (ACA designation).',
          dependencies: 'Completion of Articleship and clearance of Self-Paced Online Modules',
          resources: [
            { name: 'ICAI Final BoS Course Portal', url: 'https://www.icai.org', type: 'Official Portal', isFree: true },
            { name: 'ICAI Campus Placement Committee (CMIB)', url: 'https://cmib.icai.org', type: 'Placement Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'company-secretary',
    title: 'Company Secretary (CS)',
    description: 'Serves as the principal corporate governance advisor, board legal officer, and compliance specialist under the Companies Act 2013. Manages board meetings, statutory filings with the Registrar of Companies (ROC), SEBI listing regulations (LODR), and corporate secretarial audits.',
    educationRequirements: 'Company Secretaryship from the Institute of Company Secretaries of India (ICSI). Clearance of CSEET, CS Executive, 21-month mandatory practical training, and CS Professional examinations. Official membership as Associate Company Secretary (ACS).',
    educationPathways: [
      'CSEET (CS Executive Entrance Test) -> CS Executive (Group 1 & 2) -> 21 Months Practical Training -> CS Professional',
      'Direct Entry for Graduates / Postgraduates (exempted from CSEET under ICSI criteria)',
      'Dual Qualification: CS + LL.B is the gold standard for corporate legal leadership'
    ],
    eligibilityRequirements: '10+2 from any recognized board for CSEET. Graduation for direct entry. Mandatory membership with ICSI (ACS designation) to act as Key Managerial Personnel (KMP) under Section 203 of the Companies Act 2013.',
    certificationsAndExams: [
      'ICSI CSEET (CS Executive Entrance Test)',
      'ICSI CS Executive Examination',
      'ICSI Executive Development Programme (EDP) & CLDP',
      'ICSI CS Professional Examination'
    ],
    workEnvironment: 'Corporate secretarial departments of listed corporations, corporate law firms, Big 4 advisory divisions, stock exchanges, and practicing CS firms across Mumbai, Delhi NCR, Hyderabad, and Bengaluru.',
    marketDemand: 'High',
    jobOutlook: 'Strong mandatory demand: Section 203 of Companies Act 2013 makes whole-time Company Secretaries mandatory for every listed company and every private company having paid-up share capital of ₹10 Crores or more.',
    salaryRange: { min: 650000, max: 2200000, currency: 'INR', source: 'ICSI Campus Placement Reports 2024, AmbitionBox CS Salary' },
    salarySource: 'ICSI Campus Placement Reports 2024, AmbitionBox CS Salary',
    salaryByExperience: {
      entryLevel: { min: 650000, max: 1000000, label: 'Assistant Company Secretary (0–2 yrs)' },
      earlyCareer: { min: 1000000, max: 1800000, label: 'Company Secretary & Compliance Officer (3–5 yrs)' },
      experienced: { min: 1800000, max: 3500000, label: 'Head of Legal & Secretarial / Chief Governance Officer (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Whole-time Company Secretaries appointed as Key Managerial Personnel (KMP) in large listed conglomerates (Reliance, Tata, Infosys, HDFC) earn ₹40 Lakhs to ₹1.5+ Crores.'
    },
    careerProgression: [
      'Management Trainee (Secretarial)',
      'Assistant Company Secretary',
      'Company Secretary & Compliance Officer (KMP)',
      'Vice President of Corporate Affairs & Legal',
      'Chief Legal Officer (CLO) / Group General Counsel'
    ],
    employmentSectors: {
      government: 'Public Sector Undertakings (BHEL, NTPC, ONGC, Coal India KMP Secretarial posts), SEBI, Insolvency and Bankruptcy Board of India (IBBI), National Stock Exchange (NSE / BSE)',
      privateSector: 'Public Listed Corporations (Tata, Reliance, Adani, L&T), Multi-national Corporations, Corporate Law Consultancies, Practicing CS Firms'
    },
    timelineOverview: {
      totalEstimatedDuration: '3.5–4.5 Years from 10+2',
      educationDuration: 'Self-study and coaching alongside ICSI guidelines',
      prepDuration: '4 Months CSEET + 9 Months Executive + 12 Months Professional',
      practicalTrainingDuration: '21 Months mandatory long-term practical training in a corporate or practicing CS firm',
      jobSearchDuration: 'Immediate absorption via ICSI National Placement Portal or corporate legal networks',
      overlapNotes: 'Practical training is performed after passing CS Executive examination.',
      confidenceNote: 'Holding an LL.B along with CS provides massive competitive advantage for appointment as Corporate General Counsel.'
    },
    sources: [
      { title: 'Institute of Company Secretaries of India (ICSI) Academic Guidelines', url: 'https://www.icsi.edu', sourceAuthority: 'ICSI India', verifiedDate: '2024-10-14' },
      { title: 'Ministry of Corporate Affairs (MCA) Companies Act Section 203 Rules', url: 'https://www.mca.gov.in', sourceAuthority: 'MCA India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Company Secretary (CS) Career Roadmap',
      description: 'ICSI-certified corporate governance journey: CSEET, CS Executive, 21-month mandatory corporate training, Corporate Leadership Development Programme (CLDP), and CS Professional examination.',
      totalEstimatedDuration: '3.5–4 Years',
      durationBreakdown: 'CSEET Entrance: 4 Months | CS Executive: 9 Months | Practical Corporate Training: 21 Months | CS Professional Examination: Concurrent / Post-Training',
      overlapNotes: '21-month training can be undertaken after clearing the CS Executive exam.',
      steps: [
        {
          stepNumber: 1,
          title: 'CSEET (CS Executive Entrance Test)',
          stageType: 'education',
          duration: '3–4 Months',
          description: 'Clear the national computer-based CSEET exam testing Business Communication, Legal Aptitude and Logical Reasoning, Economic and Business Environment, and Current Affairs.',
          topics: ['Business Communication Etiquette', 'Constitutional Law & Law of Torts Basics', 'Company Law Overview', 'Current Economic Policies in India'],
          skillsToAcquire: ['Legal Comprehension', 'Logical Deduction', 'Business Correspondence Writing'],
          activities: ['Solve ICSI CSEET mock question banks and e-bulletin current affairs', 'Practice online viva voce simulations'],
          completionCriteria: 'Clear CSEET with minimum 40% in each paper and 50% aggregate.',
          dependencies: '10+2 from a recognized board (or graduation for exemption)',
          resources: [
            { name: 'ICSI CSEET Reference Reading Material', url: 'https://www.icsi.edu/cseet/', type: 'Official Study Material', isFree: true },
            { name: 'ICSI e-Cart Knowledge Portal', url: 'https://www.icsi.edu', type: 'Official Portal', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'CS Executive Examination & EDP Training',
          stageType: 'education',
          duration: '9–12 Months',
          description: 'Master Group 1 & Group 2 subjects: Jurisprudence, Company Law and Practice, Setting up of Business Entities, Corporate Accounting, and Tax Laws.',
          topics: ['Companies Act 2013 Comprehensive Sections', 'SEBI (LODR) & Securities Laws', 'Insolvency and Bankruptcy Code (IBC 2016)', 'Corporate Tax & GST Filings'],
          skillsToAcquire: ['Drafting Board Resolutions & Minutes', 'MCA21 e-Form Filing Compliance', 'Interpretation of Corporate Statutes'],
          activities: ['Complete 15-day online Executive Development Programme (EDP) and 15-day classroom EDP', 'Draft sample notices, agendas, and minutes for Annual General Meetings (AGM)'],
          completionCriteria: 'Pass both Groups of CS Executive examinations.',
          dependencies: 'Passing CSEET or Direct Entry Graduate',
          resources: [
            { name: 'ICSI Executive BoS Study Material (Syllabus 2022)', url: 'https://www.icsi.edu', type: 'Official Syllabus', isFree: true },
            { name: 'Ministry of Corporate Affairs MCA21 Portal', url: 'https://www.mca.gov.in', type: 'Government Portal', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: '21-Month Practical Training & Secretarial Audit',
          stageType: 'practical_experience',
          duration: '21 Months',
          description: 'Undergo 21 months of full-time training in a recognized listed company (paid-up capital > ₹5 Cr) or with a practicing Company Secretary (PCS), executing statutory secretarial audits.',
          topics: ['Secretarial Standards (SS-1 Meetings of Board, SS-2 General Meetings)', 'Due Diligence & Secretarial Audit (Form MR-3)', 'Foreign Direct Investment (FDI) & FEMA Regulations', 'Stock Exchange Disclosures under SEBI LODR'],
          skillsToAcquire: ['Corporate Secretarial Auditing', 'FDI / RBI Inward Remittance Compliance', 'LODR Material Disclosure Drafting'],
          activities: ['Conduct compliance checks for quarterly and annual stock exchange filings', 'Draft board resolutions and verify statutory registers of charges, members, and directors'],
          completionCriteria: 'Satisfactory completion certificate of 21 months practical training verified by ICSI.',
          dependencies: 'Passing CS Executive Examination',
          resources: [
            { name: 'ICSI Training Portal (Stimulate)', url: 'https://stimulate.icsi.edu', type: 'Official Portal', isFree: true },
            { name: 'Secretarial Standards Board (SSB) Compendium', url: 'https://www.icsi.edu/ssb/', type: 'Official Standards', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'CS Professional Examination & ACS Membership',
          stageType: 'certification',
          duration: '6–12 Months',
          description: 'Clear CS Professional (Environmental, Social and Governance - ESG, Drafting, Pleadings & Appearances, Compliance Management, Restructuring), complete Corporate Leadership Development Programme (CLDP), and enroll as Associate Company Secretary (ACS).',
          topics: ['ESG Principles & Corporate Sustainability', 'Drafting of Contracts & Pleadings before NCLT', 'Corporate Restructuring, Mergers & Takeovers', 'Strategic Governance & Risk Management'],
          skillsToAcquire: ['NCLT / NCLAT Pleading Preparation', 'Takeover Code Compliance (SEBI SAST)', 'Corporate Governance Advisory'],
          activities: ['Complete residential Corporate Leadership Development Programme (CLDP)', 'Participate in ICSI National Placement Drive for KMP appointment'],
          completionCriteria: 'Passing score in CS Professional exams; enrollment as Associate Member of ICSI (ACS designation).',
          dependencies: 'Passing CS Executive and completing prescribed training',
          resources: [
            { name: 'ICSI Professional Stage BoS Material', url: 'https://www.icsi.edu', type: 'Official Material', isFree: true },
            { name: 'ICSI Placement Portal', url: 'https://www.icsi.edu/placement/', type: 'Placement Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'financial-analyst',
    title: 'Financial Analyst (CFA / NISM)',
    description: 'Conducts quantitative financial modeling, discounted cash flow (DCF) company valuations, equity research, portfolio optimization, and financial statement analysis. Prepares investment memos and forecasts for asset management, private equity, and investment banks.',
    educationRequirements: 'Bachelor\'s in Finance, Economics, Commerce, or Engineering + Chartered Financial Analyst (CFA Program - Levels I, II, III) from CFA Institute or MBA Finance. NISM Series XV (Research Analyst) certification for SEBI registration.',
    educationPathways: [
      'B.Com / BBA / B.Tech -> CFA Program (Level I, II, III) while working in equity research or corporate finance',
      'MBA in Finance from Tier 1/2 Business School (IIMs, XLRI, SPJIMR, FMS) via CAT/XAT',
      'SEBI Registered Research Analyst pathway via NISM Series XV Certification'
    ],
    eligibilityRequirements: 'Bachelor\'s degree in any discipline (or final-year student for CFA Level I). Strong quantitative aptitude, corporate accounting, and financial modeling skills in Microsoft Excel/Python.',
    certificationsAndExams: [
      'CFA Program (Chartered Financial Analyst - Level I, II, III)',
      'NISM-Series-XV: Research Analyst Certification',
      'Financial Modeling and Valuation Analyst (FMVA)'
    ],
    workEnvironment: 'Global investment banks (Goldman Sachs, Morgan Stanley, J.P. Morgan GCCs in Mumbai/Bengaluru), domestic brokerage firms (Motilal Oswal, ICICI Direct), private equity funds, and corporate FP&A teams.',
    marketDemand: 'High',
    jobOutlook: 'Surging demand driven by Indian retail investor participation, record mutual fund SIP inflows, expanding Global Capability Centers (GCCs), and PE/VC investments.',
    salaryRange: { min: 500000, max: 2000000, currency: 'INR', source: 'AmbitionBox Financial Analyst Salary 2024, CFA Society India' },
    salarySource: 'AmbitionBox Financial Analyst Salary 2024, CFA Society India',
    salaryByExperience: {
      entryLevel: { min: 500000, max: 850000, label: 'Junior Financial Analyst / Equity Research Trainee (0–2 yrs)' },
      earlyCareer: { min: 850000, max: 1600000, label: 'Senior Financial Analyst / Associate (3–5 yrs)' },
      experienced: { min: 1600000, max: 3000000, label: 'Portfolio Manager / VP Equity Research (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Top global investment banking GCCs (Goldman Sachs, J.P. Morgan) and Tier-1 PE funds pay ₹15–26 LPA for fresh analysts with CFA Level II/III or top IIM degrees, plus substantial performance bonuses.'
    },
    careerProgression: [
      'Financial Research Analyst / FP&A Analyst',
      'Senior Financial Analyst / Lead Equity Research Analyst',
      'Assistant Vice President (AVP) Research / Investment Associate',
      'Vice President (VP) / Lead Portfolio Manager',
      'Managing Director / Chief Investment Officer (CIO)'
    ],
    employmentSectors: {
      government: 'Reserve Bank of India (RBI Grade B Department of Economic and Policy Research), SEBI Officer Grade A, State Bank of India (SBI Capital Markets), LIC Investment Wing',
      privateSector: 'Global Investment Banks (Goldman Sachs, Morgan Stanley, J.P. Morgan, Citi), Indian Institutional Brokerages (Kotak Securities, Motilal Oswal), Mutual Funds & AMCs, PE/VC Firms'
    },
    timelineOverview: {
      totalEstimatedDuration: '3–4 Years (Undergraduate degree + 2–3 Years CFA journey)',
      educationDuration: '3 Years (B.Com/BBA) or 4 Years (B.Tech)',
      prepDuration: '300 study hours per CFA Level (total ~900 hours across Levels I, II, and III)',
      practicalTrainingDuration: '4,000 hours of qualified investment work experience required for full CFA charter',
      jobSearchDuration: '2–4 Months hiring cycle in financial services',
      overlapNotes: 'CFA exams are taken concurrently while working full-time in financial services.',
      confidenceNote: 'Clearing CFA Level I is often sufficient to switch into entry-level research associate roles in top Indian cities.'
    },
    sources: [
      { title: 'CFA Institute Candidate Body of Knowledge (CBOK)', url: 'https://www.cfainstitute.org', sourceAuthority: 'CFA Institute', verifiedDate: '2024-10-14' },
      { title: 'National Institute of Securities Markets (NISM) Certifications', url: 'https://www.nism.ac.in', sourceAuthority: 'SEBI / NISM', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Financial Analyst (CFA Track) Career Roadmap',
      description: 'Investment finance route: corporate financial statements, 3-statement financial modeling, DCF/comparable valuations, CFA Level I/II/III exams, and equity research reports.',
      totalEstimatedDuration: '3–4 Years',
      durationBreakdown: 'Core Finance & Excel Modeling: 6 Months | CFA Level I Preparation: 6 Months | Financial Analyst Internship / Job: 1 Year | CFA Level II & Advanced Valuation: 1 Year',
      overlapNotes: 'CFA Level II and III studies proceed while working as a full-time financial or equity research analyst.',
      steps: [
        {
          stepNumber: 1,
          title: 'Financial Statements Analysis & Excel Modeling',
          stageType: 'skill_acquisition',
          duration: '6 Months',
          description: 'Master balance sheet, income statement, and cash flow statement interconnectivity, alongside dynamic 3-statement financial modeling and sensitivity analysis in Excel.',
          topics: ['Three-Statement Financial Model Linking', 'Working Capital & Depreciation Schedules', 'Discounted Cash Flow (DCF) Valuation', 'Trading & Transaction Comparables (Comps)'],
          skillsToAcquire: ['Advanced Excel Keyboard Shortcuts', 'Building Dynamic Financial Models from Scratch', 'WACC & Terminal Value Computation'],
          activities: ['Build a full 3-statement dynamic model and DCF valuation for an NSE-listed company (e.g., Infosys, Tata Motors)', 'Perform sensitivity analysis with bull, base, and bear scenarios'],
          completionCriteria: 'Produce an error-free, dynamically linked valuation workbook for a public company.',
          dependencies: 'Basic accounting knowledge or undergraduate commerce/math background',
          resources: [
            { name: 'Aswath Damodaran Online Corporate Finance & Valuation', url: 'https://pages.stern.nyu.edu/~adamodar/', type: 'Free Open Courseware', isFree: true },
            { name: 'NPTEL Financial Statement Analysis and Reporting', url: 'https://nptel.ac.in', type: 'Course', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'CFA Level I Examination & Ethics',
          stageType: 'certification',
          duration: '6 Months (approx. 300 study hours)',
          description: 'Master the 10 CFA topic areas: Ethical & Professional Standards, Quantitative Methods, Economics, Financial Statement Analysis, Corporate Issuers, Equity, Fixed Income, Derivatives, Alternative Investments, and Portfolio Management.',
          topics: ['CFA Code of Ethics and Standards of Professional Conduct', 'Time Value of Money & Hypothesis Testing', 'Financial Statement Ratios & Revenue Recognition', 'Bond Duration & Convexity Calculations'],
          skillsToAcquire: ['Texas Instruments BA II Plus Financial Calculator Operations', 'Speed Vignette Problem Solving'],
          activities: ['Complete all CFA Institute Learning Ecosystem practice questions', 'Score > 75% on 3 full-length timed mock exams'],
          completionCriteria: 'Clear CFA Level I examination above the minimum passing score (MPS).',
          dependencies: 'Undergraduate degree or final-year university status',
          resources: [
            { name: 'CFA Institute Official Learning Ecosystem', url: 'https://www.cfainstitute.org', type: 'Official Curriculum', isFree: false },
            { name: 'NISM Series XV Research Analyst Certification Portal', url: 'https://www.nism.ac.in', type: 'Certification Portal', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Equity Research / Corporate FP&A Employment',
          stageType: 'practical_experience',
          duration: '12 Months',
          description: 'Join an investment bank, equity research brokerage, or corporate FP&A team as an analyst; initiate coverage on sectors, track quarterly earnings, and publish investment notes.',
          topics: ['Quarterly Earnings Call Modeling Updates', 'Sector-Specific Metrics (ARPU, Same-Store-Sales, EV/EBITDA)', 'Drafting Initiating Coverage Reports', 'Management Q&A Preparation'],
          skillsToAcquire: ['Financial Journalism & Investment Thesis Defense', 'FactSet / Bloomberg / Capital IQ Navigation', 'Variance Analysis against Budget'],
          activities: ['Publish 5+ equity research notes with buy/hold/sell recommendations and target price justifications', 'Conduct monthly variance analyses explaining revenue deviations to leadership'],
          completionCriteria: 'Complete 1 year of verified investment/financial analysis employment.',
          dependencies: 'Passing CFA Level I and financial modeling proficiency',
          resources: [
            { name: 'BSE India Corporate Filings & Annual Reports', url: 'https://www.bseindia.com', type: 'Official Exchange Data', isFree: true },
            { name: 'NSE India Market Data & Reports', url: 'https://www.nseindia.com', type: 'Official Exchange Data', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'CFA Level II / III & Chartered Status',
          stageType: 'certification',
          duration: '1–2 Years',
          description: 'Clear CFA Level II (deep asset valuation) and Level III (portfolio management & wealth planning), complete 4,000 hours of qualified work experience, and earn the CFA Charter.',
          topics: ['Multi-Factor Equity Risk Models', 'Credit Default Swaps (CDS) & Structured Debt', 'Execution of Portfolio Decisions (Rebalancing)', 'Institutional Asset Allocation & IPS Formulation'],
          skillsToAcquire: ['Advanced Multi-Asset Portfolio Construction', 'Risk Attribution & GIPS Compliance', 'Client Investment Policy Statement (IPS) Drafting'],
          activities: ['Write comprehensive Investment Policy Statements for institutional funds', 'Apply for regular membership with CFA Society India and CFA Institute'],
          completionCriteria: 'Award of Chartered Financial Analyst (CFA) charter.',
          dependencies: 'Passing CFA Level I and accumulating required professional experience',
          resources: [
            { name: 'CFA Society India Knowledge Events', url: 'https://www.cfasocietyindia.org', type: 'Professional Society', isFree: false },
            { name: 'Goldman Sachs Careers India', url: 'https://www.goldmansachs.com/careers', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'accountant',
    title: 'Senior Accountant (Tally / GST / Ind AS)',
    description: 'Manages day-to-day general ledger accounting, reconciliations, vendor payables, customer billings, monthly payroll processing, and statutory compliance including GST returns (GSTR-1, 3B, 9) and TDS filings across Indian enterprises.',
    educationRequirements: 'B.Com / BBA in Finance or Accounting (3 years) + proficiency in ERP systems (Tally Prime, Zoho Books, SAP FICO, QuickBooks). Knowledge of Indian tax laws and Accounting Standards (AS/Ind AS). Optional M.Com or CMA.',
    educationPathways: [
      'B.Com (3 years) + Certified Tally Prime Professional + GST Practitioner Certification',
      'B.Com followed by M.Com or MBA in Finance (2 years)',
      'Cost and Management Accountant (CMA) Intermediate / Qualified from ICMAI'
    ],
    eligibilityRequirements: '10+2 with Commerce or Mathematics. Demonstrable expertise in double-entry bookkeeping, GST return preparation, and Excel formulas (VLOOKUP, XLOOKUP, Pivot Tables).',
    certificationsAndExams: [
      'Tally Professional / Tally Prime Certified Expert',
      'GST Practitioner (GSTP) Certification (NACIN / CBIC)',
      'SAP Certified Application Associate - Financial Accounting (SAP S/4HANA FICO)'
    ],
    workEnvironment: 'Corporate finance departments, SME businesses, manufacturing units, commercial accounting consultancies, and chartered accountancy firms nationwide.',
    marketDemand: 'Very High',
    jobOutlook: 'Universal demand across every registered GST business in India; growing formalization of MSME sector requiring tech-enabled accounting and compliance.',
    salaryRange: { min: 280000, max: 800000, currency: 'INR', source: 'AmbitionBox Accountant Salary 2024, PayScale India' },
    salarySource: 'AmbitionBox Accountant Salary 2024, PayScale India',
    salaryByExperience: {
      entryLevel: { min: 280000, max: 400000, label: 'Junior Accountant / Accounts Executive (0–2 yrs)' },
      earlyCareer: { min: 400000, max: 650000, label: 'Senior Accountant / GST Specialist (3–5 yrs)' },
      experienced: { min: 650000, max: 1100000, label: 'Finance Manager / Chief Accountant (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Senior accountants proficient in SAP S/4HANA FICO or global enterprise ERPs in Tier-1 IT hubs earn ₹8–14 LPA.'
    },
    careerProgression: [
      'Accounts Assistant / Billing Executive',
      'Accountant (General Ledger / AP & AR)',
      'Senior Accountant / Compliance Lead',
      'Assistant Finance Manager',
      'Chief Accountant / Head of Accounts & Finance'
    ],
    employmentSectors: {
      government: 'State Public Sector Undertakings, Municipal Corporation Accounts Departments, Nationalised Bank Accounts Branches, Railway Accounts Department (RRB)',
      privateSector: 'MSMEs and Mid-market Enterprises, Corporate IT & Manufacturing Companies, Retail Chains, E-commerce Sellers, Accounting Service Firms'
    },
    timelineOverview: {
      totalEstimatedDuration: '3–3.5 Years (Undergraduate degree + 3–6 Months Tally/GST certification)',
      educationDuration: '3 Years (B.Com)',
      prepDuration: '3–6 Months practical Tally Prime and advanced Excel training',
      practicalTrainingDuration: '6 Months internship or entry-level junior accountant tenure',
      jobSearchDuration: 'Immediate employment in local MSME or corporate firms',
      overlapNotes: 'Tally certification and basic GST return filing skills can be acquired during college vacations.',
      confidenceNote: 'Strong mastery of bank reconciliation statements (BRS), TDS Section 194 deduction rates, and input tax credit (ITC) matching rules guarantees quick employment.'
    },
    sources: [
      { title: 'GST Council & Goods and Services Tax Network (GSTN)', url: 'https://www.gst.gov.in', sourceAuthority: 'CBIC / GSTN', verifiedDate: '2024-10-14' },
      { title: 'Tally Education Certification Standards', url: 'https://tallyeducation.com', sourceAuthority: 'Tally Solutions', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Senior Accountant Career Roadmap',
      description: 'Corporate accounting pathway: double-entry bookkeeping, Tally Prime, GST portal filings (GSTR-1, GSTR-3B, ITC reconciliation), TDS e-filing, and monthly financial closure.',
      totalEstimatedDuration: '3.5 Years',
      durationBreakdown: 'B.Com Degree & Accounting Foundations: 3 Years | Tally Prime & GST Certification: 3–6 Months | Junior Accounts Experience & SAP FICO: 1 Year',
      overlapNotes: 'Practical accounting software certifications are pursued concurrently with final-year B.Com studies.',
      steps: [
        {
          stepNumber: 1,
          title: 'Commerce Degree & Principles of Double-Entry Bookkeeping',
          stageType: 'education',
          duration: '3 Years (B.Com)',
          description: 'Master ledger posting, journal entries, trial balance generation, bank reconciliation statements (BRS), depreciation schedules, and final accounts preparation.',
          topics: ['Journal Entries & Golden Rules of Accounting', 'Bank Reconciliation Statements (BRS)', 'Depreciation Accounting (SLM & WDV)', 'Preparation of Balance Sheet and P&L Account'],
          skillsToAcquire: ['Double-Entry Ledger Precision', 'Advanced Excel (SUMIFS, VLOOKUP, Pivot Tables)', 'Basic Financial Ratio Interpretation'],
          activities: ['Prepare manual trial balance and final accounts from raw transaction vouchers', 'Construct dynamic bank reconciliation spreadsheets in Excel'],
          completionCriteria: 'Graduate with B.Com degree with minimum 55% marks.',
          dependencies: '10+2 with Commerce or Mathematics',
          resources: [
            { name: 'NPTEL Financial Accounting (IIT Bombay)', url: 'https://nptel.ac.in', type: 'Course', isFree: true },
            { name: 'ICAI Accounting Standards Compendium', url: 'https://www.icai.org', type: 'Official Standards', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Tally Prime & Business Accounting Software',
          stageType: 'skill_acquisition',
          duration: '3–6 Months',
          description: 'Master Tally Prime: company creation, chart of accounts, voucher entry (sales, purchase, payment, receipt), inventory management, and cost center allocation.',
          topics: ['Tally Prime Navigation & Shortcuts', 'Purchase & Sales Voucher Configuration with E-Way Bill', 'Inventory Management (Stock Items, Units, Batches)', 'Payroll Module in Tally'],
          skillsToAcquire: ['Fast Tally Prime Data Entry', 'E-Way Bill & E-Invoicing Generation', 'Cost Center Reporting'],
          activities: ['Create and operate a complete business company profile in Tally Prime with 100+ transactions', 'Generate automated balance sheets and trial balances from Tally'],
          completionCriteria: 'Earn Tally Prime Certified Professional credential.',
          dependencies: 'B.Com degree or final-year standing',
          resources: [
            { name: 'Tally Education Online Learning Portal', url: 'https://tallyeducation.com', type: 'Official Training', isFree: false },
            { name: 'Zoho Books Certification Portal', url: 'https://www.zoho.com/books/', type: 'Platform', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'GST, TDS & Statutory E-Filing Compliance',
          stageType: 'skill_acquisition',
          duration: '3–6 Months',
          description: 'Master Indian statutory compliance: GST registration, monthly GSTR-1 outward supply, GSTR-3B tax payment, GSTR-2B input tax credit (ITC) matching, and TDS return filing (Form 24Q, 26Q).',
          topics: ['GST Invoicing Rules & HSN Codes', 'GSTR-1, GSTR-3B & Annual GSTR-9 Filings', 'TDS Rates under Income Tax Act & Form 16/16A Generation', 'TRACES Portal Operations & Form 26AS/AIS Reconciliation'],
          skillsToAcquire: ['GSTR-2B vs Purchase Register ITC Matching', 'TDS Deduction & Challan ITNS 281 Generation', 'Professional Tax & EPF/ESI Monthly Calculations'],
          activities: ['Reconcile 500+ vendor purchase invoices against GSTR-2B data on the GST portal', 'Prepare quarterly Form 26Q e-TDS return file using RPU tool'],
          completionCriteria: 'Passing GST Practitioner examination or certified statutory tax filing course.',
          dependencies: 'Tally Prime and Basic Accounting proficiency',
          resources: [
            { name: 'GSTN Portal Tutorials & User Manuals', url: 'https://www.gst.gov.in/help', type: 'Government Portal', isFree: true },
            { name: 'Income Tax e-Filing Portal User Guides', url: 'https://www.incometax.gov.in', type: 'Government Portal', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Senior Accountant Role & ERP Transition (SAP FICO)',
          stageType: 'practical_experience',
          duration: '1–2 Years',
          description: 'Oversee full-cycle accounts closure, coordinate statutory audits with external CAs, manage vendor and customer reconciliations, and learn SAP FICO modules.',
          topics: ['Month-End & Year-End Financial Closure Checklist', 'Audit Queries Resolution with Statutory CAs', 'SAP S/4HANA FICO (GL, AP, AR, Asset Accounting)'],
          skillsToAcquire: ['Full Financial Statement Closing', 'Statutory Audit File Preparation', 'SAP FICO T-Codes Navigation'],
          activities: ['Lead month-end financial book closure within 5 business days', 'Present monthly operating cash flow and debtors aging analysis to company directors'],
          completionCriteria: 'Promotion or appointment as Senior Accountant / Accounts Team Lead.',
          dependencies: '1+ year experience in general ledger accounting and GST filings',
          resources: [
            { name: 'openSAP Free SAP S/4HANA Finance Courses', url: 'https://open.sap.com', type: 'Free Certification', isFree: true },
            { name: 'Naukri.com Senior Accountant Openings', url: 'https://www.naukri.com', type: 'Job Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'banking-officer',
    title: 'Probationary Banking Officer (IBPS / SBI PO)',
    description: 'Manages branch retail operations, retail and commercial credit appraisal, loan underwriting, customer deposit accounts, foreign exchange transactions, and regulatory compliance under Reserve Bank of India (RBI) norms across Indian public and private sector banks.',
    educationRequirements: 'Graduation in any discipline from a recognized university. Mandatory qualification of competitive national banking examinations: SBI PO, IBPS PO (for 11 Public Sector Banks), or RBI Grade B Officer.',
    educationPathways: [
      'Any Bachelor\'s Degree (B.Com/B.A./B.Sc/B.Tech) -> Clear IBPS PO / SBI PO national competitive examination',
      'Postgraduate Diploma in Banking & Finance (PGDBF) via sponsored tie-ups (e.g., Manipal Academy of Banking)',
      'RBI Grade B Officer Examination (direct recruitment into central banking regulator)'
    ],
    eligibilityRequirements: 'Graduation in any discipline with minimum 60% aggregate (for SBI/RBI) from a recognized university. Age between 20 to 30 years (with standard category relaxations).',
    certificationsAndExams: [
      'SBI PO (State Bank of India Probationary Officer Exam)',
      'IBPS PO (Institute of Banking Personnel Selection - CWE)',
      'JAIIB & CAIIB Certifications (Indian Institute of Banking and Finance - IIBF)'
    ],
    workEnvironment: 'Public sector bank branches (SBI, PNB, Bank of Baroda, Canara Bank), regional offices, currency chests, and corporate loan processing centers across India.',
    marketDemand: 'Very High',
    jobOutlook: 'Massive annual recruitment drives (10,000+ officer vacancies annually through IBPS and SBI); highly prestigious government/public sector career with guaranteed career advancement.',
    salaryRange: { min: 650000, max: 1600000, currency: 'INR', source: 'Indian Banks\' Association (IBA) 12th Bipartite Settlement Pay Scales, SBI PO Notification' },
    salarySource: 'Indian Banks\' Association (IBA) 12th Bipartite Settlement Pay Scales, SBI PO Notification',
    salaryByExperience: {
      entryLevel: { min: 650000, max: 950000, label: 'Probationary Officer / Scale I (0–2 yrs)' },
      earlyCareer: { min: 950000, max: 1400000, label: 'Assistant Manager / Branch Manager / Scale II (3–5 yrs)' },
      experienced: { min: 1400000, max: 2400000, label: 'Chief Manager / AGM / Scale IV-V (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Under the 12th Bipartite Wage Settlement (2024), starting gross salary for Scale-I PO is ~₹65,000–75,000/month plus leased accommodation (₹12,000–35,000/month depending on city), medical reimbursement, and fuel allowances.'
    },
    careerProgression: [
      'Probationary Officer (Scale I - Assistant Manager)',
      'Manager / Branch Head (Scale II)',
      'Senior Manager (Scale III)',
      'Chief Manager / Assistant General Manager (Scale IV & V)',
      'General Manager / Executive Director / Chairman & Managing Director (CMD)'
    ],
    employmentSectors: {
      government: 'Public Sector Commercial Banks (State Bank of India, Punjab National Bank, Bank of Baroda, Canara Bank, Union Bank of India), Reserve Bank of India (RBI), NABARD, EXIM Bank',
      privateSector: 'Top Private Sector Banks (HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank), Small Finance Banks, Payment Banks'
    },
    timelineOverview: {
      totalEstimatedDuration: '3.5–4.5 Years (3–4 Years Undergrad + 6–12 Months Competitive Exam Prep)',
      educationDuration: '3–4 Years (Any Bachelor\'s degree)',
      prepDuration: '6–12 Months focused preparation for Prelims, Mains, and Group Discussion/Interview',
      practicalTrainingDuration: '2 Years mandatory on-the-job probationary training across rural and urban branches',
      jobSearchDuration: 'Direct appointment upon clearing final combined IBPS/SBI merit list',
      overlapNotes: 'Competitive exam preparation can begin during the final year of graduation.',
      confidenceNote: 'Officers clearing JAIIB and CAIIB exams of IIBF during probation receive immediate additional salary increments.'
    },
    sources: [
      { title: 'Institute of Banking Personnel Selection (IBPS) Official Portal', url: 'https://www.ibps.in', sourceAuthority: 'IBPS India', verifiedDate: '2024-10-14' },
      { title: 'State Bank of India (SBI) Careers Notification', url: 'https://sbi.co.in/careers', sourceAuthority: 'SBI India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Probationary Banking Officer (PO) Career Roadmap',
      description: 'Public sector banking career: Prelims (Quant, Reasoning, English), Mains (Data Analysis, Banking Awareness), Interview/GD, 2-year probationary branch rotation, and IIBF JAIIB/CAIIB certifications.',
      totalEstimatedDuration: '4 Years',
      durationBreakdown: 'Undergraduate Degree: 3 Years | IBPS/SBI PO Competitive Preparation: 6–12 Months | Two-Year Probationary Branch Training: 24 Months | Scale-II Confirmation: Post-Probation',
      overlapNotes: 'Exam preparation runs in parallel with final-year undergraduate studies.',
      steps: [
        {
          stepNumber: 1,
          title: 'Prelims Competitive Preparation (Aptitude & Speed)',
          stageType: 'education',
          duration: '4–6 Months',
          description: 'Master speed calculation, quantitative aptitude (percentages, ratios, DI), logical reasoning (puzzles, seating arrangement, syllogisms), and English comprehension.',
          topics: ['Quantitative Aptitude (Data Interpretation, Arithmetic)', 'Reasoning Ability (Floor Puzzles, Circular Seating, Coding-Decoding)', 'English Language (Reading Comprehension, Error Spotting)', 'Speed Math (Vedic Maths, Square Roots, Approximation)'],
          skillsToAcquire: ['Solving 100 Questions in 60 Minutes', 'High-Speed Mental Math Calculation', 'Accuracy Maintenance under Negative Marking'],
          activities: ['Solve daily sectional mock tests under strict 20-minute sectional timers', 'Practice 20+ complex circular and parallel seating puzzle sets weekly'],
          completionCriteria: 'Consistently score above 70th percentile in national-level mock tests; clear SBI/IBPS PO Prelims cut-off.',
          dependencies: 'Graduation in any discipline',
          resources: [
            { name: 'IBPS Official Mock Test Portal', url: 'https://www.ibps.in', type: 'Official Portal', isFree: true },
            { name: 'Testbook / Oliveboard Banking Mock Platform', url: 'https://testbook.com', type: 'Practice Platform', isFree: false }
          ]
        },
        {
          stepNumber: 2,
          title: 'Mains Examination & General Banking Awareness',
          stageType: 'skill_acquisition',
          duration: '3–4 Months',
          description: 'Master advanced Data Analysis & Interpretation, critical reasoning, economic and banking awareness, financial current affairs, and English descriptive writing (essay and letter).',
          topics: ['High-Level Caselet Data Interpretation', 'Banking Awareness (Monetary Policy, Repo Rates, Priority Sector Lending)', 'RBI Guidelines, Financial Terms & Inflation Trends', 'Descriptive Letter and Essay Writing'],
          skillsToAcquire: ['Complex Multi-Tier Caselet Solving', 'Coherent Business Essay Writing (250 words)', 'Financial Current Affairs Retention'],
          activities: ['Write 2 timed descriptive essays weekly on Indian economic topics (e.g., UPI growth, digital currency)', 'Study daily banking current affairs and RBI monthly bulletins'],
          completionCriteria: 'Clear IBPS/SBI PO Mains examination cut-off and qualify for Interview/GD round.',
          dependencies: 'Passing Prelims Exam',
          resources: [
            { name: 'Reserve Bank of India (RBI) Monthly Bulletins', url: 'https://www.rbi.org.in', type: 'Government Publications', isFree: true },
            { name: 'Indian Banks\' Association (IBA) Industry Reports', url: 'https://www.iba.org.in', type: 'Industry Portal', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Group Discussion, Personal Interview & Selection',
          stageType: 'certification',
          duration: '1–2 Months',
          description: 'Undergo personality assessment, group discussions, group exercises, and personal interviews evaluated by a panel of senior General Managers and Chief General Managers.',
          topics: ['Branch Banking Scenarios & Dilemmas', 'Current Economic & Banking Debates', 'Personal Biodata & Academic Project Defense'],
          skillsToAcquire: ['Clear Verbal Communication in Hindi/English', 'Poise under Stress Interviewing', 'Constructive Group Discussion Participation'],
          activities: ['Participate in 5+ simulated mock interview panels with retired bank GMs', 'Present structured arguments in peer group discussion simulations'],
          completionCriteria: 'Final selection in the All-India merit list; issuance of appointment letter as Probationary Officer.',
          dependencies: 'Clearing Mains Examination',
          resources: [
            { name: 'SBI Careers Final Selection Guidance', url: 'https://sbi.co.in/careers', type: 'Official Portal', isFree: true },
            { name: 'IBPS Final Allotment Results Portal', url: 'https://www.ibps.in', type: 'Official Portal', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Probationary Training & IIBF Certifications (JAIIB/CAIIB)',
          stageType: 'practical_experience',
          duration: '2 Years (Probation)',
          description: 'Complete 2-year on-the-job probationary training across rural, semi-urban, and metro branches, master core banking software (Finacle / BaNCS), and clear JAIIB & CAIIB exams for early increments.',
          topics: ['Finacle Core Banking Solution (CBS) Operations', 'Retail Credit Appraisal & Loan Sanctions', 'Foreign Exchange (Forex) & Letter of Credit (LC)', 'IIBF JAIIB and CAIIB Modules'],
          skillsToAcquire: ['CIBIL Score Evaluation & Credit Risk Appraisal', 'Know Your Customer (KYC) & AML Verification', 'Branch Cash Management & Locker Operations'],
          activities: ['Process 100+ retail home loan and MSME credit applications', 'Pass JAIIB and CAIIB exams to earn 2 immediate salary increments during probation'],
          completionCriteria: 'Successful confirmation as Scale-I Assistant Manager / Branch Head; award of permanent officer rank.',
          dependencies: 'Selection as Probationary Officer',
          resources: [
            { name: 'Indian Institute of Banking and Finance (IIBF) JAIIB Portal', url: 'https://www.iibf.org.in', type: 'Certification Portal', isFree: true },
            { name: 'Finacle Core Banking Knowledge Base', url: 'https://www.edgeverve.com/finacle/', type: 'Platform', isFree: false }
          ]
        }
      ]
    }
  },
  {
    slug: 'actuary',
    title: 'Actuary (FIAI / IAI)',
    description: 'Calculates financial probabilities, assesses systemic risk, prices life and general insurance premiums, models catastrophic reinsurance claims, and models pension fund liabilities. Uses advanced statistical probability, stochastic modeling, and loss distributions.',
    educationRequirements: 'Fellowship / Associateship of the Institute of Actuaries of India (IAI) or Institute and Faculty of Actuaries (IFoA UK). Requires clearing 13 professional actuarial examinations across Core Principles, Core Practices, and Specialist Principles.',
    educationPathways: [
      'ACET (Actuarial Common Entrance Test) -> 13 Actuarial Papers while working as an Actuarial Analyst',
      'B.Sc / M.Sc in Mathematics, Statistics, or Actuarial Science (3 years) + clearing IAI papers',
      'Exemption pathway: Clearing IFoA (UK) papers with reciprocal recognition by IAI'
    ],
    eligibilityRequirements: '10+2 with Mathematics/Statistics. Clear ACET examination (or eligible for exemption with math degree). Mandatory Fellowship with IAI (FIAI) for statutory signing authority in insurance companies.',
    certificationsAndExams: [
      'IAI ACET (Actuarial Common Entrance Test)',
      'Core Principles: CS1 (Actuarial Statistics), CS2 (Risk Modeling), CM1 (Actuarial Mathematics), CM2 (Financial Economics), CB1, CB2',
      'Core Practices: CP1 (Actuarial Practice), CP2, CP3',
      'Specialist Principles (SP) & Specialist Advanced (SA) Papers'
    ],
    workEnvironment: 'Life insurance companies (LIC, HDFC Life, SBI Life), general insurance firms (ICICI Lombard, New India Assurance), actuarial consultancies (Milliman, Willis Towers Watson, Mercer), and reinsurance hubs in Mumbai, Gurugram, and Bengaluru.',
    marketDemand: 'Very High',
    jobOutlook: 'Extremely scarce specialized skill set in India (fewer than 600 fully qualified Fellow Actuaries in the entire country); mandated by IRDAI regulations for every registered insurance company.',
    salaryRange: { min: 700000, max: 3500000, currency: 'INR', source: 'Institute of Actuaries of India Salary Reports 2024, AmbitionBox Actuary' },
    salarySource: 'Institute of Actuaries of India Salary Reports 2024, AmbitionBox Actuary',
    salaryByExperience: {
      entryLevel: { min: 700000, max: 1200000, label: 'Actuarial Student / Analyst (0–2 yrs, 3–5 papers)' },
      earlyCareer: { min: 1200000, max: 2400000, label: 'Associate Actuary / Assistant Manager (3–5 yrs, 8–10 papers)' },
      experienced: { min: 2400000, max: 5500000, label: 'Fellow Actuary / Appointed Actuary (6–10+ yrs, Fully Qualified)' },
      payPeriod: 'Annual',
      salaryNote: 'Fully qualified Fellow Actuaries (FIAI) serving as statutory Appointed Actuaries under IRDAI regulations earn ₹60 Lakhs to ₹1.5+ Crores.'
    },
    careerProgression: [
      'Actuarial Analyst / Student Member',
      'Senior Actuarial Analyst',
      'Associate Actuary (AIAI)',
      'Fellow Actuary (FIAI) / Chief Pricing Actuary',
      'Appointed Actuary / Chief Risk Officer (CRO)'
    ],
    employmentSectors: {
      government: 'Life Insurance Corporation of India (LIC), General Insurance Corporation of India (GIC Re), Insurance Regulatory and Development Authority of India (IRDAI), Employees\' Provident Fund Organisation (EPFO)',
      privateSector: 'Life & Health Insurers (HDFC Life, SBI Life, Max Life), Global Actuarial Consultancies (Milliman, Willis Towers Watson, Aon), Reinsurance MNCs (Swiss Re, Munich Re)'
    },
    timelineOverview: {
      totalEstimatedDuration: '5–7 Years to full Fellowship (progressive salary increments with every paper cleared)',
      educationDuration: 'Self-study and workplace training alongside IAI exam diet',
      prepDuration: '150–200 study hours per actuarial examination paper (2 exams per diet, 2 diets per year)',
      practicalTrainingDuration: '3 Years qualified actuarial work experience under a Fellow Actuary for Fellowship',
      jobSearchDuration: 'Immediate employment after clearing 2–4 core papers',
      overlapNotes: 'Students work full-time as salaried actuarial analysts while companies sponsor exam fees and study leave.',
      confidenceNote: 'Companies offer ₹50,000 to ₹1,50,000 automatic salary increases for each paper passed.'
    },
    sources: [
      { title: 'Institute of Actuaries of India (IAI) Examination Curriculum', url: 'https://www.actuariesindia.org', sourceAuthority: 'Institute of Actuaries of India', verifiedDate: '2024-10-14' },
      { title: 'Insurance Regulatory and Development Authority of India (IRDAI) Actuarial Guidelines', url: 'https://irdai.gov.in', sourceAuthority: 'IRDAI', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Actuary (IAI Fellowship) Career Roadmap',
      description: 'Actuarial science route: ACET entrance, Core Principles (CS1, CS2, CM1, CM2, CB1, CB2), Core Practices (CP1, CP2, CP3), Specialist Principles, and IRDAI statutory Fellow status.',
      totalEstimatedDuration: '5–6 Years',
      durationBreakdown: 'ACET & First 3 Core Papers: 1 Year | Entry as Actuarial Analyst & Core Papers 4–7: 2 Years | Core Practices (CP1-CP3) & Associateship: 1.5 Years | Specialist Fellowship (FIAI): 1.5 Years',
      overlapNotes: 'Actuarial students work as full-time corporate analysts while studying for higher papers.',
      steps: [
        {
          stepNumber: 1,
          title: 'ACET Entrance & Core Statistics (CS1 & CM1)',
          stageType: 'education',
          duration: '1 Year',
          description: 'Clear the Actuarial Common Entrance Test (ACET) and the first foundational papers: CS1 (Actuarial Statistics) and CM1 (Actuarial Mathematics - Life Contingencies).',
          topics: ['Probability Distributions & Markov Chains', 'Time Value of Money & Cash Flow Discounting', 'Mortality Tables & Annuity Values', 'Assurance Contracts & Net Premium Reserves'],
          skillsToAcquire: ['R Programming for Statistical Modeling', 'Mortality Table Calculations in Excel', 'Survival Probability Computation'],
          activities: ['Compute net single premiums for whole-life and term assurance contracts in R', 'Calculate policy reserves using Prospective and Retrospective reserve formulas'],
          completionCriteria: 'Clear ACET and pass papers CS1 and CM1 in IAI examination diets.',
          dependencies: '10+2 with Mathematics or graduation in quantitative discipline',
          resources: [
            { name: 'IAI ACET Study Portal', url: 'https://www.actuariesindia.org/acet', type: 'Official Portal', isFree: true },
            { name: 'ActEd (Actuarial Education Company) Core Notes', url: 'https://www.acted.co.uk', type: 'Study Materials', isFree: false }
          ]
        },
        {
          stepNumber: 2,
          title: 'Core Risk Modeling, Economics & Actuarial Analyst Hiring',
          stageType: 'skill_acquisition',
          duration: '1.5 Years',
          description: 'Pass CS2 (Risk Modeling and Survival Analysis), CM2 (Financial Economics), CB1 (Business Finance), and CB2 (Business Economics); secure employment as Actuarial Analyst.',
          topics: ['Ruin Theory & Aggregate Claim Loss Distributions', 'Black-Scholes Option Pricing Formula', 'Stochastic Interest Rate Models', 'Capital Structure & Financial Instruments'],
          skillsToAcquire: ['Generalized Linear Models (GLM) for Insurance Pricing', 'Monte Carlo Stochastic Simulations', 'Prophet Actuarial Software Fundamentals'],
          activities: ['Build a stochastic loss distribution model in R to calculate Value at Risk (VaR)', 'Join life/health insurance company or actuarial consultancy as trainee analyst'],
          completionCriteria: 'Clear all 6 Core Principles (CS1, CS2, CM1, CM2, CB1, CB2); gainful employment in actuarial team.',
          dependencies: 'Passing CS1 and CM1',
          resources: [
            { name: 'Institute of Actuaries of India Past Examination Papers', url: 'https://www.actuariesindia.org', type: 'Official Repository', isFree: true },
            { name: 'R for Actuarial Science (CRAN)', url: 'https://cran.r-project.org', type: 'Open Source Software', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Core Practices (CP1, CP2, CP3) & Associateship (AIAI)',
          stageType: 'certification',
          duration: '1.5–2 Years',
          description: 'Master CP1 (Actuarial Practice - product design, pricing, reserving, asset-liability matching), CP2 (Modeling Practice), and CP3 (Communications Practice) to earn Associate Actuary status.',
          topics: ['Enterprise Risk Management (ERM) Framework', 'Asset-Liability Matching (ALM) in Insurance', 'Experience Analysis (Mortality / Persistency Studies)', 'Communicating Actuarial Advice to Board Members'],
          skillsToAcquire: ['End-to-End Actuarial Audit Modeling in Excel/Prophet', 'Drafting Non-Technical Actuarial Reports', 'Solvency II / Ind AS 117 Reserving Computations'],
          activities: ['Perform annual premium rate setting for a group health insurance product portfolio', 'Earn Associate Member (AIAI) designation from Institute of Actuaries of India'],
          completionCriteria: 'Pass CP1, CP2, and CP3; complete mandatory professional ethics seminar; designated as AIAI.',
          dependencies: 'Completion of Core Principles papers and 1+ year industry experience',
          resources: [
            { name: 'IAI Professional Guidance Notes (APNs)', url: 'https://www.actuariesindia.org', type: 'Official Regulations', isFree: true },
            { name: 'Milliman India Careers', url: 'https://www.milliman.com/en/careers', type: 'Company Portal', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Specialist Papers & Fellowship (FIAI)',
          stageType: 'practical_experience',
          duration: '1.5 Years',
          description: 'Pass two Specialist Principles (SP) papers (e.g., SP2 Life Insurance, SP4 Pensions) and one Specialist Advanced (SA) paper; attain full Fellowship (FIAI) with statutory signing authority.',
          topics: ['Advanced Life Product Reserving (Gross Premium Reserves)', 'Pensions & Employee Benefits Valuation (Ind AS 19 / IAS 19)', 'Statutory Capital Requirements (Available Solvency Margin - ASM)', 'IRDAI Appointed Actuary Regulations'],
          skillsToAcquire: ['Statutory Appointed Actuary Valuations', 'Reinsurance Treaty Negotiation', 'Executive Board Representation'],
          activities: ['Sign off or audit annual statutory solvency valuation reports submitted to IRDAI', 'Complete 3 years of verified actuarial experience under a Fellow mentor'],
          completionCriteria: 'Admitted as Fellow Member of the Institute of Actuaries of India (FIAI designation).',
          dependencies: 'Clearing all 13 papers and completing minimum 3 years actuarial work tenure',
          resources: [
            { name: 'IRDAI Regulations on Appointed Actuary', url: 'https://irdai.gov.in', type: 'Government Regulations', isFree: true },
            { name: 'HDFC Life Actuarial Careers', url: 'https://www.hdfclife.com', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'business-consultant',
    title: 'Management & Strategy Consultant',
    description: 'Advises corporate executives and boards on strategic growth, cost optimization, digital transformation, market entry, and operational turnaround. Employs structured problem solving (MECE frameworks), financial modeling, and executive stakeholder presentations.',
    educationRequirements: 'Bachelor\'s in Engineering, Commerce, or Economics + MBA from a top-tier business school (IIM Ahmedabad, Bangalore, Calcutta, ISB, XLRI). Demonstrable aptitude in case interview frameworks and quantitative business analytics.',
    educationPathways: [
      'Top Engineering/Commerce Undergrad -> 2-Year Full-Time MBA (IIMs/ISB/XLRI via CAT/GMAT) -> Campus Recruitment by MBB / Tier-2 Consultancies',
      'Direct Undergrad Analyst Hiring: Premier colleges (IITs, SRCC, St. Stephen\'s) into Junior Analyst roles',
      'Lateral Specialist Track: 5+ years domain leadership transitioning into boutique consulting practices'
    ],
    eligibilityRequirements: 'Graduation with top academic percentiles. CAT (Common Admission Test) percentile > 99% for top IIMs, or GMAT score > 720 for ISB. Strong analytical problem solving and case interview mastery.',
    certificationsAndExams: [
      'CAT (Common Admission Test) / GMAT (Graduate Management Admission Test)',
      'Certified Management Consultant (CMC - ICMCI)',
      'Lean Six Sigma Black Belt'
    ],
    workEnvironment: 'Global management consultancies (McKinsey & Company, Boston Consulting Group, Bain & Company - MBB), strategy arms (Strategy&, Oliver Wyman, Kearney), and Big 4 advisory in Mumbai, Delhi NCR, and Bengaluru.',
    marketDemand: 'High',
    jobOutlook: 'Steady hiring fueled by enterprise digital transformation, supply chain redesign, private equity commercial due diligence, and GCC expansion in India.',
    salaryRange: { min: 1200000, max: 4000000, currency: 'INR', source: 'IIM Placement Reports 2024, AmbitionBox Management Consultant Salary' },
    salarySource: 'IIM Placement Reports 2024, AmbitionBox Management Consultant Salary',
    salaryByExperience: {
      entryLevel: { min: 1200000, max: 2000000, label: 'Associate Consultant / Business Analyst (0–2 yrs)' },
      earlyCareer: { min: 2000000, max: 3500000, label: 'Consultant / Engagement Manager (3–5 yrs)' },
      experienced: { min: 3500000, max: 7500000, label: 'Associate Partner / Partner / Managing Director (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'MBB firms (McKinsey, BCG, Bain) offer starting packages of ₹30–38 LPA for fresh IIM/ISB MBA graduates. Senior partners earn ₹1.5 to ₹4+ Crores annually plus profit sharing.'
    },
    careerProgression: [
      'Business Analyst / Junior Associate',
      'Associate / Consultant',
      'Engagement Manager / Project Leader',
      'Associate Partner / Director',
      'Senior Partner / Managing Director'
    ],
    employmentSectors: {
      government: 'NITI Aayog (Young Professionals / Consultants), Ministry Advisory Panels, State Government Transformation Units, World Bank / ADB Public Sector Advisory',
      privateSector: 'Top Strategy Consultancies (McKinsey, BCG, Bain & Co.), Strategy Arms (Strategy&, Kearney, Oliver Wyman, Roland Berger), Big 4 Advisory (PwC, EY, Deloitte, KPMG)'
    },
    timelineOverview: {
      totalEstimatedDuration: '5–6 Years (3–4 Years Undergrad + 2 Years Top-Tier MBA)',
      educationDuration: '2 Years full-time MBA (IIMs/ISB)',
      prepDuration: '6–12 Months intensive CAT/GMAT coaching and Case Interview preparation',
      practicalTrainingDuration: '2 Months summer internship between 1st and 2nd year MBA (crucial for PPO conversions)',
      jobSearchDuration: 'Direct campus placement through premier business school recruitment',
      overlapNotes: 'Case interview preparation (profitability, market entry, M&A cases) runs parallel to MBA coursework.',
      confidenceNote: 'Summer internship PPOs account for over 50–60% of full-time consulting hiring at top IIMs.'
    },
    sources: [
      { title: 'IIM Ahmedabad Official Final Placement Report', url: 'https://www.iima.ac.in', sourceAuthority: 'IIM Ahmedabad', verifiedDate: '2024-10-14' },
      { title: 'Indian School of Business (ISB) Placement Trends', url: 'https://www.isb.edu', sourceAuthority: 'ISB Hyderabad', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Management & Strategy Consultant Career Roadmap',
      description: 'Consulting career pathway: MECE problem-solving frameworks, CAT/GMAT entrance, top-tier business school MBA, case interviews, summer internship PPO, and client engagement management.',
      totalEstimatedDuration: '5.5–6 Years',
      durationBreakdown: 'Undergraduate Degree: 3–4 Years | CAT/GMAT Preparation: 1 Year | Premier MBA Degree: 2 Years | Summer Internship & Case Placement: Concurrent',
      overlapNotes: 'Case prep groups (cracking 50+ business cases) operate during the 1st year of MBA.',
      steps: [
        {
          stepNumber: 1,
          title: 'Undergraduate Foundations & Analytical Profile Building',
          stageType: 'education',
          duration: '3–4 Years',
          description: 'Build a stellar academic profile (CGPA > 8.0), demonstrate campus leadership (student council, club head), and participate in national business plan/case competitions.',
          topics: ['Micro & Macroeconomics Principles', 'Quantitative Business Statistics', 'Corporate Finance Fundamentals', 'Public Speaking & Debate'],
          skillsToAcquire: ['Data Presentation & Storytelling', 'Statistical Hypothesis Testing', 'Leadership & Team Conflict Management'],
          activities: ['Win top-3 rank in a national inter-college case study competition', 'Publish research paper or lead a student consultancy body'],
          completionCriteria: 'Graduate with top academic honors and strong extracurricular credentials.',
          dependencies: '10+2 from recognized board',
          resources: [
            { name: 'Case in Point by Marc Cosentino (Frameworks Reference)', url: 'https://www.cqinteractive.com', type: 'Book Reference', isFree: false },
            { name: 'Harvard Business Review (HBR) Case Studies', url: 'https://hbr.org', type: 'Case Studies', isFree: false }
          ]
        },
        {
          stepNumber: 2,
          title: 'CAT / GMAT Preparation & Top-Tier MBA Admissions',
          stageType: 'certification',
          duration: '8–12 Months',
          description: 'Crack CAT (Common Admission Test) with 99+ percentile or GMAT with 720+ score to secure admission into premier business schools (IIM A/B/C, ISB, XLRI).',
          topics: ['Verbal Ability and Reading Comprehension (VARC)', 'Data Interpretation and Logical Reasoning (DILR)', 'Quantitative Ability (QA)', 'Written Ability Test (WAT) & Personal Interview Preparation'],
          skillsToAcquire: ['Rapid Critical Reading', 'Complex Unstructured DILR Problem Solving', 'Extempore & Structured Interview Articulation'],
          activities: ['Solve 40+ full-length CAT mock tests and analyze error logs', 'Clear personal interview rounds with faculty and alumni panels'],
          completionCriteria: 'Receive admission offer letter from premier business school (IIMs/ISB).',
          dependencies: 'Bachelor\'s Degree with minimum 50-60%',
          resources: [
            { name: 'IIM CAT Official Examination Portal', url: 'https://iimcat.ac.in', type: 'Official Portal', isFree: true },
            { name: 'GMAT Official Starter Kit (mba.com)', url: 'https://www.mba.com', type: 'Official Practice', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'MBA Summer Internship & Case Interview Mastery',
          stageType: 'practical_experience',
          duration: 'Year 1 MBA + 2 Months Internship',
          description: 'Solve 60+ live business cases in peer mock groups covering profitability, market entry, pricing, and M&A; secure summer internship at an MBB or tier-1 consulting firm.',
          topics: ['MECE (Mutually Exclusive, Collectively Exhaustive) Principle', 'Hypothesis-Driven Problem Solving (Issue Trees)', 'Market Sizing & Guesstimate Estimation', 'Executive Presentation Deck Creation (Pyramid Principle)'],
          skillsToAcquire: ['Structuring Ambiguous Business Dilemmas', 'Executive PowerPoint Slide Design', 'Quick Mental Math Benchmarks'],
          activities: ['Complete 8-10 week summer internship at consulting firm solving active client challenge', 'Convert summer internship into a Pre-Placement Offer (PPO)'],
          completionCriteria: 'Receive Pre-Placement Offer (PPO) or secure final placement offer from management consulting firm.',
          dependencies: 'Enrolled in 1st year of MBA',
          resources: [
            { name: 'McKinsey Case Interview Preparation Guide', url: 'https://www.mckinsey.com/careers/interviewing', type: 'Company Resource', isFree: true },
            { name: 'Bain & Company Case Interview Tips', url: 'https://www.bain.com/careers/interview-prep/', type: 'Company Resource', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Full-Time Consultant Appointment & Engagement Management',
          stageType: 'job_search',
          duration: 'Post-MBA Progression',
          description: 'Join firm as Associate / Consultant; lead workstreams, conduct primary stakeholder interviews, build financial models, and deliver board-level presentations.',
          topics: ['Change Management Implementation', 'Client C-Suite Stakeholder Management', 'Project Workstream Tracking and Delivery'],
          skillsToAcquire: ['High-Stakes Client Persuasion', 'Leading Junior Analyst Teams', 'Synthesizing 100+ Data Sources into 3 Core Insights'],
          activities: ['Deliver final strategy transformation deliverable to client Board of Directors / CEO', 'Track workstream milestones across 3-6 month client transformation engagement'],
          completionCriteria: 'Promotion to Engagement Manager / Project Leader within 2–3 years.',
          dependencies: 'Completion of MBA and recruitment offer',
          resources: [
            { name: 'Boston Consulting Group (BCG) India Careers', url: 'https://www.bcg.com/en-in/careers', type: 'Company Portal', isFree: true },
            { name: 'Kearney Careers India', url: 'https://www.kearney.com/careers', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'human-resources-specialist',
    title: 'Human Resources (HR) Specialist / HRBP',
    description: 'Directs talent acquisition, employee relations, performance management (OKRs/KPIs), compensation & benefits (Total Rewards), and HR compliance under Indian labour codes. Partners with business leadership as Human Resources Business Partner (HRBP).',
    educationRequirements: 'B.A./B.B.A./B.Com + Master\'s degree in Human Resource Management (MBA HR / M.A. in HRM & LR from premier institutes: XLRI Jamshedpur, TISS Mumbai, SCMHRD, MDI Gurgaon). Knowledge of Indian Labour Codes.',
    educationPathways: [
      'Bachelor\'s Degree -> MBA in Human Resource Management (2 years via CAT / XAT from XLRI / TISS)',
      'SHRM Certified Professional (SHRM-CP) or HRCI (PHR/SPHR) global certifications',
      'Postgraduate Diploma in Industrial Relations and Personnel Management'
    ],
    eligibilityRequirements: 'Graduation in any discipline with minimum 50% aggregate. Entrance exams: XAT (for XLRI), CAT (for IIMs/MDI), or CUET PG (for TISS).',
    certificationsAndExams: [
      'SHRM-CP (Society for Human Resource Management Certified Professional)',
      'PHR / SPHRi (Human Resource Certification Institute)',
      'Certified Compensation & Benefits Specialist / POSH Internal Committee Trainer'
    ],
    workEnvironment: 'Corporate headquarters, IT tech parks (Bengaluru, Hyderabad, Pune, Gurugram), multinational GCCs, and manufacturing plant HR divisions.',
    marketDemand: 'High',
    jobOutlook: 'Strong demand driven by talent retention priorities in tech and GCCs, adoption of modern HR tech platforms (Darwinbox, Workday), and implementation of the 4 New Labour Codes in India.',
    salaryRange: { min: 450000, max: 1800000, currency: 'INR', source: 'AmbitionBox HR Specialist Salary 2024, XLRI Placement Reports' },
    salarySource: 'AmbitionBox HR Specialist Salary 2024, XLRI Placement Reports',
    salaryByExperience: {
      entryLevel: { min: 450000, max: 800000, label: 'HR Executive / Talent Acquisition Associate (0–2 yrs)' },
      earlyCareer: { min: 800000, max: 1500000, label: 'HR Business Partner (HRBP) / Assistant Manager (3–5 yrs)' },
      experienced: { min: 1500000, max: 2800000, label: 'Senior HRBP / Head of Total Rewards / HR Director (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Premier HR program graduates (XLRI, TISS Mumbai) secure campus starting packages of ₹18–28 LPA. Chief Human Resources Officers (CHRO) in large enterprises earn ₹50 Lakhs to ₹1.5+ Crores.'
    },
    careerProgression: [
      'HR Associate / Recruiter',
      'HR Generalist / Assistant Manager HR',
      'Human Resources Business Partner (HRBP) / Talent Lead',
      'Head of Human Resources / VP People & Culture',
      'Chief Human Resources Officer (CHRO)'
    ],
    employmentSectors: {
      government: 'Public Sector Undertakings (ONGC, IOCL, BHEL HR Officers via UGC NET / GATE), Steel Authority of India (SAIL), Nationalized Banks (IBPS HR Specialist Officer)',
      privateSector: 'Tech & GCCs (Google, Microsoft, Amazon, Infosys, TCS), Banking & Financial Services (HDFC, ICICI), Manufacturing & FMCG (HUL, ITC, Tata Steel)'
    },
    timelineOverview: {
      totalEstimatedDuration: '5 Years (3 Years Undergrad + 2 Years MBA in HR)',
      educationDuration: '2 Years full-time MBA in HR (XLRI / TISS)',
      prepDuration: '6–12 Months preparation for XAT / CAT entrance tests',
      practicalTrainingDuration: '2 Months mandatory corporate summer internship in talent or organizational development',
      jobSearchDuration: 'Direct campus placement in top corporates',
      overlapNotes: 'Campus recruitment occurs during the 4th semester of the MBA program.',
      confidenceNote: 'Knowledge of the 4 Indian Labour Codes (Wages, Industrial Relations, Social Security, Occupational Safety) is essential for corporate compliance.'
    },
    sources: [
      { title: 'XLRI Jamshedpur HRM Placement Reports', url: 'https://www.xlri.ac.in', sourceAuthority: 'XLRI Jamshedpur', verifiedDate: '2024-10-14' },
      { title: 'Ministry of Labour & Employment New Labour Codes', url: 'https://labour.gov.in', sourceAuthority: 'Ministry of Labour India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Human Resources (HR) Specialist Career Roadmap',
      description: 'People leadership pathway: talent acquisition, compensation & benefits, organizational development, labour law compliance (POSH, 4 Labour Codes), and HRBP partnering.',
      totalEstimatedDuration: '5 Years',
      durationBreakdown: 'Undergraduate Degree: 3 Years | Entrance & MBA in HRM: 2 Years | HRBP Role & SHRM-CP: Post-Graduation',
      overlapNotes: 'Summer internships between MBA Year 1 and Year 2 frequently convert into full-time PPOs.',
      steps: [
        {
          stepNumber: 1,
          title: 'Undergraduate Degree & Organizational Psychology Foundations',
          stageType: 'education',
          duration: '3 Years',
          description: 'Complete bachelor\'s degree in BBA, Commerce, Psychology, or Engineering; develop strong interpersonal communication and business administration fundamentals.',
          topics: ['Organizational Behavior Basics', 'Business Communication Dynamics', 'Labour Economics & Sociology of Work'],
          skillsToAcquire: ['Active Listening & Empathy', 'Structured Written Communication', 'Conflict Resolution Principles'],
          activities: ['Lead university placement cell or student human relations initiatives', 'Maintain academic eligibility (> 50-60%) for MBA entrance tests'],
          completionCriteria: 'Obtain undergraduate degree with qualifying percentiles.',
          dependencies: '10+2 from recognized board',
          resources: [
            { name: 'NPTEL Principles of Human Resource Management (IIT Kharagpur)', url: 'https://nptel.ac.in', type: 'Course', isFree: true },
            { name: 'Society for Human Resource Management (SHRM) Resources', url: 'https://www.shrm.org', type: 'Professional Society', isFree: false }
          ]
        },
        {
          stepNumber: 2,
          title: 'XAT / CAT Admissions & Specialized MBA in HRM',
          stageType: 'education',
          duration: '2 Years',
          description: 'Clear XAT (for XLRI) or CAT and complete 2-year specialized Master\'s in Human Resource Management covering Talent Acquisition, Performance Management, and Labour Law.',
          topics: ['Talent Management & Competency Mapping', 'Total Rewards & Compensation Structuring', 'Performance Management Systems (OKRs vs Balanced Scorecard)', 'Indian Labour Legislation & The 4 Labour Codes'],
          skillsToAcquire: ['Designing Compensation CTC Breakups', 'Drafting POSH Internal Committee Policies', 'HR Analytics (Attrition, eNPS, Cost per Hire) in Excel/Tableau'],
          activities: ['Complete 8-week corporate summer internship in Talent Acquisition or HR Operations', 'Design an objective employee performance appraisal matrix for a case business'],
          completionCriteria: 'Award of MBA in Human Resource Management from recognized business school.',
          dependencies: 'Clearing XAT / CAT / TISS-NET with undergraduate degree',
          resources: [
            { name: 'XAT Official Examination Portal', url: 'https://xatonline.in', type: 'Official Portal', isFree: true },
            { name: 'Tata Institute of Social Sciences (TISS) HRM Programs', url: 'https://www.tiss.edu', type: 'Academic Institution', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'HR Tech Systems (Darwinbox / Workday) & Compliance',
          stageType: 'skill_acquisition',
          duration: '6 Months',
          description: 'Master enterprise Human Resource Management Systems (HRMS - Darwinbox, Workday, SAP SuccessFactors), payroll compliance, and POSH Act 2013 protocols.',
          topics: ['HRMS Workday / Darwinbox Module Architecture', 'POSH Act 2013 Inquiry Procedures & Redressal', 'Gratuity, EPF, and ESI Contribution Calculations', 'Employee Lifecycle Journey Mapping'],
          skillsToAcquire: ['HRIS Database Configuration', 'Conducting POSH Investigations', 'Payroll Reconciliations'],
          activities: ['Configure an employee onboarding and appraisal cycle on a cloud HRMS platform', 'Conduct simulated POSH committee hearing adhering to natural justice rules'],
          completionCriteria: 'Certification in HR Tech platform or SHRM-CP credential.',
          dependencies: 'MBA in HR or active HR employment',
          resources: [
            { name: 'Darwinbox Academy & Knowledge Base', url: 'https://darwinbox.com', type: 'Platform Learning', isFree: true },
            { name: 'Ministry of Women & Child Development POSH Handbook', url: 'https://wcd.nic.in', type: 'Government Regulations', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Human Resources Business Partner (HRBP) Leadership',
          stageType: 'practical_experience',
          duration: '1–2 Years',
          description: 'Act as strategic HRBP aligned with business leadership (engineering or sales units); manage talent reviews, employee retention, leadership succession, and organizational restructuring.',
          topics: ['9-Box Talent Grid Succession Planning', 'Employee Engagement & Culture Diagnostics', 'Leadership Coaching & Executive Advisory'],
          skillsToAcquire: ['Executive Stakeholder Alignment', 'Root Cause Attrition Diagnostics', 'Workforce Capability Planning'],
          activities: ['Implement retention intervention reducing annual team attrition by 5+ percentage points', 'Facilitate quarterly talent review sessions with Vice Presidents and Department Heads'],
          completionCriteria: 'Promotion or direct appointment to Senior HRBP / Lead People Partner.',
          dependencies: '2+ years experience in corporate HR roles',
          resources: [
            { name: 'SHRM India Conferences and Certifications', url: 'https://www.shrm.org/in', type: 'Professional Society', isFree: false },
            { name: 'Naukri.com HRBP Openings', url: 'https://www.naukri.com', type: 'Job Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'operations-manager',
    title: 'Operations Manager',
    description: 'Plans, directs, and coordinates operational processes to maximize organizational efficiency, reduce unit cycle times, ensure quality assurance, and optimize resource allocation across manufacturing plants, e-commerce fulfillment centers, and corporate service delivery.',
    educationRequirements: 'B.Tech/B.E. or BBA/B.Com + MBA in Operations Management / Supply Chain from a recognized institution. Certifications in Lean Six Sigma (Green/Black Belt) and Project Management (PMP).',
    educationPathways: [
      'B.Tech (any discipline) + MBA in Operations Management (2 years via CAT/XAT)',
      'Undergraduate in Commerce/Management -> Operations Trainee -> Operations Manager',
      'Lean Six Sigma Black Belt + Certified Supply Chain Professional (CSCP)'
    ],
    eligibilityRequirements: 'Bachelor\'s degree in Engineering, Business, or Science. Demonstrable proficiency in operational capacity planning, process flow optimization, and cost-benefit analysis.',
    certificationsAndExams: [
      'Lean Six Sigma Green Belt / Black Belt (ASQ / IASSC)',
      'APICS Certified in Planning and Inventory Management (CPIM)',
      'Project Management Professional (PMP - PMI)'
    ],
    workEnvironment: 'E-commerce fulfillment centers (Amazon, Flipkart), manufacturing plants (automotive, electronics), logistics hubs, and IT service delivery centers in major industrial corridors.',
    marketDemand: 'High',
    jobOutlook: 'Rapid expansion catalyzed by India\'s booming e-commerce, quick-commerce fulfillment networks (Blinkit, Zepto, Swiggy Instamart), and manufacturing expansion under PLI schemes.',
    salaryRange: { min: 600000, max: 2000000, currency: 'INR', source: 'AmbitionBox Operations Manager Salary 2024, Glassdoor India' },
    salarySource: 'AmbitionBox Operations Manager Salary 2024, Glassdoor India',
    salaryByExperience: {
      entryLevel: { min: 600000, max: 950000, label: 'Operations Executive / Assistant Manager (0–2 yrs)' },
      earlyCareer: { min: 950000, max: 1600000, label: 'Operations Manager / Plant Operations Lead (3–5 yrs)' },
      experienced: { min: 1600000, max: 2800000, label: 'General Manager of Operations / VP Operations (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Operations Managers in top quick-commerce and e-commerce giants (Amazon, Flipkart) managing tier-1 fulfillment centers earn ₹18–30+ LPA including stock grants.'
    },
    careerProgression: [
      'Operations Analyst / Area Manager Trainee',
      'Area Operations Manager (Warehouse / Manufacturing Line)',
      'Senior Operations Manager / Fulfillment Center Lead',
      'Director of Operations / General Manager',
      'Chief Operating Officer (COO)'
    ],
    employmentSectors: {
      government: 'Indian Railways Operations & Traffic Service (IRTS via UPSC CSE), Steel Authority of India (SAIL), National Highways Authority of India (NHAI), Central Warehousing Corporation (CWC)',
      privateSector: 'E-Commerce Giants (Amazon, Flipkart), Quick-Commerce Fulfillment (Zepto, Blinkit), Manufacturing OEMs (Tata Motors, Mahindra, Foxconn India), Third-Party Logistics (Delhivery)'
    },
    timelineOverview: {
      totalEstimatedDuration: '5–6 Years (4 Years B.Tech + 2 Years MBA in Operations)',
      educationDuration: '2 Years (MBA in Operations)',
      prepDuration: '6 Months CAT/XAT entrance preparation',
      practicalTrainingDuration: '1–2 Years as Area Manager managing frontline shift workforce',
      jobSearchDuration: 'Immediate placement via campus recruitment or industrial referrals',
      overlapNotes: 'Lean Six Sigma projects are implemented during industrial operations tenures.',
      confidenceNote: 'Managing large frontline hourly workforces and meeting strict Service Level Agreements (SLAs) is a daily operational reality.'
    },
    sources: [
      { title: 'American Society for Quality (ASQ) Lean Six Sigma Standards', url: 'https://asq.org', sourceAuthority: 'ASQ', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Operations Manager Salary in India', url: 'https://www.ambitionbox.com/salaries/operations-manager-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Operations Manager Career Roadmap',
      description: 'Operations management pathway: process mapping, Lean Six Sigma methodologies, inventory control (EOQ, JIT), warehouse management systems (WMS), and cross-functional operational leadership.',
      totalEstimatedDuration: '5 Years',
      durationBreakdown: 'Engineering / Business Degree: 4 Years | MBA in Operations / Supply Chain: 2 Years | Area Operations Leadership: Post-MBA',
      overlapNotes: 'Six Sigma projects and continuous improvement events take place during factory/warehouse shifts.',
      steps: [
        {
          stepNumber: 1,
          title: 'Undergraduate Foundations in Engineering or Business',
          stageType: 'education',
          duration: '3–4 Years',
          description: 'Build foundational capabilities in quantitative analysis, industrial processes, mechanical/systems engineering, or business administration.',
          topics: ['Engineering Mechanics / Business Management', 'Statistical Quality Control Basics', 'Supply Chain Fundamentals'],
          skillsToAcquire: ['Data Analysis in Excel', 'Process Flowcharting', 'Quantitative Problem Solving'],
          activities: ['Undertake factory shop-floor visits or supply chain internships', 'Maintain CGPA > 7.0 for MBA entrance eligibility'],
          completionCriteria: 'Obtain undergraduate degree from a recognized institution.',
          dependencies: '10+2 from recognized board',
          resources: [
            { name: 'NPTEL Operations Management (IIT Roorkee)', url: 'https://nptel.ac.in', type: 'Course', isFree: true },
            { name: 'MIT OpenCourseWare: Operations Management', url: 'https://ocw.mit.edu', type: 'Course', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'MBA in Operations / Supply Chain Management',
          stageType: 'education',
          duration: '2 Years',
          description: 'Master advanced operations research, linear programming, inventory management (ABC, VED, EOQ models), facility layout planning, and logistics network optimization.',
          topics: ['Linear Programming & Simplex Algorithm', 'Economic Order Quantity (EOQ) & Safety Stock Calculations', 'Total Quality Management (TQM) & Kaizen Principles', 'Theory of Constraints (TOC) & Bottleneck Management'],
          skillsToAcquire: ['Optimization Modeling in Solver/Python', 'Warehouse Layout Design', 'Demand Forecasting Methodologies (ARIMA, Exponential Smoothing)'],
          activities: ['Complete 2-month summer internship optimizing throughput in a distribution hub or manufacturing plant', 'Design an optimized facility layout eliminating unnecessary material handling motion'],
          completionCriteria: 'Graduate with MBA in Operations / Supply Chain Management.',
          dependencies: 'Bachelor\'s Degree and qualifying entrance exam (CAT/XAT/GMAT)',
          resources: [
            { name: 'Production and Operations Management by Chase & Jacobs', url: 'https://www.mheducation.com', type: 'Textbook Reference', isFree: false },
            { name: 'APICS CPIM Study Information', url: 'https://www.ascm.org', type: 'Professional Society', isFree: false }
          ]
        },
        {
          stepNumber: 3,
          title: 'Lean Six Sigma (Green/Black Belt) & Process Optimization',
          stageType: 'certification',
          duration: '3–6 Months',
          description: 'Implement DMAIC methodology (Define, Measure, Analyze, Improve, Control), root cause analysis (Ishikawa fishbone, 5 Whys), and statistical process control (SPC) charts.',
          topics: ['DMAIC Project Execution Framework', 'Statistical Process Control (X-bar and R Charts, Cp/Cpk)', 'Value Stream Mapping (VSM) Current vs Future State', '5S Workplace Organization & Poka-Yoke Mistake Proofing'],
          skillsToAcquire: ['Value Stream Map Drafting', 'Process Capability Calculation (Cpk > 1.33)', 'Minitab Statistical Analysis'],
          activities: ['Execute a real-world Lean Six Sigma project reducing process defect rates by > 30%', 'Lead a 5S visual workplace audit on an active operational fulfillment floor'],
          completionCriteria: 'Earn certified Lean Six Sigma Green or Black Belt credential.',
          dependencies: 'Operations work experience or MBA coursework',
          resources: [
            { name: 'IASSC Lean Six Sigma Green Belt Syllabus', url: 'https://iassc.org', type: 'Certification Standard', isFree: true },
            { name: 'Minitab Statistical Software Tutorials', url: 'https://www.minitab.com', type: 'Software Platform', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Operations Area Management & Scaling Leadership',
          stageType: 'practical_experience',
          duration: '1–2 Years',
          description: 'Lead 50+ frontline shift personnel as Area Operations Manager, monitor real-time SLA dashboards, manage operating budgets (OPEX), and prevent supply chain bottlenecks.',
          topics: ['Labor Shift Rostering & Productivity Tracking (UPH - Units Per Hour)', 'Health, Safety & Environment (HSE) Compliance', 'Incident Root Cause Investigation & CAPA'],
          skillsToAcquire: ['Frontline Labor Motivation & Dispute Resolution', 'Real-time SLA Exception Handling', 'Warehouse Management System (WMS - Manhattan/SAP) Administration'],
          activities: ['Manage a 24x7 fulfillment shift processing 20,000+ daily orders with > 99.5% on-time SLA', 'Reduce packaging material waste by 15% through standardized carton dimensioning'],
          completionCriteria: 'Promotion to Senior Operations Manager or Fulfillment Center Head.',
          dependencies: 'MBA in Operations or equivalent supervisory tenure',
          resources: [
            { name: 'Amazon Operations Careers India', url: 'https://www.amazon.jobs', type: 'Company Portal', isFree: true },
            { name: 'Delhivery Operations Careers', url: 'https://www.delhivery.com/careers/', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'project-manager',
    title: 'Project Manager (PMP / Agile Scrum)',
    description: 'Leads project initiation, planning, execution, monitoring, and closing to deliver technical and business deliverables within scope, schedule, and budget constraints. Applies Agile/Scrum sprints, Kanban boards, and waterfall project governance.',
    educationRequirements: 'B.Tech/B.E., BCA/MCA, or BBA/MBA + PMP (Project Management Professional from PMI) or Certified ScrumMaster (CSM). Proven experience managing cross-functional technical teams.',
    educationPathways: [
      'B.Tech / MCA -> Software Engineer -> Technical Project Manager -> Senior PM',
      'Any Bachelor\'s Degree + 36 Months project leadership experience + PMP Certification (PMI)',
      'Scrum Alliance Certified ScrumMaster (CSM) / Agile Certified Practitioner (PMI-ACP)'
    ],
    eligibilityRequirements: 'Bachelor\'s degree with minimum 36 months of documented project management experience for PMP eligibility (or 60 months without degree). 35 contact hours of project management education.',
    certificationsAndExams: [
      'PMP (Project Management Professional - PMI)',
      'CSM (Certified ScrumMaster - Scrum Alliance)',
      'PMI-ACP (Agile Certified Practitioner) / PRINCE2 Practitioner'
    ],
    workEnvironment: 'IT tech companies, Global Capability Centers (GCCs), engineering consultancies, infrastructure mega-projects, and fintech startups across Bengaluru, Hyderabad, Pune, and NCR.',
    marketDemand: 'Very High',
    jobOutlook: 'Universal demand across IT services, product development, infrastructure, and enterprise digital transformations; PMP is one of India\'s most valued credentials.',
    salaryRange: { min: 900000, max: 2600000, currency: 'INR', source: 'Project Management Institute (PMI) Earning Power Salary Survey 2024, AmbitionBox PM' },
    salarySource: 'Project Management Institute (PMI) Earning Power Salary Survey 2024, AmbitionBox PM',
    salaryByExperience: {
      entryLevel: { min: 900000, max: 1400000, label: 'Assistant Project Manager / Scrum Master (0–2 yrs in role)' },
      earlyCareer: { min: 1400000, max: 2200000, label: 'Project Manager (PMP Certified) (3–5 yrs)' },
      experienced: { min: 2200000, max: 3800000, label: 'Senior Project Manager / Program Manager (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'PMI Salary Survey reports that PMP-certified project managers in India earn a 22% higher median salary compared to non-certified peers; Director of Programs earn ₹40–60+ LPA.'
    },
    careerProgression: [
      'Project Coordinator / Associate Project Manager',
      'Scrum Master / Agile Project Manager',
      'Senior Project Manager (PMP)',
      'Program Manager / Delivery Manager',
      'Portfolio Director / VP Project Management Office (PMO)'
    ],
    employmentSectors: {
      government: 'Smart Cities Mission Project Management Units (PMUs), National Highways Authority of India (NHAI), Rail Vikas Nigam Limited (RVNL), Defense R&D Project Directorates',
      privateSector: 'Global IT Services (TCS, Infosys, Wipro, Accenture), GCCs (Target, Walmart, J.P. Morgan), Product Tech Startups, Heavy Infrastructure (L&T, Tata Projects)'
    },
    timelineOverview: {
      totalEstimatedDuration: '5–8 Years (Undergraduate degree + 3 Years mandatory project experience for PMP)',
      educationDuration: '4 Years (B.Tech) or 3 Years (BCA/BBA)',
      prepDuration: '3–6 Months dedicated PMP exam preparation (PMBOK Guide 7th Edition)',
      practicalTrainingDuration: '36 Months documented project leadership required before taking the PMP examination',
      jobSearchDuration: '1–2 Months lateral hiring for certified project managers',
      overlapNotes: 'PMP 35 contact hours training is taken while working full-time in project delivery.',
      confidenceNote: 'Holding both PMP (for governance) and CSM (for Agile execution) opens doors to virtually every IT and corporate project office in India.'
    },
    sources: [
      { title: 'Project Management Institute (PMI) PMP Handbook', url: 'https://www.pmi.org/certifications/project-management-pmp', sourceAuthority: 'PMI Global', verifiedDate: '2024-10-14' },
      { title: 'Scrum Alliance Certified ScrumMaster Guidelines', url: 'https://www.scrumalliance.org', sourceAuthority: 'Scrum Alliance', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Project Manager (PMP Track) Career Roadmap',
      description: 'Project management excellence route: Agile/Scrum ceremonies, Jira/Confluence project tracking, PMBOK 7th edition 8 performance domains, and PMP certification clearance.',
      totalEstimatedDuration: '4–5 Years (post-graduation)',
      durationBreakdown: 'Technical / Core Delivery Experience: 3 Years | Scrum Master (CSM) Certification: 3 Months | PMP Preparation & Clearance: 6 Months | Program Management Advancement: Post-PMP',
      overlapNotes: 'PMP preparation occurs while accumulating the mandatory 36 months of professional project leadership experience.',
      steps: [
        {
          stepNumber: 1,
          title: 'Technical Delivery & Agile Scrum Master Foundations',
          stageType: 'education',
          duration: '1–2 Years',
          description: 'Work as software engineer, business analyst, or project coordinator; master Scrum roles, sprint planning, daily standups, sprint reviews, and retrospectives.',
          topics: ['Scrum Framework (Product Owner, Scrum Master, Developers)', 'Sprint Backlog & Story Point Estimation (Fibonacci / Planning Poker)', 'Jira Sprint Board & Velocity Burndown Charts', 'Writing Clear User Stories with Acceptance Criteria'],
          skillsToAcquire: ['Jira Software Administration', 'Facilitating Scrum Ceremonies', 'Removing Team Impediments'],
          activities: ['Facilitate 20+ bi-weekly sprint planning and retrospective sessions in Jira', 'Track sprint velocity and burn-down trends across 6 consecutive release sprints'],
          completionCriteria: 'Earn Certified ScrumMaster (CSM) or Professional Scrum Master (PSM I) credential.',
          dependencies: 'Undergraduate degree and employment in a delivery team',
          resources: [
            { name: 'Scrum Guide by Ken Schwaber and Jeff Sutherland', url: 'https://scrumguides.org', type: 'Official Standard', isFree: true },
            { name: 'Atlassian Jira Agile Tutorials', url: 'https://www.atlassian.com/agile', type: 'Platform Learning', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Project Management Body of Knowledge (PMBOK) & Risk Management',
          stageType: 'skill_acquisition',
          duration: '1–2 Years',
          description: 'Lead workstreams or project modules; master PMBOK 7th Edition performance domains (Stakeholders, Team, Development Approach, Planning, Project Work, Delivery, Measurement, Uncertainty).',
          topics: ['Work Breakdown Structure (WBS) Creation', 'Critical Path Method (CPM) Schedule Calculation', 'Risk Register & Quantitative Risk Analysis (Monte Carlo)', 'Earned Value Management (EVM - CPI, SPI, EAC)'],
          skillsToAcquire: ['Earned Value Calculations (Cost & Schedule Variance)', 'Comprehensive Risk Mitigation Planning', 'Resource Leveling in MS Project'],
          activities: ['Draft a complete Project Charter and Work Breakdown Structure for a $100K+ enterprise project', 'Calculate CPI and SPI metrics to forecast project completion cost and schedule'],
          completionCriteria: 'Accumulate 36 months of documented project management experience verifying PMI requirements.',
          dependencies: 'Degree and minimum 2 years working on structured projects',
          resources: [
            { name: 'PMI PMBOK Guide 7th Edition', url: 'https://www.pmi.org', type: 'Official Standard', isFree: false },
            { name: 'NPTEL Project Management (IIT Roorkee)', url: 'https://nptel.ac.in', type: 'Course', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: '35 Contact Hours Training & PMP Certification Clearance',
          stageType: 'certification',
          duration: '3–6 Months',
          description: 'Complete mandatory 35 contact hours of project management education, apply for PMI audit, and clear the 180-question scenario-based PMP examination.',
          topics: ['People Domain (Conflict, Team Building, Empowering)', 'Process Domain (Managing Budget, Quality, Procurement)', 'Business Environment (Compliance, Delivering Value)'],
          skillsToAcquire: ['High-Stakes Scenario Decision Making under PMI Mindset', 'Situational Agile vs Predictive Conflict Resolution'],
          activities: ['Complete 35 hours Authorized Training Partner (ATP) course', 'Score > 80% on 4 full-length 180-question timed PMP simulator exams'],
          completionCriteria: 'Passing score in PMP examination; issuance of PMP Certificate and digital badge from PMI.',
          dependencies: '36 months project experience and 35 contact hours',
          resources: [
            { name: 'PMI PMP Exam Content Outline (ECO)', url: 'https://www.pmi.org', type: 'Official Examination Outline', isFree: true },
            { name: 'Rita Mulcahy PMP Exam Prep', url: 'https://rmcls.com', type: 'Prep Book', isFree: false }
          ]
        },
        {
          stepNumber: 4,
          title: 'Senior Delivery Management & Portfolio Leadership',
          stageType: 'practical_experience',
          duration: 'Post-PMP Advancement',
          description: 'Manage multi-million dollar program portfolios, handle client executive steering committees, supervise multiple project managers, and lead Project Management Offices (PMO).',
          topics: ['Program Portfolio Governance & Resource Optimization', 'Vendor Contract Negotiation (Fixed Price vs T&M)', 'C-Suite Steering Committee Reporting'],
          skillsToAcquire: ['Executive Stakeholder Expectation Management', 'Vendor Master Services Agreement (MSA) Scoping', 'Enterprise Value Delivery Assurance'],
          activities: ['Oversee concurrent delivery of 3+ enterprise projects with zero budget overrun', 'Establish standardized PMO governance templates across the organization'],
          completionCriteria: 'Promotion to Senior Project Manager / Delivery Director.',
          dependencies: 'PMP Certification and proven delivery track record',
          resources: [
            { name: 'PMI India Community Chapter Events', url: 'https://pmi.org.in', type: 'Professional Chapter', isFree: false },
            { name: 'Accenture Delivery Careers India', url: 'https://www.accenture.com/in-en/careers', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'business-development-manager',
    title: 'Business Development Manager (B2B / Enterprise Sales)',
    description: 'Drives corporate revenue growth through prospective client prospecting, outbound lead qualification, high-value B2B consultative selling, commercial contract negotiations, and strategic enterprise partnerships across IT SaaS, financial services, and corporate solutions.',
    educationRequirements: 'B.Tech/B.E., BBA, or B.Com + MBA in Marketing / Sales from a recognized business school. Demonstrable mastery of B2B sales pipelines, CRM platforms (Salesforce, HubSpot), and quota achievement.',
    educationPathways: [
      'B.Tech / BBA -> Business Development Executive (BDE) -> BDM -> Enterprise Account Executive',
      'Bachelor\'s Degree + MBA in Marketing & Sales (2 years via CAT/XAT/State CET)',
      'HubSpot Inbound Sales & MEDDIC Enterprise Sales Methodology Certifications'
    ],
    eligibilityRequirements: 'Bachelor\'s degree in any discipline. Exceptional consultative communication, presentation poise, pipeline forecasting, and commercial negotiation skills.',
    certificationsAndExams: [
      'HubSpot Certified Inbound Sales Professional',
      'MEDDIC / MEDDPICC Enterprise Sales Methodology Certification',
      'Salesforce Certified Sales Cloud Consultant'
    ],
    workEnvironment: 'Corporate sales headquarters in Bengaluru, Gurugram, Mumbai, and Hyderabad; flexible remote with frequent client site travel for executive pitch meetings.',
    marketDemand: 'High',
    jobOutlook: 'Rapid hiring driven by India\'s growing SaaS product companies selling to US/European markets, fintech corporate partnerships, and digital enterprise software adoption.',
    salaryRange: { min: 500000, max: 2000000, currency: 'INR', source: 'AmbitionBox Business Development Manager Salary 2024, PayScale India' },
    salarySource: 'AmbitionBox Business Development Manager Salary 2024, PayScale India',
    salaryByExperience: {
      entryLevel: { min: 500000, max: 800000, label: 'Business Development Associate (BDA) (0–2 yrs)' },
      earlyCareer: { min: 800000, max: 1500000, label: 'Business Development Manager / Account Executive (3–5 yrs)' },
      experienced: { min: 1500000, max: 2800000, label: 'Senior BDM / Director of Strategic Partnerships (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'B2B software SaaS Account Executives in companies targeting North American/European clients typically earn ₹18–35+ LPA, with uncapped commission structures frequently doubling total on-target earnings (OTE).'
    },
    careerProgression: [
      'Sales Development Representative (SDR) / BDE',
      'Business Development Manager (Inside / Field Sales)',
      'Enterprise Account Executive (Mid-Market / Large Enterprise)',
      'Director of Business Development & Sales',
      'Chief Revenue Officer (CRO) / VP Global Sales'
    ],
    employmentSectors: {
      government: 'Public Sector Undertakings Marketing Divisions (GAIL, IOCL, BHEL International Marketing), Export Promotion Councils (EEPC, APEDA), Invest India',
      privateSector: 'B2B SaaS Companies (Zoho, Freshworks, Postman, BrowserStack), IT Services Consultancies (TCS, Infosys, Tech Mahindra), Fintech Payment Gateways (Razorpay, Pine Labs)'
    },
    timelineOverview: {
      totalEstimatedDuration: '3–5 Years (Undergraduate degree + 1–2 Years progressive quota carrying)',
      educationDuration: '3–4 Years (Undergraduate degree)',
      prepDuration: '3–6 Months consultative sales methodologies and cold outreach training',
      practicalTrainingDuration: '12 Months meeting lead qualification and pipeline generation targets',
      jobSearchDuration: '1–2 Months active corporate recruitment cycle',
      overlapNotes: 'Sales certifications and live pipeline prospecting occur on the job.',
      confidenceNote: 'Consistent performance against quarterly revenue quotas is the single most important criterion for rapid promotion.'
    },
    sources: [
      { title: 'HubSpot Academy Inbound Sales Certification', url: 'https://academy.hubspot.com', sourceAuthority: 'HubSpot Academy', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Business Development Manager Salaries in India', url: 'https://www.ambitionbox.com/salaries/business-development-manager-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Business Development Manager Career Roadmap',
      description: 'Enterprise revenue generation pathway: cold outreach prospecting, discovery qualification (BANT/MEDDIC), consultative software demonstrations, objection handling, and enterprise deal closing.',
      totalEstimatedDuration: '4 Years',
      durationBreakdown: 'Degree & Communication Foundations: 3 Years | Sales Development Representative (SDR) Mastery: 1 Year | Enterprise BDM & Quota Execution: 2 Years',
      overlapNotes: 'Real-world customer discovery calls and CRM pipeline management occur daily on the job.',
      steps: [
        {
          stepNumber: 1,
          title: 'Communication, Market Research & Prospecting',
          stageType: 'education',
          duration: '3–4 Years (Undergraduate)',
          description: 'Build persuasive verbal and written communication skills, commercial business acumen, competitive market research, and cold prospecting techniques.',
          topics: ['Principles of Marketing & Consumer Psychology', 'Cold Email & LinkedIn Outreach Architecture', 'Ideal Customer Profile (ICP) & Buyer Persona Definition'],
          skillsToAcquire: ['High-Conversion Cold Email Copywriting', 'LinkedIn Sales Navigator Advanced Search', 'Active Value-Driven Listening'],
          activities: ['Build a verified prospective lead database of 200+ enterprise decision-makers using Apollo/LinkedIn', 'A/B test cold email open and reply rates across prospective accounts'],
          completionCriteria: 'Obtain undergraduate degree with demonstrable communication excellence.',
          dependencies: '10+2 from recognized board',
          resources: [
            { name: 'HubSpot Academy Inbound Sales Course', url: 'https://academy.hubspot.com', type: 'Free Certification', isFree: true },
            { name: 'Spin Selling by Neil Rackham (Methodology Reference)', url: 'https://www.mheducation.com', type: 'Book Reference', isFree: false }
          ]
        },
        {
          stepNumber: 2,
          title: 'Sales Development Representative (SDR) & Pipeline Generation',
          stageType: 'practical_experience',
          duration: '12 Months',
          description: 'Work as an SDR / BDE; execute outbound phone and email sequences, conduct initial customer discovery calls, and qualify leads using BANT (Budget, Authority, Need, Timeline).',
          topics: ['BANT & MEDDIC Qualification Frameworks', 'CRM Pipeline Management (Salesforce / HubSpot)', 'Objection Handling Strategies ("No Budget", "Send Me an Email")'],
          skillsToAcquire: ['Cold Call Tone and Objection Pivots', 'Salesforce Deal Stage Hygiene', 'Discovery Call Note Taking and Questioning'],
          activities: ['Generate 30+ qualified sales meetings (SQLs) per quarter for senior Account Executives', 'Maintain 100% CRM data accuracy on pipeline activity logs'],
          completionCriteria: 'Consistent achievement (> 100%) of quarterly Sales Qualified Lead (SQL) quotas.',
          dependencies: 'Undergraduate degree and entry-level sales hiring',
          resources: [
            { name: 'Salesforce Trailhead Sales Cloud Basics', url: 'https://trailhead.salesforce.com', type: 'Free Learning Portal', isFree: true },
            { name: 'Winning by Design Customer Discovery Framework', url: 'https://winningbydesign.com', type: 'Platform', isFree: false }
          ]
        },
        {
          stepNumber: 3,
          title: 'Consultative Product Demonstrations & Value Engineering',
          stageType: 'skill_acquisition',
          duration: '6–12 Months',
          description: 'Promote to Business Development Manager / Account Executive; deliver customized software product demonstrations tailored to C-suite pain points and compute ROI value models.',
          topics: ['Tailored Solution Demos (Features vs Business Outcomes)', 'ROI Business Case & Payback Period Modeling', 'Multi-Stakeholder Account Mapping (Champion, Economic Buyer, Blocker)'],
          skillsToAcquire: ['Executive Pitch Deck Delivery', 'Software Demo Flow Control', 'ROI Calculator Financial Justification'],
          activities: ['Deliver 50+ consultative demonstrations to CTOs, CFOs, and Heads of Operations', 'Build a compelling financial ROI model demonstrating 3x annual cost recovery for a prospective client'],
          completionCriteria: 'Proven record of moving prospective deals from demo stage to formal commercial proposal.',
          dependencies: 'Demonstrated success as SDR or direct BDM recruitment',
          resources: [
            { name: 'MEDDPICC Enterprise Sales Guide', url: 'https://meddic.academy', type: 'Training Platform', isFree: false },
            { name: 'Gartner Technology Sales Insights', url: 'https://www.gartner.com', type: 'Industry Research', isFree: false }
          ]
        },
        {
          stepNumber: 4,
          title: 'Commercial Negotiation, Contracting & Enterprise Closing',
          stageType: 'practical_experience',
          duration: '1–2 Years',
          description: 'Negotiate contract pricing, payment terms, Master Services Agreements (MSAs), and Service Level Agreements (SLAs); close high-value annual recurring revenue (ARR) deals.',
          topics: ['Commercial Negotiation Tactics (Trade-offs vs Discounting)', 'MSA and Non-Disclosure Agreement (NDA) Legal Redlining', 'Quarterly Revenue Quota Management & Forecasting'],
          skillsToAcquire: ['High-Value Deal Closing under Quarter-End Pressure', 'Collaborating with Corporate Legal on Contract Terms', 'Predictable Pipeline Forecasting'],
          activities: ['Close ₹1+ Crore in annual new business revenue contracts', 'Expand existing enterprise accounts through strategic multi-year renewals and upsells'],
          completionCriteria: 'Consistent annual quota overachievement; promotion to Senior BDM or Director of Sales.',
          dependencies: '2+ years successful B2B consultative selling experience',
          resources: [
            { name: 'Freshworks Careers India', url: 'https://www.freshworks.com/company/careers/', type: 'Company Portal', isFree: true },
            { name: 'Zoho Corporation Careers', url: 'https://www.zoho.com/careers/', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  }
];

module.exports = businessFinanceCareers;
