/**
 * Technology Careers Audit Data - Part 1 (Careers 1 to 18)
 * Validated for Indian employment market, realistic compensation benchmarks,
 * eligible education pathways, and sequential roadmap milestones.
 */

const techPart1 = [
  {
    slug: 'software-developer',
    title: 'Software Developer',
    description: 'Designs, develops, tests, and maintains applications and system software. Implements algorithms, data structures, and object-oriented business logic across Indian IT services, GCCs, and product technology firms.',
    educationRequirements: 'B.Tech/B.E. in Computer Science/IT/ECE (via JEE/State CETs), or BCA followed by MCA. Demonstrable coding proficiency, DSA problem-solving, and GitHub project portfolio.',
    educationPathways: [
      'B.Tech / B.E. in Computer Science & Engineering or Information Technology (4 years via JEE Main or State CETs)',
      'BCA (3 years) + MCA (2 years via NIMCET or State PG CETs)',
      'B.Sc Computer Science / IT (3-4 years under NEP) followed by M.Sc Computer Science or MCA',
      'Alternative pathway: Non-CS Engineering degree with certified full-stack bootcamps and competitive programming profile'
    ],
    eligibilityRequirements: '10+2 with Physics, Mathematics, and Chemistry (minimum 50-60% aggregate). No statutory licensing council required; qualification is skill- and merit-driven.',
    certificationsAndExams: [
      'JEE Main / State Engineering CETs (WBJEE, MHT-CET, KCET, COMEDK)',
      'NIMCET (for NIT MCA admissions)',
      'AWS Certified Developer - Associate',
      'Oracle Certified Professional: Java SE Developer'
    ],
    workEnvironment: 'Modern tech campuses and SEZ tech parks across Bengaluru, Hyderabad, Pune, Chennai, Noida, and Gurugram; hybrid and flexible remote options.',
    marketDemand: 'High',
    jobOutlook: 'Strong sustained hiring driven by global enterprise digital transformation, Global Capability Center (GCC) expansions in Tier-1 Indian hubs, and cloud SaaS growth.',
    salaryRange: { min: 450000, max: 2200000, currency: 'INR', source: 'AmbitionBox India Tech Report 2024, NASSCOM Compensation Benchmark' },
    salarySource: 'AmbitionBox India Tech Report 2024, NASSCOM Compensation Benchmark',
    salaryByExperience: {
      entryLevel: { min: 450000, max: 900000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 900000, max: 1600000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1600000, max: 2800000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Tier-1 product companies and GCCs offer ₹12–25+ LPA for freshers; IT services campus mass hires start around ₹3.6–5 LPA; senior staff engineers exceed ₹35+ LPA.'
    },
    careerProgression: [
      'Associate Software Engineer / Junior Developer',
      'Software Development Engineer (SDE-II)',
      'Senior Software Engineer / Technical Lead',
      'Staff Software Engineer / Principal Architect',
      'Director of Engineering / VP of Technology'
    ],
    employmentSectors: {
      government: 'National Informatics Centre (NIC), CDAC, ISRO/DRDO Scientist-Engineer roles, IBPS Specialist IT Officer in Public Sector Banks, Railways IT divisions',
      privateSector: 'Global Capability Centers (GCCs), SaaS Product Startups, IT Services Giants (TCS, Infosys, Wipro, HCL), Big Tech India (Amazon, Microsoft, Google)'
    },
    timelineOverview: {
      totalEstimatedDuration: '4 Years (B.Tech) + 3–6 Months dedicated DSA/project prep (concurrent with final year)',
      educationDuration: '4 Years (B.Tech) or 5 Years (BCA + MCA)',
      prepDuration: '3–6 Months structured Data Structures, Algorithms, and System Design',
      practicalTrainingDuration: '2–6 Months internship during academic 7th/8th semester',
      jobSearchDuration: '3–6 Months during campus placement season (August to March)',
      overlapNotes: 'DSA preparation, project development, and internship happen concurrently during college semesters without requiring a gap year.',
      confidenceNote: 'Timelines vary between campus recruitment offers (secured in 7th sem) and off-campus recruitment (typically takes 2-5 months post-graduation).'
    },
    sources: [
      { title: 'NASSCOM Strategic Review: Tech Sector in India', url: 'https://nasscom.in', sourceAuthority: 'NASSCOM', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Software Engineer Salary in India', url: 'https://www.ambitionbox.com/salaries/software-engineer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Software Developer Career Roadmap',
      description: 'Progressive roadmap covering computational logic, data structures, backend persistence, clean code, and engineering interview readiness.',
      totalEstimatedDuration: '8 - 14 Months self-paced study or concurrent academic preparation',
      durationBreakdown: 'Programming & Logic: 2-3 mos | DSA Mastery: 3-5 mos | Projects & Version Control: 2-3 mos | System Design & Interviews: 2-3 mos',
      overlapNotes: 'Stage 2 (DSA) and Stage 3 (Projects) can proceed in parallel to solidify theoretical concepts with practical software development.',
      steps: [
        {
          stepNumber: 1,
          title: 'Programming Foundations & Computer Science Logic',
          stageType: 'Skill Acquisition',
          description: 'Master variables, memory allocation, control flow, functions, modular architecture, and object-oriented paradigms in Java, C++, or Python.',
          skillsToAcquire: ['Object-Oriented Programming (OOP)', 'Pointers and References', 'Exception Handling', 'Basic Input/Output and File Systems'],
          activities: ['Solve 60+ algorithmic challenges on HackerRank/Codewars', 'Build console-based utilities (e.g. Bank Account Management, Library System)'],
          estimatedTime: '2 - 3 months (4-6 hours/week)',
          completionCriteria: 'Able to write clean, modular, syntax-error-free code adhering to standard indentation and naming conventions.',
          dependencies: 'Basic high school mathematics and algorithmic logic.',
          resources: [
            { title: 'Python Official Tutorial', url: 'https://docs.python.org/3/tutorial/', type: 'Documentation' },
            { title: 'freeCodeCamp CS Curriculum', url: 'https://www.freecodecamp.org', type: 'Course' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Data Structures & Algorithmic Problem Solving',
          stageType: 'Skill Acquisition',
          description: 'Implement core data structures from scratch and analyze asymptotic time and space complexities (Big-O notation).',
          skillsToAcquire: ['Arrays, Strings, Linked Lists', 'Stacks, Queues, Hash Tables', 'Binary Trees & Graphs', 'Dynamic Programming & Recursion'],
          activities: ['Solve 150+ LeetCode problems (Easy to Medium)', 'Implement standard sorting and searching algorithms'],
          estimatedTime: '3 - 5 months (daily practice)',
          completionCriteria: 'Consistently solve LeetCode Medium problems within 30 minutes with optimal time complexity.',
          dependencies: 'Completion of Programming Foundations (Step 1).',
          resources: [
            { title: 'LeetCode Study Plans', url: 'https://leetcode.com/explore/', type: 'Other' },
            { title: 'GeeksforGeeks DSA Reference', url: 'https://www.geeksforgeeks.org/data-structures/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Databases, API Engineering & Version Control',
          stageType: 'Portfolio & Projects',
          description: 'Design normalized relational databases, build RESTful endpoints, and manage collaborative codebases with Git branching models.',
          skillsToAcquire: ['PostgreSQL / MySQL Schema Design', 'REST API Architecture', 'Git & GitHub Workflows', 'Unit Testing with JUnit/PyTest/Jest'],
          activities: ['Build and deploy 2 production-ready micro-projects on GitHub', 'Write database migrations and normalized SQL queries'],
          estimatedTime: '2 - 3 months',
          completionCriteria: 'Live deployed application repository with README, unit test coverage, and documentation.',
          dependencies: 'Data structures and basic programming competency.',
          resources: [
            { title: 'PostgreSQL Documentation', url: 'https://www.postgresql.org/docs/', type: 'Documentation' },
            { title: 'Git Pro Book', url: 'https://git-scm.com/book/en/v2', type: 'Book' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Practical Internship, Interview Prep & System Design',
          stageType: 'Recruitment & Job Search',
          description: 'Prepare behavioral and technical interview questions, understand basic low-level system design, and apply for developer openings.',
          skillsToAcquire: ['Low-Level Design (SOLID principles)', 'Concurrency & Multithreading Basics', 'Technical Communication', 'Resume Tailoring'],
          activities: ['Conduct 5+ peer mock interviews on Pramp/Interviewing.io', 'Apply to campus placement drives and AngelList/LinkedIn openings'],
          estimatedTime: '2 - 4 months (variable)',
          completionCriteria: 'Secure an internship or entry-level software development offer.',
          dependencies: 'Completed portfolio projects and strong DSA problem-solving.',
          resources: [
            { title: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'frontend-developer',
    title: 'Frontend Developer',
    description: 'Specializes in crafting responsive, interactive, accessible user interfaces for web applications. Bridges user experience design and backend services using modern JavaScript/TypeScript, React, Next.js, and CSS styling frameworks.',
    educationRequirements: 'B.Tech/B.E. in CS/IT, BCA, B.Sc Computer Science, or diploma in Web Technologies. Demonstrable portfolio of responsive web applications on GitHub with live hosted links.',
    educationPathways: [
      'B.Tech / B.E. in Computer Science or Information Technology (4 years)',
      'BCA / B.Sc Computer Science (3 years)',
      'Intensive Web Development Bootcamps with demonstrable GitHub repositories and live Vercel/Netlify deployments'
    ],
    eligibilityRequirements: 'No formal statutory licensing. Hiring requires demonstrable mastery of HTML5, CSS3, ES6+ JavaScript, React/Vue, and web performance optimization.',
    certificationsAndExams: [
      'Meta Front-End Developer Professional Certificate (Coursera)',
      'OpenJS Node.js Application Developer (JSNAD)',
      'AWS Certified Cloud Practitioner'
    ],
    workEnvironment: 'Product startups, digital agencies, and enterprise IT firms across Bengaluru, Pune, NCR, and Hyderabad; extensive remote and hybrid roles.',
    marketDemand: 'High',
    jobOutlook: 'Strong demand driven by consumer internet scale, mobile-first responsive web design, and modernization of enterprise SaaS dashboards.',
    salaryRange: { min: 400000, max: 1800000, currency: 'INR', source: 'AmbitionBox India Frontend Benchmark 2024, PayScale India' },
    salarySource: 'AmbitionBox India Frontend Benchmark 2024, PayScale India',
    salaryByExperience: {
      entryLevel: { min: 400000, max: 750000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 750000, max: 1400000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1400000, max: 2400000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Front-end engineers with strong React/Next.js and state management skills command premium compensation in fintech and consumer-facing unicorns.'
    },
    careerProgression: [
      'Junior Frontend Developer',
      'Frontend Engineer (React/TypeScript)',
      'Senior Frontend Engineer / UI Architect',
      'Staff UI Engineer / Design Systems Lead',
      'Engineering Manager (Frontend / Web Platform)'
    ],
    employmentSectors: {
      government: 'Digital India Initiatives, NIC Web Engineering Cells, State e-Governance Portals, MyGov platform contractors',
      privateSector: 'B2C E-commerce (Flipkart, Swiggy, Zomato), Fintech (Zerodha, Razorpay), Enterprise SaaS, Product Design Studios'
    },
    timelineOverview: {
      totalEstimatedDuration: '6 - 9 Months dedicated learning (with prior degree or parallel study)',
      educationDuration: '3-4 Years formal degree (optional if possessing exceptional portfolio)',
      prepDuration: '4–6 Months web fundamentals, JavaScript ES6+, and React framework',
      practicalTrainingDuration: '2–4 Months freelance projects or startup internship',
      jobSearchDuration: '2–4 Months applying with live project showcase',
      overlapNotes: 'Portfolio building occurs directly during learning stages by publishing projects live on Vercel/Netlify.',
      confidenceNote: 'A strong visual and functional portfolio is mandatory; recruiters evaluate live deployed websites and clean GitHub commits.'
    },
    sources: [
      { title: 'AmbitionBox Frontend Developer Salary in India', url: 'https://www.ambitionbox.com/salaries/frontend-developer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' },
      { title: 'MDN Web Docs Community Guidelines', url: 'https://developer.mozilla.org', sourceAuthority: 'MDN Web Docs', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Frontend Developer Learning Roadmap',
      description: 'Step-by-step progression from semantic HTML and CSS to modern TypeScript, component state architecture, and web performance.',
      totalEstimatedDuration: '6 - 9 Months',
      durationBreakdown: 'HTML, CSS & Responsive Design: 6-8 weeks | JavaScript ES6+ & Async: 8-10 weeks | React & State Management: 8-10 weeks | Performance & CI/CD: 4 weeks',
      overlapNotes: 'Styling frameworks like Tailwind CSS are practiced while writing JavaScript and React component code.',
      steps: [
        {
          stepNumber: 1,
          title: 'Semantic HTML5, Modern CSS3 & Responsive Architecture',
          stageType: 'Skill Acquisition',
          description: 'Master document semantics, accessibility (WCAG), CSS Flexbox, Grid, mobile-first media queries, and utility CSS (Tailwind).',
          skillsToAcquire: ['HTML5 Semantic Elements', 'CSS Grid & Flexbox', 'Mobile-First Responsive Layouts', 'CSS Custom Properties (Variables)'],
          activities: ['Recreate 3 pixel-perfect responsive landing pages', 'Test accessibility using Lighthouse and screen readers'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Build a mobile-first responsive web page achieving 95+ score on Google Lighthouse.',
          dependencies: 'Basic computer literacy.',
          resources: [
            { title: 'MDN CSS Layout Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Core JavaScript (ES6+), DOM & Asynchronous Programming',
          stageType: 'Skill Acquisition',
          description: 'Understand execution context, closures, event loop, Promises, Async/Await, and REST API consumption using Fetch.',
          skillsToAcquire: ['ES6+ Syntax & Array Methods', 'DOM Manipulation & Event Bubbling', 'Promises, Async/Await, Fetch API', 'Browser Storage & HTTP Cookies'],
          activities: ['Build an interactive single-page vanilla JS app (e.g. Weather dashboard, E-commerce cart)', 'Debug asynchronous network errors in Chrome DevTools'],
          estimatedTime: '8 - 10 weeks',
          completionCriteria: 'Able to manipulate DOM, consume third-party JSON APIs, and handle loading/error states cleanly in vanilla JavaScript.',
          dependencies: 'Semantic HTML5 and CSS3 proficiency (Step 1).',
          resources: [
            { title: 'JavaScript.info Complete Guide', url: 'https://javascript.info/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'React.js, Component State & Client-Side Routing',
          stageType: 'Skill Acquisition',
          description: 'Master component hierarchy, React Hooks (useState, useEffect, useMemo, useCallback), routing with React Router, and state management.',
          skillsToAcquire: ['Component Lifecycle & Hooks', 'React Router v6', 'State Management (Zustand / Redux Toolkit)', 'Form Handling & Validation'],
          activities: ['Build a full-featured CRUD web application (e.g. Kanban task management or Job Board)', 'Integrate responsive UI components with clean state'],
          estimatedTime: '8 - 10 weeks',
          completionCriteria: 'Deployed React application with multi-route navigation, complex state persistence, and responsive UI.',
          dependencies: 'JavaScript ES6+ and asynchronous programming.',
          resources: [
            { title: 'React Official Documentation', url: 'https://react.dev', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'TypeScript, Next.js & Production Web Performance',
          stageType: 'Portfolio & Projects',
          description: 'Adopt static typing with TypeScript, implement SSR/SSG with Next.js, and optimize Core Web Vitals.',
          skillsToAcquire: ['TypeScript Interfaces & Generics', 'Next.js App Router (SSR & SSG)', 'Core Web Vitals Optimization', 'Automated Testing (Vitest / React Testing Library)'],
          activities: ['Migrate a React application to TypeScript and Next.js', 'Deploy on Vercel with automated GitHub CI/CD workflow'],
          estimatedTime: '4 - 6 weeks',
          completionCriteria: 'Production-ready Next.js web application deployed with TypeScript and automated CI/CD checks.',
          dependencies: 'React.js and modern JavaScript.',
          resources: [
            { title: 'Next.js Documentation', url: 'https://nextjs.org/docs', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'backend-developer',
    title: 'Backend Developer',
    description: 'Designs and implements server-side logic, database persistence architectures, and high-concurrency microservices. Ensures reliable authentication, API security, and transaction consistency for web, mobile, and enterprise platforms.',
    educationRequirements: 'B.Tech/B.E. in Computer Science/IT, BCA+MCA, or equivalent degree. Strong foundation in databases, networking protocols (HTTP/WebSocket/gRPC), and server runtime (Node.js, Java Spring, Go, or Python).',
    educationPathways: [
      'B.Tech / B.E. in CS/IT (4 years)',
      'BCA + MCA (5 years)',
      'Specialized software engineering diplomas with production backend portfolio'
    ],
    eligibilityRequirements: 'Demonstrated knowledge of server-side programming, SQL/NoSQL databases, API design, authentication (JWT/OAuth2), and cloud hosting.',
    certificationsAndExams: [
      'AWS Certified Developer - Associate',
      'Oracle Certified Associate Java Programmer',
      'MongoDB Certified Developer Associate'
    ],
    workEnvironment: 'Tech development offices, cloud consulting firms, and financial institutions in Bengaluru, Hyderabad, Gurugram, and Pune; hybrid options.',
    marketDemand: 'High',
    jobOutlook: 'Elevated demand powered by cloud migration, payment gateways, e-commerce scale, and enterprise microservice overhauls.',
    salaryRange: { min: 480000, max: 2200000, currency: 'INR', source: 'AmbitionBox India Backend Compensation, PayScale India' },
    salarySource: 'AmbitionBox India Backend Compensation, PayScale India',
    salaryByExperience: {
      entryLevel: { min: 480000, max: 850000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 850000, max: 1550000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1550000, max: 2600000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Backend engineers experienced with high-throughput distributed systems and cloud microservices in fintech/gaming command ₹25–40+ LPA at senior levels.'
    },
    careerProgression: [
      'Junior Backend Developer',
      'Backend Software Engineer',
      'Senior Backend Engineer / API Lead',
      'Staff Backend Engineer / Distributed Systems Architect',
      'Engineering Manager / Head of Infrastructure'
    ],
    employmentSectors: {
      government: 'UPI / NPCI Infrastructure, UIDAI (Aadhaar platform), Indian Railways (CRIS/IRCTC), GSTN Technical Architecture',
      privateSector: 'Fintech (Paytm, PhonePe, Cred), Cloud Infrastructure, Enterprise B2B SaaS, Global Banks (JPMorgan, Morgan Stanley Tech Centers)'
    },
    timelineOverview: {
      totalEstimatedDuration: '6 - 10 Months dedicated study + project engineering',
      educationDuration: '4 Years formal degree (or equivalent practical track record)',
      prepDuration: '4–6 Months server languages, databases, and API development',
      practicalTrainingDuration: '2–4 Months internship or open-source backend contribution',
      jobSearchDuration: '2–4 Months technical evaluations and live coding rounds',
      overlapNotes: 'Database indexing and concurrency concepts are practiced simultaneously while developing backend projects.',
      confidenceNote: 'Interviews place heavy emphasis on database indexing, ACID transactions, caching, and rate-limiting.'
    },
    sources: [
      { title: 'AmbitionBox Backend Developer Salary in India', url: 'https://www.ambitionbox.com/salaries/backend-developer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' },
      { title: 'Node.js Official Documentation', url: 'https://nodejs.org/docs', sourceAuthority: 'OpenJS Foundation', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Backend Developer Learning Roadmap',
      description: 'Comprehensive curriculum from server runtime and database normalization to REST/gRPC API architecture, security, and message brokers.',
      totalEstimatedDuration: '6 - 10 Months',
      durationBreakdown: 'Server Language & Runtimes: 6-8 weeks | Database Modeling & SQL: 6-8 weeks | REST APIs, Auth & Security: 6 weeks | Caching, Queues & Microservices: 6-8 weeks',
      overlapNotes: 'API security and testing should be implemented directly within your project development stages.',
      steps: [
        {
          stepNumber: 1,
          title: 'Server Runtime & Asynchronous I/O Fundamentals',
          stageType: 'Skill Acquisition',
          description: 'Master server-side programming in Node.js (Express/Fastify), Java (Spring Boot), Go, or Python (FastAPI). Understand non-blocking I/O and process models.',
          skillsToAcquire: ['HTTP Protocol & Status Codes', 'Non-Blocking Event Loop / Multi-threading', 'Environment Configuration & Secret Management', 'Error Handling Middleware'],
          activities: ['Write command-line servers handling concurrent HTTP requests', 'Implement structured logging using Winston/Pino'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Build a modular HTTP server capable of serving dynamic routes with input validation.',
          dependencies: 'Core programming language fundamentals.',
          resources: [
            { title: 'Express.js Documentation', url: 'https://expressjs.com/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Database Architecture, SQL Normalization & NoSQL',
          stageType: 'Skill Acquisition',
          description: 'Design normalized relational schemas in PostgreSQL/MySQL, understand indexing (B-Tree), transactions (ACID), and document databases like MongoDB.',
          skillsToAcquire: ['SQL Queries, Joins & Aggregations', 'Database Indexing & Query Optimization', 'ACID Transactions & Isolation Levels', 'MongoDB Document Modeling'],
          activities: ['Design an e-commerce relational schema with foreign key constraints', 'Analyze slow queries using EXPLAIN ANALYZE in PostgreSQL'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Normalized 3NF relational database schema with indexed queries and transaction rollbacks.',
          dependencies: 'Server runtime basics (Step 1).',
          resources: [
            { title: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'API Architecture, Authentication & Security',
          stageType: 'Portfolio & Projects',
          description: 'Build secure RESTful endpoints, implement JWT/OAuth2 authentication, password hashing (bcrypt), CORS, rate limiting, and input sanitization.',
          skillsToAcquire: ['JWT & Refresh Token Flow', 'Bcrypt Hashing & Salting', 'OWASP Top 10 Web Vulnerabilities', 'API Documentation with Swagger/OpenAPI'],
          activities: ['Build an end-to-end user authentication and role-based access control (RBAC) microservice', 'Write integration tests using Supertest/Postman'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Secure REST API with role-based authentication, Swagger documentation, and automated tests.',
          dependencies: 'Database modeling and server runtime.',
          resources: [
            { title: 'OWASP API Security Top 10', url: 'https://owasp.org/www-project-api-security/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Caching, Message Queues & Distributed Scale',
          stageType: 'Skill Acquisition',
          description: 'Integrate Redis for in-memory caching and session stores, implement asynchronous task processing using RabbitMQ or Kafka, and containerize with Docker.',
          skillsToAcquire: ['Redis In-Memory Caching & Eviction Policies', 'Message Queues (RabbitMQ / Apache Kafka)', 'Docker Containerization', 'Basic Microservices Communication (gRPC/HTTP)'],
          activities: ['Implement Redis caching layer reducing database query response times by 80%', 'Containerize the backend with multi-stage Dockerfile and docker-compose'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Containerized microservice stack utilizing Redis caching and background worker queue.',
          dependencies: 'Secure REST API and database proficiency.',
          resources: [
            { title: 'Redis Official Documentation', url: 'https://redis.io/docs/', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'full-stack-developer',
    title: 'Full-Stack Developer',
    description: 'Engineers complete software products end-to-end, integrating fluid client interfaces with resilient backend servers, databases, and automated deployment pipelines across MERN, Python, or Java Spring tech stacks.',
    educationRequirements: 'B.Tech/B.E. in Computer Science/IT, BCA+MCA, or proven track record of full-stack production deployments. Deep understanding of both frontend state and backend persistence.',
    educationPathways: [
      'B.Tech / B.E. in CS/IT (4 years)',
      'BCA + MCA (5 years)',
      'Intensive Full-Stack Immersive Programs with verified GitHub production repositories'
    ],
    eligibilityRequirements: 'No licensing required. Ability to architect end-to-end systems from UX design to database migrations and cloud hosting.',
    certificationsAndExams: [
      'AWS Certified Developer - Associate',
      'Meta Full-Stack Engineer Certificate',
      'MongoDB Certified Developer'
    ],
    workEnvironment: 'Fast-paced startup engineering teams, digital consultancies, and GCCs in Bengaluru, Hyderabad, Gurugram, and Pune; heavy hybrid adoption.',
    marketDemand: 'High',
    jobOutlook: 'Consistently one of the highest volume recruitment categories across Indian tech startups and mid-market enterprises looking for versatile engineers.',
    salaryRange: { min: 500000, max: 2400000, currency: 'INR', source: 'Michael Page India Tech Benchmark 2024, AmbitionBox India' },
    salarySource: 'Michael Page India Tech Benchmark 2024, AmbitionBox India',
    salaryByExperience: {
      entryLevel: { min: 500000, max: 950000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 950000, max: 1700000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1700000, max: 3000000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Founding engineers and senior full-stack developers in funded product startups frequently receive equity grants alongside ₹25–45+ LPA base pay.'
    },
    careerProgression: [
      'Junior Full-Stack Developer',
      'Full-Stack Software Engineer',
      'Senior Full-Stack Engineer / Module Lead',
      'Principal Engineer / Tech Architect',
      'CTO / Head of Engineering'
    ],
    employmentSectors: {
      government: 'Digital Public Infrastructure (India Stack), Smart Cities Mission tech portals, NIC full-stack development cells',
      privateSector: 'Early to Late Stage Tech Startups, Product Studios, IT Consultancies (Thoughtworks, Publicis Sapient), E-commerce'
    },
    timelineOverview: {
      totalEstimatedDuration: '9 - 14 Months self-study or concurrent college learning',
      educationDuration: '4 Years formal degree (optional if building live applications)',
      prepDuration: '6–9 Months mastering both frontend and backend domains',
      practicalTrainingDuration: '3–6 Months building multi-tenant SaaS projects and open source',
      jobSearchDuration: '2–4 Months interviewing with live interactive portfolios',
      overlapNotes: 'Frontend client logic is connected directly to custom backend APIs during project phases.',
      confidenceNote: 'Building at least 2 complete, live hosted applications with authentication and payments is the key differentiator for hiring.'
    },
    sources: [
      { title: 'Michael Page India Salary Benchmark 2024', url: 'https://www.michaelpage.co.in/salary-guide', sourceAuthority: 'Michael Page India', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Full Stack Developer Salaries in India', url: 'https://www.ambitionbox.com/salaries/full-stack-developer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Full-Stack Developer Learning Roadmap',
      description: 'Structured journey spanning client UI engineering, server REST architecture, database modeling, and end-to-end cloud deployment.',
      totalEstimatedDuration: '9 - 14 Months',
      durationBreakdown: 'Frontend Foundations & React: 3-4 mos | Backend API & SQL/NoSQL: 3-4 mos | Full-Stack Integration & Auth: 2 mos | DevOps, CI/CD & Cloud Deployment: 2 mos',
      overlapNotes: 'Backend endpoints and frontend state management are wired up continuously during project stages.',
      steps: [
        {
          stepNumber: 1,
          title: 'Client-Side Engineering with React & Tailwind',
          stageType: 'Skill Acquisition',
          description: 'Master HTML5, CSS3, modern JavaScript ES6+, React component architecture, hooks, and responsive design systems.',
          skillsToAcquire: ['React.js & Hooks', 'Tailwind CSS', 'State Management (Zustand/Redux)', 'REST API Consumption'],
          activities: ['Build 3 interactive UI applications with mock API data', 'Ensure accessibility and mobile responsiveness'],
          estimatedTime: '3 - 4 months',
          completionCriteria: 'Deployed React front-end application with dynamic state and routing.',
          dependencies: 'Basic computer science programming logic.',
          resources: [
            { title: 'React Documentation', url: 'https://react.dev', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Server Engineering & Database Design',
          stageType: 'Skill Acquisition',
          description: 'Build backend services using Node.js/Express, Python/FastAPI, or Java Spring; design relational schemas (PostgreSQL) and NoSQL (MongoDB).',
          skillsToAcquire: ['RESTful API Design', 'PostgreSQL / MongoDB', 'Authentication (JWT/OAuth)', 'Error Handling & Validation'],
          activities: ['Build a standalone REST API with multi-table database relationships', 'Implement secure registration and login with bcrypt and JWT'],
          estimatedTime: '3 - 4 months',
          completionCriteria: 'Fully functional REST API with complete CRUD operations, database migrations, and unit tests.',
          dependencies: 'JavaScript or Python programming proficiency.',
          resources: [
            { title: 'MDN Express & Node Tutorial', url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Full-Stack Integration, WebSockets & Security',
          stageType: 'Portfolio & Projects',
          description: 'Connect client applications to custom backend services, implement real-time communication with WebSockets (Socket.io), and handle payments.',
          skillsToAcquire: ['Full-Stack State Synchronization', 'WebSockets for Real-Time Events', 'Payment Gateway Integration (Razorpay/Stripe)', 'Role-Based Access Control (RBAC)'],
          activities: ['Build an end-to-end SaaS project (e.g. Collaborative Whiteboard, Multi-vendor Marketplace)', 'Integrate Razorpay test mode payments and webhooks'],
          estimatedTime: '2 months',
          completionCriteria: 'Live production SaaS application handling real-time events, authentication, and payments.',
          dependencies: 'Steps 1 and 2 completion.',
          resources: [
            { title: 'Socket.io Documentation', url: 'https://socket.io/docs/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'DevOps, Containerization & Production Cloud Hosting',
          stageType: 'Recruitment & Job Search',
          description: 'Package full-stack applications with Docker, configure automated GitHub Actions CI/CD pipelines, and deploy on AWS, Render, or Vercel.',
          skillsToAcquire: ['Docker & Docker Compose', 'GitHub Actions CI/CD', 'AWS EC2 / S3 / RDS Deployment', 'Domain Management & SSL'],
          activities: ['Write multi-stage Dockerfiles for client and server', 'Setup automated testing and auto-deployment on Git push'],
          estimatedTime: '2 months',
          completionCriteria: 'Custom domain website running via Docker containers with automated CI/CD and monitoring.',
          dependencies: 'Completed full-stack application.',
          resources: [
            { title: 'Docker Official Guides', url: 'https://docs.docker.com/get-started/', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'mobile-app-developer',
    title: 'Mobile App Developer',
    description: 'Builds native and cross-platform mobile applications for smartphones and tablets. Delivers smooth 60fps animations, offline storage, sensor integration, and push notifications using Flutter, React Native, Kotlin, or Swift.',
    educationRequirements: 'B.Tech/B.E. in CS/IT, BCA, or equivalent software degree. Demonstrated mobile apps published on Google Play Store or Apple App Store.',
    educationPathways: [
      'B.Tech / B.E. in CS/IT or Software Engineering (4 years)',
      'BCA / B.Sc Computer Science (3 years)',
      'Cross-Platform Mobile App Engineering Bootcamps with published app links'
    ],
    eligibilityRequirements: 'No formal statutory licensing. Hiring requires working proficiency in mobile design patterns (MVVM/BLoC), offline caching (SQLite/Room), and REST/GraphQL integration.',
    certificationsAndExams: [
      'Google Associate Android Developer Certification',
      'Meta React Native Specialization',
      'AWS Certified Developer'
    ],
    workEnvironment: 'Consumer technology startups, fintech platforms, digital agencies, and enterprise mobility units across Bengaluru, Pune, Hyderabad, and NCR; hybrid/remote.',
    marketDemand: 'High',
    jobOutlook: 'India is the world\'s second-largest smartphone market; mobile-first consumer apps across quick-commerce, fintech, and digital health fuel consistent mobile engineering hiring.',
    salaryRange: { min: 420000, max: 2000000, currency: 'INR', source: 'AmbitionBox India Mobile App Developer Salary 2024, PayScale India' },
    salarySource: 'AmbitionBox India Mobile App Developer Salary 2024, PayScale India',
    salaryByExperience: {
      entryLevel: { min: 420000, max: 800000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 800000, max: 1500000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1500000, max: 2600000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Engineers who understand native bridge optimization, complex animations, and offline-first architecture command top-quartile salaries.'
    },
    careerProgression: [
      'Junior Mobile App Developer',
      'Mobile Engineer (Flutter / React Native)',
      'Senior Mobile Developer / App Architect',
      'Staff Mobile Engineer / Lead Mobile Architect',
      'Head of Mobile Engineering'
    ],
    employmentSectors: {
      government: 'UMANG platform, Aarogya Setu maintenance, State transport department smart bus ticketing apps, Digital India app contractors',
      privateSector: 'Fintech (PhonePe, CRED, Paytm), Quick Commerce (Blinkit, Zepto), Edtech, Consumer Health & Fitness apps'
    },
    timelineOverview: {
      totalEstimatedDuration: '6 - 9 Months dedicated learning and app publishing',
      educationDuration: '3-4 Years formal degree (or equivalent practical track record)',
      prepDuration: '4–6 Months mobile UI frameworks, state management, and device APIs',
      practicalTrainingDuration: '2–4 Months building and launching live apps on Google Play Store',
      jobSearchDuration: '2–4 Months interviewing with live Play Store links',
      overlapNotes: 'Publishing beta apps on the Play Store serves as practical training and portfolio validation simultaneously.',
      confidenceNote: 'Having at least 1 live app installed on your phone to demonstrate during interviews boosts selection rates drastically.'
    },
    sources: [
      { title: 'AmbitionBox Mobile App Developer Salary in India', url: 'https://www.ambitionbox.com/salaries/mobile-app-developer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' },
      { title: 'Flutter Developer Documentation', url: 'https://docs.flutter.dev', sourceAuthority: 'Google Open Source', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Mobile App Developer Learning Roadmap',
      description: 'Structured pathway covering mobile interface principles, cross-platform frameworks (Flutter/React Native), device hardware integration, and store publishing.',
      totalEstimatedDuration: '6 - 9 Months',
      durationBreakdown: 'Programming & Mobile UI: 6-8 weeks | State Management & Navigation: 6-8 weeks | Device APIs & Local Storage: 6 weeks | App Store/Play Store Publishing: 4 weeks',
      overlapNotes: 'Local persistence and API integration are built directly into test applications.',
      steps: [
        {
          stepNumber: 1,
          title: 'Mobile Programming Foundations & Component UI',
          stageType: 'Skill Acquisition',
          description: 'Learn Dart (for Flutter) or JavaScript/TypeScript (for React Native); build mobile UI layouts adhering to Material Design 3 and iOS Human Interface Guidelines.',
          skillsToAcquire: ['Dart / TypeScript Basics', 'Mobile Widgets / Native Views', 'Responsive Screen Adaptation', 'Touch Gestures & Animations'],
          activities: ['Build 4 responsive mobile screens with tab bars and drawer navigation', 'Handle dark mode and orientation changes'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Smooth responsive mobile app UI rendering without layout overflows across diverse screen aspect ratios.',
          dependencies: 'Basic programming fundamentals.',
          resources: [
            { title: 'Flutter Docs - Get Started', url: 'https://docs.flutter.dev/get-started/codelab', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 2,
          title: 'State Management, Networking & Local Persistence',
          stageType: 'Skill Acquisition',
          description: 'Implement robust mobile architecture patterns (BLoC/Provider in Flutter or Redux/Zustand in React Native), REST API calls, and local SQLite/Hive storage.',
          skillsToAcquire: ['Mobile State Architecture', 'HTTP & JSON Serialization', 'Offline Database (SQLite / Room / Hive)', 'Secure Storage for Tokens'],
          activities: ['Build an offline-first notes/todo app that synchronizes with a cloud database when internet connects', 'Handle network disconnection and retry logic gracefully'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Offline-capable mobile app with local caching and seamless cloud synchronization.',
          dependencies: 'Mobile UI foundations (Step 1).',
          resources: [
            { title: 'Bloc State Management Library', url: 'https://bloclibrary.dev/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Hardware APIs, Push Notifications & Security',
          stageType: 'Skill Acquisition',
          description: 'Access device hardware sensors (Camera, GPS, Biometrics/Fingerprint) and integrate Firebase Cloud Messaging (FCM) for push notifications.',
          skillsToAcquire: ['Camera & Image Picker APIs', 'Geolocator & Background Location', 'Firebase Push Notifications (FCM)', 'Biometric Authentication'],
          activities: ['Implement biometric login and camera capture in a food/travel diary application', 'Send automated test push notifications via Firebase Console'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Mobile app utilizing device camera and background GPS with push notification handling.',
          dependencies: 'State management and networking.',
          resources: [
            { title: 'Firebase Cloud Messaging Guide', url: 'https://firebase.google.com/docs/cloud-messaging', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Store Publishing, Performance Profiling & CI/CD',
          stageType: 'Portfolio & Projects',
          description: 'Generate release keystores, create privacy policies, configure Google Play Console / Apple Developer Portal, and profile app memory/frame rates.',
          skillsToAcquire: ['App Bundling (AAB / IPA)', 'Keystore Signing & Security', 'Google Play Store Submission', 'Memory Leak Profiling (DevTools)'],
          activities: ['Publish at least 1 working utility or content application to Google Play Store', 'Profile frame rendering to eliminate jank/stuttering'],
          estimatedTime: '4 weeks',
          completionCriteria: 'Live public app listed on Google Play Store with 100+ active installs and no crash loops.',
          dependencies: 'Completed mobile application.',
          resources: [
            { title: 'Google Play Console Launch Guide', url: 'https://developer.android.com/distribute', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'android-developer',
    title: 'Android Developer',
    description: 'Specializes in the native Android operating system ecosystem using Kotlin and Jetpack Compose. Builds memory-efficient, hardware-integrated applications following Google modern Android architecture guidelines.',
    educationRequirements: 'B.Tech/B.E. in CS/IT, BCA+MCA, or proven native Android portfolio. Strong proficiency in Kotlin, Android Jetpack, Coroutines, and Gradle build systems.',
    educationPathways: [
      'B.Tech / B.E. in Computer Science or IT (4 years)',
      'BCA / B.Sc Computer Science (3 years)',
      'Google Android Developer Nanodegrees with verified Play Store applications'
    ],
    eligibilityRequirements: 'Demonstrated mastery of native Android SDK, Kotlin, Jetpack Compose, Room Database, and Hilt dependency injection.',
    certificationsAndExams: [
      'Associate Android Developer Certification (Google)',
      'Kotlin for Java Developers (Coursera/JetBrains)'
    ],
    workEnvironment: 'Tech startups, mobile device manufacturers (Samsung, Xiaomi R&D in India), telecom giants, and consumer apps in Bengaluru, Noida, Hyderabad, and Pune.',
    marketDemand: 'High',
    jobOutlook: 'Android commands over 95% of the mobile operating system market share in India, ensuring sustained high demand for native Android specialists.',
    salaryRange: { min: 400000, max: 1900000, currency: 'INR', source: 'AmbitionBox Android Salary Report 2024, Glassdoor India' },
    salarySource: 'AmbitionBox Android Salary Report 2024, Glassdoor India',
    salaryByExperience: {
      entryLevel: { min: 400000, max: 750000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 750000, max: 1450000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1450000, max: 2500000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Proficiency in Jetpack Compose, Kotlin Coroutines/Flow, and clean architectural patterns (MVI/MVVM) provides significant compensation advantage.'
    },
    careerProgression: [
      'Junior Android Developer',
      'Android Software Engineer',
      'Senior Android Engineer / Mobile Lead',
      'Staff Android Engineer / Mobile Platform Lead',
      'Head of Mobile Development'
    ],
    employmentSectors: {
      government: 'Indian Railways mobile passenger app development, State police mobile dispatch systems, Bharat Interface for Money (BHIM) engineering',
      privateSector: 'Top Indian consumer internet apps (Swiggy, Zomato, Zepto, Flipkart), Fintech (Zerodha, Paytm, Groww), Global Device R&D Centres'
    },
    timelineOverview: {
      totalEstimatedDuration: '6 - 9 Months structured native learning',
      educationDuration: '3-4 Years formal degree',
      prepDuration: '4–6 Months Kotlin, Android Jetpack, Compose, and architecture',
      practicalTrainingDuration: '2–3 Months building live native projects',
      jobSearchDuration: '2–4 Months interviewing with APK and GitHub code review',
      overlapNotes: 'Jetpack Compose and Room database are practiced while constructing real apps.',
      confidenceNote: 'Modern Android interviews almost exclusively focus on Kotlin, Coroutines, Flow, Compose, and Dependency Injection.'
    },
    sources: [
      { title: 'Google Android Developers Official Documentation', url: 'https://developer.android.com', sourceAuthority: 'Google Developers', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Android Developer Salary in India', url: 'https://www.ambitionbox.com/salaries/android-developer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Native Android Developer Learning Roadmap',
      description: 'Modern Android curriculum aligned with Google official architecture: Kotlin, Jetpack Compose, Coroutines, Flow, Room, and Hilt.',
      totalEstimatedDuration: '6 - 9 Months',
      durationBreakdown: 'Kotlin Language Mastery: 4-6 weeks | Jetpack Compose UI: 6-8 weeks | Coroutines, Flow & Retrofit: 6 weeks | Room, Hilt & Store Launch: 6 weeks',
      overlapNotes: 'Kotlin language syntax is mastered in the context of Android UI programming.',
      steps: [
        {
          stepNumber: 1,
          title: 'Kotlin Programming & Android Studio Foundations',
          stageType: 'Skill Acquisition',
          description: 'Master modern Kotlin syntax: null safety, data classes, extension functions, lambdas, and Android Studio IDE tooling.',
          skillsToAcquire: ['Kotlin Fundamentals & Null Safety', 'Object-Oriented & Functional Kotlin', 'Android Studio Profiler & Logcat', 'Gradle Build Configuration'],
          activities: ['Solve 40+ Kotlin coding challenges on JetBrains Academy', 'Configure multi-module Gradle project structure'],
          estimatedTime: '4 - 6 weeks',
          completionCriteria: 'Write idiomatic Kotlin code utilizing collections, higher-order functions, and extension methods without warnings.',
          dependencies: 'Basic object-oriented programming knowledge.',
          resources: [
            { title: 'Kotlin Official Docs', url: 'https://kotlinlang.org/docs/home.html', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Declarative UI with Jetpack Compose & Navigation',
          stageType: 'Skill Acquisition',
          description: 'Build modern declarative Android UIs using Jetpack Compose, State Hoisting, Modifiers, Theming, and Compose Navigation.',
          skillsToAcquire: ['Jetpack Compose Layouts & LazyLists', 'State Hoisting & Remember', 'Material 3 Theming & Dark Mode', 'Compose Navigation Graph'],
          activities: ['Build a multi-screen media streaming UI in Jetpack Compose', 'Implement custom micro-animations and swipe-to-dismiss'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Fluid 60fps declarative UI with multi-screen navigation and Material Design 3 theming.',
          dependencies: 'Kotlin fundamentals (Step 1).',
          resources: [
            { title: 'Jetpack Compose Tutorial', url: 'https://developer.android.com/jetpack/compose/tutorial', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Asynchronous Coroutines, StateFlow & Retrofit Networking',
          stageType: 'Skill Acquisition',
          description: 'Handle background threads with Kotlin Coroutines, manage reactive streams with StateFlow/SharedFlow, and parse JSON APIs using Retrofit and Moshi.',
          skillsToAcquire: ['Kotlin Coroutines & Dispatchers', 'StateFlow & SharedFlow', 'Retrofit & OkHttp Interceptors', 'Moshi / KotlinX Serialization'],
          activities: ['Connect Compose UI to a public REST API (e.g. GitHub API or TMDB Movies)', 'Handle network pagination, error states, and image caching with Coil'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Real-time REST API app consuming paginated network data seamlessly with Coroutines.',
          dependencies: 'Jetpack Compose proficiency.',
          resources: [
            { title: 'Android Coroutines Best Practices', url: 'https://developer.android.com/kotlin/coroutines', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Local Persistence (Room), Hilt DI & App Publication',
          stageType: 'Portfolio & Projects',
          description: 'Implement Room SQLite database for offline caching, inject dependencies with Dagger-Hilt, write unit tests with JUnit/Mockk, and publish on Google Play.',
          skillsToAcquire: ['Room Persistence Library (DAOs, Entities)', 'Dependency Injection with Hilt', 'Unit Testing ViewModels with Mockk', 'Play Store Publishing (AAB signing)'],
          activities: ['Architect a production-grade offline-first app following Google Now in Android architecture', 'Publish signed bundle to Google Play internal/open testing track'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Published native Android app with MVVM architecture, Room offline persistence, and Hilt injection.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'Guide to Android App Architecture', url: 'https://developer.android.com/topic/architecture', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'ios-developer',
    title: 'iOS Developer',
    description: 'Builds native applications for Apple ecosystem devices (iPhone, iPad, Apple Watch, Mac) using Swift and SwiftUI. Focuses on premium user experiences, fluid 120Hz ProMotion transitions, and tight hardware integration.',
    educationRequirements: 'B.Tech/B.E. in CS/IT, BCA, or equivalent engineering background. Demonstrable portfolio of native iOS apps written in Swift and hosted on GitHub or TestFlight.',
    educationPathways: [
      'B.Tech / B.E. in CS/IT or Engineering (4 years)',
      'BCA / B.Sc Computer Science (3 years)',
      'Apple Developer Academy or specialized Swift development programs with active App Store releases'
    ],
    eligibilityRequirements: 'Requires access to macOS hardware and Xcode. Demonstrable mastery of Swift, SwiftUI/UIKit, CoreData/SwiftData, and Apple Human Interface Guidelines.',
    certificationsAndExams: [
      'App Development with Swift Certified User (Apple/Certiport)',
      'Meta iOS Developer Professional Certificate'
    ],
    workEnvironment: 'Global tech product firms, enterprise mobility divisions, and premium design agencies in Bengaluru, Hyderabad, Gurugram, and Pune; hybrid/remote.',
    marketDemand: 'High',
    jobOutlook: 'Strong demand driven by affluent consumer segments in India, international client outsourcing, and expanding enterprise iOS deployments across banking and aviation.',
    salaryRange: { min: 480000, max: 2200000, currency: 'INR', source: 'AmbitionBox iOS Compensation Data 2024, PayScale India' },
    salarySource: 'AmbitionBox iOS Compensation Data 2024, PayScale India',
    salaryByExperience: {
      entryLevel: { min: 480000, max: 850000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 850000, max: 1600000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1600000, max: 2800000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Because native iOS specialists are fewer in number in India compared to Android developers, skilled Swift/SwiftUI engineers often earn a 10-20% compensation premium.'
    },
    careerProgression: [
      'Junior iOS Developer',
      'iOS Software Engineer (Swift / SwiftUI)',
      'Senior iOS Engineer / Tech Lead',
      'Staff iOS Architect',
      'Head of Mobile / iOS Engineering'
    ],
    employmentSectors: {
      government: 'Indian Armed Forces secure communication apps, Digital Parliament iOS apps, Reserve Bank of India inspection apps',
      privateSector: 'Top tier consumer apps (Flipkart, CRED, Zomato iOS teams), Global Consultancies, Enterprise Apple Mobility Partners'
    },
    timelineOverview: {
      totalEstimatedDuration: '6 - 9 Months intensive study with Mac hardware',
      educationDuration: '3-4 Years formal degree (or equivalent development track record)',
      prepDuration: '4–6 Months Swift language, SwiftUI, and iOS architecture',
      practicalTrainingDuration: '2–4 Months TestFlight beta testing and App Store submission',
      jobSearchDuration: '2–4 Months technical interviews and live architecture reviews',
      overlapNotes: 'SwiftUI component practice and API integration are completed concurrently.',
      confidenceNote: 'Access to a Mac (MacBook or Mac Mini) running Xcode is a strict prerequisite for learning and testing native iOS apps.'
    },
    sources: [
      { title: 'Apple Developer Documentation & Human Interface Guidelines', url: 'https://developer.apple.com/documentation/', sourceAuthority: 'Apple Inc.', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox iOS Developer Salary in India', url: 'https://www.ambitionbox.com/salaries/ios-developer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Native iOS Developer Learning Roadmap',
      description: 'Step-by-step native engineering curriculum: Swift language mastery, SwiftUI declarative views, Async/Await concurrency, SwiftData, and App Store submission.',
      totalEstimatedDuration: '6 - 9 Months',
      durationBreakdown: 'Swift Language & OOP: 6 weeks | SwiftUI & HIG Layouts: 6-8 weeks | Networking, Async/Await & Architecture: 6 weeks | SwiftData & App Store Launch: 4-6 weeks',
      overlapNotes: 'Design aesthetics according to Apple Human Interface Guidelines are learned while coding SwiftUI views.',
      steps: [
        {
          stepNumber: 1,
          title: 'Swift Language Foundations & Xcode Environment',
          stageType: 'Skill Acquisition',
          description: 'Master Swift syntax, optionals, structs vs classes, protocols, generics, closures, and Xcode debugging instruments.',
          skillsToAcquire: ['Swift Types & Optionals', 'Protocols & Extensions', 'Memory Management (ARC / Retain Cycles)', 'Xcode Canvas & LLDB Debugging'],
          activities: ['Complete 50+ Swift Playground exercises on 100 Days of SwiftUI', 'Build modular command line tools using Swift Package Manager (SPM)'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Write idiomatic Swift code without force-unwrapping optionals and with zero ARC memory leaks.',
          dependencies: 'Basic programming concept knowledge and access to macOS.',
          resources: [
            { title: 'The Swift Programming Language Book', url: 'https://docs.swift.org/swift-book/', type: 'Book' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Declarative UI with SwiftUI & Apple HIG',
          stageType: 'Skill Acquisition',
          description: 'Build native iOS interfaces adhering to Apple Human Interface Guidelines using SwiftUI Views, Modifiers, State, Binding, and NavigationStack.',
          skillsToAcquire: ['SwiftUI View Composition', '@State, @Binding, @Observable', 'Apple Human Interface Guidelines (HIG)', 'SF Symbols & Dynamic Type'],
          activities: ['Recreate 3 pixel-perfect Apple native apps (e.g. Weather, Reminders, Apple Music clone)', 'Implement fluid spring animations and haptic feedback'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Fluid, accessible SwiftUI application supporting Dark Mode and dynamic text sizing.',
          dependencies: 'Swift fundamentals (Step 1).',
          resources: [
            { title: 'Apple SwiftUI Tutorials', url: 'https://developer.apple.com/tutorials/swiftui', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Modern Concurrency (Async/Await), URLSession & Architecture',
          stageType: 'Skill Acquisition',
          description: 'Fetch network JSON data asynchronously with Swift Modern Concurrency (async/await, Tasks, Actors) and structure code with MVVM.',
          skillsToAcquire: ['Async/Await & Structured Concurrency', 'URLSession & Codable Protocol', 'MVVM Clean Architecture', 'Unit Testing with XCTest'],
          activities: ['Build a crypto price tracking or movie discovery app consuming public REST APIs', 'Write unit tests for ViewModels mocking URLProtocol network responses'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Decoupled MVVM iOS app with async networking, unit tests, and robust error handling.',
          dependencies: 'SwiftUI and Swift protocols.',
          resources: [
            { title: 'Apple Modern Concurrency Guide', url: 'https://developer.apple.com/documentation/swift/concurrency', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Local Persistence (SwiftData/CoreData) & App Store Release',
          stageType: 'Portfolio & Projects',
          description: 'Persist data locally using SwiftData, manage App Store Connect metadata, configure TestFlight builds, and submit for Apple Review.',
          skillsToAcquire: ['SwiftData / Core Data Modeling', 'TestFlight Beta Distribution', 'App Store Connect & Screenshots', 'App Review Guidelines Compliance'],
          activities: ['Build a complete personal finance or fitness tracking app with SwiftData persistence', 'Publish application to TestFlight and successfully clear App Store Review'],
          estimatedTime: '4 - 6 weeks',
          completionCriteria: 'Live published application on Apple App Store or active TestFlight public link.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'App Store Review Guidelines', url: 'https://developer.apple.com/app-store/review/guidelines/', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'game-developer',
    title: 'Game Developer',
    description: 'Designs, programs, and optimizes interactive 2D and 3D video games across mobile, PC, and console platforms. Implements game loops, physics simulations, particle visual effects, and multiplayer networking in Unity (C#) or Unreal Engine (C++).',
    educationRequirements: 'B.Tech/B.E. in CS/Game Development, B.Sc in Animation & Gaming, or strong playable game portfolio. Solid foundation in linear algebra, trigonometry, C#/C++, and 3D graphics rendering.',
    educationPathways: [
      'B.Tech / B.E. in Computer Science & Engineering (4 years)',
      'B.Sc in Game Design & Development (3 years)',
      'Specialized Game Programming Diplomas with published itch.io or Steam titles'
    ],
    eligibilityRequirements: 'Demonstrable game portfolio with playable builds on itch.io or Play Store; mastery of linear algebra, physics engines, and game loops.',
    certificationsAndExams: [
      'Unity Certified Programmer',
      'Unreal Engine Certified Associate',
      'Autodesk Certified Professional (optional)'
    ],
    workEnvironment: 'Gaming studios, interactive media agencies, and simulation software companies in Pune, Bengaluru, Hyderabad, and Mumbai; flexible studio cultures.',
    marketDemand: 'Moderate',
    jobOutlook: 'Rapidly expanding Indian gaming ecosystem driven by domestic mobile gaming growth, international AAA studio co-development (Ubisoft, EA India), and Web3 games.',
    salaryRange: { min: 360000, max: 1700000, currency: 'INR', source: 'AmbitionBox India Gaming Industry Salaries, Glassdoor' },
    salarySource: 'AmbitionBox India Gaming Industry Salaries, Glassdoor',
    salaryByExperience: {
      entryLevel: { min: 360000, max: 700000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 700000, max: 1350000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1350000, max: 2200000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'AAA studios (EA, Ubisoft, Rockstar India) and high-earning hyper-casual mobile publishers offer higher compensation packages for C++ and graphics engine specialists.'
    },
    careerProgression: [
      'Junior Game Programmer',
      'Game Developer (Gameplay / Physics)',
      'Senior Game Programmer / Lead Technical Designer',
      'Lead Game Architect / Technical Director',
      'Game Studio Creative Director / VP of Production'
    ],
    employmentSectors: {
      government: 'Defence simulation labs (DRDO VR combat simulation training, Indian Air Force flight simulators), CDAC educational games',
      privateSector: 'Mobile Gaming Studios (Nazara, Dream11, Games24x7), AAA Studio Outposts (Ubisoft India, EA Hyderabad, Rockstar India), AR/VR Startups'
    },
    timelineOverview: {
      totalEstimatedDuration: '8 - 12 Months building playable game prototypes',
      educationDuration: '3-4 Years formal degree (optional if possessing strong games portfolio)',
      prepDuration: '4–6 Months game math, engine mastery (Unity/Unreal), and scripting',
      practicalTrainingDuration: '3–6 Months game jams (Global Game Jam, Ludum Dare) and indie releases',
      jobSearchDuration: '3–5 Months studio interviews with playable demos',
      overlapNotes: 'Game jam participation directly builds the developer portfolio.',
      confidenceNote: 'Recruiters always test playable game builds; theoretical knowledge without playable executables will not yield job offers.'
    },
    sources: [
      { title: 'Unity Engine Documentation', url: 'https://docs.unity.com', sourceAuthority: 'Unity Technologies', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Game Developer Salary in India', url: 'https://www.ambitionbox.com/salaries/game-developer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Game Developer Learning Roadmap',
      description: 'Progressive game development journey from 2D mechanics and linear algebra to 3D engine physics, AI state machines, and multiplatform publishing.',
      totalEstimatedDuration: '8 - 12 Months',
      durationBreakdown: 'Mathematics for Games & C#/C++: 6-8 weeks | 2D Game Mechanics & Architecture: 8 weeks | 3D Graphics, Lighting & Physics: 8-10 weeks | Audio, AI & Polishing: 6 weeks',
      overlapNotes: 'Math concepts are practiced by writing shaders and physics movement algorithms directly inside the game engine.',
      steps: [
        {
          stepNumber: 1,
          title: 'Mathematics for Games & Core Engine Scripting',
          stageType: 'Skill Acquisition',
          description: 'Master vectors (dot product, cross product), quaternions, trigonometry, and C# scripting inside Unity or C++ inside Unreal Engine.',
          skillsToAcquire: ['Vector Math & Coordinate Systems', 'C# / C++ Game Scripting', 'Game Loop Architecture (Update vs FixedUpdate)', 'Input Management'],
          activities: ['Build a 2D arcade game (e.g. Pong, Asteroids clone) from scratch', 'Implement custom kinematic character movement without built-in physics'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Smooth playable 2D arcade game with responsive controls and collision detection.',
          dependencies: 'Basic programming literacy and high school mathematics.',
          resources: [
            { title: 'Unity Learn Platform', url: 'https://learn.unity.com/', type: 'Course' }
          ]
        },
        {
          stepNumber: 2,
          title: '2D Platformer Mechanics, Tilemaps & Animation Controllers',
          stageType: 'Portfolio & Projects',
          description: 'Implement raycast collisions, state machine driven character animations, tilemaps, collectible items, and sound effect managers.',
          skillsToAcquire: ['Animation State Machines', 'Tilemaps & 2D Physics Colliders', 'Game Audio & Sound FX Integration', 'Save/Load Serialization (JSON/PlayerPrefs)'],
          activities: ['Build a complete 3-level 2D platformer with enemy patrol logic, health system, and checkpoint saves', 'Publish the playable WebGL build on itch.io'],
          estimatedTime: '8 weeks',
          completionCriteria: 'Playable 2D platformer hosted online on itch.io with zero game-breaking bugs.',
          dependencies: 'Game scripting fundamentals (Step 1).',
          resources: [
            { title: 'itch.io Developer Guides', url: 'https://itch.io/developers', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: '3D Gameplay Programming, Physics & Lighting',
          stageType: 'Skill Acquisition',
          description: 'Transition to 3D space: first-person/third-person cameras, Rigidbody physics, raycasting, baking lighting, particle effects, and navmesh pathfinding.',
          skillsToAcquire: ['3D Rigidbody Physics & Collisions', 'Camera Controllers (Cinemachine)', 'NavMesh Pathfinding & Basic AI', 'Particle Systems & Visual FX'],
          activities: ['Build a 3D third-person action game prototype featuring enemy melee AI and ragdoll physics', 'Profile draw calls and frame rate optimization on target device'],
          estimatedTime: '8 - 10 weeks',
          completionCriteria: 'Playable 3D combat prototype with smart AI navigation and stable 60fps performance.',
          dependencies: '2D game mechanics completion.',
          resources: [
            { title: 'Unreal Engine Documentation', url: 'https://docs.unrealengine.com/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Game Polish, Mobile Optimization & Portfolio Showcase',
          stageType: 'Recruitment & Job Search',
          description: 'Polish game feel (camera shake, sound design, UI juice), optimize draw calls and textures for mobile/PC, and prepare video showcases.',
          skillsToAcquire: ['Mobile Touch Controls & Virtual Joysticks', 'Occlusion Culling & Texture Compression', 'Gameplay Recording & Trailer Editing', 'Developer Resume & Itch.io Portfolio'],
          activities: ['Participate in a 48-hour Game Jam (e.g. Ludum Dare or Global Game Jam)', 'Package an APK for Android or executable for Steam/itch.io'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Portfolio featuring 2+ polished playable games with gameplay video reels ready for studio evaluation.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'Global Game Jam Community', url: 'https://globalgamejam.org/', type: 'Other' }
          ]
        }
      ]
    }
  },
  {
    slug: 'data-analyst',
    title: 'Data Analyst',
    description: 'Extracts, cleans, analyzes, and visualizes structured data to help business leaders make data-driven decisions. Uncovers operational bottlenecks, revenue opportunities, and customer trends using SQL, Python/R, Excel, and Power BI/Tableau.',
    educationRequirements: 'Bachelor\'s degree in Engineering, Computer Science, Statistics, Mathematics, Commerce (B.Com), or Economics. Proven mastery of complex SQL queries, analytical dashboarding, and business statistics.',
    educationPathways: [
      'B.Tech / B.E. in CS/IT/Data Science/Any Branch (4 years)',
      'B.Sc in Statistics, Mathematics, or Economics (3 years)',
      'B.Com / BBA with specialized certifications in Business Analytics and Power BI'
    ],
    eligibilityRequirements: 'No licensing required. Strong analytical thinking, SQL proficiency, data manipulation with Python (Pandas), and business intelligence visualization.',
    certificationsAndExams: [
      'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
      'Google Data Analytics Professional Certificate',
      'Tableau Desktop Specialist'
    ],
    workEnvironment: 'Analytics consultancies, corporate headquarters, e-commerce giants, and GCCs in Bengaluru, Hyderabad, Gurugram, Mumbai, and Pune; hybrid.',
    marketDemand: 'High',
    jobOutlook: 'Nearly every mid-to-large Indian enterprise is transitioning to data-driven operations, creating high ongoing demand across retail, BFSI, and logistics.',
    salaryRange: { min: 400000, max: 1500000, currency: 'INR', source: 'AmbitionBox India Data Analytics Report 2024, PayScale India' },
    salarySource: 'AmbitionBox India Data Analytics Report 2024, PayScale India',
    salaryByExperience: {
      entryLevel: { min: 400000, max: 700000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 700000, max: 1250000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1250000, max: 2000000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Data analysts who combine SQL mastery with domain knowledge in financial modeling or marketing cohort analysis advance quickly to analytics manager roles.'
    },
    careerProgression: [
      'Junior Data Analyst / Business Analyst Trainee',
      'Data Analyst (SQL / BI / Python)',
      'Senior Data Analyst / Lead Analytics Consultant',
      'Analytics Manager / Head of Business Intelligence',
      'VP of Analytics & Strategy'
    ],
    employmentSectors: {
      government: 'NITI Aayog data evaluation cells, Ministry of Statistics and Programme Implementation (MoSPI), RBI analytics units, GSTN analytics teams',
      privateSector: 'Consulting (Mu Sigma, Fractal, Tiger Analytics, LatentView), Banking & Fintech (HDFC, Axis, Paytm), E-commerce (Flipkart, Amazon India)'
    },
    timelineOverview: {
      totalEstimatedDuration: '4 - 6 Months structured learning and dashboard building',
      educationDuration: '3-4 Years formal undergraduate degree',
      prepDuration: '3–4 Months SQL, Excel, Power BI/Tableau, and basic Python',
      practicalTrainingDuration: '1–2 Months capstone business case studies and Kaggle datasets',
      jobSearchDuration: '2–3 Months applying with interactive public dashboards',
      overlapNotes: 'SQL and dashboarding skills can be acquired in parallel using real-world open datasets.',
      confidenceNote: 'A portfolio with interactive NovyPro/Tableau Public links displaying realistic business KPIs is critical for selection.'
    },
    sources: [
      { title: 'AmbitionBox Data Analyst Salary in India', url: 'https://www.ambitionbox.com/salaries/data-analyst-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' },
      { title: 'Microsoft Power BI Official Documentation', url: 'https://learn.microsoft.com/en-us/power-bi/', sourceAuthority: 'Microsoft Learn', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Data Analyst Career Roadmap',
      description: 'Comprehensive pathway covering advanced Excel, SQL query optimization, Python data wrangling (Pandas), and interactive BI dashboard design.',
      totalEstimatedDuration: '4 - 6 Months',
      durationBreakdown: 'Advanced Excel & Business Math: 3-4 weeks | SQL Querying & Joins: 4-6 weeks | BI Dashboarding (Power BI/Tableau): 4-6 weeks | Python Data Wrangling: 4 weeks',
      overlapNotes: 'Real-world business case studies are applied across all stages.',
      steps: [
        {
          stepNumber: 1,
          title: 'Advanced Microsoft Excel & Business Statistics',
          stageType: 'Skill Acquisition',
          description: 'Master lookup formulas (XLOOKUP, INDEX/MATCH), pivot tables, data cleaning, descriptive statistics (mean, median, standard deviation), and business KPI tracking.',
          skillsToAcquire: ['Advanced Excel Formulas & Logic', 'Pivot Tables & Slicers', 'Descriptive Statistics & Normal Distributions', 'Financial & Operational KPIs'],
          activities: ['Analyze an e-commerce sales spreadsheet with 50,000+ rows using pivot tables and slicers', 'Create an automated executive summary dashboard in Excel'],
          estimatedTime: '3 - 4 weeks',
          completionCriteria: 'Build an automated Excel workbook that cleans raw data, computes key ratios, and visualizes summary charts.',
          dependencies: 'Basic numeracy and computer literacy.',
          resources: [
            { title: 'Excel Easy Tutorials', url: 'https://www.excel-easy.com/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Advanced SQL Querying & Database Analytics',
          stageType: 'Skill Acquisition',
          description: 'Write complex SQL queries utilizing multi-table joins, subqueries, Common Table Expressions (CTEs), and window functions (ROW_NUMBER, DENSE_RANK, LAG, LEAD).',
          skillsToAcquire: ['SQL Joins (Inner, Left, Cross)', 'Aggregations & Group By Filters (HAVING)', 'Window Functions & Ranking', 'CTEs & Subqueries'],
          activities: ['Solve 50+ business SQL challenges on StrataScratch / LeetCode Database', 'Calculate Monthly Active Users (MAU) and Customer Retention cohorts using window functions'],
          estimatedTime: '4 - 6 weeks',
          completionCriteria: 'Pass medium-to-hard SQL interview assessments within 25 minutes with optimal query syntax.',
          dependencies: 'Relational database concepts.',
          resources: [
            { title: 'Mode Analytics SQL Tutorial', url: 'https://mode.com/sql-tutorial/', type: 'Course' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Business Intelligence Dashboards (Power BI / Tableau)',
          stageType: 'Portfolio & Projects',
          description: 'Connect to databases, build star-schema data models, write DAX calculations (CALCULATE, RELATED, Time Intelligence), and design executive dashboards.',
          skillsToAcquire: ['Data Modeling (Star Schema & Fact Tables)', 'DAX Measures & Time Intelligence', 'Interactive Filtering & Drill-Throughs', 'UI/UX for Dashboards'],
          activities: ['Build an interactive Sales & Inventory Performance Dashboard in Power BI', 'Publish to NovyPro / Tableau Public with documentation of business insights'],
          estimatedTime: '4 - 6 weeks',
          completionCriteria: 'Published interactive Power BI/Tableau dashboard demonstrating business insights and clear action items.',
          dependencies: 'Excel and SQL understanding.',
          resources: [
            { title: 'Microsoft Power BI Guided Learning', url: 'https://learn.microsoft.com/en-us/training/powerplatform/power-bi', type: 'Course' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Python for Data Analysis (Pandas, NumPy, Seaborn)',
          stageType: 'Skill Acquisition',
          description: 'Use Python in Jupyter Notebooks to clean messy CSV/JSON datasets, handle missing values, perform exploratory data analysis (EDA), and create statistical charts.',
          skillsToAcquire: ['NumPy Arrays & Vectorization', 'Pandas DataFrames & Merging', 'Exploratory Data Analysis (EDA)', 'Data Visualization (Matplotlib & Seaborn)'],
          activities: ['Perform end-to-end EDA on a Kaggle dataset (e.g. Telecom Customer Churn or Swiggy Restaurant Analysis)', 'Write clean, commented Jupyter Notebook summary reports'],
          estimatedTime: '4 weeks',
          completionCriteria: 'Completed EDA notebook published on GitHub with visual correlation heatmaps and actionable conclusions.',
          dependencies: 'Basic programming logic and statistics.',
          resources: [
            { title: 'Kaggle Learn Data Courses', url: 'https://www.kaggle.com/learn', type: 'Course' }
          ]
        }
      ]
    }
  },
  {
    slug: 'data-scientist',
    title: 'Data Scientist',
    description: 'Builds advanced predictive models, machine learning algorithms, and statistical simulations to extract actionable intelligence from massive, unstructured datasets for enterprise strategy and automated decisioning.',
    educationRequirements: 'B.Tech/M.Tech in Computer Science, Data Science, or Master\'s degree in Statistics, Mathematics, or Economics. Strong foundation in linear algebra, multivariable calculus, probability, and machine learning.',
    educationPathways: [
      'B.Tech / B.E. in CS / IT / Data Science / AI followed by M.Tech in Data Science',
      'M.Sc in Statistics, Applied Mathematics, or Econometrics (2 years after B.Sc)',
      'BS in Data Science & Applications (e.g. IIT Madras Online BS Degree) or Post-Graduate Diplomas in Business Analytics (PGDBA - IIM/IIT/ISI)'
    ],
    eligibilityRequirements: 'Strong mathematical rigor (multivariate calculus, probability distributions, hypothesis testing) combined with production Python/R and ML modeling.',
    certificationsAndExams: [
      'TensorFlow Developer Certificate',
      'AWS Certified Machine Learning - Specialty',
      'Google Professional Data Engineer'
    ],
    workEnvironment: 'Corporate research divisions, AI product startups, and Global Capability Centers (GCCs) in Bengaluru, Hyderabad, Gurugram, and Pune; hybrid.',
    marketDemand: 'High',
    jobOutlook: 'Strategic hiring across financial risk management, e-commerce personalization algorithms, fraud detection, and health diagnostic intelligence.',
    salaryRange: { min: 650000, max: 2800000, currency: 'INR', source: 'Michael Page India Tech Benchmark 2024, AmbitionBox Data Science' },
    salarySource: 'Michael Page India Tech Benchmark 2024, AmbitionBox Data Science',
    salaryByExperience: {
      entryLevel: { min: 650000, max: 1100000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 1100000, max: 1900000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1900000, max: 3500000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Top-tier product firms and research labs offer freshers with Master\'s degrees ₹15–25 LPA; Principal Data Scientists frequently earn ₹40–70+ LPA.'
    },
    careerProgression: [
      'Associate Data Scientist',
      'Data Scientist (ML / Predictive Modeling)',
      'Senior Data Scientist / Lead Data Scientist',
      'Principal Data Scientist / Director of Data Science',
      'Chief Data Scientist / Chief AI Officer'
    ],
    employmentSectors: {
      government: 'UIDAI analytics, Indian Meteorological Department (weather forecasting models), National Health Authority (Ayushman Bharat data models)',
      privateSector: 'GCCs (Target, Walmart Global Tech India), E-commerce (Amazon, Flipkart), Fintech (American Express, Capital One), Consulting (Fractal Analytics, Tiger)'
    },
    timelineOverview: {
      totalEstimatedDuration: '8 - 14 Months dedicated study (with prior mathematical or engineering background)',
      educationDuration: '4 Years B.Tech or 2 Years Master\'s degree',
      prepDuration: '6–9 Months math foundations, statistical modeling, and ML algorithms',
      practicalTrainingDuration: '3–6 Months Kaggle competitions, research papers, and model deployment',
      jobSearchDuration: '3–5 Months technical take-home modeling assignments and interviews',
      overlapNotes: 'Math foundations and machine learning coding are studied in conjunction.',
      confidenceNote: 'Interviews rigorously test theoretical understanding of loss functions, optimization, overfitting, and mathematical intuition behind algorithms.'
    },
    sources: [
      { title: 'Michael Page India Salary Benchmark', url: 'https://www.michaelpage.co.in/salary-guide', sourceAuthority: 'Michael Page India', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Data Scientist Salary in India', url: 'https://www.ambitionbox.com/salaries/data-scientist-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Data Scientist Learning Roadmap',
      description: 'Comprehensive curriculum from mathematical foundations (calculus, probability) to supervised/unsupervised machine learning, deep learning, and production deployment.',
      totalEstimatedDuration: '8 - 14 Months',
      durationBreakdown: 'Mathematics & Statistics: 8 weeks | Classical Machine Learning: 10 weeks | Deep Learning Foundations: 8 weeks | Production ML & Deployment: 6 weeks',
      overlapNotes: 'Statistical theory is validated by coding algorithms from scratch in Python.',
      steps: [
        {
          stepNumber: 1,
          title: 'Mathematical Foundations for Machine Learning',
          stageType: 'Skill Acquisition',
          description: 'Master linear algebra (eigenvectors, SVD), multivariable calculus (gradient descent), and probability distributions (Bayes theorem, hypothesis testing).',
          skillsToAcquire: ['Matrix Operations & Decomposition (SVD)', 'Gradient Descent & Cost Functions', 'Probability Distributions & Central Limit Theorem', 'A/B Testing & Hypothesis Formulation'],
          activities: ['Implement linear regression and gradient descent from scratch in Python without Scikit-Learn', 'Conduct a statistical A/B test simulation with p-value calculations'],
          estimatedTime: '8 weeks',
          completionCriteria: 'Able to mathematically derive gradient descent and explain mathematical assumptions behind linear and logistic regression.',
          dependencies: 'Undergraduate engineering mathematics or calculus basics.',
          resources: [
            { title: 'Mathematics for Machine Learning Book', url: 'https://mml-book.github.io/', type: 'Book' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Supervised & Unsupervised Machine Learning Algorithms',
          stageType: 'Skill Acquisition',
          description: 'Master algorithms using Scikit-Learn: Decision Trees, Random Forests, Gradient Boosting (XGBoost, LightGBM), K-Means, and PCA dimensionality reduction.',
          skillsToAcquire: ['Ensemble Methods (Random Forest, XGBoost)', 'Cross-Validation & Hyperparameter Tuning', 'Feature Engineering & Selection', 'Clustering (K-Means) & PCA'],
          activities: ['Compete in 2 Kaggle tabular competitions achieving top 25% rank', 'Analyze feature importances using SHAP (SHapley Additive exPlanations) values'],
          estimatedTime: '10 weeks',
          completionCriteria: 'Build an end-to-end predictive pipeline with cross-validation, hyperparameter tuning, and SHAP explainability.',
          dependencies: 'Math foundations (Step 1) and Python programming.',
          resources: [
            { title: 'Scikit-Learn Documentation', url: 'https://scikit-learn.org/stable/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Deep Learning & Neural Network Foundations',
          stageType: 'Skill Acquisition',
          description: 'Understand backpropagation, activation functions, regularizations (Dropout, BatchNorm), and construct multi-layer perceptrons in PyTorch.',
          skillsToAcquire: ['PyTorch Tensors & Autograd', 'Feedforward Neural Networks', 'Loss Functions & Optimizers (Adam, SGD)', 'Computer Vision & NLP Intro'],
          activities: ['Build a neural network classifier in PyTorch from scratch', 'Train and fine-tune a Convolutional Neural Network (CNN) on image data'],
          estimatedTime: '8 weeks',
          completionCriteria: 'PyTorch model trained with custom datasets achieving verified convergence without vanishing gradients.',
          dependencies: 'Machine learning algorithms and calculus.',
          resources: [
            { title: 'PyTorch Official Tutorials', url: 'https://pytorch.org/tutorials/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Model Serving, API Deployment & MLOps Basics',
          stageType: 'Portfolio & Projects',
          description: 'Package machine learning models into microservices using FastAPI, containerize with Docker, and deploy to cloud platforms with monitoring.',
          skillsToAcquire: ['FastAPI Model Inference Endpoints', 'Docker Containerization for ML', 'Model Tracking (MLflow / Weights & Biases)', 'Cloud Deployment (AWS/GCP)'],
          activities: ['Build an interactive Streamlit or web demo showcasing the live ML model', 'Deploy the prediction API inside a Docker container on AWS EC2'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Live accessible web application executing real-time ML inferences via a documented REST API.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'Made With ML - Production MLOps', url: 'https://madewithml.com/', type: 'Course' }
          ]
        }
      ]
    }
  },
  {
    slug: 'data-engineer',
    title: 'Data Engineer',
    description: 'Designs, constructs, tests, and maintains large-scale data pipelines and distributed storage architectures. Transforms raw, heterogeneous telemetry into clean, structured datasets for analytics and AI models.',
    educationRequirements: 'B.Tech/B.E. in CS/IT/ECE, MCA, or relevant software degree. Deep expertise in distributed systems (Apache Spark, Kafka), SQL, Python, and cloud data warehouses (Snowflake, BigQuery).',
    educationPathways: [
      'B.Tech / B.E. in Computer Science or Information Technology (4 years)',
      'BCA + MCA (5 years)',
      'Big Data Engineering and Cloud Architect certifications'
    ],
    eligibilityRequirements: 'Strong understanding of distributed computing, ETL/ELT pipelines, data modeling (Kimball dimensional modeling), and cloud storage systems.',
    certificationsAndExams: [
      'Databricks Certified Data Engineer Associate',
      'AWS Certified Data Engineer - Associate',
      'Google Cloud Certified Professional Data Engineer'
    ],
    workEnvironment: 'Global Capability Centers (GCCs), cloud consultancies, and large-scale data startups in Bengaluru, Hyderabad, Pune, and Gurugram; hybrid.',
    marketDemand: 'High',
    jobOutlook: 'Surging demand as Indian tech firms accumulate multi-petabyte datasets that require modern distributed architectures and reliable ETL automation.',
    salaryRange: { min: 550000, max: 2600000, currency: 'INR', source: 'AmbitionBox India Data Engineering Benchmark 2024, Glassdoor' },
    salarySource: 'AmbitionBox India Data Engineering Benchmark 2024, Glassdoor',
    salaryByExperience: {
      entryLevel: { min: 550000, max: 950000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 950000, max: 1750000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1750000, max: 3200000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Engineers with proven experience in Apache Spark, Databricks, Snowflake, and streaming Kafka pipelines command strong compensation premiums.'
    },
    careerProgression: [
      'Junior Data Engineer / ETL Developer',
      'Data Engineer (Spark / PySpark / Cloud)',
      'Senior Data Engineer / Data Pipeline Architect',
      'Lead Big Data Architect / Principal Data Engineer',
      'Head of Data Engineering / VP of Data Platform'
    ],
    employmentSectors: {
      government: 'Central Board of Direct Taxes (Project Insight big data analytics), National Highway Authority of India (toll telemetry pipelines), GSTN data warehouse',
      privateSector: 'Global Banking Capability Centers (Goldman Sachs, Barclays), E-commerce (Flipkart, Amazon), Telecom (Jio, Airtel Analytics)'
    },
    timelineOverview: {
      totalEstimatedDuration: '6 - 10 Months focused study and pipeline engineering',
      educationDuration: '4 Years formal degree',
      prepDuration: '4–6 Months distributed systems, SQL, Python, and cloud data warehouses',
      practicalTrainingDuration: '2–4 Months building automated ETL pipelines with open-source datasets',
      jobSearchDuration: '2–4 Months data pipeline architectural interviews',
      overlapNotes: 'Data pipeline orchestration with Airflow is learned while building data warehouses.',
      confidenceNote: 'Interviews focus heavily on query optimization, partitioning strategies, data lake formats (Delta/Parquet), and handling backfills.'
    },
    sources: [
      { title: 'Databricks Learning Pathways', url: 'https://www.databricks.com/learn', sourceAuthority: 'Databricks', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Data Engineer Salary in India', url: 'https://www.ambitionbox.com/salaries/data-engineer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Data Engineer Learning Roadmap',
      description: 'Comprehensive curriculum spanning advanced data modeling, distributed computing with Apache Spark, real-time streaming with Kafka, and modern cloud data warehouses.',
      totalEstimatedDuration: '6 - 10 Months',
      durationBreakdown: 'Advanced SQL & Data Modeling: 6 weeks | Python, PySpark & Distributed Computing: 8-10 weeks | Data Orchestration (Airflow) & Warehouses: 6-8 weeks | Streaming Data with Kafka: 6 weeks',
      overlapNotes: 'Airflow orchestration and Docker deployment are practiced during pipeline development.',
      steps: [
        {
          stepNumber: 1,
          title: 'Advanced SQL, Relational Architecture & Dimensional Modeling',
          stageType: 'Skill Acquisition',
          description: 'Master data warehousing concepts: Kimball dimensional modeling (fact vs dimension tables, star vs snowflake schemas), and complex analytical SQL.',
          skillsToAcquire: ['Dimensional Modeling (Kimball)', 'Slowly Changing Dimensions (SCD Type 1/2)', 'Analytical Window Queries', 'Columnar vs Row-Oriented Storage'],
          activities: ['Design a data warehouse schema for a multi-channel retail business', 'Write SQL queries computing rolling 30-day customer lifetime values'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Normalized and star-schema warehouse designs with documented SCD Type 2 handling.',
          dependencies: 'Basic SQL querying knowledge.',
          resources: [
            { title: 'Kimball Group Data Warehouse Toolkit', url: 'https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Distributed Big Data Processing with Apache Spark & PySpark',
          stageType: 'Skill Acquisition',
          description: 'Understand cluster computing, RDDs, DataFrames, Spark SQL, partitioning, shuffle operations, and the Parquet/Delta Lake columnar file format.',
          skillsToAcquire: ['PySpark DataFrames & Transformations', 'Partitioning, Bucketing & Shuffling', 'Delta Lake ACID Transactions', 'Optimizing Spark Memory & Spills'],
          activities: ['Process a 10GB+ public dataset (e.g. NYC Taxi or GitHub Archive) using PySpark', 'Benchmark query performance between CSV, JSON, and partitioned Parquet files'],
          estimatedTime: '8 - 10 weeks',
          completionCriteria: 'PySpark job executing data aggregations on millions of rows with minimal shuffle overhead.',
          dependencies: 'Python programming and SQL foundations.',
          resources: [
            { title: 'Apache Spark Official Documentation', url: 'https://spark.apache.org/docs/latest/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Data Pipeline Orchestration (Apache Airflow) & Cloud Warehouses',
          stageType: 'Portfolio & Projects',
          description: 'Schedule, monitor, and backfill production data workflows using Apache Airflow DAGs, and load transformed data into Snowflake or BigQuery.',
          skillsToAcquire: ['Apache Airflow DAG Authoring', 'Task Dependencies & Backfilling', 'Cloud Data Warehouses (Snowflake / BigQuery)', 'dbt (Data Build Tool) Modeling'],
          activities: ['Build an automated daily ELT pipeline in Airflow extracting API data, transforming with dbt, and loading into Snowflake', 'Configure Slack alert notifications for pipeline failures'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Production-ready automated Airflow DAG executing reliable data transformation runs with alerting.',
          dependencies: 'PySpark and dimensional modeling.',
          resources: [
            { title: 'Apache Airflow Documentation', url: 'https://airflow.apache.org/docs/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Real-Time Streaming with Apache Kafka & CI/CD',
          stageType: 'Skill Acquisition',
          description: 'Implement real-time pub/sub event streaming with Apache Kafka, stream processing with Spark Streaming or Flink, and automate deployment.',
          skillsToAcquire: ['Kafka Producers, Consumers & Topics', 'Consumer Groups & Offset Management', 'Spark Structured Streaming', 'Dockerized Data Platform CI/CD'],
          activities: ['Build a real-time event streaming pipeline processing sensor/clickstream telemetry with Kafka and Spark', 'Deploy the complete data stack via docker-compose on AWS'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Working real-time streaming pipeline processing events with sub-second latency into a data lake.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'Confluent Kafka Tutorials', url: 'https://developer.confluent.io/', type: 'Documentation' }
          ]
        }
      ]
    }
  }
];

module.exports = techPart1;
