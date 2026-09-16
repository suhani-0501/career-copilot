/* =========================================================
   CAREER COPIOLIT
   DASHBOARD
========================================================= */


document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadUserName();


        /* =====================================================
           CHECK DATA
        ===================================================== */

        if (
            typeof careers === "undefined" ||
            !Array.isArray(careers)
        ) {

            console.error(
                "Dashboard: careers.js was not loaded."
            );

            return;

        }


        if (
            typeof roadmaps === "undefined"
        ) {

            console.error(
                "Dashboard: roadmaps.js was not loaded."
            );

            return;

        }


        if (
            typeof TaskManager === "undefined"
        ) {

            console.error(
                "Dashboard: taskManager.js was not loaded."
            );

            return;

        }


        /* =====================================================
           ELEMENTS
        ===================================================== */

        const userName =
            document.getElementById(
                "userName"
            );


        const careerGoal =
            document.getElementById(
                "careerGoal"
            );


        const taskList =
            document.getElementById(
                "taskList"
            );


        const careerProgress =
            document.getElementById(
                "careerProgress"
            );


        const skillsList =
            document.getElementById(
                "skillsList"
            );


        const completedCount =
            document.getElementById(
                "completedCount"
            );


        const streakDays =
            document.getElementById(
                "streakDays"
            );


        const savedCareers =
            document.getElementById(
                "savedCareers"
            );


        const roadmapTitle =
            document.getElementById(
                "roadmapTitle"
            );


        const roadmapSubtitle =
            document.getElementById(
                "roadmapSubtitle"
            );


        const roadmapPercent =
            document.getElementById(
                "dashboardRoadmapPercent"
            );


        const roadmapProgress =
            document.getElementById(
                "dashboardRoadmapProgress"
            );


        const roadmapProgressLabel =
            document.getElementById(
                "roadmapProgressLabel"
            );


        const roadmapPhases =
            document.getElementById(
                "dashboardRoadmapPhases"
            );


        const roadmapLink =
            document.getElementById(
                "dashboardRoadmapLink"
            );


        const roadmapFooterTitle =
            document.getElementById(
                "roadmapFooterTitle"
            );


        const roadmapFooterText =
            document.getElementById(
                "roadmapFooterText"
            );

        

        function loadUserName() {
        const userNameElement = document.getElementById("userName");

        if (!userNameElement) return;

        const savedUser = localStorage.getItem("careerCopilotUser");

        if (savedUser) {
            try {
                const user = JSON.parse(savedUser);

                if (user.fullName) {
                    userNameElement.textContent = user.fullName;
                } else {
                    userNameElement.textContent = "User";
                }

            } catch (error) {
                console.error("Unable to read user information:", error);
                userNameElement.textContent = "User";
            }
        } else {
            userNameElement.textContent = "User";
        }
    }


        /* =====================================================
           FIND SELECTED CAREER
        ===================================================== */

        function getCurrentCareer() {

            const selectedId =
                getSelectedCareerId();


            if (!selectedId) {
                return null;
            }


            return careers.find(
                career => {

                    return String(
                        career.id
                    ).toLowerCase() ===
                    String(
                        selectedId
                    ).toLowerCase();

                }
            ) || null;

        }


        /* =====================================================
           GET ROADMAP
           
           Same compatibility logic as roadmap.js.
        ===================================================== */

        function getRoadmapForCareer(
            career
        ) {

            if (!career) {
                return null;
            }


            /*
             * Direct string ID.
             */

            if (
                roadmaps[
                    String(
                        career.id
                    )
                ]
            ) {

                return roadmaps[
                    String(
                        career.id
                    )
                ];

            }


            /*
             * Direct object key.
             */

            if (
                roadmaps[
                    career.id
                ]
            ) {

                return roadmaps[
                    career.id
                ];

            }


            /*
             * Array format.
             */

            if (
                Array.isArray(
                    roadmaps
                )
            ) {

                const found =
                    roadmaps.find(
                        item => {

                            return (
                                String(
                                    item.id
                                ) ===
                                String(
                                    career.id
                                )
                                ||
                                String(
                                    item.careerId
                                ) ===
                                String(
                                    career.id
                                )
                            );

                        }
                    );


                if (found) {
                    return found;
                }

            }


            /*
             * Object value search.
             */

            if (
                typeof roadmaps ===
                    "object"
            ) {

                const found =
                    Object.values(
                        roadmaps
                    ).find(
                        item => {

                            return (
                                item &&
                                (
                                    String(
                                        item.id
                                    ) ===
                                    String(
                                        career.id
                                    )
                                    ||
                                    String(
                                        item.careerId
                                    ) ===
                                    String(
                                        career.id
                                    )
                                )
                            );

                        }
                    );


                if (found) {
                    return found;
                }

            }


            /*
             * Current roadmaps.js uses 1, 2, 3...
             *
             * Match the career's position.
             */

            const index =
                careers.findIndex(
                    item => {

                        return String(
                            item.id
                        ).toLowerCase() ===
                        String(
                            career.id
                        ).toLowerCase();

                    }
                );


            if (index >= 0) {

                const numericId =
                    String(
                        index + 1
                    );


                if (
                    roadmaps[
                        numericId
                    ]
                ) {

                    return roadmaps[
                        numericId
                    ];

                }

            }


            return null;

        }


        /* =====================================================
           USER
        ===================================================== */

        function renderUser() {

            if (!userName) {
                return;
            }


            try {

                const saved =
                    localStorage.getItem(
                        "careerCopilotUser"
                    );


                if (!saved) {
                    return;
                }


                const user =
                    JSON.parse(
                        saved
                    );


                if (
                    user &&
                    user.name
                ) {

                    userName.textContent =
                        user.name;

                }

            } catch (error) {

                console.warn(
                    "Could not load user:",
                    error
                );

            }

        }


        /* =====================================================
           TODAY'S TASKS
           
           ONLY PERSONAL TASKS.
        ===================================================== */

        function renderTodayTasks() {

            if (!taskList) {
                return;
            }


            const career =
                getCurrentCareer();


            if (!career) {

                taskList.innerHTML = `

                    <div class="empty-task-message">

                        Choose a career to see your tasks.

                    </div>

                `;

                return;

            }


            const tasks =
                TaskManager.getTodayTasks(
                    career.id,
                    4
                );


            if (!tasks.length) {

                const allPersonal =
                    TaskManager.getPersonalTasks(
                        career.id
                    );


                const allComplete =
                    allPersonal.length > 0 &&
                    allPersonal.every(
                        task =>
                            task.completed
                    );


                taskList.innerHTML = `

                    <div class="empty-task-message">

                        ${
                            allComplete
                                ? "🎉 Great job! You've completed your personal tasks."
                                : "Add your own tasks from the Roadmap page."
                        }

                    </div>

                `;

                return;

            }


            taskList.innerHTML =
                tasks
                    .map(
                        task => `

                            <label
                                class="dashboard-task-item"
                            >

                                <input
                                    type="checkbox"
                                    data-dashboard-task="${task.id}"
                                    ${
                                        task.completed
                                            ? "checked"
                                            : ""
                                    }
                                >


                                <span class="dashboard-task-check">
                                </span>


                                <span class="dashboard-task-title">

                                    ${escapeHTML(
                                        task.title
                                    )}

                                </span>

                            </label>

                        `
                    )
                    .join("");

        }


       /* =====================================================
   CAREER PROGRESS
   ONLY PERSONAL TASKS.
===================================================== */

function renderCareerProgress() {

    const career = getCurrentCareer();

    const progressText =
        document.getElementById("careerProgress");

    const progressCircle =
        document.querySelector(".progress-circle");


    /* =================================================
       NO CAREER SELECTED
    ================================================= */

    if (!career) {

        if (progressText) {
            progressText.textContent = "0%";
        }

        if (progressCircle) {
            progressCircle.style.background =
                "conic-gradient(var(--maroon) 0%, #f0e5e8 0%)";
        }

        return;
    }


    /* =================================================
       GET PERSONAL TASK PROGRESS
    ================================================= */

    let progress =
        TaskManager.getPersonalProgress(career.id);


    /*
     * Make sure progress is a valid number.
     */

    progress = Number(progress) || 0;


    /*
     * Keep progress between 0 and 100.
     */

    progress = Math.max(
        0,
        Math.min(
            100,
            progress
        )
    );


    /* =================================================
       UPDATE TEXT
    ================================================= */

    if (progressText) {

        progressText.textContent =
            `${progress}%`;

    }


    /* =================================================
       UPDATE CIRCLE
    ================================================= */

    if (progressCircle) {

        progressCircle.style.background =
            `conic-gradient(
                var(--maroon) ${progress}%,
                #f0e5e8 ${progress}%
            )`;

    }

}


        /* =====================================================
           SKILLS
        ===================================================== */

        function renderSkills() {

            if (!skillsList) {
                return;
            }


            const career =
                getCurrentCareer();


            if (!career) {

                skillsList.innerHTML = `

                    <div class="empty-task-message">

                        Choose a career to see skills.

                    </div>

                `;

                return;

            }


            const roadmap =
                getRoadmapForCareer(
                    career
                );


            const skills =
                roadmap &&
                Array.isArray(
                    roadmap.skills
                )
                    ? roadmap.skills
                    : (
                        Array.isArray(
                            career.skills
                        )
                            ? career.skills
                            : []
                    );


            skillsList.innerHTML =
                skills
                    .slice(
                        0,
                        8
                    )
                    .map(
                        skill => `

                            <div class="skill-item">

                                <span class="skill-name">

                                    ${escapeHTML(
                                        skill
                                    )}

                                </span>

                            </div>

                        `
                    )
                    .join("");

        }


        /* =====================================================
           COMPLETED
           
           Shows PERSONAL completed tasks.
        ===================================================== */

        function renderCompletedCount() {

            if (!completedCount) {
                return;
            }


            const career =
                getCurrentCareer();


            if (!career) {

                completedCount.textContent =
                    "0";

                return;

            }


            const personal =
                TaskManager.getPersonalTasks(
                    career.id
                );


            const completed =
                personal.filter(
                    task =>
                        task.completed
                ).length;


            completedCount.textContent =
                completed;

        }


        /* =====================================================
           SAVED CAREER
        ===================================================== */

        function renderSavedCareer() {

            if (!savedCareers) {
                return;
            }


            const career =
                getCurrentCareer();


            if (!career) {

                savedCareers.innerHTML = `

                    <div class="saved-career-item">
                        No career selected
                    </div>

                `;

                return;

            }


            savedCareers.innerHTML = `

                <div class="saved-career-item">

                    ${escapeHTML(
                        career.title ||
                        career.name ||
                        "Selected Career"
                    )}

                </div>

            `;

        }


        /* =====================================================
           CAREER GOAL
        ===================================================== */

        function renderCareerGoal() {

            if (!careerGoal) {
                return;
            }


            const career =
                getCurrentCareer();


            if (!career) {

                careerGoal.textContent =
                    "Choose a career to begin your journey.";

                return;

            }


            careerGoal.textContent =
                `Your current career goal is ${
                    career.title ||
                    career.name
                }.`;

        }


        /* =====================================================
           STREAK
        ===================================================== */

        function renderStreak() {

            if (!streakDays) {
                return;
            }


            const today =
                new Date()
                    .toISOString()
                    .slice(
                        0,
                        10
                    );


            const lastVisit =
                localStorage.getItem(
                    "careerCopilotLastVisit"
                );


            let streak =
                parseInt(
                    localStorage.getItem(
                        "careerCopilotStreak"
                    ) || "0",
                    10
                );


            if (
                !lastVisit
            ) {

                streak = 1;

            } else if (
                lastVisit !==
                today
            ) {

                const previous =
                    new Date(
                        lastVisit
                    );


                const current =
                    new Date(
                        today
                    );


                const difference =
                    Math.floor(
                        (
                            current -
                            previous
                        ) /
                        (
                            1000 *
                            60 *
                            60 *
                            24
                        )
                    );


                if (
                    difference ===
                    1
                ) {

                    streak++;

                } else if (
                    difference > 1
                ) {

                    streak = 1;

                }

            }


            localStorage.setItem(
                "careerCopilotStreak",
                String(
                    streak
                )
            );


            localStorage.setItem(
                "careerCopilotLastVisit",
                today
            );


            streakDays.textContent =
                streak;

        }


        /* =====================================================
           DASHBOARD CAREER ROADMAP
           
           ONLY ROADMAP TASKS.
        ===================================================== */

        function renderDashboardRoadmap() {

            const career =
                getCurrentCareer();


            if (
                !roadmapPhases
            ) {

                return;

            }


            if (!career) {

                roadmapPhases.innerHTML = `

                    <div class="dashboard-roadmap-empty">

                        <strong>
                            No career selected
                        </strong>

                        <span>
                            Choose a career to see your roadmap.
                        </span>

                    </div>

                `;

                return;

            }


            const roadmap =
                getRoadmapForCareer(
                    career
                );


            if (
                !roadmap ||
                !Array.isArray(
                    roadmap.phases
                )
            ) {

                roadmapPhases.innerHTML = `

                    <div class="dashboard-roadmap-empty">

                        <strong>
                            Roadmap not available
                        </strong>

                        <span>
                            A roadmap has not been added for this career yet.
                        </span>

                    </div>

                `;

                return;

            }


            /*
             * Make sure the predefined roadmap
             * tasks exist.
             */

            TaskManager.syncRoadmapTasks(
                career.id,
                roadmap.phases
            );


            const tasks =
                TaskManager.getRoadmapTasks(
                    career.id
                );


            const overallProgress =
                TaskManager.getProgress(
                    career.id
                );


            const completed =
                tasks.filter(
                    task =>
                        task.completed
                ).length;


            /*
             * Title
             */

            if (roadmapTitle) {

                roadmapTitle.textContent =
                    `Become a ${
                        career.title ||
                        career.name
                    }`;

            }


            if (roadmapSubtitle) {

                roadmapSubtitle.textContent =
                    `${
                        roadmap.phases.length
                    } learning phases • ${
                        roadmap.totalTime ||
                        "Flexible timeline"
                    }`;

            }


            /*
             * Overall percentage
             */

            if (roadmapPercent) {

                roadmapPercent.textContent =
                    `${overallProgress}%`;

            }


            if (roadmapProgress) {

                roadmapProgress.style.width =
                    `${overallProgress}%`;

            }


            if (roadmapProgressLabel) {

                roadmapProgressLabel.textContent =
                    `${completed} of ${tasks.length} roadmap tasks`;

            }


            /*
             * Phase cards
             */

            roadmapPhases.innerHTML =
                roadmap.phases
                    .map(
                        (
                            phase,
                            index
                        ) => {

                            const phaseId =
                                phase.id ||
                                `phase-${index + 1}`;


                            const phaseTasks =
                                tasks.filter(
                                    task => {

                                        return String(
                                            task.phaseId
                                        ) ===
                                        String(
                                            phaseId
                                        );

                                    }
                                );


                            const phaseCompleted =
                                phaseTasks.filter(
                                    task =>
                                        task.completed
                                ).length;


                            const phaseTotal =
                                phaseTasks.length;


                            const phaseProgress =
                                phaseTotal
                                    ? Math.round(
                                        (
                                            phaseCompleted /
                                            phaseTotal
                                        ) * 100
                                    )
                                    : 0;


                            const complete =
                                phaseTotal > 0 &&
                                phaseCompleted ===
                                    phaseTotal;


                            return `

                                <article
                                    class="dashboard-phase-card ${
                                        complete
                                            ? "completed"
                                            : ""
                                    }"
                                >

                                    <div class="dashboard-phase-top">

                                        <div class="dashboard-phase-number">

                                            ${
                                                String(
                                                    index + 1
                                                ).padStart(
                                                    2,
                                                    "0"
                                                )
                                            }

                                        </div>


                                        <span class="dashboard-phase-status">

                                            ${
                                                complete
                                                    ? "Completed"
                                                    : `${phaseCompleted}/${phaseTotal}`
                                            }

                                        </span>

                                    </div>


                                    <h3 class="dashboard-phase-title">

                                        ${escapeHTML(
                                            phase.title ||
                                            `Phase ${
                                                index + 1
                                            }`
                                        )}

                                    </h3>


                                    ${
                                        phase.duration
                                            ? `
                                                <span class="dashboard-phase-duration">

                                                    ${escapeHTML(
                                                        phase.duration
                                                    )}

                                                </span>
                                            `
                                            : ""
                                    }


                                    <div class="dashboard-phase-progress">

                                        <div class="dashboard-phase-progress-info">

                                            <span>
                                                Phase progress
                                            </span>

                                            <strong>
                                                ${phaseProgress}%
                                            </strong>

                                        </div>


                                        <div class="dashboard-phase-progress-bar">

                                            <div
                                                class="dashboard-phase-progress-fill"
                                                style="width:${phaseProgress}%"
                                            ></div>

                                        </div>

                                    </div>

                                </article>

                            `;

                        }
                    )
                    .join("");


            /*
             * Footer
             */

            if (
                overallProgress ===
                100
            ) {

                if (roadmapFooterTitle) {

                    roadmapFooterTitle.textContent =
                        "🎉 Roadmap completed!";

                }


                if (roadmapFooterText) {

                    roadmapFooterText.textContent =
                        "You have completed every predefined roadmap task.";

                }

            } else {

                if (roadmapFooterTitle) {

                    roadmapFooterTitle.textContent =
                        "Keep moving forward!";

                }


                if (roadmapFooterText) {

                    roadmapFooterText.textContent =
                        `${completed} of ${tasks.length} roadmap tasks completed.`;

                }

            }


            /*
             * Continue button
             */

            if (roadmapLink) {

                roadmapLink.href =
                    `roadmap.html?career=${encodeURIComponent(
                        career.id
                    )}`;

            }

        }


        /* =====================================================
           REFRESH EVERYTHING
        ===================================================== */

        function refreshDashboard() {

            renderUser();

            renderCareerGoal();

            renderTodayTasks();

            renderCareerProgress();

            renderSkills();

            renderCompletedCount();

            renderSavedCareer();

            renderStreak();

            renderDashboardRoadmap();

        }


        /* =====================================================
           DASHBOARD TASK CHECKBOX
           
           ONLY PERSONAL TASK.
        ===================================================== */

        if (taskList) {

            taskList.addEventListener(
                "change",
                function (event) {

                    const checkbox =
                        event.target.closest(
                            "[data-dashboard-task]"
                        );


                    if (!checkbox) {
                        return;
                    }


                    TaskManager.toggleTask(
                        checkbox.dataset.dashboardTask
                    );


                    /*
                     * This changes:
                     *
                     * Today's Tasks
                     * Career Progress
                     * Completed count
                     *
                     * It does NOT change
                     * Career Roadmap.
                     */

                    renderTodayTasks();

                    renderCareerProgress();

                    renderCompletedCount();

                }
            );

        }


        /* =====================================================
           TASK UPDATE FROM ROADMAP
        ===================================================== */

        window.addEventListener(
            "careerCopilotTasksUpdated",
            function () {

                refreshDashboard();

            }
        );


        /* =====================================================
           INITIAL LOAD
        ===================================================== */

        refreshDashboard();

    }
);


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    const div =
        document.createElement(
            "div"
        );

    div.textContent =
        value ?? "";

    return div.innerHTML;

}