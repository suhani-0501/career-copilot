/* =========================================================
   CAREER COPIOLIT
   LOGIN SYSTEM
   LocalStorage Based Authentication
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginError = document.getElementById("loginError");


    /* =====================================================
       MAKE SURE LOGIN FORM EXISTS
    ===================================================== */

    if (!loginForm) {
        console.error("Career Copilot: loginForm not found.");
        return;
    }


    /* =====================================================
       LOGIN FORM SUBMIT
    ===================================================== */

    loginForm.addEventListener("submit", function (event) {

        // Prevent page refresh
        event.preventDefault();


        // Clear previous error
        if (loginError) {
            loginError.textContent = "";
            loginError.style.display = "none";
        }


        /* =================================================
           GET INPUT VALUES
        ================================================= */

        const email = emailInput.value.trim();
        const password = passwordInput.value;


        /* =================================================
           VALIDATION
        ================================================= */

        if (email === "" || password === "") {

            showError("Please enter your email and password.");
            return;

        }


        /* =================================================
           GET REGISTERED USER
        ================================================= */

        const savedUser = localStorage.getItem(
            "careerCopilotUser"
        );


        // No registered account
        if (!savedUser) {

            showError(
                "No account found. Please register first."
            );

            return;
        }


        /* =================================================
           READ USER DATA
        ================================================= */

        let user;

        try {

            user = JSON.parse(savedUser);

        } catch (error) {

            console.error(
                "Career Copilot: Invalid user data.",
                error
            );

            showError(
                "Your account data is invalid. Please register again."
            );

            return;
        }


        /* =================================================
           CHECK USER DATA
        ================================================= */

        if (
            !user ||
            !user.email ||
            !user.password
        ) {

            showError(
                "Your account information is incomplete. Please register again."
            );

            return;
        }


        /* =================================================
           CHECK EMAIL
        ================================================= */

        const savedEmail = String(user.email)
            .trim()
            .toLowerCase();

        const enteredEmail = email.toLowerCase();


        if (enteredEmail !== savedEmail) {

            showError("Invalid email or password.");
            return;

        }


        /* =================================================
           CHECK PASSWORD
        ================================================= */

        if (password !== String(user.password)) {

            showError("Invalid email or password.");
            return;

        }


        /* =================================================
           LOGIN SUCCESS
        ================================================= */

        console.log(
            "Career Copilot: Login successful."
        );


        /*
         * Keep the registered account permanently.
         *
         * This key contains the user's account information.
         */
        localStorage.setItem(
            "careerCopilotUser",
            JSON.stringify(user)
        );


        /*
         * Create the LOGIN SESSION.
         *
         * auth.js will use this key to determine
         * whether the user is currently logged in.
         */
        localStorage.setItem(
            "careerCopilotLoggedIn",
            "true"
        );


        /* =================================================
           REDIRECT TO DASHBOARD
        ================================================= */

        window.location.href = "dashboard.html";

    });


    /* =====================================================
       ERROR FUNCTION
    ===================================================== */

    function showError(message) {

        if (!loginError) {
            console.error(message);
            return;
        }

        loginError.textContent = message;
        loginError.style.display = "block";

    }

});