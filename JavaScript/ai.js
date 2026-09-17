/* =========================================
   CAREER COPIOLIT
   ALDEN AI ASSISTANT
   GEMINI API
========================================= */


/* =========================================
   GEMINI API SETTINGS
========================================= */

const API_KEY = "AQ.Ab8RN6L2zevw_9LTncMqJPJFFu-a9hkWbI5qpaiELNG4fw0Dew";

const API_URL =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent";


const ALDEN_PROMPT = `
You are Alden, the AI career assistant of Career Copilot.

DEVELOPER:
The website was developed by Suhani Thakur.

If a user asks who developed, created, built, or made this website,
Career Copilot, or this project, answer:

"Career Copilot was developed by Suhani Thakur."

You can also briefly explain that Suhani Thakur developed the project
as a career guidance platform.

Do not invent another developer's name.

Help students and beginners with:
- Career guidance
- Skills
- Learning roadmaps
- Resume building
- Interview preparation
- Internships
- Freelancing
- Practice resources
- Coding platforms
- Projects
- Job preparation
- Career confusion

RESPONSE STRUCTURE:

Always make your answer easy to scan.

NEVER write the entire response as one large paragraph.

Use short paragraphs of 1–3 sentences.

Put a blank line between separate ideas.

When explaining multiple things, divide the response into clear sections.

Use simple section headings such as:

Recommended Direction

Skills to Learn

Practice

Projects

Recommended Resources

Next Steps

When giving multiple items, put EACH item on its own line.

Use this format:

Skills to Learn

• HTML — Learn webpage structure.

• CSS — Learn styling and layouts.

• JavaScript — Learn programming and interactivity.

When giving a step-by-step plan, use:

Next Steps

1. Learn HTML

Start with the basic structure of webpages.

2. Learn CSS

Learn layouts, colors, spacing and responsive design.

3. Learn JavaScript

Learn variables, functions, DOM manipulation and events.

IMPORTANT:

Never put multiple bullet points in the same paragraph.

Never put a heading directly beside a paragraph.

Never put a heading directly beside a bullet point.

Always use a blank line between major sections.

Keep explanations concise.

Do not use Markdown formatting.

Do not use:
**bold**
*italic*
### headings
Markdown tables
Markdown code blocks
---

Use plain text headings, bullets using •, and numbered steps.
`;

/* =========================================
   ELEMENTS
========================================= */

const aiContainer = document.getElementById("aiContainer");
const aiWelcome = document.getElementById("aiWelcome");
const chatHeader = document.getElementById("chatHeader");
const chatArea = document.getElementById("chatArea");
const suggestedQuestions = document.getElementById("suggestedQuestions");
const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendButton");

let chatStarted = false;
let isWaitingForAI = false;


/* =========================================
   GEMINI AI FUNCTION
========================================= */

async function gemini_ai(user_input) {

    /*
       Put your NEW Gemini API key here.

       Do NOT use the key you previously pasted.
    */


    /* =====================================
       ALDEN CUSTOM PROMPT
    ===================================== */

    const CUSTOM_PROMPT = `

You are Alden, the AI career assistant for Career Copilot.

Your purpose is to help students and users with career development.

You can help with:

- Career exploration
- Choosing and comparing careers
- Career guidance
- Skills required for careers
- Learning roadmaps
- Programming and technical skills
- DSA and coding practice
- Projects and portfolio building
- Resume and CV improvement
- Interview preparation
- Internship preparation
- Freelancing
- Early career opportunities
- Professional development
- Career confusion and decision making

Give practical, honest and useful answers.

For career recommendations, consider the user's interests,
strengths, skills, goals and preferred type of work.

For learning questions, explain what to learn first,
what to learn next, and how to practice.

For programming questions, explain concepts clearly
and provide examples when useful.

For DSA questions, you may recommend established
practice platforms such as LeetCode, HackerRank,
CodeChef, Codeforces and GeeksforGeeks.

For resume questions, give specific improvements.
Do not invent achievements, experience or skills
that the user does not have.

For freelancing questions, provide realistic beginner
steps. Never guarantee income, clients or employment.

Do not fabricate websites, courses, companies,
certifications or resources.

Do not claim that you searched the internet unless
a search capability is actually available.

If you are unsure about a current resource,
tell the user to verify that the resource is still active.

Keep your tone friendly, professional and helpful.

You are Alden, a career mentor inside Career Copilot.

`;


    /* =====================================
       GEMINI REQUEST
    ===================================== */

    const response = await fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            systemInstruction: {

                parts: [

                    {
                        text: CUSTOM_PROMPT
                    }

                ]

            },

            contents: [

                {
                    parts: [

                        {
                            text: user_input
                        }

                    ]

                }

            ]

        })

    });


    /* =====================================
       GET RESPONSE DATA
    ===================================== */

    const data = await response.json();


    console.log(data);


    /* =====================================
       HANDLE API ERROR
    ===================================== */

    if (!response.ok) {

        console.error(
            "Gemini API Error:",
            data
        );

        return "Sorry, I couldn't connect to Alden right now. Please try again.";

    }


    if (
        !data ||
        !data.candidates ||
        !data.candidates[0] ||
        !data.candidates[0].content ||
        !data.candidates[0].content.parts
    ) {

        return "Sorry, I couldn't generate a response right now.";

    }


    /* =====================================
       GET AI TEXT
    ===================================== */

    const ai_output =
        data.candidates[0].content.parts[0].text;


    return ai_output;

}


/* =========================================
   START CHAT
========================================= */

function startChat() {

    if (chatStarted) {
        return;
    }

    chatStarted = true;

    aiContainer.classList.add("chat-started");

    suggestedQuestions.style.display = "none";


    setTimeout(() => {

        chatHeader.style.display = "block";

    }, 100);


    setTimeout(() => {

        chatInput.focus();

    }, 500);

}


/* =========================================
   ADD USER MESSAGE
========================================= */

function addUserMessage(message) {

    const messageRow =
        document.createElement("div");

    messageRow.className =
        "chat-message user";


    const messageBubble =
        document.createElement("div");

    messageBubble.className =
        "user-message";


    messageBubble.textContent =
        message;


    messageRow.appendChild(
        messageBubble
    );


    chatArea.appendChild(
        messageRow
    );


    scrollToBottom();

}


/* =========================================
   ADD AI MESSAGE
========================================= */

function addAIMessage(message) {

    const messageRow =
        document.createElement("div");

    messageRow.className =
        "chat-message ai";


    const aiMessage =
        document.createElement("div");

    aiMessage.className =
        "ai-message";


    /* =====================================
       ALDEN IMAGE
    ===================================== */

    const imageContainer =
        document.createElement("div");

    imageContainer.className =
        "message-ai-image";


    const image =
        document.createElement("img");


    image.src =
        "../assests/ai-bot.png";


    image.alt =
        "Alden";


    imageContainer.appendChild(
        image
    );


    /* =====================================
       AI MESSAGE TEXT
    ===================================== */

    const messageContent =
        document.createElement("div");

    messageContent.className =
        "ai-message-content";


    messageContent.innerHTML =
        formatAIResponse(message);


    /* =====================================
       BUILD MESSAGE
    ===================================== */

    aiMessage.appendChild(
        imageContainer
    );

    aiMessage.appendChild(
        messageContent
    );

    messageRow.appendChild(
        aiMessage
    );

    chatArea.appendChild(
        messageRow
    );


    scrollToBottom();

}


/* =========================================
   TYPING INDICATOR
========================================= */

function showTypingIndicator() {

    const messageRow =
        document.createElement("div");

    messageRow.className =
        "chat-message ai";

    messageRow.id =
        "typingMessage";


    const aiMessage =
        document.createElement("div");

    aiMessage.className =
        "ai-message";


    /* =====================================
       IMAGE
    ===================================== */

    const imageContainer =
        document.createElement("div");

    imageContainer.className =
        "message-ai-image";


    const image =
        document.createElement("img");

    image.src =
        "../assests/ai-bot.png";

    image.alt =
        "Alden";


    imageContainer.appendChild(
        image
    );


    /* =====================================
       TYPING DOTS
    ===================================== */

    const typing =
        document.createElement("div");

    typing.className =
        "typing-indicator";


    for (let i = 0; i < 3; i++) {

        const dot =
            document.createElement("span");

        typing.appendChild(dot);

    }


    aiMessage.appendChild(
        imageContainer
    );

    aiMessage.appendChild(
        typing
    );

    messageRow.appendChild(
        aiMessage
    );

    chatArea.appendChild(
        messageRow
    );


    scrollToBottom();

}


/* =========================================
   REMOVE TYPING INDICATOR
========================================= */

function removeTypingIndicator() {

    const typingMessage =
        document.getElementById(
            "typingMessage"
        );


    if (typingMessage) {

        typingMessage.remove();

    }

}


/* =========================================
   SCROLL TO BOTTOM
========================================= */

function scrollToBottom() {

    setTimeout(() => {

        chatArea.scrollTop =
            chatArea.scrollHeight;

    }, 50);

}

async function getGeminiResponse(userMessage) {

    try {

        console.log("Sending message to Gemini:", userMessage);

        const response = await fetch(API_URL, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "x-goog-api-key": API_KEY
            },

            body: JSON.stringify({
                systemInstruction: {
                    parts: [
                        {
                            text: ALDEN_PROMPT
                        }
                    ]
                },

                contents: [
                    {
                        role: "user",
                        parts: [
                            {
                                text: userMessage
                            }
                        ]
                    }
                ]
            })
        });

        console.log("Gemini HTTP Status:", response.status);

        const data = await response.json();

        console.log("Gemini response:", data);

        if (!response.ok) {

            console.error("Gemini API Error:", data);

            const errorMessage =
                data?.error?.message ||
                "Unknown Gemini API error.";

            if (response.status === 401) {
                return "Alden authentication failed: " + errorMessage;
            }

            if (response.status === 403) {
                return "Alden does not have permission to use this Gemini project: " + errorMessage;
            }

            if (response.status === 429) {
                return "Alden has reached the Gemini API quota. Please try again later.";
            }

            return "Gemini API Error: " + errorMessage;
        }

        const text =
            data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!text) {

            console.error(
                "Unexpected Gemini response:",
                data
            );

            return "Alden received an unexpected response from Gemini.";
        }

        return text;

    } catch (error) {

        console.error("FETCH ERROR:", error);

        return "Connection error: " + error.message;
    }
}


/* =========================================
   SEND MESSAGE
========================================= */

async function sendMessage() {

    const message =
        chatInput.value.trim();


    /* =====================================
       EMPTY MESSAGE
    ===================================== */

    if (!message) {

        return;

    }


    /* =====================================
       PREVENT DOUBLE REQUEST
    ===================================== */

    if (isWaitingForAI) {

        return;

    }


    /* =====================================
       START CHAT
    ===================================== */

    startChat();


    /* =====================================
       SHOW USER MESSAGE
    ===================================== */

    addUserMessage(message);


    /* =====================================
       CLEAR INPUT
    ===================================== */

    chatInput.value = "";

    chatInput.style.height = "auto";


    /* =====================================
       SHOW TYPING
    ===================================== */

    showTypingIndicator();


    isWaitingForAI = true;

    sendButton.disabled = true;


    try {

        const response =
            await getGeminiResponse(message);

        addAIMessage(response);


        /* =================================
           REMOVE TYPING
        ================================= */

        removeTypingIndicator();


    } catch (error) {

        console.error(
            "Alden error:",
            error
        );


        removeTypingIndicator();


        addAIMessage(
            "Sorry, something went wrong while connecting to Alden. Please try again."
        );

    }


    isWaitingForAI = false;

    sendButton.disabled = false;

    chatInput.focus();

}


/* =========================================
   SEND BUTTON
========================================= */

if (sendButton) {

    sendButton.addEventListener(
        "click",
        sendMessage
    );

}


/* =========================================
   ENTER KEY
========================================= */

if (chatInput) {

    chatInput.addEventListener(
        "keydown",
        function (event) {

            /*
               Enter = Send
               Shift + Enter = New line
            */

            if (
                event.key === "Enter" &&
                !event.shiftKey
            ) {

                event.preventDefault();

                sendMessage();

            }

        }
    );

}


/* =========================================
   AUTO RESIZE TEXTAREA
========================================= */

if (chatInput) {

    chatInput.addEventListener(
        "input",
        function () {

            this.style.height =
                "auto";


            this.style.height =
                Math.min(
                    this.scrollHeight,
                    130
                ) + "px";

        }
    );

}


/* =========================================
   PREDEFINED QUESTIONS
========================================= */

/*
   IMPORTANT:

   DO NOT CHANGE THESE.

   Your existing five questions continue
   working exactly as before.
*/

const questionButtons =
    document.querySelectorAll(
        ".question-button"
    );


questionButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const question =
                    this.getAttribute(
                        "data-question"
                    );


                if (!question) {

                    return;

                }


                /*
                   Put question into input.
                */

                chatInput.value =
                    question;


                /*
                   Automatically send it.
                */

                sendMessage();

            }
        );

    }
);


/* =========================================
   INITIAL STATE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (chatInput) {

            chatInput.focus();

        }

    }
);


/* =========================================
   HIDE QUESTIONS WHEN TYPING
========================================= */

if (chatInput) {

    chatInput.addEventListener(
        "input",
        function () {

            if (
                this.value.trim().length > 0
            ) {

                suggestedQuestions.style.display =
                    "none";

            } else if (!chatStarted) {

                suggestedQuestions.style.display =
                    "block";

            }

        }
    );

}


function formatAIResponse(text) {
    if (!text) {
        return "";
    }

    // Remove common Markdown formatting
    text = text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .replace(/__(.*?)__/g, "$1")
        .replace(/\*(.*?)\*/g, "$1")
        .replace(/_(.*?)_/g, "$1")
        .replace(/^#{1,6}\s*/gm, "");

    // Normalize line endings
    text = text.replace(/\r\n/g, "\n");

    const lines = text.split("\n");

    let html = "";
    let paragraph = [];

    function addParagraph() {
        if (paragraph.length > 0) {
            html += `<p>${paragraph.join(" ")}</p>`;
            paragraph = [];
        }
    }

    lines.forEach(function (line) {

        const trimmed = line.trim();

        // Empty line = new paragraph
        if (!trimmed) {
            addParagraph();
            return;
        }

        // Bullet points
        if (/^[•●▪◦*-]\s+/.test(trimmed)) {
            addParagraph();

            const bulletText =
                trimmed.replace(/^[•●▪◦*-]\s+/, "");

            html += `
                <div class="ai-bullet">
                    <span>•</span>
                    <p>${bulletText}</p>
                </div>
            `;

            return;
        }

        // Numbered items
        if (/^\d+[\.)]\s+/.test(trimmed)) {
            addParagraph();

            const match =
                trimmed.match(/^(\d+)[\.)]\s+(.*)$/);

            html += `
                <div class="ai-step">
                    <div class="ai-step-number">
                        ${match[1]}
                    </div>

                    <div class="ai-step-content">
                        <p>${match[2]}</p>
                    </div>
                </div>
            `;

            return;
        }

        /*
         * Detect section headings.
         *
         * Short lines such as:
         * Recommended Direction
         * Skills to Learn
         * Practice
         * Projects
         * Next Steps
         */
        const isHeading =
            trimmed.length <= 55 &&
            !trimmed.endsWith(".") &&
            !trimmed.endsWith(",") &&
            !trimmed.endsWith("?") &&
            !trimmed.endsWith("!") &&
            !trimmed.startsWith("•");

        if (isHeading) {
            addParagraph();

            html += `
                <h3>${trimmed}</h3>
            `;

            return;
        }

        // Normal paragraph text
        paragraph.push(trimmed);
    });

    // Add final paragraph
    addParagraph();

    return html;
}


function formatAIResponse(text) {
    if (!text) return "";

    // Remove markdown formatting
    text = text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .replace(/__(.*?)__/g, "$1")
        .replace(/\*(.*?)\*/g, "$1")
        .replace(/_(.*?)_/g, "$1")
        .replace(/^#{1,6}\s*/gm, "");

    // Normalize bullet characters
    text = text.replace(/^[\t ]*[-*]\s+/gm, "• ");

    // Split response into lines
    const lines = text.split(/\r?\n/);

    let html = "";
    let currentParagraph = [];

    function addParagraph() {
        if (currentParagraph.length > 0) {
            html += `<p>${currentParagraph.join(" ")}</p>`;
            currentParagraph = [];
        }
    }

    lines.forEach(line => {
        line = line.trim();

        // Empty line = new paragraph
        if (!line) {
            addParagraph();
            return;
        }

        // Numbered section
        if (/^\d+[\.\)]\s+/.test(line)) {
            addParagraph();

            const match = line.match(/^(\d+)[\.\)]\s+(.*)$/);

            html += `
                <div class="ai-step">
                    <div class="ai-step-number">${match[1]}</div>
                    <div class="ai-step-content">
                        <h4>${match[2]}</h4>
                    </div>
                </div>
            `;

            return;
        }

        // Bullet point
        if (line.startsWith("•")) {
            addParagraph();

            html += `
                <div class="ai-bullet">
                    <span>•</span>
                    <p>${line.substring(1).trim()}</p>
                </div>
            `;

            return;
        }

        // Short heading
        const isHeading =
            line.length <= 55 &&
            !line.endsWith(".") &&
            !line.endsWith(",") &&
            !line.endsWith("?") &&
            !line.endsWith("!");

        if (isHeading) {
            addParagraph();

            html += `<h3>${line}</h3>`;

            return;
        }

        // Normal text
        currentParagraph.push(line);
    });

    addParagraph();

    return html;
}
