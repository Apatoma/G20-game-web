let questions = [
    "Is it an animal?",
    "Is it a vegetable?",
    "Is it a mineral?",
    "Can it be found in a house?",
    "Is it bigger than a breadbox?",
    "Does it make noise?",
    "Is it man-made?",
    "Is it electronic?",
    "Can it be eaten?",
    "Is it used daily?",
    // Continue adding more questions
];

let answers = []; // To store the user's answers
let currentQuestionIndex = 0;

function answer(response) {
    answers.push(response);

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        document.getElementById('question-text').textContent = questions[currentQuestionIndex];
    } else {
        document.getElementById('question-text').textContent = "I think I know what it is!";
        makeGuess();
    }
}

function makeGuess() {
    // Simple logic to make a guess based on the answers
    // This is a placeholder, you can replace it with a more complex algorithm
    let guess = "";

    if (answers[0] === "yes" && answers[1] === "no" && answers[2] === "no") {
        guess = "It's an animal!";
    } else if (answers[1] === "yes" && answers[0] === "no" && answers[2] === "no") {
        guess = "It's a vegetable!";
    } else if (answers[2] === "yes" && answers[0] === "no" && answers[1] === "no") {
        guess = "It's a mineral!";
    } else {
        guess = "I'm not sure what it is. Please try again!";
    }

    document.getElementById('guess-text').textContent = guess;
}

// Sample HTML elements for displaying the question and guess
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('question-text').textContent = questions[currentQuestionIndex];
    document.getElementById('yes-button').addEventListener('click', () => answer('yes'));
    document.getElementById('no-button').addEventListener('click', () => answer('no'));
});