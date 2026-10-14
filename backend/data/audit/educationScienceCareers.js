/**
 * Education and Science Careers Audit Data (4 Careers)
 * Covers: teacher, college-professor, instructional-designer, research-scientist.
 * Validated for Indian regulatory bodies (NCTE, UGC, CSIR, DST),
 * 7th Central Pay Commission (CPC) academic pay matrices, and verified learning pipelines.
 */

const educationScienceCareers = [
  {
    slug: 'teacher',
    title: 'School Teacher (PRT / TGT / PGT)',
    description: 'Instructs school students across primary, middle, and senior secondary grades in CBSE, ICSE, and State Board schools. Designs lesson plans, assesses learning outcomes, and prepares students for board examinations in accordance with the National Education Policy (NEP 2020).',
    educationRequirements: 'Graduation / Post-Graduation in teaching subject + Bachelor of Education (B.Ed - 2 years) approved by the National Council for Teacher Education (NCTE). Mandatory clearance of Central Teacher Eligibility Test (CTET Paper I/II) or State TET.',
    educationPathways: [
      'Primary Teacher (PRT): 10+2 with 50% + D.El.Ed (2 years) + CTET Paper-I',
      'Trained Graduate Teacher (TGT - Classes 6 to 10): Bachelor\'s degree in subject (> 50%) + B.Ed + CTET Paper-II',
      'Post Graduate Teacher (PGT - Classes 11 and 12): Master\'s degree in subject (> 50%) + B.Ed',
      'NEP Integrated Pathway: 4-Year Integrated ITEP (B.A. B.Ed / B.Sc B.Ed)'
    ],
    eligibilityRequirements: 'Graduation or Post-Graduation with minimum 50% marks + NCTE-recognized B.Ed. Mandatory CTET qualification for central government schools (KVS, NVS, Army Public Schools).',
    certificationsAndExams: [
      'CTET (Central Teacher Eligibility Test - CBSE)',
      'State TET (e.g., UPTET, MahaTET, REET, KTET)',
      'Kendriya Vidyalaya Sangathan (KVS) / Navodaya Vidyalaya Samiti (NVS) Direct Recruitment Exam'
    ],
    workEnvironment: 'Government schools (Kendriya Vidyalayas, Jawahar Navodaya Vidyalayas, State Government schools), private CBSE/ICSE institutions, and international schools.',
    marketDemand: 'Very High',
    jobOutlook: 'Substantial recurring vacancies across central and state government school systems (over 10,000+ KVS/NVS posts annually); steady recruitment in private schools.',
    salaryRange: { min: 350000, max: 1100000, currency: 'INR', source: '7th CPC School Teacher Pay Scales (PRT Level 6, TGT Level 7, PGT Level 8), AmbitionBox Teacher' },
    salarySource: '7th CPC School Teacher Pay Scales (PRT Level 6, TGT Level 7, PGT Level 8), AmbitionBox Teacher',
    salaryByExperience: {
      entryLevel: { min: 350000, max: 550000, label: 'Primary Teacher (PRT) / Trainee (0–2 yrs)' },
      earlyCareer: { min: 550000, max: 850000, label: 'TGT / PGT Teacher (3–5 yrs)' },
      experienced: { min: 850000, max: 1400000, label: 'Senior PGT / Vice Principal / Principal (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Central government teachers (KVS/NVS) receive 7th Pay Commission scales: PRT starts at Level 6 (~₹50,000/month), TGT at Level 7 (~₹65,000/month), and PGT at Level 8 (~₹75,000/month plus DA and HRA). Top private international IB schools pay ₹8–16 LPA.'
    },
    careerProgression: [
      'Primary Teacher (PRT)',
      'Trained Graduate Teacher (TGT)',
      'Post Graduate Teacher (PGT)',
      'Headmaster / Vice Principal',
      'School Principal / Academic Director'
    ],
    employmentSectors: {
      government: 'Kendriya Vidyalaya Sangathan (KVS), Navodaya Vidyalaya Samiti (NVS), Delhi Subordinate Services (DSSSB), State Government Department of School Education, Eklavya Model Residential Schools (EMRS)',
      privateSector: 'Top Private CBSE/ICSE Chains (DPS, DAV, Ryan International, Podar), International Baccalaureate (IB) World Schools, EdTech Platforms'
    },
    timelineOverview: {
      totalEstimatedDuration: '5–6 Years from 10+2 (3 Years Graduation + 2 Years B.Ed + 6 Months CTET/KVS prep)',
      educationDuration: '3–4 Years Undergrad + 2 Years B.Ed',
      prepDuration: '3–6 Months dedicated CTET and KVS/State recruitment exam preparation',
      practicalTrainingDuration: '4 Months mandatory school practice teaching internship during B.Ed curriculum',
      jobSearchDuration: 'Immediate employment in private schools or 3–6 months recruitment exam notification cycle',
      overlapNotes: 'B.Ed includes 16 weeks of continuous school classroom internship in 2nd year.',
      confidenceNote: 'Clearing CTET with > 60% provides lifetime eligibility for central government teaching appointments.'
    },
    sources: [
      { title: 'National Council for Teacher Education (NCTE) Regulations', url: 'https://ncte.gov.in', sourceAuthority: 'NCTE India', verifiedDate: '2024-10-14' },
      { title: 'Central Teacher Eligibility Test (CTET) Official Portal', url: 'https://ctet.nic.in', sourceAuthority: 'CBSE', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'School Teacher (CTET & KVS/NVS) Career Roadmap',
      description: 'Pedagogical pathway: subject graduation, NCTE-recognized B.Ed program, school internship, CTET Paper I & II clearance, and KVS/NVS teacher recruitment examination.',
      totalEstimatedDuration: '5 Years',
      durationBreakdown: 'Bachelor\'s Degree in Teaching Discipline: 3 Years | B.Ed Degree & School Internship: 2 Years | CTET & Government Teacher Recruitment: Post-B.Ed',
      overlapNotes: 'CTET preparation is conducted concurrently during the final semester of the B.Ed program.',
      steps: [
        {
          stepNumber: 1,
          title: 'Bachelor’s Degree in Teaching Subject',
          stageType: 'education',
          duration: '3–4 Years',
          description: 'Obtain undergraduate degree in target teaching subjects (e.g., Mathematics, Physics, Chemistry, Biology, History, English, Hindi) with minimum 50% aggregate.',
          topics: ['Core Subject Knowledge & Syllabi', 'Foundations of Child Psychology', 'Effective Communication Skills'],
          skillsToAcquire: ['Subject Conceptual Clarity', 'Classroom Presentation Poise'],
          activities: ['Tutor high school students in subject matter to build pedagogical delivery skills', 'Maintain academic score above 50% for B.Ed entrance eligibility'],
          completionCriteria: 'Award of Bachelor\'s degree in teaching subject.',
          dependencies: '10+2 from recognized board',
          resources: [
            { name: 'NCERT Online Textbooks (Classes 1 to 12)', url: 'https://ncert.nic.in/textbook.php', type: 'Official Textbooks', isFree: true },
            { name: 'SWAYAM Pedagogy Courses', url: 'https://swayam.gov.in', type: 'Course', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Bachelor of Education (B.Ed) & Classroom Internship',
          stageType: 'education',
          duration: '2 Years',
          description: 'Enroll in an NCTE-approved B.Ed program; study childhood development, learning theories (Piaget, Vygotsky), pedagogical methodologies, and complete 16-week school internship.',
          topics: ['Child Development & Learning Theories', 'Pedagogy of School Subjects', 'Assessment for Learning & Formative Testing', 'Inclusive Education & Classroom Management'],
          skillsToAcquire: ['Lesson Plan Construction', 'Creating Engaging Teaching Learning Materials (TLM)', 'Continuous and Comprehensive Evaluation (CCE)'],
          activities: ['Prepare 40+ structured daily lesson plans for middle and secondary grades', 'Complete 16-week continuous school teaching practice under mentor supervision'],
          completionCriteria: 'Clear B.Ed university practical teaching and theory examinations.',
          dependencies: 'Bachelor\'s Degree with minimum 50% marks',
          resources: [
            { name: 'NCTE Curriculum Framework for Teacher Education', url: 'https://ncte.gov.in', type: 'Official Curriculum', isFree: true },
            { name: 'DIKSHA National Teacher Platform', url: 'https://diksha.gov.in', type: 'Government Platform', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Central Teacher Eligibility Test (CTET Paper I & II)',
          stageType: 'certification',
          duration: '3–6 Months',
          description: 'Crack CTET Paper-I (for Classes 1–5 PRT) and Paper-II (for Classes 6–8 TGT) testing Child Development and Pedagogy, Mathematics, Science/Social Science, and Languages.',
          topics: ['Child Development & Pedagogy (30 MCQs)', 'Subject-Specific Pedagogy (60 MCQs)', 'Language I & II Comprehension & Grammar', 'National Education Policy (NEP 2020) Paradigms'],
          skillsToAcquire: ['Pedagogical Reasoning for Objective MCQs', 'Time Management (150 Questions in 150 Minutes)'],
          activities: ['Solve past 10 years CTET question papers on CBSE online portal', 'Score > 60% (90/150 marks) to secure lifetime CTET eligibility certificate on DigiLocker'],
          completionCriteria: 'CTET Qualification Certificate issued by CBSE.',
          dependencies: 'Enrolled in or completed B.Ed / D.El.Ed',
          resources: [
            { name: 'CBSE CTET Previous Year Question Papers', url: 'https://ctet.nic.in', type: 'Official Papers', isFree: true },
            { name: 'National Education Policy 2020 Guidelines', url: 'https://www.education.gov.in/nep', type: 'Government Policy', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Government Teacher Recruitment (KVS / NVS / State TET)',
          stageType: 'job_search',
          duration: '3–6 Months',
          description: 'Appear for KVS / NVS / State teacher direct recruitment exams consisting of written test, pedagogical demonstration class, and interview panel.',
          topics: ['General Awareness & Current Affairs', 'Perspective on Education and Leadership', 'Classroom Teaching Demonstration (Interview Round)'],
          skillsToAcquire: ['Live Demo Class Micro-Teaching Delivery', 'Blackboard / Smartboard Classroom Teaching', 'Interview Panel Communication'],
          activities: ['Conduct simulated 15-minute live teaching demonstration before mock evaluation panel', 'Secure rank in KVS/NVS final selection merit list'],
          completionCriteria: 'Appointment as PRT, TGT, or PGT in a central or state government school.',
          dependencies: 'CTET Certificate and B.Ed degree',
          resources: [
            { name: 'Kendriya Vidyalaya Sangathan (KVS) Recruitment Portal', url: 'https://kvsangathan.nic.in', type: 'Recruitment Portal', isFree: true },
            { name: 'Navodaya Vidyalaya Samiti (NVS) Recruitment Portal', url: 'https://navodaya.gov.in', type: 'Recruitment Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'college-professor',
    title: 'College Professor / Assistant Professor',
    description: 'Delivers undergraduate and postgraduate lectures, supervises doctoral dissertations, conducts peer-reviewed scientific research, and publishes academic journal articles across Indian central, state, and private universities governed by UGC guidelines.',
    educationRequirements: 'Master\'s degree with minimum 55% marks + UGC-NET / CSIR-NET qualification or Ph.D. in accordance with University Grants Commission (UGC) Minimum Qualifications for Appointment of Teachers and other Academic Staff Regulations 2018.',
    educationPathways: [
      'Master\'s Degree (55%) -> Qualify UGC-NET / CSIR-NET -> Eligible for direct recruitment as Assistant Professor (Academic Level 10)',
      'Ph.D. Degree awarded in accordance with UGC Regulations 2018 (mandatory for University Departments and promotion to Associate Professor)',
      'State Eligibility Test (SET / SLET) for state-specific college appointments'
    ],
    eligibilityRequirements: 'Minimum 55% marks (50% for SC/ST/OBC-NCL) at the Master\'s level in relevant discipline. Clearing UGC-NET/CSIR-NET or possessing a regular Ph.D. degree.',
    certificationsAndExams: [
      'UGC-NET (National Eligibility Test - NTA)',
      'CSIR-UGC NET (for Science disciplines)',
      'State Eligibility Test (SET / SLET)',
      'Faculty Development Programme (FDP) / SWAYAM ARPIT Certification'
    ],
    workEnvironment: 'Central universities (DU, JNU, BHU, HCUC), State universities, IITs/NITs, government degree colleges, and accredited private universities across India.',
    marketDemand: 'Moderate to High',
    jobOutlook: 'Continuous vacancies created by expansion of central universities, AIIMS, IITs, IIMs, and retirement of senior faculty; UGC 7th CPC salary structure offers high job security.',
    salaryRange: { min: 800000, max: 2400000, currency: 'INR', source: 'UGC 7th CPC Academic Pay Matrix (Level 10 to Level 14), University Pay Circulars' },
    salarySource: 'UGC 7th CPC Academic Pay Matrix (Level 10 to Level 14), University Pay Circulars',
    salaryByExperience: {
      entryLevel: { min: 800000, max: 1200000, label: 'Assistant Professor (Entry - Academic Level 10) (0–2 yrs)' },
      earlyCareer: { min: 1200000, max: 1800000, label: 'Assistant Professor (Senior Scale - Level 11/12) (3–5 yrs)' },
      experienced: { min: 1800000, max: 2800000, label: 'Associate Professor / Professor (Level 13A/14) (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Assistant Professors under UGC 7th CPC start at Academic Level 10 (Entry Basic ₹57,700/month, resulting in gross pay of ~₹85,000–1,05,000/month including DA and HRA). Full Professors (Level 14) earn ₹1.8 to ₹2.6 Lakhs/month.'
    },
    careerProgression: [
      'Assistant Professor (Academic Level 10)',
      'Assistant Professor (Senior Scale - Academic Level 11)',
      'Assistant Professor (Selection Grade - Academic Level 12)',
      'Associate Professor (Academic Level 13A)',
      'Professor (Academic Level 14) / Dean / Vice-Chancellor'
    ],
    employmentSectors: {
      government: 'Central Universities (Delhi University, JNU, BHU, AMU), State Public Universities & Government Degree Colleges (via State PSC), IITs, NITs, IISERs',
      privateSector: 'NAAC A++ Accredited Private Universities (Ashoka, BITS Pilani, Manipal, Amity, OP Jindal), Affiliated Autonomous Colleges'
    },
    timelineOverview: {
      totalEstimatedDuration: '5–8 Years (3 Years Undergrad + 2 Years Postgrad + 3–5 Years Ph.D. / NET)',
      educationDuration: '5 Years (Bachelor\'s + Master\'s) + 3–5 Years (Ph.D.)',
      prepDuration: '6–12 Months intensive UGC-NET / CSIR-NET preparation',
      practicalTrainingDuration: 'Teaching Assistantship and seminar presentations during doctoral tenure',
      jobSearchDuration: '3–6 Months recruitment notification cycle and university screening interview',
      overlapNotes: 'Doctoral scholars receiving UGC JRF (₹37,000/month + HRA) conduct research and teach concurrently.',
      confidenceNote: 'While UGC made NET the minimum eligibility for Assistant Professor in 2023, possessing a Ph.D. with indexed journal publications gives substantial Academic Performance Indicator (API) score advantage.'
    },
    sources: [
      { title: 'UGC Regulations on Minimum Qualifications for Appointment of Teachers 2018', url: 'https://www.ugc.gov.in', sourceAuthority: 'University Grants Commission', verifiedDate: '2024-10-14' },
      { title: 'NTA UGC-NET Official Examination Portal', url: 'https://ugcnet.nta.ac.in', sourceAuthority: 'NTA / UGC', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'College Professor / Assistant Professor Career Roadmap',
      description: 'Higher education academic pathway: Master\'s degree, UGC-NET / CSIR-NET examination, doctoral research (Ph.D.), peer-reviewed journal publications, and university faculty selection.',
      totalEstimatedDuration: '6–8 Years',
      durationBreakdown: 'Postgraduate Master\'s Degree: 2 Years | UGC-NET JRF Clearance: 6–12 Months | Ph.D. Research & Teaching Assistantship: 3–4 Years | University Appointment: Post-Ph.D./NET',
      overlapNotes: 'Doctoral researchers teach undergraduate tutorial classes while completing their research thesis.',
      steps: [
        {
          stepNumber: 1,
          title: 'Master’s Degree in Specialized Discipline',
          stageType: 'education',
          duration: '2 Years',
          description: 'Complete postgraduate degree (M.A., M.Sc, M.Com, M.Tech) in relevant academic discipline from a recognized university with minimum 55% aggregate marks.',
          topics: ['Advanced Subject Theoretical Frameworks', 'Research Methodologies & Scientific Inquiries', 'Critical Literature Review & Seminars'],
          skillsToAcquire: ['Academic Writing', 'Literature Synthesis', 'Statistical & Qualitative Research Methods'],
          activities: ['Write master\'s dissertation based on original primary or secondary academic research', 'Present research paper at a national university seminar'],
          completionCriteria: 'Obtain Master\'s degree with at least 55% marks (50% for reserved categories).',
          dependencies: 'Bachelor\'s Degree with minimum 50-55%',
          resources: [
            { name: 'SWAYAM PG MOOCs Repository', url: 'https://swayam.gov.in', type: 'Course Platform', isFree: true },
            { name: 'e-PG Pathshala (MHRD / UGC Portal)', url: 'https://epgp.inflibnet.ac.in', type: 'Government Learning', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'UGC-NET / CSIR-NET Examination (Assistant Professor & JRF)',
          stageType: 'certification',
          duration: '6–12 Months',
          description: 'Clear National Eligibility Test (Paper I: Teaching & Research Aptitude, Paper II: Subject Specialization) to qualify for Assistant Professor and secure Junior Research Fellowship (JRF).',
          topics: ['Paper I: Teaching Aptitude, Research Aptitude, Higher Education System', 'Paper II: Core Postgraduate Subject Syllabus', 'Data Interpretation & Logical Argument Fallacies'],
          skillsToAcquire: ['Pedagogical Evaluation Technique', 'Fast MCQ Problem Solving under UGC Marking Criteria'],
          activities: ['Solve past 10 years UGC-NET Paper I and Paper II previous year question papers', 'Score above cutoff percentile to secure JRF award letter (valid for 3 years)'],
          completionCriteria: 'Award of UGC-NET Certificate for Assistant Professor and JRF.',
          dependencies: 'Master\'s Degree with minimum 55% marks (or appearing in final semester)',
          resources: [
            { name: 'NTA UGC-NET Official Portal', url: 'https://ugcnet.nta.ac.in', type: 'Official Portal', isFree: true },
            { name: 'CSIR-HRDG Examination Portal', url: 'https://csirhrdg.res.in', type: 'Official Portal', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Doctoral Research (Ph.D.) & Peer-Reviewed Publications',
          stageType: 'practical_experience',
          duration: '3–4 Years',
          description: 'Enroll in doctoral program in a central/state university under JRF fellowship; conduct original research, publish papers in UGC-CARE / Scopus indexed journals, and submit thesis.',
          topics: ['Original Research Hypothesis Formulation', 'Data Collection (Fieldwork / Laboratory)', 'UGC-CARE List & Scopus / Web of Science Indexing Norms', 'Dissertation Viva-Voce Defense'],
          skillsToAcquire: ['High-Impact Scientific Publishing', 'Undergraduate Tutorial Delivery', 'Conference Presentation Delivery'],
          activities: ['Publish minimum 2-3 research articles in peer-reviewed UGC-CARE listed journals', 'Complete pre-Ph.D. submission seminar and defend doctoral thesis before external examiner panel'],
          completionCriteria: 'Award of Ph.D. degree in compliance with UGC Regulations 2018.',
          dependencies: 'UGC-NET JRF or University Ph.D. Entrance Test (RET)',
          resources: [
            { name: 'UGC-CARE Reference List of Quality Journals', url: 'https://ugccare.unipune.ac.in', type: 'Official Journal Index', isFree: true },
            { name: 'Shodhganga Indian Electronic Theses & Dissertations', url: 'https://shodhganga.inflibnet.ac.in', type: 'Research Repository', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'University Faculty Selection & Assistant Professorship',
          stageType: 'job_search',
          duration: 'Post-Ph.D. / Post-NET Selection',
          description: 'Apply against faculty recruitment notifications in central/state universities or colleges; submit Academic Performance Indicator (API) score dossier and clear interview panel.',
          topics: ['Academic Performance Indicator (API) Score Calculation', 'Classroom Teaching Demonstration', 'Research Grant Proposal Formulation (DST / ICSSR)'],
          skillsToAcquire: ['University Faculty Interview Defense', 'Curriculum Formulation & Board of Studies Advisory', 'Research Grant Application Writing'],
          activities: ['Present 20-minute lecture demonstration before the University Selection Committee', 'Secure permanent appointment as Assistant Professor (Academic Level 10)'],
          completionCriteria: 'Appointment as Assistant Professor in central/state/private university.',
          dependencies: 'UGC-NET qualification or Ph.D. degree',
          resources: [
            { name: 'UGC CU-Chayan Central University Faculty Recruitment Portal', url: 'https://curec.samarth.ac.in', type: 'Government Recruitment', isFree: true },
            { name: 'Delhi University Faculty Recruitment Portal', url: 'https://rec.du.ac.in', type: 'Recruitment Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'instructional-designer',
    title: 'Instructional Designer (E-Learning / EdTech)',
    description: 'Designs digital learning experiences, online course curricula, interactive simulations, and corporate training modules. Applies instructional design models (ADDIE, SAM, Bloom\'s Taxonomy) and authoring software (Articulate Storyline 360, Adobe Captivate) across Indian EdTech, IT services, and corporate L&D.',
    educationRequirements: 'Bachelor\'s or Master\'s degree in Education, English, Communications, Computer Science, or Psychology + certification in Instructional Design. Proficiency in Articulate 360, Camtasia, and Learning Management Systems (Moodle, Canvas).',
    educationPathways: [
      'Any Bachelor\'s Degree + PG Diploma in Instructional Design / Educational Technology (Symbiosis SCDL / IGNOU)',
      'B.Ed / M.Ed with specialized focus on E-Learning and Digital Pedagogy',
      'Certified Instructional Designer (ATD / Symbiosis / Coursera)'
    ],
    eligibilityRequirements: 'Bachelor\'s degree in any discipline. Excellent written English pedagogical skills, storyboard writing, and visual instructional design proficiency.',
    certificationsAndExams: [
      'Articulate Storyline 360 Certified Professional',
      'ATD (Association for Talent Development) Instructional Design Certificate',
      'Certified Digital Learning Specialist'
    ],
    workEnvironment: 'EdTech companies (upGrad, Eruditus, Simplilearn), corporate Learning & Development (L&D) divisions, IT services companies (Infosys, TCS, Cognizant), and e-learning agencies.',
    marketDemand: 'High',
    jobOutlook: 'Rapid expansion driven by corporate upskilling programs, university online degree programs approved by UGC, and global enterprise micro-learning adoption.',
    salaryRange: { min: 450000, max: 1500000, currency: 'INR', source: 'AmbitionBox Instructional Designer Salary 2024, Glassdoor India' },
    salarySource: 'AmbitionBox Instructional Designer Salary 2024, Glassdoor India',
    salaryByExperience: {
      entryLevel: { min: 450000, max: 700000, label: 'Junior Instructional Designer (0–2 yrs)' },
      earlyCareer: { min: 700000, max: 1200000, label: 'Senior Instructional Designer / Content Lead (3–5 yrs)' },
      experienced: { min: 1200000, max: 2200000, label: 'Lead Learning Architect / Head of Instructional Design (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Senior Learning Experience Architects in multinational tech firms (Google, Amazon, Deloitte L&D) earn ₹18–28+ LPA.'
    },
    careerProgression: [
      'Associate Instructional Designer / Content Writer',
      'Instructional Designer (E-Learning Specialist)',
      'Senior Instructional Designer / Storyboard Lead',
      'Learning Experience (LX) Architect / L&D Manager',
      'Director of Learning Design / VP Learning & Development'
    ],
    employmentSectors: {
      government: 'National Programme on Technology Enhanced Learning (NPTEL), National Institute of Open Schooling (NIOS Digital), CIET-NCERT (DIKSHA Platform), IGNOU',
      privateSector: 'Top Indian EdTech (upGrad, Eruditus, Simplilearn, Coursera India), IT Services Learning Hubs (Infosys Wingspan, TCS iON), Corporate L&D Departments'
    },
    timelineOverview: {
      totalEstimatedDuration: '3.5–4 Years (Undergraduate degree + 6 Months instructional design portfolio building)',
      educationDuration: '3–4 Years (Bachelor\'s degree)',
      prepDuration: '3–6 Months dedicated ADDIE model study, authoring software training, and sample module development',
      practicalTrainingDuration: '3–6 Months corporate e-learning internship',
      jobSearchDuration: '1–2 Months recruitment cycle in EdTech or IT firms',
      overlapNotes: 'Storyline 360 portfolio modules can be constructed during the final college semester.',
      confidenceNote: 'A functioning interactive digital module demo created in Articulate Storyline 360 is the primary hiring criterion in interviews.'
    },
    sources: [
      { title: 'Association for Talent Development (ATD) Competency Model', url: 'https://www.td.org', sourceAuthority: 'ATD Global', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Instructional Designer Salaries in India', url: 'https://www.ambitionbox.com/salaries/instructional-designer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Instructional Designer Career Roadmap',
      description: 'E-learning design pathway: ADDIE & SAM frameworks, Bloom\'s taxonomy, storyboarding, Articulate Storyline 360 interactive development, and LMS SCORM packaging.',
      totalEstimatedDuration: '3.5–4 Years',
      durationBreakdown: 'Degree & Communication Foundations: 3 Years | Instructional Design Models & Storyboarding: 3 Months | Authoring Tools & Portfolio: 3–6 Months | EdTech / Corporate L&D Role: Post-Portfolio',
      overlapNotes: 'Building interactive Storyline modules runs concurrently with e-learning coursework.',
      steps: [
        {
          stepNumber: 1,
          title: 'Learning Theories, ADDIE Model & Bloom’s Taxonomy',
          stageType: 'education',
          duration: '3–6 Months',
          description: 'Master core learning design frameworks: ADDIE (Analysis, Design, Development, Implementation, Evaluation), Successive Approximation Model (SAM), and Bloom’s Revised Taxonomy.',
          topics: ['ADDIE Lifecycle & Needs Analysis', 'Bloom’s Revised Taxonomy for Learning Objectives', 'Adult Learning Principles (Andragogy - Malcolm Knowles)', 'Gagne\'s Nine Events of Instruction'],
          skillsToAcquire: ['Writing Measurable Learning Objectives (Action Verbs)', 'Target Audience Needs Assessment', 'Instructional Strategy Selection'],
          activities: ['Perform a learning needs analysis for a simulated corporate compliance module', 'Formulate 20+ measurable learning objectives mapped across cognitive levels of Bloom\'s Taxonomy'],
          completionCriteria: 'Complete certified instructional design foundational course.',
          dependencies: 'Undergraduate degree from recognized university',
          resources: [
            { name: 'Coursera Instructional Design Specialization', url: 'https://www.coursera.org', type: 'Certification Course', isFree: true },
            { name: 'Design for How People Learn by Julie Dirksen', url: 'https://www.oreilly.com', type: 'Book Reference', isFree: false }
          ]
        },
        {
          stepNumber: 2,
          title: 'Storyboarding & Micro-Learning Architecture',
          stageType: 'skill_acquisition',
          duration: '3 Months',
          description: 'Transform raw subject matter expert (SME) content into detailed storyboards specifying visual layouts, on-screen text (OST), voiceover narration (VO), and branching interactions.',
          topics: ['Storyboard Templates (Word, PowerPoint, Figma)', 'Visual Hierarchy & Cognitive Load Theory', 'Branching Scenarios & Gamification Elements', 'Micro-Learning Chunking Techniques'],
          skillsToAcquire: ['Two-Column Visual Storyboarding', 'Writing Engaging Voiceover Scripts', 'Designing Formative Knowledge Checks'],
          activities: ['Draft a comprehensive 25-slide interactive storyboard for a cybersecurity awareness training course', 'Conduct SME review meeting to validate technical learning content'],
          completionCriteria: 'Produce a production-ready, peer-reviewed e-learning storyboard.',
          dependencies: 'Instructional Design Models Knowledge',
          resources: [
            { name: 'E-Learning Heroes Community Storyboard Templates', url: 'https://community.articulate.com', type: 'Open Templates', isFree: true },
            { name: 'The eLearning Guild Research Papers', url: 'https://www.learningguild.com', type: 'Industry Research', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'E-Learning Authoring Tools (Articulate 360 / Storyline)',
          stageType: 'skill_acquisition',
          duration: '3–6 Months',
          description: 'Master Articulate Storyline 360: triggers, states, layers, variables (text, numeric, boolean), quiz questions, SCORM 1.2/2004 export, and Rise 360 responsive courses.',
          topics: ['Articulate Storyline 360 Interface & Timelines', 'Triggers, Slide Layers & State Changes', 'Custom Variables & Conditional Branching', 'SCORM & xAPI (Tin Can) LMS Packaging'],
          skillsToAcquire: ['Building Interactive Software Simulations', 'Complex Conditional Trigger Logic', 'LMS SCORM Package Debugging'],
          activities: ['Build an interactive gamified e-learning module in Storyline 360 with scoring variables and badges', 'Publish responsive mobile-first course in Articulate Rise 360 and test on Moodle Cloud LMS'],
          completionCriteria: 'Create a live, hostable digital portfolio demonstrating 3 interactive e-learning modules.',
          dependencies: 'Storyboarding and Visual Design Fundamentals',
          resources: [
            { name: 'Articulate 360 Official Tutorials', url: 'https://training.articulate.com', type: 'Official Training', isFree: true },
            { name: 'Moodle Cloud Free LMS Sandbox', url: 'https://moodle.com/cloud/', type: 'Practice Platform', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Corporate L&D / EdTech Appointment & Program Evaluation',
          stageType: 'job_search',
          duration: '1–3 Months',
          description: 'Secure appointment as Instructional Designer in EdTech or corporate L&D; conduct Kirkpatrick Level 1–4 evaluations to measure training impact and ROI.',
          topics: ['Kirkpatrick Model of Training Evaluation', 'Accessibility Guidelines (WCAG 2.1 in E-Learning)', 'LMS Analytics (Completion Rates, Assessment Scores)'],
          skillsToAcquire: ['Training ROI Calculation', 'WCAG Accessible Closed Captioning Integration', 'Curriculum Iteration based on Learner Analytics'],
          activities: ['Present interactive design portfolio during company hiring interviews', 'Deliver completed online course curriculum to 1,000+ corporate learners with > 90% completion rate'],
          completionCriteria: 'Hiring as Instructional Designer or E-Learning Specialist.',
          dependencies: 'Live digital e-learning portfolio',
          resources: [
            { name: 'upGrad Careers India', url: 'https://www.upgrad.com/careers/', type: 'Company Portal', isFree: true },
            { name: 'Simplilearn Careers', url: 'https://www.simplilearn.com/careers', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'research-scientist',
    title: 'Research Scientist (CSIR / DRDO / ISRO)',
    description: 'Conducts fundamental scientific research, experimental investigations, computational modeling, and technology development across physical, chemical, material, or biological sciences. Publishes research in international high-impact journals and patents inventions under Indian scientific laboratories.',
    educationRequirements: 'M.Sc in relevant scientific discipline (Physics, Chemistry, Materials Science) + Ph.D. or M.Tech in relevant engineering science. Clearance of CSIR-UGC NET JRF, GATE, or direct recruitment by RAC (DRDO) / ICRB (ISRO) / BARC OCES.',
    educationPathways: [
      'B.Sc -> M.Sc -> CSIR-UGC NET JRF -> Ph.D. in recognized university/CSIR lab -> Post-Doc -> Scientist \'C\'',
      'B.Tech / M.Tech via GATE -> DRDO Scientist \'B\' recruitment via RAC',
      'BARC OCES/DGFS (Bhabha Atomic Research Centre Training School via GATE score)'
    ],
    eligibilityRequirements: 'First class Bachelor\'s and Master\'s degree in basic or applied sciences (> 60% aggregate). Qualifying national examinations (GATE, CSIR NET JRF, or agency-specific recruitment exams).',
    certificationsAndExams: [
      'CSIR-UGC NET JRF (Life, Chemical, Physical, Earth Sciences)',
      'GATE (Graduate Aptitude Test in Engineering)',
      'DRDO RAC Scientist \'B\' Direct Recruitment',
      'BARC Scientific Officer Recruitment (OCES / DGFS)'
    ],
    workEnvironment: 'Premier national laboratories (CSIR Labs: NPL, NCL, CECRI, IICT), DRDO laboratories, ISRO centers, BARC, TIFR, and corporate R&D campuses in Bengaluru, Pune, Hyderabad, and Delhi NCR.',
    marketDemand: 'Moderate to High',
    jobOutlook: 'Steady permanent appointments through national scientific bodies; enhanced funding under the newly established Anusandhan National Research Foundation (ANRF - ₹50,000 Cr budget).',
    salaryRange: { min: 850000, max: 2400000, currency: 'INR', source: '7th CPC Defense & Scientific Pay Matrix (Scientist B Level 10, Scientist C Level 11), DRDO RAC' },
    salarySource: '7th CPC Defense & Scientific Pay Matrix (Scientist B Level 10, Scientist C Level 11), DRDO RAC',
    salaryByExperience: {
      entryLevel: { min: 850000, max: 1300000, label: 'Scientist \'B\' / Project Scientist (0–2 yrs)' },
      earlyCareer: { min: 1300000, max: 1900000, label: 'Scientist \'C\' / Senior Scientist (3–5 yrs)' },
      experienced: { min: 1900000, max: 3000000, label: 'Scientist \'D\'/\'E\' / Principal Scientist (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Scientist \'B\' (entry level in DRDO, ISRO, CSIR, DST) starts at 7th Pay Commission Level 10 (Basic ₹56,100, gross pay ~₹80,000–95,000/month plus government housing, medical benefits, and professional update allowances).'
    },
    careerProgression: [
      'Scientist \'B\' (Junior Scientific Officer)',
      'Scientist \'C\' (Senior Scientific Officer)',
      'Scientist \'D\' (Principal Scientific Officer)',
      'Scientist \'E\' / \'F\' (Scientist Director / Division Head)',
      'Scientist \'G\' / \'H\' / Outstanding Scientist / Director General'
    ],
    employmentSectors: {
      government: 'Council of Scientific and Industrial Research (37 CSIR Labs nationwide), DRDO Laboratories, Indian Space Research Organisation (ISRO), Bhabha Atomic Research Centre (BARC), Department of Science & Technology (DST)',
      privateSector: 'Industrial R&D Centers (Tata Steel R&D, Reliance R&D, Shell Technology Centre Bengaluru), Semiconductor R&D, Pharmaceutical Research Hubs'
    },
    timelineOverview: {
      totalEstimatedDuration: '5–8 Years (3 Years B.Sc + 2 Years M.Sc + 3–5 Years Ph.D. / JRF)',
      educationDuration: '5 Years (B.Sc + M.Sc) + 3–5 Years Ph.D.',
      prepDuration: '6–12 Months focused preparation for GATE or CSIR-NET JRF',
      practicalTrainingDuration: 'Full-time scientific experimental research during doctoral dissertation',
      jobSearchDuration: '3–6 Months recruitment notification cycle through DRDO RAC / CSIR / BARC',
      overlapNotes: 'Doctoral scholars receive monthly fellowship funding (JRF ₹37,000/mo, SRF ₹42,000/mo) throughout their degree.',
      confidenceNote: 'DRDO recruits Scientist \'B\' directly through valid GATE scores followed by personal technical interviews.'
    },
    sources: [
      { title: 'DRDO Recruitment and Assessment Centre (RAC)', url: 'https://rac.gov.in', sourceAuthority: 'DRDO India', verifiedDate: '2024-10-14' },
      { title: 'Council of Scientific & Industrial Research (CSIR) Career Portal', url: 'https://www.csir.res.in', sourceAuthority: 'CSIR India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Research Scientist (CSIR / DRDO) Career Roadmap',
      description: 'National research laboratory pathway: scientific post-graduation, CSIR-NET JRF / GATE qualification, doctoral research thesis, peer-reviewed publications, and DRDO RAC / CSIR Scientist selection.',
      totalEstimatedDuration: '6–8 Years',
      durationBreakdown: 'M.Sc / M.Tech Advanced Sciences: 2 Years | CSIR-NET JRF / GATE: 1 Year | Doctoral Dissertation & High-Impact Papers: 3–4 Years | National Lab Induction: Post-Ph.D./GATE',
      overlapNotes: 'GATE qualification can lead directly to DRDO Scientist \'B\' interviews for engineering postgraduates.',
      steps: [
        {
          stepNumber: 1,
          title: 'Master’s Degree in Core or Applied Science',
          stageType: 'education',
          duration: '2 Years (Post-Graduation)',
          description: 'Complete M.Sc in Physics, Chemistry, Material Science, Mathematics, or M.Tech in specialized engineering discipline with minimum 65% aggregate.',
          topics: ['Quantum Mechanics / Advanced Organic Synthesis / Solid State Physics', 'Mathematical Modeling & Numerical Methods', 'Analytical Characterization Techniques (XRD, SEM, TEM, NMR)'],
          skillsToAcquire: ['Data Interpretation from XRD/SEM/NMR', 'Scientific Programming in Python/MATLAB', 'Rigorous Experimental Hypothesis Design'],
          activities: ['Operate analytical instruments during master’s research thesis', 'Present original scientific findings at national student science symposium'],
          completionCriteria: 'Obtain Master\'s degree with first-class distinction.',
          dependencies: 'Bachelor\'s degree in Science or Engineering',
          resources: [
            { name: 'NPTEL Advanced Physical Chemistry (IIT Madras)', url: 'https://nptel.ac.in', type: 'Course', isFree: true },
            { name: 'ScienceDirect Open Access Articles', url: 'https://www.sciencedirect.com', type: 'Research Portal', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'CSIR-UGC NET JRF or GATE Qualification',
          stageType: 'certification',
          duration: '6–12 Months',
          description: 'Qualify CSIR-NET JRF (top 200-500 All India Rank) or achieve 90+ percentile in GATE to secure national doctoral fellowships and eligibility for direct scientific recruitment.',
          topics: ['Core Subject Advanced Physical/Chemical Sciences', 'General Aptitude & Scientific Reasoning', 'Speed Numerical Problem Solving'],
          skillsToAcquire: ['Competitive Exam Problem Solving Precision', 'Theoretical Conceptual Mastery'],
          activities: ['Solve past 10 years CSIR-NET / GATE question papers with detailed step-by-step solutions', 'Secure Junior Research Fellowship (JRF) award letter'],
          completionCriteria: 'Qualifying score and rank in CSIR-NET JRF or GATE.',
          dependencies: 'Master\'s Degree in Science or Engineering',
          resources: [
            { name: 'CSIR Human Resource Development Group (HRDG)', url: 'https://csirhrdg.res.in', type: 'Official Portal', isFree: true },
            { name: 'GATE Official Examination Portal', url: 'https://gate.iitk.ac.in', type: 'Official Portal', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Doctoral Dissertation & High-Impact Journal Publishing',
          stageType: 'practical_experience',
          duration: '3–4 Years',
          description: 'Execute cutting-edge research in a CSIR lab, IIT, or premier institute; publish primary scientific findings in leading international journals (SCI/Scopus indexed).',
          topics: ['Novel Material Synthesis / Computational Simulations', 'Peer-Reviewed Manuscript Preparation', 'Patent Search & Intellectual Property Protection'],
          skillsToAcquire: ['Independent Scientific Experimentation', 'Scientific Journal Review Rebuttal Writing', 'Patent Drafting for Inventions'],
          activities: ['Publish 3+ research papers as first author in indexed journals with impact factor > 3.0', 'File a provisional patent application for a novel material or process'],
          completionCriteria: 'Successful submission and oral defense of Ph.D. dissertation.',
          dependencies: 'Enrolled in recognized Ph.D. program with JRF/SRF funding',
          resources: [
            { name: 'Web of Science Master Journal List', url: 'https://mjl.clarivate.com', type: 'Index Reference', isFree: true },
            { name: 'Indian Patent Office Portal (IP India)', url: 'https://ipindia.gov.in', type: 'Government Portal', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'DRDO RAC / CSIR Scientist ‘B’ Selection & Induction',
          stageType: 'job_search',
          duration: '3–6 Months',
          description: 'Appear for DRDO RAC / CSIR Scientist recruitment interview; defend research portfolio before panel of Chief Scientists and Directors, and receive central appointment.',
          topics: ['Defense Technology & National Scientific Priorities', 'Technical Defense of Research Publications', 'Project Execution & Research Grant Planning'],
          skillsToAcquire: ['High-Stakes Technical Oral Defense', 'National Security Technology Awareness'],
          activities: ['Clear DRDO RAC personal interview round evaluating technical depth and research suitability', 'Complete formal police verification and medical fitness assessment for central scientific service'],
          completionCriteria: 'Appointment as Scientist \'B\' or Scientist \'C\' in DRDO, CSIR, or ISRO.',
          dependencies: 'GATE qualifying score or Ph.D. with relevant publications',
          resources: [
            { name: 'DRDO RAC Recruitment Notifications', url: 'https://rac.gov.in', type: 'Government Portal', isFree: true },
            { name: 'CSIR Recruitment Portal', url: 'https://www.csir.res.in/career-opportunities', type: 'Government Portal', isFree: true }
          ]
        }
      ]
    }
  }
];

module.exports = educationScienceCareers;
