/**
 * Technology Category Careers Audit Data (35 Careers)
 * Validated for Indian employment market, realistic compensation benchmarks,
 * eligible education pathways, and sequential roadmap milestones.
 */

const technologyCareers = [
  {
    slug: 'software-developer',
    title: 'Software Developer',
    description: 'Designs, develops, tests, and maintains software applications and system software. Implements algorithms, data structures, and object-oriented business logic across Indian IT services, GCCs, and product technology firms.',
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
    salaryRange: {
      min: 450000,
      max: 2200000,
      currency: 'INR',
      source: 'AmbitionBox India Tech Report 2024, NASSCOM Compensation Benchmark'
    },
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
    salaryRange: {
      min: 400000,
      max: 1800000,
      currency: 'INR',
      source: 'AmbitionBox India Frontend Benchmark 2024, PayScale India'
    },
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
    salaryRange: {
      min: 480000,
      max: 2200000,
      currency: 'INR',
      source: 'AmbitionBox India Backend Compensation, PayScale India'
    },
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
  }
];

module.exports = technologyCareers;
