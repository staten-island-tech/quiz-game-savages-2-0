//Questions
/* When is National Name Your Car Day?
    Oct 2.
When is National Frog Jumping Day
    May 13.
Which national food holiday is on March 2?
    National Egg McMuffin Day
What about Feb 7?
    National Fettuccine Alfredo Day
And When is National Be a Millionaire Day?
    May 20. */

[
  {
    questionContent: [
      "When is National Name Your Car Day?",
      "When is National Frog Jumping Day",
      "Which national food holiday is on March 2?",
      "What about Feb 7?",
      "And When is National Be a Millionaire Day?",
    ],

    choices: [
      {
        choice: "Oct 2", //first question
        correct: true,
        value: 1,
      },
      { choice: "Jan 19", correct: false },
      { choice: "Sept 30", correct: false },
      { choice: "March 1", correct: false },
    ],
  },
];
const startButton = document.getElementById("start-btn");
const quizTitle = document.getElementById("quiz-title");
const questionContainerElement = document.getElementById("question-container");
const answerOptionElement = document.getElementById("answer-options");

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.classList.add("hide");
  quizTitle.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  answerOptionElement.classList.remove("hide");
}
function nextQuestion() {}
