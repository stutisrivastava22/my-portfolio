export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  category: 'Multi-Agent Systems' | 'GenAI & RAG' | 'Agentic Code Modernization' | 'Traditional ML' | 'LLM Fine-Tuning';
  badge: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  overview: {
    problem: string;
    solution: string;
    impactBullets: string[];
  };
  architecture: {
    type: 'governance' | 'etl-converter' | 'rag-chatbot' | 'time-series-forecasting' | 'incident-resolution' | 'finetuning of LLM';
    title: string;
    description: string;
    flowSteps: {
      step: string;
      title: string;
      desc: string;
      badge?: string;
    }[];
    components: {
      name: string;
      role: string;
      tech: string;
      color: string;
    }[];
  };
  learnings: string[];
  links: {
    github?: string;
    liveDemo?: string;
    caseStudySlug?: string;
  };
}

export interface SkillItem {
  name: string;
  category: 'GenAI & Agents' | 'Machine Learning & NLP' | 'Cloud & Infra' | 'Languages and Frameworks' | 'DevOps & Monitoring';
  level: 'Expert' | 'Advanced' | 'Proficient';
  icon: string;
  featured?: boolean;
  description?: string;
}

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  current?: boolean;
  badge?: string;
  summary: string;
  bullets: string[];
  techStack: string[];
  awards?: string[];
}

export const PERSONAL_INFO = {
  name: "Stuti Srivastava",
  role: "GenAI Engineer | Data Scientist",
  shortIntro: "I build intelligent multi-agent systems and scalable GenAI solutions that turn complex enterprise workflows into autonomous, high-impact pipelines.",
  fullBio: "I'm a Data Scientist and GenAI Engineer with 5+ years of experience building data-driven and AI-powered solutions. I specialize in multi-agent orchestration, RAG architectures, model fine-tuning, and enterprise cloud deployments across AWS and Azure. I love turning complex enterprise bottlenecks into elegant, self-governing intelligent systems.",
  location: "Bengaluru, India",
  email: "stutisrivastava922@gmail.com",
  phone: "+91-9980047478",
  linkedin: "https://www.linkedin.com/in/stuti-srivastava-a3668118b/",
  github: "https://github.com/stutisrivastava22",
  stats: [
    { label: "Years Experience", value: "5+", detail: "AI, GenAI & ML Systems" },
    { label: "Turnaround Cut", value: "95%", detail: "From 3-5 days to < 10 mins" },
    { label: "Precision Rate", value: "85%+", detail: "Enterprise Compliance" },
    { label: "Academic CGPA", value: "9.34", detail: "NMIT Bengaluru (CSE)" }
  ],
  status: "Open to Full-time Opportunities in Product-based GenAI & Data Science"
};

export const SKILLS_DATA: SkillItem[] = [

  //Programming Languages
  { name: "Python", category: "Languages and Frameworks", level: "Expert", icon: "FileCode", featured: true },
  { name: "Pyspark", category: "Languages and Frameworks", level: "Expert", icon: "Zap", featured: true },
  { name: "FastAPI", category: "Languages and Frameworks", level: "Expert", icon: "Network", featured: true },
  { name: "Flask", category: "Languages and Frameworks", level: "Expert", icon: "Network", featured: true },
  { name: "Structured Query Language (SQL)", category: "Languages and Frameworks", level: "Expert", icon: "TableProperties" },

  // GenAI & Agents
  { name: "Multi-Agent Systems", category: "GenAI & Agents", level: "Expert", icon: "Bot", featured: true },
  { name: "AWS Strands", category: "GenAI & Agents", level: "Expert", icon: "Cpu", featured: true },
  { name: "LangGraph", category: "GenAI & Agents", level: "Expert", icon: "Network", featured: true },
  { name: "A2A Protocol & MCP", category: "GenAI & Agents", level: "Expert", icon: "Radio", featured: true },
  { name: "Bedrock AgentCore", category: "GenAI & Agents", level: "Advanced", icon: "Cloud", featured: true },
  { name: "Prompt Engineering", category: "GenAI & Agents", level: "Expert", icon: "Sparkles" },
  { name: "AI Guardrails", category: "GenAI & Agents", level: "Advanced", icon: "ShieldCheck", featured: true },
  { name: "LLM Evaluation (RAGAs)", category: "GenAI & Agents", level: "Advanced", icon: "Gauge" },
  { name: "RAG Architectures", category: "GenAI & Agents", level: "Expert", icon: "Layers", featured: true },
  { name: "Vector Databases", category: "GenAI & Agents", level: "Expert", icon: "Database", featured: true },


  // Machine Learning & NLP
  { name: "Machine Learning", category: "Machine Learning & NLP", level: "Proficient", icon: "BrainCircuit" },
  { name: "Deep Learning", category: "Machine Learning & NLP", level: "Proficient", icon: "BrainCircuit" },
  { name: "Fine-Tuning (LoRA/QLoRA)", category: "Machine Learning & NLP", level: "Expert", icon: "Sliders", featured: true },
  { name: "Transformers & NLP", category: "Machine Learning & NLP", level: "Expert", icon: "BrainCircuit", featured: true },
  { name: "Scikit-Learn", category: "Machine Learning & NLP", level: "Expert", icon: "Boxes" },
  { name: "Time Series Forecasting (FBProphet)", category: "Machine Learning & NLP", level: "Proficient", icon: "TrendingUp" },

  // Cloud & Infra
  { name: "Amazon Web Services (AWS)", category: "Cloud & Infra", level: "Advanced", icon: "CloudLightning", featured: true },
  { name: "Microsoft Azure", category: "Cloud & Infra", level: "Expert", icon: "CloudCog", featured: true },

  // Observability & DevOps
  { name: "Git", category: "DevOps & Monitoring", level: "Advanced", icon: "GitBranch" },
  { name: "Docker & Kubernetes", category: "DevOps & Monitoring", level: "Expert", icon: "Box", featured: true },
  { name: "CI/CD (Jenkins, CloudBees)", category: "DevOps & Monitoring", level: "Advanced", icon: "GitBranch" },
  { name: "Observability (Lumenova/Splunk)", category: "DevOps & Monitoring", level: "Advanced", icon: "Eye" }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "ea-governance-agent",
    title: "Enterprise Architecture Governance Agent",
    shortTitle: "Architecture Governance Agent",
    subtitle: "Multi-agent GenAI system for automated architecture assessment using AWS Strands, Ardoq MCP, and AgentCore",
    category: "Multi-Agent Systems",
    badge: "Production • 95% Faster Review",
    tags: ["AWS Strands", "Bedrock AgentCore", "A2A Protocol", "Python", "Claude LLM", "Sharepoint", "Lumenova", "SignalFx"],
    metrics: [
      { label: "Turnaround Time", value: "3-5d → <10m" },
      { label: "Precision Rate", value: "85%+" },
      { label: "Agent Fleet", value: "1 Sup + 5 Sub" },
      { label: "Speedup", value: "95%+ Faster" }
    ],
    overview: {
      problem: "Enterprise architecture reviews of Software Design Documents (SDDs) required extensive manual evaluation across separate domain teams (Infrastructure, Data, Security, FinOps). The manual process typically took 3 to 5 days, was prone to subjective interpretation, and created major bottlenecks in software release cycles.",
      solution: "Engineered a production-ready, autonomous multi-agent platform using AWS Strands in Python. A central Supervisor Agent breaks down design documents, extracts the SDD contents with architecture diagrams, calls Ardoq MCP to get organizational context, and delegates domain-specific checks concurrently to 5 specialized worker agents (Infra, Data, Security, Integration, Diagram) via the A2A protocol. Synthesizes cross-agent findings into a final score, with the final assessment report stored in SharePoint and shared directly with the user via a SharePoint URL.",
      impactBullets: [
        "Cut architecture review turnaround from 3–5 days to under 10 minutes (95%+ reduction in review cycles).",
        "Achieved 85%+ precision on flagged compliance vulnerabilities validated against veteran enterprise architects.",
        "Integrated multi-layer observability (Lumenova, SignalFx, Splunk, CloudWatch) and AI Guardrails to eliminate hallucinations and detect agent failures in seconds.",
        "Automated delivery of comprehensive audit reports stored in SharePoint with accessible URLs provided to engineering teams."
      ]
    },
    architecture: {
      type: "governance",
      title: "Hierarchical Multi-Agent Governance Flow",
      description: "User submits an SDD through the MyGIT portal. Presigned S3 URLs deliver the artifact to the Supervisor Agent, which extracts content and diagrams, queries Ardoq MCP, and delegates to 5 domain subagents communicating via A2A with unified AgentCore memory, guardrails, and SharePoint delivery.",
      flowSteps: [
        {
          step: "01",
          title: "Intake & Document Ingestion",
          desc: "User requests SDD review via MyGIT UI. Artifact is uploaded securely to AWS S3 with temporary pre-signed URLs.",
          badge: "MyGIT UI + S3"
        },
        {
          step: "02",
          title: "Supervisor Agent Orchestration",
          desc: "Developed using AWS Strands in Python. Ingests the SDD, extracts the SDD contents with architecture diagrams, calls Ardoq MCP to get organizational context, and delegates concurrently to domain subagents using the A2A protocol. Synthesizes cross-agent findings into a final score.",
          badge: "Supervisor (Strands + Ardoq MCP)"
        },
        {
          step: "03",
          title: "Specialized Domain Subagents",
          desc: "Infra Agent (compute/network), Data Agent (pipelines/storage), Security Agent (zero-trust/IAM), Integration Agent (APIs/streaming), and Diagram Agent (visual architecture diagram assessment) audit requirements concurrently via A2A protocol.",
          badge: "5 Subagents (A2A Parallel Execution)"
        },
        {
          step: "04",
          title: "AgentCore Runtime & Substrate",
          desc: "Managed AgentCore memory, dynamic RAG summaries, AI Guardrails, CyberArk / Secrets Manager, and real-time observability telemetry.",
          badge: "Bedrock AgentCore + Guardrails"
        },
        {
          step: "05",
          title: "Synthesis & SharePoint Report Delivery",
          desc: "Supervisor merges findings, resolves cross-agent discrepancies, calculates compliance scores, and stores the final output report in SharePoint. The SharePoint URL is shared with the user.",
          badge: "SharePoint Report URL"
        }
      ],
      components: [
        { name: "Supervisor Agent", role: "Planning, Ardoq MCP & Synthesis", tech: "AWS Strands", color: "#6366F1" },
        { name: "Infra Subagent", role: "Cloud & Resiliency Review", tech: "Python / LLM", color: "#38BDF8" },
        { name: "Data Subagent", role: "Pipelines & Storage Audit", tech: "Python / LLM", color: "#A78BFA" },
        { name: "Security Subagent", role: "Zero-Trust & IAM Compliance", tech: "Python / LLM", color: "#F472B6" },
        { name: "Integration Subagent", role: "APIs & Message Streaming", tech: "Python / LLM", color: "#EAB308" },
        { name: "Diagram Subagent", role: "Visual Architecture Assessment", tech: "Multimodal LLM", color: "#EC4899" },
        { name: "AgentCore Runtime", role: "Orchestration Substrate", tech: "AWS Bedrock", color: "#F59E0B" },
        { name: "Observability Layer", role: "Telemetry & Guardrails", tech: "Lumenova + CloudWatch", color: "#10B981" },
        { name: "SharePoint Delivery", role: "Report Storage & User Access", tech: "Microsoft SharePoint", color: "#0284C7" }
      ]
    },
    learnings: [
      "Optimized context management to drastically reduce token usage and cost on Anthropic Sonnet 4.0 / 3.5.",
      "Implemented per-reference vector summaries to overcome dense architecture document chunking limits.",
      "Integrated Ardoq MCP for contextual enterprise architecture graph queries to validate standards against organizational catalogs.",
      "Explored Bedrock AgentCore Gateway for extensible tool registries."
    ],
    links: {
      github: "https://github.com/stutisrivastava22",
      liveDemo: "#"
    }
  },
  {
  id: "dsx-pyspark-platform",

  title: "DSX → PySpark Conversion Platform",

  shortTitle: "DataStage to PySpark Converter",

  subtitle:
    "Automated migration of proprietary IBM DataStage jobs to production-ready PySpark using an agentic conversion pipeline",

  category: "Agentic Code Modernization",

  badge: "<2s Parsing • 100+ Jobs • 2–3 Min Migration",

  tags: [
    "Python",
    "PySpark",
    "AI Agents",
    "Azure OpenAI",
    "Graph Matching",
    "Semantic Similarity",
    "FastAPI"
  ],

  metrics: [
    { label: "Complex Migration", value: "2–3 min" },
    { label: "Single Job Parse", value: "<2 sec" },
    { label: "100+ Jobs Parse", value: "~30 sec" },
    { label: "Job Complexity", value: "40–50 stages" }
  ],

  overview: {

    problem:
      "Enterprises migrating from legacy IBM DataStage ETL systems face significant effort translating proprietary DSX jobs into modern PySpark pipelines. Manual conversion is time-consuming, error-prone, and can result in redundant pipelines when multiple legacy jobs implement similar processing logic.",

    solution:
      "Built an end-to-end agentic migration platform that parses IBM DataStage .dsx files into structured JSON, identifies similar jobs using graph-based and semantic matching, optionally merges redundant pipelines, and converts the resulting logic into validated and optimized PySpark code.",

    impactBullets: [
      "Built a pure Python DSX parser capable of extracting stages, stage types, processing activities, input/output links, and container stages into structured JSON.",
      "Implemented a Redundancy Detection Agent combining graph-based and semantic similarity analysis to identify overlapping DataStage jobs and provide similarity scores.",
      "Enabled users to either convert jobs individually or merge similar jobs into a unified PySpark pipeline before conversion.",
      "Built dedicated conversion, merger, code review, code correction, and optimization agents to automate the complete migration lifecycle.",
      "Achieved <2 second parsing for individual DSX jobs, ~30 seconds for 100+ jobs, and 2–3 minute migration times for complex 40–50 stage jobs."
    ]
  },

  architecture: {

    type: "etl-converter",

    title: "DataStage → Intelligent PySpark Migration Pipeline",

    description:
      "DSX files are parsed into structured JSON, analyzed for redundancy, converted and iteratively reviewed, then merged with redundancy results into production-ready PySpark for AWS Glue or Databricks.",

    flowSteps: [

      {
        step: "01",

        title: "DSX Ingestion & Python Parsing",

        desc:
          "IBM DataStage .dsx exports are processed by a custom pure Python parser that extracts stages, stage metadata, processing activities, input/output links, and container stages into structured JSON.",

        badge: "<2 sec / Job"
      },

      {
        step: "02",

        title: "Redundancy Detection",

        desc:
          "The Redundancy Detection Agent compares parsed jobs using graph-based structure matching and semantic similarity, identifying overlaps and producing results for the merger.",

        badge: "Graph + Semantic Matching"
      },

      {
        step: "03",

        title: "PySpark Conversion + Review Loop",

        desc:
          "The Conversion Agent generates PySpark and sends it to the Review + Correct Agent. Review findings loop back to conversion until the code passes syntax and functionality checks.",

        badge: "Convert ⇄ Review + Correct"
      },

      {
        step: "04",

        title: "Pipeline Merger Agent",

        desc:
          "The Merger Agent combines redundancy-agent results with the validated PySpark output to consolidate related jobs into a unified pipeline.",

        badge: "Redundancy + Reviewed Code"
      },

      {
        step: "05",

        title: "Production-Ready PySpark",

        desc:
          "The merged PySpark pipeline is delivered ready to run or deploy to platforms such as AWS Glue and Databricks.",

        badge: "AWS Glue + Databricks"
      }
    ],

    components: [

      {
        name: "DSX Parser",
        role: "ETL Structure Extractor",
        tech: "Pure Python",
        color: "#38BDF8"
      },

      {
        name: "Redundancy Agent",
        role: "Job Similarity Analysis",
        tech: "Graph + Semantic Matching",
        color: "#10B981"
      },

      {
        name: "Merger Agent",
        role: "Pipeline Consolidation",
        tech: "AI Agent",
        color: "#A78BFA"
      },

      {
        name: "Converter Agent",
        role: "DataStage → PySpark",
        tech: "LLM + PySpark",
        color: "#6366F1"
      },

      {
        name: "Review & Correct Agents",
        role: "Code Validation",
        tech: "Automated Code Review",
        color: "#F59E0B"
      },

      {
        name: "Optimizer Agent",
        role: "PySpark Optimization",
        tech: "AI Agent",
        color: "#EC4899"
      }
    ]
  },

  learnings: [
    "A deterministic custom parser provides a reliable structured representation of proprietary ETL definitions before introducing LLM-based reasoning.",
    "Combining graph structure with semantic similarity provides stronger job comparison than relying on textual similarity alone.",
    "Breaking the migration workflow into specialized agents for conversion, merging, review, correction, and optimization makes complex ETL modernization more reliable and controllable.",
    "Automated validation is essential for ensuring generated PySpark preserves the core functionality of the original legacy pipeline."
  ],

  links: {
    liveDemo: "#"
  }
},
  {
    id: "informatica-pyspark-converter",
    title: "Informatica → PySpark Conversion Platform",
    shortTitle: "Informatica to PySpark Converter",
    subtitle: "Agentic conversion of Informatica ETL workflows from XML into consolidated PySpark code",
    category: "Agentic Code Modernization",
    badge: "20 Jobs Parsed • ~5 Min per Job",
    tags: ["Informatica XML", "Python", "LangGraph", "Azure OpenAI", "PySpark", "Streamlit"],
    metrics: [
      { label: "Jobs Parsed", value: "20" },
      { label: "Conversion Time", value: "~5 min / job" },
      { label: "Source Format", value: "XML" },
      { label: "Output", value: "PySpark" }
    ],
    overview: {
      problem: "Informatica ETL workflows contain transformations and job logic in XML, making manual migration to PySpark time-consuming and difficult to consolidate.",
      solution: "Built a pure Python parser for Informatica XML and a LangGraph agent workflow using Azure OpenAI. A code-generation agent creates PySpark, a reviewer checks the generated code, and a merger combines transformations into a single PySpark output. A Streamlit UI shows each running step in real time.",
      impactBullets: [
        "Parsed 20 Informatica ETL jobs from XML using a pure Python parser.",
        "Converted each job in approximately five minutes using a LangGraph workflow with Azure OpenAI.",
        "Reviewed generated code and merged transformations into a single PySpark output.",
        "Built a Streamlit interface that displays the workflow's running step in real time."
      ]
    },
    architecture: {
      type: "etl-converter",
      title: "Informatica XML to Consolidated PySpark",
      description: "A pure Python parser extracts Informatica job transformations from XML, then LangGraph agents generate, review, and merge PySpark while Streamlit displays workflow progress in real time.",
      flowSteps: [
        {
          step: "01",
          title: "Informatica XML Ingestion",
          desc: "Load Informatica ETL workflow exports containing job and transformation definitions.",
          badge: "XML Jobs"
        },
        {
          step: "02",
          title: "Pure Python Parser",
          desc: "Parse Informatica XML and extract the workflow transformations into structured data for the agents.",
          badge: "Python Parser"
        },
        {
          step: "03",
          title: "PySpark Code Generation",
          desc: "A LangGraph code-generation agent uses Azure OpenAI to translate parsed transformations into PySpark.",
          badge: "LangGraph + Azure OpenAI"
        },
        {
          step: "04",
          title: "Code Review",
          desc: "A reviewer agent checks the generated PySpark before it is passed to the merger.",
          badge: "Review Agent"
        },
        {
          step: "05",
          title: "Transformation Merger",
          desc: "A merger agent combines the reviewed transformations into one consolidated PySpark code output.",
          badge: "Merged PySpark"
        },
        {
          step: "06",
          title: "Live Workflow Status",
          desc: "The Streamlit UI shows which parsing, generation, review, or merge step is running in real time.",
          badge: "Streamlit"
        }
      ],
      components: [
        { name: "Informatica XML Parser", role: "Extracts ETL workflow transformations", tech: "Pure Python", color: "#38BDF8" },
        { name: "Agent Orchestration", role: "Runs generation, review, and merge steps", tech: "LangGraph", color: "#A78BFA" },
        { name: "Code Generation Agent", role: "Generates PySpark from parsed transformations", tech: "Azure OpenAI", color: "#6366F1" },
        { name: "Code Reviewer", role: "Reviews generated PySpark", tech: "LangGraph Agent", color: "#10B981" },
        { name: "Merger Agent", role: "Combines transformations into one output", tech: "PySpark", color: "#F59E0B" },
        { name: "Workflow UI", role: "Displays the active processing step", tech: "Streamlit", color: "#F472B6" }
      ]
    },
    learnings: [
      "A deterministic XML parser provides structured Informatica transformations for downstream agent processing.",
      "Separating code generation, review, and merging into distinct LangGraph agents makes each workflow stage visible and focused.",
      "Displaying the active step in the Streamlit UI makes multi-stage conversion progress easier to follow."
    ],
    links: {}
  },
  {
    id: "university-textbook-rag-chatbot",
    title: "University Textbook Learning Assistant",
    shortTitle: "Textbook RAG Chatbot",
    subtitle: "Citation-grounded student chatbot over university textbook PDFs using Azure RAG services",
    category: "GenAI & RAG",
    badge: "Grounded Answers • Source Citations",
    tags: ["RAG", "Python", "Azure Document Intelligence", "Azure AI Search", "Azure OpenAI", "LangKit", "FastAPI", "AKS"],
    metrics: [
      { label: "Content Source", value: "Textbook PDFs" },
      { label: "Vector Retrieval", value: "Azure AI Search" },
      { label: "Evaluation", value: "RAGAs" },
      { label: "API Deployment", value: "FastAPI on AKS" }
    ],
    overview: {
      problem: "University students needed a way to ask questions across a large collection of textbook PDFs and receive relevant, source-grounded answers, while keeping questions within appropriate academic scope.",
      solution: "Built a RAG chatbot that extracts textbook content with Python parsers and Azure Document Intelligence, chunks the text, creates embeddings, and indexes them in Azure AI Search. Retrieved passages ground Azure OpenAI answers, which include citations. LangKit and an LLM provide guardrails for out-of-scope or inappropriate questions. FastAPI endpoints run on Azure Kubernetes Service.",
      impactBullets: [
        "Processed textbook PDFs using Python parsers and Azure Document Intelligence.",
        "Chunked extracted content, generated embeddings, and indexed it in Azure AI Search for retrieval.",
        "Grounded Azure OpenAI responses in retrieved textbook passages and returned citations with answers.",
        "Evaluated retrieval and answer quality with RAGAs metrics: answer relevancy, context relevancy, recall, precision, and hallucination.",
        "Added LangKit and LLM-based guardrails for out-of-scope and inappropriate student queries.",
        "Served the chatbot APIs using FastAPI deployed on Azure Kubernetes Service."
      ]
    },
    architecture: {
      type: "rag-chatbot",
      title: "Textbook PDF to Citation-Grounded Answers",
      description: "A document-ingestion pipeline indexes textbook passages in Azure AI Search. Student queries pass through scope and safety checks, retrieve relevant passages, and receive Azure OpenAI answers with citations through FastAPI on AKS.",
      flowSteps: [
        {
          step: "01",
          title: "Textbook PDF Ingestion",
          desc: "Collect textbook PDFs supplied for the university learning assistant.",
          badge: "PDF Source Material"
        },
        {
          step: "02",
          title: "Document Text Extraction",
          desc: "Extract textbook content using Python parsers and Azure Document Intelligence.",
          badge: "Python + Document Intelligence"
        },
        {
          step: "03",
          title: "Chunk, Embed & Index",
          desc: "Split extracted content into chunks, create embeddings, and store them in Azure AI Search.",
          badge: "Azure AI Search"
        },
        {
          step: "04",
          title: "Student Query & Guardrails",
          desc: "Check incoming questions with LangKit and an LLM for out-of-scope or inappropriate content.",
          badge: "LangKit + LLM"
        },
        {
          step: "05",
          title: "Retrieve & Generate Cited Answer",
          desc: "Retrieve relevant textbook passages from Azure AI Search and use Azure OpenAI to produce an answer with citations.",
          badge: "Azure AI Search + Azure OpenAI"
        },
        {
          step: "06",
          title: "FastAPI Delivery on AKS",
          desc: "Return the chatbot response and citations through FastAPI endpoints deployed on Azure Kubernetes Service.",
          badge: "FastAPI + AKS"
        }
      ],
      components: [
        { name: "Textbook PDFs", role: "University learning source material", tech: "PDF", color: "#F472B6" },
        { name: "Document Extraction", role: "Extracts text from textbook files", tech: "Python + Azure Document Intelligence", color: "#38BDF8" },
        { name: "Embedding Index", role: "Stores retrievable textbook chunks", tech: "Azure AI Search", color: "#A78BFA" },
        { name: "Guardrails", role: "Checks scope and appropriate queries", tech: "LangKit + LLM", color: "#10B981" },
        { name: "Answer Generation", role: "Generates answers grounded in retrieved content", tech: "Azure OpenAI + citations", color: "#6366F1" },
        { name: "API Runtime", role: "Serves chatbot requests", tech: "FastAPI on AKS", color: "#F59E0B" }
      ]
    },
    learnings: [
      "Reliable PDF extraction and thoughtful chunking are foundational to retrieving useful textbook context.",
      "Returning citations helps students trace answers back to the source material used by the RAG system.",
      "Evaluate retrieval and generation separately with answer relevancy, context relevancy, recall, precision, and hallucination measures.",
      "Scope and content guardrails help keep a student-facing learning assistant focused on appropriate questions."
    ],
    links: {}
  },
  {
    id: "mistral-log-diagnosis",
    title: "Application Log Diagnosis Assistant",
    shortTitle: "Log Diagnosis Assistant",
    subtitle: "LoRA fine-tuning of Mistral for answering application-log error queries through a FastAPI chatbot API",
    category: "LLM Fine-Tuning",
    badge: "Mistral + LoRA • 87% Accuracy",
    tags: ["Mistral", "LoRA", "Python", "FastAPI",  "LLM-as-a-Judge"],
    metrics: [
      { label: "Evaluation Accuracy", value: "87%" },
      { label: "Base Model", value: "Mistral" },
      { label: "Fine-Tuning", value: "LoRA" },
      { label: "Inference API", value: "FastAPI" }
    ],
    overview: {
      problem: "A general-purpose language model could not reliably answer application-log questions such as 'What is error FT_001?' without examples grounded in the relevant log patterns.",
      solution: "Created and cleaned a question-and-answer dataset from application-log queries, fine-tuned Mistral with LoRA, and evaluated its responses using BLEU score and an LLM-as-a-judge. Exposed the model through a FastAPI endpoint for chatbot queries.",
      impactBullets: [
        "Built a validated and cleaned question-and-answer dataset for application-log error queries.",
        "Fine-tuned Mistral using LoRA for domain-specific log diagnosis.",
        "Achieved 87% accuracy; evaluated responses using BLEU score and an LLM-as-a-judge.",
        "Created a FastAPI inference API that a React chatbot can call without exposing model weights in the browser."
      ]
    },
    architecture: {
      type: "finetuning of LLM",
      title: "Mistral LoRA Training & Chatbot Serving",
      description: "The implemented workflow prepares log Q&A data, fine-tunes and evaluates Mistral, then exposes inference through FastAPI. Hosted the model and API on a GPU-capable VM, and have the frontend call that API over HTTPS.",
      flowSteps: [
        {
          step: "01",
          title: "Validated Log Q&A Dataset",
          desc: "Collect, clean, and validate application-log question-and-answer pairs, application specific error-code questions.",
          badge: "Dataset Preparation"
        },
        {
          step: "02",
          title: "Mistral LoRA Fine-Tuning",
          desc: "Train a LoRA adapter on the prepared log Q&A dataset while retaining the Mistral base model.",
          badge: "Mistral + LoRA"
        },
        {
          step: "03",
          title: "Model Evaluation",
          desc: "Measure answer quality with BLEU score and LLM-as-a-judge evaluation; the reported accuracy was 87%.",
          badge: "87% Accuracy"
        },
        {
          step: "04",
          title: "FastAPI Inference Endpoint",
          desc: "Serve chatbot requests through a backend endpoint that loads the base model and LoRA adapter.",
          badge: "FastAPI"
        },
        {
          step: "05",
          title: "GPU-Backed Model Hosting",
          desc: "Deployed the model-serving API on VM with GPU memory and kept model credentials and weights server-side.",
          badge: "Deployment"
        },
        {
          step: "06",
          title: "Chatbot Frontend",
          desc: "The React chat UI sends HTTPS requests to FastAPI and renders the response. Configure CORS, authentication, and rate limits on the API.",
          badge: "React → FastAPI"
        }
      ],
      components: [
        { name: "Log Q&A Dataset", role: "Validated training examples", tech: "Python", color: "#38BDF8" },
        { name: "Base Model + Adapter", role: "Log-query response generation", tech: "Mistral + LoRA", color: "#A78BFA" },
        { name: "Evaluation", role: "Quality measurement", tech: "BLEU score + LLM-as-a-Judge", color: "#10B981" },
        { name: "Inference API", role: "Serves chatbot requests", tech: "FastAPI", color: "#6366F1" },
        { name: "Model Hosting", role: "Runs the model outside the browser", tech: "GPU-capable host", color: "#F59E0B" },
        { name: "Chat Interface", role: "Sends queries and displays answers", tech: "React App", color: "#F472B6" }
      ]
    },
    learnings: [
      "Cleaning and validating question-and-answer examples is important for teaching the model consistent responses to application-log queries.",
      "Use held-out queries and combine automatic metrics such as BLEU score with LLM-as-a-judge evaluation when assessing answer quality.",
      "For a React chatbot, call FastAPI from the frontend while hosting the model and adapter on a separate GPU-capable backend; did not load model weights into the browser."
    ],
    links: {
      github: "https://github.com/stutisrivastava22",
      liveDemo: "#"
    }
  },
  {
    id: "servicenow-incident-resolution",
    title: "ServiceNow Incident Resolution Assistant",
    shortTitle: "Incident Resolution ML",
    subtitle: "Near-real-time ServiceNow incident classification and resolution recommendations using Random Forest",
    category: "Traditional ML",
    badge: "91% Model Accuracy • 33% Lower MTTR",
    tags: ["Python", "Databricks", "ServiceNow", "Event Hubs", "Random Forest Classifier", "NLP"],
    metrics: [
      { label: "Classification Accuracy", value: "91%" },
      { label: "Redunction in Mean Time to Resolve", value: "33%" },
      { label: "Incident Ingestion", value: "Near real time" },
      { label: "Classifier", value: "Random Forest" }
    ],
    overview: {
      problem: "Resolving ServiceNow incidents manually can slow support teams, especially when similar incidents and their resolutions have already been seen.",
      solution: "Built a near-real-time incident workflow that sends ServiceNow incidents through Event Hubs, classifies them with a Random Forest model, retrieves category-specific resolutions from a database and knowledge base, and returns a resolution recommendation to ServiceNow through Event Hubs.",
      impactBullets: [
        "Trained a Random Forest classifier on historical incident data after feature selection, preprocessing, and PII removal.",
        "Retrieved resolutions associated with the predicted incident category to produce recommendations.",
        "Returned recommendations to ServiceNow through Event Hubs in a near-real-time workflow.",
        "Reduced mean time to resolve incidents by 33%."
      ]
    },
    architecture: {
      type: "incident-resolution",
      title: "Random Forest Training & ServiceNow Resolution Flow",
      description: "Historical incidents are cleaned, de-identified, and used to train the classifier. At runtime, new ServiceNow incidents are classified, matched with category-specific resolutions, and returned through Event Hubs.",
      flowSteps: [
        {
          step: "01",
          title: "Near-Real-Time Incident Ingestion",
          desc: "ServiceNow incidents are ingested through Event Hubs as they arrive.",
          badge: "ServiceNow → Event Hubs"
        },
        {
          step: "02",
          title: "Preprocessing & PII Removal",
          desc: "Prepare incident data and remove PII before classification.",
          badge: "Selected Features"
        },
        {
          step: "03",
          title: "Random Forest Classification",
          desc: "Predict the incident category using the model trained on past incidents; the model achieved 91% accuracy.",
          badge: "91% Accuracy"
        },
        {
          step: "04",
          title: "Resolution Lookup & Recommendation",
          desc: "Use the predicted category to retrieve relevant resolutions from the resolution database and knowledge base.",
          badge: "Category-Based Resolution"
        },
        {
          step: "05",
          title: "Return Recommendation to ServiceNow",
          desc: "Send the recommended resolution back to ServiceNow through Event Hubs.",
          badge: "Event Hubs → ServiceNow"
        }
      ],
      components: [
        { name: "Historical Incidents", role: "Training examples", tech: "ServiceNow Data", color: "#38BDF8" },
        { name: "Training Preparation", role: "Feature selection, preprocessing, and PII removal", tech: "Python / ML Pipeline", color: "#A78BFA" },
        { name: "Classifier", role: "Predicts incident category", tech: "Random Forest", color: "#6366F1" },
        { name: "Resolution Store", role: "Category-specific resolutions", tech: "Database + Knowledge Base", color: "#10B981" },
        { name: "Incident Stream", role: "Near-real-time event transport", tech: "Azure Event Hubs", color: "#F59E0B" },
        { name: "Incident System", role: "Receives recommended resolution", tech: "ServiceNow", color: "#F472B6" }
      ]
    },
    learnings: [
      "Feature selection and preprocessing are important for building a useful incident-category classifier.",
      "Removing PII from historical incidents is an essential preparation step before model training.",
      "Connecting classification to a category-specific resolution knowledge base turns the predicted category into an actionable recommendation."
    ],
    links: {}
  },
  {
    id: "vm-utilization-forecasting",
    title: "VM Utilization Forecasting & Optimization",
    shortTitle: "VM Forecasting",
    subtitle: "Forecasts CPU, memory, and disk utilization to recommend right-sizing and help control cloud costs",
    category: "Traditional ML",
    badge: "45% Fewer Overutilization Incidents • 40% More Savings",
    tags: ["Time Series", "Prophet", "Databricks", "Log Analytics", "CPU", "Memory", "Disk"],
    metrics: [
      { label: "Savings Increased", value: "+40%" },
      { label: "Overutilization Incidents Reduced", value: "45%" },
      { label: "Resources Forecast", value: "CPU • Memory • Disk" }
    ],
    overview: {
      problem: "VMs can be overprovisioned or underprovisioned when capacity decisions rely only on current utilization, leading to unnecessary spend or incidents caused by resource pressure.",
      solution: "Prophet to forecast VM resource utilization, then turned those forecasts into right-sizing recommendations with estimated cost impact.",
      impactBullets: [
        "Used Databricks for utilization data analysis, model training, and inference.",
        "Scheduled daily Databricks jobs to ingest VM utilization data from Log Analytics and monthly jobs to run the forecasting script.",
        "Forecast daily CPU, memory, and disk utilization for the next month using Prophet.",
        "Included seasonal and holiday effects in the forecasts.",
        "Evaluated forecasts with MSE, MAE, and RMSE.",
        "Recommended VM configurations for downscaling or upscaling based on lower and upper utilization thresholds.",
        "Reduced incidents on overutilized VMs by 45% and increased savings by 40%."
      ]
    },
    architecture: {
      type: "time-series-forecasting",
      title: "Log Analytics to VM Right-Sizing Recommendations",
      description: "Daily Databricks jobs ingest Log Analytics telemetry; Databricks handles data analysis, Prophet model training, and inference. A monthly job forecasts CPU, memory, and disk utilization, then threshold logic recommends VM configurations and cost impact.",
      flowSteps: [
        {
          step: "01",
          title: "Daily Log Analytics Ingestion",
          desc: "A scheduled Databricks job ingests historical VM utilization data from Log Analytics.",
          badge: "Daily Databricks Job"
        },
        {
          step: "02",
          title: "Data Preprocessing & Analysis",
          desc: "Clean, preprocess, and analyze CPU, memory, and disk utilization time series in Databricks.",
          badge: "Data Preparation"
        },
        {
          step: "03",
          title: "Prophet Model Training",
          desc: "Train the time-series model in Databricks with seasonal and holiday effects.",
          badge: "Databricks + Prophet"
        },
        {
          step: "04",
          title: "Monthly Forecast Job",
          desc: "A scheduled Databricks job runs inference to forecast daily CPU, memory, and disk utilization for the next month.",
          badge: "Monthly Inference"
        },
        {
          step: "05",
          title: "Forecast Evaluation",
          desc: "Evaluate model forecasts using MSE, MAE, and RMSE.",
          badge: "MSE • MAE • RMSE"
        },
        {
          step: "06",
          title: "Threshold-Based Decision",
          desc: "Compare average forecast utilization against lower and upper thresholds to identify downscale or upscale opportunities.",
          badge: "Lower / Upper Thresholds"
        },
        {
          step: "07",
          title: "Configuration & Cost Recommendation",
          desc: "Recommend target VM configurations with estimated savings for downscaling or investment for upscaling.",
          badge: "Right-Sizing + Cost Impact"
        }
      ],
      components: [
        { name: "Utilization Source", role: "Historical VM telemetry", tech: "Log Analytics + Databricks Jobs", color: "#38BDF8" },
        { name: "Analysis + Preprocessing", role: "Cleans and analyzes time series", tech: "Databricks", color: "#A78BFA" },
        { name: "Forecast Model", role: "Daily CPU, memory, and disk predictions", tech: "Prophet on Databricks", color: "#6366F1" },
        { name: "Model Evaluation", role: "Forecast error measurement", tech: "MSE / MAE / RMSE", color: "#10B981" },
        { name: "Threshold Engine", role: "Selects scale-up or scale-down action", tech: "Average utilization thresholds", color: "#F59E0B" },
        { name: "Recommendations", role: "Target configuration and cost impact", tech: "Right-sizing", color: "#F472B6" }
      ]
    },
    learnings: [
      "Include seasonal and holiday patterns when they affect VM utilization over time.",
      "Evaluate forecasts with complementary error metrics such as MSE, MAE, and RMSE.",
      "Translating forecasts into explicit thresholds, target configurations, and estimated cost impact makes predictions actionable for capacity planning."
    ],
    links: {}
  },
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    company: "EY GDS",
    location: "Bengaluru, India",
    role: "Consultant | Senior Generative AI Engineer",
    period: "Oct 2025 – Present",
    current: true,
    badge: "Current Role",
    summary: "Leading technical design and production deployment of enterprise multi-agent platforms and automated AI governance systems across AWS and Azure cloud environments.",
    bullets: [
      "Designed and developed a production-grade Enterprise Architecture Governance platform using AWS Strands in Python (1 supervisor + 6 specialized agents), deployed on Bedrock AgentCore using the A2A protocol.",
      "Cut architecture review turnaround from 3–5 days to under 10 minutes (95%+ faster) while maintaining 85%+ precision on flagged compliance issues, validated against manual reviews.",
      "Built full-pipeline observability (Lumenova, SignalFx, Splunk, CloudWatch) and integrated AI Guardrails, reducing hallucinated outputs and cutting agent-failure detection time."
    ],
    techStack: ["AWS Strands", "Bedrock AgentCore", "A2A Protocol", "LangGraph", "Python", "Azure OpenAI", "Lumenova", "Splunk", "CloudWatch", "FastAPI"],
    awards: [
      "Achiever Extraordinaire Award consecutively for 2 years for outstanding contribution in Generative AI at EY GDS",
      "GDS User Recognition Award for building an architecture assist application that reduced review time by 40%"
    ]
  },
  {
    company: "EY GDS",
    location: "Bengaluru, India",
    role: "Senior Analyst | Generative AI Engineer",
    period: "Aug 2024 – Sep 2025",
    summary: "Engineered autonomous AI migration systems that converted legacy enterprise ETL data pipelines into modern, optimized PySpark code on Databricks and Azure.",
    bullets: [
      "Designed and developed a multi-agent AI system using LangGraph and Azure OpenAI LLM that autonomously analyzes and converts IBM DataStage (DSX) ETL pipelines into optimized PySpark code using Python FastAPI orchestration.",
      "Engineered a redundancy-detection agent that scored and flagged duplicate pipelines, and a code-generation agent that generates optimized PySpark code and merges redundant jobs.",
      "Reduced manual refactoring effort by 70% and improved migration accuracy and scalability; deployed the application on Azure using Docker and Kubernetes.",
      "Designed a multi-agent AI system in LangGraph (Python) to convert Informatica ETL Workflows into optimized PySpark code with an interactive Streamlit application, cutting manual conversion effort from 5 days to 2 hours."
    ],
    techStack: ["LangGraph", "Azure OpenAI", "PySpark", "Python", "FastAPI", "Neo4j", "Docker", "Kubernetes", "Streamlit"],
    awards: [
      "Achiever Extraordinaire Award (Year 1) for enterprise ETL conversion agents"
    ]
  },
  {
    company: "Unisys, India",
    location: "Bengaluru, India",
    role: "Associate Software Engineer | Data Scientist",
    period: "Aug 2021 – Aug 2024",
    summary: "Led machine learning model development, open-source LLM fine-tuning, RAG conversational assistants, and containerized microservice architectures.",
    bullets: [
      "Fine-tuned Llama 2 using LoRA on enterprise underwriting datasets to generate domain-specific recommendations. Designed scalable FastAPI inference services deployed on Azure Kubernetes Service (AKS).",
      "Fine-tuned Mistral using LoRA on enterprise application logs to build a contextual log-analysis assistant capable of interpreting previously unseen application errors.",
      "Built a conversational assistant using Azure AI Search and RAG, implementing document retrieval and semantic search over university textbooks to provide context-grounded responses using Azure OpenAI (Flask on AKS).",
      "Built end-to-end ML pipeline generating automated ServiceNow incident resolutions with incident classification using Random Forest and Azure Event Hubs.",
      "Implemented a time series ML solution using FBProphet to forecast VM utilization, enabling efficient resource management and cost-effective scaling recommendations.",
      "Led migration from monolithic to microservices using FastAPI and Flask, containerizing with Docker and deploying on Azure Kubernetes."
    ],
    techStack: ["Llama 2", "Mistral", "LoRA/QLoRA", "Azure AI Search", "RAG", "FastAPI", "Flask", "Docker", "Kubernetes", "FBProphet", "Random Forest"],
    awards: [
      "Recognition and commendations at Unisys for leading the successful migration from monolithic to microservices architecture"
    ]
  }
];

export const EDUCATION_DATA = {
  institution: "Nitte Meenakshi Institute of Technology",
  degree: "Bachelor of Engineering in Computer Science Engineering",
  period: "2017 – 2021",
  location: "Bengaluru, India",
  cgpa: "9.34 / 10",
  highlights: [
    "Graduated with High Honors (Top Tier)",
    "Strong foundation in Algorithms, Distributed Computing & AI"
  ]
};

export const CERTIFICATIONS_DATA = [
  { name: "AI-900: Microsoft Azure AI Fundamentals", issuer: "Microsoft", code: "AI-900" },
  { name: "GH-300: GitHub Copilot", issuer: "GitHub", code: "GH-300" },
  { name: "Generative AI Fundamentals Badge", issuer: "Databricks", code: "Databricks" },
  { name: "Generative AI with LLMs & Applied ML", issuer: "Coursera", code: "Coursera" },
  { name: "Problem Solving Certificate", issuer: "HackerRank", code: "HackerRank" }
];

export const AWARDS_DATA = [
  {
    title: "Achiever Extraordinaire Award (Consecutive 2 Years)",
    issuer: "EY GDS",
    year: "2024 & 2025",
    desc: "Recognized for pioneering contributions in Generative AI and multi-agent enterprise systems."
  },
  {
    title: "GDS User Recognition Award",
    issuer: "EY GDS",
    year: "2025",
    desc: "Awarded for architecting the AI Architecture Assist application that slashed review time by 40%."
  },
  {
    title: "Engineering Excellence Commendation",
    issuer: "Unisys",
    year: "2023",
    desc: "Commended for spearheading the critical transition from legacy monolith to cloud microservices on AKS."
  }
];
