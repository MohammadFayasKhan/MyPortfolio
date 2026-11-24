import { Icons } from "@/components/icons";
import {
  AwardIcon,
  BookOpenIcon,
  DownloadIcon,
  GraduationCapIcon,
  HomeIcon,
  MailIcon,
  SparklesIcon,
  TrophyIcon,
  BriefcaseIcon,
  FileTextIcon,
  ShieldCheckIcon,
} from "lucide-react";

export interface NavItem {
  href: string;
  icon: any;
  label: string;
  mobile?: boolean;
}

export interface ProjectLink {
  type: string;
  href: string;
  icon: any;
}

export interface Project {
  title: string;
  href?: string;
  liveUrl?: string;
  repoUrl?: string;
  dates: string;
  active?: boolean;
  category: string;
  subtitle: string;
  description: string;
  problemStatement?: string;
  solutionArchitecture?: string;
  hardwareComponents?: readonly string[];
  softwareStack?: readonly string[];
  architectureDetails: string[];
  keyHighlights: string[];
  quantitativeMetrics?: readonly string[];
  technologies: readonly string[];
  image: string;
  gallery?: readonly string[];
  links: readonly ProjectLink[];
}

export interface PatentItem {
  title: string;
  type: string;
  inventors: string;
  applicant: string;
  date: string;
  summary: string;
  pdfUrl: string;
  badges: readonly string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  proofUrl?: string;
  badgeUrl?: string;
  description?: string;
  skills?: readonly string[];
}

export interface ResearchPaper {
  title: string;
  authors: string;
  institution: string;
  course?: string;
  date: string;
  status: string;
  pdfUrl: string;
  abstract: string;
  keywords: readonly string[];
  contributions: readonly string[];
}

export interface EducationItem {
  school: string;
  href: string;
  degree: string;
  logoUrl?: string;
  start: string;
  end: string;
  description?: string;
  badges?: readonly string[];
  proofUrl?: string;
}

export interface AchievementItem {
  title: string;
  organization: string;
  period: string;
  badges?: readonly string[];
  description?: string;
  proofUrl?: string;
}

export interface TrainingItem {
  title: string;
  organization: string;
  period: string;
  badges?: readonly string[];
  description?: string;
  proofUrl?: string;
}

export const DATA = {
  name: "Mohammad Fayas Khan",
  initials: "MFK",
  url: "https://github.com/MohammadFayasKhan",
  location: "Phagwara, Punjab, India",
  locationLink: "https://www.google.com/maps/place/Phagwara,+Punjab",
  headline: "AI Systems and Full-Stack Engineer",
  description:
    "Computer Science undergraduate at Lovely Professional University (9.66 CGPA, University Honor Roll 2025). Engineering end-to-end intelligent systems: from custom deep learning vision models and edge robotics to closed-loop browser agents and production backends.",
  summary:
    "I am an AI Systems and Full-Stack Software Engineer pursuing a B.Tech in Computer Science and Engineering at Lovely Professional University, maintaining a 9.66 CGPA and recognized on the University Honor Roll 2025. My technical focus bridges applied deep learning, computer vision, autonomous browser agents, edge robotics, and high-performance full-stack web applications.\n\nMy engineering philosophy centers on complete hardware-software co-design and zero train-deploy mismatch. Rather than treating machine learning as an isolated benchmark exercise, I construct complete operational systems: designing articulated camera gimbals and motor drivers, quantizing deep convolutional networks (EfficientNetV2, YOLO, Mobile-UNet) with TensorRT for sub-second inference on NVIDIA Jetson Nano modules, writing bare-metal C and C++ firmware for ESP8266 and ESP32 microcontrollers, and deploying cloudless Apple HomeKit HAP servers that guarantee 100% on-device privacy.\n\nBeyond robotics, I architect autonomous browser agents using WebExtensions Manifest V3 that automate high-friction academic workflows for 35,000+ university students, and author empirical software engineering research analyzing remote communication challenges in distributed Agile teams. I am the inventor behind two patent disclosures filed at Lovely Professional University, a Top 30 finalist out of 900+ innovators at LPU GearUp Season 5, and an active contributor to open-source developer tooling.",
  avatarUrl: "/fayas.jpg",
  skills: [
    "Python",
    "C++",
    "PyTorch",
    "FastAPI",
    "React",
    "TypeScript",
    "Docker",
    "Agentic AI",
    "Computer Vision",
    "LLMs and RAG",
    "ESP32 and IoT",
    "SQL and PostgreSQL",
  ],
  skillsCategorized: {
    "Languages": ["Python", "C++", "Java", "C", "JavaScript", "TypeScript", "SQL"],
    "AI, Deep Learning and Vision": [
      "PyTorch",
      "scikit-learn",
      "YOLO",
      "EfficientNetV2",
      "Mobile-UNet",
      "Grad-CAM",
      "Transformers",
      "Hugging Face",
    ],
    "Agentic AI and LLMs": [
      "LangChain",
      "LangGraph",
      "RAG",
      "Structured Outputs (Pydantic)",
      "Tool and Function Calling",
      "LoRA and QLoRA",
      "Groq API",
      "Gemini API",
    ],
    "Web and Backend Engineering": [
      "React 18",
      "Next.js",
      "FastAPI",
      "Monaco Editor",
      "Tailwind CSS",
      "Chrome Extension (MV3)",
      "IndexedDB",
      "REST APIs",
    ],
    "Embedded Systems and Robotics": [
      "ESP32",
      "ESP32-CAM",
      "ESP8266",
      "Arduino IDE",
      "FreeRTOS",
      "I2S Digital Audio",
      "Sensor Fusion (DHT11, YL-83)",
      "4-DOF Robotic Arm",
    ],
    "Cloud, DevOps and Databases": [
      "Docker",
      "PostgreSQL",
      "Render",
      "Hugging Face Spaces",
      "Git",
      "GitHub",
      "Linux and Shell Scripting",
    ],
    "Core Computer Science": [
      "Data Structures and Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  navbar: [
    { href: "/#hero", icon: HomeIcon, label: "Home", mobile: true },
    { href: "/#about", icon: SparklesIcon, label: "About", mobile: false },
    { href: "/#projects", icon: BriefcaseIcon, label: "Projects", mobile: true },
    { href: "/#patents", icon: ShieldCheckIcon, label: "Patents", mobile: true },
    { href: "/#research", icon: BookOpenIcon, label: "Research", mobile: true },
    { href: "/#certifications", icon: AwardIcon, label: "Certifications", mobile: false },
    { href: "/#achievements", icon: TrophyIcon, label: "Honors", mobile: false },
    { href: "/#education", icon: GraduationCapIcon, label: "Education", mobile: false },
    { href: "/#contact", icon: MailIcon, label: "Contact", mobile: true },
  ] as readonly NavItem[],
  contact: {
    email: "fayaskhanmohammad@gmail.com",
    tel: "+91-8317684302",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MohammadFayasKhan",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/mohammadfayaskhan",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:fayaskhanmohammad@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Resume: {
        name: "Download Resume",
        url: "/Mohammad_Fayas_Khan_Resume.pdf",
        icon: DownloadIcon,
        navbar: true,
      },
    },
  },
  patents: [
    {
      title: "AI Powered Crop Intelligence Rover",
      type: "Patent Invention Disclosure (Complete Filing Annexure 3b)",
      inventors:
        "Mohammad Fayas Khan, Mohammad Eliyas Khan, Janapareddi Bhaavesh Sai Mohan, Abhishek Tiwari",
      applicant: "Lovely Professional University, Punjab, India",
      date: "Filed 2026",
      summary:
        "An integrated agricultural inspection and decision-support robotic platform combining a 4WD rover chassis, ESP32-CAM optical sensor node, environmental telemetry sensors, and an articulation-controlled 4-DOF robotic arm for close-up foliar inspection. Incorporates automated deep learning disease classification, dual-layer spatial canopy localization, subpixel damage quantification, and interactive voice assistance through XiaoZhi AI.",
      pdfUrl: "/patents/AIPoweredCropIntelligenceRoverPatent.pdf",
      badges: ["Field Robotics", "Computer Vision", "Patent Filing"],
    },
    {
      title: "Smart Precision Farming and Predictive Crop Advisory System",
      type: "Patent Invention Disclosure (Complete Filing Annexure 3b)",
      inventors:
        "Mohammad Fayas Khan, Mohammad Eliyas Khan, Dr. Kumud Tiwari",
      applicant: "Lovely Professional University, Punjab, India",
      date: "Filed 2026",
      summary:
        "An AI and IoT-enabled precision farming system utilizing sensor telemetry to monitor soil moisture, pH levels, NPK, temperature, humidity, rainfall, and water levels in real time. Couples live ground readings with meteorological forecasts to generate predictive advisory matrices for crop selection, irrigation scheduling, and disease risk mitigation.",
      pdfUrl: "/patents/SmartPrecisionFarmingandPredictiveCropAdvisorySystemPatent.pdf",
      badges: ["IoT Sensor Fusion", "Predictive Analytics", "Patent Filing"],
    },
  ] as readonly PatentItem[],
  research: [
    {
      title:
        "Remote Communication Challenges in Agile Software Teams: A Socio-Technical Analysis of Ceremony Dysfunction, Common Ground Degradation, and Participatory Equity",
      authors: "Mohammad Fayas Khan",
      institution: "School of Computer Science and Engineering, Lovely Professional University",
      course: "INT373: Agile Driven Development and Project Management",
      date: "September 2026",
      status: "Academic Research Paper (IEEE Format)",
      pdfUrl: "/research/RemoteCommunicationChallengesinAgileSoftwareTeamsTermPaper.pdf",
      abstract:
        "Agile software frameworks depend fundamentally on high-bandwidth communication for empirical process control. The post-pandemic shift toward distributed, remote, and hybrid work models has decoupled these methodologies from physical co-location, introducing acute socio-technical friction that undermines software delivery. This paper reviews twenty-five peer-reviewed sources on distributed Agile software delivery across three structural vulnerabilities: ceremony fatigue from mechanical Daily Scrums, cognitive common ground degradation in requirements alignment, and socio-spatial asymmetry marginalizing remote engineers during hybrid meetings. The paper links observed breakdowns to empirical team practices, evaluates asynchronous check-in threads and Role-Based Communication Interfaces (RBCI), and articulates open questions for future empirical software engineering research.",
      keywords: [
        "Agile Software Development",
        "Scrum Ceremonies",
        "Remote Communication",
        "Common Ground Theory",
        "Hybrid Meeting Inequality",
        "Socio-Technical Systems",
      ],
      contributions: [
        "Socio-Technical Remote Agile Communication (STRAC) Framework",
        "Role-Based Communication Interfaces (RBCI) for Backlog Refinement",
        "Empirical synthesis of 25 peer-reviewed studies on distributed Agile communication",
        "Analysis of asynchronous standup threads, meeting fatigue, and hybrid proximity bias",
      ],
    },
  ] as readonly ResearchPaper[],
  projects: [
    {
      title: "AI Powered Crop Intelligence Rover",
      subtitle: "Autonomous Agro-Climatic Vision and Field Rover Platform",
      category: "Computer Vision and Robotics",
      href: "https://github.com/MohammadFayasKhan/AIPoweredCropIntelligenceRover",
      liveUrl: "https://aipoweredcropintelligencerover.dpdns.org/",
      repoUrl: "https://github.com/MohammadFayasKhan/AIPoweredCropIntelligenceRover",
      dates: "Sep 2026 to Oct 2026",
      active: true,
      description:
        "An end-to-end Agricultural Computer Vision and Agro-Climatic Intelligence Platform engineered for automated foliar disease diagnosis, dual-layer spatial canopy localization, subpixel damage quantification, and IoT rover telemetry.",
      problemStatement:
        "Early foliar disease outbreaks cause up to 40% crop yield destruction across smallholder agricultural plots. Conventional satellite and aerial drone remote sensing suffer from canopy occlusion, failing to detect under-leaf fungal sporulation, while traditional laboratory pathology tests require days to process, causing delayed pesticide or fungicide interventions.",
      solutionArchitecture:
        "Engineered a low-cost, 4WD autonomous ground rover executing real-time in-field foliar diagnostics. Features dual-level spatial canopy scanning via a wide-angle camera gimbal, executing localized TensorRT-quantized deep learning inference on an onboard NVIDIA Jetson Nano alongside telemetry acquisition across soil NPK, moisture, and micro-climatic atmospheric sensors.",
      hardwareComponents: [
        "NVIDIA Jetson Nano (4GB) Edge AI Compute Module",
        "ESP32-CAM and Dual-Core ESP32 Microcontroller for Sensor Telemetry",
        "4WD Heavy-Duty Aluminum Chassis with High-Torque 12V DC Motors",
        "L298N Dual H-Bridge Motor Drivers with PWM Speed Regulation",
        "5MP Wide-Angle Optical Sensor on 4-DOF Articulated Inspection Arm",
        "RS485 Industrial Soil NPK Sensor (Nitrogen, Phosphorus, Potassium)",
        "DHT22 High-Precision Ambient Temperature and Humidity Sensor",
        "Dual 18650 Li-ion Battery Banks with XL4015 DC-DC Buck Regulators",
      ],
      softwareStack: [
        "PyTorch and Torchvision",
        "NVIDIA TensorRT Quantization Engine",
        "OpenCV Image Processing Pipeline",
        "FastAPI Asynchronous Gateway",
        "Next.js and Tailwind CSS Telemetry Dashboard",
        "MicroPython and FreeRTOS Telemetry Loop",
      ],
      quantitativeMetrics: [
        "850ms End-to-End Edge Inference on Jetson Nano",
        "95.13% Test Accuracy on 38 Pathology Classes",
        "0.9354 Macro F1 Score across 54K Leaf Samples",
        "100% Offline Diagnostic Autonomy without Cellular Dependency",
      ],
      architectureDetails: [
        "Dual-Layer Spatial Scanning: Articulated camera arm lowers beneath the crop foliage line to capture sub-canopy fungal lesions and rust spores completely invisible to aerial drone surveys.",
        "Edge-Optimized Inference Pipeline: Custom deep convolutional neural network quantized to FP16 via TensorRT, running fully on-device without internet connectivity.",
        "Micro-Climatic Multi-Sensor Fusion: Correlates real-time ambient humidity, canopy temperature, and soil NPK values to calculate localized pathogen risk indices.",
        "Autonomous Mission Pathing: Local ESP32 obstacle-avoidance state machine controls motor steering while synchronizing telemetry to the Jetson Nano over UART.",
      ],
      keyHighlights: [
        "Smart India Hackathon 2026 Official Submission.",
        "Subject of Patent Invention Disclosure Annexure 3b filed at Lovely Professional University.",
        "Zero train-deploy feature mismatch by relying only on physical, edge-measurable sensor telemetry.",
        "FastAPI microservice with input-validation layer rejecting non-leaf imagery, paired with a React field dashboard.",
      ],
      technologies: [
        "Python",
        "PyTorch",
        "EfficientNetV2",
        "YOLO",
        "Mobile-UNet",
        "Grad-CAM",
        "FastAPI",
        "React",
        "ESP32-CAM",
        "Docker",
        "Robotics",
      ],
      image: "/projects/rover/Pic1.jpeg",
      gallery: [
        "/projects/rover/Pic1.jpeg",
        "/projects/rover/Pic2.jpeg",
        "/projects/rover/Pic3.jpeg",
        "/projects/rover/Pic4.jpeg",
        "/projects/rover/Pic5.png",
        "/projects/rover/Pic6.png",
        "/projects/rover/Pic7.PNG",
        "/projects/rover/Pic8.PNG",
        "/projects/rover/Pic9.PNG",
        "/projects/rover/Pic10.PNG",
        "/projects/rover/Pic11.jpeg",
        "/projects/rover/Pic12.jpeg",
        "/projects/rover/Pic13.jpeg",
      ],
      links: [
        {
          type: "Live Platform",
          href: "https://aipoweredcropintelligencerover.dpdns.org/",
          icon: Icons.globe,
        },
        {
          type: "Source Code",
          href: "https://github.com/MohammadFayasKhan/AIPoweredCropIntelligenceRover",
          icon: Icons.github,
        },
        {
          type: "Patent Filing",
          href: "/patents/AIPoweredCropIntelligenceRoverPatent.pdf",
          icon: Icons.globe,
        },
      ],
    },
    {
      title: "LpuUmsAgent",
      subtitle: "Autonomous Privacy-First Browser Agent and Academic Copilot",
      category: "Browser Agents and Automation",
      href: "https://github.com/MohammadFayasKhan/LpuUmsAgent",
      liveUrl: "https://lpuumsagent.vercel.app/",
      repoUrl: "https://github.com/MohammadFayasKhan/LpuUmsAgent",
      dates: "2025 to 2026",
      active: true,
      description:
        "An autonomous, privacy-first Browser Agent and Attendance Intelligence Companion built for Lovely Professional University (LPU) students. Automates portal navigation, predicts duty leave thresholds, and suppresses intrusive campus survey modals.",
      problemStatement:
        "University Management System (UMS) portals present cumbersome multi-step navigation, slow load times, frequent session timeouts, and disruptive survey popups that block urgent student access to attendance records, examination seating plans, and timetable schedules during high-traffic exam periods.",
      solutionArchitecture:
        "Architected an autonomous, zero-cloud browser extension leveraging client-side Computer Use automation heuristics. The extension injects preflight interceptors that automatically bypass blocking dialogs, asynchronously parse and tabulate course attendance metrics, predict duty leave buffer margins against the 75% mandatory threshold, and securely cache encrypted academic data entirely in the browser.",
      hardwareComponents: [
        "Runs on user machine within Chromium and Firefox browser runtimes",
        "Zero server requirements or third-party cloud infrastructure",
      ],
      softwareStack: [
        "TypeScript and React 18",
        "WebExtensions Manifest V3",
        "Vite Bundler",
        "Tailwind CSS and Lucide Icons",
        "Web Cryptography API (AES-GCM Local Storage)",
        "DOM MutationObserver Automation Engine",
      ],
      quantitativeMetrics: [
        "Reduces Attendance Check Workflow from 45s to <2s",
        "100% Automated Modal Suppression Rate across Campus Popups",
        "Zero Bytes of Student Data Transmitted to External Servers",
        "Top 30 Finalist out of 900+ at LPU GearUp Season 5",
      ],
      architectureDetails: [
        "Preflight DOM Interceptor: Employs high-priority MutationObservers to instantly detect and eliminate modal overlays and survey walls before student interaction.",
        "Predictive Attendance Engine: Calculates the exact margin of classes a student can safely skip or must attend to preserve the 75% mandatory examination eligibility threshold.",
        "Encrypted On-Device Vault: Utilizes AES-GCM client-side storage to retain seating plans, marks distributions, and course codes without third-party tracking.",
        "Examination Seating Navigator: Automatically fetches, correlates, and displays exam hall, room number, and seat rows 1 hour before scheduled testing.",
      ],
      keyHighlights: [
        "Autonomous Computer Use pipeline that executes multi-step portal workflows with zero user intervention.",
        "100% privacy-first architecture: credentials and academic records never leave local browser storage.",
        "Eliminates university blocking modals and survey popups automatically via preflight DOM interceptors.",
      ],
      technologies: [
        "TypeScript",
        "React",
        "Chrome Extensions API",
        "Manifest V3",
        "Tailwind CSS",
        "Browser Automation",
      ],
      image: "/projects/lpuums/Pic1.png",
      gallery: [
        "/projects/lpuums/Pic1.png",
        "/projects/lpuums/Pic2.png",
        "/projects/lpuums/Pic3.png",
        "/projects/lpuums/Pic4.png",
        "/projects/lpuums/Pic5.png",
        "/projects/lpuums/Pic6.png",
        "/projects/lpuums/Pic7.png",
        "/projects/lpuums/Pic8.png",
        "/projects/lpuums/Pic9.png",
        "/projects/lpuums/Pic10.png",
      ],
      links: [
        {
          type: "Live Companion",
          href: "https://lpuumsagent.vercel.app/",
          icon: Icons.globe,
        },
        {
          type: "Source Code",
          href: "https://github.com/MohammadFayasKhan/LpuUmsAgent",
          icon: Icons.github,
        },
      ],
    },
    {
      title: "AttentionIsAllYouNeed",
      subtitle: "Interactive Educational Visualizer for Transformer Architecture",
      category: "Machine Learning Education",
      href: "https://github.com/MohammadFayasKhan/AttentionIsAllYouNeed",
      liveUrl: "https://attentionisallyouneed.vercel.app/",
      repoUrl: "https://github.com/MohammadFayasKhan/AttentionIsAllYouNeed",
      dates: "2025 to 2026",
      active: true,
      description:
        "Interactive educational experience for understanding the Transformer architecture, self-attention, and the Attention Is All You Need paper through real-time visualizations and hands-on matrix experimentation.",
      problemStatement:
        "Deep learning literature and transformer papers are mathematically dense and abstract. Novice machine learning students and engineers struggle to build intuition for Query-Key-Value vector dot products, scaled attention weights, softmax probability distributions, and multi-head representation subspaces.",
      solutionArchitecture:
        "Constructed an interactive, client-rendered educational web application that demystifies every layer of the Transformer paper. Users can manipulate input sequences, observe real-time matrix multiplications, visualize multi-head attention heatmaps, and inspect the geometric transformations applied by feed-forward networks.",
      hardwareComponents: [
        "Clientside vector mathematics running in browser JavaScript runtime",
        "WebGL and Canvas rendering for real-time matrix heatmaps",
      ],
      softwareStack: [
        "Next.js 14 and React",
        "TypeScript",
        "Tailwind CSS and Framer Motion",
        "KaTeX Math Typesetting Engine",
        "Lucide React",
        "Canvas Matrix Renderer",
      ],
      quantitativeMetrics: [
        "Real-Time 60 FPS Matrix Animation and Heatmap Rendering",
        "100% Clientside Vector Mathematics with Zero Backend Latency",
        "Interactive Step-by-Step Walkthrough of all 6 Transformer Layers",
      ],
      architectureDetails: [
        "Vector Algebra Sandbox: Real-time projection and scaled dot-product attention calculation [Softmax(QK^T / sqrt(d_k))V] rendered dynamically.",
        "Positional Encoding Inspector: Visualizes sinusoidal wave frequencies across token sequence positions to clarify order awareness in transformers.",
        "Multi-Head Attention Deconstruction: Enables students to isolate individual attention heads and compare diverse semantic relationship representations.",
        "Interactive Layer Normalization and Residual Connections: Step-by-step state visualization illustrating how vanishing gradients are prevented.",
      ],
      keyHighlights: [
        "Step-by-step interactive breakdowns of Query, Key, and Value vector transformations.",
        "Visual attention heatmaps dynamically rendered from user text inputs.",
        "Comprehensive coverage: Multi-Head Attention, Scaled Dot-Product, Positional Encodings, and Layer Normalization.",
      ],
      technologies: [
        "TypeScript",
        "Next.js",
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "KaTeX",
        "Educational Tool",
      ],
      image: "/projects/attention/Pic1.png",
      gallery: [
        "/projects/attention/Pic1.png",
        "/projects/attention/Pic2.png",
      ],
      links: [
        {
          type: "Live App",
          href: "https://attentionisallyouneed.vercel.app/",
          icon: Icons.globe,
        },
        {
          type: "Source Code",
          href: "https://github.com/MohammadFayasKhan/AttentionIsAllYouNeed",
          icon: Icons.github,
        },
      ],
    },
    {
      title: "CodeExplain",
      subtitle: "AI-Powered Code Explanation and Complexity Insights Platform",
      category: "Developer Tools and AI",
      href: "https://github.com/MohammadFayasKhan/CodeExplain",
      liveUrl: "https://codeexplain-lsrb.onrender.com/",
      repoUrl: "https://github.com/MohammadFayasKhan/CodeExplain",
      dates: "2025",
      active: true,
      description:
        "An AI-powered code explanation platform that transforms complex code into plain-English explanations with line-by-line analysis, complexity insights, and improvement suggestions using modern LLMs.",
      problemStatement:
        "Reading unfamiliar codebases, legacy repositories, or complex algorithms is tedious for junior engineers and students, often leading to misunderstandings of edge cases, asymptotic time and space complexities, and hidden performance anti-patterns.",
      solutionArchitecture:
        "Engineered a full-stack code analysis web platform that ingests multi-language snippets and decomposes them into plain-English hierarchical explanations. Incorporates AST parsing heuristics and modern LLM streaming APIs to generate line-by-line annotations, deduce Big-O time and space complexity bounds, and generate optimized refactoring suggestions.",
      hardwareComponents: [
        "Cloud-native microservice containerized on Render platform",
        "High-concurrency Node.js execution engine",
      ],
      softwareStack: [
        "Next.js and React",
        "TypeScript",
        "Tailwind CSS",
        "Prism.js Syntax Highlighting",
        "Streaming LLM Integration",
        "Abstract Syntax Tree (AST) Tokenizer",
      ],
      quantitativeMetrics: [
        "Sub-500ms Initial Token Streaming Response Time",
        "Support for 6+ Programming Languages (Python, C++, Java, JS, Rust, Go)",
        "100% Automated Big-O Complexity Estimation and Edge-Case Detection",
      ],
      architectureDetails: [
        "Hierarchical Breakdown Engine: Separates high-level structural design from granular line-by-line execution logic for digestible learning.",
        "Asymptotic Complexity Modeler: Analyzes loop invariants, recursive branching factors, and heap allocations to deduce time and space Big-O notation.",
        "Interactive Code Sandbox: Integrated syntax-highlighted editor with line-linked hover cards that illuminate explanations directly alongside source code.",
        "Security and Optimization Auditing: Identifies buffer overflows, unchecked inputs, and memory leaks with idiomatic drop-in replacements.",
      ],
      keyHighlights: [
        "Interactive line-by-line code explanation with token-streaming responses.",
        "Asymptotic time and space complexity analysis (Big-O notation).",
        "Actionable code improvement and refactoring suggestions.",
      ],
      technologies: [
        "TypeScript",
        "Next.js",
        "React",
        "Tailwind CSS",
        "PrismJS",
        "Render",
        "AI / LLMs",
      ],
      image: "/projects/codeexplain-preview.png",
      gallery: [
        "/projects/codeexplain-preview.png",
        "/projects/codeexplain-flow.png",
      ],
      links: [
        {
          type: "Live Deployment",
          href: "https://codeexplain-lsrb.onrender.com/",
          icon: Icons.globe,
        },
        {
          type: "Source Code",
          href: "https://github.com/MohammadFayasKhan/CodeExplain",
          icon: Icons.github,
        },
      ],
    },
    {
      title: "EspBot",
      subtitle: "Open-Source ESP8266 Wi-Fi Robotics Platform",
      category: "Robotics and Embedded Systems",
      href: "https://github.com/MohammadFayasKhan/EspBot",
      repoUrl: "https://github.com/MohammadFayasKhan/EspBot",
      dates: "2024 to 2025",
      active: true,
      description:
        "Open-source ESP8266-powered Wi-Fi robot featuring an elegant browser-based control panel, responsive controls, and an extensible architecture for robotics and IoT projects.",
      problemStatement:
        "Commercial educational robotics platforms rely on proprietary, closed-source Bluetooth apps that suffer from significant command latency, connection instability, and zero customizability for student developers.",
      solutionArchitecture:
        "Developed an open-source Wi-Fi teleoperated robotic rover built around the ESP8266 NodeMCU microcontroller. The rover hosts its own softAP or connects to a local LAN, serving an ultra-lightweight glassmorphic HTML5/CSS3/JavaScript control panel directly from flash memory. Low-latency WebSocket streaming transmits differential drive commands directly to an L298N dual-H-bridge motor driver.",
      hardwareComponents: [
        "ESP8266 NodeMCU (ESP-12E Module) Wi-Fi Controller",
        "L298N Dual H-Bridge Motor Driver Module",
        "2x TT Geared DC Motors with Rubber Traction Wheels",
        "Front Ball Caster for 360-Degree Omnidirectional Turning",
        "Laser-Cut Acrylic Robotic Chassis",
        "2x 18650 3.7V Li-ion Batteries in Series (7.4V)",
        "LM2596 Adjustable Step-Down DC-DC Buck Converter",
      ],
      softwareStack: [
        "Embedded C and C++",
        "Arduino ESP8266 Core",
        "WebSockets Server on ESP8266",
        "HTML5 and CSS3 Responsive Web UI",
        "SPIFFS (Serial Peripheral Interface Flash File System)",
      ],
      quantitativeMetrics: [
        "<15ms WebSocket Control Response Latency",
        "40+ Minutes Continuous Driving Runtime on a Single Charge",
        "Zero Companion App Installation Required (Operates in any mobile browser)",
        "19 GitHub Stars and Active Open-Source Community Interest",
      ],
      architectureDetails: [
        "Bare-Metal Embedded Web Server: Embeds responsive mobile-first UI directly into firmware, allowing instant control from any smartphone on the rover Wi-Fi.",
        "Bi-Directional WebSocket Streaming: Replaces sluggish HTTP polling with persistent WebSocket packets for instantaneous directional steering and throttle control.",
        "Dual-Motor Differential Drive: Direct PWM duty-cycle modulation allows smooth speed ramping, pivot turns, and gradual deceleration.",
        "Hardware Failsafe Protection: Automatically cuts motor power if client Wi-Fi heartbeat is interrupted for more than 500ms to prevent runaway collisions.",
      ],
      keyHighlights: [
        "Onboard web server hosting a browser-based joystick control panel directly from ESP8266 flash.",
        "Low-latency WebSocket command streaming to L298N dual H-bridge motor driver.",
        "Fully standalone: operates without internet connectivity via onboard Wi-Fi access point mode.",
      ],
      technologies: [
        "C++",
        "ESP8266",
        "WebSockets",
        "Embedded Systems",
        "Robotics",
        "IoT",
        "Hardware",
      ],
      image: "/projects/espbot/Pic1.jpg",
      gallery: [
        "/projects/espbot/Pic1.jpg",
        "/projects/espbot/Pic2.jpg",
        "/projects/espbot/Pic3.jpg",
      ],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/MohammadFayasKhan/EspBot",
          icon: Icons.github,
        },
      ],
    },
    {
      title: "Smart Home Automation Socket",
      subtitle: "Cloudless Apple HomeKit and Siri Smart Power Controller",
      category: "IoT and Embedded Systems",
      href: "https://github.com/MohammadFayasKhan/SmartHomeAutomationSocket",
      repoUrl: "https://github.com/MohammadFayasKhan/SmartHomeAutomationSocket",
      dates: "2025",
      active: true,
      description:
        "Smart Home Automation Socket using ESP8266 NodeMCU, native Apple HomeKit, and Siri control to switch USB hubs and AC sockets wirelessly with zero cloud dependency.",
      problemStatement:
        "Consumer smart plugs depend on third-party cloud servers that introduce latency, stop working during internet outages, and compromise household privacy by uploading usage telemetry to external servers.",
      solutionArchitecture:
        "Architected a fully local, zero-cloud smart home dual-power socket using an ESP8266 NodeMCU and a 2-channel relay module. Implements the Apple HomeKit Accessory Protocol (HAP) directly on the microcontroller TCP stack via arduino-homekit-esp8266. Automatically pairs with iOS devices via HomeKit pairing codes, enabling native Apple Home app toggles and Siri voice control with active-LOW failsafe relay protection.",
      hardwareComponents: [
        "ESP8266 NodeMCU (v2 / v3) Wi-Fi Controller",
        "2-Channel 5V Relay Module (Active-LOW Logic)",
        "5V USB Charging Hub (Connected to Relay Channel 1 via D2/GPIO4)",
        "220V AC Power Socket (Connected to Relay Channel 2 via D5/GPIO14)",
        "5V 2A Regulated USB Power Supply",
        "Flame-Retardant Terminal Blocks and Insulated AC Cabling",
      ],
      softwareStack: [
        "Embedded C and C++",
        "Arduino IDE / ESP8266 Board Core",
        "arduino-homekit-esp8266 HAP Server",
        "mDNS Local Service Discovery",
        "Apple HomeKit Framework and Siri Voice Engine",
      ],
      quantitativeMetrics: [
        "Zero Cloud Dependency and 100% Local LAN Privacy",
        "<50ms Siri Voice Command Toggle Latency",
        "Dual Independent Output Channels (USB Hub + AC Socket)",
        "Active-LOW Boot Failsafe Protecting Connected Hardware",
      ],
      architectureDetails: [
        "Bare-Metal HAP Execution: Executes Apple HomeKit cryptographic authentication and session management on the ESP8266 without requiring a Raspberry Pi Homebridge.",
        "Active-LOW Relay Safety Logic: Pins default to HIGH at boot-up, ensuring that attached appliances and chargers remain disconnected until explicitly activated.",
        "Real-Time Multi-Device State Synchronization: State changes are broadcast over mDNS, instantly updating all paired iPhones, iPads, Apple Watches, and Macs.",
        "Diagnostic Telemetry: Automatically logs heap memory availability and active HomeKit client count every 5 seconds over Serial (115200 baud).",
      ],
      keyHighlights: [
        "Zero third-party cloud latency and 100% local network privacy.",
        "Reliable dual-relay hardware switching under mains voltage loads.",
        "Direct voice control via Siri without requiring third-party bridging services.",
      ],
      technologies: [
        "C",
        "C++",
        "ESP8266",
        "Apple HomeKit (HAP)",
        "Hardware Prototyping",
        "Relay Logic",
      ],
      image: "/projects/socket/Pic1.jpg",
      gallery: [
        "/projects/socket/Pic1.jpg",
        "/projects/socket/Pic2.jpg",
        "/projects/socket/Pic3.PNG",
      ],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/MohammadFayasKhan/SmartHomeAutomationSocket",
          icon: Icons.github,
        },
      ],
    },
  ] as readonly Project[],
  certifications: [
    {
      title: "Introduction to Industry 4.0 and Industrial Internet of Things (IIoT)",
      issuer: "NPTEL and IIT Kharagpur (Ministry of Education)",
      date: "Nov 2025",
      credentialId: "NPTEL25CS108S44620023",
      proofUrl: "/certificates/NPTEL_Industry_4_0_IIoT_Certificate.pdf",
      description:
        "Earned Elite + Silver medal certification with a consolidated score of 76% (Online Assignments: 24.35/25, Proctored Exam: 51/75). Demonstrated mastery of cyber-physical systems, smart sensor telemetry, industrial communication architectures, and cloud-edge integration.",
      skills: ["Industrial IoT", "Industry 4.0", "Cyber-Physical Systems", "Sensors and Telemetry"],
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle University",
      date: "Aug 2025",
      credentialId: "102465480OCI25AICFA",
      proofUrl: "/certificates/OracleAIFoundationCertification.pdf",
      badgeUrl: "/certificates/OracleAgenticAIBadge.jpg",
      description:
        "Validated foundational knowledge of machine learning, deep learning, and hands-on proficiency with Oracle Cloud Infrastructure AI services across Language, Vision, Speech, Document Understanding, and Generative AI workflows.",
      skills: ["Oracle Cloud Infrastructure", "Generative AI", "Computer Vision", "Natural Language Processing"],
    },
    {
      title: "Agentic AI Certified Foundations Associate",
      issuer: "Oracle University",
      date: "Sep 2026",
      credentialId: "102465480CI25AGTAI",
      proofUrl: "/certificates/OracleAgenticAICertification.pdf",
      badgeUrl: "/certificates/OracleAgenticAIBadge.jpg",
      description:
        "Demonstrated proficiency in autonomous AI agents, tool invocation protocols, agentic reasoning loops, memory systems, and deploying enterprise multi-agent architectures.",
      skills: ["Agentic AI", "Autonomous Agents", "Reasoning Loops", "Tool Calling"],
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      issuer: "Oracle University",
      date: "Oct 2025",
      credentialId: "102465480CI25FNDCFA",
      proofUrl: "/certificates/Oracle_OCI_2025_Foundations_Associate.pdf",
      description:
        "Demonstrated a comprehensive understanding of core cloud computing architecture, OCI services, network virtualization, cloud security posture management, and enterprise database infrastructure.",
      skills: ["Cloud Architecture", "OCI Core Services", "Cloud Security", "Identity and Access Management"],
    },
    {
      title: "Oracle Guided Learning Project Management Certified Foundations Associate",
      issuer: "Oracle University",
      date: "Oct 2026",
      credentialId: "102465480OGL26PMFA",
      proofUrl: "/certificates/OracleProjectManagemetCertification.pdf",
      description:
        "Certified in cloud project planning, milestone delivery governance, change management, and enterprise guided learning deployment across distributed software teams.",
      skills: ["Project Governance", "Milestone Tracking", "Resource Planning", "Guided Learning"],
    },
    {
      title: "Foundations of Project Management",
      issuer: "Google (via Coursera)",
      date: "Oct 2026",
      credentialId: "883Z0CRB7VK9",
      proofUrl: "/certificates/Google_Project_Management_Coursera.pdf",
      description:
        "Validated competencies in project life cycles, agile methodologies, risk mitigation, stakeholder management, and project execution frameworks authorized by Google.",
      skills: ["Project Management", "Agile Execution", "Risk Mitigation", "Stakeholder Communication"],
    },
    {
      title: "Chatbot and Smart Assistant Development (Course Excellence)",
      issuer: "NASSCOM Foundation (thingQbator)",
      date: "Dec 2025",
      proofUrl: "/certificates/Chatbot_Smart_Assistant_Course_Excellence.pdf",
      description:
        "Awarded Certificate of Course Excellence for conversational AI architecture, intent classification, dialog state flow design, and deploying intelligent assistant engines under the thingQbator initiative.",
      skills: ["Conversational AI", "Dialog Systems", "Natural Language Processing", "Chatbots"],
    },
    {
      title: "Introduction to Data Science",
      issuer: "Infosys Springboard",
      date: "Dec 2025",
      proofUrl: "/certificates/Infosys_Springboard_Introduction_To_DataScience.pdf",
      description:
        "Mastered fundamental data science pipelines, statistical analysis, exploratory data transformations, feature engineering, and predictive modeling.",
      skills: ["Data Science", "Python", "Exploratory Data Analysis", "Statistical Modeling"],
    },
    {
      title: "Introduction to Natural Language Processing",
      issuer: "Infosys Springboard",
      date: "Dec 2025",
      proofUrl: "/certificates/Infosys_Springboard_Introduction_To_Natural_Langugae_Processing.pdf",
      description:
        "Covered tokenization, lemmatization, semantic embeddings, sentiment classification, language modeling, and modern neural NLP pipelines.",
      skills: ["Natural Language Processing", "Word Embeddings", "Text Classification", "Neural Networks"],
    },
    {
      title: "Database Management System (Parts 1 & 2)",
      issuer: "Infosys Springboard",
      date: "Jul 2026",
      proofUrl: "/certificates/InfosysDbmsPart1.pdf",
      description:
        "Completed in-depth proctored training in relational database architecture, ER modeling, SQL querying, transaction ACID properties, indexing, and normalization.",
      skills: ["DBMS", "SQL", "Relational Modeling", "ACID Transactions", "Database Indexing"],
    },
    {
      title: "Agile Scrum Proctored Certification",
      issuer: "Infosys Springboard",
      date: "Oct 2026",
      proofUrl: "/certificates/Infosys_Springboard_Agile_Scrum_Certificate.pdf",
      description:
        "Successfully cleared proctored examination evaluating practical sprint ceremonies, backlog refinement, sprint velocity estimation, and cross-functional team coordination.",
      skills: ["Agile Scrum", "Sprint Planning", "Backlog Refinement", "Team Retrospectives"],
    },
    {
      title: "Agile Explorer",
      issuer: "IBM SkillsBuild",
      date: "Sep 2026",
      proofUrl: "/certificates/IBMAgileCertification.pdf",
      description:
        "Validated mastery of agile values, user story estimation, iterative release cycles, and continuous collaboration certified by IBM SkillsBuild and Credly.",
      skills: ["Agile Methodology", "Iterative Development", "User Stories", "Kanban"],
    },
    {
      title: "Project Management Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "Sep 2026",
      proofUrl: "/certificates/IBMProjectManagementFundamentalsCertification.pdf",
      description:
        "Mastered baseline scheduling, work breakdown structures (WBS), risk management matrices, and scope verification under IBM professional standards.",
      skills: ["Work Breakdown Structure", "Project Scheduling", "Risk Mitigation", "Scope Management"],
    },
    {
      title: "Lifelong Professional Skills",
      issuer: "IBM SkillsBuild",
      date: "Sep 2026",
      proofUrl: "/certificates/LifelongProfessionalSkills_Badge20260930-21-sftb18.pdf",
      badgeUrl: "/certificates/lifelong-professional-skills.png",
      description:
        "Certified by IBM SkillsBuild for critical workplace problem-solving, structured analytical thinking, professional collaboration, and continuous technical growth.",
      skills: ["Critical Thinking", "Problem Solving", "Professional Communication", "Team Collaboration"],
    },
    {
      title: "Agile Project Management",
      issuer: "HP LIFE",
      date: "Aug 2026",
      proofUrl: "/certificates/HP_LIFE_Agile_Project_Management.pdf",
      description:
        "Completed HP LIFE international training covering customer-centric sprint prioritization, iterative MVP releases, and agile execution for high-velocity teams.",
      skills: ["Agile Project Management", "MVP Iterations", "Customer Feedback", "Sprint Prioritization"],
    },
    {
      title: "Linux Foundation LFS101: Introduction to Linux",
      issuer: "The Linux Foundation",
      date: "Oct 2026",
      credentialId: "LF-iiiay3h1ae",
      proofUrl: "/certificates/LinuxFoundationsIntroductionToLinuxCertification.pdf",
      badgeUrl: "/certificates/Lfs101IntroductionToLinuxBadge.png",
      description:
        "Validated core competencies in system administration, Bash shell scripting, filesystem hierarchy, POSIX utilities, user access permissions, and process management.",
      skills: ["Linux", "Bash Scripting", "System Administration", "POSIX Tools"],
    },
    {
      title: "Cisco Operating Systems Basics",
      issuer: "Cisco Networking Academy",
      date: "Oct 2026",
      proofUrl: "/certificates/CiscoOperatingSystemsCertification.pdf",
      badgeUrl: "/certificates/CiscoOperatingSystems-Badge.png",
      description:
        "Mastered operating system internals including process scheduling, memory virtualization, multi-user privilege levels, and command-line system diagnostics.",
      skills: ["Operating Systems", "Process Management", "Memory Virtualization", "System Security"],
    },
    {
      title: "Model Context Protocol (MCP) Foundation",
      issuer: "Anthropic Claude Academy",
      date: "Oct 2026",
      proofUrl: "/certificates/claude-academy-badge-introduction-to-model-context-protocol.pdf",
      description:
        "Mastered the open standard Model Context Protocol, architecting secure agentic tools, context servers, and structured model-to-system integrations.",
      skills: ["Agentic AI", "Model Context Protocol", "Tool Calling", "System Integrations"],
    },
    {
      title: "Claude 101 Certification",
      issuer: "Anthropic Claude Academy",
      date: "Oct 2026",
      proofUrl: "/certificates/Claude_101_Claude_Academy_Badge.pdf",
      description:
        "Certified in LLM prompt engineering, multi-turn system orchestration, context window management, and structured generation.",
      skills: ["Large Language Models", "Prompt Engineering", "Context Management", "AI Safety"],
    },
    {
      title: "n8n Academy: Essentials: Your First Workflows",
      issuer: "n8n",
      date: "Jun 2026",
      credentialId: "72ca01d4-9b17-4c6e-973b-64ade20c8d66",
      proofUrl: "https://badges.n8n.io/72ca01d4-9b17-4c6e-973b-64ade20c8d66",
      description:
        "Engineered and deployed production workflow automations on n8n. Covered data transformations, HTTP API integrations, binary file processing, JSON parsing, and multi-branch data pipelines.",
      skills: ["Workflow Automation", "API Integration", "JSON Processing", "Data Pipelines"],
    },
    {
      title: "Google Analytics Certification",
      issuer: "Google Skillshop",
      date: "Aug 2025",
      proofUrl: "https://skillshop.credential.net/77bd545c-7e7f-48f4-bfba-d5bb3c7f8fe2",
      description:
        "Validated ability to configure web analytics, instrument event telemetry, evaluate behavioral session funnels, and extract actionable data-driven insights to optimize application performance.",
      skills: ["Data Analytics", "Web Analytics", "Telemetry", "Event Tracking"],
    },
    {
      title: "Computer Programming Intensive (72 Hours)",
      issuer: "Lovely Professional University and iamneo",
      date: "May 2025",
      credentialId: "21A60BJ15K9CL25M9",
      proofUrl: "/certificates/SummerTrainingCertificate12413692.PDF",
      description:
        "Completed a 72-hour rigorous programming intensive, strengthening foundational knowledge in programming logic, data structures, pointer memory management, and structured debugging.",
      skills: ["C++", "C", "Data Structures", "Algorithm Optimization", "Debugging"],
    },
  ] as readonly Certification[],
  education: [
    {
      school: "Lovely Professional University",
      href: "https://www.lpu.in/",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "/logos/lpu.png",
      start: "Jul 2024",
      end: "Jul 2028",
      badges: [
        "Current CGPA: 9.66 / 10",
        "University Honor Roll 2025",
        "Sem 3 TGPA: 9.76",
        "Sem 4 TGPA: 9.72",
      ],
      description:
        "Maintaining a consistent academic record with a cumulative 9.66/10 CGPA (Sem 1: 9.55, Sem 2: 9.63, Sem 3: 9.76, Sem 4: 9.72) with Outstanding (O) grades across core curricula including Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems (PostgreSQL, SQL), Operating Systems, Computer Networks, and Applied Machine Learning. Actively applies computing theory to autonomous robotics and edge machine learning systems.",
      proofUrl: "/certificates/AcademicTranscript.pdf",
    },
    {
      school: "Sri Chaitanya Educational Institutions",
      href: "https://srichaitanya.net/",
      degree: "Intermediate (Class 12), MPC (Mathematics, Physics, Chemistry)",
      logoUrl: "/logos/srichaitanya.png",
      start: "Jun 2022",
      end: "Mar 2024",
      badges: ["Aggregate: 95.7% (Grade A)", "JEE Mathematics and Physics Track"],
      description:
        "Completed an intensive academic curriculum in Mathematics, Physics, and Chemistry (MPC) with focused preparation for national competitive engineering examinations (JEE Mains and Advanced). Built a disciplined, structured approach to analytical problem-solving and mathematical foundations that directly underpins ongoing computer science engineering work.",
    },
    {
      school: "Komma Reddy High School",
      href: "#",
      degree: "Secondary School Certificate (Class 10, SSC)",
      logoUrl: "/logos/kommareddy.png",
      start: "Jun 2021",
      end: "May 2022",
      badges: ["Aggregate: 93.83% (Grade A)", "Inspire Manak Fair Participant"],
      description:
        "Graduated with top academic distinction. Actively participated in regional Science Fairs and the Inspire Manak Fair, creating early innovation prototypes and learning foundational C programming and computer system operations through self-guided study.",
    },
  ] as readonly EducationItem[],
  training: [
    {
      title: "AI Engineer Launchpad: Mastering LLMs and Agentic AI",
      organization: "Lovely Professional University",
      period: "Jun 2026 to Jul 2026",
      badges: ["Generative AI", "LLMs", "RAG", "Agentic AI", "FastAPI"],
      description:
        "Completed a 50-hour, 5-week intensive hands-on program covering Generative AI, Large Language Models, Transformer architecture, tokenization, Prompt Engineering, LLM APIs, Structured Outputs, and REST API design with FastAPI. Applied Function/Tool Calling, LoRA/QLoRA fine-tuning, RAG pipelines, and Agentic AI workflows, culminating in the CodeExplain platform capstone.",
      proofUrl: "/certificates/SummerTrainingCertificate12413692.PDF",
    },
  ] as readonly TrainingItem[],
  achievements: [
    {
      title: "University Honor Roll 2025",
      organization: "Lovely Professional University",
      period: "Dec 2025",
      badges: ["Credential ID: 426180", "CGPA 9.66 / 10", "Academic Excellence"],
      description:
        "Recognized on the university-wide Honor Roll for sustained academic excellence, maintaining an overall 9.66/10 CGPA across four semesters of intensive Computer Science and Engineering coursework.",
      proofUrl: "/certificates/University_Honor_Roll_Certificate.jpeg",
    },
    {
      title: "LPU GearUp Season 5 Hardware Finalist",
      organization: "Team Leader, Team Innovex | Lovely Professional University (DSRP & MIC)",
      period: "Sep 2026",
      badges: ["Top 30 of 900+ Teams", "6,000+ Participants", "Qualcomm Statement"],
      description:
        "Led Team Innovex as Team Leader through a 36-hour hackathon, emerging as one of only 30 hardware teams selected out of 900+ teams (over 6,000 students) for our AI-Powered Crop Intelligence Rover tackling Qualcomm's precision agriculture problem statement.",
      proofUrl: "https://github.com/MohammadFayasKhan/AIPoweredCropIntelligenceRover",
    },
    {
      title: "GirlScript Summer of Code 2026 Contributor",
      organization: "GirlScript Foundation",
      period: "May 2026",
      badges: ["Open Source Track", "Contributor and Mentee"],
      description:
        "Accepted into the GSSoC 2026 open-source program, collaborating with community maintainers and contributing to production-grade software ecosystems.",
    },
  ] as readonly AchievementItem[],
};
