/* =========================================================
   CAREER COPIOLIT
   TASK MANAGER
   =========================================================

   TWO SEPARATE SYSTEMS

   1. PERSONAL TASKS
      - User creates them on Roadmap page
      - Appear in Dashboard Today's Tasks
      - Control Dashboard Career Progress

   2. ROADMAP TASKS
      - Come from roadmaps.js
      - Appear in Roadmap phases
      - Control Roadmap Progress
      - Appear in Dashboard Career Roadmap

   Everything is stored in localStorage.
========================================================= */


const TASK_STORAGE_KEY = "careerCopiolitTasks";
const SELECTED_CAREER_KEY = "selectedCareer";


const TaskManager = {


    /* =====================================================
       READ ALL TASKS
    ===================================================== */

    _read() {

        try {

            const saved =
                localStorage.getItem(
                    TASK_STORAGE_KEY
                );

            if (!saved) {
                return [];
            }

            const tasks =
                JSON.parse(saved);

            return Array.isArray(tasks)
                ? tasks
                : [];

        } catch (error) {

            console.error(
                "TaskManager read error:",
                error
            );

            return [];

        }

    },


    /* =====================================================
       WRITE ALL TASKS
    ===================================================== */

    _write(tasks) {

        try {

            localStorage.setItem(
                TASK_STORAGE_KEY,
                JSON.stringify(tasks)
            );


            /*
             * Important:
             * The normal storage event does not fire
             * in the same browser tab.
             *
             * This custom event keeps Dashboard
             * and Roadmap synchronized.
             */

            window.dispatchEvent(
                new CustomEvent(
                    "careerCopiolitTasksUpdated"
                )
            );

        } catch (error) {

            console.error(
                "TaskManager write error:",
                error
            );

        }

    },


    /* =====================================================
       GET ALL
    ===================================================== */

    getAll() {

        return this._read();

    },


    /* =====================================================
       GET TASKS FOR CAREER
    ===================================================== */

    getForCareer(careerId) {

        return this
            ._read()
            .filter(task => {

                return String(
                    task.careerId
                ) === String(
                    careerId
                );

            });

    },


    /* =====================================================
       GET ROADMAP TASKS ONLY
    ===================================================== */

    getRoadmapTasks(careerId) {

        return this
            .getForCareer(careerId)
            .filter(task => {

                return task.type === "roadmap";

            });

    },


    /* =====================================================
       GET PERSONAL TASKS ONLY
    ===================================================== */

    getPersonalTasks(careerId) {

        return this
            .getForCareer(careerId)
            .filter(task => {

                return task.type === "personal";

            });

    },


    /* =====================================================
       ADD TASK
    ===================================================== */

    addTask({
        careerId,
        title,
        type = "personal",
        phaseId = null
    }) {

        const cleanTitle =
            String(
                title || ""
            ).trim();


        if (!cleanTitle) {
            return null;
        }


        const tasks =
            this._read();


        const task = {

            id:
                `${Date.now()}-${Math.random()
                    .toString(36)
                    .slice(2, 9)}`,

            careerId:
                String(careerId),

            title:
                cleanTitle,

            type:
                type,

            phaseId:
                phaseId
                    ? String(phaseId)
                    : null,

            completed:
                false,

            createdAt:
                new Date().toISOString(),

            completedAt:
                null

        };


        tasks.push(task);


        this._write(
            tasks
        );


        return task;

    },


    /* =====================================================
       CREATE / SYNC ROADMAP TASKS
       
       This converts roadmaps.js tasks into TaskManager
       tasks.

       Existing completed state is preserved.
    ===================================================== */

    syncRoadmapTasks(
        careerId,
        phases
    ) {

        if (!Array.isArray(phases)) {
            return [];
        }


        const allTasks =
            this._read();


        /*
         * Existing roadmap tasks for this career.
         */

        const existingRoadmapTasks =
            allTasks.filter(task => {

                return (
                    String(
                        task.careerId
                    ) === String(
                        careerId
                    )
                    &&
                    task.type === "roadmap"
                );

            });


        /*
         * Keep:
         * - personal tasks
         * - tasks belonging to other careers
         */

        const otherTasks =
            allTasks.filter(task => {

                return !(
                    String(
                        task.careerId
                    ) === String(
                        careerId
                    )
                    &&
                    task.type === "roadmap"
                );

            });


        const newRoadmapTasks = [];


        phases.forEach(
            (phase, phaseIndex) => {

                if (!phase) {
                    return;
                }


                const phaseId =
                    phase.id ||
                    `phase-${phaseIndex + 1}`;


                const phaseTasks =
                    Array.isArray(
                        phase.tasks
                    )
                        ? phase.tasks
                        : [];


                phaseTasks.forEach(
                    title => {

                        const cleanTitle =
                            String(
                                title || ""
                            ).trim();


                        if (!cleanTitle) {
                            return;
                        }


                        /*
                         * Find an existing task
                         * with the same phase + title.
                         */

                        const existing =
                            existingRoadmapTasks.find(
                                task => {

                                    return (
                                        String(
                                            task.phaseId
                                        ) === String(
                                            phaseId
                                        )
                                        &&
                                        String(
                                            task.title
                                        ).trim() ===
                                        cleanTitle
                                    );

                                }
                            );


                        if (existing) {

                            /*
                             * Preserve completion.
                             */

                            newRoadmapTasks.push(
                                existing
                            );

                        } else {

                            /*
                             * Create new roadmap task.
                             */

                            newRoadmapTasks.push({

                                id:
                                    `roadmap-${careerId}-${Date.now()}-${Math.random()
                                        .toString(36)
                                        .slice(2, 8)}`,

                                careerId:
                                    String(
                                        careerId
                                    ),

                                title:
                                    cleanTitle,

                                type:
                                    "roadmap",

                                phaseId:
                                    String(
                                        phaseId
                                    ),

                                completed:
                                    false,

                                createdAt:
                                    new Date().toISOString(),

                                completedAt:
                                    null

                            });

                        }

                    }
                );

            }
        );


        const finalTasks =
            otherTasks.concat(
                newRoadmapTasks
            );


        const oldData =
            JSON.stringify(
                allTasks
            );


        const newData =
            JSON.stringify(
                finalTasks
            );


        /*
         * Only write when something actually changed.
         */

        if (oldData !== newData) {

            this._write(
                finalTasks
            );

        }


        return newRoadmapTasks;

    },


    /*
     * Backwards-compatible name.
     */

    addRoadmapTasks(
        careerId,
        phases
    ) {

        return this.syncRoadmapTasks(
            careerId,
            phases
        );

    },


    /* =====================================================
       TOGGLE TASK
    ===================================================== */

    toggleTask(taskId) {

        const tasks =
            this._read();


        const task =
            tasks.find(item => {

                return String(
                    item.id
                ) === String(
                    taskId
                );

            });


        if (!task) {
            return null;
        }


        task.completed =
            !task.completed;


        task.completedAt =
            task.completed
                ? new Date().toISOString()
                : null;


        this._write(
            tasks
        );


        return task;

    },


    /* =====================================================
       COMPLETE TASK
    ===================================================== */

    completeTask(taskId) {

        const tasks =
            this._read();


        const task =
            tasks.find(item => {

                return String(
                    item.id
                ) === String(
                    taskId
                );

            });


        if (!task) {
            return null;
        }


        task.completed =
            true;


        task.completedAt =
            new Date().toISOString();


        this._write(
            tasks
        );


        return task;

    },


    /* =====================================================
       UNCOMPLETE TASK
    ===================================================== */

    uncompleteTask(taskId) {

        const tasks =
            this._read();


        const task =
            tasks.find(item => {

                return String(
                    item.id
                ) === String(
                    taskId
                );

            });


        if (!task) {
            return null;
        }


        task.completed =
            false;


        task.completedAt =
            null;


        this._write(
            tasks
        );


        return task;

    },


    /* =====================================================
       DELETE TASK
    ===================================================== */

    deleteTask(taskId) {

        const tasks =
            this
                ._read()
                .filter(task => {

                    return String(
                        task.id
                    ) !== String(
                        taskId
                    );

                });


        this._write(
            tasks
        );

    },


    /* =====================================================
       DELETE PERSONAL TASKS FOR CAREER
    ===================================================== */

    clearPersonalTasks(
        careerId
    ) {

        const tasks =
            this
                ._read()
                .filter(task => {

                    const sameCareer =
                        String(
                            task.careerId
                        ) === String(
                            careerId
                        );


                    const personal =
                        task.type ===
                        "personal";


                    return !(
                        sameCareer &&
                        personal
                    );

                });


        this._write(
            tasks
        );

    },


    /* =====================================================
       ROADMAP PROGRESS
       
       ONLY ROADMAP TASKS.
       
       Personal tasks do NOT affect this.
    ===================================================== */

    getProgress(
        careerId
    ) {

        const tasks =
            this.getRoadmapTasks(
                careerId
            );


        if (!tasks.length) {
            return 0;
        }


        const completed =
            tasks.filter(
                task =>
                    task.completed
            ).length;


        return Math.round(
            (
                completed /
                tasks.length
            ) * 100
        );

    },


    /* =====================================================
       PERSONAL / CAREER PROGRESS
       
       ONLY PERSONAL TASKS.
       
       Roadmap tasks do NOT affect this.
    ===================================================== */

    getPersonalProgress(
        careerId
    ) {

        const tasks =
            this.getPersonalTasks(
                careerId
            );


        if (!tasks.length) {
            return 0;
        }


        const completed =
            tasks.filter(
                task =>
                    task.completed
            ).length;


        return Math.round(
            (
                completed /
                tasks.length
            ) * 100
        );

    },


    /* =====================================================
       COMPLETED ALL TASKS
    ===================================================== */

    getCompletedCount(
        careerId
    ) {

        return this
            .getForCareer(
                careerId
            )
            .filter(
                task =>
                    task.completed
            )
            .length;

    },


    /* =====================================================
       TOTAL ALL TASKS
    ===================================================== */

    getTotalCount(
        careerId
    ) {

        return this
            .getForCareer(
                careerId
            )
            .length;

    },


    /* =====================================================
       TODAY'S TASKS
       
       IMPORTANT:
       ONLY PERSONAL TASKS.
    ===================================================== */

    getTodayTasks(
        careerId,
        limit = 4
    ) {

        return this
            .getPersonalTasks(
                careerId
            )
            .filter(
                task =>
                    !task.completed
            )
            .slice(
                0,
                limit
            );

    },


    /* =====================================================
       STATS
    ===================================================== */

    getStats(
        careerId
    ) {

        const roadmap =
            this.getRoadmapTasks(
                careerId
            );


        const personal =
            this.getPersonalTasks(
                careerId
            );


        const roadmapCompleted =
            roadmap.filter(
                task =>
                    task.completed
            ).length;


        const personalCompleted =
            personal.filter(
                task =>
                    task.completed
            ).length;


        return {

            roadmapTotal:
                roadmap.length,

            roadmapCompleted:
                roadmapCompleted,

            roadmapProgress:
                roadmap.length
                    ? Math.round(
                        (
                            roadmapCompleted /
                            roadmap.length
                        ) * 100
                    )
                    : 0,

            personalTotal:
                personal.length,

            personalCompleted:
                personalCompleted,

            personalProgress:
                personal.length
                    ? Math.round(
                        (
                            personalCompleted /
                            personal.length
                        ) * 100
                    )
                    : 0,

            total:
                roadmap.length +
                personal.length,

            completed:
                roadmapCompleted +
                personalCompleted

        };

    },


    /* =====================================================
       RESET CAREER
       
       Removes both types for this career.
    ===================================================== */

    resetRoadmap(
        careerId
    ) {

        const tasks =
            this
                ._read()
                .filter(task => {

                    return String(
                        task.careerId
                    ) !== String(
                        careerId
                    );

                });


        this._write(
            tasks
        );

    }

};


/* =========================================================
   SELECTED CAREER
========================================================= */

function saveSelectedCareer(
    careerId
) {

    localStorage.setItem(
        SELECTED_CAREER_KEY,
        String(careerId)
    );

}


function getSelectedCareerId() {

    return localStorage.getItem(
        SELECTED_CAREER_KEY
    );

}


function clearSelectedCareer() {

    localStorage.removeItem(
        SELECTED_CAREER_KEY
    );

}


/* =========================================================
   CROSS-TAB SYNC
========================================================= */

window.addEventListener(
    "storage",
    function (event) {

        if (
            event.key ===
            TASK_STORAGE_KEY
        ) {

            window.dispatchEvent(
                new CustomEvent(
                    "careerCopiolitTasksUpdated"
                )
            );

        }

    }
);