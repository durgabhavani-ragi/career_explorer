/**
 * Technology Careers Audit Data - Part 2 (Careers 12 to 23)
 * Validated for Indian employment market, realistic compensation benchmarks,
 * eligible education pathways, and sequential roadmap milestones.
 */

const techPart2 = [
  {
    slug: 'machine-learning-engineer',
    title: 'Machine Learning Engineer',
    description: 'Bridges theoretical data science with production software engineering. Builds, trains, optimizes, and deploys high-scale ML models into production microservices with continuous monitoring and automated retraining pipelines (MLOps).',
    educationRequirements: 'B.Tech/M.Tech in CS/IT/Data Science, or Master\'s in AI/Applied Mathematics. Strong proficiency in Python, PyTorch/TensorFlow, Docker, and MLOps tools (MLflow, Kubeflow).',
    educationPathways: [
      'B.Tech / B.E. in Computer Science or AI/ML (4 years)',
      'M.Tech in Artificial Intelligence / Machine Learning (2 years via GATE CS/DA)',
      'Master of Science (MS) by Research or specialized MLOps industry bootcamps'
    ],
    eligibilityRequirements: 'Strong software engineering skills combined with mathematical intuition for machine learning architectures, loss functions, and inference latency optimization.',
    certificationsAndExams: [
      'AWS Certified Machine Learning - Specialty',
      'Google Cloud Professional Machine Learning Engineer',
      'DeepLearning.AI Machine Learning Specialization'
    ],
    workEnvironment: 'AI research labs, autonomous systems companies, enterprise SaaS unicorns, and GCCs in Bengaluru, Hyderabad, Gurugram, and Pune; hybrid.',
    marketDemand: 'High',
    jobOutlook: 'Rapidly accelerating demand as Indian enterprises shift from experimental ML notebooks to production-grade model serving at scale.',
    salaryRange: { min: 700000, max: 3000000, currency: 'INR', source: 'AmbitionBox ML Engineer Survey 2024, PayScale India' },
    salarySource: 'AmbitionBox ML Engineer Survey 2024, PayScale India',
    salaryByExperience: {
      entryLevel: { min: 700000, max: 1200000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 1200000, max: 2100000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 2100000, max: 3800000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Engineers who excel in model quantization, GPU memory optimization (TensorRT, ONNX), and distributed training command premium tier compensation exceeding ₹40+ LPA.'
    },
    careerProgression: [
      'Junior Machine Learning Engineer',
      'ML Engineer (Model Training & Deployment)',
      'Senior ML Engineer / MLOps Lead',
      'Staff ML Architect / AI Infrastructure Lead',
      'Director of Machine Learning / VP of AI Engineering'
    ],
    employmentSectors: {
      government: 'Defence Artificial Intelligence Council (DAIC / DRDO), Centre for AI & Robotics (CAIR), National Informatics Centre AI platform',
      privateSector: 'Autonomous Vehicles (Ola Electric, Mahindra Tech), E-commerce (Swiggy recommendations, Flipkart visual search), Global AI GCCs'
    },
    timelineOverview: {
      totalEstimatedDuration: '8 - 12 Months dedicated study and MLOps deployment',
      educationDuration: '4 Years B.Tech or 2 Years Master\'s degree',
      prepDuration: '5–7 Months ML algorithms, PyTorch, and distributed training',
      practicalTrainingDuration: '3–5 Months containerizing models and deploying MLOps pipelines',
      jobSearchDuration: '3–5 Months technical systems coding and ML architecture rounds',
      overlapNotes: 'Docker containerization and API design are practiced alongside PyTorch model training.',
      confidenceNote: 'Interviews evaluate both algorithmic understanding and software engineering skills (Git, Docker, testing, latency optimization).'
    },
    sources: [
      { title: 'AmbitionBox Machine Learning Engineer Salary in India', url: 'https://www.ambitionbox.com/salaries/machine-learning-engineer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' },
      { title: 'Google Cloud Machine Learning Certification Guide', url: 'https://cloud.google.com/learn/certification/machine-learning-engineer', sourceAuthority: 'Google Cloud', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Machine Learning Engineer Career Roadmap',
      description: 'Progression from applied ML modeling and PyTorch deep learning to model serving (FastAPI/Triton), containerization, and automated MLOps pipelines.',
      totalEstimatedDuration: '8 - 12 Months',
      durationBreakdown: 'Applied ML & Math: 8 weeks | Deep Learning with PyTorch: 10 weeks | Model Serving & Optimization (ONNX/TensorRT): 6-8 weeks | MLOps, CI/CD & Monitoring: 6-8 weeks',
      overlapNotes: 'Model quantization and deployment are built on top of the deep learning projects.',
      steps: [
        {
          stepNumber: 1,
          title: 'Applied Machine Learning & Feature Engineering Pipelines',
          stageType: 'Skill Acquisition',
          description: 'Master data preprocessing, feature engineering pipelines (Scikit-Learn ColumnTransformer), gradient boosting (XGBoost/LightGBM), and evaluation metrics (ROC-AUC, F1).',
          skillsToAcquire: ['Feature Engineering Pipelines', 'Ensemble Tree Algorithms', 'Model Evaluation & Cross-Validation', 'Data Leakage Prevention'],
          activities: ['Build an end-to-end reproducible tabular classification pipeline on a real-world dataset', 'Serialize pipelines using Joblib/ONNX'],
          estimatedTime: '8 weeks',
          completionCriteria: 'Reproducible feature engineering and ML training script with unit tests and baseline metrics.',
          dependencies: 'Python programming and linear algebra/statistics basics.',
          resources: [
            { title: 'Scikit-Learn User Guide', url: 'https://scikit-learn.org/stable/user_guide.html', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Deep Learning with PyTorch & Model Architectures',
          stageType: 'Skill Acquisition',
          description: 'Build neural network architectures in PyTorch, implement custom loss functions, training loops with mixed-precision (AMP), and fine-tune pre-trained models.',
          skillsToAcquire: ['PyTorch Custom Modules & Datasets', 'Automatic Mixed Precision (AMP)', 'Transfer Learning & Fine-Tuning', 'Hyperparameter Optimization (Optuna)'],
          activities: ['Train a computer vision or text classifier in PyTorch using transfer learning', 'Track experiment loss curves and metrics using Weights & Biases'],
          estimatedTime: '10 weeks',
          completionCriteria: 'Trained deep learning model converging with documented validation metrics and experiment tracking.',
          dependencies: 'Applied machine learning fundamentals (Step 1).',
          resources: [
            { title: 'PyTorch Deep Learning Tutorials', url: 'https://pytorch.org/tutorials/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Model Serving, Quantization & Low-Latency Inference',
          stageType: 'Portfolio & Projects',
          description: 'Package models for inference using FastAPI, optimize models with ONNX Runtime and TensorRT, reduce latency via quantization (FP16/INT8), and batch requests.',
          skillsToAcquire: ['FastAPI Asynchronous Inference', 'Model Quantization (INT8/FP16)', 'ONNX Runtime Optimization', 'Triton Inference Server Basics'],
          activities: ['Convert a PyTorch model to ONNX format and benchmark 3x throughput improvement', 'Deploy an asynchronous FastAPI inference service handling 50 concurrent requests'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Benchmarked low-latency inference microservice serving predictions with sub-50ms latency.',
          dependencies: 'Deep learning model training.',
          resources: [
            { title: 'ONNX Runtime Documentation', url: 'https://onnxruntime.ai/docs/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'MLOps, Continuous Integration & Drift Monitoring',
          stageType: 'Skill Acquisition',
          description: 'Implement ML model registry (MLflow), data versioning (DVC), automated retraining pipelines with GitHub Actions, and data/concept drift monitoring (Evidently AI).',
          skillsToAcquire: ['MLflow Model Registry & Tracking', 'Data Version Control (DVC)', 'Automated Retraining Pipelines', 'Data Drift & Model Decay Detection'],
          activities: ['Build an automated MLOps pipeline on GitHub that triggers retraining when data drifts', 'Deploy the complete containerized solution on AWS ECS with CloudWatch monitoring'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Production-ready MLOps pipeline featuring model registry, automated testing, and live drift alerts.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'MLflow Official Documentation', url: 'https://mlflow.org/docs/latest/index.html', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'ai-engineer',
    title: 'AI Engineer',
    description: 'Builds generative AI systems, autonomous agent workflows, and conversational interfaces powered by Large Language Models (LLMs). Implements Retrieval-Augmented Generation (RAG), vector embeddings, and multi-modal integrations.',
    educationRequirements: 'B.Tech/B.E. in CS/IT, MCA, or relevant software background. Strong expertise in Python/TypeScript, LLM APIs (OpenAI, Anthropic, Gemini, Llama), LangChain/LlamaIndex, and vector databases.',
    educationPathways: [
      'B.Tech / B.E. in Computer Science, AI, or Information Technology (4 years)',
      'M.Tech in Artificial Intelligence or Data Science (2 years)',
      'Specialized Generative AI & LLM Systems engineering certifications'
    ],
    eligibilityRequirements: 'No formal licensing. Proven experience integrating foundation models, designing robust prompt pipelines, vector similarity search, and evaluation frameworks.',
    certificationsAndExams: [
      'AWS Certified AI Practitioner',
      'DeepLearning.AI Generative AI with LLMs',
      'LangChain Certified Developer'
    ],
    workEnvironment: 'AI startups, enterprise innovation centers, product labs, and Global Capability Centers across Bengaluru, Gurugram, Hyderabad, and Pune; heavy remote adoption.',
    marketDemand: 'High',
    jobOutlook: 'One of the fastest-growing technology roles globally and in India, driven by enterprise adoption of generative AI copilots, customer support automation, and knowledge synthesis.',
    salaryRange: { min: 750000, max: 3200000, currency: 'INR', source: 'NASSCOM AI Talent Report 2024, AmbitionBox India' },
    salarySource: 'NASSCOM AI Talent Report 2024, AmbitionBox India',
    salaryByExperience: {
      entryLevel: { min: 750000, max: 1300000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 1300000, max: 2200000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 2200000, max: 4000000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Engineers who master custom open-source model fine-tuning (LoRA/QLoRA) and complex multi-agent reasoning frameworks command top-tier compensation packages.'
    },
    careerProgression: [
      'Junior AI Engineer',
      'Generative AI / LLM Engineer',
      'Senior AI Engineer / Applied AI Lead',
      'Principal AI Systems Architect',
      'Head of AI / Chief Artificial Intelligence Officer'
    ],
    employmentSectors: {
      government: 'Bhashini (National Language Translation Mission), AI for Bharat initiatives, Ministry of Electronics & IT (MeitY) AI applications',
      privateSector: 'Enterprise SaaS (Freshworks, Zoho AI), Tech Unicorns, Global Capability Centers, Generative AI Product Studios'
    },
    timelineOverview: {
      totalEstimatedDuration: '6 - 9 Months focused learning on GenAI architectures',
      educationDuration: '4 Years formal degree (or strong software development track record)',
      prepDuration: '3–5 Months LLM fundamentals, prompt engineering, and RAG architectures',
      practicalTrainingDuration: '2–4 Months building production agentic applications and fine-tuning',
      jobSearchDuration: '2–4 Months live product demonstrations and architectural interviews',
      overlapNotes: 'Vector search and prompt evaluations are implemented directly within RAG projects.',
      confidenceNote: 'Portfolios must showcase real-world solutions solving hallucinations, token cost optimization, and latency challenges.'
    },
    sources: [
      { title: 'NASSCOM India AI Talent Index 2024', url: 'https://nasscom.in', sourceAuthority: 'NASSCOM', verifiedDate: '2024-10-14' },
      { title: 'LangChain Official Documentation', url: 'https://docs.langchain.com', sourceAuthority: 'LangChain Inc.', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'AI Engineer (Generative AI & LLMs) Roadmap',
      description: 'Modern engineering roadmap from prompt engineering and vector embeddings to advanced Retrieval-Augmented Generation (RAG) and autonomous multi-agent systems.',
      totalEstimatedDuration: '6 - 9 Months',
      durationBreakdown: 'LLM Fundamentals & Prompt Engineering: 4 weeks | Vector Databases & Embeddings: 4-6 weeks | Production RAG Architecture: 6-8 weeks | Fine-Tuning & Multi-Agent Workflows: 6-8 weeks',
      overlapNotes: 'Evaluation frameworks (Ragas/TruLens) are introduced during RAG implementation.',
      steps: [
        {
          stepNumber: 1,
          title: 'LLM Foundations, API Integration & Prompt Engineering',
          stageType: 'Skill Acquisition',
          description: 'Master foundation models (GPT-4, Claude, Gemini, Llama 3), API integrations, structured outputs (JSON mode), and advanced prompt techniques (Few-Shot, Chain-of-Thought).',
          skillsToAcquire: ['LLM APIs & Tokenization', 'Prompt Engineering (CoT, ReAct)', 'Structured Output Parsing (Pydantic)', 'Token Economics & Rate Limiting'],
          activities: ['Build an automated data extraction and summarization CLI using Python and OpenAI/Gemini APIs', 'Implement robust error retry logic and fallback models'],
          estimatedTime: '4 weeks',
          completionCriteria: 'Production-ready Python utility parsing unstructured documents into validated Pydantic models.',
          dependencies: 'Proficiency in Python programming and REST APIs.',
          resources: [
            { title: 'OpenAI Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Embeddings, Vector Databases & Semantic Search',
          stageType: 'Skill Acquisition',
          description: 'Understand high-dimensional vector embeddings, cosine similarity, indexing algorithms (HNSW), and setup vector databases (Pinecone, Qdrant, ChromaDB, PGVector).',
          skillsToAcquire: ['Dense Vector Embeddings', 'Vector Search Algorithms (HNSW, IVFFlat)', 'Vector DBs (Pinecone / Qdrant / PGVector)', 'Hybrid Search (Dense + Sparse BM25)'],
          activities: ['Index 1,000+ technical PDF documents into a vector database with metadata filtering', 'Benchmark search accuracy between pure semantic and hybrid keyword search'],
          estimatedTime: '4 - 6 weeks',
          completionCriteria: 'Fast semantic search engine returning top-k relevant document chunks within 100ms.',
          dependencies: 'LLM fundamentals (Step 1).',
          resources: [
            { title: 'Pinecone Vector Database Architecture', url: 'https://www.pinecone.io/learn/', type: 'Course' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Production RAG Architecture & Hallucination Guardrails',
          stageType: 'Portfolio & Projects',
          description: 'Build enterprise Retrieval-Augmented Generation (RAG) pipelines: document chunking strategies, re-ranking (Cohere Rerank), query transformation, and evaluation with Ragas.',
          skillsToAcquire: ['RAG Pipeline Architecture', 'Context Window Chunking Strategies', 'Cross-Encoder Re-Ranking', 'RAG Evaluation Metrics (Faithfulness, Relevance)'],
          activities: ['Build an interactive enterprise knowledge base assistant for internal documentation', 'Evaluate and benchmark RAG accuracy using Ragas or TruLens frameworks'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Production-ready RAG application with 90%+ measured faithfulness and verifiable citation links.',
          dependencies: 'Vector search and prompt engineering.',
          resources: [
            { title: 'LlamaIndex Documentation', url: 'https://docs.llamaindex.ai/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Autonomous Multi-Agent Workflows & Local Model Fine-Tuning',
          stageType: 'Skill Acquisition',
          description: 'Orchestrate multi-agent systems using LangGraph or CrewAI, integrate external tools via function calling, and fine-tune open models (Llama 3, Mistral) with LoRA/QLoRA.',
          skillsToAcquire: ['Multi-Agent Systems (LangGraph / CrewAI)', 'Tool Calling & Function Execution', 'PEFT, LoRA & QLoRA Fine-Tuning', 'Local LLM Deployment (Ollama / vLLM)'],
          activities: ['Build an autonomous financial research agent team that searches the web, analyzes reports, and writes a synthesis document', 'Fine-tune an open-source 8B model using HuggingFace and Unsloth on Google Colab'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Working multi-agent system executing multi-step autonomous tool calls and a fine-tuned specialized model.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'LangGraph Multi-Agent Guide', url: 'https://langchain-ai.github.io/langgraph/', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'ai-research-scientist',
    title: 'AI Research Scientist',
    description: 'Conducts fundamental and applied research in artificial intelligence, deep learning theory, computer vision, and cognitive architectures. Publishes peer-reviewed research papers in top-tier conferences (NeurIPS, ICML, CVPR, ICLR).',
    educationRequirements: 'Ph.D. or research Master\'s (MS by Research / M.Tech Research) in Computer Science, Artificial Intelligence, or Applied Mathematics. Proven track record of primary authorship publications in Scopus/CORE A* conferences.',
    educationPathways: [
      'B.Tech in CS/EE (IIT/NIT/BITS) followed by Ph.D. in Computer Science/AI (4-5 years)',
      'M.Tech / MS by Research in AI followed by Doctoral research fellowship',
      'Direct Ph.D. programs in premier Indian research institutes (IISc Bangalore, IITs, IIIT Hyderabad, TIFR)'
    ],
    eligibilityRequirements: 'Advanced mathematical expertise in optimization theory, probability theory, linear algebra, and deep learning architectures with demonstrated original research contributions.',
    certificationsAndExams: [
      'GATE Computer Science / Data Science (top percentile for IISc/IIT Ph.D. admission)',
      'CSIR-UGC NET for Junior Research Fellowship (JRF)',
      'Google Ph.D. Fellowship / Microsoft Research India Fellowship'
    ],
    workEnvironment: 'Corporate research laboratories (Microsoft Research India, Google DeepMind India, IBM Research, Adobe Research), premier academic institutes (IISc, IITs), and AI defense labs.',
    marketDemand: 'Moderate',
    jobOutlook: 'Highly selective, elite career pathway with tremendous industry and national priority as India expands the IndiaAI Mission and indigenous sovereign foundational models.',
    salaryRange: { min: 1000000, max: 4500000, currency: 'INR', source: 'Michael Page India Tech Benchmark 2024, Glassdoor India' },
    salarySource: 'Michael Page India Tech Benchmark 2024, Glassdoor India',
    salaryByExperience: {
      entryLevel: { min: 1000000, max: 1800000, label: 'Post-Doc / Research Fellow (0–2 yrs)' },
      earlyCareer: { min: 1800000, max: 3200000, label: 'Research Scientist (3–5 yrs)' },
      experienced: { min: 3200000, max: 6000000, label: 'Principal Research Scientist (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Top international corporate research labs in Bengaluru offer compensation packages exceeding ₹50–80+ LPA inclusive of stock grants for recognized top-conference authors.'
    },
    careerProgression: [
      'Postdoctoral Researcher / Associate Research Scientist',
      'Research Scientist',
      'Senior Research Scientist',
      'Principal Research Scientist / Research Director',
      'Head of Research / Chief Scientist'
    ],
    employmentSectors: {
      government: 'Indian Institute of Science (IISc), IIT research centers, DRDO Centre for Artificial Intelligence and Robotics (CAIR), CSIR labs',
      privateSector: 'Microsoft Research India (Bengaluru), Google DeepMind India, IBM Research India, Samsung R&D Institute, Adobe Research'
    },
    timelineOverview: {
      totalEstimatedDuration: '5 - 7 Years (B.Tech + Ph.D. or Master\'s + Ph.D.)',
      educationDuration: '4 Years B.Tech + 4–5 Years Ph.D. Research',
      prepDuration: '1–2 Years rigorous doctoral coursework and literature review',
      practicalTrainingDuration: '2–3 Years original laboratory experimentation and paper submissions',
      jobSearchDuration: '4–6 Months academic job talks, technical colloquiums, and lab interviews',
      overlapNotes: 'Doctoral research and paper publishing are integrated into the Ph.D. curriculum.',
      confidenceNote: 'Hiring is determined almost exclusively by publication quality, citation indices (h-index), and peer review recommendations.'
    },
    sources: [
      { title: 'Microsoft Research India Laboratory', url: 'https://www.microsoft.com/en-us/research/lab/microsoft-research-india/', sourceAuthority: 'Microsoft Research', verifiedDate: '2024-10-14' },
      { title: 'IndiaAI Mission - Ministry of Electronics & IT', url: 'https://indiaai.gov.in', sourceAuthority: 'MeitY Government of India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'AI Research Scientist Career Roadmap',
      description: 'Rigorous academic and research roadmap from mathematical theory and foundational literature review to novel architectural design and international conference publications.',
      totalEstimatedDuration: '5 - 7 Years (Doctoral Path)',
      durationBreakdown: 'Advanced Mathematical Rigor & Coursework: 1-2 years | Research Literature & Hypothesis Formulation: 1 year | Laboratory Experimentation & Novel Architectures: 2 years | Dissertation Defense & Conference Publishing: 1-2 years',
      overlapNotes: 'Coursework and conference submissions proceed concurrently during doctoral studies.',
      steps: [
        {
          stepNumber: 1,
          title: 'Advanced Mathematics, Optimization & Statistical Theory',
          stageType: 'Formal Education',
          description: 'Master convex and non-convex optimization, stochastic gradient methods, measure-theoretic probability, information theory, and matrix analysis.',
          skillsToAcquire: ['Convex Optimization (Boyd)', 'Information Theory & Entropy', 'Stochastic Calculus & Martingales', 'Matrix Decompositions & High-Dimensional Geometry'],
          activities: ['Clear GATE with top percentile and secure Ph.D. research fellowship at IISc/IIT', 'Complete advanced graduate coursework in Machine Learning Theory with A+ grades'],
          estimatedTime: '12 - 18 months',
          completionCriteria: 'Clear comprehensive Ph.D. qualifying examination (CQE) and obtain doctoral candidacy.',
          dependencies: 'Undergraduate engineering mathematics or Master\'s degree.',
          resources: [
            { title: 'Convex Optimization - Stephen Boyd', url: 'https://web.stanford.edu/~boyd/cvxbook/', type: 'Book' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Literature Review, Novel Hypothesis & Baseline Replication',
          stageType: 'Examination Preparation',
          description: 'Perform deep critical surveys of state-of-the-art literature across NeurIPS/ICML/CVPR, replicate landmark research papers, and identify open theoretical bottlenecks.',
          skillsToAcquire: ['Literature Review Synthesis', 'Reproducibility & Rigorous Benchmarking', 'Research Hypothesis Formulation', 'PyTorch Distributed Research Codebases'],
          activities: ['Replicate the mathematical claims and experimental results of 3 recent NeurIPS papers from scratch', 'Present research proposal to doctoral advisory committee'],
          estimatedTime: '12 months',
          completionCriteria: 'Approved doctoral research proposal with verified experimental baselines.',
          dependencies: 'Doctoral candidacy and advanced coursework.',
          resources: [
            { title: 'Papers With Code - SOTA Benchmarks', url: 'https://paperswithcode.com/', type: 'Other' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Novel Algorithmic Experimentation & Conference Publication',
          stageType: 'Portfolio & Projects',
          description: 'Design novel deep learning architectures, formulate mathematical proofs of convergence, conduct extensive ablation experiments on GPU clusters, and draft papers.',
          skillsToAcquire: ['Novel Model Architecture Design', 'Mathematical Convergence Proofs', 'Scientific Technical Writing in LaTeX', 'Peer Review Response & Rebuttals'],
          activities: ['Submit primary author research paper to NeurIPS, ICML, ICLR, or CVPR', 'Incorporate peer reviewer feedback during the conference rebuttal phase'],
          estimatedTime: '24 months',
          completionCriteria: 'At least 2 primary author publications accepted in CORE A* or Scopus-indexed top-tier conferences.',
          dependencies: 'Approved research proposal.',
          resources: [
            { title: 'NeurIPS Conference Proceedings', url: 'https://proceedings.neurips.cc/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Dissertation Defense & Corporate Lab Colloquium',
          stageType: 'Recruitment & Job Search',
          description: 'Author and defend doctoral thesis, present research colloquiums at corporate research labs (MSR, Google, IBM), and secure research scientist appointments.',
          skillsToAcquire: ['Doctoral Thesis Writing', 'Research Colloquium Presentation', 'Grant Writing & Research Roadmapping', 'Scientific Collaboration'],
          activities: ['Successfully defend Ph.D. dissertation before an international evaluation committee', 'Complete research internship at an industrial AI research laboratory'],
          estimatedTime: '6 - 12 months',
          completionCriteria: 'Ph.D. degree conferral and appointment as Research Scientist at a premier laboratory.',
          dependencies: 'Accepted conference publications.',
          resources: [
            { title: 'Google Research Publications Portal', url: 'https://research.google/pubs/', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'nlp-engineer',
    title: 'NLP Engineer',
    description: 'Designs and builds natural language processing models and speech systems that understand, parse, translate, and generate human language, with special emphasis on Indian multilingual tokenization and localization.',
    educationRequirements: 'B.Tech/M.Tech in CS/IT/Data Science, or Master\'s in Computational Linguistics. Strong skills in Python, Transformers (Hugging Face), PyTorch, tokenization algorithms, and evaluation metrics.',
    educationPathways: [
      'B.Tech / B.E. in Computer Science or IT (4 years)',
      'M.Tech in Artificial Intelligence or Data Science (2 years)',
      'M.A. / M.Sc in Computational Linguistics followed by applied NLP engineering programs'
    ],
    eligibilityRequirements: 'Strong understanding of linguistics, tokenizers (BPE, WordPiece), attention mechanisms, transformer architectures, and multilingual language models.',
    certificationsAndExams: [
      'Hugging Face NLP Course Certification',
      'DeepLearning.AI Natural Language Processing Specialization',
      'AWS Certified Machine Learning - Specialty'
    ],
    workEnvironment: 'AI voice intelligence firms, telecom tech centers, customer experience platforms, and translation startups across Bengaluru, Hyderabad, Gurugram, and Chennai; hybrid.',
    marketDemand: 'High',
    jobOutlook: 'Very high sustained demand in India due to linguistic diversity (22 official scheduled languages); companies are investing heavily in vernacular chatbots and voice AI.',
    salaryRange: { min: 680000, max: 2800000, currency: 'INR', source: 'AmbitionBox NLP Specialist Survey 2024, PayScale India' },
    salarySource: 'AmbitionBox NLP Specialist Survey 2024, PayScale India',
    salaryByExperience: {
      entryLevel: { min: 680000, max: 1150000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 1150000, max: 1950000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1950000, max: 3500000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Engineers who understand speech-to-text (ASR) with Whisper, text-to-speech (TTS), and Indic multilingual models command premium salaries.'
    },
    careerProgression: [
      'Junior NLP Engineer',
      'NLP / Conversational AI Engineer',
      'Senior NLP Engineer / Language Technology Lead',
      'Staff NLP Architect / Speech AI Lead',
      'Head of Conversational AI & NLP'
    ],
    employmentSectors: {
      government: 'Digital India Bhashini Mission (multilingual AI translation models), AI4Bharat (IIT Madras), MeitY Speech Research',
      privateSector: 'Voice AI & Conversational Startups (Yellow.ai, Gupshup, Vernacular.ai/Skit), Banking Vernacular Portals, Telecom IVR Systems'
    },
    timelineOverview: {
      totalEstimatedDuration: '6 - 10 Months focused NLP and transformer study',
      educationDuration: '4 Years formal degree',
      prepDuration: '4–6 Months tokenization, transformer architectures, and Hugging Face pipelines',
      practicalTrainingDuration: '2–4 Months fine-tuning multilingual models and speech pipelines',
      jobSearchDuration: '2–4 Months technical evaluations on language modeling',
      overlapNotes: 'Multilingual data preprocessing and model fine-tuning proceed concurrently.',
      confidenceNote: 'Demonstrating working Indic language NLP models (Hindi, Tamil, Telugu, Marathi) provides a major competitive edge in the Indian market.'
    },
    sources: [
      { title: 'Hugging Face NLP Course & Documentation', url: 'https://huggingface.co/learn/nlp-course', sourceAuthority: 'Hugging Face Inc.', verifiedDate: '2024-10-14' },
      { title: 'AI4Bharat - Indic NLP Resources', url: 'https://ai4bharat.iitm.ac.in/', sourceAuthority: 'IIT Madras', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'NLP Engineer Career Roadmap',
      description: 'Structured pathway covering text preprocessing, word embeddings, transformer self-attention, Hugging Face ecosystem, and Indic multilingual language models.',
      totalEstimatedDuration: '6 - 10 Months',
      durationBreakdown: 'Text Processing & Word Embeddings: 6 weeks | Transformers & Self-Attention: 8 weeks | Hugging Face Fine-Tuning: 6-8 weeks | Multilingual Models & Speech (ASR/TTS): 6 weeks',
      overlapNotes: 'Tokenizer training and model evaluation metrics are practiced together.',
      steps: [
        {
          stepNumber: 1,
          title: 'Text Processing, Tokenization & Word Embeddings',
          stageType: 'Skill Acquisition',
          description: 'Master text normalization, regex, subword tokenization (Byte-Pair Encoding, WordPiece), and classical embeddings (Word2Vec, FastText).',
          skillsToAcquire: ['Regex & Text Cleaning', 'Subword Tokenization (BPE, SentencePiece)', 'Word2Vec & FastText Embeddings', 'Text Classification Metrics (Macro F1)'],
          activities: ['Train a custom SentencePiece tokenizer on a multilingual Indian corpus', 'Build a spam/sentiment classifier using TF-IDF and Logistic Regression as a baseline'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Custom subword tokenizer with vocabulary optimization and reproducible text cleaning pipeline.',
          dependencies: 'Python programming and linear algebra basics.',
          resources: [
            { title: 'Hugging Face Tokenizers Documentation', url: 'https://huggingface.co/docs/tokenizers/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Transformer Architecture & Self-Attention Mechanisms',
          stageType: 'Skill Acquisition',
          description: 'Deep dive into the Transformer paper ("Attention Is All You Need"): multi-head attention, positional encodings, encoder-only (BERT), and decoder-only (GPT) architectures.',
          skillsToAcquire: ['Scaled Dot-Product Attention', 'Multi-Head Attention & Masking', 'Positional Encodings', 'BERT vs GPT Architecture Paradigms'],
          activities: ['Implement a self-attention mechanism from scratch in PyTorch', 'Visualize attention heads across grammatical relationships using BertViz'],
          estimatedTime: '8 weeks',
          completionCriteria: 'Working PyTorch implementation of multi-head attention with mathematical derivation.',
          dependencies: 'Text processing and deep learning foundations.',
          resources: [
            { title: 'The Illustrated Transformer - Jay Alammar', url: 'https://jalammar.github.io/illustrated-transformer/', type: 'Article' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Hugging Face Ecosystem & Parameter-Efficient Fine-Tuning (PEFT)',
          stageType: 'Portfolio & Projects',
          description: 'Fine-tune pre-trained models on specialized tasks (Named Entity Recognition, Question Answering, Sentiment Analysis) using Hugging Face Trainer and LoRA.',
          skillsToAcquire: ['Hugging Face Transformers & Datasets', 'Named Entity Recognition (NER)', 'LoRA / QLoRA Parameter-Efficient Fine-Tuning', 'Model Evaluation (ROUGE, BLEU, BERTScore)'],
          activities: ['Fine-tune an IndicBERT or RoBERTa model for domain-specific contract entity recognition', 'Deploy the fine-tuned model to Hugging Face Model Hub with an interactive demo'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Fine-tuned model achieving high macro-F1 on custom domain datasets published on Hugging Face.',
          dependencies: 'Transformer architectures.',
          resources: [
            { title: 'Hugging Face Fine-Tuning Guide', url: 'https://huggingface.co/docs/transformers/training', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Multilingual Indic NLP, Speech ASR & Production Deployment',
          stageType: 'Skill Acquisition',
          description: 'Integrate open Indic models (AI4Bharat IndicTrans2, IndicBART), deploy automatic speech recognition with OpenAI Whisper, and package with FastAPI.',
          skillsToAcquire: ['Indic Multilingual Models (IndicTrans, Bhashini)', 'Automatic Speech Recognition (Whisper ASR)', 'Text-to-Speech (TTS) Integration', 'FastAPI Production Inference'],
          activities: ['Build an end-to-end voice assistant transcribing vernacular Hindi/Tamil audio, translating, and synthesizing response audio', 'Deploy the voice pipeline on a cloud GPU instance with streaming audio output'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Working multilingual voice AI prototype transcribing, processing, and generating vernacular speech.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'AI4Bharat IndicTrans2 Repository', url: 'https://github.com/AI4Bharat/IndicTrans2', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'computer-vision-engineer',
    title: 'Computer Vision Engineer',
    description: 'Develops software algorithms and deep learning models that process, analyze, and interpret visual imagery from cameras, LIDAR, and medical scanners for autonomous driving, industrial defect inspection, and biometric security.',
    educationRequirements: 'B.Tech/M.Tech in CS, Electronics, or Electrical Engineering. Strong foundation in linear algebra, image processing with OpenCV, convolutional neural networks (CNNs), and object detection frameworks (YOLO).',
    educationPathways: [
      'B.Tech / B.E. in Computer Science, ECE, or Electrical Engineering (4 years)',
      'M.Tech in Signal Processing, Computer Vision, or AI (2 years via GATE)',
      'Specialized Computer Vision and Autonomous Systems engineering programs'
    ],
    eligibilityRequirements: 'Demonstrated proficiency in matrix algebra, digital image filters, feature extraction, CNNs, object detection, and GPU-accelerated inference.',
    certificationsAndExams: [
      'OpenCV Certified Computer Vision Professional',
      'NVIDIA Deep Learning Institute (DLI) Computer Vision Certificate',
      'AWS Certified Machine Learning - Specialty'
    ],
    workEnvironment: 'Autonomous vehicle R&D centers, industrial automation companies, defense technology labs, and medical diagnostics firms in Bengaluru, Hyderabad, and Pune.',
    marketDemand: 'High',
    jobOutlook: 'Strong hiring fueled by smart factory automation, highway toll surveillance (FASTag ANPR cameras), biometric identification systems, and robotic inspection.',
    salaryRange: { min: 650000, max: 2700000, currency: 'INR', source: 'AmbitionBox Computer Vision Benchmark 2024, Glassdoor India' },
    salarySource: 'AmbitionBox Computer Vision Benchmark 2024, Glassdoor India',
    salaryByExperience: {
      entryLevel: { min: 650000, max: 1100000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 1100000, max: 1900000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1900000, max: 3400000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Engineers proficient in edge AI acceleration (NVIDIA Jetson, TensorRT, Coral TPU) and real-time 3D perception command premium compensation.'
    },
    careerProgression: [
      'Junior Computer Vision Engineer',
      'Computer Vision Software Engineer',
      'Senior Computer Vision Engineer / Perception Lead',
      'Principal Vision Architect / Edge AI Lead',
      'Director of Computer Vision & Robotics'
    ],
    employmentSectors: {
      government: 'Indian Space Research Organisation (ISRO satellite image processing), DRDO missile guidance systems, Smart Cities surveillance command centers',
      privateSector: 'Autonomous Mobility (Ola Electric, Ather Energy), Industrial Automation (Addverb Technologies), Video Analytics & Security (Staqu, CP Plus)'
    },
    timelineOverview: {
      totalEstimatedDuration: '6 - 10 Months focused CV learning and model optimization',
      educationDuration: '4 Years formal degree',
      prepDuration: '4–6 Months image processing, CNNs, and object detection/segmentation',
      practicalTrainingDuration: '2–4 Months real-time camera tracking and edge optimization',
      jobSearchDuration: '2–4 Months technical coding tests on matrix operations and vision pipelines',
      overlapNotes: 'OpenCV image transformations and deep learning model training run in parallel.',
      confidenceNote: 'Interviews evaluate both classical image processing fundamentals (Sobel, Canny, Hough) and deep learning architectures.'
    },
    sources: [
      { title: 'OpenCV Official Documentation & Tutorials', url: 'https://docs.opencv.org/', sourceAuthority: 'OpenCV Foundation', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Computer Vision Engineer Salary in India', url: 'https://www.ambitionbox.com/salaries/computer-vision-engineer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Computer Vision Engineer Career Roadmap',
      description: 'Progression from classical digital image processing and OpenCV to modern deep learning object detection (YOLO), image segmentation (SAM), and real-time edge deployment.',
      totalEstimatedDuration: '6 - 10 Months',
      durationBreakdown: 'Classical Image Processing & OpenCV: 6 weeks | Deep Learning CNNs & Transfer Learning: 8 weeks | Object Detection & Segmentation (YOLO, Mask R-CNN): 8 weeks | Real-Time Video & Edge AI (TensorRT): 6 weeks',
      overlapNotes: 'Real-time camera pipelines are developed using pre-trained weights while learning network internals.',
      steps: [
        {
          stepNumber: 1,
          title: 'Classical Digital Image Processing with OpenCV',
          stageType: 'Skill Acquisition',
          description: 'Master color spaces (RGB, HSV, Grayscale), spatial filters, convolution kernels, edge detection (Canny, Sobel), contour extraction, and perspective transforms.',
          skillsToAcquire: ['Color Spaces & Thresholding (Otsu)', 'Convolutional Filtering & Blurring', 'Edge Detection (Canny) & Contours', 'Perspective Warping & Affine Transforms'],
          activities: ['Build an automated document scanner that detects paper edges and flattens orientation', 'Implement a color-based object tracking system using webcam feed'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Working OpenCV pipeline executing robust document edge detection and perspective correction.',
          dependencies: 'Python programming and matrix mathematics.',
          resources: [
            { title: 'OpenCV Python Tutorials', url: 'https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Convolutional Neural Networks (CNNs) & Classification',
          stageType: 'Skill Acquisition',
          description: 'Understand convolutional layers, pooling, stride, padding, receptive fields, backpropagation in CNNs, and implement ResNet architectures in PyTorch.',
          skillsToAcquire: ['Convolution & Pooling Operations', 'ResNet Residual Connections', 'Data Augmentation (Albumentations)', 'Class Activation Maps (Grad-CAM)'],
          activities: ['Train a custom multi-class image classifier on medical X-rays or plant leaf disease dataset', 'Visualize neural network decision boundaries using Grad-CAM heatmaps'],
          estimatedTime: '8 weeks',
          completionCriteria: 'PyTorch image classification model achieving 90%+ test accuracy with Grad-CAM visual explanations.',
          dependencies: 'Image processing and PyTorch basics.',
          resources: [
            { title: 'CS231n: Deep Learning for Computer Vision', url: 'http://cs231n.stanford.edu/', type: 'Course' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Real-Time Object Detection & Instance Segmentation (YOLO)',
          stageType: 'Portfolio & Projects',
          description: 'Master anchor boxes, Non-Maximum Suppression (NMS), Intersection over Union (IoU), and train custom YOLO (YOLOv8/v11) models on labeled datasets.',
          skillsToAcquire: ['Object Detection Architecture (YOLO)', 'Bounding Box Regression & IoU', 'Mean Average Precision (mAP@0.5:0.95)', 'Dataset Annotation with Roboflow'],
          activities: ['Annotate a custom 1,000-image dataset (e.g. factory defect inspection or traffic helmet detection)', 'Train and validate a custom YOLOv8 model reaching 0.85+ mAP'],
          estimatedTime: '8 weeks',
          completionCriteria: 'Trained YOLO model detecting target objects with real-time bounding box annotations at 30+ fps.',
          dependencies: 'CNN foundations.',
          resources: [
            { title: 'Ultralytics YOLO Documentation', url: 'https://docs.ultralytics.com/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Edge AI Acceleration (TensorRT) & Video Tracking',
          stageType: 'Skill Acquisition',
          description: 'Export models to ONNX and TensorRT for GPU acceleration, implement multi-object tracking (DeepSORT / ByteTrack), and deploy on edge devices (Jetson).',
          skillsToAcquire: ['Multi-Object Tracking (DeepSORT / ByteTrack)', 'TensorRT Model Optimization', 'Edge Hardware Deployment (NVIDIA Jetson)', 'Video Stream Inference (RTSP)'],
          activities: ['Build an Automated Number Plate Recognition (ANPR) or store footfall counter from live RTSP camera stream', 'Deploy the model on an edge device running at 60fps with INT8 quantization'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Real-time multi-camera tracking system operating with sub-20ms frame latency.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'NVIDIA Deep Learning Institute', url: 'https://www.nvidia.com/en-us/training/', type: 'Documentation' }
          ]
        }
      ]
    }
  },
  {
    slug: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    description: 'Monitors, detects, investigates, and responds to unauthorized cyber threats and security incidents across enterprise IT networks. Operates Security Operations Center (SOC) tooling, performs vulnerability assessments, and enforces compliance.',
    educationRequirements: 'B.Tech/B.E. in CS/IT/Cybersecurity, BCA, B.Sc Computer Science, or verified cybersecurity certifications. Solid understanding of computer networks (TCP/IP), Linux commands, SIEM tools, and threat frameworks (MITRE ATT&CK).',
    educationPathways: [
      'B.Tech / B.E. in Cybersecurity, Computer Science, or Information Technology (4 years)',
      'BCA / B.Sc Computer Science followed by specialized cyber defense diplomas',
      'Direct industry transition via recognized global security certifications (CompTIA Security+, CEH, Blue Team Level 1)'
    ],
    eligibilityRequirements: 'No statutory licensing. Security clearances and background checks required for government defense and banking SOC roles.',
    certificationsAndExams: [
      'CompTIA Security+ (SY0-701)',
      'Certified Information Systems Security Professional (CISSP)',
      'Certified Ethical Hacker (CEH - EC-Council)',
      'Blue Team Level 1 (BTL1)'
    ],
    workEnvironment: '24/7 Security Operations Centers (SOCs), managed security service providers (MSSPs), financial institutions, and IT enterprises in Bengaluru, Hyderabad, Gurugram, and Pune.',
    marketDemand: 'High',
    jobOutlook: 'Strong persistent demand driven by stringent Reserve Bank of India (RBI) cybersecurity guidelines, CERT-In compliance mandates, and increasing frequency of ransomware threats.',
    salaryRange: { min: 480000, max: 1800000, currency: 'INR', source: 'Data Security Council of India (DSCI) Talent Report, AmbitionBox' },
    salarySource: 'Data Security Council of India (DSCI) Talent Report, AmbitionBox',
    salaryByExperience: {
      entryLevel: { min: 480000, max: 800000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 800000, max: 1450000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1450000, max: 2500000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'SOC shift allowances (night rotation) are common for entry-level roles; incident responders and threat hunters with reverse engineering skills earn premium salaries.'
    },
    careerProgression: [
      'SOC Analyst (Tier 1 - Triage & Alert Monitoring)',
      'SOC Analyst (Tier 2 - Incident Response & Investigation)',
      'Senior Cybersecurity Specialist / Threat Hunter (Tier 3)',
      'SOC Manager / Cyber Defense Lead',
      'Chief Information Security Officer (CISO)'
    ],
    employmentSectors: {
      government: 'Indian Computer Emergency Response Team (CERT-In), National Critical Information Infrastructure Protection Centre (NCIIPC), Cyber Crime Cells, Defence Cyber Agency',
      privateSector: 'Commercial Banks (SBI, HDFC, ICICI SOC teams), MSSPs (Wipro, Infosys Cyber Defense Centers), Big 4 Cyber Consulting, E-commerce'
    },
    timelineOverview: {
      totalEstimatedDuration: '6 - 9 Months focused cyber defense training',
      educationDuration: '3-4 Years formal undergraduate degree',
      prepDuration: '4–6 Months networking, Linux, SIEM tooling, and threat analysis',
      practicalTrainingDuration: '2–3 Months hands-on labs on TryHackMe / LetsDefend',
      jobSearchDuration: '2–4 Months SOC technical triage assessments',
      overlapNotes: 'Hands-on blue team lab exercises are conducted alongside theoretical networking study.',
      confidenceNote: 'Earning CompTIA Security+ or BTL1 drastically increases the likelihood of securing Tier-1 SOC interviews.'
    },
    sources: [
      { title: 'Data Security Council of India (DSCI) Reports', url: 'https://www.dsci.in/', sourceAuthority: 'DSCI / NASSCOM', verifiedDate: '2024-10-14' },
      { title: 'CERT-In Official Cyber Security Guidelines', url: 'https://www.cert-in.org.in/', sourceAuthority: 'CERT-In Government of India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Cybersecurity Analyst (SOC) Learning Roadmap',
      description: 'Defensive security pathway: computer networking, Linux/Windows system internals, SIEM alert triage, incident response, and MITRE ATT&CK framework mapping.',
      totalEstimatedDuration: '6 - 9 Months',
      durationBreakdown: 'Networking (TCP/IP) & Operating Systems: 6-8 weeks | Security Fundamentals & Threat Landscape: 6 weeks | SIEM Tooling & Log Analysis: 6-8 weeks | Incident Response & Digital Forensics: 6 weeks',
      overlapNotes: 'Packet analysis in Wireshark is practiced while learning networking protocols.',
      steps: [
        {
          stepNumber: 1,
          title: 'Computer Networking, Protocol Analysis & OS Internals',
          stageType: 'Skill Acquisition',
          description: 'Master OSI model, TCP/IP handshake, DNS, DHCP, HTTP/HTTPS, packet analysis using Wireshark, and Linux/Windows administration commands.',
          skillsToAcquire: ['TCP/IP Suite & Subnetting', 'Packet Inspection with Wireshark', 'Linux CLI & Permissions', 'Windows Event Logs & Sysinternals'],
          activities: ['Capture and inspect unencrypted HTTP traffic and DNS queries using Wireshark', 'Analyze Windows event logs (Event ID 4624/4625 login events)'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Identify network anomalies, malicious domain lookups, and port scans in Wireshark packet captures.',
          dependencies: 'Basic computer literacy.',
          resources: [
            { title: 'Wireshark Official User Guide', url: 'https://www.wireshark.org/docs/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Threat Landscape, MITRE ATT&CK & Defense Concepts',
          stageType: 'Skill Acquisition',
          description: 'Understand common cyber attacks (phishing, malware, brute force, SQL injection), defense-in-depth, firewalls, and map tactics to the MITRE ATT&CK framework.',
          skillsToAcquire: ['Cyber Kill Chain & MITRE ATT&CK', 'Malware Types & Ransomware Behavior', 'Endpoint Detection & Response (EDR)', 'Vulnerability Management (Nessus/OpenVAS)'],
          activities: ['Map a real-world ransomware case study to MITRE ATT&CK techniques', 'Run an authorized vulnerability scan using OpenVAS in a virtual lab'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Comprehensive vulnerability report detailing risk severity scores (CVSS) and remediation steps.',
          dependencies: 'Networking foundations (Step 1).',
          resources: [
            { title: 'MITRE ATT&CK Enterprise Matrix', url: 'https://attack.mitre.org/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'SIEM Operations, Splunk / ELK & Log Analysis',
          stageType: 'Portfolio & Projects',
          description: 'Collect, parse, and analyze security logs using Security Information and Event Management (SIEM) tools like Splunk or ELK Stack; author detection alerts.',
          skillsToAcquire: ['Splunk Search Processing Language (SPL)', 'SIEM Alert Triage & False Positive Reduction', 'Sysmon Endpoint Telemetry', 'Firewall & Web Proxy Log Analysis'],
          activities: ['Setup a home lab ingesting Windows Sysmon logs into Splunk', 'Write SPL queries to detect password spraying and privilege escalation attempts'],
          estimatedTime: '6 - 8 weeks',
          completionCriteria: 'Functional SIEM dashboard monitoring simulated enterprise network events with automated alert rules.',
          dependencies: 'Threat concepts and log fundamentals.',
          resources: [
            { title: 'Splunk Fundamentals Training', url: 'https://www.splunk.com/en_us/training.html', type: 'Course' }
          ]
        },
        {
          stepNumber: 4,
          title: 'Incident Response, Memory Forensics & Blue Team Labs',
          stageType: 'Skill Acquisition',
          description: 'Execute structured Incident Response (NIST/SANS 6-step framework), capture volatile RAM memory (Volatility), investigate phishing emails, and earn certifications.',
          skillsToAcquire: ['Incident Response Procedures (NIST 800-61)', 'Memory Forensics with Volatility', 'Phishing Email Header Analysis', 'Root Cause Analysis & Post-Mortem Reporting'],
          activities: ['Investigate 20+ realistic incident response scenarios on LetsDefend or TryHackMe Blue Team tracks', 'Write a formal security incident report documenting containment, eradication, and lessons learned'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Earn a blue team certification (CompTIA Security+ or BTL1) and complete 10+ documented SOC lab writeups.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'LetsDefend Blue Team Training', url: 'https://letsdefend.io/', type: 'Course' }
          ]
        }
      ]
    }
  },
  {
    slug: 'security-engineer',
    title: 'Security Engineer',
    description: 'Builds and maintains security architectures, executes vulnerability assessments and penetration testing, audits cryptographic protocols, and embeds automated security controls into CI/CD pipelines (DevSecOps).',
    educationRequirements: 'B.Tech/B.E. in CS/IT/Cybersecurity. Strong proficiency in software security, penetration testing tools (Burp Suite, Metasploit), Python/Bash scripting, and cloud security architectures.',
    educationPathways: [
      'B.Tech / B.E. in Computer Science or Information Technology (4 years)',
      'M.Tech in Information Security / Cyber Forensics (2 years via GATE)',
      'Specialized application security and offensive security credentials'
    ],
    eligibilityRequirements: 'Ethical hacker mindset backed by deep knowledge of web application vulnerabilities (OWASP Top 10), network exploitation, and automated security scanning tools.',
    certificationsAndExams: [
      'Offensive Security Certified Professional (OSCP)',
      'Certified Information Systems Security Professional (CISSP)',
      'Certified Cloud Security Professional (CCSP)'
    ],
    workEnvironment: 'Product technology firms, enterprise security consultancies, financial organizations, and cloud providers in Bengaluru, Hyderabad, Gurugram, and Pune; hybrid.',
    marketDemand: 'High',
    jobOutlook: 'Elevated demand as Indian companies comply with stricter global data privacy regulations (DPDP Act 2023, GDPR) and shift security left into the engineering lifecycle.',
    salaryRange: { min: 600000, max: 2600000, currency: 'INR', source: 'PayScale India Security Engineering, AmbitionBox' },
    salarySource: 'PayScale India Security Engineering, AmbitionBox',
    salaryByExperience: {
      entryLevel: { min: 600000, max: 1050000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 1050000, max: 1850000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1850000, max: 3200000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Offensive security professionals holding the practical 24-hour OSCP certification frequently command starting salaries above ₹12–18 LPA.'
    },
    careerProgression: [
      'Associate Security Engineer / Junior Pentester',
      'Security Engineer (AppSec / CloudSec)',
      'Senior Security Engineer / Red Team Lead',
      'Principal Security Architect / DevSecOps Lead',
      'Chief Information Security Officer (CISO)'
    ],
    employmentSectors: {
      government: 'National Technical Research Organisation (NTRO), Cyber Security Cell of Indian Defence, Reserve Bank of India Cyber Security Unit',
      privateSector: 'Fintech (PhonePe, Razorpay, Zerodha), Tech Conglomerates, Product Security Teams, Specialized Security Boutiques'
    },
    timelineOverview: {
      totalEstimatedDuration: '8 - 12 Months dedicated offensive and defensive security study',
      educationDuration: '4 Years formal degree',
      prepDuration: '5–7 Months web vulnerabilities, network exploitation, and scripting',
      practicalTrainingDuration: '3–5 Months solving CTFs (Hack The Box, PortSwigger Web Security Academy)',
      jobSearchDuration: '2–4 Months live practical technical penetration testing interviews',
      overlapNotes: 'Hands-on lab exploitation runs concurrently with theoretical security studies.',
      confidenceNote: 'Completing the free PortSwigger Web Security Academy labs provides immense practical preparation for application security interviews.'
    },
    sources: [
      { title: 'PortSwigger Web Security Academy', url: 'https://portswigger.net/web-security', sourceAuthority: 'PortSwigger Ltd.', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Security Engineer Salary in India', url: 'https://www.ambitionbox.com/salaries/security-engineer-salaries', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: '2024-10-14',
    roadmap: {
      title: 'Security Engineer (AppSec & Pentesting) Roadmap',
      description: 'Comprehensive curriculum from web application vulnerability identification (OWASP Top 10) and Burp Suite mastery to network penetration testing and DevSecOps pipelines.',
      totalEstimatedDuration: '8 - 12 Months',
      durationBreakdown: 'Web Application Vulnerabilities (OWASP): 8 weeks | Penetration Testing Tools (Burp Suite, Metasploit): 8 weeks | Network Exploitation & Privilege Escalation: 8-10 weeks | DevSecOps & Cloud Security: 6 weeks',
      overlapNotes: 'Hands-on Hack The Box and PortSwigger labs are completed alongside study topics.',
      steps: [
        {
          stepNumber: 1,
          title: 'Web Application Vulnerabilities (OWASP Top 10)',
          stageType: 'Skill Acquisition',
          description: 'Master core web vulnerabilities: SQL Injection, Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), Server-Side Request Forgery (SSRF), and Broken Authentication.',
          skillsToAcquire: ['SQL Injection (Blind, Error-based)', 'XSS (Stored, Reflected, DOM)', 'SSRF & Insecure Direct Object References (IDOR)', 'JWT Flaws & Authentication Bypasses'],
          activities: ['Complete 50+ apprentice and practitioner labs on PortSwigger Web Security Academy', 'Manually exploit SQL injection vulnerabilities in a sandbox environment'],
          estimatedTime: '8 weeks',
          completionCriteria: 'Clear all core PortSwigger vulnerability assessment labs without using automated tools.',
          dependencies: 'Understanding of HTTP protocol, JavaScript, and SQL databases.',
          resources: [
            { title: 'PortSwigger Web Security Academy', url: 'https://portswigger.net/web-security', type: 'Course' }
          ]
        },
        {
          stepNumber: 2,
          title: 'Interception Proxies, Burp Suite & API Penetration Testing',
          stageType: 'Skill Acquisition',
          description: 'Master Burp Suite Professional features: Repeater, Intruder, Collaborator, Extender, and test RESTful/GraphQL endpoints for unauthorized data leakage.',
          skillsToAcquire: ['Burp Suite Repeater & Intruder', 'Burp Collaborator for OOB Attacks', 'GraphQL & REST API Security Testing', 'Automated Scanning with OWASP ZAP'],
          activities: ['Perform an authorized penetration test on an open-source vulnerable web app (e.g. OWASP Juice Shop)', 'Document identified vulnerabilities following standard CVSS scoring'],
          estimatedTime: '8 weeks',
          completionCriteria: 'Professional penetration testing report documenting proof-of-concept exploits and remediation recommendations.',
          dependencies: 'OWASP vulnerability fundamentals (Step 1).',
          resources: [
            { title: 'OWASP Juice Shop Project', url: 'https://owasp.org/www-project-juice-shop/', type: 'Documentation' }
          ]
        },
        {
          stepNumber: 3,
          title: 'Network Penetration Testing & Privilege Escalation',
          stageType: 'Portfolio & Projects',
          description: 'Scan targets with Nmap, exploit vulnerable network services using Metasploit, and escalate privileges on Linux (sudo, SUID binaries) and Windows (Token impersonation).',
          skillsToAcquire: ['Nmap Port Scanning & Service Enumeration', 'Metasploit Framework & Payloads', 'Linux Privilege Escalation Techniques', 'Windows Privilege Escalation (Active Directory basics)'],
          activities: ['Root 15+ target machines on Hack The Box or TryHackMe', 'Write custom Python automation scripts to automate repetitive exploit payloads'],
          estimatedTime: '8 - 10 weeks',
          completionCriteria: 'Successfully compromise and obtain root/system flags on 15 intermediate Hack The Box machines.',
          dependencies: 'Linux/Windows administration and web testing.',
          resources: [
            { title: 'Hack The Box Platform', url: 'https://www.hackthebox.com/', type: 'Course' }
          ]
        },
        {
          stepNumber: 4,
          title: 'DevSecOps Automation & Cloud Infrastructure Security',
          stageType: 'Skill Acquisition',
          description: 'Embed Static Application Security Testing (SAST) and Dependency Checking (Trivy, Snyk) into GitHub Actions pipelines, and audit cloud security with ScoutSuite.',
          skillsToAcquire: ['SAST / DAST Integration in CI/CD', 'Container Image Scanning (Trivy)', 'Secrets Detection in Git (TruffleHog)', 'AWS / Azure Security Auditing'],
          activities: ['Integrate automated Snyk vulnerability scanning into a GitHub Actions pipeline that fails builds on high-severity vulnerabilities', 'Perform a cloud security audit on AWS using ScoutSuite and remediate misconfigured S3 buckets'],
          estimatedTime: '6 weeks',
          completionCriteria: 'Fully automated DevSecOps CI/CD pipeline preventing vulnerable code and leaked API secrets from reaching production.',
          dependencies: 'Steps 1, 2, and 3.',
          resources: [
            { title: 'OWASP DevSecOps Guideline', url: 'https://owasp.org/www-project-devsecops-guideline/', type: 'Documentation' }
          ]
        }
      ]
    }
  }
];

module.exports = techPart2;
