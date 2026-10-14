/**
 * Healthcare Careers Audit Data (14 Careers)
 * Covers: doctor, specialist-doctor, dentist, nurse, pharmacist, physiotherapist,
 * medical-laboratory-technologist, radiology-technologist, nutritionist, psychologist,
 * clinical-research-associate, biotechnology-researcher, microbiologist, public-health-specialist.
 * Validated for Indian healthcare ecosystem, statutory regulatory bodies (NMC, DCI, INC, PCI, RCI),
 * realistic INR salary scales, and official examination pipelines.
 */

const healthcareCareers = [
  {
    slug: 'doctor',
    title: 'General Physician (MBBS)',
    description: 'Diagnoses acute and chronic medical conditions, prescribes clinical pharmacotherapy, manages outpatient departments (OPD), and provides primary emergency healthcare across Indian government primary health centres (PHCs), district hospitals, and private clinics.',
    educationRequirements: 'MBBS (Bachelor of Medicine and Bachelor of Surgery) from an NMC-recognized medical college via NEET UG. Mandatory 1-year Compulsory Rotatory Medical Internship (CRMI) and permanent registration with the State Medical Council / National Medical Commission (NMC).',
    educationPathways: [
      'NEET UG qualification -> 4.5 Years MBBS academic curriculum + 1 Year CRMI internship in an NMC-recognized teaching hospital',
      'Post-MBBS mandatory rural service bond (1–2 years depending on State Government norms)',
      'Foundation for Postgraduate medical entrance (NEET PG / INI-CET / NExT)'
    ],
    eligibilityRequirements: '10+2 with Physics, Chemistry, Biology/Biotechnology and English with minimum 50% marks (40% for reserved categories). Minimum age 17 years. Mandatory qualification of National Eligibility cum Entrance Test (NEET UG).',
    certificationsAndExams: [
      'NEET UG (National Eligibility cum Entrance Test - Undergraduate)',
      'NMC / State Medical Council Permanent Registration',
      'Basic Life Support (BLS) & Advanced Cardiac Life Support (ACLS) Certification'
    ],
    workEnvironment: 'Government Primary/Community Health Centres (PHCs/CHCs), district civil hospitals, corporate hospital emergency & OPD wings (Apollo, Fortis, Max), and private outpatient clinics.',
    marketDemand: 'Very High',
    jobOutlook: 'Urgent sustained demand across tier-2/3 cities and rural districts to meet WHO doctor-population ratio benchmarks; stable government medical officer vacancies.',
    salaryRange: { min: 720000, max: 1800000, currency: 'INR', source: 'State Health Services Pay Scales (7th CPC Level 10), AmbitionBox MBBS Doctor Salary 2024' },
    salarySource: 'State Health Services Pay Scales (7th CPC Level 10), AmbitionBox MBBS Doctor Salary 2024',
    salaryByExperience: {
      entryLevel: { min: 720000, max: 1080000, label: 'Junior Resident / Medical Officer (0–2 yrs)' },
      earlyCareer: { min: 1080000, max: 1500000, label: 'Senior Medical Officer / General Physician (3–5 yrs)' },
      experienced: { min: 1500000, max: 2400000, label: 'Chief Medical Officer / Private Practice (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Government Medical Officers enter at 7th Pay Commission Level 10 (~₹75,000–95,000/month basic + NPA). Corporate hospital Junior Residents earn ₹60,000–85,000/month. Independent private clinics in urban areas can earn significantly higher.'
    },
    careerProgression: [
      'Compulsory Rotatory Medical Intern (CRMI)',
      'Junior Resident (JR) / Medical Officer (PHC/CHC)',
      'Senior Medical Officer / Clinical General Practitioner',
      'Deputy Chief Medical Officer (Civil Hospital)',
      'Chief Medical Officer (CMO) / Hospital Medical Superintendent'
    ],
    employmentSectors: {
      government: 'Central Health Service (UPSC CMS), State Public Service Commission Medical Officer cadres, Armed Forces Medical Services (AFMS), Railway Health Services, ESIC Hospitals',
      privateSector: 'Corporate Hospital Chains (Apollo, Manipal, Fortis, Max Healthcare), Diagnostic Clinics, Telemedicine Networks (Practo, Apollo 24/7), Self-employed Private Clinics'
    },
    timelineOverview: {
      totalEstimatedDuration: '5.5 Years (4.5 Years Academic + 1 Year Internship)',
      educationDuration: '4.5 Years (9 Semesters covering Pre-clinical, Para-clinical, and Clinical phases)',
      prepDuration: '1–2 Years dedicated NEET UG coaching during 11th/12th grade',
      practicalTrainingDuration: '1 Year mandatory paid CRMI rotational internship in clinical departments',
      jobSearchDuration: 'Immediate employment through State Medical Officer Walk-in or Corporate Junior Residency',
      overlapNotes: 'Clinical postings start in the 3rd semester and run concurrently with lectures.',
      confidenceNote: 'MBBS graduates enjoy virtually 100% employment absorption either in residency programs or clinical posts.'
    },
    sources: [
      { title: 'National Medical Commission (NMC) Regulations & Standards', url: 'https://www.nmc.org.in', sourceAuthority: 'National Medical Commission', verifiedDate: '2024-10-14' },
      { title: 'UPSC Combined Medical Services (CMS) Notification', url: 'https://upsc.gov.in', sourceAuthority: 'UPSC', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'General Physician (MBBS) Career Roadmap',
      description: 'Medical council regulated clinical training path: Pre-clinical sciences, para-clinical pathology/pharmacology, clinical bedside rotations, and the 1-year rotatory medical internship.',
      totalEstimatedDuration: '5.5 Years',
      durationBreakdown: 'Pre-Clinical (Anatomy, Physio, Biochem): 13 Months | Para-Clinical (Path, Micro, Pharma, FMT): 13 Months | Clinical (Med, Surg, OBG, Peds, ENT, Ophtha): 28 Months | Compulsory Rotatory Internship: 12 Months',
      overlapNotes: 'Bedside clinical postings take place concurrently with theoretical subjects starting from 2nd professional year.',
      steps: [
        {
          stepNumber: 1,
          title: 'NEET UG Qualification & First Professional MBBS',
          stageType: 'education',
          duration: '13 Months',
          description: 'Qualify NEET UG and master foundational human anatomy (cadaveric dissection), human physiology, and medical biochemistry.',
          topics: ['Gross Anatomy & Neuroanatomy', 'General & Systemic Physiology', 'Biochemical Pathways & Enzymology', 'Early Clinical Exposure (ECE)'],
          skillsToAcquire: ['Cadaveric Dissection Technique', 'Blood Pressure & Hematology Assessment', 'Normal Surface Anatomy Palpation'],
          activities: ['Perform systemic human dissection in anatomy lab', 'Complete practicals on arterial blood gas, ECG interpretation basics, and urine analysis'],
          completionCriteria: 'Clear 1st Professional MBBS university university examinations with minimum 50% in theory and practicals.',
          dependencies: '10+2 with PCB (minimum 50%) and valid NEET UG qualifying rank',
          resources: [
            { name: 'NMC Competency Based Medical Education (CBME) Curriculum', url: 'https://www.nmc.org.in', type: 'Official Curriculum', isFree: true },
            { name: 'Marrow / PrepLadder Pre-Clinical Modules', url: 'https://www.marrow.com', type: 'Medical App', isFree: false }
          ]
        },
        {
          stepNumber: 2,
          title: 'Second Professional MBBS (Para-Clinical Sciences)',
          stageType: 'education',
          duration: '13 Months',
          description: 'Study human diseases, drugs, microbial pathogens, and medico-legal jurisprudence across Pathology, Microbiology, Pharmacology, and Forensic Medicine.',
          topics: ['General & Systemic Pathology', 'Medical Bacteriology, Virology & Mycology', 'Autonomic & Cardiovascular Pharmacotherapy', 'Forensic Autopsy & Toxicological Evidence'],
          skillsToAcquire: ['Histopathology Slide Interpretation', 'Antimicrobial Susceptibility Testing', 'Prescription Writing for Common Ailments'],
          activities: ['Interpret peripheral blood smears and biopsy samples', 'Witness medico-legal post-mortem examinations in civil mortuary'],
          completionCriteria: 'Pass 2nd Professional MBBS examinations (both theory and practical viva voce).',
          dependencies: 'Passing 1st Professional MBBS',
          resources: [
            { name: 'NPTEL Medical Biomaterials and Clinical Pathology', url: 'https://nptel.ac.in', type: 'Course', isFree: true },
            { name: 'National Formulary of India (NFI)', url: 'https://ipc.gov.in', type: 'Official Pharmacopeia', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Third Professional MBBS (Clinical Sciences & Bedside Postings)',
          stageType: 'practical_experience',
          duration: '28 Months (Part I & Part II)',
          description: 'Intensive hospital inpatient and outpatient bedside clinical training across Internal Medicine, General Surgery, Obstetrics & Gynecology, Pediatrics, Orthopedics, Ophthalmology, and ENT.',
          topics: ['Internal Medicine & Emergency Therapeutics', 'General Surgery & Trauma Resuscitation', 'Antenatal Care & Labor Management', 'Pediatric Immunization & Neonatal Care'],
          skillsToAcquire: ['Comprehensive Clinical History Taking', 'Systemic Physical Examination', 'Nasogastric Tube, IV Cannulation & Catheterization'],
          activities: ['Participate in daily morning rounds in general medicine and surgical wards', 'Assist in normal vaginal deliveries and minor surgical debridements under supervision'],
          completionCriteria: 'Pass final university MBBS practical and theory examinations across all 9 clinical specialties.',
          dependencies: 'Passing 2nd Professional MBBS',
          resources: [
            { name: 'Harrison’s Principles of Internal Medicine Online', url: 'https://accessmedicine.mhmedical.com', type: 'Textbook Portal', isFree: false },
            { name: 'Standard Treatment Guidelines (Ministry of Health & Family Welfare)', url: 'https://nhsrcindia.org', type: 'Government Guidelines', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Compulsory Rotatory Medical Internship (CRMI) & Licensure',
          stageType: 'practical_experience',
          duration: '12 Months',
          description: 'Complete mandatory 365-day paid rotational internship in teaching hospital: Medicine, Surgery, OBG, Pediatrics, Casualty/Emergency, and Rural Health Postings.',
          topics: ['Emergency Room Triage & Resuscitation', 'Primary Health Centre (PHC) Community Outreaches', 'Death Certification & Medico-legal Documentation'],
          skillsToAcquire: ['Endotracheal Intubation & CPR', 'Primary Suturing & Wound Dressing', 'Autonomous OPD Prescription under Senior Supervision'],
          activities: ['Complete night duty shifts in casualty and ICU', 'Conduct primary care camps in affiliated rural primary health centres'],
          completionCriteria: 'Satisfactory completion logbook certified by Head of Department; issuance of permanent registration by State Medical Council.',
          dependencies: 'Passing Final MBBS Part II',
          resources: [
            { name: 'National Medical Commission Registration Portal', url: 'https://www.nmc.org.in', type: 'Government Licensing', isFree: true },
            { name: 'UPSC CMS Examination Portal', url: 'https://upsc.gov.in', type: 'Government Recruitment', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'specialist-doctor',
    title: 'Specialist Doctor (MD / MS / DM / MCh)',
    description: 'Provides advanced diagnostic evaluation, specialized surgical procedures, and tertiary medical management in clinical super-specialties such as Cardiology, Orthopedics, Neurology, Pediatrics, Oncology, and Anesthesiology.',
    educationRequirements: 'MBBS degree + MD (Doctor of Medicine) or MS (Master of Surgery) (3 years) via NEET PG or INI-CET. Optional super-specialty DM / MCh (3 years) via NEET SS. Registered with NMC as Specialist Medical Practitioner.',
    educationPathways: [
      'MBBS -> NEET PG / INI-CET -> 3 Years MD / MS Residency in recognized medical college / hospital',
      'Alternative Pathway: MBBS -> DNB (Diplomate of National Board via NBEMS - 3 years)',
      'Super-specialty Pathway: MD/MS/DNB -> NEET SS -> 3 Years DM / MCh (Doctorate of Medicine / Master of Chirurgiae)'
    ],
    eligibilityRequirements: 'Completed MBBS with CRMI internship and permanent NMC registration. Qualifying percentile in NEET PG (conducted by NBEMS) or INI-CET (conducted by AIIMS New Delhi).',
    certificationsAndExams: [
      'NEET PG / INI-CET (for MD/MS/DNB admissions)',
      'NEET SS (for DM/MCh super-specialty admissions)',
      'Specialist Board Certification / NMC Additional Qualification Registration'
    ],
    workEnvironment: 'Tertiary government medical colleges (AIIMS, PGI, CMC), multi-specialty corporate hospitals (Apollo, Fortis, Max, Narayana Health), and specialized private clinics.',
    marketDemand: 'Very High',
    jobOutlook: 'Severe acute shortage of specialist doctors in India, particularly outside Tier-1 metros; high demand in surgical disciplines, intensive care, oncology, and radiology.',
    salaryRange: { min: 1400000, max: 4500000, currency: 'INR', source: 'AmbitionBox Specialist Doctor Salary 2024, 7th CPC Senior Resident / Assistant Professor Pay Scales' },
    salarySource: 'AmbitionBox Specialist Doctor Salary 2024, 7th CPC Senior Resident / Assistant Professor Pay Scales',
    salaryByExperience: {
      entryLevel: { min: 1400000, max: 2000000, label: 'Senior Resident (0–2 yrs post MD/MS)' },
      earlyCareer: { min: 2000000, max: 3500000, label: 'Assistant Professor / Consultant (3–5 yrs)' },
      experienced: { min: 3500000, max: 7000000, label: 'Senior Consultant / Department Head (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Senior Residents in AIIMS/Central Institutes earn ~₹1.1–1.3 Lakhs/month. Experienced surgical specialists and interventional cardiologists in top corporate hospitals frequently earn ₹50 Lakhs to ₹1.5+ Crore annually.'
    },
    careerProgression: [
      'Junior Resident (MD/MS Candidate)',
      'Senior Resident (SR) / Fellow',
      'Assistant Professor / Junior Consultant',
      'Associate Professor / Consultant Specialist',
      'Professor & Head of Department / Director of Clinical Services'
    ],
    employmentSectors: {
      government: 'AIIMS Institutions, State Government Medical Colleges, Central Railway / Defense Base Hospitals, ESIC Medical Colleges',
      privateSector: 'Super-Specialty Hospital Chains (Apollo, Medanta, Max Healthcare, Fortis, Manipal), Specialty Eye/Maternity/Cardiac Institutes'
    },
    timelineOverview: {
      totalEstimatedDuration: '8.5–11.5 Years (5.5 Years MBBS + 3 Years MD/MS + optional 3 Years DM/MCh)',
      educationDuration: '3 Years intensive clinical postgraduate residency (Junior Residency)',
      prepDuration: '6–12 Months focused preparation for NEET PG / INI-CET',
      practicalTrainingDuration: '3 Years hands-on surgical/medical management under faculty supervision',
      jobSearchDuration: 'Immediate absorption as Senior Resident or Hospital Consultant',
      overlapNotes: 'Postgraduate residency is 100% full-time clinical hospital employment with monthly stipend.',
      confidenceNote: 'Specialist physicians represent one of the most intellectually demanding, recession-proof careers in India.'
    },
    sources: [
      { title: 'National Board of Examinations in Medical Sciences (NBEMS)', url: 'https://natboard.edu.in', sourceAuthority: 'NBEMS', verifiedDate: '2024-10-14' },
      { title: 'National Medical Commission Postgraduate Medical Education Regulations', url: 'https://www.nmc.org.in', sourceAuthority: 'NMC', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Specialist Doctor (MD / MS) Career Roadmap',
      description: 'Advanced postgraduate medical journey: NEET PG qualification, 36 months of rigorous specialty residency, dissertation defense, and Senior Residency / Fellowship.',
      totalEstimatedDuration: '3.5–4 Years Post-MBBS',
      durationBreakdown: 'NEET PG Preparation: 6–12 Months | Year 1 Residency (Ward & Emergency Management): 12 Months | Year 2 Residency (Advanced Procedures & Thesis): 12 Months | Year 3 Residency (Independent Case Management & Exit Exam): 12 Months',
      overlapNotes: 'Residency involves 60-80 hours/week of on-duty clinical shifts with paid monthly stipend.',
      steps: [
        {
          stepNumber: 1,
          title: 'NEET PG / INI-CET Competitive Qualification',
          stageType: 'certification',
          duration: '6–12 Months',
          description: 'Crack national postgraduate medical entrance exams covering all 19 MBBS subjects with high clinical vignette orientation.',
          topics: ['Clinical Vignette Problem Solving', 'High-Yield Pathology, Pharma & Medicine', 'Image-Based Diagnostic Questions'],
          skillsToAcquire: ['Time Management in High-Stakes Exams', 'Evidence-Based Diagnostic Reasoning'],
          activities: ['Solve past 5 years NEET PG and INI-CET clinical mock tests', 'Participate in clinical grand rounds during internship'],
          completionCriteria: 'Obtain competitive All India Rank (AIR < 5,000 for top clinical specialties) in NEET PG or INI-CET.',
          dependencies: 'MBBS Degree and Completion of CRMI Internship',
          resources: [
            { name: 'NBEMS NEET-PG Information Bulletin', url: 'https://natboard.edu.in', type: 'Official Bulletin', isFree: true },
            { name: 'AIIMS INI-CET Examination Portal', url: 'https://www.aiimsexams.ac.in', type: 'Official Portal', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'First Year Postgraduate Residency (Ward & Critical Care)',
          stageType: 'practical_experience',
          duration: '12 Months (PGY-1)',
          description: 'Join recognized teaching hospital as Junior Resident; manage intensive care units, emergency casualty admissions, and routine ward care.',
          topics: ['Emergency Resuscitation & Critical Care Protocols', 'Specialty-Specific Pharmacotherapy', 'Informed Consent & Patient Communication'],
          skillsToAcquire: ['Central Venous Line Insertion', 'Lumbar Puncture / Thoracocentesis', 'Advanced Ventilator Setting Management'],
          activities: ['Manage 30-40 inpatient beds under senior registrar oversight', 'Perform 50+ supervised specialty procedures in ICU/OT'],
          completionCriteria: 'Approval of postgraduate thesis/dissertation topic and protocol by Institutional Ethics Committee (IEC).',
          dependencies: 'NEET PG Counseling Seat Allocation and College Enrollment',
          resources: [
            { name: 'ICMR Guidelines for Biomedical Research Ethics', url: 'https://ethics.ncdirindia.org', type: 'Official Standard', isFree: true },
            { name: 'PubMed / Medline Clinical Research Database', url: 'https://pubmed.ncbi.nlm.nih.gov', type: 'Research Portal', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Second & Third Year Residency, Thesis & Exit Exams',
          stageType: 'practical_experience',
          duration: '24 Months (PGY-2 & PGY-3)',
          description: 'Conduct specialized surgical interventions or diagnostic evaluations, complete research dissertation, and take the MD/MS university exit examination.',
          topics: ['Independent Major Surgeries or Advanced Medical Management', 'Clinical Audit & Mortality Meetings', 'Scientific Paper Publication'],
          skillsToAcquire: ['Independent Operative Skills in MS Specialties', 'Complex Case Diagnostic Formulation in MD Disciplines', 'Scientific Medical Writing'],
          activities: ['Complete and submit postgraduate dissertation 6 months prior to exams', 'Present scientific papers at national specialty conferences (e.g., APICON, ASICON)'],
          completionCriteria: 'Pass MD/MS practical bedside clinical case defense, surgical viva, and theory papers; register degree with NMC.',
          dependencies: 'Completion of 1st Year Residency and Approved Thesis Protocol',
          resources: [
            { name: 'NMC Additional Qualification Registration Portal', url: 'https://www.nmc.org.in', type: 'Government Portal', isFree: true },
            { name: 'UpToDate Clinical Decision Support', url: 'https://www.uptodate.com', type: 'Clinical Platform', isFree: false }
          ]
        },
        {
          stepNumber: 4,
          title: 'Senior Residency (SRship) / Super-Specialty Fellowship',
          stageType: 'job_search',
          duration: '1–3 Years',
          description: 'Undertake Senior Residency in a tertiary medical college (required for academic Assistant Professor eligibility) or enter DM/MCh super-specialty.',
          topics: ['Clinical Teaching for Undergraduates', 'Advanced Tertiary Referrals', 'Sub-Specialty Surgical Fellowship'],
          skillsToAcquire: ['Independent Consultant-Level Clinical Judgement', 'Undergraduate Bedside Teaching', 'Departmental Administrative Management'],
          activities: ['Perform autonomous OPD and surgical lists as Senior Resident', 'Publish peer-reviewed index medical research papers'],
          completionCriteria: 'Complete tenure as Senior Resident and secure Consultant post in corporate hospital or Assistant Professor in medical college.',
          dependencies: 'MD / MS / DNB Degree in relevant specialty',
          resources: [
            { name: 'AIIMS Senior Resident Recruitment Notices', url: 'https://www.aiimsexams.ac.in', type: 'Recruitment Portal', isFree: true },
            { name: 'NEET SS Examination Portal (NBEMS)', url: 'https://natboard.edu.in', type: 'Super-Specialty Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'dentist',
    title: 'Dentist (BDS / MDS)',
    description: 'Diagnoses and treats diseases of the teeth, gums, and oral cavity. Performs root canal treatments (RCT), crown and bridge prosthetics, tooth extractions, orthodontic alignments, and oral surgical procedures across dental clinics and hospitals.',
    educationRequirements: 'BDS (Bachelor of Dental Surgery) (4 years + 1 year paid internship) recognized by the Dental Council of India (DCI) via NEET UG. Optional MDS (Master of Dental Surgery - 3 years via NEET MDS). Valid DCI State Dental Council registration.',
    educationPathways: [
      'NEET UG -> 4 Years BDS academic coursework + 1 Year paid rotatory dental internship',
      'BDS -> NEET MDS -> 3 Years MDS (Prosthodontics, Endodontics, Orthodontics, Oral Surgery, Periodontics)',
      'Clinical Fellowship in Aesthetic Dentistry / Implantology'
    ],
    eligibilityRequirements: '10+2 with Physics, Chemistry, Biology and English with minimum 50% aggregate. Valid qualifying rank in NEET UG. Registration with State Dental Council.',
    certificationsAndExams: [
      'NEET UG (for BDS admissions)',
      'NEET MDS (for Master of Dental Surgery)',
      'State Dental Council Licensure / DCI Registration',
      'Certified Dental Implantologist (ICOI / Indian Society of Oral Implantologists)'
    ],
    workEnvironment: 'Private dental clinics, corporate dental chains (Clove Dental, Sabka Dentist), multi-specialty hospital dental wings, and government dental colleges.',
    marketDemand: 'Moderate to High',
    jobOutlook: 'Rapidly expanding private dental chain expansion in urban centers; rising demand for cosmetic dentistry, invisible aligners, and dental implants.',
    salaryRange: { min: 350000, max: 1500000, currency: 'INR', source: 'AmbitionBox Dentist Salary 2024, IDA Compensation Reports' },
    salarySource: 'AmbitionBox Dentist Salary 2024, IDA Compensation Reports',
    salaryByExperience: {
      entryLevel: { min: 350000, max: 550000, label: 'Associate Dentist / BDS Intern (0–2 yrs)' },
      earlyCareer: { min: 550000, max: 1100000, label: 'Dental Surgeon / MDS Specialist (3–5 yrs)' },
      experienced: { min: 1100000, max: 2200000, label: 'Senior Consultant / Clinic Owner (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Fresh BDS associates in private clinics start around ₹25,000–40,000/month; MDS specialists earn ₹60,000–1.2 Lakhs/month. Successful private clinic owners with established implant/orthodontic practices earn ₹20–35+ LPA.'
    },
    careerProgression: [
      'Dental Intern',
      'Junior Associate Dentist (Private / Chain Clinic)',
      'Consultant Dental Surgeon / MDS Specialist',
      'Clinical Dental Director / Franchise Partner',
      'Private Dental Practice Owner / Professor of Dentistry'
    ],
    employmentSectors: {
      government: 'Army Dental Corps (AD Corps), ESIC Dental Hospitals, State PSC Dental Surgeon posts, Government Dental Colleges',
      privateSector: 'Dental Clinic Chains (Clove Dental, Axiss Dental), Corporate Hospital Dental Departments, Private Dental Practices'
    },
    timelineOverview: {
      totalEstimatedDuration: '5 Years (4 Years Academic + 1 Year Compulsory Rotatory Internship)',
      educationDuration: '4 Years (8 Semesters)',
      prepDuration: '1–2 Years NEET UG coaching during 11th/12th grade',
      practicalTrainingDuration: '1 Year compulsory paid rotational dental internship',
      jobSearchDuration: '1–3 Months associate placement or setting up independent practice',
      overlapNotes: 'Phantom head preclinical simulation runs in 2nd year; clinical chairside patient treatment begins in 3rd year.',
      confidenceNote: 'Establishing a private clinic requires an upfront capital investment of ₹10–25 Lakhs for dental chair, RVG digital X-ray, and autoclave setup.'
    },
    sources: [
      { title: 'Dental Council of India (DCI) Regulations & Syllabi', url: 'https://dciindia.gov.in', sourceAuthority: 'Dental Council of India', verifiedDate: '2024-10-14' },
      { title: 'Indian Dental Association (IDA)', url: 'https://www.ida.org.in', sourceAuthority: 'Indian Dental Association', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Dentist (BDS) Career Roadmap',
      description: 'DCI-accredited dental journey: pre-clinical tooth carving and cavity preparation on phantom heads, chairside patient treatments, and 1-year clinical rotatory internship.',
      totalEstimatedDuration: '5 Years',
      durationBreakdown: 'Basic Medical Sciences & Pre-Clinical Dental Anatomy: 1 Year | Phantom Head Cavity Prep & Prosthetics: 1 Year | Clinical Chairside Postings: 2 Years | Compulsory Rotatory Internship: 1 Year',
      overlapNotes: 'Pre-clinical lab work transitions directly into supervised patient treatments from the 3rd year.',
      steps: [
        {
          stepNumber: 1,
          title: 'NEET UG & Pre-Clinical Dental Foundations',
          stageType: 'education',
          duration: 'Year 1–2',
          description: 'Qualify NEET UG; study human anatomy, physiology, dental anatomy, tooth morphology, and pre-clinical conservative dentistry on plaster blocks and phantom heads.',
          topics: ['Tooth Carving & Morphology', 'Dental Materials Science (Alginate, Cements, Composites)', 'Pre-Clinical Class I & II Cavity Preparation', 'Prosthodontic Complete Denture Fabrication'],
          skillsToAcquire: ['Wax Tooth Carving Precision', 'High-Speed Airotor Handpiece Handling', 'Dental Impression Mixing'],
          activities: ['Carve complete sets of permanent human teeth in wax blocks', 'Prepare 50+ cavity designs on typhodont jaw models'],
          completionCriteria: 'Clear 1st and 2nd BDS university exams with satisfactory phantom head practical marks.',
          dependencies: '10+2 with PCB and qualifying NEET UG rank',
          resources: [
            { name: 'Dental Council of India BDS Curriculum', url: 'https://dciindia.gov.in', type: 'Official Curriculum', isFree: true },
            { name: 'Dental Materials by Phillips (Reference Portal)', url: 'https://www.sciencedirect.com', type: 'Textbook Portal', isFree: false }
          ]
        },
        {
          stepNumber: 2,
          title: 'Clinical Chairside Patient Training (3rd & 4th BDS)',
          stageType: 'practical_experience',
          duration: 'Year 3–4',
          description: 'Examine and treat patients across 9 dental departments: Conservative Dentistry & Endodontics, Oral & Maxillofacial Surgery, Prosthodontics, Periodontics, and Pedodontics.',
          topics: ['Local Anesthesia Nerve Blocks', 'Routine Tooth Extractions & Impactions', 'Root Canal Treatment (RCT) Steps', 'Periodontal Flap Surgery & Scaling'],
          skillsToAcquire: ['Inferior Alveolar Nerve Block Administration', 'Rotary Endodontic Instrumentation', 'Patient Management & Ergonomics'],
          activities: ['Perform 30+ supervised dental extractions in oral surgery clinic', 'Complete 20+ supervised endodontic root canal treatments on patients'],
          completionCriteria: 'Pass 3rd and Final BDS university clinical case presentations and theory examinations.',
          dependencies: 'Passing 2nd Year BDS',
          resources: [
            { name: 'Journal of the Indian Dental Association (JIDA)', url: 'https://www.ida.org.in', type: 'Medical Journal', isFree: true },
            { name: 'Standard Clinical Endodontics Guidelines', url: 'https://www.aae.org', type: 'Clinical Guidelines', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Compulsory Rotatory Dental Internship',
          stageType: 'practical_experience',
          duration: '12 Months',
          description: 'Complete one-year mandatory rotatory internship in college dental hospital, emergency dental care, community oral health outreach camps, and minor surgical assistance.',
          topics: ['Aesthetic Anterior Composite Restorations', 'Crown & Fixed Partial Denture (FPD) Preparations', 'Dental Trauma Management', 'Dental Radiology (OPG / CBCT Interpretation)'],
          skillsToAcquire: ['Autonomous Single-Sitting RCT', 'Crown Preparation Margins', 'CBCT 3D Bone Density Evaluation'],
          activities: ['Treat 300+ clinical dental patients across specialties', 'Organize and screen patients in 10+ rural school oral hygiene camps'],
          completionCriteria: 'Logbook sign-off across all clinical departments; obtain DCI State Dental Council registration certificate.',
          dependencies: 'Passing Final BDS Examinations',
          resources: [
            { name: 'State Dental Council Registration Portal', url: 'https://dciindia.gov.in', type: 'Government Licensing', isFree: true },
            { name: 'Clove Dental Associate Careers', url: 'https://clovedental.in/careers/', type: 'Company Portal', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Independent Practice Setup or NEET MDS Specialization',
          stageType: 'job_search',
          duration: '6–12 Months',
          description: 'Join a corporate dental chain as Associate Dental Surgeon, establish an independent clinic with modern instrumentation, or clear NEET MDS for specialty residency.',
          topics: ['Practice Management & Dental Clinic Economics', 'Digital Intraoral Scanners & CAD/CAM Milling', 'Implantology Protocols'],
          skillsToAcquire: ['Clinic Financial Planning', 'Sterilization & Bio-Medical Waste Protocols', 'Patient Retention and Treatment Plan Presentation'],
          activities: ['Secure loan / setup modern dental clinic operatory or join multi-specialty hospital dental team', 'Complete certified hands-on clinical implantology workshop'],
          completionCriteria: 'Establish viable clinical patient flow or secure seat in MDS degree program.',
          dependencies: 'DCI State Council Permanent Registration',
          resources: [
            { name: 'NEET MDS Official Portal (NBEMS)', url: 'https://natboard.edu.in', type: 'Postgraduate Entrance', isFree: true },
            { name: 'Indian Society of Oral Implantologists (ISOI)', url: 'https://isoi.co.in', type: 'Specialty Society', isFree: false }
          ]
        }
      ]
    }
  },
  {
    slug: 'nurse',
    title: 'Registered Nurse (B.Sc Nursing / GNM)',
    description: 'Delivers patient care, administers prescribed medications and IV infusions, monitors vital signs, assists in surgical operations, and coordinates inpatient hospital care across Indian government hospitals, private healthcare networks, and global migration pathways.',
    educationRequirements: 'B.Sc Nursing (4 years) or GNM (General Nursing and Midwifery - 3 years) from an Indian Nursing Council (INC) recognized institution. Mandatory registration with the State Nursing Council as Registered Nurse & Registered Midwife (RN/RM).',
    educationPathways: [
      'B.Sc Nursing (4 years via State Nursing CET / AIIMS Nursing Entrance / NEET UG score in some states)',
      'GNM (General Nursing and Midwifery - 3 years) with post-basic B.Sc Nursing (2 years) for degree equivalence',
      'M.Sc Nursing (2 years in Critical Care, Obstetrics, Pediatrics, or Community Health) for nurse educator/specialist roles'
    ],
    eligibilityRequirements: '10+2 with Physics, Chemistry, Biology and English (minimum 45-50% aggregate). Minimum age 17 years. State Nursing Council registration upon graduation.',
    certificationsAndExams: [
      'AIIMS NORCET (Nursing Officer Recruitment Common Eligibility Test)',
      'State Nursing Council RN & RM License',
      'Basic Life Support (BLS) & Pediatric Advanced Life Support (PALS)',
      'IELTS / OET (Occupational English Test) for overseas NHS/Gulf employment'
    ],
    workEnvironment: 'Tertiary hospitals (AIIMS, Apollo, Fortis), ICUs, operation theaters, maternity wards, community health centers, and home healthcare organizations.',
    marketDemand: 'Very High',
    jobOutlook: 'Massive domestic shortage combined with huge international demand across the UK (NHS), Germany, Canada, Australia, and Gulf countries.',
    salaryRange: { min: 280000, max: 1100000, currency: 'INR', source: 'AIIMS NORCET Pay Scales (7th CPC Level 7), AmbitionBox Staff Nurse Salary 2024' },
    salarySource: 'AIIMS NORCET Pay Scales (7th CPC Level 7), AmbitionBox Staff Nurse Salary 2024',
    salaryByExperience: {
      entryLevel: { min: 280000, max: 500000, label: 'Staff Nurse / Ward Nurse (0–2 yrs)' },
      earlyCareer: { min: 500000, max: 850000, label: 'Senior Staff Nurse / ICU Incharge (3–5 yrs)' },
      experienced: { min: 850000, max: 1400000, label: 'Nursing Superintendent / Nursing Supervisor (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'AIIMS and Central Government Nursing Officers (via NORCET) start at 7th Pay Commission Level 7 (~₹70,000–85,000/month gross). Private hospital entry-level wages range from ₹22,000–35,000/month in Tier-1 cities.'
    },
    careerProgression: [
      'Staff Nurse (Ward / General Bed)',
      'Critical Care / OT / ICU Nurse',
      'Nursing In-Charge / Shift Supervisor',
      'Assistant Nursing Superintendent (ANS)',
      'Chief Nursing Officer (CNO) / Director of Nursing Services'
    ],
    employmentSectors: {
      government: 'AIIMS Hospitals (NORCET), ESIC, Railway Hospitals, State Government Medical Colleges & District Hospitals, Armed Forces Military Nursing Service (MNS)',
      privateSector: 'NABH/JCI Accredited Hospital Networks (Apollo, Max, Manipal, Fortis), Specialized Cancer & Cardiac Institutes, Home Healthcare Agencies (Portea)'
    },
    timelineOverview: {
      totalEstimatedDuration: '4 Years (B.Sc Nursing Degree including integrated internship)',
      educationDuration: '4 Years (8 Semesters)',
      prepDuration: 'Concurrent with 12th board exams for state nursing entrance or AIIMS B.Sc Nursing test',
      practicalTrainingDuration: 'Integrated clinical postings throughout all 4 years (minimum 1,500+ clinical hours)',
      jobSearchDuration: 'Immediate employment in private sector or 3–6 months for NORCET notification cycle',
      overlapNotes: 'Hospital bedside postings occur 4 days a week during 2nd, 3rd, and 4th years.',
      confidenceNote: 'Indian nursing qualifications enjoy global reciprocity upon passing language proficiency (OET/IELTS) and regional licensing (NCLEX-RN for US/Canada, CBT for UK).'
    },
    sources: [
      { title: 'Indian Nursing Council (INC) Guidelines & Syllabus', url: 'https://www.indiannursingcouncil.org', sourceAuthority: 'Indian Nursing Council', verifiedDate: '2024-10-14' },
      { title: 'AIIMS NORCET Official Recruitment Portal', url: 'https://www.aiimsexams.ac.in', sourceAuthority: 'AIIMS New Delhi', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Registered Nurse (B.Sc Nursing) Career Roadmap',
      description: 'INC-accredited clinical pathway: anatomy and physiology, nursing foundations, pharmacology, medical-surgical nursing, critical care, and government NORCET examination.',
      totalEstimatedDuration: '4 Years',
      durationBreakdown: 'Anatomy, Physio & Nursing Foundations: Year 1 | Medical-Surgical & Pharmacology: Year 2 | Pediatrics, Mental Health & Midwifery: Year 3 | Critical Care & Integrated Internship: Year 4',
      overlapNotes: 'Mandatory clinical rotations run parallel to classroom theory every semester.',
      steps: [
        {
          stepNumber: 1,
          title: 'Foundations of Nursing, Anatomy & Nutrition',
          stageType: 'education',
          duration: 'Year 1',
          description: 'Master human anatomy, systemic physiology, microbiology, biochemistry, and core nursing arts in nursing foundation simulation labs.',
          topics: ['Human Body Systems & Homeostasis', 'Bed Making & Patient Hygiene', 'Vital Signs Monitoring (Temperature, Pulse, Respiration, BP)', 'Aseptic Techniques & Hospital Infection Control'],
          skillsToAcquire: ['Accurate Vital Signs Recording', 'Infection Control Hand Hygiene Protocols', 'Therapeutic Communication'],
          activities: ['Practice sterile gloving and wound care on mannequin trainers', 'Complete 300+ hours of basic inpatient nursing rotations'],
          completionCriteria: 'Clear 1st year B.Sc Nursing university exams with practical skills assessment.',
          dependencies: '10+2 with PCB (minimum 45-50%)',
          resources: [
            { name: 'Indian Nursing Council B.Sc Nursing Syllabus', url: 'https://www.indiannursingcouncil.org', type: 'Official Curriculum', isFree: true },
            { name: 'WHO Infection Prevention and Control Guidelines', url: 'https://www.who.int', type: 'International Standard', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Medical-Surgical Nursing, Pharmacology & Pathology',
          stageType: 'practical_experience',
          duration: 'Year 2',
          description: 'Administer oral and parenteral medications, manage postoperative patients, and provide bedside care across medical and surgical wards.',
          topics: ['Principles of Drug Administration (5 Rights)', 'IV Cannulation & Infusion Calculations', 'Pre- and Post-Operative Nursing Management', 'Common Pathological Conditions'],
          skillsToAcquire: ['Intravenous (IV) Line Insertion', 'Medication Dosage Calculations', 'Surgical Dressing & Suture Care'],
          activities: ['Perform 50+ supervised IV cannulations and medication administrations', 'Care for patients with cardiac, respiratory, and gastrointestinal conditions in wards'],
          completionCriteria: 'Pass 2nd year university theory and practical clinical viva.',
          dependencies: 'Completion of 1st Year B.Sc Nursing',
          resources: [
            { name: 'Brunner & Suddarth’s Medical-Surgical Nursing', url: 'https://shop.lww.com', type: 'Textbook Reference', isFree: false },
            { name: 'National Health Mission Clinical Training Manuals', url: 'https://nhm.gov.in', type: 'Government Manual', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Maternal Health, Midwifery & Pediatric Nursing',
          stageType: 'practical_experience',
          duration: 'Year 3',
          description: 'Conduct antenatal assessments, assist in labor room deliveries, manage newborn resuscitation, and deliver pediatric care.',
          topics: ['Antenatal Assessment & High-Risk Pregnancy', 'Labor Room Protocols & Normal Delivery Assistance', 'Neonatal Resuscitation & Kangaroo Mother Care', 'Childhood Immunization Schedules (UIP)'],
          skillsToAcquire: ['Conducting Supervised Normal Vaginal Deliveries', 'Neonatal APGAR Scoring', 'Pediatric Medication Dosing'],
          activities: ['Conduct minimum 20 normal deliveries under midwife supervision', 'Complete 8 weeks clinical rotation in Neonatal Intensive Care Unit (NICU)'],
          completionCriteria: 'Complete all INC prescribed maternity case logbooks and pass 3rd year exams.',
          dependencies: 'Passing 2nd Year B.Sc Nursing',
          resources: [
            { name: 'Government of India Dakshata Guidelines for Maternal Care', url: 'https://nhsrcindia.org', type: 'Clinical Guidelines', isFree: true },
            { name: 'Indian Academy of Pediatrics Immunization Schedule', url: 'https://iapindia.org', type: 'Official Schedule', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Integrated Clinical Internship & AIIMS NORCET Preparation',
          stageType: 'certification',
          duration: 'Year 4 (Semesters 7–8)',
          description: 'Undertake 6-month intensive hospital internship in ICUs, emergency departments, and operation theaters, followed by State Nursing Council registration and AIIMS NORCET examination.',
          topics: ['Emergency Triage & Mechanical Ventilation', 'Crash Cart Protocols & Defibrillation', 'AIIMS NORCET Exam Syllabus', 'Nursing Leadership & Hospital Quality Standards'],
          skillsToAcquire: ['ICU Hemodynamic Monitoring', 'CPR and Code Blue Response', 'Rapid Competitive Exam MCQ Solving'],
          activities: ['Rotate as full-duty staff nurse in Adult ICU and Emergency Ward', 'Obtain RN/RM registration from State Nursing Council and sit for AIIMS NORCET'],
          completionCriteria: 'Graduation with B.Sc Nursing degree; registration as RN/RM; obtaining rank in NORCET or joining corporate hospital.',
          dependencies: 'Completion of all academic coursework and clinical competencies',
          resources: [
            { name: 'AIIMS NORCET Recruitment Portal', url: 'https://www.aiimsexams.ac.in', type: 'Official Portal', isFree: true },
            { name: 'OET Official English Test for Healthcare', url: 'https://www.occupationalenglishtest.org', type: 'Global Exam', isFree: false }
          ]
        }
      ]
    }
  },
  {
    slug: 'pharmacist',
    title: 'Pharmacist (B.Pharm / Pharm.D)',
    description: 'Compounds, dispenses, reviews, and manages medications to ensure optimal pharmacotherapy and patient safety. Formulates dosage forms in pharmaceutical manufacturing plants, conducts clinical drug reviews, and manages retail and hospital pharmacies across India.',
    educationRequirements: 'B.Pharm (4 years) or Pharm.D (6 years clinical doctorate) from a Pharmacy Council of India (PCI) approved institution. Mandatory registration as a Registered Pharmacist under the Pharmacy Act 1948 with the State Pharmacy Council.',
    educationPathways: [
      'B.Pharm (4 years via State Engineering/Pharmacy CET or GPAT-track entrance)',
      'Pharm.D (Doctor of Pharmacy - 6 years including 1-year hospital residency) for clinical pharmacy and hospital rounds',
      'M.Pharm (2 years via GPAT in Pharmaceutics, Pharmacology, Pharmaceutical Analysis) for pharmaceutical R&D'
    ],
    eligibilityRequirements: '10+2 with Physics, Chemistry, and Mathematics or Biology (PCM/PCB) with minimum 50% aggregate. Registration with State Pharmacy Council upon graduation.',
    certificationsAndExams: [
      'GPAT (Graduate Pharmacy Aptitude Test - for M.Pharm admissions)',
      'State Pharmacy Council Registered Pharmacist Certificate',
      'Good Manufacturing Practice (GMP) / Regulatory Affairs Certification'
    ],
    workEnvironment: 'Pharmaceutical manufacturing plants (Hyderabad, Ahmedabad, Baddi, Goa), hospital pharmacies, retail pharmacy chains (Apollo Pharmacy, MedPlus), and clinical research organizations.',
    marketDemand: 'High',
    jobOutlook: 'Strong sustained employment driven by India’s position as the "Pharmacy of the World" (generic drugs, biosimilars, vaccines) and expanding hospital pharmacy networks.',
    salaryRange: { min: 280000, max: 1100000, currency: 'INR', source: 'AmbitionBox Pharmacist Salary 2024, Indian Pharmaceutical Association' },
    salarySource: 'AmbitionBox Pharmacist Salary 2024, Indian Pharmaceutical Association',
    salaryByExperience: {
      entryLevel: { min: 280000, max: 480000, label: 'Entry Level / Hospital Pharmacist (0–2 yrs)' },
      earlyCareer: { min: 480000, max: 800000, label: 'Quality / Formulation Scientist / Senior Pharmacist (3–5 yrs)' },
      experienced: { min: 800000, max: 1500000, label: 'QA Manager / Chief Pharmacist / Regulatory Lead (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Pharma R&D and QA/QC specialists in top Indian pharma giants (Sun Pharma, Dr. Reddy’s, Cipla, Torrent) earn ₹6–12 LPA with 3–6 years of experience; retail chain store managers earn ₹3.5–6 LPA.'
    },
    careerProgression: [
      'Hospital Pharmacist / QA-QC Trainee Chemist',
      'Formulation Scientist / Senior Clinical Pharmacist',
      'QA/QC Team Lead / Regulatory Affairs Associate',
      'Plant Quality Head / Pharmacy Operations Manager',
      'Vice President of Quality Assurance / General Manager Operations'
    ],
    employmentSectors: {
      government: 'Government Medical College Hospital Pharmacists, Central Drugs Standard Control Organisation (CDSCO Drug Inspector via UPSC/State PSC), Railways & ESIC Pharmacists',
      privateSector: 'Top Pharma Manufacturers (Sun Pharma, Dr. Reddy\'s, Cipla, Lupin, Zydus), Retail Chains (Apollo Pharmacy, MedPlus), Multi-specialty Hospitals'
    },
    timelineOverview: {
      totalEstimatedDuration: '4 Years (B.Pharm) or 6 Years (Pharm.D)',
      educationDuration: '4 Years (8 Semesters)',
      prepDuration: 'Concurrent GPAT preparation during 3rd/4th year for higher studies',
      practicalTrainingDuration: '150 hours mandatory pharmacy practice training or 1-year clinical clerkship for Pharm.D',
      jobSearchDuration: '1–3 Months campus placement or direct pharmaceutical industry hiring',
      overlapNotes: 'Industrial training and analytical chemistry labs occur during academic breaks.',
      confidenceNote: 'Possession of a Registered Pharmacist license is mandatory to legally open a retail medical store or work as a hospital dispensary in-charge.'
    },
    sources: [
      { title: 'Pharmacy Council of India (PCI) Regulations', url: 'https://www.pci.nic.in', sourceAuthority: 'Pharmacy Council of India', verifiedDate: '2024-10-14' },
      { title: 'Indian Pharmacopoeia Commission (IPC)', url: 'https://ipc.gov.in', sourceAuthority: 'Ministry of Health & Family Welfare', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Pharmacist (B.Pharm) Career Roadmap',
      description: 'PCI-regulated pharmaceutical sciences journey: pharmaceutical chemistry, pharmaceutics, pharmacology, quality assurance, and State Pharmacy Council licensure.',
      totalEstimatedDuration: '4 Years',
      durationBreakdown: 'Organic & Pharmaceutical Chemistry: Year 1 | Pharmaceutics & Microbiology: Year 2 | Pharmacology & Medicinal Chemistry: Year 3 | Industrial Pharmacy & Hospital Training: Year 4',
      overlapNotes: 'Industrial pharmacy training and GPAT preparation proceed alongside 7th and 8th semester coursework.',
      steps: [
        {
          stepNumber: 1,
          title: 'Pharmaceutical Chemistry & Human Anatomy',
          stageType: 'education',
          duration: 'Year 1',
          description: 'Master general pharmaceutics, pharmaceutical inorganic chemistry, pharmaceutical organic chemistry, human anatomy, and cellular physiology.',
          topics: ['Pharmaceutical Dosage Forms', 'Stoichiometry & Inorganic Pharmacopeial Tests', 'Organic Reaction Mechanisms & Stereochemistry', 'Human Systems Anatomy'],
          skillsToAcquire: ['Volumetric & Gravimetric Analysis', 'Dosage Form Compounding (Syrups, Ointments)', 'Laboratory Safety & Reagent Standardization'],
          activities: ['Synthesize simple medicinal compounds (aspirin, paracetamol) in laboratory', 'Standardize acid-base and redox titration indicators'],
          completionCriteria: 'Clear 1st year B.Pharm university exams under PCI uniform credit syllabus.',
          dependencies: '10+2 with PCM/PCB (minimum 50%)',
          resources: [
            { name: 'Pharmacy Council of India Uniform Syllabus', url: 'https://www.pci.nic.in', type: 'Official Curriculum', isFree: true },
            { name: 'Indian Pharmacopoeia Online Reference', url: 'https://ipc.gov.in', type: 'Official Standards', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Physical Pharmaceutics, Microbiology & Pharmacology Foundations',
          stageType: 'skill_acquisition',
          duration: 'Year 2',
          description: 'Study drug solubility, micomeritics, pharmaceutical microbiology (sterilization, antibiotic assays), and basic mechanisms of drug action.',
          topics: ['Colloidal Dispersions & Rheology', 'Sterilization Techniques & Cleanroom Standards', 'Pharmacokinetics (ADME) Principles', 'Autonomic Nervous System Drugs'],
          skillsToAcquire: ['Dissolution Testing & Viscometry', 'Aseptic Inoculation & Microbial Limit Testing', 'Animal Experiment Alternatives (Computer Simulations)'],
          activities: ['Perform dissolution rate testing of solid dosage tablets', 'Conduct microbiological culture staining and antibiotic zone of inhibition assays'],
          completionCriteria: 'Pass 2nd year B.Pharm practical and theory examinations.',
          dependencies: 'Passing 1st Year B.Pharm',
          resources: [
            { name: 'NPTEL Pharmaceutical Chemistry (IIT Kharagpur)', url: 'https://nptel.ac.in', type: 'Course', isFree: true },
            { name: 'Good Laboratory Practice (GLP) Guidelines (CDSCO)', url: 'https://cdsco.gov.in', type: 'Government Regulations', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Medicinal Chemistry, Pharmacology & Instrumental Analysis',
          stageType: 'skill_acquisition',
          duration: 'Year 3',
          description: 'Master structure-activity relationships (SAR) of antimicrobial, cardiovascular, and CNS drugs, alongside advanced instrumental analysis (HPLC, UV-Vis, IR).',
          topics: ['Medicinal Chemistry & SAR of Modern Drugs', 'Chemotherapy of Infectious Diseases & Cancer', 'High-Performance Liquid Chromatography (HPLC)', 'Pharmacovigilance & Adverse Drug Reaction (ADR) Reporting'],
          skillsToAcquire: ['HPLC Column Operation & Calibration', 'Spectrophotometric Drug Quantification', 'Pharmacovigilance Reporting (PvPI VigiFlow)'],
          activities: ['Quantify active pharmaceutical ingredient (API) percentage in commercial tablets using UV-Vis spectrophotometry', 'Log drug-drug interaction case scenarios'],
          completionCriteria: 'Pass 3rd year B.Pharm examinations; qualify mock GPAT evaluations.',
          dependencies: 'Passing 2nd Year B.Pharm',
          resources: [
            { name: 'Pharmacovigilance Programme of India (PvPI)', url: 'https://ipc.gov.in/pvpi.html', type: 'Official Portal', isFree: true },
            { name: 'GPAT Official Examination Portal (NBEMS)', url: 'https://natboard.edu.in', type: 'Examination Portal', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Industrial Training, Licensure & Industry Placement',
          stageType: 'practical_experience',
          duration: 'Year 4',
          description: 'Complete mandatory 150-hour industrial training in a GMP-certified pharma plant or 200 hours in an accredited hospital pharmacy, register with State Council, and secure employment.',
          topics: ['Good Manufacturing Practices (Schedule M / WHO GMP)', 'Drug Regulatory Affairs (US FDA 21 CFR, CDSCO CTD Formats)', 'Hospital Pharmacy Inventory Management'],
          skillsToAcquire: ['Batch Manufacturing Record (BMR) Review', 'Drug Dispensing Ethics & Patient Counseling', 'Regulatory Dossier Preparation'],
          activities: ['Complete industrial internship in QA/QC/Production department of a pharma company', 'Register as Pharmacist with State Pharmacy Council to receive official green card'],
          completionCriteria: 'Award of B.Pharm degree, issuance of Registered Pharmacist certificate, and placement in pharma industry or hospital.',
          dependencies: 'Passing Final B.Pharm Examinations',
          resources: [
            { name: 'State Pharmacy Council Licensing Portal', url: 'https://www.pci.nic.in', type: 'Licensing Portal', isFree: true },
            { name: 'Cipla India Careers', url: 'https://www.cipla.com/careers', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'physiotherapist',
    title: 'Physiotherapist (BPT / MPT)',
    description: 'Assesses, rehabilitates, and restores physical function and mobility in patients recovering from neurological trauma, orthopedic surgeries, sports injuries, or cardiopulmonary diseases. Uses manual therapy, therapeutic exercise, and electrotherapy modalities.',
    educationRequirements: 'BPT (Bachelor of Physiotherapy) (4.5 years including 6-month compulsory rotational internship). MPT (Master of Physiotherapy - 2 years) in Orthopedics, Neurology, Sports, or Cardio-Pulmonary strongly preferred for advanced clinical practice. National Commission for Allied and Healthcare Professions (NCAHP) registration.',
    educationPathways: [
      'BPT (4.5 years via State Allied Health CET or NEET UG score in some states)',
      'MPT (2 years in Musculoskeletal / Neurosciences / Sports Physiotherapy via PG CET)',
      'Certified Clinical Manual Therapist (CCMT) or Sports Rehab Specialist'
    ],
    eligibilityRequirements: '10+2 with Physics, Chemistry, and Biology (PCB) with minimum 50% aggregate. Registration with State Physiotherapy Council / NCAHP.',
    certificationsAndExams: [
      'State Physiotherapy Council / NCAHP Registration',
      'Certified Mulligan / Maitland Manual Therapist',
      'Sports Physiotherapy Fellowship (ISPS / FIFA Diploma in Football Medicine)'
    ],
    workEnvironment: 'Multi-specialty hospital rehabilitation departments, private physiotherapy clinics, sports fitness academies (BCCI, SAI), and orthopedics centers.',
    marketDemand: 'High',
    jobOutlook: 'Rapidly growing with rising post-operative orthopedic recovery awareness, sports athletic academies, geriatric healthcare, and corporate ergonomic consultation.',
    salaryRange: { min: 300000, max: 1200000, currency: 'INR', source: 'AmbitionBox Physiotherapist Salary 2024, Indian Association of Physiotherapists (IAP)' },
    salarySource: 'AmbitionBox Physiotherapist Salary 2024, Indian Association of Physiotherapists (IAP)',
    salaryByExperience: {
      entryLevel: { min: 300000, max: 500000, label: 'Junior Physiotherapist (0–2 yrs)' },
      earlyCareer: { min: 500000, max: 900000, label: 'Consultant / Sports Physiotherapist (3–5 yrs)' },
      experienced: { min: 900000, max: 1600000, label: 'Chief Physiotherapist / Clinic Owner (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Sports physiotherapists attached to premier cricket/football academies and owners of thriving private clinics in metros earn ₹12–25+ LPA.'
    },
    careerProgression: [
      'Intern Physiotherapist',
      'Clinical Physiotherapist (Hospital Ward / OPD)',
      'Senior Physiotherapist / Sports Team Physio',
      'Chief of Rehabilitation Services',
      'Director of Physical Therapy / Private Clinic Chain Owner'
    ],
    employmentSectors: {
      government: 'AIIMS, Sports Authority of India (SAI), Railway Hospitals, State Civil Hospital Rehab Departments, Armed Forces Rehabilitation Centers',
      privateSector: 'Hospital Chains (Apollo, Fortis, Max), Sports Academies (IPL Teams, State Cricket Associations), Private Rehab Clinics, Ergonomic Consultancies'
    },
    timelineOverview: {
      totalEstimatedDuration: '4.5 Years (4 Years Academic + 6 Months Full-Time Hospital Internship)',
      educationDuration: '4 Years (8 Semesters)',
      prepDuration: 'Concurrent with 12th board exams for state allied health entrance tests',
      practicalTrainingDuration: '6 Months mandatory paid hospital rotatory internship (OPD, Ortho, Neuro, ICU)',
      jobSearchDuration: '1–3 Months clinical hospital placement or sports center recruitment',
      overlapNotes: 'Clinical postings begin from 2nd year onwards in hospital physiotherapy outpatient units.',
      confidenceNote: 'Completion of 6 months rotatory internship is a statutory prerequisite for issuance of the permanent license.'
    },
    sources: [
      { title: 'National Commission for Allied and Healthcare Professions (NCAHP)', url: 'https://main.mohfw.gov.in', sourceAuthority: 'Ministry of Health & Family Welfare', verifiedDate: '2024-10-14' },
      { title: 'Indian Association of Physiotherapists (IAP)', url: 'https://www.physiotherapyindia.org', sourceAuthority: 'Indian Association of Physiotherapists', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Physiotherapist (BPT) Career Roadmap',
      description: 'NCAHP-aligned rehabilitation journey: human anatomy and biomechanics, exercise therapy, electrotherapy, neurological rehabilitation, and hospital rotatory internship.',
      totalEstimatedDuration: '4.5 Years',
      durationBreakdown: 'Anatomy, Physio & Biomechanics: Year 1 | Exercise Therapy & Electrotherapy: Year 2 | Orthopedics & General Surgery Rehab: Year 3 | Neurology, Pediatrics & ICU Care: Year 4 | Compulsory Hospital Internship: 6 Months',
      overlapNotes: 'Bedside patient mobilization postings in orthopedic and neuro wards run during 3rd and 4th years.',
      steps: [
        {
          stepNumber: 1,
          title: 'Human Anatomy, Physiology & Biomechanics',
          stageType: 'education',
          duration: 'Year 1',
          description: 'Master musculoskeletal anatomy (bones, joints, origins/insertions, nerve supply), exercise physiology, and kinetics/kinematics of human locomotion.',
          topics: ['Musculoskeletal & Neuroanatomy', 'Gait Analysis & Joint Mechanics', 'Exercise Physiology & Muscle Contraction', 'Basic Psychology & Sociology in Health'],
          skillsToAcquire: ['Goniometric Range of Motion (ROM) Measurement', 'Manual Muscle Testing (MMT Grade 0-5)', 'Palpation of Bony Landmarks & Ligaments'],
          activities: ['Perform cadaveric dissection observations of limb musculature', 'Measure joint range of motion on 30 healthy volunteers using universal goniometers'],
          completionCriteria: 'Pass 1st year BPT university theory and practical exams.',
          dependencies: '10+2 with PCB (minimum 50%)',
          resources: [
            { name: 'Brunnstrom’s Clinical Kinesiology Reference', url: 'https://www.fadavis.com', type: 'Textbook Reference', isFree: false },
            { name: 'NPTEL Biomechanics of Human Movement', url: 'https://nptel.ac.in', type: 'Course', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Exercise Therapy, Electrotherapy & Manual Techniques',
          stageType: 'skill_acquisition',
          duration: 'Year 2',
          description: 'Master therapeutic exercises (strengthening, stretching, suspension therapy) and electrophysical modalities (TENS, IFT, Ultrasound, LASER, Shortwave Diathermy).',
          topics: ['Therapeutic Exercise Prescription', 'Electrophysical Agents (TENS, IFT, SWD, Ultrasound)', 'Hydrotherapy & Cryotherapy', 'Postural Analysis & Ergonomics'],
          skillsToAcquire: ['Application of Electrotherapy Modalities', 'Passive & Active Assisted Stretching', 'Postural Defect Correction'],
          activities: ['Calibrate and safely apply TENS and ultrasound on simulated muscular pain patients', 'Design a customized progressive resistance exercise (PRE) program'],
          completionCriteria: 'Pass 2nd year BPT practical examinations in electrotherapy and exercise therapy.',
          dependencies: 'Passing 1st Year BPT',
          resources: [
            { name: 'Clayton’s Electrotherapy Guidelines', url: 'https://www.elsevier.com', type: 'Textbook Reference', isFree: false },
            { name: 'Physiopedia Open Rehabilitation Platform', url: 'https://www.physio-pedia.com', type: 'Learning Portal', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Orthopedic, Neurological & Cardiopulmonary Rehabilitation',
          stageType: 'practical_experience',
          duration: 'Year 3–4',
          description: 'Diagnose and rehabilitate clinical conditions: stroke hemiplegia, cerebral palsy, spinal cord injuries, ACL tears, joint replacements, and ICU chest physiotherapy.',
          topics: ['Post-Surgical Orthopedic Protocols (TKR, THR, Arthroscopy)', 'Neuro-Rehabilitation (Bobath, Brunnstrom, PNF techniques)', 'Cardiopulmonary Resuscitation & Chest PT', 'Sports Injury Assessment (Special Orthopedic Tests)'],
          skillsToAcquire: ['Neurodevelopmental Facilitation (PNF)', 'Postural Drainage & Chest Vibration', 'Special Orthopedic Tests (Lachman, McMurray, Hawkins-Kennedy)'],
          activities: ['Mobilize post-operative knee replacement patients in orthopedic ward', 'Perform chest physiotherapy on ventilated patients in surgical ICU'],
          completionCriteria: 'Pass 3rd and 4th year BPT university clinical case examinations.',
          dependencies: 'Passing 2nd Year BPT',
          resources: [
            { name: 'FIFA Diploma in Football Medicine', url: 'https://www.fifamedicinediploma.net', type: 'Certification Course', isFree: true },
            { name: 'Maitland’s Vertebral Manipulation Guide', url: 'https://www.elsevier.com', type: 'Textbook Reference', isFree: false }
          ]
        },
        {
          stepNumber: 4,
          title: 'Compulsory Rotatory Internship & Clinical Practice Licensure',
          stageType: 'practical_experience',
          duration: '6 Months',
          description: 'Complete 6-month mandatory rotational internship across Orthopedics, Neurology, General Surgery, ICU, Pediatrics, and Community Health in an accredited hospital.',
          topics: ['Independent Patient Assessment & Treatment Delivery', 'Documentation & Clinical Progress Notes', 'State Council / NCAHP Licensure Regulations'],
          skillsToAcquire: ['Autonomous Rehabilitation Planning', 'Patient Discharge Counseling', 'Clinic Management Essentials'],
          activities: ['Treat 200+ rehabilitation patients during internship rotations', 'Obtain permanent registration number from State Physiotherapy Council / NCAHP'],
          completionCriteria: 'Receipt of internship completion certificate, award of BPT degree, and active council license.',
          dependencies: 'Passing Final BPT Examinations',
          resources: [
            { name: 'NCAHP Allied Health Professional Registration', url: 'https://main.mohfw.gov.in', type: 'Government Licensing', isFree: true },
            { name: 'Indian Association of Physiotherapists Membership Portal', url: 'https://www.physiotherapyindia.org', type: 'Professional Association', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'medical-laboratory-technologist',
    title: 'Medical Laboratory Technologist (BMLT / DMLT)',
    description: 'Performs clinical diagnostic analyses on blood, urine, tissue, and bodily fluids using automated hematology analyzers, biochemical spectrometers, and molecular PCR platforms. Provides critical pathology reports guiding medical treatment.',
    educationRequirements: 'B.Sc in Medical Laboratory Technology (BMLT - 3 to 4 years) or Diploma (DMLT - 2 years) from an institution recognized by the State Paramedical Board or NCAHP. Knowledge of NABL ISO 15189 accreditation standards.',
    educationPathways: [
      'BMLT (Bachelor in Medical Laboratory Technology - 3 to 4 years via State Paramedical Entrance)',
      'DMLT (Diploma - 2 years) with lateral entry to 2nd year BMLT',
      'M.Sc Medical Laboratory Technology / Clinical Biochemistry (2 years)'
    ],
    eligibilityRequirements: '10+2 with Physics, Chemistry, and Biology/Mathematics (PCB/PCM) with minimum 45-50% aggregate. Registration with State Paramedical Council.',
    certificationsAndExams: [
      'State Paramedical Council Registration / NCAHP Allied Health License',
      'NABL ISO 15189 Quality Management System Internal Auditor',
      'Certified Molecular Testing Specialist (RT-PCR)'
    ],
    workEnvironment: 'Hospital diagnostic laboratories, standalone pathology chains (Dr. Lal PathLabs, SRL/Agilus Diagnostics, Metropolis, Thyrocare), blood banks, and clinical research centers.',
    marketDemand: 'High',
    jobOutlook: 'Steady growth powered by preventive health checkup culture, expanding hospital diagnostic wings, and molecular genomics diagnostic adoption.',
    salaryRange: { min: 240000, max: 700000, currency: 'INR', source: 'AmbitionBox Lab Technologist Salary 2024, PayScale India' },
    salarySource: 'AmbitionBox Lab Technologist Salary 2024, PayScale India',
    salaryByExperience: {
      entryLevel: { min: 240000, max: 380000, label: 'Junior Lab Technologist (0–2 yrs)' },
      earlyCareer: { min: 380000, max: 600000, label: 'Senior Technologist / Lab Supervisor (3–5 yrs)' },
      experienced: { min: 600000, max: 1000000, label: 'Laboratory Quality Manager / Chief Technologist (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Government diagnostic positions (AIIMS, ESIC, State PSC) offer 7th CPC Level 5/6 pay scales (~₹40,000–55,000/month gross plus allowances).'
    },
    careerProgression: [
      'Trainee Medical Lab Technician',
      'Laboratory Technologist (Hematology / Biochemistry / Microbiology)',
      'Senior Medical Technologist / Quality Coordinator',
      'Laboratory Technical Manager (NABL In-Charge)',
      'Director of Laboratory Operations'
    ],
    employmentSectors: {
      government: 'AIIMS Central Laboratories, State Civil Hospitals, CGHS Wellness Centers, ESIC Diagnostic Centers, Defense Base Hospitals',
      privateSector: 'Commercial Pathology Giants (Dr. Lal PathLabs, Agilus Diagnostics, Metropolis, Thyrocare), Corporate Hospital Laboratories, Blood Banks'
    },
    timelineOverview: {
      totalEstimatedDuration: '3–3.5 Years (3 Years Academic + 6 Months Hospital Internship)',
      educationDuration: '3 Years (6 Semesters)',
      prepDuration: 'Concurrent with 12th board exams for state paramedical admissions',
      practicalTrainingDuration: '6 Months full-time clinical laboratory rotational internship',
      jobSearchDuration: '1–2 Months direct absorption in diagnostic chains or hospitals',
      overlapNotes: 'Hands-on practicals on automated biochemistry and hematology analyzers run every semester.',
      confidenceNote: 'Knowledge of Quality Control rules (Westgard Rules, Levey-Jennings charts) is crucial for passing NABL audit interviews.'
    },
    sources: [
      { title: 'National Accreditation Board for Testing and Calibration Laboratories (NABL ISO 15189)', url: 'https://nabl-india.org', sourceAuthority: 'NABL India', verifiedDate: '2024-10-14' },
      { title: 'National Commission for Allied and Healthcare Professions', url: 'https://main.mohfw.gov.in', sourceAuthority: 'Ministry of Health & Family Welfare', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Medical Laboratory Technologist (BMLT) Career Roadmap',
      description: 'Paramedical diagnostic pathway: clinical biochemistry, hematology, medical microbiology, histopathology, automated analyzer calibration, and NABL accreditation compliance.',
      totalEstimatedDuration: '3.5 Years',
      durationBreakdown: 'Basic Anatomy, Physiology & Biochemistry: Year 1 | Hematology, Blood Banking & Clinical Pathology: Year 2 | Medical Microbiology, Histology & Quality Control: Year 3 | Clinical Laboratory Internship: 6 Months',
      overlapNotes: 'Clinical hospital laboratory bench rotations occur daily throughout the final year.',
      steps: [
        {
          stepNumber: 1,
          title: 'Clinical Biochemistry & Fundamentals of Laboratory Science',
          stageType: 'education',
          duration: 'Year 1',
          description: 'Learn laboratory safety, reagent handling, pipetting precision, clinical biochemistry of carbohydrates, proteins, lipids, and liver/kidney function indicators.',
          topics: ['Laboratory Glassware Standardization', 'Spectrophotometry & Colorimetry', 'Biochemical Tests (Blood Glucose, Urea, Creatinine)', 'Bio-Medical Waste Management (BMW) Rules'],
          skillsToAcquire: ['Micropipetting Precision', 'Colorimetric Assays', 'Bio-Medical Waste Segregation'],
          activities: ['Prepare standard calibration curves for blood glucose and protein assays', 'Demonstrate strict compliance with universal biohazard precautions'],
          completionCriteria: 'Clear 1st year BMLT university exams and practical evaluations.',
          dependencies: '10+2 with PCB (minimum 45-50%)',
          resources: [
            { name: 'NPTEL Clinical Biochemistry (IIT Madras)', url: 'https://nptel.ac.in', type: 'Course', isFree: true },
            { name: 'Bio-Medical Waste Management Rules 2016 (CPCB)', url: 'https://cpcb.nic.in', type: 'Government Regulations', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Hematology, Blood Transfusion & Clinical Pathology',
          stageType: 'skill_acquisition',
          duration: 'Year 2',
          description: 'Master complete blood counts (CBC), peripheral smear preparation, automated hematology analyzers, blood grouping, crossmatching, and routine urine microscopy.',
          topics: ['Complete Blood Count (CBC) & RBC Indices', 'Peripheral Blood Smear Staining (Leishman / Giemsa)', 'Blood Bank Grouping & Coombs Test', 'Automated 5-Part Cell Counter Maintenance'],
          skillsToAcquire: ['Thin and Thick Blood Smear Preparation', 'Crossmatching & Antibody Screening', 'Urine Microscopic Sediment Analysis'],
          activities: ['Stain and microscopically examine 100+ peripheral blood smears for malaria parasites and leukemias', 'Perform manual and automated blood grouping and crossmatching'],
          completionCriteria: 'Pass 2nd year BMLT practical examinations with zero diagnostic error in morphology identification.',
          dependencies: 'Passing 1st Year BMLT',
          resources: [
            { name: 'Dacie and Lewis Practical Haematology Reference', url: 'https://www.elsevier.com', type: 'Textbook Reference', isFree: false },
            { name: 'National Blood Transfusion Council (NBTC) Guidelines', url: 'https://naco.gov.in', type: 'Government Guidelines', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Medical Microbiology, Histopathology & NABL Quality Control',
          stageType: 'skill_acquisition',
          duration: 'Year 3',
          description: 'Culture bacterial pathogens, perform antibiotic sensitivity testing, process tissue biopsies for histopathology, and implement Westgard rules for laboratory QC.',
          topics: ['Bacterial Culture & Antimicrobial Sensitivity (Kirby-Bauer)', 'Tissue Processing, Microtomy & H&E Staining', 'Internal Quality Control (IQC) & Westgard Rules', 'Real-Time PCR & Molecular Diagnostics'],
          skillsToAcquire: ['Tissue Sectioning on Rotary Microtome', 'Levey-Jennings Chart Analysis', 'RT-PCR Nucleic Acid Extraction & Setup'],
          activities: ['Embed tissue blocks, cut 4-micron sections using microtome, and perform H&E staining', 'Plot daily Levey-Jennings charts and evaluate Westgard multirule violations'],
          completionCriteria: 'Pass 3rd year BMLT university examinations.',
          dependencies: 'Passing 2nd Year BMLT',
          resources: [
            { name: 'NABL ISO 15189 Standard Overview', url: 'https://nabl-india.org', type: 'Official Standard', isFree: true },
            { name: 'Westgard Quality Control Rules Guide', url: 'https://www.westgard.com', type: 'Platform', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Diagnostic Hospital Internship & Employment',
          stageType: 'practical_experience',
          duration: '6 Months',
          description: 'Complete 6 months full-time rotation in an NABL-accredited hospital laboratory, mastering automated chemistry and hematology analyzers, and obtaining placement.',
          topics: ['Laboratory Information Systems (LIS) Operation', 'Emergency Critical Alert Notification', 'Customer Sample Phlebotomy'],
          skillsToAcquire: ['Routine Phlebotomy Venipuncture', 'Automated Analyzer Troubleshooting (Roche / Beckman / Sysmex)', 'LIS Result Validation'],
          activities: ['Process 1,000+ clinical patient samples across biochemistry, hematology, and serology', 'Participate in external quality assessment scheme (EQAS) sample testing'],
          completionCriteria: 'Complete clinical logbook, obtain BMLT degree, and secure employment in pathology chain or hospital lab.',
          dependencies: 'Passing Final BMLT Examinations',
          resources: [
            { name: 'Dr. Lal PathLabs Careers', url: 'https://www.lalpathlabs.com/careers', type: 'Company Portal', isFree: true },
            { name: 'Agilus Diagnostics Careers', url: 'https://agilusdiagnostics.com/careers', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'radiology-technologist',
    title: 'Radiology Technologist (B.Sc Medical Imaging)',
    description: 'Operates diagnostic radiation and imaging equipment including Digital X-Ray, Computed Tomography (CT), Magnetic Resonance Imaging (MRI), and fluoroscopy. Follows Atomic Energy Regulatory Board (AERB) radiation safety principles (ALARA).',
    educationRequirements: 'B.Sc in Medical Imaging Technology (BMIT / B.Sc Radiology - 3 to 4 years) from an institution approved by the Atomic Energy Regulatory Board (AERB) and State Paramedical Council.',
    educationPathways: [
      'B.Sc in Medical Imaging Technology / Radiography (3 to 4 years via State Paramedical Entrance)',
      'Diploma in Medical Radio-Diagnosis Technology (DMRIT - 2 years) with lateral entry',
      'M.Sc Medical Imaging Technology (2 years) for advanced CT/MRI specialization'
    ],
    eligibilityRequirements: '10+2 with Physics, Chemistry, and Biology/Mathematics (minimum 50% aggregate). Mandatory radiation safety qualification recognized by AERB.',
    certificationsAndExams: [
      'AERB Radiological Safety Officer (RSO Level-I) Certification',
      'State Paramedical Council Registration / NCAHP License',
      'Advanced MRI Safety & Protocol Training Certificate'
    ],
    workEnvironment: 'Diagnostic imaging centers, multi-specialty hospital radiology departments, trauma care emergency centers, and cancer radiation therapy institutes.',
    marketDemand: 'High',
    jobOutlook: 'Rapid expansion driven by increasing CT/MRI installations across Tier-2/3 Indian cities and high corporate health screening demand.',
    salaryRange: { min: 280000, max: 900000, currency: 'INR', source: 'AmbitionBox Radiographer Salary 2024, PayScale India' },
    salarySource: 'AmbitionBox Radiographer Salary 2024, PayScale India',
    salaryByExperience: {
      entryLevel: { min: 280000, max: 450000, label: 'Junior Radiographer / CT Technologist (0–2 yrs)' },
      earlyCareer: { min: 450000, max: 800000, label: 'Senior MRI / CT Technologist (3–5 yrs)' },
      experienced: { min: 800000, max: 1300000, label: 'Chief Radiology Technologist / RSO (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'AERB-certified Radiological Safety Officers (RSO) and specialized 3T-MRI technologists in tertiary hospitals command packages above ₹9–14 LPA.'
    },
    careerProgression: [
      'Junior Radiographer (X-Ray / C-Arm)',
      'CT / MRI Applications Technologist',
      'Senior Imaging Technologist / Radiological Safety Officer (RSO)',
      'Radiology Department Operations Manager',
      'Chief Technical Director of Diagnostic Imaging'
    ],
    employmentSectors: {
      government: 'AIIMS, State Government Civil Hospitals, ESIC Medical Colleges, Tata Memorial Centre (TMC), Defense Base Hospitals',
      privateSector: 'Super-Specialty Hospitals (Apollo, Fortis, Max, Narayana Health), Standalone Imaging Centers (Mahajan Imaging, Vijaya Diagnostic, Star Imaging)'
    },
    timelineOverview: {
      totalEstimatedDuration: '3.5–4 Years (3 Years Academic + 6 Months to 1 Year Hospital Rotations)',
      educationDuration: '3 Years (6 Semesters)',
      prepDuration: 'Concurrent with 12th board exams for state paramedical admissions',
      practicalTrainingDuration: '6–12 Months rotational clinical postings on X-Ray, CT, and MRI machines',
      jobSearchDuration: '1–3 Months direct hiring in diagnostic centers or hospital chains',
      overlapNotes: 'Hands-on patient positioning and imaging scanner operation run parallel to classroom physics.',
      confidenceNote: 'Technologists wearing personal TLD (thermoluminescent dosimeter) badges must adhere strictly to AERB annual dose limit norms (< 20 mSv/year).'
    },
    sources: [
      { title: 'Atomic Energy Regulatory Board (AERB) Radiation Safety Norms', url: 'https://www.aerb.gov.in', sourceAuthority: 'AERB India', verifiedDate: '2024-10-14' },
      { title: 'Indian Radiological and Imaging Association (IRIA)', url: 'https://iria.org.in', sourceAuthority: 'IRIA', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Radiology Technologist Career Roadmap',
      description: 'Medical imaging journey: radiation physics, digital radiography, computed tomography (CT), magnetic resonance imaging (MRI), and AERB radiation protection compliance.',
      totalEstimatedDuration: '3.5–4 Years',
      durationBreakdown: 'Radiation Physics & Conventional Radiography: Year 1 | Special Radiological Procedures & CT Scanning: Year 2 | MRI & Radiation Safety: Year 3 | Clinical Imaging Internship: 6–12 Months',
      overlapNotes: 'Live patient positioning and scanner protocol adjustments take place during clinical hospital hours.',
      steps: [
        {
          stepNumber: 1,
          title: 'Radiation Physics, Anatomy & Digital Radiography',
          stageType: 'education',
          duration: 'Year 1',
          description: 'Master X-ray generation, tube design, interaction of radiation with matter, patient positioning, and digital radiography (CR/DR) detectors.',
          topics: ['X-Ray Production & Tube Physics', 'Radio-Anatomy of Skeletal System', 'Patient Positioning for Chest, Extremities, Spine', 'ALARA Principles & Lead Shielding'],
          skillsToAcquire: ['Accurate Patient Positioning for Radiographs', 'Exposure Parameter Selection (kVp, mAs)', 'Digital Radiography Image Post-Processing'],
          activities: ['Position patients for 100+ standard diagnostic X-rays under technologist supervision', 'Wear and log personal TLD radiation monitoring badges'],
          completionCriteria: 'Pass 1st year B.Sc Medical Imaging university examinations.',
          dependencies: '10+2 with Science (PCB/PCM)',
          resources: [
            { name: 'AERB Safety Code for Medical Diagnostic X-Ray Equipment', url: 'https://www.aerb.gov.in', type: 'Official Standard', isFree: true },
            { name: 'Radiopaedia Imaging Positioning and Anatomy Guide', url: 'https://radiopaedia.org', type: 'Open Educational Resource', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Computed Tomography (CT) & Contrast Media Administration',
          stageType: 'skill_acquisition',
          duration: 'Year 2',
          description: 'Operate multi-slice CT scanners, perform axial/helical acquisitions, multi-planar reconstructions (MPR), and assist in intravenous iodinated contrast administrations.',
          topics: ['Multi-Slice CT Architecture & Detector Arrays', 'CT Protocols (Brain, Chest, Abdomen, Angiography)', 'Iodinated Contrast Reactions & Emergency Response', 'Radiation Dose Modulation (CTDI, DLP)'],
          skillsToAcquire: ['CT Protocol Selection & Scan Parameter Tuning', '3D Volume Rendering & MPR Reconstructions', 'Contrast Power Injector Operation'],
          activities: ['Perform 50+ supervised non-contrast and contrast-enhanced CT scans', 'Perform 3D vascular reconstructions of coronary and cerebral angiographies'],
          completionCriteria: 'Pass 2nd year university examinations with satisfactory CT practical evaluation.',
          dependencies: 'Passing 1st Year B.Sc Medical Imaging',
          resources: [
            { name: 'CT Radiation Dose Optimization (IAEA)', url: 'https://www.iaea.org', type: 'International Guidance', isFree: true },
            { name: 'Computed Tomography by Seeram (Reference Portal)', url: 'https://www.elsevier.com', type: 'Textbook Reference', isFree: false }
          ]
        },
        {
          stepNumber: 3,
          title: 'Magnetic Resonance Imaging (MRI) & Radiation Protection Officer',
          stageType: 'skill_acquisition',
          duration: 'Year 3',
          description: 'Master magnetic resonance physics (T1/T2 relaxation, spin echo, gradient echo), RF coils, MRI safety (Zone I-IV screening), and qualify AERB RSO safety standards.',
          topics: ['MRI Physics & Pulse Sequences (T1, T2, FLAIR, DWI)', 'MRI Ferromagnetic Safety Rules (Zone I–IV)', 'AERB RSO Level-I Radiation Safety Responsibilities', 'Artifact Identification & Mitigation'],
          skillsToAcquire: ['Patient MRI Safety Screening', 'RF Coil Selection & Scanner Presets (1.5T / 3T)', 'Diffusion Weighted Imaging (DWI) Protocol Execution'],
          activities: ['Perform patient pre-MRI screening for metallic implants and pacemakers', 'Operate 1.5T/3T scanner console for neuro, spine, and musculoskeletal MR scans'],
          completionCriteria: 'Pass 3rd year university examinations; clear AERB RSO certification requirements.',
          dependencies: 'Passing 2nd Year B.Sc Medical Imaging',
          resources: [
            { name: 'AERB e-LORA Portal for Radiation Safety Officers', url: 'https://elora.aerb.gov.in', type: 'Government Portal', isFree: true },
            { name: 'MRI Safety Official Guidance (ACR)', url: 'https://www.acr.org', type: 'Clinical Guidelines', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Clinical Imaging Internship & Hospital Placement',
          stageType: 'practical_experience',
          duration: '6–12 Months',
          description: 'Complete full-time rotational clinical internship across X-Ray, Fluoroscopy, CT, MRI, and Cath-Lab, and secure employment in a hospital or imaging center.',
          topics: ['Emergency Trauma Radiology Response', 'PACS & DICOM Network Management', 'Technologist-Radiologist Communication'],
          skillsToAcquire: ['Autonomous Emergency CT/X-Ray Execution', 'PACS Image Archival & Routing', 'Patient Reassurance & Anxiety Management'],
          activities: ['Conduct independently 200+ multi-modality patient diagnostic scans during shift rotations', 'Coordinate with radiologist consultants to verify image quality and completeness'],
          completionCriteria: 'Completion of internship logbook and job placement as Clinical Imaging Technologist.',
          dependencies: 'Passing Final B.Sc Imaging Examinations',
          resources: [
            { name: 'Mahajan Imaging Careers', url: 'https://www.mahajanimaging.com', type: 'Company Portal', isFree: true },
            { name: 'Vijaya Diagnostic Centre Careers', url: 'https://www.vijayadiagnostic.com', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'nutritionist',
    title: 'Clinical Nutritionist & Dietitian',
    description: 'Assesses nutritional status, designs medical nutrition therapy (MNT), formulates customized therapeutic diet plans, and manages dietary protocols for chronic lifestyle diseases (diabetes, hypertension, obesity, kidney disorders) and critical care hospital inpatients.',
    educationRequirements: 'B.Sc in Clinical Nutrition and Dietetics / Home Science / Food Science (3 years) + M.Sc in Clinical Nutrition / Dietetics (2 years) + 6-month clinical hospital internship. Registered Dietitian (RD) credential from the Indian Dietetic Association (IDA).',
    educationPathways: [
      'B.Sc in Clinical Nutrition / Home Science (3 years) -> M.Sc in Food & Nutrition / Clinical Dietetics (2 years) -> 6-Month hospital internship -> IDA Registered Dietitian (RD) exam',
      'PG Diploma in Clinical Nutrition and Dietetics (1 year) post relevant science degree',
      'NEP 4-Year B.Sc (Honours with Research) in Clinical Nutrition'
    ],
    eligibilityRequirements: '10+2 with Chemistry, Biology, and Home Science/Physics with minimum 50% aggregate. For Registered Dietitian (RD) licensure: postgraduate degree in nutrition plus 6 months internship in an IDA-recognized hospital.',
    certificationsAndExams: [
      'Registered Dietitian (RD) Exam conducted by Indian Dietetic Association (IDA)',
      'Certified Diabetes Educator (CDE)',
      'Sports Nutrition Specialist (ISSN / ACSM)'
    ],
    workEnvironment: 'Corporate multi-specialty hospitals, outpatient clinical nutrition centers, preventive wellness clinics, sports training academies, and healthtech platforms (HealthifyMe, Fittr).',
    marketDemand: 'High',
    jobOutlook: 'Rapidly expanding driven by India’s high prevalence of non-communicable lifestyle diseases (type-2 diabetes, cardiovascular diseases), sports fitness awareness, and corporate wellness initiatives.',
    salaryRange: { min: 300000, max: 950000, currency: 'INR', source: 'AmbitionBox Nutritionist Salary 2024, Indian Dietetic Association' },
    salarySource: 'AmbitionBox Nutritionist Salary 2024, Indian Dietetic Association',
    salaryByExperience: {
      entryLevel: { min: 300000, max: 480000, label: 'Junior Dietitian / Wellness Coach (0–2 yrs)' },
      earlyCareer: { min: 480000, max: 800000, label: 'Clinical Dietitian / Diabetes Educator (3–5 yrs)' },
      experienced: { min: 800000, max: 1400000, label: 'Chief Clinical Nutritionist / Private Consultant (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Top clinical dietitians in corporate hospitals and successful independent nutritional consultants with celebrity/sports clientele earn ₹15–25+ LPA.'
    },
    careerProgression: [
      'Trainee Dietitian',
      'Clinical Nutritionist / Inpatient Dietitian',
      'Senior Clinical Specialist / Certified Diabetes Educator',
      'Chief of Dietary & Nutrition Services',
      'Independent Nutrition Consultant / Director of Wellness Programs'
    ],
    employmentSectors: {
      government: 'AIIMS, State Government Hospitals, National Institute of Nutrition (NIN Hyderabad), Food Safety and Standards Authority of India (FSSAI)',
      privateSector: 'Hospitals (Apollo, Fortis, Max), HealthTech Startups (HealthifyMe, Fittr, GOQii), Gym Chains & Sports Academies, Private Clinics'
    },
    timelineOverview: {
      totalEstimatedDuration: '5.5 Years (3 Years B.Sc + 2 Years M.Sc + 6 Months Hospital Internship)',
      educationDuration: '5 Years (B.Sc 3 Years + M.Sc 2 Years)',
      prepDuration: '3–6 Months dedicated preparation for IDA Registered Dietitian (RD) examination',
      practicalTrainingDuration: '6 Months mandatory hospital clinical nutrition internship in an IDA-approved hospital',
      jobSearchDuration: '1–3 Months campus placement or direct hospital/healthtech recruitment',
      overlapNotes: 'Internship can be completed immediately following postgraduate final exams.',
      confidenceNote: 'Holding the official Registered Dietitian (RD) credential issued by IDA gives legal authorization to write clinical prescription diets in hospitals.'
    },
    sources: [
      { title: 'Indian Dietetic Association (IDA) Registered Dietitian Guidelines', url: 'https://idaindia.com', sourceAuthority: 'Indian Dietetic Association', verifiedDate: '2024-10-14' },
      { title: 'National Institute of Nutrition (ICMR-NIN) Dietary Guidelines for Indians', url: 'https://www.nin.res.in', sourceAuthority: 'ICMR-NIN', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Clinical Nutritionist & Dietitian (RD) Career Roadmap',
      description: 'IDA-aligned professional journey: nutritional biochemistry, medical nutrition therapy (MNT), enteral/parenteral nutrition, hospital dietary rotations, and the Registered Dietitian (RD) examination.',
      totalEstimatedDuration: '5.5 Years',
      durationBreakdown: 'Undergraduate Food & Nutrition Sciences: 3 Years | Postgraduate Clinical Nutrition & Dietetics: 2 Years | Mandatory IDA Hospital Internship: 6 Months | Registered Dietitian (RD) Exam: Post-Internship',
      overlapNotes: 'Postgraduate thesis research and clinical case documentation happen concurrently during Year 5.',
      steps: [
        {
          stepNumber: 1,
          title: 'Undergraduate Nutrition & Food Science Degree',
          stageType: 'education',
          duration: '3 Years (B.Sc)',
          description: 'Build foundational knowledge in human physiology, food chemistry, nutritional biochemistry, food microbiology, and basic community nutrition.',
          topics: ['Macronutrients & Micronutrients Metabolism', 'Food Chemistry & Cooking Sciences', 'Human Physiology Across Life Stages', 'Principles of Meal Planning'],
          skillsToAcquire: ['Nutritional Recipe Formulation', 'Calorie & Macronutrient Computation', 'Dietary Assessment Methodologies (24-Hour Recall)'],
          activities: ['Plan balanced dietary menus for infants, adolescents, pregnant mothers, and elderly adults', 'Conduct chemical proximate analysis of food samples in laboratory'],
          completionCriteria: 'Graduate with B.Sc in Nutrition / Dietetics with minimum 55% aggregate.',
          dependencies: '10+2 with Science or Home Science',
          resources: [
            { name: 'ICMR-NIN Dietary Guidelines for Indians (2024)', url: 'https://www.nin.res.in', type: 'Official Guidelines', isFree: true },
            { name: 'NPTEL Food Nutrition for Healthy Living', url: 'https://nptel.ac.in', type: 'Course', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Master’s Degree in Clinical Nutrition & Dietetics',
          stageType: 'education',
          duration: '2 Years (M.Sc)',
          description: 'Specialized postgraduate training in Medical Nutrition Therapy (MNT) for renal diseases, oncology, ICU enteral feeding, cardiovascular disorders, and metabolic syndromes.',
          topics: ['Medical Nutrition Therapy (MNT) for Chronic Diseases', 'Enteral & Parenteral Clinical Nutrition', 'Advanced Nutritional Genomics', 'Clinical Research Methodology & Dissertation'],
          skillsToAcquire: ['Therapeutic Diet Prescription Writing', 'Enteral Feeding Tube Formulation', 'Nutritional Assessment in Critical Care (SGA, MUST)'],
          activities: ['Complete clinical research dissertation on nutritional interventions in type-2 diabetes', 'Present case study reports in departmental clinical seminars'],
          completionCriteria: 'Obtain M.Sc in Clinical Nutrition and Dietetics with approved research thesis.',
          dependencies: 'B.Sc in Nutrition / Dietetics',
          resources: [
            { name: 'Krause and Mahan’s Food & the Nutrition Care Process', url: 'https://www.elsevier.com', type: 'Textbook Reference', isFree: false },
            { name: 'American Society for Parenteral and Enteral Nutrition (ASPEN)', url: 'https://www.nutritioncare.org', type: 'Clinical Guidelines', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'IDA-Approved Hospital Clinical Internship',
          stageType: 'practical_experience',
          duration: '6 Months',
          description: 'Complete 6-month continuous clinical internship in an Indian Dietetic Association recognized multispecialty hospital (minimum 150-200 beds).',
          topics: ['Inpatient Bedside Nutritional Counseling', 'Hospital Kitchen Quality & Portion Control', 'Intensive Care Unit (ICU) Enteral Nutrition Protocols'],
          skillsToAcquire: ['Direct Patient Bedside Counseling', 'Hospital Food Service Operations Monitoring', 'Documentation of Nutrition Care Process (NCP)'],
          activities: ['Manage daily therapeutic diet lists for 50+ hospital beds', 'Calculate customized amino acid and lipid requirements for ICU patients on TPN'],
          completionCriteria: 'Satisfactory completion of 6-month internship certified by Chief Dietitian.',
          dependencies: 'M.Sc in Clinical Nutrition or relevant postgraduate qualification',
          resources: [
            { name: 'Indian Dietetic Association Recognized Hospital List', url: 'https://idaindia.com', type: 'Official Directory', isFree: true },
            { name: 'ESPEN Clinical Nutrition Guidelines', url: 'https://www.espen.org', type: 'International Guidelines', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Registered Dietitian (RD) Examination & Licensure',
          stageType: 'certification',
          duration: '3–6 Months Post-Internship',
          description: 'Appear for and clear the national Registered Dietitian (RD) examination conducted annually by the Indian Dietetic Association (IDA).',
          topics: ['Human Physiology & Biochemistry Exam Section', 'Dietetics & Medical Nutrition Therapy Exam Section', 'Food Microbiology & Sanitation Section'],
          skillsToAcquire: ['Comprehensive Clinical Problem-Solving', 'Professional Medical Ethics in Nutrition'],
          activities: ['Solve past 10 years IDA RD examination question papers', 'Register as an official Registered Dietitian (RD) with IDA Chapter'],
          completionCriteria: 'Passing score in IDA RD examination; issuance of official RD registration number.',
          dependencies: 'Completion of M.Sc and 6 Months recognized internship',
          resources: [
            { name: 'IDA Registered Dietitian Examination Portal', url: 'https://idaindia.com/rd-exam/', type: 'Official Examination', isFree: true },
            { name: 'HealthifyMe Careers Portal', url: 'https://www.healthifyme.com/careers/', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'psychologist',
    title: 'Clinical Psychologist',
    description: 'Assesses, diagnoses, and treats mental health disorders, psychological distress, behavioral issues, and neurodevelopmental conditions. Conducts standardized psychometric testing, cognitive behavioral therapy (CBT), and psychotherapy.',
    educationRequirements: 'B.A./B.Sc in Psychology (3 years) + M.A./M.Sc in Clinical/Applied Psychology (2 years) + M.Phil in Clinical Psychology (2 years) or Psy.D from a Rehabilitation Council of India (RCI) recognized institution. Mandatory RCI registration as a Licensed Clinical Psychologist.',
    educationPathways: [
      'B.A./B.Sc Psychology (3 years) -> M.A./M.Sc Clinical Psychology (2 years) -> RCI-recognized M.Phil in Clinical Psychology (2 years via NIMHANS / CIP entrance)',
      'NEP 4-Year B.Sc Psychology -> 2-Year Professional Diploma in Clinical Psychology (RCI approved)',
      'Psy.D (Doctor of Psychology - 4 years) from RCI recognized institutes'
    ],
    eligibilityRequirements: 'Graduation and Post-graduation in Psychology with minimum 55% aggregate. For RCI M.Phil entrance: National entrance tests conducted by premier institutes (NIMHANS, CIP Ranchi, LGBRIMH Tezpur).',
    certificationsAndExams: [
      'NIMHANS / CIP M.Phil Clinical Psychology Entrance Exam',
      'Rehabilitation Council of India (RCI) Professional Registration (CRR No.)',
      'Certified Cognitive Behavioral Therapy (CBT) Practitioner'
    ],
    workEnvironment: 'Mental health institutes (NIMHANS, CIP), psychiatry departments in multi-specialty hospitals, private psychotherapy clinics, de-addiction centers, and university counseling units.',
    marketDemand: 'Very High',
    jobOutlook: 'Severe acute shortage of licensed mental health professionals in India (fewer than 1 clinical psychologist per 100,000 population); exploding mental health awareness and tele-counseling demand.',
    salaryRange: { min: 380000, max: 1400000, currency: 'INR', source: 'AmbitionBox Psychologist Salary 2024, Indian Association of Clinical Psychologists (IACP)' },
    salarySource: 'AmbitionBox Psychologist Salary 2024, Indian Association of Clinical Psychologists (IACP)',
    salaryByExperience: {
      entryLevel: { min: 380000, max: 600000, label: 'Junior Psychologist / Counselor (0–2 yrs)' },
      earlyCareer: { min: 600000, max: 1100000, label: 'RCI Licensed Clinical Psychologist (3–5 yrs)' },
      experienced: { min: 1100000, max: 2000000, label: 'Senior Clinical Psychologist / Clinic Owner (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Private practitioners charging ₹1,500–3,500 per 50-minute psychotherapy session in metros earn ₹18–30+ LPA with established client followings.'
    },
    careerProgression: [
      'Trainee Clinical Psychologist',
      'RCI Licensed Clinical Psychologist',
      'Senior Clinical Psychologist / Hospital Faculty',
      'Head of Mental Health & De-addiction Services',
      'Director of Institute / Founder of Private Psychotherapy Practice'
    ],
    employmentSectors: {
      government: 'NIMHANS, Central Institute of Psychiatry (CIP Ranchi), Armed Forces / DRDO DIPR, State Mental Health Authorities, Civil Hospital Psychiatry Wings',
      privateSector: 'Hospitals (Apollo, Fortis, Max Mental Health), Private Clinics, Tele-therapy Platforms (Amaha, MindPeers, Wysa), Corporate Wellness Programs'
    },
    timelineOverview: {
      totalEstimatedDuration: '7 Years (3 Years B.A. + 2 Years M.A. + 2 Years RCI M.Phil)',
      educationDuration: '7 Years (B.A./B.Sc 3 Yrs + M.A./M.Sc 2 Yrs + M.Phil 2 Yrs)',
      prepDuration: '6–12 Months focused preparation for NIMHANS / CIP M.Phil entrance exams',
      practicalTrainingDuration: '2 Years full-time clinical residency during M.Phil with inpatient/OPD patient exposure',
      jobSearchDuration: 'Immediate employment in hospitals, private clinics, or self-employed practice',
      overlapNotes: 'M.Phil clinical psychology students receive a monthly government stipend during their 2-year hospital residency.',
      confidenceNote: 'Under the Mental Healthcare Act 2017, only professionals with an RCI-recognized qualification are legally permitted to diagnose mental disorders and call themselves "Clinical Psychologist".'
    },
    sources: [
      { title: 'Rehabilitation Council of India (RCI) Clinical Psychology Regulations', url: 'https://rehabcouncil.nic.in', sourceAuthority: 'Rehabilitation Council of India', verifiedDate: '2024-10-14' },
      { title: 'NIMHANS Academic Guidelines', url: 'https://nimhans.ac.in', sourceAuthority: 'NIMHANS Bengaluru', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Clinical Psychologist (RCI Licensed) Career Roadmap',
      description: 'Mental health journey: cognitive psychology, developmental psychology, diagnostic psychopathology, psychometric evaluation (Rorschach, WAIS), and 2-year RCI M.Phil hospital residency.',
      totalEstimatedDuration: '7 Years',
      durationBreakdown: 'B.A./B.Sc Psychology: 3 Years | M.A./M.Sc Clinical Psychology: 2 Years | NIMHANS Entrance Prep: 6 Months | RCI M.Phil Clinical Residency: 2 Years',
      overlapNotes: 'M.Phil involves 100% full-time clinical hospital patient hours accompanied by a monthly government fellowship.',
      steps: [
        {
          stepNumber: 1,
          title: 'Undergraduate Psychology Degree (B.A. / B.Sc)',
          stageType: 'education',
          duration: '3 Years',
          description: 'Study biopsychology, cognitive psychology, social psychology, human development, and experimental psychology research methods.',
          topics: ['Foundations of Human Cognition & Memory', 'Biopsychology & Neurotransmitters', 'Statistical Methods in Psychological Research', 'Experimental Psychology Lab Practicals'],
          skillsToAcquire: ['Experimental Design', 'SPSS Statistical Data Analysis', 'Objective Observation & Active Listening'],
          activities: ['Conduct laboratory experiments on reaction time, memory retention, and perception', 'Administer introductory psychological screening questionnaires'],
          completionCriteria: 'Graduate with B.A./B.Sc in Psychology with minimum 55-60% aggregate.',
          dependencies: '10+2 from any recognized board',
          resources: [
            { name: 'NPTEL Introduction to Psychology (IIT Kanpur)', url: 'https://nptel.ac.in', type: 'Course', isFree: true },
            { name: 'American Psychological Association (APA) Student Portal', url: 'https://www.apa.org', type: 'Official Organization', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Master’s Degree in Clinical Psychology (M.A. / M.Sc)',
          stageType: 'education',
          duration: '2 Years',
          description: 'In-depth study of psychopathology (DSM-5 & ICD-11 classifications), personality theories, psychodiagnostics, and introductory counseling techniques.',
          topics: ['DSM-5-TR & ICD-11 Diagnostic Criteria', 'Theories of Personality & Psychodynamics', 'Standardized Psychological Testing', 'Counseling Interventions & Ethical Standards'],
          skillsToAcquire: ['Clinical History Taking & Mental Status Examination (MSE)', 'Test Administration (Bhatia Battery, 16PF, MMPI)', 'Case Formulation'],
          activities: ['Perform 50+ mental status examinations under faculty supervision', 'Administer standardized IQ and personality test batteries and write clinical reports'],
          completionCriteria: 'Pass M.A./M.Sc Clinical Psychology with minimum 55% marks (RCI eligibility requirement).',
          dependencies: 'B.A./B.Sc in Psychology',
          resources: [
            { name: 'DSM-5-TR Diagnostic and Statistical Manual of Mental Disorders', url: 'https://dsm.psychiatryonline.org', type: 'Diagnostic Standard', isFree: false },
            { name: 'Indian Association of Clinical Psychologists (IACP)', url: 'https://iacp.in', type: 'Professional Society', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'RCI M.Phil Clinical Psychology Hospital Residency',
          stageType: 'practical_experience',
          duration: '2 Years',
          description: 'Qualify national entrance test (NIMHANS, CIP Ranchi) and complete 2-year hospital residency diagnosing and treating psychiatric inpatients and outpatients.',
          topics: ['Advanced Neuropsychological Assessment (Luria-Nebraska, AIIMS Battery)', 'Projective Techniques (Rorschach Inkblot Test - Exner System)', 'Cognitive Behavioral Therapy (CBT) Protocols', 'Dialectical Behavior Therapy (DBT) & Child Psychotherapy'],
          skillsToAcquire: ['Rorschach Scoring & Comprehensive System Interpretation', 'Full Cognitive Behavioral Therapy Delivery', 'Neuropsychological Deficit Profiling'],
          activities: ['Deliver 200+ documented psychotherapy therapy sessions for depression, OCD, anxiety, and trauma', 'Complete clinical dissertation based on psychiatric inpatient trial data'],
          completionCriteria: 'Pass M.Phil Part-I and Part-II clinical viva examinations; dissertation approved by university board.',
          dependencies: 'Passing NIMHANS / CIP Entrance Exam with M.A. in Psychology',
          resources: [
            { name: 'NIMHANS Academic Entrance Examination Portal', url: 'https://nimhans.ac.in', type: 'Official Portal', isFree: true },
            { name: 'Beck Institute for Cognitive Behavior Therapy', url: 'https://beckinstitute.org', type: 'Clinical Resource', isFree: false }
          ]
        },
        {
          stepNumber: 4,
          title: 'RCI Registration (CRR No.) & Clinical Licensing',
          stageType: 'certification',
          duration: '1–3 Months Post-M.Phil',
          description: 'Obtain official Central Rehabilitation Register (CRR) registration from Rehabilitation Council of India and commence independent clinical practice or hospital employment.',
          topics: ['Mental Healthcare Act 2017 Legal Provisions', 'Patient Confidentiality & Medico-Legal Testimony', 'Private Practice Operations'],
          skillsToAcquire: ['Autonomous Psychotherapy Clinic Management', 'Expert Forensic Court Testimony', 'Cross-Referral Collaboration with Psychiatrists'],
          activities: ['Submit verified degree credentials to RCI for issuance of CRR certificate', 'Establish independent outpatient therapy practice or join hospital psychiatry department'],
          completionCriteria: 'Issuance of official CRR Number as Clinical Psychologist by Rehabilitation Council of India.',
          dependencies: 'Award of M.Phil in Clinical Psychology from RCI-recognized center',
          resources: [
            { name: 'RCI Central Rehabilitation Register (CRR) Portal', url: 'https://rehabcouncil.nic.in', type: 'Government Licensing', isFree: true },
            { name: 'Amaha Mental Health Careers', url: 'https://www.amahahealth.com/careers/', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'clinical-research-associate',
    title: 'Clinical Research Associate (CRA)',
    description: 'Monitors clinical trials of investigational pharmaceutical drugs, biologics, and medical devices. Ensures compliance with Good Clinical Practice (ICH-GCP), Indian Central Drugs Standard Control Organisation (CDSCO) regulations, patient safety, and clinical trial protocols.',
    educationRequirements: 'B.Pharm / M.Pharm, Pharm.D, MBBS, BDS, or M.Sc in Life Sciences / Biotechnology + specialized certification in Clinical Research & ICH-GCP guidelines.',
    educationPathways: [
      'B.Pharm / M.Pharm / Pharm.D + PG Diploma in Clinical Research & Pharmacovigilance (1 year)',
      'MBBS / BDS / B.Sc Nursing transitioning to clinical trials monitoring',
      'M.Sc Life Sciences / Clinical Research (2 years)'
    ],
    eligibilityRequirements: 'Bachelor\'s or Master\'s degree in Pharmacy, Medicine, Dentistry, or Life Sciences (minimum 55% aggregate). Knowledge of ICH-GCP E6(R2) and CDSCO New Drugs and Clinical Trials Rules 2019.',
    certificationsAndExams: [
      'ICH-GCP (Good Clinical Practice) Certification (NIDA / TransCelerate approved)',
      'Certified Clinical Research Associate (CCRA - ACRP / SoCRA)',
      'CDSCO Good Clinical Practice Inspector Workshop Certificate'
    ],
    workEnvironment: 'Global contract research organizations (CROs: IQVIA, Syneos Health, Labcorp/Covance, PPD), multinational pharma trial divisions (Novartis, Pfizer, AstraZeneca), and site management organizations.',
    marketDemand: 'High',
    jobOutlook: 'Rapid expansion catalyzed by India\'s New Drugs and Clinical Trials Rules 2019, large diverse patient pool, and multinational pharmaceutical companies expanding clinical trial hubs in Hyderabad, Bengaluru, Mumbai, and Delhi NCR.',
    salaryRange: { min: 380000, max: 1350000, currency: 'INR', source: 'AmbitionBox Clinical Research Associate Salary 2024, Glassdoor India' },
    salarySource: 'AmbitionBox Clinical Research Associate Salary 2024, Glassdoor India',
    salaryByExperience: {
      entryLevel: { min: 380000, max: 600000, label: 'Clinical Trial Assistant / Junior CRA (0–2 yrs)' },
      earlyCareer: { min: 600000, max: 1100000, label: 'CRA II / Senior CRA (3–5 yrs)' },
      experienced: { min: 1100000, max: 1900000, label: 'Clinical Team Lead / Study Manager (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Senior CRAs and Clinical Project Managers in top global CROs (IQVIA, Syneos, Labcorp) earn ₹15–26+ LPA with 5+ years of verified international audit monitoring experience.'
    },
    careerProgression: [
      'Clinical Trial Assistant (CTA) / Clinical Data Coordinator',
      'Clinical Research Associate (CRA I & II)',
      'Senior CRA / Clinical Trial Lead',
      'Clinical Project Manager (CPM) / Study Operations Manager',
      'Director of Clinical Trial Operations / Country Head'
    ],
    employmentSectors: {
      government: 'Indian Council of Medical Research (ICMR) Trial Centers, Clinical Trials Registry - India (CTRI), Tata Memorial Centre Clinical Research Group',
      privateSector: 'Global CRO Giants (IQVIA, Syneos Health, PPD, ICON plc, Parexel, Labcorp), Top Pharma R&D (Novartis India, Pfizer, Sanofi, Dr. Reddy’s)'
    },
    timelineOverview: {
      totalEstimatedDuration: '4–5 Years (Undergraduate degree + 6–12 Months clinical research training)',
      educationDuration: '4 Years (B.Pharm) or 2 Years (M.Sc post-degree)',
      prepDuration: '3–6 Months dedicated ICH-GCP certification and EDC database training',
      practicalTrainingDuration: '6–12 Months as Clinical Trial Assistant (CTA) or In-house CRA',
      jobSearchDuration: '2–4 Months hiring cycle in global CROs or pharma hubs',
      overlapNotes: 'ICH-GCP training and clinical data mock audits can be completed during the final semester.',
      confidenceNote: 'Site monitoring visits require frequent domestic travel (40–60% of work hours) across hospital investigation sites.'
    },
    sources: [
      { title: 'Central Drugs Standard Control Organisation (CDSCO) Clinical Trial Rules 2019', url: 'https://cdsco.gov.in', sourceAuthority: 'Ministry of Health & Family Welfare', verifiedDate: '2024-10-14' },
      { title: 'Clinical Trials Registry - India (CTRI)', url: 'https://ctri.nic.in', sourceAuthority: 'ICMR-NIMS', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Clinical Research Associate (CRA) Career Roadmap',
      description: 'Clinical trial monitoring pathway: drug development lifecycle, CDSCO regulatory submission, ICH-GCP compliance, source data verification (SDV), and clinical trial site monitoring.',
      totalEstimatedDuration: '4.5–5 Years',
      durationBreakdown: 'Core Science / Pharmacy Degree: 4 Years | ICH-GCP Certification & Clinical Research Diploma: 6 Months | In-House CTA / Clinical Trial Site Experience: 1 Year',
      overlapNotes: 'ICH-GCP online certifications and clinical research internships proceed during graduation final year.',
      steps: [
        {
          stepNumber: 1,
          title: 'Core Degree in Pharmacy or Life Sciences',
          stageType: 'education',
          duration: '3–4 Years',
          description: 'Complete bachelor\'s or master\'s degree in Pharmacy (B.Pharm), Life Sciences (Biotechnology/Microbiology), or Medical/Dental sciences.',
          topics: ['Human Anatomy, Pharmacology & Pharmacokinetics', 'Pathophysiology of Diseases', 'Clinical Drug Formulations & Therapeutics'],
          skillsToAcquire: ['Medical Terminology Mastery', 'Drug Mechanism Comprehension', 'Scientific Literature Evaluation'],
          activities: ['Review clinical pharmacology case studies and scientific research publications', 'Maintain CGPA > 6.5 across life science subjects'],
          completionCriteria: 'Obtain recognized undergraduate degree in pharmacy or life sciences.',
          dependencies: '10+2 with Science (PCB/PCM)',
          resources: [
            { name: 'NPTEL Introduction to Biomedical Clinical Research', url: 'https://nptel.ac.in', type: 'Course', isFree: true },
            { name: 'PubMed Central Open Medical Research', url: 'https://www.ncbi.nlm.nih.gov/pmc/', type: 'Research Repository', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'ICH-GCP E6(R2), CDSCO Regulations & Protocol Design',
          stageType: 'certification',
          duration: '3–6 Months',
          description: 'Master Good Clinical Practice (ICH-GCP), CDSCO New Drugs and Clinical Trials Rules 2019, Informed Consent Form (ICF) ethics, and trial protocols.',
          topics: ['ICH-GCP 13 Core Principles', 'CDSCO New Drugs & Clinical Trials Rules 2019', 'Institutional Ethics Committee (IEC) Approvals', 'Adverse Event (AE) & SAE Reporting Timelines'],
          skillsToAcquire: ['ICH-GCP Compliance Auditing', 'Protocol Deviation Identification', 'Electronic Data Capture (EDC - Medidata Rave, Oracle InForm)'],
          activities: ['Earn certified ICH-GCP completion certificate (NIDA / TransCelerate accredited)', 'Review and audit a mock clinical trial investigator brochure (IB) and protocol'],
          completionCriteria: 'Pass verified ICH-GCP certification exam with score > 85%.',
          dependencies: 'Undergraduate Degree in relevant field',
          resources: [
            { name: 'NIDA Clinical Trials Network GCP Training', url: 'https://gcp.nidatraining.org', type: 'Free Certification', isFree: true },
            { name: 'CDSCO Official Clinical Trial Guidance Documents', url: 'https://cdsco.gov.in', type: 'Government Regulations', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Clinical Trial Assistant (CTA) & In-House Monitoring',
          stageType: 'practical_experience',
          duration: '12 Months',
          description: 'Join a contract research organization (CRO) or site management organization (SMO) as CTA; manage Trial Master Files (TMF) and track patient recruitment.',
          topics: ['Electronic Trial Master File (eTMF) Architecture', 'Investigator Site File (ISF) Auditing', 'Patient Recruitment & Retention Tracking'],
          skillsToAcquire: ['eTMF Completeness Verification', 'Regulatory Essential Document Tracking', 'Query Management in EDC Systems'],
          activities: ['Perform completeness audit on 50+ trial master file sections', 'Coordinate with hospital investigator sites for ethics committee renewal submissions'],
          completionCriteria: 'Complete 1 year of documented CTA experience in an active clinical trial protocol.',
          dependencies: 'ICH-GCP Certification and Degree',
          resources: [
            { name: 'DIA (Drug Information Association) India Knowledge Hub', url: 'https://www.diaglobal.org', type: 'Professional Society', isFree: false },
            { name: 'Clinical Trials Registry - India (CTRI) Search Portal', url: 'https://ctri.nic.in', type: 'Official Registry', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'On-Site CRA Monitoring & Career Advancement',
          stageType: 'job_search',
          duration: '6–12 Months',
          description: 'Conduct independent site qualification visits (SQV), site initiation visits (SIV), interim monitoring visits (IMV), and close-out visits (COV).',
          topics: ['100% Source Data Verification (SDV)', 'Investigational Product (IP) Drug Accountability', 'Inspection Readiness & Audit Defense'],
          skillsToAcquire: ['Source Document Verification against Medical Records', 'Clinical Study Report (CSR) Writing', 'On-Site GCP Audit Defense'],
          activities: ['Perform 20+ on-site hospital monitoring visits across India', 'Write and submit comprehensive clinical monitoring reports within 5 business days'],
          completionCriteria: 'Promotion or direct appointment to Independent Clinical Research Associate (CRA-II) in global CRO.',
          dependencies: '1+ year experience in clinical trial administration',
          resources: [
            { name: 'IQVIA Careers India', url: 'https://jobs.iqvia.com/locations/india', type: 'Company Portal', isFree: true },
            { name: 'Syneos Health Careers India', url: 'https://www.syneoshealth.com/careers', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'biotechnology-researcher',
    title: 'Biotechnology Researcher',
    description: 'Conducts genetic engineering, recombinant DNA technology, cell culture, fermentation bioprocessing, and biosimilar development. Researches therapeutic monoclonal antibodies, agricultural transgenic crops, and industrial enzymes across Indian biotech hubs.',
    educationRequirements: 'B.Tech / B.Sc in Biotechnology followed by M.Tech / M.Sc in Biotechnology via GAT-B (Graduate Aptitude Test - Biotechnology). Ph.D. strongly preferred for independent principal scientist roles.',
    educationPathways: [
      'B.Tech Biotechnology (4 years via JEE Main / State CETs) or B.Sc Biotechnology (3-4 years)',
      'M.Tech / M.Sc Biotechnology (2 years via GAT-B conducted by Regional Centre for Biotechnology / DBT)',
      'Ph.D. in Biotechnology via CSIR-UGC NET JRF or DBT-JRF (5 years with monthly fellowship)'
    ],
    eligibilityRequirements: '10+2 with Physics, Chemistry, and Biology/Mathematics (minimum 55% aggregate). For DBT fellowship: qualifying DBT-BET or CSIR-NET JRF.',
    certificationsAndExams: [
      'GAT-B (Graduate Aptitude Test - Biotechnology)',
      'CSIR-UGC NET (Life Sciences) JRF / DBT-JRF (BET)',
      'CRISPR Gene Editing & Mammalian Cell Culture Certification'
    ],
    workEnvironment: 'Biotech R&D campuses (Genome Valley Hyderabad, Bengaluru Bio-cluster, Pune), CSIR institutes, and biopharma manufacturing units.',
    marketDemand: 'Moderate to High',
    jobOutlook: 'Rapidly growing with India\'s Bio-economy targeting $300B by 2030, driven by biosimilars manufacturing, mRNA vaccine platforms, and agro-biotechnology.',
    salaryRange: { min: 380000, max: 1400000, currency: 'INR', source: 'AmbitionBox Biotech Researcher Salary 2024, DBT Annual Reports' },
    salarySource: 'AmbitionBox Biotech Researcher Salary 2024, DBT Annual Reports',
    salaryByExperience: {
      entryLevel: { min: 380000, max: 600000, label: 'Junior Research Fellow (JRF) / Lab Analyst (0–2 yrs)' },
      earlyCareer: { min: 600000, max: 1100000, label: 'Senior Scientist / Bioprocess Engineer (3–5 yrs)' },
      experienced: { min: 1100000, max: 2000000, label: 'Principal Scientist / R&D Team Lead (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'CSIR/DBT Junior Research Fellows (JRF) receive ₹37,000/month + HRA; Senior Research Fellows (SRF) receive ₹42,000/month + HRA. Senior biopharma scientists in Biocon/Serum Institute earn ₹18–30+ LPA.'
    },
    careerProgression: [
      'Junior Research Fellow (JRF) / Trainee Scientist',
      'Senior Research Fellow (SRF) / R&D Research Scientist',
      'Senior Scientist / Upstream-Downstream Process Lead',
      'Principal Scientist / Group Leader',
      'Director of R&D / Chief Scientific Officer (CSO)'
    ],
    employmentSectors: {
      government: 'Department of Biotechnology (DBT Institutes: NII, RCB, THSTI), CSIR Laboratories (CCMB Hyderabad, IGIB Delhi, CDRI Lucknow), ICAR Institutes',
      privateSector: 'Top Indian Biopharma Giants (Biocon, Serum Institute of India, Bharat Biotech, Biological E, Panacea Biotec), Seed & Agro-Biotech MNCs'
    },
    timelineOverview: {
      totalEstimatedDuration: '5–9 Years (4 Years B.Tech + 2 Years M.Tech/M.Sc + optional 4–5 Years Ph.D.)',
      educationDuration: '4 Years (B.Tech) + 2 Years (M.Tech/M.Sc)',
      prepDuration: '6–12 Months CSIR-UGC NET or DBT-BET exam preparation',
      practicalTrainingDuration: '6–12 Months major thesis research in a CSIR/DBT research laboratory',
      jobSearchDuration: '2–4 Months post-qualification hiring cycle',
      overlapNotes: 'JRF and Ph.D. tenures are fully funded with government research fellowships.',
      confidenceNote: 'Industry bioprocessing roles (fermentation upstream and chromatography downstream purification) offer rapid corporate advancement compared to pure academic research.'
    },
    sources: [
      { title: 'Department of Biotechnology (DBT) Government of India', url: 'https://dbtindia.gov.in', sourceAuthority: 'DBT India', verifiedDate: '2024-10-14' },
      { title: 'Biotechnology Industry Research Assistance Council (BIRAC)', url: 'https://birac.nic.in', sourceAuthority: 'BIRAC', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Biotechnology Researcher Career Roadmap',
      description: 'Scientific biotechnology pathway: molecular biology, recombinant DNA cloning, mammalian cell culture, bioreactor fermentation, and CSIR-NET / industry R&D qualification.',
      totalEstimatedDuration: '5.5–6 Years',
      durationBreakdown: 'B.Tech/B.Sc Biotechnology Foundations: 4 Years | GAT-B & M.Tech/M.Sc Specialization: 2 Years | CSIR-NET JRF / Industry Fellowship: Post-Master\'s',
      overlapNotes: 'Master\'s thesis research is executed inside active industrial or government R&D facilities.',
      steps: [
        {
          stepNumber: 1,
          title: 'Molecular Biology, Genetics & Biochemistry',
          stageType: 'education',
          duration: 'Year 1–2',
          description: 'Master DNA replication, gene transcription, translation, protein structure, microbial genetics, and basic molecular biology laboratory techniques.',
          topics: ['Recombinant DNA Fundamentals', 'Enzymology & Protein Folding', 'Microbial Genetics & Plasmids', 'Analytical Biochemistry (Gel Electrophoresis, Western Blot)'],
          skillsToAcquire: ['Agarose & SDS-PAGE Gel Electrophoresis', 'Bacterial Transformation & Plasmid Isolation', 'Spectrophotometric Protein Quantification'],
          activities: ['Isolate genomic and plasmid DNA from E. coli bacterial cultures', 'Perform restriction enzyme digestion and verify on agarose gel'],
          completionCriteria: 'Clear undergraduate foundational coursework with minimum 65% aggregate.',
          dependencies: '10+2 with Physics, Chemistry, and Biology/Math',
          resources: [
            { name: 'NPTEL Fundamentals of Biotechnology (IIT Guwahati)', url: 'https://nptel.ac.in', type: 'Course', isFree: true },
            { name: 'NCBI Molecular Biology Bookshelf', url: 'https://www.ncbi.nlm.nih.gov/books/', type: 'Open Repository', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Recombinant DNA Technology & Cell Culture',
          stageType: 'skill_acquisition',
          duration: 'Year 3–4',
          description: 'Master gene cloning, PCR amplification, primer design, mammalian/plant cell tissue culture, and monoclonal antibody production.',
          topics: ['PCR Primer Design & Real-Time PCR (qPCR)', 'CRISPR-Cas9 Gene Editing Principles', 'Mammalian Cell Line Maintenance (CHO, HEK293)', 'Animal Tissue Culture Aseptic Techniques'],
          skillsToAcquire: ['Aseptic Cell Culture Media Preparation', 'Inverted Microscopy & Cell Viability Counting', 'qPCR Relative Quantification Calculations'],
          activities: ['Clone a reporter GFP gene into an expression vector and transform bacterial hosts', 'Maintain mammalian cell lines and cryopreserve master cell banks in liquid nitrogen'],
          completionCriteria: 'Successful defense of undergraduate capstone biotechnology project.',
          dependencies: 'Foundational Molecular Biology Knowledge',
          resources: [
            { name: 'Addgene Molecular Biology Protocols', url: 'https://www.addgene.org/protocols/', type: 'Protocol Repository', isFree: true },
            { name: 'NPTEL Animal Biotechnology (IIT Roorkee)', url: 'https://nptel.ac.in', type: 'Course', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Bioprocess Engineering & Downstream Purification',
          stageType: 'skill_acquisition',
          duration: 'M.Tech / M.Sc Year 1–2',
          description: 'Operate industrial stirred-tank bioreactors, optimize fermentation parameters (DO, pH, agitator speed), and perform chromatography purification (FPLC, affinity, ion-exchange).',
          topics: ['Bioreactor Design & Scale-Up Kinetics', 'Upstream Fermentation Optimization', 'Downstream Chromatography (Affinity, Size-Exclusion, Ion-Exchange)', 'AKTA FPLC System Operation'],
          skillsToAcquire: ['Bioreactor Setup and Inoculation', 'AKTA FPLC Protein Purification', 'Process Analytical Technology (PAT)'],
          activities: ['Run a 5-liter batch fermentation process optimizing recombinant protein yield', 'Purify target monoclonal antibody using Protein-A affinity chromatography'],
          completionCriteria: 'Submission of master\'s thesis with high-yield protein purification dataset.',
          dependencies: 'Admission to M.Tech / M.Sc via GAT-B or GATE BT',
          resources: [
            { name: 'GAT-B Official Examination Portal', url: 'https://rcb.res.in/GATB/', type: 'Official Portal', isFree: true },
            { name: 'Biocon Academy Specialized Industry Programs', url: 'https://www.bioconacademy.com', type: 'Industry Academy', isFree: false }
          ]
        },
        {
          stepNumber: 4,
          title: 'CSIR-UGC NET JRF or Biopharma Industry R&D',
          stageType: 'practical_experience',
          duration: '1–2 Years',
          description: 'Qualify CSIR-UGC NET JRF / DBT-BET to pursue fully-funded doctoral research or join premier biopharma companies (Biocon, Serum Institute) as Scientist.',
          topics: ['CSIR NET Life Sciences Core Syllabi', 'Good Laboratory Practice (GLP) in Pharma R&D', 'Patent Drafting & Intellectual Property Rights'],
          skillsToAcquire: ['Independent Experimental Hypothesis Testing', 'Regulatory Dossier Quality Documentation', 'Peer-Reviewed Scientific Manuscript Writing'],
          activities: ['Publish primary research paper in indexed international scientific journal', 'Contribute to biosimilar clone characterization studies in R&D laboratory'],
          completionCriteria: 'Securing CSIR/DBT Junior Research Fellowship or appointment as R&D Scientist.',
          dependencies: 'Master\'s Degree in Biotechnology or Allied Science',
          resources: [
            { name: 'CSIR-HRDG Examination Portal', url: 'https://csirhrdg.res.in', type: 'Government Fellowship', isFree: true },
            { name: 'Serum Institute of India Careers', url: 'https://www.seruminstitute.com/careers.php', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'microbiologist',
    title: 'Microbiologist',
    description: 'Investigates microscopic organisms including bacteria, viruses, fungi, and parasites. Performs pathogen culture identification, antimicrobial resistance testing, sterility testing, and environmental monitoring across Indian diagnostic pathology labs, food safety laboratories, and vaccine manufacturing.',
    educationRequirements: 'B.Sc in Microbiology (3 years) + M.Sc in Microbiology / Medical Microbiology (2 years). Ph.D. preferred for research scientist and university teaching roles.',
    educationPathways: [
      'B.Sc in Microbiology / Life Sciences (3 years) -> M.Sc in Microbiology / Applied Microbiology (2 years)',
      'NEP 4-Year B.Sc (Honours with Research) in Microbiology',
      'M.Sc Medical Microbiology (3 years in medical college under NMC/university norms)'
    ],
    eligibilityRequirements: '10+2 with Biology, Chemistry, and Physics (PCB) with minimum 50% aggregate. Entrance exams for central/state universities (CUET PG, state entrance tests).',
    certificationsAndExams: [
      'CSIR-UGC NET (Life Sciences) / ICAR NET',
      'FSSAI Certified Food Microbiologist',
      'Quality Control Sterility & Microbial Limit Testing (MLT) Certification'
    ],
    workEnvironment: 'Diagnostic hospital microbiology labs, pharmaceutical sterility testing cleanrooms, food processing quality laboratories (FSSAI accredited), and vaccine R&D centers.',
    marketDemand: 'Moderate to High',
    jobOutlook: 'Steady hiring fueled by pharmaceutical injectable sterility requirements, food safety audits (FSSAI), antimicrobial resistance surveillance, and diagnostic pathology labs.',
    salaryRange: { min: 280000, max: 900000, currency: 'INR', source: 'AmbitionBox Microbiologist Salary 2024, PayScale India' },
    salarySource: 'AmbitionBox Microbiologist Salary 2024, PayScale India',
    salaryByExperience: {
      entryLevel: { min: 280000, max: 450000, label: 'Junior Microbiologist / QC Analyst (0–2 yrs)' },
      earlyCareer: { min: 450000, max: 750000, label: 'Quality Control Microbiologist / Research Scientist (3–5 yrs)' },
      experienced: { min: 750000, max: 1300000, label: 'Microbiology QA Lead / Senior Scientist (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Senior QC Microbiology managers in FDA-approved sterile pharmaceutical injectable facilities earn ₹12–18+ LPA.'
    },
    careerProgression: [
      'QC Microbiology Trainee / Lab Analyst',
      'Microbiologist (Environmental Monitoring / Sterility)',
      'QC Microbiology Lead / Senior Microbiologist',
      'Quality Assurance Microbiology Manager',
      'Head of Quality Control / Director of Laboratory Services'
    ],
    employmentSectors: {
      government: 'Food Safety and Standards Authority of India (FSSAI), National Centre for Disease Control (NCDC), ICMR Virology Institutes (NIV Pune), State Water Testing Labs',
      privateSector: 'Pharmaceutical Sterile Manufacturing (Sun Pharma, Dr. Reddy’s, Cipla), Diagnostic Labs (Dr. Lal PathLabs, Agilus), Food & Beverage Giants (Nestle, Amul, ITC)'
    },
    timelineOverview: {
      totalEstimatedDuration: '5 Years (3 Years B.Sc + 2 Years M.Sc)',
      educationDuration: '5 Years (B.Sc 3 Years + M.Sc 2 Years)',
      prepDuration: '3–6 Months CUET PG / CSIR NET preparation',
      practicalTrainingDuration: '4–6 Months dissertation research in an accredited laboratory',
      jobSearchDuration: '1–3 Months campus placement or direct industry walk-in interviews',
      overlapNotes: 'Master’s dissertation lab work runs during the final 4th semester.',
      confidenceNote: 'Knowledge of Indian Pharmacopoeia (IP) and US Pharmacopeia (USP <71> Sterility, USP <61>/<62> Microbial Limits) is essential for pharmaceutical QA jobs.'
    },
    sources: [
      { title: 'Food Safety and Standards Authority of India (FSSAI) Manual of Methods', url: 'https://www.fssai.gov.in', sourceAuthority: 'FSSAI', verifiedDate: '2024-10-14' },
      { title: 'Indian Pharmacopoeia Commission (IPC) Sterility Testing Guidelines', url: 'https://ipc.gov.in', sourceAuthority: 'IPC India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Microbiologist Career Roadmap',
      description: 'Microbiological science journey: microbial taxonomy, bacterial staining, culture media preparation, antibiotic sensitivity, cleanroom environmental monitoring, and sterility testing.',
      totalEstimatedDuration: '5 Years',
      durationBreakdown: 'B.Sc Microbiology Degree: 3 Years | M.Sc Advanced Microbiology & Dissertation: 2 Years | Industry QC / Research Placement: Post-Graduation',
      overlapNotes: 'Industry internship and lab dissertation proceed simultaneously during the final semester.',
      steps: [
        {
          stepNumber: 1,
          title: 'Undergraduate Foundations of Microbiology',
          stageType: 'education',
          duration: '3 Years (B.Sc)',
          description: 'Master general microbiology, microbial physiology, bacterial cytology, viral morphology, aseptic techniques, and brightfield microscopy.',
          topics: ['Bacterial Staining Techniques (Gram, Acid-Fast, Endospore)', 'Culture Media Preparation (Nutrient Agar, MacConkey, Blood Agar)', 'Bacterial Growth Kinetics & Pure Culture Isolation', 'Sterilization & Disinfection Principles (Autoclaving, Filtration)'],
          skillsToAcquire: ['Streak Plate Isolation Technique', 'Differential Gram Staining Interpretation', 'Autoclave Operation & Sterilization Verification'],
          activities: ['Perform differential staining on 50+ unknown bacterial cultures', 'Determine bacterial growth curves using optical density spectrophotometry'],
          completionCriteria: 'Graduate with B.Sc in Microbiology with minimum 55% aggregate.',
          dependencies: '10+2 with Science (PCB)',
          resources: [
            { name: 'NPTEL Industrial Microbiology (IIT Roorkee)', url: 'https://nptel.ac.in', type: 'Course', isFree: true },
            { name: 'American Society for Microbiology (ASM) Protocols', url: 'https://asm.org', type: 'Protocol Archive', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Postgraduate Medical & Environmental Microbiology',
          stageType: 'education',
          duration: '2 Years (M.Sc)',
          description: 'Advanced study of clinical medical bacteriology, virology, mycology, antibiotic resistance mechanisms, and environmental microbiology.',
          topics: ['Clinical Diagnostic Bacteriology (Staphylococcus, Salmonella, Mycobacterium)', 'Antimicrobial Resistance Mechanisms & ESBL Detection', 'Water Quality Coliform Testing (MPN Method)', 'Bio-Safety Cabinets (Class I, II, III) Operation'],
          skillsToAcquire: ['Clinical Pathogen Biochemical Identification', 'Kirby-Bauer Disk Diffusion Antibiotic Sensitivity Testing', 'Most Probable Number (MPN) Coliform Calculation'],
          activities: ['Complete microbiological testing on drinking water samples calculating coliform counts', 'Execute hands-on master’s research dissertation project'],
          completionCriteria: 'Obtain M.Sc in Microbiology with approved research thesis.',
          dependencies: 'B.Sc in Microbiology or Life Sciences',
          resources: [
            { name: 'CUET PG Examination Portal (NTA)', url: 'https://pgcuet.samarth.ac.in', type: 'Official Portal', isFree: true },
            { name: 'CDC Antibiotic Resistance Threats & Detection Guidelines', url: 'https://www.cdc.gov', type: 'Clinical Standard', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Pharmaceutical Quality Control & Cleanroom Sterility Testing',
          stageType: 'skill_acquisition',
          duration: '3–6 Months',
          description: 'Master pharmaceutical Good Manufacturing Practices (GMP), USP <71> sterility testing, microbial limit testing (MLT), and settle-plate environmental monitoring.',
          topics: ['USP <71> / IP Sterility Testing Protocols', 'USP <61>/<62> Microbial Examination of Non-Sterile Products', 'Cleanroom Classification (Grade A, B, C, D / ISO 14644)', 'Bacterial Endotoxin Testing (BET / LAL Assay)'],
          skillsToAcquire: ['Cleanroom Gowning and Aseptic Behavior', 'LAL Endotoxin Assay Execution', 'Environmental Monitoring Air Settle Plate Sampling'],
          activities: ['Perform microbial limit testing on commercial syrup and tablet samples', 'Conduct air sampling in ISO Class 5 laminar air flow cleanrooms'],
          completionCriteria: 'Obtain certified industry training certificate in pharmaceutical QC microbiology.',
          dependencies: 'M.Sc in Microbiology',
          resources: [
            { name: 'Indian Pharmacopoeia Commission Microbial Testing Standards', url: 'https://ipc.gov.in', type: 'Official Guidelines', isFree: true },
            { name: 'Parenteral Drug Association (PDA) Cleanroom Guidance', url: 'https://www.pda.org', type: 'Industry Standard', isFree: false }
          ]
        },
        {
          stepNumber: 4,
          title: 'Industry Appointment & Career Progression',
          stageType: 'job_search',
          duration: '1–3 Months',
          description: 'Secure appointment as QC Microbiologist in pharmaceutical sterile manufacturing, food safety testing lab, or hospital pathology department.',
          topics: ['Out-of-Specification (OOS) Microbiological Investigation', 'Regulatory Audit Facing (US FDA, CDSCO, WHO)', 'Laboratory Information Management Systems (LIMS)'],
          skillsToAcquire: ['Microbial OOS Investigation Writing', 'Data Integrity & 21 CFR Part 11 Compliance'],
          activities: ['Complete industrial induction training and qualify aseptic gowning validation', 'Log and validate routine environmental monitoring and sterility batch release tests'],
          completionCriteria: 'Full-time employment as Quality Control Microbiologist or Diagnostic Microbiologist.',
          dependencies: 'Master\'s Degree and industry QC competencies',
          resources: [
            { name: 'Sun Pharma Careers', url: 'https://sunpharma.com/careers/', type: 'Company Portal', isFree: true },
            { name: 'Dr. Reddy\'s Laboratories Careers', url: 'https://careers.drreddys.com', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'public-health-specialist',
    title: 'Public Health Specialist (MPH)',
    description: 'Designs, evaluates, and administers national disease surveillance programs, maternal and child health interventions, epidemiological field surveys, and health policy frameworks. Coordinates public healthcare systems across government missions (NHM), WHO, UNICEF, and global health NGOs.',
    educationRequirements: 'MBBS, BDS, B.Sc Nursing, B.Pharm, AYUSH, or Social Science degree + Master of Public Health (MPH - 2 years) from institutions like AIIMS, NIMHANS, TISS, or Indian Institute of Public Health (IIPH).',
    educationPathways: [
      'MBBS / BDS / Health Science degree -> Master of Public Health (MPH - 2 years via INI-CET / university entrance)',
      'TISS / IIPH Master of Public Health (2 years via national entrance test)',
      'MD in Community Medicine (3 years post-MBBS via NEET PG)'
    ],
    eligibilityRequirements: 'Graduation in Health Sciences (MBBS/BDS/B.Sc Nursing/B.Pharm/AYUSH) or relevant Social Sciences with minimum 50-55% aggregate. National entrance test qualifying rank.',
    certificationsAndExams: [
      'National MPH Entrance Exams (INI-CET AIIMS, TISS-NET / CUET PG)',
      'Epidemiological Surveillance Certification (WHO / CDC)',
      'Health Economics and Policy Evaluation (NPTEL / World Bank Institute)'
    ],
    workEnvironment: 'Government ministries (MoHFW, National Health Mission), UN agencies (WHO India, UNICEF), public health research organizations (ICMR, PHFI), and international developmental NGOs (Gates Foundation, PATH, Jhpiego).',
    marketDemand: 'High',
    jobOutlook: 'Surging post-pandemic demand driven by Ayushman Bharat PM-JAY implementation, national digital health mission (ABDM), epidemic preparedness, and rural health system strengthening.',
    salaryRange: { min: 450000, max: 1600000, currency: 'INR', source: 'AmbitionBox Public Health Salary 2024, National Health Mission Consultant Pay Scales' },
    salarySource: 'AmbitionBox Public Health Salary 2024, National Health Mission Consultant Pay Scales',
    salaryByExperience: {
      entryLevel: { min: 450000, max: 750000, label: 'District Epidemiologist / Consultant (0–2 yrs)' },
      earlyCareer: { min: 750000, max: 1300000, label: 'State Technical Officer / Health Specialist (3–5 yrs)' },
      experienced: { min: 1300000, max: 2200000, label: 'Senior Public Health Advisor / Program Director (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Technical Officers in international agencies (WHO, UNICEF, Gates Foundation, World Bank) receive tax-exempt or international pay bands of ₹18–35+ LPA.'
    },
    careerProgression: [
      'District Epidemiologist / Program Associate',
      'Technical Officer / Monitoring & Evaluation (M&E) Specialist',
      'State Program Manager / Senior Public Health Specialist',
      'National Health Consultant / Country Director',
      'Global Health Advisor / WHO Director of Health Systems'
    ],
    employmentSectors: {
      government: 'Ministry of Health and Family Welfare (MoHFW), National Health Systems Resource Centre (NHSRC), National Center for Disease Control (NCDC), State National Health Missions (NHM)',
      privateSector: 'International Agencies (WHO, UNICEF, World Bank), Public Health Foundations (PHFI, Gates Foundation, Clinton Health Access Initiative, PATH, Jhpiego), Healthtech Non-Profits'
    },
    timelineOverview: {
      totalEstimatedDuration: '5.5–6.5 Years (Undergraduate degree + 2 Years MPH)',
      educationDuration: '2 Years (4 Semesters MPH)',
      prepDuration: '3–6 Months entrance exam preparation (CUET PG / INI-CET)',
      practicalTrainingDuration: '6 Months field epidemiology immersion and organization internship',
      jobSearchDuration: '1–3 Months direct recruitment by state NHM missions or global health agencies',
      overlapNotes: 'Field residency and capstone dissertation run concurrently during 3rd and 4th semesters.',
      confidenceNote: 'Medical graduates (MBBS) with an MPH are highly sought after for state and national leadership consultant roles.'
    },
    sources: [
      { title: 'National Health Systems Resource Centre (NHSRC)', url: 'https://nhsrcindia.org', sourceAuthority: 'MoHFW India', verifiedDate: '2024-10-14' },
      { title: 'Public Health Foundation of India (PHFI)', url: 'https://phfi.org', sourceAuthority: 'PHFI', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Public Health Specialist (MPH) Career Roadmap',
      description: 'Public health leadership pathway: epidemiology, biostatistics, health economics, disease surveillance, program monitoring & evaluation (M&E), and national health policy implementation.',
      totalEstimatedDuration: '5.5–6 Years',
      durationBreakdown: 'Health Sciences / Undergrad Degree: 3–4 Years | Master of Public Health (MPH) Curriculum: 2 Years | Field Epidemiology & Policy Placement: Post-Graduation',
      overlapNotes: 'Field public health postings and district health office internships take place during MPH 2nd year.',
      steps: [
        {
          stepNumber: 1,
          title: 'Foundational Healthcare or Life Science Degree',
          stageType: 'education',
          duration: '3–4.5 Years',
          description: 'Obtain undergraduate degree in Medicine (MBBS), Dentistry (BDS), Nursing, Pharmacy, AYUSH, or Social Sciences.',
          topics: ['Human Health & Disease Systems', 'Clinical Pharmacology & Therapeutics', 'Community Health Basics'],
          skillsToAcquire: ['Clinical Diagnostic Foundation', 'Healthcare Delivery Awareness'],
          activities: ['Participate in pulse polio drives, community health camps, and maternal healthcare screenings', 'Maintain strong academic standing (> 55% aggregate) for MPH eligibility'],
          completionCriteria: 'Award of undergraduate degree from recognized university.',
          dependencies: '10+2 from recognized board',
          resources: [
            { name: 'NPTEL Introduction to Public Health (IIT Kharagpur)', url: 'https://nptel.ac.in', type: 'Course', isFree: true },
            { name: 'WHO South-East Asia Regional Health Reports', url: 'https://www.who.int/southeastasia', type: 'Official Reports', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Master of Public Health (MPH) Program Admissions & Core Coursework',
          stageType: 'education',
          duration: 'Year 1 (MPH)',
          description: 'Crack national MPH entrance test (AIIMS, TISS, IIPH) and master epidemiology, biostatistics (R / STATA), health systems, and environmental health.',
          topics: ['Principles of Epidemiology (Incidence, Prevalence, Odds Ratios)', 'Biostatistics & R/STATA Statistical Modeling', 'Health Economics & Healthcare Financing', 'Global Burden of Disease & Social Determinants of Health'],
          skillsToAcquire: ['Epidemiological Study Design (Cohort, Case-Control)', 'STATA / R Health Data Analysis', 'Cost-Effectiveness Analysis (QALY/DALY)'],
          activities: ['Analyze National Family Health Survey (NFHS-5) dataset using STATA to calculate infant mortality determinants', 'Design a simulated case-control study investigating a waterborne disease outbreak'],
          completionCriteria: 'Clear 1st year MPH examinations across epidemiology and biostatistics.',
          dependencies: 'Admission into recognized MPH degree program',
          resources: [
            { name: 'National Family Health Survey (NFHS India) Open Data', url: 'http://rchiips.org/nfhs/', type: 'Open Data', isFree: true },
            { name: 'OpenWHO Free Public Health Courses', url: 'https://openwho.org', type: 'Online Learning', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Field Epidemiology Immersion & Program Evaluation',
          stageType: 'practical_experience',
          duration: 'Year 2 (MPH)',
          description: 'Execute district-level public health immersion, evaluate operational implementation of National Health Mission programs, and complete master’s dissertation.',
          topics: ['Integrated Disease Surveillance Programme (IDSP)', 'Monitoring & Evaluation (M&E) Frameworks (LogFrames)', 'Maternal, Newborn & Child Health (RMNCH+A) Programs', 'Qualitative Public Health Research (FGDs, KIIs)'],
          skillsToAcquire: ['Outbreak Investigation Protocol Execution', 'Key Informant Interview (KII) Analysis', 'Health Program Policy Brief Writing'],
          activities: ['Conduct field investigation of vector-borne fever cases in a rural primary health centre jurisdiction', 'Write and defend public health dissertation on universal health coverage in India'],
          completionCriteria: 'Completion and successful viva defense of MPH capstone dissertation.',
          dependencies: 'Passing 1st Year MPH Coursework',
          resources: [
            { name: 'Integrated Disease Surveillance Programme (IDSP) Portal', url: 'https://idsp.mohfw.gov.in', type: 'Government Surveillance', isFree: true },
            { name: 'National Health Systems Resource Centre Reports', url: 'https://nhsrcindia.org', type: 'Policy Reports', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'National Mission Placement & Career Advancement',
          stageType: 'job_search',
          duration: '3–6 Months',
          description: 'Secure appointment as Consultant / Technical Officer in National Health Mission, WHO India, UNICEF, or health policy institutes.',
          topics: ['Ayushman Bharat PM-JAY & Digital Health Mission (ABDM)', 'Donor Grant Management & Proposal Writing', 'Public Health Advocacy & Stakeholder Alignment'],
          skillsToAcquire: ['High-level Policy Briefing Preparation', 'Donor Proposal Drafting (USAID, Global Fund)', 'State-level Health Program Monitoring'],
          activities: ['Draft operational guidelines for district health facility strengthening under NHM', 'Coordinate multi-stakeholder immunization review meeting with state health officers'],
          completionCriteria: 'Appointment as Public Health Specialist / Epidemiologist in government or international agency.',
          dependencies: 'MPH Degree completion',
          resources: [
            { name: 'NHSRC Consultant Job Notifications', url: 'https://nhsrcindia.org/careers', type: 'Recruitment Portal', isFree: true },
            { name: 'WHO Careers Portal (India Office)', url: 'https://www.who.int/careers', type: 'UN Careers', isFree: true }
          ]
        }
      ]
    }
  }
];

module.exports = healthcareCareers;
