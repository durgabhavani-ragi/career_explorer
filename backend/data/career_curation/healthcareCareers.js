// Healthcare Sector Careers (14 Careers)
// Standardized Education Qualifications & Job-Preparation Roadmaps (Months Only)

module.exports = {
  'doctor': {
    educationQualification: {
      minimumQualification: "Bachelor of Medicine and Bachelor of Surgery (MBBS) from a National Medical Commission (NMC) recognized medical college.",
      preferredDegree: "MBBS degree followed by compulsory rotating medical internship.",
      requiredProfessionalDegreeOrLicense: "Mandatory permanent registration with the National Medical Commission (NMC) or State Medical Council (SMC) to practice medicine legally in India.",
      mandatoryRequirements: [
        "10+2 with Physics, Chemistry, Biology/Biotechnology, and English (PCB) with minimum 50% aggregate (40% for reserved categories).",
        "Qualify the National Eligibility cum Entrance Test for Undergraduates (NEET-UG).",
        "Completion of the 4.5-year academic MBBS curriculum plus 1-year Compulsory Rotating Medical Internship (CRMI) before applying for medical officer posts."
      ],
      preferredQualifications: [
        "Certification in Advanced Cardiovascular Life Support (ACLS) and Basic Life Support (BLS) by AHA.",
        "Clinical experience in emergency triage, casualty management, and intensive care units (ICU)."
      ],
      eligibilityCriteria: "Candidates must be registered medical practitioners with valid NMC/State Medical Council registration numbers. Age criteria for State Public Service Commission Medical Officer roles typically range between 21 and 35 years (with government relaxations).",
      regulatoryNotes: "A short preparation course can never replace the legally mandated MBBS degree and NMC statutory registration required by the National Medical Commission Act."
    },
    roadmap: {
      title: "General Physician (MBBS) Job-Preparation Roadmap",
      description: "Post-MBBS clinical transition roadmap focusing on acute emergency protocols, Indian outpatient pharmacology, electronic health records, and medical officer applications.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Acute Emergency Protocols & Life Support (BLS/ACLS)",
          durationMonths: 1,
          durationText: "1 month",
          category: "certification",
          description: "Master emergency resuscitation: Basic Life Support (BLS), Advanced Cardiovascular Life Support (ACLS), airway intubation, and acute shock triage.",
          tasks: [
            "Complete AHA-certified hands-on simulations for adult and pediatric cardiac arrest algorithms",
            "Master emergency ECG interpretation: STEMI, ventricular tachycardia, supraventricular arrhythmias, and heart blocks",
            "Calculate emergency intravenous drug infusions: dopamine, noradrenaline, amiodarone, and atropine"
          ],
          milestone: "Obtain verifiable AHA BLS/ACLS provider certification and demonstrate acute airway management on clinical manikins.",
          prerequisites: ["MBBS graduate with completed clinical rotatory internship"],
          resources: [
            { title: "National Medical Commission (NMC) Clinical Guidelines", url: "https://www.nmc.org.in/", type: "official", isFree: true },
            { title: "American Heart Association ACLS Guidelines", url: "https://cpm.heart.org/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Indian Outpatient Pharmacology & Clinical Management",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Study evidence-based OPD management for prevalent endemic conditions in India: diabetes, hypertension, infectious diseases, and ICMR antibiotic stewardship.",
          tasks: [
            "Draft compliant prescriptions adhering to the Indian Pharmacopoeia and CDSCO generic drug guidelines",
            "Review ICMR standard treatment workflows for vector-borne fevers (dengue, malaria), tuberculosis (NTEP), and enteric infections",
            "Sequence diagnostic laboratory investigations (CBC, LFT, KFT, lipid profile) cost-effectively for diverse socioeconomic backgrounds"
          ],
          milestone: "Compile an evidence-based clinical case portfolio covering management plans for 40 common Indian outpatient presentations.",
          prerequisites: ["Step 1: Acute Emergency Protocols & Life Support (BLS/ACLS)"],
          resources: [
            { title: "ICMR Standard Treatment Workflows", url: "https://www.icmr.gov.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Digital Health Records & Medico-Legal Compliance",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Master clinical documentation under the National Digital Health Mission (ABDM), patient confidentiality, informed consent, and death certification.",
          tasks: [
            "Integrate Ayushman Bharat Health Account (ABHA) electronic health record workflows conforming to ABDM standards",
            "Study medical jurisprudence: medico-legal case (MLC) documentation, injury reporting, and informed consent law",
            "Review NABH quality indicators for inpatient and emergency care record keeping"
          ],
          milestone: "Demonstrate complete proficiency in ABDM-compliant clinical record management and medico-legal documentation.",
          prerequisites: ["Step 2: Indian Outpatient Pharmacology & Clinical Management"],
          resources: [
            { title: "Ayushman Bharat Digital Mission (ABDM)", url: "https://abdm.gov.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Junior Residency & Medical Officer Placement Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Prepare for clinical case viva examinations, hospital interviews, and apply for Junior Resident (Non-Academic) or State Medical Officer postings.",
          tasks: [
            "Prepare clinical resume highlighting ward rotations, procedural skills, and rotational internship logbooks",
            "Practice clinical viva scenarios with senior consultants covering acute abdomen, poisoning, and trauma triage",
            "Apply to National Health Mission (NHM), private corporate hospital chains, and state public service commission medical officer exams"
          ],
          milestone: "Successfully complete 5 clinical case defense interviews and submit medical officer job applications.",
          prerequisites: ["Step 3: Digital Health Records & Medico-Legal Compliance"],
          resources: [
            { title: "Ministry of Health and Family Welfare (MoHFW)", url: "https://mohfw.gov.in/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'specialist-doctor': {
    educationQualification: {
      minimumQualification: "Doctor of Medicine (MD), Master of Surgery (MS), or Diplomate of National Board (DNB) in a specialized clinical discipline following MBBS.",
      preferredDegree: "MD / MS / DNB in specialty discipline; DM / MCh for super-specialty careers.",
      requiredProfessionalDegreeOrLicense: "Mandatory additional qualification registration with the National Medical Commission (NMC) or State Medical Council.",
      mandatoryRequirements: [
        "Completion of MBBS degree and 1-year compulsory rotating medical internship.",
        "Qualify the National Eligibility cum Entrance Test for Postgraduates (NEET-PG / INI-CET) for residency admission.",
        "Successful completion of 3-year accredited postgraduate residency (MD/MS/DNB) with thesis submission and practical clinical examination."
      ],
      preferredQualifications: [
        "Hands-on subspecialty fellowship or training in specialized surgical/interventional procedures.",
        "Publications in indexed medical journals (PubMed / Scopus)."
      ],
      eligibilityCriteria: "Specialist doctors must possess an NMC-recognized postgraduate degree. Senior Resident positions in tertiary teaching hospitals typically require an MD/MS/DNB with age limits governed by NMC/hospital guidelines (typically up to 45 years).",
      regulatoryNotes: "Specialist practice requires formal 3-year postgraduate clinical residency; this requirement cannot be condensed into short-term certifications."
    },
    roadmap: {
      title: "Specialist Doctor Job-Preparation Roadmap",
      description: "Post-residency specialist transition roadmap covering advanced procedural audits, complex clinical case conferences, subspecialty fellowships, and Senior Residency applications.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Specialty Case Log Consolidation & Procedural Audit",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Audit and verify 3-year post-graduate clinical case logs, procedural counts, and complex morbidity/mortality audits.",
          tasks: [
            "Compile certified procedural logbooks detailing independent vs assisted specialty surgical/clinical interventions",
            "Conduct structured retrospective analysis on departmental surgical outcomes and complication rates",
            "Review latest international clinical practice guidelines (e.g., ACC/AHA, ASCO, KDIGO, ACOG) for evidence-based interventions"
          ],
          milestone: "Completed and departmental-head certified logbook of 300+ specialty procedures and case presentations.",
          prerequisites: ["Completed MD/MS/DNB postgraduate residency in specialty"],
          resources: [
            { title: "National Board of Examinations (NBE)", url: "https://natboard.edu.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Subspecialty Protocols, Advanced Imaging & Multidisciplinary Tumor Boards",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Participate in multidisciplinary care boards, advanced imaging review (MRI/CT/PET), and interventional subspecialty workflows.",
          tasks: [
            "Present complex clinical cases before multidisciplinary tumor/specialty review boards",
            "Interpret specialized cross-sectional radiology, histopathology reports, and molecular genetic panels",
            "Establish infection control protocols and clinical antimicrobial stewardship in critical specialty wards"
          ],
          milestone: "Present 5 evaluated multidisciplinary clinical case reviews with documented outcome benchmarks.",
          prerequisites: ["Step 1: Specialty Case Log Consolidation & Procedural Audit"],
          resources: [
            { title: "PubMed Medical Literature Hub", url: "https://pubmed.ncbi.nlm.nih.gov/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Hospital Quality Accreditations & Medico-Legal Specialty Audits",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master NABH and JCI clinical indicators, specialized surgical consent documentation, and patient safety protocols.",
          tasks: [
            "Review NABH clinical audit indicators: surgical site infection (SSI) rates, medication errors, and readmission ratios",
            "Implement high-risk informed consent procedures and documentation standards for complex specialty interventions",
            "Participate in hospital clinical governance and peer-review audits"
          ],
          milestone: "Produce an audit report demonstrating department compliance with NABH patient safety guidelines.",
          prerequisites: ["Step 2: Subspecialty Protocols & Multidisciplinary Review"],
          resources: [
            { title: "National Accreditation Board for Hospitals & Healthcare Providers (NABH)", url: "https://www.nabh.co/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Senior Residency & Consultant Placement Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Prepare for Senior Resident (SR) selection interviews in medical colleges, consultant postings in hospital chains, or super-specialty entrance.",
          tasks: [
            "Prepare academic curriculum vitae detailing research publications, surgical experience, and conference presentations",
            "Interview for Senior Residency appointments across government medical colleges (AIIMS, State Medical Colleges)",
            "Apply for Junior Consultant / Associate Consultant positions in multi-specialty private hospital networks"
          ],
          milestone: "Attend 3 institutional specialist selection interviews and secure a Senior Residency or Consultant appointment.",
          prerequisites: ["Step 3: Hospital Quality Accreditations & Medico-Legal Audits"],
          resources: [
            { title: "All India Institute of Medical Sciences (AIIMS) Careers", url: "https://www.aiims.edu/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'dentist': {
    educationQualification: {
      minimumQualification: "Bachelor of Dental Surgery (BDS) from a Dental Council of India (DCI) recognized dental college.",
      preferredDegree: "BDS followed by Master of Dental Surgery (MDS) in clinical specializations (Orthodontics, Prosthodontics, Endodontics, Oral Surgery).",
      requiredProfessionalDegreeOrLicense: "Mandatory permanent registration with the State Dental Council (SDC) / Dental Council of India to practice dentistry in India.",
      mandatoryRequirements: [
        "10+2 with Physics, Chemistry, Biology, and English with minimum 50% marks (40% for reserved categories).",
        "Qualify the National Eligibility cum Entrance Test (NEET-UG for BDS, NEET-MDS for MDS).",
        "Completion of 4-year academic dental course plus 1-year compulsory rotatory paid internship."
      ],
      preferredQualifications: [
        "Hands-on clinical training in rotary endodontics, dental implantology, and aesthetic restorations.",
        "Clinical photography portfolio documenting pre- and post-treatment outcomes."
      ],
      eligibilityCriteria: "Registered dental practitioners holding valid state dental council registration. Government dental officer recruitment requires state public service commission qualification.",
      regulatoryNotes: "Dental practice in India is regulated under the Dentists Act, 1948; statutory DCI registration is strictly mandatory."
    },
    roadmap: {
      title: "Dentist Job-Preparation Roadmap",
      description: "Practical dental transition roadmap covering rotary endodontics, crown preparation, infection control, digital dentistry, and clinical practice setup.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Advanced Rotary Endodontics & Aesthetic Restorations",
          durationMonths: 1,
          durationText: "1 month",
          category: "practice",
          description: "Master modern root canal therapy using rotary nickel-titanium (NiTi) files, apex locators, rubber dam isolation, and composite bonding.",
          tasks: [
            "Perform access cavity preparations and rotary canal shaping on extracted molars under magnification",
            "Master warm vertical and single-cone gutta-percha obturation techniques",
            "Practice aesthetic composite restorations matching shade guides and dental anatomy on typhodont models"
          ],
          milestone: "Complete 15 successful root canal treatments and 20 composite restorations with rubber dam isolation.",
          prerequisites: ["Completed BDS degree with rotatory internship"],
          resources: [
            { title: "Dental Council of India (DCI) Regulations", url: "https://dciindia.gov.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Prosthodontic Crown Preparation & Impression Techniques",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master tooth preparation for metal-ceramic (PFM) and zirconia crowns, elastomeric impressions, and dental occlusion analysis.",
          tasks: [
            "Practice chamfer and shoulder margin tooth preparations for anterior and posterior aesthetic crowns",
            "Take precision two-step putty-wash silicone impressions with gingival retraction cord placement",
            "Coordinate with dental laboratories on CAD/CAM zirconia milling and digital intraoral scans"
          ],
          milestone: "Deliver 10 precision tooth preparations and verified elastomeric impressions for laboratory fabrication.",
          prerequisites: ["Step 1: Advanced Rotary Endodontics & Aesthetic Restorations"],
          resources: [
            { title: "Indian Dental Association (IDA) Continuing Education", url: "https://www.ida.org.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Minor Oral Surgery & Infection Control Protocols",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Master local anesthesia nerve blocks, simple and surgical tooth extractions, suturing, and biomedical sterilization (Class B autoclave).",
          tasks: [
            "Administer inferior alveolar nerve blocks, posterior superior alveolar blocks, and infiltration anesthesia safely",
            "Perform trans-alveolar extractions, alveoloplasty, and suture placement (cross-mattress, interrupted)",
            "Implement CDC-compliant dental sterilization workflows and biomedical waste management protocols"
          ],
          milestone: "Execute 20 surgical tooth extractions with zero post-operative dry socket complications.",
          prerequisites: ["Step 2: Prosthodontic Crown Preparation & Impression Techniques"],
          resources: [
            { title: "CDC Guidelines for Infection Control in Dental Settings", url: "https://www.cdc.gov/oral-health/infection-control/index.html", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Clinical Practice Setup & Dental Associate Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Prepare dental associate applications, compile clinical treatment portfolio, understand dental clinic economics, and interview.",
          tasks: [
            "Compile an indexed clinical photography portfolio showcasing aesthetic cases, RCTs, and prosthetics",
            "Understand clinical management: dental practice software, patient consent, and radiation safety (AERB norms for dental X-rays)",
            "Apply to 20+ associate dentist positions across private dental clinics, dental hospital chains, and corporate practices"
          ],
          milestone: "Present verified clinical treatment portfolio in 3 associate dentist interviews and submit applications.",
          prerequisites: ["Step 3: Minor Oral Surgery & Infection Control Protocols"],
          resources: [
            { title: "Atomic Energy Regulatory Board (AERB) Dental Radiography", url: "https://www.aerb.gov.in/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'nurse': {
    educationQualification: {
      minimumQualification: "Bachelor of Science in Nursing (B.Sc Nursing) - 4 years, or General Nursing and Midwifery (GNM) diploma - 3 years.",
      preferredDegree: "B.Sc Nursing from an Indian Nursing Council (INC) recognized nursing institution.",
      requiredProfessionalDegreeOrLicense: "Mandatory Registered Nurse and Registered Midwife (RN & RM) registration with the State Nursing Council / Indian Nursing Council.",
      mandatoryRequirements: [
        "10+2 with Physics, Chemistry, Biology, and English with minimum 45% aggregate (40% for reserved categories).",
        "Completion of accredited nursing curriculum with full clinical ward rotations.",
        "Valid state nursing council RN/RM registration number."
      ],
      preferredQualifications: [
        "Basic Life Support (BLS) and Advanced Cardiovascular Life Support (ACLS) certification.",
        "Clinical experience in critical care units (ICU, CCU, NICU) or operation theatres (OT)."
      ],
      eligibilityCriteria: "Registered nurses eligible for hospital staff nurse positions. Government nursing officer recruitment (AIIMS NORCET, ESIC, State Health) requires B.Sc Nursing or GNM with 2 years of hospital bed experience.",
      regulatoryNotes: "Nursing practice is legally governed by the Indian Nursing Council Act, 1947; statutory council registration is mandatory before clinical patient handling."
    },
    roadmap: {
      title: "Registered Nurse Job-Preparation Roadmap",
      description: "Intensive preparation in medication calculation, intravenous access, critical care monitoring, infection control, and AIIMS NORCET examination readiness.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Medication Administration & Dosage Calculations",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master the '10 Rights of Medication Administration', pediatric/adult dosage formulas, high-alert drug protocols, and IV titration.",
          tasks: [
            "Solve 100+ IV infusion rate and micro-drip medication calculation problems under timed constraints",
            "Master emergency drug dilutions: potassium chloride, insulin infusions, heparin protocols, and adrenaline",
            "Understand adverse drug reaction (ADR) reporting and medication error prevention protocols"
          ],
          milestone: "Pass medication calculation assessment with 100% accuracy on high-alert pediatric and adult drug scenarios.",
          prerequisites: ["Completed B.Sc Nursing or GNM diploma"],
          resources: [
            { title: "Indian Nursing Council (INC) Practice Standards", url: "https://www.indiannursingcouncil.org/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Invasive Clinical Skills & Infection Control Protocols",
          durationMonths: 1,
          durationText: "1 month",
          category: "practice",
          description: "Master aseptic techniques: peripheral IV cannulation, catheterization, central line dressing, tracheostomy care, and BMW segregation.",
          tasks: [
            "Practice sterile catheterization and nasogastric tube insertion following aseptic guidelines",
            "Perform peripheral IV cannulation and arterial line blood gas (ABG) sampling on simulation manikins",
            "Implement hospital-acquired infection (HAI) bundles: CLABSI, CAUTI, and VAP prevention guidelines"
          ],
          milestone: "Demonstrate 100% adherence to WHO Five Moments of Hand Hygiene and infection prevention bundles.",
          prerequisites: ["Step 1: Medication Administration & Dosage Calculations"],
          resources: [
            { title: "WHO Hand Hygiene in Healthcare Guidelines", url: "https://www.who.int/campaigns/world-hand-hygiene-day", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Critical Care Monitoring & Emergency Resuscitation",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Master multi-parameter patient monitor interpretation: hemodynamics, pulse oximetry, capnography, and code blue resuscitation.",
          tasks: [
            "Interpret abnormal cardiac rhythms and trigger early warning score (NEWS/MEWS) escalation protocols",
            "Operate syringe infusion pumps, defibrillators, and basic mechanical ventilator mode monitoring",
            "Participate in mock Code Blue resuscitation drills executing chest compressions and emergency drug delivery"
          ],
          milestone: "Complete simulated Code Blue resuscitation scenario fulfilling team lead checklist requirements.",
          prerequisites: ["Step 2: Invasive Clinical Skills & Infection Control Protocols"],
          resources: [
            { title: "American Heart Association BLS for Healthcare Providers", url: "https://cpr.heart.org/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "AIIMS NORCET Exam Prep & Hospital Recruitment",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Prepare for AIIMS Nursing Officer Recruitment Common Eligibility Test (NORCET), solve previous papers, and apply for nursing roles.",
          tasks: [
            "Solve past 5 years AIIMS NORCET question papers focusing on nursing clinical scenarios and image-based questions",
            "Practice timed mock test series (200 MCQs in 180 minutes) with negative marking discipline",
            "Apply for staff nurse positions across private hospital networks and state government health services"
          ],
          milestone: "Score above qualifying cutoff in 5 full-length NORCET mock tests and submit applications.",
          prerequisites: ["Step 3: Critical Care Monitoring & Emergency Resuscitation"],
          resources: [
            { title: "AIIMS Examination Section (NORCET Portal)", url: "https://www.aiimsexams.ac.in/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'pharmacist': {
    educationQualification: {
      minimumQualification: "Bachelor of Pharmacy (B.Pharm) - 4 years, or Diploma in Pharmacy (D.Pharm) - 2 years from a Pharmacy Council of India (PCI) approved college.",
      preferredDegree: "B.Pharm or Doctor of Pharmacy (Pharm.D).",
      requiredProfessionalDegreeOrLicense: "Mandatory Registered Pharmacist license from the State Pharmacy Council under the Pharmacy Act, 1948.",
      mandatoryRequirements: [
        "10+2 with Physics, Chemistry, and Mathematics/Biology (PCM/PCB).",
        "Completion of PCI-approved D.Pharm, B.Pharm, or Pharm.D curriculum.",
        "Completed mandatory 500 hours practical hospital/community pharmacy training."
      ],
      preferredQualifications: [
        "Knowledge of Good Manufacturing Practices (WHO-GMP) and Good Distribution Practices (GDP).",
        "Familiarity with pharmacy management software and inventory control."
      ],
      eligibilityCriteria: "Registered Pharmacists holding a valid registration certificate issued by the State Pharmacy Council. Government hospital pharmacist posts require B.Pharm/D.Pharm with state council registration.",
      regulatoryNotes: "Dispensing medicines legally requires statutory State Pharmacy Council registration; short-term courses cannot substitute for formal PCI-accredited qualifications."
    },
    roadmap: {
      title: "Pharmacist Job-Preparation Roadmap",
      description: "Practical curriculum covering prescription interpretation, Schedule H/X drug dispensing regulations, inventory management, pharmacology, and hospital pharmacy.",
      totalDurationMonths: 3,
      totalDurationFormatted: "3 months",
      steps: [
        {
          stepNumber: 1,
          title: "Drug Regulations, Scheduling & Dispensing Ethics",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master the Drugs and Cosmetics Act (1940), Pharmacy Act (1948), Schedule H, H1, X prescription rules, and patient counseling.",
          tasks: [
            "Audit prescriptions for drug-drug interactions, contraindications, and appropriate dosage frequencies",
            "Maintain statutory records: Schedule H1 and narcotic register entries conforming to CDSCO norms",
            "Counsel patients on proper medication timing, food interactions, and storage guidelines"
          ],
          milestone: "Audit 50 real-world prescriptions identifying dosage errors and statutory schedule compliance.",
          prerequisites: ["Completed D.Pharm, B.Pharm, or Pharm.D course"],
          resources: [
            { title: "Pharmacy Council of India (PCI) Regulations", url: "https://www.pci.nic.in/", type: "official", isFree: true },
            { title: "Central Drugs Standard Control Organization (CDSCO)", url: "https://cdsco.gov.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Pharmacy Inventory Management & Cold Chain Protocols",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Manage retail/hospital pharmacy stock: ABC-VED inventory analysis, FEFO (First-Expired, First-Out), and vaccine cold-chain maintenance.",
          tasks: [
            "Operate pharmacy management billing software tracking stock levels, batches, and expiries",
            "Implement cold chain temperature monitoring (2°C to 8°C) for vaccines and biological products",
            "Conduct monthly stock audit identifying near-expiry medications and processing supplier credit returns"
          ],
          milestone: "Complete simulated pharmacy inventory setup implementing FEFO tracking and cold chain logs.",
          prerequisites: ["Step 1: Drug Regulations, Scheduling & Dispensing Ethics"],
          resources: [
            { title: "WHO Good Distribution Practices for Pharmaceutical Products", url: "https://www.who.int/medicines/areas/quality_safety/quality_assurance/gdp/en/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Hospital Clinical Pharmacy & Recruitment Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Master hospital inpatient unit-dose dispensing, adverse drug reporting (PvPI), and apply for hospital or retail pharmacist roles.",
          tasks: [
            "Participate in Pharmacovigilance Programme of India (PvPI) reporting simulated Adverse Drug Events (ADEs)",
            "Review core pharmacy interview topics: pharmacology classes, mechanism of action, and drug toxicity antidotes",
            "Apply to 25+ hospital pharmacist, community pharmacy, and medical representative roles"
          ],
          milestone: "Pass 5 mock technical pharmacy interviews and submit applications.",
          prerequisites: ["Step 2: Pharmacy Inventory Management & Cold Chain Protocols"],
          resources: [
            { title: "Indian Pharmacopoeia Commission (IPC)", url: "https://www.ipc.gov.in/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'physiotherapist': {
    educationQualification: {
      minimumQualification: "Bachelor of Physiotherapy (BPT) - 4.5 years (including 6 months compulsory rotatory clinical internship).",
      preferredDegree: "Master of Physiotherapy (MPT) in specialized disciplines (Orthopedics, Neurosciences, Sports, Cardio-Pulmonary).",
      requiredProfessionalDegreeOrLicense: "Registration with the State Physiotherapy Council or the National Commission for Allied and Healthcare Professions (NCAHP).",
      mandatoryRequirements: [
        "10+2 with Physics, Chemistry, Biology, and English with minimum 50% aggregate.",
        "Completion of BPT curriculum and 6-month continuous clinical hospital internship."
      ],
      preferredQualifications: [
        "Hands-on certifications in Dry Needling, Kinesio Taping, or Manual Therapy (Maitland/Mulligan concepts).",
        "Experience in musculoskeletal rehabilitation or post-operative mobilization."
      ],
      eligibilityCriteria: "Registered physiotherapists qualified to deliver clinical physical therapy. Hospital, sports academy, and clinic recruitment evaluates clinical diagnosis and therapeutic exercise prescription.",
      regulatoryNotes: "Physiotherapy is regulated under the National Commission for Allied and Healthcare Professions Act, 2021; recognized degree and statutory council registration are mandatory."
    },
    roadmap: {
      title: "Physiotherapist Job-Preparation Roadmap",
      description: "Practical curriculum covering musculoskeletal assessment, manual therapy mobilizations, therapeutic exercise prescription, and sports rehabilitation.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Musculoskeletal Assessment & Clinical Special Tests",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master physical examination: range of motion (goniometry), manual muscle testing (MMT 0–5 scale), and orthopedic special tests.",
          tasks: [
            "Perform special orthopedic tests for knee (Lachman, McMurray) and shoulder (Neer, Hawkins-Kennedy, Empty Can)",
            "Assess posture, spinal alignment, and gait deviations (Trendelenburg, circumduction, antalgic)",
            "Document structured subjective and objective clinical notes following the SOAP format"
          ],
          milestone: "Complete 20 comprehensive SOAP clinical evaluations on musculoskeletal rehabilitation patients.",
          prerequisites: ["Completed BPT degree with clinical internship"],
          resources: [
            { title: "Physiopedia Open Rehabilitation Platform", url: "https://www.physio-pedia.com/", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Manual Therapy Techniques & Electrotherapy Modalities",
          durationMonths: 1,
          durationText: "1 month",
          category: "practice",
          description: "Master joint mobilizations (Maitland grades I–IV), myofascial release, and safe application of electrotherapy (TENS, IFT, Ultrasound).",
          tasks: [
            "Apply peripheral and spinal joint mobilization techniques restoring functional joint kinematics",
            "Calculate appropriate dosage parameters for Therapeutic Ultrasound and Interferential Therapy (IFT)",
            "Implement trigger point myofascial release and neural tissue mobilization techniques"
          ],
          milestone: "Demonstrate manual mobilization and electrotherapy treatment protocols on 15 orthopedic cases.",
          prerequisites: ["Step 1: Musculoskeletal Assessment & Clinical Special Tests"],
          resources: [
            { title: "National Commission for Allied and Healthcare Professions (NCAHP)", url: "https://ncahp.gov.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Therapeutic Exercise Prescription & Neuro-Rehabilitation",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Design progressive strengthening, proprioceptive, and neurological rehabilitation programs (Bobath, PNF, motor relearning).",
          tasks: [
            "Design progressive resistance exercise (PRE) protocols for post-operative ACL reconstruction and total knee replacement",
            "Implement PNF diagonal movement patterns and balance training for stroke hemiplegia rehabilitation",
            "Develop ergonomic workplace exercise routines for repetitive strain and postural spine disorders"
          ],
          milestone: "Author 5 comprehensive 8-week progressive rehabilitation plans for common post-surgical and neuro conditions.",
          prerequisites: ["Step 2: Manual Therapy Techniques & Electrotherapy Modalities"],
          resources: [
            { title: "Indian Association of Physiotherapists (IAP)", url: "https://www.physiotherapyindia.org/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Clinical Practice Setup & Hospital Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Prepare clinical case portfolio, understand clinic equipment requirements, and apply for hospital or rehabilitation center roles.",
          tasks: [
            "Compile indexed clinical portfolio with before-and-after functional recovery metrics and patient testimonials",
            "Practice technical interview questions on biomechanics, red flag contraindications, and differential diagnosis",
            "Apply to 20+ physiotherapist positions across multi-specialty hospitals, sports academies, and ortho clinics"
          ],
          milestone: "Pass 5 mock clinical physiotherapy interviews and submit job applications.",
          prerequisites: ["Step 3: Therapeutic Exercise Prescription & Neuro-Rehabilitation"],
          resources: [
            { title: "World Physiotherapy Education Guidelines", url: "https://world.physio/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'medical-laboratory-technologist': {
    educationQualification: {
      minimumQualification: "Bachelor of Medical Laboratory Technology (BMLT) - 3 years, or Diploma in Medical Laboratory Technology (DMLT) - 2 years.",
      preferredDegree: "BMLT / B.Sc in Medical Laboratory Science from an accredited university.",
      requiredProfessionalDegreeOrLicense: "Registration with the State Paramedical Council or National Commission for Allied and Healthcare Professions (NCAHP).",
      mandatoryRequirements: [
        "10+2 with Physics, Chemistry, and Biology (PCB).",
        "Completion of BMLT or DMLT curriculum with mandatory diagnostic laboratory internship."
      ],
      preferredQualifications: [
        "Hands-on experience with automated clinical biochemistry, hematology analyzers, and ELISA testing.",
        "Understanding of NABL (National Accreditation Board for Testing and Calibration Laboratories) quality standards (ISO 15189)."
      ],
      eligibilityCriteria: "Laboratory technologists evaluate specimen collection (phlebotomy), slide preparation, reagent calibration, internal quality controls (IQC), and critical report validation.",
      regulatoryNotes: "Diagnostic testing quality is governed under the Clinical Establishments Act and NABL ISO 15189 standards."
    },
    roadmap: {
      title: "Medical Laboratory Technologist Job-Preparation Roadmap",
      description: "Hands-on preparation in clinical hematology, automated biochemistry analyzers, microbiology staining, and NABL ISO 15189 laboratory quality control.",
      totalDurationMonths: 3,
      totalDurationFormatted: "3 months",
      steps: [
        {
          stepNumber: 1,
          title: "Phlebotomy, Specimen Handling & Hematology",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master venipuncture, Vacutainer color-coded tube selection, complete blood counts (CBC), peripheral blood smears, and ESR.",
          tasks: [
            "Perform correct venipuncture following WHO phlebotomy guidelines to prevent hemolysis",
            "Prepare and stain peripheral blood smears using Leishman/Giemsa stain for differential leukocyte counting",
            "Operate automated 3-part and 5-part hematology analyzers and verify abnormal flags under light microscopy"
          ],
          milestone: "Prepare and interpret 30 stained peripheral blood smears correctly identifying blood cell morphologies.",
          prerequisites: ["Completed BMLT or DMLT coursework"],
          resources: [
            { title: "NABL ISO 15189 Medical Lab Standards", url: "https://nabl-india.org/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Clinical Biochemistry & Automated Analyzer Calibration",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Calibrate automated chemistry analyzers, run liver/kidney function tests, run internal quality controls (Levey-Jennings charts), and maintain equipment.",
          tasks: [
            "Perform photometric biochemical assays: blood glucose, urea, creatinine, bilirubin, enzymes (SGOT, SGPT)",
            "Plot and evaluate daily Internal Quality Control (IQC) results on Levey-Jennings charts using Westgard multirules",
            "Perform routine preventive maintenance and reagent volume checks on automated chemistry analyzers"
          ],
          milestone: "Evaluate Levey-Jennings QC charts across 20 consecutive runs and correctly detect analytical trend violations.",
          prerequisites: ["Step 1: Phlebotomy, Specimen Handling & Hematology"],
          resources: [
            { title: "Westgard QC Rules Guide", url: "https://www.westgard.com/", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Microbiology Staining, Blood Banking & Job Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Master Gram staining, Ziehl-Neelsen (AFB) staining, blood grouping (ABO & Rh), cross-matching, and apply for MLT positions.",
          tasks: [
            "Perform Gram staining and AFB sputum smear microscopy for tuberculosis screening under RNTCP/NTEP protocols",
            "Perform forward and reverse ABO blood grouping, Rh typing, and compatibility cross-matching",
            "Apply to 25+ medical lab technologist positions across diagnostic chains, hospital laboratories, and blood banks"
          ],
          milestone: "Pass 5 mock technical lab interviews and submit diagnostic lab job applications.",
          prerequisites: ["Step 2: Clinical Biochemistry & Automated Analyzer Calibration"],
          resources: [
            { title: "CDC Laboratory Training Resources", url: "https://www.cdc.gov/lab-training/index.html", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'radiology-technologist': {
    educationQualification: {
      minimumQualification: "Bachelor of Science in Medical Imaging Technology (B.Sc MIT / B.Sc Radiology) - 3 years, or Diploma in Medical Radiography - 2 years.",
      preferredDegree: "B.Sc in Medical Radiologic Technology from a recognized university.",
      requiredProfessionalDegreeOrLicense: "Registration with the State Paramedical Council or National Commission for Allied and Healthcare Professions (NCAHP); Atomic Energy Regulatory Board (AERB) radiation worker certification.",
      mandatoryRequirements: [
        "10+2 with Physics, Chemistry, and Mathematics/Biology.",
        "Accredited radiology degree/diploma with mandatory clinical hospital internship.",
        "Personnel monitoring badge (TLD badge) clearance from AERB."
      ],
      preferredQualifications: [
        "Experience operating Multi-slice Computed Tomography (CT) and Magnetic Resonance Imaging (MRI) scanners.",
        "Strong understanding of radiation protection principles (ALARA, lead shielding, collimation)."
      ],
      eligibilityCriteria: "Radiology technologists evaluate patient positioning, radiation safety, contrast media protocols, and image quality on PACS/DICOM systems.",
      regulatoryNotes: "Operation of diagnostic radiological equipment in India is strictly governed by the Atomic Energy Regulatory Board (AERB)."
    },
    roadmap: {
      title: "Radiology Technologist Job-Preparation Roadmap",
      description: "Practical curriculum covering digital radiography (DR/CR), patient positioning, CT scan acquisition, MRI safety, and AERB radiation protection.",
      totalDurationMonths: 3,
      totalDurationFormatted: "3 months",
      steps: [
        {
          stepNumber: 1,
          title: "Digital Radiography & Anatomical Patient Positioning",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master patient positioning: chest PA, extremities, skull, spine (cervical, lumbar AP/Lateral), exposure factors (kVp, mAs), and digital detectors.",
          tasks: [
            "Position patients accurately for skeletal and chest radiography minimizing patient discomfort and repeat exposures",
            "Select optimal tube voltage (kVp) and current-time product (mAs) based on anatomical thickness",
            "Post-process digital radiographs on PACS workstations: windowing, edge enhancement, and DICOM transmission"
          ],
          milestone: "Produce 30 diagnostic-quality digital radiographs meeting institutional diagnostic criteria.",
          prerequisites: ["Radiological physics and human anatomy fundamentals"],
          resources: [
            { title: "Radiopaedia Radiology Reference", url: "https://radiopaedia.org/", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "AERB Radiation Safety Protocols & ALARA Compliance",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Implement ALARA (As Low As Reasonably Achievable) principles: time, distance, shielding, lead aprons, gonadal shielding, and TLD badge monitoring.",
          tasks: [
            "Inspect lead aprons and thyroid shields for radiation leakage using fluoroscopy quality testing",
            "Calculate radiation dose reduction techniques using beam collimation and fast digital receptors",
            "Review AERB safety codes for diagnostic medical X-ray installations (AERB/SC/MED-2)"
          ],
          milestone: "Pass comprehensive radiation safety and AERB regulatory compliance assessment.",
          prerequisites: ["Step 1: Digital Radiography & Anatomical Patient Positioning"],
          resources: [
            { title: "Atomic Energy Regulatory Board (AERB) Safety Codes", url: "https://www.aerb.gov.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Computed Tomography (CT) Scanning & Job Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Operate multi-slice CT scanners: patient positioning, contrast injection protocols, slice reconstruction, and apply for technologist roles.",
          tasks: [
            "Set up head, chest, and abdominal CT protocols selecting appropriate pitch, slice thickness, and scout views",
            "Manage IV contrast administration protocols checking patient serum creatinine and eGFR values",
            "Apply to 20+ radiographer and medical imaging technologist openings across diagnostic centers and hospital networks"
          ],
          milestone: "Pass 5 mock technical radiology imaging interviews and submit job applications.",
          prerequisites: ["Step 2: AERB Radiation Safety Protocols & ALARA Compliance"],
          resources: [
            { title: "American Society of Radiologic Technologists (ASRT)", url: "https://www.asrt.org/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'nutritionist': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Food & Nutrition, Dietetics, Clinical Nutrition, Home Science, or Food Technology (B.Sc) - 3 years.",
      preferredDegree: "Master's degree (M.Sc) in Clinical Nutrition & Dietetics or Post Graduate Diploma in Dietetics (PGDD).",
      requiredProfessionalDegreeOrLicense: "Registered Dietitian (RD) certification from the Indian Dietetic Association (IDA) is preferred for senior clinical positions.",
      mandatoryRequirements: [
        "10+2 with Science/Home Science.",
        "Graduation in Food & Nutrition from an accredited college/university.",
        "Completion of 3 to 6-month clinical dietetic internship in a recognized hospital."
      ],
      preferredQualifications: [
        "Registered Dietitian (RD) credential from the Indian Dietetic Association (IDA).",
        "Clinical experience in therapeutic diet design for diabetes, renal disease, and cardiac care."
      ],
      eligibilityCriteria: "Clinical nutritionists evaluate patient nutritional assessment, body composition, dietary recall, macro/micronutrient calculation, and disease-specific medical nutrition therapy (MNT).",
      regulatoryNotes: "Hospital clinical dietitian posts typically mandate M.Sc Dietetics or RD certification from the Indian Dietetic Association."
    },
    roadmap: {
      title: "Clinical Nutritionist & Dietitian Job-Preparation Roadmap",
      description: "Practical curriculum covering nutritional assessment, Medical Nutrition Therapy (MNT), therapeutic diet chart drafting, renal/diabetic nutrition, and clinical interviews.",
      totalDurationMonths: 3,
      totalDurationFormatted: "3 months",
      steps: [
        {
          stepNumber: 1,
          title: "Nutritional Assessment & Energy Calculation",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master anthropometric measurements (BMI, waist-hip ratio, skinfolds), 24-hour dietary recall analysis, and Basal Metabolic Rate (BMR) calculations.",
          tasks: [
            "Calculate Total Daily Energy Expenditure (TDEE) using Harris-Benedict and Mifflin-St Jeor equations factoring activity multipliers",
            "Analyze 24-hour dietary recalls identifying macro and micronutrient deficiencies using Indian Food Composition Tables (IFCT / NIN)",
            "Conduct Subjective Global Assessment (SGA) for hospital inpatient malnutrition screening"
          ],
          milestone: "Produce 10 comprehensive nutritional assessment reports using Indian Food Composition Tables.",
          prerequisites: ["Food science and biochemistry fundamentals"],
          resources: [
            { title: "National Institute of Nutrition (NIN) ICMR Dietary Guidelines", url: "https://www.nin.res.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Medical Nutrition Therapy (MNT) for Chronic Diseases",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Design specialized therapeutic diets: diabetes mellitus (glycemic index/load), cardiovascular disease (DASH diet), and chronic kidney disease (CKD).",
          tasks: [
            "Formulate renal therapeutic diets strictly balancing protein, potassium, sodium, and phosphorus restrictions",
            "Design diabetic carbohydrate counting and low-glycemic load meal plans adapted to regional Indian culinary habits",
            "Calculate enteral feeding tube formula volumes and infusion schedules for intensive care patients"
          ],
          milestone: "Develop 5 specialized 7-day therapeutic meal plans for diabetic, hypertensive, and renal patients.",
          prerequisites: ["Step 1: Nutritional Assessment & Energy Calculation"],
          resources: [
            { title: "Indian Dietetic Association (IDA)", url: "https://idaindia.com/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Dietetic Counseling Portfolio & Hospital Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Assemble clinical case portfolio, practice motivational interviewing techniques, and apply for clinical nutritionist roles.",
          tasks: [
            "Assemble portfolio of 10 clinical case studies documenting patient baseline metrics, diet interventions, and health outcome improvements",
            "Practice patient behavioral counseling simulations addressing dietary adherence barriers and lifestyle modifications",
            "Apply to 20+ clinical nutritionist, dietitian, and wellness consultant openings across hospitals, fitness centers, and healthtech platforms"
          ],
          milestone: "Pass 5 mock clinical nutrition interviews and submit job applications.",
          prerequisites: ["Step 2: Medical Nutrition Therapy (MNT) for Chronic Diseases"],
          resources: [
            { title: "Food Safety and Standards Authority of India (FSSAI)", url: "https://www.fssai.gov.in/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'psychologist': {
    educationQualification: {
      minimumQualification: "Master's degree in Psychology / Clinical Psychology (M.A. / M.Sc) followed by an M.Phil in Clinical Psychology from an RCI-recognized institution.",
      preferredDegree: "M.Phil in Clinical Psychology or Psy.D from an RCI-approved medical college/institute (e.g., NIMHANS, CIP Ranchi, IHBAS).",
      requiredProfessionalDegreeOrLicense: "Mandatory Rehabilitation Council of India (RCI) Professional Registration as a Licensed Clinical Psychologist.",
      mandatoryRequirements: [
        "Bachelor's degree in Psychology or related arts/science discipline.",
        "Master's degree in Psychology with minimum 55% aggregate.",
        "Successful completion of 2-year full-time hospital-based M.Phil in Clinical Psychology program with supervised psychodiagnostic and psychotherapy cases.",
        "Valid Central Rehabilitation Register (CRR) registration number from RCI."
      ],
      preferredQualifications: [
        "Clinical training in Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and neuropsychological assessments.",
        "Experience in child guidance clinics or psychiatric inpatient units."
      ],
      eligibilityCriteria: "Only individuals holding valid RCI registration can legally practice as Clinical Psychologists in India under the Mental Healthcare Act, 2017.",
      regulatoryNotes: "Practicing clinical psychology without RCI registration is an offense under the RCI Act, 1992. Short-term counseling diplomas do not confer clinical psychologist status."
    },
    roadmap: {
      title: "Clinical Psychologist Job-Preparation Roadmap",
      description: "Post-qualification clinical transition roadmap covering standardized psychometric test administration, evidence-based CBT case formulations, and hospital applications.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Standardized Psychometric & Neuropsychological Assessment",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Administer and interpret standardized psychological batteries: IQ assessments (Bhatia Battery, BKT, WAIS), personality tests (Rorschach, TAT, MMPI), and neuropsych tests.",
          tasks: [
            "Administer, score, and profile Indian standardized intelligence batteries calculating verbal and performance IQ",
            "Score Rorschach Inkblot test using Exner Comprehensive System and analyze projective themes on TAT",
            "Write comprehensive psycho-diagnostic evaluation reports correlating behavioral observations and test scores"
          ],
          milestone: "Administer, score, and generate comprehensive clinical assessment reports for 10 psychological test batteries.",
          prerequisites: ["Master's in Psychology with RCI-approved clinical training"],
          resources: [
            { title: "Rehabilitation Council of India (RCI)", url: "https://www.rehabcouncil.nic.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Cognitive Behavioral Therapy (CBT) Case Formulation",
          durationMonths: 1,
          durationText: "1 month",
          category: "practice",
          description: "Formulate psychiatric cases using the 5-P model, construct cognitive conceptualization diagrams, and plan structured therapy sessions.",
          tasks: [
            "Draft Beckian cognitive conceptualization diagrams identifying core beliefs, intermediate beliefs, and automatic thoughts",
            "Design behavioral experiments and cognitive restructuring thought records for anxiety and depression disorders",
            "Establish suicide risk assessment protocols and structured safety plans conforming to Mental Healthcare Act norms"
          ],
          milestone: "Produce 5 structured CBT case formulations and treatment intervention blueprints for anxiety and depressive disorders.",
          prerequisites: ["Step 1: Standardized Psychometric & Neuropsychological Assessment"],
          resources: [
            { title: "Beck Institute for Cognitive Behavior Therapy", url: "https://beckinstitute.org/", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Mental Healthcare Act Compliance & Clinical Ethics",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Review Indian Mental Healthcare Act (MHCA 2017) provisions: Advance Directives, Nominated Representatives, and confidential documentation.",
          tasks: [
            "Review MHCA 2017 provisions on voluntary admission, confidentiality exceptions, and rights of persons with mental illness",
            "Conduct clinical audit of psychotherapy documentation ensuring adherence to informed consent and data privacy",
            "Participate in peer supervision workshops discussing complex therapeutic boundary and transference challenges"
          ],
          milestone: "Complete an audit of psychotherapy documentation confirming strict compliance with MHCA 2017 provisions.",
          prerequisites: ["Step 2: Cognitive Behavioral Therapy (CBT) Case Formulation"],
          resources: [
            { title: "Mental Healthcare Act 2017 (India Gazette)", url: "https://www.indiacode.nic.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Clinical Practice Setup & Hospital Placement Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Prepare professional clinical portfolio, practice case viva examinations, and apply for Clinical Psychologist positions.",
          tasks: [
            "Compile certified clinical logbook documenting supervised assessment and psychotherapy hours",
            "Practice clinical viva defenses on differential diagnosis per ICD-11 / DSM-5 diagnostic criteria",
            "Apply to 20+ clinical psychologist positions across psychiatric hospitals, medical college departments, and private clinics"
          ],
          milestone: "Pass 5 mock psycho-diagnostic interview examinations and submit tailored applications.",
          prerequisites: ["Step 3: Mental Healthcare Act Compliance & Clinical Ethics"],
          resources: [
            { title: "National Institute of Mental Health and Neuro-Sciences (NIMHANS)", url: "https://nimhans.ac.in/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'clinical-research-associate': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Pharmacy (B.Pharm), Life Sciences (B.Sc Biotechnology/Microbiology), Medicine (MBBS/BDS/BAMS), or Nursing.",
      preferredDegree: "Master of Pharmacy (M.Pharm in Pharmacology/Regulatory Affairs), M.Sc in Clinical Research, or Pharm.D.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; ICH-GCP (Good Clinical Practice) investigator certification is mandatory.",
      mandatoryRequirements: [
        "10+2 with Science (PCB/PCM).",
        "Graduation completed prior to joining Contract Research Organizations (CROs) or pharmaceutical clinical trial teams.",
        "Verifiable certification in ICH-E6 (R2) Good Clinical Practice."
      ],
      preferredQualifications: [
        "Hands-on experience with Electronic Data Capture (EDC) systems (Medidata Rave, Oracle InForm).",
        "Understanding of Indian New Drugs and Clinical Trials Rules (NDCTR 2019) and CDSCO ethics committee approvals."
      ],
      eligibilityCriteria: "CROs and pharmaceutical sponsors evaluate candidate's knowledge of trial protocol adherence, Informed Consent Form (ICF) audits, Serious Adverse Event (SAE) reporting, and trial monitoring visits.",
      regulatoryNotes: "Clinical trials in India are governed under the New Drugs and Clinical Trials Rules, 2019, overseen by CDSCO."
    },
    roadmap: {
      title: "Clinical Research Associate Job-Preparation Roadmap",
      description: "Practical curriculum covering ICH-GCP guidelines, New Drugs and Clinical Trials Rules 2019, source data verification (SDV), trial site monitoring, and SAE reporting.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "ICH-GCP E6(R2) & Indian Clinical Trial Regulations",
          durationMonths: 1,
          durationText: "1 month",
          category: "certification",
          description: "Master ICH-GCP E6(R2) ethical principles, investigator responsibilities, Institutional Ethics Committee (IEC) workflows, and NDCTR 2019.",
          tasks: [
            "Complete accredited online training in ICH-GCP E6(R2) and earn a passing certification",
            "Review Indian New Drugs and Clinical Trials Rules (NDCTR 2019) mandates for compensation and audio-video informed consent",
            "Audit mock Informed Consent Forms (ICFs) ensuring compliance with essential patient information elements"
          ],
          milestone: "Obtain verifiable ICH-GCP certification and complete an audit checklist for clinical trial informed consent.",
          prerequisites: ["Degree in pharmacy, life sciences, or medicine"],
          resources: [
            { title: "ICH Official Good Clinical Practice Guidelines", url: "https://www.ich.org/page/efficacy-guidelines", type: "official", isFree: true },
            { title: "NIDA Clinical Trials Network Free GCP Training", url: "https://gcp.nihtraining.com/", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Source Data Verification (SDV) & Electronic Data Capture (EDC)",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master ALCOA+ data integrity principles, perform Source Data Verification against hospital patient records, and navigate EDC platforms.",
          tasks: [
            "Perform Source Data Verification (SDV) comparing hospital electronic medical records against Electronic Case Report Forms (eCRF)",
            "Generate structured data queries for missing data, protocol deviations, and transcription discrepancies in EDC",
            "Maintain Trial Master File (TMF) and Investigator Site File (ISF) documentation per DIA TMF reference model"
          ],
          milestone: "Execute 100% Source Data Verification on a mock multi-patient oncology clinical trial dataset.",
          prerequisites: ["Step 1: ICH-GCP E6(R2) & Indian Clinical Trial Regulations"],
          resources: [
            { title: "CDSCO Clinical Trial Regulations", url: "https://cdsco.gov.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Site Monitoring Visits & Serious Adverse Event (SAE) Reporting",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Conduct Site Selection (SSV), Site Initiation (SIV), and Routine Monitoring Visits (IMV); execute rapid 24-hour SAE reporting.",
          tasks: [
            "Draft a comprehensive Clinical Monitoring Report (CMR) documenting visit findings, drug accountability, and protocol deviations",
            "Reconcile investigational medicinal product (IMP) temperature logs, storage compliance, and dispensing records",
            "Simulate Serious Adverse Event (SAE) processing following CDSCO 24-hour initial and 14-day detailed causality reporting timelines"
          ],
          milestone: "Author an industry-standard Interim Monitoring Report (IMR) and completed SAE regulatory notification dossier.",
          prerequisites: ["Step 2: Source Data Verification (SDV) & Electronic Data Capture (EDC)"],
          resources: [
            { title: "Clinical Development Services Agency (CDSA) India", url: "https://thsti.res.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "CRA Interview Preparation & CRO Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Prepare for clinical research interviews, review clinical pharmacology trial phases (Phase I–IV), and apply for CRA roles.",
          tasks: [
            "Review core interview topics: blinding/randomization methods, protocol deviations vs violations, and audit readiness",
            "Practice mock interview scenarios evaluating investigator site conflict resolution and non-compliance remediation",
            "Apply to 25+ Clinical Research Associate (CRA), Clinical Trial Assistant (CTA), and Study Coordinator roles across global CROs (IQVIA, Parexel, Syneos)"
          ],
          milestone: "Pass 5 mock CRA technical interviews and submit job applications.",
          prerequisites: ["Step 3: Site Monitoring Visits & Serious Adverse Event Reporting"],
          resources: [
            { title: "Indian Society for Clinical Research (ISCR)", url: "https://www.iscr.org/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'biotechnology-researcher': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Biotechnology, Biochemistry, Microbiology, or Bioinformatics (B.Sc / B.Tech).",
      preferredDegree: "Master of Science (M.Sc) or M.Tech in Biotechnology / Molecular Biology.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; Institutional Biosafety Committee (IBSC) and RCGM clearances apply to recombinant DNA research.",
      mandatoryRequirements: [
        "10+2 with Physics, Chemistry, and Biology/Mathematics (PCB/PCM).",
        "Graduation completed prior to industrial or academic research lab onboarding."
      ],
      preferredQualifications: [
        "Hands-on expertise in molecular biology techniques (PCR, Gel Electrophoresis, Western Blotting, Recombinant DNA cloning).",
        "Experience in mammalian cell culture or microbial fermentation bioreactor operation."
      ],
      eligibilityCriteria: "Biotech firms (Biocon, Serum Institute, Bharat Biotech) evaluate laboratory pipetting precision, recombinant protein expression, purity assays, and biosafety protocols.",
      regulatoryNotes: "Government research fellowships (CSIR-UGC NET, DBT-JRF, ICMR-JRF) require qualifying scores in national competitive examinations."
    },
    roadmap: {
      title: "Biotechnology Researcher Job-Preparation Roadmap",
      description: "Hands-on preparation in recombinant DNA cloning, PCR amplification, protein purification, cell culture maintenance, and analytical chromatography.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Molecular Biology Techniques & Gene Cloning",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master genomic/plasmid DNA isolation, restriction digestion, ligation, bacterial transformation, and PCR primer design.",
          tasks: [
            "Design specific PCR primers verifying melting temperature, GC percentage, and secondary structure avoidance using NCBI Primer-BLAST",
            "Perform restriction endonuclease digestion, agarose gel electrophoresis, and DNA fragment purification",
            "Transform chemically competent E. coli cells with recombinant plasmids and screen positive colonies by colony PCR"
          ],
          milestone: "Successfully clone a target gene insert into an expression plasmid with DNA sequencing verification.",
          prerequisites: ["Molecular genetics and biochemistry fundamentals"],
          resources: [
            { title: "NCBI Molecular Biology Tools", url: "https://www.ncbi.nlm.nih.gov/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Recombinant Protein Expression & Purification",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Induce recombinant protein expression in bacterial/yeast hosts, lyse cells, and purify proteins using Affinity Chromatography (Ni-NTA).",
          tasks: [
            "Optimize IPTG induction concentrations and post-induction temperatures for soluble protein expression",
            "Purify His-tagged recombinant proteins using Nickel-NTA immobilized metal affinity chromatography (IMAC)",
            "Quantify protein yields using Bradford/BCA assays and verify purity by SDS-PAGE and Western blot analysis"
          ],
          milestone: "Purify a target recombinant protein with >90% purity confirmed via SDS-PAGE Coomassie staining.",
          prerequisites: ["Step 1: Molecular Biology Techniques & Gene Cloning"],
          resources: [
            { title: "Department of Biotechnology (DBT) India", url: "https://dbtindia.gov.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Aseptic Cell Culture & Biosafety Level 2 (BSL-2) Protocols",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Maintain mammalian or insect cell lines under sterile laminar flow hoods, passage cells, freeze cryovials, and maintain BSL-2 safety.",
          tasks: [
            "Practice strict aseptic technique: subculturing mammalian cell lines, media preparation, and hemocytometer viability cell counts",
            "Cryopreserve cell lines in liquid nitrogen storage with controlled freezing containers (Mr. Frosty)",
            "Implement biosafety waste decontamination using autoclaving and chemical neutralizers conforming to RCGM guidelines"
          ],
          milestone: "Maintain continuous, contamination-free cell culture lines over 5 passages with >95% cell viability.",
          prerequisites: ["Step 2: Recombinant Protein Expression & Purification"],
          resources: [
            { title: "Review Committee on Genetic Manipulation (RCGM) Biosafety Guidelines", url: "https://ibkp.dbtindia.gov.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Biotech Laboratory Portfolio & Research Interviews",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Compile laboratory notebook protocols, practice technical viva questions, and apply for junior research scientist roles.",
          tasks: [
            "Compile certified laboratory notebook documenting experimental protocols, gel images, and yield calculations",
            "Review core interview topics: PCR troubleshooting, ELISA assay design, and HPLC/FPLC analytical chromatography",
            "Apply to 20+ Junior Research Fellow (JRF), laboratory analyst, and R&D assistant roles across biopharma firms and national research institutes"
          ],
          milestone: "Pass 5 mock technical biotechnology interviews and submit tailored job applications.",
          prerequisites: ["Step 3: Aseptic Cell Culture & Biosafety Level 2 Protocols"],
          resources: [
            { title: "CSIR Human Resource Development Group (HRDG)", url: "https://csirhrdg.res.in/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'microbiologist': {
    educationQualification: {
      minimumQualification: "Bachelor of Science (B.Sc) in Microbiology, Industrial Microbiology, or Life Sciences - 3 years.",
      preferredDegree: "Master of Science (M.Sc) in Microbiology / Medical Microbiology.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; hospital laboratory positions require National Commission for Allied and Healthcare Professions (NCAHP) registration.",
      mandatoryRequirements: [
        "10+2 with Physics, Chemistry, and Biology (PCB).",
        "Graduation completed prior to joining industrial quality control or clinical diagnostic labs."
      ],
      preferredQualifications: [
        "Experience in pharmaceutical microbiological testing: Sterility Testing, Bioburden Testing, and Endotoxin (LAL) Testing.",
        "Understanding of US FDA / WHO-GMP cleanroom standards (ISO 14644 Class A/B/C/D cleanrooms)."
      ],
      eligibilityCriteria: "Pharma, food processing, and environmental laboratories evaluate microbial culturing, colony identification, environmental monitoring, and antimicrobial susceptibility testing.",
      regulatoryNotes: "Pharmaceutical microbiology follows statutory standards outlined in the Indian Pharmacopoeia (IP) and US Pharmacopeia (USP)."
    },
    roadmap: {
      title: "Microbiologist Job-Preparation Roadmap",
      description: "Practical curriculum covering aseptic microbial culturing, biochemical identification, pharmaceutical sterility testing, LAL endotoxin assays, and cleanroom monitoring.",
      totalDurationMonths: 3,
      totalDurationFormatted: "3 months",
      steps: [
        {
          stepNumber: 1,
          title: "Microbial Isolation, Staining & Biochemical Identification",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master aseptic streak plating, differential media (MacConkey, Blood Agar, EMB), Gram staining, and IMViC biochemical tests.",
          tasks: [
            "Perform serial dilution and pour/spread plating for Total Viable Count (TVC) enumeration",
            "Execute Gram staining and endospore staining identifying bacterial morphologies under 100x oil immersion microscopy",
            "Identify enteric pathogens using standard IMViC series (Indole, Methyl Red, Voges-Proskauer, Citrate) and catalase/oxidase assays"
          ],
          milestone: "Isolate and identify 10 distinct pure bacterial cultures using differential media and biochemical tests.",
          prerequisites: ["Basic microbiological theory and biosafety literacy"],
          resources: [
            { title: "American Society for Microbiology (ASM) Protocols", url: "https://asm.org/", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Pharmaceutical QC Testing (Sterility & LAL Endotoxin)",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Perform pharmacopoeial quality control: Membrane filtration sterility testing, Bioburden analysis, and Limulus Amebocyte Lysate (LAL) testing.",
          tasks: [
            "Conduct membrane filtration sterility testing on injectable drug samples inside a laminar airflow cabinet",
            "Perform Bacterial Endotoxin Testing (BET) using the gel-clot LAL assay method following Indian Pharmacopoeia norms",
            "Perform Antimicrobial Susceptibility Testing (AST) using Kirby-Bauer disc diffusion measuring zones of inhibition"
          ],
          milestone: "Execute validated sterility test and LAL gel-clot assay on pharmaceutical product batches.",
          prerequisites: ["Step 1: Microbial Isolation, Staining & Biochemical Identification"],
          resources: [
            { title: "Indian Pharmacopoeia (IP) Microbiology Chapters", url: "https://www.ipc.gov.in/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Cleanroom Environmental Monitoring & Job Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Perform cleanroom environmental monitoring (settle plates, air samplers, contact plates), audit data integrity, and apply for roles.",
          tasks: [
            "Conduct active air sampling and settle plate environmental monitoring across ISO Class 5 to Class 8 cleanrooms",
            "Investigate and document Out of Specification (OOS) microbial limit test deviations following ALCOA+ data integrity guidelines",
            "Apply to 25+ quality control microbiologist, QC analyst, and lab technician roles across pharmaceutical and food manufacturing firms"
          ],
          milestone: "Pass 5 mock technical microbiology quality control interviews and submit job applications.",
          prerequisites: ["Step 2: Pharmaceutical QC Testing"],
          resources: [
            { title: "US FDA Pharmaceutical Microbiology Guidelines", url: "https://www.fda.gov/drugs", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'public-health-specialist': {
    educationQualification: {
      minimumQualification: "Master of Public Health (MPH) following a Bachelor's degree in Medicine (MBBS), Dentistry (BDS), Nursing, Pharmacy, or Allied Health Sciences.",
      preferredDegree: "Master of Public Health (MPH) from a premier institution (AIIMS, TISS, IIPH, JIPMER).",
      requiredProfessionalDegreeOrLicense: "Original professional medical/nursing/dental council registration maintained if providing clinical community health care.",
      mandatoryRequirements: [
        "Bachelor's degree in medicine, dental surgery, nursing, pharmacy, or social sciences with minimum 50% marks.",
        "Successful completion of 2-year Master of Public Health curriculum."
      ],
      preferredQualifications: [
        "Hands-on proficiency in epidemiological data analysis software (R, Stata, or SPSS).",
        "Experience in public health surveillance, outbreak investigation, or health program evaluation (National Health Mission)."
      ],
      eligibilityCriteria: "Public health agencies (WHO Country Office, UNICEF India, ICMR, NHM, State Health Departments) evaluate epidemiological study design, biostatistics, health economics, and policy implementation.",
      regulatoryNotes: "Recruitment criteria depend on the sponsoring agency (bilateral donor, NGO, or state public health department)."
    },
    roadmap: {
      title: "Public Health Specialist Job-Preparation Roadmap",
      description: "Practical curriculum covering epidemiological study design, biostatistical data analysis in R, disease outbreak surveillance, and health program management.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Epidemiological Study Design & Outbreak Investigation",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master core epidemiology: cohort, case-control, cross-sectional studies, disease outbreak investigation steps, and epidemic curve analysis.",
          tasks: [
            "Calculate epidemiological measures: incidence rate, prevalence, Relative Risk (RR), Odds Ratio (OR), and Attributable Risk",
            "Map epidemic curves identifying point-source vs propagated disease transmission during simulated outbreak scenarios",
            "Design an epidemiological case-control study protocol investigating food-borne or vector-borne disease clusters"
          ],
          milestone: "Produce an outbreak investigation protocol and field epidemiology questionnaire for an acute disease cluster.",
          prerequisites: ["Basic public health and statistics concepts"],
          resources: [
            { title: "CDC Principles of Epidemiology Online Textbook", url: "https://www.cdc.gov/csels/dsepd/ss1978/index.html", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Biostatistical Analysis in R / Epi Info",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Analyze large-scale population health datasets (NFHS, NSSO, HMIS) using R or CDC Epi Info: logistic regression and survival analysis.",
          tasks: [
            "Clean and analyze National Family Health Survey (NFHS-5) microdata evaluating maternal and child health indicators in R",
            "Run multivariable logistic regression models identifying demographic determinants of immunization dropouts",
            "Generate choropleth map visualizations displaying district-level disease prevalence across Indian states"
          ],
          milestone: "Deliver a published statistical analysis report evaluating demographic determinants of health in an Indian state.",
          prerequisites: ["Step 1: Epidemiological Study Design & Outbreak Investigation"],
          resources: [
            { title: "CDC Epi Info Software & Guides", url: "https://www.cdc.gov/epiinfo/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "National Health Programs (NHM) & Monitoring Frameworks",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Review Indian public health architecture: National Health Mission (NHM), Ayushman Bharat (PM-JAY, Health & Wellness Centers), and RCH-II.",
          tasks: [
            "Develop a logical framework matrix (LogFrame) with measurable indicators for an urban primary healthcare intervention",
            "Monitor Health Management Information System (HMIS) dashboards identifying gaps in institutional delivery coverage",
            "Conduct cost-effectiveness analysis for an automated screening program in rural community health centers"
          ],
          milestone: "Author an end-to-end public health program intervention proposal with monitoring LogFrame and budget.",
          prerequisites: ["Step 2: Biostatistical Analysis in R / Epi Info"],
          resources: [
            { title: "National Health Systems Resource Centre (NHSRC)", url: "https://nhsrcindia.org/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Public Health Case Portfolio & Agency Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Assemble public health policy brief portfolio, prepare for consulting interviews, and apply for public health roles.",
          tasks: [
            "Draft a 2-page evidence-based policy brief addressing non-communicable disease (hypertension/diabetes) management in primary care",
            "Review public health interview topics: health equity, vaccine hesitancy strategies, and emergency preparedness",
            "Apply to 20+ public health specialist, surveillance officer, and research consultant positions across WHO India, ICMR, and State Health Missions"
          ],
          milestone: "Pass 5 mock technical public health interviews and submit job applications.",
          prerequisites: ["Step 3: National Health Programs & Monitoring Frameworks"],
          resources: [
            { title: "WHO India Country Office Reports", url: "https://www.who.int/india", type: "official", isFree: true }
          ]
        }
      ]
    }
  }
};
