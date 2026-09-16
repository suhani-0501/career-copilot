/* =========================================================
   CAREER COPIOLIT
   AUTHENTICATION SYSTEM
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       STORAGE KEYS
    ===================================================== */

    const USER_KEY = "careerCopilotUser";
    const LOGIN_KEY = "careerCopilotLoggedIn";


    /* =====================================================
       PUBLIC PAGES
    ===================================================== */

    const PUBLIC_PAGES = [
        "",
        "index.html",
        "login.html",
        "register.html",
        "registration.html"
    ];


    /* =====================================================
       GET REGISTERED USER
    ===================================================== */

    function getCurrentUser() {

        try {

            const savedUser =
                localStorage.getItem(USER_KEY);

            if (!savedUser) {
                return null;
            }

            const user =
                JSON.parse(savedUser);

            if (
                !user ||
                typeof user !== "object" ||
                !user.email ||
                !user.password
            ) {
                return null;
            }

            return user;

        } catch (error) {

            console.error(
                "Career Copilot: Could not read user data.",
                error
            );

            return null;
        }
    }


    /* =====================================================
       CHECK LOGIN STATUS
    ===================================================== */

    function isLoggedIn() {

        const user = getCurrentUser();

        const loginStatus =
            localStorage.getItem("careerCopilotLoggedIn");

        return (
            user !== null &&
            loginStatus === "true"
        );
    }


    /* =====================================================
       GET CURRENT PAGE
    ===================================================== */

    function getCurrentPage() {

        return window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();
    }


    /* =====================================================
       CHECK PUBLIC PAGE
    ===================================================== */

    function isPublicPage() {

        return PUBLIC_PAGES.includes(
            getCurrentPage()
        );
    }


    /* =====================================================
       SHOW LOGIN MESSAGE
    ===================================================== */

    function showLoginMessage() {

        alert(
            "Please log in first to access this page."
        );
    }


    /* =====================================================
       REDIRECT TO LOGIN
    ===================================================== */

    function redirectToLogin() {

        showLoginMessage();

        window.location.href =
            "login.html";
    }


    /* =====================================================
       PROTECT CURRENT PAGE
    ===================================================== */

    function protectPage() {

        if (isPublicPage()) {
            return;
        }


        if (isLoggedIn()) {
            return;
        }


        redirectToLogin();
    }


    /* =====================================================
       CHECK INTERNAL LINK
    ===================================================== */

    function isProtectedLink(link) {

        if (!link) {
            return false;
        }

        const href =
            link.getAttribute("href");

        if (!href) {
            return false;
        }


        /* Ignore anchors and external links */

        if (
            href.startsWith("#") ||
            href.startsWith("http://") ||
            href.startsWith("https://") ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:") ||
            href.startsWith("javascript:")
        ) {
            return false;
        }


        /* Remove query string and hash */

        const page =
            href
                .split("?")[0]
                .split("#")[0]
                .split("/")
                .pop()
                .toLowerCase();


        /* Public pages */

        if (
            PUBLIC_PAGES.includes(page)
        ) {
            return false;
        }


        /* Every other HTML page is protected */

        return page.endsWith(".html");
    }


    /* =====================================================
       PROTECT LINKS
    ===================================================== */

    function protectLinks() {

        const links =
            document.querySelectorAll(
                "a[href]"
            );


        links.forEach(function (link) {

            if (!isProtectedLink(link)) {
                return;
            }


            link.addEventListener(
                "click",
                function (event) {

                    if (isLoggedIn()) {
                        return;
                    }


                    event.preventDefault();
                    event.stopPropagation();

                    redirectToLogin();

                }
            );

        });

    }


    /* =====================================================
       LOGOUT
    ===================================================== */

    function logout() {

        const confirmed =
            window.confirm(
                "Are you sure you want to logout?"
            );


        /* Cancel */

        if (!confirmed) {
            return;
        }


        /* =================================================
           IMPORTANT
           
           DO NOT DELETE careerCopilotUser.
           
           That contains the registered account.
        ================================================= */

        localStorage.removeItem(
            LOGIN_KEY
        );


        /* Go to Home */

        const currentPage =
            getCurrentPage();


        if (
            currentPage === "index.html" ||
            currentPage === ""
        ) {

            window.location.reload();

        } else {

            window.location.href =
                "../index.html";
        }

    }


    /* =====================================================
       UPDATE NAVBAR
    ===================================================== */

    function updateNavbar() {

        const navActions =
            document.querySelectorAll(
                ".nav-actions"
            );


        navActions.forEach(
            function (actions) {

                if (
                    actions.dataset.authReady === "true"
                ) {
                    return;
                }

                actions.dataset.authReady =
                    "true";


                /* LOGGED-IN STATE */

                if (isLoggedIn()) {

                    actions.innerHTML = "";


                    const logoutButton =
                        document.createElement(
                            "button"
                        );


                    logoutButton.type =
                        "button";


                    logoutButton.className =
                        "btn btn-outline logout-btn";


                    logoutButton.textContent =
                        "Logout";


                    logoutButton.addEventListener(
                        "click",
                        logout
                    );


                    actions.appendChild(
                        logoutButton
                    );

                }

            }
        );

    }


    /* =====================================================
       LOGIN PAGE
    ===================================================== */

    function handleLoginPage() {

        /*
        * Login redirection is handled by login.js
        * after successful authentication.
        *
        * auth.js only protects pages.
        */

        return;
    }


    /* =====================================================
       REGISTRATION PAGE
    ===================================================== */

    function handleRegistrationPage() {

        const page =
            getCurrentPage();


        if (
            page !== "register.html" &&
            page !== "registration.html"
        ) {
            return;
        }


        /* Already logged in */

        if (isLoggedIn()) {

            window.location.href =
                "dashboard.html";
        }

    }


    /* =====================================================
       PUBLIC API
    ===================================================== */

    window.CareerCopilotAuth = {

        getCurrentUser:
            getCurrentUser,

        isLoggedIn:
            isLoggedIn,

        logout:
            logout,

        requireLogin:
            redirectToLogin

    };


    /* =====================================================
       INITIALIZE
    ===================================================== */

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            protectPage();

            updateNavbar();

            protectLinks();

            handleLoginPage();

            handleRegistrationPage();

        }
    );

})();
