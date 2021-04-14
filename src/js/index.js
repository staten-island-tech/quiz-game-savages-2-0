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

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const quizTitle = document.getElementById("quiz-title");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerOptionElement = document.getElementById("answer-options");

let totalScore = 0;
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);

function startGame() {
  //console.log("Started");
  totalScore = 0;
  startButton.classList.add("hide");
  quizTitle.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  answerOptionElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
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
    button.addEventListener("click", selectAnswer);
    answerOptionElement.appendChild(button);
  });
}

function resetState() {
  while (answerOptionElement.firstChild) {
    answerOptionElement.removeChild(answerOptionElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if ((selectedButton.dataset = correct)) {
    totalScore++;
  }
  nextButton.classList.remove("hide");
}

const questions = [
  {
    question: "When is National Name Your Car Day?",
    answers: [
      { text: "Oct 2", correct: true },
      { text: "July 18", correct: false },
      { text: "Dec 29", correct: false },
      { text: "Feb 15", correct: false },
    ],
  },
];
