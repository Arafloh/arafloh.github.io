// Function to generate a random math problem
function generateProblem() {
    let num1 = Math.floor(Math.random() * 8 + 2);
    let num2 = Math.floor(Math.random() * 9.5 + 10);

    const problem = {
        question: `${num1} x ${num2}`,
        answer: eval(`${num1} * ${num2}`)
    };

    const options = [];
    options.push(problem.answer);

    // Generate three random options
    while (options.length < 3) {
        const option = problem.answer + Math.floor(Math.random() * 10 - 5);
        if (options.indexOf(option) === -1) {
            options.push(option);
        }
    }

    // Shuffle the options array
    options.sort(() => Math.random() - 0.5);

    problem.options = options;
    return problem;
}

let currentProblem;

// Function to generate a new problem
function generateNewProblem() {
    currentProblem = generateProblem();
    document.getElementById('problem').textContent = currentProblem.question;

    for (let i = 0; i < 3; i++) {
        const optionButton = document.getElementById('option' + i);
        optionButton.textContent = currentProblem.options[i];
        document.getElementById('option' + i).className = "btn btn-light";
        optionButton.disabled = false;
    }
}

// Function to check the selected answer
function checkAnswer(selectedIndex) {
    const selectedOption = currentProblem.options[selectedIndex];
    if (selectedOption === currentProblem.answer) {
        document.getElementById('option' + currentProblem.options.indexOf(currentProblem.answer)).className = "btn btn-success";
    } else {
        document.getElementById('option' + currentProblem.options.indexOf(currentProblem.answer)).className = "btn btn-success";
        document.getElementById('option' + selectedIndex).className = "btn btn-danger";
    }

    for (let i = 0; i < 3; i++) {
        document.getElementById('option' + i).disabled = true;
    }
}

// Generate the first problem on page load
generateNewProblem();
