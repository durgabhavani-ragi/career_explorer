/**
 * Government and Public Services Careers Audit Data (9 Careers)
 * Covers: civil-services-officer, state-government-officer, ssc-cgl-career-roles,
 * banking-and-insurance-officer, railway-career-roles, defence-officer,
 * public-sector-undertaking-engineer, government-research-scientist, statistical-officer.
 * Validated for Indian constitutional bodies (UPSC, SSC, State PSCs, MoSPI, Defense Ministry),
 * 7th Central Pay Commission (CPC) pay levels, and competitive examination pipelines.
 */

const governmentPublicCareers = [
  {
    slug: 'civil-services-officer',
    title: 'Civil Services Officer (IAS / IPS / IFS / IRS)',
    description: 'Executes public policy administration, maintains law and order, enforces revenue tax compliance, and manages international diplomatic relations across India. Recruited through the nation\'s premier competitive examination conducted by the Union Public Service Commission (UPSC).',
    educationRequirements: 'Graduation in any discipline from a recognized central or state university. Mandatory clearance of the 3-stage UPSC Civil Services Examination (Preliminary, Main, and Personality Test/Interview).',
    educationPathways: [
      'Any Bachelor\'s Degree (B.A./B.Sc/B.Com/B.Tech/MBBS) -> 1–2 Years dedicated UPSC CSE preparation -> Clear Prelims, Mains, and Interview',
      'Foundation Training: 15-week Foundation Course at LBSNAA (Lal Bahadur Shastri National Academy of Administration, Mussoorie)',
      'Service-Specific Professional Training: SVPNPA Hyderabad (for IPS), Foreign Service Institute (for IFS), NADT Nagpur (for IRS)'
    ],
    eligibilityRequirements: 'Indian citizen (for IAS/IPS/IFS). Bachelor\'s degree in any discipline. Age between 21 and 32 years on August 1st of the exam year (with age and attempt relaxations for OBC/SC/ST/PwBD). Maximum 6 attempts for General category.',
    certificationsAndExams: [
      'UPSC Civil Services Examination (CSE Preliminary Examination - GS Paper I & CSAT Paper II)',
      'UPSC Civil Services Examination (CSE Main Written Examination - 9 Papers)',
      'UPSC Civil Services Personality Test / Interview'
    ],
    workEnvironment: 'District collectorates, police headquarters, state secretariats, central government ministries in New Delhi, diplomatic embassies abroad, and field administrative sub-divisions across rural and urban India.',
    marketDemand: 'Very High',
    jobOutlook: 'The most prestigious public service career in India; recruits approximately 900–1,100 officers annually across All India Services (IAS, IPS) and Central Services Group A (IFS, IRS, IAAS, IDAS).',
    salaryRange: { min: 780000, max: 2800000, currency: 'INR', source: '7th Central Pay Commission (7th CPC) IAS/IPS Pay Rules, DoPT Gazette Notifications' },
    salarySource: '7th Central Pay Commission (7th CPC) IAS/IPS Pay Rules, DoPT Gazette Notifications',
    salaryByExperience: {
      entryLevel: { min: 780000, max: 1100000, label: 'SDM / ASP / Assistant Collector (Level 10) (0–4 yrs)' },
      earlyCareer: { min: 1100000, max: 1700000, label: 'District Magistrate / SP (Level 11–12) (5–9 yrs)' },
      experienced: { min: 1700000, max: 3000000, label: 'Divisional Commissioner / Joint Secretary / Secretary (Level 14–17) (10–25+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Entry level starts at 7th CPC Level 10 (Basic ₹56,100/month, resulting in gross pay of ~₹78,000–95,000/month plus government bungalow, official vehicle, domestic staff, and full medical coverage). Cabinet Secretary earns the apex salary of ₹2,50,000/month basic.'
    },
    careerProgression: [
      'Sub-Divisional Magistrate (SDM) / Assistant Secretary',
      'Additional District Magistrate (ADM) / Deputy Secretary',
      'District Magistrate (DM) / Deputy Commissioner / Collector',
      'Divisional Commissioner / Joint Secretary to Government of India',
      'Principal Secretary / Chief Secretary of State / Cabinet Secretary of India'
    ],
    employmentSectors: {
      government: 'Government of India Ministries (Cabinet Secretariat, Home Affairs, Finance, External Affairs), State Government Civil Secretariats, District Administrative Collectorates, Indian Diplomatic Missions',
      privateSector: 'Statutory government career; post-retirement options include regulatory body chairs (TRAI, SEBI, CCI), UN agencies, and corporate advisory boards'
    },
    timelineOverview: {
      totalEstimatedDuration: '4.5–5.5 Years (3 Years Undergrad + 1–2 Years dedicated UPSC preparation & exam cycle)',
      educationDuration: '3–4 Years (Any Bachelor\'s degree)',
      prepDuration: '12–18 Months dedicated full-time preparation covering General Studies, Current Affairs, and Optional Subject',
      practicalTrainingDuration: '2 Years probationary training (LBSNAA Mussoorie + District Field Training)',
      jobSearchDuration: '1-Year comprehensive UPSC examination cycle (Prelims in May/June to Final Results in April/May)',
      overlapNotes: 'Preparation can commence during the final 2 semesters of undergraduate graduation.',
      confidenceNote: 'UPSC CSE has an acceptance rate below 0.1% (~10,000 selected for Mains out of 1,000,000 applicants); backup career planning is strongly recommended.'
    },
    sources: [
      { title: 'Union Public Service Commission (UPSC) Official Notifications', url: 'https://upsc.gov.in', sourceAuthority: 'UPSC India', verifiedDate: '2024-10-14' },
      { title: 'Department of Personnel and Training (DoPT) Civil Services Rules', url: 'https://dopt.gov.in', sourceAuthority: 'DoPT India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Civil Services Officer (UPSC CSE) Career Roadmap',
      description: 'Constitutional administrative route: NCERT foundations, General Studies Papers I–IV, Optional Subject mastery, CSAT, descriptive Mains answer writing, Personality Test, and LBSNAA training.',
      totalEstimatedDuration: '5 Years',
      durationBreakdown: 'Undergraduate Degree: 3 Years | Foundation & NCERTs: 6 Months | Mains Syllabus & Optional Subject: 8 Months | Prelims Revision & Test Series: 4 Months | 1-Year Examination Cycle: 12 Months',
      overlapNotes: 'GS static syllabus and optional subject preparation proceed simultaneously during the first year of dedicated study.',
      steps: [
        {
          stepNumber: 1,
          title: 'NCERT Foundations, Indian Polity & Contemporary Affairs',
          stageType: 'education',
          duration: '6 Months',
          description: 'Build foundational conceptual clarity across NCERT textbooks (Classes 6–12 in History, Geography, Polity, Economy, Environment), Indian Constitution (Laxmikanth), and daily national news analysis.',
          topics: ['Indian Polity & Constitution (Articles, Preamble, Fundamental Rights)', 'Physical & Human Geography of India and the World', 'Modern Indian History & Freedom Struggle', 'The Hindu / Indian Express Editorial Analysis'],
          skillsToAcquire: ['Constitutional Law Comprehension', 'Synthesizing Daily National News', 'Connecting Current Events to Constitutional Provisions'],
          activities: ['Read and annotate NCERT textbooks from Classes 9 to 12 across Social Sciences', 'Prepare monthly current affairs compilations categorized by GS Paper themes'],
          completionCriteria: 'Clear mock static objective test with > 70% accuracy across NCERT themes.',
          dependencies: 'Graduation from any recognized university',
          resources: [
            { name: 'UPSC Official Previous Year Question Papers', url: 'https://upsc.gov.in/examinations/previous-question-papers', type: 'Official Papers', isFree: true },
            { name: 'NCERT Online Textbooks Portal', url: 'https://ncert.nic.in', type: 'Official Textbooks', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'UPSC CSE Mains Syllabus & Optional Subject Mastery',
          stageType: 'skill_acquisition',
          duration: '8 Months',
          description: 'Master the comprehensive Mains syllabus: GS Paper 1 (Heritage, History, Geography, Society), GS Paper 2 (Governance, Constitution, Polity, Social Justice, IR), GS Paper 3 (Economy, Science & Tech, Environment, Security, Disaster Management), GS Paper 4 (Ethics, Integrity & Aptitude), and one Optional Subject (500 marks).',
          topics: ['GS 1: Indian Heritage, Society & World Geography', 'GS 2: Governance, Welfare Schemes, International Relations', 'GS 3: Economic Growth, Agriculture Subsidies, Internal Security Challenges', 'GS 4: Ethics Case Studies, Moral Philosophers, Emotional Intelligence'],
          skillsToAcquire: ['High-Speed Mains Descriptive Answer Writing (150 & 250 Words)', 'Structuring Answers with Introduction, Body, Diagrams, Way Forward', 'Solving Complex Ethical Case Studies'],
          activities: ['Write 2 daily Mains answers and receive peer/mentor feedback on formatting', 'Complete full syllabus notes for chosen Optional Subject (e.g., PSIR, Sociology, Geography, History)'],
          completionCriteria: 'Write 4 full-length 3-hour Mains mock test papers within the 180-minute time constraint.',
          dependencies: 'Foundational Knowledge of Polity and History',
          resources: [
            { name: 'LBSNAA Training Curriculum Overview', url: 'https://www.lbsnaa.gov.in', type: 'Official Portal', isFree: true },
            { name: 'VisionIAS / ForumIAS Open Mains Resources', url: 'https://www.visionias.in', type: 'Preparation Portal', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Prelims Test Series, CSAT Qualifying & Examination Stage',
          stageType: 'certification',
          duration: '4–6 Months',
          description: 'Focus exclusively on Preliminary Examination: General Studies Paper-I (100 MCQs, 200 marks) and CSAT Paper-II (80 MCQs, qualifying 33% / 66 marks required), followed by writing the 9-paper Mains exam in September.',
          topics: ['Elimination Techniques in UPSC MCQs', 'CSAT Reading Comprehension, Quantitative Aptitude & Reasoning', 'Economic Survey & Union Budget Schemes', 'Environment Conventions (UNFCCC, CBD, CITES)'],
          skillsToAcquire: ['Intelligent Elimination in Negative-Marking MCQs', 'Securing Safe Cutoff Marks in CSAT (> 80/200)', 'Writing 27 Hours of Descriptive Examinations across 5 Days'],
          activities: ['Attempt 40+ full-length UPSC Prelims mock test series papers with detailed negative mark analysis', 'Appear for the Preliminary exam in May/June and clear cut-off marks'],
          completionCriteria: 'Qualify UPSC CSE Preliminary examination and write all 9 papers of CSE Main Examination.',
          dependencies: 'Completion of GS static syllabus and Optional Subject',
          resources: [
            { name: 'UPSC CSE Prelims & Mains Syllabi Gazette', url: 'https://upsc.gov.in', type: 'Official Gazette', isFree: true },
            { name: 'Ministry of Finance Economic Survey Reports', url: 'https://www.indiabudget.gov.in/economicsurvey/', type: 'Government Reports', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'UPSC Personality Test (Interview) & LBSNAA Foundation Course',
          stageType: 'practical_experience',
          duration: '6 Months',
          description: 'Clear the 275-mark UPSC Personality Test in Dholpur House, New Delhi, evaluating mental alertness, balanced judgement, intellectual integrity, and leadership; join LBSNAA Mussoorie upon final selection.',
          topics: ['Detailed Application Form (DAF) In-Depth Analysis', 'State Socio-Economic Dynamics & Home State Issues', 'National Policy Dilemmas & Foreign Affairs Debates', 'LBSNAA Foundation Course & Bharat Darshan Tour'],
          skillsToAcquire: ['Poised, Balanced, and Unbiased Verbal Communication', 'Handling Stress Interview Scenarios with Intellectual Humility', 'District Field Governance Execution'],
          activities: ['Attend 3+ mock interview panels with retired Ambassadors, Chief Secretaries, and UPSC members', 'Report to LBSNAA Mussoorie for the 15-week combined Foundation Course'],
          completionCriteria: 'Securing an All India Rank in the final UPSC Civil Services merit list; allocation of IAS/IPS/IFS/IRS service.',
          dependencies: 'Clearing UPSC CSE Mains Examination',
          resources: [
            { name: 'Lal Bahadur Shastri National Academy of Administration (LBSNAA)', url: 'https://www.lbsnaa.gov.in', type: 'Training Academy', isFree: true },
            { name: 'DoPT Civil Services Allocation Portal', url: 'https://dopt.gov.in', type: 'Government Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'state-government-officer',
    title: 'State Public Service Officer (State PCS / Group A)',
    description: 'Administers state revenue administration, land records, law enforcement, rural panchayati raj development, municipal governance, and commercial tax enforcement as Deputy Collector, Deputy Superintendent of Police (DSP), or Tehsildar across Indian state administrations.',
    educationRequirements: 'Graduation in any discipline from a recognized university. Mandatory clearance of State Public Service Commission (State PSC / PCS) combined civil services examinations (e.g., UPPSC, MPSC, BPSC, TNPSC, KPSC, APPSC).',
    educationPathways: [
      'Any Bachelor\'s Degree -> State PSC Combined Civil Services Examination (Prelims, Mains, and Interview)',
      'State Police Service (DySP) via State PSC physical measurement and written standards',
      'State Administrative Training Academy Induction (e.g., UPAM Lucknow, YASHADA Pune, ATI Mysuru)'
    ],
    eligibilityRequirements: 'Indian citizen. Bachelor\'s degree in any discipline. Age between 21 and 40 years (varies by state). Domicile rules apply for reserved category benefits. Fluency in the state\'s official regional language.',
    certificationsAndExams: [
      'State Public Service Commission Combined Competitive Exam (Prelims & Mains)',
      'State Civil Services Personality Test / Interview',
      'Regional Language Proficiency Test'
    ],
    workEnvironment: 'Sub-divisional magistrate offices, tehsil offices, district collectorates, block development offices, and state secretariats across the respective Indian state.',
    marketDemand: 'Very High',
    jobOutlook: 'Highly coveted permanent administrative careers within states; offers promotion opportunities into the Indian Administrative Service (IAS) and Indian Police Service (IPS) via state promotion quotas.',
    salaryRange: { min: 650000, max: 1800000, currency: 'INR', source: 'State Pay Commission Pay Scales (Class-1 / Class-2 Gazetted), State PSC Gazette Notifications' },
    salarySource: 'State Pay Commission Pay Scales (Class-1 / Class-2 Gazetted), State PSC Gazette Notifications',
    salaryByExperience: {
      entryLevel: { min: 650000, max: 950000, label: 'Sub-Divisional Magistrate / DSP / Tehsildar (Level 9–10) (0–3 yrs)' },
      earlyCareer: { min: 950000, max: 1400000, label: 'Additional District Magistrate / Addl SP (Level 11–12) (4–8 yrs)' },
      experienced: { min: 1400000, max: 2400000, label: 'Special Secretary / Promoted IAS/IPS Cadre (Level 13–14) (9–20+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Class-1 Gazetted State PSC Officers enter at 7th CPC Level 10 equivalent (~₹65,000–85,000/month basic + state DA, official residential quarters, and state administrative allowances).'
    },
    careerProgression: [
      'Deputy Collector / Deputy SP / Commercial Tax Officer',
      'Sub-Divisional Magistrate (SDM) / Circle Officer',
      'Additional District Magistrate (ADM) / Additional SP',
      'Special Secretary / District Magistrate (Conferred IAS status)',
      'Principal Secretary to State Government'
    ],
    employmentSectors: {
      government: 'State Revenue Department, State Police Departments, State Panchayati Raj & Rural Development, State Commercial Taxes Department, State Secretariats',
      privateSector: 'Permanent state government career with high job security, state pension benefits, and executive authority'
    },
    timelineOverview: {
      totalEstimatedDuration: '4–5 Years (3 Years Undergrad + 1–2 Years dedicated State PCS exam preparation)',
      educationDuration: '3–4 Years (Any Bachelor\'s degree)',
      prepDuration: '12 Months focused preparation covering Indian GS + State-specific GK and regional language',
      practicalTrainingDuration: '1 Year foundational and field training in State Administrative Training Academy',
      jobSearchDuration: '1-Year state civil services examination and interview cycle',
      overlapNotes: 'State-specific history, geography, economy, and culture are prepared in parallel with core UPSC General Studies.',
      confidenceNote: 'State PSC syllabi closely mirror UPSC CSE patterns with additional dedicated state general knowledge papers.'
    },
    sources: [
      { title: 'State Public Service Commission Notifications (UPPSC, MPSC, BPSC, TNPSC)', url: 'https://uppsc.up.nic.in', sourceAuthority: 'State Public Service Commissions', verifiedDate: '2024-10-14' },
      { title: 'State Administrative Training Institutes Network', url: 'https://dopt.gov.in', sourceAuthority: 'DoPT India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'State Public Service Officer (State PCS) Career Roadmap',
      description: 'State civil services route: general studies, state-specific history/geography, regional language, descriptive Mains answer writing, interview, and State Administrative Academy induction.',
      totalEstimatedDuration: '4.5 Years',
      durationBreakdown: 'Undergraduate Degree: 3 Years | State PCS Prelims & State GK Mastery: 6 Months | Mains Descriptive Preparation: 6 Months | Examination Cycle & Academy Induction: 12 Months',
      overlapNotes: 'State GK and regional language studies run parallel to General Studies preparation.',
      steps: [
        {
          stepNumber: 1,
          title: 'General Studies & State Specific History, Culture & Economy',
          stageType: 'education',
          duration: '6 Months',
          description: 'Master core General Studies (Polity, History, Geography, Economy) alongside dedicated state-specific syllabus: state history, geography, river systems, tribal communities, budget, and cultural heritage.',
          topics: ['Indian Polity and Constitutional Framework', 'State History, Architecture, and Dynasties', 'State Geography, Agriculture, Soils, and Rivers', 'State Budget, Economic Schemes & Welfare Programs'],
          skillsToAcquire: ['State Regional Language Writing Fluency', 'State GK Retention & Cross-Linking', 'Speed MCQ Elimination'],
          activities: ['Study the official state gazette and annual state economic review document', 'Solve past 5 years State PCS preliminary exam question papers'],
          completionCriteria: 'Clear state-level mock tests with scores comfortably above previous year cutoff percentiles.',
          dependencies: 'Graduation from any recognized university',
          resources: [
            { name: 'State Public Service Commission Official Syllabi', url: 'https://uppsc.up.nic.in', type: 'Official Portal', isFree: true },
            { name: 'State Government Annual Economic Survey Portals', url: 'https://finance.up.gov.in', type: 'Government Reports', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'State PCS Preliminary Examination Clearance',
          stageType: 'certification',
          duration: '3–4 Months',
          description: 'Clear the 2-paper objective Preliminary exam: General Studies Paper-I and CSAT/General Mental Ability Paper-II (qualifying 33%).',
          topics: ['State GK High-Yield MCQs', 'Indian National Movement & Modern History', 'General Mental Ability & Logical Reasoning', 'State Current Affairs of Past 12 Months'],
          skillsToAcquire: ['High-Accuracy MCQ Elimination', 'Handling Negative Marking Criteria'],
          activities: ['Attempt 30+ full-length state civil services preliminary mock test papers', 'Appear for the Preliminary examination and secure qualifying merit for Mains'],
          completionCriteria: 'Clearing State PCS Preliminary exam cut-off marks.',
          dependencies: 'Graduation and age eligibility compliance',
          resources: [
            { name: 'State PSC Previous Year Preliminary Papers', url: 'https://uppsc.up.nic.in', type: 'Official Papers', isFree: true },
            { name: 'Testbook State PCS Mock Series', url: 'https://testbook.com', type: 'Practice Platform', isFree: false }
          ]
        },
        {
          stepNumber: 3,
          title: 'State PCS Mains Written Examination & Regional Language',
          stageType: 'skill_acquisition',
          duration: '6 Months',
          description: 'Master descriptive answer writing across 6–8 compulsory papers including General Hindi / Regional Language, Essay Writing, General Studies Papers I–IV, and Dedicated State GK Papers V & VI.',
          topics: ['Compulsory Regional Language Grammar & Translation', 'General Essay Writing (National & State Issues)', 'State Governance, Law & Order, and Infrastructure Challenges', 'Ethics and Administrative Case Studies in State Context'],
          skillsToAcquire: ['High-Speed Descriptive Writing in Regional Language or English', 'Structured State Administrative Policy Formulations'],
          activities: ['Write 5 full-length timed essays on contemporary state agrarian and industrial challenges', 'Complete 100+ answer writing evaluations with mentors on dedicated state papers'],
          completionCriteria: 'Pass State PCS Main written examination and qualify for the interview interview round.',
          dependencies: 'Passing State PCS Preliminary Exam',
          resources: [
            { name: 'State Administrative Training Academy Journals', url: 'https://upam.up.nic.in', type: 'Training Portal', isFree: true },
            { name: 'State Gazette Publications', url: 'https://egazette.gov.in', type: 'Official Gazette', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'State Civil Services Interview & Academy Induction',
          stageType: 'practical_experience',
          duration: '6 Months',
          description: 'Clear the personal interview round evaluated by the State PSC board; complete 1-year induction training at the State Administrative Training Institute followed by field posting as Deputy Collector or DSP.',
          topics: ['State Administrative Policy & Land Revenue Laws', 'Personal Biodata & Service Preference Defense', 'State Academy Foundation Course & Field Land Settlement Training'],
          skillsToAcquire: ['Administrative Land Revenue Arbitration (Land Settlement, Tehsildar Court Operations)', 'Field Law and Order Management during Riots and Elections', 'District Rural Development Scheme Administration'],
          activities: ['Clear personal interview round demonstrating regional cultural empathy and administrative clarity', 'Undergo 1-year training at State Administrative Training Institute including district magistrate attachment'],
          completionCriteria: 'Final selection in State Civil Services Gazette; appointment as Deputy Collector or DSP.',
          dependencies: 'Clearing State PCS Mains Examination',
          resources: [
            { name: 'Yashwantrao Chavan Academy of Development Administration (YASHADA)', url: 'https://www.yashada.org', type: 'Training Academy', isFree: true },
            { name: 'State Public Service Commission Final Merit Lists', url: 'https://uppsc.up.nic.in', type: 'Official Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'ssc-cgl-career-roles',
    title: 'Central Government Officer (SSC CGL Inspector / ASO)',
    description: 'Inspects and enforces indirect/direct tax compliance, prevents commercial smuggling, investigates economic offenses, and executes administrative governance in central government ministries as Assistant Section Officer (ASO in MEA/CSS), Inspector of Central Excise (GST), Inspector of Income Tax, or Enforcement Officer.',
    educationRequirements: 'Bachelor\'s degree in any discipline from a recognized university. Mandatory clearance of the Staff Selection Commission Combined Graduate Level (SSC CGL) Tier-I and Tier-II computer-based examinations.',
    educationPathways: [
      'Any Bachelor\'s Degree (B.Com/B.Sc/B.A./B.Tech) -> Dedicated SSC CGL Tier-I & Tier-II preparation -> Direct Central Government Appointment',
      'Assistant Section Officer (ASO) in Central Secretariat Service (CSS) or Ministry of External Affairs (MEA)',
      'Preventive Officer / Examiner / GST Inspector in Central Board of Indirect Taxes and Customs (CBIC)'
    ],
    eligibilityRequirements: 'Indian citizen. Bachelor\'s degree in any discipline. Age between 18 and 30/32 years (depending on post). Physical endurance and medical standards for uniformed inspector posts (Customs/Excise/CBI).',
    certificationsAndExams: [
      'SSC CGL Tier-I Examination (Computer-Based Objective Test)',
      'SSC CGL Tier-II Examination (Paper-I: Math, Reasoning, English, General Awareness, Computer Knowledge & Data Entry)',
      'Physical Endurance & Medical Fitness Test (for Inspector posts in CBIC / CBI)'
    ],
    workEnvironment: 'Central government ministries in New Delhi (Central Secretariat, MEA, Defence), international airports and seaports (Customs Preventive Officers), and corporate tax offices nationwide.',
    marketDemand: 'Very High',
    jobOutlook: 'Major annual central government recruitment drive (typically 12,000–18,000+ Group B & C Gazetted/Non-Gazetted posts recruited annually by Staff Selection Commission).',
    salaryRange: { min: 550000, max: 1400000, currency: 'INR', source: '7th CPC Central Civil Services Pay Matrix (Level 7 & Level 8), SSC CGL Official Notices' },
    salarySource: '7th CPC Central Civil Services Pay Matrix (Level 7 & Level 8), SSC CGL Official Notices',
    salaryByExperience: {
      entryLevel: { min: 550000, max: 850000, label: 'Assistant Section Officer / Inspector (Level 7) (0–3 yrs)' },
      earlyCareer: { min: 850000, max: 1250000, label: 'Superintendent / Section Officer (Level 8–10) (4–8 yrs)' },
      experienced: { min: 1250000, max: 2000000, label: 'Assistant Commissioner / Under Secretary (Level 11–12) (9–20+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Level 7 Group B Inspector/ASO posts enter at Basic ₹44,900/month (gross pay ~₹72,000–85,000/month in X-Cities like Delhi/Mumbai including DA, HRA, and Transport Allowance). MEA ASO foreign postings command tax-free foreign allowances of ₹2–4 Lakhs/month.'
    },
    careerProgression: [
      'Assistant Section Officer (ASO) / Inspector (GST / Income Tax / Customs)',
      'Section Officer / Superintendent of Central Tax & Customs',
      'Under Secretary / Assistant Commissioner of Income Tax/GST',
      'Deputy Secretary / Deputy Commissioner',
      'Director to Government of India / Joint Commissioner'
    ],
    employmentSectors: {
      government: 'Central Ministries (Ministry of External Affairs, Central Secretariat Service, Ministry of Defence), Central Board of Indirect Taxes and Customs (CBIC), Central Board of Direct Taxes (CBDT), Central Bureau of Investigation (CBI), Enforcement Directorate (ED)',
      privateSector: 'Statutory central civil service with lifelong job security, CGHS central government health benefits, and government accommodation'
    },
    timelineOverview: {
      totalEstimatedDuration: '3.5–4.5 Years (3 Years Undergrad + 6–12 Months focused exam prep)',
      educationDuration: '3–4 Years (Any Bachelor\'s degree)',
      prepDuration: '6–12 Months intensive preparation for Tier-I and Tier-II syllabus',
      practicalTrainingDuration: '2–3 Months departmental induction training (e.g., NACIN for Customs/GST inspectors)',
      jobSearchDuration: 'Direct appointment upon publication of SSC CGL final rank-cum-preference list',
      overlapNotes: 'Quantitative aptitude and English comprehension can be prepared during final college year.',
      confidenceNote: 'Scoring full marks in the Computer Proficiency and Data Entry Speed Test (DEST) module in Tier-II is mandatory for final selection.'
    },
    sources: [
      { title: 'Staff Selection Commission (SSC) Official Recruitment Notices', url: 'https://ssc.gov.in', sourceAuthority: 'Staff Selection Commission', verifiedDate: '2024-10-14' },
      { title: 'National Academy of Customs, Indirect Taxes & Narcotics (NACIN)', url: 'https://nacin.gov.in', sourceAuthority: 'CBIC India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Central Government Officer (SSC CGL) Career Roadmap',
      description: 'SSC CGL central recruitment pathway: Tier-I screening, advanced Tier-II (Mathematics, Reasoning, English, General Awareness, Computer Knowledge, Typing DEST), and central ministry appointment.',
      totalEstimatedDuration: '3.5–4 Years',
      durationBreakdown: 'Bachelor\'s Degree: 3 Years | Tier-I & Tier-II Quantitative/English Preparation: 6–8 Months | Tier-II Test Series & Typing Speed: 3 Months | SSC Examination & Departmental Induction: 6 Months',
      overlapNotes: 'Typing speed practice (minimum 27 words per minute) should proceed concurrently with Tier-II preparation.',
      steps: [
        {
          stepNumber: 1,
          title: 'Mathematics, Reasoning & English Language Mastery',
          stageType: 'education',
          duration: '6 Months',
          description: 'Master quantitative aptitude (Arithmetic, Algebra, Geometry, Trigonometry, Mensuration), analytical reasoning, and English grammar/comprehension rules.',
          topics: ['Advanced Mathematics (Geometry, Trigonometry, Algebra, Circle Theorems)', 'Arithmetic Math (Percentages, Profit & Loss, Time & Work)', 'English Grammar (Direct/Indirect Speech, Active/Passive Voice, Idioms)', 'General Intelligence and Non-Verbal Reasoning'],
          skillsToAcquire: ['Solving Math Problems without Long Formulas', 'Spotting Grammatical Errors in English Sentences', 'High-Speed Mental Math Calculation'],
          activities: ['Solve past 5 years SSC CGL Tier-I and Tier-II mathematics question papers', 'Practice 50 daily English comprehension, vocabulary, and sentence improvement drills'],
          completionCriteria: 'Score > 150/200 in national SSC CGL Tier-I mock tests.',
          dependencies: 'Graduation in any discipline',
          resources: [
            { name: 'SSC Official Examination Portal', url: 'https://ssc.gov.in', type: 'Official Portal', isFree: true },
            { name: 'Testbook / Oliveboard SSC CGL Mock Platform', url: 'https://testbook.com', type: 'Practice Platform', isFree: false }
          ]
        },
        {
          stepNumber: 2,
          title: 'SSC CGL Tier-I Computer-Based Examination',
          stageType: 'certification',
          duration: '3 Months',
          description: 'Clear Tier-I computer-based exam consisting of 100 questions (200 marks in 60 minutes) covering Reasoning, General Awareness, Quantitative Aptitude, and English.',
          topics: ['Speed Math & Shortcut Tricks', 'Static General Knowledge & Science NCERT Basics', 'Current Affairs of Past 6 Months', 'Negative Marking Mitigation (0.50 marks per wrong answer)'],
          skillsToAcquire: ['Solving 100 Questions in 60 Minutes', 'Effective Sectional Time Division'],
          activities: ['Attempt 30 full-length 60-minute computer-based mock tests on official pattern', 'Appear for Tier-I exam and clear cutoff marks to qualify for Tier-II'],
          completionCriteria: 'Qualifying in Tier-I merit list published by Staff Selection Commission.',
          dependencies: 'Graduation and registration on SSC portal',
          resources: [
            { name: 'SSC CGL Tier-I Syllabus and Pattern', url: 'https://ssc.gov.in', type: 'Official Notification', isFree: true },
            { name: 'Kiran Prakashan SSC Mathematics Compendium', url: 'https://www.kiranprakashan.com', type: 'Practice Book', isFree: false }
          ]
        },
        {
          stepNumber: 3,
          title: 'Tier-II Comprehensive Examination & Computer/Typing Test',
          stageType: 'skill_acquisition',
          duration: '3–4 Months',
          description: 'Master Tier-II Paper-I: Mathematical Abilities, Reasoning, English Language, General Awareness, mandatory Computer Knowledge Module, and Data Entry Speed Test (DEST).',
          topics: ['Mathematical Abilities (30 Questions, 90 Marks)', 'Reasoning and General Intelligence (30 Questions, 90 Marks)', 'English Language and Comprehension (45 Questions, 135 Marks)', 'Computer Knowledge Module (20 Questions - Hardware, Internet, MS Office)'],
          skillsToAcquire: ['High-Scoring English Reading Comprehension', 'Passing Computer Knowledge Qualifying Section', 'Typing 2,000 Key Depressions in 15 Minutes (DEST)'],
          activities: ['Practice daily on typing software to achieve typing speed > 35 words per minute with 95% accuracy', 'Score > 310/390 on Tier-II full-length mock examinations'],
          completionCriteria: 'Clear Tier-II examination with top merit marks and pass qualifying typing test.',
          dependencies: 'Passing Tier-I Examination',
          resources: [
            { name: 'SSC Tier-II Pattern and Sample Mock Tests', url: 'https://ssc.gov.in', type: 'Official Portal', isFree: true },
            { name: 'TypingMaster / 10FastFingers Online Typing Practice', url: 'https://10fastfingers.com', type: 'Practice Tool', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Physical Test, Post Allocation & Departmental Induction',
          stageType: 'practical_experience',
          duration: '3–6 Months',
          description: 'Undergo physical and medical examination (for CBIC inspector posts: walking and cycling tests), submit online post preference form, and join allocated central ministry or department.',
          topics: ['Physical Walking and Cycling Standards for CBIC Posts', 'Departmental Post Preference Prioritization (ASO CSS vs ASO MEA vs GST Inspector)', 'National Academy of Customs, Indirect Taxes & Narcotics (NACIN) Training'],
          skillsToAcquire: ['Central Secretariat Office Procedures', 'GST Audit and Invoicing Enforcement Protocols', 'Customs Air and Sea Port Cargo Clearance'],
          activities: ['Complete physical test at regional customs/excise stadium', 'Complete 3-month foundational training at National Academy of Customs or Central Secretariat Training Institute'],
          completionCriteria: 'Formal appointment letter issued by President of India for allocated central service.',
          dependencies: 'Clearing Tier-II Examination and physical fitness tests',
          resources: [
            { name: 'NACIN Induction Training Guidelines', url: 'https://nacin.gov.in', type: 'Government Academy', isFree: true },
            { name: 'Central Secretariat Service (CSS) Rules', url: 'https://dopt.gov.in', type: 'Government Rules', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'banking-and-insurance-officer',
    title: 'Public Sector Banking & Insurance Officer (IBPS PO / LIC AAO)',
    description: 'Manages credit appraisal, retail banking operations, corporate lending, and life/general insurance underwriting across Indian public sector commercial banks (SBI, PNB, Canara Bank) and public insurance corporations (LIC of India, GIC Re, New India Assurance).',
    educationRequirements: 'Graduation in any discipline from a recognized university. Mandatory qualification of competitive national examinations: IBPS PO, SBI PO, or LIC Assistant Administrative Officer (AAO).',
    educationPathways: [
      'Any Bachelor\'s Degree -> Clear IBPS PO / SBI PO for Public Sector Banks (Scale I Officer)',
      'Any Bachelor\'s Degree -> Clear LIC AAO (Generalist / IT / CA / Actuarial) examination',
      'NIACL / GIC Assistant Administrative Officer (General Insurance) examinations'
    ],
    eligibilityRequirements: 'Bachelor\'s degree with minimum 55-60% aggregate. Age between 21 and 30 years (with standard category relaxations). Indian citizenship.',
    certificationsAndExams: [
      'IBPS PO / SBI PO Competitive Examination',
      'LIC AAO (Assistant Administrative Officer Examination)',
      'JAIIB / CAIIB & Licentiate / Associate Examination (Insurance Institute of India - III)'
    ],
    workEnvironment: 'Public sector bank branches, administrative zonal offices, LIC divisional offices, and commercial lending branches nationwide.',
    marketDemand: 'Very High',
    jobOutlook: 'Consistent large-scale annual recruitment (thousands of Scale I Officers and hundreds of LIC AAOs annually); highly stable public financial service career with extensive banking allowances.',
    salaryRange: { min: 650000, max: 1600000, currency: 'INR', source: 'IBA 12th Bipartite Settlement Pay Scales, LIC AAO Gazette Pay Scales' },
    salarySource: 'IBA 12th Bipartite Settlement Pay Scales, LIC AAO Gazette Pay Scales',
    salaryByExperience: {
      entryLevel: { min: 650000, max: 950000, label: 'Probationary Officer / LIC AAO (0–2 yrs)' },
      earlyCareer: { min: 950000, max: 1400000, label: 'Branch Manager / Administrative Officer (Scale II/III) (3–5 yrs)' },
      experienced: { min: 1400000, max: 2400000, label: 'Senior Divisional Manager / Chief Manager (Scale IV-V) (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'LIC AAO officers start at a basic pay of ₹53,600/month (total gross compensation exceeding ₹85,000–98,000/month in metropolitan cities plus leased accommodation and pension). Bank POs receive ₹65,000–75,000/month plus bank quarters.'
    },
    careerProgression: [
      'Probationary Officer (Scale I) / Assistant Administrative Officer (AAO)',
      'Branch Manager / Administrative Officer (AO)',
      'Senior Divisional Manager / Chief Manager',
      'Deputy General Manager / Regional Manager',
      'Executive Director / Managing Director / Chairman'
    ],
    employmentSectors: {
      government: 'Public Sector Commercial Banks (State Bank of India, Punjab National Bank, Bank of Baroda, Canara Bank), Life Insurance Corporation of India (LIC), General Insurance Corporation of India (GIC Re), New India Assurance',
      privateSector: 'Statutory public sector financial service with government-backed sovereign guarantees'
    },
    timelineOverview: {
      totalEstimatedDuration: '3.5–4.5 Years (3 Years Undergrad + 6–12 Months competitive banking/insurance exam prep)',
      educationDuration: '3–4 Years (Any Bachelor\'s degree)',
      prepDuration: '6–12 Months focused quantitative aptitude, reasoning, and financial awareness training',
      practicalTrainingDuration: '1–2 Years on-the-job probationary rotational training',
      jobSearchDuration: 'Direct appointment upon clearing final combined merit list',
      overlapNotes: 'Bank PO and Insurance AAO syllabi share 85% common aptitude and reasoning content.',
      confidenceNote: 'LIC AAO offers superior work-life balance (5-day work week, no retail branch customer rush) compared to commercial bank branch operations.'
    },
    sources: [
      { title: 'Life Insurance Corporation of India (LIC) Recruitment Portal', url: 'https://licindia.in', sourceAuthority: 'LIC India', verifiedDate: '2024-10-14' },
      { title: 'Institute of Banking Personnel Selection (IBPS)', url: 'https://www.ibps.in', sourceAuthority: 'IBPS India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Banking and Insurance Officer Career Roadmap',
      description: 'Public finance officer route: Quantitative aptitude, logical puzzles, financial awareness, descriptive essay writing, interview panel, and probationary branch management.',
      totalEstimatedDuration: '4 Years',
      durationBreakdown: 'Bachelor\'s Degree: 3 Years | Banking/Insurance Aptitude Preparation: 6 Months | Mains & Interview Clearance: 6 Months | Probationary Rotational Training: 1–2 Years',
      overlapNotes: 'Competitive preparation proceeds concurrently with final-year undergraduate studies.',
      steps: [
        {
          stepNumber: 1,
          title: 'Quantitative Aptitude, Reasoning & Insurance Fundamentals',
          stageType: 'education',
          duration: '6 Months',
          description: 'Master arithmetic speed calculations, high-level data interpretation (caselets, radar charts), reasoning puzzles (circular, box, floor arrangements), and principles of life/general insurance.',
          topics: ['Speed Math & Data Interpretation Caselets', 'Complex Logical Reasoning Puzzles', 'Insurance Terminology (Underwriting, Actuarial, Indemnity, Subrogation)', 'English Grammar & Vocabulary'],
          skillsToAcquire: ['Fast Data Interpretation Solving', 'Solving Complex Reasoning Puzzles within 3 Minutes', 'Insurance Principle Conceptual Clarity'],
          activities: ['Solve 50+ high-level reasoning puzzle sets and 50 data interpretation caselets', 'Study Insurance Institute of India (III) Licentiate foundational curriculum'],
          completionCriteria: 'Consistently score > 75% in national banking and insurance preliminary mock tests.',
          dependencies: 'Graduation in any discipline',
          resources: [
            { name: 'IBPS Official Mock Test Portal', url: 'https://www.ibps.in', type: 'Official Portal', isFree: true },
            { name: 'Insurance Institute of India (III) Knowledge Base', url: 'https://www.insuranceinstituteofindia.com', type: 'Professional Institute', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Preliminary Examination Clearance (Speed & Accuracy)',
          stageType: 'certification',
          duration: '3 Months',
          description: 'Clear IBPS/SBI PO or LIC AAO Preliminary examination (100 questions in 60 minutes with sectional timers across Quant, Reasoning, and English).',
          topics: ['Sectional Timing Strategy (20 Minutes per Section)', 'High-Probability Puzzle Selection', 'Negative Marking Mitigation (0.25 marks penalty)'],
          skillsToAcquire: ['Time Optimization under Sectional Clock Constraints', 'Rapid Question Skipping Decisions'],
          activities: ['Attempt 30 full-length timed mock tests on computer screen interface', 'Appear for IBPS PO / LIC AAO Preliminary exam and secure cutoff rank'],
          completionCriteria: 'Clear Preliminary examination cutoff marks published by IBPS / LIC.',
          dependencies: 'Graduation and registration on examination portal',
          resources: [
            { name: 'LIC AAO Examination Notification & Syllabi', url: 'https://licindia.in/Bottom-Links/careers', type: 'Official Notification', isFree: true },
            { name: 'Oliveboard Banking & Insurance Practice Portal', url: 'https://www.oliveboard.in', type: 'Practice Platform', isFree: false }
          ]
        },
        {
          stepNumber: 3,
          title: 'Mains Examination, Financial Awareness & Descriptive Test',
          stageType: 'skill_acquisition',
          duration: '3–4 Months',
          description: 'Master advanced Mains syllabus: High-Level Reasoning, Data Analysis, Insurance and Financial Market Awareness, and computer-typed English descriptive letter and essay writing.',
          topics: ['Insurance and Financial Market Awareness (IRDAI, Solvency, Microinsurance)', 'High-Level Data Analysis and Mathematical Modeling', 'Descriptive Essay Writing on Economic/Social Themes', 'Descriptive Formal Letter Writing (Formal Bank/Customer Letters)'],
          skillsToAcquire: ['Typing Descriptive Essays on Screen within 30 Minutes', 'Insurance Regulatory Awareness (IRDAI Norms)', 'Complex Multi-Statement Logical Deductions'],
          activities: ['Write and type 15 timed formal essays on Indian banking and insurance reforms', 'Study IRDAI annual reports and RBI monetary policy bulletins'],
          completionCriteria: 'Pass Mains examination and qualify for the final personal interview stage.',
          dependencies: 'Passing Preliminary Examination',
          resources: [
            { name: 'IRDAI Annual Reports & Circulars', url: 'https://irdai.gov.in', type: 'Government Reports', isFree: true },
            { name: 'Reserve Bank of India Monetary Policy Reviews', url: 'https://www.rbi.org.in', type: 'Government Publications', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Interview Panel, Final Allotment & Branch Probation',
          stageType: 'practical_experience',
          duration: '1–2 Years',
          description: 'Clear the personal interview round evaluated by senior banking/insurance executives; complete 1–2 years of probationary rotational training in branches, underwriting divisions, and claims departments.',
          topics: ['Banking/Insurance Branch Operations', 'Retail Credit Sanctioning & Risk Underwriting', 'Life and Health Insurance Claims Settlement Protocols'],
          skillsToAcquire: ['Credit and Insurance Underwriting Judgement', 'Customer Grievance Redressal (Ombudsman Framework)', 'Core Banking (Finacle) / LIC e-FEAP Software Operations'],
          activities: ['Process 100+ loan or insurance policy underwriting applications during probation', 'Clear IIBF JAIIB/CAIIB or Insurance Institute Licentiate exams to earn immediate salary increments'],
          completionCriteria: 'Confirmation as Scale-I Officer / Assistant Administrative Officer.',
          dependencies: 'Clearing Mains and Interview stages',
          resources: [
            { name: 'National Institute of Bank Management (NIBM)', url: 'https://www.nibmindia.org', type: 'Training Institute', isFree: true },
            { name: 'National Insurance Academy (NIA Pune)', url: 'https://niapune.org.in', type: 'Insurance Academy', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'railway-career-roles',
    title: 'Indian Railways Officer / Technical Manager (IRMS / RRB NTPC)',
    description: 'Manages train operations, track maintenance, signalling systems, locomotive power rolling stock, station master administration, and passenger commercial traffic across the world\'s 4th largest railway network under the Ministry of Railways.',
    educationRequirements: 'B.Tech/B.E. for Engineering cadres (via UPSC IRMS / GATE), or Bachelor\'s degree in any discipline for Traffic, Accounts, and Commercial cadres (via UPSC CSE or RRB NTPC Non-Technical Popular Categories).',
    educationPathways: [
      'Indian Railway Management Service (IRMS via UPSC CSE / ESE) for Group A Gazetted Officers',
      'RRB NTPC (Railway Recruitment Board Non-Technical) for Station Master, Goods Guard, and Commercial Apprentice',
      'RRB Senior Section Engineer (SSE) / Junior Engineer (JE) for technical engineering cadres'
    ],
    eligibilityRequirements: 'Bachelor\'s degree in Engineering (for technical cadres) or any Bachelor\'s degree (for commercial/traffic cadres). Age between 18 and 33 years. Strict compliance with Indian Railways medical fitness categories (A-1, A-2, A-3 for vision standards).',
    certificationsAndExams: [
      'UPSC Indian Railway Management Service (IRMS Examination)',
      'Railway Recruitment Board Combined CBT (RRB NTPC / RRB JE)',
      'Indian Railways Medical Fitness Category A-1 (6/6 Distance Vision without Glasses for Station Master/Drivers)'
    ],
    workEnvironment: 'Railway divisional headquarters, junction stations, centralized traffic control centers, locomotive maintenance sheds, and on-site track infrastructure nationwide.',
    marketDemand: 'Very High',
    jobOutlook: 'Massive recurring recruitment driven by Indian Railways modernisation (Vande Bharat trainsets, dedicated freight corridors - DFC, Kavach automatic train protection, high-speed rail).',
    salaryRange: { min: 450000, max: 1800000, currency: 'INR', source: '7th CPC Railway Services Pay Matrix (Level 6 to Level 10), Ministry of Railways Gazette' },
    salarySource: '7th CPC Railway Services Pay Matrix (Level 6 to Level 10), Ministry of Railways Gazette',
    salaryByExperience: {
      entryLevel: { min: 450000, max: 800000, label: 'Station Master / Junior Engineer / ASO (Level 6–7) (0–3 yrs)' },
      earlyCareer: { min: 800000, max: 1300000, label: 'Assistant Divisional Officer / SSE (Level 8–10) (4–8 yrs)' },
      experienced: { min: 1300000, max: 2400000, label: 'Divisional Railway Manager (DRM) / Sr DOM (Level 11–14) (9–20+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Group A IRMS Officers enter at 7th CPC Level 10 (Basic ₹56,100, gross ~₹80,000–95,000/month plus railway housing, medical coverage in railway hospitals, and complimentary AC first-class railway passes). Station Masters (Level 6) earn ₹55,000–70,000/month with running allowances.'
    },
    careerProgression: [
      'Station Master / Junior Engineer / Assistant Operations Manager',
      'Divisional Operations Manager (DOM) / Senior Section Engineer',
      'Senior Divisional Operations Manager (Sr. DOM) / Executive Engineer',
      'Divisional Railway Manager (DRM) / Chief Operations Manager (COM)',
      'General Manager (Zonal Railway) / Chairman & CEO, Railway Board'
    ],
    employmentSectors: {
      government: 'Indian Railways (16 Zonal Railways, Production Units: ICF, RCF, CLW), Dedicated Freight Corridor Corporation (DFCCIL), Rail Vikas Nigam Limited (RVNL), IRCTC, Metro Rail Corporations',
      privateSector: 'Statutory central public railway employment with lifetime passes, housing, and railway healthcare infrastructure'
    },
    timelineOverview: {
      totalEstimatedDuration: '3.5–4.5 Years (3–4 Years Undergrad + 6–12 Months competitive RRB/UPSC preparation)',
      educationDuration: '3–4 Years (Degree)',
      prepDuration: '6–12 Months focused preparation for Computer-Based Tests (CBT-1 & CBT-2)',
      practicalTrainingDuration: '1 Year induction training at National Academy of Indian Railways (NAIR Vadodara) or Zonal Railway Training Institutes (ZRTI)',
      jobSearchDuration: 'Direct appointment upon publication of RRB / UPSC allotment list',
      overlapNotes: 'Computer-based aptitude training can be prepared during final college semesters.',
      confidenceNote: 'Medical eye fitness (Category A-1 / A-2 requiring strict 6/6 distant vision and normal color vision) is strictly non-negotiable for Station Master and Loco Pilot cadres.'
    },
    sources: [
      { title: 'Ministry of Railways Official Recruitment Portal', url: 'https://indianrailways.gov.in', sourceAuthority: 'Ministry of Railways', verifiedDate: '2024-10-14' },
      { title: 'National Academy of Indian Railways (NAIR Vadodara)', url: 'https://nair.indianrailways.gov.in', sourceAuthority: 'NAIR India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Indian Railways Officer (IRMS / RRB) Career Roadmap',
      description: 'Railway career pathway: General awareness, mathematical aptitude, computer-based testing (CBT-1 & CBT-2), Category A-1 medical eye fitness, and ZRTI/NAIR operational training.',
      totalEstimatedDuration: '4 Years',
      durationBreakdown: 'Bachelor\'s Degree in Engineering or Sciences: 3–4 Years | RRB NTPC / IRMS Examination Preparation: 6–9 Months | Medical Fitness Verification & Training: 1 Year',
      overlapNotes: 'Medical visual checkup should be verified before investing in preparation for operational cadres.',
      steps: [
        {
          stepNumber: 1,
          title: 'Mathematics, Reasoning & Railway General Awareness',
          stageType: 'education',
          duration: '6 Months',
          description: 'Master quantitative aptitude, analytical reasoning, and general science (NCERT Physics, Chemistry, Biology up to 10th standard), alongside railway organizational history.',
          topics: ['Arithmetic & Number Systems', 'General Intelligence and Spatial Reasoning', 'General Science NCERT (Physics, Chemistry, Life Sciences)', 'Indian Railways Infrastructure & Modern Technology'],
          skillsToAcquire: ['High-Speed Arithmetic Problem Solving', 'Scientific Fact Retention', 'Speed and Accuracy under Negative Marking'],
          activities: ['Solve past 10 years RRB NTPC / Group D question papers on online simulator', 'Verify personal vision fitness against Indian Railways Medical Manual (IRMM) standards'],
          completionCriteria: 'Consistently score > 80% on online mock tests.',
          dependencies: 'Graduation in relevant discipline',
          resources: [
            { name: 'Indian Railway Medical Manual (IRMM) Standards', url: 'https://indianrailways.gov.in', type: 'Government Regulations', isFree: true },
            { name: 'Railway Recruitment Control Board Notifications', url: 'https://rrcb.gov.in', type: 'Official Portal', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'RRB CBT-1 & CBT-2 Computer-Based Examinations',
          stageType: 'certification',
          duration: '3–6 Months',
          description: 'Clear multi-stage computer-based tests: CBT-1 (Screening Test) and CBT-2 (Merit Selection Test testing General Awareness, Mathematics, and General Intelligence).',
          topics: ['CBT-1 100 Questions in 90 Minutes', 'CBT-2 Advanced 120 Questions in 90 Minutes', 'Current Affairs and Indian Railway Operations Schemes'],
          skillsToAcquire: ['Screen-Based Time Management', 'High-Accuracy Question Selection'],
          activities: ['Attempt 40 full-length CBT mock tests replicating the official RRB testing console interface', 'Score in the top 1% percentile to secure preference for Station Master or Commercial Apprentice'],
          completionCriteria: 'Clear CBT-1 and CBT-2 cut-off marks in the official RRB merit list.',
          dependencies: 'Registration and document verification eligibility',
          resources: [
            { name: 'RRB Official Mock Test Interface', url: 'https://rrcb.gov.in', type: 'Official Simulator', isFree: true },
            { name: 'Fastrack Objective Arithmetic by Rajesh Verma', url: 'https://www.arihantbooks.com', type: 'Practice Book', isFree: false }
          ]
        },
        {
          stepNumber: 3,
          title: 'Computer-Based Aptitude Test (CBAT) & Strict Medical Examination',
          stageType: 'certification',
          duration: '2–3 Months',
          description: 'Pass the mandatory Computer-Based Aptitude Test (CBAT / Psycho Test for Station Master) evaluating vigilance, intelligence, and spatial scanning, followed by rigorous A-1/A-2 medical examination.',
          topics: ['Intelligence Battery Test & Selective Attention Test', 'Spatial Scanning & Following Directions Test', 'Personality and Speed Assessment Battery', 'Category A-1 / A-2 Vision Testing (Distant Vision 6/6 without glasses, Color Vision)'],
          skillsToAcquire: ['High Spatial Scanning Speed', 'Sustained Concentration without Eye Fatigue', 'Rapid Visual Decision Making'],
          activities: ['Practice 50+ CBAT psychological battery sets on designated psychometric testing platforms', 'Undergo full medical eye examination by Railway Medical Board'],
          completionCriteria: 'T-score > 42 in each battery of CBAT; Fitness certificate issued for Category A-1 or A-2.',
          dependencies: 'Clearing CBT-2 Examination',
          resources: [
            { name: 'RDSO Psycho-Technical Directorate Sample Batteries', url: 'https://rdso.indianrailways.gov.in', type: 'Official Guidelines', isFree: true },
            { name: 'Railway Recruitment Board Medical Categories Guide', url: 'https://indianrailways.gov.in', type: 'Government Manual', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Zonal Railway Training Institute (ZRTI) Induction & Branch Posting',
          stageType: 'practical_experience',
          duration: '6–12 Months',
          description: 'Complete 6-9 months paid residential training at a Zonal Railway Training Institute (ZRTI) or NAIR Vadodara, mastering General & Subsidiary Rules (G&SR), block working, signalling, and station operation.',
          topics: ['General and Subsidiary Rules (G&SR Book)', 'Absolute Block System & Automatic Block Signalling', 'Electronic Interlocking (EI) & Route Relay Interlocking (RRI)', 'Emergency Train Working & Accident Relief Train (ART) Protocols'],
          skillsToAcquire: ['Panel Interlocking Station Operation', 'Issuing Train Authority and Caution Orders', 'Railway Accident and Disaster Management Response'],
          activities: ['Operate simulated electronic interlocking railway station control panels for 200+ hours', 'Complete on-duty line attachment at a major junction station under senior Station Superintendent'],
          completionCriteria: 'Clear G&SR competency examination; official appointment as Station Master or Railway Officer.',
          dependencies: 'Medical fitness clearance and merit selection',
          resources: [
            { name: 'National Academy of Indian Railways (NAIR)', url: 'https://nair.indianrailways.gov.in', type: 'National Academy', isFree: true },
            { name: 'Indian Railways General & Subsidiary Rules (G&SR)', url: 'https://indianrailways.gov.in', type: 'Government Rulebook', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'defence-officer',
    title: 'Defence Officer (Indian Army / Navy / Air Force)',
    description: 'Commands military platoons, naval warships, fighter aircraft squadrons, and combat logistics units in the Indian Armed Forces. Defends national territorial sovereignty, leads tactical battlefield operations, and oversees humanitarian disaster relief missions.',
    educationRequirements: '10+2 with Physics and Mathematics (for Navy/Air Force via NDA) or Graduation in any discipline (for Army/Navy/Air Force via CDS / AFCAT). Mandatory clearance of the written competitive examination and the 5-day Services Selection Board (SSB) Interview.',
    educationPathways: [
      'National Defence Academy (NDA Khadakwasla - 3 years degree + 1 year service academy) post 10+2',
      'Combined Defence Services (CDS via UPSC) post-Graduation -> IMA Dehradun / INA Ezhimala / AFA Dundigal / OTA Chennai',
      'Air Force Common Admission Test (AFCAT) for Flying, Technical, and Ground Duty branches',
      'Technical Entry Scheme (TES post 10+2 via JEE Main) / University Entry Scheme (UES post B.Tech)'
    ],
    eligibilityRequirements: 'Unmarried Indian citizen. 10+2 (for NDA) or Graduation (for CDS/AFCAT). Age between 16.5–19.5 (NDA) or 19–24 (CDS/AFCAT). Strict military physical endurance and medical standards.',
    certificationsAndExams: [
      'UPSC NDA & NA Examination / UPSC CDS Examination',
      'AFCAT (Air Force Common Admission Test)',
      '5-Day Services Selection Board (SSB) Interview (Psychological, GTO, and Personal Interview)',
      'Special Medical Board (SMB) Military Fitness'
    ],
    workEnvironment: 'Military garrisons, high-altitude border outposts (Siachen, Ladakh, Northeast), naval warships at sea, and supersonic fighter airbases across India.',
    marketDemand: 'Very High',
    jobOutlook: 'One of India\'s most revered and honored career callings; offers unmatched leadership responsibility, supreme national pride, and permanent commissioned officer status.',
    salaryRange: { min: 850000, max: 2800000, currency: 'INR', source: '7th CPC Defence Services Pay Matrix, Military Service Pay (MSP) Gazette' },
    salarySource: '7th CPC Defence Services Pay Matrix, Military Service Pay (MSP) Gazette',
    salaryByExperience: {
      entryLevel: { min: 850000, max: 1300000, label: 'Lieutenant / Sub Lieutenant / Flying Officer (Level 10) (0–2 yrs)' },
      earlyCareer: { min: 1300000, max: 1900000, label: 'Captain / Major (Level 11–12) (3–8 yrs)' },
      experienced: { min: 1900000, max: 3200000, label: 'Lt Colonel / Colonel / Brigadier / General (Level 13–15) (9–25+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Commissioned officers enter at 7th CPC Level 10 (Basic ₹56,100 + Military Service Pay MSP ₹15,500/month, resulting in starting gross pay of ~₹90,000–1,15,000/month plus free military accommodation, defense canteen facilities, mess allowances, and high-altitude risk allowances).'
    },
    careerProgression: [
      'Lieutenant / Sub-Lieutenant / Flying Officer',
      'Captain / Lieutenant / Flight Lieutenant',
      'Major / Lt Commander / Squadron Leader',
      'Lt Colonel / Commander / Wing Commander',
      'Colonel / Captain (Navy) / Group Captain -> Brigadier -> General / Chief of Staff'
    ],
    employmentSectors: {
      government: 'Indian Army, Indian Navy, Indian Air Force, Indian Coast Guard, Strategic Forces Command, Defense Ministry Tri-Services Commands',
      privateSector: 'Post-retirement options include corporate security management, commercial airline piloting (for ex-Air Force pilots), and defense aerospace consultancies'
    },
    timelineOverview: {
      totalEstimatedDuration: '4 Years (NDA 3 Yrs + Service Academy 1 Yr) or 1–1.5 Years post-graduation (IMA/AFA/INA)',
      educationDuration: '3 Years (B.A./B.Sc/B.Tech at NDA) or Pre-existing Graduation',
      prepDuration: '6–12 Months written exam preparation and physical fitness development',
      practicalTrainingDuration: '1–1.5 Years intensive military tactical and weapons training at IMA Dehradun / AFA Dundigal / INA Ezhimala',
      jobSearchDuration: 'Direct commissioning upon successful passing out parade (POP)',
      overlapNotes: 'Physical stamina training (running 5km, push-ups, pull-ups) must be developed daily alongside written study.',
      confidenceNote: 'SSB interview evaluates 15 Officer Like Qualities (OLQs); rote coaching cannot replace genuine character, integrity, courage, and team leadership.'
    },
    sources: [
      { title: 'Join Indian Army Official Recruitment Portal', url: 'https://joinindianarmy.nic.in', sourceAuthority: 'Ministry of Defence India', verifiedDate: '2024-10-14' },
      { title: 'Join Indian Air Force (AFCAT Portal)', url: 'https://afcat.cdac.in', sourceAuthority: 'Indian Air Force', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Defence Officer Career Roadmap',
      description: 'Military leadership journey: NDA/CDS written examination, 5-day SSB interview (Screening, Psychological Tests, GTO Obstacles, Conference), and military academy officer training.',
      totalEstimatedDuration: '4–4.5 Years',
      durationBreakdown: 'Written Exam (NDA/CDS) & Physical Fitness: 6–12 Months | 5-Day SSB Interview & Medicals: 3–6 Months | Military Academy Officer Training: 1–3 Years | Commissioning Parade: Induction',
      overlapNotes: 'Physical conditioning (running, chin-ups, obstacle negotiation) must proceed daily.',
      steps: [
        {
          stepNumber: 1,
          title: 'Written Examination (UPSC NDA / CDS / AFCAT)',
          stageType: 'education',
          duration: '6 Months',
          description: 'Master Mathematics (Algebra, Trigonometry, Calculus for NDA/CDS) and General Ability Test (English, Physics, Chemistry, General Science, History, Geography, Current Affairs).',
          topics: ['Higher Secondary Mathematics (Calculus, Probability, Vectors, Matrices)', 'English Grammar, Synonyms, Antonyms, and Idioms', 'General Science Fundamentals (Physics, Chemistry, Biology)', 'Current National and International Defense Affairs'],
          skillsToAcquire: ['High-Speed Mathematics Problem Solving', 'Strong General Knowledge and Geopolitics', 'Physical Running Stamina (2.4 km in 10 minutes)'],
          activities: ['Solve past 10 years UPSC NDA / CDS question papers under strict timed conditions', 'Run 5 kilometers daily and achieve 10+ strict overhand pull-ups'],
          completionCriteria: 'Clear UPSC NDA / CDS written examination cutoff marks.',
          dependencies: '10+2 with PCM (for Navy/AF) or Graduation (for CDS)',
          resources: [
            { name: 'UPSC CDS Previous Year Papers', url: 'https://upsc.gov.in', type: 'Official Papers', isFree: true },
            { name: 'Pathfinder for NDA & NA by Arihant', url: 'https://www.arihantbooks.com', type: 'Study Guide', isFree: false }
          ]
        },
        {
          stepNumber: 2,
          title: '5-Day Services Selection Board (SSB) Interview',
          stageType: 'certification',
          duration: '3–6 Months',
          description: 'Crack the rigorous 5-day SSB interview assessing 15 Officer Like Qualities (OLQs): Stage-I Screening (OIR & PPDT), Stage-II Psychological Tests (TAT, WAT, SRT, SDT), Group Testing Officer (GTO) Outdoor Tasks, and Personal Interview.',
          topics: ['Picture Perception and Discussion Test (PPDT)', 'Thematic Apperception Test (TAT) & Word Association Test (WAT)', 'Situation Reaction Test (SRT) & Self-Description Test (SDT)', 'GTO Ground Tasks (PGT, HGT, Command Task, Individual Obstacles)'],
          skillsToAcquire: ['Story Narration and Group Consensus Building', 'Outdoor Team Leadership on Obstacle Courses', 'Emotional Poise and Integrity during Interview'],
          activities: ['Practice writing positive, action-oriented TAT stories for 100+ ambiguous pictures', 'Lead peer groups in solving wooden plank and rope outdoor obstacle challenges'],
          completionCriteria: 'Recommendation by the Services Selection Board conference panel.',
          dependencies: 'Clearing UPSC Written Examination',
          resources: [
            { name: 'Join Indian Army SSB Overview & Centers', url: 'https://joinindianarmy.nic.in', type: 'Official Guidelines', isFree: true },
            { name: 'My City My Pride SSB Preparation Resources', url: 'https://ssbcrack.com', type: 'Community Portal', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Special Medical Board (SMB) & Merit List Allocation',
          stageType: 'certification',
          duration: '2–3 Months',
          description: 'Undergo comprehensive military medical examination at a military hospital (evaluating spinal X-rays, ENT, surgical scars, eyesight, and dental points); secure position in All-India merit list.',
          topics: ['Military Medical Examination Standards', 'Eyesight Standards (6/6 for Flying Branch, refractive error limits)', 'Dental Points System (Minimum 14 points required)'],
          skillsToAcquire: ['Physical Health Maintenance', 'Preventing Sports Injuries during Medical Review'],
          activities: ['Undergo pre-medical screening at civilian diagnostic center to address minor correctable issues', 'Await final All-India merit list published by Ministry of Defence'],
          completionCriteria: 'Declared Fit by Special Medical Board / Appeal Medical Board; receiving joining letter.',
          dependencies: 'SSB Board Recommendation',
          resources: [
            { name: 'Military Medical Standards Gazette', url: 'https://joinindianarmy.nic.in', type: 'Official Gazette', isFree: true },
            { name: 'UPSC Final Merit List Announcements', url: 'https://upsc.gov.in', type: 'Official Portal', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Military Academy Training & Passing Out Parade (POP)',
          stageType: 'practical_experience',
          duration: '1–3 Years',
          description: 'Undergo transformative military training at National Defence Academy (NDA), Indian Military Academy (IMA Dehradun), Air Force Academy (AFA), or Indian Naval Academy (INA); pass out as a Commissioned Officer.',
          topics: ['Military Tactics, Map Reading & Jungle Warfare', 'Small Arms Weapon Handling (Rifles, Pistols, LMGs)', 'Physical Fitness, Swimming & Drill Parades', 'Military Law, Ethics, and Officer Traditions'],
          skillsToAcquire: ['Tactical Battlefield Troop Command', 'Exceptional Physical Courage under Exhaustion', 'Uncompromising Integrity and Comradeship'],
          activities: ['Complete 40-kilometer route marches carrying full 20kg battle-load equipment', 'Step across the "Antim Pag" (Final Step) during the Passing Out Parade and take the military oath'],
          completionCriteria: 'Commissioned as Lieutenant / Sub-Lieutenant / Flying Officer by the President of India.',
          dependencies: 'Merit list ranking and medical fitness',
          resources: [
            { name: 'Indian Military Academy (IMA Dehradun)', url: 'https://indianarmy.nic.in', type: 'Military Academy', isFree: true },
            { name: 'Air Force Academy (AFA Dundigal)', url: 'https://indianairforce.nic.in', type: 'Military Academy', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'public-sector-undertaking-engineer',
    title: 'Public Sector Undertaking (PSU) Executive Engineer',
    description: 'Directs plant operations, power generation, oil & gas exploration, electrical grid dispatch, structural fabrication, and mega-capital infrastructure projects across Indian Maharatna and Navratna Public Sector Undertakings (IOCL, ONGC, NTPC, BHEL, GAIL, SAIL, PowerGrid).',
    educationRequirements: 'B.Tech / B.E. in Mechanical, Electrical, Civil, Chemical, Electronics, or Instrumentation Engineering via JEE Main/State CET + exceptional All India Rank (AIR < 200–500) in GATE (Graduate Aptitude Test in Engineering).',
    educationPathways: [
      'B.Tech / B.E. in core engineering discipline -> High GATE score (All India Rank top 300) -> Direct recruitment as Executive Trainee',
      'Campus Recruitment from premier institutes (IITs/NITs) by Maharatna PSUs',
      'Independent PSU Written Computer-Based Test (e.g., BARC, ISRO, BEL, HAL standalone exams)'
    ],
    eligibilityRequirements: 'First class B.Tech/B.E. degree with minimum 60–65% aggregate. Valid GATE score card in the corresponding engineering stream. Maximum age typically 26–28 years.',
    certificationsAndExams: [
      'GATE (Graduate Aptitude Test in Engineering - IITs/IISc)',
      'PSU Personal Interview & Group Discussion / Group Task',
      'Industrial Safety & Boiler Operations Certification (post-induction)'
    ],
    workEnvironment: 'Refineries (IOCL Panipat, Mathura), thermal power stations (NTPC Singrauli), offshore drilling rigs (ONGC Bombay High), heavy engineering plants (BHEL Haridwar), and regional sub-stations.',
    marketDemand: 'Very High',
    jobOutlook: 'The premier corporate engineering career in India; offers supreme job security, attractive pay packages, executive housing townships, and massive infrastructure scale.',
    salaryRange: { min: 900000, max: 2400000, currency: 'INR', source: 'DPE (Department of Public Enterprises) Pay Scales, IOCL/NTPC Official Notifications' },
    salarySource: 'DPE (Department of Public Enterprises) Pay Scales, IOCL/NTPC Official Notifications',
    salaryByExperience: {
      entryLevel: { min: 900000, max: 1500000, label: 'Executive Trainee / Assistant Manager (E-2) (0–2 yrs)' },
      earlyCareer: { min: 1500000, max: 2200000, label: 'Deputy Manager / Manager (E-3/E-4) (3–6 yrs)' },
      experienced: { min: 2200000, max: 3500000, label: 'Senior Manager / Chief Engineer / DGM (E-5/E-6) (7–15+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Maharatna PSUs (ONGC, IOCL, NTPC, PowerGrid) offer starting Cost to Company (CTC) of ₹14–18 LPA for fresh Executive Trainees, including subsidized executive township housing, medical for entire family, performance-related pay (PRP), and superannuation pension.'
    },
    careerProgression: [
      'Graduate Engineer Trainee (GET) / Executive Trainee (E-1/E-2)',
      'Assistant Manager / Plant Engineer (E-2)',
      'Deputy Manager / Senior Plant Engineer (E-3)',
      'Manager / Senior Manager (E-4/E-5)',
      'General Manager / Executive Director / Director of Technical Operations'
    ],
    employmentSectors: {
      government: 'Maharatna PSUs (IOCL, ONGC, NTPC, BHEL, GAIL, SAIL, PowerGrid, BPCL, HPCL, Coal India), Navratna PSUs (BEL, HAL, NBCC, NMDC, Power Finance Corporation)',
      privateSector: 'Heavy industrial engineering consultancies and private energy giants (Reliance Industries, Adani Power, Tata Power) hiring lateral PSU talent'
    },
    timelineOverview: {
      totalEstimatedDuration: '4.5 Years (4 Years B.Tech + 6 Months focused GATE test series)',
      educationDuration: '4 Years (8 Semesters B.Tech)',
      prepDuration: '8–12 Months intensive technical problem-solving for GATE',
      practicalTrainingDuration: '1 Year paid executive training in power plants or refineries',
      jobSearchDuration: 'Immediate recruitment upon GATE score release in March/April',
      overlapNotes: 'GATE preparation is executed in parallel with 6th, 7th, and 8th semester engineering coursework.',
      confidenceNote: 'Securing an All India Rank below 200 in GATE in core branches (ME, EE, CE) almost guarantees recruitment calls from multiple Maharatna PSUs.'
    },
    sources: [
      { title: 'Graduate Aptitude Test in Engineering (GATE) Official Portal', url: 'https://gate.iitk.ac.in', sourceAuthority: 'IITs / IISc', verifiedDate: '2024-10-14' },
      { title: 'Department of Public Enterprises (DPE) Guidelines', url: 'https://dpe.gov.in', sourceAuthority: 'Ministry of Heavy Industries India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'PSU Executive Engineer (GATE Track) Career Roadmap',
      description: 'Public sector engineering pathway: engineering core disciplines, GATE examination top rank, PSU Group Discussion/Personal Interview, executive township training, and plant operations management.',
      totalEstimatedDuration: '4.5 Years',
      durationBreakdown: 'Core Engineering Degree: 4 Years | GATE Intensive Preparation: 1 Year (Concurrent with College) | PSU Recruitment GD/PI: 3–4 Months | Executive Training: 1 Year',
      overlapNotes: 'GATE test series and conceptual revisions take place during final year of B.Tech.',
      steps: [
        {
          stepNumber: 1,
          title: 'Core Engineering Concepts & GATE Syllabus Coverage',
          stageType: 'education',
          duration: '1 Year (3rd Year B.Tech)',
          description: 'Master core discipline textbooks, engineering mathematics (calculus, linear algebra, differential equations), and general aptitude aligned with the official GATE syllabus.',
          topics: ['Engineering Mathematics & Numerical Methods', 'Core Branch Sciences (Thermodynamics, Power Systems, Structural Analysis)', 'General Aptitude (Quantitative, Verbal, Spatial)', 'Previous Year GATE Question Bank Solutions'],
          skillsToAcquire: ['High-Speed Formula Application', 'Virtual Scientific Calculator Navigation', 'Rigorous Numerical Precision without Negative Marks'],
          activities: ['Solve past 15 years GATE questions for every completed academic subject chapter', 'Maintain an error logbook containing 300+ tricky numerical calculation mistakes'],
          completionCriteria: 'Complete 100% syllabus coverage of all core GATE technical subjects.',
          dependencies: 'Enrolled in 3rd/4th year B.Tech in core engineering stream',
          resources: [
            { name: 'NPTEL Core Engineering Lectures (IIT Madras/Bombay)', url: 'https://nptel.ac.in', type: 'Course', isFree: true },
            { name: 'GATE Virtual Calculator Simulator', url: 'https://gate.iitk.ac.in', type: 'Official Tool', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Full-Length GATE Test Series & Rank Optimization',
          stageType: 'certification',
          duration: '6 Months (Final Year B.Tech)',
          description: 'Attempt 30+ full-length computer-based GATE mock test series, analyze accuracy percentiles, eliminate calculation errors, and secure an All India Rank in the top 300.',
          topics: ['Full-Length 3-Hour GATE Simulations (65 Questions, 100 Marks)', 'Numerical Answer Type (NAT) Questions Practice', 'Time Division: Aptitude (15 mins) + Technical (150 mins) + Revision (15 mins)'],
          skillsToAcquire: ['Solving High-Difficulty NAT Questions without Options', 'Maintaining Score > 75 Marks in Competitive Branches'],
          activities: ['Appear for national-level mock test series with 50,000+ competitors', 'Achieve an All India Rank (AIR < 200) in the official GATE examination in February'],
          completionCriteria: 'GATE Scorecard with All India Rank qualifying for Maharatna PSU shortlisting.',
          dependencies: 'Completion of GATE core syllabus',
          resources: [
            { name: 'GATE Official Scorecard Portal', url: 'https://gate.iitk.ac.in', type: 'Official Portal', isFree: true },
            { name: 'Made Easy / ACE Engineering Academy GATE Test Series', url: 'https://www.madeeasy.in', type: 'Practice Platform', isFree: false }
          ]
        },
        {
          stepNumber: 3,
          title: 'PSU Application, Group Discussion & Technical Interview',
          stageType: 'practical_experience',
          duration: '3–4 Months Post-GATE',
          description: 'Apply against individual PSU recruitment notifications (IOCL, ONGC, NTPC, PowerGrid); participate in Group Discussions (GD), Group Tasks (GT), and Technical Personal Interviews.',
          topics: ['Technical Viva on B.Tech Major Project & Industrial Internships', 'Group Discussion on National Energy & Infrastructure Topics', 'Industrial Safety & Plant Ethics Scenarios'],
          skillsToAcquire: ['Clear Verbal Technical Explanations', 'Collaborative Group Discussion Leadership', 'Confidence under Stress Technical Panels'],
          activities: ['Participate in 5 mock GD/PI sessions with PSU alumni mentors', 'Clear technical interview panel consisting of Chief General Managers and Executive Directors'],
          completionCriteria: 'Issuance of offer letter for Executive Trainee position in a Maharatna PSU.',
          dependencies: 'Shortlisting based on GATE All India Rank',
          resources: [
            { name: 'IOCL Careers Portal', url: 'https://iocl.com/careers', type: 'Company Portal', isFree: true },
            { name: 'NTPC Careers Portal', url: 'https://www.ntpc.co.in/careers', type: 'Company Portal', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Executive Trainee Induction & Plant Operations Commissioning',
          stageType: 'practical_experience',
          duration: '1 Year (Training Period)',
          description: 'Undergo 1-year structured executive training in thermal power plants, petroleum refineries, or high-voltage sub-stations; receive confirmation as permanent Assistant Manager.',
          topics: ['Plant Industrial Safety Protocols (OSHA / Factories Act)', 'SCADA and Distributed Control System (DCS) Operation', 'Preventive Maintenance Schedules & Overhauling'],
          skillsToAcquire: ['Supervising Frontline Plant Technicians', 'Emergency Shutdown and Blackout Restoration Protocols', 'Industrial Boiler / Turbine Inspection'],
          activities: ['Operate DCS control room consoles during commercial refinery/power generation runs', 'Complete plant technical training project and present findings to Executive Director'],
          completionCriteria: 'Successful confirmation as regular Assistant Manager (E-2 grade) with full executive pay scale.',
          dependencies: 'Selection as Executive Trainee',
          resources: [
            { name: 'National Power Training Institute (NPTI)', url: 'https://npti.gov.in', type: 'Training Institute', isFree: true },
            { name: 'ONGC Academy Dehradun', url: 'https://www.ongcindia.com', type: 'Corporate Academy', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'government-research-scientist',
    title: 'Government Research Scientist (ISRO / DRDO / BARC)',
    description: 'Directs strategic national science and technology missions in satellite launch vehicles, defense missile telemetry, atomic energy reactors, and defense cybersecurity across premier Indian government scientific agencies (ISRO, DRDO, BARC, DAE).',
    educationRequirements: 'B.Tech/B.E. or M.Tech in Engineering (Aerospace, Mechanical, ECE, CS) via GATE or ISRO ICRB / BARC OCES; or M.Sc / Ph.D. in Basic Sciences via CSIR-NET JRF. Holds central scientific officer appointment under the 7th CPC.',
    educationPathways: [
      'B.Tech from IIST (Indian Institute of Space Science and Technology) with direct ISRO absorption',
      'B.Tech / M.Tech -> ISRO Centralised Recruitment Board (ICRB) Examination',
      'BARC OCES / DGFS (Bhabha Atomic Research Centre Training School via GATE score)',
      'DRDO Scientist \'B\' recruitment via RAC (Recruitment and Assessment Centre)'
    ],
    eligibilityRequirements: 'Indian citizen. First-class Bachelor\'s or Master\'s degree with minimum 65% aggregate. Qualifying rank in GATE or agency-specific computer-based examinations.',
    certificationsAndExams: [
      'ISRO ICRB Scientist/Engineer \'SC\' Examination',
      'BARC OCES / DGFS Training School Examination',
      'DRDO RAC Scientist Recruitment Assessment'
    ],
    workEnvironment: 'Space research centers (VSSC Thiruvananthapuram, URSC Bengaluru, SDSC Sriharikota), defense laboratories (DRDL Hyderabad, ADE Bengaluru), and atomic research complexes (BARC Trombay).',
    marketDemand: 'Moderate to High',
    jobOutlook: 'Highly prestigious national scientific calling; strong recruitment expansion with India\'s Chandrayaan/Gaganyaan space missions, indigenous defense production, and civilian nuclear energy.',
    salaryRange: { min: 850000, max: 2400000, currency: 'INR', source: '7th CPC Scientific Officer Pay Matrix (Scientist SC / Scientist B), ISRO/DRDO Notifications' },
    salarySource: '7th CPC Scientific Officer Pay Matrix (Scientist SC / Scientist B), ISRO/DRDO Notifications',
    salaryByExperience: {
      entryLevel: { min: 850000, max: 1300000, label: 'Scientist/Engineer \'SC\' / Scientist \'B\' (Level 10) (0–3 yrs)' },
      earlyCareer: { min: 1300000, max: 1900000, label: 'Scientist/Engineer \'SD\' / Scientist \'C\' (Level 11) (4–8 yrs)' },
      experienced: { min: 1900000, max: 3000000, label: 'Scientist/Engineer \'SE\'/\'SF\' / Division Head (Level 12–13) (9–20+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Scientist/Engineer \'SC\' enters at 7th Pay Commission Level 10 (Basic ₹56,100, gross pay ~₹80,000–95,000/month plus subsidized departmental quarters in space/defense townships, medical coverage, and professional research update allowances).'
    },
    careerProgression: [
      'Scientist/Engineer \'SC\' (Entry Level)',
      'Scientist/Engineer \'SD\' (Senior Project Engineer)',
      'Scientist/Engineer \'SE\' / \'SF\' (Project Manager / Sub-System Lead)',
      'Scientist/Engineer \'SG\' / \'G\' (Associate Director / Mission Director)',
      'Outstanding Scientist / Distinguished Scientist / Center Director'
    ],
    employmentSectors: {
      government: 'Indian Space Research Organisation (ISRO), Defence Research and Development Organisation (DRDO), Bhabha Atomic Research Centre (BARC), Department of Atomic Energy (DAE)',
      privateSector: 'Statutory central scientific appointment involving national classified security research'
    },
    timelineOverview: {
      totalEstimatedDuration: '4.5–5 Years (4 Years B.Tech + 6 Months ICRB / RAC preparation)',
      educationDuration: '4 Years (B.Tech Degree) or 2 Years (M.Tech via GATE)',
      prepDuration: '6–12 Months intensive technical problem-solving for ICRB / GATE / BARC exams',
      practicalTrainingDuration: '1 Year orientation training in BARC Training School or ISRO centers',
      jobSearchDuration: '3–6 Months recruitment notification cycle and technical interview defense',
      overlapNotes: 'IIST students maintaining CGPA > 7.5 are absorbed directly into ISRO without external written tests.',
      confidenceNote: 'Technical interviews for scientific officer posts are purely core concept-driven; candidates must be prepared to derive mathematical and physical principles on whiteboards.'
    },
    sources: [
      { title: 'ISRO Centralised Recruitment Board (ICRB) Official Portal', url: 'https://www.isro.gov.in/Careers.html', sourceAuthority: 'ISRO India', verifiedDate: '2024-10-14' },
      { title: 'BARC OCES/DGFS Official Portal', url: 'https://www.barconlineexam.com', sourceAuthority: 'Bhabha Atomic Research Centre', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Government Research Scientist (ISRO / BARC) Career Roadmap',
      description: 'Strategic science and engineering route: core discipline mastery, ISRO ICRB / BARC OCES exam, in-depth technical whiteboard interview, and space/atomic mission induction.',
      totalEstimatedDuration: '4.5 Years',
      durationBreakdown: 'B.Tech / M.Tech Engineering Foundations: 4 Years | ICRB / GATE Preparation: 1 Year (Concurrent) | Technical Interview Defense: 3 Months | BARC/ISRO Orientation Training: 1 Year',
      overlapNotes: 'ICRB preparation proceeds in parallel with the 7th and 8th semester engineering studies.',
      steps: [
        {
          stepNumber: 1,
          title: 'Core Technical Engineering Mastery',
          stageType: 'education',
          duration: '3–4 Years (Undergraduate)',
          description: 'Master core discipline theoretical principles (Mechanical, Electronics, Aerospace, or Computer Science) with emphasis on first-principles physics and mathematical derivations.',
          topics: ['Core Discipline Engineering Fundamentals', 'Control Systems, Thermodynamics, Fluid Dynamics, Signals', 'Mathematical Modeling & Physical Derivations'],
          skillsToAcquire: ['Whiteboard Mathematical Derivations', 'First-Principles Engineering Intuition', 'Scientific Analytical Reasoning'],
          activities: ['Solve past 10 years ISRO ICRB and GATE engineering question papers', 'Lead a student engineering satellite or rocketry payload project'],
          completionCriteria: 'First-class B.Tech degree with minimum 65% aggregate or 6.84/10 CGPA.',
          dependencies: '10+2 with PCM',
          resources: [
            { name: 'ISRO Previous Years Question Papers with Answer Keys', url: 'https://www.isro.gov.in/PreviousYearsQuestionPapers.html', type: 'Official Repository', isFree: true },
            { name: 'NPTEL Aerospace & Electronics Courses', url: 'https://nptel.ac.in', type: 'Course', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'ISRO ICRB or BARC OCES Competitive Examination Clearance',
          stageType: 'certification',
          duration: '6 Months',
          description: 'Clear the 80-question core technical written examination conducted by ISRO ICRB or BARC OCES testing core undergraduate engineering knowledge with high accuracy.',
          topics: ['Core Subject Written Test (80 Objective Questions in 120 Minutes)', 'Virtual Calculator Precision and Speed', 'Negative Marking Mitigation'],
          skillsToAcquire: ['Solving Rigorous Engineering Problems under Timed Conditions', 'Avoiding Common Traps in Concept MCQs'],
          activities: ['Attempt 25 timed ICRB mock examination sets', 'Secure score in top 1% percentile to be shortlisted for technical interview'],
          completionCriteria: 'Shortlisted for ISRO / BARC technical interview (typically 1:5 ratio of vacancies).',
          dependencies: 'B.Tech degree with minimum 65%',
          resources: [
            { name: 'BARC Online Exam Simulator', url: 'https://www.barconlineexam.com', type: 'Official Simulator', isFree: true },
            { name: 'ISRO ICRB Recruitment Notifications', url: 'https://www.isro.gov.in', type: 'Official Portal', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'In-Depth Technical Whiteboard Interview Defense',
          stageType: 'practical_experience',
          duration: '3 Months',
          description: 'Defend engineering mastery in a 45–60 minute technical interview before a panel of 7–9 Senior ISRO/BARC Scientists, deriving physical equations and designing sub-system solutions on whiteboards.',
          topics: ['Whiteboard Derivations of Governing Physical Equations', 'Real-World Space / Nuclear Mission Scenarios', 'B.Tech Major Capstone Project Rigorous Cross-Examination'],
          skillsToAcquire: ['Whiteboard Engineering Presentation Under Pressure', 'Admitting Unknowns with Scientific Honesty', 'Thinking Aloud through Unsolved Engineering Dilemmas'],
          activities: ['Conduct 5 mock whiteboard interviews with faculty and scientists', 'Derive Navier-Stokes, Maxwell\'s equations, or heat transfer equations without notes'],
          completionCriteria: 'Final selection recommendation by ISRO/BARC technical interview board.',
          dependencies: 'Clearing Written Examination',
          resources: [
            { name: 'ISRO Technical Interview Experiences Archive', url: 'https://www.isro.gov.in', type: 'Community Resource', isFree: true },
            { name: 'BARC Training School Interview Guidance', url: 'https://www.barc.gov.in', type: 'Official Portal', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Scientific Officer Appointment & Mission Induction',
          stageType: 'practical_experience',
          duration: '1 Year',
          description: 'Join premier space or atomic facility as Scientist/Engineer \'SC\'; complete orientation training and take charge of sub-system design for launch vehicles, satellites, or reactors.',
          topics: ['Space Mission Sub-System Architecture (Propulsion, Avionics, Structures)', 'Quality and Reliability Standards (ISRO PSS Norms)', 'Cleanroom Fabrication & Satellite Integration Protocols'],
          skillsToAcquire: ['Space-Grade Hardware Testing Protocols', 'Cleanroom Aseptic Integration', 'Mission Telemetry Anomaly Resolution'],
          activities: ['Participate in ground qualification tests of rocket engines or satellite transponders', 'Take active operational role in satellite launch campaign countdown at Sriharikota'],
          completionCriteria: 'Permanent confirmation as Scientist/Engineer \'SC\' in Indian Space / Atomic program.',
          dependencies: 'Final merit selection and medical fitness',
          resources: [
            { name: 'Vikram Sarabhai Space Centre (VSSC)', url: 'https://www.vssc.gov.in', type: 'Space Centre', isFree: true },
            { name: 'U R Rao Satellite Centre (URSC Bengaluru)', url: 'https://www.ursc.gov.in', type: 'Space Centre', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'statistical-officer',
    title: 'Statistical Officer (Indian Statistical Service / JSO)',
    description: 'Directs official statistical data collection, economic census surveys, national income accounting (GDP estimation), inflation indexing (CPI/WPI), and socio-economic evaluations under the Ministry of Statistics and Programme Implementation (MoSPI).',
    educationRequirements: 'Bachelor\'s / Master\'s degree in Statistics, Mathematical Statistics, or Applied Statistics. Recruited through UPSC Indian Statistical Service (ISS) examination or SSC CGL Junior Statistical Officer (JSO) exam.',
    educationPathways: [
      'B.Sc / M.Sc in Statistics -> UPSC Indian Statistical Service (ISS) Examination for Group A Central Service',
      'Bachelor\'s Degree with Statistics as a subject in all 3 years -> SSC CGL Junior Statistical Officer (JSO) Examination',
      'Reserve Bank of India (RBI Grade B - DSIM: Department of Statistics and Information Management)'
    ],
    eligibilityRequirements: 'Bachelor\'s degree with Statistics as one of the subjects (or Mathematics with minimum 60% in 10+2 for SSC JSO); or Master\'s degree in Statistics for UPSC ISS. Age between 18 and 32 years.',
    certificationsAndExams: [
      'UPSC Indian Statistical Service (ISS) Examination',
      'SSC CGL Junior Statistical Officer (Paper-II: Statistics)',
      'RBI Grade B (DSIM - Department of Statistics and Information Management)'
    ],
    workEnvironment: 'National Statistical Office (NSO / NSSO), Ministry of Statistics and Programme Implementation (MoSPI, New Delhi), regional statistical offices, and state economics directorates.',
    marketDemand: 'Moderate to High',
    jobOutlook: 'Steady and vital demand driven by national economic planning, data-driven policymaking, regular National Sample Surveys (NSS), and the establishment of the National Data Governance Framework.',
    salaryRange: { min: 500000, max: 1800000, currency: 'INR', source: '7th CPC Statistical Services Pay Matrix (Level 6 for JSO, Level 10 for ISS), MoSPI Gazette' },
    salarySource: '7th CPC Statistical Services Pay Matrix (Level 6 for JSO, Level 10 for ISS), MoSPI Gazette',
    salaryByExperience: {
      entryLevel: { min: 500000, max: 800000, label: 'Junior Statistical Officer (JSO - Level 6) (0–3 yrs)' },
      earlyCareer: { min: 800000, max: 1300000, label: 'Senior Statistical Officer / Assistant Director (Level 8–10) (4–8 yrs)' },
      experienced: { min: 1300000, max: 2400000, label: 'Deputy Director / Director / Chief Statistician (Level 11–14) (9–20+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'UPSC ISS Group A officers start at 7th CPC Level 10 (Basic ₹56,100, gross ~₹80,000–95,000/month). SSC CGL JSO officers enter at Level 6 (Basic ₹35,400, gross ~₹55,000–65,000/month plus central allowances).'
    },
    careerProgression: [
      'Junior Statistical Officer (JSO)',
      'Senior Statistical Officer (SSO)',
      'Assistant Director (ISS / MoSPI)',
      'Deputy Director / Joint Director (National Accounts)',
      'Director / Deputy Director General / Chief Statistician of India'
    ],
    employmentSectors: {
      government: 'Ministry of Statistics and Programme Implementation (MoSPI), National Sample Survey Office (NSSO), Central Statistics Office (CSO), Reserve Bank of India (DSIM), State Directorates of Economics and Statistics',
      privateSector: 'Statutory government statistical service with direct impact on national GDP, CPI inflation, and policy indicators'
    },
    timelineOverview: {
      totalEstimatedDuration: '3.5–4.5 Years (3 Years Undergrad + 6–12 Months competitive exam prep)',
      educationDuration: '3 Years (B.Sc Statistics) or 2 Years (M.Sc Statistics for ISS)',
      prepDuration: '6–12 Months focused preparation covering mathematical statistics and sampling theory',
      practicalTrainingDuration: '6 Months to 1 Year departmental training at National Statistical Systems Training Academy (NSSTA Greater Noida)',
      jobSearchDuration: 'Direct appointment upon clearing UPSC ISS or SSC CGL JSO merit list',
      overlapNotes: 'Statistical theory from university curriculum directly covers 75% of the UPSC ISS syllabus.',
      confidenceNote: 'Very few candidates graduate with pure Statistics degrees compared to general streams, giving qualified statistics graduates significantly higher probability of selection.'
    },
    sources: [
      { title: 'Ministry of Statistics and Programme Implementation (MoSPI)', url: 'https://www.mospi.gov.in', sourceAuthority: 'MoSPI India', verifiedDate: '2024-10-14' },
      { title: 'UPSC Indian Statistical Service (ISS) Notification', url: 'https://upsc.gov.in', sourceAuthority: 'UPSC India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Statistical Officer (ISS / JSO) Career Roadmap',
      description: 'Government statistical pathway: probability distributions, sampling theory, linear models, economic statistics, index numbers, UPSC ISS / SSC JSO exam clearance, and NSSTA academy training.',
      totalEstimatedDuration: '4 Years',
      durationBreakdown: 'B.Sc / M.Sc Statistics Degree: 3–4 Years | Statistical Competitive Exam Preparation: 6–9 Months | Examination & Allotment: 6 Months | NSSTA Training: 1 Year',
      overlapNotes: 'Sampling theory and survey methodology studies proceed alongside postgraduate coursework.',
      steps: [
        {
          stepNumber: 1,
          title: 'Probability Theory, Mathematical Statistics & Inference',
          stageType: 'education',
          duration: '1 Year',
          description: 'Master random variables, joint probability distributions, maximum likelihood estimation (MLE), unbiasedness, hypothesis testing (Neyman-Pearson lemma), and confidence intervals.',
          topics: ['Standard Probability Distributions (Normal, Binomial, Poisson, Chi-Square, t, F)', 'Estimation Theory (Unbiasedness, Consistency, Efficiency, Sufficiency)', 'Hypothesis Testing & Likelihood Ratio Tests', 'Non-Parametric Statistical Tests'],
          skillsToAcquire: ['Mathematical Proof Formulation in Statistics', 'Deriving Estimator Properties', 'Hypothesis Test Decision Framing'],
          activities: ['Derive maximum likelihood estimators for multi-parameter continuous distributions', 'Construct confidence intervals for difference of means under varying variance assumptions'],
          completionCriteria: 'Clear university advanced statistical theory examinations with > 65% aggregate.',
          dependencies: 'Undergraduate study in Statistics and Mathematics',
          resources: [
            { name: 'Fundamentals of Mathematical Statistics by Gupta & Kapoor', url: 'https://www.sultan-chand.com', type: 'Essential Textbook', isFree: false },
            { name: 'NPTEL Probability and Statistics (IIT Kharagpur)', url: 'https://nptel.ac.in', type: 'Course', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Sampling Techniques, Design of Experiments & Economic Statistics',
          stageType: 'skill_acquisition',
          duration: '1 Year',
          description: 'Master survey sampling designs (simple random, stratified, cluster, systematic, multi-stage), ANOVA, design of experiments (CRD, RBD, Latin Square), index numbers, and time series.',
          topics: ['Sampling Theory & Estimation of Population Mean/Variance', 'Design of Experiments (ANOVA, Orthogonal Contrasts)', 'Index Numbers (Laspeyres, Paasche, Fisher Ideal Index)', 'Time Series Decomposition & Trend Elimination'],
          skillsToAcquire: ['Designing Stratified Sampling Surveys', 'Calculating Consumer Price Index (CPI) Formulas', 'Time Series Forecasting in R / Python'],
          activities: ['Design an optimal stratified random sample survey calculating sample allocation for 10 strata', 'Compute and verify Laspeyres and Fisher index numbers using official national price data'],
          completionCriteria: 'Complete comprehensive sampling and economic statistics problem sets.',
          dependencies: 'Mathematical Statistics Foundations',
          resources: [
            { name: 'UPSC Indian Statistical Service (ISS) Official Syllabus', url: 'https://upsc.gov.in', type: 'Official Gazette', isFree: true },
            { name: 'Sampling Techniques by William G. Cochran', url: 'https://www.wiley.com', type: 'Classic Textbook', isFree: false }
          ]
        },
        {
          stepNumber: 3,
          title: 'UPSC ISS / SSC CGL JSO Examination Clearance',
          stageType: 'certification',
          duration: '6 Months',
          description: 'Clear the 4-paper statistical examination (General English, General Studies, Statistics-I objective, Statistics-II objective, Statistics-III descriptive, Statistics-IV specialized descriptive).',
          topics: ['UPSC ISS Papers I & II (Objective Statistics)', 'UPSC ISS Papers III & IV (Descriptive Sampling and Econometrics)', 'SSC CGL Tier-II Paper-II (100 Statistics MCQs)'],
          skillsToAcquire: ['High-Speed Formula Calculations', 'Rigorous Descriptive Statistical Proof Writing'],
          activities: ['Solve past 10 years UPSC ISS examination papers covering all 4 statistical sections', 'Score > 85% in SSC CGL Paper-II Statistics mock tests'],
          completionCriteria: 'Securing qualifying rank in the UPSC ISS or SSC CGL JSO final result list.',
          dependencies: 'Degree with Statistics specialization',
          resources: [
            { name: 'UPSC ISS Previous Year Question Papers with Answer Keys', url: 'https://upsc.gov.in', type: 'Official Papers', isFree: true },
            { name: 'MoSPI National Accounts Statistics Compendium', url: 'https://www.mospi.gov.in', type: 'Government Data', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'NSSTA Academy Induction & National Survey Administration',
          stageType: 'practical_experience',
          duration: '6–12 Months',
          description: 'Complete departmental training at National Statistical Systems Training Academy (NSSTA Greater Noida); take charge of field survey operations (NSS), CPI compilation, or national GDP estimation.',
          topics: ['National Sample Survey (NSS) Field Sampling Protocols', 'Compilation of Index of Industrial Production (IIP) and CPI', 'National Accounts Statistics & Gross State Domestic Product (GSDP)'],
          skillsToAcquire: ['Large-Scale Survey Data Validation and Imputation', 'Interpreting National Macroeconomic Indicators', 'Official Government Statistical Reporting'],
          activities: ['Supervise field data collection for socio-economic survey rounds across multiple districts', 'Prepare official analytical bulletin on quarterly employment trends or inflation indicators'],
          completionCriteria: 'Permanent appointment as Statistical Officer in Ministry of Statistics and Programme Implementation.',
          dependencies: 'Selection via UPSC ISS or SSC CGL',
          resources: [
            { name: 'National Statistical Systems Training Academy (NSSTA)', url: 'https://www.mospi.gov.in', type: 'Training Academy', isFree: true },
            { name: 'National Sample Survey Office (NSSO) Survey Methodology', url: 'https://www.mospi.gov.in', type: 'Government Methodology', isFree: true }
          ]
        }
      ]
    }
  }
];

module.exports = governmentPublicCareers;
