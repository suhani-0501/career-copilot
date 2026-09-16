/*
=========================================================
CAREER COPIOLIT - CAREER DATABASE
=========================================================

105 careers
15 Technology
15 Healthcare
15 Business
15 Creative
15 Education
15 Science
15 Others

Salary figures are indicative India fresher/early-career
ranges and should be treated as estimates, not guarantees.

=========================================================
*/

const careerIcons = {
    "web-development": "globe",
    "software-development": "laptop-code",
    "data-science": "chart-column",
    "artificial-intelligence": "robot",
    "cybersecurity": "shield-halved",
    "cloud-computing": "cloud",
    "devops-engineering": "gears",
    "mobile-app-development": "mobile-screen-button",
    "ui-ux-design": "palette",
    "database-administration": "database",
    "network-engineering": "network-wired",
    "game-development": "gamepad",
    "blockchain-development": "link",
    "data-analytics": "chart-line",
    "technical-writing": "file-lines",

    "doctor": "user-doctor",
    "dentistry": "tooth",
    "pharmacy": "pills",
    "nursing": "user-nurse",
    "physiotherapy": "person-walking",
    "medical-laboratory": "flask",
    "radiology-technician": "x-ray",
    "occupational-therapy": "brain",
    "optometry": "eye",
    "nutrition-dietetics": "apple-whole",
    "public-health": "hospital",
    "medical-coding": "file-medical",
    "healthcare-management": "hospital-user",

    "business-management": "briefcase",
    "marketing": "bullhorn",
    "finance": "money-bill-trend-up",
    "accounting": "file-invoice-dollar",
    "human-resources": "users",
    "business-analytics": "chart-pie",
    "entrepreneurship": "rocket",
    "investment-banking": "building-columns",
    "consulting": "puzzle-piece",
    "sales": "handshake",
    "supply-chain": "truck",
    "product-management": "box",
    "digital-marketing": "mobile-screen-button",
    "project-management": "clipboard-list",
    "economics": "chart-line",

    "graphic-design": "palette",
    "animation": "film",
    "film-making": "video",
    "photography": "camera",
    "content-creation": "microphone",
    "fashion-design": "shirt",
    "interior-design": "house",
    "ux-research": "magnifying-glass",
    "motion-graphics": "wand-magic-sparkles",
    "copywriting": "pen-nib",
    "video-editing": "scissors",
    "architecture": "building",
    "illustration": "paintbrush",

    "school-teacher": "chalkboard-user",
    "college-professor": "graduation-cap",
    "online-teacher": "laptop",
    "special-education": "heart",
    "educational-psychology": "brain",
    "instructional-design": "book-open",
    "curriculum-design": "book",
    "education-administration": "school",
    "academic-counselling": "compass",
    "corporate-training": "person-chalkboard",
    "edtech-specialist": "lightbulb",
    "language-teaching": "language",
    "school-counselor": "comments",
    "adult-education": "book",

    "physics": "atom",
    "chemistry": "flask",
    "biology": "dna",
    "biotechnology": "dna",
    "microbiology": "bacterium",
    "environmental-science": "leaf",
    "astronomy": "satellite",
    "geology": "mountain",
    "marine-science": "water",
    "food-science": "apple-whole",
    "forensic-science": "microscope",
    "mathematics": "calculator",
    "statistics": "chart-simple",
    "zoology": "paw",
    "botany": "seedling",
    "agricultural-science": "wheat-awn",

    "law": "scale-balanced",
    "civil-services": "landmark",
    "journalism": "newspaper",
    "social-work": "people-group",
    "hospitality": "hotel",
    "aviation": "plane",
    "event-management": "calendar-days",
    "travel-tourism": "globe",
    "sports-management": "trophy",
    "real-estate": "building",
    "public-relations": "bullhorn",
    "library-science": "book",
    "insurance": "shield-halved",
    "actuarial-science": "calculator",
    "logistics": "boxes-stacked",
    "fitness-training": "dumbbell"
};

const careers = [

    /* =====================================================
       TECHNOLOGY - 15
    ===================================================== */

    {
        id: "web-development",
        name: "Web Development",
        title: "Web Developer",
        category: "technology",
        stream: "Technology",

        icon: "🌐",

        description:
            "Build websites and web applications using frontend, backend and modern web technologies.",

        education: "10+2 with any stream; a technical degree is helpful but not always required.",
        degree: "B.Tech/B.E. CSE, BCA, B.Sc. Computer Science, or equivalent skills-based learning.",
        entranceExams: ["JEE Main", "State Engineering Exams", "CUET"],

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Git",
            "Responsive Design",
            "APIs"
        ],

        beginnerSalary: "₹3 LPA – ₹7 LPA",
        experiencedSalary: "₹8 LPA – ₹25+ LPA",

        famousCompanies: [
            "Google",
            "Microsoft",
            "Amazon",
            "TCS",
            "Infosys",
            "Accenture",
            "Wipro"
        ],

        salaryExamples: [
            "Product companies: often ₹5–12+ LPA for strong entry-level candidates",
            "Large IT services companies: often ₹3–6 LPA for freshers",
            "Startup roles: commonly ₹3–8 LPA depending on skills"
        ],

        workMode: ["Office", "Hybrid", "Remote"],

        careerPath: [
            "Junior Web Developer",
            "Web Developer",
            "Senior Web Developer",
            "Full Stack Developer",
            "Tech Lead",
            "Engineering Manager"
        ],

        certifications: [
            "Meta Front-End Developer",
            "AWS Cloud Practitioner",
            "Microsoft Azure Fundamentals"
        ],

        roadmap: [
            "HTML and CSS",
            "JavaScript",
            "Git and GitHub",
            "Frontend framework",
            "Backend development",
            "Databases",
            "APIs",
            "Deployment"
        ],

        pros: [
            "Many entry-level opportunities",
            "Remote work is common",
            "Strong freelance opportunities",
            "Portfolio can demonstrate skills"
        ],

        challenges: [
            "Technology changes quickly",
            "Requires continuous learning",
            "Competitive entry-level market"
        ],

        suitableFor:
            "Students who enjoy coding, building websites and solving practical problems.",

        demand: "High"
    },

    {
        id: "software-development",
        name: "Software Development",
        title: "Software Developer",
        category: "technology",
        stream: "Technology",
        icon: "💻",

        description:
            "Design, develop, test and maintain software applications for users and organizations.",

        education: "10+2 with Mathematics/Computer Science recommended.",
        degree: "B.Tech/B.E. CSE, BCA, B.Sc. CS, MCA or equivalent.",
        entranceExams: ["JEE Main", "State Engineering Exams", "CUET"],

        skills: [
            "Programming",
            "Data Structures",
            "Algorithms",
            "Git",
            "Databases",
            "APIs",
            "Testing",
            "Problem Solving"
        ],

        beginnerSalary: "₹4 LPA – ₹8 LPA",
        experiencedSalary: "₹10 LPA – ₹30+ LPA",

        famousCompanies: [
            "Google",
            "Microsoft",
            "Amazon",
            "Adobe",
            "TCS",
            "Infosys",
            "Accenture"
        ],

        salaryExamples: [
            "IT services: commonly ₹3–7 LPA for freshers",
            "Product companies: commonly ₹6–15+ LPA for strong candidates",
            "Startups: commonly ₹4–10 LPA"
        ],

        workMode: ["Office", "Hybrid", "Remote"],

        careerPath: [
            "Software Engineer",
            "Software Developer",
            "Senior Software Engineer",
            "Tech Lead",
            "Staff Engineer",
            "Engineering Manager"
        ],

        certifications: [
            "AWS Cloud Practitioner",
            "Microsoft Azure Fundamentals",
            "Oracle Java Certification"
        ],

        roadmap: [
            "Programming fundamentals",
            "Data structures",
            "Algorithms",
            "Object-oriented programming",
            "Databases",
            "APIs",
            "Software testing",
            "System design"
        ],

        pros: [
            "Large job market",
            "Good salary growth",
            "Multiple technology specializations",
            "Global opportunities"
        ],

        challenges: [
            "Competitive hiring",
            "Long screen time",
            "Continuous technical learning"
        ],

        suitableFor:
            "People who enjoy programming and logical problem solving.",

        demand: "Very High"
    },

    {
        id: "data-science",
        name: "Data Science",
        title: "Data Scientist",
        category: "technology",
        stream: "Technology",
        icon: "📊",

        description:
            "Use statistics, programming and machine learning to extract insights from data.",

        education: "10+2 with Mathematics/Science recommended.",
        degree: "B.Tech, B.Sc Statistics, B.Sc Mathematics, B.Sc CS, BCA, MCA or related degree.",
        entranceExams: ["JEE Main", "CUET", "University Entrance Exams"],

        skills: [
            "Python",
            "Statistics",
            "SQL",
            "Machine Learning",
            "Data Visualization",
            "Pandas",
            "NumPy",
            "Communication"
        ],

        beginnerSalary: "₹5 LPA – ₹10 LPA",
        experiencedSalary: "₹12 LPA – ₹35+ LPA",

        famousCompanies: [
            "Google",
            "Amazon",
            "Microsoft",
            "IBM",
            "TCS",
            "Accenture",
            "Fractal"
        ],

        salaryExamples: [
            "Current India market data commonly places Data Scientist base pay around ₹10–22 LPA overall",
            "Large technology companies can offer substantially higher packages",
            "Entry-level salaries vary strongly by skills and academic background"
        ],

        workMode: ["Office", "Hybrid"],

        careerPath: [
            "Data Analyst",
            "Junior Data Scientist",
            "Data Scientist",
            "Senior Data Scientist",
            "Lead Data Scientist",
            "Data Science Manager"
        ],

        certifications: [
            "IBM Data Science",
            "Google Advanced Data Analytics",
            "Microsoft Azure Data Scientist"
        ],

        roadmap: [
            "Python",
            "Statistics",
            "SQL",
            "Data analysis",
            "Machine learning",
            "Model evaluation",
            "Projects",
            "Deployment"
        ],

        pros: [
            "Strong earning potential",
            "Used across many industries",
            "Interesting analytical work"
        ],

        challenges: [
            "Requires mathematics and statistics",
            "Competitive field",
            "Models require continuous improvement"
        ],

        suitableFor:
            "Students who enjoy mathematics, programming and finding patterns in data.",

        demand: "Very High"
    },

    {
        id: "artificial-intelligence",
        name: "Artificial Intelligence",
        title: "AI Engineer",
        category: "technology",
        stream: "Technology",
        icon: "🤖",

        description:
            "Develop intelligent systems using machine learning, deep learning and modern AI technologies.",

        education: "10+2 with Mathematics and Science recommended.",
        degree: "B.Tech AI/ML, CSE, Data Science, B.Sc CS, MCA or related fields.",
        entranceExams: ["JEE Main", "CUET", "University Exams"],

        skills: [
            "Python",
            "Machine Learning",
            "Deep Learning",
            "Linear Algebra",
            "Neural Networks",
            "LLMs",
            "Statistics",
            "APIs"
        ],

        beginnerSalary: "₹5 LPA – ₹12 LPA",
        experiencedSalary: "₹15 LPA – ₹40+ LPA",

        famousCompanies: [
            "Google",
            "Microsoft",
            "Amazon",
            "OpenAI",
            "Adobe",
            "IBM",
            "NVIDIA"
        ],

        salaryExamples: [
            "AI/ML roles can vary widely depending on specialization",
            "Strong product-company candidates may receive premium packages",
            "Research-oriented roles often require postgraduate study"
        ],

        workMode: ["Office", "Hybrid"],

        careerPath: [
            "ML Engineer",
            "AI Engineer",
            "Senior AI Engineer",
            "ML Lead",
            "AI Architect",
            "AI Researcher"
        ],

        certifications: [
            "Google Professional Machine Learning Engineer",
            "AWS Machine Learning",
            "Microsoft Azure AI Engineer"
        ],

        roadmap: [
            "Python",
            "Mathematics",
            "Statistics",
            "Machine learning",
            "Deep learning",
            "Generative AI",
            "Model deployment",
            "AI projects"
        ],

        pros: [
            "Rapidly growing field",
            "High-impact technology",
            "Strong long-term opportunities"
        ],

        challenges: [
            "Mathematics can be demanding",
            "Fast-changing technology",
            "Many roles require advanced skills"
        ],

        suitableFor:
            "Students interested in mathematics, programming and intelligent systems.",

        demand: "Very High"
    },

    {
        id: "cybersecurity",
        name: "Cybersecurity",
        title: "Cybersecurity Analyst",
        category: "technology",
        stream: "Technology",
        icon: "🔐",

        description:
            "Protect systems, networks and data from cyber threats and security incidents.",

        education: "10+2 with Mathematics/Computer Science recommended.",
        degree: "B.Tech CSE/Cybersecurity, BCA, B.Sc CS, MCA or equivalent.",
        entranceExams: ["JEE Main", "CUET", "University Exams"],

        skills: [
            "Networking",
            "Linux",
            "Security Fundamentals",
            "Python",
            "Threat Analysis",
            "SIEM",
            "Cryptography",
            "Incident Response"
        ],

        beginnerSalary: "₹4 LPA – ₹8 LPA",
        experiencedSalary: "₹10 LPA – ₹30+ LPA",

        famousCompanies: [
            "Microsoft",
            "Google",
            "Amazon",
            "IBM",
            "Deloitte",
            "Accenture",
            "Cisco"
        ],

        salaryExamples: [
            "Security analyst roles commonly begin around ₹4–8 LPA",
            "Specialized security roles can cross ₹10 LPA with experience",
            "Security engineering and cloud security can command higher salaries"
        ],

        workMode: ["Office", "Hybrid"],

        careerPath: [
            "Security Analyst",
            "Security Engineer",
            "Senior Security Engineer",
            "Security Architect",
            "Security Manager",
            "CISO"
        ],

        certifications: [
            "CompTIA Security+",
            "CEH",
            "CISSP"
        ],

        roadmap: [
            "Networking",
            "Linux",
            "Security basics",
            "Web security",
            "Threat detection",
            "Incident response",
            "Cloud security",
            "Certifications"
        ],

        pros: [
            "Strong demand",
            "Important role in every organization",
            "Many specializations"
        ],

        challenges: [
            "Requires continuous learning",
            "Security incidents can be stressful",
            "Some roles involve on-call work"
        ],

        suitableFor:
            "People who enjoy technology, investigation and problem solving.",

        demand: "Very High"
    },

    {
        id: "cloud-computing",
        name: "Cloud Computing",
        title: "Cloud Engineer",
        category: "technology",
        stream: "Technology",
        icon: "☁️",

        description:
            "Design, deploy and manage cloud infrastructure and services.",

        education: "10+2 with Mathematics/Computer Science recommended.",
        degree: "B.Tech CSE/IT, BCA, B.Sc CS, MCA or related degree.",
        entranceExams: ["JEE Main", "CUET", "University Exams"],

        skills: [
            "AWS",
            "Azure",
            "Linux",
            "Networking",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Security"
        ],

        beginnerSalary: "₹4 LPA – ₹9 LPA",
        experiencedSalary: "₹12 LPA – ₹30+ LPA",

        famousCompanies: [
            "Amazon",
            "Microsoft",
            "Google",
            "IBM",
            "Accenture",
            "TCS",
            "Infosys"
        ],

        salaryExamples: [
            "Cloud support roles commonly start around ₹3–6 LPA",
            "Cloud engineering roles can start around ₹5–10 LPA",
            "Cloud architecture roles rise substantially with experience"
        ],

        workMode: ["Office", "Hybrid"],

        careerPath: [
            "Cloud Support Engineer",
            "Cloud Engineer",
            "Senior Cloud Engineer",
            "Cloud Architect",
            "Cloud Lead"
        ],

        certifications: [
            "AWS Solutions Architect",
            "Microsoft Azure Administrator",
            "Google Cloud Associate Engineer"
        ],

        roadmap: [
            "Networking",
            "Linux",
            "Cloud fundamentals",
            "AWS/Azure/GCP",
            "Docker",
            "Kubernetes",
            "Infrastructure as Code",
            "Cloud security"
        ],

        pros: [
            "Strong demand",
            "Multiple cloud platforms",
            "Excellent specialization opportunities"
        ],

        challenges: [
            "Certification-heavy field",
            "Infrastructure can be complex",
            "On-call work is possible"
        ],

        suitableFor:
            "Students interested in infrastructure, systems and large-scale technology.",

        demand: "Very High"
    },

    {
        id: "devops-engineering",
        name: "DevOps Engineering",
        title: "DevOps Engineer",
        category: "technology",
        stream: "Technology",
        icon: "⚙️",

        description:
            "Automate software delivery and manage reliable development and production infrastructure.",

        education: "10+2 with Mathematics/Computer Science recommended.",
        degree: "B.Tech CSE/IT, BCA, B.Sc CS, MCA or equivalent.",
        entranceExams: ["JEE Main", "CUET"],

        skills: [
            "Linux",
            "Git",
            "CI/CD",
            "Docker",
            "Kubernetes",
            "Cloud",
            "Terraform",
            "Monitoring"
        ],

        beginnerSalary: "₹4 LPA – ₹9 LPA",
        experiencedSalary: "₹12 LPA – ₹35+ LPA",

        famousCompanies: [
            "Amazon",
            "Microsoft",
            "Google",
            "Netflix",
            "Adobe",
            "TCS",
            "Accenture"
        ],

        salaryExamples: [
            "Junior DevOps roles commonly begin around ₹4–8 LPA",
            "Cloud + DevOps experience can significantly improve compensation",
            "Senior DevOps and platform roles can exceed ₹20 LPA"
        ],

        workMode: ["Office", "Hybrid"],

        careerPath: [
            "DevOps Engineer",
            "Senior DevOps Engineer",
            "Platform Engineer",
            "DevOps Lead",
            "Cloud Architect"
        ],

        certifications: [
            "AWS DevOps Engineer",
            "Certified Kubernetes Administrator",
            "Azure DevOps Engineer"
        ],

        roadmap: [
            "Linux",
            "Git",
            "Networking",
            "CI/CD",
            "Docker",
            "Kubernetes",
            "Cloud",
            "Infrastructure automation"
        ],

        pros: [
            "Strong demand",
            "High technical value",
            "Works across industries"
        ],

        challenges: [
            "Can involve production pressure",
            "Requires broad technical knowledge"
        ],

        suitableFor:
            "People who enjoy automation, systems and solving infrastructure problems.",

        demand: "Very High"
    },

    {
        id: "mobile-app-development",
        name: "Mobile App Development",
        title: "Mobile App Developer",
        category: "technology",
        stream: "Technology",
        icon: "📱",

        description:
            "Create mobile applications for Android and iOS devices.",

        education: "10+2; computer science background is useful.",
        degree: "B.Tech, BCA, B.Sc CS, MCA or equivalent.",
        entranceExams: ["JEE Main", "CUET"],

        skills: [
            "Kotlin",
            "Java",
            "Swift",
            "Flutter",
            "React Native",
            "APIs",
            "UI Design",
            "Git"
        ],

        beginnerSalary: "₹3 LPA – ₹8 LPA",
        experiencedSalary: "₹10 LPA – ₹25+ LPA",

        famousCompanies: [
            "Google",
            "Apple",
            "Amazon",
            "Microsoft",
            "Flipkart",
            "Swiggy",
            "PhonePe"
        ],

        salaryExamples: [
            "Junior app developers commonly start around ₹3–7 LPA",
            "Product companies can offer higher packages",
            "Freelancing provides an additional earning path"
        ],

        workMode: ["Office", "Hybrid", "Remote"],

        careerPath: [
            "Junior Developer",
            "Mobile Developer",
            "Senior Developer",
            "Mobile Lead",
            "Engineering Manager"
        ],

        certifications: [
            "Google Associate Android Developer",
            "AWS Cloud Practitioner"
        ],

        roadmap: [
            "Programming",
            "Mobile fundamentals",
            "UI development",
            "APIs",
            "Databases",
            "Testing",
            "App deployment"
        ],

        pros: [
            "Creative technical work",
            "Large mobile market",
            "Freelance opportunities"
        ],

        challenges: [
            "Platform changes frequently",
            "App-store requirements",
            "Device compatibility"
        ],

        suitableFor:
            "Students who enjoy coding and creating products for mobile users.",

        demand: "High"
    },

    {
        id: "ui-ux-design",
        name: "UI/UX Design",
        title: "UI/UX Designer",
        category: "technology",
        stream: "Technology",
        icon: "🎨",

        description:
            "Design intuitive digital interfaces and user experiences for websites and applications.",

        education: "10+2 from any stream.",
        degree: "B.Des, BFA, BCA, B.Tech or relevant design education.",
        entranceExams: ["NID DAT", "UCEED", "CUET"],

        skills: [
            "Figma",
            "Wireframing",
            "Prototyping",
            "User Research",
            "Visual Design",
            "Typography",
            "Design Systems"
        ],

        beginnerSalary: "₹3 LPA – ₹7 LPA",
        experiencedSalary: "₹8 LPA – ₹25+ LPA",

        famousCompanies: [
            "Google",
            "Microsoft",
            "Adobe",
            "Amazon",
            "Flipkart",
            "Swiggy",
            "Razorpay"
        ],

        salaryExamples: [
            "Junior designers commonly start around ₹3–7 LPA",
            "Product designers with strong portfolios can earn considerably more",
            "Freelance design can supplement income"
        ],

        workMode: ["Office", "Hybrid", "Remote"],

        careerPath: [
            "UI Designer",
            "UX Designer",
            "Product Designer",
            "Senior Product Designer",
            "Design Lead",
            "Design Director"
        ],

        certifications: [
            "Google UX Design",
            "Interaction Design Foundation courses"
        ],

        roadmap: [
            "Design fundamentals",
            "Figma",
            "User research",
            "Wireframes",
            "Prototypes",
            "Usability testing",
            "Design portfolio"
        ],

        pros: [
            "Creative and technical combination",
            "Portfolio-driven career",
            "Remote opportunities"
        ],

        challenges: [
            "Portfolio competition",
            "Client feedback",
            "Requires strong communication"
        ],

        suitableFor:
            "Creative thinkers interested in technology and user behavior.",

        demand: "High"
    },

    {
        id: "database-administration",
        name: "Database Administration",
        title: "Database Administrator",
        category: "technology",
        stream: "Technology",
        icon: "🗄️",

        description:
            "Manage databases, performance, security, backups and data availability.",

        education: "10+2 with Mathematics/Computer Science recommended.",
        degree: "B.Tech, BCA, B.Sc CS, MCA or related degree.",
        entranceExams: ["JEE Main", "CUET"],

        skills: [
            "SQL",
            "Database Design",
            "MySQL",
            "PostgreSQL",
            "Oracle",
            "Backup",
            "Security",
            "Performance Tuning"
        ],

        beginnerSalary: "₹3 LPA – ₹7 LPA",
        experiencedSalary: "₹8 LPA – ₹25+ LPA",

        famousCompanies: [
            "Oracle",
            "Microsoft",
            "Amazon",
            "IBM",
            "TCS",
            "Infosys",
            "Wipro"
        ],

        salaryExamples: [
            "Entry-level database roles commonly begin around ₹3–7 LPA",
            "Cloud database skills can increase opportunities",
            "Senior database specialists can earn ₹15 LPA+"
        ],

        workMode: ["Office", "Hybrid"],

        careerPath: [
            "Database Support",
            "Database Administrator",
            "Senior DBA",
            "Database Architect",
            "Data Platform Lead"
        ],

        certifications: [
            "Oracle Database Certification",
            "Microsoft Azure Database",
            "AWS Database Specialty"
        ],

        roadmap: [
            "SQL",
            "Relational databases",
            "Database design",
            "Backup and recovery",
            "Security",
            "Performance",
            "Cloud databases"
        ],

        pros: [
            "Stable technical career",
            "Important in large organizations",
            "Cloud specialization"
        ],

        challenges: [
            "Production responsibility",
            "May require on-call support"
        ],

        suitableFor:
            "People who enjoy structured data and system reliability.",

        demand: "High"
    },

    {
        id: "network-engineering",
        name: "Network Engineering",
        title: "Network Engineer",
        category: "technology",
        stream: "Technology",
        icon: "🌐",

        description:
            "Design, configure and maintain computer networks and communication systems.",

        education: "10+2 with Mathematics/Science recommended.",
        degree: "B.Tech CSE/IT/ECE, BCA, B.Sc CS or related degree.",
        entranceExams: ["JEE Main", "CUET"],

        skills: [
            "TCP/IP",
            "Routing",
            "Switching",
            "Firewalls",
            "Linux",
            "Cloud Networking",
            "Network Security"
        ],

        beginnerSalary: "₹3 LPA – ₹7 LPA",
        experiencedSalary: "₹8 LPA – ₹25+ LPA",

        famousCompanies: [
            "Cisco",
            "Amazon",
            "Microsoft",
            "Google",
            "IBM",
            "TCS",
            "Wipro"
        ],

        salaryExamples: [
            "Junior network roles commonly begin around ₹3–7 LPA",
            "Cloud networking can improve salary potential",
            "Network security specialists can earn significantly more"
        ],

        workMode: ["Office", "On-site"],

        careerPath: [
            "Network Support",
            "Network Engineer",
            "Senior Network Engineer",
            "Network Architect",
            "Network Manager"
        ],

        certifications: [
            "CCNA",
            "CCNP",
            "AWS Networking"
        ],

        roadmap: [
            "Networking basics",
            "TCP/IP",
            "Routing",
            "Switching",
            "Firewalls",
            "Network security",
            "Cloud networking"
        ],

        pros: [
            "Strong infrastructure career",
            "Useful across industries",
            "Security specialization"
        ],

        challenges: [
            "Troubleshooting can be stressful",
            "On-call work possible"
        ],

        suitableFor:
            "Students who enjoy systems, networking and troubleshooting.",

        demand: "High"
    },

    {
        id: "game-development",
        name: "Game Development",
        title: "Game Developer",
        category: "technology",
        stream: "Technology",
        icon: "🎮",

        description:
            "Create interactive games using programming, game engines, design and storytelling.",

        education: "10+2; mathematics and computer science are useful.",
        degree: "B.Tech CSE, B.Des Game Design, BCA or specialized game-development education.",
        entranceExams: ["JEE Main", "CUET", "University Exams"],

        skills: [
            "C#",
            "C++",
            "Unity",
            "Unreal Engine",
            "3D Mathematics",
            "Game Physics",
            "Level Design"
        ],

        beginnerSalary: "₹3 LPA – ₹7 LPA",
        experiencedSalary: "₹8 LPA – ₹25+ LPA",

        famousCompanies: [
            "Electronic Arts",
            "Ubisoft",
            "Rockstar Games",
            "Microsoft",
            "Sony",
            "Unity",
            "Epic Games"
        ],

        salaryExamples: [
            "Junior game developers commonly begin around ₹3–7 LPA",
            "Specialized graphics and engine roles can pay more",
            "Indie development has highly variable income"
        ],

        workMode: ["Office", "Hybrid"],

        careerPath: [
            "Junior Game Developer",
            "Game Developer",
            "Senior Developer",
            "Technical Artist",
            "Lead Developer",
            "Game Director"
        ],

        certifications: [
            "Unity certifications",
            "Unreal Engine training"
        ],

        roadmap: [
            "Programming",
            "Game engine",
            "Game physics",
            "3D concepts",
            "Game mechanics",
            "Projects",
            "Portfolio"
        ],

        pros: [
            "Highly creative",
            "Fun project-based work",
            "Global industry"
        ],

        challenges: [
            "Competitive industry",
            "Long development cycles",
            "Deadlines can be intense"
        ],

        suitableFor:
            "People passionate about games, programming and interactive experiences.",

        demand: "Medium-High"
    },

    {
        id: "blockchain-development",
        name: "Blockchain Development",
        title: "Blockchain Developer",
        category: "technology",
        stream: "Technology",
        icon: "⛓️",

        description:
            "Develop decentralized applications, smart contracts and blockchain-based systems.",

        education: "10+2 with Mathematics/Computer Science recommended.",
        degree: "B.Tech CSE, BCA, B.Sc CS, MCA or equivalent.",
        entranceExams: ["JEE Main", "CUET"],

        skills: [
            "JavaScript",
            "Solidity",
            "Cryptography",
            "Smart Contracts",
            "Web3",
            "Ethereum",
            "APIs"
        ],

        beginnerSalary: "₹4 LPA – ₹9 LPA",
        experiencedSalary: "₹12 LPA – ₹35+ LPA",

        famousCompanies: [
            "Coinbase",
            "IBM",
            "Microsoft",
            "Consensys",
            "Polygon",
            "Binance"
        ],

        salaryExamples: [
            "Compensation varies considerably with blockchain specialization",
            "Smart-contract and protocol engineering can be highly paid",
            "Market conditions strongly affect hiring"
        ],

        workMode: ["Remote", "Hybrid"],

        careerPath: [
            "Blockchain Developer",
            "Smart Contract Developer",
            "Blockchain Engineer",
            "Protocol Engineer",
            "Blockchain Architect"
        ],

        certifications: [
            "Blockchain developer certifications",
            "Ethereum developer programs"
        ],

        roadmap: [
            "Programming",
            "Cryptography basics",
            "Blockchain fundamentals",
            "Ethereum",
            "Solidity",
            "Smart contracts",
            "DApps"
        ],

        pros: [
            "Specialized technology",
            "Global opportunities",
            "Remote-friendly"
        ],

        challenges: [
            "Highly volatile industry",
            "Rapidly changing technology"
        ],

        suitableFor:
            "Developers interested in decentralized technologies.",

        demand: "Medium-High"
    },

    {
        id: "data-analytics",
        name: "Data Analytics",
        title: "Data Analyst",
        category: "technology",
        stream: "Technology",
        icon: "📈",

        description:
            "Analyze business data and create insights that support better decisions.",

        education: "10+2 with Mathematics preferred.",
        degree: "B.Sc, B.Com, BBA, B.Tech, BCA, Statistics or related degree.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Excel",
            "SQL",
            "Python",
            "Power BI",
            "Tableau",
            "Statistics",
            "Data Visualization"
        ],

        beginnerSalary: "₹3 LPA – ₹7 LPA",
        experiencedSalary: "₹8 LPA – ₹20+ LPA",

        famousCompanies: [
            "Amazon",
            "Google",
            "Microsoft",
            "Deloitte",
            "TCS",
            "Accenture",
            "IBM"
        ],

        salaryExamples: [
            "Entry-level analysts commonly begin around ₹3–7 LPA",
            "Strong SQL and BI skills improve opportunities",
            "Senior analytics roles can cross ₹15 LPA"
        ],

        workMode: ["Office", "Hybrid"],

        careerPath: [
            "Data Analyst",
            "Senior Data Analyst",
            "Business Analyst",
            "Analytics Lead",
            "Analytics Manager"
        ],

        certifications: [
            "Google Data Analytics",
            "Microsoft Power BI",
            "IBM Data Analyst"
        ],

        roadmap: [
            "Excel",
            "SQL",
            "Statistics",
            "Power BI",
            "Python",
            "Projects",
            "Business communication"
        ],

        pros: [
            "Accessible entry point into data careers",
            "Used in many industries",
            "Good transition to data science"
        ],

        challenges: [
            "Strong competition",
            "Business knowledge is important"
        ],

        suitableFor:
            "Students who enjoy numbers, business questions and visualization.",

        demand: "Very High"
    },

    {
        id: "technical-writing",
        name: "Technical Writing",
        title: "Technical Writer",
        category: "technology",
        stream: "Technology",
        icon: "📝",

        description:
            "Create technical documentation, guides, manuals and developer-focused content.",

        education: "10+2 from any stream.",
        degree: "English, Journalism, Computer Science or technical degree.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Technical Writing",
            "Research",
            "Documentation",
            "Markdown",
            "Git",
            "Communication",
            "Basic Programming"
        ],

        beginnerSalary: "₹3 LPA – ₹7 LPA",
        experiencedSalary: "₹8 LPA – ₹20+ LPA",

        famousCompanies: [
            "Google",
            "Microsoft",
            "Amazon",
            "IBM",
            "Oracle",
            "Adobe"
        ],

        salaryExamples: [
            "Entry-level technical writers commonly start around ₹3–7 LPA",
            "Developer-documentation specialists can earn more",
            "International remote work is possible"
        ],

        workMode: ["Remote", "Hybrid", "Office"],

        careerPath: [
            "Technical Writer",
            "Senior Technical Writer",
            "Documentation Lead",
            "Content Strategist"
        ],

        certifications: [
            "Technical writing certifications",
            "Documentation platform training"
        ],

        roadmap: [
            "Writing fundamentals",
            "Technical concepts",
            "Documentation",
            "Markdown",
            "Git",
            "API documentation",
            "Portfolio"
        ],

        pros: [
            "Combines technology and communication",
            "Remote opportunities",
            "Less coding-heavy"
        ],

        challenges: [
            "Requires strong clarity",
            "Must understand technical products"
        ],

        suitableFor:
            "Strong writers who enjoy learning technology.",

        demand: "High"
    },


    /* =====================================================
       HEALTHCARE - 15
    ===================================================== */

    {
        id: "doctor",
        name: "Medicine",
        title: "Doctor / Physician",
        category: "healthcare",
        stream: "Healthcare",
        icon: "🩺",

        description:
            "Diagnose, treat and prevent diseases while caring for patients.",

        education: "10+2 with Physics, Chemistry and Biology.",
        degree: "MBBS followed by specialization where required.",
        entranceExams: ["NEET-UG"],

        skills: [
            "Clinical Reasoning",
            "Communication",
            "Diagnosis",
            "Patient Care",
            "Medical Knowledge"
        ],

        beginnerSalary: "₹5 LPA – ₹12 LPA",
        experiencedSalary: "₹12 LPA – ₹40+ LPA",

        famousCompanies: [
            "Apollo Hospitals",
            "Fortis",
            "Max Healthcare",
            "AIIMS",
            "Manipal Hospitals"
        ],

        salaryExamples: [
            "Government and private salaries vary substantially",
            "Specialists generally earn more than general physicians",
            "Location and specialization strongly affect income"
        ],

        workMode: ["Hospital", "Clinic"],

        careerPath: [
            "MBBS",
            "Junior Doctor",
            "Medical Officer",
            "Specialist",
            "Senior Consultant"
        ],

        certifications: [
            "Medical registration",
            "Specialization credentials"
        ],

        roadmap: [
            "NEET preparation",
            "MBBS",
            "Clinical rotations",
            "Internship",
            "Medical registration",
            "Specialization"
        ],

        pros: [
            "Highly respected profession",
            "Strong social impact",
            "Wide specialization options"
        ],

        challenges: [
            "Long education",
            "High responsibility",
            "Demanding working hours"
        ],

        suitableFor:
            "Students passionate about biology, healthcare and helping people.",

        demand: "Very High"
    },

    {
        id: "dentistry",
        name: "Dentistry",
        title: "Dentist",
        category: "healthcare",
        stream: "Healthcare",
        icon: "🦷",

        description:
            "Diagnose and treat dental and oral health conditions.",

        education: "10+2 with PCB.",
        degree: "BDS; MDS for specialization.",
        entranceExams: ["NEET-UG"],

        skills: [
            "Dental Procedures",
            "Diagnosis",
            "Patient Communication",
            "Manual Dexterity"
        ],

        beginnerSalary: "₹3 LPA – ₹6 LPA",
        experiencedSalary: "₹7 LPA – ₹20+ LPA",

        famousCompanies: [
            "Clove Dental",
            "Apollo Dental",
            "Sabka Dentist",
            "Fortis"
        ],

        salaryExamples: [
            "Private practice income varies widely",
            "Specialization can improve earning potential",
            "Clinic ownership can provide additional income"
        ],

        workMode: ["Clinic", "Hospital"],

        careerPath: [
            "BDS Intern",
            "Dentist",
            "Senior Dentist",
            "Specialist Dentist",
            "Clinic Owner"
        ],

        certifications: [
            "BDS registration",
            "MDS specialization"
        ],

        roadmap: [
            "NEET",
            "BDS",
            "Internship",
            "Registration",
            "Clinical practice",
            "Specialization"
        ],

        pros: [
            "Healthcare career",
            "Private practice opportunities",
            "Specialization options"
        ],

        challenges: [
            "Clinical responsibility",
            "Practice setup costs"
        ],

        suitableFor:
            "Students interested in biology and hands-on healthcare.",

        demand: "High"
    },

    {
        id: "pharmacy",
        name: "Pharmacy",
        title: "Pharmacist",
        category: "healthcare",
        stream: "Healthcare",
        icon: "💊",

        description:
            "Work with medicines, prescriptions, drug safety and pharmaceutical products.",

        education: "10+2 with PCB/PCM depending on program.",
        degree: "D.Pharm or B.Pharm; M.Pharm for advanced roles.",
        entranceExams: ["State Pharmacy Exams", "CUET", "University Exams"],

        skills: [
            "Pharmacology",
            "Drug Safety",
            "Communication",
            "Medicine Knowledge"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹6 LPA – ₹15+ LPA",

        famousCompanies: [
            "Sun Pharma",
            "Cipla",
            "Dr. Reddy's",
            "Lupin",
            "Apollo Pharmacy"
        ],

        salaryExamples: [
            "Retail pharmacist salaries are usually lower than pharmaceutical industry roles",
            "Quality, regulatory and R&D roles can pay more"
        ],

        workMode: ["Pharmacy", "Hospital", "Industry"],

        careerPath: [
            "Pharmacist",
            "Senior Pharmacist",
            "Clinical Pharmacist",
            "Regulatory Specialist",
            "Pharma Manager"
        ],

        certifications: [
            "Pharmacy registration",
            "Clinical pharmacy certifications"
        ],

        roadmap: [
            "PCB/PCM",
            "Pharmacy degree",
            "Internship",
            "Registration",
            "Clinical/industry specialization"
        ],

        pros: [
            "Multiple healthcare sectors",
            "Pharma industry opportunities"
        ],

        challenges: [
            "Detailed scientific knowledge",
            "Regulatory requirements"
        ],

        suitableFor:
            "Students interested in medicines, chemistry and healthcare.",

        demand: "High"
    },

    {
        id: "nursing",
        name: "Nursing",
        title: "Registered Nurse",
        category: "healthcare",
        stream: "Healthcare",
        icon: "👩‍⚕️",

        description:
            "Provide direct patient care and support doctors and healthcare teams.",

        education: "10+2 with PCB preferred.",
        degree: "B.Sc Nursing or GNM.",
        entranceExams: ["University Nursing Exams", "NEET in selected institutions"],

        skills: [
            "Patient Care",
            "Clinical Skills",
            "Communication",
            "Emergency Response"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹6 LPA – ₹15+ LPA",

        famousCompanies: [
            "Apollo Hospitals",
            "Fortis",
            "Max Healthcare",
            "Manipal Hospitals"
        ],

        salaryExamples: [
            "Government and private hospitals differ significantly",
            "Specialized and international nursing can pay substantially more"
        ],

        workMode: ["Hospital", "Clinic"],

        careerPath: [
            "Staff Nurse",
            "Senior Nurse",
            "Nurse Manager",
            "Clinical Specialist",
            "Nursing Administrator"
        ],

        certifications: [
            "Nursing registration",
            "Specialty nursing certifications"
        ],

        roadmap: [
            "PCB",
            "Nursing degree",
            "Clinical training",
            "Registration",
            "Specialization"
        ],

        pros: [
            "Strong healthcare demand",
            "Meaningful patient interaction",
            "International opportunities"
        ],

        challenges: [
            "Shift work",
            "Emotionally demanding"
        ],

        suitableFor:
            "People who enjoy patient care and healthcare service.",

        demand: "Very High"
    },

    {
        id: "physiotherapy",
        name: "Physiotherapy",
        title: "Physiotherapist",
        category: "healthcare",
        stream: "Healthcare",
        icon: "🏃",

        description:
            "Help patients recover movement, strength and physical function.",

        education: "10+2 with PCB.",
        degree: "BPT; MPT for specialization.",
        entranceExams: ["University Exams", "State Entrance Exams"],

        skills: [
            "Anatomy",
            "Exercise Therapy",
            "Patient Assessment",
            "Communication"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹6 LPA – ₹15+ LPA",

        famousCompanies: [
            "Apollo Hospitals",
            "Fortis",
            "Max Healthcare",
            "Manipal Hospitals"
        ],

        salaryExamples: [
            "Hospital salaries vary by city and experience",
            "Sports and private practice can improve earning potential"
        ],

        workMode: ["Hospital", "Clinic", "Sports Center"],

        careerPath: [
            "Physiotherapist",
            "Senior Physiotherapist",
            "Sports Physiotherapist",
            "Clinical Specialist",
            "Clinic Owner"
        ],

        certifications: [
            "Sports physiotherapy",
            "Orthopedic specialization"
        ],

        roadmap: [
            "PCB",
            "BPT",
            "Clinical training",
            "Internship",
            "Specialization"
        ],

        pros: [
            "Direct patient impact",
            "Private practice opportunities",
            "Sports specialization"
        ],

        challenges: [
            "Physically demanding",
            "Patient outcomes require patience"
        ],

        suitableFor:
            "Students interested in anatomy, movement and rehabilitation.",

        demand: "High"
    },

    {
        id: "medical-laboratory",
        name: "Medical Laboratory Science",
        title: "Medical Laboratory Technologist",
        category: "healthcare",
        stream: "Healthcare",
        icon: "🔬",

        description:
            "Perform laboratory tests that help doctors diagnose and monitor diseases.",

        education: "10+2 with PCB.",
        degree: "B.Sc MLT or Diploma in Medical Laboratory Technology.",
        entranceExams: ["University Exams", "State Exams"],

        skills: [
            "Laboratory Techniques",
            "Biochemistry",
            "Microbiology",
            "Accuracy",
            "Safety"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹6 LPA – ₹12+ LPA",

        famousCompanies: [
            "Dr. Lal PathLabs",
            "Metropolis Healthcare",
            "SRL Diagnostics",
            "Apollo Diagnostics"
        ],

        salaryExamples: [
            "Entry salaries vary by hospital and diagnostic center",
            "Specialized laboratory roles offer better progression"
        ],

        workMode: ["Laboratory", "Hospital"],

        careerPath: [
            "Lab Technician",
            "Technologist",
            "Senior Technologist",
            "Lab Manager"
        ],

        certifications: [
            "Laboratory quality certifications",
            "Specialty diagnostics training"
        ],

        roadmap: [
            "PCB",
            "MLT education",
            "Laboratory training",
            "Internship",
            "Specialization"
        ],

        pros: [
            "Important healthcare role",
            "Scientific work",
            "Stable career"
        ],

        challenges: [
            "High accuracy required",
            "Laboratory safety responsibilities"
        ],

        suitableFor:
            "Students interested in biology, laboratory work and diagnostics.",

        demand: "High"
    },

    {
        id: "radiology-technician",
        name: "Radiology Technology",
        title: "Radiology Technologist",
        category: "healthcare",
        stream: "Healthcare",
        icon: "🩻",

        description:
            "Operate imaging equipment and support diagnostic imaging procedures.",

        education: "10+2 with PCB/PCM depending on program.",
        degree: "B.Sc Radiology or Diploma in Radiology Technology.",
        entranceExams: ["University Exams", "State Exams"],

        skills: [
            "Imaging Technology",
            "Patient Safety",
            "Radiation Safety",
            "Equipment Operation"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹6 LPA – ₹15+ LPA",

        famousCompanies: [
            "Apollo Hospitals",
            "Fortis",
            "Max Healthcare",
            "Manipal Hospitals"
        ],

        salaryExamples: [
            "Hospital and diagnostic center salaries vary",
            "Advanced imaging expertise can improve earnings"
        ],

        workMode: ["Hospital", "Diagnostic Center"],

        careerPath: [
            "Radiology Technician",
            "Senior Technologist",
            "Imaging Specialist",
            "Imaging Manager"
        ],

        certifications: [
            "Radiology technology certifications",
            "MRI/CT specialization"
        ],

        roadmap: [
            "Science subjects",
            "Radiology program",
            "Clinical training",
            "Imaging specialization"
        ],

        pros: [
            "Technology + healthcare",
            "Growing diagnostic sector"
        ],

        challenges: [
            "Safety requirements",
            "Equipment responsibility"
        ],

        suitableFor:
            "Students interested in medical technology and diagnostics.",

        demand: "High"
    },

    {
        id: "occupational-therapy",
        name: "Occupational Therapy",
        title: "Occupational Therapist",
        category: "healthcare",
        stream: "Healthcare",
        icon: "🧠",

        description:
            "Help people improve their ability to perform daily activities after illness or injury.",

        education: "10+2 with PCB.",
        degree: "BOT; MOT for specialization.",
        entranceExams: ["University Exams", "State Exams"],

        skills: [
            "Patient Assessment",
            "Rehabilitation",
            "Communication",
            "Therapeutic Techniques"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹6 LPA – ₹15+ LPA",

        famousCompanies: [
            "Apollo Hospitals",
            "Fortis",
            "Max Healthcare",
            "Rehabilitation Centers"
        ],

        salaryExamples: [
            "Income varies by hospital, specialization and private practice"
        ],

        workMode: ["Hospital", "Clinic", "Rehabilitation Center"],

        careerPath: [
            "Occupational Therapist",
            "Senior Therapist",
            "Clinical Specialist",
            "Therapy Manager"
        ],

        certifications: [
            "Pediatric therapy",
            "Neurological rehabilitation"
        ],

        roadmap: [
            "PCB",
            "BOT",
            "Clinical training",
            "Internship",
            "Specialization"
        ],

        pros: [
            "Direct patient impact",
            "Specialization options"
        ],

        challenges: [
            "Patient progress can take time",
            "Emotionally demanding"
        ],

        suitableFor:
            "People interested in rehabilitation and helping patients regain independence.",

        demand: "High"
    },

    {
        id: "optometry",
        name: "Optometry",
        title: "Optometrist",
        category: "healthcare",
        stream: "Healthcare",
        icon: "👁️",

        description:
            "Examine vision and provide eye-care services and corrective solutions.",

        education: "10+2 with PCB.",
        degree: "B.Optom or equivalent.",
        entranceExams: ["University Exams", "State Exams"],

        skills: [
            "Eye Examination",
            "Optics",
            "Patient Communication",
            "Clinical Skills"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹6 LPA – ₹15+ LPA",

        famousCompanies: [
            "Lenskart",
            "Titan Eye+",
            "Apollo Hospitals",
            "Dr. Agarwal's Eye Hospital"
        ],

        salaryExamples: [
            "Retail and clinical roles have different salary structures",
            "Specialized clinical experience improves opportunities"
        ],

        workMode: ["Clinic", "Hospital", "Retail"],

        careerPath: [
            "Optometrist",
            "Senior Optometrist",
            "Clinical Specialist",
            "Optical Store Manager"
        ],

        certifications: [
            "Contact lens specialization",
            "Low vision training"
        ],

        roadmap: [
            "PCB",
            "Optometry degree",
            "Clinical training",
            "Internship",
            "Specialization"
        ],

        pros: [
            "Healthcare + technology",
            "Private practice opportunities"
        ],

        challenges: [
            "Customer-facing work",
            "Clinical accuracy required"
        ],

        suitableFor:
            "Students interested in eye health and clinical technology.",

        demand: "High"
    },

    {
        id: "nutrition-dietetics",
        name: "Nutrition and Dietetics",
        title: "Dietitian / Nutritionist",
        category: "healthcare",
        stream: "Healthcare",
        icon: "🥗",

        description:
            "Help individuals improve health through nutrition, diet planning and lifestyle guidance.",

        education: "10+2 with PCB/Science preferred.",
        degree: "B.Sc Nutrition, Dietetics, Food Science or related degree.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Nutrition Science",
            "Diet Planning",
            "Communication",
            "Research",
            "Counselling"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹6 LPA – ₹15+ LPA",

        famousCompanies: [
            "Apollo Hospitals",
            "Fortis",
            "HealthifyMe",
            "Cult.fit"
        ],

        salaryExamples: [
            "Hospital roles and private consultation have different earning models",
            "Sports and specialized nutrition can offer higher income"
        ],

        workMode: ["Hospital", "Clinic", "Online"],

        careerPath: [
            "Nutritionist",
            "Dietitian",
            "Senior Dietitian",
            "Clinical Nutritionist",
            "Private Consultant"
        ],

        certifications: [
            "Clinical nutrition",
            "Sports nutrition"
        ],

        roadmap: [
            "Nutrition fundamentals",
            "Degree",
            "Clinical training",
            "Diet planning",
            "Specialization"
        ],

        pros: [
            "Growing wellness industry",
            "Private consultation opportunities"
        ],

        challenges: [
            "Requires evidence-based practice",
            "Client adherence can be difficult"
        ],

        suitableFor:
            "People interested in health, food and lifestyle science.",

        demand: "High"
    },

    {
        id: "public-health",
        name: "Public Health",
        title: "Public Health Professional",
        category: "healthcare",
        stream: "Healthcare",
        icon: "🏥",

        description:
            "Work on health programs, disease prevention and population-level healthcare.",

        education: "10+2; science is useful.",
        degree: "BPH, MBBS, B.Sc or MPH for advanced roles.",
        entranceExams: ["CUET", "University Exams", "NEET for MBBS route"],

        skills: [
            "Epidemiology",
            "Statistics",
            "Research",
            "Health Policy",
            "Communication"
        ],

        beginnerSalary: "₹3 LPA – ₹7 LPA",
        experiencedSalary: "₹8 LPA – ₹20+ LPA",

        famousCompanies: [
            "WHO",
            "UNICEF",
            "Government Health Departments",
            "Public Health Foundations"
        ],

        salaryExamples: [
            "NGO, government and international organization salaries differ widely",
            "Advanced public-health degrees improve opportunities"
        ],

        workMode: ["Office", "Field", "Hybrid"],

        careerPath: [
            "Program Assistant",
            "Public Health Officer",
            "Program Manager",
            "Public Health Specialist",
            "Policy Advisor"
        ],

        certifications: [
            "MPH",
            "Epidemiology certifications"
        ],

        roadmap: [
            "Health sciences",
            "Statistics",
            "Public health fundamentals",
            "Field work",
            "Research",
            "Policy"
        ],

        pros: [
            "Large social impact",
            "Government and NGO opportunities"
        ],

        challenges: [
            "Field work",
            "Complex public-health problems"
        ],

        suitableFor:
            "Students interested in healthcare at community and population level.",

        demand: "High"
    },

    {
        id: "medical-coding",
        name: "Medical Coding",
        title: "Medical Coder",
        category: "healthcare",
        stream: "Healthcare",
        icon: "💼",

        description:
            "Convert medical records and procedures into standardized healthcare codes.",

        education: "10+2; biology/healthcare background is useful.",
        degree: "Any relevant degree; life sciences and healthcare degrees are useful.",
        entranceExams: ["Not usually required"],

        skills: [
            "Medical Terminology",
            "ICD Coding",
            "Attention to Detail",
            "Healthcare Documentation"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹6 LPA – ₹12+ LPA",

        famousCompanies: [
            "Optum",
            "Omega Healthcare",
            "Access Healthcare",
            "AGS Health"
        ],

        salaryExamples: [
            "Entry-level healthcare BPO/coding salaries commonly start around ₹2.5–5 LPA",
            "Certified coders can earn more"
        ],

        workMode: ["Office", "Hybrid", "Remote"],

        careerPath: [
            "Medical Coder",
            "Senior Coder",
            "Coding Auditor",
            "Coding Manager"
        ],

        certifications: [
            "CPC",
            "CCA",
            "CCS"
        ],

        roadmap: [
            "Medical terminology",
            "Anatomy",
            "Coding systems",
            "Certification",
            "Practical coding"
        ],

        pros: [
            "Accessible healthcare career",
            "Remote opportunities",
            "Certification-based progression"
        ],

        challenges: [
            "Detail-heavy work",
            "Repetitive tasks"
        ],

        suitableFor:
            "People who prefer healthcare work without direct clinical practice.",

        demand: "High"
    },

    {
        id: "healthcare-management",
        name: "Healthcare Management",
        title: "Healthcare Manager",
        category: "healthcare",
        stream: "Healthcare",
        icon: "🏢",

        description:
            "Manage healthcare operations, teams, services and hospital administration.",

        education: "10+2 from any stream.",
        degree: "BBA/BHA/BHM or healthcare administration; MBA/MHA for advanced roles.",
        entranceExams: ["CUET", "CAT", "University Exams"],

        skills: [
            "Management",
            "Healthcare Operations",
            "Communication",
            "Finance",
            "Leadership"
        ],

        beginnerSalary: "₹3 LPA – ₹7 LPA",
        experiencedSalary: "₹8 LPA – ₹25+ LPA",

        famousCompanies: [
            "Apollo Hospitals",
            "Fortis",
            "Max Healthcare",
            "Manipal Hospitals"
        ],

        salaryExamples: [
            "Hospital management salaries vary by organization and qualification",
            "MBA/MHA holders generally access higher management positions"
        ],

        workMode: ["Hospital", "Office"],

        careerPath: [
            "Management Trainee",
            "Hospital Administrator",
            "Operations Manager",
            "Hospital Manager",
            "Healthcare Director"
        ],

        certifications: [
            "MBA",
            "MHA",
            "Healthcare Quality certifications"
        ],

        roadmap: [
            "Management basics",
            "Healthcare operations",
            "Finance",
            "Leadership",
            "Hospital administration"
        ],

        pros: [
            "Combines business and healthcare",
            "Leadership opportunities"
        ],

        challenges: [
            "High operational responsibility",
            "People management"
        ],

        suitableFor:
            "Students interested in healthcare but more attracted to management than clinical work.",

        demand: "High"
    },


    /* =====================================================
       BUSINESS - 15
    ===================================================== */

    {
        id: "business-management",
        name: "Business Management",
        title: "Business Manager",
        category: "business",
        stream: "Business",
        icon: "📊",

        description:
            "Manage teams, operations and business activities to achieve organizational goals.",

        education: "10+2 from any stream.",
        degree: "BBA, B.Com, BBM, MBA.",
        entranceExams: ["CUET", "CAT", "XAT", "NMAT", "SNAP"],

        skills: [
            "Leadership",
            "Communication",
            "Strategy",
            "Finance",
            "Problem Solving"
        ],

        beginnerSalary: "₹3 LPA – ₹7 LPA",
        experiencedSalary: "₹10 LPA – ₹30+ LPA",

        famousCompanies: [
            "Deloitte",
            "TCS",
            "Accenture",
            "Amazon",
            "HDFC Bank",
            "Reliance"
        ],

        salaryExamples: [
            "Management trainee roles commonly begin around ₹3–7 LPA",
            "Top MBA programs can lead to much higher starting packages"
        ],

        workMode: ["Office", "Hybrid"],

        careerPath: [
            "Management Trainee",
            "Business Manager",
            "Senior Manager",
            "Business Head",
            "Director"
        ],

        certifications: [
            "MBA",
            "Project Management certifications"
        ],

        roadmap: [
            "Business fundamentals",
            "Finance",
            "Marketing",
            "Operations",
            "Leadership",
            "Strategy"
        ],

        pros: [
            "Broad career options",
            "Leadership opportunities",
            "Works across industries"
        ],

        challenges: [
            "High competition",
            "Performance pressure"
        ],

        suitableFor:
            "People who enjoy leadership, business and decision-making.",

        demand: "Very High"
    },

    {
        id: "marketing",
        name: "Marketing",
        title: "Marketing Specialist",
        category: "business",
        stream: "Business",
        icon: "📣",

        description:
            "Promote products and services through research, branding, campaigns and customer insights.",

        education: "10+2 from any stream.",
        degree: "BBA, B.Com, BA, BMS, MBA Marketing.",
        entranceExams: ["CUET", "CAT", "XAT", "NMAT"],

        skills: [
            "Communication",
            "Market Research",
            "Branding",
            "Analytics",
            "Content",
            "Strategy"
        ],

        beginnerSalary: "₹3 LPA – ₹7 LPA",
        experiencedSalary: "₹8 LPA – ₹25+ LPA",

        famousCompanies: [
            "Google",
            "Amazon",
            "Coca-Cola",
            "Unilever",
            "P&G",
            "Deloitte"
        ],

        salaryExamples: [
            "Marketing salaries vary strongly by specialization",
            "Performance marketing and product marketing can pay more"
        ],

        workMode: ["Office", "Hybrid", "Remote"],

        careerPath: [
            "Marketing Executive",
            "Marketing Specialist",
            "Marketing Manager",
            "Brand Manager",
            "Marketing Director"
        ],

        certifications: [
            "Google Ads",
            "Meta Marketing",
            "HubSpot Marketing"
        ],

        roadmap: [
            "Marketing fundamentals",
            "Consumer research",
            "Digital marketing",
            "Analytics",
            "Brand strategy",
            "Campaigns"
        ],

        pros: [
            "Creative + business career",
            "Many industries",
            "Freelance opportunities"
        ],

        challenges: [
            "Target pressure",
            "Results can be difficult to predict"
        ],

        suitableFor:
            "Creative communicators who enjoy business and customer psychology.",

        demand: "Very High"
    },

    {
        id: "finance",
        name: "Finance",
        title: "Financial Analyst",
        category: "business",
        stream: "Business",
        icon: "💰",

        description:
            "Analyze financial information and support investment and business decisions.",

        education: "10+2; Commerce/Mathematics useful.",
        degree: "B.Com, BBA Finance, Economics, CA, CFA, MBA Finance.",
        entranceExams: ["CUET", "CAT", "CFA", "CA Exams"],

        skills: [
            "Financial Analysis",
            "Excel",
            "Accounting",
            "Valuation",
            "Statistics",
            "Communication"
        ],

        beginnerSalary: "₹4 LPA – ₹9 LPA",
        experiencedSalary: "₹10 LPA – ₹35+ LPA",

        famousCompanies: [
            "Goldman Sachs",
            "JPMorgan Chase",
            "Morgan Stanley",
            "Deloitte",
            "EY",
            "KPMG"
        ],

        salaryExamples: [
            "Finance salaries vary greatly by employer and qualification",
            "Investment banking and high-end finance roles can be substantially higher"
        ],

        workMode: ["Office", "Hybrid"],

        careerPath: [
            "Financial Analyst",
            "Senior Analyst",
            "Finance Manager",
            "Finance Director",
            "CFO"
        ],

        certifications: [
            "CFA",
            "CA",
            "FRM"
        ],

        roadmap: [
            "Accounting",
            "Excel",
            "Financial analysis",
            "Valuation",
            "Financial modeling",
            "Certification"
        ],

        pros: [
            "Strong earning potential",
            "Many industries",
            "Clear professional certifications"
        ],

        challenges: [
            "High competition",
            "Deadline pressure"
        ],

        suitableFor:
            "Students who enjoy numbers, business and analytical thinking.",

        demand: "Very High"
    },

    {
        id: "accounting",
        name: "Accounting",
        title: "Accountant",
        category: "business",
        stream: "Business",
        icon: "🧾",

        description:
            "Maintain financial records, prepare reports and support business compliance.",

        education: "10+2; Commerce is strongly recommended.",
        degree: "B.Com, M.Com, CA, CMA.",
        entranceExams: ["CUET", "CA Foundation"],

        skills: [
            "Accounting",
            "Excel",
            "Taxation",
            "Tally",
            "Financial Reporting"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹6 LPA – ₹20+ LPA",

        famousCompanies: [
            "Deloitte",
            "EY",
            "KPMG",
            "PwC",
            "TCS",
            "Infosys"
        ],

        salaryExamples: [
            "Entry accounting roles commonly begin around ₹2.5–5 LPA",
            "CA-qualified professionals can command significantly higher packages"
        ],

        workMode: ["Office", "Hybrid"],

        careerPath: [
            "Junior Accountant",
            "Accountant",
            "Senior Accountant",
            "Finance Manager",
            "Controller"
        ],

        certifications: [
            "CA",
            "CMA",
            "ACCA"
        ],

        roadmap: [
            "Accounting basics",
            "Excel",
            "Tally",
            "Taxation",
            "Financial reporting",
            "Certification"
        ],

        pros: [
            "Stable career",
            "Every business needs accounting",
            "Professional certifications"
        ],

        challenges: [
            "Deadline-heavy",
            "Accuracy is essential"
        ],

        suitableFor:
            "Students comfortable with numbers and structured work.",

        demand: "High"
    },

    {
        id: "human-resources",
        name: "Human Resources",
        title: "HR Specialist",
        category: "business",
        stream: "Business",
        icon: "👥",

        description:
            "Recruit, develop and support employees while helping organizations manage people effectively.",

        education: "10+2 from any stream.",
        degree: "BBA HR, B.Com, BA, MBA HR.",
        entranceExams: ["CUET", "CAT", "XAT"],

        skills: [
            "Communication",
            "Recruitment",
            "Interviewing",
            "Employee Relations",
            "HR Analytics"
        ],

        beginnerSalary: "₹3 LPA – ₹6 LPA",
        experiencedSalary: "₹8 LPA – ₹25+ LPA",

        famousCompanies: [
            "Amazon",
            "Google",
            "Microsoft",
            "Deloitte",
            "TCS",
            "Accenture"
        ],

        salaryExamples: [
            "Entry HR roles commonly begin around ₹3–6 LPA",
            "HR business partners and HR managers can earn significantly more"
        ],

        workMode: ["Office", "Hybrid"],

        careerPath: [
            "HR Executive",
            "HR Specialist",
            "HR Manager",
            "HR Business Partner",
            "HR Director"
        ],

        certifications: [
            "SHRM",
            "HR Analytics",
            "MBA HR"
        ],

        roadmap: [
            "HR fundamentals",
            "Recruitment",
            "Employment law",
            "HR technology",
            "Employee relations",
            "Leadership"
        ],

        pros: [
            "People-focused career",
            "Works across industries",
            "Management progression"
        ],

        challenges: [
            "Sensitive employee issues",
            "Communication pressure"
        ],

        suitableFor:
            "People-oriented students who enjoy communication and organizational behavior.",

        demand: "High"
    },

    {
        id: "business-analytics",
        name: "Business Analytics",
        title: "Business Analyst",
        category: "business",
        stream: "Business",
        icon: "📊",

        description:
            "Use business data and analysis to identify problems and improve organizational decisions.",

        education: "10+2 with Mathematics recommended.",
        degree: "BBA, B.Com, Economics, B.Tech, B.Sc or MBA.",
        entranceExams: ["CUET", "CAT", "XAT"],

        skills: [
            "Excel",
            "SQL",
            "Power BI",
            "Business Analysis",
            "Communication",
            "Problem Solving"
        ],

        beginnerSalary: "₹4 LPA – ₹8 LPA",
        experiencedSalary: "₹10 LPA – ₹25+ LPA",

        famousCompanies: [
            "Deloitte",
            "Accenture",
            "Amazon",
            "TCS",
            "IBM",
            "EY"
        ],

        salaryExamples: [
            "Entry-level business analyst roles commonly start around ₹4–8 LPA",
            "Consulting and product-company roles can pay more"
        ],

        workMode: ["Office", "Hybrid"],

        careerPath: [
            "Business Analyst",
            "Senior Business Analyst",
            "Product Analyst",
            "Consultant",
            "Strategy Manager"
        ],

        certifications: [
            "CBAP",
            "Power BI",
            "Google Data Analytics"
        ],

        roadmap: [
            "Business fundamentals",
            "Excel",
            "SQL",
            "Data visualization",
            "Requirements analysis",
            "Presentations"
        ],

        pros: [
            "Strong demand",
            "Mix of business and technology",
            "Many industries"
        ],

        challenges: [
            "Client communication",
            "Ambiguous problems"
        ],

        suitableFor:
            "Analytical people who enjoy business but don't want pure programming.",

        demand: "Very High"
    },

    {
        id: "entrepreneurship",
        name: "Entrepreneurship",
        title: "Entrepreneur / Founder",
        category: "business",
        stream: "Business",
        icon: "🚀",

        description:
            "Build and grow a business, product or organization from an idea.",

        education: "No specific degree required.",
        degree: "Business, engineering, design or any field can be useful.",
        entranceExams: ["Not required"],

        skills: [
            "Leadership",
            "Sales",
            "Finance",
            "Marketing",
            "Product Development",
            "Communication"
        ],

        beginnerSalary: "Highly variable",
        experiencedSalary: "Highly variable",

        famousCompanies: [
            "Flipkart",
            "Razorpay",
            "Zomato",
            "Meesho",
            "Swiggy",
            "Zoho"
        ],

        salaryExamples: [
            "Founder income is highly variable",
            "Early-stage founders may earn little or no salary",
            "Successful businesses can create significant income"
        ],

        workMode: ["Flexible"],

        careerPath: [
            "Idea",
            "Prototype",
            "Early Business",
            "Founder",
            "CEO",
            "Business Owner"
        ],

        certifications: [
            "Startup programs",
            "Business management courses"
        ],

        roadmap: [
            "Problem identification",
            "Market research",
            "Business model",
            "MVP",
            "Sales",
            "Marketing",
            "Finance",
            "Scaling"
        ],

        pros: [
            "High independence",
            "Potential for large impact",
            "Creative freedom"
        ],

        challenges: [
            "Financial risk",
            "Uncertain income",
            "High responsibility"
        ],

        suitableFor:
            "Self-driven people comfortable with uncertainty and risk.",

        demand: "Variable"
    },

    {
        id: "investment-banking",
        name: "Investment Banking",
        title: "Investment Banking Analyst",
        category: "business",
        stream: "Business",
        icon: "🏦",

        description:
            "Help companies raise capital, complete mergers and acquisitions and make major financial decisions.",

        education: "10+2; Mathematics/Commerce useful.",
        degree: "B.Com, Economics, BBA, CA, CFA, MBA Finance.",
        entranceExams: ["CUET", "CAT", "CFA", "CA Exams"],

        skills: [
            "Financial Modeling",
            "Valuation",
            "Excel",
            "Accounting",
            "Presentation"
        ],

        beginnerSalary: "₹6 LPA – ₹15 LPA",
        experiencedSalary: "₹15 LPA – ₹50+ LPA",

        famousCompanies: [
            "Goldman Sachs",
            "JPMorgan Chase",
            "Morgan Stanley",
            "Bank of America",
            "Citi"
        ],

        salaryExamples: [
            "Top investment banks can pay significantly above general finance roles",
            "Bonuses may form a meaningful part of compensation"
        ],

        workMode: ["Office"],

        careerPath: [
            "Analyst",
            "Associate",
            "Vice President",
            "Director",
            "Managing Director"
        ],

        certifications: [
            "CFA",
            "MBA Finance"
        ],

        roadmap: [
            "Accounting",
            "Financial modeling",
            "Valuation",
            "M&A",
            "Capital markets",
            "Interview preparation"
        ],

        pros: [
            "High compensation potential",
            "Strong finance exposure",
            "Prestigious career path"
        ],

        challenges: [
            "Very demanding hours",
            "Highly competitive"
        ],

        suitableFor:
            "Students with strong finance skills who can handle intense work environments.",

        demand: "High"
    },

    {
        id: "consulting",
        name: "Management Consulting",
        title: "Management Consultant",
        category: "business",
        stream: "Business",
        icon: "🧩",

        description:
            "Help organizations solve complex strategic, operational and business problems.",

        education: "Any strong academic background; business/engineering/economics useful.",
        degree: "Any bachelor's degree; MBA is valuable for many roles.",
        entranceExams: ["CAT", "GMAT", "XAT"],

        skills: [
            "Problem Solving",
            "Business Analysis",
            "Communication",
            "PowerPoint",
            "Excel",
            "Strategy"
        ],

        beginnerSalary: "₹5 LPA – ₹12 LPA",
        experiencedSalary: "₹15 LPA – ₹40+ LPA",

        famousCompanies: [
            "McKinsey",
            "BCG",
            "Bain",
            "Deloitte",
            "EY",
            "PwC"
        ],

        salaryExamples: [
            "Top consulting firms can pay considerably above general entry-level business roles",
            "MBA and strong academic credentials can influence entry opportunities"
        ],

        workMode: ["Office", "Travel"],

        careerPath: [
            "Analyst",
            "Consultant",
            "Senior Consultant",
            "Manager",
            "Partner"
        ],

        certifications: [
            "MBA",
            "Strategy certifications"
        ],

        roadmap: [
            "Business fundamentals",
            "Case studies",
            "Problem solving",
            "Excel",
            "Presentations",
            "Case interview preparation"
        ],

        pros: [
            "Fast learning",
            "Strong professional network",
            "Excellent career mobility"
        ],

        challenges: [
            "Travel",
            "Long hours",
            "Highly competitive"
        ],

        suitableFor:
            "Analytical communicators who enjoy solving different business problems.",

        demand: "High"
    },

    {
        id: "sales",
        name: "Sales",
        title: "Sales Executive",
        category: "business",
        stream: "Business",
        icon: "🤝",

        description:
            "Help organizations generate revenue by understanding customers and selling products or services.",

        education: "10+2 from any stream.",
        degree: "Any bachelor's degree; BBA/B.Com useful.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Communication",
            "Negotiation",
            "Customer Research",
            "CRM",
            "Presentation"
        ],

        beginnerSalary: "₹2.5 LPA – ₹6 LPA + incentives",
        experiencedSalary: "₹8 LPA – ₹25+ LPA",

        famousCompanies: [
            "Amazon",
            "Microsoft",
            "Google",
            "TCS",
            "Salesforce",
            "Oracle"
        ],

        salaryExamples: [
            "Sales compensation often combines fixed salary and incentives",
            "High-performing enterprise sales professionals can earn substantially more"
        ],

        workMode: ["Office", "Field", "Hybrid"],

        careerPath: [
            "Sales Executive",
            "Account Executive",
            "Sales Manager",
            "Regional Manager",
            "Sales Director"
        ],

        certifications: [
            "Salesforce",
            "HubSpot Sales"
        ],

        roadmap: [
            "Communication",
            "Product knowledge",
            "Prospecting",
            "CRM",
            "Negotiation",
            "Account management"
        ],

        pros: [
            "Performance-based earning",
            "Fast career progression",
            "Transferable skills"
        ],

        challenges: [
            "Target pressure",
            "Rejection"
        ],

        suitableFor:
            "Confident communicators who enjoy interacting with people.",

        demand: "Very High"
    },

    {
        id: "supply-chain",
        name: "Supply Chain Management",
        title: "Supply Chain Analyst",
        category: "business",
        stream: "Business",
        icon: "🚚",

        description:
            "Manage the movement of products, materials and information through supply chains.",

        education: "10+2 from any stream; Mathematics useful.",
        degree: "BBA, B.Com, B.Tech, MBA Supply Chain.",
        entranceExams: ["CUET", "CAT"],

        skills: [
            "Logistics",
            "Excel",
            "Data Analysis",
            "Operations",
            "Inventory Management"
        ],

        beginnerSalary: "₹3 LPA – ₹7 LPA",
        experiencedSalary: "₹8 LPA – ₹25+ LPA",

        famousCompanies: [
            "Amazon",
            "Flipkart",
            "DHL",
            "FedEx",
            "Reliance",
            "Walmart"
        ],

        salaryExamples: [
            "Entry supply-chain roles commonly start around ₹3–7 LPA",
            "Operations management and leadership roles pay more"
        ],

        workMode: ["Office", "Warehouse", "Hybrid"],

        careerPath: [
            "Supply Chain Analyst",
            "Operations Executive",
            "Supply Chain Manager",
            "Operations Manager",
            "Supply Chain Director"
        ],

        certifications: [
            "APICS",
            "Supply Chain Management certifications"
        ],

        roadmap: [
            "Operations",
            "Logistics",
            "Inventory",
            "Excel",
            "Data analysis",
            "Procurement"
        ],

        pros: [
            "Large industry",
            "Many sectors",
            "Operations leadership"
        ],

        challenges: [
            "Operational pressure",
            "Coordination across teams"
        ],

        suitableFor:
            "Organized problem solvers interested in business operations.",

        demand: "High"
    },

    {
        id: "product-management",
        name: "Product Management",
        title: "Product Manager",
        category: "business",
        stream: "Business",
        icon: "🚀",

        description:
            "Define product strategy, understand customers and coordinate teams to build useful products.",

        education: "Any strong academic background.",
        degree: "Engineering, business, economics, design or related degree.",
        entranceExams: ["CAT", "GMAT", "University Exams"],

        skills: [
            "Product Strategy",
            "User Research",
            "Analytics",
            "Communication",
            "Leadership",
            "Prioritization"
        ],

        beginnerSalary: "₹6 LPA – ₹12 LPA",
        experiencedSalary: "₹15 LPA – ₹40+ LPA",

        famousCompanies: [
            "Google",
            "Microsoft",
            "Amazon",
            "Flipkart",
            "Razorpay",
            "Swiggy"
        ],

        salaryExamples: [
            "Product salaries vary significantly by company and experience",
            "Top technology companies can offer premium compensation"
        ],

        workMode: ["Office", "Hybrid"],

        careerPath: [
            "Associate Product Manager",
            "Product Manager",
            "Senior PM",
            "Group Product Manager",
            "Director of Product"
        ],

        certifications: [
            "Product management certifications",
            "Agile/Scrum"
        ],

        roadmap: [
            "Product fundamentals",
            "User research",
            "Analytics",
            "Roadmapping",
            "Agile",
            "Product strategy"
        ],

        pros: [
            "High-impact role",
            "Combines business and technology",
            "Strong salary potential"
        ],

        challenges: [
            "High responsibility",
            "Stakeholder management"
        ],

        suitableFor:
            "People who enjoy technology, business, users and leadership.",

        demand: "Very High"
    },

    {
        id: "digital-marketing",
        name: "Digital Marketing",
        title: "Digital Marketing Specialist",
        category: "business",
        stream: "Business",
        icon: "📱",

        description:
            "Use search, social media, advertising and content to reach digital audiences.",

        education: "10+2 from any stream.",
        degree: "BBA, B.Com, BA or any bachelor's degree.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "SEO",
            "Google Ads",
            "Social Media",
            "Analytics",
            "Content Marketing",
            "Email Marketing"
        ],

        beginnerSalary: "₹2.5 LPA – ₹6 LPA",
        experiencedSalary: "₹8 LPA – ₹20+ LPA",

        famousCompanies: [
            "Google",
            "Meta",
            "Amazon",
            "Deloitte",
            "Accenture",
            "Publicis"
        ],

        salaryExamples: [
            "Entry salaries vary widely between agencies and product companies",
            "Performance marketing specialists can progress quickly"
        ],

        workMode: ["Office", "Hybrid", "Remote"],

        careerPath: [
            "Digital Marketing Executive",
            "Specialist",
            "Marketing Manager",
            "Growth Manager",
            "Marketing Director"
        ],

        certifications: [
            "Google Ads",
            "Google Analytics",
            "Meta Blueprint"
        ],

        roadmap: [
            "Marketing",
            "SEO",
            "Paid advertising",
            "Social media",
            "Analytics",
            "Content",
            "Conversion optimization"
        ],

        pros: [
            "Accessible entry",
            "Freelancing",
            "Creative work"
        ],

        challenges: [
            "Rapid platform changes",
            "Performance pressure"
        ],

        suitableFor:
            "Creative people who enjoy business, communication and digital platforms.",

        demand: "Very High"
    },

    {
        id: "project-management",
        name: "Project Management",
        title: "Project Manager",
        category: "business",
        stream: "Business",
        icon: "📋",

        description:
            "Plan and coordinate projects, people, budgets and timelines to deliver successful outcomes.",

        education: "Any bachelor's degree is useful.",
        degree: "Business, engineering, IT or related degree.",
        entranceExams: ["CUET", "CAT", "University Exams"],

        skills: [
            "Planning",
            "Leadership",
            "Communication",
            "Risk Management",
            "Agile",
            "Budgeting"
        ],

        beginnerSalary: "₹4 LPA – ₹8 LPA",
        experiencedSalary: "₹10 LPA – ₹30+ LPA",

        famousCompanies: [
            "TCS",
            "Infosys",
            "Accenture",
            "Deloitte",
            "Amazon",
            "Microsoft"
        ],

        salaryExamples: [
            "Project coordinator roles commonly start around ₹3–6 LPA",
            "Experienced project managers can earn ₹10 LPA+"
        ],

        workMode: ["Office", "Hybrid"],

        careerPath: [
            "Project Coordinator",
            "Project Manager",
            "Senior PM",
            "Program Manager",
            "Portfolio Manager"
        ],

        certifications: [
            "PMP",
            "PRINCE2",
            "Scrum Master"
        ],

        roadmap: [
            "Project fundamentals",
            "Agile",
            "Planning",
            "Risk management",
            "Stakeholder management",
            "Certification"
        ],

        pros: [
            "Transferable across industries",
            "Leadership opportunities"
        ],

        challenges: [
            "Deadline pressure",
            "Stakeholder conflicts"
        ],

        suitableFor:
            "Organized leaders who enjoy coordinating people and projects.",

        demand: "High"
    },

    {
        id: "economics",
        name: "Economics",
        title: "Economist",
        category: "business",
        stream: "Business",
        icon: "📉",

        description:
            "Study markets, policies, businesses and economic behavior using data and analytical methods.",

        education: "10+2 with Mathematics strongly recommended.",
        degree: "BA Economics, B.Sc Economics, MA Economics, MBA or related.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Economics",
            "Statistics",
            "Research",
            "Data Analysis",
            "Excel",
            "Econometrics"
        ],

        beginnerSalary: "₹3 LPA – ₹7 LPA",
        experiencedSalary: "₹8 LPA – ₹25+ LPA",

        famousCompanies: [
            "RBI",
            "NITI Aayog",
            "World Bank",
            "Deloitte",
            "EY",
            "McKinsey"
        ],

        salaryExamples: [
            "Economics roles vary substantially by sector",
            "Research and policy roles often benefit from postgraduate education"
        ],

        workMode: ["Office", "Research", "Hybrid"],

        careerPath: [
            "Research Analyst",
            "Economist",
            "Senior Economist",
            "Economic Advisor",
            "Policy Director"
        ],

        certifications: [
            "MA Economics",
            "Econometrics specialization"
        ],

        roadmap: [
            "Microeconomics",
            "Macroeconomics",
            "Statistics",
            "Econometrics",
            "Research",
            "Data analysis"
        ],

        pros: [
            "Useful in government and business",
            "Strong analytical foundation"
        ],

        challenges: [
            "Advanced roles may require postgraduate study",
            "Mathematics can be demanding"
        ],

        suitableFor:
            "Students interested in markets, policy and analytical thinking.",

        demand: "High"
    },


    /* =====================================================
       CREATIVE - 15
    ===================================================== */

    {
        id: "graphic-design",
        name: "Graphic Design",
        title: "Graphic Designer",
        category: "creative",
        stream: "Creative",
        icon: "🎨",

        description:
            "Create visual communication for brands, products, publications and digital platforms.",

        education: "10+2 from any stream.",
        degree: "B.Des, BFA or design-related degree; portfolio is highly important.",
        entranceExams: ["NID DAT", "UCEED", "CUET"],

        skills: [
            "Photoshop",
            "Illustrator",
            "Typography",
            "Branding",
            "Layout",
            "Visual Communication"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹6 LPA – ₹18+ LPA",

        famousCompanies: [
            "Adobe",
            "Canva",
            "Google",
            "Microsoft",
            "Ogilvy",
            "WPP"
        ],

        salaryExamples: [
            "Entry design salaries vary widely by agency and company",
            "Strong portfolios can improve opportunities",
            "Freelancing can provide additional income"
        ],

        workMode: ["Office", "Hybrid", "Remote", "Freelance"],

        careerPath: [
            "Junior Designer",
            "Graphic Designer",
            "Senior Designer",
            "Art Director",
            "Creative Director"
        ],

        certifications: [
            "Adobe certifications",
            "Graphic design programs"
        ],

        roadmap: [
            "Design principles",
            "Typography",
            "Color",
            "Photoshop",
            "Illustrator",
            "Branding",
            "Portfolio"
        ],

        pros: [
            "Creative freedom",
            "Freelancing",
            "Portfolio-based career"
        ],

        challenges: [
            "Client revisions",
            "Competitive market"
        ],

        suitableFor:
            "Visual thinkers who enjoy art, branding and communication.",

        demand: "High"
    },

    {
        id: "animation",
        name: "Animation",
        title: "Animator",
        category: "creative",
        stream: "Creative",
        icon: "🎬",

        description:
            "Create animated visuals for films, games, advertising and digital media.",

        education: "10+2 from any stream.",
        degree: "B.Des, BFA, Animation degree or specialized training.",
        entranceExams: ["NID DAT", "UCEED", "University Exams"],

        skills: [
            "Drawing",
            "Animation",
            "Storyboarding",
            "3D Software",
            "Motion",
            "Visual Storytelling"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹6 LPA – ₹20+ LPA",

        famousCompanies: [
            "Disney",
            "Pixar",
            "DreamWorks",
            "Technicolor",
            "Sony Pictures"
        ],

        salaryExamples: [
            "Animation salaries depend heavily on portfolio and studio",
            "Senior and international roles can pay significantly more"
        ],

        workMode: ["Studio", "Hybrid", "Freelance"],

        careerPath: [
            "Junior Animator",
            "Animator",
            "Senior Animator",
            "Animation Lead",
            "Animation Director"
        ],

        certifications: [
            "Maya",
            "Blender",
            "Adobe After Effects"
        ],

        roadmap: [
            "Drawing",
            "Animation principles",
            "2D/3D tools",
            "Storyboarding",
            "Character animation",
            "Portfolio"
        ],

        pros: [
            "Highly creative",
            "Film and gaming opportunities"
        ],

        challenges: [
            "Long production schedules",
            "Skill-intensive"
        ],

        suitableFor:
            "Creative people passionate about motion and storytelling.",

        demand: "High"
    },

    {
        id: "film-making",
        name: "Film Making",
        title: "Filmmaker",
        category: "creative",
        stream: "Creative",
        icon: "🎥",

        description:
            "Create films, advertisements, documentaries and digital video content.",

        education: "10+2 from any stream.",
        degree: "Film school, mass communication, media studies or practical training.",
        entranceExams: ["FTII Entrance", "CUET", "University Exams"],

        skills: [
            "Storytelling",
            "Direction",
            "Cinematography",
            "Editing",
            "Production",
            "Communication"
        ],

        beginnerSalary: "₹2.5 LPA – ₹6 LPA",
        experiencedSalary: "₹8 LPA – ₹30+ LPA",

        famousCompanies: [
            "Netflix",
            "Amazon MGM",
            "Disney",
            "Warner Bros.",
            "Sony Pictures"
        ],

        salaryExamples: [
            "Freelance and project-based income is common",
            "Income varies dramatically by production and reputation"
        ],

        workMode: ["Studio", "On Location", "Freelance"],

        careerPath: [
            "Production Assistant",
            "Assistant Director",
            "Director",
            "Producer",
            "Creative Director"
        ],

        certifications: [
            "Film school",
            "Editing certifications"
        ],

        roadmap: [
            "Storytelling",
            "Film language",
            "Camera",
            "Editing",
            "Production",
            "Short films",
            "Portfolio"
        ],

        pros: [
            "Creative freedom",
            "Large entertainment industry"
        ],

        challenges: [
            "Irregular work",
            "Highly competitive",
            "Project-based income"
        ],

        suitableFor:
            "Storytellers interested in film, video and production.",

        demand: "High"
    },

    {
        id: "photography",
        name: "Photography",
        title: "Photographer",
        category: "creative",
        stream: "Creative",
        icon: "📷",

        description:
            "Create professional photographs for brands, media, events and personal clients.",

        education: "No specific degree required.",
        degree: "Photography, fine arts, visual communication or practical training.",
        entranceExams: ["Not usually required"],

        skills: [
            "Camera",
            "Lighting",
            "Composition",
            "Photoshop",
            "Lightroom",
            "Client Management"
        ],

        beginnerSalary: "₹2 LPA – ₹5 LPA",
        experiencedSalary: "₹6 LPA – ₹20+ LPA",

        famousCompanies: [
            "Getty Images",
            "Shutterstock",
            "Condé Nast",
            "National Geographic"
        ],

        salaryExamples: [
            "Freelance photographers often charge per project",
            "Commercial photography can pay significantly more than entry-level roles"
        ],

        workMode: ["Freelance", "Studio", "On Location"],

        careerPath: [
            "Assistant Photographer",
            "Photographer",
            "Senior Photographer",
            "Commercial Photographer",
            "Creative Director"
        ],

        certifications: [
            "Photography courses",
            "Adobe certifications"
        ],

        roadmap: [
            "Camera fundamentals",
            "Composition",
            "Lighting",
            "Editing",
            "Portfolio",
            "Client acquisition"
        ],

        pros: [
            "Creative independence",
            "Freelancing",
            "Multiple niches"
        ],

        challenges: [
            "Irregular income",
            "Equipment costs"
        ],

        suitableFor:
            "Visual storytellers who enjoy cameras and creative work.",

        demand: "Medium-High"
    },

    {
        id: "content-creation",
        name: "Content Creation",
        title: "Content Creator",
        category: "creative",
        stream: "Creative",
        icon: "🎙️",

        description:
            "Create educational, entertainment or promotional content for digital audiences.",

        education: "No specific degree required.",
        degree: "Any degree can be useful; practical skills matter most.",
        entranceExams: ["Not required"],

        skills: [
            "Communication",
            "Video Editing",
            "Writing",
            "Social Media",
            "Storytelling",
            "Branding"
        ],

        beginnerSalary: "Highly variable",
        experiencedSalary: "Highly variable",

        famousCompanies: [
            "YouTube",
            "Instagram",
            "Spotify",
            "Netflix",
            "LinkedIn"
        ],

        salaryExamples: [
            "Creator income varies dramatically",
            "Income can come from sponsorships, ads, products and memberships"
        ],

        workMode: ["Remote", "Freelance"],

        careerPath: [
            "Creator",
            "Specialist Creator",
            "Content Strategist",
            "Creator Business Owner"
        ],

        certifications: [
            "Video editing",
            "Digital marketing"
        ],

        roadmap: [
            "Niche selection",
            "Content strategy",
            "Video/audio production",
            "Editing",
            "Audience building",
            "Monetization"
        ],

        pros: [
            "High creative freedom",
            "Global audience",
            "Multiple income sources"
        ],

        challenges: [
            "Uncertain income",
            "Algorithm dependence"
        ],

        suitableFor:
            "Creative communicators who enjoy publishing content.",

        demand: "High"
    },

    {
        id: "fashion-design",
        name: "Fashion Design",
        title: "Fashion Designer",
        category: "creative",
        stream: "Creative",
        icon: "👗",

        description:
            "Design clothing, accessories and fashion collections for consumers and brands.",

        education: "10+2 from any stream.",
        degree: "B.Des Fashion Design, B.FTech or related program.",
        entranceExams: ["NIFT", "NID DAT", "UCEED"],

        skills: [
            "Sketching",
            "Textiles",
            "Fashion Trends",
            "Pattern Making",
            "Branding"
        ],

        beginnerSalary: "₹2.5 LPA – ₹6 LPA",
        experiencedSalary: "₹7 LPA – ₹25+ LPA",

        famousCompanies: [
            "Aditya Birla Fashion",
            "Myntra",
            "H&M",
            "Zara",
            "Nike"
        ],

        salaryExamples: [
            "Fashion salaries vary by brand and specialization",
            "Own-label businesses have highly variable income"
        ],

        workMode: ["Studio", "Office", "Freelance"],

        careerPath: [
            "Design Assistant",
            "Fashion Designer",
            "Senior Designer",
            "Design Head",
            "Creative Director"
        ],

        certifications: [
            "Fashion design",
            "Textile specialization"
        ],

        roadmap: [
            "Drawing",
            "Fashion fundamentals",
            "Textiles",
            "Pattern making",
            "Collection development",
            "Portfolio"
        ],

        pros: [
            "Creative career",
            "Brand opportunities",
            "Entrepreneurship"
        ],

        challenges: [
            "Competitive industry",
            "Trend pressure"
        ],

        suitableFor:
            "Students passionate about clothing, visual design and trends.",

        demand: "High"
    },

    {
        id: "interior-design",
        name: "Interior Design",
        title: "Interior Designer",
        category: "creative",
        stream: "Creative",
        icon: "🏠",

        description:
            "Design functional and visually appealing interiors for homes, offices and commercial spaces.",

        education: "10+2 from any stream.",
        degree: "B.Des Interior Design, B.Arch, diploma or related degree.",
        entranceExams: ["NID DAT", "UCEED", "University Exams"],

        skills: [
            "Space Planning",
            "AutoCAD",
            "3D Modeling",
            "Materials",
            "Color",
            "Client Management"
        ],

        beginnerSalary: "₹2.5 LPA – ₹6 LPA",
        experiencedSalary: "₹7 LPA – ₹25+ LPA",

        famousCompanies: [
            "Asian Paints",
            "Godrej",
            "Livspace",
            "IKEA",
            "DLF"
        ],

        salaryExamples: [
            "Interior designers may earn through salary or project fees",
            "Independent practice can significantly change income"
        ],

        workMode: ["Studio", "On Site", "Freelance"],

        careerPath: [
            "Junior Designer",
            "Interior Designer",
            "Senior Designer",
            "Design Lead",
            "Studio Owner"
        ],

        certifications: [
            "AutoCAD",
            "3D visualization",
            "Interior design programs"
        ],

        roadmap: [
            "Design principles",
            "Space planning",
            "CAD",
            "3D modeling",
            "Materials",
            "Portfolio"
        ],

        pros: [
            "Creative + practical",
            "Freelance opportunities"
        ],

        challenges: [
            "Client management",
            "Project deadlines"
        ],

        suitableFor:
            "Creative people who enjoy spaces, architecture and visual design.",

        demand: "High"
    },

    {
        id: "ux-research",
        name: "UX Research",
        title: "UX Researcher",
        category: "creative",
        stream: "Creative",
        icon: "🔎",

        description:
            "Study user behavior and needs to help teams create better digital products.",

        education: "10+2 from any stream.",
        degree: "Psychology, design, HCI, sociology, business or related fields.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "User Interviews",
            "Research",
            "Usability Testing",
            "Data Analysis",
            "Communication"
        ],

        beginnerSalary: "₹4 LPA – ₹8 LPA",
        experiencedSalary: "₹10 LPA – ₹30+ LPA",

        famousCompanies: [
            "Google",
            "Microsoft",
            "Amazon",
            "Adobe",
            "Meta"
        ],

        salaryExamples: [
            "Product-company UX research roles can pay well above agency roles",
            "Research experience and strong portfolios are important"
        ],

        workMode: ["Office", "Hybrid", "Remote"],

        careerPath: [
            "UX Researcher",
            "Senior UX Researcher",
            "Research Lead",
            "Research Manager",
            "Head of Research"
        ],

        certifications: [
            "Google UX",
            "HCI courses"
        ],

        roadmap: [
            "Research methods",
            "User interviews",
            "Usability testing",
            "Data analysis",
            "Research reports",
            "Portfolio"
        ],

        pros: [
            "Human-centered work",
            "Strong technology opportunities"
        ],

        challenges: [
            "Recruiting users",
            "Research ambiguity"
        ],

        suitableFor:
            "Curious people interested in psychology, technology and user behavior.",

        demand: "High"
    },

    {
        id: "motion-graphics",
        name: "Motion Graphics",
        title: "Motion Graphics Designer",
        category: "creative",
        stream: "Creative",
        icon: "✨",

        description:
            "Create animated graphics and visual effects for digital media, advertising and video.",

        education: "10+2 from any stream.",
        degree: "Design, animation, media or practical training.",
        entranceExams: ["NID DAT", "UCEED", "University Exams"],

        skills: [
            "After Effects",
            "Premiere Pro",
            "Typography",
            "Animation",
            "Compositing"
        ],

        beginnerSalary: "₹2.5 LPA – ₹6 LPA",
        experiencedSalary: "₹7 LPA – ₹20+ LPA",

        famousCompanies: [
            "Adobe",
            "Netflix",
            "Disney",
            "WPP",
            "Ogilvy"
        ],

        salaryExamples: [
            "Studio and freelance rates vary considerably",
            "Specialized motion designers can command premium project fees"
        ],

        workMode: ["Studio", "Hybrid", "Freelance"],

        careerPath: [
            "Junior Motion Designer",
            "Motion Designer",
            "Senior Designer",
            "Art Director"
        ],

        certifications: [
            "Adobe After Effects",
            "Motion design courses"
        ],

        roadmap: [
            "Design fundamentals",
            "Motion principles",
            "After Effects",
            "Editing",
            "Compositing",
            "Portfolio"
        ],

        pros: [
            "Highly creative",
            "Advertising and media opportunities"
        ],

        challenges: [
            "Deadline-heavy",
            "Long editing sessions"
        ],

        suitableFor:
            "Visual designers who enjoy animation and video.",

        demand: "High"
    },

    {
        id: "copywriting",
        name: "Copywriting",
        title: "Copywriter",
        category: "creative",
        stream: "Creative",
        icon: "✍️",

        description:
            "Write persuasive text for advertisements, websites, products and brands.",

        education: "10+2 from any stream.",
        degree: "English, Journalism, Marketing, Mass Communication or any degree.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Writing",
            "Storytelling",
            "Advertising",
            "Research",
            "Psychology",
            "Editing"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹7 LPA – ₹20+ LPA",

        famousCompanies: [
            "Ogilvy",
            "WPP",
            "Dentsu",
            "Google",
            "Amazon"
        ],

        salaryExamples: [
            "Agency and in-house salaries differ",
            "Freelance copywriters can charge per project"
        ],

        workMode: ["Office", "Remote", "Freelance"],

        careerPath: [
            "Junior Copywriter",
            "Copywriter",
            "Senior Copywriter",
            "Creative Director"
        ],

        certifications: [
            "Copywriting courses",
            "Digital marketing"
        ],

        roadmap: [
            "Writing",
            "Advertising",
            "Consumer psychology",
            "SEO",
            "Portfolio"
        ],

        pros: [
            "Low-cost entry",
            "Remote and freelance opportunities"
        ],

        challenges: [
            "Constant idea generation",
            "Client revisions"
        ],

        suitableFor:
            "Strong writers who enjoy persuasion and storytelling.",

        demand: "High"
    },

    {
        id: "video-editing",
        name: "Video Editing",
        title: "Video Editor",
        category: "creative",
        stream: "Creative",
        icon: "🎞️",

        description:
            "Transform raw footage into engaging videos for films, brands, creators and digital media.",

        education: "No specific degree required.",
        degree: "Film, media, animation or practical training.",
        entranceExams: ["Not required"],

        skills: [
            "Premiere Pro",
            "DaVinci Resolve",
            "After Effects",
            "Storytelling",
            "Sound Editing"
        ],

        beginnerSalary: "₹2.5 LPA – ₹6 LPA",
        experiencedSalary: "₹7 LPA – ₹20+ LPA",

        famousCompanies: [
            "Netflix",
            "YouTube",
            "Disney",
            "Amazon",
            "Sony Pictures"
        ],

        salaryExamples: [
            "Freelance rates vary by project",
            "Experienced editors can work with international clients"
        ],

        workMode: ["Remote", "Studio", "Freelance"],

        careerPath: [
            "Junior Editor",
            "Video Editor",
            "Senior Editor",
            "Post-production Supervisor",
            "Creative Director"
        ],

        certifications: [
            "Adobe Premiere Pro",
            "DaVinci Resolve"
        ],

        roadmap: [
            "Editing basics",
            "Storytelling",
            "Premiere/Resolve",
            "Audio",
            "Color",
            "Motion graphics",
            "Portfolio"
        ],

        pros: [
            "Strong creator economy",
            "Freelance opportunities"
        ],

        challenges: [
            "Long screen hours",
            "Deadline pressure"
        ],

        suitableFor:
            "People who enjoy storytelling through video.",

        demand: "Very High"
    },

    {
        id: "architecture",
        name: "Architecture",
        title: "Architect",
        category: "creative",
        stream: "Creative",
        icon: "🏛️",

        description:
            "Design buildings and spaces while considering structure, function and aesthetics.",

        education: "10+2 with Mathematics.",
        degree: "B.Arch.",
        entranceExams: ["NATA", "JEE Main Paper 2"],

        skills: [
            "Design",
            "AutoCAD",
            "3D Modeling",
            "Architecture",
            "Drawing",
            "Building Science"
        ],

        beginnerSalary: "₹3 LPA – ₹6 LPA",
        experiencedSalary: "₹8 LPA – ₹25+ LPA",

        famousCompanies: [
            "Hafeez Contractor",
            "SOM",
            "Gensler",
            "AECOM",
            "Larsen & Toubro"
        ],

        salaryExamples: [
            "Architecture salaries vary by firm and experience",
            "Independent practice has highly variable income"
        ],

        workMode: ["Studio", "Site", "Office"],

        careerPath: [
            "Architectural Intern",
            "Junior Architect",
            "Architect",
            "Senior Architect",
            "Principal Architect"
        ],

        certifications: [
            "Registered Architect",
            "Revit",
            "AutoCAD"
        ],

        roadmap: [
            "NATA/JEE",
            "B.Arch",
            "Design studio",
            "Software",
            "Internship",
            "Professional practice"
        ],

        pros: [
            "Creative + technical",
            "Long-term professional career"
        ],

        challenges: [
            "Long education",
            "Project deadlines"
        ],

        suitableFor:
            "Students interested in buildings, design and technical drawing.",

        demand: "High"
    },

    {
        id: "illustration",
        name: "Illustration",
        title: "Illustrator",
        category: "creative",
        stream: "Creative",
        icon: "🖌️",

        description:
            "Create original visual artwork for books, brands, games, media and digital products.",

        education: "10+2 from any stream.",
        degree: "BFA, B.Des or specialized illustration training.",
        entranceExams: ["NID DAT", "UCEED", "University Exams"],

        skills: [
            "Drawing",
            "Digital Illustration",
            "Color",
            "Composition",
            "Procreate",
            "Photoshop"
        ],

        beginnerSalary: "₹2 LPA – ₹5 LPA",
        experiencedSalary: "₹6 LPA – ₹20+ LPA",

        famousCompanies: [
            "Adobe",
            "Disney",
            "Pixar",
            "Penguin Random House",
            "Canva"
        ],

        salaryExamples: [
            "Illustrators often work freelance or project-based",
            "Specialized commercial illustration can command premium rates"
        ],

        workMode: ["Remote", "Studio", "Freelance"],

        careerPath: [
            "Illustrator",
            "Senior Illustrator",
            "Art Director",
            "Creative Director"
        ],

        certifications: [
            "Digital illustration",
            "Adobe certifications"
        ],

        roadmap: [
            "Drawing",
            "Visual fundamentals",
            "Digital tools",
            "Style development",
            "Portfolio",
            "Client work"
        ],

        pros: [
            "Creative independence",
            "Global freelance market"
        ],

        challenges: [
            "Income can fluctuate",
            "Portfolio competition"
        ],

        suitableFor:
            "Artists who want to turn drawing and visual storytelling into a career.",

        demand: "Medium-High"
    },


    /* =====================================================
       EDUCATION - 15
    ===================================================== */

    {
        id: "school-teacher",
        name: "School Teaching",
        title: "School Teacher",
        category: "education",
        stream: "Education",
        icon: "👩‍🏫",

        description:
            "Teach school students, develop lessons and support academic growth.",

        education: "10+2 followed by teacher education.",
        degree: "B.Ed, D.El.Ed or integrated teacher education.",
        entranceExams: ["CTET", "State TET", "CUET"],

        skills: [
            "Teaching",
            "Communication",
            "Classroom Management",
            "Subject Knowledge",
            "Assessment"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹5 LPA – ₹12+ LPA",

        famousCompanies: [
            "Delhi Public School",
            "Kendriya Vidyalaya",
            "DAV Schools",
            "Ryan International"
        ],

        salaryExamples: [
            "Government and private school salaries differ",
            "Experience and qualifications improve progression"
        ],

        workMode: ["School"],

        careerPath: [
            "Teacher",
            "Senior Teacher",
            "Coordinator",
            "Vice Principal",
            "Principal"
        ],

        certifications: [
            "B.Ed",
            "CTET",
            "State TET"
        ],

        roadmap: [
            "Subject expertise",
            "Teacher education",
            "Teaching practice",
            "TET preparation",
            "Classroom management"
        ],

        pros: [
            "Meaningful social impact",
            "Stable career",
            "Long-term growth"
        ],

        challenges: [
            "Large classrooms",
            "Administrative work"
        ],

        suitableFor:
            "People who enjoy teaching, children and communication.",

        demand: "High"
    },

    {
        id: "college-professor",
        name: "Higher Education",
        title: "College Professor",
        category: "education",
        stream: "Education",
        icon: "🎓",

        description:
            "Teach undergraduate and postgraduate students while contributing to academic research.",

        education: "Bachelor's followed by postgraduate study.",
        degree: "Master's + NET/SET; PhD is important for many academic careers.",
        entranceExams: ["CUET-PG", "UGC NET", "University Exams"],

        skills: [
            "Subject Expertise",
            "Research",
            "Teaching",
            "Academic Writing",
            "Presentation"
        ],

        beginnerSalary: "₹4 LPA – ₹8 LPA",
        experiencedSalary: "₹10 LPA – ₹25+ LPA",

        famousCompanies: [
            "IITs",
            "IIMs",
            "Delhi University",
            "JNU",
            "Private Universities"
        ],

        salaryExamples: [
            "Government academic pay follows applicable pay structures",
            "Private institutions vary significantly"
        ],

        workMode: ["College", "University", "Research"],

        careerPath: [
            "Assistant Professor",
            "Associate Professor",
            "Professor",
            "Head of Department",
            "Dean"
        ],

        certifications: [
            "UGC NET",
            "PhD"
        ],

        roadmap: [
            "Bachelor's",
            "Master's",
            "NET/SET",
            "Research",
            "PhD",
            "Teaching"
        ],

        pros: [
            "Academic freedom",
            "Research opportunities",
            "Social impact"
        ],

        challenges: [
            "Long qualification path",
            "Research pressure"
        ],

        suitableFor:
            "Students passionate about a subject, research and teaching.",

        demand: "High"
    },

    {
        id: "online-teacher",
        name: "Online Teaching",
        title: "Online Educator",
        category: "education",
        stream: "Education",
        icon: "💻",

        description:
            "Teach students through online classes, courses, tutoring and educational content.",

        education: "Subject expertise is essential.",
        degree: "Relevant bachelor's/master's degree recommended.",
        entranceExams: ["Not always required"],

        skills: [
            "Teaching",
            "Communication",
            "Video Creation",
            "Digital Tools",
            "Presentation"
        ],

        beginnerSalary: "₹2.5 LPA – ₹6 LPA",
        experiencedSalary: "₹7 LPA – ₹20+ LPA",

        famousCompanies: [
            "Unacademy",
            "Vedantu",
            "Physics Wallah",
            "BYJU'S",
            "Coursera"
        ],

        salaryExamples: [
            "Income varies by platform, subject and audience",
            "Independent educators may earn through courses and memberships"
        ],

        workMode: ["Remote"],

        careerPath: [
            "Online Tutor",
            "Educator",
            "Senior Educator",
            "Course Creator",
            "Education Entrepreneur"
        ],

        certifications: [
            "Teaching certifications",
            "Subject-specific certifications"
        ],

        roadmap: [
            "Subject expertise",
            "Teaching skills",
            "Digital classroom tools",
            "Content creation",
            "Audience building"
        ],

        pros: [
            "Remote",
            "Flexible",
            "Large potential audience"
        ],

        challenges: [
            "Audience competition",
            "Income can vary"
        ],

        suitableFor:
            "Teachers who enjoy technology and flexible education.",

        demand: "Very High"
    },

    {
        id: "special-education",
        name: "Special Education",
        title: "Special Educator",
        category: "education",
        stream: "Education",
        icon: "❤️",

        description:
            "Support students with disabilities and different learning needs.",

        education: "10+2 followed by special education training.",
        degree: "B.Ed Special Education, M.Ed Special Education.",
        entranceExams: ["University Exams", "CUET"],

        skills: [
            "Teaching",
            "Patience",
            "Communication",
            "Learning Support",
            "Behavior Management"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹6 LPA – ₹12+ LPA",

        famousCompanies: [
            "Specialized Schools",
            "NGOs",
            "Government Schools",
            "Rehabilitation Centers"
        ],

        salaryExamples: [
            "Salary depends on institution and qualification"
        ],

        workMode: ["School", "Special Education Center"],

        careerPath: [
            "Special Educator",
            "Senior Educator",
            "Coordinator",
            "Special Education Consultant"
        ],

        certifications: [
            "B.Ed Special Education",
            "RCI registration where applicable"
        ],

        roadmap: [
            "Education basics",
            "Special education",
            "Child development",
            "Classroom practice",
            "Certification"
        ],

        pros: [
            "Strong social impact",
            "Meaningful work"
        ],

        challenges: [
            "Emotionally demanding",
            "Requires patience"
        ],

        suitableFor:
            "Patient people passionate about inclusive education.",

        demand: "Very High"
    },

    {
        id: "educational-psychology",
        name: "Educational Psychology",
        title: "Educational Psychologist",
        category: "education",
        stream: "Education",
        icon: "🧠",

        description:
            "Study how students learn and use psychology to improve educational outcomes.",

        education: "10+2 from any stream.",
        degree: "BA Psychology followed by MA Psychology/Educational Psychology.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Psychology",
            "Research",
            "Assessment",
            "Communication",
            "Counselling"
        ],

        beginnerSalary: "₹3 LPA – ₹6 LPA",
        experiencedSalary: "₹7 LPA – ₹18+ LPA",

        famousCompanies: [
            "Schools",
            "Universities",
            "Educational NGOs",
            "EdTech Companies"
        ],

        salaryExamples: [
            "Specialized qualifications strongly affect salary"
        ],

        workMode: ["School", "University", "Office"],

        careerPath: [
            "Educational Counselor",
            "Psychologist",
            "Educational Psychologist",
            "Researcher",
            "Consultant"
        ],

        certifications: [
            "MA Psychology",
            "Counselling certifications"
        ],

        roadmap: [
            "Psychology",
            "Learning theory",
            "Research",
            "Assessment",
            "Counselling"
        ],

        pros: [
            "Meaningful educational impact",
            "Research opportunities"
        ],

        challenges: [
            "Requires advanced study",
            "Emotional responsibility"
        ],

        suitableFor:
            "Students interested in psychology and how people learn.",

        demand: "High"
    },

    {
        id: "instructional-design",
        name: "Instructional Design",
        title: "Instructional Designer",
        category: "education",
        stream: "Education",
        icon: "📚",

        description:
            "Design educational courses, training programs and digital learning experiences.",

        education: "10+2 from any stream.",
        degree: "Education, psychology, communication, technology or related field.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Instructional Design",
            "Learning Theory",
            "Storyboarding",
            "Authoring Tools",
            "Communication"
        ],

        beginnerSalary: "₹3 LPA – ₹7 LPA",
        experiencedSalary: "₹8 LPA – ₹20+ LPA",

        famousCompanies: [
            "Coursera",
            "Udemy",
            "Infosys",
            "TCS",
            "Amazon"
        ],

        salaryExamples: [
            "Corporate learning roles can pay more than traditional education roles"
        ],

        workMode: ["Remote", "Hybrid", "Office"],

        careerPath: [
            "Instructional Designer",
            "Senior Designer",
            "Learning Designer",
            "L&D Manager"
        ],

        certifications: [
            "Instructional design",
            "Articulate Storyline"
        ],

        roadmap: [
            "Learning theory",
            "Course design",
            "Storyboarding",
            "Authoring tools",
            "Assessment"
        ],

        pros: [
            "Education + technology",
            "Remote opportunities"
        ],

        challenges: [
            "Balancing pedagogy and business needs"
        ],

        suitableFor:
            "People interested in education, technology and content design.",

        demand: "High"
    },

    {
        id: "curriculum-design",
        name: "Curriculum Design",
        title: "Curriculum Designer",
        category: "education",
        stream: "Education",
        icon: "📖",

        description:
            "Design learning programs, curriculum frameworks and educational materials.",

        education: "Education or subject expertise recommended.",
        degree: "Education, subject specialization, curriculum studies.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Curriculum Planning",
            "Research",
            "Writing",
            "Assessment",
            "Education Technology"
        ],

        beginnerSalary: "₹3 LPA – ₹6 LPA",
        experiencedSalary: "₹7 LPA – ₹18+ LPA",

        famousCompanies: [
            "NCERT",
            "CBSE",
            "Pearson",
            "McGraw Hill",
            "Educational NGOs"
        ],

        salaryExamples: [
            "Salary varies by institution and level"
        ],

        workMode: ["Office", "Hybrid"],

        careerPath: [
            "Curriculum Associate",
            "Curriculum Designer",
            "Senior Designer",
            "Curriculum Lead"
        ],

        certifications: [
            "Curriculum design",
            "Education technology"
        ],

        roadmap: [
            "Pedagogy",
            "Curriculum theory",
            "Assessment",
            "Content design",
            "Education technology"
        ],

        pros: [
            "High educational impact",
            "Research-oriented"
        ],

        challenges: [
            "Detailed planning",
            "Policy constraints"
        ],

        suitableFor:
            "Educators who enjoy designing learning experiences.",

        demand: "High"
    },

    {
        id: "education-administration",
        name: "Education Administration",
        title: "Education Administrator",
        category: "education",
        stream: "Education",
        icon: "🏫",

        description:
            "Manage educational institutions, programs, staff and operations.",

        education: "10+2 from any stream.",
        degree: "Education, management, BBA, MBA, M.Ed.",
        entranceExams: ["CUET", "CAT", "University Exams"],

        skills: [
            "Leadership",
            "Administration",
            "Communication",
            "Budgeting",
            "Planning"
        ],

        beginnerSalary: "₹3 LPA – ₹6 LPA",
        experiencedSalary: "₹8 LPA – ₹20+ LPA",

        famousCompanies: [
            "Delhi Public School",
            "Kendriya Vidyalaya",
            "Universities",
            "EdTech Companies"
        ],

        salaryExamples: [
            "Institution size and position strongly influence salary"
        ],

        workMode: ["School", "College", "Office"],

        careerPath: [
            "Coordinator",
            "Administrator",
            "Vice Principal",
            "Principal",
            "Education Director"
        ],

        certifications: [
            "M.Ed",
            "MBA Education Management"
        ],

        roadmap: [
            "Education",
            "Administration",
            "Leadership",
            "Finance",
            "Operations"
        ],

        pros: [
            "Leadership",
            "Education sector impact"
        ],

        challenges: [
            "Administrative responsibility",
            "Stakeholder management"
        ],

        suitableFor:
            "Organized leaders interested in education.",

        demand: "High"
    },

    {
        id: "academic-counselling",
        name: "Academic Counselling",
        title: "Academic Counselor",
        category: "education",
        stream: "Education",
        icon: "🧭",

        description:
            "Help students choose courses, institutions and academic pathways.",

        education: "10+2 from any stream.",
        degree: "Psychology, education, management or related degree.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Counselling",
            "Communication",
            "Career Awareness",
            "Research",
            "Empathy"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹6 LPA – ₹15+ LPA",

        famousCompanies: [
            "Universities",
            "EdTech Companies",
            "Career Counselling Firms",
            "Schools"
        ],

        salaryExamples: [
            "Private counseling organizations may combine fixed salary and incentives"
        ],

        workMode: ["Office", "Online"],

        careerPath: [
            "Counselor",
            "Senior Counselor",
            "Counselling Manager",
            "Education Consultant"
        ],

        certifications: [
            "Counselling certifications",
            "Career counseling programs"
        ],

        roadmap: [
            "Communication",
            "Education systems",
            "Counselling",
            "Career research",
            "Student assessment"
        ],

        pros: [
            "Direct student impact",
            "Flexible work possibilities"
        ],

        challenges: [
            "High emotional responsibility",
            "Requires current education knowledge"
        ],

        suitableFor:
            "Empathetic communicators who enjoy helping students.",

        demand: "High"
    },

    {
        id: "corporate-training",
        name: "Corporate Training",
        title: "Corporate Trainer",
        category: "education",
        stream: "Education",
        icon: "🎤",

        description:
            "Train employees in technical, professional and workplace skills.",

        education: "Relevant subject expertise.",
        degree: "Any relevant bachelor's/master's degree.",
        entranceExams: ["Not usually required"],

        skills: [
            "Presentation",
            "Teaching",
            "Communication",
            "Training Design",
            "Leadership"
        ],

        beginnerSalary: "₹3 LPA – ₹7 LPA",
        experiencedSalary: "₹8 LPA – ₹25+ LPA",

        famousCompanies: [
            "Infosys",
            "TCS",
            "Accenture",
            "Deloitte",
            "Amazon"
        ],

        salaryExamples: [
            "Specialized technical trainers can earn more",
            "Independent corporate trainers may charge per session"
        ],

        workMode: ["Office", "Hybrid", "Travel"],

        careerPath: [
            "Trainer",
            "Senior Trainer",
            "Learning Specialist",
            "L&D Manager",
            "L&D Director"
        ],

        certifications: [
            "Instructional design",
            "Train-the-trainer certifications"
        ],

        roadmap: [
            "Subject expertise",
            "Presentation",
            "Training design",
            "Facilitation",
            "Learning analytics"
        ],

        pros: [
            "Business + education",
            "Good corporate exposure"
        ],

        challenges: [
            "Presentation pressure",
            "Travel may be required"
        ],

        suitableFor:
            "Strong communicators who enjoy teaching adults.",

        demand: "High"
    },

    {
        id: "edtech-specialist",
        name: "EdTech",
        title: "EdTech Specialist",
        category: "education",
        stream: "Education",
        icon: "💡",

        description:
            "Combine education and technology to build digital learning products and experiences.",

        education: "Any relevant academic background.",
        degree: "Education, technology, design, business or related field.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Education",
            "Technology",
            "Product Thinking",
            "Content",
            "Analytics"
        ],

        beginnerSalary: "₹3 LPA – ₹7 LPA",
        experiencedSalary: "₹8 LPA – ₹25+ LPA",

        famousCompanies: [
            "Coursera",
            "Udemy",
            "Unacademy",
            "Physics Wallah",
            "Khan Academy"
        ],

        salaryExamples: [
            "Product and technology roles within EdTech can pay more than content roles"
        ],

        workMode: ["Remote", "Hybrid", "Office"],

        careerPath: [
            "Education Specialist",
            "Learning Designer",
            "EdTech Product Specialist",
            "Product Manager"
        ],

        certifications: [
            "Instructional design",
            "EdTech courses"
        ],

        roadmap: [
            "Education",
            "Technology",
            "Learning design",
            "Digital content",
            "Product thinking"
        ],

        pros: [
            "Education + technology",
            "Remote opportunities"
        ],

        challenges: [
            "Fast-changing industry",
            "Business pressure"
        ],

        suitableFor:
            "Students who want to improve education using technology.",

        demand: "Very High"
    },

    {
        id: "language-teaching",
        name: "Language Teaching",
        title: "Language Teacher",
        category: "education",
        stream: "Education",
        icon: "🗣️",

        description:
            "Teach languages to school students, adults, professionals or international learners.",

        education: "10+2 followed by relevant education/training.",
        degree: "English, Hindi, foreign language, education or related degree.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Language Fluency",
            "Teaching",
            "Communication",
            "Grammar",
            "Cultural Awareness"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹6 LPA – ₹15+ LPA",

        famousCompanies: [
            "British Council",
            "Duolingo",
            "Preply",
            "Cambly",
            "Schools"
        ],

        salaryExamples: [
            "Online tutors often have flexible and variable income"
        ],

        workMode: ["School", "Online", "Freelance"],

        careerPath: [
            "Language Tutor",
            "Language Teacher",
            "Senior Teacher",
            "Academic Coordinator"
        ],

        certifications: [
            "TESOL",
            "TEFL",
            "Language proficiency certifications"
        ],

        roadmap: [
            "Language mastery",
            "Teaching methods",
            "Certification",
            "Practice",
            "Online teaching"
        ],

        pros: [
            "Flexible",
            "International students",
            "Remote opportunities"
        ],

        challenges: [
            "Income can vary",
            "Requires strong fluency"
        ],

        suitableFor:
            "People who love languages and communication.",

        demand: "High"
    },

    {
        id: "school-counselor",
        name: "School Counseling",
        title: "School Counselor",
        category: "education",
        stream: "Education",
        icon: "💬",

        description:
            "Support students with academic, emotional and personal development needs.",

        education: "10+2 from any stream.",
        degree: "Psychology, counselling, education or related field.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Counselling",
            "Listening",
            "Psychology",
            "Communication",
            "Empathy"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹6 LPA – ₹15+ LPA",

        famousCompanies: [
            "Schools",
            "Universities",
            "Counselling Centers",
            "NGOs"
        ],

        salaryExamples: [
            "Salary depends on institution and qualification"
        ],

        workMode: ["School", "Office"],

        careerPath: [
            "Counselor",
            "Senior Counselor",
            "Lead Counselor",
            "Student Support Director"
        ],

        certifications: [
            "MA Psychology",
            "Counselling certifications"
        ],

        roadmap: [
            "Psychology",
            "Counselling",
            "Child development",
            "Ethics",
            "Practical experience"
        ],

        pros: [
            "Strong social impact",
            "Meaningful work"
        ],

        challenges: [
            "Emotionally demanding",
            "Confidentiality responsibility"
        ],

        suitableFor:
            "Empathetic people who enjoy supporting young people.",

        demand: "High"
    },

    {
        id: "adult-education",
        name: "Adult Education",
        title: "Adult Learning Specialist",
        category: "education",
        stream: "Education",
        icon: "📘",

        description:
            "Design and deliver learning programs for adults, communities and professionals.",

        education: "Relevant bachelor's degree.",
        degree: "Education, psychology, social sciences or related field.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Adult Learning",
            "Teaching",
            "Communication",
            "Training",
            "Program Design"
        ],

        beginnerSalary: "₹3 LPA – ₹6 LPA",
        experiencedSalary: "₹7 LPA – ₹18+ LPA",

        famousCompanies: [
            "NGOs",
            "Universities",
            "Corporate L&D Teams",
            "Skill Development Organizations"
        ],

        salaryExamples: [
            "Salary depends on organization and specialization"
        ],

        workMode: ["Office", "Field", "Hybrid"],

        careerPath: [
            "Learning Facilitator",
            "Adult Learning Specialist",
            "Program Manager",
            "Learning Director"
        ],

        certifications: [
            "Adult learning",
            "Instructional design"
        ],

        roadmap: [
            "Adult learning theory",
            "Training",
            "Program design",
            "Assessment",
            "Facilitation"
        ],

        pros: [
            "Social impact",
            "Corporate opportunities"
        ],

        challenges: [
            "Diverse learner needs",
            "Program constraints"
        ],

        suitableFor:
            "People interested in lifelong learning and professional development.",

        demand: "High"
    },


    /* =====================================================
       SCIENCE - 15
    ===================================================== */

    {
        id: "physics",
        name: "Physics",
        title: "Physicist",
        category: "science",
        stream: "Science",
        icon: "⚛️",

        description:
            "Study matter, energy, forces and the fundamental laws of nature.",

        education: "10+2 with Physics, Chemistry and Mathematics.",
        degree: "B.Sc Physics followed by M.Sc/PhD for research careers.",
        entranceExams: ["CUET", "IISER Aptitude Test", "JEE"],

        skills: [
            "Mathematics",
            "Physics",
            "Programming",
            "Research",
            "Data Analysis"
        ],

        beginnerSalary: "₹3 LPA – ₹7 LPA",
        experiencedSalary: "₹8 LPA – ₹25+ LPA",

        famousCompanies: [
            "ISRO",
            "DRDO",
            "BARC",
            "IITs",
            "Research Institutes"
        ],

        salaryExamples: [
            "Research salaries depend on institution and qualification",
            "Industry roles can differ substantially from academic research"
        ],

        workMode: ["Laboratory", "Research", "Office"],

        careerPath: [
            "Research Assistant",
            "Scientist",
            "Senior Scientist",
            "Principal Scientist",
            "Research Director"
        ],

        certifications: [
            "M.Sc",
            "PhD"
        ],

        roadmap: [
            "Physics",
            "Mathematics",
            "Programming",
            "Laboratory work",
            "Research",
            "Postgraduate study"
        ],

        pros: [
            "Deep scientific knowledge",
            "Research opportunities"
        ],

        challenges: [
            "Advanced roles often require PhD",
            "Long research path"
        ],

        suitableFor:
            "Students fascinated by how the physical world works.",

        demand: "High"
    },

    {
        id: "chemistry",
        name: "Chemistry",
        title: "Chemist",
        category: "science",
        stream: "Science",
        icon: "🧪",

        description:
            "Study substances, chemical reactions and materials for research and industry.",

        education: "10+2 with PCB/PCM.",
        degree: "B.Sc Chemistry, M.Sc Chemistry, PhD for research.",
        entranceExams: ["CUET", "IISER", "University Exams"],

        skills: [
            "Chemistry",
            "Laboratory Techniques",
            "Research",
            "Data Analysis",
            "Safety"
        ],

        beginnerSalary: "₹3 LPA – ₹6 LPA",
        experiencedSalary: "₹7 LPA – ₹20+ LPA",

        famousCompanies: [
            "Tata Chemicals",
            "Dr. Reddy's",
            "Sun Pharma",
            "Reliance",
            "CSIR Labs"
        ],

        salaryExamples: [
            "Pharma and chemical industry salaries vary by specialization"
        ],

        workMode: ["Laboratory", "Industry", "Research"],

        careerPath: [
            "Lab Analyst",
            "Chemist",
            "Research Scientist",
            "Senior Scientist",
            "R&D Manager"
        ],

        certifications: [
            "M.Sc Chemistry",
            "PhD"
        ],

        roadmap: [
            "Chemistry",
            "Laboratory techniques",
            "Research",
            "Instrumentation",
            "Specialization"
        ],

        pros: [
            "Multiple industries",
            "Research opportunities"
        ],

        challenges: [
            "Laboratory safety",
            "Advanced roles require higher study"
        ],

        suitableFor:
            "Students interested in matter, reactions and laboratory work.",

        demand: "High"
    },

    {
        id: "biology",
        name: "Biology",
        title: "Biologist",
        category: "science",
        stream: "Science",
        icon: "🧬",

        description:
            "Study living organisms, biological systems and life processes.",

        education: "10+2 with PCB.",
        degree: "B.Sc Biology/Life Sciences followed by M.Sc/PhD for research.",
        entranceExams: ["CUET", "IISER", "University Exams"],

        skills: [
            "Biology",
            "Research",
            "Laboratory Work",
            "Data Analysis",
            "Scientific Writing"
        ],

        beginnerSalary: "₹3 LPA – ₹6 LPA",
        experiencedSalary: "₹7 LPA – ₹20+ LPA",

        famousCompanies: [
            "CSIR",
            "ICMR",
            "Biocon",
            "Serum Institute",
            "Research Institutes"
        ],

        salaryExamples: [
            "Research roles generally improve with postgraduate qualifications"
        ],

        workMode: ["Laboratory", "Research", "Field"],

        careerPath: [
            "Research Assistant",
            "Biologist",
            "Research Scientist",
            "Senior Scientist",
            "Research Lead"
        ],

        certifications: [
            "M.Sc",
            "PhD"
        ],

        roadmap: [
            "Biology",
            "Laboratory skills",
            "Research methods",
            "Statistics",
            "Specialization"
        ],

        pros: [
            "Research opportunities",
            "Biotechnology applications"
        ],

        challenges: [
            "Higher education often required",
            "Research can be competitive"
        ],

        suitableFor:
            "Students fascinated by living systems and life sciences.",

        demand: "High"
    },

    {
        id: "biotechnology",
        name: "Biotechnology",
        title: "Biotechnologist",
        category: "science",
        stream: "Science",
        icon: "🧬",

        description:
            "Use biological systems to develop products in healthcare, agriculture and industry.",

        education: "10+2 with PCB/PCM.",
        degree: "B.Tech Biotechnology, B.Sc Biotechnology, M.Sc/M.Tech.",
        entranceExams: ["JEE Main", "CUET", "University Exams"],

        skills: [
            "Molecular Biology",
            "Genetics",
            "Laboratory Techniques",
            "Data Analysis",
            "Research"
        ],

        beginnerSalary: "₹3 LPA – ₹7 LPA",
        experiencedSalary: "₹8 LPA – ₹25+ LPA",

        famousCompanies: [
            "Biocon",
            "Serum Institute",
            "Cipla",
            "Dr. Reddy's",
            "Bharat Biotech"
        ],

        salaryExamples: [
            "R&D salaries improve with specialization and postgraduate study"
        ],

        workMode: ["Laboratory", "Research", "Industry"],

        careerPath: [
            "Lab Associate",
            "Biotechnologist",
            "Research Scientist",
            "Senior Scientist",
            "R&D Manager"
        ],

        certifications: [
            "M.Sc",
            "M.Tech",
            "PhD"
        ],

        roadmap: [
            "Biology",
            "Genetics",
            "Molecular biology",
            "Lab techniques",
            "Research",
            "Bioinformatics"
        ],

        pros: [
            "Healthcare applications",
            "Research opportunities"
        ],

        challenges: [
            "Higher study often required",
            "Lab-intensive"
        ],

        suitableFor:
            "Students interested in biology, technology and healthcare research.",

        demand: "Very High"
    },

    {
        id: "microbiology",
        name: "Microbiology",
        title: "Microbiologist",
        category: "science",
        stream: "Science",
        icon: "🦠",

        description:
            "Study microorganisms and their roles in health, environment and industry.",

        education: "10+2 with PCB.",
        degree: "B.Sc Microbiology, M.Sc Microbiology, PhD.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Microbiology",
            "Laboratory Work",
            "Research",
            "Sterilization",
            "Data Analysis"
        ],

        beginnerSalary: "₹3 LPA – ₹6 LPA",
        experiencedSalary: "₹7 LPA – ₹18+ LPA",

        famousCompanies: [
            "Biocon",
            "Serum Institute",
            "Dr. Reddy's",
            "ICMR",
            "CSIR"
        ],

        salaryExamples: [
            "Industrial and research salaries vary by specialization"
        ],

        workMode: ["Laboratory", "Research", "Industry"],

        careerPath: [
            "Lab Technician",
            "Microbiologist",
            "Research Scientist",
            "Senior Scientist"
        ],

        certifications: [
            "M.Sc Microbiology",
            "PhD"
        ],

        roadmap: [
            "Biology",
            "Microbiology",
            "Laboratory techniques",
            "Research",
            "Specialization"
        ],

        pros: [
            "Healthcare and industrial applications",
            "Research opportunities"
        ],

        challenges: [
            "Lab-intensive",
            "Higher qualifications often required"
        ],

        suitableFor:
            "Students interested in microorganisms and laboratory science.",

        demand: "High"
    },

    {
        id: "environmental-science",
        name: "Environmental Science",
        title: "Environmental Scientist",
        category: "science",
        stream: "Science",
        icon: "🌱",

        description:
            "Study environmental systems and develop solutions for pollution and sustainability.",

        education: "10+2 with Science.",
        degree: "B.Sc Environmental Science, Environmental Engineering, M.Sc.",
        entranceExams: ["CUET", "JEE Main", "University Exams"],

        skills: [
            "Environmental Science",
            "Data Analysis",
            "Field Research",
            "GIS",
            "Sustainability"
        ],

        beginnerSalary: "₹3 LPA – ₹6 LPA",
        experiencedSalary: "₹7 LPA – ₹20+ LPA",

        famousCompanies: [
            "Tata Sustainability",
            "TERI",
            "AECOM",
            "Government Departments",
            "NGOs"
        ],

        salaryExamples: [
            "Consulting, government and research salaries differ"
        ],

        workMode: ["Field", "Office", "Laboratory"],

        careerPath: [
            "Environmental Analyst",
            "Environmental Scientist",
            "Consultant",
            "Senior Scientist",
            "Sustainability Manager"
        ],

        certifications: [
            "Environmental management",
            "GIS",
            "Sustainability certifications"
        ],

        roadmap: [
            "Environmental science",
            "Field work",
            "Data",
            "GIS",
            "Environmental regulations",
            "Sustainability"
        ],

        pros: [
            "Growing sustainability sector",
            "Social impact"
        ],

        challenges: [
            "Field work",
            "Regulatory complexity"
        ],

        suitableFor:
            "Students passionate about nature, climate and sustainability.",

        demand: "Very High"
    },

    {
        id: "astronomy",
        name: "Astronomy",
        title: "Astronomer",
        category: "science",
        stream: "Science",
        icon: "🔭",

        description:
            "Study stars, planets, galaxies and the structure of the universe.",

        education: "10+2 with Physics and Mathematics.",
        degree: "Physics/Astronomy degree followed by postgraduate study and often PhD.",
        entranceExams: ["IISER", "JEE", "CUET"],

        skills: [
            "Physics",
            "Mathematics",
            "Programming",
            "Data Analysis",
            "Research"
        ],

        beginnerSalary: "₹4 LPA – ₹8 LPA",
        experiencedSalary: "₹10 LPA – ₹25+ LPA",

        famousCompanies: [
            "ISRO",
            "TIFR",
            "IUCAA",
            "Research Institutes"
        ],

        salaryExamples: [
            "Research careers generally require postgraduate qualifications"
        ],

        workMode: ["Research", "Laboratory", "Observatory"],

        careerPath: [
            "Research Assistant",
            "Astronomer",
            "Research Scientist",
            "Senior Scientist",
            "Professor"
        ],

        certifications: [
            "M.Sc Physics",
            "PhD"
        ],

        roadmap: [
            "Physics",
            "Mathematics",
            "Programming",
            "Astronomy",
            "Research",
            "PhD"
        ],

        pros: [
            "Deep scientific research",
            "Space science opportunities"
        ],

        challenges: [
            "Long academic path",
            "Very competitive"
        ],

        suitableFor:
            "Students fascinated by space, physics and mathematics.",

        demand: "Specialized"
    },

    {
        id: "geology",
        name: "Geology",
        title: "Geologist",
        category: "science",
        stream: "Science",
        icon: "🪨",

        description:
            "Study Earth's structure, rocks, minerals and geological processes.",

        education: "10+2 with Science.",
        degree: "B.Sc Geology, M.Sc Geology, PhD for research.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Geology",
            "Field Research",
            "GIS",
            "Data Analysis",
            "Earth Science"
        ],

        beginnerSalary: "₹3 LPA – ₹7 LPA",
        experiencedSalary: "₹8 LPA – ₹25+ LPA",

        famousCompanies: [
            "ONGC",
            "Geological Survey of India",
            "Coal India",
            "Mining Companies"
        ],

        salaryExamples: [
            "Energy and mining sectors can pay more than academic roles"
        ],

        workMode: ["Field", "Office", "Laboratory"],

        careerPath: [
            "Junior Geologist",
            "Geologist",
            "Senior Geologist",
            "Project Geologist",
            "Geology Manager"
        ],

        certifications: [
            "GIS",
            "M.Sc Geology"
        ],

        roadmap: [
            "Earth science",
            "Geology",
            "Field work",
            "GIS",
            "Data analysis"
        ],

        pros: [
            "Field + science",
            "Energy and mining opportunities"
        ],

        challenges: [
            "Field work",
            "Travel"
        ],

        suitableFor:
            "Students interested in Earth, rocks, resources and field research.",

        demand: "High"
    },

    {
        id: "marine-science",
        name: "Marine Science",
        title: "Marine Scientist",
        category: "science",
        stream: "Science",
        icon: "🌊",

        description:
            "Study oceans, marine organisms and aquatic environments.",

        education: "10+2 with Science.",
        degree: "B.Sc Marine Science, Oceanography, Biology or related degree.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Marine Biology",
            "Research",
            "Field Work",
            "Data Analysis",
            "Environmental Science"
        ],

        beginnerSalary: "₹3 LPA – ₹7 LPA",
        experiencedSalary: "₹8 LPA – ₹20+ LPA",

        famousCompanies: [
            "NIOT",
            "NIO",
            "Government Research Institutes",
            "Environmental Organizations"
        ],

        salaryExamples: [
            "Research and government roles vary by qualification"
        ],

        workMode: ["Research", "Field", "Laboratory"],

        careerPath: [
            "Research Assistant",
            "Marine Scientist",
            "Research Scientist",
            "Senior Scientist"
        ],

        certifications: [
            "M.Sc Marine Science",
            "Diving certifications where relevant"
        ],

        roadmap: [
            "Biology",
            "Ocean science",
            "Field research",
            "Data",
            "Specialization"
        ],

        pros: [
            "Unique scientific career",
            "Environmental impact"
        ],

        challenges: [
            "Field conditions",
            "Specialized opportunities"
        ],

        suitableFor:
            "Students fascinated by oceans and marine ecosystems.",

        demand: "Specialized"
    },

    {
        id: "food-science",
        name: "Food Science",
        title: "Food Technologist",
        category: "science",
        stream: "Science",
        icon: "🍎",

        description:
            "Study food processing, safety, quality and product development.",

        education: "10+2 with Science.",
        degree: "B.Tech Food Technology, B.Sc Food Science, M.Tech/M.Sc.",
        entranceExams: ["JEE Main", "CUET", "University Exams"],

        skills: [
            "Food Chemistry",
            "Quality Control",
            "Food Safety",
            "Product Development",
            "Laboratory Skills"
        ],

        beginnerSalary: "₹3 LPA – ₹6 LPA",
        experiencedSalary: "₹7 LPA – ₹20+ LPA",

        famousCompanies: [
            "Nestlé",
            "PepsiCo",
            "ITC",
            "Britannia",
            "Amul"
        ],

        salaryExamples: [
            "Food industry salaries vary by company and specialization"
        ],

        workMode: ["Laboratory", "Factory", "Office"],

        careerPath: [
            "Quality Analyst",
            "Food Technologist",
            "R&D Scientist",
            "Quality Manager",
            "R&D Manager"
        ],

        certifications: [
            "Food Safety",
            "HACCP",
            "FSSAI-related training"
        ],

        roadmap: [
            "Food science",
            "Chemistry",
            "Processing",
            "Quality",
            "Food safety",
            "Product development"
        ],

        pros: [
            "Large FMCG industry",
            "Product innovation"
        ],

        challenges: [
            "Factory/lab work",
            "Strict safety requirements"
        ],

        suitableFor:
            "Students interested in science, food and product development.",

        demand: "High"
    },

    {
        id: "forensic-science",
        name: "Forensic Science",
        title: "Forensic Scientist",
        category: "science",
        stream: "Science",
        icon: "🔬",

        description:
            "Use scientific techniques to analyze evidence for investigations and legal cases.",

        education: "10+2 with Science.",
        degree: "B.Sc Forensic Science, M.Sc Forensic Science.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Chemistry",
            "Biology",
            "Evidence Analysis",
            "Laboratory Skills",
            "Observation"
        ],

        beginnerSalary: "₹3 LPA – ₹6 LPA",
        experiencedSalary: "₹7 LPA – ₹18+ LPA",

        famousCompanies: [
            "Government Forensic Laboratories",
            "CFSL",
            "State Forensic Labs",
            "Law Enforcement Agencies"
        ],

        salaryExamples: [
            "Government and private forensic salaries vary by role"
        ],

        workMode: ["Laboratory", "Field"],

        careerPath: [
            "Forensic Assistant",
            "Forensic Scientist",
            "Senior Scientist",
            "Forensic Expert"
        ],

        certifications: [
            "M.Sc Forensic Science",
            "Specialized forensic training"
        ],

        roadmap: [
            "Science",
            "Forensics",
            "Laboratory methods",
            "Evidence handling",
            "Specialization"
        ],

        pros: [
            "Interesting scientific work",
            "Investigation connection"
        ],

        challenges: [
            "High accuracy required",
            "Limited specialized openings"
        ],

        suitableFor:
            "Students interested in science, investigation and evidence.",

        demand: "Specialized"
    },

    {
        id: "mathematics",
        name: "Mathematics",
        title: "Mathematician",
        category: "science",
        stream: "Science",
        icon: "➗",

        description:
            "Study mathematical structures, theories and applications across science and technology.",

        education: "10+2 with Mathematics.",
        degree: "B.Sc Mathematics, M.Sc Mathematics, PhD for research.",
        entranceExams: ["CUET", "IISER", "University Exams"],

        skills: [
            "Mathematics",
            "Logic",
            "Proof",
            "Programming",
            "Research"
        ],

        beginnerSalary: "₹3 LPA – ₹7 LPA",
        experiencedSalary: "₹8 LPA – ₹25+ LPA",

        famousCompanies: [
            "Microsoft",
            "Google",
            "Research Institutes",
            "IITs",
            "RBI"
        ],

        salaryExamples: [
            "Applied mathematics can lead to analytics, finance and technology roles",
            "Academic research generally requires postgraduate study"
        ],

        workMode: ["Research", "Office", "Teaching"],

        careerPath: [
            "Research Assistant",
            "Mathematician",
            "Research Scientist",
            "Professor",
            "Quantitative Researcher"
        ],

        certifications: [
            "M.Sc Mathematics",
            "PhD"
        ],

        roadmap: [
            "Calculus",
            "Algebra",
            "Statistics",
            "Programming",
            "Applied mathematics",
            "Research"
        ],

        pros: [
            "Excellent analytical foundation",
            "Many career transitions"
        ],

        challenges: [
            "Abstract concepts",
            "Advanced careers require higher education"
        ],

        suitableFor:
            "Students who genuinely enjoy mathematics and logical reasoning.",

        demand: "High"
    },

    {
        id: "statistics",
        name: "Statistics",
        title: "Statistician",
        category: "science",
        stream: "Science",
        icon: "📐",

        description:
            "Use statistical methods to analyze uncertainty, experiments and data.",

        education: "10+2 with Mathematics.",
        degree: "B.Sc Statistics, M.Sc Statistics, Statistical Science.",
        entranceExams: ["CUET", "University Exams", "ISI Entrance"],

        skills: [
            "Statistics",
            "Probability",
            "R",
            "Python",
            "Data Analysis",
            "Research"
        ],

        beginnerSalary: "₹4 LPA – ₹8 LPA",
        experiencedSalary: "₹10 LPA – ₹30+ LPA",

        famousCompanies: [
            "Google",
            "Amazon",
            "Microsoft",
            "RBI",
            "Government Research Organizations"
        ],

        salaryExamples: [
            "Statistical skills can lead into data science and quantitative finance",
            "Advanced statistics qualifications improve opportunities"
        ],

        workMode: ["Office", "Research", "Hybrid"],

        careerPath: [
            "Statistician",
            "Data Analyst",
            "Data Scientist",
            "Senior Statistician",
            "Quantitative Researcher"
        ],

        certifications: [
            "M.Sc Statistics",
            "Data science certifications"
        ],

        roadmap: [
            "Probability",
            "Statistics",
            "R/Python",
            "Data analysis",
            "Research",
            "Machine learning"
        ],

        pros: [
            "Strong analytical foundation",
            "Many industry applications"
        ],

        challenges: [
            "Mathematics-heavy",
            "Requires analytical discipline"
        ],

        suitableFor:
            "Students who enjoy mathematics, probability and data.",

        demand: "Very High"
    },

    {
        id: "zoology",
        name: "Zoology",
        title: "Zoologist",
        category: "science",
        stream: "Science",
        icon: "🦁",

        description:
            "Study animals, their biology, behavior, evolution and ecosystems.",

        education: "10+2 with PCB.",
        degree: "B.Sc Zoology, M.Sc Zoology, PhD.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Biology",
            "Field Research",
            "Animal Behavior",
            "Data Analysis",
            "Research"
        ],

        beginnerSalary: "₹3 LPA – ₹6 LPA",
        experiencedSalary: "₹7 LPA – ₹18+ LPA",

        famousCompanies: [
            "Zoological Survey of India",
            "Wildlife Organizations",
            "Research Institutes",
            "Government Departments"
        ],

        salaryExamples: [
            "Research and government roles vary by qualification"
        ],

        workMode: ["Field", "Laboratory", "Research"],

        careerPath: [
            "Research Assistant",
            "Zoologist",
            "Wildlife Scientist",
            "Senior Researcher"
        ],

        certifications: [
            "M.Sc Zoology",
            "Wildlife specialization"
        ],

        roadmap: [
            "Biology",
            "Zoology",
            "Field work",
            "Research",
            "Conservation"
        ],

        pros: [
            "Nature-focused",
            "Research and conservation"
        ],

        challenges: [
            "Field conditions",
            "Specialized openings"
        ],

        suitableFor:
            "Students passionate about animals and wildlife.",

        demand: "Specialized"
    },

    {
        id: "botany",
        name: "Botany",
        title: "Botanist",
        category: "science",
        stream: "Science",
        icon: "🌿",

        description:
            "Study plants, plant biology, ecosystems and agricultural applications.",

        education: "10+2 with PCB.",
        degree: "B.Sc Botany, M.Sc Botany, PhD.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Plant Biology",
            "Research",
            "Field Work",
            "Laboratory Techniques",
            "Data Analysis"
        ],

        beginnerSalary: "₹3 LPA – ₹6 LPA",
        experiencedSalary: "₹7 LPA – ₹18+ LPA",

        famousCompanies: [
            "ICAR",
            "CSIR",
            "Research Institutes",
            "Agricultural Organizations"
        ],

        salaryExamples: [
            "Government and research positions vary by qualification"
        ],

        workMode: ["Laboratory", "Field", "Research"],

        careerPath: [
            "Research Assistant",
            "Botanist",
            "Research Scientist",
            "Senior Scientist"
        ],

        certifications: [
            "M.Sc Botany",
            "PhD"
        ],

        roadmap: [
            "Botany",
            "Plant physiology",
            "Field research",
            "Laboratory",
            "Specialization"
        ],

        pros: [
            "Research opportunities",
            "Environmental applications"
        ],

        challenges: [
            "Higher study often required",
            "Field work"
        ],

        suitableFor:
            "Students interested in plants, agriculture and ecosystems.",

        demand: "Specialized"
    },

    {
        id: "agricultural-science",
        name: "Agricultural Science",
        title: "Agricultural Scientist",
        category: "science",
        stream: "Science",
        icon: "🌾",

        description:
            "Apply science and technology to improve crops, soil, farming and food production.",

        education: "10+2 with PCB/PCM/Science depending on program.",
        degree: "B.Sc Agriculture, B.Tech Agricultural Engineering, M.Sc/M.Tech.",
        entranceExams: ["CUET", "ICAR Exams", "State Exams"],

        skills: [
            "Agriculture",
            "Biology",
            "Soil Science",
            "Data",
            "Research"
        ],

        beginnerSalary: "₹3 LPA – ₹7 LPA",
        experiencedSalary: "₹8 LPA – ₹20+ LPA",

        famousCompanies: [
            "ICAR",
            "IFFCO",
            "UPL",
            "Coromandel",
            "Government Agriculture Departments"
        ],

        salaryExamples: [
            "Government, agribusiness and research roles vary"
        ],

        workMode: ["Field", "Laboratory", "Office"],

        careerPath: [
            "Agriculture Officer",
            "Agricultural Scientist",
            "Researcher",
            "Agribusiness Manager"
        ],

        certifications: [
            "Agriculture degree",
            "GIS",
            "Agricultural technology"
        ],

        roadmap: [
            "Agriculture",
            "Soil",
            "Crops",
            "Research",
            "Technology",
            "Field work"
        ],

        pros: [
            "Important national sector",
            "Research + technology"
        ],

        challenges: [
            "Field work",
            "Seasonal conditions"
        ],

        suitableFor:
            "Students interested in farming, biology and sustainable food production.",

        demand: "Very High"
    },


    /* =====================================================
       OTHERS - 15
    ===================================================== */

    {
        id: "law",
        name: "Law",
        title: "Lawyer",
        category: "others",
        stream: "Others",
        icon: "⚖️",

        description:
            "Advise clients, interpret laws and represent individuals or organizations in legal matters.",

        education: "10+2 for integrated law or bachelor's degree for LLB route.",
        degree: "BA LLB, BBA LLB, B.Com LLB, LLB, LLM.",
        entranceExams: ["CLAT", "AILET", "State Law Exams"],

        skills: [
            "Legal Research",
            "Writing",
            "Communication",
            "Negotiation",
            "Critical Thinking"
        ],

        beginnerSalary: "₹3 LPA – ₹8 LPA",
        experiencedSalary: "₹10 LPA – ₹40+ LPA",

        famousCompanies: [
            "Khaitan & Co",
            "Cyril Amarchand Mangaldas",
            "AZB & Partners",
            "Trilegal"
        ],

        salaryExamples: [
            "Law firm compensation varies greatly by firm and practice area",
            "Independent practice has highly variable income"
        ],

        workMode: ["Office", "Court", "Hybrid"],

        careerPath: [
            "Associate",
            "Senior Associate",
            "Partner",
            "Corporate Counsel",
            "Legal Director"
        ],

        certifications: [
            "LLB",
            "Bar enrollment",
            "LLM"
        ],

        roadmap: [
            "Legal fundamentals",
            "Research",
            "Internships",
            "Drafting",
            "Moot courts",
            "Bar enrollment"
        ],

        pros: [
            "Many specializations",
            "Strong professional career"
        ],

        challenges: [
            "Competitive",
            "Long working hours in some firms"
        ],

        suitableFor:
            "Strong readers and communicators interested in law and justice.",

        demand: "High"
    },

    {
        id: "civil-services",
        name: "Civil Services",
        title: "Civil Servant",
        category: "others",
        stream: "Others",
        icon: "🏛️",

        description:
            "Serve in government administration, policy implementation and public service.",

        education: "Graduation in any recognized discipline.",
        degree: "Any bachelor's degree.",
        entranceExams: ["UPSC Civil Services", "State PSC"],

        skills: [
            "General Knowledge",
            "Writing",
            "Reasoning",
            "Leadership",
            "Current Affairs"
        ],

        beginnerSalary: "Government pay-scale based",
        experiencedSalary: "Government pay-scale based",

        famousCompanies: [
            "Government of India",
            "State Governments",
            "UPSC",
            "Public Administration"
        ],

        salaryExamples: [
            "Compensation follows government pay structures and allowances"
        ],

        workMode: ["Government Office", "Field"],

        careerPath: [
            "Civil Services Examination",
            "Officer",
            "Senior Officer",
            "Department Head",
            "Senior Administration"
        ],

        certifications: [
            "UPSC",
            "State PSC"
        ],

        roadmap: [
            "Graduation",
            "UPSC syllabus",
            "Current affairs",
            "General studies",
            "Optional subject",
            "Answer writing"
        ],

        pros: [
            "Public impact",
            "Job stability",
            "Administrative responsibility"
        ],

        challenges: [
            "Extremely competitive",
            "Long preparation"
        ],

        suitableFor:
            "Students interested in public administration and social impact.",

        demand: "Highly Competitive"
    },

    {
        id: "journalism",
        name: "Journalism",
        title: "Journalist",
        category: "others",
        stream: "Others",
        icon: "📰",

        description:
            "Research, investigate and report news and stories for audiences.",

        education: "10+2 from any stream.",
        degree: "BA Journalism, Mass Communication, BJMC.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Writing",
            "Research",
            "Interviewing",
            "Communication",
            "Fact Checking"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹6 LPA – ₹18+ LPA",

        famousCompanies: [
            "The Hindu",
            "Times of India",
            "NDTV",
            "India Today",
            "Reuters"
        ],

        salaryExamples: [
            "Media salaries vary widely by organization and role",
            "Senior journalists and specialized reporters can earn more"
        ],

        workMode: ["Office", "Field", "Hybrid"],

        careerPath: [
            "Reporter",
            "Correspondent",
            "Senior Journalist",
            "Editor",
            "Executive Editor"
        ],

        certifications: [
            "Journalism degree",
            "Digital journalism"
        ],

        roadmap: [
            "Writing",
            "Reporting",
            "Research",
            "Interviewing",
            "Digital media",
            "Portfolio"
        ],

        pros: [
            "Interesting work",
            "Public impact",
            "Varied topics"
        ],

        challenges: [
            "Deadlines",
            "Irregular hours"
        ],

        suitableFor:
            "Curious people who love writing, research and current affairs.",

        demand: "High"
    },

    {
        id: "social-work",
        name: "Social Work",
        title: "Social Worker",
        category: "others",
        stream: "Others",
        icon: "🤝",

        description:
            "Support individuals and communities through social programs and welfare services.",

        education: "10+2 from any stream.",
        degree: "BSW, MSW, Sociology, Psychology or related fields.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Communication",
            "Counselling",
            "Community Work",
            "Research",
            "Empathy"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹6 LPA – ₹15+ LPA",

        famousCompanies: [
            "UNICEF",
            "WHO",
            "Tata Trusts",
            "CRY",
            "NGOs"
        ],

        salaryExamples: [
            "NGO and international organization salaries vary significantly"
        ],

        workMode: ["Field", "Office"],

        careerPath: [
            "Social Worker",
            "Program Officer",
            "Project Manager",
            "Program Director"
        ],

        certifications: [
            "BSW",
            "MSW"
        ],

        roadmap: [
            "Social sciences",
            "Community work",
            "Research",
            "Field experience",
            "Program management"
        ],

        pros: [
            "Strong social impact",
            "Meaningful work"
        ],

        challenges: [
            "Emotionally demanding",
            "Field conditions"
        ],

        suitableFor:
            "Empathetic people interested in community development.",

        demand: "High"
    },

    {
        id: "hospitality",
        name: "Hospitality Management",
        title: "Hotel Manager",
        category: "others",
        stream: "Others",
        icon: "🏨",

        description:
            "Manage hotels, resorts, guest services and hospitality operations.",

        education: "10+2 from any stream.",
        degree: "BHM, Hotel Management or hospitality degree.",
        entranceExams: ["NCHM JEE", "CUET"],

        skills: [
            "Customer Service",
            "Management",
            "Communication",
            "Operations",
            "Leadership"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹7 LPA – ₹20+ LPA",

        famousCompanies: [
            "Taj Hotels",
            "Oberoi Hotels",
            "Marriott",
            "Hyatt",
            "ITC Hotels"
        ],

        salaryExamples: [
            "International hotel chains may offer better compensation",
            "Management positions improve with experience"
        ],

        workMode: ["Hotel", "Resort", "Travel"],

        careerPath: [
            "Management Trainee",
            "Department Manager",
            "Hotel Manager",
            "General Manager"
        ],

        certifications: [
            "Hotel Management",
            "Hospitality certifications"
        ],

        roadmap: [
            "Hospitality basics",
            "Customer service",
            "Operations",
            "Food and beverage",
            "Leadership"
        ],

        pros: [
            "International opportunities",
            "People-focused work"
        ],

        challenges: [
            "Shift work",
            "Customer pressure"
        ],

        suitableFor:
            "Outgoing people who enjoy service, travel and hospitality.",

        demand: "High"
    },

    {
        id: "aviation",
        name: "Aviation Management",
        title: "Airport / Aviation Manager",
        category: "others",
        stream: "Others",
        icon: "✈️",

        description:
            "Manage airport operations, airline services and aviation-related business activities.",

        education: "10+2 from any stream.",
        degree: "BBA Aviation, Aviation Management or related degree.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Operations",
            "Communication",
            "Customer Service",
            "Management",
            "Safety"
        ],

        beginnerSalary: "₹3 LPA – ₹6 LPA",
        experiencedSalary: "₹7 LPA – ₹20+ LPA",

        famousCompanies: [
            "Air India",
            "IndiGo",
            "Vistara",
            "Delhi Airport",
            "Mumbai Airport"
        ],

        salaryExamples: [
            "Airline and airport salaries vary by role and experience"
        ],

        workMode: ["Airport", "Office"],

        careerPath: [
            "Operations Executive",
            "Airport Executive",
            "Manager",
            "Senior Manager",
            "Airport Director"
        ],

        certifications: [
            "Aviation management",
            "Airport operations"
        ],

        roadmap: [
            "Aviation fundamentals",
            "Operations",
            "Customer service",
            "Safety",
            "Management"
        ],

        pros: [
            "Dynamic industry",
            "Travel-related opportunities"
        ],

        challenges: [
            "Shift work",
            "High operational responsibility"
        ],

        suitableFor:
            "People interested in aviation, travel and operations.",

        demand: "High"
    },

    {
        id: "event-management",
        name: "Event Management",
        title: "Event Manager",
        category: "others",
        stream: "Others",
        icon: "🎉",

        description:
            "Plan and execute conferences, weddings, festivals, exhibitions and corporate events.",

        education: "10+2 from any stream.",
        degree: "Event Management, Mass Communication, BBA or any relevant degree.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Planning",
            "Communication",
            "Creativity",
            "Budgeting",
            "Negotiation"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹7 LPA – ₹20+ LPA",

        famousCompanies: [
            "Wizcraft",
            "Percept",
            "BookMyShow",
            "Disney",
            "Corporate Event Agencies"
        ],

        salaryExamples: [
            "Event professionals may work on fixed salary or project fees",
            "Independent event businesses have variable income"
        ],

        workMode: ["Office", "On Location", "Travel"],

        careerPath: [
            "Event Executive",
            "Event Manager",
            "Senior Manager",
            "Event Director",
            "Agency Owner"
        ],

        certifications: [
            "Event management",
            "Project management"
        ],

        roadmap: [
            "Event planning",
            "Budgeting",
            "Vendor management",
            "Marketing",
            "Execution"
        ],

        pros: [
            "Creative",
            "Dynamic",
            "Entrepreneurial opportunities"
        ],

        challenges: [
            "Long hours",
            "Deadline pressure"
        ],

        suitableFor:
            "Organized, energetic people who enjoy events and creativity.",

        demand: "High"
    },

    {
        id: "travel-tourism",
        name: "Travel and Tourism",
        title: "Travel Consultant",
        category: "others",
        stream: "Others",
        icon: "🌍",

        description:
            "Help individuals and organizations plan travel, tours and tourism experiences.",

        education: "10+2 from any stream.",
        degree: "Travel and Tourism, Hospitality, BBA or related degree.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Communication",
            "Travel Planning",
            "Customer Service",
            "Sales",
            "Geography"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹6 LPA – ₹15+ LPA",

        famousCompanies: [
            "MakeMyTrip",
            "Thomas Cook",
            "Booking.com",
            "Expedia",
            "Yatra"
        ],

        salaryExamples: [
            "Travel roles may include sales incentives",
            "Specialized corporate travel can pay more"
        ],

        workMode: ["Office", "Remote", "Travel"],

        careerPath: [
            "Travel Consultant",
            "Senior Consultant",
            "Travel Manager",
            "Tourism Manager"
        ],

        certifications: [
            "Travel certifications",
            "IATA-related training"
        ],

        roadmap: [
            "Travel industry",
            "Customer service",
            "Booking systems",
            "Sales",
            "Destination knowledge"
        ],

        pros: [
            "Travel exposure",
            "Customer interaction"
        ],

        challenges: [
            "Seasonal demand",
            "Customer pressure"
        ],

        suitableFor:
            "People who love travel, geography and helping customers.",

        demand: "High"
    },

    {
        id: "sports-management",
        name: "Sports Management",
        title: "Sports Manager",
        category: "others",
        stream: "Others",
        icon: "🏆",

        description:
            "Manage sports teams, events, athletes, sponsorships and sports businesses.",

        education: "10+2 from any stream.",
        degree: "Sports Management, BBA, MBA or related field.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Management",
            "Marketing",
            "Communication",
            "Event Planning",
            "Negotiation"
        ],

        beginnerSalary: "₹3 LPA – ₹6 LPA",
        experiencedSalary: "₹7 LPA – ₹20+ LPA",

        famousCompanies: [
            "IPL Teams",
            "JSW Sports",
            "IMG",
            "Decathlon",
            "Sports Federations"
        ],

        salaryExamples: [
            "Sports organizations vary widely in compensation"
        ],

        workMode: ["Office", "Travel", "Event Locations"],

        careerPath: [
            "Sports Executive",
            "Sports Manager",
            "Team Manager",
            "Sports Director"
        ],

        certifications: [
            "Sports management",
            "MBA"
        ],

        roadmap: [
            "Sports industry",
            "Management",
            "Marketing",
            "Events",
            "Sponsorship"
        ],

        pros: [
            "Sports industry exposure",
            "Dynamic work"
        ],

        challenges: [
            "Competition",
            "Irregular event schedules"
        ],

        suitableFor:
            "Sports lovers interested in business and management.",

        demand: "Growing"
    },

    {
        id: "real-estate",
        name: "Real Estate",
        title: "Real Estate Professional",
        category: "others",
        stream: "Others",
        icon: "🏢",

        description:
            "Work in property sales, development, investment and real estate management.",

        education: "10+2 from any stream.",
        degree: "Business, finance, economics, architecture or any relevant degree.",
        entranceExams: ["Not usually required"],

        skills: [
            "Sales",
            "Negotiation",
            "Property Knowledge",
            "Finance",
            "Communication"
        ],

        beginnerSalary: "₹2.5 LPA – ₹6 LPA + incentives",
        experiencedSalary: "₹8 LPA – ₹30+ LPA",

        famousCompanies: [
            "DLF",
            "Godrej Properties",
            "Prestige Group",
            "Lodha",
            "Sobha"
        ],

        salaryExamples: [
            "Sales roles often include commissions",
            "Income can vary greatly with property transactions"
        ],

        workMode: ["Office", "Field"],

        careerPath: [
            "Property Consultant",
            "Sales Executive",
            "Property Manager",
            "Real Estate Manager",
            "Developer"
        ],

        certifications: [
            "Real estate certifications",
            "RERA-related knowledge"
        ],

        roadmap: [
            "Real estate fundamentals",
            "Property law",
            "Sales",
            "Finance",
            "Negotiation"
        ],

        pros: [
            "High earning potential",
            "Entrepreneurial opportunities"
        ],

        challenges: [
            "Income variability",
            "Sales pressure"
        ],

        suitableFor:
            "Strong communicators interested in property and business.",

        demand: "High"
    },

    {
        id: "public-relations",
        name: "Public Relations",
        title: "PR Specialist",
        category: "others",
        stream: "Others",
        icon: "📢",

        description:
            "Manage public image, media relations and communication for organizations and people.",

        education: "10+2 from any stream.",
        degree: "Mass Communication, Journalism, Public Relations, Marketing.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Communication",
            "Writing",
            "Media Relations",
            "Crisis Communication",
            "Networking"
        ],

        beginnerSalary: "₹2.5 LPA – ₹6 LPA",
        experiencedSalary: "₹7 LPA – ₹20+ LPA",

        famousCompanies: [
            "Edelman",
            "Weber Shandwick",
            "Genesis BCW",
            "Ogilvy",
            "Dentsu"
        ],

        salaryExamples: [
            "Agency and corporate PR roles differ in compensation"
        ],

        workMode: ["Office", "Hybrid", "Travel"],

        careerPath: [
            "PR Executive",
            "PR Specialist",
            "PR Manager",
            "Account Director",
            "PR Director"
        ],

        certifications: [
            "PR certifications",
            "Digital communication"
        ],

        roadmap: [
            "Communication",
            "Media relations",
            "Writing",
            "Crisis management",
            "Digital PR"
        ],

        pros: [
            "People-oriented",
            "Creative communication",
            "Many industries"
        ],

        challenges: [
            "Crisis pressure",
            "Deadline-heavy"
        ],

        suitableFor:
            "Excellent communicators who enjoy media and relationship building.",

        demand: "High"
    },

    {
        id: "library-science",
        name: "Library Science",
        title: "Librarian",
        category: "others",
        stream: "Others",
        icon: "📚",

        description:
            "Manage information resources, libraries, digital archives and knowledge systems.",

        education: "10+2 followed by relevant degree.",
        degree: "Bachelor/Master of Library and Information Science.",
        entranceExams: ["CUET", "University Exams", "Government Exams"],

        skills: [
            "Information Management",
            "Research",
            "Cataloguing",
            "Digital Archives",
            "Communication"
        ],

        beginnerSalary: "₹2.5 LPA – ₹5 LPA",
        experiencedSalary: "₹6 LPA – ₹15+ LPA",

        famousCompanies: [
            "Universities",
            "IITs",
            "IIMs",
            "Public Libraries",
            "Research Institutes"
        ],

        salaryExamples: [
            "Government and academic institutions follow applicable pay structures"
        ],

        workMode: ["Library", "University", "Research"],

        careerPath: [
            "Library Assistant",
            "Librarian",
            "Senior Librarian",
            "Chief Librarian"
        ],

        certifications: [
            "BLIS",
            "MLIS"
        ],

        roadmap: [
            "Information science",
            "Cataloguing",
            "Digital libraries",
            "Research",
            "Library management"
        ],

        pros: [
            "Stable academic environment",
            "Knowledge-focused"
        ],

        challenges: [
            "Limited private-sector roles",
            "Government exams may be competitive"
        ],

        suitableFor:
            "People who enjoy books, research and information organization.",

        demand: "Stable"
    },

    {
        id: "insurance",
        name: "Insurance",
        title: "Insurance Professional",
        category: "others",
        stream: "Others",
        icon: "🛡️",

        description:
            "Assess risk, design insurance products and support customers with financial protection.",

        education: "10+2 from any stream.",
        degree: "B.Com, BBA, Economics, Finance or related degree.",
        entranceExams: ["CUET", "University Exams"],

        skills: [
            "Finance",
            "Risk Analysis",
            "Communication",
            "Sales",
            "Statistics"
        ],

        beginnerSalary: "₹3 LPA – ₹6 LPA",
        experiencedSalary: "₹7 LPA – ₹25+ LPA",

        famousCompanies: [
            "LIC",
            "ICICI Lombard",
            "HDFC Life",
            "SBI Life",
            "Bajaj Allianz"
        ],

        salaryExamples: [
            "Sales roles may include incentives",
            "Actuarial and risk roles can pay significantly more"
        ],

        workMode: ["Office", "Field", "Hybrid"],

        careerPath: [
            "Insurance Executive",
            "Underwriter",
            "Risk Analyst",
            "Manager",
            "Insurance Specialist"
        ],

        certifications: [
            "IRDAI-related certifications",
            "Actuarial qualifications"
        ],

        roadmap: [
            "Insurance basics",
            "Risk",
            "Finance",
            "Sales",
            "Regulation"
        ],

        pros: [
            "Large industry",
            "Stable organizations",
            "Multiple specializations"
        ],

        challenges: [
            "Sales pressure",
            "Regulatory knowledge"
        ],

        suitableFor:
            "Students interested in finance, risk and customer service.",

        demand: "High"
    },

    {
        id: "actuarial-science",
        name: "Actuarial Science",
        title: "Actuary",
        category: "others",
        stream: "Others",
        icon: "📐",

        description:
            "Use mathematics, statistics and finance to assess financial risk and uncertainty.",

        education: "10+2 with Mathematics.",
        degree: "Any quantitative degree; actuarial professional exams are essential.",
        entranceExams: ["ACET", "Actuarial Exams"],

        skills: [
            "Mathematics",
            "Statistics",
            "Probability",
            "Finance",
            "Risk Analysis"
        ],

        beginnerSalary: "₹4 LPA – ₹8 LPA",
        experiencedSalary: "₹12 LPA – ₹35+ LPA",

        famousCompanies: [
            "LIC",
            "Milliman",
            "Deloitte",
            "EY",
            "PwC"
        ],

        salaryExamples: [
            "Qualified actuaries can command strong compensation",
            "Progression depends heavily on professional exam completion"
        ],

        workMode: ["Office", "Hybrid"],

        careerPath: [
            "Actuarial Analyst",
            "Actuarial Associate",
            "Qualified Actuary",
            "Actuarial Manager",
            "Chief Actuary"
        ],

        certifications: [
            "Institute of Actuaries of India",
            "Actuarial professional exams"
        ],

        roadmap: [
            "Mathematics",
            "Probability",
            "Statistics",
            "Finance",
            "Actuarial exams",
            "Risk modeling"
        ],

        pros: [
            "Strong salary potential",
            "Specialized profession",
            "Finance + mathematics"
        ],

        challenges: [
            "Difficult professional exams",
            "Long qualification process"
        ],

        suitableFor:
            "Students who are exceptionally comfortable with mathematics and statistics.",

        demand: "Very High"
    },

    {
        id: "logistics",
        name: "Logistics Management",
        title: "Logistics Manager",
        category: "others",
        stream: "Others",
        icon: "📦",

        description:
            "Coordinate transportation, warehousing and delivery of products.",

        education: "10+2 from any stream.",
        degree: "BBA, B.Com, Logistics Management, MBA.",
        entranceExams: ["CUET", "CAT"],

        skills: [
            "Operations",
            "Planning",
            "Inventory",
            "Communication",
            "Data Analysis"
        ],

        beginnerSalary: "₹3 LPA – ₹6 LPA",
        experiencedSalary: "₹7 LPA – ₹20+ LPA",

        famousCompanies: [
            "Amazon",
            "DHL",
            "FedEx",
            "Blue Dart",
            "Delhivery"
        ],

        salaryExamples: [
            "Large logistics companies offer varied salary levels by role"
        ],

        workMode: ["Office", "Warehouse", "Field"],

        careerPath: [
            "Logistics Executive",
            "Logistics Analyst",
            "Logistics Manager",
            "Operations Manager",
            "Supply Chain Director"
        ],

        certifications: [
            "Logistics certifications",
            "Supply chain management"
        ],

        roadmap: [
            "Logistics",
            "Warehousing",
            "Transportation",
            "Inventory",
            "Operations",
            "Analytics"
        ],

        pros: [
            "Large growing industry",
            "Operations leadership"
        ],

        challenges: [
            "Operational pressure",
            "Shift work possible"
        ],

        suitableFor:
            "Organized people interested in movement, operations and business.",

        demand: "Very High"
    },

    {
        id: "fitness-training",
        name: "Fitness Training",
        title: "Fitness Trainer",
        category: "others",
        stream: "Others",
        icon: "🏋️",

        description:
            "Help people improve fitness, strength, mobility and healthy lifestyle habits.",

        education: "10+2; science is useful but not mandatory.",
        degree: "Sports Science, Physical Education or fitness certifications.",
        entranceExams: ["Not usually required"],

        skills: [
            "Exercise Science",
            "Communication",
            "Fitness Assessment",
            "Training",
            "Motivation"
        ],

        beginnerSalary: "₹2 LPA – ₹5 LPA",
        experiencedSalary: "₹6 LPA – ₹18+ LPA",

        famousCompanies: [
            "Cult.fit",
            "Gold's Gym",
            "Fitness First",
            "Anytime Fitness"
        ],

        salaryExamples: [
            "Personal trainers may earn through salary, sessions and memberships",
            "Independent trainers have variable income"
        ],

        workMode: ["Gym", "Studio", "Freelance"],

        careerPath: [
            "Fitness Trainer",
            "Personal Trainer",
            "Senior Trainer",
            "Fitness Manager",
            "Fitness Entrepreneur"
        ],

        certifications: [
            "ACE",
            "NASM",
            "ISSA"
        ],

        roadmap: [
            "Exercise science",
            "Anatomy",
            "Training",
            "Nutrition basics",
            "Certification",
            "Client management"
        ],

        pros: [
            "Active career",
            "Entrepreneurial opportunities"
        ],

        challenges: [
            "Physical demands",
            "Client retention"
        ],

        suitableFor:
            "People passionate about fitness, health and helping others.",

        demand: "High"
    }

];



/* =========================================================
   HELPER DATA
========================================================= */

const careerCategories = [
    {
        id: "technology",
        name: "Technology",
        count: 15
    },
    {
        id: "healthcare",
        name: "Healthcare",
        count: 15
    },
    {
        id: "business",
        name: "Business",
        count: 15
    },
    {
        id: "creative",
        name: "Creative",
        count: 15
    },
    {
        id: "education",
        name: "Education",
        count: 15
    },
    {
        id: "science",
        name: "Science",
        count: 15
    },
    {
        id: "others",
        name: "Others",
        count: 15
    }
];



/* =========================================================
   CAREER LOOKUP HELPERS
========================================================= */

function getCareerById(id) {

    return careers.find(
        career => career.id === id
    );

}


function getCareersByCategory(category) {

    return careers.filter(
        career => career.category === category
    );

}


function searchCareers(searchTerm) {

    const term = searchTerm
        .toLowerCase()
        .trim();

    if (!term) {
        return careers;
    }

    return careers.filter(career => {

        return (

            career.name
                .toLowerCase()
                .includes(term)

            ||

            career.title
                .toLowerCase()
                .includes(term)

            ||

            career.category
                .toLowerCase()
                .includes(term)

            ||

            career.stream
                .toLowerCase()
                .includes(term)

            ||

            career.description
                .toLowerCase()
                .includes(term)

        );

    });

}



/* =========================================================
   DATABASE VALIDATION
========================================================= */

console.log(
    `Career Copilot loaded ${careers.length} careers.`
);


console.table(

    careerCategories.map(category => {

        return {
            Stream: category.name,
            Careers: careers.filter(
                career =>
                    career.category === category.id
            ).length
        };

    })

);
