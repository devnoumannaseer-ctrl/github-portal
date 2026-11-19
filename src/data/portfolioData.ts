export interface SocialLinks {
  github: string;
  linkedin: string;
  instagram: string;
  email: string;
  whatsapp: string;
}

export interface SkillItem {
  name: string;
  category: 'languages' | 'core_cs' | 'web' | 'tools';
  iconName: string;
  level: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problemSolved: string;
  keyFeatures: string[];
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  category: string;
  metrics?: { label: string; value: string };
}

export interface TimelineEntry {
  id: string;
  title: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  type: 'education' | 'experience' | 'milestone';
  iconType: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  iconName: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  imageUrl?: string;
  skills: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PhilosophyStep {
  id: string;
  number: string;
  title: string;
  summary: string;
  details: string;
  codeSnippet: string;
  tags: string[];
}

export interface PortfolioData {
  personal: {
    fullName: string;
    firstName: string;
    lastName: string;
    tagline: string;
    primaryRole: string;
    subtitles: string[];
    bio: string;
    detailedBio: string[];
    statusBadge: string;
    location: string;
    email: string;
    profileImage: string;
    resumeUrl: string;
    yearsOfCoding: string;
    githubUsername: string;
  };
  socials: SocialLinks;
  navItems: { name: string; href: string }[];
  skills: SkillItem[];
  projects: Project[];
  timeline: TimelineEntry[];
  services: ServiceItem[];
  certificates: CertificateItem[];
  faq: FaqItem[];
  philosophySteps: PhilosophyStep[];
}

export const portfolioData: PortfolioData = {
  personal: {
    fullName: "NAUMAN NASEER",
    firstName: "NAUMAN",
    lastName: "NASEER",
    tagline: "Building robust systems, algorithmic solutions, and modern software with precision.",
    primaryRole: "Computer Science Student & Systems Programmer",
    subtitles: [
      "Computer Science Student",
      "Python & C++ Systems Programmer",
      "Data Structures & OOP Specialist",
      "Modern Web Developer",
    ],
    bio: "Computer Science undergraduate focused on core computing, algorithmic problem-solving, clean object-oriented architecture, and modern full-stack development.",
    detailedBio: [
      "I am an enthusiastic Computer Science undergraduate developing resilient foundations in low-level and systems computing. My primary focus revolves around object-oriented programming, data structures, algorithms, and computational efficiency.",
      "Extensively building in C++, Python, and Java to construct fast command-line utilities, algorithmic simulations, and interactive web tools.",
      "Beyond coursework, I actively engage with self-directed engineering challenges, open-source architectures, and modern web application development with React, TypeScript, and Tailwind CSS."
    ],
    statusBadge: "Available for Internships & Projects",
    location: "Pakistan",
    email: "dev.nouman.naseer@gmail.com",
    githubUsername: "devnoumannaseer-ctrl",
    profileImage: "/my-pic.jpg",
    resumeUrl: "https://i.postimg.cc/x1cD1z6X/Nauman-naseer.png",
    yearsOfCoding: "Academic CS Journey",
  },
  socials: {
    github: "https://github.com/devnoumannaseer-ctrl",
    linkedin: "https://www.linkedin.com/in/nauman-naseer-5469873a7/",
    instagram: "https://www.instagram.com/naumannaseer_official/",
    email: "mailto:dev.nouman.naseer@gmail.com",
    whatsapp: "https://api.whatsapp.com/send?text=Hi%20Nauman%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%21",
  },
  navItems: [
    { name: "Home", href: "#hero" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Solutions", href: "#solutions" },
    { name: "Analyzer", href: "#analyzer" },
    { name: "README Builder", href: "#readme-builder" },
    { name: "Skills", href: "#skills" },
    { name: "Timeline", href: "#timeline" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ],
  skills: [
    // Programming Languages
    { name: "C++", category: "languages", iconName: "SiCplusplus", level: "Core Foundation", description: "Pointers, Dynamic Memory Management, STL, Classes & RAII" },
    { name: "Python", category: "languages", iconName: "SiPython", level: "Proficient", description: "Scripting, Automation, Data Structures, OOP & Analytics" },
    { name: "Java", category: "languages", iconName: "FaJava", level: "Core Foundation", description: "Object-Oriented Programming, Collections, Multithreading & Architecture" },
    { name: "C Language", category: "languages", iconName: "SiC", level: "Foundational", description: "Structured Programming, Memory Layout, Arrays, Structs & Pointers" },
    { name: "JavaScript / TS", category: "languages", iconName: "SiJavascript", level: "Intermediate", description: "Modern ES6+, Async/Await, TypeScript Types, DOM, Events" },
    { name: "SQL", category: "languages", iconName: "SiMysql", level: "Foundational", description: "Relational Queries, Joins, Aggregations, Schema Normalization" },

    // Core Computer Science
    { name: "Data Structures", category: "core_cs", iconName: "Binary", level: "Core Foundation", description: "Arrays, Linked Lists, Binary Trees, Stacks, Queues, Graphs & Heaps" },
    { name: "Algorithms & Analysis", category: "core_cs", iconName: "Cpu", level: "Core Foundation", description: "Sorting, Searching, Recursion, Time & Space Big-O Complexity" },
    { name: "OOP Paradigm", category: "core_cs", iconName: "Layers", level: "Core Foundation", description: "Encapsulation, Inheritance, Polymorphism, Abstraction & Design Patterns" },
    { name: "Database Design", category: "core_cs", iconName: "Database", level: "Academic", description: "Entity-Relationship Schemas, Normalization (1NF-3NF), Foreign Keys" },
    { name: "Operating Systems", category: "core_cs", iconName: "Terminal", level: "Fundamentals", description: "Processes, Threads, CPU Scheduling, Memory Paging & Deadlocks" },

    // Web Development
    { name: "React.js", category: "web", iconName: "SiReact", level: "Intermediate", description: "Functional Components, Hooks, Virtual DOM, State & Context" },
    { name: "Tailwind CSS", category: "web", iconName: "SiTailwindcss", level: "Proficient", description: "Utility-first Design, Dark Mode, Glassmorphism, Responsive Grids" },
    { name: "HTML5 & Modern CSS", category: "web", iconName: "SiHtml5", level: "Proficient", description: "Semantic Markup, Modern Flexbox, CSS Grid, Transitions" },
    { name: "RESTful APIs", category: "web", iconName: "Globe", level: "Foundational", description: "HTTP Methods, JSON Payloads, Client-side Fetching & Axios" },

    // Tools & Platforms
    { name: "Git & GitHub", category: "tools", iconName: "SiGithub", level: "Daily Workflow", description: "Version Control, Branching, Commits, Repositories & Workflows" },
    { name: "VS Code", category: "tools", iconName: "Code2", level: "Primary IDE", description: "Extensions, Debugging, Terminal Workflow & Workspace Configs" },
    { name: "Linux / Bash", category: "tools", iconName: "TerminalSquare", level: "Command Line", description: "Shell Scripting, Navigation, File Permissions & Pipelines" },
    { name: "IntelliJ & PyCharm", category: "tools", iconName: "Wrench", level: "Development", description: "Java and Python IDE Debugging, Profiling & Refactoring" },
  ],
  projects: [
    {
      id: "algo-visualizer",
      title: "Interactive Algorithm & Pathfinding Visualizer",
      subtitle: "CS Data Structures & Algorithmic Simulation",
      description: "An educational platform that visually simulates Dijkstra's shortest path, A* search, and fundamental sorting algorithms (QuickSort, MergeSort, HeapSort) in real time with interactive speed controls and custom maze generation.",
      problemSolved: "Abstract algorithm mechanics are difficult to grasp from static code. This tool translates pointer movements, array swaps, and graph exploration into real-time visual feedback.",
      keyFeatures: [
        "Real-time grid pathfinding with obstacles and weighted nodes",
        "Step-by-step sorting array comparisons with color-coded states",
        "Customizable array sizes, speed sliders, and wall generation",
        "Detailed time (Big-O) and space complexity breakdown for each routine"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Algorithms", "Data Structures"],
      image: "/projects/algo-visualizer.jpg",
      githubUrl: "https://github.com/devnoumannaseer-ctrl",
      liveUrl: "https://github.com/devnoumannaseer-ctrl",
      featured: true,
      category: "Computer Science",
      metrics: { label: "Execution Graph", value: "O(V + E) Simulation" },
    },
    {
      id: "student-management-system",
      title: "Student Record & Academic Management System",
      subtitle: "Object-Oriented C++ & Binary File Persistence Engine",
      description: "A robust console and file-driven management system engineered in C++ utilizing object-oriented principles, dynamic memory allocation, and persistent binary/text storage.",
      problemSolved: "Demonstrates production-style OOP architecture without relying on third-party frameworks, handling edge cases such as memory leak avoidance and file stream corruption.",
      keyFeatures: [
        "Full CRUD operations for student entities, courses, and grade calculations",
        "Clean OOP hierarchy with encapsulated classes, inheritance, and polymorphism",
        "Persistent disk storage using file streams (ifstream / ofstream)",
        "Search by roll number, sorting by GPA, and statistical report generation"
      ],
      technologies: ["C++", "OOP", "File I/O", "Data Structures", "Dynamic Memory"],
      image: "/projects/student-management.jpg",
      githubUrl: "https://github.com/devnoumannaseer-ctrl",
      liveUrl: "https://github.com/devnoumannaseer-ctrl",
      featured: true,
      category: "Systems & OOP",
      metrics: { label: "Memory Safety", value: "100% Leak-Free" },
    },
    {
      id: "python-automation-suite",
      title: "Python Data Processing & Automation Suite",
      subtitle: "Automated File Parsing & Analytics Toolkit",
      description: "A collection of modular Python utilities that automates data extraction from CSV/JSON datasets, performs automated validation checks, and compiles summary metrics into formatted spreadsheets.",
      problemSolved: "Eliminates repetitive manual data restructuring and validates file integrity with structured error reporting and automated batch execution.",
      keyFeatures: [
        "Automated batch processing of multi-format data inputs",
        "Data normalization, deduplication, and anomaly detection",
        "Automated email notifications and execution logs",
        "Clean modular codebase adhering to PEP8 standards and type hinting"
      ],
      technologies: ["Python", "Automation", "File Parsing", "Regex", "Data Analytics"],
      image: "/projects/python-automation.jpg",
      githubUrl: "https://github.com/devnoumannaseer-ctrl",
      liveUrl: "https://github.com/devnoumannaseer-ctrl",
      featured: true,
      category: "Automation & Python",
      metrics: { label: "Pipeline Speed", value: "10x Fast Parsing" },
    },
    {
      id: "premium-portfolio-hub",
      title: "GitHance-Engineered Developer Workspace & Portfolio",
      subtitle: "Ultra-Fast Developer Visibility Suite & GitHub Tools",
      description: "Constructed with React, TypeScript, Tailwind CSS, and Framer Motion. Features a live GitHub repository analyzer, real-time profile README builder, and interactive CS project showcase.",
      problemSolved: "Provides a unified, interactive workspace for recruiters and developers to inspect live codebases, generate customized profile READMEs, and review verified credentials.",
      keyFeatures: [
        "Live GitHub REST API integration for real-time repository analysis",
        "Interactive Profile README generator with dual preview and confetti export",
        "GitHance signature dark cyber design with ember orange & cyan glowing accents",
        "Responsive bento grid architecture and high-performance animations"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "GitHub API", "Framer Motion"],
      image: "/projects/portfolio-hub.jpg",
      githubUrl: "https://github.com/devnoumannaseer-ctrl",
      liveUrl: "https://github.com/devnoumannaseer-ctrl",
      featured: true,
      category: "Web Development",
      metrics: { label: "Lighthouse Score", value: "99+ Performance" },
    }
  ],
  services: [
    {
      id: "cpp-python-dev",
      title: "Core Software & Logic Development",
      tagline: "C++, Python, Java & Algorithmic Code",
      description: "Writing clean, structured, and modular code applying object-oriented design patterns, solid data structures, and algorithmic efficiency.",
      capabilities: [
        "Object-Oriented Programming (OOP) architectures",
        "Custom data structures and algorithmic implementations",
        "Console utilities, automation scripts, and file I/O",
        "Clean, commented, and maintainable academic and project code"
      ],
      iconName: "Code2"
    },
    {
      id: "frontend-web",
      title: "Modern Frontend Web Development",
      tagline: "Interactive, Responsive & Fast UIs",
      description: "Building responsive, mobile-first web applications using React, modern JavaScript, Tailwind CSS, and smooth animations.",
      capabilities: [
        "Component-driven React architectures",
        "Clean, aesthetic UI implementation with Tailwind CSS",
        "Cross-browser and mobile responsive optimization",
        "REST API integration and interactive state handling"
      ],
      iconName: "Layout"
    },
    {
      id: "database-systems",
      title: "Database Modeling & Querying",
      tagline: "Relational Schemas & SQL Operations",
      description: "Designing structured relational databases with optimized schemas, proper entity normalization, and reliable SQL queries.",
      capabilities: [
        "Relational schema modeling and normalization (1NF - 3NF)",
        "Writing complex SQL queries, joins, and aggregations",
        "Data consistency, constraints, and index planning",
        "Integration with backend and desktop application layers"
      ],
      iconName: "Database"
    },
    {
      id: "code-debugging",
      title: "Code Review & Logic Debugging",
      tagline: "Troubleshooting & Refactoring",
      description: "Analyzing existing codebases to identify logic bugs, memory leaks, algorithmic bottlenecks, and opportunities for structural refactoring.",
      capabilities: [
        "Memory leak tracing and pointer debugging in C++",
        "Algorithmic time complexity profiling and optimization",
        "Refactoring messy procedural scripts into clean OOP classes",
        "Writing unit test cases and boundary condition checks"
      ],
      iconName: "Bug"
    }
  ],
  timeline: [
    {
      id: "bscs-degree",
      title: "Bachelor of Science in Computer Science (BSCS)",
      institution: "Computer Science University Studies",
      period: "In Progress / Ongoing",
      location: "Pakistan",
      description: "Undergraduate Computer Science curriculum covering fundamental computing theory, systems architecture, mathematical foundations, and practical software engineering.",
      highlights: [
        "Core Coursework: Programming Fundamentals, Object-Oriented Programming, Data Structures & Algorithms",
        "Systems: Database Management Systems, Discrete Mathematics, Computer Architecture",
        "Hands-on lab assignments in C++, Python, and relational database systems"
      ],
      type: "education",
      iconType: "GraduationCap"
    },
    {
      id: "cs-foundations",
      title: "Programming Foundations & Project Development",
      institution: "Self-Directed & Academic Labs",
      period: "Foundational Milestones",
      location: "Independent Learning",
      description: "Committed to mastering core computer science principles through hands-on project creation, coding challenges, and open-source exploration.",
      highlights: [
        "Implemented classic data structures (Trees, Linked Lists, Hash Tables, Heaps) from scratch",
        "Created practical utilities in Python and C++ demonstrating memory management and OOP design",
        "Participated in collaborative coding sprints, code reviews, and Git-based project workflows"
      ],
      type: "experience",
      iconType: "Terminal"
    },
    {
      id: "web-exploration",
      title: "Modern Web Engineering Exploration",
      institution: "Independent & Project Practice",
      period: "Active Continuous Growth",
      location: "Remote / Online",
      description: "Expanding capabilities into modern frontend engineering, building accessible user interfaces and connecting frontend clients to data sources.",
      highlights: [
        "Mastered modern JavaScript (ES6+), React hooks, and component lifecycle",
        "Constructed responsive applications with Tailwind CSS and Framer Motion",
        "Version control best practices on GitHub with clean commit histories"
      ],
      type: "milestone",
      iconType: "Rocket"
    }
  ],
  certificates: [
    {
      id: "resume-credential",
      title: "Curriculum Vitae & Verified Academic Record",
      issuer: "NAUMAN NASEER - Official Document",
      date: "Current & Active",
      credentialUrl: "https://i.postimg.cc/x1cD1z6X/Nauman-naseer.png",
      imageUrl: "https://i.postimg.cc/x1cD1z6X/Nauman-naseer.png",
      skills: ["C++", "Python", "Java", "Computer Science", "OOP", "Data Structures"]
    },
    {
      id: "cs-fundamentals-cert",
      title: "Computer Science & Programming Foundations",
      issuer: "Academic & Coursework Foundations",
      date: "Verified Ongoing",
      credentialUrl: "https://github.com/devnoumannaseer-ctrl",
      skills: ["Object-Oriented Programming", "Algorithms", "Data Structures", "Problem Solving"]
    }
  ],
  faq: [
    {
      id: "faq-1",
      question: "What is Nauman Naseer's core engineering focus?",
      answer: "Nauman is a Computer Science undergraduate focused on core software engineering: object-oriented programming, low-level memory management in C++, Python automation, Java architecture, and algorithmic problem-solving, along with modern interactive web development with React and TypeScript."
    },
    {
      id: "faq-2",
      question: "Which systems and low-level projects has he developed?",
      answer: "His portfolio highlights an interactive Algorithm & Pathfinding Visualizer simulating graph exploration and sorting routines, a C++ Student Record System utilizing object-oriented hierarchies and persistent binary file streams, and Python batch automation suites."
    },
    {
      id: "faq-3",
      question: "Can I analyze any GitHub account using the live workspace analyzer?",
      answer: "Yes! The live GitHub Analyzer tool on this site connects directly to the GitHub REST API. You can enter 'devnoumannaseer-ctrl' or any public GitHub username to inspect live repositories, language breakdowns, follower metrics, and documentation health."
    },
    {
      id: "faq-4",
      question: "How does the live GitHub README Generator work?",
      answer: "The interactive README builder lets you toggle custom badges, header styles, GitHub stats widgets, and social links in real time. You can instantly preview how your README looks or copy the raw markdown with 1-click confetti export."
    },
    {
      id: "faq-5",
      question: "Is Nauman available for software engineering internships or roles?",
      answer: "Yes, Nauman is actively seeking software development internships, academic collaborations, and project opportunities. You can reach out directly via the Contact section, email him at dev.nouman.naseer@gmail.com, or message via WhatsApp."
    }
  ],
  philosophySteps: [
    {
      id: "step-1",
      number: "01",
      title: "Systems Thinking & Problem Modeling",
      summary: "Deconstructing problem statements into formal constraints and mathematical structures before writing code.",
      details: "Every engineering challenge starts with clarifying inputs, boundary conditions, and time/space constraints. Whether architecting a custom file database or a graph pathfinder, rigorous modeling ensures predictable behavior.",
      codeSnippet: "// Step 01: Constraint & Complexity Modeling\nstruct ProblemSpec {\n    size_t maxVertices = 10000;\n    double maxTimeLatencyMs = 15.0;\n    bool requiresPersistence = true;\n};",
      tags: ["Constraints", "Complexity Analysis", "Data Modeling"]
    },
    {
      id: "step-2",
      number: "02",
      title: "Algorithmic Rigor & Optimal Data Structures",
      summary: "Selecting appropriate data layouts (Trees, Hash Tables, Heaps) to achieve minimal asymptotic complexity.",
      details: "Choosing the optimal data structure yields orders of magnitude in speedup. We leverage adjacency lists for sparse graphs, min-heaps for priority queues, and balanced trees for ordered lookups.",
      codeSnippet: "// Step 02: Priority Queue with Dijkstra Relax\ntypedef pair<int, int> DistNode;\npriority_queue<DistNode, vector<DistNode>, greater<DistNode>> pq;\npq.push({0, source});",
      tags: ["Dijkstra O(E log V)", "Dynamic Memory", "Big-O Optimization"]
    },
    {
      id: "step-3",
      number: "03",
      title: "Modular OOP & Memory-Safe Architecture",
      summary: "Encapsulating behaviors, eliminating memory leaks, and establishing clean inheritance hierarchies.",
      details: "Applying RAII (Resource Acquisition Is Initialization), smart pointers, modular classes, and unit boundaries. In Python and Java, writing clean, type-hinted, and decoupled modules.",
      codeSnippet: "// Step 03: Encapsulated RAII Storage\nclass RecordPersistence {\nprivate:\n    std::string filepath;\npublic:\n    explicit RecordPersistence(std::string p) : filepath(std::move(p)) {}\n    void save(const Student& s);\n};",
      tags: ["RAII", "Clean Architecture", "Encapsulation"]
    },
    {
      id: "step-4",
      number: "04",
      title: "Interactive Shipping & Live Documentation",
      summary: "Translating robust logic into accessible web tools, automated CI/CD, and crisp documentation.",
      details: "Engineered solutions should be verifiable and delightful to interact with. Using React, TypeScript, and modern APIs to give users immediate feedback and transparent visibility.",
      codeSnippet: "// Step 04: Real-time Feedback & Export\nexport const exportMarkdown = (config: ReadmeConfig): string => {\n  return generateShieldsAndStats(config);\n};",
      tags: ["React & TS", "GitHub API", "Production Deployment"]
    }
  ]
};
