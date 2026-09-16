/* =========================================================
   CAREER COPIOLIT - EXPLORE PAGE
   Handles:
   - Career cards
   - Search
   - Category filters
   - Career details
   - Salary
   - Companies
   - Career growth
   - Job roles
   - Roadmap selection
   - Compare selection
   ========================================================= */


/* =========================================================
   1. GLOBAL VARIABLES
   ========================================================= */

let allCareers = [];
let filteredCareers = [];
let selectedCareer = null;

let currentCategory = "all";
let currentSearch = "";


/* =========================================================
   2. DOM ELEMENTS
   ========================================================= */

const careerGrid = document.getElementById("careerGrid");
const careerSearch = document.getElementById("careerSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const noResults = document.getElementById("noResults");

const careerDetailsSection =
    document.getElementById("careerDetailsSection");

const backToExplore =
    document.getElementById("backToExplore");

const careerDetailsIcon =
    document.getElementById("careerDetailsIcon");

const careerDetailsCategory =
    document.getElementById("careerDetailsCategory");

const careerDetailsTitle =
    document.getElementById("careerDetailsTitle");

const careerDetailsDescription =
    document.getElementById("careerDetailsDescription");

const careerOverview =
    document.getElementById("careerOverview");

const careerEducation =
    document.getElementById("careerEducation");

const careerSkills =
    document.getElementById("careerSkills");

const careerSalary =
    document.getElementById("careerSalary");

const careerCompanies =
    document.getElementById("careerCompanies");

const careerGrowth =
    document.getElementById("careerGrowth");

const careerRoles =
    document.getElementById("careerRoles");

const careerHowToStart =
    document.getElementById("careerHowToStart");

const buildRoadmapBtn =
    document.getElementById("buildRoadmapBtn");

const compareCareerBtn =
    document.getElementById("compareCareerBtn");


/* =========================================================
   3. LOAD CAREER DATA
   careers.js must be loaded before explore.js
   ========================================================= */

function loadCareers() {

    /*
       Support different possible careers.js structures.

       Example:
       const careers = [...]
       
       OR:
       const careerData = [...]
    */

    if (typeof careers !== "undefined" && Array.isArray(careers)) {
        allCareers = careers;
    }

    else if (
        typeof careerData !== "undefined" &&
        Array.isArray(careerData)
    ) {
        allCareers = careerData;
    }

    else {
        console.error(
            "Career data was not found. Make sure careers.js loads before explore.js."
        );

        allCareers = [];
    }

    filteredCareers = [...allCareers];

    renderCareerCards(filteredCareers);
}


/* =========================================================
   4. NORMALIZE CATEGORY
   ========================================================= */

function normalizeCategory(category) {

    if (!category) {
        return "";
    }

    return String(category)
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "")
        .replace(/-/g, "");
}


/* =========================================================
   5. CATEGORY MATCHING
   ========================================================= */

function categoryMatches(career, selectedCategory) {

    if (selectedCategory === "all") {
        return true;
    }

    const careerCategory =
        normalizeCategory(career.category);

    const careerStream =
        normalizeCategory(career.stream);

    const target =
        normalizeCategory(selectedCategory);

    return (
        careerCategory === target ||
        careerStream === target
    );
}


/* =========================================================
   6. SEARCH MATCHING
   ========================================================= */

function careerMatchesSearch(career, searchTerm) {

    if (!searchTerm) {
        return true;
    }

    const term = searchTerm.toLowerCase().trim();

    if (!term) {
        return true;
    }

    /*
       Search through multiple career fields so users can search
       by career name, skills, companies, education, etc.
    */

    const searchableText = [

        career.id,
        career.name,
        career.title,
        career.category,
        career.stream,
        career.description,
        career.education,
        career.degree,
        career.beginnerSalary,
        career.experiencedSalary,
        career.demand,
        career.suitableFor,

        ...(Array.isArray(career.skills)
            ? career.skills
            : []),

        ...(Array.isArray(career.famousCompanies)
            ? career.famousCompanies
            : []),

        ...(Array.isArray(career.jobRoles)
            ? career.jobRoles
            : []),

        ...(Array.isArray(career.careerPath)
            ? career.careerPath
            : []),

        ...(Array.isArray(career.roadmap)
            ? career.roadmap
            : []),

        ...(Array.isArray(career.certifications)
            ? career.certifications
            : [])

    ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

    return searchableText.includes(term);
}


/* =========================================================
   7. FILTER CAREERS
   ========================================================= */

function applyFilters() {

    filteredCareers = allCareers.filter(career => {

        const categoryMatch =
            categoryMatches(career, currentCategory);

        const searchMatch =
            careerMatchesSearch(career, currentSearch);

        return categoryMatch && searchMatch;
    });

    renderCareerCards(filteredCareers);
}


/* =========================================================
   8. RENDER CAREER CARDS
   ========================================================= */

function renderCareerCards(careersToRender) {

    if (!careerGrid) {
        return;
    }

    careerGrid.innerHTML = "";

    if (!careersToRender || careersToRender.length === 0) {

        if (noResults) {
            noResults.style.display = "block";
        }

        return;
    }

    if (noResults) {
        noResults.style.display = "none";
    }


    careersToRender.forEach(career => {

        const card = document.createElement("article");

        card.className = "career-card";

        /*
           Keep the career ID on the card so it can be identified
           later without changing your existing HTML.
        */

        card.dataset.careerId = career.id || "";


        /* -----------------------------
           ICON
           ----------------------------- */

        const icon = document.createElement("div");
        icon.className = "career-card-icon";

        const iconName = careerIcons[career.id] || "briefcase";

        icon.innerHTML = `<i class="fa-solid fa-${iconName}"></i>`;


        /* -----------------------------
           CATEGORY
           ----------------------------- */

        const category = document.createElement("span");

        category.className = "career-card-category";

        category.textContent =
            career.stream ||
            formatCategory(career.category) ||
            "Career";


        /* -----------------------------
           TITLE
           ----------------------------- */

        const title = document.createElement("h3");

        title.className = "career-card-title";

        title.textContent =
            career.title ||
            career.name ||
            "Career";


        /* -----------------------------
           DESCRIPTION
           ----------------------------- */

        const description = document.createElement("p");

        description.className = "career-card-description";

        description.textContent =
            career.description ||
            "Explore this career path and discover what it involves.";


        /* -----------------------------
           FOOTER
           ----------------------------- */

        const footer = document.createElement("div");

        footer.className = "career-card-footer";


        /* -----------------------------
           EXPLORE MORE BUTTON
           ----------------------------- */

        const exploreButton =
            document.createElement("button");

        exploreButton.type = "button";

        exploreButton.className = "explore-more-btn";

        exploreButton.textContent = "Explore More →";

        exploreButton.dataset.careerId =
            career.id || "";


        exploreButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                openCareerDetails(career);
            }
        );


        footer.appendChild(exploreButton);


        /* -----------------------------
           BUILD CARD
           ----------------------------- */

        card.appendChild(icon);
        card.appendChild(category);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(footer);


        /*
           Allow clicking the whole card too.
        */

        card.addEventListener(
            "click",
            function (event) {

                if (
                    event.target.closest(
                        ".explore-more-btn"
                    )
                ) {
                    return;
                }

                openCareerDetails(career);
            }
        );


        careerGrid.appendChild(card);
    });
}


/* =========================================================
   9. FORMAT CATEGORY
   ========================================================= */

function formatCategory(category) {

    if (!category) {
        return "";
    }

    const categoryMap = {

        technology: "Technology",
        healthcare: "Healthcare",
        business: "Business",
        creative: "Creative",
        education: "Education",
        science: "Science",
        others: "Others"

    };

    const normalized =
        String(category)
            .toLowerCase()
            .trim();

    return (
        categoryMap[normalized] ||
        String(category)
            .charAt(0)
            .toUpperCase() +
        String(category).slice(1)
    );
}


/* =========================================================
   10. OPEN CAREER DETAILS
   ========================================================= */

function openCareerDetails(career) {

    if (!career) {
        return;
    }

    selectedCareer = career;


    /* --------------------------------
       SAVE SELECTED CAREER
       -------------------------------- */

    try {

        localStorage.setItem(
            "selectedCareer",
            JSON.stringify(career)
        );

        localStorage.setItem(
            "careerCopilotSelectedCareer",
            JSON.stringify(career)
        );

        localStorage.setItem(
            "careerCopilotSelectedCareerId",
            career.id || ""
        );

    } catch (error) {

        console.error(
            "Unable to save selected career:",
            error
        );
    }


    /* --------------------------------
       BASIC INFORMATION
       -------------------------------- */

    if (careerDetailsIcon) {

        careerDetailsIcon.textContent =
            career.icon || "💼";
    }


    if (careerDetailsCategory) {

        careerDetailsCategory.textContent =
            career.stream ||
            formatCategory(career.category) ||
            "Career";
    }


    if (careerDetailsTitle) {

        careerDetailsTitle.textContent =
            career.title ||
            career.name ||
            "Career";
    }


    if (careerDetailsDescription) {

        careerDetailsDescription.textContent =
            career.description ||
            "Career information is not available.";
    }


    /* --------------------------------
       CAREER OVERVIEW
       -------------------------------- */

    renderOverview(career);


    /* --------------------------------
       EDUCATION
       -------------------------------- */

    renderEducation(career);


    /* --------------------------------
       SKILLS
       -------------------------------- */

    renderSkills(career);


    /* --------------------------------
       SALARY
       -------------------------------- */

    renderSalary(career);


    /* --------------------------------
       COMPANIES
       -------------------------------- */

    renderCompanies(career);


    /* --------------------------------
       CAREER GROWTH
       -------------------------------- */

    renderCareerGrowth(career);


    /* --------------------------------
       COMMON JOB ROLES
       -------------------------------- */

    renderJobRoles(career);


    /* --------------------------------
       HOW TO START
       -------------------------------- */

    renderHowToStart(career);


    /* --------------------------------
       SHOW DETAILS
       -------------------------------- */

    showCareerDetails();


    /* --------------------------------
       SCROLL TO DETAILS
       -------------------------------- */

    setTimeout(() => {

        if (careerDetailsSection) {

            careerDetailsSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    }, 50);
}


/* =========================================================
   11. CAREER OVERVIEW
   ========================================================= */

function renderOverview(career) {

    if (!careerOverview) {
        return;
    }

    /*
       If careers.js later gets an "overview" property,
       this will automatically use it.

       Otherwise description is used as the overview.
    */

    careerOverview.textContent =
        career.overview ||
        career.description ||
        "Career overview is not available.";
}


/* =========================================================
   12. EDUCATION
   ========================================================= */

function renderEducation(career) {

    if (!careerEducation) {
        return;
    }

    careerEducation.innerHTML = "";


    const educationParts = [];


    if (career.education) {

        educationParts.push(
            `<strong>Education:</strong> ${escapeHTML(career.education)}`
        );
    }


    if (career.degree) {

        educationParts.push(
            `<strong>Degree:</strong> ${escapeHTML(career.degree)}`
        );
    }


    if (
        Array.isArray(career.entranceExams) &&
        career.entranceExams.length > 0
    ) {

        educationParts.push(
            `<strong>Entrance Exams:</strong> ${career.entranceExams
                .map(item => escapeHTML(item))
                .join(", ")}`
        );
    }


    if (educationParts.length > 0) {

        careerEducation.innerHTML =
            educationParts.join("<br><br>");

    } else {

        careerEducation.textContent =
            "Education information is not available.";
    }
}


/* =========================================================
   13. SKILLS
   ========================================================= */

function renderSkills(career) {

    if (!careerSkills) {
        return;
    }

    careerSkills.innerHTML = "";


    if (
        Array.isArray(career.skills) &&
        career.skills.length > 0
    ) {

        career.skills.forEach(skill => {

            const li =
                document.createElement("li");

            li.textContent = skill;

            careerSkills.appendChild(li);
        });

    } else {

        const li =
            document.createElement("li");

        li.textContent =
            "Skill information is not available.";

        careerSkills.appendChild(li);
    }
}


/* =========================================================
   14. SALARY
   ========================================================= */

function renderSalary(career) {

    if (!careerSalary) {
        return;
    }

    careerSalary.innerHTML = "";


    const salaryContent =
        document.createElement("div");


    /* Beginner Salary */

    if (career.beginnerSalary) {

        const beginner =
            document.createElement("p");

        beginner.innerHTML =
            `<strong>Beginner:</strong> ${escapeHTML(
                career.beginnerSalary
            )}`;

        salaryContent.appendChild(beginner);
    }


    /* Experienced Salary */

    if (career.experiencedSalary) {

        const experienced =
            document.createElement("p");

        experienced.innerHTML =
            `<strong>Experienced:</strong> ${escapeHTML(
                career.experiencedSalary
            )}`;

        salaryContent.appendChild(experienced);
    }


    /* Salary Examples */

    if (
        Array.isArray(career.salaryExamples) &&
        career.salaryExamples.length > 0
    ) {

        const examplesHeading =
            document.createElement("p");

        examplesHeading.innerHTML =
            "<strong>Additional information:</strong>";

        examplesHeading.style.marginTop = "10px";

        salaryContent.appendChild(
            examplesHeading
        );


        career.salaryExamples.forEach(example => {

            const item =
                document.createElement("p");

            item.textContent = "• " + example;

            salaryContent.appendChild(item);
        });
    }


    /* No Salary */

    if (!salaryContent.children.length) {

        const message =
            document.createElement("p");

        message.textContent =
            "Salary information is not available.";

        salaryContent.appendChild(message);
    }


    careerSalary.appendChild(
        salaryContent
    );
}


/* =========================================================
   15. COMPANIES HIRING
   ========================================================= */

function renderCompanies(career) {

    if (!careerCompanies) {
        return;
    }

    careerCompanies.innerHTML = "";


    if (
        Array.isArray(career.famousCompanies) &&
        career.famousCompanies.length > 0
    ) {

        career.famousCompanies.forEach(company => {

            const span =
                document.createElement("span");

            span.textContent = company;

            careerCompanies.appendChild(span);
        });

    } else {

        careerCompanies.textContent =
            "Company information is not available.";
    }
}


/* =========================================================
   16. CAREER GROWTH
   ========================================================= */

function renderCareerGrowth(career) {

    if (!careerGrowth) {
        return;
    }


    if (
        Array.isArray(career.careerPath) &&
        career.careerPath.length > 0
    ) {

        careerGrowth.textContent =
            career.careerPath.join(" → ");

        return;
    }


    if (typeof career.careerPath === "string") {

        careerGrowth.textContent =
            career.careerPath;

        return;
    }


    careerGrowth.textContent =
        "Career growth information is not available.";
}


/* =========================================================
   17. COMMON JOB ROLES
   ========================================================= */

function renderJobRoles(career) {

    if (!careerRoles) {
        return;
    }

    careerRoles.innerHTML = "";


    /*
       BEST OPTION:
       Use dedicated jobRoles from careers.js.
    */

    if (
        Array.isArray(career.jobRoles) &&
        career.jobRoles.length > 0
    ) {

        career.jobRoles.forEach(role => {

            const li =
                document.createElement("li");

            li.textContent = role;

            careerRoles.appendChild(li);
        });

        return;
    }


    /*
       FALLBACK:
       Some of your existing career objects don't yet
       have jobRoles.

       In that case, careerPath is used so the section
       never appears empty.

       Once you add jobRoles to all 105 careers,
       those values will automatically be used instead.
    */

    if (
        Array.isArray(career.careerPath) &&
        career.careerPath.length > 0
    ) {

        career.careerPath.forEach(role => {

            const li =
                document.createElement("li");

            li.textContent = role;

            careerRoles.appendChild(li);
        });

        return;
    }


    /* Final fallback */

    const li =
        document.createElement("li");

    li.textContent =
        "Job role information is not available.";

    careerRoles.appendChild(li);
}


/* =========================================================
   18. HOW TO START
   ========================================================= */

function renderHowToStart(career) {

    if (!careerHowToStart) {
        return;
    }


    if (
        Array.isArray(career.roadmap) &&
        career.roadmap.length > 0
    ) {

        careerHowToStart.textContent =
            career.roadmap.join(" → ");

        return;
    }


    if (typeof career.roadmap === "string") {

        careerHowToStart.textContent =
            career.roadmap;

        return;
    }


    careerHowToStart.textContent =
        "Roadmap information is not available.";
}


/* =========================================================
   19. SHOW CAREER DETAILS
   ========================================================= */

function showCareerDetails() {

    if (!careerDetailsSection) {
        return;
    }


    /*
       Hide career cards/search/filter area.
       We don't change the HTML structure.
    */

    if (careerGrid) {
        careerGrid.style.display = "none";
    }

    if (noResults) {
        noResults.style.display = "none";
    }


    const searchSection =
        document.querySelector(".career-search");

    const filtersSection =
        document.querySelector(".career-filters");

    const exploreHeader =
        document.querySelector(".explore-header");


    if (searchSection) {
        searchSection.style.display = "none";
    }

    if (filtersSection) {
        filtersSection.style.display = "none";
    }

    if (exploreHeader) {
        exploreHeader.style.display = "none";
    }


    careerDetailsSection.style.display =
        "block";
}


/* =========================================================
   20. BACK TO EXPLORE
   ========================================================= */

function returnToExplore() {

    selectedCareer = null;


    if (careerDetailsSection) {

        careerDetailsSection.style.display =
            "none";
    }


    if (careerGrid) {

        careerGrid.style.display =
            "grid";
    }


    if (noResults) {

        noResults.style.display =
            filteredCareers.length === 0
                ? "block"
                : "none";
    }


    const searchSection =
        document.querySelector(".career-search");

    const filtersSection =
        document.querySelector(".career-filters");

    const exploreHeader =
        document.querySelector(".explore-header");


    if (searchSection) {
        searchSection.style.display = "";
    }

    if (filtersSection) {
        filtersSection.style.display = "";
    }

    if (exploreHeader) {
        exploreHeader.style.display = "";
    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   21. SAVE CAREER FOR ROADMAP
   ========================================================= */

function saveCareerForRoadmap(career) {

    if (!career) {
        return;
    }


    try {

        localStorage.setItem(
            "selectedCareer",
            JSON.stringify(career)
        );

        localStorage.setItem(
            "careerCopilotSelectedCareer",
            JSON.stringify(career)
        );

        localStorage.setItem(
            "careerCopilotSelectedCareerId",
            career.id || ""
        );

    } catch (error) {

        console.error(
            "Could not save career for roadmap:",
            error
        );
    }
}


/* =========================================================
   22. BUILD ROADMAP
   ========================================================= */

function buildCareerRoadmap() {

    if (!selectedCareer) {
        return;
    }


    saveCareerForRoadmap(
        selectedCareer
    );


    /*
       Add career ID to URL so roadmap.js can
       identify the career directly.
    */

    const careerId =
        encodeURIComponent(
            selectedCareer.id || ""
        );


    window.location.href =
        `roadmap.html?career=${careerId}`;
}


/* =========================================================
   23. SAVE CAREER FOR COMPARE
   ========================================================= */

function saveCareerForCompare(career) {

    if (!career) {
        return;
    }


    try {

        localStorage.setItem(
            "compareCareer",
            JSON.stringify(career)
        );

        localStorage.setItem(
            "careerCopilotCompareCareer",
            JSON.stringify(career)
        );

        localStorage.setItem(
            "careerCopilotCompareCareerId",
            career.id || ""
        );

    } catch (error) {

        console.error(
            "Could not save career for comparison:",
            error
        );
    }
}


/* =========================================================
   24. GO TO COMPARE
   ========================================================= */

function compareSelectedCareer() {

    if (!selectedCareer) {
        return;
    }


    saveCareerForCompare(
        selectedCareer
    );


    window.location.href =
        "compare.html";
}


/* =========================================================
   25. SEARCH EVENT
   ========================================================= */

if (careerSearch) {

    careerSearch.addEventListener(
        "input",
        function () {

            currentSearch =
                careerSearch.value;

            applyFilters();
        }
    );
}


/* =========================================================
   26. CATEGORY FILTER EVENTS
   ========================================================= */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            /*
               Remove active class from all buttons
            */

            filterButtons.forEach(btn => {

                btn.classList.remove("active");
            });


            /*
               Activate clicked button
            */

            button.classList.add("active");


            /*
               Read category
            */

            currentCategory =
                button.dataset.category ||
                "all";


            /*
               Apply search + category
            */

            applyFilters();
        }
    );
});


/* =========================================================
   27. BACK BUTTON
   ========================================================= */

if (backToExplore) {

    backToExplore.addEventListener(
        "click",
        function () {

            returnToExplore();
        }
    );
}


/* =========================================================
   28. BUILD ROADMAP BUTTON
   ========================================================= */

if (buildRoadmapBtn) {

    buildRoadmapBtn.addEventListener(
        "click",
        function () {

            buildCareerRoadmap();
        }
    );
}


/* =========================================================
   29. COMPARE BUTTON
   ========================================================= */

if (compareCareerBtn) {

    compareCareerBtn.addEventListener(
        "click",
        function () {

            compareSelectedCareer();
        }
    );
}


/* =========================================================
   30. OPEN CAREER FROM URL
   Example:
   explore.html?career=web-developer
   ========================================================= */

function openCareerFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const careerId =
        params.get("career");


    if (!careerId) {
        return;
    }


    const career =
        allCareers.find(
            item =>
                String(item.id) ===
                String(careerId)
        );


    if (career) {

        openCareerDetails(career);
    }
}


/* =========================================================
   31. ESCAPE HTML
   Used only for controlled data inserted into innerHTML.
   ========================================================= */

function escapeHTML(value) {

    if (value === null || value === undefined) {
        return "";
    }


    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   32. INITIALIZE EXPLORE PAGE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadCareers();

        /*
           If the URL contains ?career=...
           open that career automatically.
        */

        openCareerFromURL();
    }
);


    document.getElementById("buildRoadmapBtn").addEventListener("click", function () {
                window.location.href = "roadmaps.html";
            });

    document.getElementById("compareCareerBtn").addEventListener("click", function(){
        window.location.href = "compare.html"
    });
