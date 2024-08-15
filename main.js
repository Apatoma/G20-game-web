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

let currentQuestionIndex = 0;

function answer(response) {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        document.getElementById('question-text').textContent = questions[currentQuestionIndex];
    } else {
        document.getElementById('question-text').textContent = "I think I know what it is!";
        // Add additional logic to "guess" based on the answers
    }
}
