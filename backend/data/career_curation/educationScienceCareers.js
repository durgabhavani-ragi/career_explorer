// Education & Scientific Research Careers (4 Careers)
// All roadmaps contain practical job preparation, 1-6 months per step, months only, zero degree milestones

module.exports = [
  {
    slug: 'teacher',
    title: 'School Teacher (PRT / TGT / PGT)',
    educationQualification: {
      minimumQualification: 'PRT: Higher Secondary (10+2) with 50% + D.El.Ed (Diploma in Elementary Education); TGT: Bachelor Degree in relevant subject with 50% + B.Ed; PGT: Master Degree in relevant subject with 50% + B.Ed',
      preferredDegree: 'Relevant subject-specific B.Ed / M.Ed or Post Graduate degree from an NCTE-recognized institution',
      requiredProfessionalDegreeOrLicense: 'NCTE-recognized Teacher Training Qualification (D.El.Ed / B.Ed) and CTET / State TET Certificate (for PRT & TGT levels)',
      mandatoryRequirements: [
        'Completion of NCTE-recognized teacher training diploma or degree (D.El.Ed for Primary / B.Ed for Trained Graduate / Post Graduate Teacher)',
        'Passing Central Teacher Eligibility Test (CTET Paper I for Classes 1–5 PRT, Paper II for Classes 6–8 TGT) or respective State TET',
        'Valid CTET certificate (lifetime validity under current NCTE guidelines)'
      ],
      preferredQualifications: [
        'Bilingual teaching proficiency (English & Hindi) required by central school organizations (KVS, NVS)',
        'Knowledge of NEP 2020 pedagogical reforms, experiential learning, and digital classroom tools (DIKSHA portal)'
      ],
      eligibilityCriteria: [
        'Age limits vary by recruitment authority (e.g. KVS PRT max 30 years, TGT max 35 years, PGT max 40 years, with category relaxations)',
        'Indian citizenship',
        'CTET is mandatory for Central Government schools (KVS, NVS, CBSE schools, CTSA) and recommended for private CBSE schools'
      ],
      regulatoryNotes: 'Teacher recruitment standards are statutorily regulated by the National Council for Teacher Education (NCTE) and respective recruitment bodies (KVS, NVS, DSSSB, State PSCs). Formal degree and B.Ed qualifications are mandatory statutory prerequisites that must be completed prior to job-specific recruitment examinations.'
    },
    roadmap: {
      totalDurationMonths: 6,
      totalDurationFormatted: '6 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Subject Knowledge & NCERT Syllabus Revision',
          durationMonths: 2,
          durationText: '2 months',
          category: 'fundamentals',
          description: 'Deep revision of NCERT textbooks and syllabus for target level (Classes 1–8 for PRT/TGT, Classes 9–12 for PGT).',
          tasks: [
            'Systematically review NCERT textbooks and curriculum learning outcomes for target subjects',
            'Create chapter-wise summary notes, concept maps, and formula sheets',
            'Align subject concepts with National Education Policy (NEP 2020) competency-based teaching requirements'
          ],
          milestone: 'Complete comprehensive subject-wise revision notes across all syllabus units',
          prerequisites: ['Subject graduation/post-graduation and baseline teaching training'],
          resources: [
            { title: 'NCERT Official Textbooks & Resources Portal', url: 'https://ncert.nic.in/textbook.php', type: 'official', isFree: true },
            { title: 'DIKSHA National Digital Infrastructure for Teachers', url: 'https://diksha.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Child Development & Pedagogy (CDP) Mastery',
          durationMonths: 1,
          durationText: '1 month',
          category: 'skills',
          description: 'Master educational psychology, theories of learning (Piaget, Vygotsky, Kohlberg), inclusive education, and classroom dynamics.',
          tasks: [
            'Study stages of child development, cognitive and moral developmental milestones',
            'Understand principles of inclusive classroom instruction, addressing learning disabilities (dyslexia, ADHD)',
            'Master assessment methods: formative vs summative evaluation and Continuous and Comprehensive Evaluation (CCE)'
          ],
          milestone: 'Score 85%+ on targeted Child Development and Pedagogy question bank assessments',
          prerequisites: ['D.El.Ed / B.Ed pedagogical coursework basics'],
          resources: [
            { title: 'NCTE (National Council for Teacher Education) Curriculum Guidelines', url: 'https://ncte.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'CTET (Paper I or Paper II) Preparation & Mock Tests',
          durationMonths: 1,
          durationText: '1 month',
          category: 'exam-prep',
          description: 'Targeted preparation for relevant CTET paper (Paper I for PRT or Paper II for TGT/Upper Primary) with previous year papers.',
          tasks: [
            'Solve the last 10 years of CTET question papers under timed examination conditions',
            'Identify recurring question patterns in language pedagogy, mathematics/science or social science pedagogy',
            'Analyze mistakes in mock tests and strengthen weak concept areas'
          ],
          milestone: 'Achieve consistent qualifying scores (>90/150 for General, >82/150 for Reserved) in full mock exams',
          prerequisites: ['Subject revision and CDP mastery'],
          resources: [
            { title: 'CTET Official Portal (CBSE)', url: 'https://ctet.nic.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'KVS / NVS / School Recruitment Preparation & Demo Class',
          durationMonths: 2,
          durationText: '2 months',
          category: 'interview-prep',
          description: 'Prepare for recruitment written exams (KVS, NVS, DSSSB, or private schools), micro-teaching demonstrations, and interviews.',
          tasks: [
            'Practice recruitment exam sections: General Awareness, Reasoning, Computer Literacy, and Teaching Methodology',
            'Design 3 innovative 15-minute micro-teaching lesson plans with teaching-learning materials (TLMs)',
            'Deliver recorded mock classroom lectures demonstrating engaging classroom presence and bilingual communication'
          ],
          milestone: 'Deliver 2 successful peer-reviewed classroom teaching demonstrations and complete mock interview panel',
          prerequisites: ['CTET qualification standards and subject lesson planning'],
          resources: [
            { title: 'Kendriya Vidyalaya Sangathan (KVS) Recruitment Portal', url: 'https://kvsangathan.nic.in/', type: 'official', isFree: true },
            { title: 'Navodaya Vidyalaya Samiti (NVS) Recruitment Portal', url: 'https://navodaya.gov.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'college-professor',
    title: 'Assistant Professor / College Lecturer',
    educationQualification: {
      minimumQualification: 'Master degree with minimum 55% marks (50% for SC/ST/OBC-NCL/PwD) in relevant subject from a recognized university',
      preferredDegree: 'Ph.D. in relevant discipline (Ph.D. is required for promotion to Associate Professor and direct recruitment to Central Universities)',
      requiredProfessionalDegreeOrLicense: 'Qualifying UGC-NET / CSIR-NET or State Eligibility Test (SET / SLET), or Ph.D. degree compliant with UGC Regulations 2018',
      mandatoryRequirements: [
        'Master degree with at least 55% marks in the concerned/relevant/allied subject',
        'National Eligibility Test (UGC-NET or CSIR-NET) qualification or Ph.D. degree awarded under UGC minimum standards regulations',
        'Fulfillment of UGC Regulations on Minimum Qualifications for Appointment of Teachers and Other Academic Staff in Universities and Colleges (2018)'
      ],
      preferredQualifications: [
        'Peer-reviewed research publications in UGC-CARE / Scopus / Web of Science indexed journals',
        'Conference presentations and teaching assistantship experience'
      ],
      eligibilityCriteria: [
        'Exemption from NET is granted only to candidates who have been awarded a Ph.D. degree in regular mode with evaluation by external examiners and at least 2 research papers published'
      ],
      regulatoryNotes: 'University and college appointments are strictly governed by University Grants Commission (UGC) regulations and individual university selection committee norms.'
    },
    roadmap: {
      totalDurationMonths: 6,
      totalDurationFormatted: '6 months',
      steps: [
        {
          stepNumber: 1,
          title: 'UGC-NET / CSIR-NET Paper 1 & Subject Syllabus Preparation',
          durationMonths: 2,
          durationText: '2 months',
          category: 'exam-prep',
          description: 'Comprehensive preparation for Paper 1 (General Teaching & Research Aptitude) and in-depth subject Paper 2.',
          tasks: [
            'Master Paper 1 units: Teaching Aptitude, Research Aptitude, Higher Education System, and Data Interpretation',
            'Conduct structured topic-wise revision of Master-level subject syllabus for Paper 2',
            'Solve previous 10 UGC-NET exam question papers and assess sectional time management'
          ],
          milestone: 'Score above 65% aggregate in full-length timed UGC-NET mock examinations',
          prerequisites: ['Master degree in target discipline'],
          resources: [
            { title: 'UGC-NET Official Examination Portal (NTA)', url: 'https://ugcnet.nta.nic.in/', type: 'official', isFree: true },
            { title: 'CSIR-HRDG Examination Portal for Science Subjects', url: 'https://csirhrdg.res.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Research Methodology, Writing & UGC-CARE Publication Strategy',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Strengthen academic research capabilities, write quality papers, and understand research ethics and plagiarism limits.',
          tasks: [
            'Draft an original research paper or review article following academic citation styles (APA, MLA, IEEE)',
            'Conduct literature surveys using Google Scholar, ResearchGate, and university digital libraries',
            'Submit manuscripts to reputable UGC-CARE listed or Scopus-indexed journals'
          ],
          milestone: 'Draft a complete research manuscript and receive journal submission acknowledgement',
          prerequisites: ['Subject expertise and analytical thinking'],
          resources: [
            { title: 'UGC-CARE Reference List of Quality Journals', url: 'https://ugccare.unipune.ac.in/', type: 'official', isFree: true },
            { title: 'INFLIBNET Centre - Higher Education Information Network', url: 'https://www.inflibnet.ac.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Academic Dossier, Demonstration Lecture & Selection Interview Prep',
          durationMonths: 2,
          durationText: '2 months',
          category: 'interview-prep',
          description: 'Calculate Academic Performance Indicator (API) score, prepare lecture demonstrations, and face university interview panels.',
          tasks: [
            'Prepare a standardized Academic Performance Indicator (API) / 100-point screening criteria dossier',
            'Design and rehearse 2 undergraduate lecture demonstrations with engaging instructional methods',
            'Practice defense of master/doctoral research thesis questions before mock academic panels'
          ],
          milestone: 'Deliver a 20-minute university-level demonstration lecture and submit completed API application dossier',
          prerequisites: ['NET qualification or Ph.D. degree'],
          resources: [
            { title: 'University Grants Commission (UGC) Regulations 2018', url: 'https://www.ugc.gov.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'instructional-designer',
    title: 'Instructional Designer',
    educationQualification: {
      minimumQualification: 'Bachelor degree in Education, English, Mass Communication, Psychology, Computer Applications, or any discipline',
      preferredDegree: 'Master in Educational Technology, Instructional Systems Design (ISD), or Cognitive Psychology',
      requiredProfessionalDegreeOrLicense: 'No statutory license required; mastery of learning theory frameworks and eLearning authoring software is evaluated',
      mandatoryRequirements: [
        'Recognized undergraduate degree with strong analytical, writing, and instructional structuring capabilities',
        'Demonstrated proficiency in eLearning authoring software (Articulate 360, Rise, Adobe Captivate)'
      ],
      preferredQualifications: [
        'ATD (Association for Talent Development) Instructional Design Certificate',
        'Experience with Learning Management Systems (Moodle, Canvas, Cornerstone, SAP Litmos)'
      ],
      eligibilityCriteria: [
        'Curriculum design capability, storyboarding skill, and adult learning theory understanding'
      ],
      regulatoryNotes: 'Instructional designers build corporate training modules, EdTech learning paths, and digital higher education courses.'
    },
    roadmap: {
      totalDurationMonths: 5,
      totalDurationFormatted: '5 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Learning Theories, ADDIE & Bloom’s Taxonomy',
          durationMonths: 2,
          durationText: '2 months',
          category: 'fundamentals',
          description: 'Master ADDIE (Analysis, Design, Development, Implementation, Evaluation), Gagne’s 9 Events of Instruction, and Bloom’s Taxonomy.',
          tasks: [
            'Conduct learner audience analysis and performance gap assessments for corporate training briefs',
            'Map actionable learning objectives using revised Bloom’s Taxonomy cognitive levels',
            'Design instructional strategy documents detailing assessments, interactive exercises, and content flow'
          ],
          milestone: 'Create a comprehensive Instructional Design Document (IDD) for a 4-module corporate training program',
          prerequisites: ['Basic writing and logical structuring abilities'],
          resources: [
            { title: 'InstructionalDesign.org Learning Models', url: 'https://www.instructionaldesign.org/', type: 'learning', isFree: true },
            { title: 'Vanderbilt Center for Teaching - Bloom’s Taxonomy Guide', url: 'https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/', type: 'learning', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Storyboarding & Authoring Tools (Articulate 360 / Rise)',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Write instructional storyboards and develop interactive multimedia eLearning courses in Articulate Storyline and Rise 360.',
          tasks: [
            'Write detailed screen-by-screen audio-visual storyboards with branching scenarios and user triggers',
            'Develop interactive modules in Articulate Storyline: states, layers, triggers, variables, and knowledge checks',
            'Publish responsive, bite-sized micro-learning modules in Articulate Rise 360'
          ],
          milestone: 'Develop a fully interactive 15-minute SCORM-compliant eLearning module with branching scenarios',
          prerequisites: ['Instructional Design Document planning'],
          resources: [
            { title: 'Articulate 360 Official Tutorials & E-Learning Heroes Community', url: 'https://community.articulate.com/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'LMS Integration (SCORM/xAPI), Portfolio & Interview Prep',
          durationMonths: 1,
          durationText: '1 month',
          category: 'portfolio',
          description: 'Test courses in SCORM Cloud, host an interactive design portfolio, and prepare for EdTech and corporate ID interviews.',
          tasks: [
            'Test SCORM 1.2 and xAPI tracking, score reporting, and completion triggers in SCORM Cloud / Moodle LMS',
            'Build a portfolio website showcasing 2 detailed storyboards and 2 interactive playable course modules',
            'Practice design challenge assessments commonly assigned during corporate hiring rounds'
          ],
          milestone: 'Publish a live instructional design portfolio with interactive module demos',
          prerequisites: ['Articulate authoring and storyboarding'],
          resources: [
            { title: 'Rustici Software SCORM & xAPI Knowledge Base', url: 'https://scorm.com/', type: 'learning', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'research-scientist',
    title: 'Research Scientist',
    educationQualification: {
      minimumQualification: 'Master degree (M.Sc / M.Tech / M.E. / M.Pharm) in Physics, Chemistry, Biological Sciences, Mathematics, or Engineering',
      preferredDegree: 'Ph.D. in relevant scientific or engineering discipline with postdoctoral research experience',
      requiredProfessionalDegreeOrLicense: 'CSIR-UGC NET (JRF) or GATE qualification required for government research fellowships and public R&D institutions',
      mandatoryRequirements: [
        'Recognized postgraduate degree in relevant scientific discipline with minimum 55-60% marks',
        'Proven laboratory experimental competence, analytical data interpretation, and scientific literature command'
      ],
      preferredQualifications: [
        'Award of Junior Research Fellowship (CSIR/UGC JRF, DBT-JRF, or ICMR-JRF)',
        'First-author publications in peer-reviewed international scientific journals'
      ],
      eligibilityCriteria: [
        'National-level fellowship eligibility age limit (generally up to 28 years for CSIR JRF, with government relaxations)'
      ],
      regulatoryNotes: 'Research scientists work in premier public scientific institutions (CSIR labs, DRDO, ISRO, DAE, ICMR) and corporate industrial R&D centers (biotech, pharma, chemical, semiconductor).'
    },
    roadmap: {
      totalDurationMonths: 6,
      totalDurationFormatted: '6 months',
      steps: [
        {
          stepNumber: 1,
          title: 'Research Methodology, Statistical Analysis & Literature Mining',
          durationMonths: 2,
          durationText: '2 months',
          category: 'fundamentals',
          description: 'Master experimental design, statistical hypothesis testing (ANOVA, regressions), and systematic literature review.',
          tasks: [
            'Design rigorous experimental protocols with proper control groups, blinding, and error margin specifications',
            'Analyze scientific datasets using R, Python (SciPy/NumPy), or GraphPad Prism',
            'Conduct systematic literature reviews across PubMed, ScienceDirect, and Web of Science'
          ],
          milestone: 'Complete a peer-reviewed standard literature review and structured experimental hypothesis proposal',
          prerequisites: ['Postgraduate foundational science knowledge'],
          resources: [
            { title: 'CSIR Human Resource Development Group (HRDG)', url: 'https://csirhrdg.res.in/', type: 'official', isFree: true },
            { title: 'NCBI PubMed Biomedical Literature Database', url: 'https://pubmed.ncbi.nlm.nih.gov/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Instrumental Data Analysis, Manuscript Drafting & Grant Writing',
          durationMonths: 2,
          durationText: '2 months',
          category: 'skills',
          description: 'Interpret specialized instrumentation outputs (spectroscopy, chromatography, microscopy), draft scientific manuscripts, and outline research grants.',
          tasks: [
            'Analyze spectra and raw experimental data (NMR, HPLC, GC-MS, XRD, or confocal microscopy)',
            'Draft a full scientific manuscript including abstract, methodology, results, discussion, and bibliography',
            'Write a research grant proposal adhering to SERB (Science and Engineering Research Board) or DBT formats'
          ],
          milestone: 'Produce a complete research paper draft formatted for high-impact journal submission',
          prerequisites: ['Experimental design and data analysis'],
          resources: [
            { title: 'Department of Science and Technology (DST) India', url: 'https://dst.gov.in/', type: 'official', isFree: true },
            { title: 'Science and Engineering Research Board (SERB)', url: 'https://www.serb.gov.in/', type: 'official', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Research Defense, Postdoc/Industrial R&D Interview Prep',
          durationMonths: 2,
          durationText: '2 months',
          category: 'interview-prep',
          description: 'Prepare academic seminars, present research findings clearly, and prepare for industry or national lab interviews.',
          tasks: [
            'Prepare a 30-minute technical slide presentation defending experimental findings and novelty',
            'Practice answering probing methodological cross-examination questions from expert panelists',
            'Apply for Project Scientist / Scientist B positions in national laboratories and corporate R&D divisions'
          ],
          milestone: 'Deliver a successful 30-minute scientific seminar and complete a mock panel interview',
          prerequisites: ['Manuscript drafting and experimental interpretation'],
          resources: [
            { title: 'Council of Scientific and Industrial Research (CSIR) Recruitment Portal', url: 'https://www.csir.res.in/', type: 'official', isFree: true }
          ]
        }
      ]
    }
  }
];
