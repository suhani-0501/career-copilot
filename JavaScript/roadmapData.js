/* =========================================================
   SHARED ROADMAP DATA
   Used by both Roadmap and Dashboard
========================================================= */

function getCareerById(careerId) {
    if (!careerId || typeof careers === "undefined") {
        return null;
    }

    return careers.find(
        career => String(career.id) === String(careerId)
    ) || null;
}


/* ---------------------------------------------------------
   Build roadmap for a career
--------------------------------------------------------- */

function buildCareerRoadmap(career) {

    if (!career) {
        return {
            phases: []
        };
    }

    /*
       1. Use exact roadmap from roadmaps.js if available
    */

    if (
        typeof roadmaps !== "undefined" &&
        roadmaps &&
        roadmaps[career.id]
    ) {
        return normalizeRoadmap(roadmaps[career.id]);
    }


    /*
       2. Use roadmap stored directly inside career
    */

    if (career.roadmap) {
        return normalizeRoadmap(career.roadmap);
    }


    /*
       3. Build roadmap from career skills
    */

    if (Array.isArray(career.skills) && career.skills.length > 0) {

        const skills = career.skills;

        return {
            phases: [
                {
                    id: "foundation",
                    title: "Foundation",
                    description: "Build the basic knowledge needed for this career.",
                    tasks: [
                        "Understand the fundamentals",
                        "Learn the basic concepts",
                        "Study important terminology"
                    ]
                },

                {
                    id: "skills",
                    title: "Core Skills",
                    description: "Develop the practical skills required for the career.",
                    tasks: skills.slice(0, 5)
                },

                {
                    id: "projects",
                    title: "Projects",
                    description: "Apply your knowledge through practical projects.",
                    tasks: [
                        "Build a beginner project",
                        "Build an intermediate project",
                        "Create a portfolio project"
                    ]
                },

                {
                    id: "experience",
                    title: "Experience",
                    description: "Prepare yourself for real-world opportunities.",
                    tasks: [
                        "Build your resume",
                        "Create or update your portfolio",
                        "Practice interview questions",
                        "Apply for internships"
                    ]
                }
            ]
        };
    }


    /*
       4. Final generic fallback
    */

    return {
        phases: [
            {
                id: "foundation",
                title: "Foundation",
                description: "Learn the fundamentals of the career.",
                tasks: [
                    "Understand the career fundamentals",
                    "Learn important concepts",
                    "Study industry terminology"
                ]
            },

            {
                id: "skills",
                title: "Core Skills",
                description: "Develop the skills required for this career.",
                tasks: [
                    "Learn the essential skills",
                    "Practice regularly",
                    "Complete skill-based exercises"
                ]
            },

            {
                id: "projects",
                title: "Projects",
                description: "Apply what you have learned.",
                tasks: [
                    "Build a beginner project",
                    "Build an intermediate project",
                    "Create a portfolio project"
                ]
            },

            {
                id: "experience",
                title: "Experience",
                description: "Prepare for real-world opportunities.",
                tasks: [
                    "Build your resume",
                    "Prepare your portfolio",
                    "Practice interviews",
                    "Apply for internships"
                ]
            }
        ]
    };
}


/* ---------------------------------------------------------
   Normalize different roadmap formats
--------------------------------------------------------- */

function normalizeRoadmap(data) {

    if (!data) {
        return {
            phases: []
        };
    }


    /*
       Already in:

       {
           phases: [...]
       }
    */

    if (Array.isArray(data.phases)) {

        return {
            ...data,

            phases: data.phases.map((phase, index) => ({
                id: phase.id || `phase-${index + 1}`,
                title: phase.title || phase.name || `Phase ${index + 1}`,
                description: phase.description || "",
                tasks: Array.isArray(phase.tasks)
                    ? phase.tasks.map(task => {

                        if (typeof task === "string") {
                            return task;
                        }

                        return task.title || task.name || String(task);
                    })
                    : []
            }))
        };
    }


    /*
       If roadmap itself is an array
    */

    if (Array.isArray(data)) {

        return {
            phases: data.map((phase, index) => ({
                id: phase.id || `phase-${index + 1}`,
                title: phase.title || phase.name || `Phase ${index + 1}`,
                description: phase.description || "",
                tasks: Array.isArray(phase.tasks)
                    ? phase.tasks.map(task =>
                        typeof task === "string"
                            ? task
                            : task.title || task.name || String(task)
                    )
                    : []
            }))
        };
    }


    return {
        phases: []
    };
}


/* ---------------------------------------------------------
   Get roadmap directly from career ID
--------------------------------------------------------- */

function getCareerRoadmap(careerId) {

    const career = getCareerById(careerId);

    if (!career) {
        return {
            phases: []
        };
    }

    return buildCareerRoadmap(career);
}


/* ---------------------------------------------------------
   Create TaskManager roadmap tasks if missing
--------------------------------------------------------- */

function ensureCareerRoadmapTasks(careerId) {

    if (!careerId || typeof TaskManager === "undefined") {
        return [];
    }

    const roadmap = getCareerRoadmap(careerId);

    if (
        !roadmap ||
        !Array.isArray(roadmap.phases) ||
        roadmap.phases.length === 0
    ) {
        return [];
    }

    return TaskManager.addRoadmapTasks(
        careerId,
        roadmap.phases
    );
}