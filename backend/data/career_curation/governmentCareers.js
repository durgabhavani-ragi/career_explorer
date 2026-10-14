// Government & Public Sector Careers (9 Careers)
// All roadmaps contain practical job preparation, 1-6 months per step, months only, zero degree milestones
// Clear disclaimer that exam preparation time is distinct from official recruitment cycles and notification calendars

module.exports = [
  {
    slug: 'civil-services-officer',
    title: 'Civil Services Officer (IAS / IPS / IFS / IRS)',
    educationQualification: {
      minimumQualification: 'Bachelor degree in any discipline from a recognized University or institution recognized by the Government of India',
      preferredDegree: 'Graduation in Political Science, Economics, History, Public Administration, Law, or Engineering',
      requiredProfessionalDegreeOrLicense: 'Selection through UPSC Civil Services Examination (CSE) conducted annually by the Union Public Service Commission',
      mandatoryRequirements: [
        'Recognized undergraduate degree completed prior to Mains examination application (DPI/DAF)',
        'Qualifying through 3-tier UPSC examination process: Preliminary Examination (Objective), Main Examination (Written Descriptive), and Personality Test (Interview)',
        'Meeting medical standards and physical fitness standards (specific standards apply for IPS and Railway services)'
      ],
      preferredQualifications: [
        'Deep command over optional subject and contemporary public policy issues',
        'Strong bilingual reading and expression capability'
      ],
      eligibilityCriteria: [
        'Nationality: Indian citizen for IAS, IPS, and IFS (specific eligibility applies for other group A services)',
        'Age Limit: 21 to 32 years as on 1st August of examination year (relaxation up to 35 for OBC, 37 for SC/ST, and for PwD/Ex-servicemen)',
        'Number of Attempts: 6 for General, 9 for OBC, unlimited within age limit for SC/ST'
      ],
      regulatoryNotes: 'Recruitment is governed by the Department of Personnel and Training (DoPT) and conducted strictly under annual UPSC notifications. Preparation timelines reflect disciplined study phases and are distinct from UPSC’s multi-stage annual examination and cadre allotment cycle.'
    },
    roadmap: {
      totalDurationMonths: 6,
      totalDurationFormatted: '6 months',
      steps: [
        {
          stepNumber: 1,
          title: 'GS Foundation, NCERT Consolidation & Daily Current Affairs',
          durationMonths: 2,
          durationText: '2 months',
          category: 'fundamentals',
          description: 'Build rigorous foundation across Indian Polity, Modern History, Geography, and Economy using standard texts and PIB/The Hindu analysis.',
          tasks: [
            'Systematically study standard reference books (M. Laxmikanth for Polity, Ramesh Singh/Nitin Singhania for Economy, Spectrum for Modern History)',
            'Read The Hindu or Indian Express daily; synthesize notes on government schemes, Supreme Court verdicts, and economic reforms',
            'Follow Press Information Bureau (PIB) releases and Yojana / Kurukshetra monthly magazines'
          ],
          milestone: 'Complete comprehensive concept notes across all 4 General Studies core modules',
          prerequisites: ['Graduation baseline literacy and reading habit'],
          resources: [
            { title: 'Union Public Service Commission (UPSC) Official Portal', url: 'https://upsc.gov.in/', type: 'official', isFree: true },
            { title: 'Press Information Bureau (PIB) India', url: 'https://pib.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Prelims Test Series & CSAT Quantitative Reasoning Practice',
          durationMonths: 2,
          durationText: '2 months',
          category: 'exam-prep',
          description: 'Intensive practice of Prelims General Studies (Paper 1) and qualifying CSAT (Paper 2) with previous year papers (PYQs).',
          tasks: [
            'Solve 15 years of UPSC Prelims PYQs to analyze question framing, elimination strategies, and trends',
            'Attempt 25 full-length GS-1 mock test papers under strict 2-hour morning exam conditions',
            'Practice CSAT reading comprehension, logical reasoning, and basic numeracy to reliably score >40% (qualifying requirement is 33%)'
          ],
          milestone: 'Consistently score above 105+ in GS-1 and 80+ in CSAT across 5 full simulation tests',
          prerequisites: ['GS core concept foundation'],
          resources: [
            { title: 'UPSC Previous Question Papers Archive', url: 'https://upsc.gov.in/examinations/previous-question-papers', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Mains Descriptive Answer Writing, Ethics & Mock Interview Prep',
          durationMonths: 2,
          durationText: '2 months',
          category: 'interview-prep',
          description: 'Master 150-word and 250-word answer drafting, GS-4 Ethics case studies, Essay paper structuring, and mock interviews.',
          tasks: [
            'Write 4 structured answers daily with introductions, diagrams, constitutional articles, committee recommendations, and balanced conclusions',
            'Practice GS-4 Ethics case study frameworks identifying ethical dilemmas, stakeholders, and constitutional morality',
            'Draft 4 full-length essays on philosophical and socio-economic topics; participate in personality test mock interviews'
          ],
          milestone: 'Complete evaluation of 3 full-length Mains test series and attend 2 panel mock interviews',
          prerequisites: ['Prelims syllabus mastery and analytical writing ability'],
          resources: [
            { title: 'Department of Personnel and Training (DoPT)', url: 'https://dopt.gov.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'state-government-officer',
    title: 'State Public Service Commission Officer (PCS / State Civil Services)',
    educationQualification: {
      minimumQualification: 'Bachelor degree in any discipline from a recognized University',
      preferredDegree: 'Graduation in Arts, Commerce, Science, Law, or Engineering',
      requiredProfessionalDegreeOrLicense: 'Selection through State Public Service Commission Combined Competitive Examination (e.g. UPPSC, BPSC, MPSC, TNPSC, APPSC, TSPSC, KPSC)',
      mandatoryRequirements: [
        'Recognized undergraduate degree',
        'Passing 3-stage State PSC selection: Prelims, Mains (Descriptive), and Interview',
        'Proficiency in official state language (reading, writing, speaking)'
      ],
      preferredQualifications: [
        'Deep mastery of state-specific history, geography, culture, economy, and state government schemes'
      ],
      eligibilityCriteria: [
        'Age Limit: Typically 21 to 40 years depending on the specific state notification, with relaxation for domicile reserved categories',
        'Indian citizenship; state domicile quotas or preferences may apply as per state reservation policies'
      ],
      regulatoryNotes: 'Recruitment is conducted independently by individual State Public Service Commissions for roles like Deputy Collector, Deputy Superintendent of Police (DSP), Block Development Officer (BDO), and Commercial Tax Officer.'
    },
    roadmap: {
      totalDurationMonths: 5,
      totalDurationFormatted: '5 months',
      steps: [
        {
          stepNumber: 1,
          title: 'State-Specific General Knowledge & Regional History/Culture',
          durationMonths: 2,
          durationText: '2 months',
          category: 'fundamentals',
          description: 'Master state geography, regional history, local governance systems, tribal/cultural heritage, and state budget/economic survey.',
          tasks: [
            'Study state official gazetteer, state human development reports, and socioeconomic data',
            'Master state-specific history, major dynasties, freedom movements in the state, and folk traditions',
            'Analyze state government flagship welfare initiatives, irrigation projects, and industrial policies'
          ],
          milestone: 'Compile a 100-page state special revision compendium and clear state GK diagnostic test',
          prerequisites: ['Baseline Indian polity and history understanding'],
          resources: [
            { title: 'Official State Government Portals & State Gazettes', url: 'https://www.india.gov.in/my-government/state-ut-governments', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'State PSC Prelims & Mains Syllabus Revision with PYQs',
          durationMonths: 2,
          durationText: '2 months',
          category: 'exam-prep',
          description: 'Practice state-specific objective Prelims questions and descriptive answer writing for State Mains papers.',
          tasks: [
            'Solve 10 years of State PSC previous year question papers',
            'Practice descriptive answers incorporating state government data, committee reports, and regional case studies',
            'Practice mandatory regional language paper comprehension and grammar exercises'
          ],
          milestone: 'Complete 15 full-length state PSC mock tests with detailed performance review',
          prerequisites: ['State GK and core General Studies revision'],
          resources: [
            { title: 'National Portal of India - Public Service Commissions', url: 'https://www.india.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Regional Current Affairs & State PSC Mock Interview Prep',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Prepare for personality test panel addressing state administrative problems, local law and order dilemmas, and regional politics.',
          tasks: [
            'Review local regional language daily newspapers for ongoing state policy developments',
            'Participate in mock interview panels simulating state civil services boards',
            'Prepare justification for district preferences, administrative choices, and situational governance dilemmas'
          ],
          milestone: 'Complete 2 panel mock interviews with positive scoring on administrative aptitude',
          prerequisites: ['Mains syllabus coverage and state current affairs'],
          resources: [
            { title: 'State PSC Official Portals (e.g. uppsc.up.nic.in, bpsc.bih.nic.in)', url: 'https://www.india.gov.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'ssc-cgl-career-roles',
    title: 'SSC CGL Officer (Inspector / Assistant Section Officer)',
    educationQualification: {
      minimumQualification: 'Bachelor degree in any discipline from a recognized University',
      preferredDegree: 'Graduation in Commerce, Economics, Statistics, Mathematics, or Engineering (Statistics degree specifically required for Junior Statistical Officer post)',
      requiredProfessionalDegreeOrLicense: 'Selection through Staff Selection Commission - Combined Graduate Level (SSC CGL) Examination',
      mandatoryRequirements: [
        'Recognized undergraduate degree as on cut-off date specified in official recruitment notice',
        'Qualifying Tier-I (Computer Based Test) and Tier-II examinations',
        'Passing Data Entry Speed Test (DEST) computer typing test (minimum 27 WPM / 2000 key depressions in 15 mins)'
      ],
      preferredQualifications: [
        'High speed and accuracy in quantitative calculations and English comprehension'
      ],
      eligibilityCriteria: [
        'Age Limit: 18 to 30 years or 18 to 32 years depending on specific post (e.g. Inspector of Income Tax, Central Excise Inspector, ASO in CSS/MEA)',
        'Indian citizenship',
        'Physical fitness and physical endurance standards apply for Central Excise Inspector and CBI Sub-Inspector posts'
      ],
      regulatoryNotes: 'Recruitment is centrally conducted by the Staff Selection Commission (SSC) for Group B (Non-Gazetted) and Group C posts in central ministries, departments, and attached offices.'
    },
    roadmap: {
      totalDurationMonths: 4,
      totalDurationFormatted: '4 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Quantitative Aptitude & Advanced Mathematics Mastery',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Master arithmetic (percentage, profit/loss, time & work, SI/CI) and advanced math (geometry, trigonometry, algebra, mensuration).',
          tasks: [
            'Learn mental calculation shortcuts, Vedic math techniques, and digital roots to solve questions in under 45 seconds',
            'Master circle theorems, coordinate geometry formulas, trigonometric identities, and algebraic expansions',
            'Practice 100 timed calculation problems daily'
          ],
          milestone: 'Consistently score 45+/50 in Quantitative Aptitude sectional mock tests',
          prerequisites: ['Basic high school arithmetic fundamentals'],
          resources: [
            { title: 'Staff Selection Commission (SSC) Official Portal', url: 'https://ssc.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Reasoning, English Comprehension & General Awareness',
          durationMonths: 1,
          durationText: '1 month',
          category: 'exam-prep',
          description: 'Master logical reasoning puzzles, English grammar rules (active/passive, direct/indirect, idioms), and high-yield general awareness.',
          tasks: [
            'Practice syllogisms, analogies, coding-decoding, and matrix reasoning',
            'Review 100 fundamental English grammar rules and memorize 500 high-frequency SSC vocabulary words and one-word substitutions',
            'Revise static GK: Indian polity articles, scientific inventions, folk dances, national parks, and 6 months current affairs'
          ],
          milestone: 'Complete 20 sectional tests across Reasoning, English, and General Awareness',
          prerequisites: ['Quantitative basics'],
          resources: [
            { title: 'SSC Examination Calendar & Notices', url: 'https://ssc.gov.in/for-candidates/tentative-calendar-of-examinations', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Tier-II Full Simulations, Typing Test & Post Preference Strategy',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Intensive Tier-II simulation tests, computer knowledge module preparation, daily typing practice, and post preference mapping.',
          tasks: [
            'Attempt 15 full-length Tier-II mock tests covering Section 1 (Math + Reasoning), Section 2 (English + GA), and Section 3 (Computer Module)',
            'Practice daily 15-minute typing tests on typing software maintaining >30 WPM with 95%+ accuracy',
            'Analyze previous year cutoffs and physical requirements to formulate optimal post preference ordering'
          ],
          milestone: 'Achieve consistent scores of 310+/390 on Tier-II mock tests and qualify mandatory computer typing benchmark',
          prerequisites: ['Tier-I syllabus completion'],
          resources: [
            { title: 'National Career Service SSC Preparation Guides', url: 'https://www.ncs.gov.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'banking-and-insurance-officer',
    title: 'Regulatory & Insurance Officer (RBI Grade B / LIC AAO / NABARD)',
    educationQualification: {
      minimumQualification: 'Bachelor degree in any discipline with minimum 60% marks (50% for SC/ST/PwD) in 10th, 12th, and Graduation (for RBI Grade B)',
      preferredDegree: 'Graduation / Post Graduation in Economics, Commerce, Finance, Management, or Engineering',
      requiredProfessionalDegreeOrLicense: 'Selection through competitive recruitment examination (e.g. RBI Grade B, NABARD Grade A, SEBI Grade A, LIC AAO)',
      mandatoryRequirements: [
        'Recognized undergraduate degree meeting the strict percentage criteria (e.g. 60% aggregate for RBI Grade B)',
        'Passing Phase-I (Objective Aptitude) and Phase-II (Descriptive Economic & Social Issues, Finance & Management, English Writing)',
        'Passing Final Selection Interview'
      ],
      preferredQualifications: [
        'Sound grasp of macroeconomic policies, monetary policy instruments, corporate financial reporting, and insurance underwriting'
      ],
      eligibilityCriteria: [
        'Age Limit: 21 to 30 years (extended to 32/34 for candidates holding M.Phil/Ph.D. for RBI Grade B)',
        'Indian citizenship',
        'Number of attempts for RBI Grade B Phase-I is limited to 6 for General category candidates'
      ],
      regulatoryNotes: 'Recruitment is directly conducted by regulatory authorities (RBI, SEBI, IRDAI, PFRDA, NABARD) and state insurance undertakings (LIC, GIC) for managerial cadre positions.'
    },
    roadmap: {
      totalDurationMonths: 5,
      totalDurationFormatted: '5 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Economic & Social Issues (ESI) & Indian Financial Architecture',
          durationMonths: 2,
          durationText: '2 months',
          category: 'fundamentals',
          description: 'Master macroeconomic fundamentals: inflation, balance of payments, fiscal policy, poverty alleviation, and social structures.',
          tasks: [
            'Study economic survey, Union Budget, NITI Aayog policy papers, and RBI Annual Report',
            'Review key social schemes: MGNREGA, PM-KISAN, Ayushman Bharat, and financial inclusion programs',
            'Track monthly macroeconomic indicators: CPI, WPI, IIP, forex reserves, and GDP growth revisions'
          ],
          milestone: 'Prepare structured revision notes covering all ESI syllabus topics and government schemes',
          prerequisites: ['Graduation baseline analytical understanding'],
          resources: [
            { title: 'Reserve Bank of India (RBI) Official Portal', url: 'https://www.rbi.org.in/', type: 'official', isFree: true },
            { title: 'Ministry of Finance - Union Budget & Economic Survey', url: 'https://www.indiabudget.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Finance & Management (FM) Concepts & Descriptive Writing',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Master financial markets (money/bond/equity markets), risk management (Basel III norms), corporate governance, and leadership theories.',
          tasks: [
            'Study financial instruments, derivatives, bond yield curve calculations, and corporate balance sheet analysis',
            'Learn management theories: motivation (Maslow, Herzberg), leadership styles, organizational change, and corporate governance',
            'Practice descriptive typing answers for Phase-II: 400-word and 600-word answers directly on keyboard'
          ],
          milestone: 'Write 30 descriptive keyboard answers on Finance & Management and ESI with evaluation',
          prerequisites: ['ESI concepts and financial awareness'],
          resources: [
            { title: 'NABARD Official Recruitment Portal', url: 'https://www.nabard.org/', type: 'official', isFree: true },
            { title: 'SEBI Official Examination Portal', url: 'https://www.sebi.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Phase-I High-Speed Mock Tests & Regulatory Interview Prep',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Crack high-difficulty Phase-I General Awareness and quantitative sections, and rehearse regulatory interview panel questions.',
          tasks: [
            'Attempt 20 high-level Phase-I mock tests focusing on general awareness (80 questions in RBI Grade B)',
            'Review banking regulations, fintech developments (UPI, CBDC, account aggregators), and financial stability reports',
            'Participate in mock interview panels evaluating macroeconomic vision and leadership integrity'
          ],
          milestone: 'Complete 2 full interview simulations and achieve qualifying scores in Phase-I timed tests',
          prerequisites: ['Phase-II descriptive writing and Phase-I aptitude'],
          resources: [
            { title: 'Life Insurance Corporation of India (LIC) Careers', url: 'https://licindia.in/careers', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'railway-career-roles',
    title: 'Railway Operations Officer (RRB NTPC / Station Master / Traffic Apprentice)',
    educationQualification: {
      minimumQualification: 'Bachelor degree in any discipline from a recognized University (for Graduate-level posts like Station Master, Goods Guard, Senior Commercial Clerk)',
      preferredDegree: 'Graduation in Science, Commerce, Arts, or Engineering',
      requiredProfessionalDegreeOrLicense: 'Selection through Railway Recruitment Board Non-Technical Popular Categories (RRB NTPC) Examination',
      mandatoryRequirements: [
        'Recognized undergraduate degree as on closing date of RRB centralized employment notification',
        'Passing Computer Based Test (CBT 1 and CBT 2)',
        'Passing Computer Based Aptitude Test (CBAT) for Station Master and Traffic Assistant posts',
        'Strict adherence to Railway Medical Standard A-2 (including distance vision 6/9, 6/9 without glasses, no color blindness)'
      ],
      preferredQualifications: [
        'Fast spatial scanning speed, psychomotor reaction time, and stress management'
      ],
      eligibilityCriteria: [
        'Age Limit: 18 to 33 years (with category relaxations as per Central Government railway rules)',
        'Strict medical fitness is paramount: eye test failure leads to permanent disqualification for operating categories'
      ],
      regulatoryNotes: 'Indian Railways recruitment is conducted by 21 Railway Recruitment Boards (RRBs) across India under the Ministry of Railways.'
    },
    roadmap: {
      totalDurationMonths: 4,
      totalDurationFormatted: '4 months',
      steps: [
        {
          stepNumber: 1,
          title: 'RRB CBT-1 Syllabus Mastery: Math, General Intelligence & Science',
          durationMonths: 2,
          durationText: '2 months',
          category: 'fundamentals',
          description: 'Master high-weightage topics in Mathematics, General Intelligence & Reasoning, and General Science (NCERT 9th-10th Physics/Chemistry/Biology).',
          tasks: [
            'Study NCERT Class 9 and 10 Science: mechanics, electricity, chemical reactions, human physiology',
            'Master speed arithmetic: time-speed-distance (train and platform problems), percentage, ratios, and algebra',
            'Solve coding-decoding, direction sense, blood relations, and Venn diagram questions'
          ],
          milestone: 'Score 80%+ on full-length CBT-1 simulation test papers',
          prerequisites: ['High school math and science basics'],
          resources: [
            { title: 'Indian Railways Official Recruitment Portal', url: 'https://indianrailways.gov.in/', type: 'official', isFree: true },
            { title: 'NCERT Science Textbooks (Classes 9-10)', url: 'https://ncert.nic.in/textbook.php', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'CBT-2 In-Depth Preparation & Railway Awareness',
          durationMonths: 1,
          durationText: '1 month',
          category: 'exam-prep',
          description: 'Prepare for 120-question 90-minute CBT-2 format and study Indian Railways history, zones, signalling basics, and current initiatives (Vande Bharat, DFC).',
          tasks: [
            'Attempt 15 CBT-2 full mock tests managing negative marking (1/3rd penalty)',
            'Study Indian Railways administrative zones, headquarters, freight corridors, and Kavach safety system',
            'Review static GK, constitutional provisions, and 6 months national current events'
          ],
          milestone: 'Achieve consistent test scores of 95+/120 on CBT-2 mock exams',
          prerequisites: ['CBT-1 syllabus coverage'],
          resources: [
            { title: 'Ministry of Railways Official Portal', url: 'https://railnet.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Computer Based Aptitude Test (CBAT / Psycho Test) Practice',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Practice the 5 mandatory psychotechnical batteries: Intelligence Test, Selective Attention, Spatial Scanning, Information Ordering, and Personality Test.',
          tasks: [
            'Practice brick test and spatial scanning grids under strict 5-minute timed windows',
            'Train selective attention and reaction speed software simulators daily',
            'Verify vision against Railway Medical Manual A-2 requirements (distance vision 6/9 without glasses, Ishihara color test)'
          ],
          milestone: 'Qualify all 5 batteries of the psycho test with T-score > 42 in each battery',
          prerequisites: ['CBT-2 qualification preparation'],
          resources: [
            { title: 'RDSO Psycho Technical Directorate Test Guidelines', url: 'https://rdso.indianrailways.gov.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'defence-officer',
    title: 'Defence Officer (Army / Navy / Air Force)',
    educationQualification: {
      minimumQualification: 'Army: Bachelor degree in any discipline; Navy: B.E. / B.Tech or B.Sc with Physics & Maths; Air Force (Flying Branch): Bachelor degree in any discipline with Physics & Maths at 10+2, or B.E. / B.Tech',
      preferredDegree: 'B.Tech / B.E. or Graduate degree with NCC ‘C’ Certificate',
      requiredProfessionalDegreeOrLicense: 'Commissioned Officer status granted through UPSC CDS / NDA examination or AFCAT / INET, followed by Service Selection Board (SSB) recommendation and Medical Board clearance',
      mandatoryRequirements: [
        'Recognized degree from an accredited university or final year student meeting notification criteria',
        'Passing written examination (UPSC CDS / AFCAT) or direct shortlisting through engineering cutoff / NCC entry',
        'Passing 5-day Service Selection Board (SSB) interview: Screening, Psychological Tests, Group Testing Officer (GTO) tasks, and Conference',
        'Passing comprehensive Special Medical Board examinations at Military/Air Force/Naval Command Hospitals'
      ],
      preferredQualifications: [
        'National Cadet Corps (NCC) ‘C’ Certificate with ‘A’ or ‘B’ grading',
        'State/National level sports participation'
      ],
      eligibilityCriteria: [
        'Age Limit: CDS IMA (19–24), INA (19–24), AFA (20–24), OTA (19–25); unmarried status required for most cadet academies',
        'Indian citizenship',
        'Rigorous physical and medical fitness standards (anthropometric standards, visual acuity, surgical history)'
      ],
      regulatoryNotes: 'Commissioning is granted by the President of India following pre-commission training at IMA Dehradun, INA Ezhimala, AFA Dundigal, or OTA Chennai. Academic degree must be completed before entering the academy.'
    },
    roadmap: {
      totalDurationMonths: 5,
      totalDurationFormatted: '5 months',
      steps: [
        {
          stepNumber: 1,
          title: 'CDS / AFCAT Written Examination Preparation',
          durationMonths: 2,
          durationText: '2 months',
          category: 'exam-prep',
          description: 'Targeted preparation for English, Elementary Mathematics, and General Knowledge papers of UPSC CDS or AFCAT.',
          tasks: [
            'Master high-scoring English topics: spot the errors, sentence rearrangement, comprehension, and vocabulary',
            'Revise elementary mathematics: arithmetic, algebra, trigonometry, geometry, and mensuration',
            'Cover defence-focused GK: defence exercises, missile systems, international geopolitical developments, and Indian military history'
          ],
          milestone: 'Score 140+ marks in combined CDS written simulation papers',
          prerequisites: ['Graduation/engineering baseline education'],
          resources: [
            { title: 'Join Indian Army Official Portal', url: 'https://joinindianarmy.nic.in/', type: 'official', isFree: true },
            { title: 'Join Indian Navy Official Portal', url: 'https://www.joinindiannavy.gov.in/', type: 'official', isFree: true },
            { title: 'Indian Air Force Careers Portal', url: 'https://careerindianairforce.cdac.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Psychological Testing Battery & Personality Development (SSB Stage 1 & 2)',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Master Picture Perception & Discussion Test (PPDT), Thematic Apperception Test (TAT), Word Association Test (WAT), Situation Reaction Test (SRT), and Self Description (SD).',
          tasks: [
            'Practice writing positive, action-oriented stories for PPDT and TAT images within 4 minutes',
            'Practice rapid word responses for 60 WAT words and resolve 60 realistic SRT scenarios within 30 minutes',
            'Reflect on personal strengths, weaknesses, family background, and achievements to draft an honest Self Description'
          ],
          milestone: 'Complete 5 simulated psych testing batteries and refine story structures showcasing 15 Officer Like Qualities (OLQs)',
          prerequisites: ['Written exam qualification standard'],
          resources: [
            { title: 'Selection Centre Guidelines & Information Broachers', url: 'https://joinindianarmy.nic.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'GTO Outdoor Tasks, Group Discussion & Physical Conditioning',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Prepare for Progressive Group Task (PGT), Half Group Task (HGT), Command Task, Lecturette, and physical stamina tests.',
          tasks: [
            'Study cantilever and bridge-building physics principles applied in PGT and Command Tasks using planks, ropes, and ballies',
            'Practice 3-minute impromptu lecturettes on national and geopolitical topics in front of peers',
            'Achieve physical conditioning benchmarks: 2.4 km run in under 10 minutes, 40 pushups, 8 chin-ups, and rope climbing'
          ],
          milestone: 'Pass full mock SSB evaluation and meet military physical endurance standards',
          prerequisites: ['Psychological tests and physical conditioning'],
          resources: [
            { title: 'National Defence Academy & Naval Academy Examination Guides', url: 'https://upsc.gov.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'public-sector-undertaking-engineer',
    title: 'Public Sector Undertaking (PSU) Engineer',
    educationQualification: {
      minimumQualification: 'Bachelor of Engineering (B.E.) / Bachelor of Technology (B.Tech) in relevant engineering branch (Mechanical, Electrical, Civil, Chemical, Electronics, Instrumentation, Computer Science)',
      preferredDegree: '4-year B.Tech / B.E. from an AICTE/UGC recognized university with minimum 60–65% aggregate marks',
      requiredProfessionalDegreeOrLicense: 'High percentile score in Graduate Aptitude Test in Engineering (GATE) in the corresponding engineering paper',
      mandatoryRequirements: [
        'Recognized 4-year engineering degree in relevant discipline',
        'Valid GATE score card with high All India Rank (AIR generally within top 200–500 for Maharatna PSUs)',
        'Qualifying Group Discussion (GD), Group Task (GT), and Technical Personal Interview conducted by the individual PSU'
      ],
      preferredQualifications: [
        'Final year project relevant to energy, power systems, structural integrity, or industrial automation',
        'Industrial plant internship with steel, oil & gas, or power sector companies'
      ],
      eligibilityCriteria: [
        'Age Limit: Typically 26 to 28 years for General category (relaxable for SC/ST/OBC/PwD as per government guidelines)',
        'Meeting medical standards for plant operations (vision, color blindness, physical fitness)'
      ],
      regulatoryNotes: 'Maharatna and Navratna PSUs (IOCL, ONGC, NTPC, BHEL, GAIL, PowerGrid, HPCL, BPCL, SAIL) recruit Executive Trainees directly through GATE score shortlisting followed by interviews.'
    },
    roadmap: {
      totalDurationMonths: 6,
      totalDurationFormatted: '6 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Core Engineering Technical Syllabus Mastery (GATE Standard)',
          durationMonths: 3,
          durationText: '3 months',
          category: 'skills',
          description: 'Comprehensive topic-wise problem solving across core engineering subjects, engineering mathematics, and general aptitude.',
          tasks: [
            'Solve standard textbook numerical problems across high-weightage engineering subjects',
            'Master Engineering Mathematics (linear algebra, calculus, differential equations, numerical methods) and General Aptitude',
            'Compile short revision notes of formulas, unit conversions, and governing thermodynamic/electrical/structural equations'
          ],
          milestone: 'Complete first thorough pass of entire GATE syllabus and create subject-wise formula notebooks',
          prerequisites: ['B.Tech core discipline foundational knowledge'],
          resources: [
            { title: 'GATE Official Examination Portal (IIT Organizing Institute)', url: 'https://gate2024.iisc.ac.in/', type: 'official', isFree: true },
            { title: 'NPTEL Core Engineering Video Lectures', url: 'https://nptel.ac.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'GATE Test Series & Virtual Calculator Numerical Practice',
          durationMonths: 2,
          durationText: '2 months',
          category: 'exam-prep',
          description: 'Intensive practice of 30 years of GATE previous questions using online virtual calculator under 3-hour exam conditions.',
          tasks: [
            'Solve 10 years of GATE past papers topic-wise and full-length',
            'Master quick calculations using the official GATE virtual calculator interface',
            'Attempt 15 full-length mock tests to optimize accuracy and eliminate negative marks in MSQs and MCQs'
          ],
          milestone: 'Achieve consistent test scores equivalent to AIR < 300 on national mock GATE test series',
          prerequisites: ['Core technical syllabus revision'],
          resources: [
            { title: 'GATE Virtual Calculator Practice Interface', url: 'https://gate.iitkgp.ac.in/', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'PSU Technical Interview, GD/GT & Plant Basics Preparation',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Prepare practical plant operation scenarios, final year project defense, group discussions, and PSU personal interviews.',
          tasks: [
            'Prepare deep technical explanations of undergraduate final year project and industrial training',
            'Review PSU operations: refinery process flow, thermal power cycle, power grid transmission, or pipeline networks',
            'Participate in mock technical interviews and Group Discussions on energy transition and public sector disinvestment'
          ],
          milestone: 'Complete 3 technical mock interview rounds with senior engineers and receive positive evaluation',
          prerequisites: ['High GATE score standard and core engineering concept mastery'],
          resources: [
            { title: 'Department of Public Enterprises (DPE) Portal', url: 'https://dpe.gov.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'government-research-scientist',
    title: 'Government Research Scientist (DRDO / ISRO / BARC / CSIR)',
    educationQualification: {
      minimumQualification: 'Bachelor of Engineering / Technology (B.E. / B.Tech) or Master of Science (M.Sc) with first class (minimum 65% aggregate marks or 6.84 CGPA)',
      preferredDegree: 'M.Tech / M.E. or Ph.D. in Aerospace, Mechanical, Electrical, Computer Science, Physics, Chemistry, or Nuclear Engineering',
      requiredProfessionalDegreeOrLicense: 'Selection through direct examination / GATE score shortlisting (e.g. RAC DRDO Scientist B, ISRO ICRB, BARC OCES/DGFS, CSIR NET)',
      mandatoryRequirements: [
        'Recognized engineering or postgraduate science degree with First Class honors',
        'Valid GATE score or qualifying score in organization-specific entrance exam (e.g. ISRO ICRB written test or BARC online test)',
        'Passing rigorous technical board interview conducted by senior directors and scientists'
      ],
      preferredQualifications: [
        'Research publications in international journals or patented innovations',
        'Hands-on expertise in simulation tools (MATLAB/Simulink, ANSYS, CST, LabVIEW)'
      ],
      eligibilityCriteria: [
        'Age Limit: Typically 28 to 35 years depending on specific notification and level (Scientist B / C), with government category relaxations',
        'Indian citizenship',
        'Rigorous security and intelligence background verification required for strategic sector appointments'
      ],
      regulatoryNotes: 'Scientists are appointed to strategic national labs under the Department of Space (ISRO), Department of Atomic Energy (BARC), Ministry of Defence (DRDO), and Council of Scientific and Industrial Research (CSIR).'
    },
    roadmap: {
      totalDurationMonths: 5,
      totalDurationFormatted: '5 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Advanced Technical Specialization & Mathematical Foundations',
          durationMonths: 2,
          durationText: '2 months',
          category: 'fundamentals',
          description: 'Deep revision of core engineering principles: fluid mechanics, structural dynamics, electromagnetics, control systems, or quantum mechanics.',
          tasks: [
            'Derive governing physical equations and boundary condition solutions from first principles',
            'Master advanced engineering mathematics: partial differential equations, transforms, and tensor analysis',
            'Analyze previous year written exam papers from ISRO ICRB, BARC OCES, and DRDO RAC'
          ],
          milestone: 'Score above 80% on advanced technical assessment tests covering core domain syllabus',
          prerequisites: ['First-class engineering or M.Sc degree'],
          resources: [
            { title: 'DRDO Recruitment & Assessment Centre (RAC)', url: 'https://rac.gov.in/', type: 'official', isFree: true },
            { title: 'ISRO Centralised Recruitment Board (ICRB)', url: 'https://www.isro.gov.in/Careers.html', type: 'official', isFree: true },
            { title: 'Bhabha Atomic Research Centre (BARC) Exam Portal', url: 'https://barconlineexam.com/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Modeling, Simulation Tools & Applied Technical Problem Solving',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Hands-on applied problem solving with MATLAB, Python, finite element modeling, and system simulation.',
          tasks: [
            'Simulate dynamic system responses and feedback control loops in MATLAB/Simulink',
            'Solve applied engineering design problems reflecting launch vehicle systems, radar antennas, or reactor thermal hydraulics',
            'Review instrumentation sensors, signal processing, and high-reliability fail-safe architectures'
          ],
          milestone: 'Complete a documented applied simulation project analyzing a high-reliability technical subsystem',
          prerequisites: ['Advanced mathematical and engineering foundations'],
          resources: [
            { title: 'NPTEL Advanced Scientific & Engineering Courses', url: 'https://nptel.ac.in/', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Scientific Board Interview Defense & Project Presentation',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Prepare for intense 45-minute whiteboard technical interview grilling by panel of chief scientists and lab directors.',
          tasks: [
            'Practice deriving fundamental engineering theorems on a whiteboard without reference material',
            'Prepare exhaustive technical defense of B.Tech / M.Tech / Ph.D. research thesis and publications',
            'Participate in mock technical interview panels with domain specialists'
          ],
          milestone: 'Successfully defend research work and solve real-time technical equations in mock board interview',
          prerequisites: ['Simulation tools and advanced technical mastery'],
          resources: [
            { title: 'CSIR Official Portal', url: 'https://www.csir.res.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'statistical-officer',
    title: 'Statistical Officer (ISS / JSO / State DES)',
    educationQualification: {
      minimumQualification: 'Bachelor degree with Statistics / Mathematical Statistics / Applied Statistics as one of the subjects from a recognized University (for SSC JSO); or Master degree in Statistics / Mathematical Statistics / Applied Statistics (for UPSC Indian Statistical Service - ISS)',
      preferredDegree: 'Master of Statistics (M.Stat) from Indian Statistical Institute (ISI) or M.Sc in Statistics',
      requiredProfessionalDegreeOrLicense: 'Selection through UPSC Indian Statistical Service (ISS) Examination or Staff Selection Commission Combined Graduate Level (SSC CGL - JSO post)',
      mandatoryRequirements: [
        'Recognized undergraduate degree with Statistics (for JSO) or Postgraduate degree in Statistics (for ISS)',
        'Qualifying multi-stage examination (UPSC ISS 6-paper written exam + Viva Voce; or SSC CGL Tier-I + Tier-II Paper-II Statistics)',
        'Deep command of theoretical and applied probability distributions, sampling techniques, and statistical inference'
      ],
      preferredQualifications: [
        'Proficiency in statistical programming (R, Python, SPSS, SAS, STATA)',
        'Understanding of official statistical system of India (MoSPI, NSSO, CSO)'
      ],
      eligibilityCriteria: [
        'Age Limit: 21 to 30 years for UPSC ISS; 18 to 32 years for SSC JSO (with central category relaxations)',
        'Indian citizenship'
      ],
      regulatoryNotes: 'Cadre management is governed by the Ministry of Statistics and Programme Implementation (MoSPI). Officers oversee national economic census, periodic labor surveys, consumer price index (CPI), and national account statistics.'
    },
    roadmap: {
      totalDurationMonths: 5,
      totalDurationFormatted: '5 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Probability Theory, Mathematical Statistics & Inference',
          durationMonths: 2,
          durationText: '2 months',
          category: 'fundamentals',
          description: 'Master probability distributions, estimation theory (MLE, UMVUE), hypothesis testing (Neyman-Pearson, Likelihood Ratio tests), and nonparametric methods.',
          tasks: [
            'Derive moments, characteristic functions, and properties of standard univariate and multivariate distributions',
            'Solve advanced problems in point and interval estimation, Cramer-Rao inequality, and sufficiency',
            'Conduct power calculations and test statistics for parametric and non-parametric hypothesis tests'
          ],
          milestone: 'Complete comprehensive derivation notebook and solve 15 years of UPSC ISS Paper 1 & 2 questions',
          prerequisites: ['Undergraduate mathematics and statistics'],
          resources: [
            { title: 'Ministry of Statistics and Programme Implementation (MoSPI)', url: 'https://www.mospi.gov.in/', type: 'official', isFree: true },
            { title: 'UPSC Indian Statistical Service Examination Syllabus', url: 'https://upsc.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Sampling Theory, Econometrics & Official Statistics of India',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Master SRS, stratified, cluster, systematic, and multistage sampling designs, index numbers, time series, and Indian official statistics.',
          tasks: [
            'Derive variance equations and design effects for complex survey sampling schemes',
            'Study national account compilation, GDP estimation methodology, CPI/IIP calculations, and NSSO survey rounds',
            'Master econometrics: multicollinearity, heteroscedasticity, autocorrelation, and simultaneous equation models'
          ],
          milestone: 'Draft detailed methodological notes on NSSO sample survey designs and Indian National Accounts',
          prerequisites: ['Probability and statistical inference'],
          resources: [
            { title: 'Indian Statistical Institute (ISI) Digital Library', url: 'https://www.isical.ac.in/', type: 'learning', isFree: true },
            { title: 'Reserve Bank of India Database on Indian Economy (DBIE)', url: 'https://dbie.rbi.org.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'R / Python Statistical Computing & Board Interview Prep',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Implement computational survey analysis in R/Python, solve full simulation exam papers, and prepare for personality test.',
          tasks: [
            'Program survey weights, regression diagnostics, and time-series ARIMA forecasts in R',
            'Attempt 10 full-length written simulation tests under timed examination conditions',
            'Prepare interview responses on national statistical reforms, data privacy, and digital census methodologies'
          ],
          milestone: 'Complete 2 full UPSC ISS / Statistical Officer interview simulations with positive panel feedback',
          prerequisites: ['Sampling theory and econometrics mastery'],
          resources: [
            { title: 'CRAN Task View: Official Statistics & Survey Methodology in R', url: 'https://cran.r-project.org/', type: 'learning', isFree: true }
          ]
        }
      ]
    }
  }
];
