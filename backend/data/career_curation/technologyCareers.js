// Technology Sector Careers (29 Careers)
// Standardized Education Qualifications & Job-Preparation Roadmaps (Months Only)

const part2 = require('./technologyCareersPart2');

const part1 = {
  'software-developer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Computer Science, Information Technology, BCA, or any STEM discipline.",
      preferredDegree: "B.Tech / B.E. in Computer Science & Engineering or Information Technology.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; recruitment is determined by technical coding rounds and practical problem-solving ability.",
      mandatoryRequirements: [
        "10+2 with Mathematics/Physics or recognized state polytechnic diploma.",
        "Graduation degree completed prior to joining formal corporate campus placement."
      ],
      preferredQualifications: [
        "Active GitHub repository demonstrating deployed web or systems software projects.",
        "Good competitive programming rating or active problem-solving profile (LeetCode / HackerRank)."
      ],
      eligibilityCriteria: "Most traditional IT services companies (TCS, Infosys, Wipro) require a minimum aggregate of 60% across 10th, 12th, and graduation with no active backlogs. Tech product firms and startups typically focus on coding assessments rather than rigid cutoff marks.",
      regulatoryNotes: "Recruitment criteria, GPA cutoffs, and bond requirements vary by specific employer and job notification."
    },
    roadmap: {
      title: "Software Developer Job-Preparation Roadmap",
      description: "Practical roadmap covering core language proficiency, data structures & algorithms, version control, project building, and interview preparation.",
      totalDurationMonths: 5,
      totalDurationFormatted: "5 months",
      steps: [
        {
          stepNumber: 1,
          title: "Programming Foundations & Algorithmic Logic",
          durationMonths: 2,
          durationText: "2 months",
          category: "learning",
          description: "Master computational logic, memory model, and object-oriented paradigms in a core language (Java, C++, or Python).",
          tasks: [
            "Learn variable scopes, control flow, functions, OOP concepts (inheritance, polymorphism, encapsulation)",
            "Solve 60+ foundational programming problems on online judges",
            "Write modular console-based utilities (e.g., student management system, banking logic)"
          ],
          milestone: "Demonstrate clean syntax mastery and solve basic algorithmic challenges without IDE auto-complete assistance.",
          prerequisites: ["Basic mathematical and logical problem-solving skills"],
          resources: [
            { title: "Python Official Tutorial", url: "https://docs.python.org/3/tutorial/", type: "official", isFree: true },
            { title: "GeeksforGeeks Core Programming", url: "https://www.geeksforgeeks.org/computer-programming-languages/", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Data Structures & Algorithmic Problem Solving",
          durationMonths: 2,
          durationText: "2 months",
          category: "practice",
          description: "Implement primary data structures from scratch and analyze time and space complexity using Big-O notation.",
          tasks: [
            "Implement Arrays, Linked Lists, Stacks, Queues, Hash Tables, Trees, and Graphs",
            "Solve 120+ LeetCode problems across Easy and Medium tiers",
            "Master essential patterns: two pointers, sliding window, binary search, BFS/DFS traversal"
          ],
          milestone: "Solve standard LeetCode Medium problems within 30 minutes with optimal time and space complexity.",
          prerequisites: ["Step 1: Programming Foundations & Algorithmic Logic"],
          resources: [
            { title: "LeetCode Problem Sets", url: "https://leetcode.com/problemset/all/", type: "platform", isFree: true },
            { title: "NeetCode DSA Roadmap", url: "https://neetcode.io/roadmap", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Full-Stack Project Development & Git Collaboration",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Build, test, and deploy practical RESTful web applications using relational databases and version control.",
          tasks: [
            "Build 2 end-to-end applications (e.g., Task Tracker with authentication, E-commerce catalog API)",
            "Connect backend APIs to PostgreSQL or MongoDB with proper data schema validation",
            "Push code to GitHub with clear README documentation and Git commit history"
          ],
          milestone: "Deploy two production-ready web apps on free hosting services (Render/Vercel) with public GitHub source code.",
          prerequisites: ["Step 2: Data Structures & Algorithmic Problem Solving"],
          resources: [
            { title: "MDN Web Docs", url: "https://developer.mozilla.org/", type: "official", isFree: true },
            { title: "Git Official Documentation", url: "https://git-scm.com/doc", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Technical Mock Interviews & Job Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Prepare for technical, behavioral, and system design interviews while applying for entry-level developer openings.",
          tasks: [
            "Revise DBMS, OS, Computer Networks, and SQL fundamentals frequently asked in Indian campus and off-campus tests",
            "Participate in 5 mock technical interviews on Pramp or peer platforms",
            "Apply to 20+ verified fresher openings on LinkedIn, Naukri, and company career portals"
          ],
          milestone: "Complete 5 mock interviews with satisfactory evaluations and submit targeted job applications.",
          prerequisites: ["Step 3: Full-Stack Project Development & Git Collaboration"],
          resources: [
            { title: "Pramp Peer Mock Interviews", url: "https://www.pramp.com/", type: "platform", isFree: true },
            { title: "GeeksforGeeks Placement Preparation", url: "https://www.geeksforgeeks.org/placements/", type: "platform", isFree: true }
          ]
        }
      ]
    }
  },

  'frontend-developer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in any discipline (B.Tech, BCA, B.Sc Computer Science) or equivalent demonstrable portfolio.",
      preferredDegree: "B.Tech in Computer Science / IT or BCA.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; recruitment is portfolio and practical assignment driven.",
      mandatoryRequirements: [
        "10+2 with minimum passing criteria.",
        "A live online portfolio demonstrating responsive user interface design."
      ],
      preferredQualifications: [
        "Strong understanding of React.js or modern component-driven frontend frameworks.",
        "Knowledge of UI/UX accessibility standards (WCAG) and responsive web design."
      ],
      eligibilityCriteria: "Product firms and digital agencies evaluate live portfolio websites, component design quality, and GitHub repositories rather than formal degree cutoffs.",
      regulatoryNotes: "Eligibility criteria are determined by individual hiring organizations."
    },
    roadmap: {
      title: "Frontend Developer Job-Preparation Roadmap",
      description: "Structured curriculum focusing on modern HTML5, responsive CSS, JavaScript ES6+, React, API integration, and portfolio deployment.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Semantic HTML5, Modern CSS & Responsive Layouts",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master modern CSS Flexbox, Grid, CSS custom properties, and responsive media queries across mobile and desktop viewports.",
          tasks: [
            "Build 3 pixel-perfect responsive landing pages from Figma mockups",
            "Implement CSS animations, transitions, and accessible form validations",
            "Ensure mobile-first responsive design across all screen breakpoints"
          ],
          milestone: "Deliver 3 responsive landing pages verified on Chrome DevTools mobile emulation.",
          prerequisites: ["Basic computer literacy"],
          resources: [
            { title: "MDN CSS Layout", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout", type: "official", isFree: true },
            { title: "Web.dev Responsive Design", url: "https://web.dev/learn/design/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Modern JavaScript (ES6+) & DOM Manipulation",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Understand core JavaScript runtime: closures, asynchronous promises, fetch API, event loop, and DOM rendering.",
          tasks: [
            "Practice array methods, destructuring, modules, and error handling",
            "Build interactive vanilla JS projects (e.g., Weather App with public API, Interactive Quiz)",
            "Master client-side storage (localStorage, sessionStorage, cookies)"
          ],
          milestone: "Build and deploy an API-driven dynamic JavaScript application without third-party frameworks.",
          prerequisites: ["Step 1: Semantic HTML5, Modern CSS & Responsive Layouts"],
          resources: [
            { title: "JavaScript.info Guide", url: "https://javascript.info/", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "React.js, Component Architecture & State Management",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Learn component lifecycle, React Hooks (useState, useEffect, useMemo), Context API, and client-side routing.",
          tasks: [
            "Build a modular Single Page Application (e.g., Career Portal or Task Management Dashboard)",
            "Integrate RESTful APIs with loading, empty, and error state handling",
            "Implement client-side routing using React Router"
          ],
          milestone: "Deploy a production-grade React application with clean component structure and live API data.",
          prerequisites: ["Step 2: Modern JavaScript (ES6+) & DOM Manipulation"],
          resources: [
            { title: "React Official Documentation", url: "https://react.dev/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Portfolio Development, Performance & Job Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Assemble personal developer portfolio website, optimize Core Web Vitals, and apply for frontend roles.",
          tasks: [
            "Publish custom portfolio highlighting 3 best projects with live demo links and GitHub repositories",
            "Optimize lighthouse performance, accessibility, and SEO scores above 90",
            "Apply to 25+ frontend vacancies on Naukri, Wellfound, and LinkedIn"
          ],
          milestone: "Live portfolio with verified Lighthouse score > 90 and active interview applications submitted.",
          prerequisites: ["Step 3: React.js, Component Architecture & State Management"],
          resources: [
            { title: "Google Web Vitals", url: "https://web.dev/vitals/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'backend-developer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Computer Science, Information Technology, BCA, or equivalent engineering degree.",
      preferredDegree: "B.Tech / B.E. in Computer Science or Information Technology.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; hiring evaluates database design, API security, and server logic.",
      mandatoryRequirements: [
        "10+2 with Mathematics/Science.",
        "Graduation degree completed prior to corporate onboarding."
      ],
      preferredQualifications: [
        "Experience building RESTful microservices and database schema design.",
        "Familiarity with containerization (Docker) and cloud deployments (AWS/GCP)."
      ],
      eligibilityCriteria: "Recruiters evaluate server-side programming ability, database query optimization, and understanding of concurrency and caching.",
      regulatoryNotes: "Specific requirements depend on employer technology stack and notification."
    },
    roadmap: {
      title: "Backend Developer Job-Preparation Roadmap",
      description: "Practical curriculum covering server architectures, relational and NoSQL databases, RESTful APIs, authentication, and deployment.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Server Runtime & REST API Architecture",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master server-side runtime environments (Node.js/Express, Python/FastAPI, or Java/Spring Boot) and HTTP standards.",
          tasks: [
            "Implement RESTful endpoints with proper HTTP status codes and query parameters",
            "Handle middleware, request body parsing, file uploads, and global error handling",
            "Write comprehensive API documentation using Swagger/OpenAPI"
          ],
          milestone: "Build a fully documented, robust REST API server handling CRUD operations with validation middleware.",
          prerequisites: ["Proficiency in one programming language (JavaScript/Python/Java)"],
          resources: [
            { title: "Node.js Official Documentation", url: "https://nodejs.org/docs/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Database Modeling, SQL Querying & Indexing",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Design relational database schemas (PostgreSQL/MySQL), normalize data, and write optimized queries and migrations.",
          tasks: [
            "Write complex SQL queries involving INNER/LEFT JOINs, subqueries, and window functions",
            "Design normalized relational schemas (3NF) and apply database indexing strategies",
            "Integrate an ORM/Query Builder (Prisma, Sequelize, or SQLAlchemy) with safe connection pooling"
          ],
          milestone: "Design and benchmark a database schema for an e-commerce platform with indexing and transactions.",
          prerequisites: ["Step 1: Server Runtime & REST API Architecture"],
          resources: [
            { title: "PostgreSQL Tutorial", url: "https://www.postgresqltutorial.com/", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Authentication, Security & Performance Caching",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Implement secure user authentication (JWT, OAuth2, Bcrypt) and low-latency in-memory caching with Redis.",
          tasks: [
            "Implement secure token-based authentication and role-based access control (RBAC)",
            "Integrate Redis for session caching and rate-limiting to prevent API abuse",
            "Implement data validation, sanitization, and protection against SQL injection and XSS"
          ],
          milestone: "Deploy a production-secured backend service with rate-limiting, JWT authentication, and Redis caching.",
          prerequisites: ["Step 2: Database Modeling, SQL Querying & Indexing"],
          resources: [
            { title: "OWASP API Security Top 10", url: "https://owasp.org/www-project-api-security/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Containerization, Cloud Deployment & Interviews",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Dockerize backend services, deploy to cloud infrastructure, and prepare for backend technical interviews.",
          tasks: [
            "Write multi-stage Dockerfiles and orchestrate services using Docker Compose",
            "Deploy backend microservice to AWS EC2/ECS or Render with environment configuration",
            "Practice core backend interview topics: database scaling, ACID properties, and caching strategies"
          ],
          milestone: "Live deployed backend service with public API docs and completion of 5 mock technical interviews.",
          prerequisites: ["Step 3: Authentication, Security & Performance Caching"],
          resources: [
            { title: "Docker Getting Started Guide", url: "https://docs.docker.com/get-started/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'full-stack-developer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Computer Science, Information Technology, BCA, or any STEM discipline.",
      preferredDegree: "B.Tech / B.E. in Computer Science or Information Technology.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; candidates are evaluated on end-to-end application delivery.",
      mandatoryRequirements: [
        "10+2 with Mathematics/Science.",
        "Graduation degree completed prior to corporate onboarding."
      ],
      preferredQualifications: [
        "Demonstrated full-stack project portfolio featuring responsive frontends and resilient backends.",
        "Familiarity with MERN/PERN stack or Spring Boot + React architecture."
      ],
      eligibilityCriteria: "Recruiters evaluate candidate's ability to bridge user interface requirements with server logic, relational/NoSQL databases, and cloud deployment.",
      regulatoryNotes: "Job criteria and compensation scale with portfolio depth and technical assessment rounds."
    },
    roadmap: {
      title: "Full-Stack Developer Job-Preparation Roadmap",
      description: "End-to-end curriculum encompassing frontend UI development, backend REST APIs, database persistence, and cloud deployment.",
      totalDurationMonths: 5,
      totalDurationFormatted: "5 months",
      steps: [
        {
          stepNumber: 1,
          title: "Responsive Frontend Engineering (HTML, CSS & React)",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master modern HTML5, responsive CSS layout systems, JavaScript ES6+, and React component architecture.",
          tasks: [
            "Build responsive user interfaces using React Hooks and state management",
            "Handle API integration, form validation, and client-side routing",
            "Implement responsive mobile-first styling with Vanilla CSS or modern design tokens"
          ],
          milestone: "Deliver a polished React frontend communicating with mock REST endpoints.",
          prerequisites: ["Basic programming logic"],
          resources: [
            { title: "React Official Docs", url: "https://react.dev/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Backend API Design & Database Persistence",
          durationMonths: 2,
          durationText: "2 months",
          category: "learning",
          description: "Construct scalable server-side REST APIs using Node.js/Express and integrate MongoDB or PostgreSQL databases.",
          tasks: [
            "Design relational and NoSQL document schemas with data validation",
            "Implement CRUD APIs with pagination, sorting, and search filters",
            "Write database indexes and transactions for atomic operations"
          ],
          milestone: "Build a complete REST API with robust database persistence and error-handling middleware.",
          prerequisites: ["Step 1: Responsive Frontend Engineering"],
          resources: [
            { title: "Express.js Guide", url: "https://expressjs.com/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Full-Stack System Integration & Security",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Connect frontend and backend seamlessly with JWT authentication, role management, and payment gateway sandbox.",
          tasks: [
            "Implement end-to-end user registration, password hashing, and JWT session handling",
            "Integrate third-party services (e.g., Razorpay payment gateway sandbox or Cloudinary image upload)",
            "Conduct full system testing and handle CORS, rate-limiting, and environment secrets"
          ],
          milestone: "Complete an end-to-end full-stack SaaS project (e.g., Job Board or E-Commerce Portal) with live authentication.",
          prerequisites: ["Step 2: Backend API Design & Database Persistence"],
          resources: [
            { title: "Razorpay Developer Documentation", url: "https://razorpay.com/docs/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Deployment, CI/CD Pipeline & Interview Prep",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Containerize application with Docker, set up GitHub Actions CI/CD pipeline, and apply for developer openings.",
          tasks: [
            "Deploy frontend to Vercel and backend database to Render or AWS EC2",
            "Configure GitHub Actions to automatically run tests on git push",
            "Practice live coding challenges and apply to 25+ verified full-stack openings"
          ],
          milestone: "Live deployed full-stack web application with CI/CD and submission of job applications.",
          prerequisites: ["Step 3: Full-Stack System Integration & Security"],
          resources: [
            { title: "GitHub Actions Documentation", url: "https://docs.github.com/en/actions", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'android-developer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Computer Science, IT, BCA, or any STEM discipline.",
      preferredDegree: "B.Tech in Computer Science / IT or BCA / MCA.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; recruitment is based on Kotlin coding ability and Android SDK projects.",
      mandatoryRequirements: [
        "10+2 with Mathematics/Science.",
        "Graduation degree completed prior to formal onboarding."
      ],
      preferredQualifications: [
        "Published Android app on Google Play Store or open-source GitHub repository.",
        "Proficiency in Kotlin, Jetpack Compose, and Android Architecture Components (MVVM)."
      ],
      eligibilityCriteria: "Recruiters evaluate candidate's knowledge of Android lifecycle, coroutines, background services, and offline storage.",
      regulatoryNotes: "Hiring criteria and technical evaluation depend on individual company standards."
    },
    roadmap: {
      title: "Android Developer Job-Preparation Roadmap",
      description: "Step-by-step curriculum focusing on Kotlin programming, Jetpack Compose, Android Architecture Components, Room database, and Play Store publishing.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Kotlin Language Mastery & Android Studio Basics",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Learn modern Kotlin: null safety, data classes, extension functions, coroutines, and Android Studio environment setup.",
          tasks: [
            "Master Kotlin syntax, lambdas, higher-order functions, and flow control",
            "Set up Android Studio, Android Virtual Device (AVD), and physical device debugging",
            "Build 3 single-screen mobile applications with interactive UI controls"
          ],
          milestone: "Build and run native Kotlin apps on physical device without compile-time or runtime errors.",
          prerequisites: ["Basic object-oriented programming knowledge"],
          resources: [
            { title: "Kotlin Official Docs", url: "https://kotlinlang.org/docs/home.html", type: "official", isFree: true },
            { title: "Android Basics in Kotlin", url: "https://developer.android.com/courses/android-basics-kotlin/course", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Jetpack Compose, UI Design & Navigation",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Build declarative user interfaces using Jetpack Compose, Material Design 3 guidelines, and Compose Navigation.",
          tasks: [
            "Construct responsive layouts using Composables, LazyColumns, and State hoisting",
            "Implement multi-screen navigation with back-stack management",
            "Apply Material Design 3 themes, typography, and dark/light mode toggles"
          ],
          milestone: "Develop a multi-screen declarative UI application with fluid transitions and responsive layouts.",
          prerequisites: ["Step 1: Kotlin Language Mastery & Android Studio Basics"],
          resources: [
            { title: "Jetpack Compose Pathway", url: "https://developer.android.com/courses/pathways/compose", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "MVVM Architecture, Coroutines & Room Database",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Implement clean architecture using ViewModel, LiveData/StateFlow, Room local database, and Retrofit for networking.",
          tasks: [
            "Build an offline-first app (e.g., News Reader or Habit Tracker) using Room SQLite database",
            "Fetch data from RESTful APIs using Retrofit and handle background threads with Kotlin Coroutines",
            "Implement dependency injection using Dagger Hilt"
          ],
          milestone: "Complete an offline-first Android app with MVVM architecture, Retrofit API calls, and local Room cache.",
          prerequisites: ["Step 2: Jetpack Compose, UI Design & Navigation"],
          resources: [
            { title: "Android Guide to App Architecture", url: "https://developer.android.com/topic/architecture", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Play Store Publishing, Testing & Job Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Generate signed Android App Bundle (AAB), publish to Google Play Console, and prepare for Android interviews.",
          tasks: [
            "Build release bundle, sign with keystore, and submit application to Google Play Store / GitHub Releases",
            "Write unit tests with JUnit and UI tests with Compose Test library",
            "Apply to 20+ Android developer openings across Indian product startups and tech service firms"
          ],
          milestone: "Publish live app on Google Play Store or GitHub releases and submit active job applications.",
          prerequisites: ["Step 3: MVVM Architecture, Coroutines & Room Database"],
          resources: [
            { title: "Google Play Console Launch Guide", url: "https://developer.android.com/distribute/console", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'ios-developer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Computer Science, IT, BCA, or equivalent degree.",
      preferredDegree: "B.Tech in Computer Science / IT or BCA / MCA.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; hiring is portfolio and Swift coding assessment based.",
      mandatoryRequirements: [
        "10+2 with Mathematics/Science.",
        "Access to macOS development hardware (MacBook or Mac Mini) for Xcode compilation."
      ],
      preferredQualifications: [
        "Published iOS application on Apple App Store or open-source Swift GitHub portfolio.",
        "Proficiency in SwiftUI, Combine/Async-Await, and Apple Human Interface Guidelines."
      ],
      eligibilityCriteria: "Recruiters evaluate candidate's proficiency in Swift syntax, SwiftUI declarative layouts, memory management (ARC), and App Store guidelines.",
      regulatoryNotes: "Eligibility and compensation scale with portfolio quality and App Store publishing experience."
    },
    roadmap: {
      title: "iOS Developer Job-Preparation Roadmap",
      description: "Practical curriculum covering Swift programming, SwiftUI declarative interfaces, CoreData/SwiftData, networking, and App Store submission.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Swift Programming & Xcode Environment",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master Swift 5+ syntax: optionals, protocols, closures, memory management (ARC), and Xcode simulator workflows.",
          tasks: [
            "Learn Swift fundamentals: control flow, structs vs classes, enums with associated values",
            "Understand Automatic Reference Counting (ARC) and retain cycles (weak/unowned references)",
            "Build command-line utilities and basic iOS simulator applications"
          ],
          milestone: "Write error-free Swift code demonstrating protocol-oriented programming and safe unwrapping.",
          prerequisites: ["Basic programming fundamentals"],
          resources: [
            { title: "Swift.org Documentation", url: "https://www.swift.org/documentation/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "SwiftUI & Apple Human Interface Guidelines",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Build modern declarative user interfaces conforming to Apple Human Interface Guidelines using SwiftUI.",
          tasks: [
            "Construct multi-view applications using Stacks, Lists, State, and Binding",
            "Implement smooth navigation, custom animations, and accessibility labels",
            "Support dynamic type and automatic dark/light appearance"
          ],
          milestone: "Develop an interactive iOS app matching Apple Human Interface Guidelines with fluid gestures.",
          prerequisites: ["Step 1: Swift Programming & Xcode Environment"],
          resources: [
            { title: "Apple Developer SwiftUI Tutorials", url: "https://developer.apple.com/tutorials/swiftui", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Async/Await Networking & Local Persistence",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Integrate RESTful web APIs using URLSession with modern Swift concurrency and persist data locally with SwiftData or CoreData.",
          tasks: [
            "Implement async/await networking with Codable JSON parsing and error handling",
            "Persist relational records locally using SwiftData / CoreData with cache invalidation",
            "Implement MVVM architecture separating presentation logic from data layers"
          ],
          milestone: "Complete an API-driven offline-capable iOS app (e.g., Finance Tracker or Recipe Vault).",
          prerequisites: ["Step 2: SwiftUI & Apple Human Interface Guidelines"],
          resources: [
            { title: "Apple Swift Concurrency Guide", url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "App Store Publishing, TestFlight & Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Distribute app via TestFlight, prepare App Store Connect metadata, and apply for iOS developer roles.",
          tasks: [
            "Archive application in Xcode, configure provisioning profiles, and deploy beta on TestFlight",
            "Prepare GitHub portfolio with clean video screen recordings and architecture explanations",
            "Apply to 20+ iOS developer positions across Indian tech companies and global remote teams"
          ],
          milestone: "Deploy beta build to TestFlight and submit job applications with portfolio links.",
          prerequisites: ["Step 3: Async/Await Networking & Local Persistence"],
          resources: [
            { title: "App Store Connect Guide", url: "https://developer.apple.com/app-store-connect/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'game-developer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Computer Science, Game Design, Animation, BCA, or equivalent portfolio.",
      preferredDegree: "B.Tech in Computer Science / Game Development or B.Sc in Multimedia & Animation.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; recruitment is portfolio and playable demo driven.",
      mandatoryRequirements: [
        "10+2 with Mathematics/Science.",
        "Playable game demo (itch.io or web build) demonstrating game loop and physics logic."
      ],
      preferredQualifications: [
        "Strong mathematical foundations (linear algebra, vector math, physics simulation).",
        "Proficiency in Unity (C#) or Unreal Engine (C++ / Blueprints)."
      ],
      eligibilityCriteria: "Game studios evaluate candidate's playable prototypes, performance optimization on mobile/PC hardware, and algorithmic game math.",
      regulatoryNotes: "Recruitment criteria depend on specific gaming studio projects and engine specializations."
    },
    roadmap: {
      title: "Game Developer Job-Preparation Roadmap",
      description: "Focused training in game loop mechanics, 2D/3D physics, C# scripting in Unity, audio/particle integration, and playable prototype publishing.",
      totalDurationMonths: 5,
      totalDurationFormatted: "5 months",
      steps: [
        {
          stepNumber: 1,
          title: "Game Mathematics & C# Scripting Foundations",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master vector mathematics (dot product, cross product, normalization) and object-oriented C# scripting.",
          tasks: [
            "Learn 2D/3D vectors, coordinate transformations, and trigonometry in game development",
            "Write clean C# scripts for object movement, collision detection, and player input",
            "Implement basic state machines for character behaviors (Idle, Run, Jump, Attack)"
          ],
          milestone: "Build a playable 2D arcade prototype (e.g., Space Shooter or Flappy Bird clone) with scoring.",
          prerequisites: ["Basic programming concepts"],
          resources: [
            { title: "Unity Learn Essentials", url: "https://learn.unity.com/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Unity Engine 2D/3D Systems & Physics",
          durationMonths: 2,
          durationText: "2 months",
          category: "learning",
          description: "Master Unity components: Rigidbody physics, colliders, raycasting, tilemaps, particle systems, and audio mixers.",
          tasks: [
            "Build a 2.5D or 3D platformer prototype with gravity, double jumps, and moving platforms",
            "Implement raycasting for line-of-sight enemy AI, shooting mechanics, and ground checks",
            "Integrate particle effects (explosions, sparks) and spatial 3D audio effects"
          ],
          milestone: "Deliver a polished 3-level playable 3D platformer prototype with start menu and pause screen.",
          prerequisites: ["Step 1: Game Mathematics & C# Scripting Foundations"],
          resources: [
            { title: "Unity Manual & Scripting Reference", url: "https://docs.unity3d.com/Manual/index.html", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Game Optimization & UI/HUD Systems",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Optimize draw calls, object pooling, mobile frame rates, and build intuitive HUD interfaces.",
          tasks: [
            "Implement generic object pooling for bullets, enemies, and particle effects to prevent GC lag",
            "Profile frame rates using Unity Profiler and reduce texture memory and batch calls",
            "Build complete game UI: health bars, inventory systems, settings panel, and high scores"
          ],
          milestone: "Achieve consistent 60 FPS mobile/WebGL performance on a fully functional mini-game.",
          prerequisites: ["Step 2: Unity Engine 2D/3D Systems & Physics"],
          resources: [
            { title: "Unity Optimization Guide", url: "https://unity.com/how-to/profile-and-optimize-mobile-games", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Demo Publishing on Itch.io & Studio Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Publish WebGL/PC playable game demo on itch.io, compile game design documentation (GDD), and apply to studios.",
          tasks: [
            "Build and publish WebGL version of best game prototype on itch.io with gameplay video trailer",
            "Write short Game Design Document (GDD) explaining core loops and technical architecture",
            "Apply to 20+ game development studios across India (Bangalore, Pune, Hyderabad, Mumbai)"
          ],
          milestone: "Live playable itch.io link with 100+ plays and submitted junior game developer applications.",
          prerequisites: ["Step 3: Game Optimization & UI/HUD Systems"],
          resources: [
            { title: "Itch.io Creator Portal", url: "https://itch.io/developers", type: "platform", isFree: true }
          ]
        }
      ]
    }
  },

  'data-analyst': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in any discipline (B.Com, B.Sc, B.Tech, BBA, Economics, Statistics, BCA).",
      preferredDegree: "Bachelor's degree in Statistics, Mathematics, Computer Science, Economics, or Engineering.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; recruitment evaluates SQL querying, Excel, and BI dashboard skills.",
      mandatoryRequirements: [
        "10+2 with Mathematics/Statistics/Commerce.",
        "Graduation degree completed prior to joining corporate analyst positions."
      ],
      preferredQualifications: [
        "Advanced Microsoft Excel certification (Power Query, DAX).",
        "Business Intelligence certification (Power BI / Tableau)."
      ],
      eligibilityCriteria: "Companies evaluate candidate's ability to extract insights from raw corporate data, build interactive dashboards, and explain business metrics.",
      regulatoryNotes: "Recruitment criteria depend on the specific business vertical (analytics, BFSI, retail, healthcare)."
    },
    roadmap: {
      title: "Data Analyst Job-Preparation Roadmap",
      description: "Structured curriculum covering Advanced Excel, SQL database querying, Power BI/Tableau dashboarding, basic Python analytics, and portfolio presentation.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Advanced Excel & Business Analytics",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master spreadsheet data manipulation: XLOOKUP, Pivot Tables, Power Query, conditional modeling, and chart design.",
          tasks: [
            "Clean and transform messy business datasets using Excel Power Query",
            "Build dynamic sales and operational dashboards with slicers and KPI scorecards",
            "Perform statistical summary analysis: variance, standard deviation, trends, and correlations"
          ],
          milestone: "Produce an interactive Excel business dashboard analyzing a real-world sales dataset.",
          prerequisites: ["Basic computer and spreadsheet literacy"],
          resources: [
            { title: "Microsoft Excel Training Center", url: "https://support.microsoft.com/en-us/excel", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "SQL Querying & Relational Database Analysis",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Write complex relational queries: aggregations, joins, window functions, and common table expressions (CTEs).",
          tasks: [
            "Write multi-table SQL queries joining customer, order, and product transaction tables",
            "Use window functions (ROW_NUMBER, RANK, DENSE_RANK, LAG/LEAD) for cohort retention analysis",
            "Solve 50+ business SQL challenges on platforms like LeetCode or HackerRank"
          ],
          milestone: "Solve advanced multi-table SQL analysis questions under timed interview conditions.",
          prerequisites: ["Step 1: Advanced Excel & Business Analytics"],
          resources: [
            { title: "Mode Analytics SQL Tutorial", url: "https://mode.com/sql-tutorial/", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Power BI / Tableau Interactive Dashboarding",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Connect business data sources, write DAX calculations, model star schemas, and design stakeholder dashboards.",
          tasks: [
            "Create star-schema data models connecting fact and dimension tables",
            "Write essential DAX measures (Total Revenue, Year-over-Year Growth, Moving Averages)",
            "Build 2 complete BI dashboards (e.g., Indian Retail Sales Performance, Healthcare Utilization)"
          ],
          milestone: "Publish 2 interactive Power BI/Tableau dashboards with interactive cross-filtering.",
          prerequisites: ["Step 2: SQL Querying & Relational Database Analysis"],
          resources: [
            { title: "Microsoft Power BI Guided Learning", url: "https://learn.microsoft.com/en-us/power-bi/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Python Data Analysis (Pandas) & Portfolio Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Clean data and generate visualizations using Python (Pandas, Matplotlib/Seaborn), assemble portfolio, and apply for roles.",
          tasks: [
            "Perform Exploratory Data Analysis (EDA) on a public Indian dataset using Jupyter Notebooks",
            "Publish GitHub and NovyPro portfolio containing SQL scripts, Excel models, and Power BI dashboards",
            "Apply to 25+ data analyst roles across IT services, BFSI, and e-commerce companies"
          ],
          milestone: "Live portfolio with 3 diverse case studies and submitted applications for analyst roles.",
          prerequisites: ["Step 3: Power BI / Tableau Interactive Dashboarding"],
          resources: [
            { title: "Pandas Documentation", url: "https://pandas.pydata.org/docs/", type: "official", isFree: true },
            { title: "NovyPro Portfolio Platform", url: "https://www.novypro.com/", type: "platform", isFree: true }
          ]
        }
      ]
    }
  },

  'data-scientist': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Computer Science, Data Science, Statistics, Mathematics, Engineering, or quantitative discipline.",
      preferredDegree: "Master's degree (M.Tech, M.Sc, MCA) or B.Tech in CSE / Data Science.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; recruitment evaluates statistical modeling, machine learning algorithms, and Python coding.",
      mandatoryRequirements: [
        "10+2 with Mathematics.",
        "Graduation degree completed before formal corporate employment."
      ],
      preferredQualifications: [
        "Proven experience with Scikit-Learn, XGBoost, and PyTorch/TensorFlow.",
        "Active Kaggle competition participation or public data science portfolio."
      ],
      eligibilityCriteria: "Recruiters evaluate mathematical grasp of linear algebra, calculus, probability distributions, predictive modeling, and feature engineering.",
      regulatoryNotes: "Hiring criteria and assessment depth vary by employer and domain."
    },
    roadmap: {
      title: "Data Scientist Job-Preparation Roadmap",
      description: "Intensive preparation in statistics, exploratory data analysis, machine learning algorithms, model evaluation, and deployment.",
      totalDurationMonths: 5,
      totalDurationFormatted: "5 months",
      steps: [
        {
          stepNumber: 1,
          title: "Applied Mathematics, Probability & Python EDA",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Strengthen linear algebra, calculus, descriptive/inferential statistics, and exploratory data analysis with NumPy and Pandas.",
          tasks: [
            "Review probability distributions (Gaussian, Poisson, Binomial) and hypothesis testing (p-value, t-test, ANOVA)",
            "Perform structured Exploratory Data Analysis (EDA) uncovering outliers, missing data, and feature skewness",
            "Visualize complex multivariate relationships with Seaborn and Plotly"
          ],
          milestone: "Complete statistical hypothesis testing and EDA notebook on a complex multi-variable dataset.",
          prerequisites: ["Basic Python programming and mathematics"],
          resources: [
            { title: "Khan Academy Statistics & Probability", url: "https://www.khanacademy.org/math/statistics-probability", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Classical Machine Learning Algorithms & Tuning",
          durationMonths: 2,
          durationText: "2 months",
          category: "learning",
          description: "Implement supervised and unsupervised machine learning models: Linear/Logistic Regression, Decision Trees, Random Forests, XGBoost, and K-Means.",
          tasks: [
            "Perform feature engineering: one-hot encoding, target encoding, scaling, and PCA dimensionality reduction",
            "Train, evaluate, and tune hyper-parameters using Scikit-Learn pipelines and Cross-Validation",
            "Calculate and interpret classification and regression metrics (Precision, Recall, ROC-AUC, F1, RMSE)"
          ],
          milestone: "Train and evaluate 3 machine learning models achieving benchmark performance on Kaggle datasets.",
          prerequisites: ["Step 1: Applied Mathematics, Probability & Python EDA"],
          resources: [
            { title: "Scikit-Learn Documentation", url: "https://scikit-learn.org/stable/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Model Deployment with FastAPI & Streamlit",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Serialize trained ML models, expose prediction endpoints via FastAPI, and build interactive Streamlit web interfaces.",
          tasks: [
            "Serialize models using Joblib/ONNX and handle incoming request payload validation",
            "Build an interactive Streamlit UI for users to input parameters and view predictions with SHAP explainability",
            "Deploy the prediction web service to cloud infrastructure (Hugging Face Spaces or Render)"
          ],
          milestone: "Deploy a live public web application serving predictions with explainable AI visualizations.",
          prerequisites: ["Step 2: Classical Machine Learning Algorithms & Tuning"],
          resources: [
            { title: "Streamlit Documentation", url: "https://docs.streamlit.io/", type: "official", isFree: true },
            { title: "FastAPI Documentation", url: "https://fastapi.tiangolo.com/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Case Studies, Portfolio & Technical Interviews",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Prepare business case study presentations, polish GitHub portfolio, and interview for junior data scientist openings.",
          tasks: [
            "Prepare 2 end-to-end business case writeups (e.g., Customer Churn Prediction, Loan Default Risk Scoring)",
            "Practice technical interview questions on bias-variance tradeoff, regularization, and feature selection",
            "Apply to 20+ data science and ML engineering openings across tech firms and analytics consultancies"
          ],
          milestone: "Complete 5 mock technical interview sessions and submit tailored data science job applications.",
          prerequisites: ["Step 3: Model Deployment with FastAPI & Streamlit"],
          resources: [
            { title: "Kaggle Competitions & Datasets", url: "https://www.kaggle.com/", type: "platform", isFree: true }
          ]
        }
      ]
    }
  },

  'data-engineer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Computer Science, Information Technology, Engineering, or MCA.",
      preferredDegree: "B.Tech in Computer Science / IT / Electrical Engineering.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; hiring evaluates distributed systems, SQL, Python, and data pipeline design.",
      mandatoryRequirements: [
        "10+2 with Mathematics/Science.",
        "Graduation degree completed prior to joining corporate engineering teams."
      ],
      preferredQualifications: [
        "Hands-on experience with Apache Spark, Airflow, and cloud data warehouses (Snowflake / BigQuery).",
        "Cloud Data Engineering certification (AWS Certified Data Engineer or GCP Professional Data Engineer)."
      ],
      eligibilityCriteria: "Recruiters evaluate candidate's understanding of ETL/ELT pipelines, distributed computing, database partition pruning, and streaming data.",
      regulatoryNotes: "Specific requirements depend on enterprise data infrastructure and cloud provider."
    },
    roadmap: {
      title: "Data Engineer Job-Preparation Roadmap",
      description: "Practical curriculum covering advanced SQL, Python data ingestion, Apache Spark distributed processing, Apache Airflow orchestration, and cloud warehouses.",
      totalDurationMonths: 5,
      totalDurationFormatted: "5 months",
      steps: [
        {
          stepNumber: 1,
          title: "Advanced Data Processing in Python & SQL",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master efficient batch data parsing, API extraction, JSON normalization, and SQL window operations.",
          tasks: [
            "Write modular Python scripts extracting records from REST APIs, SFTP servers, and flat files",
            "Handle schema validation, anomaly detection, and data deduplication",
            "Write analytical SQL queries optimizing execution plans and indexes"
          ],
          milestone: "Build an automated Python batch ingestion script loading validated data into PostgreSQL.",
          prerequisites: ["Intermediate Python and relational database knowledge"],
          resources: [
            { title: "Python Data Structures", url: "https://docs.python.org/3/tutorial/datastructures.html", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Distributed Data Processing with Apache Spark",
          durationMonths: 2,
          durationText: "2 months",
          category: "learning",
          description: "Process massive datasets using PySpark: DataFrames, transformations, actions, broadcast joins, and partitioning.",
          tasks: [
            "Understand Spark cluster architecture: Driver, Executors, RDDs, and Catalyst Optimizer",
            "Perform complex aggregations and joins on multi-gigabyte datasets using PySpark",
            "Optimize Spark jobs by eliminating data skew and configuring appropriate partition counts"
          ],
          milestone: "Execute a PySpark data transformation job processing a 10M+ row dataset efficiently.",
          prerequisites: ["Step 1: Advanced Data Processing in Python & SQL"],
          resources: [
            { title: "Apache Spark Documentation", url: "https://spark.apache.org/docs/latest/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Workflow Orchestration with Apache Airflow",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Author, schedule, and monitor Directed Acyclic Graphs (DAGs) in Apache Airflow for automated ETL pipelines.",
          tasks: [
            "Write production Airflow DAGs with task dependencies, retry logic, and SLA notifications",
            "Integrate Airflow with cloud storage buckets (AWS S3) and data warehouses (Snowflake/BigQuery)",
            "Containerize Airflow environment using Docker Compose for local testing"
          ],
          milestone: "Deploy an automated daily ETL pipeline orchestrating extraction, transformation, and warehouse load.",
          prerequisites: ["Step 2: Distributed Data Processing with Apache Spark"],
          resources: [
            { title: "Apache Airflow Documentation", url: "https://airflow.apache.org/docs/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Cloud Data Warehousing & Technical Interviews",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Model data using Star/Snowflake schemas in modern cloud warehouses and prepare for data engineering interviews.",
          tasks: [
            "Design analytical dimensional schemas in Snowflake or Google BigQuery",
            "Review core data engineering interview topics: CAP theorem, idempotency, and data lakes vs warehouses",
            "Apply to 20+ junior data engineering positions across product tech and analytics enterprises"
          ],
          milestone: "Complete 5 mock interview sessions on distributed data systems and submit applications.",
          prerequisites: ["Step 3: Workflow Orchestration with Apache Airflow"],
          resources: [
            { title: "Google Cloud BigQuery Docs", url: "https://cloud.google.com/bigquery/docs", type: "official", isFree: true }
          ]
        }
      ]
    }
  }
};

module.exports = {
  ...part1,
  ...part2,
};

