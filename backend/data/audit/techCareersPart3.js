/**
 * Technology Careers Audit Data - Part 3 (Careers 19 to 35)
 * Validated for Indian employment market, realistic compensation benchmarks,
 * eligible education pathways, and sequential roadmap milestones.
 */

const techPart3 = [
  {
    slug: 'cloud-engineer',
    title: 'Cloud Engineer',
    description: 'Architects, provisions, monitors, and optimizes scalable cloud infrastructure on Amazon Web Services (AWS), Microsoft Azure, or Google Cloud Platform (GCP). Utilizes Infrastructure as Code (Terraform) to ensure high availability, fault tolerance, and security.',
    educationRequirements: 'B.Tech/B.E. in CS/IT/ECE, BCA+MCA, or verified cloud architect certifications. Deep knowledge of cloud networking (VPC, Subnets, Gateways), IAM security, serverless compute, and container orchestration.',
    educationPathways: [
      'B.Tech / B.E. in Computer Science or IT (4 years)',
      'BCA + MCA (5 years)',
      'Industry career transition via associate and professional cloud certifications'
    ],
    eligibilityRequirements: 'No formal statutory licensing. Proven proficiency in cloud architecture design, Linux server administration, networking, and Terraform.',
    certificationsAndExams: [
      'AWS Certified Solutions Architect - Associate / Professional',
      'Microsoft Certified: Azure Solutions Architect Expert',
      'Google Cloud Certified Professional Cloud Architect',
      'HashiCorp Certified: Terraform Associate'
    ],
    workEnvironment: 'Cloud consulting firms, Global Capability Centers, IT services leaders, and tech startups in Bengaluru, Hyderabad, Gurugram, Pune, and Chennai; hybrid/remote.',
    marketDemand: 'High',
    jobOutlook: 'Strong ongoing cloud migration demand across Indian banks, retail, and manufacturing enterprises modernizing legacy on-premise data centers.',
    salaryRange: { min: 550000, max: 2400000, currency: 'INR', source: 'AmbitionBox India Cloud Benchmark 2024, Glassdoor India' },
    salarySource: 'AmbitionBox India Cloud Benchmark 2024, Glassdoor India',
    salaryByExperience: {
      entryLevel: { min: 550000, max: 950000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 950000, max: 1700000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1700000, max: 3000000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Multi-cloud certified engineers with hands-on Kubernetes and Terraform automation experience earn top-of-market compensation.'
    },
    careerProgression: [
      'Associate Cloud Engineer',
      'Cloud Infrastructure Engineer',
      'Senior Cloud Engineer / Cloud Architect',
      'Lead Cloud Solutions Architect',
      'Director of Cloud Architecture & Infrastructure'
    ],
    employmentSectors: {
      government: 'MeitY MeghRaj Government Cloud, National Informatics Centre cloud computing cells, State Data Centres (SDCs)',
      privateSector: 'Top Cloud Consultancies (Wipro, TCS, Cognizant Cloud Units), Big Tech AWS/Azure/GCP Indian partner networks, FinTech, E-commerce'
    },
    timelineOverview: {
      totalEstimatedDuration: '6 - 9 Months focused cloud training and certification',
      educationDuration: '3-4 Years formal degree',
      prepDuration: '4–6 Months Linux, networking, cloud platform services, and Terraform',
      practicalTrainingDuration: '2–3 Months hands-on sandbox labs and infrastructure provisioning',
      jobSearchDuration: '2–4 Months cloud design and scenario-based interviews',
      overlapNotes: 'Terraform scripting is practiced while provisioning test cloud infrastructure.',
      confidenceNote: 'Earning the AWS Solutions Architect Associate or Azure Administrator Associate certification significantly speeds up candidate shortlisting.'
    },
    sources: [
      { title: 'AWS Official Certification Guide', url: 'https://aws.amazon.com/certification/', sourceAuthority: 'Amazon Web Services', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Cloud Engineer Salary in India', url: 'https://www.ambitionbox.com/salaries/cloud-engineer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Cloud Engineer Career Roadmap',
      description: 'Progression from Linux system administration and cloud networking to core cloud services (AWS/Azure), Infrastructure as Code (Terraform), and security.',
      totalEstimatedDuration: '6 - 9 Months',
      durationBreakdown: 'Linux & Cloud Networking (VPC): 6 weeks | Core Cloud Platform Services (AWS/Azure): 8-10 weeks | Infrastructure as Code (Terraform): 6 weeks | Cloud Security, Cost & Reliability: 4-6 weeks',
      overlapNotes: 'Hands-on free-tier cloud provisioning runs throughout the study periods.',
      steps: [
        {
          stepNumber: 1,
          title: 'Linux Administration & Cloud Networking Fundamentals',
          stageType: 'Skill Acquisition',
          description: 'Master Linux CLI, bash scripting, SSH keys, user management, and core networking: CIDR blocks, VPCs, public/private subnets, and security groups.',
          skillsToAcquire: ['Linux Command Line & SSH', 'Virtual Private Clouds (VPC)', 'Subnetting, Route Tables & NAT Gateways', 'Security Groups vs Network ACLs'],
          activities: ['Provision a custom multi-tier VPC with public and private subnets from scratch', 'Configure secure SSH bastion host access to private instances'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Configured secure VPC with segregated public and private subnets and routing verified.',
          dependencies: 'Basic computer networking concepts.',
          resources: [
            { title: 'AWS VPC Documentation', url: 'https://docs.aws.amazon.com/vpc/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Core Cloud Services (Compute, Storage, Databases)',
          stageType: 'Skill Acquisition',
          description: 'Master core AWS or Azure services: EC2/Virtual Machines, Auto Scaling Groups, Elastic Load Balancing, S3 object storage, and managed relational databases (RDS).',
          skillsToAcquire: ['Compute Instances & Auto Scaling', 'Application Load Balancers (ALB)', 'S3 Storage Classes & Lifecycle Policies', 'Managed Relational Databases (RDS)'],
          activities: ['Deploy a high-availability multi-AZ web application behind an Application Load Balancer with Auto Scaling', 'Configure S3 bucket cross-region replication and backup policies'],
          estimatedTime: '8 - 10 weeks',
          completionCriteria: 'Highly available, fault-tolerant web architecture deployed across multiple availability zones.',
          dependencies: 'VPC and Linux fundamentals (Step 1).',
          resources: [
            { title: 'AWS Well-Architected Framework', url: 'https://aws.amazon.com/architecture/well-architected/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Infrastructure as Code (IaC) with HashiCorp Terraform',
          stageType: 'Portfolio & Projects',
          description: 'Define and automate cloud infrastructure using declarative HashiCorp Configuration Language (HCL), modularize components, and manage remote state in S3.',
          skillsToAcquire: ['Terraform HCL Syntax & Providers', 'State Management & S3 Backend Locking', 'Terraform Modules & Variables', 'Terraform Plan, Apply & Destroy Workflows'],
          activities: ['Write reusable Terraform modules provisioning a complete VPC, ECS cluster, and RDS database', 'Store state files securely in an encrypted S3 bucket with DynamoDB state locking'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Complete multi-tier cloud infrastructure provisioned in under 10 minutes via a single terraform apply command.',
          dependencies: 'Core cloud services knowledge.',
          resources: [
            { title: 'HashiCorp Terraform Tutorials', url: 'https://developer.hashicorp.com/terraform/tutorials', type: 'Course' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Cloud Security, Cost Optimization & Associate Certification',
          stageType: 'Licensing & Certification',
          description: 'Implement Identity and Access Management (IAM) least-privilege policies, monitor costs with AWS Cost Explorer, and clear the AWS/Azure Solutions Architect exam.',
          skillsToAcquire: ['IAM Roles, Policies & Multi-Factor Auth', 'Cost Optimization & Reserved Instances', 'Monitoring (CloudWatch, CloudTrail)', 'Disaster Recovery Architectures'],
          activities: ['Audit IAM permissions to enforce least privilege using AWS IAM Access Analyzer', 'Clear the AWS Certified Solutions Architect - Associate or Azure Administrator exam'],
          estimatedTime: '4 - 6 weeks',
          completionCriteria: 'Pass recognized Associate Cloud Certification and present verified Credly badge.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'AWS Solutions Architect Exam Guide', url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'devops-engineer',
    title: 'DevOps Engineer',
    description: 'Bridges software engineering and IT operations through continuous delivery automation. Builds and maintains CI/CD pipelines, container orchestration with Kubernetes, monitoring, and automated testing to accelerate release velocity with zero downtime.',
    educationRequirements: 'B.Tech/B.E. in CS/IT/ECE or related engineering field. Hands-on expertise in Docker, Kubernetes, CI/CD (GitHub Actions, GitLab CI, Jenkins), Terraform, and Prometheus/Grafana monitoring.',
    educationPathways: [
      'B.Tech / B.E. in Computer Science, IT, or Electronics (4 years)',
      'BCA + MCA (5 years)',
      'Software Developers or System Administrators transitioning via certified Kubernetes and DevOps programs'
    ],
    eligibilityRequirements: 'No formal statutory licensing. Deep expertise in Linux systems, container runtimes, Kubernetes, declarative CI/CD, and Infrastructure as Code.',
    certificationsAndExams: [
      'Certified Kubernetes Administrator (CKA - Linux Foundation)',
      'Certified Kubernetes Application Developer (CKAD)',
      'AWS Certified DevOps Engineer - Professional'
    ],
    workEnvironment: 'Product startups, SaaS enterprises, and digital engineering consultancies in Bengaluru, Hyderabad, Gurugram, and Pune; extensive hybrid and remote adoption.',
    marketDemand: 'High',
    jobOutlook: 'Extremely high demand as every software organization requires automated release pipelines, container orchestration, and multi-environment deployment velocity.',
    salaryRange: { min: 600000, max: 2500000, currency: 'INR', source: 'AmbitionBox DevOps Salary Index 2024, PayScale India' },
    salarySource: 'AmbitionBox DevOps Salary Index 2024, PayScale India',
    salaryByExperience: {
      entryLevel: { min: 600000, max: 1000000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 1000000, max: 1800000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1800000, max: 3200000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'DevOps engineers with hands-on CKA certification and production Kubernetes cluster operations command 20-30% higher salary packages.'
    },
    careerProgression: [
      'Junior DevOps Engineer',
      'DevOps / Platform Engineer',
      'Senior DevOps Engineer / SRE Lead',
      'Principal Platform Architect',
      'Director of DevOps & Infrastructure'
    ],
    employmentSectors: {
      government: 'Digital India platform infrastructure, Reserve Bank Information Technology (ReBIT), Indian Post Payment Bank automation',
      privateSector: 'Top Indian Unicorns (Razorpay, Swiggy, Zerodha, Meesho), SaaS Product Firms, Enterprise Cloud Units (Infosys, TCS, Thoughtworks)'
    },
    timelineOverview: {
      totalEstimatedDuration: '6 - 10 Months hands-on automation learning',
      educationDuration: '4 Years formal degree',
      prepDuration: '4–6 Months Linux, Git, Docker, CI/CD, and Kubernetes',
      practicalTrainingDuration: '2–4 Months building automated multi-environment deployment pipelines',
      jobSearchDuration: '2–4 Months live troubleshooting and pipeline authoring interviews',
      overlapNotes: 'Docker containerization is learned directly alongside application development.',
      confidenceNote: 'Achieving the performance-based CKA (Certified Kubernetes Administrator) exam is universally respected by technical hiring managers.'
    },
    sources: [
      { title: 'Linux Foundation - Certified Kubernetes Administrator (CKA)', url: 'https://www.cncf.io/certification/cka/', sourceAuthority: 'Cloud Native Computing Foundation', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox DevOps Engineer Salary in India', url: 'https://www.ambitionbox.com/salaries/devops-engineer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'DevOps Engineer Career Roadmap',
      description: 'Production automation curriculum: Linux system administration, Docker containerization, declarative CI/CD pipelines, Kubernetes cluster orchestration, and observability.',
      totalEstimatedDuration: '6 - 10 Months',
      durationBreakdown: 'Linux & Scripting: 4-6 weeks | Docker & Containerization: 6 weeks | CI/CD Pipelines (GitHub Actions/GitLab): 6-8 weeks | Kubernetes (K8s) Cluster Management: 8-10 weeks | Observability (Prometheus/Grafana): 4 weeks',
      overlapNotes: 'Pipelines and Kubernetes manifests are version-controlled in Git from Day 1.',
      steps: [
        {
          stepNumber: 1,
          title: 'Linux Systems, Networking & Shell Automation',
          stageType: 'Skill Acquisition',
          description: 'Master Linux administration (processes, permissions, systemd services), Bash scripting, SSH, and networking fundamentals (DNS, firewalls, ports).',
          skillsToAcquire: ['Bash Automation Scripting', 'Systemd Service Units', 'Linux Process & Memory Management', 'Network Diagnostic Commands (curl, netstat, dig)'],
          activities: ['Write a Bash script that automates server health checks, disk usage alerts, and log rotation', 'Configure a hardened Linux server running non-root systemd daemon services'],
          estimatedTime: '4 - 6 weeks',
          completionCriteria: 'Automated server bootstrapping script that configures firewalls, users, and monitoring packages unattended.',
          dependencies: 'Basic computer literacy.',
          resources: [
            { title: 'Linux Journey Guide', url: 'https://linuxjourney.com/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Containerization with Docker & Multi-Stage Builds',
          stageType: 'Skill Acquisition',
          description: 'Package applications into lightweight, secure container images using Docker, optimize image layers with multi-stage builds, and orchestrate with Docker Compose.',
          skillsToAcquire: ['Dockerfile Directives & Best Practices', 'Multi-Stage Builds for Minimal Image Size', 'Docker Networking & Volumes', 'Docker Compose for Local Microservices'],
          activities: ['Write multi-stage Dockerfiles reducing a Node/Python image from 800MB to under 100MB', 'Run a multi-tier web application (app + database + cache) using docker-compose'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Optimized Docker container images passing vulnerability scans with non-root security context.',
          dependencies: 'Linux administration fundamentals (Step 1).',
          resources: [
            { title: 'Docker Official Documentation', url: 'https://docs.docker.com/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Continuous Integration & Continuous Delivery (CI/CD)',
          stageType: 'Portfolio & Projects',
          description: 'Build automated CI/CD workflows using GitHub Actions or GitLab CI: automate unit testing, linting, Docker image building, scanning, and staging deployment.',
          skillsToAcquire: ['GitHub Actions Workflows & Runners', 'Automated Testing & Linting Gates', 'Container Registry Push (Docker Hub / ECR)', 'Automated Zero-Downtime Deployments'],
          activities: ['Create a complete GitHub Actions pipeline that triggers on pull requests, tests code, builds Docker images, and deploys to staging', 'Implement secret management and environment approval gates'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Automated CI/CD pipeline executing test suites and deploying code on git push with zero manual intervention.',
          dependencies: 'Docker containerization and Git branching.',
          resources: [
            { title: 'GitHub Actions Documentation', url: 'https://docs.github.com/en/actions', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Kubernetes (K8s) Orchestration & Production Observability',
          stageType: 'Licensing & Certification',
          description: 'Deploy and manage containerized microservices on Kubernetes (Pods, Deployments, Services, Ingress, ConfigMaps, Secrets), and monitor with Prometheus and Grafana.',
          skillsToAcquire: ['Kubernetes Core Objects (Deployments, Services, Ingress)', 'Horizontal Pod Autoscaling (HPA)', 'Helm Chart Package Management', 'Prometheus Metrics & Grafana Dashboards'],
          activities: ['Deploy a resilient microservices application to a managed Kubernetes cluster (EKS/GKE or local Minikube)', 'Configure Prometheus scraping and design a Grafana dashboard showing request latency and error rates'],
          estimatedTime: '8 - 10 weeks',
          completionCriteria: 'Pass the Certified Kubernetes Administrator (CKA) exam and manage a production-grade K8s cluster.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'Kubernetes Official Documentation', url: 'https://kubernetes.io/docs/', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'site-reliability-engineer',
    title: 'Site Reliability Engineer',
    description: 'Applies software engineering principles to operations problems to create ultra-scalable, reliable distributed software systems. Defines and monitors Service Level Objectives (SLOs), mitigates production outages, and eliminates toil through software automation.',
    educationRequirements: 'B.Tech/B.E. in Computer Science/IT or related field. Strong software development background in Go or Python combined with deep operational knowledge of distributed systems and Linux kernel internals.',
    educationPathways: [
      'B.Tech / B.E. in Computer Science or IT (4 years)',
      'Software engineers transitioning to reliability engineering',
      'Advanced Cloud Native & Distributed Systems certifications'
    ],
    eligibilityRequirements: 'Demonstrated software development capabilities (Go/Python) combined with high-throughput distributed systems debugging and incident management skills.',
    certificationsAndExams: [
      'Certified Kubernetes Administrator (CKA)',
      'Google Professional Cloud DevOps Engineer',
      'SRE Foundation Certification'
    ],
    workEnvironment: 'High-scale consumer internet unicorns, cloud hyperscalers, and global financial exchanges in Bengaluru, Hyderabad, Gurugram, and Pune; hybrid.',
    marketDemand: 'High',
    jobOutlook: 'Critical role across top tech firms and fintech platforms where even 5 minutes of unexpected downtime results in millions of rupees of revenue loss.',
    salaryRange: { min: 700000, max: 2800000, currency: 'INR', source: 'AmbitionBox India SRE Salary Index 2024, Glassdoor' },
    salarySource: 'AmbitionBox India SRE Salary Index 2024, Glassdoor',
    salaryByExperience: {
      entryLevel: { min: 700000, max: 1200000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 1200000, max: 2000000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 2000000, max: 3600000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'SREs at companies like Google India, Uber, Swiggy, and Razorpay enjoy compensation parity with top Software Development Engineers.'
    },
    careerProgression: [
      'Junior SRE / Reliability Associate',
      'Site Reliability Engineer',
      'Senior SRE / Reliability Lead',
      'Principal SRE / Systems Architect',
      'Director of Reliability Engineering / VP of Infrastructure'
    ],
    employmentSectors: {
      government: 'UPI Payment Switch Infrastructure, UIDAI biometric verification systems, Stock exchanges (NSE/BSE transaction engines)',
      privateSector: 'Hyper-scale Platforms (Google, Microsoft, Amazon), Fintech (PhonePe, Zerodha, Cred), Food Delivery & Travel (Zomato, MakeMyTrip)'
    },
    timelineOverview: {
      totalEstimatedDuration: '6 - 10 Months focused SRE principles and software automation',
      educationDuration: '4 Years formal degree',
      prepDuration: '4–6 Months distributed architectures, Go/Python coding, and metrics',
      practicalTrainingDuration: '2–4 Months on-call simulations, chaos experiments, and post-mortems',
      jobSearchDuration: '2–4 Months incident troubleshooting and coding interviews',
      overlapNotes: 'Observability tools and chaos engineering experiments run together.',
      confidenceNote: 'Interviews place heavy emphasis on practical troubleshooting of production outages (e.g., diagnosing high CPU, memory leaks, and network dropouts live).'
    },
    sources: [
      { title: 'Google Site Reliability Engineering Books', url: 'https://sre.google/books/', sourceAuthority: 'Google Inc.', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Site Reliability Engineer Salary in India', url: 'https://www.ambitionbox.com/salaries/site-reliability-engineer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Site Reliability Engineer (SRE) Roadmap',
      description: 'Reliability engineering pathway based on Google SRE model: SLIs/SLOs/Error Budgets, systems coding in Go/Python, distributed tracing, chaos testing, and incident post-mortems.',
      totalEstimatedDuration: '6 - 10 Months',
      durationBreakdown: 'SRE Principles & SLI/SLO Framework: 4 weeks | Systems Automation in Go/Python: 6-8 weeks | Distributed Tracing & Observability: 6-8 weeks | Chaos Engineering & Incident Management: 6 weeks',
      overlapNotes: 'Incident management runbooks are written while instrumenting test applications.',
      steps: [
        {
          stepNumber: 1,
          title: 'SRE Philosophy, SLIs, SLOs & Error Budget Management',
          stageType: 'Skill Acquisition',
          description: 'Master Google SRE principles: Service Level Indicators (SLIs), Service Level Objectives (SLOs), Service Level Agreements (SLAs), and calculating Error Budgets.',
          skillsToAcquire: ['SLI Selection & Calculation', 'SLO Target Setting (99.9% vs 99.99%)', 'Error Budget Burn Rate Alerts', 'Toil Identification & Elimination Strategies'],
          activities: ['Define a complete SLO framework for an e-commerce checkout service', 'Calculate multi-window burn rate alert rules in Prometheus'],
          estimatedTime: '4 weeks',
          completionCriteria: 'Comprehensive SLO and error budget policy document with mathematical burn rate thresholds.',
          dependencies: 'Basic software systems knowledge.',
          resources: [
            { title: 'Google SRE Book - Service Level Objectives', url: 'https://sre.google/sre-book/service-level-objectives/', type: 'Book' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Systems Automation & Tooling in Go or Python',
          stageType: 'Skill Acquisition',
          description: 'Write software automation tools to eliminate manual operational toil: custom CLI tools, Kubernetes controllers, or automated remediation daemons.',
          skillsToAcquire: ['Go (Golang) Systems Programming', 'Concurrency with Goroutines & Channels', 'Interacting with Kubernetes API Client-Go', 'Automated Self-Healing Daemons'],
          activities: ['Write a custom Go CLI tool that interrogates cloud resources, identifies idle instances, and cleans up orphaned volumes', 'Build a lightweight health check daemon that restarts failing processes automatically'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Working Go/Python systems automation tool published on GitHub with unit tests.',
          dependencies: 'Programming foundations.',
          resources: [
            { title: 'The Go Programming Language', url: 'https://go.dev/doc/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Distributed Tracing & Full-Stack Observability',
          stageType: 'Portfolio & Projects',
          description: 'Implement distributed tracing with OpenTelemetry, aggregate metrics with Prometheus, collect logs with Loki, and visualize microservice call graphs in Jaeger.',
          skillsToAcquire: ['OpenTelemetry Instrumentation', 'Distributed Tracing with Jaeger', 'PromQL Advanced Queries', 'Grafana Alerting & PagerDuty Integration'],
          activities: ['Instrument a microservices application with OpenTelemetry spans across HTTP calls', 'Analyze tail latency bottlenecks (p95, p99) on Jaeger traces'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'End-to-end observability stack visualizing latency bottlenecks across distributed microservices.',
          dependencies: 'SLO understanding and application architecture.',
          resources: [
            { title: 'OpenTelemetry Official Documentation', url: 'https://opentelemetry.io/docs/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Chaos Engineering, Incident Response & Blameless Post-Mortems',
          stageType: 'Skill Acquisition',
          description: 'Conduct fault injection experiments (Chaos Mesh / LitmusChaos), manage high-severity production incident bridges, author blameless post-mortems, and create runbooks.',
          skillsToAcquire: ['Chaos Engineering Experiments', 'Incident Incident Commander Roles', 'Blameless Post-Mortem Authoring', 'Disaster Recovery Failover Drills'],
          activities: ['Simulate high latency and network partitions on a test Kubernetes cluster using Chaos Mesh', 'Write a formal blameless post-mortem document analyzing a simulated production outage'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Documented chaos engineering test suite and verified blameless post-mortem with actionable root causes.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'Chaos Mesh Documentation', url: 'https://chaos-mesh.org/docs/', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'database-administrator',
    title: 'Database Administrator',
    description: 'Manages, tunes, and secures mission-critical relational and NoSQL database management systems. Ensures data integrity, optimal indexing, automated backup/recovery, replication, and high-availability clustering.',
    educationRequirements: 'B.Tech/B.E. in CS/IT, BCA+MCA, or B.Sc IT. Deep knowledge of SQL engines (PostgreSQL, MySQL, Oracle, SQL Server), storage engines, clustering, and backup strategies.',
    educationPathways: [
      'B.Tech / B.E. in Computer Science or Information Technology (4 years)',
      'BCA + MCA (5 years)',
      'Oracle Certified Professional (OCP) or PostgreSQL Certified Administrator tracks'
    ],
    eligibilityRequirements: 'No formal statutory licensing. Demonstrated mastery of database backup and restore strategies, query plan analysis, connection pooling, and replication.',
    certificationsAndExams: [
      'Oracle Certified Professional: Database Administrator (OCP)',
      'AWS Certified Database - Specialty',
      'PostgreSQL Certified Associate / Professional'
    ],
    workEnvironment: 'Banking and financial operations, telecom hubs, healthcare records infrastructure, and corporate data centers in Bengaluru, Mumbai, Chennai, and Hyderabad.',
    marketDemand: 'Moderate',
    jobOutlook: 'Consistent demand across heavily regulated sectors (BFSI, telecom, government databases) requiring guaranteed transaction consistency, zero data loss, and regulatory compliance.',
    salaryRange: { min: 450000, max: 1800000, currency: 'INR', source: 'AmbitionBox India DBA Salary Report, Glassdoor' },
    salarySource: 'AmbitionBox India DBA Salary Report, Glassdoor',
    salaryByExperience: {
      entryLevel: { min: 450000, max: 750000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 750000, max: 1350000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1350000, max: 2200000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'DBAs who transition into Cloud Database Engineers (Amazon Aurora, Snowflake, MongoDB Atlas) command significant compensation enhancements.'
    },
    careerProgression: [
      'Junior Database Administrator',
      'Database Administrator (PostgreSQL / Oracle / MySQL)',
      'Senior DBA / Database Performance Specialist',
      'Lead Data Architect / Cloud Database Lead',
      'Head of Database Infrastructure'
    ],
    employmentSectors: {
      government: 'Reserve Bank of India (RBI), State Bank of India core banking systems, Indian Railways reservation databases (CRIS), Income Tax Department databases',
      privateSector: 'Commercial Banks, Telecom Companies (Jio, Airtel), Large IT Services (TCS, Infosys, Cognizant DBA practices), Healthcare Networks'
    },
    timelineOverview: {
      totalEstimatedDuration: '6 - 9 Months focused database training and certification',
      educationDuration: '3-4 Years formal degree',
      prepDuration: '4–6 Months relational internals, SQL tuning, and replication setups',
      practicalTrainingDuration: '2–3 Months disaster recovery drills and performance benchmarking',
      jobSearchDuration: '2–4 Months technical DBA query analysis and disaster scenario interviews',
      overlapNotes: 'Backup restoration drills are practiced while studying database storage internals.',
      confidenceNote: 'Interviews always test how you handle corrupt tables, failover replication lag, and point-in-time recovery.'
    },
    sources: [
      { title: 'PostgreSQL Administration Documentation', url: 'https://www.postgresql.org/docs/current/admin.html', sourceAuthority: 'PostgreSQL Global Development Group', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Database Administrator Salary in India', url: 'https://www.ambitionbox.com/salaries/database-administrator-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Database Administrator (DBA) Career Roadmap',
      description: 'Specialized database management pathway: relational storage engines, query execution plan tuning, replication, automated backup recovery, and cloud database migration.',
      totalEstimatedDuration: '6 - 9 Months',
      durationBreakdown: 'Database Internals & Storage Engines: 6 weeks | Query Performance Tuning & Indexing: 6-8 weeks | High Availability & Replication: 6 weeks | Backup, Disaster Recovery & Cloud Migration: 6 weeks',
      overlapNotes: 'Disaster recovery restores are tested using simulated server crashes in virtual labs.',
      steps: [
        {
          stepNumber: 1,
          title: 'Database Architecture, Storage Engines & Concurrency',
          stageType: 'Skill Acquisition',
          description: 'Understand Write-Ahead Logging (WAL), buffer pool memory allocation, page structures, transaction isolation levels, and lock contention.',
          skillsToAcquire: ['Write-Ahead Logging (WAL)', 'Buffer Cache & Shared Memory Tuning', 'Row vs Table Level Locking', 'Deadlock Detection & Resolution'],
          activities: ['Configure memory allocation parameters (shared_buffers, work_mem) in PostgreSQL', 'Simulate concurrent transactions to trigger and resolve deadlock conditions'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Tuned database configuration running on Linux with verified memory and connection limits.',
          dependencies: 'Basic SQL querying knowledge.',
          resources: [
            { title: 'PostgreSQL Server Configuration', url: 'https://www.postgresql.org/docs/current/runtime-config.html', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Query Optimization, Indexing & EXPLAIN Plan Analysis',
          stageType: 'Skill Acquisition',
          description: 'Analyze query execution plans using EXPLAIN ANALYZE, design optimal indexes (B-Tree, GIN, GiST), and eliminate sequential table scans.',
          skillsToAcquire: ['Query Execution Plan Analysis', 'B-Tree & Composite Index Design', 'Partial & Expression Indexes', 'Vacuuming & Autovacuum Tuning'],
          activities: ['Optimize a slow multi-join query on a 10-million-row table reducing execution time from 15 seconds to under 50ms', 'Tune autovacuum settings to prevent table bloat'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Sub-100ms response times achieved on complex analytical queries via optimal indexing.',
          dependencies: 'Storage engine fundamentals (Step 1).',
          resources: [
            { title: 'Use The Index, Luke! - SQL Indexing Guide', url: 'https://use-the-index-luke.com/', type: 'Book' }
          ]
        },
        {
          stepNumber: 3,
          title: 'High Availability, Streaming Replication & Failover',
          stageType: 'Portfolio & Projects',
          description: 'Configure master-standby streaming replication, manage replication lag, implement connection pooling (PgBouncer), and automate failover using Patroni.',
          skillsToAcquire: ['Physical & Logical Streaming Replication', 'Replication Slots & Lag Monitoring', 'Connection Pooling with PgBouncer', 'Automated Failover with Patroni/Keepalived'],
          activities: ['Setup a 3-node PostgreSQL high-availability cluster with streaming replication and automated failover', 'Benchmarking connection pooling performance under 1,000 concurrent client connections'],
          estimatedTime: '6 weeks',
          completionCriteria: 'High-availability database cluster executing automated master failover within 30 seconds of outage.',
          dependencies: 'Steps 1 and 2.',
          resources: [
            { title: 'Patroni High Availability Template', url: 'https://patroni.readthedocs.io/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Backup Strategies, Point-in-Time Recovery & Cloud DBs',
          stageType: 'Licensing & Certification',
          description: 'Implement automated physical and logical backup schedules (pg_dump, pgBackRest), execute Point-In-Time Recovery (PITR), and manage cloud databases (Amazon Aurora).',
          skillsToAcquire: ['Physical Backups (pgBackRest / WAL archiving)', 'Point-in-Time Recovery (PITR)', 'Disaster Recovery Validation Drills', 'Cloud Database Services (Amazon RDS / Aurora)'],
          activities: ['Simulate database corruption and restore state to the exact second before data loss via PITR', 'Migrate an on-premise PostgreSQL database to Amazon RDS using AWS DMS'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Successful zero-data-loss Point-in-Time Recovery demonstrated under simulated outage conditions.',
          dependencies: 'Replication and database internals.',
          resources: [
            { title: 'pgBackRest Official Documentation', url: 'https://pgbackrest.org/', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'network-engineer',
    title: 'Network Engineer',
    description: 'Designs, configures, manages, and troubleshoots enterprise local area networks (LAN), wide area networks (WAN), firewalls, and SD-WAN infrastructure. Ensures continuous packet delivery, routing efficiency, and network perimeter security.',
    educationRequirements: 'B.Tech/B.E. in Electronics & Communication (ECE), IT, Computer Science, or diploma in Computer Networking. Industry standard certifications (Cisco CCNA/CCNP).',
    educationPathways: [
      'B.Tech / B.E. in Electronics & Communication Engineering (ECE) or CS/IT (4 years)',
      'Diploma in Electronics / Computer Engineering (3 years) followed by networking certifications',
      'Direct industry certification route through Cisco (CCNA / CCNP Enterprise)'
    ],
    eligibilityRequirements: 'No formal statutory licensing. Demonstrated mastery of IP subnetting, routing protocols (OSPF, BGP), switching (VLAN, STP), and firewall configuration.',
    certificationsAndExams: [
      'Cisco Certified Network Associate (CCNA 200-301)',
      'Cisco Certified Network Professional (CCNP Enterprise)',
      'CompTIA Network+',
      'Fortinet Certified Professional (FCP)'
    ],
    workEnvironment: 'Enterprise data centers, telecommunications network operations centers (NOC), corporate offices, and campus networks in Bengaluru, Mumbai, Chennai, and Noida.',
    marketDemand: 'Moderate',
    jobOutlook: 'Steady hiring fueled by 5G telecommunications rollout, enterprise SD-WAN upgrades, and expansion of hyperscale third-party data centers in India.',
    salaryRange: { min: 380000, max: 1500000, currency: 'INR', source: 'AmbitionBox Network Engineer Salaries India, PayScale' },
    salarySource: 'AmbitionBox Network Engineer Salaries India, PayScale',
    salaryByExperience: {
      entryLevel: { min: 380000, max: 650000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 650000, max: 1150000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1150000, max: 1800000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Network engineers who combine traditional Cisco routing with network automation (Python, Ansible, Netmiko) and SD-WAN earn premium salaries.'
    },
    careerProgression: [
      'Junior Network Engineer / NOC Technician',
      'Network Engineer (Routing & Switching)',
      'Senior Network Engineer / Network Security Specialist',
      'Lead Network Architect / Infrastructure Specialist',
      'Head of Enterprise Networking & Telecom'
    ],
    employmentSectors: {
      government: 'BharatNet rural broadband infrastructure, RailTel, National Informatics Centre network backbone, Defence communications (Army Static Switched Communication Network)',
      privateSector: 'Telecom Operators (Reliance Jio, Bharti Airtel, Vodafone Idea), Data Center Operators (CtrlS, Yotta, Equinix), IT Services'
    },
    timelineOverview: {
      totalEstimatedDuration: '6 - 9 Months focused study and CCNA certification',
      educationDuration: '3-4 Years formal degree or diploma',
      prepDuration: '4–6 Months IP subnetting, routing protocols, switching, and packet tracing',
      practicalTrainingDuration: '2–3 Months Cisco Packet Tracer / GNS3 lab simulations',
      jobSearchDuration: '2–4 Months NOC technical evaluation rounds',
      overlapNotes: 'Cisco Packet Tracer lab configurations are executed in tandem with theoretical chapters.',
      confidenceNote: 'Clearing the official Cisco CCNA exam significantly improves hiring conversion for entry-level network engineer positions.'
    },
    sources: [
      { title: 'Cisco Certified Network Associate (CCNA) Official Blueprint', url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html', sourceAuthority: 'Cisco Systems Inc.', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Network Engineer Salary in India', url: 'https://www.ambitionbox.com/salaries/network-engineer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Network Engineer (CCNA to Infrastructure) Roadmap',
      description: 'Structured networking pathway: IPv4/IPv6 subnetting, VLAN switching, OSPF/BGP dynamic routing, enterprise firewalls, and Python network automation.',
      totalEstimatedDuration: '6 - 9 Months',
      durationBreakdown: 'IP Addressing & Subnetting: 4 weeks | Switching, VLANs & Trunking: 6 weeks | Routing Protocols (OSPF & BGP): 6-8 weeks | Network Security & Automation (Python/Ansible): 6 weeks',
      overlapNotes: 'Virtual network topologies are simulated in GNS3 or Packet Tracer throughout.',
      steps: [
        {
          stepNumber: 1,
          title: 'IPv4/IPv6 Addressing, Subnetting & Network Layer Models',
          stageType: 'Skill Acquisition',
          description: 'Master binary to decimal conversion, IPv4 Classless Inter-Domain Routing (CIDR), Variable Length Subnet Masking (VLSM), and IPv6 address types.',
          skillsToAcquire: ['IPv4 VLSM Subnet Calculation', 'IPv6 Address Scopes & SLAAC', 'OSI 7 Layers & Encapsulation', 'TCP vs UDP Protocols'],
          activities: ['Perform 50+ timed subnetting calculations without using a calculator', 'Design a multi-department IP addressing scheme for a 1,000-host enterprise'],
          estimatedTime: '4 weeks',
          completionCriteria: 'Calculate network, broadcast, and usable host ranges for any CIDR mask in under 60 seconds.',
          dependencies: 'Basic computer systems knowledge.',
          resources: [
            { title: 'Subnetting Practice Tool', url: 'https://subnettingpractice.com/', type: 'Other' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Switching Architecture, VLANs, Trunking & Spanning Tree',
          stageType: 'Skill Acquisition',
          description: 'Configure enterprise switches: Virtual LANs (VLANs), 802.1Q trunking, Inter-VLAN routing (Router-on-a-Stick), Spanning Tree Protocol (STP), and EtherChannel.',
          skillsToAcquire: ['VLAN Segmentation & 802.1Q Trunking', 'Spanning Tree Protocol (RSTP / PVST+)', 'EtherChannel Link Aggregation (LACP)', 'Port Security & Switch Hardening'],
          activities: ['Build a redundant campus switching topology in Cisco Packet Tracer preventing bridge loops with RSTP', 'Configure inter-VLAN routing and restrict management access with port security'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Multi-VLAN redundant network topology functioning without packet broadcast storms.',
          dependencies: 'Subnetting fundamentals (Step 1).',
          resources: [
            { title: 'Cisco Networking Academy', url: 'https://www.netacad.com/', type: 'Course' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Dynamic Routing Protocols (OSPF & BGP) & WAN',
          stageType: 'Portfolio & Projects',
          description: 'Implement dynamic interior and exterior routing: single-area and multi-area OSPF, route summarization, passive interfaces, and exterior BGP peering concepts.',
          skillsToAcquire: ['OSPF Adjacency & Metric Calculation', 'Multi-Area OSPF & Area Border Routers (ABR)', 'BGP Peering & Autonomous Systems', 'Static Routing & Default Gateways'],
          activities: ['Configure multi-area OSPF across 6 routers in GNS3 with authentication and MD5 passwords', 'Simulate ISP redundant link failover using floating static routes and BGP basics'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Fully converged multi-router enterprise WAN simulation with fast failover routing verified.',
          dependencies: 'Switching and subnetting proficiency.',
          resources: [
            { title: 'GNS3 Network Simulation Software', url: 'https://www.gns3.com/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Network Security (ACLs, Firewalls) & Python Automation',
          stageType: 'Licensing & Certification',
          description: 'Configure Access Control Lists (Standard/Extended ACLs), setup enterprise firewall rules, automate network device backups with Python (Netmiko), and clear CCNA.',
          skillsToAcquire: ['Standard & Extended ACLs', 'NAT / PAT Configuration', 'Python Network Automation (Netmiko/Napalm)', 'Cisco CCNA Certification Exam Prep'],
          activities: ['Write a Python script using Netmiko that connects to 10 switches via SSH and backs up running configurations', 'Clear the official Cisco CCNA (200-301) certification examination'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Achieve CCNA 200-301 Certification and publish automated configuration scripts on GitHub.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'CCNA 200-301 Official Cert Guide', url: 'https://www.ciscopress.com/store/ccna-200-301-official-cert-guide-library-9781587147142', type: 'Book' }
          ]
        }
      ]
    }
  },
  {
    slug: 'blockchain-developer',
    title: 'Blockchain Developer',
    description: 'Designs, develops, audits, and deploys decentralized applications (dApps), smart contracts, and cryptographic protocols on EVM-compatible blockchains (Ethereum, Polygon, Arbitrum) using Solidity, Rust, and Web3 libraries.',
    educationRequirements: 'B.Tech/B.E. in CS/IT or strong cryptographic software portfolio. Deep proficiency in Solidity, smart contract security audits, DeFi protocols, Web3.js/Ethers.js, and Hardhat/Foundry.',
    educationPathways: [
      'B.Tech / B.E. in Computer Science or Information Technology (4 years)',
      'Software engineers transitioning into Web3 protocols and decentralized finance',
      'Specialized blockchain developer bootcamps with verified smart contract deployments'
    ],
    eligibilityRequirements: 'No formal statutory licensing. Deep understanding of public key cryptography, consensus mechanisms (PoS), gas optimization, and smart contract vulnerability auditing.',
    certificationsAndExams: [
      'Certified Ethereum Developer',
      'Blockchain Council Certified Blockchain Developer',
      'Cyfrin Updraft Smart Contract Security Certification'
    ],
    workEnvironment: 'Decentralized autonomous organizations (DAOs), Web3 startups, fintech ventures, and crypto consulting firms in Bengaluru, Gurugram, and Pune; extensive remote work with global teams.',
    marketDemand: 'Moderate',
    jobOutlook: 'Strong international and domestic hiring for smart contract security auditors, institutional asset tokenization (RWA) platforms, and enterprise supply chain tracking.',
    salaryRange: { min: 600000, max: 2800000, currency: 'INR', source: 'AmbitionBox Blockchain Developer Salaries India, Web3 Career Reports' },
    salarySource: 'AmbitionBox Blockchain Developer Salaries India, Web3 Career Reports',
    salaryByExperience: {
      entryLevel: { min: 600000, max: 1100000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 1100000, max: 1950000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1950000, max: 3600000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Web3 developers working remotely for international protocols frequently receive USD or token-denominated compensation packages exceeding ₹40–60+ LPA equivalent.'
    },
    careerProgression: [
      'Junior Smart Contract Developer',
      'Blockchain / Web3 Engineer',
      'Senior Smart Contract Auditor / Protocol Engineer',
      'Lead Blockchain Architect',
      'Chief Technology Officer (Web3 / Protocol)'
    ],
    employmentSectors: {
      government: 'State Government land registry blockchain pilots (Telangana, Karnataka), RBI Central Bank Digital Currency (e-Rupee pilots)',
      privateSector: 'Global Blockchain Networks (Polygon Technology India development centers), Web3 Startups, DeFi Protocols, Crypto Exchanges (CoinDCX, CoinSwitch)'
    },
    timelineOverview: {
      totalEstimatedDuration: '6 - 9 Months focused Web3 and smart contract training',
      educationDuration: '4 Years formal degree (optional with proven smart contract deployments)',
      prepDuration: '4–6 Months Solidity, EVM internals, and testing frameworks (Foundry)',
      practicalTrainingDuration: '2–4 Months building decentralized finance (DeFi) dApps and security audits',
      jobSearchDuration: '2–4 Months participating in Web3 hackathons (ETHIndia) and protocol bounties',
      overlapNotes: 'Smart contract development and frontend integration (Ethers.js/Wagmi) run concurrently.',
      confidenceNote: 'Winning or placing in prestigious hackathons like ETHIndia provides immediate access to top domestic and international Web3 job offers.'
    },
    sources: [
      { title: 'Ethereum Official Developer Documentation', url: 'https://ethereum.org/en/developers/docs/', sourceAuthority: 'Ethereum Foundation', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Blockchain Developer Salary in India', url: 'https://www.ambitionbox.com/salaries/blockchain-developer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Blockchain & Smart Contract Developer Roadmap',
      description: 'Comprehensive Web3 pathway: cryptographic foundations, Solidity programming, EVM opcode execution, gas optimization, smart contract security, and full-stack dApp engineering.',
      totalEstimatedDuration: '6 - 9 Months',
      durationBreakdown: 'Blockchain Architecture & Cryptography: 4 weeks | Solidity Programming & Foundry: 8 weeks | DeFi Protocols & Token Standards (ERC-20/721): 6 weeks | Smart Contract Security & Full-Stack dApps: 6-8 weeks',
      overlapNotes: 'Smart contracts are written and tested with Foundry test suites continuously.',
      steps: [
        {
          stepNumber: 1,
          title: 'Cryptography, Distributed Ledgers & EVM Architecture',
          stageType: 'Skill Acquisition',
          description: 'Understand public-key cryptography (ECDSA), SHA-256/Keccak hashing, Merkle trees, consensus mechanisms (Proof-of-Stake), and the Ethereum Virtual Machine (EVM).',
          skillsToAcquire: ['Asymmetric Cryptography & Digital Signatures', 'Merkle Patricia Trees', 'EVM Stack, Memory & Storage Layout', 'Gas Mechanics & Transaction Lifecycle'],
          activities: ['Sign and verify a cryptographic message in Python using secp256k1 keys', 'Inspect raw transaction receipts and gas usage on Etherscan/Polygonscan'],
          estimatedTime: '4 weeks',
          completionCriteria: 'Clear understanding of EVM gas consumption, nonces, and transaction execution stages.',
          dependencies: 'Basic computer science fundamentals.',
          resources: [
            { title: 'Mastering Ethereum - Andreas Antonopoulos', url: 'https://github.com/ethereumbook/ethereumbook', type: 'Book' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Solidity Programming, Foundry & Testing Frameworks',
          stageType: 'Skill Acquisition',
          description: 'Master Solidity syntax (data types, visibility, modifiers, events, inheritance), and develop, test, and debug contracts using the modern Foundry/Hardhat toolkit.',
          skillsToAcquire: ['Solidity Syntax & Custom Modifiers', 'Foundry Testing (Fuzz Testing, Invariants)', 'OpenZeppelin Contract Libraries', 'Events & Off-Chain Indexing'],
          activities: ['Implement an ERC-20 token and custom staking contract with reward distribution logic', 'Write unit and fuzz tests in Solidity using Foundry achieving 100% line coverage'],
          estimatedTime: '8 weeks',
          completionCriteria: 'Fully tested smart contract suite with automated fuzz testing passing in Foundry.',
          dependencies: 'Cryptography foundations (Step 1).',
          resources: [
            { title: 'Foundry Book Documentation', url: 'https://book.getfoundry.sh/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Token Standards (ERC-721/1155) & DeFi Mechanics',
          stageType: 'Portfolio & Projects',
          description: 'Master NFT standards (ERC-721, ERC-1155), decentralized exchange Automated Market Makers (AMM - Uniswap v2 constant product formula), and lending protocol architectures.',
          skillsToAcquire: ['ERC-721 / ERC-1155 NFT Architecture', 'Constant Product AMMs (x * y = k)', 'Flash Loans & Oracle Integration (Chainlink)', 'Gas Optimization Techniques'],
          activities: ['Build a simplified Decentralized Exchange (DEX) liquidity pool contract from scratch', 'Integrate Chainlink decentralized price feeds into a lending protocol simulator'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Functional AMM swap contract tested with simulated liquidity deposits and token exchanges.',
          dependencies: 'Solidity and Foundry proficiency.',
          resources: [
            { title: 'Uniswap v2 Core Smart Contracts', url: 'https://docs.uniswap.org/contracts/v2/overview', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Smart Contract Security, Auditing & Full-Stack dApp',
          stageType: 'Recruitment & Job Search',
          description: 'Audit critical vulnerabilities (Reentrancy, Integer Overflow, Front-Running), use Slither static analysis, connect contracts to a React frontend with Wagmi, and deploy to Sepolia testnet.',
          skillsToAcquire: ['Smart Contract Vulnerability Auditing', 'Reentrancy & Checks-Effects-Interactions', 'Static Analysis with Slither', 'Frontend Integration (Wagmi / Viem / RainbowKit)'],
          activities: ['Complete the Ethernaut security challenges on OpenZeppelin', 'Deploy a complete full-stack dApp with MetaMask wallet login on Polygon or Arbitrum testnet'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Live deployed decentralized application on testnet with verified contract code on block explorer.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'OpenZeppelin Ethernaut CTF', url: 'https://ethernaut.openzeppelin.com/', type: 'Other' }
          ]
        }
      ]
    }
  },
  {
    slug: 'embedded-systems-engineer',
    title: 'Embedded Systems Engineer',
    description: 'Designs, programs, and tests microcontrollers and low-level firmware that control physical hardware devices in automotive ECUs, IoT smart sensors, consumer electronics, and medical diagnostics.',
    educationRequirements: 'B.Tech/B.E. in Electronics & Communication (ECE), Electrical Engineering (EEE), Mechatronics, or Computer Science. Strong mastery of Embedded C/C++, ARM Cortex microcontrollers, RTOS, and communication protocols (I2C, SPI, UART, CAN).',
    educationPathways: [
      'B.Tech / B.E. in Electronics & Communication Engineering (ECE) or Electrical Engineering (4 years)',
      'M.Tech in Embedded Systems / VLSI Design (2 years via GATE)',
      'Advanced Diploma in Embedded Systems Design (CDAC ACTS / NIELIT)'
    ],
    eligibilityRequirements: 'No formal statutory licensing. Demonstrated mastery of microcontroller peripherals, low-level bit manipulation in C, hardware schematic reading, and oscilloscope debugging.',
    certificationsAndExams: [
      'ARM Accredited Engineer (AAE)',
      'CDAC Post Graduate Diploma in Embedded Systems Design (PG-DESD)'
    ],
    workEnvironment: 'Hardware design laboratories, automotive R&D centres (Tata Motors, Mahindra, Bosch India), semiconductor design firms, and IoT startups in Bengaluru, Pune, Hyderabad, and Chennai.',
    marketDemand: 'High',
    jobOutlook: 'Strong hiring surge driven by electric vehicle (EV) battery management systems (BMS), motor control units, IoT industrial sensor deployments, and Make in India electronics manufacturing.',
    salaryRange: { min: 420000, max: 1900000, currency: 'INR', source: 'AmbitionBox Embedded Systems Salaries India, PayScale' },
    salarySource: 'AmbitionBox Embedded Systems Salaries India, PayScale',
    salaryByExperience: {
      entryLevel: { min: 420000, max: 750000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 750000, max: 1450000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1450000, max: 2500000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Firmware engineers working on automotive AUTOSAR, functional safety (ISO 26262), and EV powertrain algorithms command higher salary ranges.'
    },
    careerProgression: [
      'Junior Firmware / Embedded Engineer',
      'Embedded Software Engineer',
      'Senior Embedded Systems Engineer / Firmware Lead',
      'Principal Embedded Architect',
      'Director of Hardware Engineering / VP of R&D'
    ],
    employmentSectors: {
      government: 'Indian Space Research Organisation (ISRO satellite avionics), DRDO missile guidance laboratories, Centre for Development of Advanced Computing (CDAC), Bharat Electronics Limited (BEL)',
      privateSector: 'Automotive Tier-1 Suppliers (Bosch India, Continental, Visteon), EV Startups (Ather Energy, Ola Electric), Semiconductor R&D (Texas Instruments, NXP, Qualcomm India)'
    },
    timelineOverview: {
      totalEstimatedDuration: '6 - 10 Months practical hardware and firmware study',
      educationDuration: '4 Years formal engineering degree',
      prepDuration: '4–6 Months Embedded C, ARM architecture, and communication protocols',
      practicalTrainingDuration: '2–4 Months hands-on hardware development board projects (STM32/ESP32)',
      jobSearchDuration: '2–4 Months live schematic reading and firmware coding interviews',
      overlapNotes: 'Hands-on breadboard and microcontroller projects reinforce theoretical C programming.',
      confidenceNote: 'Building at least 2 complete firmware projects on an ARM Cortex-M board (e.g. STM32 Nucleo) with interrupt-driven peripherals is essential.'
    },
    sources: [
      { title: 'ARM Developer Documentation & Architecture', url: 'https://developer.arm.com/', sourceAuthority: 'ARM Ltd.', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Embedded Systems Engineer Salary in India', url: 'https://www.ambitionbox.com/salaries/embedded-systems-engineer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Embedded Systems & Firmware Engineer Roadmap',
      description: 'Hardware-software firmware engineering curriculum: low-level C bit manipulation, ARM Cortex-M architecture, peripheral protocols (I2C/SPI/UART/CAN), Real-Time Operating Systems (FreeRTOS), and debugging.',
      totalEstimatedDuration: '6 - 10 Months',
      durationBreakdown: 'Embedded C & Bitwise Manipulation: 6 weeks | Microcontroller Peripherals & Protocols (UART/SPI/I2C): 8 weeks | FreeRTOS & Real-Time Multitasking: 6-8 weeks | Automotive Protocols (CAN) & Hardware Debugging: 6 weeks',
      overlapNotes: 'Hardware development boards are used from the first week of study.',
      steps: [
        {
          stepNumber: 1,
          title: 'Embedded C Programming & Memory Architecture',
          stageType: 'Skill Acquisition',
          description: 'Master bitwise operators (masking, setting, clearing bits), pointers, volatile qualifier, memory-mapped I/O registers, and linker scripts.',
          skillsToAcquire: ['Bitwise Manipulation & Bitmasking', 'Volatile Keyword & Register Mapping', 'Pointers to Functions & Hardware Registers', 'Memory Segments (Flash, SRAM, Stack, Heap)'],
          activities: ['Write bare-metal register-level code to toggle GPIO pins and configure clock frequencies without HAL libraries', 'Simulate circular buffer memory management for serial data streams'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Clean, bug-free C code manipulating hardware registers directly with proper bit masking.',
          dependencies: 'C programming language basics.',
          resources: [
            { title: 'Embedded C Coding Standard - Barr Group', url: 'https://barrgroup.com/embedded-systems/books-embedded-c-coding-standard', type: 'Book' }
          ]
        },
        {
          stepNumber: 2,
          title: 'ARM Cortex-M Architecture & Communication Protocols',
          stageType: 'Skill Acquisition',
          description: 'Program hardware timer interrupts, ADC conversions, and serial communication buses (UART, SPI, I2C) on an ARM Cortex-M microcontroller (STM32).',
          skillsToAcquire: ['ARM Cortex-M NVIC Interrupt Controllers', 'Timer Interrupts & PWM Signal Generation', 'UART, SPI & I2C Bus Communication', 'Analog-to-Digital Converter (ADC) Sampling'],
          activities: ['Interface an OLED display over I2C and an SD card over SPI simultaneously on an STM32 board', 'Write an interrupt-driven UART driver transmitting telemetry packets without CPU blocking'],
          estimatedTime: '8 weeks',
          completionCriteria: 'Functional multi-sensor embedded system communicating over multiple serial buses with zero data loss.',
          dependencies: 'Embedded C fundamentals (Step 1).',
          resources: [
            { title: 'STM32 Microcontroller Documentation', url: 'https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Real-Time Operating Systems (FreeRTOS)',
          stageType: 'Portfolio & Projects',
          description: 'Implement multi-tasking on microcontrollers using FreeRTOS: task scheduling, priorities, semaphores, mutexes, queue management, and priority inversion prevention.',
          skillsToAcquire: ['FreeRTOS Task Scheduling & Context Switching', 'Binary & Counting Semaphores', 'Mutexes & Priority Inheritance', 'Inter-Task Message Queues'],
          activities: ['Build a multi-tasking environmental monitor with 4 independent FreeRTOS tasks (sensor reading, display, network, logging)', 'Identify and resolve deadlocks and race conditions in FreeRTOS tasks'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Stable multi-threaded FreeRTOS firmware running without task starvation or priority inversion.',
          dependencies: 'Microcontroller architecture and interrupts.',
          resources: [
            { title: 'FreeRTOS Official Reference Manual', url: 'https://www.freertos.org/Documentation/RTOS_book.html', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Automotive Protocols (CAN Bus) & Hardware Debugging',
          stageType: 'Skill Acquisition',
          description: 'Learn Controller Area Network (CAN) bus protocol, differential signaling, arbitration, and debug firmware using Logic Analyzers and Digital Storage Oscilloscopes (DSO).',
          skillsToAcquire: ['CAN Bus Protocol & Message Frames', 'Logic Analyzer Protocol Decoding', 'Digital Storage Oscilloscope (DSO) Signal Verification', 'Low Power Sleep Modes & Watchdog Timers'],
          activities: ['Establish communication between two microcontroller nodes over a CAN transceiver bus', 'Decode I2C clock stretching and bus glitches using a digital logic analyzer'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Working two-node CAN communication system with verified signal integrity on an oscilloscope.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'Texas Instruments CAN Physical Layer Guide', url: 'https://www.ti.com/lit/an/slla270/slla270.pdf', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'qa-engineer',
    title: 'QA Engineer',
    description: 'Ensures software quality, reliability, and standards compliance by designing test plans, writing exhaustive manual test scenarios, executing regression suites, and tracking defects throughout the software development lifecycle.',
    educationRequirements: 'B.Tech/B.E. in any engineering discipline, BCA, B.Sc Computer Science, or diploma in IT. Strong understanding of software testing methodologies (Agile Scrum, STLC), test case design techniques, and bug management tools (Jira).',
    educationPathways: [
      'B.Tech / B.E. in CS/IT or Any Engineering Branch (4 years)',
      'BCA / B.Sc Computer Science (3 years)',
      'ISTQB Foundation Level Certification programs'
    ],
    eligibilityRequirements: 'No statutory licensing. Meticulous attention to detail, analytical mindset, knowledge of boundary value analysis, equivalence partitioning, and defect life cycle.',
    certificationsAndExams: [
      'ISTQB Certified Tester Foundation Level (CTFL)',
      'Certified Software Quality Analyst (CSQA)'
    ],
    workEnvironment: 'IT services delivery centers, product startups, enterprise QA teams, and testing consultancies across Bengaluru, Chennai, Pune, Hyderabad, and Noida; hybrid.',
    marketDemand: 'Moderate',
    jobOutlook: 'Steady baseline demand across enterprise IT services, with companies increasingly expecting manual QA engineers to cross-skill into test automation.',
    salaryRange: { min: 350000, max: 1400000, currency: 'INR', source: 'AmbitionBox India QA Engineer Salaries, PayScale' },
    salarySource: 'AmbitionBox India QA Engineer Salaries, PayScale',
    salaryByExperience: {
      entryLevel: { min: 350000, max: 600000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 600000, max: 1050000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1050000, max: 1750000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'QA engineers who learn basic API testing (Postman) and database SQL validation command higher compensation than pure black-box manual testers.'
    },
    careerProgression: [
      'Junior Quality Assurance Engineer / Test Associate',
      'QA Engineer (Manual & API Testing)',
      'Senior QA Analyst / Test Lead',
      'QA Manager / Quality Delivery Lead',
      'Director of Quality Engineering'
    ],
    employmentSectors: {
      government: 'Standardisation Testing and Quality Certification (STQC) Directorate (MeitY), National Informatics Centre software testing lab',
      privateSector: 'Top Indian IT Services (TCS, Infosys, Wipro, Tech Mahindra testing practices), Product Startups, HealthTech & Fintech systems'
    },
    timelineOverview: {
      totalEstimatedDuration: '3 - 6 Months structured testing methodology learning',
      educationDuration: '3-4 Years formal undergraduate degree',
      prepDuration: '2–3 Months STLC, test design techniques, bug reporting, and API testing',
      practicalTrainingDuration: '1–2 Months testing open-source web and mobile applications',
      jobSearchDuration: '2–3 Months test scenario writing and bug triaging interviews',
      overlapNotes: 'Test case drafting and Postman API testing are practiced simultaneously.',
      confidenceNote: 'Earning the ISTQB Foundation Level (CTFL) certification provides universal credibility for entry-level QA applications.'
    },
    sources: [
      { title: 'International Software Testing Qualifications Board (ISTQB)', url: 'https://www.istqb.org/', sourceAuthority: 'ISTQB', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox QA Engineer Salary in India', url: 'https://www.ambitionbox.com/salaries/qa-engineer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'QA Engineer (Manual & Functional Testing) Roadmap',
      description: 'Comprehensive software testing pathway: Software Testing Life Cycle (STLC), black-box test design techniques, Jira defect management, API testing with Postman, and database verification.',
      totalEstimatedDuration: '3 - 6 Months',
      durationBreakdown: 'Testing Foundations & STLC: 4 weeks | Test Case Design & Black-Box Techniques: 4 weeks | Defect Tracking in Jira & Bug Life Cycle: 3 weeks | API Testing with Postman & Database SQL: 4-6 weeks',
      overlapNotes: 'Real testing on public websites is performed throughout all stages.',
      steps: [
        {
          stepNumber: 1,
          title: 'Software Testing Fundamentals & SDLC / STLC Models',
          stageType: 'Skill Acquisition',
          description: 'Understand the difference between verification and validation, Agile Scrum methodologies, and the phases of the Software Testing Life Cycle (STLC).',
          skillsToAcquire: ['SDLC (Agile / Waterfall) vs STLC', 'Levels of Testing (Unit, Integration, System, UAT)', 'Non-Functional vs Functional Testing', 'Sprint Ceremonies & QA Role in Scrum'],
          activities: ['Map out an STLC lifecycle document for a theoretical banking mobile app', 'Participate in a mock sprint planning and user story grooming exercise'],
          estimatedTime: '4 weeks',
          completionCriteria: 'Mastery of testing terminology and ability to draft a comprehensive Test Strategy document.',
          dependencies: 'Basic computer literacy.',
          resources: [
            { title: 'ISTQB Foundation Level Syllabus', url: 'https://www.istqb.org/certifications/certified-tester-foundation-level', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Test Case Design Techniques & Execution',
          stageType: 'Skill Acquisition',
          description: 'Master formal test design techniques: Equivalence Partitioning (EP), Boundary Value Analysis (BVA), Decision Table testing, and State Transition testing.',
          skillsToAcquire: ['Boundary Value Analysis (BVA)', 'Equivalence Partitioning (EP)', 'Test Case Documentation & Preconditions', 'Traceability Matrix (RTM)'],
          activities: ['Write 50+ detailed test cases with positive and negative paths for an e-commerce checkout flow', 'Create a Requirements Traceability Matrix linking user stories to test cases'],
          estimatedTime: '4 weeks',
          completionCriteria: 'Exhaustive test suite covering edge cases and boundary conditions with clear acceptance criteria.',
          dependencies: 'Testing fundamentals (Step 1).',
          resources: [
            { title: 'Guru99 Software Testing Tutorial', url: 'https://www.guru99.com/software-testing.html', type: 'Course' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Defect Reporting, Bug Life Cycle & Jira Management',
          stageType: 'Portfolio & Projects',
          description: 'Log actionable defects with reproducible steps, expected vs actual outcomes, logs, and screenshots; manage bug status transitions in Jira.',
          skillsToAcquire: ['Defect Life Cycle & Severity vs Priority', 'Bug Reporting Best Practices', 'Atlassian Jira Issue Tracking', 'Root Cause Categorization'],
          activities: ['Perform exploratory testing on a real public website (e.g. Wikipedia or an open-source store)', 'Log 15+ well-formatted bug reports with reproduction steps and screenshots in Jira'],
          estimatedTime: '3 weeks',
          completionCriteria: 'Portfolio of 15+ detailed bug reports logged in Jira with severity ratings and logs.',
          dependencies: 'Test case design proficiency.',
          resources: [
            { title: 'Atlassian Jira Fundamentals', url: 'https://www.atlassian.com/software/jira/guides', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'API Testing with Postman & Database Verification',
          stageType: 'Licensing & Certification',
          description: 'Test backend RESTful APIs using Postman (HTTP methods, response status codes, JSON validation), verify database state using SQL queries, and prepare for ISTQB.',
          skillsToAcquire: ['API Testing in Postman', 'HTTP Status Codes (200, 400, 401, 500)', 'SQL Database Validation Queries', 'ISTQB Certification Preparation'],
          activities: ['Create an automated Postman collection running 20+ functional assertion tests on a public REST API', 'Write SQL join queries to verify that database tables update correctly after UI actions'],
          estimatedTime: '4 - 6 weeks',
          completionCriteria: 'Automated Postman test collection with JavaScript assertions and clearing of ISTQB CTFL exam.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'Postman Learning Center', url: 'https://learning.postman.com/docs/getting-started/overview/', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'automation-test-engineer',
    title: 'Automation Test Engineer',
    description: 'Develops robust automated test suites and frameworks to evaluate software reliability across web, mobile, and API interfaces. Employs Selenium, Playwright, Cypress, Appium, and Java/Python to accelerate continuous testing in CI/CD pipelines.',
    educationRequirements: 'B.Tech/B.E. in CS/IT/ECE, BCA+MCA, or proven test automation background. Strong programming proficiency in Java, Python, or TypeScript, combined with mastery of automated testing frameworks.',
    educationPathways: [
      'B.Tech / B.E. in Computer Science or IT (4 years)',
      'BCA + MCA (5 years)',
      'Manual QA engineers upskilling into automated test engineering'
    ],
    eligibilityRequirements: 'No formal statutory licensing. Demonstrated mastery of Object-Oriented Programming (Java/Python), Page Object Model (POM), Selenium/Playwright, and CI/CD integration.',
    certificationsAndExams: [
      'ISTQB Certified Tester - Advanced Level Test Automation Engineer',
      'Selenium Automation Testing Certification'
    ],
    workEnvironment: 'Global Capability Centers, product technology startups, and enterprise consulting firms across Bengaluru, Hyderabad, Pune, Gurugram, and Chennai; hybrid.',
    marketDemand: 'High',
    jobOutlook: 'Strong sustained hiring as technology companies retire manual repetitive regression testing in favor of automated smoke and regression test pipelines.',
    salaryRange: { min: 450000, max: 1800000, currency: 'INR', source: 'AmbitionBox Automation Engineer Salaries India, PayScale' },
    salarySource: 'AmbitionBox Automation Engineer Salaries India, PayScale',
    salaryByExperience: {
      entryLevel: { min: 450000, max: 800000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 800000, max: 1450000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1450000, max: 2400000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Test automation engineers proficient in modern frameworks like Playwright and Cypress with CI/CD integration earn premium salaries over legacy tool specialists.'
    },
    careerProgression: [
      'Junior Automation Test Engineer',
      'Software Development Engineer in Test (SDET-I)',
      'Senior SDET / Automation Lead',
      'Lead Quality Architect / Principal SDET',
      'Head of Quality Engineering'
    ],
    employmentSectors: {
      government: 'Automated testing cells for UIDAI, National Payments Corporation of India (NPCI) regression suites, Digital India portals',
      privateSector: 'Product Tech Firms (Amazon, Flipkart, Swiggy), Global Banks (Citi, Wells Fargo Tech India), Enterprise Consultancies'
    },
    timelineOverview: {
      totalEstimatedDuration: '5 - 8 Months structured automation learning',
      educationDuration: '3-4 Years formal degree',
      prepDuration: '3–5 Months OOP programming (Java/Python/TS), Selenium/Playwright, and frameworks',
      practicalTrainingDuration: '2–3 Months building automated end-to-end test suites on real websites',
      jobSearchDuration: '2–4 Months live automation coding and framework architecture interviews',
      overlapNotes: 'Automation framework design is practiced while writing test scripts.',
      confidenceNote: 'Interviews evaluate real programming competency (loops, OOP, string manipulation) in addition to locator strategies.'
    },
    sources: [
      { title: 'Playwright Official Documentation', url: 'https://playwright.dev/', sourceAuthority: 'Microsoft Playwright', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Automation Test Engineer Salary in India', url: 'https://www.ambitionbox.com/salaries/automation-test-engineer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Automation Test Engineer (SDET) Roadmap',
      description: 'Test automation curriculum: Object-Oriented Programming (Java/Python), web automation (Selenium/Playwright), Page Object Model (POM), API test automation, and CI/CD.',
      totalEstimatedDuration: '5 - 8 Months',
      durationBreakdown: 'Core Programming & OOP (Java/Python): 6 weeks | Web Automation with Playwright / Selenium: 8 weeks | Framework Architecture (POM & TestNG): 6 weeks | API Automation & CI/CD Pipelines: 4-6 weeks',
      overlapNotes: 'Framework components are modularized as test scripts grow.',
      steps: [
        {
          stepNumber: 1,
          title: 'Core Programming Language & Object-Oriented Principles',
          stageType: 'Skill Acquisition',
          description: 'Master core Java or Python: OOP inheritance, polymorphism, encapsulation, collections/lists, file handling, and exception handling.',
          skillsToAcquire: ['OOP Principles (Classes & Interfaces)', 'Collections Framework (Lists, Sets, Maps)', 'Exception Handling (Try-Catch)', 'File I/O & JSON Parsing'],
          activities: ['Solve 40+ coding problems focusing on strings, arrays, and collections', 'Build a console data processing utility adhering to clean code standards'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Demonstrate solid problem-solving code with modular classes and exception handling.',
          dependencies: 'Basic computer science literacy.',
          resources: [
            { title: 'Java Programming Mooc.fi', url: 'https://java-programming.mooc.fi/', type: 'Course' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Web Automation with Playwright & Selenium WebDriver',
          stageType: 'Skill Acquisition',
          description: 'Master modern web automation: element locator strategies (XPath, CSS selectors, text locators), handling dynamic waits, alerts, iframes, and multiple windows.',
          skillsToAcquire: ['Robust Locators (CSS & Relative XPath)', 'Explicit & Dynamic Waits (avoiding Thread.sleep)', 'Handling Dropdowns, IFrames & Popups', 'Cross-Browser Test Execution'],
          activities: ['Automate user registration, product search, and cart addition on a demo e-commerce website', 'Handle dynamic elements and network wait states gracefully without flaky failures'],
          estimatedTime: '8 weeks',
          completionCriteria: 'Flake-free automated test suite executing end-to-end user workflows across Chrome and Firefox.',
          dependencies: 'Core programming language (Step 1).',
          resources: [
            { title: 'Selenium WebDriver Documentation', url: 'https://www.selenium.dev/documentation/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Page Object Model (POM) & Test Framework Design',
          stageType: 'Portfolio & Projects',
          description: 'Architect a maintainable test automation framework using Page Object Model (POM), data-driven testing (Excel/JSON data providers), and TestNG/PyTest assertions.',
          skillsToAcquire: ['Page Object Model (POM) Design Pattern', 'Data-Driven Testing (Apache POI / JSON)', 'TestNG / PyTest Assertions & Annotations', 'ExtentReports / Allure Reporting'],
          activities: ['Build an end-to-end Page Object Model test framework from scratch on GitHub', 'Integrate interactive HTML reporting (Allure Reports) with screenshot captures on test failure'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Modular, maintainable automated test framework with rich HTML reports and zero hardcoded data.',
          dependencies: 'Web automation fundamentals.',
          resources: [
            { title: 'Allure Report Documentation', url: 'https://allurereport.org/docs/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'API Test Automation (RestAssured) & CI/CD Integration',
          stageType: 'Recruitment & Job Search',
          description: 'Automate RESTful API test suites using RestAssured (Java) or Requests (Python), and execute automated regression tests on GitHub Actions CI/CD.',
          skillsToAcquire: ['REST API Automation (RestAssured / Requests)', 'JSON Schema Validation', 'GitHub Actions Automated Test Execution', 'Headless Browser Execution in Docker'],
          activities: ['Automate an end-to-end API test suite validating user creation, token generation, and database updates', 'Configure a GitHub Actions workflow that runs automated regression tests on every pull request'],
          estimatedTime: '4 - 6 weeks',
          completionCriteria: 'Complete SDET portfolio repository with automated Web + API test frameworks triggered via CI/CD.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'RestAssured Framework Guide', url: 'https://rest-assured.io/', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'ui-designer',
    title: 'UI Designer',
    description: 'Designs the visual language, typography, color palettes, interactive components, and responsive layouts of digital products. Creates high-fidelity Figma prototypes and scalable design systems for web and mobile interfaces.',
    educationRequirements: 'Bachelor\'s in Design (B.Des via UCEED/NID), Fine Arts (BFA), or portfolio-driven background. Deep expertise in Figma, design systems, visual hierarchy, and micro-interactions.',
    educationPathways: [
      'B.Des in Visual Communication, Interaction Design, or Digital Design (4 years via UCEED/NID/NIFT)',
      'Bachelor of Fine Arts (BFA - Applied Arts) (4 years)',
      'Intensive UI design bootcamps with verified Behance and Dribbble portfolios'
    ],
    eligibilityRequirements: 'No formal statutory licensing. High visual sensitivity, typography pairing, spatial layout rules, and Figma component architecture mastery.',
    certificationsAndExams: [
      'Google UX Design Professional Certificate',
      'CalArts UI/UX Design Specialization (Coursera)',
      'Interaction Design Foundation (IxDF) Certified Designer'
    ],
    workEnvironment: 'Product design studios, consumer internet startups, digital agencies, and enterprise IT design units in Bengaluru, Mumbai, Pune, and Gurugram; hybrid/remote.',
    marketDemand: 'High',
    jobOutlook: 'Strong demand as Indian consumer applications and fintech products compete fiercely on aesthetic refinement, fluid micro-interactions, and visual brand identity.',
    salaryRange: { min: 380000, max: 1600000, currency: 'INR', source: 'AmbitionBox India UI Designer Salaries, Dribbble India' },
    salarySource: 'AmbitionBox India UI Designer Salaries, Dribbble India',
    salaryByExperience: {
      entryLevel: { min: 380000, max: 700000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 700000, max: 1300000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1300000, max: 2200000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Designers with advanced skills in motion design (After Effects, Lottie, Rive) and complex design token architecture command higher compensation.'
    },
    careerProgression: [
      'Junior UI Designer',
      'UI / Visual Designer',
      'Senior UI Designer / Design System Lead',
      'Lead Visual Designer / Creative Director',
      'Head of Design / VP of Design'
    ],
    employmentSectors: {
      government: 'Digital India portal redesigns, Indian Railways passenger app UI overhauls, Smart Cities citizen portal design',
      privateSector: 'Top Consumer Tech (Swiggy, CRED, Zomato design teams), Design Studios (Designit, Fractal Ink), Enterprise B2B SaaS'
    },
    timelineOverview: {
      totalEstimatedDuration: '4 - 7 Months focused design theory and portfolio creation',
      educationDuration: '3-4 Years formal design degree (optional if possessing exceptional portfolio)',
      prepDuration: '3–4 Months typography, color theory, spacing systems, and Figma mastery',
      practicalTrainingDuration: '2–3 Months building high-fidelity design case studies',
      jobSearchDuration: '2–4 Months applying with polished Behance/Figma portfolio presentation',
      overlapNotes: 'Design theory is applied directly while building mobile and desktop screens.',
      confidenceNote: 'A high-impact portfolio featuring 3 detailed case studies with design tokens, responsive layouts, and interactive prototypes is mandatory.'
    },
    sources: [
      { title: 'Figma Official Design Documentation', url: 'https://help.figma.com/hc/en-us', sourceAuthority: 'Figma Inc.', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox UI Designer Salary in India', url: 'https://www.ambitionbox.com/salaries/ui-designer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'UI Designer Career Roadmap',
      description: 'Visual design curriculum: typography hierarchy, 8pt grid systems, color theory, advanced Figma component architecture, design tokens, and interactive prototyping.',
      totalEstimatedDuration: '4 - 7 Months',
      durationBreakdown: 'Visual Design Fundamentals (Typography & Color): 4 weeks | Figma Mastery & Component Architecture: 6-8 weeks | Responsive Web & Mobile Design Systems: 6 weeks | Micro-Animations & Portfolio Case Studies: 6 weeks',
      overlapNotes: 'Design system components are built progressively throughout the stages.',
      steps: [
        {
          stepNumber: 1,
          title: 'Visual Design Foundations, Typography & 8pt Grid',
          stageType: 'Skill Acquisition',
          description: 'Master typography pairings, modular typographic scales, color theory (60-30-10 rule, accessibility contrast ratios), and the 8-point spatial grid system.',
          skillsToAcquire: ['Typography Hierarchy & Leading', 'Color Theory & WCAG Contrast Ratios', '8pt Spatial Grid & Layout Layouts', 'Visual Hierarchy & Negative Space'],
          activities: ['Redesign 3 existing cluttered web screens applying strict typographic hierarchy and 8pt grid spacing', 'Verify color contrast compliance using WebAIM contrast checkers'],
          estimatedTime: '4 weeks',
          completionCriteria: 'Visually balanced digital layouts adhering strictly to 8pt spacing and WCAG AA contrast standards.',
          dependencies: 'Basic aesthetic appreciation and computer usage.',
          resources: [
            { title: 'Refactoring UI - Adam Wathan & Steve Schoger', url: 'https://www.refactoringui.com/', type: 'Book' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Figma Mastery: Auto Layout, Variants & Design Tokens',
          stageType: 'Skill Acquisition',
          description: 'Master industry-standard Figma tooling: nested Auto Layout, interactive component variants, boolean component properties, variables, and design tokens.',
          skillsToAcquire: ['Figma Auto Layout (Fill, Hug, Fixed)', 'Component Sets & Interactive Variants', 'Figma Variables (Color, Spacing, Radius)', 'Atomic Design System Methodology'],
          activities: ['Build a complete atomic component library in Figma (buttons, inputs, modals, tooltips) with interactive hover and click states', 'Organize components with clear documentation for developer handoff'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Comprehensive Figma design system with nested auto-layout components and multi-mode theme variables.',
          dependencies: 'Visual design fundamentals (Step 1).',
          resources: [
            { title: 'Figma YouTube Tutorials & Best Practices', url: 'https://www.youtube.com/c/Figmadesign', type: 'Video' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Responsive Web & Mobile Application UI Design',
          stageType: 'Portfolio & Projects',
          description: 'Design responsive screen layouts across desktop, tablet, and mobile views; design for iOS Human Interface Guidelines and Google Material Design 3.',
          skillsToAcquire: ['Responsive Breakpoint Adaptation', 'Material Design 3 Components', 'iOS Human Interface Guidelines (HIG)', 'Form Design & Input Error States'],
          activities: ['Design an end-to-end mobile banking application (20+ screens) with dark mode and light mode variants', 'Adapt the mobile screens to responsive tablet and desktop web layouts'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Multi-screen responsive product design adhering to platform design conventions with complete state variants.',
          dependencies: 'Figma component mastery.',
          resources: [
            { title: 'Material Design 3 Guidelines', url: 'https://m3.material.io/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Micro-Animations, Interactive Prototyping & Portfolio',
          stageType: 'Recruitment & Job Search',
          description: 'Create advanced interactive prototypes using Figma Smart Animate, design micro-interactions (Lottie/Rive), and author 3 comprehensive portfolio case studies.',
          skillsToAcquire: ['Smart Animate & Transition Easing', 'Micro-Interactions & State Transitions', 'Developer Handoff Specifications', 'Behance / Dribbble Portfolio Presentation'],
          activities: ['Build an interactive prototype with animated page transitions and realistic inputs', 'Publish 3 in-depth visual design case studies on Behance and an interactive personal portfolio website'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Polished digital design portfolio featuring 3 live interactive case studies ready for recruiter review.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'Behance Design Portfolios', url: 'https://www.behance.net/', type: 'Other' }
          ]
        }
      ]
    }
  },
  {
    slug: 'ux-designer',
    title: 'UX Designer',
    description: 'Researches, maps, and structures intuitive user experiences through user interviews, customer journey mapping, information architecture, wireframing, and usability testing to solve user pain points.',
    educationRequirements: 'Bachelor\'s in Design (B.Des), Human-Computer Interaction (HCI), Psychology, or portfolio-based transition. Strong understanding of qualitative user research, cognitive heuristics, and usability testing.',
    educationPathways: [
      'B.Des in Interaction Design or Product Design (4 years via UCEED/NID)',
      'Master of Design (M.Des) in Interaction Design / HCI (2 years via CEED)',
      'UX design certification programs with documented user research case studies'
    ],
    eligibilityRequirements: 'No formal statutory licensing. Empathy for user friction, qualitative and quantitative research methodologies, and wireframing proficiency.',
    certificationsAndExams: [
      'Nielsen Norman Group (NN/g) UX Certification',
      'Google UX Design Professional Certificate',
      'Interaction Design Foundation (IxDF) UX Master Certificate'
    ],
    workEnvironment: 'Product startups, design agencies, fintech platforms, and enterprise software firms in Bengaluru, Mumbai, Gurugram, and Pune; hybrid.',
    marketDemand: 'High',
    jobOutlook: 'Strong demand as product organizations realize that confusing workflows directly degrade user conversion, customer retention, and NPS scores.',
    salaryRange: { min: 420000, max: 1800000, currency: 'INR', source: 'AmbitionBox UX Designer Salaries India, Glassdoor' },
    salarySource: 'AmbitionBox UX Designer Salaries India, Glassdoor',
    salaryByExperience: {
      entryLevel: { min: 420000, max: 750000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 750000, max: 1400000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1400000, max: 2500000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'UX researchers and designers who excel at converting complex enterprise workflows into simple experiences earn top salaries in SaaS and FinTech.'
    },
    careerProgression: [
      'Junior UX Designer / UX Researcher',
      'User Experience (UX) Designer',
      'Senior UX Designer / Experience Lead',
      'Lead UX Strategist / Principal Product Designer',
      'Head of User Experience / VP of Design'
    ],
    employmentSectors: {
      government: 'Digital Public Goods (UPI, Ayushman Bharat Digital Mission interface usability), Citizen Services Portal accessibility audits',
      privateSector: 'B2B SaaS (Freshworks, Zoho), Fintech (Razorpay, Groww, Zerodha), E-commerce, Global Consultancies (McKinsey Design, BCG)'
    },
    timelineOverview: {
      totalEstimatedDuration: '5 - 8 Months structured user research and wireframing study',
      educationDuration: '3-4 Years formal degree (or equivalent project portfolio)',
      prepDuration: '3–4 Months user research methodologies, heuristics, and information architecture',
      practicalTrainingDuration: '2–3 Months conducting user interviews, usability tests, and wireframing',
      jobSearchDuration: '2–4 Months presenting research methodology and problem-solving case studies',
      overlapNotes: 'Wireframing and usability testing are performed iteratively on test projects.',
      confidenceNote: 'Case studies must articulate the "Why" behind design decisions, user research findings, and measurable usability improvements.'
    },
    sources: [
      { title: 'Nielsen Norman Group UX Research Articles', url: 'https://www.nngroup.com/articles/', sourceAuthority: 'Nielsen Norman Group', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox UX Designer Salary in India', url: 'https://www.ambitionbox.com/salaries/ux-designer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'UX Designer (Research & Architecture) Roadmap',
      description: 'User-centered design curriculum: qualitative user research, persona creation, journey mapping, information architecture, low-fidelity wireframing, and usability testing.',
      totalEstimatedDuration: '5 - 8 Months',
      durationBreakdown: 'User Research & Discovery: 6 weeks | Information Architecture & Journey Mapping: 4 weeks | Wireframing & Rapid Prototyping: 6-8 weeks | Usability Testing & Case Study Writing: 6 weeks',
      overlapNotes: 'Usability testing validates wireframe prototypes before final case study documentation.',
      steps: [
        {
          stepNumber: 1,
          title: 'User Research Methodologies & Problem Framing',
          stageType: 'Skill Acquisition',
          description: 'Master qualitative and quantitative research: conducting semi-structured user interviews, competitive analysis, survey design, and affinity mapping.',
          skillsToAcquire: ['User Interview Protocol Design', 'Affinity Diagramming & Synthesis', 'User Personas & Empathy Maps', 'Competitive UX Benchmarking'],
          activities: ['Conduct 5 user interviews on an existing friction-heavy task (e.g. filing taxes or booking train tickets)', 'Synthesize interview notes into actionable user personas and pain point matrices'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Comprehensive user research report identifying validated user pain points and clear design opportunity spaces.',
          dependencies: 'Empathy and active listening skills.',
          resources: [
            { title: 'NN/g User Interviews Guide', url: 'https://www.nngroup.com/articles/user-interviews/', type: 'Article' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Information Architecture & Customer Journey Mapping',
          stageType: 'Skill Acquisition',
          description: 'Structure intuitive navigation paths: card sorting, site maps, user flows, and end-to-end customer journey maps identifying emotional highs and drop-offs.',
          skillsToAcquire: ['Card Sorting (Open & Closed)', 'Site Mapping & Navigation Hierarchy', 'User Task Flows & Decision Trees', 'Customer Journey Mapping (CJM)'],
          activities: ['Conduct an open card sorting exercise with 8 participants to categorize complex settings menus', 'Map an end-to-end customer journey map for an online loan application process'],
          estimatedTime: '4 weeks',
          completionCriteria: 'Structured site map and user task flow with validated navigation taxonomy.',
          dependencies: 'User research synthesis (Step 1).',
          resources: [
            { title: 'Information Architecture Basics - Usability.gov', url: 'https://www.usability.gov/what-and-why/information-architecture.html', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Low-to-Mid Fidelity Wireframing & Heuristic Evaluation',
          stageType: 'Portfolio & Projects',
          description: 'Translate user flows into rapid low-fidelity paper wireframes and mid-fidelity digital wireframes in Figma, applying Jakob Nielsen 10 Usability Heuristics.',
          skillsToAcquire: ['Rapid Paper Sketching & Wireframing', 'Digital Wireframing in Figma', 'Nielsen 10 Usability Heuristics', 'Gestalt Principles of Visual Perception'],
          activities: ['Perform a formal heuristic evaluation of a popular Indian consumer app identifying 10+ severity violations', 'Design clickable mid-fidelity wireframes solving the identified usability issues'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Clickable mid-fidelity wireframe prototype eliminating identified heuristic violations.',
          dependencies: 'Information architecture and user flows.',
          resources: [
            { title: '10 Usability Heuristics - Nielsen Norman Group', url: 'https://www.nngroup.com/articles/ten-usability-heuristics/', type: 'Article' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Usability Testing, Iteration & Portfolio Case Study',
          stageType: 'Recruitment & Job Search',
          description: 'Conduct moderated usability testing sessions with real users, measure Task Success Rate and System Usability Scale (SUS), and write thorough case studies.',
          skillsToAcquire: ['Moderated Usability Testing Protocol', 'System Usability Scale (SUS) Scoring', 'Design Iteration Based on Evidence', 'UX Case Study Storytelling'],
          activities: ['Run usability tests with 5 users on your prototype, document task completion rates, and iterate the design', 'Write a detailed UX case study explaining the research, iterations, and measurable outcomes'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Published UX case study demonstrating rigorous research, testing data, and measurable usability improvements.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'How to Write a UX Case Study - IxDF', url: 'https://www.interaction-design.org/literature/article/how-to-write-a-ux-case-study', type: 'Article' }
          ]
        }
      ]
    }
  },
  {
    slug: 'product-designer',
    title: 'Product Designer',
    description: 'Owns the end-to-end design lifecycle of digital products from initial business strategy and user research to final UI components, design systems, and post-launch metric tracking.',
    educationRequirements: 'B.Des, M.Des, or multidisciplinary background combining UX research, visual UI craft, and product business acumen. Demonstrated experience working with engineering and product management teams.',
    educationPathways: [
      'B.Des in Product Design / Interaction Design (4 years via UCEED/NID)',
      'M.Des in Design (2 years via CEED / National Institute of Design)',
      'Cross-disciplinary transition from Senior UI or UX roles with demonstrable business impact'
    ],
    eligibilityRequirements: 'Demonstrated mastery of both visual craft (Figma) and analytical product thinking (A/B testing, North Star metrics, funnel conversion).',
    certificationsAndExams: [
      'Interaction Design Foundation UX Master Certification',
      'Reforge Product Design & Growth Programs'
    ],
    workEnvironment: 'High-growth tech startups, SaaS companies, and global product studios in Bengaluru, Gurugram, Mumbai, and Hyderabad; hybrid/remote.',
    marketDemand: 'High',
    jobOutlook: 'Rapidly replacing isolated UI-only or UX-only roles at progressive tech firms that demand versatile designers who understand business goals and technical feasibility.',
    salaryRange: { min: 550000, max: 2400000, currency: 'INR', source: 'AmbitionBox Product Designer Salaries India, Glassdoor' },
    salarySource: 'AmbitionBox Product Designer Salaries India, Glassdoor',
    salaryByExperience: {
      entryLevel: { min: 550000, max: 950000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 950000, max: 1750000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1750000, max: 3200000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Staff and Lead Product Designers at Tier-1 product firms (CRED, Swiggy, Razorpay, BrowserStack) earn ₹30–50+ LPA inclusive of equity grants.'
    },
    careerProgression: [
      'Associate Product Designer',
      'Product Designer (L1 / L2)',
      'Senior Product Designer',
      'Staff / Principal Product Designer',
      'VP of Product Design / Head of Design'
    ],
    employmentSectors: {
      government: 'Digital Public Infrastructure product teams (ONDC, Open Network for Digital Commerce, Account Aggregator ecosystem)',
      privateSector: 'Top Indian Unicorns, B2B SaaS Platforms, Global Technology Centers, Consumer Mobile Apps'
    },
    timelineOverview: {
      totalEstimatedDuration: '6 - 10 Months holistic product design portfolio building',
      educationDuration: '4 Years formal degree (or equivalent industry experience)',
      prepDuration: '4–6 Months end-to-end UX, UI design systems, and product metrics',
      practicalTrainingDuration: '2–4 Months shipping end-to-end product features and design critiques',
      jobSearchDuration: '2–4 Months product walkthroughs and whiteboarding design challenges',
      overlapNotes: 'Business metric tracking and visual prototyping are integrated into portfolio case studies.',
      confidenceNote: 'Interviews evaluate how candidates balance user needs against business viability and technical constraints.'
    },
    sources: [
      { title: 'InVision Design Genome Project', url: 'https://www.invisionapp.com/inside-design/design-genome/', sourceAuthority: 'InVision', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Product Designer Salary in India', url: 'https://www.ambitionbox.com/salaries/product-designer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Product Designer (End-to-End) Career Roadmap',
      description: 'Comprehensive product design curriculum: connecting business strategy with user research, rapid prototyping, production UI design systems, and measuring conversion impact.',
      totalEstimatedDuration: '6 - 10 Months',
      durationBreakdown: 'Product Strategy & Problem Discovery: 6 weeks | UX Architecture & Interaction Design: 6-8 weeks | Visual Craft & Scalable Design Systems: 6-8 weeks | Metric Measurement & Whiteboard Challenges: 6 weeks',
      overlapNotes: 'Real-world case studies document the journey from business problem to final metrics.',
      steps: [
        {
          stepNumber: 1,
          title: 'Product Thinking, Business Metrics & Problem Framing',
          stageType: 'Skill Acquisition',
          description: 'Align design with business outcomes: define problem statements, identify North Star metrics, calculate funnel conversion rates, and conduct stakeholder discovery.',
          skillsToAcquire: ['Product Strategy & OKRs', 'Funnel Conversion Analysis & Drop-offs', 'Qualitative & Quantitative Discovery', 'Opportunity Solution Trees'],
          activities: ['Deconstruct an onboarding funnel for an edtech or fintech app and identify 3 drop-off bottlenecks', 'Draft a Product Opportunity Solution Tree aligning user problems to business revenue metrics'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Clear problem framing document connecting user friction to concrete business metric improvements.',
          dependencies: 'Basic understanding of digital products.',
          resources: [
            { title: 'Continuous Discovery Habits - Teresa Torres', url: 'https://www.producttalk.org/', type: 'Book' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Deep UX Architecture, Edge Cases & User Flows',
          stageType: 'Skill Acquisition',
          description: 'Map exhaustive user flows accounting for all edge cases (network drops, empty states, input errors, permission denials), and create clickable mid-fidelity prototypes.',
          skillsToAcquire: ['Comprehensive User Flows', 'Edge Case & Error State Mapping', 'Micro-Copy & UX Writing', 'Interactive Mid-Fidelity Wireframes'],
          activities: ['Map an exhaustive payment failure and recovery flow covering all edge cases (timeout, OTP failure, insufficient funds)', 'Test the wireframe flow with 5 representative users'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Complete user flow diagram covering 100% of edge cases, empty states, and permission dialogs.',
          dependencies: 'Product strategy fundamentals (Step 1).',
          resources: [
            { title: 'UX Writing Hub Guide', url: 'https://uxwritinghub.com/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'High-Fidelity Visual Craft & Scalable Design Systems',
          stageType: 'Portfolio & Projects',
          description: 'Design production-grade high-fidelity screens in Figma, build accessible design tokens, create responsive layouts, and hand off specifications to engineering.',
          skillsToAcquire: ['High-Fidelity Visual Polish', 'Design Tokens & Multi-Brand Systems', 'Figma Variables & Modes', 'Engineering Handoff & Redlines'],
          activities: ['Design the complete high-fidelity interface for a multi-tenant B2B SaaS dashboard', 'Create a structured component library in Figma with full documentation for frontend engineers'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Pixel-perfect high-fidelity product design accompanied by a production-ready Figma component library.',
          dependencies: 'UX architecture and wireframing.',
          resources: [
            { title: 'Design Systems Handbook - DesignBetter', url: 'https://www.designbetter.co/design-systems-handbook', type: 'Book' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Post-Launch Measurement, A/B Testing & Whiteboarding',
          stageType: 'Recruitment & Job Search',
          description: 'Track post-launch metrics using analytics tools (Mixpanel/Amplitude), design A/B test variants, practice live whiteboard design challenges, and publish case studies.',
          skillsToAcquire: ['Product Analytics (Mixpanel / Amplitude)', 'A/B Test Variant Design', 'Live Whiteboard Design Challenge Prep', 'Comprehensive Product Case Study Storytelling'],
          activities: ['Participate in 5 mock whiteboard design challenges with senior product designers', 'Publish 2 end-to-end product case studies showcasing before/after business impact metrics'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Published product design portfolio demonstrating business metric impact and mastery of live whiteboarding.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'Solving Product Design Exercises - Artiom Dashinsky', url: 'https://productdesigninterview.com/', type: 'Book' }
          ]
        }
      ]
    }
  },
  {
    slug: 'technical-writer',
    title: 'Technical Writer',
    description: 'Translates complex software architectures, APIs, and engineering workflows into clear, concise, and structured developer documentation, tutorials, release notes, and architecture guides.',
    educationRequirements: 'Bachelor\'s in English, Journalism, Mass Communication, Computer Science, or Engineering. Strong command of written English, basic coding literacy, Markdown, Git, and docs-as-code tools.',
    educationPathways: [
      'B.Tech / B.E. in CS/IT with strong English technical writing flair',
      'B.A. / M.A. in English, Journalism, or Technical Communication',
      'Software engineers or QA testers transitioning into developer documentation'
    ],
    eligibilityRequirements: 'No formal statutory licensing. Demonstrated ability to understand code (Python, JavaScript, REST APIs) and produce clear, accessible guides using Markdown and Git.',
    certificationsAndExams: [
      'Society for Technical Communication (STC) Certified Technical Professional',
      'Google Technical Writing Courses (I & II)'
    ],
    workEnvironment: 'Global technology firms, enterprise SaaS providers, open-source foundations, and IT consultancies in Bengaluru, Hyderabad, Pune, and Chennai; extensive remote opportunities.',
    marketDemand: 'Moderate',
    jobOutlook: 'Steady ongoing demand, particularly in developer-tooling companies and enterprise software providers where comprehensive documentation is essential for API adoption.',
    salaryRange: { min: 400000, max: 1500000, currency: 'INR', source: 'AmbitionBox Technical Writer Salaries India, PayScale' },
    salarySource: 'AmbitionBox Technical Writer Salaries India, PayScale',
    salaryByExperience: {
      entryLevel: { min: 400000, max: 680000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 680000, max: 1200000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1200000, max: 2000000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Technical writers who specialize in developer documentation (API specs, SDK quickstarts, code samples in Python/Go) command higher salaries than general user manual writers.'
    },
    careerProgression: [
      'Associate Technical Writer',
      'Technical Writer / Developer Documentation Specialist',
      'Senior Technical Writer / Documentation Lead',
      'Lead Information Architect / Staff Technical Writer',
      'Head of Developer Relations & Technical Content'
    ],
    employmentSectors: {
      government: 'Digital India technical documentation, Indian Patent Office documentation, CDAC technical manual projects',
      privateSector: 'Developer Platform Companies (Postman, BrowserStack, Hasura), Enterprise SaaS (Freshworks, Zoho), IT Services'
    },
    timelineOverview: {
      totalEstimatedDuration: '4 - 6 Months structured writing and docs-as-code study',
      educationDuration: '3-4 Years formal undergraduate degree',
      prepDuration: '2–3 Months technical writing principles, Markdown, Git, and API testing',
      practicalTrainingDuration: '2–3 Months open-source documentation contributions and sample docs creation',
      jobSearchDuration: '2–3 Months writing sample evaluations and technical interviews',
      overlapNotes: 'Open-source documentation contributions serve as portfolio projects.',
      confidenceNote: 'Writing samples must demonstrate clear formatting, step-by-step reproducibility, active voice, and working code snippets.'
    },
    sources: [
      { title: 'Google Technical Writing for Developers', url: 'https://developers.google.com/tech-writing', sourceAuthority: 'Google Developers', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Technical Writer Salary in India', url: 'https://www.ambitionbox.com/salaries/technical-writer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Technical Writer (Docs-as-Code & APIs) Roadmap',
      description: 'Technical communication curriculum: clear expository writing style, Markdown authoring, Git version control, REST API documentation (OpenAPI/Swagger), and static site generators.',
      totalEstimatedDuration: '4 - 6 Months',
      durationBreakdown: 'Technical Writing Fundamentals & Grammar: 4 weeks | Markdown, Git & Docs-as-Code: 4 weeks | REST API Documentation & Swagger/OpenAPI: 4-6 weeks | Static Site Generators & Open Source Contributions: 4-6 weeks',
      overlapNotes: 'Open-source documentation PRs are submitted while learning docs-as-code tools.',
      steps: [
        {
          stepNumber: 1,
          title: 'Technical Writing Style, Grammar & Audience Analysis',
          stageType: 'Skill Acquisition',
          description: 'Master active voice, sentence structure, minimalism, eliminating jargon, task-oriented procedures, and Google Technical Writing guidelines.',
          skillsToAcquire: ['Active Voice & Clear Syntax', 'Task-Oriented Procedure Structuring', 'Audience Personas & Readability Indices', 'Glossary & Terminology Management'],
          activities: ['Complete Google Technical Writing One and Two online courses', 'Rewrite a confusing multi-paragraph open-source tutorial into concise step-by-step instructions'],
          estimatedTime: '4 weeks',
          completionCriteria: 'Clear, concise technical guide written in active voice with zero grammatical ambiguity.',
          dependencies: 'Strong written English language proficiency.',
          resources: [
            { title: 'Google Technical Writing Courses', url: 'https://developers.google.com/tech-writing', type: 'Course' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Docs-as-Code Workflow: Markdown, Git & Version Control',
          stageType: 'Skill Acquisition',
          description: 'Adopt developer documentation workflows: writing in GitHub Flavored Markdown, managing branching in Git, authoring pull requests, and automating spellchecks.',
          skillsToAcquire: ['GitHub Flavored Markdown (GFM)', 'Git CLI (clone, branch, PR, rebase)', 'Automated Linters (Vale / markdownlint)', 'Document Information Architecture'],
          activities: ['Create a complete documentation repository on GitHub using Markdown and Vale style linter', 'Submit documentation pull requests to an active open-source project'],
          estimatedTime: '4 weeks',
          completionCriteria: 'Documented GitHub repository adhering to automated style linter checks without syntax errors.',
          dependencies: 'Technical writing fundamentals (Step 1).',
          resources: [
            { title: 'Write the Docs Community Guide', url: 'https://www.writethedocs.org/guide/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'REST API Documentation & OpenAPI / Swagger Specs',
          stageType: 'Portfolio & Projects',
          description: 'Document RESTful APIs: endpoints, authentication, headers, path parameters, request bodies, JSON responses, error codes, and author OpenAPI 3.0 YAML specifications.',
          skillsToAcquire: ['OpenAPI 3.0 / Swagger YAML Authoring', 'Postman API Documentation', 'Code Sample Creation (curl, Python, JS)', 'HTTP Status Code Explanations'],
          activities: ['Write a complete interactive OpenAPI 3.0 specification for a public REST API', 'Publish the interactive API documentation using Swagger UI or Redocly'],
          estimatedTime: '4 - 6 weeks',
          completionCriteria: 'Interactive, public Swagger/Redoc API documentation with working curl code samples and response schemas.',
          dependencies: 'Markdown and REST API concepts.',
          resources: [
            { title: 'OpenAPI Specification Guide', url: 'https://swagger.io/specification/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Static Site Generators (Docusaurus) & Portfolio',
          stageType: 'Recruitment & Job Search',
          description: 'Build modern developer documentation sites using Docusaurus or MkDocs, configure full-text search (Algolia), and publish a professional technical writing portfolio.',
          skillsToAcquire: ['Docusaurus / MkDocs Configuration', 'Search Integration (Algolia DocSearch)', 'Versioning & Release Notes Management', 'Technical Writing Portfolio Presentation'],
          activities: ['Build and deploy a developer documentation website on Vercel using Docusaurus', 'Curate 4 diverse writing samples (Getting Started guide, API reference, Concept explanation, Troubleshooting guide)'],
          estimatedTime: '4 - 6 weeks',
          completionCriteria: 'Live published documentation website showcasing 4 verified writing samples across different formats.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'Docusaurus Official Documentation', url: 'https://docusaurus.io/', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'business-analyst',
    title: 'Business Analyst',
    description: 'Serves as the vital liaison between business stakeholders and software engineering teams. Elicits requirements, analyzes business processes, drafts specifications (BRD/FRD/User Stories), and validates system solutions.',
    educationRequirements: 'B.Tech/B.E., BCA, BBA/B.Com, or MBA. Strong analytical skills, process flow modeling (BPMN), SQL querying, and Agile Scrum framework fluency.',
    educationPathways: [
      'B.Tech / B.E. in Any Branch followed by MBA in Business Analytics, Systems, or Operations',
      'BBA / B.Com with specialized certifications in Business Analysis (ECBA / CCBA)',
      'Software developers or QA analysts transitioning to business analysis'
    ],
    eligibilityRequirements: 'No formal statutory licensing. Exceptional stakeholder communication, requirement elicitation, UML diagramming, and data-backed validation.',
    certificationsAndExams: [
      'Entry Certificate in Business Analysis (ECBA - IIBA)',
      'Certification of Capability in Business Analysis (CCBA - IIBA)',
      'Certified Scrum Product Owner (CSPO)'
    ],
    workEnvironment: 'IT consulting firms, enterprise digital transformation practices, banking institutions, and healthcare technology teams across Bengaluru, Gurugram, Mumbai, and Pune; hybrid.',
    marketDemand: 'High',
    jobOutlook: 'Consistently strong demand across Indian IT services and domestic BFSI sectors to translate complex business regulations into executable software features.',
    salaryRange: { min: 480000, max: 1800000, currency: 'INR', source: 'AmbitionBox Business Analyst Salaries India, PayScale' },
    salarySource: 'AmbitionBox Business Analyst Salaries India, PayScale',
    salaryByExperience: {
      entryLevel: { min: 480000, max: 800000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 800000, max: 1450000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1450000, max: 2400000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Business Analysts who possess domain specialization in Banking (Core Banking, Payments, AML) or Healthcare command top-tier compensation.'
    },
    careerProgression: [
      'Junior Business Analyst',
      'Business Analyst (IT / Product)',
      'Senior Business Analyst / Lead Consultant',
      'Principal Business Architect / Product Owner',
      'Head of Business Analysis / VP of Product Solutions'
    ],
    employmentSectors: {
      government: 'Digital India public portal requirement consulting, Public Sector Bank core modernization projects, Ministry of Finance IT initiatives',
      privateSector: 'IT Services Giants (TCS, Infosys, Wipro, Cognizant), Global Investment Banks, Retail & E-commerce, Insurance Enterprises'
    },
    timelineOverview: {
      totalEstimatedDuration: '4 - 7 Months focused business analysis training and certification',
      educationDuration: '3-4 Years undergraduate degree or 2 Years MBA',
      prepDuration: '3–4 Months requirement engineering, BPMN, Agile Scrum, and SQL',
      practicalTrainingDuration: '2–3 Months authoring mock BRD/FRD artifacts and user stories',
      jobSearchDuration: '2–4 Months case study and business scenario interviews',
      overlapNotes: 'Jira user story authoring and UML diagramming are practiced concurrently.',
      confidenceNote: 'Earning the IIBA ECBA certification provides international recognition and validates understanding of the BABOK Guide.'
    },
    sources: [
      { title: 'International Institute of Business Analysis (IIBA) BABOK Guide', url: 'https://www.iiba.org/standards-and-resources/babok/', sourceAuthority: 'IIBA', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Business Analyst Salary in India', url: 'https://www.ambitionbox.com/salaries/business-analyst-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Business Analyst (IT & Product) Career Roadmap',
      description: 'Structured business analysis pathway based on the IIBA BABOK Guide: requirement elicitation, process mapping (BPMN), BRD/FRD authoring, Agile Scrum user stories, and SQL data verification.',
      totalEstimatedDuration: '4 - 7 Months',
      durationBreakdown: 'BABOK Principles & Requirement Elicitation: 4 weeks | Process Modeling (BPMN) & UML: 4 weeks | Agile Scrum & Jira User Stories: 4-6 weeks | SQL Data Analysis & Case Studies: 4-6 weeks',
      overlapNotes: 'Business requirements are structured into Jira backlogs throughout the modules.',
      steps: [
        {
          stepNumber: 1,
          title: 'BABOK Fundamentals, Stakeholder Discovery & Elicitation',
          stageType: 'Skill Acquisition',
          description: 'Master elicitation techniques (interviews, workshops, document analysis), stakeholder mapping (RACI matrix), and business requirements drafting.',
          skillsToAcquire: ['BABOK 6 Knowledge Areas', 'Stakeholder Mapping & RACI Matrix', 'Requirement Elicitation Techniques', 'Root Cause Analysis (5 Whys, Fishbone)'],
          activities: ['Conduct a mock stakeholder elicitation session to extract requirements for an online loan approval system', 'Draft a RACI matrix and stakeholder communication plan'],
          estimatedTime: '4 weeks',
          completionCriteria: 'Comprehensive stakeholder analysis and elicitation notes detailing verified business requirements.',
          dependencies: 'Basic business literacy and communication skills.',
          resources: [
            { title: 'IIBA BABOK Guide Overview', url: 'https://www.iiba.org/career-resources/a-beginners-guide-to-business-analysis/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Process Modeling (BPMN), UML Diagrams & Wireframes',
          stageType: 'Skill Acquisition',
          description: 'Map "As-Is" versus "To-Be" business workflows using Business Process Model and Notation (BPMN 2.0), draw UML diagrams (Use Case, Activity, Sequence), and draft basic wireframes.',
          skillsToAcquire: ['BPMN 2.0 Swimlane Flowcharts', 'UML Use Case & Sequence Diagrams', 'As-Is vs To-Be Gap Analysis', 'Functional Wireframing (Balsamiq/Figma)'],
          activities: ['Map the end-to-end "As-Is" and proposed "To-Be" order fulfillment process in draw.io using BPMN swimlanes', 'Draw UML sequence diagrams illustrating client-server-payment gateway interactions'],
          estimatedTime: '4 weeks',
          completionCriteria: 'Standard-compliant BPMN 2.0 swimlane workflow and UML diagrams verified by engineering criteria.',
          dependencies: 'Requirement elicitation (Step 1).',
          resources: [
            { title: 'BPMN 2.0 Poster & Tutorial - Camunda', url: 'https://camunda.com/bpmn/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'BRD / FRD Authoring & Agile Scrum User Stories',
          stageType: 'Portfolio & Projects',
          description: 'Author formal Business Requirement Documents (BRD), Functional Requirement Documents (FRD), and convert requirements into Agile user stories with INVEST criteria and Gherkin acceptance.',
          skillsToAcquire: ['BRD / FRD Authoring & Versioning', 'Agile User Stories (INVEST Criteria)', 'Acceptance Criteria in Gherkin (Given-When-Then)', 'Jira Backlog Management & Story Points'],
          activities: ['Draft a comprehensive 20-page Functional Requirement Document (FRD) for an insurance claims portal', 'Create a Jira project with 25+ prioritized user stories with Gherkin acceptance criteria'],
          estimatedTime: '4 - 6 weeks',
          completionCriteria: 'Full BRD/FRD artifact and backlog of INVEST-compliant user stories configured in Jira.',
          dependencies: 'Process modeling fundamentals.',
          resources: [
            { title: 'Atlassian User Stories Guide', url: 'https://www.atlassian.com/agile/project-management/user-stories', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'SQL Data Verification & IIBA ECBA Certification Prep',
          stageType: 'Licensing & Certification',
          description: 'Write analytical SQL queries to validate database inputs against business logic, and prepare for the Entry Certificate in Business Analysis (ECBA) examination.',
          skillsToAcquire: ['SQL Queries & Joins for QA Validation', 'Data Mapping & Schema Understanding', 'User Acceptance Testing (UAT) Coordination', 'IIBA ECBA Exam Preparation'],
          activities: ['Write SQL validation queries checking loan calculation tables for precision discrepancies', 'Complete full-length ECBA exam simulations and apply for IIBA membership'],
          estimatedTime: '4 - 6 weeks',
          completionCriteria: 'Pass IIBA ECBA Certification exam and complete a portfolio of 2 end-to-end business analysis case studies.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'IIBA ECBA Certification Blueprint', url: 'https://www.iiba.org/business-analysis-certifications/ecba/', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'product-manager',
    title: 'Product Manager',
    description: 'Owns the product vision, strategy, roadmap, and execution across the entire lifecycle. Collaborates with engineering, design, marketing, and sales to launch valuable, usable, and feasible software features that drive commercial growth.',
    educationRequirements: 'B.Tech/B.E. in engineering discipline followed by MBA from a premier institute (IIM, ISB, XLRI), or proven track record of shipping software products. Strong strategic thinking, quantitative analytics, and leadership skills.',
    educationPathways: [
      'B.Tech / B.E. (4 years) followed by MBA in Marketing / Strategy / Product (2 years)',
      'Software Engineers, Data Analysts, or UX Designers transitioning to Product Management via APM (Associate Product Manager) programs',
      'Specialized Executive Product Management certifications (ISB, UpGrad, Reforge)'
    ],
    eligibilityRequirements: 'No formal statutory licensing. Demonstrated ability to define product vision, write PRDs, prioritize roadmaps (RICE framework), and analyze growth metrics (LTV, CAC, Retention).',
    certificationsAndExams: [
      'Certified Scrum Product Owner (CSPO)',
      'Pragmatic Institute Certified Product Manager',
      'Reforge Product Strategy / Growth Certification'
    ],
    workEnvironment: 'High-growth tech startups, SaaS unicorns, consumer internet firms, and innovation hubs across Bengaluru, Gurugram, Mumbai, and Hyderabad; hybrid/office.',
    marketDemand: 'High',
    jobOutlook: 'Extremely high demand and prestige in the Indian tech ecosystem, with startups and conglomerates competing intensely for experienced product leaders.',
    salaryRange: { min: 800000, max: 3500000, currency: 'INR', source: 'Michael Page India Tech Benchmark 2024, AmbitionBox' },
    salarySource: 'Michael Page India Tech Benchmark 2024, AmbitionBox',
    salaryByExperience: {
      entryLevel: { min: 800000, max: 1500000, label: 'Associate PM (0–2 yrs)' },
      earlyCareer: { min: 1500000, max: 2600000, label: 'Product Manager (3–5 yrs)' },
      experienced: { min: 2600000, max: 4800000, label: 'Experienced / Group PM (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Tier-1 MBA campus hires (IIM A/B/C, ISB) regularly secure APM/PM offers of ₹20–35 LPA; Principal PMs and VP of Product earn ₹50–1 Crore+ inclusive of ESOPs.'
    },
    careerProgression: [
      'Associate Product Manager (APM)',
      'Product Manager (PM)',
      'Senior Product Manager (SPM)',
      'Principal Product Manager / Group Product Manager (GPM)',
      'Vice President of Product / Chief Product Officer (CPO)'
    ],
    employmentSectors: {
      government: 'Digital Public Infrastructure (UPI, ONDC, Open Financial Network product leads), National Health Authority tech leads',
      privateSector: 'Top Consumer Tech (Swiggy, Zomato, Flipkart, Zepto), Fintech (PhonePe, Cred, Zerodha), B2B SaaS (Postman, BrowserStack, Zoho)'
    },
    timelineOverview: {
      totalEstimatedDuration: '6 - 12 Months dedicated study and product teardown portfolio',
      educationDuration: '4 Years B.Tech + optional 2 Years MBA',
      prepDuration: '4–6 Months product sense, roadmap frameworks, PRD writing, and metrics',
      practicalTrainingDuration: '2–4 Months executing product teardowns and APM case challenge submissions',
      jobSearchDuration: '3–5 Months product sense, design critique, and analytical estimation interviews',
      overlapNotes: 'Product teardowns and PRD authoring run in parallel.',
      confidenceNote: 'Interviews heavily evaluate structured thinking: RCA (Root Cause Analysis), GTM (Go-To-Market), product design questions, and metrics estimation.'
    },
    sources: [
      { title: 'Michael Page India Salary Benchmark 2024', url: 'https://www.michaelpage.co.in/salary-guide', sourceAuthority: 'Michael Page India', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Product Manager Salary in India', url: 'https://www.ambitionbox.com/salaries/product-manager-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Product Manager Career Roadmap',
      description: 'Comprehensive product leadership pathway: product discovery, Product Requirement Document (PRD) authoring, roadmap prioritization (RICE), growth metrics, and interview execution.',
      totalEstimatedDuration: '6 - 12 Months',
      durationBreakdown: 'Product Fundamentals & Discovery: 6 weeks | PRD Authoring & Feature Specifications: 6 weeks | Prioritization Frameworks & Roadmapping: 4 weeks | Product Analytics, Growth & Interview Prep: 8-10 weeks',
      overlapNotes: 'Product teardowns and competitive analysis are compiled as portfolio assets.',
      steps: [
        {
          stepNumber: 1,
          title: 'Product Discovery, Problem Identification & User Research',
          stageType: 'Skill Acquisition',
          description: 'Identify unmet customer pain points, conduct qualitative user discovery, analyze competitive market dynamics, and establish clear product hypotheses.',
          skillsToAcquire: ['Customer Problem Framing', 'Qualitative User Interviews & Synthesizing', 'Competitive Landscape Benchmarking', 'Market Sizing & Opportunity Assessment'],
          activities: ['Perform a deep product teardown of a top Indian consumer app analyzing onboarding friction', 'Interview 8 users and construct a feature validation canvas'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Published product teardown deck dissecting user friction and proposing 3 high-impact feature hypotheses.',
          dependencies: 'Analytical thinking and business literacy.',
          resources: [
            { title: 'Inspired: How to Create Tech Products Customers Love - Marty Cagan', url: 'https://svpg.com/books/inspired-how-to-create-tech-products-customers-love-2nd-edition/', type: 'Book' }
          ]
        },
        {
          stepNumber: 2,
          title: 'PRD Authoring & Technical Feasibility Collaboration',
          stageType: 'Portfolio & Projects',
          description: 'Author detailed Product Requirement Documents (PRDs): user stories, functional specifications, success metrics, edge case handling, and engineering trade-offs.',
          skillsToAcquire: ['PRD Structuring & Authoring', 'Feature Scope & Non-Goals Definition', 'Technical Feasibility & API Understanding', 'Success Metrics & Guardrail Metrics'],
          activities: ['Write a complete 10-page PRD for a new feature (e.g. Group Ordering on Swiggy or Bill Splitting on PhonePe)', 'Review the PRD with software engineers to identify technical constraints and feasibility'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Production-ready PRD with documented user flows, edge cases, and success metrics.',
          dependencies: 'Product discovery (Step 1).',
          resources: [
            { title: 'Lenny Newsletter Product Management Guides', url: 'https://www.lennysnewsletter.com/', type: 'Article' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Roadmap Prioritization Frameworks & Agile Execution',
          stageType: 'Skill Acquisition',
          description: 'Prioritize feature backlogs using structured frameworks (RICE, Kano Model, Value vs Effort matrix), lead sprint planning with engineering, and resolve trade-offs.',
          skillsToAcquire: ['RICE Prioritization (Reach, Impact, Confidence, Effort)', 'Kano Model Feature Categorization', 'Sprint Planning & Release Management', 'Cross-Functional Stakeholder Alignment'],
          activities: ['Evaluate a 20-item feature backlog using the RICE framework with transparent scoring rationales', 'Simulate a sprint planning trade-off exercise between tech debt and growth features'],
          estimatedTime: '4 weeks',
          completionCriteria: 'Documented quarterly product roadmap with prioritized epics and clear justification.',
          dependencies: 'PRD authoring proficiency.',
          resources: [
            { title: 'Intercom on Product Management', url: 'https://www.intercom.com/books/product-management', type: 'Book' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Product Metrics, Growth Analytics & PM Interviews',
          stageType: 'Recruitment & Job Search',
          description: 'Master product metrics (North Star, DAU/MAU, Retention cohorts, LTV/CAC), design A/B test experiments, and master product sense interview questions.',
          skillsToAcquire: ['Retention Cohort Analysis', 'A/B Testing Statistical Significance', 'Product Sense & Design Interviewing', 'GTM (Go-To-Market) Strategy Execution'],
          activities: ['Design an A/B test experiment with sample size calculations and guardrail metrics', 'Conduct 15+ peer mock interviews on Product School / StellarPeers focusing on product design and root cause analysis'],
          estimatedTime: '8 - 10 weeks',
          completionCriteria: 'Portfolio featuring 2 complete PRDs and 2 published product teardowns with mastery of PM interview frameworks.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'Cracking the PM Interview - Gayle McDowell', url: 'https://www.crackingthepminterview.com/', type: 'Book' }
          ]
        }
      ]
    }
  },
  {
    slug: 'it-support-specialist',
    title: 'IT Support Specialist',
    description: 'Diagnoses, troubleshoots, and resolves hardware, software, operating system, and network connectivity issues for enterprise employees. Manages user provisioning, active directory credentials, and endpoint security.',
    educationRequirements: 'Diploma in Computer Science / IT, BCA, B.Sc IT, or B.Tech. Strong troubleshooting skills in Windows/macOS/Linux operating systems, Active Directory, hardware repair, and basic networking.',
    educationPathways: [
      'Diploma in Computer Engineering / Electronics (3 years)',
      'BCA / B.Sc Computer Science (3 years)',
      'Hardware and Networking Certification programs (CompTIA A+, Network+, ITIL Foundation)'
    ],
    eligibilityRequirements: 'No formal statutory licensing. Strong customer communication, hardware assembly/troubleshooting, OS installations, and helpdesk ticketing proficiency.',
    certificationsAndExams: [
      'CompTIA A+ Certification',
      'Microsoft Certified: Modern Desktop Administrator Associate',
      'ITIL 4 Foundation Certification'
    ],
    workEnvironment: 'Corporate IT helpdesks, technical support centers, managed services facilities, and enterprise offices across all major Indian cities; on-site and hybrid.',
    marketDemand: 'Moderate',
    jobOutlook: 'Stable high-volume employment across Indian IT parks and corporate centers requiring continuous technical support for desktop and laptop fleets.',
    salaryRange: { min: 280000, max: 850000, currency: 'INR', source: 'AmbitionBox IT Support Salaries India, PayScale' },
    salarySource: 'AmbitionBox IT Support Salaries India, PayScale',
    salaryByExperience: {
      entryLevel: { min: 280000, max: 480000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 480000, max: 750000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 750000, max: 1100000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'IT Support Specialists frequently use this foundational role to transition into System Administration, Cloud Engineering, or Cybersecurity.'
    },
    careerProgression: [
      'IT Helpdesk Technician / Desktop Support Trainee',
      'IT Support Specialist / Desktop Engineer (L2)',
      'Senior IT Support Engineer / Systems Administrator (L3)',
      'IT Service Delivery Manager',
      'Head of IT Infrastructure & Operations'
    ],
    employmentSectors: {
      government: 'State Secretariat IT maintenance cells, High Court IT support, Public Sector Bank branch IT support contractors',
      privateSector: 'IT Services Companies (Wipro, Infosys, Cognizant internal IT), Corporate Offices, BPOs, Healthcare Networks'
    },
    timelineOverview: {
      totalEstimatedDuration: '3 - 6 Months focused troubleshooting and certification prep',
      educationDuration: '3 Years Diploma or Degree',
      prepDuration: '2–3 Months PC hardware, operating systems, networking, and ITIL',
      practicalTrainingDuration: '1–2 Months hands-on PC assembly and ticket management practice',
      jobSearchDuration: '1–2 Months desktop troubleshooting and customer service interviews',
      overlapNotes: 'Hardware troubleshooting and OS installations are practiced hands-on.',
      confidenceNote: 'Earning the CompTIA A+ or ITIL Foundation certification provides immediate entry into Tier-1 IT helpdesk roles.'
    },
    sources: [
      { title: 'CompTIA A+ Certification Guide', url: 'https://www.comptia.org/certifications/a', sourceAuthority: 'CompTIA', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox IT Support Specialist Salary in India', url: 'https://www.ambitionbox.com/salaries/it-support-engineer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'IT Support Specialist Career Roadmap',
      description: 'Desktop and systems support curriculum: computer hardware diagnostics, Windows/macOS administration, Active Directory user management, networking, and ITIL ticketing.',
      totalEstimatedDuration: '3 - 6 Months',
      durationBreakdown: 'PC Hardware & OS Installation: 4 weeks | Active Directory, Users & Cloud Identity: 4 weeks | Network Troubleshooting & Peripherals: 3 weeks | ITIL Ticketing & Customer Service: 3 weeks',
      overlapNotes: 'Virtual machines are used to practice Active Directory domain controllers.',
      steps: [
        {
          stepNumber: 1,
          title: 'Computer Hardware Architecture & OS Troubleshooting',
          stageType: 'Skill Acquisition',
          description: 'Understand CPU, RAM, storage (NVMe/SSD), motherboard components, BIOS/UEFI settings, Windows 10/11 installation, and macOS recovery.',
          skillsToAcquire: ['PC Hardware Assembly & Diagnostics', 'BIOS/UEFI Configuration & Secure Boot', 'OS Installation, Imaging & Recovery', 'Driver Troubleshooting & Device Manager'],
          activities: ['Disassemble and reassemble a desktop computer tower with diagnostic checks', 'Perform a clean OS installation and configure automated disk partitioning'],
          estimatedTime: '4 weeks',
          completionCriteria: 'Successfully assemble a working desktop computer and configure dual-boot operating systems without driver errors.',
          dependencies: 'Basic computer literacy.',
          resources: [
            { title: 'Professor Messer CompTIA A+ Training Course', url: 'https://www.professormesser.com/free-a-plus-training/', type: 'Video' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Active Directory, Windows Server & Cloud Identity (Entra ID)',
          stageType: 'Skill Acquisition',
          description: 'Manage enterprise users, groups, permissions, Group Policy Objects (GPOs), password resets, and cloud identities in Microsoft Entra ID (Azure AD).',
          skillsToAcquire: ['Active Directory Users & Computers (ADUC)', 'Group Policy Objects (GPO) Deployment', 'Microsoft Entra ID (Azure AD) Basics', 'Multi-Factor Authentication (MFA) Resets'],
          activities: ['Setup a Windows Server 2022 domain controller in a virtual machine', 'Create organizational units, assign GPO password policies, and join client workstations to the domain'],
          estimatedTime: '4 weeks',
          completionCriteria: 'Functional local domain controller managing user logins and applying automated group policies.',
          dependencies: 'OS fundamentals (Step 1).',
          resources: [
            { title: 'Microsoft Learn - Active Directory Basics', url: 'https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Network Troubleshooting, VPNs & Endpoint Security',
          stageType: 'Skill Acquisition',
          description: 'Diagnose local connectivity issues, configure static IPs, troubleshoot corporate VPNs, manage network printers, and configure endpoint antivirus/EDR software.',
          skillsToAcquire: ['IP Configuration (ipconfig, ping, tracert)', 'Corporate VPN Client Troubleshooting', 'Network Printer & Peripheral Mapping', 'Antivirus & BitLocker Drive Encryption'],
          activities: ['Troubleshoot simulated network outages (DNS failure, IP conflict, gateway unreachable)', 'Configure BitLocker drive encryption and test TPM recovery key unlock'],
          estimatedTime: '3 weeks',
          completionCriteria: 'Rapidly resolve 5 network connectivity issues using command line diagnostic tools in under 15 minutes.',
          dependencies: 'Basic networking and hardware knowledge.',
          resources: [
            { title: 'Microsoft Network Troubleshooting Documentation', url: 'https://learn.microsoft.com/en-us/troubleshoot/windows-client/networking/tcpip-troubleshoot-connect-issues', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'ITIL Incident Management & Helpdesk Operations',
          stageType: 'Licensing & Certification',
          description: 'Operate enterprise ticketing systems (ServiceNow / Jira Service Management), follow ITIL incident and request fulfillment workflows, and prepare for CompTIA A+.',
          skillsToAcquire: ['ITIL 4 Service Management Concepts', 'ServiceNow / Jira Ticketing Workflows', 'SLA Adherence & Escalation Protocols', 'Customer Communication & De-escalation'],
          activities: ['Practice managing 20+ simulated user support tickets in a demo Jira Service Desk instance', 'Author 5 clear knowledge-base articles documenting self-service IT solutions for end users'],
          estimatedTime: '3 weeks',
          completionCriteria: 'Complete ITIL foundation prep and establish documented customer service ticketing workflows.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'AXELOS ITIL Foundation Overview', url: 'https://www.axelos.com/certifications/itil-service-management', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'solutions-architect',
    title: 'Solutions Architect',
    description: 'Designs complex, end-to-end enterprise technology solutions aligning business requirements with scalable software, data, cloud, and security architectures. Guides enterprise digital transformation, cloud migrations, and vendor selections.',
    educationRequirements: 'B.Tech/B.E. in CS/IT/ECE or M.Tech. 8-12+ years of progressive software engineering, distributed systems, and cloud architecture experience with professional-level certifications.',
    educationPathways: [
      'B.Tech / B.E. in Computer Science or IT (4 years) followed by 8-12+ years progressive engineering leadership',
      'M.Tech in Software Engineering / Distributed Systems',
      'Senior Tech Leads and Engineering Managers transitioning into enterprise architecture'
    ],
    eligibilityRequirements: 'No formal statutory licensing. Deep expertise in enterprise integration patterns, cloud architectures (AWS/Azure), system trade-offs (CAP theorem, microservices), and executive stakeholder presentation.',
    certificationsAndExams: [
      'AWS Certified Solutions Architect - Professional',
      'The Open Group Architecture Framework (TOGAF 9 / 10 Certification)',
      'Microsoft Certified: Azure Solutions Architect Expert'
    ],
    workEnvironment: 'Global technology enterprises, cloud hyperscalers, management consultancies, and large corporate IT departments in Bengaluru, Hyderabad, Gurugram, and Mumbai; executive hybrid/travel.',
    marketDemand: 'High',
    jobOutlook: 'Consistently high executive demand as Indian enterprises undergo multi-million dollar core banking, healthcare, and enterprise cloud modernisation initiatives.',
    salaryRange: { min: 1500000, max: 4800000, currency: 'INR', source: 'Michael Page India Tech Leadership Benchmark 2024, AmbitionBox' },
    salarySource: 'Michael Page India Tech Leadership Benchmark 2024, AmbitionBox',
    salaryByExperience: {
      entryLevel: { min: 1500000, max: 2400000, label: 'Early Architect (6–8 yrs)' },
      earlyCareer: { min: 2400000, max: 3600000, label: 'Solutions Architect (8–12 yrs)' },
      experienced: { min: 3600000, max: 6000000, label: 'Principal / Chief Architect (12–15+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Principal Enterprise Solutions Architects at AWS, Microsoft, Google, or Big 4 consulting firms frequently command compensation exceeding ₹50–80+ LPA.'
    },
    careerProgression: [
      'Senior Software Engineer / Tech Lead',
      'Associate Solutions Architect',
      'Solutions Architect (Cloud / Enterprise)',
      'Principal Solutions Architect / Chief Architect',
      'Vice President of Architecture / Chief Technology Officer (CTO)'
    ],
    employmentSectors: {
      government: 'Digital India Advisory Councils, National Highway Authority intelligent transportation systems, RBI technology modernization architecture committees',
      privateSector: 'Cloud Hyperscalers (AWS, Microsoft Azure, Google Cloud), Global Consultancies (Accenture, Deloitte, Wipro), Banking & Financial Services'
    },
    timelineOverview: {
      totalEstimatedDuration: '8 - 12+ Years cumulative engineering experience + 6 Months focused architecture prep',
      educationDuration: '4 Years formal degree',
      prepDuration: '4–6 Months enterprise architecture frameworks (TOGAF), distributed system patterns, and professional certifications',
      practicalTrainingDuration: 'Cumulative 8+ years hands-on production system delivery and cloud migrations',
      jobSearchDuration: '3–5 Months executive system design presentations and board-level trade-off interviews',
      overlapNotes: 'Architectural blueprints are prepared based on real-world industry migration case studies.',
      confidenceNote: 'Interviews evaluate high-level architectural trade-offs: cost vs performance, consistency vs availability, and vendor lock-in mitigation.'
    },
    sources: [
      { title: 'The Open Group TOGAF Standard', url: 'https://www.opengroup.org/togaf', sourceAuthority: 'The Open Group', verifiedDate: '2024-10-14' },
      { title: 'Michael Page India Tech Leadership Report', url: 'https://www.michaelpage.co.in/salary-guide', sourceAuthority: 'Michael Page India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Solutions Architect Career Roadmap',
      description: 'Senior architectural curriculum: enterprise frameworks (TOGAF), distributed system design patterns, cloud migration strategies (6 Rs), multi-region disaster recovery, and executive technical governance.',
      totalEstimatedDuration: '6 - 12 Months (Advanced Senior Path)',
      durationBreakdown: 'Enterprise Frameworks (TOGAF) & Architecture Principles: 6 weeks | Distributed Systems Design Patterns: 8 weeks | Cloud Migration & Multi-Cloud Architecture: 8 weeks | Executive Communication & Professional Certification: 6 weeks',
      overlapNotes: 'Real-world architecture design documents (ADD) are authored throughout the modules.',
      steps: [
        {
          stepNumber: 1,
          title: 'Enterprise Architecture Frameworks (TOGAF) & Governance',
          stageType: 'Skill Acquisition',
          description: 'Master The Open Group Architecture Framework (TOGAF), Architecture Development Method (ADM), architecture governance, and technical debt risk management.',
          skillsToAcquire: ['TOGAF ADM Phases (A through H)', 'Architecture Governance & Review Boards (ARB)', 'Business Architecture vs Application vs Technology', 'Trade-off Analysis & Risk Registries'],
          activities: ['Draft an Architecture Vision and Business Capability Map for a retail bank modernizing legacy core banking', 'Prepare an Architecture Decision Record (ADR) template evaluating build vs buy choices'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Documented Architecture Decision Record (ADR) justifying technological trade-offs with cost-benefit analysis.',
          dependencies: 'Extensive prior software engineering and system delivery experience.',
          resources: [
            { title: 'TOGAF Standard 10th Edition Guide', url: 'https://www.opengroup.org/certifications/togaf', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Distributed Systems Patterns & High-Scale Architecture',
          stageType: 'Skill Acquisition',
          description: 'Design distributed architectures: Event-Driven Architecture (EDA), CQRS, Event Sourcing, Saga Pattern for distributed transactions, and multi-region active-active deployments.',
          skillsToAcquire: ['Saga Pattern (Choreography vs Orchestration)', 'CQRS & Event Sourcing', 'CAP Theorem & PACELC Trade-Offs', 'Multi-Region Active-Active Replication'],
          activities: ['Design an end-to-end distributed order management system using the Saga pattern with compensating transactions', 'Author a technical architecture document outlining multi-region active-active failover with sub-second RPO/RTO'],
          estimatedTime: '8 weeks',
          completionCriteria: 'Comprehensive distributed architecture specification detailing resilience, failover, and data consistency models.',
          dependencies: 'Enterprise architecture principles (Step 1).',
          resources: [
            { title: 'Designing Data-Intensive Applications - Martin Kleppmann', url: 'https://dataintensive.net/', type: 'Book' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Cloud Migration Strategies (The 6 Rs) & Cost Governance',
          stageType: 'Portfolio & Projects',
          description: 'Execute enterprise cloud migrations: Rehost, Replatform, Repurchase, Refactor, Retire, Retain; perform Total Cost of Ownership (TCO) calculations, and architect FinOps governance.',
          skillsToAcquire: ['Cloud Migration Frameworks (The 6 Rs)', 'Total Cost of Ownership (TCO) & ROI Modeling', 'FinOps & Cost Governance Strategies', 'Hybrid Cloud Networking (Direct Connect, ExpressRoute)'],
          activities: ['Develop a detailed 18-month cloud migration roadmap for a 200-server legacy on-premise application suite', 'Calculate 3-year TCO comparison between on-premise hardware refresh vs AWS/Azure migration'],
          estimatedTime: '8 weeks',
          completionCriteria: 'End-to-end cloud migration blueprint with documented risk mitigations, TCO calculations, and phased rollback plans.',
          dependencies: 'Distributed systems and cloud platforms.',
          resources: [
            { title: 'AWS Cloud Adoption Framework (CAF)', url: 'https://aws.amazon.com/cloud-adoption-framework/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Executive Communication & Professional Level Certification',
          stageType: 'Licensing & Certification',
          description: 'Present architectural blueprints to C-suite stakeholders, achieve AWS/Azure Solutions Architect Professional certification, and chair architecture review boards.',
          skillsToAcquire: ['C-Suite Executive Presentation & Influence', 'Vendor RFP Evaluation & Selection', 'Security & Compliance Auditing (SOC2 / ISO 27001)', 'AWS/Azure Solutions Architect Professional Exam'],
          activities: ['Deliver an executive pitch deck justifying a ₹5 Crore microservices modernization project to executive leadership', 'Pass the AWS Certified Solutions Architect - Professional or TOGAF 10 Certification exam'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Achieve AWS/Azure Professional Solutions Architect certification and lead successful architecture reviews.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'AWS Solutions Architect Professional Blueprint', url: 'https://aws.amazon.com/certification/certified-solutions-architect-professional/', type: 'Documentation' }
          ]
        }
      ]
    }
  }
];

module.exports = techPart3;
