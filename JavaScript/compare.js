/* =========================================================
   CAREER COPIOLIT - COMPARE ENGINE
   ========================================================= */


document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       ELEMENTS
    ----------------------------------------------------- */

    const fieldSelection =
        document.getElementById("fieldSelection");

    const fieldOptions =
        document.querySelectorAll(".field-option");

    const startComparison =
        document.getElementById("startComparison");

    const dynamicQuestions =
        document.getElementById("dynamicQuestions");

    const questionContainer =
        document.getElementById("questionContainer");

    const previousBtn =
        document.getElementById("previousBtn");

    const nextBtn =
        document.getElementById("nextBtn");

    const comparisonResult =
        document.getElementById("comparisonResult");

    const compareProgress =
        document.getElementById("compareProgress");

    const progressFill =
        document.getElementById("progressFill");

    const progressText =
        document.getElementById("progressText");

    const progressPercentage =
        document.getElementById("progressPercentage");


    /* -----------------------------------------------------
       STATE
    ----------------------------------------------------- */

    let selectedField = null;

    let questions = [];

    let currentQuestion = 0;

    let userAnswers = {};


    /* -----------------------------------------------------
       FIELD SELECTION
    ----------------------------------------------------- */

    fieldOptions.forEach(option => {

        option.addEventListener("click", () => {

            fieldOptions.forEach(item => {
                item.classList.remove("selected");
            });

            option.classList.add("selected");

            selectedField =
                option.dataset.field;

            startComparison.disabled = false;

        });

    });


    /* -----------------------------------------------------
       START COMPARISON
    ----------------------------------------------------- */

    startComparison.addEventListener("click", () => {

        if (!selectedField) {
            return;
        }

        questions =
            careerQuestions[selectedField] || [];

        if (questions.length === 0) {
            return;
        }

        currentQuestion = 0;

        userAnswers = {};

        fieldSelection.hidden = true;

        dynamicQuestions.hidden = false;

        comparisonResult.hidden = true;

        renderQuestion();

    });


    /* -----------------------------------------------------
       RENDER QUESTION
    ----------------------------------------------------- */

    function renderQuestion() {

        const question =
            questions[currentQuestion];

        if (!question) {
            return;
        }


        questionContainer.innerHTML = "";


        /* Question heading */

        const questionNumber =
            document.createElement("span");

        questionNumber.className =
            "question-number";

        questionNumber.textContent =
            `Question ${currentQuestion + 1}`;


        const questionTitle =
            document.createElement("h2");

        questionTitle.textContent =
            question.question;


        const questionDescription =
            document.createElement("p");

        questionDescription.className =
            "question-description";

        questionDescription.textContent =
            question.description || "";


        const optionsContainer =
            document.createElement("div");

        optionsContainer.className =
            "question-options";


        /* Create options */

        question.options.forEach((option, index) => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "question-option";


            let value;
            let label;


            if (typeof option === "string") {

                value = option;
                label = option;

            } else {

                value = option.value;
                label = option.label;

            }


            button.dataset.value =
                value;


            button.innerHTML = `
                <span class="option-check">
                    ✓
                </span>

                <span class="option-label">
                    ${label}
                </span>
            `;


            /* Restore previous answer */

            if (
                question.type === "skills" &&
                Array.isArray(userAnswers[question.id]) &&
                userAnswers[question.id].includes(value)
            ) {

                button.classList.add("selected");

            }


            if (
                question.type !== "skills" &&
                userAnswers[question.id] === value
            ) {

                button.classList.add("selected");

            }


            /* Click */

            button.addEventListener("click", () => {

                handleAnswer(
                    question,
                    value,
                    button
                );

            });


            optionsContainer.appendChild(button);

        });


        questionContainer.appendChild(questionNumber);

        questionContainer.appendChild(questionTitle);

        questionContainer.appendChild(questionDescription);

        questionContainer.appendChild(optionsContainer);


        updateNavigation();

        updateProgress();

    }


    /* -----------------------------------------------------
       HANDLE ANSWER
    ----------------------------------------------------- */

    function handleAnswer(
        question,
        value,
        button
    ) {

        /* Multiple selection */

        if (question.type === "skills") {

            if (!Array.isArray(userAnswers[question.id])) {
                userAnswers[question.id] = [];
            }


            const selected =
                userAnswers[question.id];


            if (selected.includes(value)) {

                userAnswers[question.id] =
                    selected.filter(
                        item => item !== value
                    );

                button.classList.remove("selected");

            } else {

                selected.push(value);

                button.classList.add("selected");

            }

            return;
        }


        /* Single selection */

        userAnswers[question.id] =
            value;


        const allOptions =
            questionContainer.querySelectorAll(
                ".question-option"
            );


        allOptions.forEach(option => {
            option.classList.remove("selected");
        });


        button.classList.add("selected");

    }


    /* -----------------------------------------------------
       VALIDATE ANSWER
    ----------------------------------------------------- */

    function hasAnswered(question) {

        const answer =
            userAnswers[question.id];


        if (question.type === "skills") {

            return Array.isArray(answer) &&
                   answer.length > 0;

        }


        return answer !== undefined &&
               answer !== null &&
               answer !== "";

    }


    /* -----------------------------------------------------
       NEXT
    ----------------------------------------------------- */

    nextBtn.addEventListener("click", () => {

        const question =
            questions[currentQuestion];


        if (!hasAnswered(question)) {

            showValidationMessage();

            return;

        }


        if (
            currentQuestion <
            questions.length - 1
        ) {

            currentQuestion++;

            renderQuestion();

        } else {

            calculateComparison();

        }

    });


    /* -----------------------------------------------------
       PREVIOUS
    ----------------------------------------------------- */

    previousBtn.addEventListener("click", () => {

        if (currentQuestion > 0) {

            currentQuestion--;

            renderQuestion();

        } else {

            dynamicQuestions.hidden = true;

            fieldSelection.hidden = false;

        }

    });


    /* -----------------------------------------------------
       VALIDATION MESSAGE
    ----------------------------------------------------- */

    function showValidationMessage() {

        const existing =
            questionContainer.querySelector(
                ".validation-message"
            );


        if (existing) {
            return;
        }


        const message =
            document.createElement("p");

        message.className =
            "validation-message";

        message.textContent =
            "Please select an answer before continuing.";


        questionContainer.appendChild(message);

    }


    /* -----------------------------------------------------
       PROGRESS
    ----------------------------------------------------- */

    function updateProgress() {

        const total =
            questions.length;

        const current =
            currentQuestion + 1;

        const percentage =
            Math.round((current / total) * 100);


        progressText.textContent =
            `Question ${current} of ${total}`;


        progressPercentage.textContent =
            `${percentage}%`;


        progressFill.style.width =
            `${percentage}%`;


        compareProgress.innerHTML = "";


        questions.forEach((question, index) => {

            const dot =
                document.createElement("span");

            dot.className =
                "progress-dot";


            if (index < currentQuestion) {

                dot.classList.add("completed");

            }


            if (index === currentQuestion) {

                dot.classList.add("active");

            }


            compareProgress.appendChild(dot);

        });

    }


    /* -----------------------------------------------------
       NAVIGATION STATE
    ----------------------------------------------------- */

    function updateNavigation() {

        previousBtn.disabled =
            currentQuestion === 0;


        if (
            currentQuestion ===
            questions.length - 1
        ) {

            nextBtn.innerHTML =
                `See My Results <span>→</span>`;

        } else {

            nextBtn.innerHTML =
                `Next <span>→</span>`;

        }

    }


    /* =====================================================
       COMPARISON ENGINE
       ===================================================== */


    function calculateComparison() {

        const selectedCareers =
            careers.filter(
                career =>
                    career.category === selectedField
            );


        if (selectedCareers.length === 0) {

            showNoCareerResult();

            return;

        }


        const userProfile =
            buildUserProfile();


        const scoredCareers =
            selectedCareers.map(career => {

                return {
                    career: career,
                    score: calculateCareerScore(
                        career,
                        userProfile
                    )
                };

            });


        scoredCareers.sort(
            (a, b) => b.score - a.score
        );


        const topMatches =
            scoredCareers.slice(0, 3);


        showResults(
            topMatches,
            userProfile
        );

    }


    /* -----------------------------------------------------
       BUILD USER PROFILE
       ----------------------------------------------------- */

    function buildUserProfile() {

        const profile = {

            skills: [],

            interests: [],

            level: null

        };


        questions.forEach(question => {

            const answer =
                userAnswers[question.id];


            if (!answer) {
                return;
            }


            if (question.type === "skills") {

                profile.skills.push(...answer);

            }


            if (question.type === "interest") {

                profile.interests.push(answer);

            }


            if (question.type === "level") {

                profile.level = answer;

            }

        });


        return profile;

    }


    /* -----------------------------------------------------
       CAREER SCORE
       ----------------------------------------------------- */

    function calculateCareerScore(
        career,
        profile
    ) {

        const careerSkills =
            career.skills || [];


        const careerInterests =
            career.interests || [];


        /* Normalize */

        const userSkills =
            profile.skills.map(
                normalize
            );


        const requiredSkills =
            careerSkills.map(
                normalize
            );


        const userInterests =
            profile.interests.map(
                normalize
            );


        const targetInterests =
            careerInterests.map(
                normalize
            );


        /* -----------------------------------------------
           SKILL SCORE
        ----------------------------------------------- */

        let matchingSkills = 0;


        requiredSkills.forEach(skill => {

            if (
                userSkills.some(
                    userSkill =>
                        userSkill === skill
                )
            ) {

                matchingSkills++;

            }

        });


        let skillScore = 0;


        if (requiredSkills.length > 0) {

            skillScore =
                (matchingSkills /
                    requiredSkills.length) *
                100;

        }


        /* -----------------------------------------------
           INTEREST SCORE
        ----------------------------------------------- */

        let matchingInterests = 0;


        targetInterests.forEach(interest => {

            if (
                userInterests.includes(interest)
            ) {

                matchingInterests++;

            }

        });


        let interestScore = 0;


        if (targetInterests.length > 0) {

            interestScore =
                (matchingInterests /
                    targetInterests.length) *
                100;

        }


        /* -----------------------------------------------
           LEVEL SCORE
        ----------------------------------------------- */

        let levelScore = 70;


        if (
            profile.level &&
            career.difficulty
        ) {

            const userLevel =
                getLevelNumber(
                    profile.level
                );


            const careerLevel =
                getLevelNumber(
                    career.difficulty
                );


            const difference =
                Math.abs(
                    userLevel -
                    careerLevel
                );


            if (difference === 0) {

                levelScore = 100;

            } else if (difference === 1) {

                levelScore = 75;

            } else {

                levelScore = 50;

            }

        }


        /* -----------------------------------------------
           FINAL SCORE
        ----------------------------------------------- */

        const finalScore =
            (skillScore * 0.50) +
            (interestScore * 0.30) +
            (levelScore * 0.20);


        return Math.round(finalScore);

    }


    /* -----------------------------------------------------
       NORMALIZE
       ----------------------------------------------------- */

    function normalize(value) {

        return String(value)
            .toLowerCase()
            .trim();

    }


    /* -----------------------------------------------------
       LEVEL NUMBER
       ----------------------------------------------------- */

    function getLevelNumber(level) {

        const normalized =
            normalize(level);


        if (
            normalized === "beginner"
        ) {

            return 1;

        }


        if (
            normalized === "intermediate"
        ) {

            return 2;

        }


        if (
            normalized === "advanced"
        ) {

            return 3;

        }


        return 2;

    }


    /* =====================================================
       RESULTS
       ===================================================== */

    function showResults(
        matches,
        userProfile
    ) {

        const best =
            matches[0];


        const bestCareer =
            best.career;


        const missingSkills =
            getMissingSkills(
                bestCareer,
                userProfile.skills
            );


        const matchingSkills =
            getMatchingSkills(
                bestCareer,
                userProfile.skills
            );


        comparisonResult.innerHTML = `

            <div class="result-header">

                <span class="result-badge">
                    Your Career Match
                </span>

                <h1>
                    We found a strong direction for you.
                </h1>

                <p>
                    Based on your answers, this career
                    currently matches your profile the best.
                </p>

            </div>


            <div class="best-match-card">

                <div class="best-match-info">

                    <div class="result-career-icon">
                        ${bestCareer.icon || "🧭"}
                    </div>

                    <div>

                        <span class="best-match-label">
                            Best Match
                        </span>

                        <h2>
                            ${bestCareer.title}
                        </h2>

                        <p>
                            ${bestCareer.description || ""}
                        </p>

                    </div>

                </div>


                <div
                    class="match-score"
                    style="--score: ${best.score}%"
                >

                    <div class="score-inner">

                        <strong>
                            ${best.score}%
                        </strong>

                        <span>
                            Match
                        </span>

                    </div>

                </div>

            </div>


            <div class="result-grid">

                <div class="result-detail-card">

                    <div class="result-card-heading">

                        <span class="result-card-icon">
                            ✓
                        </span>

                        <div>

                            <h3>
                                Skills you already have
                            </h3>

                            <p>
                                These skills can help you get started.
                            </p>

                        </div>

                    </div>


                    <div class="skill-list">

                        ${
                            matchingSkills.length
                            ? matchingSkills.map(skill => `
                                <span class="skill-tag matched">
                                    ${skill}
                                </span>
                            `).join("")
                            : `
                                <span class="empty-result">
                                    No direct skill matches yet.
                                </span>
                            `
                        }

                    </div>

                </div>


                <div class="result-detail-card">

                    <div class="result-card-heading">

                        <span class="result-card-icon">
                            +
                        </span>

                        <div>

                            <h3>
                                Skills to learn
                            </h3>

                            <p>
                                Focus on these to move closer to your goal.
                            </p>

                        </div>

                    </div>


                    <div class="skill-list">

                        ${
                            missingSkills.length
                            ? missingSkills.map(skill => `
                                <span class="skill-tag missing">
                                    ${skill}
                                </span>
                            `).join("")
                            : `
                                <span class="empty-result">
                                    You already have the main listed skills.
                                </span>
                            `
                        }

                    </div>

                </div>

            </div>


            <div class="other-matches">

                <div class="other-matches-heading">

                    <span class="result-badge">
                        Other Matches
                    </span>

                    <h2>
                        Careers worth exploring
                    </h2>

                </div>


                <div class="match-list">

                    ${
                        matches.map((item, index) => `

                            <div class="match-item">

                                <div class="match-item-icon">
                                    ${item.career.icon || "🧭"}
                                </div>

                                <div class="match-item-info">

                                    <h3>
                                        ${item.career.title}
                                    </h3>

                                    <p>
                                        ${item.career.description || ""}
                                    </p>

                                </div>

                                <div class="small-score">

                                    ${item.score}%

                                </div>

                            </div>

                        `).join("")
                    }

                </div>

            </div>


            <div class="result-advice">

                <span class="advice-icon">
                    ✈
                </span>

                <div>

                    <h3>
                        What's your next step?
                    </h3>

                    <p>
                        Don't worry if you don't have every required skill.
                        Use this result as a starting point and build your
                        skills gradually.
                    </p>

                </div>

            </div>


            <div class="result-actions">

                <button href="../roadmaps.html"
                    class="primary-button"
                    id="makeRoadmapBtn"
                >
                    Make My Roadmap
                    <span>→</span>
                </button>


                <button
                    class="secondary-button"
                    id="compareAgainBtn"
                >
                    Compare Again
                </button>

            </div>

        `;


        dynamicQuestions.hidden = true;

        comparisonResult.hidden = false;


        /* Roadmap */

        const makeRoadmapBtn =
            document.getElementById(
                "makeRoadmapBtn"
            );


        makeRoadmapBtn.addEventListener(
            "click",
            () => {

                makeRoadmap(
                    bestCareer.id
                );

            }
        );

        document.getElementById("makeRoadmapBtn").addEventListener("click", function () {
            window.location.href = "roadmaps.html";
        });


        /* Compare again */

        const compareAgainBtn =
            document.getElementById(
                "compareAgainBtn"
            );


        compareAgainBtn.addEventListener(
            "click",
            restartComparison
        );


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    

    


    /* -----------------------------------------------------
       MATCHING SKILLS
       ----------------------------------------------------- */

    function getMatchingSkills(
        career,
        userSkills
    ) {

        const skills =
            career.skills || [];


        const normalizedUserSkills =
            userSkills.map(
                normalize
            );


        return skills.filter(
            skill =>
                normalizedUserSkills.includes(
                    normalize(skill)
                )
        );

    }


    /* -----------------------------------------------------
       MISSING SKILLS
       ----------------------------------------------------- */

    function getMissingSkills(
        career,
        userSkills
    ) {

        const skills =
            career.skills || [];


        const normalizedUserSkills =
            userSkills.map(
                normalize
            );


        return skills.filter(
            skill =>
                !normalizedUserSkills.includes(
                    normalize(skill)
                )
        );

    }


    /* -----------------------------------------------------
       MAKE ROADMAP
       ----------------------------------------------------- */

    function makeRoadmap(
        careerId
    ) {

        localStorage.setItem(
            "selectedCareer",
            String(careerId)
        );


        window.location.href =
            `roadmap.html?career=${careerId}`;

    }


    /* -----------------------------------------------------
       RESTART
       ----------------------------------------------------- */

    function restartComparison() {

        selectedField = null;

        questions = [];

        currentQuestion = 0;

        userAnswers = {};


        fieldOptions.forEach(option => {

            option.classList.remove(
                "selected"
            );

        });


        startComparison.disabled =
            true;


        comparisonResult.hidden =
            true;


        dynamicQuestions.hidden =
            true;


        fieldSelection.hidden =
            false;


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* -----------------------------------------------------
       NO CAREER RESULT
       ----------------------------------------------------- */

    function showNoCareerResult() {

        comparisonResult.innerHTML = `

            <div class="no-result">

                <h2>
                    We couldn't find careers for this field yet.
                </h2>

                <p>
                    Try another field and compare again.
                </p>

                <button
                    class="primary-button"
                    id="tryAgainBtn"
                >
                    Compare Again
                </button>

            </div>

        `;


        dynamicQuestions.hidden = true;

        comparisonResult.hidden = false;


        document
            .getElementById("tryAgainBtn")
            .addEventListener(
                "click",
                restartComparison
            );

    }

});


document.addEventListener("click", function (event) {

    if (event.target.closest("#makeRoadmapBtn")) {

        if (!matches || matches.length === 0) {
            alert("No career result found.");
            return;
        }

        const selectedCareer = matches[0].career;

        localStorage.setItem(
            "selectedCareer",
            JSON.stringify(selectedCareer)
        );

        window.location.href = "roadmap.html";
    }

});