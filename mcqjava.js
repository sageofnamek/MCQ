// Array of question objects
const quizData = [
    {
        question: "1. Which of the following best describes Remote Viewing (RV)?",
        options: {
            a: "A type of out-of-body experience involving astral projection.",
            b: "A controlled and trainable mental process involving psi to transfer perceptual information across time and space.",
            c: "A method of meditation to enhance psychic abilities.",
            d: "A form of hypnosis to retrieve suppressed memories."
        },
        correct: "b"
    },
    {
        question: "2. Remote Viewing works in violation of the accepted \"laws\" of physics, particularly in which fields?",
        options: {
            a: "Classical mechanics and thermodynamics",
            b: "Quantum and relativistic physics",
            c: "Electromagnetism and optics",
            d: "Fluid dynamics and aerodynamics"
        },
        correct: "b"
    },
    {
        question: "3. Which interpretation of quantum mechanics is associated with the theory explaining Remote Viewing?",
        options: {
            a: "Copenhagen interpretation",
            b: "Many-worlds (Other Worlds) interpretation by Hugh Everett",
            c: "De Broglie–Bohm theory (Pilot-wave theory)",
            d: "Objective collapse theories"
        },
        correct: "b"
    },
    {
        question: "4. Remote Viewing procedures were originally developed for which purpose?",
        options: {
            a: "Medical diagnosis",
            b: "Psychological therapy",
            c: "Espionage by the United States military and intelligence services",
            d: "Entertainment and magic shows"
        },
        correct: "c"
    },
    {
        question: "5. Which of the following is NOT a style of Remote Viewing?",
        options: {
            a: "Scientific Remote Viewing (SRV)",
            b: "Controlled Remote Viewing (CRV)",
            c: "Extended Remote Viewing (ERV)",
            d: "Quantum Remote Viewing (QRV)"
        },
        correct: "d"
    },
    {
        question: "6. In Remote Viewing, \"blind conditions\" refer to:",
        options: {
            a: "The remote viewer is blindfolded during the session.",
            b: "The remote viewer must know nothing about the target when conducting the session.",
            c: "The remote viewer is in a dark room without sensory input.",
            d: "The remote viewer's identity is unknown to the experimenters."
        },
        correct: "b"
    },
    {
        question: "7. Which of the following statements is true about Remote Viewing sessions?",
        options: {
            a: "They typically involve hypnosis and altered states of consciousness.",
            b: "They are considered a controlled shifting of awareness performed in the normal waking state.",
            c: "They require out-of-body experiences.",
            d: "They depend on the use of psychoactive substances."
        },
        correct: "b"
    },
    {
        question: "8. What is the role of the Target Writer in public Remote Viewing experiments?",
        options: {
            a: "To remote view the target and write down the data.",
            b: "To select the target and keep it secret from the remote viewers.",
            c: "To complete the structural design of the targets chosen for the experiment.",
            d: "To analyze the remote viewing data and compare it with the target."
        },
        correct: "c"
    },
    {
        question: "9. According to research at The Farsight Institute, what appears to be the key factor in determining why a remote viewer focuses on one particular target?",
        options: {
            a: "The amount of training the remote viewer has received.",
            b: "A telepathic connection between the remote viewer and the person who first analyzes the data.",
            c: "The physical proximity of the remote viewer to the target.",
            d: "The use of advanced technology to enhance psychic abilities."
        },
        correct: "b"
    },
    {
        question: "10. In the context of Remote Viewing experiments, \"closing the session\" refers to:",
        options: {
            a: "The remote viewer ending their session and taking a break.",
            b: "The first time the remote-viewing data is compared with the actual target.",
            c: "The remote viewer being informed of the target identity.",
            d: "The experiment being terminated due to inconclusive results."
        },
        correct: "b"
    },
    {
        question: "11. Which of the following is NOT considered an acceptable way to assign targets in Remote Viewing experiments according to the Prometheus Protocols?",
        options: {
            a: "Choosing targets from a pool by a truly random process.",
            b: "Selecting targets by a person unaware of the remote viewing data.",
            c: "Comparing remote-viewing data to a pool of targets to see which it best describes.",
            d: "Assigning targets after the remote-viewing sessions have been conducted (future-tasking)."
        },
        correct: "c"
    },
    {
        question: "12. Why is encryption crucial in public Remote Viewing experiments?",
        options: {
            a: "To protect the privacy of the remote viewers.",
            b: "To prevent corruption of the experiment by ensuring data is not altered.",
            c: "To make the data inaccessible to the public.",
            d: "To comply with government regulations."
        },
        correct: "b"
    },
    {
        question: "13. Which software is mentioned as being used for encryption in The Farsight Institute's experiments?",
        options: {
            a: "PGP Encryption",
            b: "WinZip with 256-bit encryption",
            c: "TrueCrypt",
            d: "AES Crypt"
        },
        correct: "b"
    },
    {
        question: "14. When constructing targets for public demonstrations of Remote Viewing, which of the following is recommended?",
        options: {
            a: "Use of esoteric or nonverifiable targets to challenge the viewers.",
            b: "Targets with significant physical and event characteristics that can be unambiguously described.",
            c: "Targets that are relatively insignificant compared with their surroundings.",
            d: "Avoid specifying exact time and location descriptions to increase difficulty."
        },
        correct: "b"
    },
    {
        question: "15. What are \"numbered aspects\" in target construction for Remote Viewing?",
        options: {
            a: "Multiple choice options for the remote viewer to select.",
            b: "Steps in the remote viewing protocol to ensure accuracy.",
            c: "Aspects used to move a viewer's perspective around one physical central target location.",
            d: "Codes used to encrypt the session data."
        },
        correct: "c"
    },
    {
        question: "16. Which of the following personnel is responsible for coordinating the activities of a remote-viewing group?",
        options: {
            a: "Remote Viewer",
            b: "Group Manager",
            c: "Session Assembler",
            d: "Web Controller"
        },
        correct: "b"
    },
    {
        question: "17. In Remote Viewing experiments, which scenario involves the target being chosen after the remote-viewing session has been conducted, and the target time is in the future of both the viewing and tasking times?",
        options: {
            a: "Scenario 1",
            b: "Scenario 2",
            c: "Scenario 3",
            d: "Scenario 4b"
        },
        correct: "d"
    },
    {
        question: "18. Which of the following is a key principle to ensure the scientific validity of Remote Viewing experiments?",
        options: {
            a: "Remote viewers should be given hints about the target to increase accuracy.",
            b: "The remote-viewing data should remain free from all potentially corrupting outside influence.",
            c: "Targets should be assigned based on the remote viewer's preferences.",
            d: "Multiple remote viewers should work together and share data during the session."
        },
        correct: "b"
    },
    {
        question: "19. According to the research mentioned, remote viewing appears to be based on:",
        options: {
            a: "Classical physics processes",
            b: "Quantum processes",
            c: "Electromagnetic resonance",
            d: "Biological intuition"
        },
        correct: "b"
    },
    {
        question: "20. Which of the following statements is true regarding the current level of governmental support for Remote Viewing research and operations in the United States?",
        options: {
            a: "It is publicly known and well-documented.",
            b: "There is no governmental support for Remote Viewing.",
            c: "It is not publicly known, but efforts to utilize Remote Viewing continue.",
            d: "Remote Viewing has been completely discredited and abandoned by the government."
        },
        correct: "c"
    }
];

// Function to load the quiz
function loadQuiz() {
    const quizForm = document.getElementById('quiz-form');
    quizData.forEach((item, index) => {
        // Create question container
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question-container');

        // Create question element
        const questionEl = document.createElement('p');
        questionEl.classList.add('question');
        questionEl.innerText = item.question;
        questionContainer.appendChild(questionEl);

        // Create options list
        const optionsList = document.createElement('ul');
        optionsList.classList.add('options');

        // Add options
        for (let option in item.options) {
            const optionItem = document.createElement('li');

            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index}`;
            input.value = option;
            label.appendChild(input);
            label.append(` ${item.options[option]}`);

            optionItem.appendChild(label);
            optionsList.appendChild(optionItem);
        }

        questionContainer.appendChild(optionsList);
        quizForm.appendChild(questionContainer);
    });
}

// Function to calculate results
function calculateResults() {
    let score = 0;
    quizData.forEach((item, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === item.correct) {
            score++;
        }
    });

    const percentage = (score / quizData.length) * 100;
    let letterGrade = '';

    if (percentage >= 90) {
        letterGrade = 'A';
    } else if (percentage >= 80) {
        letterGrade = 'B';
    } else if (percentage >= 70) {
        letterGrade = 'C';
    } else if (percentage >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }

    // Display results
    const resultsEl = document.getElementById('results');
    resultsEl.innerText = `You scored ${percentage.toFixed(2)}%. Your grade is ${letterGrade}.`;
}

// Event listener for the submit button
document.getElementById('submit-btn').addEventListener('click', (e) => {
    e.preventDefault();
    calculateResults();
});

// Load the quiz when the page loads
window.addEventListener('load', loadQuiz);
