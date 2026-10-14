// Technology Sector Careers (Part 2: Careers 11 to 29)
// Standardized Education Qualifications & Job-Preparation Roadmaps (Months Only)

module.exports = {
  'machine-learning-engineer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Computer Science, IT, Mathematics, Data Science, or related engineering discipline.",
      preferredDegree: "B.Tech in Computer Science / AI / Data Science or M.Tech in CSE.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; recruitment evaluates software engineering, ML pipelines, and model deployment.",
      mandatoryRequirements: [
        "10+2 with Mathematics/Physics.",
        "Graduation degree completed prior to formal corporate onboarding."
      ],
      preferredQualifications: [
        "Experience taking machine learning models from experimentation to production APIs.",
        "Proficiency with PyTorch or TensorFlow, Docker, and MLOps tooling (MLflow, Weights & Biases)."
      ],
      eligibilityCriteria: "Recruiters evaluate candidate's software engineering discipline, understanding of vector embeddings, neural network architectures, and low-latency inference.",
      regulatoryNotes: "Recruitment criteria depend on the specific company product and ML infrastructure."
    },
    roadmap: {
      title: "Machine Learning Engineer Job-Preparation Roadmap",
      description: "Focused curriculum bridging machine learning algorithms with production software engineering, containerization, and model serving.",
      totalDurationMonths: 5,
      totalDurationFormatted: "5 months",
      steps: [
        {
          stepNumber: 1,
          title: "Deep Learning Foundations & PyTorch Tensors",
          durationMonths: 2,
          durationText: "2 months",
          category: "learning",
          description: "Understand neural networks, backpropagation, gradient descent optimizers, and deep learning modeling with PyTorch.",
          tasks: [
            "Implement multi-layer perceptrons, CNNs, and basic RNN/LSTM architectures in PyTorch",
            "Master data loaders, loss functions, learning rate schedulers, and GPU acceleration with CUDA",
            "Prevent overfitting using dropout, batch normalization, and data augmentation"
          ],
          milestone: "Train a computer vision or NLP classification model in PyTorch achieving state-of-the-art accuracy.",
          prerequisites: ["Strong Python programming, calculus, and classical ML knowledge"],
          resources: [
            { title: "PyTorch Official Tutorials", url: "https://pytorch.org/tutorials/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Model Optimization & Quantization",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Optimize models for fast inference: pruning, ONNX runtime export, INT8 quantization, and TensorRT.",
          tasks: [
            "Export PyTorch models to ONNX and benchmark inference latency against native Python runtime",
            "Apply post-training quantization to reduce model disk and memory footprint by 4x",
            "Profile CPU and GPU memory consumption during batch inference"
          ],
          milestone: "Achieve 3x latency reduction and 60% memory savings through ONNX export and quantization.",
          prerequisites: ["Step 1: Deep Learning Foundations & PyTorch Tensors"],
          resources: [
            { title: "ONNX Runtime Documentation", url: "https://onnxruntime.ai/docs/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "MLOps Pipelines & Production Serving",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Build automated training and inference pipelines using Docker, FastAPI, and MLflow experiment tracking.",
          tasks: [
            "Track model training experiments, hyperparameters, and artifacts using MLflow",
            "Package model into a Docker container serving predictions via FastAPI with health checks",
            "Implement automated data drift monitoring and model logging"
          ],
          milestone: "Deploy a production-grade Dockerized ML prediction microservice with MLflow tracking.",
          prerequisites: ["Step 2: Model Optimization & Quantization"],
          resources: [
            { title: "MLflow Guide", url: "https://mlflow.org/docs/latest/index.html", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "End-to-End Capstone & Technical Interviews",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Complete an end-to-end MLOps capstone project and interview for entry-level machine learning engineering roles.",
          tasks: [
            "Publish GitHub repository with full CI/CD pipeline retraining model on new data commits",
            "Practice ML system design questions: recommendation systems, fraud detection, and search ranking",
            "Apply to 20+ ML engineer and AI engineer openings across Indian tech product companies"
          ],
          milestone: "Complete 5 mock ML system design interviews and submit job applications.",
          prerequisites: ["Step 3: MLOps Pipelines & Production Serving"],
          resources: [
            { title: "Made With ML MLOps Curriculum", url: "https://madewithml.com/", type: "platform", isFree: true }
          ]
        }
      ]
    }
  },

  'ai-engineer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Computer Science, IT, Software Engineering, or related STEM field.",
      preferredDegree: "B.Tech in Computer Science / Artificial Intelligence or MCA.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; recruitment evaluates Large Language Model (LLM) orchestration, APIs, and practical AI application development.",
      mandatoryRequirements: [
        "10+2 with Mathematics/Science.",
        "Graduation degree completed prior to formal corporate onboarding."
      ],
      preferredQualifications: [
        "Demonstrated projects building LLM-powered applications using LangChain, LlamaIndex, or semantic vector search.",
        "Experience fine-tuning open-source models (Hugging Face) and implementing Retrieval-Augmented Generation (RAG)."
      ],
      eligibilityCriteria: "Companies evaluate candidate's ability to build generative AI solutions, design resilient prompt chains, and manage vector databases.",
      regulatoryNotes: "Recruitment criteria depend on specific enterprise AI adoption workflows."
    },
    roadmap: {
      title: "AI Engineer Job-Preparation Roadmap",
      description: "Hands-on preparation in generative AI, prompt engineering, Retrieval-Augmented Generation (RAG), vector databases, and multi-agent workflows.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Generative AI APIs & Structured Prompting",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master modern foundation model APIs (OpenAI, Anthropic, Gemini, open weights), tokenization, and structured output parsing.",
          tasks: [
            "Interact programmatically with LLM APIs using Python SDKs with error handling and rate-limiting",
            "Implement advanced prompting techniques: Few-Shot, Chain-of-Thought, and ReAct",
            "Enforce structured JSON output schemas using Pydantic and Function Calling"
          ],
          milestone: "Build a reliable AI-powered information extraction engine returning strictly validated JSON schemas.",
          prerequisites: ["Proficiency in Python programming and REST APIs"],
          resources: [
            { title: "OpenAI Developer Platform", url: "https://platform.openai.com/docs", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Vector Databases & Retrieval-Augmented Generation (RAG)",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Implement document chunking, semantic vector embeddings, vector databases (Pinecone, Chroma, Qdrant), and RAG pipelines.",
          tasks: [
            "Process internal documents (PDFs, Markdown) with recursive semantic chunking strategies",
            "Generate dense vector embeddings and index them in a vector database",
            "Build an end-to-end RAG system with reciprocal rank fusion (RRF) and re-ranking"
          ],
          milestone: "Deliver a domain-specific Q&A chatbot over 100+ technical PDF documents with source citations.",
          prerequisites: ["Step 1: Generative AI APIs & Structured Prompting"],
          resources: [
            { title: "LlamaIndex Documentation", url: "https://docs.llamaindex.ai/", type: "official", isFree: true },
            { title: "Chroma DB Documentation", url: "https://docs.trychroma.com/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "AI Agents & Tool Calling Architectures",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Construct autonomous agentic systems using LangGraph or CrewAI capable of tool execution and multi-step reasoning.",
          tasks: [
            "Build multi-agent collaboration workflows with stateful memory and human-in-the-loop validation",
            "Connect agents to live external tools (SQL database querying, web search, weather APIs)",
            "Implement guardrails and safety filters (NeMo Guardrails) to mitigate hallucinations"
          ],
          milestone: "Build a multi-agent autonomous research assistant that executes search, writes analysis, and saves reports.",
          prerequisites: ["Step 2: Vector Databases & Retrieval-Augmented Generation (RAG)"],
          resources: [
            { title: "LangChain Documentation", url: "https://python.langchain.com/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Evaluation, Guardrails & Job Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Benchmark RAG performance with RAGAS, optimize cost and latency, and apply for AI engineering positions.",
          tasks: [
            "Evaluate RAG pipeline using RAGAS (Faithfulness, Answer Relevance, Context Precision)",
            "Package application into a Docker container and deploy with Streamlit/Next.js frontend",
            "Apply to 20+ AI engineer and GenAI developer openings across product tech firms and enterprise labs"
          ],
          milestone: "Complete a production-grade AI portfolio project with automated evaluation metrics and submit applications.",
          prerequisites: ["Step 3: AI Agents & Tool Calling Architectures"],
          resources: [
            { title: "RAGAS Evaluation Framework", url: "https://docs.ragas.io/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'ai-research-scientist': {
    educationQualification: {
      minimumQualification: "Master's degree in Computer Science, Data Science, AI, Mathematics, or Physics.",
      preferredDegree: "Ph.D. or Master of Technology (M.Tech) by Research in Machine Learning / AI.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; recruitment is judged by peer-reviewed research publications (NeurIPS, ICML, CVPR, ACL).",
      mandatoryRequirements: [
        "Strong graduate coursework in probability theory, linear algebra, and mathematical optimization.",
        "Demonstrated ability to read and implement novel algorithms from academic papers."
      ],
      preferredQualifications: [
        "First-author research publication in a recognized international AI conference or journal.",
        "Experience with novel model architectures, self-supervised learning, or mathematical proof development."
      ],
      eligibilityCriteria: "Corporate research labs (Microsoft Research India, Google DeepMind India, IBM Research) evaluate publication record, algorithmic creativity, and fundamental mathematical rigor.",
      regulatoryNotes: "Recruitment criteria depend on specific research lab missions and funding mandates."
    },
    roadmap: {
      title: "AI Research Scientist Job-Preparation Roadmap",
      description: "Research preparation focusing on mathematical theory, novel architecture reproduction, experiment benchmarking, and academic writing.",
      totalDurationMonths: 6,
      totalDurationFormatted: "6 months",
      steps: [
        {
          stepNumber: 1,
          title: "Theoretical Foundations & Optimization Theory",
          durationMonths: 2,
          durationText: "2 months",
          category: "learning",
          description: "Master rigorous optimization: convex analysis, stochastic gradient descent convergence proofs, and information theory.",
          tasks: [
            "Study convergence proofs for Adam, AdamW, and second-order optimization methods",
            "Understand information geometry, KL divergence, mutual information, and variational inference",
            "Read and summarize 10 foundational papers on transformer attention mechanics and scaling laws"
          ],
          milestone: "Produce written analytical summaries and mathematical derivations for 5 foundational ML research papers.",
          prerequisites: ["Advanced linear algebra and multivariate calculus"],
          resources: [
            { title: "ArXiv AI Paper Repository", url: "https://arxiv.org/list/cs.AI/recent", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Paper Reproduction & Novel Algorithmic Experiments",
          durationMonths: 2,
          durationText: "2 months",
          category: "practice",
          description: "Re-implement recent research papers from scratch in PyTorch, reproduce empirical results, and introduce an algorithmic variation.",
          tasks: [
            "Select a recent NeurIPS/ICML paper and implement its custom loss function and architecture from mathematical equations",
            "Conduct ablation studies evaluating the contribution of each hyperparameter and architectural component",
            "Benchmark against standard datasets with rigorous statistical error bounds"
          ],
          milestone: "Achieve empirical reproduction of reported results on a modern AI research paper with public code.",
          prerequisites: ["Step 1: Theoretical Foundations & Optimization Theory"],
          resources: [
            { title: "Papers with Code", url: "https://paperswithcode.com/", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Technical Paper Drafting & Research Lab Applications",
          durationMonths: 2,
          durationText: "2 months",
          category: "job_search",
          description: "Draft a research report in LaTeX following standard conference templates and interview for research scientist roles.",
          tasks: [
            "Format research paper in LaTeX using standard conference templates (e.g., NeurIPS format)",
            "Prepare a 45-minute technical slide presentation defending experimental methodologies and findings",
            "Apply to industrial research labs (MSR, Google, Adobe, Samsung Research) and academic postdoc openings"
          ],
          milestone: "Completed LaTeX preprint with accompanying code repository and submission of research lab applications.",
          prerequisites: ["Step 2: Paper Reproduction & Novel Algorithmic Experiments"],
          resources: [
            { title: "Overleaf LaTeX Platform", url: "https://www.overleaf.com/", type: "platform", isFree: true }
          ]
        }
      ]
    }
  },

  'cybersecurity-analyst': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Computer Science, Information Technology, BCA, or any STEM discipline.",
      preferredDegree: "B.Tech in Computer Science / Cyber Security or BCA / B.Sc IT.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; recognized security industry certifications (CompTIA Security+, CEH) are highly valued.",
      mandatoryRequirements: [
        "10+2 with Mathematics/Science.",
        "Graduation degree completed prior to joining corporate Security Operations Center (SOC) teams."
      ],
      preferredQualifications: [
        "Hands-on experience with SIEM tools (Splunk, Elastic SIEM, Microsoft Sentinel).",
        "CompTIA Security+, Certified Ethical Hacker (CEH), or Blue Team Level 1 (BTL1) credential."
      ],
      eligibilityCriteria: "Recruiters evaluate candidate's grasp of network protocols (TCP/IP), log analysis, threat intelligence, and incident response playbooks.",
      regulatoryNotes: "Recruitment criteria depend on enterprise security guidelines and compliance frameworks."
    },
    roadmap: {
      title: "Cybersecurity Analyst Job-Preparation Roadmap",
      description: "Hands-on preparation in networking protocols, Linux forensics, SIEM log analysis, threat detection, and incident response.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Network Security & Packet Analysis",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master TCP/IP suite, DNS, HTTP/S, firewall configurations, and deep packet inspection using Wireshark.",
          tasks: [
            "Analyze PCAP packet captures in Wireshark identifying port scans, ARP spoofing, and unencrypted credentials",
            "Configure Linux iptables and UFW firewalls with strict inbound and outbound filtering rules",
            "Understand common attack vectors: phishing, man-in-the-middle, and credential stuffing"
          ],
          milestone: "Analyze real-world network attack packet captures and document threat findings in an investigation report.",
          prerequisites: ["Basic computer and operating systems literacy"],
          resources: [
            { title: "Wireshark User Guide", url: "https://www.wireshark.org/docs/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "SIEM Operations & Log Investigation",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Ingest, parse, and correlate Windows Event Logs and Linux Syslog records using Splunk or Elastic SIEM.",
          tasks: [
            "Set up a free Splunk or Elastic SIEM lab environment and ingest sample enterprise event logs",
            "Write detection queries identifying brute-force logins, privilege escalation, and lateral movement",
            "Map detected adversary techniques to the MITRE ATT&CK enterprise matrix"
          ],
          milestone: "Build 5 custom SIEM detection alert rules mapped directly to MITRE ATT&CK techniques.",
          prerequisites: ["Step 1: Network Security & Packet Analysis"],
          resources: [
            { title: "MITRE ATT&CK Framework", url: "https://attack.mitre.org/", type: "official", isFree: true },
            { title: "Splunk Free Education", url: "https://www.splunk.com/en_us/training/free-courses/overview.html", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Incident Response Playbooks & Vulnerability Management",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Implement incident handling workflows following NIST SP 800-61 standards and conduct vulnerability scans.",
          tasks: [
            "Write standard operating playbooks for ransomware containment and compromised credential recovery",
            "Run vulnerability scans with Nessus / OpenVAS and prioritize remediations using CVSS scores",
            "Participate in Blue Team defensive labs on TryHackMe or LetsDefend"
          ],
          milestone: "Draft a comprehensive incident response post-mortem report for a simulated enterprise breach.",
          prerequisites: ["Step 2: SIEM Operations & Log Investigation"],
          resources: [
            { title: "NIST Incident Handling Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final", type: "official", isFree: true },
            { title: "TryHackMe Cyber Defense Pathway", url: "https://tryhackme.com/", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "SOC Interview Preparation & Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Prepare for Security Operations Center (SOC) L1 interviews and apply for junior analyst positions.",
          tasks: [
            "Practice technical interview questions on OSI model, defense-in-depth, and malware behavior",
            "Assemble a security portfolio documenting home lab setups, CTF write-ups, and tool projects",
            "Apply to 25+ SOC analyst and junior security openings across IT services and BFSI sectors"
          ],
          milestone: "Complete 5 mock security interview evaluations and submit targeted job applications.",
          prerequisites: ["Step 3: Incident Response Playbooks & Vulnerability Management"],
          resources: [
            { title: "CISA Cybersecurity Alerts", url: "https://www.cisa.gov/news-events/cybersecurity-advisories", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'security-engineer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Computer Science, Information Technology, or related engineering discipline.",
      preferredDegree: "B.Tech in Computer Science / Information Security or MCA.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; recognized offensive and application security credentials (OSCP, eWPT, CISSP) are respected.",
      mandatoryRequirements: [
        "10+2 with Mathematics/Science.",
        "Graduation degree completed prior to formal corporate onboarding."
      ],
      preferredQualifications: [
        "Hands-on vulnerability assessment and penetration testing (VAPT) experience.",
        "Knowledge of secure coding principles, DevSecOps pipelines, and cloud security posture."
      ],
      eligibilityCriteria: "Recruiters evaluate candidate's ability to exploit and secure application vulnerabilities (OWASP Top 10), audit source code, and design defense systems.",
      regulatoryNotes: "Recruitment criteria depend on employer security architecture and product domain."
    },
    roadmap: {
      title: "Security Engineer Job-Preparation Roadmap",
      description: "In-depth preparation in web application security testing, cryptography, secure code review, and automated DevSecOps integration.",
      totalDurationMonths: 5,
      totalDurationFormatted: "5 months",
      steps: [
        {
          stepNumber: 1,
          title: "Web Application Penetration Testing (OWASP Top 10)",
          durationMonths: 2,
          durationText: "2 months",
          category: "learning",
          description: "Master offensive security techniques: SQL Injection, Cross-Site Scripting (XSS), CSRF, SSRF, and authentication bypass.",
          tasks: [
            "Intercept and manipulate HTTP traffic using Burp Suite Professional / Community",
            "Solve 50+ vulnerability labs on PortSwigger Web Security Academy",
            "Document reproducible proof-of-concept exploits and remediation guidelines"
          ],
          milestone: "Complete all Practitioner-level labs on PortSwigger Web Security Academy.",
          prerequisites: ["Solid knowledge of web architecture, HTTP, and JavaScript"],
          resources: [
            { title: "PortSwigger Web Security Academy", url: "https://portswigger.net/web-security", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Applied Cryptography & Infrastructure Hardening",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Understand public-key cryptography (RSA, ECC), TLS handshake, SSH key management, and Linux kernel hardening.",
          tasks: [
            "Implement secure cryptographic hashing and symmetric/asymmetric encryption using OpenSSL",
            "Audit server configurations against CIS (Center for Internet Security) benchmarks",
            "Configure role-based access control and principle of least privilege in cloud environments"
          ],
          milestone: "Audit a live Linux virtual machine against CIS Benchmarks and remediate all high-severity findings.",
          prerequisites: ["Step 1: Web Application Penetration Testing"],
          resources: [
            { title: "CIS Benchmarks Portal", url: "https://www.cisecurity.org/cis-benchmarks/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Static Code Analysis & DevSecOps Pipelines",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Integrate automated security testing into CI/CD pipelines using SAST (SonarQube/Semgrep), DAST, and dependency scanning.",
          tasks: [
            "Configure Semgrep and SonarQube in GitHub Actions to scan pull requests for security vulnerabilities",
            "Audit open-source dependencies for known CVEs using Snyk or OWASP Dependency-Check",
            "Perform manual secure code reviews on sample vulnerable codebases"
          ],
          milestone: "Build an automated CI/CD security pipeline blocking merges on critical vulnerability detection.",
          prerequisites: ["Step 2: Applied Cryptography & Infrastructure Hardening"],
          resources: [
            { title: "Semgrep Documentation", url: "https://semgrep.dev/docs/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "VAPT Portfolio, Bug Bounty & Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Participate in responsible disclosure/bug bounty programs, assemble security portfolio, and apply for security engineer roles.",
          tasks: [
            "Submit responsible vulnerability disclosure reports on HackerOne or Bugcrowd programs",
            "Write 3 comprehensive technical VAPT audit reports demonstrating methodology and remediations",
            "Apply to 20+ security engineering positions across product tech companies and cybersecurity consultancies"
          ],
          milestone: "Published technical security writeups and submission of security engineer job applications.",
          prerequisites: ["Step 3: Static Code Analysis & DevSecOps Pipelines"],
          resources: [
            { title: "HackerOne Community Resources", url: "https://www.hackerone.com/hackers/resources", type: "platform", isFree: true }
          ]
        }
      ]
    }
  },

  'cloud-engineer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Computer Science, Information Technology, BCA, or any Engineering discipline.",
      preferredDegree: "B.Tech in Computer Science / IT / Electronics or BCA / MCA.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; cloud associate/professional certifications (AWS SAA, Azure AZ-104) are strongly preferred.",
      mandatoryRequirements: [
        "10+2 with Mathematics/Science.",
        "Graduation degree completed prior to joining corporate cloud operations."
      ],
      preferredQualifications: [
        "AWS Certified Solutions Architect Associate (SAA-C03) or Microsoft Azure Administrator (AZ-104).",
        "Hands-on Infrastructure as Code (Terraform) and Linux administration experience."
      ],
      eligibilityCriteria: "Recruiters evaluate candidate's understanding of cloud networking (VPC/VNet), identity and access management (IAM), compute scaling, and serverless architectures.",
      regulatoryNotes: "Recruitment criteria depend on company cloud provider and architectural patterns."
    },
    roadmap: {
      title: "Cloud Engineer Job-Preparation Roadmap",
      description: "Hands-on preparation in Linux server management, AWS core services, Infrastructure as Code with Terraform, and cloud cost optimization.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Linux Administration & Cloud Networking Fundamentals",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master Linux shell scripting, systemd services, DNS resolution, and cloud networking: VPC, subnets, route tables, and NAT gateways.",
          tasks: [
            "Write Bash scripts automating server setup, user provisioning, and log rotation",
            "Design custom Virtual Private Cloud (VPC) with public and private subnets across multiple availability zones",
            "Configure Security Groups and Network Access Control Lists (NACLs) following least-privilege principles"
          ],
          milestone: "Deploy a secure multi-subnet cloud network topology with private database isolation.",
          prerequisites: ["Basic networking knowledge"],
          resources: [
            { title: "Linux Journey", url: "https://linuxjourney.com/", type: "platform", isFree: true },
            { title: "AWS Networking Basics", url: "https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Core Cloud Compute, Storage & Managed Databases",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Provision and scale compute instances (EC2), object storage (S3), relational databases (RDS), and serverless execution (Lambda).",
          tasks: [
            "Configure Auto Scaling Groups behind Application Load Balancers for high availability",
            "Implement Amazon S3 bucket lifecycle policies, cross-region replication, and server-side encryption",
            "Deploy a multi-AZ Amazon RDS PostgreSQL instance with automated daily snapshots"
          ],
          milestone: "Deploy a fault-tolerant, auto-scaling web application tier across multiple availability zones.",
          prerequisites: ["Step 1: Linux Administration & Cloud Networking Fundamentals"],
          resources: [
            { title: "AWS Skill Builder Free Tier", url: "https://explore.skillbuilder.aws/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Infrastructure as Code (Terraform) & Monitoring",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Declare, version, and manage cloud infrastructure using HashiCorp Terraform and configure CloudWatch alerts.",
          tasks: [
            "Write modular Terraform code managing VPC, EC2, S3, and RDS infrastructure with remote state in S3",
            "Set up Amazon CloudWatch metrics, dashboards, and automated alarm notifications for CPU spikes",
            "Implement AWS IAM policies, service roles, and multi-factor authentication enforcement"
          ],
          milestone: "Provision a full cloud architecture automatically using a single 'terraform apply' command.",
          prerequisites: ["Step 2: Core Cloud Compute, Storage & Managed Databases"],
          resources: [
            { title: "Terraform Official Tutorials", url: "https://developer.hashicorp.com/terraform/tutorials", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Cloud Certification Preparation & Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Prepare for AWS Certified Solutions Architect Associate (SAA-C03) or Azure AZ-104 and interview for cloud engineer roles.",
          tasks: [
            "Solve official practice question sets and timed exam simulations",
            "Publish GitHub repository containing modular Terraform blueprints with architectural diagrams",
            "Apply to 25+ cloud engineer, cloud support, and infrastructure roles across Indian IT services and product enterprises"
          ],
          milestone: "Complete certification practice exams with 85%+ score and submit tailored job applications.",
          prerequisites: ["Step 3: Infrastructure as Code (Terraform) & Monitoring"],
          resources: [
            { title: "AWS Certified Solutions Architect Exam Guide", url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'devops-engineer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Computer Science, IT, BCA, or related engineering discipline.",
      preferredDegree: "B.Tech in Computer Science / IT / Electronics.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; technical competence in CI/CD, Kubernetes, and Linux automation determines hiring.",
      mandatoryRequirements: [
        "10+2 with Mathematics/Science.",
        "Graduation degree completed prior to formal corporate onboarding."
      ],
      preferredQualifications: [
        "Certified Kubernetes Administrator (CKA) or Red Hat Certified System Administrator (RHCSA).",
        "Experience building automated CI/CD pipelines with GitHub Actions or Jenkins."
      ],
      eligibilityCriteria: "Recruiters evaluate candidate's ability to automate code deployments, containerize applications, configure Kubernetes pods, and maintain zero-downtime releases.",
      regulatoryNotes: "Recruitment criteria depend on company technology stack and deployment automation standards."
    },
    roadmap: {
      title: "DevOps Engineer Job-Preparation Roadmap",
      description: "Practical curriculum covering Linux automation, Docker containerization, Kubernetes container orchestration, and GitHub Actions CI/CD pipelines.",
      totalDurationMonths: 5,
      totalDurationFormatted: "5 months",
      steps: [
        {
          stepNumber: 1,
          title: "Linux System Administration & Git Automation",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master Linux system internals, package management, SSH key management, process control, and advanced Git workflows.",
          tasks: [
            "Write Bash scripts for automated server maintenance, monitoring, and backup routines",
            "Configure Nginx as a reverse proxy with SSL/TLS certificate automation via Let's Encrypt",
            "Manage Git branching strategies (Gitflow, trunk-based development) and automated hooks"
          ],
          milestone: "Automate web server provisioning and SSL configuration using a single executable script.",
          prerequisites: ["Basic computer systems literacy"],
          resources: [
            { title: "Linux Foundation Training", url: "https://www.linuxfoundation.org/resources", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Docker Containerization & Image Optimization",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Package applications into lightweight, secure Docker containers, optimize layer caching, and manage multi-container services.",
          tasks: [
            "Write production multi-stage Dockerfiles reducing image sizes by over 70%",
            "Orchestrate multi-container applications (frontend, backend, database) with Docker Compose",
            "Scan container images for vulnerabilities using Trivy before deployment"
          ],
          milestone: "Dockerize a full-stack microservices application with vulnerability-free, multi-stage images.",
          prerequisites: ["Step 1: Linux System Administration & Git Automation"],
          resources: [
            { title: "Docker Official Docs", url: "https://docs.docker.com/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Kubernetes Container Orchestration",
          durationMonths: 2,
          durationText: "2 months",
          category: "practice",
          description: "Deploy, scale, and manage containerized applications using Kubernetes: Pods, Deployments, Services, ConfigMaps, and Ingress.",
          tasks: [
            "Set up local Kubernetes cluster using Minikube or K3s and write declarative YAML manifests",
            "Configure rolling updates, health checks (liveness and readiness probes), and horizontal pod autoscalers (HPA)",
            "Manage persistent storage with PersistentVolumes (PV) and PersistentVolumeClaims (PVC)"
          ],
          milestone: "Deploy a high-availability microservice application on Kubernetes with zero-downtime rolling updates.",
          prerequisites: ["Step 2: Docker Containerization & Image Optimization"],
          resources: [
            { title: "Kubernetes Official Tutorials", url: "https://kubernetes.io/docs/tutorials/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Automated CI/CD Pipelines & Job Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Build automated deployment pipelines using GitHub Actions or Jenkins and interview for junior DevOps roles.",
          tasks: [
            "Construct an end-to-end GitHub Actions pipeline that runs unit tests, builds Docker image, and deploys to Kubernetes",
            "Implement secrets management using HashiCorp Vault or GitHub Secrets",
            "Apply to 25+ junior DevOps, site reliability, and cloud automation openings across tech firms"
          ],
          milestone: "Complete a public GitHub repository with live automated CI/CD pipeline and submit applications.",
          prerequisites: ["Step 3: Kubernetes Container Orchestration"],
          resources: [
            { title: "GitHub Actions Guide", url: "https://docs.github.com/en/actions", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'site-reliability-engineer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Computer Science, IT, or related engineering discipline.",
      preferredDegree: "B.Tech in Computer Science / IT or MCA.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; hiring evaluates distributed systems troubleshooting, automation, and observability.",
      mandatoryRequirements: [
        "10+2 with Mathematics/Science.",
        "Graduation degree completed prior to formal corporate onboarding."
      ],
      preferredQualifications: [
        "Strong scripting proficiency in Python or Go for infrastructure automation.",
        "Hands-on experience with Prometheus, Grafana, Distributed Tracing (Jaeger), and SLO/SLI engineering."
      ],
      eligibilityCriteria: "Recruiters evaluate candidate's grasp of high availability, incident post-mortems, capacity planning, and error budgets.",
      regulatoryNotes: "Recruitment criteria depend on enterprise production scale and availability targets."
    },
    roadmap: {
      title: "Site Reliability Engineer Job-Preparation Roadmap",
      description: "SRE curriculum covering system observability, SLO/SLI definition, Prometheus & Grafana monitoring, automation with Python/Go, and chaos engineering.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "SRE Principles: SLIs, SLOs & Error Budgets",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master Google Site Reliability Engineering principles: Service Level Indicators, Objectives, Error Budgets, and blameless postmortems.",
          tasks: [
            "Define meaningful user-facing SLIs and SLOs for critical web application endpoints",
            "Calculate error budget consumption and establish automated freeze policies",
            "Write structured blameless incident postmortem reports detailing root cause and action items"
          ],
          milestone: "Draft an SRE operational guide defining SLIs, SLOs, and incident response playbooks for a simulated service.",
          prerequisites: ["Basic Linux and cloud infrastructure understanding"],
          resources: [
            { title: "Google SRE Books (Free Online)", url: "https://sre.google/books/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Full-Stack Observability with Prometheus & Grafana",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Instrument application code with metrics, collect telemetry using Prometheus, and construct alerting dashboards in Grafana.",
          tasks: [
            "Instrument Node.js or Python applications with custom Prometheus metrics (counter, gauge, histogram)",
            "Build production Grafana dashboards tracking the 'Four Golden Signals' (Latency, Traffic, Errors, Saturation)",
            "Configure Alertmanager routing high-severity incidents to Slack and PagerDuty"
          ],
          milestone: "Deploy a live Grafana monitoring dashboard tracking microservice latency and error rates in real time.",
          prerequisites: ["Step 1: SRE Principles: SLIs, SLOs & Error Budgets"],
          resources: [
            { title: "Prometheus Documentation", url: "https://prometheus.io/docs/introduction/overview/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Automation Scripting in Python/Go & Incident Handling",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Write automated self-healing scripts that detect failed services, restart pods, and clear disk space automatically.",
          tasks: [
            "Write automation scripts in Python or Go utilizing cloud SDKs to remediate system anomalies",
            "Simulate system failure scenarios (disk saturation, CPU throttling) and verify self-healing behavior",
            "Practice live incident triage under timed mock on-call simulation"
          ],
          milestone: "Deploy an automated self-healing script resolving memory leaks and pod restarts without human intervention.",
          prerequisites: ["Step 2: Full-Stack Observability with Prometheus & Grafana"],
          resources: [
            { title: "Grafana Tutorials", url: "https://grafana.com/tutorials/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "SRE Portfolio & Production Engineering Interviews",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Consolidate SRE portfolio, participate in mock production triage interviews, and apply for junior SRE roles.",
          tasks: [
            "Document observability architectures, self-healing code, and postmortems on public GitHub repo",
            "Practice technical troubleshooting interview questions on Linux networking, disk I/O, and DNS failures",
            "Apply to 20+ SRE and production engineering openings across Indian product startups and tech multinationals"
          ],
          milestone: "Pass 5 mock SRE troubleshooting interviews and submit tailored applications.",
          prerequisites: ["Step 3: Automation Scripting in Python/Go & Incident Handling"],
          resources: [
            { title: "Awesome SRE Curated List", url: "https://github.com/dastergon/awesome-sre", type: "platform", isFree: true }
          ]
        }
      ]
    }
  },

  'database-administrator': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Computer Science, IT, BCA, or any STEM discipline.",
      preferredDegree: "B.Tech in Computer Science / IT or MCA.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; vendor database certifications (Oracle OCP, Microsoft Azure Database Administrator) are respected.",
      mandatoryRequirements: [
        "10+2 with Mathematics/Science.",
        "Graduation degree completed prior to formal corporate onboarding."
      ],
      preferredQualifications: [
        "Proficiency in PostgreSQL, MySQL, or Oracle database engine administration.",
        "Experience configuring database replication, backup retention, and disaster recovery."
      ],
      eligibilityCriteria: "Recruiters evaluate candidate's knowledge of relational schema design, query plan optimization, transaction locks, and disaster recovery.",
      regulatoryNotes: "Recruitment criteria depend on enterprise database architecture and industry compliance regulations."
    },
    roadmap: {
      title: "Database Administrator Job-Preparation Roadmap",
      description: "Practical curriculum covering relational database installation, query performance tuning, replication, backup strategies, and security.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Database Architecture, Storage Engines & SQL Tuning",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Understand database storage engines (InnoDB/PostgreSQL MVCC), write-ahead logging (WAL), and execution plan analysis.",
          tasks: [
            "Analyze complex queries using EXPLAIN ANALYZE to identify sequential scans and costly joins",
            "Design composite, partial, and expression-based indexes to accelerate slow query execution",
            "Manage connection pools and optimize shared memory buffers (shared_buffers, work_mem)"
          ],
          milestone: "Optimize slow execution plans on a simulated 5M-row database achieving 5x query speedup.",
          prerequisites: ["Intermediate SQL querying knowledge"],
          resources: [
            { title: "PostgreSQL Administration Docs", url: "https://www.postgresql.org/docs/current/admin.html", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "High Availability, Replication & Disaster Recovery",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Configure streaming replication, read replicas, automated failover, and point-in-time recovery (PITR).",
          tasks: [
            "Set up master-slave streaming replication with automated failover using Patroni or Pgpool",
            "Implement automated point-in-time recovery (PITR) using continuous archiving and WAL logs",
            "Execute disaster recovery drill restoring database from cold backup within target RTO/RPO limits"
          ],
          milestone: "Demonstrate successful zero-data-loss failover on a multi-node PostgreSQL cluster.",
          prerequisites: ["Step 1: Database Architecture, Storage Engines & SQL Tuning"],
          resources: [
            { title: "MySQL High Availability Guide", url: "https://dev.mysql.com/doc/refman/8.0/en/ha-overview.html", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Database Security, Patching & Routine Maintenance",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Enforce encryption at rest and in transit, implement role-based access control, and perform non-disruptive vacuuming.",
          tasks: [
            "Configure SSL/TLS database client connections and Transparent Data Encryption (TDE)",
            "Automate routine vacuuming, re-indexing, and statistics collection to prevent table bloat",
            "Set up database auditing tracking user access and DDL/DML modifications"
          ],
          milestone: "Produce an automated maintenance and security audit script for an enterprise database instance.",
          prerequisites: ["Step 2: High Availability, Replication & Disaster Recovery"],
          resources: [
            { title: "PostgreSQL Security Guidelines", url: "https://www.postgresql.org/docs/current/security.html", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "DBA Certification Prep & Job Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Prepare for entry-level DBA interviews, solve scenario questions, and apply for database administrator roles.",
          tasks: [
            "Review core interview topics: deadlock detection, ACID guarantees, and database partitioning strategies",
            "Publish GitHub repository containing automated backup and tuning shell scripts",
            "Apply to 20+ DBA and database support positions across IT services, BFSI, and telecom sectors"
          ],
          milestone: "Pass 5 mock DBA technical interviews and submit job applications.",
          prerequisites: ["Step 3: Database Security, Patching & Routine Maintenance"],
          resources: [
            { title: "Oracle Database Documentation", url: "https://docs.oracle.com/en/database/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'network-engineer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Computer Science, IT, Electronics, BCA, or 3-year Polytechnic Diploma in Electronics/Communication.",
      preferredDegree: "B.Tech in Electronics & Communication / Computer Science or BCA.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; Cisco CCNA (Cisco Certified Network Associate) certification is industry benchmark.",
      mandatoryRequirements: [
        "10+2 with Mathematics/Physics or recognized technical diploma.",
        "Graduation or diploma completed prior to joining corporate network operations."
      ],
      preferredQualifications: [
        "Cisco CCNA (200-301) certification.",
        "Familiarity with enterprise routing protocols (OSPF, BGP) and network automation using Python/Ansible."
      ],
      eligibilityCriteria: "Recruiters evaluate candidate's ability to configure routers, switches, VLANs, subnets, and troubleshoot packet drops.",
      regulatoryNotes: "Recruitment criteria depend on corporate infrastructure requirements and ISP guidelines."
    },
    roadmap: {
      title: "Network Engineer Job-Preparation Roadmap",
      description: "Hands-on preparation in IP subnetting, Cisco IOS configuration, switching (VLANs, STP), routing protocols (OSPF, BGP), and troubleshooting.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "IPv4/IPv6 Subnetting & Cisco Packet Tracer Lab",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master binary math, Variable Length Subnet Masking (VLSM), IPv6 addressing, and Cisco IOS command-line basics.",
          tasks: [
            "Solve 100+ VLSM subnetting calculations under timed constraints without a calculator",
            "Set up enterprise network topologies using Cisco Packet Tracer or GNS3 simulator",
            "Configure basic device security: console passwords, SSH remote management, and banners"
          ],
          milestone: "Accurately configure a multi-router network topology in Cisco Packet Tracer with zero routing errors.",
          prerequisites: ["Basic computer and internet literacy"],
          resources: [
            { title: "Cisco Networking Academy Free Courses", url: "https://www.netacad.com/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Enterprise Switching, VLANs & Spanning Tree",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Configure Layer 2 enterprise switching: VLANs, trunking (802.1Q), Inter-VLAN routing, and Spanning Tree Protocol (STP).",
          tasks: [
            "Segment department traffic using VLANs and configure 802.1Q trunk links across switches",
            "Configure Rapid Spanning Tree Protocol (RSTP) and EtherChannel link aggregation for loop-free redundancy",
            "Implement Layer 2 security: port security, DHCP snooping, and dynamic ARP inspection (DAI)"
          ],
          milestone: "Configure a redundant, loop-free campus switching architecture with secure access ports.",
          prerequisites: ["Step 1: IPv4/IPv6 Subnetting & Cisco Packet Tracer Lab"],
          resources: [
            { title: "Cisco CCNA Exam Topics", url: "https://learningnetwork.cisco.com/s/ccna-exam-topics", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Dynamic Routing Protocols (OSPF) & WAN Services",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Configure single-area and multi-area OSPF, NAT/PAT translation, and network management protocols (SNMP, Syslog).",
          tasks: [
            "Configure and verify multi-area OSPF routing across enterprise branch offices",
            "Set up dynamic Network Address Translation (NAT) and Port Address Translation (PAT) for internet breakout",
            "Implement Access Control Lists (standard and extended ACLs) for traffic filtering"
          ],
          milestone: "Build a complete enterprise branch office network topology with OSPF routing and NAT internet access.",
          prerequisites: ["Step 2: Enterprise Switching, VLANs & Spanning Tree"],
          resources: [
            { title: "NetworkChuck Free Networking Tutorials", url: "https://www.youtube.com/@NetworkChuck", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "CCNA Practice Exams & Network NOC Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Prepare for Cisco CCNA certification exams and interview for Network Operations Center (NOC) and junior engineer roles.",
          tasks: [
            "Complete 5 full-length timed CCNA practice examination simulations scoring above 85%",
            "Practice live network troubleshooting scenarios diagnosing broken routes and duplex mismatches",
            "Apply to 25+ NOC engineer and network support roles across telecom and IT services providers"
          ],
          milestone: "Pass 5 mock network troubleshooting interviews and submit job applications.",
          prerequisites: ["Step 3: Dynamic Routing Protocols (OSPF) & WAN Services"],
          resources: [
            { title: "Cisco Community Knowledge Base", url: "https://community.cisco.com/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'blockchain-developer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Computer Science, IT, Software Engineering, or related STEM field.",
      preferredDegree: "B.Tech in Computer Science / IT or MCA.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; recruitment is judged by smart contract code quality, security audits, and deployed dApps.",
      mandatoryRequirements: [
        "10+2 with Mathematics/Science.",
        "Graduation degree completed prior to joining corporate engineering teams."
      ],
      preferredQualifications: [
        "Hands-on experience writing secure Solidity smart contracts and deploying decentralized applications (dApps).",
        "Proficiency with Hardhat/Foundry, Ethers.js/Viem, and understanding of EVM gas optimization."
      ],
      eligibilityCriteria: "Recruiters evaluate candidate's grasp of asymmetric cryptography, consensus mechanisms, smart contract security, and Web3 frontend integration.",
      regulatoryNotes: "Recruitment criteria depend on enterprise Web3 product standards."
    },
    roadmap: {
      title: "Blockchain Developer Job-Preparation Roadmap",
      description: "Hands-on preparation in Ethereum Virtual Machine (EVM), Solidity programming, smart contract security audits, and decentralized application (dApp) deployment.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Blockchain Architecture & Solidity Smart Contracts",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Understand consensus mechanisms (Proof of Stake), cryptographic hashing, EVM architecture, and Solidity syntax.",
          tasks: [
            "Write Solidity smart contracts implementing ERC-20 token and ERC-721 NFT standards",
            "Master Solidity data types, storage vs memory vs calldata, and access control modifiers",
            "Understand EVM gas optimization techniques and compiler settings"
          ],
          milestone: "Write and test custom ERC-20 and ERC-721 smart contracts conforming to OpenZeppelin standards.",
          prerequisites: ["Solid object-oriented programming foundation"],
          resources: [
            { title: "Solidity Official Documentation", url: "https://docs.soliditylang.org/", type: "official", isFree: true },
            { title: "Ethereum Developer Resources", url: "https://ethereum.org/en/developers/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Smart Contract Testing with Foundry & Hardhat",
          durationMonths: 1,
          durationText: "1 month",
          category: "practice",
          description: "Write comprehensive unit, fuzz, and invariant tests for smart contracts using modern development frameworks (Foundry / Hardhat).",
          tasks: [
            "Write automated unit and fuzz tests in Foundry ensuring 100% contract code coverage",
            "Deploy contracts to Ethereum testnets (Sepolia / Polygon Amoy) and verify source code on Etherscan",
            "Conduct static analysis using Slither to detect reentrancy and integer overflow vulnerabilities"
          ],
          milestone: "Achieve 100% test coverage and zero Slither warnings on a multi-contract DeFi vault.",
          prerequisites: ["Step 1: Blockchain Architecture & Solidity Smart Contracts"],
          resources: [
            { title: "Foundry Book", url: "https://book.getfoundry.sh/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Full-Stack dApp Development (React + Viem/Wagmi)",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Connect React web interfaces to deployed smart contracts using Wagmi, Viem, and wallet connectors (MetaMask, WalletConnect).",
          tasks: [
            "Integrate wallet connection handling accounts, network switching, and signing messages",
            "Read contract state and execute write transactions with live UI status notifications",
            "Implement decentralized file storage using IPFS / Pinata for metadata hosting"
          ],
          milestone: "Deploy a live decentralized application (e.g., Crowdfunding Platform or NFT Marketplace) on a public testnet.",
          prerequisites: ["Step 2: Smart Contract Testing with Foundry & Hardhat"],
          resources: [
            { title: "Wagmi Documentation", url: "https://wagmi.sh/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Smart Contract Security Audit & Job Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Audit contracts for critical vulnerabilities (reentrancy, flash loan attacks), assemble portfolio, and apply for Web3 roles.",
          tasks: [
            "Solve security puzzles on Damn Vulnerable DeFi and Ethernaut",
            "Write a formal security audit report detailing vulnerabilities and remediations for a mock protocol",
            "Apply to 20+ blockchain and smart contract developer openings across Web3 startups and enterprise protocols"
          ],
          milestone: "Complete 10 Ethernaut challenges and submit tailored Web3 developer applications.",
          prerequisites: ["Step 3: Full-Stack dApp Development"],
          resources: [
            { title: "OpenZeppelin Contracts & Guides", url: "https://docs.openzeppelin.com/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'embedded-systems-engineer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Electronics & Communication, Electrical Engineering, Instrumentation, Computer Science, or Mechatronics.",
      preferredDegree: "B.Tech in Electronics & Communication Engineering (ECE) or Electrical & Electronics (EEE).",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; hiring evaluates C programming, microcontroller interfacing, and hardware debugging.",
      mandatoryRequirements: [
        "10+2 with Physics and Mathematics.",
        "Graduation degree completed prior to formal corporate onboarding."
      ],
      preferredQualifications: [
        "Hands-on experience with ARM Cortex-M microcontrollers (STM32) and Real-Time Operating Systems (FreeRTOS).",
        "Proficiency with hardware protocols (I2C, SPI, UART, CAN) and oscilloscope/logic analyzer debugging."
      ],
      eligibilityCriteria: "Recruiters evaluate candidate's knowledge of bitwise manipulation in Embedded C, register-level hardware configuration, memory mapping, and sensor integration.",
      regulatoryNotes: "Recruitment criteria depend on employer industry (automotive, IoT, industrial automation, consumer electronics)."
    },
    roadmap: {
      title: "Embedded Systems Engineer Job-Preparation Roadmap",
      description: "Hands-on preparation in Embedded C, register-level microcontroller programming (STM32), peripheral protocols, FreeRTOS, and hardware debugging.",
      totalDurationMonths: 5,
      totalDurationFormatted: "5 months",
      steps: [
        {
          stepNumber: 1,
          title: "Embedded C Programming & Bitwise Manipulation",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master low-level C: pointer arithmetic, memory mapping, volatile keyword, bit masking, and circular ring buffers.",
          tasks: [
            "Write modular C code performing bitwise set, clear, and toggle operations on hardware registers",
            "Implement a ring buffer in C for asynchronous serial communication without data loss",
            "Understand memory layouts: Flash, SRAM, stack, heap, and linker script fundamentals"
          ],
          milestone: "Write bug-free Embedded C drivers for peripheral simulation without dynamic memory allocation.",
          prerequisites: ["C programming and digital electronics fundamentals"],
          resources: [
            { title: "Embedded C Programming Guide", url: "https://www.geeksforgeeks.org/embedded-c-tutorial/", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Microcontroller Peripherals & Communication Protocols",
          durationMonths: 2,
          durationText: "2 months",
          category: "learning",
          description: "Interface sensors and peripherals on ARM Cortex-M (STM32) using GPIO, Timers, Interrupts, ADC, UART, SPI, and I2C.",
          tasks: [
            "Write bare-metal register-level drivers for GPIO and Timer interrupts on STM32 microcontroller",
            "Interface an I2C OLED display and SPI temperature sensor reading data at microsecond intervals",
            "Debug digital communication waveforms using an oscilloscope and USB logic analyzer"
          ],
          milestone: "Build a multi-sensor data acquisition system streaming validated telemetry over UART to a PC.",
          prerequisites: ["Step 1: Embedded C Programming & Bitwise Manipulation"],
          resources: [
            { title: "STMicroelectronics Developer Documentation", url: "https://www.st.com/en/microcontrollers-microprocessors.html", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Real-Time Operating Systems (FreeRTOS) Multitasking",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Implement deterministic multitasking using FreeRTOS: tasks, queues, semaphores, mutexes, and software timers.",
          tasks: [
            "Create prioritized FreeRTOS tasks communicating through inter-task message queues",
            "Prevent race conditions and priority inversion using binary semaphores and mutexes",
            "Implement an idle hook measuring CPU workload percentage during runtime"
          ],
          milestone: "Build a real-time embedded system (e.g., Smart Energy Monitor) running 4 concurrent FreeRTOS tasks.",
          prerequisites: ["Step 2: Microcontroller Peripherals & Communication Protocols"],
          resources: [
            { title: "FreeRTOS Official Documentation", url: "https://www.freertos.org/Documentation/RTOS_book.html", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Hardware Capstone & Technical Interviews",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Document hardware capstone project on GitHub, prepare for embedded technical interviews, and apply for roles.",
          tasks: [
            "Publish hardware project documentation including schematic diagrams, pinout tables, and firmware source code",
            "Practice technical interview questions on interrupt latency, debouncing, DMA, and CAN protocol",
            "Apply to 20+ embedded systems and firmware openings across automotive (EV), IoT, and semiconductor companies"
          ],
          milestone: "Pass 5 mock embedded firmware interviews and submit tailored job applications.",
          prerequisites: ["Step 3: Real-Time Operating Systems (FreeRTOS) Multitasking"],
          resources: [
            { title: "ARM Developer Architecture Portal", url: "https://developer.arm.com/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'automation-test-engineer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Computer Science, IT, BCA, or any Engineering discipline.",
      preferredDegree: "B.Tech in Computer Science / IT or BCA / MCA.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; ISTQB Foundation Level certification is widely recognized.",
      mandatoryRequirements: [
        "10+2 with Mathematics/Science.",
        "Graduation degree completed prior to joining corporate Quality Assurance (QA) teams."
      ],
      preferredQualifications: [
        "Hands-on experience with Selenium WebDriver, Playwright, or Cypress test automation.",
        "ISTQB Certified Tester Foundation Level (CTFL) certification."
      ],
      eligibilityCriteria: "Recruiters evaluate candidate's grasp of test automation frameworks (Page Object Model), API testing (Postman/RestAssured), and CI/CD integration.",
      regulatoryNotes: "Recruitment criteria depend on corporate software release and testing standards."
    },
    roadmap: {
      title: "Automation Test Engineer Job-Preparation Roadmap",
      description: "Comprehensive training in software testing principles, Selenium/Playwright UI automation, API testing with RestAssured, and CI/CD integration.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Testing Fundamentals & Test Case Design",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master testing methodologies: Black-box vs white-box, boundary value analysis, equivalence partitioning, and defect life cycle.",
          tasks: [
            "Write comprehensive test plans and test cases for complex web application workflows",
            "Log and track software defects with reproducible steps using Jira or GitHub Issues",
            "Understand STLC (Software Testing Life Cycle) and Agile testing practices"
          ],
          milestone: "Produce an industry-standard Test Plan and 50+ test cases covering functional and edge scenarios for an e-commerce platform.",
          prerequisites: ["Basic computer and software usage skills"],
          resources: [
            { title: "ISTQB Glossary & Syllabus", url: "https://www.istqb.org/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "UI Automation with Selenium / Playwright",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Automate browser interactions using Selenium WebDriver or Playwright with Java/Python/JavaScript and Page Object Model.",
          tasks: [
            "Write resilient element locators (CSS Selectors, XPath) resistant to dynamic UI changes",
            "Implement Page Object Model (POM) design pattern separating test logic from page selectors",
            "Handle dynamic waits, dropdowns, alerts, iFrames, and multi-window switching"
          ],
          milestone: "Build an automated UI test suite executing 30+ end-to-end user journeys without flaky failures.",
          prerequisites: ["Step 1: Testing Fundamentals & Test Case Design"],
          resources: [
            { title: "Selenium Documentation", url: "https://www.selenium.dev/documentation/", type: "official", isFree: true },
            { title: "Playwright Documentation", url: "https://playwright.dev/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "API Automation Testing & Framework Integration",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Automate RESTful API testing using RestAssured or Postman Newman, validating response schemas, status codes, and latency.",
          tasks: [
            "Write automated API test scripts validating JSON schema structures, headers, and authentication tokens",
            "Integrate UI and API tests into a unified TestNG / PyTest automation framework",
            "Generate rich visual HTML execution reports using Allure or ExtentReports"
          ],
          milestone: "Deliver a hybrid test automation framework testing both backend APIs and frontend UI with automated reporting.",
          prerequisites: ["Step 2: UI Automation with Selenium / Playwright"],
          resources: [
            { title: "RestAssured Guide", url: "https://rest-assured.io/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "CI/CD Execution, Portfolio & Applications",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Integrate test suites into GitHub Actions CI/CD pipelines, prepare for QA interviews, and apply for automation roles.",
          tasks: [
            "Configure automated test execution on every Git commit in GitHub Actions",
            "Review core QA interview topics: automation framework architecture, flakiness mitigation, and performance testing basics",
            "Apply to 25+ automation test engineer and SDET-1 openings across tech services and product companies"
          ],
          milestone: "Complete 5 mock QA automation interviews and submit targeted job applications.",
          prerequisites: ["Step 3: API Automation Testing & Framework Integration"],
          resources: [
            { title: "Software Testing Help Tutorials", url: "https://www.softwaretestinghelp.com/", type: "platform", isFree: true }
          ]
        }
      ]
    }
  },

  'product-designer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Design (B.Des), Fine Arts, Computer Science, Architecture, or any graduate degree with design portfolio.",
      preferredDegree: "Bachelor of Design (B.Des) from NID / IIT IDC or B.Tech with human-computer interaction portfolio.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; recruitment is judged strictly on design portfolio case studies and Figma prototypes.",
      mandatoryRequirements: [
        "10+2 in any stream.",
        "A live online portfolio showcasing end-to-end product design case studies."
      ],
      preferredQualifications: [
        "Deep proficiency in Figma, design systems (tokens, auto-layout), and component libraries.",
        "Demonstrated user research methodology: qualitative interviews, usability benchmarking, and metric analysis."
      ],
      eligibilityCriteria: "Product firms evaluate candidate's design rationale, user empathy, wireframing, interactive prototyping, and handoff collaboration with engineers.",
      regulatoryNotes: "Recruitment criteria depend on individual company design maturity."
    },
    roadmap: {
      title: "Product Designer Job-Preparation Roadmap",
      description: "Structured design curriculum covering user research, information architecture, wireframing, high-fidelity Figma UI design, design systems, and case studies.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "User Research & Problem Definition",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Learn user research methodologies: user interviews, persona creation, empathy mapping, user journey mapping, and problem framing.",
          tasks: [
            "Conduct 5 user interviews investigating a specific consumer pain point (e.g., personal budgeting or healthcare appointment booking)",
            "Map out current user journeys identifying friction points, drop-offs, and design opportunities",
            "Define 'How Might We' (HMW) statements establishing clear design objectives"
          ],
          milestone: "Produce a comprehensive user research report with personas and prioritized problem statements.",
          prerequisites: ["Basic computer and visual design literacy"],
          resources: [
            { title: "Nielsen Norman Group UX Articles", url: "https://www.nngroup.com/articles/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Information Architecture, Wireframing & Prototyping",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Organize digital content hierarchies, create low-fidelity wireframes, and test user flows using Figma.",
          tasks: [
            "Build comprehensive site maps and user flow diagrams for a multi-step digital product",
            "Sketch and digitize low-fidelity wireframes exploring multiple navigational layouts",
            "Conduct rapid low-fidelity paper or digital usability testing with 5 target users"
          ],
          milestone: "Complete wireframed user flows validated through recorded user testing sessions.",
          prerequisites: ["Step 1: User Research & Problem Definition"],
          resources: [
            { title: "Figma Official Learning Hub", url: "https://help.figma.com/hc/en-us/categories/360002051613-Learn-design", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Visual Design, Design Systems & High-Fidelity UI",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Design accessible, polished visual interfaces using typography scales, 8pt spatial grid, color systems, and reusable Figma components.",
          tasks: [
            "Create a modular Figma design system with color tokens, typography styles, and auto-layout components",
            "Design 20+ responsive high-fidelity screens for both mobile iOS/Android and desktop viewports",
            "Build advanced interactive micro-animations and component state prototypes in Figma"
          ],
          milestone: "Deliver a polished, interactive high-fidelity prototype adhering to WCAG accessibility contrast ratios.",
          prerequisites: ["Step 2: Information Architecture, Wireframing & Prototyping"],
          resources: [
            { title: "Material Design 3 Guidelines", url: "https://m3.material.io/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Portfolio Case Studies & Design Interviews",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Publish 2 detailed case studies on Notion/custom portfolio website, practice whiteboard design challenges, and apply for roles.",
          tasks: [
            "Write 2 comprehensive case studies detailing problem statement, research findings, iterations, and final design impact",
            "Practice whiteboard design challenge frameworks frequently used in tech company interviews",
            "Apply to 20+ product designer and UX/UI designer positions across Indian startups and global product teams"
          ],
          milestone: "Live portfolio with 2 complete case studies and active applications submitted.",
          prerequisites: ["Step 3: Visual Design, Design Systems & High-Fidelity UI"],
          resources: [
            { title: "Bestfolios Design Inspiration", url: "https://www.bestfolios.com/", type: "platform", isFree: true }
          ]
        }
      ]
    }
  },

  'technical-writer': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in English, Journalism, Mass Communication, Computer Science, BCA, or any STEM discipline.",
      preferredDegree: "Bachelor's or Master's degree in English Literature, Communications, or Computer Science.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; recruitment is judged by technical writing samples and API documentation portfolios.",
      mandatoryRequirements: [
        "10+2 in any stream with high English proficiency.",
        "Public writing portfolio showcasing developer guides, software manuals, or API references."
      ],
      preferredQualifications: [
        "Familiarity with 'Docs as Code' workflows (Markdown, Git, Static Site Generators like Docusaurus).",
        "Understanding of REST APIs and ability to read basic programming code (JavaScript/Python)."
      ],
      eligibilityCriteria: "Recruiters evaluate candidate's ability to explain complex technical concepts in plain, accessible language with structured formatting.",
      regulatoryNotes: "Recruitment criteria depend on specific software product domain."
    },
    roadmap: {
      title: "Technical Writer Job-Preparation Roadmap",
      description: "Practical curriculum covering technical communication standards, Markdown, Docs-as-Code workflows, API reference documentation, and portfolio creation.",
      totalDurationMonths: 3,
      totalDurationFormatted: "3 months",
      steps: [
        {
          stepNumber: 1,
          title: "Technical Writing Standards & Style Guides",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Learn industry documentation standards: Microsoft Writing Style Guide, Google Developer Documentation Style Guide, and active voice.",
          tasks: [
            "Master clear, concise technical prose eliminating ambiguity, passive voice, and jargon",
            "Write procedural 'how-to' guides and troubleshooting playbooks for complex software tools",
            "Format content consistently using headings, callouts, tables, and annotated screenshots"
          ],
          milestone: "Produce 3 comprehensive installation and user configuration guides adhering to Google Developer Style Guide.",
          prerequisites: ["Strong English communication skills"],
          resources: [
            { title: "Google Developer Documentation Style Guide", url: "https://developers.google.com/style", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "API Documentation & Docs-as-Code Workflows",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Document RESTful APIs using OpenAPI (Swagger) specifications, write Markdown guides, and version documentation in Git.",
          tasks: [
            "Write comprehensive API endpoint documentation: parameters, request payloads, response codes, and curl examples",
            "Build documentation sites using static site generators (Docusaurus, MkDocs, or Hugo)",
            "Manage documentation revisions and pull requests using Git and GitHub"
          ],
          milestone: "Publish a complete API documentation website on GitHub Pages with interactive Swagger testing.",
          prerequisites: ["Step 1: Technical Writing Standards & Style Guides"],
          resources: [
            { title: "Write the Docs Community Guide", url: "https://www.writethedocs.org/guide/", type: "platform", isFree: true },
            { title: "Docusaurus Documentation", url: "https://docusaurus.io/docs", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Portfolio Development & Technical Writing Interviews",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Assemble an online technical documentation portfolio, take editorial assessments, and apply for technical writer roles.",
          tasks: [
            "Assemble public portfolio highlighting API guides, end-user manuals, and conceptual explanations",
            "Practice technical writing editing and documentation restructuring tests",
            "Apply to 20+ technical writer and documentation specialist openings across Indian IT and SaaS companies"
          ],
          milestone: "Live online portfolio containing 3 diverse documentation samples and submitted job applications.",
          prerequisites: ["Step 2: API Documentation & Docs-as-Code Workflows"],
          resources: [
            { title: "Tom Johnson I'd Rather Be Writing API Course", url: "https://idratherbewriting.com/learnapidoc/", type: "platform", isFree: true }
          ]
        }
      ]
    }
  },

  'business-analyst': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Engineering, Business Administration (BBA), Commerce (B.Com), Computer Science, or Economics.",
      preferredDegree: "B.Tech + MBA or Bachelor's in Business Administration / Computer Science.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; IIBA certifications (ECBA, CCBA) are respected industry credentials.",
      mandatoryRequirements: [
        "10+2 with Mathematics/Commerce.",
        "Graduation degree completed prior to joining corporate consulting or IT business analyst roles."
      ],
      preferredQualifications: [
        "ECBA (Entry Certificate in Business Analysis) from IIBA.",
        "Proficiency in requirements modeling (BRD, FRD, User Stories), SQL, and Jira."
      ],
      eligibilityCriteria: "Recruiters evaluate candidate's ability to elicit stakeholder requirements, translate business needs into technical specifications, and model business processes.",
      regulatoryNotes: "Recruitment criteria depend on corporate industry vertical (BFSI, healthcare, logistics, e-commerce)."
    },
    roadmap: {
      title: "Business Analyst Job-Preparation Roadmap",
      description: "Practical curriculum covering business requirement documentation (BRD/FRD), UML diagrams, Agile user stories, SQL, and stakeholder management.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Requirements Elicitation & Documentation (BRD/FRD)",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master requirement gathering techniques, interview stakeholders, and author Business Requirement Documents (BRD) and Functional Specs (FRD).",
          tasks: [
            "Draft complete Business Requirements Document (BRD) for an enterprise software modernization initiative",
            "Write detailed Functional Requirement Documents (FRD) with edge cases and acceptance criteria",
            "Conduct gap analysis and SWOT analysis for legacy vs modern workflow transformations"
          ],
          milestone: "Produce an end-to-end, industry-grade BRD and FRD package for a simulated banking or e-commerce workflow.",
          prerequisites: ["Analytical and written business communication skills"],
          resources: [
            { title: "IIBA BABOK Guide Overview", url: "https://www.iiba.org/standards-and-resources/babok/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Process Modeling (BPMN), UML & Wireframing",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Model business workflows using BPMN 2.0 standards, create UML diagrams (Use Case, Activity, Sequence), and build functional mockups.",
          tasks: [
            "Map 'As-Is' and 'To-Be' business processes using BPMN standard swimlane diagrams in draw.io/Lucidchart",
            "Design UML Use Case diagrams and Activity diagrams detailing actor-system interactions",
            "Create low-fidelity functional screen mockups to validate requirements with business users"
          ],
          milestone: "Deliver comprehensive BPMN and UML process flow packages for a multi-stakeholder approval workflow.",
          prerequisites: ["Step 1: Requirements Elicitation & Documentation"],
          resources: [
            { title: "Lucidchart Business Process Modeling Guide", url: "https://www.lucidchart.com/pages/bpmn-symbols-and-notation", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Agile Scrum, User Stories & Jira Management",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Decompose requirements into Agile Epics and User Stories with INVEST criteria and manage backlogs in Jira.",
          tasks: [
            "Write 30+ detailed User Stories with Gherkin acceptance criteria (Given-When-Then format)",
            "Configure a Jira Scrum project, create sprint backlogs, and track burn-down charts",
            "Write basic SQL queries to validate transactional business data and verify requirement metrics"
          ],
          milestone: "Configure a complete Jira project backlog with prioritized user stories, acceptance criteria, and sprint metrics.",
          prerequisites: ["Step 2: Process Modeling (BPMN), UML & Wireframing"],
          resources: [
            { title: "Atlassian Agile Coach", url: "https://www.atlassian.com/agile", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Case Studies, Portfolio & Business Analyst Interviews",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Assemble a business analysis portfolio containing case studies, practice behavioral/case interviews, and apply for roles.",
          tasks: [
            "Compile an online portfolio with BRD/FRD artifacts, process diagrams, and user story catalogs",
            "Practice behavioral and case study interview questions regarding stakeholder conflict resolution and scope creep",
            "Apply to 25+ business analyst and functional consultant roles across IT services, BFSI, and fintech firms"
          ],
          milestone: "Complete 5 mock case study interviews and submit tailored business analyst job applications.",
          prerequisites: ["Step 3: Agile Scrum, User Stories & Jira Management"],
          resources: [
            { title: "Modern Analyst Resources", url: "https://www.modernanalyst.com/", type: "platform", isFree: true }
          ]
        }
      ]
    }
  },

  'product-manager': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Engineering, Computer Science, Business Administration, Economics, or any graduate degree.",
      preferredDegree: "B.Tech + MBA or equivalent dual degree.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; recruitment evaluates product sense, roadmap prioritization, and data-driven decision making.",
      mandatoryRequirements: [
        "10+2 with Mathematics/Commerce/Science.",
        "Graduation degree completed prior to formal corporate employment."
      ],
      preferredQualifications: [
        "Demonstrated experience launching or managing digital products (APM programs, startup experience, or product teardown portfolio).",
        "Strong understanding of product analytics (Mixpanel, Amplitude, Google Analytics) and customer discovery."
      ],
      eligibilityCriteria: "Recruiters evaluate candidate's product vision, ability to prioritize feature backlogs, metric identification (North Star metrics), and cross-functional leadership.",
      regulatoryNotes: "Recruitment criteria depend on company stage (early-stage startup vs enterprise technology company)."
    },
    roadmap: {
      title: "Product Manager Job-Preparation Roadmap",
      description: "Strategic curriculum covering customer discovery, product teardowns, Product Requirement Documents (PRDs), metric tracking, and roadmap prioritization.",
      totalDurationMonths: 4,
      totalDurationFormatted: "4 months",
      steps: [
        {
          stepNumber: 1,
          title: "Product Discovery & Market Opportunity Analysis",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Master product discovery: market sizing (TAM/SAM/SOM), competitive analysis, customer problem interviews, and value propositions.",
          tasks: [
            "Conduct competitive benchmark analysis evaluating 3 market leaders in a chosen tech sector (e.g., Quick Commerce, EdTech)",
            "Calculate Total Addressable Market (TAM) for a novel mobile application concept",
            "Synthesize customer interview findings into clear product opportunity solution trees"
          ],
          milestone: "Produce an in-depth market opportunity assessment report identifying an underserved user segment.",
          prerequisites: ["Analytical and strategic problem-solving skills"],
          resources: [
            { title: "Product School Free Resources", url: "https://productschool.com/resources", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Product Requirements Documentation (PRD) & Roadmap",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Author comprehensive Product Requirement Documents (PRD), establish prioritization frameworks (RICE, Kano), and build product roadmaps.",
          tasks: [
            "Draft an industry-grade PRD for a core feature: problem context, user stories, functional scope, out-of-scope, and edge cases",
            "Prioritize a 15-item product feature backlog using the RICE (Reach, Impact, Confidence, Effort) scoring model",
            "Design a quarterly product roadmap timeline balancing customer requests, tech debt, and strategic bets"
          ],
          milestone: "Author and review a comprehensive Product Requirement Document (PRD) with engineering and design specifications.",
          prerequisites: ["Step 1: Product Discovery & Market Opportunity Analysis"],
          resources: [
            { title: "Lenny's Newsletter Product Guides", url: "https://www.lennysnewsletter.com/", type: "platform", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Product Analytics, A/B Testing & Growth Metrics",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Define North Star metrics, build acquisition/retention funnels, design controlled A/B experiments, and analyze cohort curves.",
          tasks: [
            "Define primary North Star metric and supporting L1/L2 input metrics for a subscription service",
            "Design an A/B experimentation plan with hypothesis, sample size calculation, and statistical significance thresholds",
            "Analyze user onboarding funnel drop-offs and propose high-impact UX experiments to improve conversion"
          ],
          milestone: "Deliver an end-to-end product experimentation and funnel analysis proposal with measurable metric goals.",
          prerequisites: ["Step 2: Product Requirements Documentation (PRD) & Roadmap"],
          resources: [
            { title: "Amplitude Product Analytics Guide", url: "https://amplitude.com/guides", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Product Teardowns, Portfolio & APM/PM Interviews",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Publish 2 detailed product teardowns, practice product design/estimation interview questions, and apply for Associate PM roles.",
          tasks: [
            "Publish 2 detailed product teardown decks analyzing features, metrics, and growth opportunities of popular Indian apps",
            "Practice core PM interview frameworks: Product Sense, GTM strategy, root-cause metric diagnosis, and estimation questions",
            "Apply to 20+ Associate Product Manager (APM) and Junior PM programs across Indian tech startups and product enterprises"
          ],
          milestone: "Complete 5 mock product sense and analytics interviews and submit targeted PM applications.",
          prerequisites: ["Step 3: Product Analytics, A/B Testing & Growth Metrics"],
          resources: [
            { title: "Exponent PM Interview Prep", url: "https://www.tryexponent.com/", type: "platform", isFree: true }
          ]
        }
      ]
    }
  },

  'it-support-specialist': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in BCA, B.Sc IT, Computer Science, or 3-year Polytechnic Diploma in Computer / IT / Electronics.",
      preferredDegree: "BCA, B.Sc Computer Science, or B.Tech in IT.",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; recognized hardware/support certifications (CompTIA A+, Microsoft MD-102) are preferred.",
      mandatoryRequirements: [
        "10+2 with minimum passing criteria.",
        "Graduation or diploma completed prior to joining corporate desktop/IT support."
      ],
      preferredQualifications: [
        "CompTIA A+ or CompTIA Network+ certification.",
        "Hands-on experience with Windows 10/11 enterprise administration, Active Directory, and ticketing systems (ServiceNow/Jira Service Desk)."
      ],
      eligibilityCriteria: "Recruiters evaluate candidate's hardware troubleshooting, operating system re-imaging, basic networking diagnostics, and user customer service skills.",
      regulatoryNotes: "Recruitment criteria depend on company desktop infrastructure and IT support shifts."
    },
    roadmap: {
      title: "IT Support Specialist Job-Preparation Roadmap",
      description: "Practical curriculum covering PC hardware diagnostics, Windows/Linux OS troubleshooting, Active Directory user management, networking, and ticketing.",
      totalDurationMonths: 3,
      totalDurationFormatted: "3 months",
      steps: [
        {
          stepNumber: 1,
          title: "Hardware Diagnostics & Operating System Setup",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Diagnose hardware components (RAM, SSD, Motherboard), configure BIOS/UEFI, and automate OS deployments.",
          tasks: [
            "Disassemble and reassemble desktop computer systems, test RAM errors, and replace thermal paste",
            "Perform clean installations of Windows 11 Enterprise and Ubuntu Desktop with partition management",
            "Troubleshoot BSOD (Blue Screen of Death) memory crash dumps and driver conflicts"
          ],
          milestone: "Successfully diagnose and repair simulated hardware and OS boot failures on desktop and laptop machines.",
          prerequisites: ["Basic computer usage"],
          resources: [
            { title: "CompTIA A+ Study Guide & Objectives", url: "https://www.comptia.org/certifications/a", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Active Directory, Group Policy & Ticketing Systems",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Manage enterprise identity using Active Directory / Azure AD (Entra ID), enforce Group Policies, and handle IT tickets.",
          tasks: [
            "Create user accounts, manage security groups, reset passwords, and assign email licenses in Microsoft 365 / Active Directory",
            "Configure Group Policy Objects (GPOs) restricting USB drives and enforcing screen lock timeouts",
            "Manage incident workflows in a free ticketing platform (Jira Service Management or osTicket)"
          ],
          milestone: "Administer user onboarding, permissions, and ticket resolutions in a simulated Active Directory lab.",
          prerequisites: ["Step 1: Hardware Diagnostics & Operating System Setup"],
          resources: [
            { title: "Microsoft Learn Windows Client & Active Directory", url: "https://learn.microsoft.com/en-us/windows/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Network Troubleshooting & Helpdesk Interviews",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Troubleshoot network connectivity (ping, tracert, ipconfig), VPN connections, and interview for Desktop Support Engineer roles.",
          tasks: [
            "Diagnose DNS resolution, DHCP lease, gateway, and corporate VPN connectivity problems",
            "Configure network printers, Wi-Fi 802.1x authentication, and remote desktop tools (TeamViewer/AnyDesk)",
            "Apply to 25+ IT Support, Desktop Engineer, and Helpdesk positions across corporate enterprises and IT services firms"
          ],
          milestone: "Complete 5 mock IT support troubleshooting interviews and submit job applications.",
          prerequisites: ["Step 2: Active Directory, Group Policy & Ticketing Systems"],
          resources: [
            { title: "Microsoft Support Knowledge Base", url: "https://support.microsoft.com/", type: "official", isFree: true }
          ]
        }
      ]
    }
  },

  'solutions-architect': {
    educationQualification: {
      minimumQualification: "Bachelor's degree in Computer Science, Information Technology, Software Engineering, or related discipline.",
      preferredDegree: "B.Tech in Computer Science / IT or Master's degree (M.Tech, MCA).",
      requiredProfessionalDegreeOrLicense: "No statutory government license required; professional cloud architect certifications (AWS Certified Solutions Architect Professional, Google Cloud PCA) are industry benchmarks.",
      mandatoryRequirements: [
        "10+2 with Mathematics/Science.",
        "Graduation degree completed with prior background in software development or cloud engineering."
      ],
      preferredQualifications: [
        "AWS Certified Solutions Architect Professional (SAP-C02) or Azure Solutions Architect Expert (AZ-305).",
        "Deep understanding of distributed systems, high availability, microservices, cloud security, and cost governance."
      ],
      eligibilityCriteria: "Recruiters evaluate candidate's ability to translate complex business objectives into scalable, resilient, and cost-effective enterprise cloud architectures.",
      regulatoryNotes: "Recruitment criteria depend on enterprise consulting scale and cloud provider partnerships."
    },
    roadmap: {
      title: "Solutions Architect Job-Preparation Roadmap",
      description: "Senior architectural curriculum covering enterprise system design, multi-region high availability, microservices patterns, cloud governance, and client presentations.",
      totalDurationMonths: 5,
      totalDurationFormatted: "5 months",
      steps: [
        {
          stepNumber: 1,
          title: "Enterprise System Design & Architecture Patterns",
          durationMonths: 2,
          durationText: "2 months",
          category: "learning",
          description: "Master distributed systems: CAP theorem, event-driven architectures, CQRS, saga pattern, microservices decomposition, and database sharding.",
          tasks: [
            "Design end-to-end architectural blueprints for a multi-million user transaction platform (e.g., UPI payments or Streaming service)",
            "Compare monolithic vs microservices tradeoffs, asynchronous messaging (Kafka/RabbitMQ), and cache topologies",
            "Calculate capacity requirements: storage growth, network throughput, and compute IOPS"
          ],
          milestone: "Deliver a comprehensive architectural blueprint document detailing system trade-offs and capacity planning.",
          prerequisites: ["Solid background in software development and cloud operations"],
          resources: [
            { title: "AWS Well-Architected Framework", url: "https://aws.amazon.com/architecture/well-architected/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 2,
          title: "Multi-Region Resiliency, Security & Compliance",
          durationMonths: 1,
          durationText: "1 month",
          category: "learning",
          description: "Design multi-region disaster recovery (Active-Active, Active-Passive), zero-trust security architectures, and regulatory compliance (RBI/GDPR).",
          tasks: [
            "Architect multi-region failover using global load balancers and cross-region database replication",
            "Enforce cloud security governance: identity federation (SAML/OIDC), KMS encryption keys, and network micro-segmentation",
            "Structure data residency architectures conforming to Indian digital data protection (DPDP) and RBI localization norms"
          ],
          milestone: "Produce an enterprise security and compliance architectural blueprint conforming to Indian data privacy regulations.",
          prerequisites: ["Step 1: Enterprise System Design & Architecture Patterns"],
          resources: [
            { title: "Microsoft Cloud Adoption Framework", url: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 3,
          title: "Cloud Cost Optimization & FinOps Governance",
          durationMonths: 1,
          durationText: "1 month",
          category: "project",
          description: "Analyze Total Cost of Ownership (TCO), implement cloud financial management (FinOps), and architect for cost efficiency.",
          tasks: [
            "Conduct comprehensive cloud cost audit identifying orphaned disks, over-provisioned instances, and idle resources",
            "Architect auto-scaling spot instance workloads and savings plan coverage optimizing operational spend by 30%+",
            "Draft cloud migration business cases comparing on-premise datacenter capital expenditure with cloud operational expenditure"
          ],
          milestone: "Deliver a FinOps cloud architecture proposal demonstrating 30% verified cost reduction.",
          prerequisites: ["Step 2: Multi-Region Resiliency, Security & Compliance"],
          resources: [
            { title: "FinOps Foundation Framework", url: "https://www.finops.org/framework/", type: "official", isFree: true }
          ]
        },
        {
          stepNumber: 4,
          title: "Executive Presentation & Architectural Interviews",
          durationMonths: 1,
          durationText: "1 month",
          category: "job_search",
          description: "Prepare client-facing architectural pitch presentations, defend trade-offs in mock design reviews, and apply for Solutions Architect roles.",
          tasks: [
            "Prepare executive slide deck and technical design document for a major enterprise cloud migration",
            "Practice architectural defense interviews answering questions on resiliency, trade-offs, and cost constraints",
            "Apply to 20+ Solutions Architect, Enterprise Architect, and Cloud Consultant positions across global cloud consultancies and tech enterprises"
          ],
          milestone: "Successfully defend complex enterprise architecture in 3 mock board/executive review sessions and submit applications.",
          prerequisites: ["Step 3: Cloud Cost Optimization & FinOps Governance"],
          resources: [
            { title: "Google Cloud Architecture Framework", url: "https://cloud.google.com/architecture/framework", type: "official", isFree: true }
          ]
        }
      ]
    }
  }
};
