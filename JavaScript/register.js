/* =========================================
   CAREER COPIOLIT
   REGISTER / AUTHENTICATION
========================================= */

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const fullName =
            document.getElementById("fullName").value.trim();

        const email =
            document.getElementById("registerEmail").value.trim();

        const password =
            document.getElementById("registerPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const message =
            document.getElementById("registerMessage");

        /* =====================================
           CLEAR MESSAGE
        ===================================== */

        message.textContent = "";

        /* =====================================
           VALIDATION
        ===================================== */

        if (!fullName || !email || !password || !confirmPassword) {

            message.textContent =
                "Please fill in all fields.";

            message.style.color = "#b00020";

            return;
        }

        if (password.length < 6) {

            message.textContent =
                "Password must be at least 6 characters.";

            message.style.color = "#b00020";

            return;
        }

        if (password !== confirmPassword) {

            message.textContent =
                "Passwords do not match.";

            message.style.color = "#b00020";

            return;
        }

        /* =====================================
           CHECK EXISTING ACCOUNT
        ===================================== */

        const savedUser =
            localStorage.getItem("careerCopilotUser");

        if (savedUser) {

            try {

                const existingUser =
                    JSON.parse(savedUser);

                if (
                    existingUser.email &&
                    existingUser.email.toLowerCase() ===
                    email.toLowerCase()
                ) {

                    message.textContent =
                        "An account with this email already exists.";

                    message.style.color = "#b00020";

                    return;
                }

            } catch (error) {

                // If stored data is invalid,
                // allow registration to replace it.
            }
        }

        /* =====================================
           CREATE USER
        ===================================== */

        const user = {

            fullName: fullName,

            email: email,

            password: password

        };

        /* =====================================
           SAVE USER
        ===================================== */

        localStorage.setItem(
            "careerCopilotUser",
            JSON.stringify(user)
        );

        /* =====================================
           SUCCESS MESSAGE
        ===================================== */

        message.textContent =
            "Registration successful! Redirecting to login...";

        message.style.color = "#800020";

        /* =====================================
           REDIRECT TO LOGIN
        ===================================== */

        setTimeout(function () {

            window.location.href = "login.html";

        }, 800);

    });

}