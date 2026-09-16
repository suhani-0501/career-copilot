document.addEventListener("DOMContentLoaded", function () {

    const roadmapCareerIcons = {
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

    /* =====================================================
       CHECK REQUIRED DATA
    ===================================================== */

    if (
        typeof careers === "undefined" ||
        !Array.isArray(careers)
    ) {

        console.error(
            "Career Copilot: careers.js was not loaded."
        );

        return;
    }


    if (
        typeof TaskManager === "undefined"
    ) {

        console.error(
            "Career Copilot: taskManager.js was not loaded."
        );

        return;
    }


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const searchInput =
        document.getElementById("careerSearch");

    const searchButton =
        document.getElementById("roadmapSearchButton");

    const suggestions =
        document.getElementById("careerSuggestions");

    const emptyState =
        document.getElementById("roadmapEmptyState");

    const roadmapContent =
        document.getElementById("roadmapContent");

    const careerName =
        document.getElementById("roadmapCareerName");

    const careerDescription =
        document.getElementById("roadmapCareerDescription");

    const careerIcon =
        document.getElementById("roadmapCareerIcon");

    const phaseContainer =
        document.getElementById("phaseContainer");

    const skillsContainer =
        document.getElementById("skillsContainer");

    const projectsContainer =
        document.getElementById("projectsContainer");

    const nextStepsContainer =
        document.getElementById("nextStepsContainer");

    const changeCareerButton =
        document.getElementById("changeCareerButton");

    const startOverButton =
        document.getElementById("startOverButton");

    const progressNumber =
        document.getElementById("roadmapProgress");

    const progressBar =
        document.getElementById("roadmapProgressBar");

    const progressText =
        document.getElementById("roadmapProgressText");

    const totalTime =
        document.getElementById("roadmapTotalTime");

    const taskCount =
        document.getElementById("taskCount");

    const completedTaskCount =
        document.getElementById("completedTaskCount");

    const personalTaskInput =
        document.getElementById("personalTaskInput");

    const addPersonalTaskButton =
        document.getElementById("addPersonalTask");

    const personalTaskList =
        document.getElementById("personalTaskList");


    /* =====================================================
       CURRENT CAREER
    ===================================================== */

    let currentCareer = null;


    /* =====================================================
       SELECTED CAREER
    ===================================================== */

    const OLD_SELECTED_CAREER_KEY =
        "careerCopilotSelectedCareer";

    const NEW_SELECTED_CAREER_KEY =
        "selectedCareer";


    /* =====================================================
       NORMALIZE CAREER
    ===================================================== */

    function normalizeCareer(career) {

        if (!career) {
            return null;
        }


        return {

            ...career,

            id:
                career.id ||
                slugify(
                    career.name ||
                    career.title
                ),

            name:
                career.name ||
                career.title ||
                "Career",

            title:
                career.title ||
                career.name ||
                "Career",

            description:
                career.description ||
                "Build the skills and experience required for this career.",

            icon:
                career.icon ||
                "💼",

            category:
                career.stream ||
                career.category ||
                "Career",

            skills:
                Array.isArray(career.skills)
                    ? career.skills
                    : [],

            roadmap:
                Array.isArray(career.roadmap)
                    ? career.roadmap
                    : [],

            careerPath:
                Array.isArray(career.careerPath)
                    ? career.careerPath
                    : []

        };
    }


    /* =====================================================
       SLUGIFY
    ===================================================== */

    function slugify(text) {

        return String(text || "")
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
    }


    /* =====================================================
       GET CAREER BY ID
    ===================================================== */

    function findCareerById(id) {

        if (!id) {
            return null;
        }


        const found =
            careers.find(
                function (career) {

                    return String(
                        career.id || ""
                    ).toLowerCase() ===
                    String(id).toLowerCase();

                }
            );


        return normalizeCareer(found);
    }


    /* =====================================================
       GET SELECTED CAREER ID
    ===================================================== */

    function getCurrentSelectedCareerId() {

        /*
         * First priority:
         * URL ?career=...
         */

        const params =
            new URLSearchParams(
                window.location.search
            );

        const urlCareer =
            params.get("career");


        if (urlCareer) {

            return urlCareer;
        }


        /*
         * Second priority:
         * TaskManager selectedCareer
         */

        if (
            typeof getSelectedCareerId ===
            "function"
        ) {

            const selected =
                getSelectedCareerId();

            if (selected) {
                return selected;
            }
        }


        /*
         * Third priority:
         * Old roadmap key
         */

        const oldSelected =
            localStorage.getItem(
                OLD_SELECTED_CAREER_KEY
            );


        if (oldSelected) {

            return oldSelected;
        }


        /*
         * Final fallback:
         * direct localStorage key
         */

        return localStorage.getItem(
            NEW_SELECTED_CAREER_KEY
        );
    }


    /* =====================================================
       SAVE SELECTED CAREER
    ===================================================== */

    function saveCurrentCareer(career) {

        if (!career) {
            return;
        }


        /*
         * Use TaskManager helper.
         */

        if (
            typeof saveSelectedCareer ===
            "function"
        ) {

            saveSelectedCareer(
                career.id
            );

        } else {

            localStorage.setItem(
                NEW_SELECTED_CAREER_KEY,
                String(career.id)
            );
        }


        /*
         * Keep old key for compatibility
         * with any existing project code.
         */

        localStorage.setItem(
            OLD_SELECTED_CAREER_KEY,
            String(career.id)
        );
    }


    /* =====================================================
       SEARCH CAREERS
    ===================================================== */

    function searchCareers(query) {

        const value =
            String(query || "")
                .trim()
                .toLowerCase();


        if (!value) {

            return careers
                .map(normalizeCareer)
                .slice(0, 8);
        }


        return careers
            .map(normalizeCareer)
            .filter(
                function (career) {

                    const searchableText = [

                        career.name,

                        career.title,

                        career.category,

                        career.description,

                        ...(career.skills || []),

                        ...(career.roadmap || [])

                    ]
                        .join(" ")
                        .toLowerCase();


                    return searchableText.includes(
                        value
                    );
                }
            )
            .slice(0, 8);
    }


    /* =====================================================
       RENDER SUGGESTIONS
    ===================================================== */

    function renderSuggestions(results) {

        if (!suggestions) {
            return;
        }


        suggestions.innerHTML = "";


        if (!results.length) {

            suggestions.innerHTML = `

                <div class="career-suggestion">

                    <div class="suggestion-info">

                        <span class="suggestion-name">
                            No career found
                        </span>

                        <span class="suggestion-category">
                            Try another career name or skill.
                        </span>

                    </div>

                </div>

            `;


            suggestions.classList.add(
                "show"
            );


            return;
        }


        results.forEach(
            function (career) {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.className =
                    "career-suggestion";


                button.innerHTML = `

                    <span class="suggestion-icon">
                        ${escapeHtml(career.icon)}
                    </span>

                    <span class="suggestion-info">

                        <span class="suggestion-name">
                            ${escapeHtml(career.name)}
                        </span>

                        <span class="suggestion-category">
                            ${escapeHtml(career.category)}
                        </span>

                    </span>

                `;


                button.addEventListener(
                    "click",
                    function () {

                        selectCareer(
                            career
                        );

                    }
                );


                suggestions.appendChild(
                    button
                );

            }
        );


        suggestions.classList.add(
            "show"
        );
    }


    /* =====================================================
       HIDE SUGGESTIONS
    ===================================================== */

    function hideSuggestions() {

        if (!suggestions) {
            return;
        }


        suggestions.classList.remove(
            "show"
        );
    }


    /* =====================================================
       SELECT CAREER
    ===================================================== */

    function selectCareer(career) {

        const normalized =
            normalizeCareer(career);


        if (!normalized) {
            return;
        }


        currentCareer =
            normalized;


        if (searchInput) {

            searchInput.value =
                normalized.name;
        }


        hideSuggestions();


        /*
         * Save career.
         */

        saveCurrentCareer(
            normalized
        );


        /*
         * Create roadmap tasks.
         */

        ensureRoadmapTasks(
            normalized
        );


        /*
         * Render everything.
         */

        renderCareer(
            normalized
        );


        /*
         * Update URL without reloading.
         */

        try {

            const url =
                new URL(
                    window.location.href
                );


            url.searchParams.set(
                "career",
                normalized.id
            );


            window.history.replaceState(
                {},
                "",
                url
            );

        } catch (error) {

            console.warn(
                "Could not update roadmap URL.",
                error
            );
        }


        /*
         * Scroll to roadmap.
         */

        if (roadmapContent) {

            setTimeout(
                function () {

                    const contentTop =
                        roadmapContent
                            .getBoundingClientRect()
                            .top +
                        window.scrollY -
                        25;


                    window.scrollTo({

                        top:
                            contentTop,

                        behavior:
                            "smooth"

                    });

                },
                100
            );
        }
    }


    /* =====================================================
       ENSURE ROADMAP TASKS
    ===================================================== */

    function ensureRoadmapTasks(career) {

        if (!career) {
            return [];
        }


        /*
         * roadmapData.js gives us the
         * exact same roadmap data.
         */

        if (
            typeof ensureCareerRoadmapTasks ===
            "function"
        ) {

            return ensureCareerRoadmapTasks(
                career.id
            );
        }


        /*
         * Fallback if roadmapData.js
         * isn't available.
         */

        const phases =
            buildPhases(career);


        return TaskManager.addRoadmapTasks(
            career.id,
            phases
        );
    }


    /* =====================================================
       RENDER CAREER
    ===================================================== */

    function renderCareer(career) {

        if (!career) {
            return;
        }


        /*
         * Basic information
         */

        if (careerName) {

            careerName.textContent =
                career.title ||
                career.name;
        }


        if (careerDescription) {

            careerDescription.textContent =
                career.description;
        }


        if (careerIcon) {

            const iconName =
                roadmapCareerIcons[career.id] ||
                "briefcase";

            careerIcon.innerHTML = `
                <i class="fa-solid fa-${iconName}"></i>
            `;
        }


        /*
         * Empty state / content
         */

        if (emptyState) {

            emptyState.style.display =
                "none";
        }


        if (roadmapContent) {

            roadmapContent.hidden =
                false;
        }


        /*
         * Roadmap
         */

        renderRoadmap(
            career
        );


        /*
         * Skills
         */

        renderSkills(
            career
        );


        /*
         * Projects
         */

        renderProjects(
            career
        );


        /*
         * Next steps
         */

        renderNextSteps(
            career
        );


        /*
         * Time
         */

        renderLearningTime(
            career
        );


        /*
         * Personal tasks
         */

        renderPersonalTasks();


        /*
         * Progress
         */

        updateProgress();
    }


    /* =====================================================
       GET ROADMAP PHASES
    ===================================================== */

    function buildPhases(career) {

        /*
         * Use shared roadmapData.js first.
         */

        if (
            typeof getCareerRoadmap ===
            "function"
        ) {

            const roadmap =
                getCareerRoadmap(
                    career.id
                );


            if (
                roadmap &&
                Array.isArray(
                    roadmap.phases
                ) &&
                roadmap.phases.length
            ) {

                return roadmap.phases;
            }
        }


        /*
         * Dedicated roadmaps.js fallback.
         */

        const dedicated =
            getDedicatedRoadmap(
                career
            );


        if (dedicated) {

            return normalizePhases(
                dedicated,
                career
            );
        }


        /*
         * Career roadmap fallback.
         */

        if (
            Array.isArray(
                career.roadmap
            ) &&
            career.roadmap.length
        ) {

            return buildPhasesFromCareerRoadmap(
                career
            );
        }


        /*
         * Final fallback.
         */

        return buildFallbackPhases(
            career
        );
    }


    /* =====================================================
       GET DEDICATED ROADMAP
    ===================================================== */

function getDedicatedRoadmap(career) {

    if (typeof roadmaps === "undefined") {
        return null;
    }

    let data = null;

    /* Object style */
    if (!Array.isArray(roadmaps)) {

        data =
            roadmaps[career.id] ||
            roadmaps[career.careerId];

        if (!data) {

            for (const key in roadmaps) {

                const item = roadmaps[key];

                if (
                    String(item.careerId) === String(career.id)
                ) {
                    data = item;
                    break;
                }
            }
        }
    }

    /* Array style */
    if (Array.isArray(roadmaps)) {

        data = roadmaps.find(item =>
            String(item.careerId) === String(career.id)
        );
    }

    if (!data) return null;

    return (
        data.phases ||
        data.roadmap ||
        data.steps ||
        []
    );
}


    /* =====================================================
       NORMALIZE PHASES
    ===================================================== */

    function normalizePhases(
        data,
        career
    ) {

        if (
            !Array.isArray(data)
        ) {

            return [];
        }


        return data
            .map(
                function (phase, index) {

                    /*
                     * String phase
                     */

                    if (
                        typeof phase ===
                        "string"
                    ) {

                        return {

                            id:
                                `phase-${index + 1}`,

                            title:
                                `Phase ${index + 1}`,

                            description:
                                "Continue developing your career skills.",

                            tasks: [
                                phase
                            ]
                        };
                    }


                    /*
                     * Object phase
                     */

                    const tasks =

                        Array.isArray(
                            phase.tasks
                        )
                            ? phase.tasks
                            : Array.isArray(
                                phase.steps
                            )
                                ? phase.steps
                                : [];


                    return {

                        id:
                            phase.id ||
                            `phase-${index + 1}`,

                        title:
                            phase.title ||
                            phase.name ||
                            `Phase ${index + 1}`,

                        description:
                            phase.description ||
                            "Build the knowledge and skills needed for this stage.",

                        tasks:
                            tasks
                                .map(
                                    function (task) {

                                        if (
                                            typeof task ===
                                            "string"
                                        ) {

                                            return task;
                                        }


                                        return (
                                            task.title ||
                                            task.name ||
                                            String(task)
                                        );
                                    }
                                )

                    };
                }
            )
            .filter(
                function (phase) {

                    return (
                        phase.tasks &&
                        phase.tasks.length
                    );
                }
            );
    }


    /* =====================================================
       CAREER ROADMAP -> PHASES
    ===================================================== */

    function buildPhasesFromCareerRoadmap(
        career
    ) {

        const roadmap =
            career.roadmap ||
            [];


        if (!roadmap.length) {

            return [];
        }


        /*
         * If roadmap already contains
         * objects with tasks, use them.
         */

        if (
            typeof roadmap[0] ===
            "object"
        ) {

            return normalizePhases(
                roadmap,
                career
            );
        }


        const chunkSize =
            Math.max(
                1,
                Math.ceil(
                    roadmap.length / 4
                )
            );


        const chunks =
            chunkArray(
                roadmap,
                chunkSize
            );


        const phaseNames = [

            "Foundation",

            "Core Skills",

            "Practical Application",

            "Career Readiness"

        ];


        const descriptions = [

            "Understand the fundamental concepts required for this career.",

            "Develop the core technical or professional skills.",

            "Apply what you have learned through practical work.",

            "Prepare for real-world opportunities and professional growth."

        ];


        return chunks.map(
            function (tasks, index) {

                return {

                    id:
                        `phase-${index + 1}`,

                    title:
                        phaseNames[index] ||
                        `Learning Phase ${index + 1}`,

                    description:
                        descriptions[index] ||
                        "Continue developing your career skills.",

                    tasks:
                        tasks.map(
                            function (item) {

                                return String(
                                    item
                                );
                            }
                        )

                };
            }
        );
    }


    /* =====================================================
       FALLBACK PHASES
    ===================================================== */

    function buildFallbackPhases(
        career
    ) {

        const skills =
            career.skills ||
            [];


        const fallbackTasks = [

            skills.slice(0, 3),

            skills.slice(3, 6),

            [

                `Build a beginner project related to ${career.name}`,

                `Create a portfolio piece for ${career.name}`

            ],

            [

                `Research entry-level roles in ${career.name}`,

                `Prepare a portfolio and resume`

            ]

        ];


        return fallbackTasks

            .filter(
                function (tasks) {

                    return tasks.length > 0;
                }
            )

            .map(
                function (tasks, index) {

                    return {

                        id:
                            `phase-${index + 1}`,

                        title:
                            [

                                "Foundation",

                                "Core Skills",

                                "Practical Projects",

                                "Career Preparation"

                            ][index],

                        description:
                            "Develop the knowledge and experience needed for this career.",

                        tasks:
                            tasks

                    };
                }
            );
    }


    /* =====================================================
       RENDER ROADMAP
    ===================================================== */

    function renderRoadmap(
        career
    ) {

        if (!phaseContainer) {
            return;
        }


        phaseContainer.innerHTML =
            "";


        const phases =
            buildPhases(
                career
            );


        if (!phases.length) {

            phaseContainer.innerHTML = `

                <div class="empty-task-message">

                    Roadmap information for this career
                    is being prepared.

                </div>

            `;

            return;
        }


        /*
         * Make sure TaskManager contains
         * these roadmap tasks.
         */

        ensureRoadmapTasks(
            career
        );


        const roadmapTasks =
            TaskManager.getRoadmapTasks(
                career.id
            );


        phases.forEach(
            function (
                phase,
                phaseIndex
            ) {

                const phaseElement =
                    document.createElement(
                        "div"
                    );


                phaseElement.className =
                    "roadmap-phase";


                const marker =
                    document.createElement(
                        "div"
                    );


                marker.className =
                    "phase-marker";


                marker.textContent =
                    phaseIndex + 1;


                const content =
                    document.createElement(
                        "div"
                    );


                content.className =
                    "phase-content";


                const header =
                    document.createElement(
                        "div"
                    );


                header.className =
                    "phase-header";


                const titleWrapper =
                    document.createElement(
                        "div"
                    );


                const title =
                    document.createElement(
                        "h3"
                    );


                title.className =
                    "phase-title";


                title.textContent =
                    phase.title;


                const description =
                    document.createElement(
                        "p"
                    );


                description.className =
                    "phase-description";


                description.textContent =
                    phase.description ||
                    "";


                titleWrapper.appendChild(
                    title
                );


                titleWrapper.appendChild(
                    description
                );


                const phaseProgress =
                    document.createElement(
                        "span"
                    );


                phaseProgress.className =
                    "phase-progress";


                phaseProgress.dataset.phase =
                    phaseIndex;


                header.appendChild(
                    titleWrapper
                );


                header.appendChild(
                    phaseProgress
                );


                const tasks =
                    document.createElement(
                        "div"
                    );


                tasks.className =
                    "phase-tasks";


                phase.tasks.forEach(
                    function (
                        taskTitle,
                        taskIndex
                    ) {

                        /*
                         * Find the matching
                         * TaskManager task.
                         */

                        const task =
                            roadmapTasks.find(
                                function (item) {

                                    return (

                                        String(
                                            item.phaseId
                                        ) ===
                                        String(
                                            phase.id
                                        )

                                        &&

                                        String(
                                            item.title
                                        ) ===
                                        String(
                                            taskTitle
                                        )

                                    );
                                }
                            );


                        /*
                         * If an older TaskManager
                         * task has no phase match,
                         * try matching by title.
                         */

                        const fallbackTask =
                            task ||
                            roadmapTasks.find(
                                function (item) {

                                    return (
                                        String(
                                            item.title
                                        ) ===
                                        String(
                                            taskTitle
                                        )
                                    );
                                }
                            );


                        const taskId =
                            fallbackTask
                                ? fallbackTask.id
                                : null;


                        const completed =
                            fallbackTask
                                ? fallbackTask.completed
                                : false;


                        const label =
                            document.createElement(
                                "label"
                            );


                        label.className =
                            "roadmap-task";


                        if (completed) {

                            label.classList.add(
                                "completed"
                            );
                        }


                        const checkbox =
                            document.createElement(
                                "input"
                            );


                        checkbox.type =
                            "checkbox";


                        checkbox.checked =
                            completed;


                        if (taskId) {

                            checkbox.dataset.taskId =
                                taskId;
                        }


                        const text =
                            document.createElement(
                                "span"
                            );


                        text.className =
                            "roadmap-task-label";


                        text.textContent =
                            taskTitle;


                        checkbox.addEventListener(
                            "change",
                            function () {

                                const id =
                                    checkbox.dataset.taskId;


                                if (!id) {

                                    console.warn(
                                        "TaskManager task not found:",
                                        taskTitle
                                    );

                                    return;
                                }


                                TaskManager.toggleTask(
                                    id
                                );


                                label.classList.toggle(
                                    "completed",
                                    checkbox.checked
                                );


                                updatePhaseProgress();

                                updateProgress();

                            }
                        );


                        label.appendChild(
                            checkbox
                        );


                        label.appendChild(
                            text
                        );


                        tasks.appendChild(
                            label
                        );

                    }
                );


                content.appendChild(
                    header
                );


                content.appendChild(
                    tasks
                );


                phaseElement.appendChild(
                    marker
                );


                phaseElement.appendChild(
                    content
                );


                phaseContainer.appendChild(
                    phaseElement
                );

            }
        );


        updatePhaseProgress();
    }


    /* =====================================================
       UPDATE PHASE PROGRESS
    ===================================================== */

    function updatePhaseProgress() {

        if (!phaseContainer) {
            return;
        }


        const phases =
            phaseContainer.querySelectorAll(
                ".roadmap-phase"
            );


        phases.forEach(
            function (phaseElement) {

                const checkboxes =
                    phaseElement.querySelectorAll(
                        'input[type="checkbox"]'
                    );


                const progressElement =
                    phaseElement.querySelector(
                        ".phase-progress"
                    );


                if (!progressElement) {
                    return;
                }


                if (!checkboxes.length) {

                    progressElement.textContent =
                        "0%";

                    return;
                }


                const completed =
                    Array.from(
                        checkboxes
                    ).filter(
                        function (checkbox) {

                            return checkbox.checked;
                        }
                    ).length;


                const percent =
                    Math.round(
                        (
                            completed /
                            checkboxes.length
                        ) *
                        100
                    );


                progressElement.textContent =
                    `${percent}%`;

            }
        );
    }


    /* =====================================================
       UPDATE TOTAL PROGRESS
    ===================================================== */

function updateProgress() {

    if (!currentCareer) {
        return;
    }


    /*
     * ONLY ROADMAP TASKS
     *
     * Personal tasks are NOT included.
     */

    const progress =
        TaskManager.getProgress(
            currentCareer.id
        );


    const stats =
        TaskManager.getStats(
            currentCareer.id
        );


    if (progressNumber) {

        progressNumber.textContent =
            `${progress}%`;

    }


    if (progressBar) {

        progressBar.style.width =
            `${progress}%`;

    }


    if (progressText) {

        progressText.textContent =
            `${progress}% Complete`;

    }


    if (taskCount) {

        taskCount.textContent =
            stats.roadmapTotal;

    }


    if (completedTaskCount) {

        completedTaskCount.textContent =
            stats.roadmapCompleted;

    }

}


    /* =====================================================
       SKILLS
    ===================================================== */

    function renderSkills(
        career
    ) {

        if (!skillsContainer) {
            return;
        }


        skillsContainer.innerHTML =
            "";


        const skills =
            career.skills ||
            [];


        if (!skills.length) {

            skillsContainer.innerHTML = `

                <div class="empty-task-message">

                    Skills information not available.

                </div>

            `;

            return;
        }


        skills.forEach(
            function (skill) {

                const item =
                    document.createElement(
                        "span"
                    );


                item.className =
                    "skill-item";


                item.textContent =
                    skill;


                skillsContainer.appendChild(
                    item
                );

            }
        );
    }


    /* =====================================================
       PROJECTS
    ===================================================== */

    function renderProjects(
        career
    ) {

        if (!projectsContainer) {
            return;
        }


        projectsContainer.innerHTML =
            "";


        const projects =
            getProjects(
                career
            );


        projects.forEach(
            function (project) {

                const card =
                    document.createElement(
                        "article"
                    );


                card.className =
                    "project-card";


                const level =
                    document.createElement(
                        "span"
                    );


                level.className =
                    "project-level";


                level.textContent =
                    project.level;


                const title =
                    document.createElement(
                        "h4"
                    );


                title.textContent =
                    project.title;


                const description =
                    document.createElement(
                        "p"
                    );


                description.textContent =
                    project.description;


                card.appendChild(
                    level
                );


                card.appendChild(
                    title
                );


                card.appendChild(
                    description
                );


                projectsContainer.appendChild(
                    card
                );

            }
        );
    }


    /* =====================================================
       PROJECTS DATA
    ===================================================== */

    function getProjects(
        career
    ) {

        const dedicated =
            getDedicatedProjects(
                career
            );


        if (dedicated.length) {

            return dedicated;
        }


        const name =
            career.name;


        return [

            {

                level:
                    "Beginner",

                title:
                    `${name} Practice Project`,

                description:
                    `Build a small practical project using the core skills required for ${name}.`

            },


            {

                level:
                    "Intermediate",

                title:
                    `${name} Portfolio Project`,

                description:
                    `Create a complete portfolio-ready project that demonstrates your abilities in ${name}.`

            },


            {

                level:
                    "Advanced",

                title:
                    `${name} Real-World Project`,

                description:
                    `Build a larger project that solves a realistic problem related to ${name}.`

            }

        ];
    }


    /* =====================================================
       DEDICATED PROJECTS
    ===================================================== */

function getDedicatedProjects(career) {

    if (typeof roadmaps === "undefined") {
        return [];
    }

    let data = null;

    if (!Array.isArray(roadmaps)) {

        for (const key in roadmaps) {

            if (
                String(roadmaps[key].careerId) ===
                String(career.id)
            ) {
                data = roadmaps[key];
                break;
            }
        }
    }

    if (Array.isArray(roadmaps)) {

        data = roadmaps.find(item =>
            String(item.careerId) === String(career.id)
        );
    }

    if (!data) return [];

    return data.projects || [];
}


    /* =====================================================
       NEXT STEPS
    ===================================================== */

    function renderNextSteps(
        career
    ) {

        if (!nextStepsContainer) {
            return;
        }


        nextStepsContainer.innerHTML =
            "";


        const roadmap =
            career.roadmap ||
            [];


        const skills =
            career.skills ||
            [];


        let steps = [];


        if (roadmap.length) {

            steps =
                roadmap.slice(
                    0,
                    3
                );

        } else if (skills.length) {

            steps =
                skills.slice(
                    0,
                    3
                );

        } else {

            steps = [

                `Learn the fundamentals of ${career.name}`,

                `Build practical experience`,

                `Prepare for entry-level opportunities`

            ];
        }


        steps.forEach(
            function (
                step,
                index
            ) {

                const card =
                    document.createElement(
                        "article"
                    );


                card.className =
                    "next-step-card";


                const number =
                    document.createElement(
                        "div"
                    );


                number.className =
                    "next-step-number";


                number.textContent =
                    index + 1;


                const title =
                    document.createElement(
                        "h4"
                    );


                title.textContent =
                    step;


                const description =
                    document.createElement(
                        "p"
                    );


                description.textContent =

                    index === 0
                        ? "Start with this foundation before moving ahead."
                        : index === 1
                            ? "Practice what you learned through practical work."
                            : "Use this step to move closer to career readiness.";


                card.appendChild(
                    number
                );


                card.appendChild(
                    title
                );


                card.appendChild(
                    description
                );


                nextStepsContainer.appendChild(
                    card
                );

            }
        );
    }


    /* =====================================================
       LEARNING TIME
    ===================================================== */

    function renderLearningTime(
        career
    ) {

        if (!totalTime) {
            return;
        }


        const possibleTime =

            career.learningTime ||
            career.duration ||
            career.estimatedTime;


        if (possibleTime) {

            totalTime.textContent =
                possibleTime;

            return;
        }


        const taskTotal =
            countRoadmapTasks(
                career
            );


        if (taskTotal <= 8) {

            totalTime.textContent =
                "2–3 months";

        } else if (taskTotal <= 16) {

            totalTime.textContent =
                "3–5 months";

        } else if (taskTotal <= 24) {

            totalTime.textContent =
                "5–8 months";

        } else {

            totalTime.textContent =
                "8–12+ months";
        }
    }


    /* =====================================================
       COUNT ROADMAP TASKS
    ===================================================== */

    function countRoadmapTasks(
        career
    ) {

        const phases =
            buildPhases(
                career
            );


        return phases.reduce(
            function (
                total,
                phase
            ) {

                return total +
                    (
                        Array.isArray(
                            phase.tasks
                        )
                            ? phase.tasks.length
                            : 0
                    );

            },
            0
        );
    }


    /* =====================================================
       PERSONAL TASKS
    ===================================================== */

    function renderPersonalTasks() {

        if (!personalTaskList) {
            return;
        }


        personalTaskList.innerHTML =
            "";


        if (!currentCareer) {

            return;
        }


        /*
         * Personal tasks now come from
         * TaskManager instead of a separate
         * localStorage system.
         */

        const tasks =
            TaskManager.getPersonalTasks(
                currentCareer.id
            );


        if (!tasks.length) {

            personalTaskList.innerHTML = `

                <div class="empty-task-message">

                    No personal tasks yet.

                </div>

            `;

            return;
        }


        tasks.forEach(
            function (task) {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "personal-task";


                if (task.completed) {

                    item.classList.add(
                        "completed"
                    );
                }


                const main =
                    document.createElement(
                        "div"
                    );


                main.className =
                    "personal-task-main";


                const checkbox =
                    document.createElement(
                        "input"
                    );


                checkbox.type =
                    "checkbox";


                checkbox.checked =
                    task.completed;


                checkbox.addEventListener(
                    "change",
                    function () {

                        TaskManager.toggleTask(
                            checkbox.dataset.taskId
                        );

                        label.classList.toggle(
                            "completed",
                            checkbox.checked
                        );

                        updatePhaseProgress();

                        updateProgress();

                    }
                );


                const title =
                    document.createElement(
                        "span"
                    );


                title.className =
                    "personal-task-title";


                title.textContent =
                    task.title;


                main.appendChild(
                    checkbox
                );


                main.appendChild(
                    title
                );


                const deleteButton =
                    document.createElement(
                        "button"
                    );


                deleteButton.type =
                    "button";


                deleteButton.className =
                    "delete-task";


                deleteButton.textContent =
                    "✕";


                deleteButton.setAttribute(
                    "aria-label",
                    "Delete task"
                );


                deleteButton.addEventListener(
                    "click",
                    function () {

                        TaskManager.deleteTask(
                            task.id
                        );


                        renderPersonalTasks();

                        updateProgress();

                    }
                );


                item.appendChild(
                    main
                );


                item.appendChild(
                    deleteButton
                );


                personalTaskList.appendChild(
                    item
                );

            }
        );
    }


    /* =====================================================
       ADD PERSONAL TASK
    ===================================================== */

    function addPersonalTask() {

        if (!currentCareer) {

            return;
        }


        if (!personalTaskInput) {

            return;
        }


        const text =
            personalTaskInput.value.trim();


        if (!text) {

            personalTaskInput.focus();

            return;
        }


        TaskManager.addTask({

            careerId:
                currentCareer.id,

            title:
                text,

            type:
                "personal",

            phaseId:
                null

        });


        personalTaskInput.value =
            "";


        renderPersonalTasks();


        updateProgress();
    }


    /* =====================================================
       SEARCH INPUT
    ===================================================== */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function () {

                const query =
                    searchInput.value.trim();


                const results =
                    searchCareers(
                        query
                    );


                renderSuggestions(
                    results
                );

            }
        );


        searchInput.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key ===
                    "Enter"
                ) {

                    event.preventDefault();

                    performSearch();
                }

            }
        );
    }


    /* =====================================================
       SEARCH BUTTON
    ===================================================== */

    if (searchButton) {

        searchButton.addEventListener(
            "click",
            performSearch
        );
    }


    /* =====================================================
       PERFORM SEARCH
    ===================================================== */

    function performSearch() {

        if (!searchInput) {
            return;
        }


        const query =
            searchInput.value.trim();


        if (!query) {

            searchInput.focus();


            renderSuggestions(
                searchCareers("")
            );


            return;
        }


        const results =
            searchCareers(
                query
            );


        if (!results.length) {

            renderSuggestions(
                []
            );


            return;
        }


        /*
         * Exact match first.
         */

        const exact =
            results.find(
                function (career) {

                    return (

                        career.name
                            .toLowerCase() ===
                        query.toLowerCase()

                        ||

                        career.title
                            .toLowerCase() ===
                        query.toLowerCase()

                    );
                }
            );


        selectCareer(
            exact ||
            results[0]
        );
    }


    /* =====================================================
       CHANGE CAREER
    ===================================================== */

    if (changeCareerButton) {

        changeCareerButton.addEventListener(
            "click",
            function () {

                if (roadmapContent) {

                    roadmapContent.hidden =
                        true;
                }


                if (emptyState) {

                    emptyState.style.display =
                        "flex";
                }


                if (searchInput) {

                    searchInput.focus();

                    searchInput.select();
                }

            }
        );
    }


    /* =====================================================
       START OVER
    ===================================================== */

    if (startOverButton) {

        startOverButton.addEventListener(
            "click",
            function () {

                if (!currentCareer) {

                    return;
                }


                const confirmed =
                    window.confirm(

                        "Start this career roadmap over? Your completed roadmap tasks and personal tasks will be cleared."

                    );


                if (!confirmed) {

                    return;
                }


                /*
                 * Clear roadmap tasks.
                 */

                TaskManager.resetRoadmap(
                    currentCareer.id
                );


                /*
                 * Clear personal tasks.
                 */

                TaskManager.clearPersonalTasks(
                    currentCareer.id
                );


                /*
                 * Recreate fresh roadmap tasks.
                 */

                ensureRoadmapTasks(
                    currentCareer
                );


                /*
                 * Render again.
                 */

                renderCareer(
                    currentCareer
                );

            }
        );
    }


    /* =====================================================
       ADD PERSONAL TASK BUTTON
    ===================================================== */

    if (addPersonalTaskButton) {

        addPersonalTaskButton.addEventListener(
            "click",
            addPersonalTask
        );
    }


    /* =====================================================
       PERSONAL TASK ENTER
    ===================================================== */

    if (personalTaskInput) {

        personalTaskInput.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key ===
                    "Enter"
                ) {

                    event.preventDefault();

                    addPersonalTask();
                }

            }
        );
    }


    /* =====================================================
       CLICK OUTSIDE SUGGESTIONS
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (
                suggestions &&
                searchInput &&
                !suggestions.contains(
                    event.target
                ) &&
                event.target !==
                    searchInput
            ) {

                hideSuggestions();
            }
        }
    );


    /* =====================================================
       LOAD CAREER
    ===================================================== */

    function loadSavedCareer() {

        const selectedId =
            getCurrentSelectedCareerId();


        if (!selectedId) {

            /*
             * No career selected.
             * Keep the empty/search state.
             */

            if (roadmapContent) {

                roadmapContent.hidden =
                    true;
            }


            if (emptyState) {

                emptyState.style.display =
                    "flex";
            }


            return;
        }


        const career =
            findCareerById(
                selectedId
            );


        if (!career) {

            console.warn(
                "Selected career was not found:",
                selectedId
            );


            if (roadmapContent) {

                roadmapContent.hidden =
                    true;
            }


            if (emptyState) {

                emptyState.style.display =
                    "flex";
            }


            return;
        }


        /*
         * Load selected career.
         */

        currentCareer =
            career;


        if (searchInput) {

            searchInput.value =
                career.name;
        }


        ensureRoadmapTasks(
            career
        );


        renderCareer(
            career
        );
    }


    /* =====================================================
       TASKMANAGER REAL-TIME UPDATE
    ===================================================== */

    window.addEventListener(
        "careerCopilotTasksUpdated",
        function () {

            if (!currentCareer) {
                return;
            }


            /*
             * Re-render the roadmap so
             * completed checkboxes update.
             */

            renderRoadmap(
                currentCareer
            );


            renderPersonalTasks();


            updateProgress();
        }
    );


    /* =====================================================
       CAREER REAL-TIME UPDATE
    ===================================================== */

    window.addEventListener(
        "careerCopilotCareerUpdated",
        function () {

            loadSavedCareer();
        }
    );


    /* =====================================================
       INITIALIZE
    ===================================================== */

    loadSavedCareer();


    /* =====================================================
       HELPERS
    ===================================================== */

    function chunkArray(
        array,
        size
    ) {

        const result = [];


        for (
            let i = 0;
            i < array.length;
            i += size
        ) {

            result.push(
                array.slice(
                    i,
                    i + size
                )
            );
        }


        return result;
    }


    function escapeHtml(value) {

        return String(value)

            .replace(
                /&/g,
                "&amp;"
            )

            .replace(
                /</g,
                "&lt;"
            )

            .replace(
                />/g,
                "&gt;"
            )

            .replace(
                /"/g,
                "&quot;"
            )

            .replace(
                /'/g,
                "&#039;"
            );
    }

});
