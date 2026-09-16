const careerQuestions = {

    /* =====================================================
       TECHNOLOGY
    ===================================================== */

    technology: [

        {
            id: "techSkills",
            question: "Which technical skills do you already have?",
            description: "Select all the skills you are comfortable with.",
            type: "skills",

            options: [
                "HTML",
                "CSS",
                "JavaScript",
                "Python",
                "SQL",
                "Git",
                "React",
                "APIs",
                "Excel",
                "Statistics",
                "Networking",
                "Linux"
            ]
        },

        {
            id: "techInterest",
            question: "What type of technology work interests you most?",
            description: "Choose the option that sounds most interesting to you.",
            type: "interest",

            options: [
                {
                    label: "Building websites and applications",
                    value: "building"
                },

                {
                    label: "Working with data",
                    value: "data"
                },

                {
                    label: "Solving technical problems",
                    value: "problem-solving"
                },

                {
                    label: "Protecting systems and networks",
                    value: "security"
                },

                {
                    label: "Designing digital experiences",
                    value: "design"
                }
            ]
        },

        {
            id: "programmingLevel",
            question: "How comfortable are you with programming?",
            description: "Choose the level that best represents you.",
            type: "level",

            options: [
                {
                    label: "I have never programmed",
                    value: "beginner"
                },

                {
                    label: "I know the basics",
                    value: "intermediate"
                },

                {
                    label: "I can build projects",
                    value: "advanced"
                }
            ]
        },

        {
            id: "techWorkStyle",
            question: "Which type of work sounds most enjoyable to you?",
            description: "Choose the one you would enjoy doing regularly.",
            type: "interest",

            options: [
                {
                    label: "Creating things",
                    value: "building"
                },

                {
                    label: "Analyzing problems",
                    value: "problem-solving"
                },

                {
                    label: "Finding patterns in data",
                    value: "data"
                },

                {
                    label: "Investigating security issues",
                    value: "security"
                },

                {
                    label: "Designing interfaces",
                    value: "design"
                }
            ]
        }

    ],


    /* =====================================================
       HEALTHCARE
    ===================================================== */

    healthcare: [

        {
            id: "healthSkills",
            question: "Which healthcare-related skills or subjects do you know?",
            description: "Select everything you have some knowledge of.",
            type: "skills",

            options: [
                "Biology",
                "Medical Knowledge",
                "Psychology",
                "Communication",
                "Patient Care",
                "Research",
                "Observation",
                "Counseling"
            ]
        },

        {
            id: "healthInterest",
            question: "What attracts you most to healthcare?",
            description: "Choose the area that interests you most.",
            type: "interest",

            options: [
                {
                    label: "Diagnosing and treating people",
                    value: "healthcare"
                },

                {
                    label: "Caring for patients",
                    value: "helping-people"
                },

                {
                    label: "Understanding human behavior",
                    value: "psychology"
                },

                {
                    label: "Studying biology and the human body",
                    value: "biology"
                },

                {
                    label: "Conducting research",
                    value: "research"
                }
            ]
        },

        {
            id: "peopleComfort",
            question: "How comfortable are you working directly with people?",
            description: "Think about how you prefer to work.",
            type: "level",

            options: [
                {
                    label: "I prefer working independently",
                    value: "beginner"
                },

                {
                    label: "I am comfortable helping people",
                    value: "intermediate"
                },

                {
                    label: "I really enjoy working with people",
                    value: "advanced"
                }
            ]
        },

        {
            id: "healthTrait",
            question: "Which quality describes you best?",
            description: "Choose the quality that feels most natural to you.",
            type: "interest",

            options: [
                {
                    label: "Patient and calm",
                    value: "patience"
                },

                {
                    label: "Empathetic and caring",
                    value: "empathy"
                },

                {
                    label: "Good at listening",
                    value: "active-listening"
                },

                {
                    label: "Responsible and disciplined",
                    value: "responsibility"
                }
            ]
        }

    ],


    /* =====================================================
       BUSINESS
    ===================================================== */

    business: [

        {
            id: "businessSkills",
            question: "Which business skills do you already have?",
            description: "Select all that apply.",
            type: "skills",

            options: [
                "Excel",
                "Business Analysis",
                "Communication",
                "Data Analysis",
                "Presentation",
                "Marketing",
                "Content Creation",
                "Analytics",
                "Branding",
                "Finance",
                "Leadership"
            ]
        },

        {
            id: "businessInterest",
            question: "Which area of business interests you most?",
            description: "Choose your strongest interest.",
            type: "interest",

            options: [
                {
                    label: "Starting and running a business",
                    value: "business"
                },

                {
                    label: "Marketing and advertising",
                    value: "marketing"
                },

                {
                    label: "Analyzing business data",
                    value: "data"
                },

                {
                    label: "Leading teams",
                    value: "leadership"
                },

                {
                    label: "Solving business problems",
                    value: "problem-solving"
                }
            ]
        },

        {
            id: "businessWork",
            question: "What kind of work do you enjoy?",
            description: "Choose what sounds most like you.",
            type: "interest",

            options: [
                {
                    label: "Making decisions",
                    value: "decision-making"
                },

                {
                    label: "Talking and presenting",
                    value: "communication"
                },

                {
                    label: "Analyzing information",
                    value: "analytical-thinking"
                },

                {
                    label: "Creating ideas",
                    value: "creativity"
                },

                {
                    label: "Leading people",
                    value: "leadership"
                }
            ]
        }

    ],


    /* =====================================================
       CREATIVE
    ===================================================== */

    creative: [

        {
            id: "creativeSkills",
            question: "Which creative skills do you already have?",
            description: "Select the skills you have experience with.",
            type: "skills",

            options: [
                "Figma",
                "UI Design",
                "UX Research",
                "Wireframing",
                "Prototyping",
                "Writing",
                "Video Editing",
                "Photography",
                "Social Media",
                "Storytelling"
            ]
        },

        {
            id: "creativeInterest",
            question: "What type of creative work interests you?",
            description: "Choose the type of work you would enjoy.",
            type: "interest",

            options: [
                {
                    label: "Designing websites and apps",
                    value: "design"
                },

                {
                    label: "Creating videos",
                    value: "media"
                },

                {
                    label: "Writing and storytelling",
                    value: "content"
                },

                {
                    label: "Creating visual content",
                    value: "creativity"
                },

                {
                    label: "Understanding users",
                    value: "problem-solving"
                }
            ]
        },

        {
            id: "creativeWork",
            question: "Which statement describes you best?",
            description: "Choose the statement you identify with most.",
            type: "interest",

            options: [
                {
                    label: "I enjoy creating visual things",
                    value: "creativity"
                },

                {
                    label: "I enjoy understanding people",
                    value: "empathy"
                },

                {
                    label: "I enjoy experimenting with ideas",
                    value: "innovation"
                },

                {
                    label: "I enjoy communicating ideas",
                    value: "communication"
                }
            ]
        }

    ],


    /* =====================================================
       EDUCATION
    ===================================================== */

    education: [

        {
            id: "educationSkills",
            question: "Which education-related skills do you have?",
            description: "Select the skills you already possess.",
            type: "skills",

            options: [
                "Communication",
                "Teaching",
                "Subject Knowledge",
                "Presentation",
                "Classroom Management",
                "Leadership",
                "Research"
            ]
        },

        {
            id: "educationInterest",
            question: "Why are you interested in education?",
            description: "Choose the reason that fits you best.",
            type: "interest",

            options: [
                {
                    label: "I enjoy teaching others",
                    value: "teaching"
                },

                {
                    label: "I enjoy helping people learn",
                    value: "helping-people"
                },

                {
                    label: "I enjoy explaining difficult concepts",
                    value: "communication"
                },

                {
                    label: "I enjoy learning new things",
                    value: "learning"
                }
            ]
        },

        {
            id: "educationTrait",
            question: "Which quality describes you best?",
            description: "Choose one.",
            type: "interest",

            options: [
                {
                    label: "Patient",
                    value: "patience"
                },

                {
                    label: "Good communicator",
                    value: "communication"
                },

                {
                    label: "Empathetic",
                    value: "empathy"
                },

                {
                    label: "Good leader",
                    value: "leadership"
                }
            ]
        }

    ],


    /* =====================================================
       SCIENCE
    ===================================================== */

    science: [

        {
            id: "scienceSkills",
            question: "Which science or research skills do you have?",
            description: "Select everything you know.",
            type: "skills",

            options: [
                "Research",
                "Statistics",
                "Analysis",
                "Scientific Method",
                "Documentation",
                "Python",
                "Data Analysis"
            ]
        },

        {
            id: "scienceInterest",
            question: "What interests you most about science?",
            description: "Choose your strongest interest.",
            type: "interest",

            options: [
                {
                    label: "Discovering new knowledge",
                    value: "research"
                },

                {
                    label: "Solving complex problems",
                    value: "problem-solving"
                },

                {
                    label: "Analyzing data",
                    value: "data"
                },

                {
                    label: "Conducting experiments",
                    value: "science"
                }
            ]
        },

        {
            id: "scienceTrait",
            question: "Which quality describes you best?",
            description: "Choose one.",
            type: "interest",

            options: [
                {
                    label: "Very curious",
                    value: "curiosity"
                },

                {
                    label: "Patient with long projects",
                    value: "patience"
                },

                {
                    label: "Analytical",
                    value: "analytical-thinking"
                },

                {
                    label: "Detail-oriented",
                    value: "attention-to-detail"
                }
            ]
        }

    ],


    /* =====================================================
       OTHERS
    ===================================================== */

    others: [

        {
            id: "generalSkills",
            question: "Which skills do you already have?",
            description: "Select all that apply.",
            type: "skills",

            options: [
                "Communication",
                "Leadership",
                "Problem Solving",
                "Research",
                "Writing",
                "Presentation",
                "Excel",
                "Programming",
                "Design"
            ]
        },

        {
            id: "generalInterest",
            question: "What type of work interests you?",
            description: "Choose what sounds most interesting.",
            type: "interest",

            options: [
                {
                    label: "Helping people",
                    value: "helping-people"
                },

                {
                    label: "Solving problems",
                    value: "problem-solving"
                },

                {
                    label: "Creating things",
                    value: "creativity"
                },

                {
                    label: "Working with data",
                    value: "data"
                },

                {
                    label: "Research",
                    value: "research"
                },

                {
                    label: "Business",
                    value: "business"
                }
            ]
        }

    ]

};