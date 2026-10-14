// Other Essential & Specialized Careers (12 Careers)
// All roadmaps contain practical job preparation, 1-6 months per step, months only, zero degree milestones

module.exports = [
  {
    slug: 'lawyer',
    title: 'Advocate / Litigation Lawyer',
    educationQualification: {
      minimumQualification: 'Bachelor of Laws (LL.B. - 3-year graduate degree or 5-year integrated B.A./B.B.A. LL.B.) from an institution recognized by the Bar Council of India (BCI)',
      preferredDegree: 'LL.B. or Master of Laws (LL.M.) with specialized moot court and internship record',
      requiredProfessionalDegreeOrLicense: 'Mandatory Enrolment as an Advocate with a State Bar Council and clearing the All India Bar Examination (AIBE) conducted by BCI to obtain a permanent Certificate of Practice (COP)',
      mandatoryRequirements: [
        'Recognized LL.B. degree from a Bar Council of India (BCI) recognized college/university',
        'Formal provisional enrolment with the respective State Bar Council',
        'Passing the All India Bar Examination (AIBE) within two years of provisional enrolment',
        'Permanent Certificate of Practice (COP) to argue independently before courts of law'
      ],
      preferredQualifications: [
        'Certificate courses in civil litigation, criminal trial advocacy, or cyber law',
        'Experience interning with senior designated advocates or trial court chambers'
      ],
      eligibilityCriteria: [
        'Indian citizenship',
        'Passing CLAT, AILET, or university law entrance tests for law school admission'
      ],
      regulatoryNotes: 'The legal profession in India is statutorily governed by the Advocates Act, 1961 and rules of the Bar Council of India. An LL.B. degree and Bar Council registration are legal prerequisites for court appearance; short-term preparation cannot replace statutory law degrees.'
    },
    roadmap: {
      totalDurationMonths: 6,
      totalDurationFormatted: '6 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Trial Court Procedure, Pleadings & Legal Drafting',
          durationMonths: 2,
          durationText: '2 months',
          category: 'fundamentals',
          description: 'Master practical drafting of legal notices, plaints, written statements, bail petitions, and writ applications.',
          tasks: [
            'Draft civil plaints, applications under Order 39 (temporary injunction), and execution petitions under CPC',
            'Draft criminal complaints under Section 138 NI Act, regular/anticipatory bail applications, and discharge petitions under CrPC/BNSS',
            'Draft statutory legal demand notices and consumer forum complaints'
          ],
          milestone: 'Assemble a personal litigation drafting compendium containing 15 court-ready petition templates',
          prerequisites: ['LL.B. completed and State Bar provisional enrolment'],
          resources: [
            { title: 'Bar Council of India (BCI) Official Portal', url: 'https://www.barcouncilofindia.org/', type: 'official', isFree: true },
            { title: 'eCourts Services National Portal of India', url: 'https://ecourts.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Case Law Research, Electronic Databases & AIBE Examination',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Master legal research on SCC Online and Manupatra, track constitutional bench rulings, and prepare for AIBE certification.',
          tasks: [
            'Perform Boolean searches and citation cross-referencing on SCC Online, Manupatra, or Indian Kanoon',
            'Prepare analytical case briefs summarizing ratio decidendi and obiter dicta of landmark Supreme Court judgments',
            'Solve 5 previous AIBE (All India Bar Exam) question papers with Bare Acts'
          ],
          milestone: 'Qualify All India Bar Examination and earn permanent Certificate of Practice',
          prerequisites: ['State Bar Council provisional enrollment'],
          resources: [
            { title: 'All India Bar Examination (AIBE) Official Portal', url: 'https://allindiabarexamination.com/', type: 'official', isFree: true },
            { title: 'Indian Kanoon Free Legal Research Engine', url: 'https://indiankanoon.org/', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Chamber Practice, Courtroom Arguments & Junior Advocacy',
          durationMonths: 2,
          durationText: '2 months',
          category: 'practical',
          description: 'Observe trial court cross-examinations, argue miscellaneous admission matters, and manage court daily cause lists.',
          tasks: [
            'Assist senior advocates in cross-examination preparation, marking of exhibits, and witness deposition review',
            'Present oral arguments for adjournment, filing of vakalatnama, and minor interlocutory motions',
            'Manage digital case status tracking, daily cause list checking, and client conference consultations'
          ],
          milestone: 'Conduct 5 live courtroom oral submissions under senior guidance and manage 10 active case files',
          prerequisites: ['AIBE qualification and legal drafting mastery'],
          resources: [
            { title: 'Supreme Court of India Official Portal', url: 'https://main.sci.gov.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'corporate-lawyer',
    title: 'Corporate Lawyer',
    educationQualification: {
      minimumQualification: 'Bachelor of Laws (LL.B. or 5-year integrated B.A./B.B.A. LL.B.) from a recognized institution',
      preferredDegree: '5-year integrated law degree from a National Law University (NLU) or LL.M. in Corporate / Commercial Law',
      requiredProfessionalDegreeOrLicense: 'Enrolment with State Bar Council; Certificate of Practice (COP) required if appearing before tribunals (NCLT, CCI, NCLAT)',
      mandatoryRequirements: [
        'Recognized LL.B. degree from a BCI-approved university',
        'Strong command of Companies Act, 2013, Indian Contract Act, 1872, and SEBI regulations',
        'State Bar Council enrolment'
      ],
      preferredQualifications: [
        'Company Secretary (CS) qualification or Diploma in Corporate Law & Governance',
        'Certification in Mergers & Acquisitions (M&A) or Competition Law'
      ],
      eligibilityCriteria: [
        'Commercial acumen, negotiation capabilities, and meticulous contract drafting precision'
      ],
      regulatoryNotes: 'Corporate lawyers work in top law firms (Cyril Amarchand Mangaldas, Shardul Amarchand Mangaldas, AZB & Partners, Khaitan & Co) and in-house legal departments of corporations.'
    },
    roadmap: {
      totalDurationMonths: 5,
      totalDurationFormatted: '5 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Commercial Contract Drafting & Redlining',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Draft, review, and negotiate commercial agreements: Non-Disclosure Agreements (NDAs), Master Service Agreements (MSAs), and Vendor Contracts.',
          tasks: [
            'Draft robust indemnification, limitation of liability, intellectual property, and termination clauses',
            'Practice contract redlining and markups defending corporate client interests during commercial negotiations',
            'Draft employment contracts, non-compete covenants, and consultant agreements compliant with Indian labor jurisprudence'
          ],
          milestone: 'Draft and successfully redline a comprehensive Master Services Agreement (MSA) and SaaS licensing contract',
          prerequisites: ['Indian Contract Act and corporate law fundamentals'],
          resources: [
            { title: 'Ministry of Corporate Affairs (MCA)', url: 'https://www.mca.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Corporate Due Diligence, M&A & Private Equity Documentation',
          durationMonths: 2,
          durationText: '2 months',
          category: 'practical',
          description: 'Conduct legal due diligence audits, review Share Purchase Agreements (SPAs), Shareholders Agreements (SHAs), and FEMA compliance.',
          tasks: [
            'Perform legal due diligence review of corporate records, board minutes, title deeds, and regulatory filings',
            'Draft and review key clauses in Term Sheets, SHAs, and SPAs: tag-along, drag-along, liquidation preference, and ROFR',
            'Analyze Foreign Exchange Management Act (FEMA) guidelines regarding foreign direct investment (FDI) reporting'
          ],
          milestone: 'Produce a comprehensive 20-page Legal Due Diligence Report for a simulated venture capital funding round',
          prerequisites: ['Contract drafting and corporate law knowledge'],
          resources: [
            { title: 'SEBI (Substantial Acquisition of Shares and Takeovers) Regulations', url: 'https://www.sebi.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'NCLT Tribunal Practice, Regulatory Compliance & Law Firm Prep',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Prepare company petition filings for NCLT, Insolvency and Bankruptcy Code (IBC) proceedings, and interview preparation.',
          tasks: [
            'Draft Section 7 and Section 9 insolvency applications under IBC, 2016 for NCLT filing',
            'Practice corporate legal case studies and drafting assessments for Tier-1/Tier-2 law firm recruitment',
            'Conduct mock legal partner interviews analyzing recent M&A deal structures and regulatory antitrust issues'
          ],
          milestone: 'Complete 3 law firm interview simulations and submit corporate legal writing portfolio',
          prerequisites: ['Due diligence and contract redlining'],
          resources: [
            { title: 'National Company Law Tribunal (NCLT) Official Portal', url: 'https://nclt.gov.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'hotel-manager',
    title: 'Hotel & Hospitality Manager',
    educationQualification: {
      minimumQualification: 'Bachelor degree in Hotel Management (BHM / B.Sc in Hospitality & Hotel Administration) from a recognized university or NCHMCT',
      preferredDegree: 'B.Sc in Hospitality and Hotel Administration from Institute of Hotel Management (IHM)',
      requiredProfessionalDegreeOrLicense: 'No statutory license required; Management Training (MT) or Executive Trainee selection at premium hotel chains is the gold standard',
      mandatoryRequirements: [
        'Recognized undergraduate degree or 3-year diploma in hotel management',
        'Completion of mandatory 20–22 weeks industrial training across the 4 core departments: Front Office, Housekeeping, Food & Beverage (F&B) Service, and Food Production'
      ],
      preferredQualifications: [
        'Certification in Opera PMS or Amadeus hospitality software',
        'FSSAI Food Safety Supervisor certification'
      ],
      eligibilityCriteria: [
        'Impeccable grooming, high emotional quotient, crisis resolution, and executive customer service communication'
      ],
      regulatoryNotes: 'Hotel managers oversee operations in luxury hotels (Taj, Oberoi, ITC, Marriott, Hyatt) complying with Sarai Act, FSSAI regulations, and local fire/tourism licenses.'
    },
    roadmap: {
      totalDurationMonths: 5,
      totalDurationFormatted: '5 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Front Office Operations & Property Management Systems (Opera PMS)',
          durationMonths: 2,
          durationText: '2 months',
          category: 'fundamentals',
          description: 'Master guest check-in/out protocols, VIP room assignments, Night Audit procedures, and Opera PMS operations.',
          tasks: [
            'Master reservation management, room allocation, rate parity, and billing in Opera PMS',
            'Execute Night Audit workflows: balancing daily revenue, posting room charges, and generating management reports',
            'Resolve simulated escalations: overbooking, double billing, and demanding guest complaints'
          ],
          milestone: 'Operate simulated full-day Front Desk shifts and complete end-of-day Night Audit independently',
          prerequisites: ['Hospitality degree coursework and customer orientation'],
          resources: [
            { title: 'National Council for Hotel Management and Catering Technology (NCHMCT)', url: 'https://nchm.gov.in/', type: 'official', isFree: true },
            { title: 'Oracle Hospitality OPERA Cloud Property Management Guides', url: 'https://www.oracle.com/hospitality/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'F&B Service, Banquets & Revenue Management Metrics',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Master banquet event orders (BEO), F&B food cost control, Average Daily Rate (ADR), RevPAR, and occupancy yield strategies.',
          tasks: [
            'Coordinate large-scale banquet setups, seating plans, bar licensing, and banquet billing reconciliation',
            'Calculate and optimize hotel performance metrics: ADR, RevPAR, GOPPAR, and Cost Per Occupied Room (CPOR)',
            'Implement dynamic room pricing strategies based on seasonal demand, city conferences, and OTA rankings'
          ],
          milestone: 'Develop a comprehensive 30-day Hotel Revenue Optimization and Banquet Event Plan',
          prerequisites: ['Front office operations and PMS knowledge'],
          resources: [
            { title: 'Federation of Hotel & Restaurant Associations of India (FHRAI)', url: 'https://www.fhrai.com/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Hospitality Leadership, Quality Audits & MT Interview Prep',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Prepare for Taj (TMTP), Oberoi (OCLD), or Marriott Management Trainee interviews, group tasks, and situational tests.',
          tasks: [
            'Conduct comprehensive hotel brand quality audits and hygiene compliance inspections',
            'Rehearse group discussions on luxury hospitality trends, eco-sustainability, and OTA commission dynamics',
            'Participate in rigorous behavioral interviews evaluating personal grooming, service mindset, and team leadership'
          ],
          milestone: 'Complete 3 hotel management trainee interview simulations and present a departmental improvement proposal',
          prerequisites: ['Revenue management and operational metrics'],
          resources: [
            { title: 'Ministry of Tourism - Incredible India Portal', url: 'https://tourism.gov.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'chef',
    title: 'Executive Chef / Professional Chef',
    educationQualification: {
      minimumQualification: 'Higher Secondary (10+2) or Bachelor degree / Diploma in Culinary Arts, Food Production, or Hotel Management',
      preferredDegree: 'Degree in Culinary Arts from a recognized culinary institute (e.g. IHM, Welcomgroup Graduate School, Culinary Academy of India)',
      requiredProfessionalDegreeOrLicense: 'No statutory license required; FSSAI Food Safety Supervisor (FoSTaC) certification is mandatory in commercial kitchens',
      mandatoryRequirements: [
        'Recognized culinary degree/diploma or extensive progressive kitchen apprenticeship (Commis -> Demi Chef de Partie -> CDP)',
        'FSSAI FoSTaC Advanced Catering Certification',
        'Valid medical fitness certificate confirming freedom from contagious diseases and hepatitis vaccination'
      ],
      preferredQualifications: [
        'Certification from World Association of Chefs\' Societies (WACS)',
        'Expertise in specialized cuisines (Modern Indian, Continental, Pan-Asian, Pastry & Bakery)'
      ],
      eligibilityCriteria: [
        'Culinary precision, palate refinement, physical stamina for standing long shifts, and kitchen leadership'
      ],
      regulatoryNotes: 'Commercial kitchens are regulated by the Food Safety and Standards Authority of India (FSSAI) under the Food Safety and Standards Act, 2006.'
    },
    roadmap: {
      totalDurationMonths: 5,
      totalDurationFormatted: '5 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Culinary Fundamentals, Knife Skills & Classical Mother Sauces',
          durationMonths: 2,
          durationText: '2 months',
          category: 'fundamentals',
          description: 'Master precision vegetable cuts (julienne, brunoise, chiffonade), butchery fabrication, stocks, and classical French mother sauces.',
          tasks: [
            'Demonstrate rapid and consistent knife cuts meeting fine-dining size specifications under 5 minutes',
            'Prepare classical white/brown stocks and 5 mother sauces (Béchamel, Velouté, Espagnole, Tomato, Hollandaise)',
            'Master meat, poultry, and fish fabrication, portion control, and basic Indian gravies (Makhani, Korma, Kadai)'
          ],
          milestone: 'Successfully execute a 3-course classical meal trial demonstrating sauce consistency and cooking temperatures',
          prerequisites: ['Basic kitchen interest and hygiene compliance'],
          resources: [
            { title: 'Food Safety and Standards Authority of India (FSSAI) FoSTaC Training', url: 'https://fostac.fssai.gov.in/', type: 'official', isFree: false },
            { title: 'Culinary Institute of America (CIA) Video Guides', url: 'https://www.ciachef.edu/', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Station Management, Food Costing & HACCP Food Safety',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Operate hot kitchen stations during live service, implement HACCP temperature logging, and calculate food cost percentages.',
          tasks: [
            'Manage saute, grill, and tandoor stations handling 40+ covers during peak meal periods',
            'Calculate recipe costing, yield percentages, and food cost variance targeting a standard 28-32% food cost',
            'Implement HACCP food safety checklists: cold chain storage (0-4°C), cooking temperatures, and FIFO stock rotation'
          ],
          milestone: 'Design a standard recipe costing sheet and achieve zero food safety audit infractions during simulated service',
          prerequisites: ['Knife skills and mother sauces'],
          resources: [
            { title: 'FSSAI Hygiene Rating Guidelines for Food Service Establishments', url: 'https://fssai.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Menu Engineering, Plating Aesthetics & Kitchen Trade Test Prep',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Create innovative seasonal menus, master modern plating aesthetics, and prepare for restaurant kitchen trade cooking tests.',
          tasks: [
            'Apply menu engineering matrices (Stars, Plowhorses, Puzzles, Dogs) to optimize profitability and popularity',
            'Practice modern plating techniques: color contrast, architectural height, negative space, and micro-green garnishing',
            'Conduct 3 timed kitchen trade tests cooking a designated 3-course menu under executive chef scrutiny'
          ],
          milestone: 'Pass full kitchen trade test and present a portfolio lookbook of 15 signature plated culinary dishes',
          prerequisites: ['Station management and recipe costing'],
          resources: [
            { title: 'Indian Federation of Culinary Associations (IFCA)', url: 'https://ifcaindia.com/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'airline-pilot',
    title: 'Commercial Airline Pilot',
    educationQualification: {
      minimumQualification: 'Higher Secondary (10+2) with Physics and Mathematics with at least 50% marks from a recognized board (or equivalent NIOS certificate)',
      preferredDegree: 'B.Sc in Aviation, Aerospace Engineering, or any Bachelor degree alongside flight training',
      requiredProfessionalDegreeOrLicense: 'Commercial Pilot License (CPL) with Multi-Engine Instrument Rating (ME/IR) issued by the Directorate General of Civil Aviation (DGCA) India',
      mandatoryRequirements: [
        'DGCA Class 2 Medical Assessment followed by DGCA Class 1 Medical Fitness Clearance from an authorized Air Force / Civil Medical Board',
        'Passing 5 DGCA ground theory exams: Air Navigation, Aviation Meteorology, Air Regulations, Technical General, and Technical Specific',
        'Valid RTR(A) (Radio Telephony Restricted Aeronautical) license issued by Ministry of Communications (WPC)',
        'Completion of minimum 200 hours of certified flight time (including 100 hours solo, cross-country, and night flying) at a DGCA-approved Flying Training Organisation (FTO)'
      ],
      preferredQualifications: [
        'Type Rating on Airbus A320 or Boeing 737 aircraft from a DGCA-approved Type Rating Training Organisation (TRTO)',
        'ICAO Level 4 or higher English Language Proficiency (ELP) certification'
      ],
      eligibilityCriteria: [
        'Minimum 18 years of age for CPL issuance',
        'Indian citizenship',
        'Zero tolerance for color blindness and adherence to DGCA Class 1 anthropometric and cardiac health standards'
      ],
      regulatoryNotes: 'Civil aviation in India is regulated by the Directorate General of Civil Aviation (DGCA) under the Aircraft Act, 1934 and Aircraft Rules, 1937. Flying hours and DGCA exams are statutory civil aviation requirements.'
    },
    roadmap: {
      totalDurationMonths: 6,
      totalDurationFormatted: '6 months',
      steps: [
        {
          stepNumber: 1,
          title: 'DGCA Ground School Theory Examination Preparation',
          durationMonths: 2,
          durationText: '2 months',
          category: 'exam-prep',
          description: 'Rigorous preparation for DGCA pilot theory exams: Air Regulations, Aviation Meteorology, and Air Navigation.',
          tasks: [
            'Study Aircraft Rules, air traffic control procedures, airspace classifications, and visual/instrument flight rules',
            'Master synoptic chart reading, atmospheric lapse rates, jet streams, monsoons, and thunderstorm weather hazards',
            'Solve flight planning calculations, mass & balance, critical point, Point of Safe Return, and radio navigational aids (VOR, DME, ILS)'
          ],
          milestone: 'Pass 3 DGCA CPL modular theory exams with score > 70%',
          prerequisites: ['10+2 Physics and Math clearance and DGCA Class 2 medical certificate'],
          resources: [
            { title: 'Directorate General of Civil Aviation (DGCA) India', url: 'https://www.dgca.gov.in/', type: 'official', isFree: true },
            { title: 'DGCA Pariksha Candidate Exam Portal', url: 'https://pariksha.dgca.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Radio Telephony RTR(A) & ICAO English Language Proficiency',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Master standard ICAO aviation phraseology, emergency distress calls (MAYDAY/PAN-PAN), and clear WPC RTR(A) test.',
          tasks: [
            'Practice standard ATC readback transmission procedures for taxi, takeoff, enroute, approach, and landing',
            'Transmit rapid emergency messages: engine failure, depressurization, bird strike, and weather diversion',
            'Rehearse for WPC RTR(A) Part 1 (Transmission test) and Part 2 (Viva Voce on radio regulations and equipment)'
          ],
          milestone: 'Clear Ministry of Communications RTR(A) examination and achieve ICAO Level 5 English proficiency',
          prerequisites: ['DGCA ground theory study'],
          resources: [
            { title: 'Wireless Planning & Coordination (WPC) Wing Portal', url: 'https://dot.gov.in/spectrum-management/2457', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Airline Cadet Assessment & Multi-Crew Simulator Preparation',
          durationMonths: 2,
          durationText: '2 months',
          category: 'interview-prep',
          description: 'Prepare for airline junior first officer selection: psychomotor COMPASS/PILAPT tests, multi-crew cooperation, and technical simulator interviews.',
          tasks: [
            'Train spatial orientation, multitasking, and hand-eye coordination on joystick flight simulator test software',
            'Review jet aerodynamics, flight management systems (FMS), and emergency checklists (Airbus/Boeing systems)',
            'Participate in mock airline technical panels evaluating aeronautical decision making and CRM (Crew Resource Management)'
          ],
          milestone: 'Pass airline entry simulator assessment and technical interview screening',
          prerequisites: ['CPL flying hour completion and RTR license'],
          resources: [
            { title: 'Airports Authority of India (AAI) Aeronautical Information Management', url: 'https://aim-india.aai.aero/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'cabin-crew',
    title: 'Cabin Crew / Flight Attendant',
    educationQualification: {
      minimumQualification: 'Higher Secondary (10+2) in any stream from a recognized educational board',
      preferredDegree: 'Bachelor degree in Aviation, Hospitality, Tourism, Communication, or any discipline',
      requiredProfessionalDegreeOrLicense: 'Cabin Crew Competency Card / Endorsement issued following mandatory airline safety and emergency procedures (SEP) training approved by DGCA',
      mandatoryRequirements: [
        'Higher Secondary (10+2) pass certificate with fluency in English and Hindi',
        'Minimum height requirement: Typically 155 cm (female) and 170 cm (male) with proportional weight (BMI within airline norms)',
        'Clear unblemished skin with no visible tattoos or scars in cabin crew uniform',
        'Passing medical fitness test conducted by airline empanelled doctors (normal eyesight or corrected to 6/6, normal hearing)'
      ],
      preferredQualifications: [
        'Fluency in a foreign language (French, German, Spanish, Mandarin, Japanese) for international routes',
        'Customer service or luxury hospitality experience'
      ],
      eligibilityCriteria: [
        'Age Limit: Typically 18 to 27 years for freshers (varies by airline)',
        'Indian passport holder with minimum 1-year validity'
      ],
      regulatoryNotes: 'Airlines (IndiGo, Air India, Vistara, Akasa Air) conduct direct recruitment walk-ins and assessment centers. All recruits undergo mandatory DGCA-approved airline safety training before flying.'
    },
    roadmap: {
      totalDurationMonths: 3,
      totalDurationFormatted: '3 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Aviation Safety, In-Flight Medical Emergencies & First Aid',
          durationMonths: 1,
          durationText: '1 month',
          category: 'fundamentals',
          description: 'Learn safety equipment, aircraft evacuation drills, fire fighting protocols, and basic aviation first aid.',
          tasks: [
            'Understand emergency equipment: fire extinguishers (Halon), smoke hoods (PBE), life jackets, and oxygen cylinders',
            'Master aircraft evacuation procedures: exit door operation, slide raft deployment, and ditching protocols',
            'Learn first aid management for hypoxia, airsickness, choking, cardiac arrest (CPR/AED), and in-flight childbirth'
          ],
          milestone: 'Pass comprehensive assessment on safety equipment operation and emergency evacuation commands',
          prerequisites: ['10+2 educational qualification and medical fitness check'],
          resources: [
            { title: 'DGCA Civil Aviation Requirements (CAR) - Cabin Crew Training', url: 'https://www.dgca.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Passenger Care, In-Flight Service & Conflict Resolution',
          durationMonths: 1,
          durationText: '1 month',
          category: 'skills',
          description: 'Master premium cabin meal and beverage service, boarding procedures, handling disruptive passengers, and special assistance.',
          tasks: [
            'Practice trolley service management, beverage pouring etiquette, and special dietary meal distribution',
            'Learn de-escalation techniques for unruly or intoxicated passengers according to DGCA CAR regulations',
            'Manage protocols for unaccompanied minors, elderly passengers, and passengers with reduced mobility (PRM)'
          ],
          milestone: 'Conduct simulated cabin announcements in English and Hindi and resolve passenger crisis scenarios',
          prerequisites: ['Safety fundamentals and communication skills'],
          resources: [
            { title: 'Air India Careers Cabin Crew Guidance', url: 'https://www.airindia.com/careers', type: 'official', isFree: true },
            { title: 'IndiGo Airlines Careers Portal', url: 'https://goindigo.app.param.ai/jobs/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Grooming Standards, Group Discussions & Airline Walk-In Interview Prep',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Master strict airline grooming, posture, makeup/hair styling, extempore speaking, and airline interview panels.',
          tasks: [
            'Adhere to airline grooming guidelines: professional makeup, skin care, hair bun/styling, and formal attire',
            'Practice 1-minute impromptu extempore speaking and group discussion moderation on contemporary topics',
            'Participate in mock personal interview rounds evaluating warmth, empathy, crisis composure, and team mindset'
          ],
          milestone: 'Complete 3 airline walk-in interview simulations and qualify BMI and reach test benchmarks',
          prerequisites: ['In-flight service knowledge and grooming discipline'],
          resources: [
            { title: 'National Career Service Portal - Aviation Jobs', url: 'https://www.ncs.gov.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'logistics-manager',
    title: 'Supply Chain & Logistics Manager',
    educationQualification: {
      minimumQualification: 'Bachelor degree in Logistics, Supply Chain Management, Commerce, Business Administration, or Engineering',
      preferredDegree: 'MBA in Supply Chain / Logistics or B.Tech with supply chain certification',
      requiredProfessionalDegreeOrLicense: 'No statutory license required; APICS CSCP or CILT certification provides industry advantage',
      mandatoryRequirements: [
        'Recognized undergraduate degree with strong analytical and vendor coordination abilities',
        'Understanding of multimodal transport, customs regulations, warehousing operations, and GST logistics rules'
      ],
      preferredQualifications: [
        'Certified Supply Chain Professional (CSCP) from ASCM/APICS',
        'Experience with Warehouse Management Systems (SAP EWM, Blue Yonder, Manhattan Associates)'
      ],
      eligibilityCriteria: [
        'Quantitative tracking skills, inventory math, and freight rate negotiation ability'
      ],
      regulatoryNotes: 'Logistics in India is governed by the National Logistics Policy (NLP), Central Board of Indirect Taxes and Customs (CBIC), and Carriage by Road Act.'
    },
    roadmap: {
      totalDurationMonths: 5,
      totalDurationFormatted: '5 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Freight Forwarding, Multimodal Transport & Customs Clearance',
          durationMonths: 2,
          durationText: '2 months',
          category: 'fundamentals',
          description: 'Master Incoterms 2020, Bill of Lading, ICEGATE customs portal, e-Way bills, and coastal/rail freight integration.',
          tasks: [
            'Master Incoterms 2020: FOB, CIF, DDP, EXW, and risk transfer points across global supply chains',
            'Draft and verify shipping documentation: Commercial Invoice, Packing List, Bill of Lading, and Certificate of Origin',
            'Navigate ICEGATE portal: Bill of Entry filing, customs duty classification (HSN codes), and clearance workflows'
          ],
          milestone: 'Complete end-to-end import documentation and clearance simulation for a containerized cargo consignment',
          prerequisites: ['Undergraduate baseline analytical understanding'],
          resources: [
            { title: 'National Logistics Portal (Marine)', url: 'https://nlpmarine.gov.in/', type: 'official', isFree: true },
            { title: 'ICEGATE - Indian Customs Electronic Gateway', url: 'https://www.icegate.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Warehouse Management Systems (WMS) & Route Optimization',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Optimize warehouse slotting, picking strategies (batch/wave picking), last-mile route dispatch, and fleet management.',
          tasks: [
            'Configure warehouse inbound receiving, putaway rules, cross-docking, and cycle counting in WMS software',
            'Apply Vehicle Routing Problem (VRP) algorithms to minimize fleet fuel costs and last-mile turnaround times',
            'Track logistics KPIs: Order Fill Rate, On-Time In-Full (OTIF), Dock-to-Stock time, and Cost Per Ton-Km'
          ],
          milestone: 'Design an optimized warehouse layout and fleet dispatch model reducing transit turnaround by 12%',
          prerequisites: ['Freight forwarding and customs knowledge'],
          resources: [
            { title: 'Logistics Sector Skill Council (LSC) India', url: 'https://lsc-india.com/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Logistics Cost Modeling, Vendor Negotiations & Interview Prep',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Build freight cost sensitivity models in Excel/Power BI, negotiate 3PL service level agreements, and prepare for interviews.',
          tasks: [
            'Build total landed cost models comparing multimodal options (road vs rail vs coastal shipping)',
            'Draft 3PL and 4PL carrier Service Level Agreements (SLAs) with strict penalty matrices for SLA breaches',
            'Prepare interview case responses on supply chain resilience, festival peak volume surges, and carrier strikes'
          ],
          milestone: 'Deliver a complete logistics RFP response and complete 2 mock supply chain executive interviews',
          prerequisites: ['WMS and routing metrics'],
          resources: [
            { title: 'Ministry of Commerce & Industry - Logistics Division', url: 'https://logistics.gov.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'agricultural-scientist',
    title: 'Agricultural Scientist (Agronomy / Genetics / Soil Science)',
    educationQualification: {
      minimumQualification: 'Master degree in Agriculture (M.Sc Agri) in Agronomy, Genetics & Plant Breeding, Soil Science, Horticulture, or related discipline',
      preferredDegree: 'Ph.D. in Agricultural Sciences from an ICAR-accredited State Agricultural University (SAU) or Deemed Agricultural University (e.g. IARI, NDRI, IVRI)',
      requiredProfessionalDegreeOrLicense: 'Selection through Agricultural Scientists Recruitment Board (ASRB) Agricultural Research Service (ARS) Examination or ICAR-NET qualification',
      mandatoryRequirements: [
        'Recognized Master degree in concerned agricultural discipline with minimum 55-60% marks',
        'Passing ASRB ARS Preliminary and Mains examinations (for ARS Scientist posts) or qualifying ICAR-NET (for Assistant Professor posts in SAUs)',
        'Demonstrated experimental field research design and statistical analysis capability'
      ],
      preferredQualifications: [
        'Research papers published in NAAS (National Academy of Agricultural Sciences) rated journals (rating > 6.0)',
        'Experience with statistical software (SAS, R, OPSTAT)'
      ],
      eligibilityCriteria: [
        'Age Limit: 21 to 32 years for ASRB ARS examination (with government category relaxations)',
        'Indian citizenship'
      ],
      regulatoryNotes: 'Agricultural research standards are coordinated nationally by the Indian Council of Agricultural Research (ICAR) under the Department of Agricultural Research and Education (DARE).'
    },
    roadmap: {
      totalDurationMonths: 6,
      totalDurationFormatted: '6 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Advanced Agronomic Concepts, Genetics & Soil Health Revision',
          durationMonths: 2,
          durationText: '2 months',
          category: 'fundamentals',
          description: 'Deep revision of discipline-specific ICAR syllabus: crop physiology, Mendelian and quantitative genetics, soil chemistry, or nutrient management.',
          tasks: [
            'Revise advanced concepts in plant breeding methodologies: pedigree, recurrent selection, marker-assisted selection (MAS)',
            'Study integrated nutrient management, micronutrient deficiencies, and soil microbiological dynamics',
            'Synthesize latest research advances on climate-resilient agriculture and water conservation techniques'
          ],
          milestone: 'Complete comprehensive concept notebook covering entire ASRB ARS discipline syllabus',
          prerequisites: ['Postgraduate degree in agricultural sciences'],
          resources: [
            { title: 'Agricultural Scientists Recruitment Board (ASRB) Official Portal', url: 'https://www.asrb.org.in/', type: 'official', isFree: true },
            { title: 'Indian Council of Agricultural Research (ICAR)', url: 'https://icar.org.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Field Experimental Designs, Statistical Analysis & NAAS Paper Writing',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Master Randomized Block Design (RBD), Split-Plot Design, Factorial Experiments, statistical analysis in R/OPSTAT, and paper writing.',
          tasks: [
            'Analyze multi-location field crop trials using Analysis of Variance (ANOVA), LSD, and Duncan’s multiple range tests',
            'Calculate genetic variability parameters: GCV, PCV, heritability, and genetic advance',
            'Draft a scientific research paper formatted for publication in NAAS-rated agricultural journals'
          ],
          milestone: 'Complete data analysis of a simulated 2-year field experiment and finalize journal manuscript draft',
          prerequisites: ['Advanced agricultural subject revision'],
          resources: [
            { title: 'National Academy of Agricultural Sciences (NAAS) Journal Ratings', url: 'http://naas.org.in/', type: 'official', isFree: true },
            { title: 'CeRA - Consortium for e-Resources in Agriculture', url: 'https://cera.icar.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'ASRB ARS Exam Simulation & Scientist Viva Voce Preparation',
          durationMonths: 2,
          durationText: '2 months',
          category: 'interview-prep',
          description: 'Solve descriptive ARS Mains questions, practice rapid objective Prelims tests, and prepare for scientist board interview.',
          tasks: [
            'Write timed descriptive answers covering fundamental and applied aspects of agricultural challenges in India',
            'Practice defending research thesis, experimental hypotheses, and future research plans before mock panels',
            'Review national agricultural policies, MSP mechanisms, crop insurance, and ICAR biofortified crop varieties'
          ],
          milestone: 'Complete 3 full ARS Mains test series and score positively in mock agricultural scientist interview',
          prerequisites: ['Experimental design and manuscript drafting'],
          resources: [
            { title: 'Indian Agricultural Research Institute (IARI)', url: 'https://www.iari.res.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'agricultural-officer',
    title: 'Agriculture Field Officer (IBPS AFO / State AO)',
    educationQualification: {
      minimumQualification: '4-year Bachelor degree in Agriculture, Horticulture, Animal Husbandry, Veterinary Science, Dairy Science, Fishery Science, Agricultural Engineering, or Forestry from a recognized university',
      preferredDegree: 'B.Sc (Honours) Agriculture from an ICAR-accredited university',
      requiredProfessionalDegreeOrLicense: 'Selection through IBPS Specialist Officer (Agriculture Field Officer - Scale I) Examination or State Department of Agriculture PSC exam',
      mandatoryRequirements: [
        '4-year professional graduation degree in agriculture or allied discipline with minimum 60% marks',
        'Passing Prelims examination (English, Quantitative Aptitude, Reasoning)',
        'Passing Mains examination (60 objective questions strictly on Professional Knowledge of Agriculture)',
        'Passing Personal Interview conducted by participating public sector banks'
      ],
      preferredQualifications: [
        'Strong rural communication skills and understanding of priority sector lending (PSL) norms'
      ],
      eligibilityCriteria: [
        'Age Limit: 20 to 30 years for IBPS SO (with central category relaxations)',
        'Indian citizenship',
        'Physical willingness to conduct extensive field visits in rural branch jurisdictions'
      ],
      regulatoryNotes: 'Agriculture Field Officers work in public and commercial banks (SBI, PNB, Canara Bank, Bank of Baroda) managing agricultural loans, Kisan Credit Cards (KCC), and rural credit portfolios.'
    },
    roadmap: {
      totalDurationMonths: 4,
      totalDurationFormatted: '4 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Core Agriculture Professional Knowledge Revision',
          durationMonths: 2,
          durationText: '2 months',
          category: 'fundamentals',
          description: 'Comprehensive revision of high-weightage agricultural topics: agronomy, seed rates, soil science, plant protection, and animal husbandry.',
          tasks: [
            'Memorize seed rates, spacing, critical irrigation stages, and herbicide recommendations for cereal, pulse, and oilseed crops',
            'Review pest-disease management: major crop pests, biological control agents, and insecticide active ingredients',
            'Study breeds of cattle, buffalo, sheep, and poultry; daily feed rationing and lactation cycles'
          ],
          milestone: 'Consistently score 45+/60 in agricultural professional knowledge sectional mock tests',
          prerequisites: ['4-year B.Sc Agriculture degree basics'],
          resources: [
            { title: 'IBPS Official Specialist Officer Portal', url: 'https://www.ibps.in/', type: 'official', isFree: true },
            { title: 'Ministry of Agriculture and Farmers Welfare', url: 'https://agricoop.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Government Agricultural Schemes & NABARD Priority Lending Guidelines',
          durationMonths: 1,
          durationText: '1 month',
          category: 'skills',
          description: 'Master Kisan Credit Card (KCC) norms, interest subvention, PMFBY crop insurance, NABARD unit costs, and agri-infrastructure funds.',
          tasks: [
            'Learn scale of finance, KCC limit calculation, and crop loan interest subvention guidelines (3% prompt repayment incentive)',
            'Study NABARD unit costs for dairy, poultry, drip irrigation, polyhouses, and cold storage projects',
            'Analyze Priority Sector Lending (PSL) mandatory sub-targets: 18% agriculture, 10% small and marginal farmers'
          ],
          milestone: 'Score 90%+ on targeted banking awareness and government agricultural scheme mock tests',
          prerequisites: ['Core agricultural technical revision'],
          resources: [
            { title: 'NABARD Model Bankable Projects Repository', url: 'https://www.nabard.org/', type: 'official', isFree: true },
            { title: 'Reserve Bank of India Master Directions on Priority Sector Lending', url: 'https://www.rbi.org.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Full Mock Examinations, Credit Appraisal & Bank Interview Prep',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Attempt 20 full-length IBPS AFO mock tests, learn agricultural credit appraisal, and rehearse bank panel interview questions.',
          tasks: [
            'Attempt 15 full-length mock examinations managing 45-minute sectional limits for Professional Knowledge',
            'Practice calculating project viability, Debt Service Coverage Ratio (DSCR), and repayment schedules for dairy/tractor loans',
            'Participate in mock panel interviews answering questions on crop damage assessments, NPA recovery, and rural credit delivery'
          ],
          milestone: 'Complete 2 panel interview simulations with senior bank managers and achieve qualifying benchmark scores',
          prerequisites: ['Professional knowledge and NABARD guidelines'],
          resources: [
            { title: 'National Career Service Portal - Agricultural Banking', url: 'https://www.ncs.gov.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'veterinarian',
    title: 'Veterinary Doctor / Veterinary Surgeon',
    educationQualification: {
      minimumQualification: 'Bachelor of Veterinary Science and Animal Husbandry (B.V.Sc. & A.H. - 5.5-year degree program including 1-year compulsory rotating internship) from a recognized Veterinary College',
      preferredDegree: 'Master of Veterinary Science (M.V.Sc) in Surgery, Medicine, Gynaecology, or Pathology',
      requiredProfessionalDegreeOrLicense: 'Mandatory Registration Certificate issued by the Veterinary Council of India (VCI) or respective State Veterinary Council under the Indian Veterinary Council Act, 1984',
      mandatoryRequirements: [
        'Completion of recognized 5.5-year B.V.Sc. & A.H. degree program compliant with VCI minimum standards of veterinary education regulations',
        'Completion of 12-month compulsory rotating internship training in clinical, ambulatory, and livestock farm practice',
        'Valid VCI / State Veterinary Council registration number required to legally practice veterinary medicine or surgery in India'
      ],
      preferredQualifications: [
        'Postgraduate specialization (M.V.Sc.) or certification in small animal ultrasonography / orthopedic surgery',
        'State Veterinary Officer examination clearance'
      ],
      eligibilityCriteria: [
        'Passing NEET-UG for admission to 15% All India Quota seats through VCI, or respective State Veterinary Entrance Examinations'
      ],
      regulatoryNotes: 'Veterinary medicine in India is strictly regulated by the Veterinary Council of India (VCI) under the Indian Veterinary Council Act, 1984. Multi-year B.V.Sc. & A.H. degree and Council registration are non-negotiable statutory mandates that precede professional practice.'
    },
    roadmap: {
      totalDurationMonths: 6,
      totalDurationFormatted: '6 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Small & Large Animal Clinical Diagnostics & Preventive Protocols',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Master clinical physical examinations, blood smear interpretations, vaccination schedules, and emergency stabilization.',
          tasks: [
            'Perform systematic physical examinations (temperature, pulse, respiration, mucous membranes, lymph nodes) on canines, felines, and bovines',
            'Interpret complete blood counts (CBC), serum biochemistry panels, and urinalysis for hepatic/renal disorders',
            'Administer core vaccination schedules (DHPPiL, Rabies for dogs; FPV for cats; FMD, HS, BQ for livestock)'
          ],
          milestone: 'Independently diagnose and prescribe evidence-based therapeutic protocols for 25 clinical animal cases',
          prerequisites: ['B.V.Sc. & A.H. degree completed with internship'],
          resources: [
            { title: 'Veterinary Council of India (VCI) Official Portal', url: 'https://vci.dadf.gov.in/', type: 'official', isFree: true },
            { title: 'World Small Animal Veterinary Association (WSAVA) Guidelines', url: 'https://wsava.org/', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Soft Tissue Surgical Procedures, Anaesthesia & Radiology',
          durationMonths: 2,
          durationText: '2 months',
          category: 'practical',
          description: 'Perform aseptic surgical preparation, pre-anaesthetic sedation, endotracheal intubation, spay/neuter surgeries, and radiographic positioning.',
          tasks: [
            'Administer pre-medication, induction, and isoflurane maintenance inhalation anaesthesia with multi-parameter monitoring',
            'Perform standard canine/feline ovariohysterectomy (spay) and castration (neuter) with proper ligatures and subcuticular sutures',
            'Position animals for digital radiography (thoracic, abdominal, orthopedic views) and interpret fracture alignments'
          ],
          milestone: 'Assist and independently execute 10 minor and major soft-tissue surgical procedures under senior veterinary supervision',
          prerequisites: ['Clinical diagnostics and pharmacology'],
          resources: [
            { title: 'Indian Veterinary Association (IVA)', url: 'https://www.ivaofficial.org/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Clinic Administration, State VAS Exam & Practice Setup',
          durationMonths: 2,
          durationText: '2 months',
          category: 'interview-prep',
          description: 'Prepare for State Veterinary Assistant Surgeon (VAS) recruitment examinations or set up private companion animal clinic.',
          tasks: [
            'Solve 5 years of State PSC Veterinary Assistant Surgeon examination past papers',
            'Set up animal patient records management, pharmacy inventory, and medical waste disposal protocols',
            'Practice client communication: discussing terminal prognoses, bereavement, and post-operative home care instructions'
          ],
          milestone: 'Complete State Veterinary Officer mock exam series and finalize clinic standard operating procedure (SOP) manual',
          prerequisites: ['Surgical and medical diagnostics competence'],
          resources: [
            { title: 'Department of Animal Husbandry and Dairying (DAHD) India', url: 'https://dahd.nic.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'environmental-scientist',
    title: 'Environmental Scientist / Environmental Consultant',
    educationQualification: {
      minimumQualification: 'Bachelor degree in Environmental Science, Environmental Engineering, Chemistry, Botany, Zoology, Geology, or Civil Engineering',
      preferredDegree: 'Master of Science (M.Sc) / M.Tech in Environmental Science / Environmental Engineering',
      requiredProfessionalDegreeOrLicense: 'No statutory license for entry roles; NABET (National Accreditation Board for Education & Training) Functional Area Expert (FAE) accreditation required for EIA coordinators',
      mandatoryRequirements: [
        'Recognized postgraduate or professional undergraduate degree in environmental discipline',
        'Solid foundation in Environmental Impact Assessment (EIA), pollution monitoring, and Indian environmental statutes'
      ],
      preferredQualifications: [
        'QCI-NABET EIA Consultant / Functional Area Expert (FAE) certification',
        'ISO 14001:2015 Environmental Management Systems (EMS) Lead Auditor certification'
      ],
      eligibilityCriteria: [
        'Analytical laboratory competence, field sampling skill, and environmental law knowledge'
      ],
      regulatoryNotes: 'Environmental consulting operates under the Environment (Protection) Act, 1986, Air Act, Water Act, EIA Notification 2006, and rules established by Central and State Pollution Control Boards (CPCB / SPCB).'
    },
    roadmap: {
      totalDurationMonths: 5,
      totalDurationFormatted: '5 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Environmental Impact Assessment (EIA) & Indian Statutory Framework',
          durationMonths: 2,
          durationText: '2 months',
          category: 'fundamentals',
          description: 'Master EIA Notification 2006, Terms of Reference (ToR), environmental baseline monitoring, and public hearing procedures.',
          tasks: [
            'Study screening, scoping, baseline data collection, and impact prediction methodologies for industrial/mining projects',
            'Review Air (Prevention and Control of Pollution) Act, 1981, Water Act, 1974, and Hazardous Waste Management Rules',
            'Draft Environmental Management Plans (EMP) with mitigation measures for air, noise, water, and biological diversity impacts'
          ],
          milestone: 'Draft a comprehensive 25-page chapter of an Environmental Impact Assessment (EIA) report for a manufacturing facility',
          prerequisites: ['Postgraduate degree in environmental sciences/engineering'],
          resources: [
            { title: 'Ministry of Environment, Forest and Climate Change (MoEFCC) PARIVESH Portal', url: 'https://parivesh.nic.in/', type: 'official', isFree: true },
            { title: 'Central Pollution Control Board (CPCB) India', url: 'https://cpcb.nic.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Pollution Monitoring, Field Sampling & GIS Spatial Analysis',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Operate ambient air monitors (PM2.5, PM10, SOx, NOx), water sampling equipment, and spatial mapping in QGIS.',
          tasks: [
            'Set up Respirable Dust Samplers and High Volume Air Samplers complying with CPCB standard measurement guidelines',
            'Perform laboratory water and wastewater quality parameters: BOD, COD, TDS, heavy metals, and coliform count',
            'Map land use / land cover (LULC), drainage buffer zones, and environmentally sensitive areas using QGIS and satellite imagery'
          ],
          milestone: 'Deliver a verified environmental baseline monitoring report with QGIS spatial thematic maps',
          prerequisites: ['EIA framework and chemistry/biology fundamentals'],
          resources: [
            { title: 'QGIS Free and Open Source Geographic Information System', url: 'https://qgis.org/', type: 'official', isFree: true },
            { title: 'CPCB Guidelines for Water & Air Quality Monitoring', url: 'https://cpcb.nic.in/guidelines/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'ESG Reporting, Carbon Accounting & Consultant Interview Prep',
          durationMonths: 1,
          durationText: '1 month',
          category: 'interview-prep',
          description: 'Master GHG Protocol corporate carbon footprint accounting, SEBI BRSR (Business Responsibility and Sustainability Reporting), and consulting interview prep.',
          tasks: [
            'Calculate Scope 1, Scope 2, and Scope 3 greenhouse gas emissions using GHG Protocol emission factors',
            'Compile environmental disclosures for SEBI BRSR Core compliance for Indian corporate enterprises',
            'Prepare interview presentations analyzing industrial pollution control technologies and effluent treatment plants (ETP)'
          ],
          milestone: 'Complete a corporate Scope 1 & 2 carbon accounting model and clear mock environmental consultant interview',
          prerequisites: ['EIA drafting and environmental monitoring data'],
          resources: [
            { title: 'SEBI BRSR Guidance Document on ESG Reporting', url: 'https://www.sebi.gov.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'entrepreneur',
    title: 'Startup Founder / Entrepreneur',
    educationQualification: {
      minimumQualification: 'No formal statutory educational qualification required to start or incorporate a business enterprise',
      preferredDegree: 'Bachelor or Master degree in Engineering, Business Administration, Commerce, or domain-specific field',
      requiredProfessionalDegreeOrLicense: 'Company registration (Private Limited, LLP, or OPC) with Ministry of Corporate Affairs (MCA), GST registration, and Startup India recognition',
      mandatoryRequirements: [
        'Obtaining Director Identification Number (DIN) and Digital Signature Certificate (DSC)',
        'Incorporation through SPICe+ form on MCA portal',
        'PAN, TAN, GSTIN, and corporate bank account setup',
        'Compliance with applicable sector-specific regulatory licenses (e.g. FSSAI, RBI fintech, CDSCO healthcare)'
      ],
      preferredQualifications: [
        'Startup India DPIIT recognition (eligibility for Section 80-IAC tax exemptions and patent fast-tracking)',
        'Incubation or acceleration program participation'
      ],
      eligibilityCriteria: [
        'Commercial resilience, customer empathy, product vision, and financial risk tolerance'
      ],
      regulatoryNotes: 'Businesses in India operate under the Companies Act, 2013, LLP Act, 2008, GST Act, 2017, and Startup India initiative policies.'
    },
    roadmap: {
      totalDurationMonths: 4,
      totalDurationFormatted: '4 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Market Opportunity Discovery & Customer Problem Validation',
          durationMonths: 1,
          durationText: '1 month',
          category: 'fundamentals',
          description: 'Formulate hypotheses, conduct 30 customer problem interviews, analyze competitors, and determine Total Addressable Market (TAM).',
          tasks: [
            'Conduct mom-test style discovery interviews with 30 target customers to validate genuine willingness to pay',
            'Estimate Bottom-Up TAM, SAM, and SOM for the specific market niche in India',
            'Map direct and indirect competitor positioning, pricing strategies, and service gaps'
          ],
          milestone: 'Document customer interview insights validating genuine unmet customer demand with quantifiable metrics',
          prerequisites: ['Basic market curiosity and problem identification'],
          resources: [
            { title: 'Startup India Official Learning Hub & Scheme Portal', url: 'https://www.startupindia.gov.in/', type: 'official', isFree: true },
            { title: 'Y Combinator Startup School Free Curriculum', url: 'https://www.startupschool.org/', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Minimum Viable Product (MVP) Build & Lean Prototyping',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Build a rapid no-code or minimum feature product, set up user landing pages, and acquire initial beta users.',
          tasks: [
            'Build an MVP using no-code tools (Webflow, Bubble, Glide) or basic software stack focusing on one core feature',
            'Set up payment gateway integration (Razorpay, Cashfree) and test transactional workflows',
            'Acquire first 50 active beta users through organic community outreach, cold emails, or pilot partnerships'
          ],
          milestone: 'Launch functioning MVP and secure first 10 paying customers or letter of intent (LOI) commitments',
          prerequisites: ['Customer discovery validation'],
          resources: [
            { title: 'The Lean Startup Methodology Resources', url: 'https://theleanstartup.com/', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Unit Economics, Company Incorporation & Seed Pitch Deck',
          durationMonths: 1,
          durationText: '1 month',
          category: 'practical',
          description: 'Model Customer Acquisition Cost (CAC) vs Lifetime Value (LTV), incorporate company on MCA portal, and build pitch deck.',
          tasks: [
            'Incorporate Private Limited entity on MCA SPICe+ portal and apply for DPIIT Startup India certificate',
            'Calculate unit economics: gross margin, CAC, payback period, and monthly burn rate',
            'Craft a 10-slide investor pitch deck covering Problem, Solution, Traction, Market Size, Business Model, Team, and Ask'
          ],
          milestone: 'Complete company incorporation, obtain DPIIT recognition, and finalize investor-ready pitch deck',
          prerequisites: ['MVP launch and initial traction'],
          resources: [
            { title: 'Ministry of Corporate Affairs (MCA) SPICe+ Portal', url: 'https://www.mca.gov.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  }
];
