/**
 * Engineering Category Careers Audit Data (15 Careers)
 * Validated for Indian employment market, realistic compensation benchmarks,
 * eligible education pathways, and sequential roadmap milestones.
 */

const engineeringCareers = [
  {
    slug: 'mechanical-engineer',
    title: 'Mechanical Engineer',
    description: 'Designs, analyzes, manufactures, and maintains mechanical equipment, industrial machinery, heating/cooling systems, and manufacturing plants. Utilizes 3D CAD modeling, finite element analysis (FEA), and thermodynamic principles.',
    educationRequirements: 'B.Tech/B.E. in Mechanical Engineering via JEE Main or State Engineering CETs. Strong proficiency in 3D CAD (SolidWorks/AutoCAD), Ansys FEA simulations, thermodynamics, and manufacturing processes.',
    educationPathways: [
      'B.Tech / B.E. in Mechanical Engineering (4 years via JEE Main or State CETs)',
      'Diploma in Mechanical Engineering (3 years) with lateral entry to 2nd year B.Tech',
      'M.Tech in Machine Design / Thermal Engineering / Manufacturing (2 years via GATE ME)'
    ],
    eligibilityRequirements: '10+2 with Physics, Chemistry, and Mathematics (minimum 50-60% aggregate). Qualifying national or state engineering entrance exams (JEE Main, MHT-CET, KCET, WBJEE).',
    certificationsAndExams: [
      'GATE (Graduate Aptitude Test in Engineering - Mechanical)',
      'Certified SolidWorks Associate / Professional (CSWA/CSWP)',
      'Ansys Certified Mechanical Simulation Specialist'
    ],
    workEnvironment: 'Manufacturing plants, automotive design centers, power generation stations, heavy engineering workshops, and CAD offices in Pune, Chennai, NCR, Ahmedabad, and Bengaluru.',
    marketDemand: 'Moderate',
    jobOutlook: 'Steady long-term demand driven by industrial automation, defense manufacturing indigenization (Make in India), and automotive component manufacturing.',
    salaryRange: { min: 320000, max: 1350000, currency: 'INR', source: 'AmbitionBox Mechanical Engineer Compensation 2024, PayScale India' },
    salarySource: 'AmbitionBox Mechanical Engineer Compensation 2024, PayScale India',
    salaryByExperience: {
      entryLevel: { min: 320000, max: 550000, label: 'Graduate Engineer Trainee (0–2 yrs)' },
      earlyCareer: { min: 550000, max: 1000000, label: 'Mechanical Engineer (3–5 yrs)' },
      experienced: { min: 1000000, max: 1800000, label: 'Senior / Lead Engineer (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Public Sector Undertaking (PSU) recruitment through GATE (BHEL, IOCL, ONGC, NTPC) offers starting pay packages of ₹12–18 LPA (Executive Trainee scales).'
    },
    careerProgression: [
      'Graduate Engineer Trainee (GET)',
      'Assistant Design / Plant Maintenance Engineer',
      'Senior Mechanical Engineer / Project Lead',
      'Plant Manager / Chief Engineering Officer',
      'Vice President of Manufacturing & Operations'
    ],
    employmentSectors: {
      government: 'Public Sector Undertakings (BHEL, IOCL, ONGC, NTPC, SAIL via GATE ME), Indian Railways (IRMS / RRB SSE), Defence Research & Development Organisation (DRDO)',
      privateSector: 'Automotive OEMs (Tata Motors, Mahindra, Maruti Suzuki), Heavy Engineering (L&T, Godrej), Industrial HVAC (Voltas, Daikin), Engineering Consultancies'
    },
    timelineOverview: {
      totalEstimatedDuration: '4 Years (B.Tech Degree) + 3–6 Months placement / GATE preparation',
      educationDuration: '4 Years (8 Semesters)',
      prepDuration: '6–12 Months concurrent GATE ME or CAD software specialization',
      practicalTrainingDuration: '2–4 Months mandatory industrial training / workshop internship',
      jobSearchDuration: '3–6 Months campus placement or PSU recruitment cycles',
      overlapNotes: 'Industrial internships and CAD tool certifications are completed during semester summer vacations.',
      confidenceNote: 'PSU recruitment requires achieving a top 200-300 All India Rank in GATE Mechanical.'
    },
    sources: [
      { title: 'GATE Official Notification & Syllabi', url: 'https://gate.iitk.ac.in/', sourceAuthority: 'IIT / GATE Committee', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Mechanical Engineer Salary in India', url: 'https://www.ambitionbox.com/salaries/mechanical-engineer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Mechanical Engineer Career Roadmap',
      description: 'Engineering pathway: engineering mechanics, 3D CAD modeling, finite element analysis (FEA), manufacturing processes, and GATE/PSU examination readiness.',
      totalEstimatedDuration: '4 Years (Degree) + 6 Months Focused Prep',
      durationBreakdown: 'Core Engineering Science & Math: Years 1-2 | CAD/CAM & Machine Design: Year 3 | Industrial Internship & Major Project: Year 4 | GATE & PSU Competitive Preparation: 6-12 months',
      overlapNotes: 'GATE preparation runs parallel to 6th, 7th, and 8th semester academic coursework.',
      steps: [
        {
          stepNumber: 1,
          title: 'Engineering Mechanics, Thermodynamics & Strength of Materials',
          stageType: 'Formal Education',
          description: 'Master vector statics, dynamics, stress-strain tensors, Mohr circle, shear force and bending moment diagrams (SFD/BMD), and the laws of thermodynamics.',
          skillsToAcquire: ['Statics & Dynamics Calculations', 'SFD and BMD Analysis', 'Thermodynamic Cycles (Rankine, Otto, Diesel)', 'Fluid Mechanics & Navier-Stokes Basics'],
          activities: ['Perform laboratory tensile strength tests on mild steel specimens using Universal Testing Machine (UTM)', 'Solve 100+ classical engineering mechanics numerical problems'],
          estimatedTime: '12 months (Academic Years 1 & 2)',
          completionCriteria: 'Clear university examinations with solid foundational understanding of stress analysis and thermodynamic cycles.',
          dependencies: '10+2 with Physics and Mathematics.',
          resources: [
            { title: 'NPTEL Strength of Materials - IIT Madras', url: 'https://nptel.ac.in/courses/112106141', type: 'Course' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Computer-Aided Design (3D CAD) & Machine Design',
          stageType: 'Skill Acquisition',
          description: 'Master parametric 3D solid modeling in SolidWorks or Autodesk Inventor: parts modeling, assemblies, geometric dimensioning and tolerancing (GD&T), and design of shafts, gears, and bearings.',
          skillsToAcquire: ['Parametric 3D Solid Modeling (SolidWorks/CATIA)', 'GD&T Standards (ASME Y14.5)', 'Design of Machine Elements (Shafts, Gears, Fasteners)', 'Drafting 2D Manufacturing Drawings'],
          activities: ['Design an assembly of a reciprocating air compressor with 20+ components in SolidWorks', 'Apply GD&T symbols and tolerance stackup analysis to fabrication drawings'],
          estimatedTime: '6 months',
          completionCriteria: 'Clear the Certified SolidWorks Associate (CSWA) exam and produce complete production manufacturing blueprints.',
          dependencies: 'Engineering mechanics and drafting principles.',
          resources: [
            { title: 'SolidWorks Certification Guide', url: 'https://www.solidworks.com/certifications', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Finite Element Analysis (FEA) & CFD Simulation',
          stageType: 'Portfolio & Projects',
          description: 'Model structural stresses, thermal distributions, and fluid flows using Ansys Workbench: meshing, boundary conditions, static structural analysis, and CFD.',
          skillsToAcquire: ['FEA Meshing & Convergence Studies', 'Static Structural & Modal Analysis in Ansys', 'Thermal Stress Analysis', 'Computational Fluid Dynamics (CFD Basics)'],
          activities: ['Perform static stress simulation on an automotive brake rotor and optimize for heat dissipation', 'Document simulation results comparing numerical FEA against analytical hand calculations'],
          estimatedTime: '4 - 6 months',
          completionCriteria: 'Complete structural validation project in Ansys matching analytical benchmarks within a 5% margin.',
          dependencies: 'Machine design and strength of materials.',
          resources: [
            { title: 'Ansys Innovation Courses', url: 'https://innovationspace.ansys.com/courses/', type: 'Course' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Industrial Training, Major Project & GATE / PSU Preparation',
          stageType: 'Examination Preparation',
          description: 'Complete a mandatory 6-8 week factory internship, fabricate an engineering capstone project, solve previous years\' GATE ME questions, and prepare for interviews.',
          skillsToAcquire: ['Shop-floor Manufacturing Practices (CNC, Casting, Welding)', 'Root Cause Problem Solving (8D/Fishbone)', 'GATE ME Question Solving Under Timed Conditions', 'Technical PSU Interview Communication'],
          activities: ['Complete 8-week production internship at an automotive or heavy manufacturing unit', 'Solve 15 years of GATE Mechanical previous question papers'],
          estimatedTime: '6 - 12 months',
          completionCriteria: 'B.Tech degree award and achievement of competitive GATE ME rank or private sector campus placement.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'GATE Mechanical Syllabus & Papers', url: 'https://gate.iitk.ac.in/', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'civil-engineer',
    title: 'Civil Engineer',
    description: 'Plans, designs, supervises, and manages the construction and maintenance of building structures and public infrastructure including highways, bridges, tunnels, dams, airports, water supply, and sewage systems.',
    educationRequirements: 'B.Tech/B.E. in Civil Engineering via JEE Main or State CETs. Strong foundation in structural analysis, soil mechanics, concrete technology, AutoCAD, and STAAD.Pro.',
    educationPathways: [
      'B.Tech / B.E. in Civil Engineering (4 years via JEE Main / State CETs)',
      'Diploma in Civil Engineering (3 years) with lateral entry to B.Tech',
      'M.Tech in Structural Engineering / Construction Management (2 years via GATE CE)'
    ],
    eligibilityRequirements: '10+2 with PCM (50-60% marks). State Public Works Departments (PWD) and Central Public Works Department (CPWD) require clearing AE/JE exams or GATE.',
    certificationsAndExams: [
      'GATE (Graduate Aptitude Test in Engineering - Civil)',
      'AutoCAD Certified Professional (Civil)',
      'Bentley Certified STAAD.Pro Associate'
    ],
    workEnvironment: 'Construction site project offices, structural design studios, municipal infrastructure departments, and consulting firms; significant on-site field presence.',
    marketDemand: 'Moderate',
    jobOutlook: 'Strong infrastructure hiring driven by national megaprojects (Bharatmala, PM GatiShakti, High-Speed Bullet Train corridors, Smart Cities, and urban metro rail expansions).',
    salaryRange: { min: 300000, max: 1250000, currency: 'INR', source: 'AmbitionBox Civil Engineer Compensation 2024, Glassdoor India' },
    salarySource: 'AmbitionBox Civil Engineer Compensation 2024, Glassdoor India',
    salaryByExperience: {
      entryLevel: { min: 300000, max: 500000, label: 'Junior / Site Engineer (0–2 yrs)' },
      earlyCareer: { min: 500000, max: 950000, label: 'Civil / Project Engineer (3–5 yrs)' },
      experienced: { min: 950000, max: 1700000, label: 'Project Manager / Structural Lead (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'PSUs (NHAI, NBCC, NTPC, EIL) recruit through GATE with starting CTC of ₹12–16 LPA; site execution roles include site allowances and on-site lodging.'
    },
    careerProgression: [
      'Site Engineer / Junior Engineer (JE)',
      'Assistant Project Manager / Structural Design Engineer',
      'Project Manager / Resident Engineer',
      'Chief Project Director / General Manager (Infrastructure)',
      'Vice President of Construction & Infrastructure'
    ],
    employmentSectors: {
      government: 'Central Public Works Department (CPWD), State PWDs, National Highways Authority of India (NHAI), Indian Railways (IRSE), Border Roads Organisation (BRO)',
      privateSector: 'Infrastructure Conglomerates (L&T Construction, Afcons, Shapoorji Pallonji, Tata Projects), Real Estate Developers (DLF, Godrej Properties), Design Consultancies'
    },
    timelineOverview: {
      totalEstimatedDuration: '4 Years (Degree) + 3–6 Months site placement / GATE preparation',
      educationDuration: '4 Years (B.Tech in Civil Engineering)',
      prepDuration: '6–12 Months GATE CE or State AE/JE exam preparation',
      practicalTrainingDuration: '2–4 Months mandatory site training at a live construction project',
      jobSearchDuration: '3–6 Months campus placement or government recruitment drives',
      overlapNotes: 'AutoCAD and surveying field labs are integrated into 2nd and 3rd academic years.',
      confidenceNote: 'Private construction firms prioritize hands-on site management, bar bending schedules (BBS), and contractor billing over pure theoretical knowledge.'
    },
    sources: [
      { title: 'Central Public Works Department (CPWD) Guidelines', url: 'https://cpwd.gov.in/', sourceAuthority: 'Ministry of Housing and Urban Affairs', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Civil Engineer Salary in India', url: 'https://www.ambitionbox.com/salaries/civil-engineer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Civil Engineer Career Roadmap',
      description: 'Progressive civil engineering curriculum: surveying, fluid mechanics, soil mechanics, reinforced concrete design (IS 456), structural modeling (STAAD.Pro), and project management.',
      totalEstimatedDuration: '4 Years (Degree) + 6 Months Focused Prep',
      durationBreakdown: 'Surveying & Structural Mechanics: Years 1-2 | Concrete Tech & Soil Mechanics: Year 3 | Structural Software (STAAD.Pro) & Site Training: Year 4 | GATE/AE/JE Recruitment: 6-12 months',
      overlapNotes: 'Field surveying and structural software practice are integrated into university curriculum.',
      steps: [
        {
          stepNumber: 1,
          title: 'Surveying, Engineering Geology & Structural Mechanics',
          stageType: 'Formal Education',
          description: 'Master leveling, Total Station instrument operations, GIS basics, force equilibrium, deflection of beams, and moment distribution methods.',
          skillsToAcquire: ['Total Station & GPS Surveying', 'Deflection & Slope Calculations in Beams', 'Moment Distribution Method', 'Contour Mapping & Volume Calculations'],
          activities: ['Conduct an open-field traverse survey using a digital Total Station', 'Plot topographical contour maps and calculate cut-and-fill earthwork volumes'],
          estimatedTime: '12 months (Academic Years 1 & 2)',
          completionCriteria: 'Accurate contour surveys and verified bending moment calculations for indeterminate frames.',
          dependencies: '10+2 with Physics and Mathematics.',
          resources: [
            { title: 'NPTEL Surveying - IIT Roorkee', url: 'https://nptel.ac.in/courses/105107122', type: 'Course' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Concrete Technology, Geotechnical Engineering & IS Codes',
          stageType: 'Formal Education',
          description: 'Master concrete mix design (IS 10262), compressive strength testing, soil shear strength, foundation bearing capacity, and Indian Standard design code IS 456:2000.',
          skillsToAcquire: ['Concrete Mix Design (M25/M30 as per IS 10262)', 'Soil Direct Shear & Triaxial Testing', 'Terzaghi Bearing Capacity Formulas', 'Limit State Design of RCC Beams & Columns'],
          activities: ['Design an M30 concrete mix and verify 28-day compressive strength on concrete cubes in lab', 'Calculate the safe bearing capacity for an isolated column footing in clayey soil'],
          estimatedTime: '12 months (Academic Year 3)',
          completionCriteria: 'Standard compliant concrete mix batching and foundation design calculations matching IS code criteria.',
          dependencies: 'Structural mechanics and geology.',
          resources: [
            { title: 'Bureau of Indian Standards - IS 456:2000', url: 'https://www.standardsbis.in/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Structural Design Software (STAAD.Pro / ETABS) & Estimation',
          stageType: 'Skill Acquisition',
          description: 'Model multi-story RCC buildings in STAAD.Pro or ETABS: assign dead/live/wind/seismic loads (IS 1893), analyze bending moments, and prepare Bar Bending Schedules (BBS).',
          skillsToAcquire: ['Structural Modeling in STAAD.Pro / ETABS', 'Seismic Analysis as per IS 1893:2016', 'Bar Bending Schedule (BBS) Preparation', 'Quantity Surveying & Rate Analysis'],
          activities: ['Model and design a G+4 residential building frame in STAAD.Pro subject to seismic zone III loads', 'Prepare an itemized cost estimate and material takeoff for civil construction works'],
          estimatedTime: '6 months',
          completionCriteria: 'Complete structural design output and verified reinforcement detailing drawings in AutoCAD.',
          dependencies: 'Concrete design and structural analysis.',
          resources: [
            { title: 'Bentley STAAD.Pro Learning Pathways', url: 'https://www.bentley.com/software/staad/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'On-Site Construction Training & Competitive Exam Prep',
          stageType: 'Examination Preparation',
          description: 'Complete mandatory on-site internship: shuttering, rebar checking, concrete pouring, contractor billing, and prepare for GATE CE or State PWD AE/JE examinations.',
          skillsToAcquire: ['Site Quality Control & Slump Testing', 'Formwork & Shuttering Inspection', 'Preparation of Running Account (RA) Bills', 'GATE Civil Engineering Competitive Practice'],
          activities: ['Complete 8-week site internship on a high-rise or bridge construction project', 'Solve 15 years of GATE Civil Engineering previous years\' question papers'],
          estimatedTime: '6 - 12 months',
          completionCriteria: 'Successful graduation and qualification in GATE CE or appointment as Site/Junior Engineer.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'GATE Civil Engineering Portal', url: 'https://gate.iitk.ac.in/', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'electrical-engineer',
    title: 'Electrical Engineer',
    description: 'Designs, develops, tests, and oversees the installation of electrical systems, power generation equipment, high-voltage transmission lines, electric motors, and control systems for industrial and renewable energy facilities.',
    educationRequirements: 'B.Tech/B.E. in Electrical Engineering (EE) or Electrical & Electronics Engineering (EEE). Strong foundation in circuit theory, electrical machines, power systems, PLC/SCADA, and power electronics.',
    educationPathways: [
      'B.Tech / B.E. in Electrical Engineering (4 years via JEE / State CETs)',
      'Diploma in Electrical Engineering (3 years) with lateral entry to B.Tech',
      'M.Tech in Power Systems / Power Electronics (2 years via GATE EE)'
    ],
    eligibilityRequirements: '10+2 with Physics, Chemistry, and Mathematics (50-60% marks). State electricity boards and central PSUs require clearing GATE or state engineering recruitment exams.',
    certificationsAndExams: [
      'GATE (Graduate Aptitude Test in Engineering - Electrical)',
      'Certified Energy Manager / Energy Auditor (BEE - Bureau of Energy Efficiency)',
      'Schneider Electric / Siemens PLC Automation Certification'
    ],
    workEnvironment: 'Thermal/hydro power stations, electrical substations, industrial manufacturing plants, metro rail traction facilities, and consulting offices in Bengaluru, Pune, Vadodara, and NCR.',
    marketDemand: 'Moderate',
    jobOutlook: 'Strong hiring fueled by national grid modernization (One Nation One Grid), smart meter rollouts, electric vehicle charging infrastructure, and green hydrogen power systems.',
    salaryRange: { min: 340000, max: 1400000, currency: 'INR', source: 'AmbitionBox Electrical Engineer Salaries India, PayScale' },
    salarySource: 'AmbitionBox Electrical Engineer Salaries India, PayScale',
    salaryByExperience: {
      entryLevel: { min: 340000, max: 580000, label: 'Graduate Trainee Engineer (0–2 yrs)' },
      earlyCareer: { min: 580000, max: 1050000, label: 'Electrical Engineer (3–5 yrs)' },
      experienced: { min: 1050000, max: 1850000, label: 'Senior Electrical Manager (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Power sector PSUs (Power Grid Corporation of India - PGCIL, NTPC, BHEL) offer starting packages of ₹12–18 LPA for top GATE EE scorers.'
    },
    careerProgression: [
      'Graduate Engineer Trainee (GET) - Electrical',
      'Assistant Electrical Engineer / Substation Engineer',
      'Senior Electrical Engineer / Project Lead',
      'Chief Electrical Engineer / General Manager (Power)',
      'Vice President of Engineering & Infrastructure'
    ],
    employmentSectors: {
      government: 'Power Grid Corporation of India (PGCIL), NTPC, BHEL, State Electricity Transmission & Distribution Utilities (DISCOMs), Indian Railways (Electrical Traction)',
      privateSector: 'Heavy Electrical MNCs (ABB India, Siemens, Schneider Electric, Larsen & Toubro Power), Solar & Wind Energy EPCs, Industrial Manufacturers'
    },
    timelineOverview: {
      totalEstimatedDuration: '4 Years (Degree) + 3–6 Months industry placement / GATE preparation',
      educationDuration: '4 Years (B.Tech in EE / EEE)',
      prepDuration: '6–12 Months GATE EE or State Electricity Board AE/JE prep',
      practicalTrainingDuration: '2–4 Months substation or thermal power plant industrial training',
      jobSearchDuration: '3–6 Months campus placement or PSU recruitment exams',
      overlapNotes: 'MATLAB simulations and electrical laboratory sessions run parallel to academic terms.',
      confidenceNote: 'Securing positions in premier power PSUs (PGCIL, NTPC) requires securing a top 200 rank in GATE Electrical.'
    },
    sources: [
      { title: 'Central Electricity Authority (CEA) Technical Standards', url: 'https://cea.nic.in/', sourceAuthority: 'Ministry of Power Government of India', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Electrical Engineer Salary in India', url: 'https://www.ambitionbox.com/salaries/electrical-engineer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Electrical Engineer Career Roadmap',
      description: 'Comprehensive electrical engineering curriculum: network analysis, electromagnetic fields, electrical machines, power transmission systems, power electronics, and industrial automation.',
      totalEstimatedDuration: '4 Years (Degree) + 6 Months Focused Prep',
      durationBreakdown: 'Circuit Theory & Electromagnetic Fields: Years 1-2 | Electrical Machines & Power Systems: Year 3 | Power Electronics, PLC Automation & Substation Training: Year 4 | GATE EE & PSU Prep: 6-12 months',
      overlapNotes: 'Laboratory testing of transformers, motors, and transmission lines is completed during university semesters.',
      steps: [
        {
          stepNumber: 1,
          title: 'Network Analysis, Circuit Theorems & Signals',
          stageType: 'Formal Education',
          description: 'Master mesh/nodal analysis, Thevenin/Norton theorems, transient response of RLC circuits, three-phase AC power calculations, and Laplace transform circuit analysis.',
          skillsToAcquire: ['Three-Phase AC Power Calculations', 'Thevenin & Maximum Power Theorems', 'Transient Response of RLC Circuits', 'Laplace Domain Network Analysis'],
          activities: ['Perform laboratory experiments validating maximum power transfer and resonance in RLC circuits', 'Simulate three-phase unbalanced star-delta circuits in MATLAB/Simulink'],
          estimatedTime: '12 months (Academic Years 1 & 2)',
          completionCriteria: 'Accurate steady-state and transient calculations for complex linear electrical networks.',
          dependencies: '10+2 with Physics and Mathematics.',
          resources: [
            { title: 'NPTEL Basic Electrical Technology - IIT Kharagpur', url: 'https://nptel.ac.in/courses/108105053', type: 'Course' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Electrical Machines: Transformers, Induction & Synchronous Motors',
          stageType: 'Formal Education',
          description: 'Study electromagnetic induction, open-circuit/short-circuit tests on transformers, torque-slip characteristics of 3-phase induction motors, and synchronous alternators.',
          skillsToAcquire: ['Transformer Equivalent Circuit Testing', 'Induction Motor Speed & Torque Control', 'Synchronous Generator V-Curves & Synchronization', 'DC Machine Armature Reaction & Starters'],
          activities: ['Conduct OC and SC tests on a 5kVA transformer to compute efficiency and voltage regulation', 'Synchronize a 3-phase alternator to the laboratory bus bar using the bright-lamp method'],
          estimatedTime: '12 months (Academic Year 3)',
          completionCriteria: 'Complete experimental characterization of transformers and rotary electrical machines.',
          dependencies: 'Circuit analysis and electromagnetic theory.',
          resources: [
            { title: 'Electric Machinery - A.E. Fitzgerald & Kingsley', url: 'https://www.mheducation.com/', type: 'Book' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Power Systems, Transmission & Power Electronics',
          stageType: 'Skill Acquisition',
          description: 'Analyze transmission line models (ABCD parameters), fault analysis (symmetrical components), protective relays, circuit breakers, and power converters (inverters, rectifiers).',
          skillsToAcquire: ['Load Flow Analysis (Gauss-Seidel / Newton-Raphson)', 'Symmetrical Fault Calculations', 'Protective Relay Coordination', 'Thyristor & IGBT Inverter Circuits'],
          activities: ['Model a 5-bus electrical grid transmission network in MATLAB/Simulink and calculate fault currents', 'Design and test an H-bridge inverter circuit for single-phase motor speed control'],
          estimatedTime: '6 months',
          completionCriteria: 'Verified fault current calculation and protective coordination design in MATLAB/Simulink.',
          dependencies: 'Electrical machines and network analysis.',
          resources: [
            { title: 'Power System Engineering - Nagrath & Kothari', url: 'https://www.mheducation.co.in/', type: 'Book' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Substation Internship, PLC/SCADA & GATE EE Preparation',
          stageType: 'Examination Preparation',
          description: 'Complete an internship at a 132kV/220kV electrical substation, learn basic PLC ladder logic (Siemens/Allen-Bradley), and solve 15 years of GATE Electrical papers.',
          skillsToAcquire: ['Substation Single Line Diagrams (SLD)', 'Switchyard Isolators & SF6 Circuit Breakers', 'PLC Ladder Logic Automation', 'GATE EE Timed Problem Solving'],
          activities: ['Complete a 6-week industrial training at an electrical substation or manufacturing plant', 'Solve previous 15 years GATE Electrical papers and appear for mock test series'],
          estimatedTime: '6 - 12 months',
          completionCriteria: 'Graduation with B.Tech degree and achievement of competitive GATE EE rank or PSU selection.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'GATE Electrical Engineering Syllabus & Papers', url: 'https://gate.iitk.ac.in/', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'electronics-engineer',
    title: 'Electronics Engineer',
    description: 'Designs, manufactures, and tests electronic circuits, printed circuit boards (PCBs), consumer devices, digital signal processing hardware, and telecommunication equipment using semiconductors and microcontrollers.',
    educationRequirements: 'B.Tech/B.E. in Electronics & Communication Engineering (ECE) or Electronics Engineering. Strong skills in analog/digital circuit design, PCB layout (Altium/KiCAD), microcontrollers, and signal processing.',
    educationPathways: [
      'B.Tech / B.E. in Electronics & Communication Engineering (4 years via JEE / State CETs)',
      'Diploma in Electronics Engineering (3 years) with lateral entry to B.Tech',
      'M.Tech in VLSI, Embedded Systems, or Signal Processing (2 years via GATE EC)'
    ],
    eligibilityRequirements: '10+2 with Physics, Mathematics, and Chemistry (50-60% aggregate). Qualifying engineering entrance exams.',
    certificationsAndExams: [
      'GATE (Graduate Aptitude Test in Engineering - Electronics & Communication)',
      'IPC Certified PCB Designer (IPC-A-610)',
      'Certified LabVIEW Associate Developer (CLAD)'
    ],
    workEnvironment: 'Hardware design laboratories, consumer electronics factories, defense electronics R&D units, and telecom equipment firms in Bengaluru, Hyderabad, Noida, and Chennai.',
    marketDemand: 'High',
    jobOutlook: 'Surging demand propelled by the Government of India Semiconductor Mission, mobile phone manufacturing expansion, 5G telecom hardware, and defense electronics.',
    salaryRange: { min: 360000, max: 1500000, currency: 'INR', source: 'AmbitionBox Electronics Engineer Salaries India, PayScale' },
    salarySource: 'AmbitionBox Electronics Engineer Salaries India, PayScale',
    salaryByExperience: {
      entryLevel: { min: 360000, max: 620000, label: 'Graduate Engineer Trainee (0–2 yrs)' },
      earlyCareer: { min: 620000, max: 1150000, label: 'Electronics Engineer (3–5 yrs)' },
      experienced: { min: 1150000, max: 2000000, label: 'Senior Hardware Lead (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Electronics engineers working on high-speed digital design, RF design, and defense systems (BEL, DRDO) receive competitive packages.'
    },
    careerProgression: [
      'Junior Hardware / Electronics Engineer',
      'Electronics Design Engineer (Analog / Digital)',
      'Senior Hardware Engineer / PCB Lead',
      'Principal Hardware Architect',
      'Vice President of Hardware Engineering'
    ],
    employmentSectors: {
      government: 'Bharat Electronics Limited (BEL), Defence Research & Development Organisation (DRDO), Indian Space Research Organisation (ISRO), Centre for Development of Telematics (C-DOT)',
      privateSector: 'Global Tech Hardware (Samsung R&D, Texas Instruments, Qualcomm), Electronics Manufacturing Services (Foxconn, Dixon Technologies), Defense Private Tier-1s'
    },
    timelineOverview: {
      totalEstimatedDuration: '4 Years (Degree) + 3–6 Months hardware prototyping / GATE preparation',
      educationDuration: '4 Years (B.Tech in ECE)',
      prepDuration: '6–12 Months GATE EC or hardware prototyping specialization',
      practicalTrainingDuration: '2–4 Months electronics design laboratory or assembly plant internship',
      jobSearchDuration: '3–6 Months campus hardware recruitment drives',
      overlapNotes: 'PCB design in KiCAD and microcontroller programming are practiced during semester breaks.',
      confidenceNote: 'Possessing a physical portfolio of custom designed and soldered working PCBs is the top hiring signal for hardware engineering roles.'
    },
    sources: [
      { title: 'India Semiconductor Mission (ISM)', url: 'https://ism.gov.in/', sourceAuthority: 'Ministry of Electronics and Information Technology', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Electronics Engineer Salary in India', url: 'https://www.ambitionbox.com/salaries/electronics-engineer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Electronics Engineer Career Roadmap',
      description: 'Progressive electronics curriculum: analog electronics (op-amps, transistors), digital logic design, schematic capture, multi-layer PCB layout (KiCad/Altium), and hardware testing.',
      totalEstimatedDuration: '4 Years (Degree) + 6 Months Focused Prep',
      durationBreakdown: 'Analog & Digital Electronics Foundations: Years 1-2 | Microcontrollers & Signal Processing: Year 3 | Multilayer PCB Design & Prototyping: Year 4 | GATE EC & Hardware Recruitment: 6-12 months',
      overlapNotes: 'Hands-on breadboard and soldering laboratory projects run concurrently with theory.',
      steps: [
        {
          stepNumber: 1,
          title: 'Analog Circuit Design, Diodes & Operational Amplifiers',
          stageType: 'Formal Education',
          description: 'Master semiconductor physics (PN junctions, MOSFETs, BJTs), small-signal amplifier models, operational amplifier circuits (inverting, non-inverting, filters), and SPICE simulation.',
          skillsToAcquire: ['BJT and MOSFET Biasing & Amplifiers', 'Op-Amp Filter & Comparator Circuits', 'SPICE Circuit Simulation (LTspice)', 'Oscilloscope & Function Generator Testing'],
          activities: ['Simulate active bandpass filter and amplifier circuits in LTspice', 'Build and measure frequency response on breadboard using an oscilloscope'],
          estimatedTime: '12 months (Academic Years 1 & 2)',
          completionCriteria: 'Physical analog circuit constructed on breadboard matching LTspice simulated frequency response.',
          dependencies: '10+2 with Physics and Mathematics.',
          resources: [
            { title: 'LTspice Official Simulation Software', url: 'https://www.analog.com/en/resources/design-tools-and-calculators/ltspice-simulator.html', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Digital Electronics, Boolean Logic & Microprocessors',
          stageType: 'Formal Education',
          description: 'Master Boolean algebra, Karnaugh maps, combinational logic (multiplexers, decoders), sequential circuits (flip-flops, state machines), and microprocessor architectures (8086/ARM).',
          skillsToAcquire: ['K-Map Logic Minimization', 'Finite State Machine (FSM) Design', 'Combinational & Sequential Circuits', 'Microcontroller Interfacing Basics'],
          activities: ['Design and construct a synchronous digital counter using flip-flops and logic gates on breadboard', 'Write assembly language code to interface LCD displays with a microprocessor'],
          estimatedTime: '12 months (Academic Year 3)',
          completionCriteria: 'Working digital hardware prototype verifying finite state machine transitions.',
          dependencies: 'Analog electronics fundamentals.',
          resources: [
            { title: 'Digital Design - M. Morris Mano', url: 'https://www.pearson.com/', type: 'Book' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Schematic Capture & Multilayer PCB Layout (KiCad / Altium)',
          stageType: 'Skill Acquisition',
          description: 'Design production-grade printed circuit boards: component selection, schematic capture, footprint creation, routing trace impedances, design rules checking, and Gerber export.',
          skillsToAcquire: ['Schematic Capture in KiCad / Altium', 'Component Footprint Design & IPC Standards', '2-Layer & 4-Layer PCB Routing', 'Design for Manufacturing (DFM) Rules'],
          activities: ['Design a complete 2-layer microcontroller development board with USB-C and voltage regulation in KiCad', 'Generate Gerber and drill files and order fabricated boards from an online PCB manufacturer'],
          estimatedTime: '6 months',
          completionCriteria: 'Custom fabricated physical PCB assembled with surface-mount components and tested for functionality.',
          dependencies: 'Analog and digital circuit design.',
          resources: [
            { title: 'KiCad Official Documentation & Tutorials', url: 'https://www.kicad.org/help/documentation/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Hardware Testing, Soldering & GATE / Industry Preparation',
          stageType: 'Examination Preparation',
          description: 'Master surface-mount soldering (SMD), hardware bring-up and debugging with logic analyzers, solve previous years\' GATE EC questions, and prepare for industry interviews.',
          skillsToAcquire: ['SMD Soldering & Rework Techniques', 'Hardware Bring-up & Fault Isolation', 'Signal Integrity & Noise Decoupling', 'GATE EC Competitive Preparation'],
          activities: ['Solder a 64-pin QFP microcontroller onto a custom PCB and bring up the firmware via JTAG/SWD', 'Solve previous 15 years GATE EC question papers'],
          estimatedTime: '6 - 12 months',
          completionCriteria: 'Working hardware capstone project and achievement of competitive GATE EC rank or semiconductor/hardware job offer.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'GATE Electronics & Communication Syllabus', url: 'https://gate.iitk.ac.in/', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'chemical-engineer',
    title: 'Chemical Engineer',
    description: 'Designs, scales, and optimizes industrial chemical processes that convert raw materials into valuable chemical products, petrochemicals, pharmaceuticals, polymers, fertilizers, and clean fuels.',
    educationRequirements: 'B.Tech/B.E. in Chemical Engineering via JEE Main or State CETs. Strong foundation in fluid flow, heat/mass transfer operations, chemical reaction engineering, and process simulation (Aspen Plus).',
    educationPathways: [
      'B.Tech / B.E. in Chemical Engineering (4 years via JEE Main / State CETs)',
      'Diploma in Chemical Engineering (3 years) with lateral entry to B.Tech',
      'M.Tech in Chemical Process Engineering (2 years via GATE CH)'
    ],
    eligibilityRequirements: '10+2 with Physics, Chemistry, and Mathematics (50-60% marks). Oil and petrochemical PSUs require clearing GATE Chemical.',
    certificationsAndExams: [
      'GATE (Graduate Aptitude Test in Engineering - Chemical)',
      'Aspen Plus Certified User (AspenTech)',
      'Process Safety Management (PSM / NEBOSH) Certification'
    ],
    workEnvironment: 'Petrochemical refineries, pharmaceutical active ingredient plants, chemical manufacturing complexes, fertilizer factories, and process simulation offices in Vadodara, Dahej, Jamnagar, Mumbai, and Visakhapatnam.',
    marketDemand: 'Moderate',
    jobOutlook: 'Strong steady demand fueled by India\'s growing petroleum refining hub status, specialty chemicals manufacturing boom, and pharmaceutical active pharmaceutical ingredient (API) production.',
    salaryRange: { min: 380000, max: 1600000, currency: 'INR', source: 'AmbitionBox Chemical Engineer Salaries India, PayScale' },
    salarySource: 'AmbitionBox Chemical Engineer Salaries India, PayScale',
    salaryByExperience: {
      entryLevel: { min: 380000, max: 650000, label: 'Graduate Trainee Engineer (0–2 yrs)' },
      earlyCareer: { min: 650000, max: 1150000, label: 'Chemical Process Engineer (3–5 yrs)' },
      experienced: { min: 1150000, max: 2100000, label: 'Senior Process Lead / Plant Manager (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Major Oil & Gas PSUs (IOCL, BPCL, HPCL, ONGC, GAIL) recruit through GATE Chemical with starting CTC packages of ₹14–18 LPA.'
    },
    careerProgression: [
      'Graduate Engineer Trainee (Process Operations)',
      'Chemical Process Engineer / Plant Operations Engineer',
      'Senior Process Engineer / Production Lead',
      'Plant Operations Manager / Technical Services Head',
      'Vice President of Manufacturing & Refining Operations'
    ],
    employmentSectors: {
      government: 'Indian Oil Corporation Limited (IOCL), Bharat Petroleum (BPCL), Hindustan Petroleum (HPCL), GAIL (India) Limited, Engineers India Limited (EIL)',
      privateSector: 'Petrochemical Giants (Reliance Industries Jamnagar, Nayara Energy), Specialty Chemicals (UPL, Pidilite, Aarti Industries), Pharmaceuticals (Dr. Reddy\'s, Sun Pharma)'
    },
    timelineOverview: {
      totalEstimatedDuration: '4 Years (Degree) + 3–6 Months plant placement / GATE preparation',
      educationDuration: '4 Years (B.Tech in Chemical Engineering)',
      prepDuration: '6–12 Months GATE CH or refinery recruitment preparation',
      practicalTrainingDuration: '2–4 Months industrial refinery or chemical plant internship',
      jobSearchDuration: '3–6 Months campus placement or PSU recruitment',
      overlapNotes: 'Process simulation in Aspen Plus and unit operation labs run parallel to course terms.',
      confidenceNote: 'Refinery and petrochemical operations require strong focus on Process Safety Management (PSM) and Hazard and Operability studies (HAZOP).'
    },
    sources: [
      { title: 'Indian Institute of Chemical Engineers (IIChE)', url: 'https://www.iiche.org.in/', sourceAuthority: 'IIChE', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Chemical Engineer Salary in India', url: 'https://www.ambitionbox.com/salaries/chemical-engineer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Chemical Engineer Career Roadmap',
      description: 'Comprehensive chemical process engineering pathway: mass and energy balances, fluid flow, heat exchangers, distillation column design, chemical reaction kinetics, and process simulation in Aspen Plus.',
      totalEstimatedDuration: '4 Years (Degree) + 6 Months Focused Prep',
      durationBreakdown: 'Material & Energy Balances: Years 1-2 | Heat & Mass Transfer Unit Operations: Year 3 | Reactor Design & Process Simulation (Aspen): Year 4 | GATE CH & Refinery Recruitment: 6-12 months',
      overlapNotes: 'Laboratory experiments in distillation and heat transfer reinforce mathematical models.',
      steps: [
        {
          stepNumber: 1,
          title: 'Material & Energy Balances & Chemical Thermodynamics',
          stageType: 'Formal Education',
          description: 'Master steady-state material balances with and without chemical reactions, recycle streams, purge calculations, energy balances (enthalpy, sensible heat), and phase equilibrium (VLE).',
          skillsToAcquire: ['Material Balances with Recycle & Purge', 'Energy Balances & Enthalpy of Reaction', 'Vapor-Liquid Equilibrium (Raoult Law)', 'Equation of State Calculations (Peng-Robinson)'],
          activities: ['Solve complete material and energy balance sheets for a theoretical ammonia synthesis loop', 'Calculate VLE bubble point and dew point curves for hydrocarbon binary mixtures'],
          estimatedTime: '12 months (Academic Years 1 & 2)',
          completionCriteria: 'Accurate material and energy balance flowsheets with zero unaccounted mass discrepancies.',
          dependencies: '10+2 with Chemistry, Physics, and Mathematics.',
          resources: [
            { title: 'NPTEL Chemical Process Calculations - IIT Madras', url: 'https://nptel.ac.in/courses/103106118', type: 'Course' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Heat Transfer & Mass Transfer Unit Operations',
          stageType: 'Formal Education',
          description: 'Design shell-and-tube heat exchangers, calculate log mean temperature difference (LMTD), design fractional distillation columns using McCabe-Thiele method, and absorption towers.',
          skillsToAcquire: ['Heat Exchanger Design (LMTD & Effectiveness-NTU)', 'Distillation Column Design (McCabe-Thiele Method)', 'Gas Absorption & Packed Tower Height (HTU/NTU)', 'Drying & Liquid-Liquid Extraction'],
          activities: ['Design a fractional distillation column separating a benzene-toluene mixture using McCabe-Thiele method', 'Perform heat exchanger overall heat transfer coefficient calculations in lab'],
          estimatedTime: '12 months (Academic Year 3)',
          completionCriteria: 'Detailed engineering specifications for a multi-stage distillation column and shell-and-tube exchanger.',
          dependencies: 'Material and energy balance fundamentals.',
          resources: [
            { title: 'Unit Operations of Chemical Engineering - McCabe & Smith', url: 'https://www.mheducation.com/', type: 'Book' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Chemical Reaction Engineering & Aspen Plus Simulation',
          stageType: 'Skill Acquisition',
          description: 'Design ideal chemical reactors: Batch, CSTR (Continuous Stirred Tank), and PFR (Plug Flow Reactor); analyze reaction kinetics, and simulate flowsheet plants using Aspen Plus.',
          skillsToAcquire: ['CSTR and PFR Sizing Calculations', 'Arrhenius Kinetics & Temperature Effects', 'Aspen Plus Steady-State Process Simulation', 'P&ID Diagram Reading & HAZOP Basics'],
          activities: ['Simulate a complete methanol production flowsheet in Aspen Plus with heat integration', 'Conduct a Hazard and Operability (HAZOP) analysis on a reactor feed manifold'],
          estimatedTime: '6 months',
          completionCriteria: 'Converged Aspen Plus process simulation flowsheet with complete mass and energy balance outputs.',
          dependencies: 'Thermodynamics and unit operations.',
          resources: [
            { title: 'Aspen Plus Official Training Modules', url: 'https://www.aspentech.com/en/products/engineering/aspen-plus', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Refinery Internship & GATE Chemical Engineering Prep',
          stageType: 'Examination Preparation',
          description: 'Complete mandatory industrial training at a petroleum refinery or chemical manufacturing facility, solve previous GATE CH questions, and prepare for PSU selection.',
          skillsToAcquire: ['Refinery Distillation (CDU/VDU) Operations', 'Process Safety Management (PSM) Standards', 'Instrumentation & Control Valves Tuning', 'GATE CH Competitive Problem Solving'],
          activities: ['Complete 6-8 week industrial internship at an oil refinery, fertilizer, or pharmaceutical manufacturing complex', 'Solve 15 years of GATE Chemical Engineering past papers under timed conditions'],
          estimatedTime: '6 - 12 months',
          completionCriteria: 'Graduation with Chemical Engineering degree and achievement of competitive GATE CH score or refinery placement.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'GATE Chemical Engineering Syllabus & Papers', url: 'https://gate.iitk.ac.in/', type: 'Documentation' }
          ]
        }
      ]
    }
  }
];

module.exports = engineeringCareers;
