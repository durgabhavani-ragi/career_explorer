/**
 * Arts, Design and Media Careers Audit Data (11 Careers)
 * Covers: ui-ux-designer, graphic-designer, animator, video-editor, photographer,
 * fashion-designer, interior-designer, architect, content-writer, digital-marketer,
 * public-relations-specialist.
 * Validated for Indian creative industries, premier design councils (CoA, NID, NIFT),
 * realistic INR compensation, and portfolio-driven roadmaps.
 */

const artsDesignMediaCareers = [
  {
    slug: 'ui-ux-designer',
    title: 'UI/UX Designer (Product Designer)',
    description: 'Designs intuitive digital interfaces, mobile application journeys, and interactive software experiences. Conducts qualitative user research, wireframing, usability testing, and maintains scalable Design Systems in Figma across Indian tech product companies and design studios.',
    educationRequirements: 'B.Des / M.Des from premier design institutes (NID, IIT IDC/DoD via UCEED/CEED) or Bachelor\'s in Computer Science/Humanities with a verified UX case study portfolio. Mastery of Figma, design systems, and user testing methodologies.',
    educationPathways: [
      'B.Des in Interaction / Communication Design (4 years via UCEED from IITs or NID DAT)',
      'M.Des in Interaction Design (2 years via CEED from IIT Bombay / IISc Bengaluru)',
      'Self-Taught / Bootcamp Route: Any Bachelor\'s degree + 3–6 Months intensive UX case study portfolio development'
    ],
    eligibilityRequirements: '10+2 from any recognized board. Demonstrable portfolio of 2–3 in-depth end-to-end case studies on Behance, Dribbble, or a personal domain showcasing problem definition, user journeys, wireframes, and high-fidelity prototypes.',
    certificationsAndExams: [
      'UCEED / CEED (Undergraduate / Common Entrance Examination for Design - IITs)',
      'Google UX Design Professional Certificate',
      'Nielsen Norman Group (NN/g) UX Certification'
    ],
    workEnvironment: 'Tech startups, unicorn product companies (Swiggy, Zomato, Razorpay), global GCC design studios, and specialized UX agencies across Bengaluru, Gurugram, Mumbai, and Hyderabad.',
    marketDemand: 'Very High',
    jobOutlook: 'Surging demand as consumer internet apps, fintech platforms, enterprise B2B SaaS, and quick-commerce prioritize conversion rate optimization, ease of use, and accessibility.',
    salaryRange: { min: 450000, max: 2200000, currency: 'INR', source: 'AmbitionBox UI/UX Designer Salary 2024, NID Placement Reports' },
    salarySource: 'AmbitionBox UI/UX Designer Salary 2024, NID Placement Reports',
    salaryByExperience: {
      entryLevel: { min: 450000, max: 900000, label: 'Junior UI/UX Designer (0–2 yrs)' },
      earlyCareer: { min: 900000, max: 1700000, label: 'Product Designer (3–5 yrs)' },
      experienced: { min: 1700000, max: 3200000, label: 'Lead Product Designer / Design Director (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Tier-1 product tech companies (Swiggy, Cred, PhonePe, Uber India) pay ₹14–24 LPA for fresh designers with stellar interaction portfolios; Staff Product Designers command ₹40–60+ LPA.'
    },
    careerProgression: [
      'Associate UI/UX Designer',
      'Product Designer (UI/UX)',
      'Senior Product Designer',
      'Staff Designer / Design Lead',
      'Head of Design / VP Product Design'
    ],
    employmentSectors: {
      government: 'Digital India Corporation (DIC), National Informatics Centre (NIC Citizen Portals), UIDAI (Aadhaar UI redesign teams), MyGov',
      privateSector: 'Top Consumer Tech (Swiggy, Zomato, Flipkart, Cred), B2B SaaS (Postman, BrowserStack, Zoho), Global Tech GCCs (Google, Microsoft, Adobe India), Design Agencies'
    },
    timelineOverview: {
      totalEstimatedDuration: '4 Years (B.Des) or 6–12 Months intensive self-study/portfolio route',
      educationDuration: '4 Years (B.Des) or Any Bachelor\'s Degree',
      prepDuration: '6 Months building 3 live mobile/web product case studies',
      practicalTrainingDuration: '3–6 Months design studio or tech product startup internship',
      jobSearchDuration: '1–2 Months portfolio review and design assignment hiring rounds',
      overlapNotes: 'UX research and Figma design projects are executed concurrently during final semesters.',
      confidenceNote: 'Design hiring in India is 90% portfolio-driven; a candidate with an exceptional live case study on Behance easily beats candidates with degrees but poor portfolios.'
    },
    sources: [
      { title: 'UCEED Official Examination Portal (IIT Bombay)', url: 'https://www.uceed.iitb.ac.in', sourceAuthority: 'IIT Bombay', verifiedDate: '2024-10-14' },
      { title: 'National Institute of Design (NID) Admissions', url: 'https://admissions.nid.edu', sourceAuthority: 'NID India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'UI/UX Designer Career Roadmap',
      description: 'Human-centered design journey: design thinking, user research interviews, wireframing, Figma component libraries, auto-layout design systems, and usability testing.',
      totalEstimatedDuration: '4 Years',
      durationBreakdown: 'Visual Design & Typography Foundations: 6 Months | User Research & Wireframing: 6 Months | Figma Mastery & Design Systems: 1 Year | Portfolio Case Studies & Industry Internship: 1 Year',
      overlapNotes: 'Portfolio case studies are developed alongside client design work or academic projects.',
      steps: [
        {
          stepNumber: 1,
          title: 'Design Thinking, Typography & Visual Hierarchy',
          stageType: 'education',
          duration: '6 Months',
          description: 'Master Gestalt principles, color theory (60-30-10 rule, contrast ratios), typographic scales, 8pt grid systems, and the 5 stages of Design Thinking (Empathize, Define, Ideate, Prototype, Test).',
          topics: ['Gestalt Principles of Visual Perception', 'Typography Hierarchy & Font Pairing', 'Color Theory & WCAG AA Accessibility Contrast', '8pt Grid Systems & Spatial Spacing'],
          skillsToAcquire: ['Creating Visual Moodboards', 'Applying Typographic Hierarchy', 'Auditing WCAG Color Contrast'],
          activities: ['Recreate 5 popular mobile app screens (e.g., Spotify, Airbnb) pixel-perfectly in Figma to study spacing and type scales', 'Audit an existing website for accessibility contrast violations'],
          completionCriteria: 'Complete certified foundational course in UX design or design fundamentals.',
          dependencies: 'Basic computer literacy and visual curiosity',
          resources: [
            { name: 'Google UX Design Professional Certificate (Coursera)', url: 'https://www.coursera.org/professional-certificates/google-ux-design', type: 'Course', isFree: true },
            { name: 'Refactoring UI Book & Design Principles', url: 'https://www.refactoringui.com', type: 'Book Reference', isFree: false }
          ]
        },
        {
          stepNumber: 2,
          title: 'User Research, Information Architecture & Wireframing',
          stageType: 'skill_acquisition',
          duration: '6 Months',
          description: 'Conduct qualitative user interviews, synthesize personas and empathy maps, construct information architecture (IA) sitemaps, and sketch low-fidelity wireframes.',
          topics: ['Qualitative User Interview Protocols', 'User Personas & Customer Journey Maps', 'Card Sorting & Information Architecture (IA)', 'Low-Fidelity Paper and Digital Wireframing'],
          skillsToAcquire: ['Conducting Semi-Structured User Interviews', 'Card Sorting Analysis', 'Wireframing in Whimsical / Figma'],
          activities: ['Interview 5 target users for a specific product problem statement and synthesize an Affinity Diagram', 'Create low-fidelity wireframes showing complete user onboarding flow'],
          completionCriteria: 'Document a complete research phase with persona, problem statement, and wireframe flows.',
          dependencies: 'Design Thinking Principles',
          resources: [
            { name: 'Nielsen Norman Group (NN/g) Free UX Articles', url: 'https://www.nngroup.com/articles/', type: 'Industry Articles', isFree: true },
            { name: 'Laws of UX (Jon Yablonski)', url: 'https://lawsofux.com', type: 'Open Learning Resource', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Advanced Figma, Auto-Layout & Design Systems',
          stageType: 'skill_acquisition',
          duration: '6–12 Months',
          description: 'Master Figma: Auto-Layout 5.0, component variants, interactive component states, variable tokens (spacing, color, typography), and high-fidelity prototyping.',
          topics: ['Figma Auto-Layout & Responsive Constraints', 'Component Architecture & Boolean/Text/Instance Swap Variants', 'Design Tokens & Multi-Brand Variables', 'Interactive Prototyping (Smart Animate, Micro-Interactions)'],
          skillsToAcquire: ['Building Scalable Design Systems in Figma', 'Creating Complex Interactive Prototypes', 'Developer Handoff Preparation'],
          activities: ['Build a full UI design system kit in Figma with 50+ reusable components and variants', 'Create an interactive mobile app prototype demonstrating realistic animations and transitions'],
          completionCriteria: 'Publish a functional Figma design system library with zero auto-layout errors.',
          dependencies: 'Wireframing and Visual Hierarchy Knowledge',
          resources: [
            { name: 'Figma Official Video Tutorials & Community', url: 'https://help.figma.com/hc/en-us', type: 'Official Tutorials', isFree: true },
            { name: 'Design Systems Handbook (DesignBetter)', url: 'https://www.designbetter.co/design-systems-handbook', type: 'Free E-Book', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Case Study Portfolio, Usability Testing & Job Placement',
          stageType: 'practical_experience',
          duration: '3–6 Months',
          description: 'Execute usability testing sessions, iterate prototypes based on user feedback, document 3 comprehensive case studies on Behance/personal website, and clear design hiring rounds.',
          topics: ['Moderated & Unmoderated Usability Testing', 'System Usability Scale (SUS) Scoring', 'Structuring Compelling Portfolio Case Studies', 'Whiteboard Design Challenge Interview Preparation'],
          skillsToAcquire: ['Usability Testing Facilitation', 'Design Portfolio Storytelling', 'Live Whiteboard Problem Solving'],
          activities: ['Conduct usability testing on 5 users and document quantifiable task completion rate improvements', 'Publish 3 in-depth case studies explaining design rationale, trade-offs, and metrics'],
          completionCriteria: 'Secure appointment as Junior UI/UX Designer or Product Designer in a tech company.',
          dependencies: 'Completed high-fidelity prototypes and design system',
          resources: [
            { name: 'Behance UX Portfolios Gallery', url: 'https://www.behance.net/galleries/ui-ux', type: 'Portfolio Platform', isFree: true },
            { name: 'Dribbble Product Design Inspiration', url: 'https://dribbble.com', type: 'Design Community', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'graphic-designer',
    title: 'Graphic Designer & Visual Brand Identity Specialist',
    description: 'Creates brand visual identities, marketing collateral, digital social assets, corporate packaging, and print media layouts. Employs Adobe Creative Cloud (Illustrator, Photoshop, InDesign), typography, and color theory across creative advertising agencies, corporate marketing teams, and design studios.',
    educationRequirements: 'B.Des / B.F.A. in Visual Communication / Applied Arts (3 to 4 years) or Diploma in Graphic Design + demonstrable creative portfolio on Behance showcasing brand identity, packaging, and digital designs.',
    educationPathways: [
      'B.Des in Graphic / Visual Communication Design from NID, NIFT, or private design colleges (4 years)',
      'B.F.A. (Bachelor of Fine Arts) in Applied Art (4 years from recognized art colleges)',
      'Diploma / Self-Taught Route: Adobe Certified Professional with verified portfolio'
    ],
    eligibilityRequirements: '10+2 from any stream. Creative visual aptitude and demonstrable portfolio of vector illustrations, typography treatments, and brand guidelines.',
    certificationsAndExams: [
      'Adobe Certified Professional in Visual Design (Photoshop, Illustrator, InDesign)',
      'NID DAT (Design Aptitude Test) / UCEED',
      'Typography & Brand Identity Masterclasses'
    ],
    workEnvironment: 'Advertising agencies (Ogilvy, Dentsu, Leo Burnett India), corporate brand marketing departments, e-commerce visual studios, and independent freelance studios.',
    marketDemand: 'High',
    jobOutlook: 'Continuous hiring driven by digital social media advertising, D2C brand packaging design, Indian FMCG branding revamps, and corporate visual communication.',
    salaryRange: { min: 300000, max: 950000, currency: 'INR', source: 'AmbitionBox Graphic Designer Salary 2024, PayScale India' },
    salarySource: 'AmbitionBox Graphic Designer Salary 2024, PayScale India',
    salaryByExperience: {
      entryLevel: { min: 300000, max: 480000, label: 'Junior Visual / Graphic Designer (0–2 yrs)' },
      earlyCareer: { min: 480000, max: 800000, label: 'Senior Graphic Designer / Art Director (3–5 yrs)' },
      experienced: { min: 800000, max: 1500000, label: 'Creative Director / Head of Visual Branding (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Creative Directors in top Mumbai/Delhi advertising agencies and independent boutique design studio owners earn ₹15–28+ LPA.'
    },
    careerProgression: [
      'Junior Graphic Designer',
      'Graphic Designer / Visual Specialist',
      'Senior Graphic Designer / Associate Art Director',
      'Art Director / Creative Lead',
      'Executive Creative Director (ECD) / Design Studio Founder'
    ],
    employmentSectors: {
      government: 'National Film Development Corporation (NFDC), Publication Division (Ministry of Information & Broadcasting), National Book Trust, Tourism Boards',
      privateSector: 'Top Advertising Agencies (Ogilvy India, Dentsu, McCann, FCB Ulka), E-Commerce Giants (Myntra, Nykaa, Amazon), D2C Brands, Publishing Houses'
    },
    timelineOverview: {
      totalEstimatedDuration: '3–4 Years (B.Des/BFA) or 6–12 Months focused portfolio development',
      educationDuration: '3–4 Years (Degree)',
      prepDuration: '3–6 Months mastering vector illustration, photo-manipulation, and brand manuals',
      practicalTrainingDuration: '3–6 Months advertising agency or corporate marketing internship',
      jobSearchDuration: '1–2 Months portfolio review hiring cycle',
      overlapNotes: 'Client freelance projects and agency internships run parallel to academic coursework.',
      confidenceNote: 'A visually striking Behance brand identity manual showing logo marks, stationery, and packaging mockups is the primary factor in securing agency roles.'
    },
    sources: [
      { title: 'Adobe Certified Professional Guidelines', url: 'https://certifiedprofessional.adobe.com', sourceAuthority: 'Adobe Global', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Graphic Designer Salary in India', url: 'https://www.ambitionbox.com/salaries/graphic-designer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Graphic Designer Career Roadmap',
      description: 'Visual communication journey: Adobe Illustrator vector mastery, Photoshop compositing, typography anatomy, brand style guide formulation, and print pre-press production.',
      totalEstimatedDuration: '3.5–4 Years',
      durationBreakdown: 'Art & Typography Fundamentals: 1 Year | Adobe Creative Suite Mastery: 1 Year | Brand Identity & Packaging Design: 1 Year | Agency Internship & Portfolio: 6 Months',
      overlapNotes: 'Real-world freelance client projects are executed during the 2nd and 3rd year.',
      steps: [
        {
          stepNumber: 1,
          title: 'Art Foundations, Color Harmonies & Typography Anatomy',
          stageType: 'education',
          duration: '1 Year',
          description: 'Master anatomical typography (kerning, tracking, leading, ascenders, descenders), color psychology, composition rules (golden ratio, rule of thirds), and freehand drawing.',
          topics: ['Typography Anatomy & Classification (Serif, Sans, Slab, Display)', 'Color Models (RGB vs CMYK, Spot Colors, Pantone Matching System)', 'Visual Composition & Balance Rules', 'History of Graphic Design Movements'],
          skillsToAcquire: ['Expressive Lettering', 'Color Harmony Creation (Complementary, Triadic)', 'Thumbnail Sketching'],
          activities: ['Design 10 custom lettering compositions focusing on positive and negative space balance', 'Create a comprehensive typographic pairing guide for 10 distinct brand archetypes'],
          completionCriteria: 'Clear foundational art and visual design evaluations with strong portfolio sketches.',
          dependencies: '10+2 from recognized board',
          resources: [
            { name: 'Thinking with Type by Ellen Lupton (Reference Portal)', url: 'http://thinkingwithtype.com', type: 'Design Resource', isFree: true },
            { name: 'NPTEL Introduction to Visual Design (IIT Bombay)', url: 'https://nptel.ac.in', type: 'Course', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Vector Illustration & Photo Compositing (Illustrator / Photoshop)',
          stageType: 'skill_acquisition',
          duration: '1 Year',
          description: 'Master vector geometry in Adobe Illustrator (Pen tool, Shape Builder, Pathfinder, Bezier curves) and non-destructive image manipulation in Photoshop (layer masks, clipping paths, frequency separation).',
          topics: ['Adobe Illustrator Precision Vector Pen Tool', 'Photoshop Advanced Layer Masking & Color Grading', 'Vector Iconography & Logo Grid Construction', 'Realistic 3D Product Mockup Generation'],
          skillsToAcquire: ['Complex Vector Illustration', 'Photo Retouching & Compositing', 'Grid-Based Logo Construction'],
          activities: ['Construct 5 geometric vector logos using mathematical golden-ratio circle grids', 'Create a composite surrealist digital artwork combining 8+ photographic elements in Photoshop'],
          completionCriteria: 'Pass Adobe Certified Professional exam in Photoshop and Illustrator.',
          dependencies: 'Art and Typography Foundations',
          resources: [
            { name: 'Adobe Creative Cloud Official Tutorials', url: 'https://helpx.adobe.com/creative-cloud/tutorials-explore.html', type: 'Official Tutorials', isFree: true },
            { name: 'Tuts+ Graphic Design Tutorials', url: 'https://design.tutsplus.com', type: 'Learning Platform', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Brand Identity Systems, Packaging & Editorial Design',
          stageType: 'skill_acquisition',
          duration: '1 Year',
          description: 'Formulate complete corporate visual identity guidelines (brand manuals), multi-page editorial layouts in Adobe InDesign, and dieline packaging design with pre-press print specifications.',
          topics: ['Brand Identity Guidelines (Logo Usage, Safe Zones, Don\'ts)', 'Multi-Page Editorial Layouts in Adobe InDesign', 'Packaging Dielines, Bleeds, and Crop Marks', 'Print Pre-Press Setup (CMYK Separation, Spot Varnishes)'],
          skillsToAcquire: ['Complete Brand Manual Compilation', 'Multi-Page Magazine Layout Drafting', 'Print Dieline Precision'],
          activities: ['Create an end-to-end 30-page brand guidelines manual for a fictional FMCG or hospitality brand', 'Design a folding carton packaging box with realistic dielines, foil stamping, and embossed textures'],
          completionCriteria: 'Produce a comprehensive brand identity manual and print-ready packaging file.',
          dependencies: 'Vector and Raster Software Proficiency',
          resources: [
            { name: 'Logo Design Love by David Airey', url: 'https://www.logodesignlove.com', type: 'Design Blog', isFree: true },
            { name: 'Packaging of the World (Inspiration Gallery)', url: 'https://www.packagingoftheworld.com', type: 'Design Inspiration', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Agency Internship, Behance Portfolio & Placement',
          stageType: 'practical_experience',
          duration: '6 Months',
          description: 'Complete internship at an advertising agency or design studio, publish 4+ polished case presentations on Behance, and secure full-time appointment as Graphic Designer.',
          topics: ['Creative Brief Interpretation & Brainstorming', 'Client Presentation & Concept Defense', 'Agency Fast Turnaround Time Management'],
          skillsToAcquire: ['Working under Tight Creative Deadlines', 'Cross-Functional Collaboration with Copywriters', 'Handling Client Revision Requests'],
          activities: ['Work on 10+ live client commercial creative campaigns during agency internship', 'Curate and publish a Behance portfolio gaining featured appreciation badges'],
          completionCriteria: 'Appointment as Graphic Designer or Visual Specialist in agency or corporate brand team.',
          dependencies: 'Comprehensive design portfolio',
          resources: [
            { name: 'Ogilvy India Careers', url: 'https://www.ogilvy.com/careers', type: 'Company Portal', isFree: true },
            { name: 'Behance Graphic Design Showcase', url: 'https://www.behance.net/galleries/graphic-design', type: 'Portfolio Gallery', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'animator',
    title: '3D / 2D Character Animator & Motion Artist',
    description: 'Animates characters, creatures, and visual assets for feature films, television shows, gaming titles, and commercial advertising. Implements the 12 principles of animation, 3D character rigging, keyframe timing, and motion capture integration in Autodesk Maya, Blender, and After Effects.',
    educationRequirements: 'B.Des / B.Sc in Animation & Multimedia (3 to 4 years) or specialized diploma from premier animation institutes (NID, Whistling Woods, MAAC, Arena) + a character animation demo reel showcasing acting, body mechanics, and lip-sync.',
    educationPathways: [
      'B.Des in Animation Film Design from NID (4 years via NID DAT)',
      'B.Sc in Animation, VFX & Gaming (3 years from recognized universities)',
      'Intensive Diploma / Professional Demo Reel Course in Maya / Blender (1–2 years)'
    ],
    eligibilityRequirements: '10+2 from any stream. Demonstrable passion for storytelling, timing, and physics of motion. Mandatory 60-90 second character animation demo reel for hiring.',
    certificationsAndExams: [
      'Autodesk Certified Professional in Maya for Digital Animation',
      'Blender Foundation Certified Artist',
      'Animation Mentor / Animsquad Character Animation Workshop'
    ],
    workEnvironment: 'VFX & animation studios (Technicolor India, DNEG, Framestore, MPC Bengaluru/Mumbai), gaming studios (Ubisoft, EA India, Rockstar India), and advertising production houses.',
    marketDemand: 'High',
    jobOutlook: 'Rapid expansion driven by global Hollywood VFX outsourcing to Indian studios, India\'s burgeoning mobile gaming sector, OTT animated series, and digital advertising.',
    salaryRange: { min: 350000, max: 1350000, currency: 'INR', source: 'AmbitionBox Animator Salary 2024, PayScale India' },
    salarySource: 'AmbitionBox Animator Salary 2024, PayScale India',
    salaryByExperience: {
      entryLevel: { min: 350000, max: 550000, label: 'Junior 3D / 2D Animator (0–2 yrs)' },
      earlyCareer: { min: 550000, max: 950000, label: 'Senior Character Animator (3–5 yrs)' },
      experienced: { min: 950000, max: 1800000, label: 'Lead Animator / Animation Supervisor (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Senior Character Animators and Animation Supervisors in top global VFX hubs in Bengaluru and Mumbai working on international marquee feature films earn ₹16–28+ LPA.'
    },
    careerProgression: [
      'Junior Animator / Trainee',
      'Character Animator (3D / 2D)',
      'Senior Character Animator',
      'Lead Animator / Animation Director',
      'Head of Animation / Creative Producer'
    ],
    employmentSectors: {
      government: 'Doordarshan Animation Wing, Children\'s Film Society India (CFSI), NFDC, Educational Media Centers',
      privateSector: 'Top VFX & Animation Studios (Technicolor India, DNEG Mumbai, Prime Focus, MPC), Game Studios (Ubisoft Pune, EA, Rockstar Games India), Advertising Houses'
    },
    timelineOverview: {
      totalEstimatedDuration: '3–4 Years (Degree) or 1.5–2 Years dedicated demo reel program',
      educationDuration: '3–4 Years (B.Des / B.Sc Animation)',
      prepDuration: '6–12 Months intensive character acting and body mechanics animation polish',
      practicalTrainingDuration: '3–6 Months studio internship in a live VFX/animation production pipeline',
      jobSearchDuration: '1–3 Months demo reel review and animation test clearance',
      overlapNotes: 'Demo reel shots are animated and rendered during the final two semesters.',
      confidenceNote: 'Animation studios hire solely based on a 60-second video demo reel; academic grades are secondary to convincing weight, timing, and emotion in character movement.'
    },
    sources: [
      { title: 'Animation Guild Industry Guidelines', url: 'https://animationguild.org', sourceAuthority: 'Animation Guild', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox 3D Animator Salary in India', url: 'https://www.ambitionbox.com/salaries/3d-animator-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Character Animator Career Roadmap',
      description: 'Animation excellence route: 12 fundamental principles of animation, bouncing ball mechanics, walk/run cycles, Autodesk Maya Graph Editor, facial lip-sync, and studio demo reel.',
      totalEstimatedDuration: '3.5–4 Years',
      durationBreakdown: 'Traditional 2D & 12 Principles: 1 Year | 3D Body Mechanics & Maya Graph Editor: 1 Year | Character Acting & Facial Lip-Sync: 1 Year | Production Demo Reel: 6 Months',
      overlapNotes: 'Creating shot breakdown video reels proceeds alongside final-year coursework.',
      steps: [
        {
          stepNumber: 1,
          title: 'The 12 Principles of Animation & Bouncing Ball Mechanics',
          stageType: 'education',
          duration: '1 Year',
          description: 'Master the 12 principles defined by Disney animators (Squash and Stretch, Anticipation, Staging, Straight Ahead vs Pose to Pose, Follow Through and Overlapping Action, Slow In and Slow Out, Arcs, Secondary Action, Timing, Exaggeration, Solid Drawing, Appeal).',
          topics: ['12 Principles of Animation Core Applications', 'Bouncing Ball Weight and Mass Variations', 'Pendulum Swings & Overlapping Action', 'Planning Poses with Thumbnail Sketching'],
          skillsToAcquire: ['Timing and Spacing Control', 'Communicating Physical Weight & Elasticity', 'Pose-to-Pose Keyframing'],
          activities: ['Animate bouncing balls of varying weights (bowling ball, ping-pong ball, water balloon) demonstrating realistic physical mass', 'Animate an articulated flour sack expressing sadness, surprise, and joy'],
          completionCriteria: 'Complete traditional/digital 2D animation assignments demonstrating mastery of weight and timing.',
          dependencies: '10+2 from recognized board',
          resources: [
            { name: 'The Animator’s Survival Kit by Richard Williams', url: 'https://www.theanimatorssurvivalkit.com', type: 'Essential Textbook', isFree: false },
            { name: 'Illusion of Life: Disney Animation (Reference)', url: 'https://www.disneybooks.com', type: 'Classic Reference', isFree: false }
          ]
        },
        {
          stepNumber: 2,
          title: '3D Body Mechanics & Maya Graph Editor',
          stageType: 'skill_acquisition',
          duration: '1 Year',
          description: 'Translate animation principles into 3D using Autodesk Maya or Blender; master Graph Editor tangent manipulation, bipedal walk cycles, running, jumping, and obstacle courses.',
          topics: ['Autodesk Maya Graph Editor (Spline, Flat, Clamped Tangents)', 'Bipedal Standard Walk & Run Cycles', 'Weight Shifts, Balance, and Center of Gravity (COG)', 'Parkour Jump, Landing & Recovery Sequences'],
          skillsToAcquire: ['Graph Editor Curve Smoothing', 'Posing 3D Character Rigs Dynamically', 'Overlapping Spine and Arm Motion'],
          activities: ['Animate a biped character performing a heavy box lift, carrying, and setting down with authentic physical strain', 'Animate an athletic character executing a dynamic jump across an obstacle gap with natural follow-through'],
          completionCriteria: 'Produce clean body mechanics animation clips with zero curve popping or sliding feet.',
          dependencies: 'Foundational Animation Principles',
          resources: [
            { name: 'Autodesk Maya Free Educational Access', url: 'https://www.autodesk.com/education', type: 'Software Platform', isFree: true },
            { name: 'Blender Open Source 3D Suite', url: 'https://www.blender.org', type: 'Open Source Software', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Character Acting, Facial Expressions & Dialogue Lip-Sync',
          stageType: 'skill_acquisition',
          duration: '1 Year',
          description: 'Bring characters to life through emotional subtext, eye tracking, subtle micro-expressions, body language posture changes, and frame-accurate phonetic dialogue lip-syncing.',
          topics: ['Live-Action Video Reference Analysis & Video Acting', 'Eye Darts, Blinks, and Emotional Subtext', 'Phonetic Mouth Shapes (Visemes for A, E, O, M, F/V)', 'Pacing and Contrast in Theatrical Acting'],
          skillsToAcquire: ['Dialogue Audio Scrubbing and Breakdown', 'Subtle Eye and Brow Acting Animation', 'Character Personality Consistency'],
          activities: ['Record live video acting reference and animate a 15-second emotional dialogue scene between two characters', 'Animate precise facial lip-sync synchronized with high-energy dialogue audio'],
          completionCriteria: 'Deliver a finished acting shot demonstrating clear character intentions and emotional believability.',
          dependencies: 'Body Mechanics and Graph Editor Mastery',
          resources: [
            { name: '11 Second Club Monthly Animation Competitions', url: 'https://www.11secondclub.com', type: 'Animation Community', isFree: true },
            { name: 'Animation Mentor Free Character Rigs & Tips', url: 'https://www.animationmentor.com', type: 'Learning Platform', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Demo Reel Assembly, Studio Tests & Studio Appointment',
          stageType: 'practical_experience',
          duration: '6 Months',
          description: 'Assemble a crisp 60–90 second animation demo reel showcasing best body mechanics and acting shots with breakdown overlays; clear studio animation hiring tests.',
          topics: ['Demo Reel Editing, Ordering & Music Choices', 'Studio Animation Test Strategies (48-Hour Turnaround)', 'Production Pipeline Integration (ShotGrid, Perforce)'],
          skillsToAcquire: ['Passing Studio 3D Animation Timed Tests', 'Receiving and Implementing Lead Animator Notes', 'Version Control in Studio Pipelines'],
          activities: ['Publish a high-definition 60-second animation showreel on Vimeo with shot breakdowns', 'Complete a 48-hour studio character animation recruitment test with positive director feedback'],
          completionCriteria: 'Securing full-time job offer as Junior 3D Animator in an animation/VFX studio.',
          dependencies: 'Completed character animation acting and mechanics portfolio',
          resources: [
            { name: 'DNEG India Careers', url: 'https://www.dneg.com/careers/', type: 'Company Portal', isFree: true },
            { name: 'Technicolor India Careers', url: 'https://www.technicolor.com/careers', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'video-editor',
    title: 'Professional Video Editor & Post-Production Specialist',
    description: 'Assembles raw camera footage, audio dialogue, visual effects, and music into cohesive video narratives for digital media, OTT feature content, commercial advertisements, and YouTube creators. Employs Adobe Premiere Pro, DaVinci Resolve, color grading, and sound mixing.',
    educationRequirements: 'Bachelor\'s in Mass Communication, Film Making, or Media Studies (3 years) or professional diploma in Video Editing + showreel of edited commercial ads, narrative short films, or dynamic social content.',
    educationPathways: [
      'B.A. / B.Sc in Film Making & Editing (3 years from FTII Pune, SRFTI Kolkata, or private film schools)',
      'Diploma in Non-Linear Editing (NLE) and Post-Production (1 year)',
      'Self-Taught / Creator Track: Mastery of Premiere Pro and DaVinci Resolve with a verified editing showreel'
    ],
    eligibilityRequirements: '10+2 from any stream. Strong narrative pacing instincts, rhythm, visual continuity, and mastery of professional editing software.',
    certificationsAndExams: [
      'DaVinci Resolve Certified End-User (Blackmagic Design)',
      'Adobe Certified Professional in Digital Video using Premiere Pro',
      'Avid Certified Professional for Media Composer'
    ],
    workEnvironment: 'Film and television post-production studios in Mumbai, Chennai, and Hyderabad, advertising production agencies, EdTech studios, and remote digital creator teams.',
    marketDemand: 'Very High',
    jobOutlook: 'Surging demand driven by short-form video consumption (YouTube Shorts, Instagram Reels), streaming OTT platforms (Netflix, Prime Video, Hotstar), and corporate digital video marketing.',
    salaryRange: { min: 300000, max: 1100000, currency: 'INR', source: 'AmbitionBox Video Editor Salary 2024, PayScale India' },
    salarySource: 'AmbitionBox Video Editor Salary 2024, PayScale India',
    salaryByExperience: {
      entryLevel: { min: 300000, max: 500000, label: 'Junior Video Editor / Assistant Editor (0–2 yrs)' },
      earlyCareer: { min: 500000, max: 850000, label: 'Senior Video Editor / Colorist (3–5 yrs)' },
      experienced: { min: 850000, max: 1600000, label: 'Post-Production Lead / Senior Film Editor (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Top freelance editors working with celebrity YouTube creators and commercial ad directors in Mumbai/Delhi earn ₹12–25+ LPA based on project day rates.'
    },
    careerProgression: [
      'Assistant Video Editor / Footage Logger',
      'Video Editor (Commercial / Digital / Narrative)',
      'Senior Video Editor / Lead Colorist',
      'Post-Production Supervisor / Senior Finishing Editor',
      'Head of Post-Production / Director of Post'
    ],
    employmentSectors: {
      government: 'Films Division of India, Doordarshan Central Post-Production Hub, Rajya Sabha TV / Sansad TV, NFDC',
      privateSector: 'OTT Production Houses (Dharma, Yash Raj Films, Excel Entertainment), Advertising Agencies, EdTech Studios (Unacademy, PhysicsWallah), YouTube Creator Studios'
    },
    timelineOverview: {
      totalEstimatedDuration: '3 Years (Degree) or 6–12 Months intensive practical editing showreel route',
      educationDuration: '3 Years (Degree)',
      prepDuration: '3–6 Months mastering timeline pacing, rhythm, sound design, and color grading',
      practicalTrainingDuration: '3–6 Months assistant editing internship in a post-production studio',
      jobSearchDuration: '1–2 Months showreel review and editing test clearance',
      overlapNotes: 'Editing short films and promotional videos proceeds concurrently during college.',
      confidenceNote: 'Editors with verified color grading (DaVinci Resolve) and sound design skills command twice the salary of cut-only editors.'
    },
    sources: [
      { title: 'Blackmagic Design DaVinci Resolve Certification Program', url: 'https://www.blackmagicdesign.com/products/davinciresolve/training', sourceAuthority: 'Blackmagic Design', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Video Editor Salary in India', url: 'https://www.ambitionbox.com/salaries/video-editor-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Video Editor Career Roadmap',
      description: 'Post-production editorial pathway: narrative continuity, J/L cuts, timeline pacing, Premiere Pro, DaVinci Resolve color grading, audio sweetening, and editing showreel.',
      totalEstimatedDuration: '3 Years',
      durationBreakdown: 'Visual Storytelling & Footage Ingestion: 6 Months | NLE Timeline Mastery (Premiere Pro): 1 Year | Color Grading & Audio Mixing (DaVinci): 1 Year | Showreel & Studio Production: 6 Months',
      overlapNotes: 'Client editing gigs and YouTube video productions run concurrently with coursework.',
      steps: [
        {
          stepNumber: 1,
          title: 'Film Grammar, Narrative Pacing & Footage Ingestion',
          stageType: 'education',
          duration: '6 Months',
          description: 'Master film continuity rules (180-degree rule, match on action, cutting on motion), montage theory (Kuleshov effect), eye-trace, and digital video codecs (ProRes, H.264/H.265, RAW).',
          topics: ['180-Degree Rule & Screen Direction', 'Cut on Action, Jump Cuts & Match Cuts', 'Codecs, Frame Rates (24fps vs 60fps) & Aspect Ratios', 'Proxy Workflow & Footage Organization'],
          skillsToAcquire: ['Folder Directory Discipline', 'Transcoding High-Resolution Camera Footage', 'Story Pacing and Emotional Rhythm'],
          activities: ['Log and organize raw footage from a multi-camera interview shoot with metadata tags', 'Edit a 2-minute dialogue scene maintaining strict eye-trace and emotional beats'],
          completionCriteria: 'Clear foundational film grammar assessment; assemble clean rough cuts.',
          dependencies: 'Basic computer proficiency and visual storytelling interest',
          resources: [
            { name: 'In the Blink of an Eye by Walter Murch', url: 'https://www.silmanjamespress.com', type: 'Essential Textbook', isFree: false },
            { name: 'Film Riot Filmmaking and Editing Tutorials', url: 'https://www.youtube.com/filmriot', type: 'Video Learning', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Advanced NLE Workflows (Premiere Pro & After Effects)',
          stageType: 'skill_acquisition',
          duration: '1 Year',
          description: 'Master keyboard shortcut editing in Adobe Premiere Pro, multi-camera syncing, J & L audio cuts, dynamic linking with After Effects for title graphics and motion tracking.',
          topics: ['Three-Point Editing & Keyboard Shortcut Workflows', 'Multi-Camera Sequence Syncing', 'Dynamic Link with After Effects for Motion Graphics', 'Speed Ramping & Keyframed Optical Flow Transitions'],
          skillsToAcquire: ['Rapid Timeline Editing without Mouse Reliance', 'Lower-Third Title Animation in After Effects', 'Seamless Speed Ramping'],
          activities: ['Edit a high-energy 60-second commercial promo with dynamic speed ramps and sound effects', 'Sync and edit a 4-camera live concert recording with multi-track audio'],
          completionCriteria: 'Pass Adobe Certified Professional exam in Premiere Pro.',
          dependencies: 'Film Grammar Foundations',
          resources: [
            { name: 'Adobe Premiere Pro Official User Guide', url: 'https://helpx.adobe.com/premiere-pro/user-guide.html', type: 'Official Guide', isFree: true },
            { name: 'Motion Array Video Editing Tutorials', url: 'https://motionarray.com', type: 'Learning Resource', isFree: false }
          ]
        },
        {
          stepNumber: 3,
          title: 'Color Grading & Audio Sweetening (DaVinci Resolve & Fairlight)',
          stageType: 'skill_acquisition',
          duration: '1 Year',
          description: 'Master DaVinci Resolve: primary color balance, scopes (waveform, vectorscope), secondary color qualifiers, node-based grading, LUTs, and audio noise reduction/equalization in Fairlight.',
          topics: ['Color Scopes (Waveform, Vectorscope, Histogram)', 'Primary Color Wheels vs Log Controls', 'Node Architecture (Serial, Parallel, Layer Nodes)', 'Dialogue Audio Cleaning (De-esser, EQ, Compression, Fairlight)'],
          skillsToAcquire: ['Shot-to-Shot Color Matching', 'Skin Tone Line Alignment on Vectorscope', 'Audio Loudness Standards (-14 LUFS for YouTube, -24 LUFS for Broadcast)'],
          activities: ['Color grade an entire 10-minute short film matching daylight and night scenes consistently across clips', 'Clean and master a noisy outdoor dialogue audio track to broadcast loudness standards'],
          completionCriteria: 'Earn Blackmagic Design DaVinci Resolve Certified End-User credential.',
          dependencies: 'NLE Editing Proficiency',
          resources: [
            { name: 'Blackmagic DaVinci Resolve Free Training Books & Videos', url: 'https://www.blackmagicdesign.com/products/davinciresolve/training', type: 'Free Official Curriculum', isFree: true },
            { name: 'Mixing Light Professional Color Grading Tutorials', url: 'https://mixinglight.com', type: 'Professional Training', isFree: false }
          ]
        },
        {
          stepNumber: 4,
          title: 'Editorial Showreel Assembly & Studio Placement',
          stageType: 'practical_experience',
          duration: '6 Months',
          description: 'Curate a dynamic 90-second editing showreel demonstrating diverse styles (narrative, fast-paced commercial, documentary); apply to post-production houses and creator agencies.',
          topics: ['Showreel Music Licensing and Rhythm', 'Post-Production Client Handoff Protocols', 'Archival and Master Deliverables (ProRes 422 HQ, DCP)'],
          skillsToAcquire: ['Client Revision Management', 'Deliverable Master Quality Control', 'High-Speed Editing Turnaround'],
          activities: ['Assemble a 90-second showreel showcasing commercials, short films, and music videos', 'Complete a timed 4-hour editing test for a commercial post-production house'],
          completionCriteria: 'Appointment as Video Editor in post-production studio or media agency.',
          dependencies: 'Comprehensive editing and color grading portfolio',
          resources: [
            { name: 'Vimeo Video Editors Portfolio Channel', url: 'https://vimeo.com', type: 'Portfolio Platform', isFree: true },
            { name: 'Yash Raj Films Post-Production Careers', url: 'https://www.yashrajfilms.com', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'photographer',
    title: 'Commercial & Fashion Photographer',
    description: 'Captures high-resolution imagery for commercial advertising campaigns, fashion editorials, corporate events, e-commerce products, and architectural spaces. Controls studio strobe lighting setups, camera sensors, and Adobe Lightroom / Photoshop post-processing.',
    educationRequirements: 'B.F.A. / B.Des in Photography or Diploma in Commercial Photography from recognized institutes (NID, Light & Life Academy Ooty, Jamia Millia) + professional commercial portfolio.',
    educationPathways: [
      'Diploma in Professional Photography (1–2 years from Light & Life Academy or Sri Aurobindo Centre)',
      'B.F.A. in Photography / Applied Art (4 years from recognized art colleges)',
      'Apprenticeship Route: 2–3 Years as Assistant to an established commercial/fashion photographer'
    ],
    eligibilityRequirements: '10+2 from any recognized board. Technical mastery of camera exposure triangle (aperture, shutter speed, ISO), studio strobe modifiers, and high-end image retouching.',
    certificationsAndExams: [
      'Certified Professional Photographer (CPP - PPA)',
      'Adobe Certified Professional in Adobe Photoshop & Lightroom',
      'Phase One Certified Professional (Capture One Pro)'
    ],
    workEnvironment: 'Commercial photography studios in Mumbai, Delhi NCR, and Bengaluru, outdoor locations, runway fashion weeks, and client advertising sets.',
    marketDemand: 'Moderate to High',
    jobOutlook: 'Steady demand driven by e-commerce product cataloging (Amazon, Myntra, Flipkart), fashion apparel brands, destination weddings, and commercial advertising shoots.',
    salaryRange: { min: 300000, max: 1200000, currency: 'INR', source: 'AmbitionBox Photographer Salary 2024, PayScale India' },
    salarySource: 'AmbitionBox Photographer Salary 2024, PayScale India',
    salaryByExperience: {
      entryLevel: { min: 300000, max: 480000, label: 'Assistant Photographer / Product Shooter (0–2 yrs)' },
      earlyCareer: { min: 480000, max: 900000, label: 'Commercial Photographer / Retoucher (3–5 yrs)' },
      experienced: { min: 900000, max: 2000000, label: 'Lead Fashion / Advertising Photographer (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Top advertising, celebrity, and premium wedding photographers in India charge ₹1–3+ Lakhs per shoot day, earning upwards of ₹25–50+ LPA.'
    },
    careerProgression: [
      'Photographer\'s Assistant / Second Shooter',
      'Commercial / E-Commerce Photographer',
      'Senior Fashion / Advertising Photographer',
      'Creative Studio Owner / Visual Director',
      'Celebrity Photographer / International Editorial Specialist'
    ],
    employmentSectors: {
      government: 'Photo Division (Ministry of Information & Broadcasting), Archaeological Survey of India (ASI Documentation), Tourism Boards',
      privateSector: 'Fashion Brands & Apparel (Zara, FabIndia, Myntra), E-Commerce Photography Studios, Advertising Agencies, Luxury Wedding Production Houses'
    },
    timelineOverview: {
      totalEstimatedDuration: '3–4 Years (Education + Assistantship)',
      educationDuration: '1–2 Years (Specialized Photography Diploma or Degree)',
      prepDuration: '6 Months building a specialized commercial lookbook/portfolio',
      practicalTrainingDuration: '1–2 Years assisting an established master photographer on commercial sets',
      jobSearchDuration: 'Continuous commercial client pitching and agency agency representation',
      overlapNotes: 'Assistant photographers build personal portfolios during off-duty studio hours.',
      confidenceNote: 'Serving as a 1st assistant to a renowned photographer provides direct client connections and hands-on strobe lighting experience.'
    },
    sources: [
      { title: 'Light & Life Academy Ooty Curriculum Overview', url: 'https://www.llacademy.org', sourceAuthority: 'Light & Life Academy', verifiedDate: '2024-10-14' },
      { title: 'Professional Photographers of America (PPA) Standards', url: 'https://www.ppa.com', sourceAuthority: 'PPA Global', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Commercial Photographer Career Roadmap',
      description: 'Photography mastery route: exposure triangle, studio strobe lighting modifiers, tethered shooting (Capture One), frequency separation retouching, and commercial portfolio pitching.',
      totalEstimatedDuration: '3–4 Years',
      durationBreakdown: 'Camera Mechanics & Natural Light: 6 Months | Studio Strobe Lighting & Modifiers: 1 Year | Tethering & High-End Retouching: 1 Year | Master Assistantship & Commercial Pitching: 1 Year',
      overlapNotes: 'Shooting client test shoots runs concurrently with studio assistantships.',
      steps: [
        {
          stepNumber: 1,
          title: 'Exposure Triangle, Lens Optics & Manual Camera Operation',
          stageType: 'education',
          duration: '6 Months',
          description: 'Master manual camera controls (aperture f-stops, shutter speed, sensor ISO), focal lengths, depth of field, RAW histograms, and natural light direction.',
          topics: ['Exposure Triangle Interdependence', 'Focal Lengths (24mm, 50mm, 85mm, 70-200mm) Characteristics', 'RAW vs JPEG Dynamic Range & Color Profiles', 'Manual Focus Peaking and Metering Modes'],
          skillsToAcquire: ['Shooting Exclusively in Full Manual Mode', 'Reading Camera Exposure Histograms', 'Calculating Hyperfocal Distance'],
          activities: ['Shoot 100+ manual exposure photographs under harsh midday, golden hour, and blue hour lighting conditions', 'Demonstrate bokeh isolation versus maximum depth-of-field landscape sharpness'],
          completionCriteria: 'Consistently produce correctly exposed RAW images without clipped highlights or blocked shadows.',
          dependencies: 'DSLR or Mirrorless camera with manual controls',
          resources: [
            { name: 'Cambridge in Colour Photography Tutorials', url: 'https://www.cambridgeincolour.com', type: 'Free Learning Portal', isFree: true },
            { name: 'Understanding Exposure by Bryan Peterson', url: 'https://www.amphoto.com', type: 'Essential Book', isFree: false }
          ]
        },
        {
          stepNumber: 2,
          title: 'Studio Lighting, Strobes & Modifiers',
          stageType: 'skill_acquisition',
          duration: '1 Year',
          description: 'Control artificial light: studio flash strobes, continuous lights, lighting ratios (Key, Fill, Rim, Background), and light modifiers (softboxes, octas, beauty dishes, grids).',
          topics: ['Inverse Square Law for Light Falloff', 'Light Modifiers (Softbox, Beauty Dish, Snoot, Barn Doors)', 'Flash Sync Speed and High-Speed Sync (HSS)', '3-Point and 4-Point Commercial Lighting Setups'],
          skillsToAcquire: ['Handheld Incident Light Meter Operation', 'Sculpting Dimensional Light on Human Faces', 'Controlling Specular Highlights on Shiny Products'],
          activities: ['Execute a beauty portrait shoot using a beauty dish with grid and subtle silver reflector fill', 'Shoot a reflective glass bottle and metallic watch product setup with zero unwanted glare'],
          completionCriteria: 'Demonstrate precise control over 3-strobe studio lighting setup verified by test shoots.',
          dependencies: 'Manual Camera Exposure Mastery',
          resources: [
            { name: 'Light Science and Magic by Hunter, Biver, Fuqua', url: 'https://www.routledge.com', type: 'Essential Lighting Book', isFree: false },
            { name: 'Profoto Lighting Academy Videos', url: 'https://profoto.com/int/academy', type: 'Video Masterclasses', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Tethered Shooting & High-End Retouching (Capture One / Photoshop)',
          stageType: 'skill_acquisition',
          duration: '1 Year',
          description: 'Master live tethered shooting in Capture One Pro, color balance calibration (X-Rite ColorChecker), and non-destructive beauty retouching in Photoshop using frequency separation and dodge & burn.',
          topics: ['Capture One Pro Tethered Ingestion & Color Profiles', 'X-Rite ColorChecker Passport Calibration', 'Frequency Separation for Flawless Skin Texture', 'Micro Dodge and Burn for Facial Contouring'],
          skillsToAcquire: ['Live Client Monitor Tethering', 'Frequency Separation Skin Retouching without Texture Loss', 'Color Grading in Capture One Layers'],
          activities: ['Execute tethered lookbook shoot capturing 30+ fashion garment variations with instant client review', 'Perform high-end frequency separation and micro-dodge-and-burn retouching on an editorial beauty portrait'],
          completionCriteria: 'Pass Phase One Capture One Certified Professional assessment or equivalent portfolio review.',
          dependencies: 'Studio Lighting Proficiency',
          resources: [
            { name: 'Capture One Learning Hub', url: 'https://learn.captureone.com', type: 'Official Training', isFree: true },
            { name: 'Phlearn Photoshop Retouching Tutorials', url: 'https://phlearn.com', type: 'Learning Platform', isFree: false }
          ]
        },
        {
          stepNumber: 4,
          title: 'Master Assistantship, Portfolio Pitching & Commercial Client Booking',
          stageType: 'practical_experience',
          duration: '1 Year',
          description: 'Work as 1st assistant to a premier commercial photographer, curate a specialized portfolio website, register with creative agencies, and book independent commercial shoots.',
          topics: ['Commercial Shoot Call Sheets & Equipment Rental', 'Model Casting & Hair/Makeup Artist Coordination', 'Commercial Usage Rights Licensing & Invoicing'],
          skillsToAcquire: ['Running Professional Studio Sets as 1st Assistant', 'Drafting Commercial Photography Usage Licenses', 'Negotiating Client Day Rates and Production Budgets'],
          activities: ['Assist on 20+ large-scale commercial advertising shoots managing lighting and digital tech stations', 'Launch independent photography portfolio website with 3 distinct commercial genre galleries'],
          completionCriteria: 'Booking independent commercial assignments with corporate brands or advertising agencies.',
          dependencies: 'High-end retouching and lighting mastery',
          resources: [
            { name: 'Models.com Fashion Photography Directory', url: 'https://models.com', type: 'Industry Directory', isFree: true },
            { name: 'Light & Life Academy Student Portfolios', url: 'https://www.llacademy.org', type: 'Inspiration Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'fashion-designer',
    title: 'Fashion Designer & Apparel Stylist',
    description: 'Designs apparel collections, haute couture, luxury ethnic wear, and commercial ready-to-wear garments. Executes trend forecasting, fashion illustration, flat pattern drafting, fabric sourcing, and garment construction across Indian fashion export houses, retail brands, and designer labels.',
    educationRequirements: 'B.Des in Fashion Design (4 years) from the National Institute of Fashion Technology (NIFT) via NIFT Entrance Examination or National Institute of Design (NID). Proficiency in pattern making, draping, and Adobe Illustrator / CLO 3D.',
    educationPathways: [
      'B.Des in Fashion Design (4 years from NIFT campuses across India via NIFT Entrance Exam)',
      'B.Des / M.Des in Apparel Design from NID (National Institute of Design)',
      'Specialized Fashion Design Diploma (Pearl Academy, Symbiosis Institute of Design)'
    ],
    eligibilityRequirements: '10+2 from any recognized board. Clearing the NIFT General Ability Test (GAT) and Creative Ability Test (CAT) followed by the Situation Test.',
    certificationsAndExams: [
      'NIFT Entrance Examination (GAT + CAT + Situation Test)',
      'NID DAT (Design Aptitude Test)',
      'CLO 3D Certified Fashion Design Specialist'
    ],
    workEnvironment: 'Fashion designer ateliers (Sabyasachi, Manish Malhotra, Anita Dongre), export houses, apparel retail giants (Aditya Birla Fashion, Reliance Retail, Myntra), and textile manufacturing centers in Delhi NCR, Mumbai, Jaipur, and Bengaluru.',
    marketDemand: 'Moderate to High',
    jobOutlook: 'Rapidly expanding driven by India\'s booming organized apparel retail, booming bridal/luxury ethnic wear market ($15B+), sustainable textiles, and global fashion export manufacturing.',
    salaryRange: { min: 380000, max: 1500000, currency: 'INR', source: 'NIFT Campus Placement Reports 2024, AmbitionBox Fashion Designer' },
    salarySource: 'NIFT Campus Placement Reports 2024, AmbitionBox Fashion Designer',
    salaryByExperience: {
      entryLevel: { min: 380000, max: 600000, label: 'Assistant Fashion Designer (0–2 yrs)' },
      earlyCareer: { min: 600000, max: 1100000, label: 'Fashion Designer / Category Lead (3–5 yrs)' },
      experienced: { min: 1100000, max: 2400000, label: 'Senior Head Designer / Creative Director (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Top designers in luxury ethnic couture and Category Heads in corporate fashion retail (Myntra, Reliance Trends, Aditya Birla) earn ₹18–35+ LPA.'
    },
    careerProgression: [
      'Assistant Fashion Designer',
      'Associate Fashion Designer / Stylist',
      'Fashion Designer / Apparel Category Lead',
      'Senior Designer / Design Manager',
      'Creative Director / Founder of Designer Label'
    ],
    employmentSectors: {
      government: 'Handlooms and Handicrafts Export Promotion Council, Central Silk Board, Khadi and Village Industries Commission (KVIC)',
      privateSector: 'Luxury Couture Ateliers (Sabyasachi, Tarun Tahiliani, Anita Dongre), Corporate Retail (Aditya Birla Fashion & Retail, Reliance Brands, Tata Trent / Westside), Apparel Export Houses'
    },
    timelineOverview: {
      totalEstimatedDuration: '4 Years (B.Des Degree including graduation collection)',
      educationDuration: '4 Years (8 Semesters at NIFT/NID)',
      prepDuration: '6–12 Months coaching for NIFT CAT/GAT and Situation Test',
      practicalTrainingDuration: '2–3 Months mandatory industrial internship in garment export or designer house',
      jobSearchDuration: 'Direct campus placement at NIFT National Campus Placement drive',
      overlapNotes: 'Graduation collection (designing, pattern drafting, sourcing, and sewing 5 complete ensemble looks) takes place in the final semester.',
      confidenceNote: 'Indian fashion design requires strong appreciation of indigenous artisanal crafts, embroidery techniques (Zardozi, Chikankari), and textile weaves.'
    },
    sources: [
      { title: 'National Institute of Fashion Technology (NIFT) Official Portal', url: 'https://nift.ac.in', sourceAuthority: 'Ministry of Textiles India', verifiedDate: '2024-10-14' },
      { title: 'Fashion Design Council of India (FDCI)', url: 'https://www.fdci.org', sourceAuthority: 'FDCI', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Fashion Designer Career Roadmap',
      description: 'Couture and apparel pathway: NIFT entrance, fashion sketching, textile science, flat pattern drafting, CLO 3D digital draping, garment sewing construction, and runway graduation collection.',
      totalEstimatedDuration: '4 Years',
      durationBreakdown: 'Design Foundations & Textile Science: Year 1 | Pattern Drafting & Garment Construction: Year 2 | Draping & CLO 3D Digital Fashion: Year 3 | Industry Internship & Graduation Collection: Year 4',
      overlapNotes: 'Industrial internships occur during summer breaks; final collection is presented on the NIFT runway.',
      steps: [
        {
          stepNumber: 1,
          title: 'Design Foundations, Fashion Illustration & Textile Science',
          stageType: 'education',
          duration: 'Year 1',
          description: 'Master croquis fashion figure drawing (9-head and 10-head proportion figures), fabric rendering, textile fiber characteristics (natural, synthetic, weaves), and color forecast trends.',
          topics: ['Croquis Figure Drawing & Body Proportions', 'Fabric Rendering (Silk, Denim, Chiffon, Leather)', 'Textile Fiber Identification (Cotton, Silk, Wool, Synthetics)', 'Color Forecasting (Pantone / WGSN Trends)'],
          skillsToAcquire: ['Rapid Fashion Sketching with Copic Markers', 'Textile Weave Identification (Plain, Twill, Satin)', 'Trend Board and Mood Board Formulation'],
          activities: ['Illustrate 20 croquis figures wearing original garment concept designs with fabric shading', 'Perform burn and chemical solubility tests on 15 fabric swatches to identify fiber content'],
          completionCriteria: 'Clear 1st year design foundation coursework at NIFT/NID.',
          dependencies: 'Qualifying NIFT / NID Entrance Examination',
          resources: [
            { name: 'NIFT Foundation Program Curriculum', url: 'https://nift.ac.in', type: 'Official Curriculum', isFree: true },
            { name: 'WGSN Fashion Trend Forecasting Insights', url: 'https://www.wgsn.com', type: 'Trend Agency', isFree: false }
          ]
        },
        {
          stepNumber: 2,
          title: 'Flat Pattern Drafting & Garment Sewing Construction',
          stageType: 'skill_acquisition',
          duration: 'Year 2',
          description: 'Master flat pattern drafting: basic bodice block, skirt block, sleeve sloper, dart manipulation, collar variations, and industrial single-needle sewing machine construction.',
          topics: ['Standard Bodice, Skirt & Trouser Slopers', 'Dart Manipulation Techniques (Slash and Spread, Pivotal Transfer)', 'Seam Finishes, Zippers, and Buttonhole Construction', 'Industrial Lockstitch Machine Operation & Overlocking'],
          skillsToAcquire: ['Drafting Accurate Cardboard Sloper Blocks', 'Industrial Machine Garment Stitching', 'Dart Manipulation for Bodice Styling'],
          activities: ['Draft and sew a fitted muslin toile prototype from original flat pattern measurements', 'Construct a finished tailored women’s jacket with full lining and set-in sleeves'],
          completionCriteria: 'Pass pattern making and garment construction jury review with clean fit evaluation.',
          dependencies: 'Passing 1st Year Fashion Foundations',
          resources: [
            { name: 'Patternmaking for Fashion Design by Helen Joseph-Armstrong', url: 'https://www.pearson.com', type: 'Essential Textbook', isFree: false },
            { name: 'NPTEL Fabric Manufacture and Apparel Construction', url: 'https://nptel.ac.in', type: 'Course', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Draping on Mannequins & Digital Fashion Design (CLO 3D)',
          stageType: 'skill_acquisition',
          duration: 'Year 3',
          description: 'Drape muslin fabric directly on dress forms to sculpt organic silhouettes, and master digital 3D garment simulation in CLO 3D / Marvelous Designer.',
          topics: ['Couture Muslin Draping on Dress Forms', 'Bias-Cut Draping & Cowl Silhouettes', 'CLO 3D Virtual Garment Creation and Simulation', 'Tech Pack Creation with Flat Technical Drawings in Adobe Illustrator'],
          skillsToAcquire: ['Hands-On Muslin Draping on Dress Forms', 'CLO 3D Digital Fabric Rendering & Avatar Fitting', 'Writing Production-Ready Factory Tech Packs'],
          activities: ['Drape an evening gown on a dress form, transfer markings to paper, and cut production patterns', 'Create a 3D digital runway simulation of an apparel collection in CLO 3D'],
          completionCriteria: 'Complete technical tech packs and pass 3D digital design jury.',
          dependencies: 'Pattern Drafting and Sewing Proficiency',
          resources: [
            { name: 'CLO 3D Official Training Portal', url: 'https://www.clo3d.com/training', type: 'Software Training', isFree: true },
            { name: 'The Art of Fashion Draping by Connie Crawford', url: 'https://www.bloomsbury.com', type: 'Textbook Reference', isFree: false }
          ]
        },
        {
          stepNumber: 4,
          title: 'Graduation Fashion Runway Collection & Industry Placement',
          stageType: 'practical_experience',
          duration: 'Year 4',
          description: 'Undergo 8-week industrial internship at an apparel export house or designer atelier, followed by designing, fabric sourcing, and sewing a 5-look graduation collection for the NIFT fashion show.',
          topics: ['Industrial Mass Production Workflow', 'Sourcing Artisanal Indian Textiles & Trims', 'Fashion Runway Show Choreography & Styling', 'NIFT National Campus Placement Interviews'],
          skillsToAcquire: ['End-to-End Collection Development', 'Commercial Sourcing Negotiation', 'Collection Presentation to Industry Recruiters'],
          activities: ['Design, source fabrics, and stitch a 5-look cohesive fashion collection presented before industry jury', 'Participate in NIFT National Campus Placement drive for corporate retail or export house recruitment'],
          completionCriteria: 'Graduation with B.Des degree in Fashion Design and placement as Assistant Designer.',
          dependencies: 'Successful completion of all academic and studio credits',
          resources: [
            { name: 'NIFT Placement Cell Portal', url: 'https://nift.ac.in/placements', type: 'Official Placement', isFree: true },
            { name: 'Aditya Birla Fashion and Retail Careers', url: 'https://www.abfrl.com/careers/', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'interior-designer',
    title: 'Interior Designer & Spatial Planner',
    description: 'Plans, designs, and executes aesthetic, functional, and safe interior environments for residential apartments, corporate offices, hospitality hotels, and retail stores. Coordinates 2D space planning (AutoCAD), 3D photorealistic visualization (SketchUp, 3ds Max, V-Ray), material procurement, and site execution.',
    educationRequirements: 'B.Des in Interior Design (4 years via UCEED/NID/college entrance), B.Sc in Interior Design (3 years), or Diploma in Interior Architecture. Proficiency in AutoCAD, SketchUp, 3ds Max/V-Ray, and MEP (Mechanical, Electrical, Plumbing) coordination.',
    educationPathways: [
      'B.Des in Interior Design (4 years from CEPT University, NID, or recognized universities)',
      'B.Sc in Interior Design & Decoration (3 years)',
      'Professional Diploma in Interior Architecture and Space Planning (2 years)'
    ],
    eligibilityRequirements: '10+2 from any recognized board (minimum 50% aggregate). Creative spatial aptitude, technical drawing precision, and understanding of building materials.',
    certificationsAndExams: [
      'Institute of Indian Interior Designers (IIID) Membership',
      'AutoCAD Certified Professional (Autodesk)',
      'SketchUp Certified Professional / V-Ray Certified User'
    ],
    workEnvironment: 'Interior design consultancies, architectural firms, turnkey design-and-build contractors (Livspace, Homelane), and on-site construction projects across major metros.',
    marketDemand: 'Very High',
    jobOutlook: 'Rapid expansion catalyzed by India\'s residential real estate boom, modern corporate co-working spaces, luxury boutique hotels, and turnkey home interior platforms.',
    salaryRange: { min: 350000, max: 1200000, currency: 'INR', source: 'AmbitionBox Interior Designer Salary 2024, PayScale India' },
    salarySource: 'AmbitionBox Interior Designer Salary 2024, PayScale India',
    salaryByExperience: {
      entryLevel: { min: 350000, max: 550000, label: 'Junior Interior Designer / 3D Visualizer (0–2 yrs)' },
      earlyCareer: { min: 550000, max: 900000, label: 'Senior Interior Designer / Project Lead (3–5 yrs)' },
      experienced: { min: 900000, max: 1800000, label: 'Principal Interior Designer / Studio Owner (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Successful turnkey interior contractors and independent boutique studio owners charging design fees (₹150–400/sq.ft) or percentage commissions earn ₹18–35+ LPA.'
    },
    careerProgression: [
      'Junior Draftsperson / 3D Visualizer',
      'Interior Designer / Spatial Planner',
      'Senior Project Designer / Site Coordinator',
      'Design Director / Associate Partner',
      'Studio Founder / Turnkey Contracting Entrepreneur'
    ],
    employmentSectors: {
      government: 'CPWD Interior Divisions, NBCC Architecture & Interior Wing, India Tourism Development Corporation (ITDC Hotel Renovations)',
      privateSector: 'Turnkey Platforms (Livspace, HomeLane, Bonito Designs), Architectural & Interior Firms (Morphogenesis, Studio Lotus), Corporate Real Estate MNCs (JLL, CBRE)'
    },
    timelineOverview: {
      totalEstimatedDuration: '3–4 Years (Degree) + 6 Months on-site execution internship',
      educationDuration: '3–4 Years (B.Des / B.Sc)',
      prepDuration: '3–6 Months mastering 3ds Max/V-Ray photorealistic rendering and working drawings',
      practicalTrainingDuration: '6 Months mandatory on-site construction and carpentry internship',
      jobSearchDuration: '1–2 Months portfolio review hiring cycle',
      overlapNotes: 'Working drawings and 3D modeling skills are honed during live academic studio projects.',
      confidenceNote: 'Knowledge of practical carpentry joinery, false ceiling electrical layout, plumbing pipe routing, and Bill of Quantities (BOQ) preparation is essential for site execution.'
    },
    sources: [
      { title: 'Institute of Indian Interior Designers (IIID)', url: 'https://www.iiid.in', sourceAuthority: 'IIID India', verifiedDate: '2024-10-14' },
      { title: 'CEPT University Faculty of Design Programs', url: 'https://cept.ac.in', sourceAuthority: 'CEPT Ahmedabad', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Interior Designer Career Roadmap',
      description: 'Spatial architecture journey: anthropometrics, 2D space planning in AutoCAD, building materials, MEP coordination, 3D V-Ray visualization, Bill of Quantities (BOQ), and site execution.',
      totalEstimatedDuration: '3.5–4 Years',
      durationBreakdown: 'Spatial Design & Anthropometrics: 1 Year | 2D AutoCAD Working Drawings & MEP: 1 Year | 3D Modeling (SketchUp/3ds Max/V-Ray): 1 Year | Site Execution & BOQ Internship: 6 Months',
      overlapNotes: 'Live site visits to carpentry workshops and construction sites occur throughout 2nd and 3rd year.',
      steps: [
        {
          stepNumber: 1,
          title: 'Anthropometrics, Space Planning & Design Principles',
          stageType: 'education',
          duration: '1 Year',
          description: 'Master human body dimensions and clearances (anthropometrics), residential spatial zoning (living, kitchen work triangle, bedroom clearances), ergonomics, and basic manual drafting.',
          topics: ['Anthropometrics & Human Clearance Standards', 'Kitchen Ergonomics (Golden Work Triangle)', 'Space Zoning & Circulation Flow Paths', 'Manual Orthographic Projections (Plans, Elevations, Sections)'],
          skillsToAcquire: ['Manual Architectural Drafting Precision', 'Ergonomic Space Planning', 'Spatial Circulation Mapping'],
          activities: ['Draft manual 1:50 scale floor plans and section elevations for a 2BHK residential apartment', 'Design an ergonomic modular kitchen layout incorporating refrigerator, sink, and hob clearance zones'],
          completionCriteria: 'Pass 1st year design studio jury evaluations with compliant space plans.',
          dependencies: '10+2 from recognized board',
          resources: [
            { name: 'Time-Saver Standards for Interior Design and Space Planning', url: 'https://www.mheducation.com', type: 'Essential Reference', isFree: false },
            { name: 'NPTEL Interior Design Principles', url: 'https://nptel.ac.in', type: 'Course', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'AutoCAD Working Drawings & MEP Coordination',
          stageType: 'skill_acquisition',
          duration: '1 Year',
          description: 'Create production working drawings in AutoCAD: demolition plans, electrical/lighting layouts, reflected ceiling plans (RCP), plumbing schematics, and carpentry joinery details.',
          topics: ['AutoCAD Layers, Dimension Styles, and Xrefs', 'Reflected Ceiling Plan (RCP) & False Ceiling Details', 'Electrical Conduit Routing & Switching Layouts', 'Carpentry Joinery Details (Wardrobe Sections, Modular Fittings)'],
          skillsToAcquire: ['AutoCAD Production Drafting Speed', 'Coordinating Electrical Points with Furniture Layouts', 'Drafting Detailed Wardrobe Internal Sections'],
          activities: ['Produce a full set of 15 working drawing sheets for a commercial office interior project', 'Draft millimeter-accurate millwork detail drawings for custom TV units and credenzas'],
          completionCriteria: 'Clear technical drawing review with zero dimension conflicts.',
          dependencies: 'Space Planning Fundamentals',
          resources: [
            { name: 'Autodesk AutoCAD Official Tutorials', url: 'https://knowledge.autodesk.com', type: 'Official Guides', isFree: true },
            { name: 'Architectural Graphic Standards Reference', url: 'https://www.wiley.com', type: 'Textbook Reference', isFree: false }
          ]
        },
        {
          stepNumber: 3,
          title: '3D Modeling & Photorealistic Rendering (SketchUp / 3ds Max / V-Ray)',
          stageType: 'skill_acquisition',
          duration: '1 Year',
          description: 'Build 3D interior spaces in Trimble SketchUp or Autodesk 3ds Max, apply PBR materials, set up realistic artificial lighting (IES lights, ambient fill), and render in V-Ray or Corona.',
          topics: ['SketchUp 3D Interior Massing & Layer Organization', 'Physically Based Rendering (PBR) Texturing (Wood, Marble, Metal, Fabric)', 'V-Ray / Corona Artificial Lighting (Spotlights, LED Strips, Chandeliers)', 'Camera Composition, Depth of Field & Post-Processing in Photoshop'],
          skillsToAcquire: ['3D Modeling of Complex Interior Spaces', 'Photorealistic Lighting Setup in V-Ray', 'High-Resolution 4K Image Rendering'],
          activities: ['Model and render 4 photorealistic views of a luxury master bedroom with custom lighting and materials', 'Create a 360-degree interactive panoramic render for virtual reality client walkthroughs'],
          completionCriteria: 'Build a 3D portfolio demonstrating photorealistic rendering indistinguishable from real photography.',
          dependencies: 'AutoCAD Plan Importation Knowledge',
          resources: [
            { name: 'Chaos Group V-Ray Official Tutorials', url: 'https://www.chaos.com', type: 'Official Training', isFree: true },
            { name: 'SketchUp Campus Free Courses', url: 'https://learn.sketchup.com', type: 'Free Official Learning', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Bill of Quantities (BOQ), Site Supervision & Turnkey Delivery',
          stageType: 'practical_experience',
          duration: '6 Months',
          description: 'Complete on-site construction internship; prepare itemized Bill of Quantities (BOQ), negotiate vendor quotes (plywood, laminates, hardware), inspect carpentry work, and hand over completed sites.',
          topics: ['Bill of Quantities (BOQ) Itemized Costing in Excel', 'Material Specifications (MDF vs BWP Plywood, Veneers, Quartz)', 'On-Site Quality Audits (Plumb lines, Leveling, Paint Finishes)', 'Turnkey Project Handover Protocol'],
          skillsToAcquire: ['Comprehensive BOQ Cost Estimation', 'Vendor and Contractor Negotiation', 'Site Snag List Verification'],
          activities: ['Prepare an itemized ₹25-Lakh BOQ spreadsheet for a residential apartment project', 'Conduct daily on-site supervision of false ceiling framing, electrical conduit laying, and tile installation'],
          completionCriteria: 'Appointment as Interior Designer or Project Coordinator in design consultancy or turnkey company.',
          dependencies: '3D modeling, working drawings, and material knowledge',
          resources: [
            { name: 'Livspace Careers Portal', url: 'https://www.livspace.com/in/careers', type: 'Company Portal', isFree: true },
            { name: 'HomeLane Careers Portal', url: 'https://www.homelane.com/careers', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'architect',
    title: 'Architect (B.Arch / COA Registered)',
    description: 'Envisions, plans, designs, and oversees the construction of residential complexes, commercial buildings, institutional campuses, and urban infrastructure. Integrates aesthetics, structural engineering, building services, environmental sustainability (GRIHA/IGBC), and local municipal building bye-laws.',
    educationRequirements: 'B.Arch (Bachelor of Architecture - 5 years) recognized by the Council of Architecture (CoA) via NATA (National Aptitude Test in Architecture) or JEE Main Paper 2. Mandatory registration with the Council of Architecture (CoA) to legally practice as an Architect in India.',
    educationPathways: [
      'NATA / JEE Main Paper 2 -> 5-Year B.Arch program from CoA-approved architectural institutions (IITs, NITs, SPA Delhi/Bhopal/Vijayawada, CEPT)',
      'B.Arch followed by M.Arch in Urban Design, Landscape Architecture, or Sustainable Architecture (2 years via GATE AR / CEED)',
      'Mandatory registration with Council of Architecture (CoA) under the Architects Act 1972'
    ],
    eligibilityRequirements: '10+2 with Physics, Chemistry, and Mathematics (PCM) with minimum 50% aggregate (or 10+3 Diploma with Mathematics). Mandatory qualifying score in NATA or JEE Main Paper 2.',
    certificationsAndExams: [
      'NATA (National Aptitude Test in Architecture - CoA)',
      'JEE Main Paper 2 (B.Arch)',
      'Council of Architecture (CoA) Registration (CA/YYYY/XXXXX)',
      'IGBC / GRIHA Certified Green Building Accredited Professional'
    ],
    workEnvironment: 'Architectural design studios in major metros, real estate developer planning offices, urban planning consultancies, and on-site building construction projects.',
    marketDemand: 'High',
    jobOutlook: 'Strong sustained demand driven by India\'s rapid urban development, Smart Cities Mission, transit-oriented infrastructure, affordable housing (PMAY), and corporate real estate expansion.',
    salaryRange: { min: 400000, max: 1800000, currency: 'INR', source: 'Council of Architecture Scale of Charges Guidelines, AmbitionBox Architect Salary' },
    salarySource: 'Council of Architecture Scale of Charges Guidelines, AmbitionBox Architect Salary',
    salaryByExperience: {
      entryLevel: { min: 400000, max: 650000, label: 'Junior Architect / Project Architect (0–2 yrs)' },
      earlyCareer: { min: 650000, max: 1200000, label: 'Senior Architect / Design Team Lead (3–5 yrs)' },
      experienced: { min: 1200000, max: 2500000, label: 'Principal Architect / Partner / Studio Head (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Council of Architecture recommends minimum professional fee scale of 2.5–5% of total project construction cost. Principal partners and independent practicing architects designing large residential/institutional projects earn ₹25–60+ LPA.'
    },
    careerProgression: [
      'Trainee Architect (Practical Training)',
      'Junior Architect / Architectural Draftsperson',
      'Senior Project Architect / Studio Lead',
      'Associate Director / Partner',
      'Principal Architect / Founder of Architectural Practice'
    ],
    employmentSectors: {
      government: 'Central Public Works Department (CPWD Architects via UPSC), Housing and Urban Development Corporation (HUDCO), State PWDs, Delhi Development Authority (DDA), Smart Cities SPVs',
      privateSector: 'Top Architecture Consultancies (Morphogenesis, Hafeez Contractor, Sanjay Puri Architects), Real Estate Developers (Godrej Properties, DLF, Prestige, Oberoi), Engineering EPCs (L&T)'
    },
    timelineOverview: {
      totalEstimatedDuration: '5.5 Years (5 Years B.Arch + 6 Months Mandatory CoA Practical Training)',
      educationDuration: '5 Years (10 Semesters)',
      prepDuration: '6–12 Months NATA and JEE Main Paper 2 entrance coaching during 11th/12th grade',
      practicalTrainingDuration: '1 Semester (6 Months) mandatory full-time architectural office internship',
      jobSearchDuration: '1–2 Months studio portfolio presentation or direct campus recruitment',
      overlapNotes: 'Architectural design studio projects and juries occur every semester.',
      confidenceNote: 'Under Section 37 of the Architects Act 1972, only individuals possessing a valid Council of Architecture registration certificate can legally sign municipal building sanction drawings.'
    },
    sources: [
      { title: 'Council of Architecture (CoA) Official Portal & Regulations', url: 'https://www.coa.gov.in', sourceAuthority: 'Council of Architecture', verifiedDate: '2024-10-14' },
      { title: 'National Aptitude Test in Architecture (NATA) Official Portal', url: 'https://www.nata.in', sourceAuthority: 'CoA India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Architect (CoA Registered) Career Roadmap',
      description: 'CoA-regulated architectural route: NATA / JEE Paper 2 entrance, 5-year B.Arch studio curriculum, building services and climatology, municipal bye-laws, 6-month office internship, and CoA licensing.',
      totalEstimatedDuration: '5 Years',
      durationBreakdown: 'Architectural Design Studios & Graphics: Years 1-2 | Building Materials, Construction & Structures: Year 3 | Urban Context & 6-Month Office Training: Year 4 | Thesis Project & CoA Registration: Year 5',
      overlapNotes: '6 months of professional architectural office training takes place in the 7th or 8th semester.',
      steps: [
        {
          stepNumber: 1,
          title: 'NATA Entrance & First Professional Architectural Studios',
          stageType: 'education',
          duration: 'Years 1–2',
          description: 'Qualify NATA/JEE Paper 2; study architectural graphics, solid geometry, sciography, history of Indian and world architecture, and basic residential design studios.',
          topics: ['Architectural Graphics & Measured Drawing', 'History of Architecture (Buddhist, Dravidian, Islamic, Modern)', 'Anthropometrics & Residential Space Design', 'Building Materials: Bricks, Mortar, Stone, Timber'],
          skillsToAcquire: ['Manual Drafting & Architectural Lettering', 'Physical Architectural Scale Model Making', 'Sciography (Sun Shade and Shadow Projection)'],
          activities: ['Conduct a measured documentation drawing survey of a historic heritage building in 1:20 scale', 'Build a 1:50 scale architectural physical model of a single-family villa'],
          completionCriteria: 'Clear 1st and 2nd year architectural design juries with satisfactory studio portfolios.',
          dependencies: '10+2 with PCM and valid NATA / JEE Main Paper 2 score',
          resources: [
            { name: 'CoA Minimum Standards of Architectural Education 2020', url: 'https://www.coa.gov.in', type: 'Official Regulations', isFree: true },
            { name: 'NATA Official Examination Syllabus', url: 'https://www.nata.in', type: 'Official Portal', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Building Construction, Climatology & Building Services (MEP)',
          stageType: 'skill_acquisition',
          duration: 'Year 3',
          description: 'Master RCC framed structures, foundation engineering, climate-responsive passive architecture (sun-path diagrams, wind vectors), building acoustics, firefighting, and HVAC systems.',
          topics: ['RCC Construction Details (Beams, Columns, Slabs, Expansion Joints)', 'Climatology & Solar Passive Architecture (GRIHA Norms)', 'Building Services: HVAC, Elevators, Fire Protection, Plumbing', 'Revit BIM & Building Information Modeling'],
          skillsToAcquire: ['Drafting RCC Construction Details', 'Analyzing Sun-Path Diagrams (Stereographic Projection)', 'Autodesk Revit BIM Modeling'],
          activities: ['Design a multi-story institutional complex with integrated climate-responsive shading louvers', 'Produce a coordinated Building Information Model (BIM) integrating structural and MEP services'],
          completionCriteria: 'Pass 3rd year university architectural design jury and structural examinations.',
          dependencies: 'Passing 2nd Year B.Arch Studios',
          resources: [
            { name: 'National Building Code of India (NBC 2016)', url: 'https://www.bis.gov.in', type: 'Government Standard', isFree: false },
            { name: 'GRIHA Green Building Rating System Guidelines', url: 'https://www.grihaindia.org', type: 'Environmental Standard', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Mandatory Architectural Office Internship & Municipal Bye-Laws',
          stageType: 'practical_experience',
          duration: 'Year 4 (Semesters 7–8)',
          description: 'Undergo mandatory 6-month continuous practical training in a registered architectural firm; work on municipal sanction drawings, site inspections, and master local building bye-laws (FAR, Setbacks).',
          topics: ['Municipal Sanction Drawings (NBC, Master Plan Bye-Laws)', 'Floor Area Ratio (FAR) and Ground Coverage Calculations', 'On-Site Construction Verification & Contractor Coordination', 'Preparation of Tender Documents and Specifications'],
          skillsToAcquire: ['Municipal Building Bye-Law Compliance', 'Client Meeting Minutes Documentation', 'Site Concrete Pour and Reinforcement Inspection'],
          activities: ['Prepare sanction drawings submitted to municipal authority (e.g., BBMP, MCGM, DDA)', 'Complete 100+ hours of on-site architectural supervision during building construction'],
          completionCriteria: 'Approval of 6-month training logbook signed by a Council of Architecture registered architect.',
          dependencies: 'Passing 3rd Year B.Arch Studies',
          resources: [
            { name: 'Model Building Bye-Laws (Ministry of Housing and Urban Affairs)', url: 'https://mohua.gov.in', type: 'Government Guidelines', isFree: true },
            { name: 'School of Planning and Architecture (SPA Delhi) Studio Archive', url: 'https://spa.ac.in', type: 'Academic Portal', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Architectural Thesis Project & Council of Architecture (CoA) Registration',
          stageType: 'certification',
          duration: 'Year 5',
          description: 'Undertake an independent comprehensive architectural thesis (e.g., airport terminal, hospital campus, urban revitalisation), defend before external jury, and obtain CoA registration certificate.',
          topics: ['Comprehensive Architectural Thesis Project', 'Professional Practice, Ethics & Code of Conduct', 'Architectural Competitions & Fee Scales (CoA Guidelines)'],
          skillsToAcquire: ['Master Planning Complex Architectural Campuses', 'Thesis Defense before Eminent External Jurors', 'Council of Architecture Professional Ethics'],
          activities: ['Present and defend final 10-sheet comprehensive architectural thesis before an eminent jury of chief architects', 'Submit graduation degree credentials to the Council of Architecture for permanent registration'],
          completionCriteria: 'Award of B.Arch Degree; issuance of Council of Architecture Registration Certificate (CA number).',
          dependencies: 'Successful completion of 10 semesters of B.Arch curriculum',
          resources: [
            { name: 'Council of Architecture Registration Portal', url: 'https://www.coa.gov.in/index1.php?lang=1&level=1&sublinkid=268&lid=230', type: 'Official Licensing', isFree: true },
            { name: 'Morphogenesis Architects Careers', url: 'https://www.morphogenesis.org/careers/', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'content-writer',
    title: 'Content Writer & Copywriter',
    description: 'Researches and crafts high-converting copy, search-engine optimized (SEO) articles, whitepapers, email newsletters, and brand storytelling across digital agencies, SaaS companies, and publishing platforms. Employs keyword research, tone-of-voice adaptation, and editorial style guides.',
    educationRequirements: 'Bachelor\'s in English Literature, Journalism, Mass Communication, or Marketing. Demonstrable portfolio of published long-form articles, ad copy, and SEO content on Medium, Substack, or personal blog.',
    educationPathways: [
      'B.A. in English Literature / Journalism / Mass Communication (3 years)',
      'HubSpot Content Marketing Certification + SEO Copywriting Portfolio',
      'Postgraduate Diploma in Journalism & Mass Communication (IIMC / Xavier Institute)'
    ],
    eligibilityRequirements: '10+2 from any stream. Exceptional written English grammar, storytelling versatility, research depth, and understanding of on-page SEO principles.',
    certificationsAndExams: [
      'HubSpot Content Marketing Certified Professional',
      'Semrush Content-Led SEO Certification',
      'Google Digital Garage: Fundamentals of Digital Marketing'
    ],
    workEnvironment: 'B2B SaaS tech companies, digital content agencies, media publications, advertising agencies, and flexible remote writing studios nationwide.',
    marketDemand: 'High',
    jobOutlook: 'Strong demand for strategic, research-backed writers who can write authentic, high-value editorial content that AI cannot replicate, especially in B2B SaaS, fintech, and healthcare.',
    salaryRange: { min: 320000, max: 950000, currency: 'INR', source: 'AmbitionBox Content Writer Salary 2024, PayScale India' },
    salarySource: 'AmbitionBox Content Writer Salary 2024, PayScale India',
    salaryByExperience: {
      entryLevel: { min: 320000, max: 480000, label: 'Junior Content Writer (0–2 yrs)' },
      earlyCareer: { min: 480000, max: 800000, label: 'Senior Content Strategist / Copywriter (3–5 yrs)' },
      experienced: { min: 800000, max: 1500000, label: 'Lead Content Strategist / Editorial Director (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Senior B2B SaaS content marketers and tech copywriters working with international clients earn ₹12–22+ LPA.'
    },
    careerProgression: [
      'Content Writing Intern',
      'Content Writer / Copywriter',
      'Senior Content Specialist / Editor',
      'Content Marketing Manager / Editorial Lead',
      'Director of Content Strategy / VP Brand Communications'
    ],
    employmentSectors: {
      government: 'Press Information Bureau (PIB), Publications Division, Sahitya Akademi, National Book Trust',
      privateSector: 'B2B SaaS Companies (Chargebee, Freshworks, Zoho), Digital Marketing Agencies, Media Publications (YourStory, Inc42, Mint), E-Commerce Brands'
    },
    timelineOverview: {
      totalEstimatedDuration: '3 Years (Degree) + 3–6 Months portfolio writing',
      educationDuration: '3 Years (B.A. in English / Journalism)',
      prepDuration: '3 Months building a collection of 5–10 published niche articles',
      practicalTrainingDuration: '3–6 Months content agency internship',
      jobSearchDuration: '1–2 Months writing assignment review and placement',
      overlapNotes: 'Publishing blog posts and freelance writing happens concurrently with college studies.',
      confidenceNote: 'Submitting a live portfolio demonstrating rankings on Google page 1 for target keywords drastically accelerates hiring.'
    },
    sources: [
      { title: 'HubSpot Content Marketing Academy', url: 'https://academy.hubspot.com/courses/content-marketing', sourceAuthority: 'HubSpot', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Content Writer Salary in India', url: 'https://www.ambitionbox.com/salaries/content-writer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Content Writer Career Roadmap',
      description: 'Editorial and copywriting journey: headline formulas, search intent research, on-page SEO optimization, B2B thought leadership, and published editorial portfolio.',
      totalEstimatedDuration: '3 Years',
      durationBreakdown: 'Writing Foundations & Grammar: 1 Year | SEO Research & Content Marketing: 1 Year | B2B SaaS Long-Form Writing: 6 Months | Published Portfolio & Agency Role: 6 Months',
      overlapNotes: 'Publishing articles on personal blogs and Substack occurs during coursework.',
      steps: [
        {
          stepNumber: 1,
          title: 'Writing Craft, Grammar & Persuasive Copywriting',
          stageType: 'education',
          duration: '1 Year',
          description: 'Master headline formulas (AIDA - Attention, Interest, Desire, Action), readability metrics (Flesch-Kincaid score), active voice construction, and editorial style guides (AP Stylebook).',
          topics: ['AIDA & PAS Copywriting Frameworks', 'Headline Formulas & Hook Writing', 'The Elements of Style & Active Voice Usage', 'Editing for Brevity & Removing Fluff'],
          skillsToAcquire: ['High-Retention Story Hooks', 'Writing Clear Value Propositions', 'Proofreading & Structural Editing'],
          activities: ['Write 20 persuasive landing page headlines for 5 different consumer products using AIDA', 'Edit a 1,500-word academic essay into a punchy, engaging 800-word blog post'],
          completionCriteria: 'Consistently produce copy achieving Grade 7–8 Flesch-Kincaid readability.',
          dependencies: '10+2 from recognized board',
          resources: [
            { name: 'The Elements of Style by Strunk and White', url: 'https://www.bartleby.com/141/', type: 'Classic Guide', isFree: true },
            { name: 'Hemingway App for Readability', url: 'https://hemingwayapp.com', type: 'Writing Tool', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'SEO Content Writing & Keyword Intent Research',
          stageType: 'skill_acquisition',
          duration: '1 Year',
          description: 'Master on-page search engine optimization (SEO), search intent matching (informational, commercial, navigational), keyword research tools (Ahrefs, Semrush), and internal linking.',
          topics: ['Search Intent & SERP Competitor Analysis', 'Keyword Research (Primary, Secondary, LSI Keywords)', 'On-Page SEO (H1, H2, Meta Titles, Alt Text)', 'Content Brief Formulation'],
          skillsToAcquire: ['SERP Intent Analysis', 'Keyword Density & Semantic Integration', 'SurferSEO / Clearscope Tool Usage'],
          activities: ['Perform keyword research on a B2B tech topic and draft an in-depth 2,500-word SEO guide', 'Optimize an underperforming article to rank on Google top 10 for target long-tail keywords'],
          completionCriteria: 'Earn Semrush Content-Led SEO or HubSpot Content Marketing certification.',
          dependencies: 'Writing Craft Foundations',
          resources: [
            { name: 'Semrush Academy Content-Led SEO Course', url: 'https://www.semrush.com/academy/', type: 'Free Certification', isFree: true },
            { name: 'Ahrefs SEO Blog & Beginner Guides', url: 'https://ahrefs.com/blog/', type: 'Industry Blog', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'B2B Thought Leadership & Technical Long-Form Writing',
          stageType: 'skill_acquisition',
          duration: '6 Months',
          description: 'Write complex B2B whitepapers, customer case studies, industry trend reports, and interview industry subject matter experts (SMEs) to formulate original perspectives.',
          topics: ['Customer Case Study Framework (Challenge, Solution, Results)', 'Original SME Interviewing Techniques', 'B2B Whitepapers & Industry E-Books', 'Email Newsletter Sequences & Drip Campaigns'],
          skillsToAcquire: ['Conducting Executive Interviews', 'Translating Technical Complexities into Engaging Narrative', 'Data-Driven Business Storytelling'],
          activities: ['Interview an engineering leader and draft a comprehensive 1,500-word customer success study', 'Author a 10-page downloadable PDF whitepaper on digital payment trends in India'],
          completionCriteria: 'Publish 3 long-form thought leadership articles with original expert quotes.',
          dependencies: 'SEO Writing Proficiency',
          resources: [
            { name: 'Animalz Content Marketing Blog', url: 'https://animalz.co/blog/', type: 'Industry Resource', isFree: true },
            { name: 'HubSpot Email Marketing Certification', url: 'https://academy.hubspot.com', type: 'Free Course', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Digital Portfolio Publication & Agency/Corporate Hiring',
          stageType: 'practical_experience',
          duration: '6 Months',
          description: 'Publish a polished digital writing portfolio (Medium, Substack, personal domain), complete copywriting tests, and secure appointment in an agency, media firm, or B2B SaaS company.',
          topics: ['Writing Test Execution under Deadlines', 'Freelance Rate Setting (Per Word vs Retainer)', 'Content Analytics (Time on Page, Scroll Depth)'],
          skillsToAcquire: ['Passing 24-Hour Timed Writing Tests', 'Editorial Calendar Management in Notion/Trello', 'Content Performance Analysis via GA4'],
          activities: ['Launch a published portfolio with 5+ categorized live clips across B2B, tech, and lifestyle', 'Clear written assignment for a leading tech brand and negotiate compensation'],
          completionCriteria: 'Full-time appointment as Content Writer or Copywriter.',
          dependencies: 'Published writing portfolio',
          resources: [
            { name: 'YourStory Media Open Roles', url: 'https://yourstory.com', type: 'Media Portal', isFree: true },
            { name: 'Freshworks Careers India', url: 'https://www.freshworks.com', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'digital-marketer',
    title: 'Digital Marketing & Growth Specialist',
    description: 'Drives online customer acquisition, brand awareness, and revenue conversion through search engine optimization (SEO), performance marketing (Google Ads, Meta Ads), social media strategy, marketing automation, and web analytics (GA4) across Indian startups and enterprises.',
    educationRequirements: 'Bachelor\'s degree in Marketing, Business, Mass Communication, or Engineering + official industry certifications in Google Ads, Meta Certified Digital Marketing Associate, and Google Analytics (GA4).',
    educationPathways: [
      'BBA / B.Com / B.Tech + Google & Meta Professional Certifications + live campaign execution',
      'MBA in Marketing (2 years via CAT / State CET)',
      'Digital Marketing Executive Diploma (IIM Kashipur / MICA Executive programs)'
    ],
    eligibilityRequirements: 'Bachelor\'s degree in any discipline. Strong analytical capability, data-driven mindset, understanding of digital ad metrics (CPC, CTR, CPA, ROAS), and creative copy sense.',
    certificationsAndExams: [
      'Google Ads Search & Display Certifications',
      'Google Analytics 4 (GA4) Certification',
      'Meta Certified Digital Marketing Associate / Media Buying Professional',
      'HubSpot Inbound Marketing Certification'
    ],
    workEnvironment: 'Digital marketing agencies, D2C e-commerce brands, high-growth tech startups, EdTech/fintech companies, and corporate marketing teams in Bengaluru, Gurugram, Mumbai, and Pune.',
    marketDemand: 'Very High',
    jobOutlook: 'Rapid expansion driven by India’s massive internet user base (850M+ users), explosive D2C consumer brand growth, app ecosystem, and shift of ad spend from traditional print to digital performance channels.',
    salaryRange: { min: 380000, max: 1500000, currency: 'INR', source: 'AmbitionBox Digital Marketer Salary 2024, PayScale India' },
    salarySource: 'AmbitionBox Digital Marketer Salary 2024, PayScale India',
    salaryByExperience: {
      entryLevel: { min: 380000, max: 600000, label: 'Junior Digital Marketer / SEO Executive (0–2 yrs)' },
      earlyCareer: { min: 600000, max: 1100000, label: 'Performance Marketing / Growth Manager (3–5 yrs)' },
      experienced: { min: 1100000, max: 2200000, label: 'Head of Digital Marketing / Growth Lead (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Performance marketing managers managing monthly ad budgets of ₹50+ Lakhs with verified Return on Ad Spend (ROAS > 3.5x) earn ₹15–26+ LPA in top Indian D2C and fintech firms.'
    },
    careerProgression: [
      'Digital Marketing Executive / SEO Trainee',
      'Performance Marketing Specialist / Campaign Manager',
      'Digital Marketing Lead / Growth Marketer',
      'Assistant Vice President (AVP) Digital Marketing',
      'Chief Marketing Officer (CMO) / VP of Growth'
    ],
    employmentSectors: {
      government: 'Digital India Corporation, MyGov Campaign Team, State Tourism Digital Marketing Divisions',
      privateSector: 'Top Performance Agencies (Performics, Merkle Sokrati, Dentsu), D2C Consumer Brands (Mamaearth, BoAt, Sugar Cosmetics), Unicorn Startups (Swiggy, Flipkart, Cred)'
    },
    timelineOverview: {
      totalEstimatedDuration: '3–4 Years (Undergraduate degree + 3–6 Months live ad campaign experience)',
      educationDuration: '3–4 Years (Bachelor\'s degree)',
      prepDuration: '3–6 Months dedicated Google, Meta, and GA4 certification study',
      practicalTrainingDuration: '3–6 Months digital agency internship managing live ad budgets',
      jobSearchDuration: '1–2 Months digital campaign portfolio review',
      overlapNotes: 'Running live test campaigns with small experimental budgets occurs alongside coursework.',
      confidenceNote: 'Hiring managers test candidates on live campaign dashboards; knowing how to diagnose high Cost Per Acquisition (CPA) in Meta Ads Manager wins the job.'
    },
    sources: [
      { title: 'Google Skillshop Official Certification Portal', url: 'https://skillshop.withgoogle.com', sourceAuthority: 'Google', verifiedDate: '2024-10-14' },
      { title: 'Meta Blueprint Learning & Certification', url: 'https://www.facebook.com/business/learn', sourceAuthority: 'Meta', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Digital Marketing Specialist Career Roadmap',
      description: 'Growth and performance marketing route: SEO audits, Google Ads search & shopping, Meta Ads Manager, GA4 event tracking, conversion rate optimization (CRO), and ROAS scaling.',
      totalEstimatedDuration: '3.5–4 Years',
      durationBreakdown: 'Marketing Foundations & Content SEO: 1 Year | Performance Marketing (Google & Meta Ads): 1 Year | Web Analytics & Conversion Tracking (GA4/GTM): 1 Year | Growth Scaling & Agency Placement: 6 Months',
      overlapNotes: 'Managing live ad campaigns on Google and Meta occurs during agency internships.',
      steps: [
        {
          stepNumber: 1,
          title: 'Digital Marketing Foundations & Search Engine Optimization (SEO)',
          stageType: 'education',
          duration: '1 Year',
          description: 'Master digital customer funnels (TOFU, MOFU, BOFU), technical SEO audits (crawlability, Core Web Vitals), keyword research, on-page optimization, and organic backlink outreach.',
          topics: ['Digital Marketing Funnel & Customer Journey', 'Technical SEO & Core Web Vitals (LCP, FID, CLS)', 'Keyword Research & Competitor Gap Analysis', 'Link Building Strategies (Digital PR, Broken Link Building)'],
          skillsToAcquire: ['Executing Technical SEO Audits', 'Google Search Console Performance Diagnostics', 'Competitor Research in Ahrefs/Semrush'],
          activities: ['Conduct a comprehensive technical SEO audit of a live website identifying indexation errors', 'Optimize 10 key landing pages to rank for high-intent commercial keywords'],
          completionCriteria: 'Clear Google Digital Garage and Semrush SEO examinations.',
          dependencies: '10+2 from recognized board',
          resources: [
            { name: 'Google Digital Garage: Fundamentals of Digital Marketing', url: 'https://learndigital.withgoogle.com', type: 'Free Certification', isFree: true },
            { name: 'Moz Beginner\'s Guide to SEO', url: 'https://moz.com/beginners-guide-to-seo', type: 'Free Guide', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Performance Marketing (Google Ads & Meta Ads Manager)',
          stageType: 'skill_acquisition',
          duration: '1 Year',
          description: 'Build and optimize paid ad campaigns: Google Search, Performance Max, Display, and Meta Ads (Facebook & Instagram); calculate ROAS, CAC, CPC, and manage ad creative fatigue.',
          topics: ['Google Ads Search, Display & Performance Max Campaigns', 'Meta Ads Manager Account & Pixel Architecture', 'Ad Creative Iteration & Dynamic Creative Testing (DCT)', 'Bidding Strategies (Target CPA, Target ROAS, Maximize Conversions)'],
          skillsToAcquire: ['Setting Up Meta Pixel & Conversions API (CAPI)', 'Structuring Negative Keyword Lists in Google Ads', 'Analyzing ROAS and Customer Acquisition Cost (CAC)'],
          activities: ['Configure a live Google Search and Meta Ads campaign with proper conversion tracking', 'Achieve a verified Return on Ad Spend (ROAS > 3.0x) on an e-commerce catalog campaign'],
          completionCriteria: 'Pass official Google Ads Search and Meta Certified Media Buying assessments.',
          dependencies: 'SEO and Funnel Foundations',
          resources: [
            { name: 'Google Skillshop Ad Certifications', url: 'https://skillshop.withgoogle.com', type: 'Official Certifications', isFree: true },
            { name: 'Meta Blueprint Free Training Hub', url: 'https://www.facebook.com/business/learn', type: 'Official Training', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Web Analytics (GA4), Google Tag Manager & CRO',
          stageType: 'skill_acquisition',
          duration: '1 Year',
          description: 'Master Google Analytics 4 (GA4) event-based tracking model, Google Tag Manager (GTM) custom triggers, conversion rate optimization (CRO), and A/B testing (Optimizely, VWO).',
          topics: ['GA4 Data Streams & Event-Driven Measurement Model', 'Google Tag Manager (GTM) Container Configuration', 'Exploration Reports & Funnel Drop-off Analysis in GA4', 'Landing Page A/B Testing Principles & Heatmaps (Hotjar)'],
          skillsToAcquire: ['GTM Custom Tag & Trigger Deployment', 'Building Custom GA4 Funnel Reports', 'Analyzing Heatmap and Session Recording Data'],
          activities: ['Configure custom eCommerce purchase event tags in GTM without developer intervention', 'Analyze a landing page checkout drop-off in GA4 and run an A/B test boosting conversion by 15%'],
          completionCriteria: 'Pass Google Analytics 4 (GA4) official certification exam.',
          dependencies: 'Google Ads and Campaign Knowledge',
          resources: [
            { name: 'Google Analytics 4 Skillshop Certification', url: 'https://skillshop.withgoogle.com', type: 'Official Exam', isFree: true },
            { name: 'Analytics Mania GTM Tutorials', url: 'https://www.analyticsmania.com', type: 'Tutorial Platform', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Agency Internship & Growth Marketing Appointment',
          stageType: 'practical_experience',
          duration: '6 Months',
          description: 'Complete digital agency internship managing live advertising budgets, present performance case studies detailing CAC reduction, and secure full-time appointment as Growth Specialist.',
          topics: ['Client Reporting & Attribution Models (First Click, Linear, Data-Driven)', 'Omnichannel Campaign Budget Allocation', 'Email Automation & Retargeting Flows (Klaviyo / WebEngage)'],
          skillsToAcquire: ['Weekly Client Performance Reporting', 'Omnichannel Budget Allocation', 'High-ROAS Ad Copy Writing'],
          activities: ['Manage ₹5+ Lakhs in monthly ad spend across Google and Meta during agency internship', 'Deliver monthly executive performance presentations detailing CAC and ROAS trends'],
          completionCriteria: 'Full-time appointment as Performance Marketing Specialist or Growth Marketer.',
          dependencies: 'Demonstrated live campaign performance metrics',
          resources: [
            { name: 'Dentsu India Careers', url: 'https://www.dentsu.com', type: 'Company Portal', isFree: true },
            { name: 'Performics India Careers', url: 'https://www.performics.com', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  },
  {
    slug: 'public-relations-specialist',
    title: 'Public Relations (PR) & Corporate Communications Specialist',
    description: 'Manages organizational reputation, media relations with national journalists, press release dissemination, crisis communications, and corporate social responsibility (CSR) storytelling across PR agencies, listed corporations, and tech startups in India.',
    educationRequirements: 'Bachelor\'s / Master\'s degree in Public Relations, Journalism, Corporate Communications, or Mass Communication (IIMC, Xavier Institute of Communications, Symbiosis SIMC). Proven media network and crisis response skills.',
    educationPathways: [
      'B.A. in Journalism & Mass Communication (3 years) + PG Diploma in Public Relations (1 year via IIMC entrance)',
      'Master\'s in Media & Communication / PR from premier institutes (SIMC Pune, XIC Mumbai)',
      'Public Relations Society of India (PRSI) Certified Professional'
    ],
    eligibilityRequirements: 'Bachelor\'s degree in any discipline. Outstanding persuasive writing, executive poise, rapid crisis management instincts, and established relationships with national print/digital journalists.',
    certificationsAndExams: [
      'Public Relations Society of India (PRSI) Certification',
      'IIMC National Entrance Examination (Indian Institute of Mass Communication)',
      'Crisis Communications Certification (PRSA / CIPR)'
    ],
    workEnvironment: 'Global and domestic PR agencies (Edelman India, Genesis BCW, Adfactors PR, MSL India), corporate communications departments of listed conglomerates, and fast-growing venture-backed startups.',
    marketDemand: 'High',
    jobOutlook: 'Strong sustained hiring driven by corporate IPO publicity, startup funding announcements, ESG reporting, and brand reputation management in the digital era.',
    salaryRange: { min: 380000, max: 1500000, currency: 'INR', source: 'Adfactors PR / Edelman Reports, AmbitionBox PR Specialist Salary 2024' },
    salarySource: 'Adfactors PR / Edelman Reports, AmbitionBox PR Specialist Salary 2024',
    salaryByExperience: {
      entryLevel: { min: 380000, max: 600000, label: 'PR Associate / Account Executive (0–2 yrs)' },
      earlyCareer: { min: 600000, max: 1100000, label: 'Senior PR Account Manager / Media Lead (3–5 yrs)' },
      experienced: { min: 1100000, max: 2200000, label: 'Account Director / Head of Corporate Communications (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Heads of Corporate Communications and Senior Vice Presidents in top listed Indian conglomerates (Tata, Reliance, Mahindra) earn ₹30–60+ LPA.'
    },
    careerProgression: [
      'Management Trainee / PR Executive',
      'Account Manager (PR Agency) / Corporate Communications Lead',
      'Senior Account Director / PR Lead',
      'Head of Corporate Communications & Media Relations',
      'Chief Communications Officer (CCO) / Partner'
    ],
    employmentSectors: {
      government: 'Press Information Bureau (PIB Indian Information Service via UPSC CSE), Ministry of Information & Broadcasting, State Information Departments',
      privateSector: 'Top PR Agencies (Adfactors PR, Edelman India, Genesis BCW, MSL India), Conglomerate Communications Divisions (Tata Group, Reliance Industries), Tech Startups'
    },
    timelineOverview: {
      totalEstimatedDuration: '4 Years (3 Years Undergrad + 1 Year PG Diploma / Master\'s in PR)',
      educationDuration: '3–4 Years (Undergraduate / Post-Graduation)',
      prepDuration: '3–6 Months IIMC entrance preparation',
      practicalTrainingDuration: '3–6 Months mandatory PR agency client servicing internship',
      jobSearchDuration: '1–2 Months campus placement or agency lateral hiring',
      overlapNotes: 'Pitching press releases and drafting media lists occur during agency internships.',
      confidenceNote: 'A PR specialist\'s primary asset is their personal Rolodex of trusted editorial journalists across leading business dailies (Economic Times, Mint, Business Standard).'
    },
    sources: [
      { title: 'Indian Institute of Mass Communication (IIMC) Academic Guidelines', url: 'https://iimc.gov.in', sourceAuthority: 'Ministry of Information & Broadcasting', verifiedDate: '2024-10-14' },
      { title: 'Public Relations Society of India (PRSI)', url: 'https://www.prsi.co.in', sourceAuthority: 'PRSI', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Public Relations (PR) Specialist Career Roadmap',
      description: 'Media and communications pathway: press release drafting, journalist outreach, press conference organizing, crisis mitigation frameworks, and corporate reputation management.',
      totalEstimatedDuration: '4 Years',
      durationBreakdown: 'Degree in Mass Communication / PR: 3 Years | IIMC / XIC Specialized PR Diploma: 1 Year | Agency Client Servicing & Crisis Management: Post-Diploma',
      overlapNotes: 'Agency client internships take place during the final semester.',
      steps: [
        {
          stepNumber: 1,
          title: 'Media Landscape, Journalism & Media Relations',
          stageType: 'education',
          duration: '3 Years (B.A. Mass Communication)',
          description: 'Understand print, broadcast, and digital newsroom operations, editorial deadlines, beats (business, tech, retail, policy), and the distinction between earned, owned, and paid media.',
          topics: ['Indian Media Ecosystem (Print Dailies, Wire Agencies, Digital Portals)', 'Earned, Owned, Shared, Paid (PESO) Model', 'News Beats & Editorial Gatekeeping', 'Media Law and Defamation Principles'],
          skillsToAcquire: ['Understanding News Value and Hooks', 'Media List Compilation and Verification', 'Executive Written English Communication'],
          activities: ['Compile an accurate media directory of 50+ business journalists across PTI, Economic Times, Mint, and Reuters', 'Analyze 10 successful brand PR campaigns for news value and messaging framing'],
          completionCriteria: 'Obtain undergraduate degree in Mass Communication / Journalism with distinction.',
          dependencies: '10+2 from recognized board',
          resources: [
            { name: 'IIMC Entrance Examination Guidelines', url: 'https://iimc.gov.in', type: 'Official Portal', isFree: true },
            { name: 'Press Council of India Norms of Journalistic Conduct', url: 'https://presscouncil.nic.in', type: 'Government Standard', isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: 'Press Release Drafting, Pitching & Media Kits',
          stageType: 'skill_acquisition',
          duration: '1 Year (PG Diploma / Specialized Training)',
          description: 'Master inverted pyramid writing for press releases, compelling email pitches for journalists, executive leadership briefing books, and organizing virtual/physical press conferences.',
          topics: ['Inverted Pyramid Press Release Writing', 'Crafting High-Response Personalized Email Pitches', 'Press Kits & Media Advisory Creation', 'Organizing Press Conferences & One-on-One Interviews'],
          skillsToAcquire: ['Writing Standard Format Press Releases with Compelling Quotes', 'Journalist Follow-up Etiquette', 'Spokesperson Briefing Document Preparation'],
          activities: ['Draft a formal corporate press release announcing a $20M Series B funding round with executive quotes', 'Execute a simulated media pitch securing 5 tier-1 mock journalist interviews'],
          completionCriteria: 'Pass specialized PR coursework; earn IIMC or equivalent postgraduate diploma.',
          dependencies: 'Undergraduate Degree and IIMC/CUET PG qualification',
          resources: [
            { name: 'PR Newswire / PR Week Best Practices Guide', url: 'https://www.prweek.com', type: 'Industry Publication', isFree: false },
            { name: 'Public Relations Consultants Association of India (PRCAI)', url: 'https://prcai.org', type: 'Professional Association', isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: 'Crisis Communications & Brand Reputation Management',
          stageType: 'skill_acquisition',
          duration: '6 Months',
          description: 'Manage high-stakes corporate crises: product recalls, social media controversies, leadership transitions, and regulatory scrutiny. Formulate holding statements and proactive response trees.',
          topics: ['Crisis Response Protocols & Holding Statements', 'Social Media Sentiment Monitoring & Social Listening', 'Media Training for C-Suite Spokespersons', 'Share of Voice (SOV) and PR Coverage Measurement'],
          skillsToAcquire: ['Drafting 15-Minute Crisis Holding Statements', 'Media Training Executive Spokespersons', 'PR Measurement beyond Advertising Value Equivalency (AVE)'],
          activities: ['Simulate a 24-hour corporate crisis response protocol (data breach scenario) including press statement and FAQ', 'Track and analyze competitor Share of Voice (SOV) in national media across a quarter'],
          completionCriteria: 'Complete certified crisis communication training simulation.',
          dependencies: 'Press Release and Media Relations Proficiency',
          resources: [
            { name: 'Institute for Public Relations (IPR) Crisis Resources', url: 'https://instituteforpr.org', type: 'Research Institute', isFree: true },
            { name: 'Barcelona Principles for PR Measurement (AMEC)', url: 'https://amecorg.com', type: 'Global Standard', isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: 'Agency Account Management & Placement',
          stageType: 'practical_experience',
          duration: '6 Months',
          description: 'Join premier PR agency (Adfactors, Edelman, Genesis BCW) as Account Executive; manage client retainers, secure national media coverage, and coordinate press briefings.',
          topics: ['Agency Account Servicing & Retainer Scope Management', 'Thought Leadership Byline Article Placement', 'Annual PR Strategy Formulations for Retainer Clients'],
          skillsToAcquire: ['High-Touch Client Relationship Management', 'Securing Front-Page Editorial Features', 'Managing Agency Team Workflows'],
          activities: ['Secure 15+ earned media feature articles in leading national publications for a client portfolio', 'Coordinate end-to-end national media launch for a major product or IPO'],
          completionCriteria: 'Permanent appointment as Senior Account Executive / Account Manager in leading PR agency.',
          dependencies: 'Completed PR postgraduate qualification and writing portfolio',
          resources: [
            { name: 'Adfactors PR Careers', url: 'https://www.adfactorspr.com/careers', type: 'Company Portal', isFree: true },
            { name: 'Edelman India Careers', url: 'https://www.edelman.com/careers', type: 'Company Portal', isFree: true }
          ]
        }
      ]
    }
  }
];

module.exports = artsDesignMediaCareers;
