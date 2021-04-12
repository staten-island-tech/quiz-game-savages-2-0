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

/* [
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
]; */

const startButton = document.getElementById("start-btn");
const quizTitle = document.getElementById("quiz-title");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const answerOptionElement = document.getElementById("answer-options");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);

function startGame() {
  //console.log("Started");
  startButton.classList.add("hide");
  quizTitle.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  answerOptionElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
  });
}

function selectAnswer() {}

const questions = [
  {
    question: "When is National Name Your Car Day?",
    answers: [
      { text: "x", correct: true },
      { text: "y", correct: false },
    ],
  },
];
