// Centralized portfolio data - Single source of truth based strictly on Lathesha N's resume and academic profile.

export const personalInfo = {
  name: "Lathesha N",
  fullNameResume: "Lathesha A N",
  role: "Aspiring Software Engineer",
  tagline: "MCA Graduate & Software Developer specializing in Web Technologies, AI Integration, and API Testing",
  bio: "MCA graduate with hands-on experience in software development, AI integration, API testing, debugging, and web technologies. Passionate about building reliable applications and exploring automation, cybersecurity, and software engineering.",
  aboutDetailed: `I am an MCA graduate from Dayananda Sagar Academy of Technology and Management, Bengaluru (8.56 CGPA), with a strong foundation in computer science and modern software development practices. 

During my software development internship at Edutainer (PAT Technologies Private Limited), I contributed to Vibe Checker—an AI-powered emotion and compatibility detection application—implementing core features like Aura Scanner, AI Response Generator, and Vibe Clash while gaining real-world exposure to web development, AI integration, debugging, and software testing.

Additionally, my research paper on proactive web vulnerability detection was accepted at the IEEE ICEMCSI 2026 conference under the guidance of Dr. Chitra K. I am eager to apply my skills in software engineering, API testing, and application integration to contribute to dynamic development teams.`,
  email: "latheshaan@gmail.com",
  phone: "8310426364",
  phoneDisplay: "+91 83104 26364",
  location: "Bengaluru, Karnataka, India",
  locationShort: "India",
  openToRoles: [
    "Software Engineer (Fresher)",
    "Software Developer",
    "QA / Testing Engineer",
    "Entry-level Cybersecurity Analyst"
  ],
  socialLinks: {
    github: "https://github.com/Lathesh255",
    linkedin: "https://www.linkedin.com/in/latheshn07",
    email: "mailto:latheshaan@gmail.com"
  },
  profileImagePath: "/profile.jpg",
  certificateImagePath: "/ieee_certificate.jpg",
  resumePath: "/Lathesha_A_N_Resume.pdf",
  researchPaperPath: "/Lathesha_AN_Research_Paper.pdf",
  internshipCertificatePath: "/Lathesha_AN_Internship_Certificate.pdf",
  internshipCompletionLetterPath: "/Lathesha_AN_Internship_Completion_Letter.pdf",
  ieeePaperUrl: "" // Configurable placeholder for official IEEE Xplore URL when published
};

export const skillsData = [
  {
    category: "Programming",
    description: "Core languages for software development & algorithmic problem solving",
    skills: [
      { name: "Python", icon: "Code2", level: "Proficient" },
      { name: "Java", icon: "Coffee", level: "Proficient" },
      { name: "JavaScript", icon: "FileCode", level: "Proficient" },
      { name: "C++", icon: "Binary", level: "Familiar" }
    ]
  },
  {
    category: "Web Development",
    description: "Building responsive frontends and backend services",
    skills: [
      { name: "HTML5", icon: "Globe", level: "Proficient" },
      { name: "CSS3", icon: "Palette", level: "Proficient" },
      { name: "Node.js", icon: "Server", level: "Proficient" }
    ]
  },
  {
    category: "Libraries & Data Analysis",
    description: "Data manipulation, preprocessing, and analytical visualization",
    skills: [
      { name: "Pandas", icon: "Table", level: "Working Knowledge" },
      { name: "NumPy", icon: "Cpu", level: "Working Knowledge" },
      { name: "Matplotlib", icon: "BarChart3", level: "Working Knowledge" }
    ]
  },
  {
    category: "Databases",
    description: "Relational and document storage management",
    skills: [
      { name: "MySQL", icon: "Database", level: "Proficient" },
      { name: "MongoDB", icon: "HardDrive", level: "Proficient" }
    ]
  },
  {
    category: "Cloud",
    description: "Cloud computing and hosting infrastructure",
    skills: [
      { name: "AWS", icon: "Cloud", level: "Foundational" }
    ]
  },
  {
    category: "Tools & Analytics",
    description: "Testing suites, version control, and business intelligence",
    skills: [
      { name: "Postman", icon: "Send", level: "Proficient" },
      { name: "Git", icon: "GitBranch", level: "Proficient" },
      { name: "GitHub", icon: "Github", level: "Proficient" },
      { name: "Power BI", icon: "PieChart", level: "Familiar" },
      { name: "Tableau", icon: "LineChart", level: "Familiar" }
    ]
  },
  {
    category: "Core Concepts",
    description: "Computer science fundamentals and software quality assurance",
    skills: [
      { name: "Object-Oriented Programming (OOP)", icon: "Boxes", level: "Core" },
      { name: "Data Structures & Algorithms", icon: "Workflow", level: "Core" },
      { name: "Software Testing", icon: "CheckCircle2", level: "Core" },
      { name: "Debugging", icon: "Bug", level: "Core" },
      { name: "API Testing", icon: "Radio", level: "Core" },
      { name: "Software Integration", icon: "Layers", level: "Core" }
    ]
  },
  {
    category: "Operating Systems",
    description: "Development environments and command-line interfaces",
    skills: [
      { name: "Windows", icon: "Monitor", level: "Proficient" },
      { name: "Linux", icon: "Terminal", level: "Proficient" }
    ]
  }
];

export const experienceData = [
  {
    role: "Junior Software Development Intern",
    company: "Edutainer (PAT Technologies Private Limited)",
    location: "Bengaluru, India",
    duration: "February 2026 – May 2026",
    type: "Internship",
    badge: "Industry Internship",
    summary: "Worked on practical software development projects with an emphasis on modern web technologies, AI feature integration, and testing.",
    highlights: [
      "Worked on practical software development projects and gained hands-on experience in modern web technologies.",
      "Contributed to the development of Vibe Checker — a smart AI-powered emotion and compatibility detection application.",
      "Assisted in implementing key features including Aura Scanner, AI Response Generator, and Vibe Clash.",
      "Gained valuable real-world exposure to web development, AI integration, debugging, problem-solving, and building user-focused applications."
    ],
    technologies: ["JavaScript", "Node.js", "AI Integration", "API Testing", "Debugging", "Web Technologies"],
    certificatePdf: "/Lathesha_AN_Internship_Certificate.pdf",
    completionLetterPdf: "/Lathesha_AN_Internship_Completion_Letter.pdf"
  },
  {
    role: "Data Science Virtual Intern",
    company: "ICT Academy",
    location: "Remote, India",
    duration: "September 2023 – November 2023",
    type: "Virtual Internship",
    badge: "Virtual Internship",
    summary: "Focused on data analysis workflows, numerical computing, and foundational machine learning modeling using Python.",
    highlights: [
      "Used Python for structured data analysis and basic machine learning model development.",
      "Utilized Pandas, NumPy, and Matplotlib for data processing, feature exploration, and visual analytics.",
      "Developed basic machine learning models for prediction tasks.",
      "Gained practical experience in data analysis, analytical problem solving, and model evaluation."
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Machine Learning Basics", "Data Analysis"]
  }
];

export const projectsData = [
  {
    id: "memory-matching-game",
    title: "Memory Matching Game",
    category: "Personal Project",
    badge: "Interactive Web App",
    tagline: "An interactive card matching game challenging players' memory with real-time scoring.",
    description: "An interactive memory matching game designed to challenge players to find matching card pairs.",
    technologies: ["Node.js", "JavaScript", "HTML", "CSS"],
    features: [
      "Dynamic card shuffling algorithm ensuring randomized gameplay every session",
      "Robust card matching mechanism with quick state verification",
      "Real-time score tracking and move counter",
      "Win detection system with congratulatory completion state",
      "Clean, fully responsive interface optimized across devices",
      "Smooth CSS animations and flip transitions for card reveals",
      "Node.js server-side routing for seamless page delivery",
      "Static file handling and lightweight client-side runtime"
    ],
    github: "https://github.com/Lathesh255", // Can link to repo or profile
    demo: "", // Configurable demo link
    status: "Completed"
  },
  {
    id: "ezypark-smart-parking",
    title: "EzyPark — Cloud-Based Smart Parking System",
    subtitle: "With Dynamic Pricing",
    category: "Full-Stack Project",
    badge: "Cloud & Fintech",
    tagline: "Smart parking management system featuring demand-based dynamic pricing and automated billing.",
    description: "A comprehensive cloud-enabled smart parking solution designed to streamline parking reservations, dynamic tariff calculations, and secure online payments.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "REST APIs", "Stripe"],
    features: [
      "Real-time parking space availability and end-to-end reservation workflows",
      "Secure RESTful APIs for user registration, space management, and bookings",
      "JWT-based (JSON Web Token) authentication for protected user and admin endpoints",
      "Seamless Stripe payment gateway integration for secure digital transactions",
      "Rule-based dynamic pricing engine that adjusts parking rates based on real-time demand and spot availability",
      "Cloud database persistence using MongoDB Atlas with optimized document schemas"
    ],
    github: "https://github.com/Lathesh255",
    demo: "",
    status: "Completed"
  },
  {
    id: "vibe-checker",
    title: "Vibe Checker — Smart Emotion & Compatibility Detection",
    category: "Internship Project",
    badge: "Edutainer Internship",
    tagline: "AI-powered emotion and compatibility detection application developed during internship at Edutainer.",
    description: "An AI-powered application developed during my software development internship at Edutainer (PAT Technologies Private Limited).",
    technologies: ["JavaScript", "Node.js", "Web Technologies", "AI Integration", "API Testing", "Debugging"],
    isTeamWork: true,
    attributionNote: "Contributed as Junior Software Development Intern at Edutainer. Developed key application modules alongside the engineering team.",
    features: [
      "Aura Scanner: Evaluates emotional signals and vibe profiles based on interactive inputs",
      "AI Response Generator: Contextually synthesizes empathetic responses and interaction feedback",
      "Vibe Clash: Fun, engaging compatibility comparison mechanism between user profiles",
      "Web client integration with backend services and AI inference endpoints",
      "Application debugging and thorough testing across diverse user scenarios"
    ],
    github: "https://github.com/Lathesh255",
    demo: "",
    status: "Internship Contribution"
  }
];

export const publicationData = {
  title: "An Automated Web Security Configuration Assessment Framework for Proactive Vulnerability Detection and Remediation",
  publication: "IEEE Xplore",
  conference: "2026 International Conference on Emerging Trends in Mobile Computing and Sustainable Informatics (ICEMCSI 2026)",
  year: "2026",
  researchGuide: "Dr. Chitra K",
  institution: "Dayananda Sagar Academy of Technology and Management, Bengaluru",
  researchAreas: [
    "Cybersecurity",
    "Web Security",
    "Vulnerability Assessment",
    "Automated Remediation"
  ],
  summary: "This research addresses the escalating challenge of web application vulnerabilities arising from misconfigurations and security drift. The study proposes an automated framework designed to proactively assess web security configurations, detect potential entry points before exploitation, and facilitate systematic remediation workflows to strengthen overall web defense posture.",
  pdfPath: "/Lathesha_AN_Research_Paper.pdf",
  certificatePath: "/ieee_certificate.jpg",
  ieeeUrl: "" // Will be provided upon formal IEEE Xplore publishing
};

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Dayananda Sagar Academy of Technology and Management",
    location: "Bengaluru, India",
    year: "2024 – 2026",
    yearShort: "'26",
    grade: "8.56 CGPA",
    badge: "Completed / Master's Degree",
    highlights: [
      "Specialized in Software Engineering, Advanced Web Technologies, and Application Integration",
      "Authored IEEE research paper on Web Security Assessment under Dr. Chitra K",
      "Consistent academic performance with 8.56 CGPA"
    ]
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Sri Bhuvanendra College",
    location: "Karkala, Karnataka, India",
    year: "2021 – 2024",
    yearShort: "'24",
    grade: "8.6 CGPA",
    badge: "Bachelor's Degree",
    highlights: [
      "Built solid foundation in Data Structures, Object-Oriented Programming, and Database Systems",
      "Completed virtual internship in Data Science with ICT Academy",
      "Graduated with distinction (8.6 CGPA)"
    ]
  },
  {
    degree: "Pre-University Course (PUC)",
    institution: "A R S PU College",
    location: "Karnataka, India",
    year: "2019 – 2021",
    yearShort: "'21",
    grade: "78.50%",
    badge: "Senior Secondary",
    highlights: [
      "Pre-university education with strong foundation in Mathematics and Computer Science"
    ]
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Sri Sachchidananda Saraswathi English Medium High School",
    location: "Karnataka, India",
    year: "2018 – 2019",
    yearShort: "'19",
    grade: "80.80%",
    badge: "Secondary Education",
    highlights: [
      "Completed secondary education with distinction (80.80%)"
    ]
  }
];

export const certificationsData = [
  {
    title: "Software Development Internship Certificate",
    issuer: "Edutainer (PAT Technologies)",
    icon: "Award",
    badge: "Industry Credential",
    description: "Hands-on software development internship covering modern web engineering, AI feature integration, API testing, and application debugging.",
    pdfUrl: "/Lathesha_AN_Internship_Certificate.pdf"
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    icon: "Cpu",
    badge: "IBM Certified",
    description: "Core concepts of artificial intelligence, machine learning principles, and modern AI application paradigms."
  },
  {
    title: "Customer Engagement Communication Personality Dynamics",
    issuer: "IBM",
    icon: "Users",
    badge: "IBM Certified",
    description: "Professional communication, stakeholder management, cross-functional collaboration, and client-centric problem resolution."
  },
  {
    title: "Workshop on Django Web Framework",
    issuer: "Technical Workshop",
    icon: "Layers",
    badge: "Hands-on Workshop",
    description: "Practical development of web applications using Python's Django framework, MVT architecture, ORM, and templating."
  }
];
