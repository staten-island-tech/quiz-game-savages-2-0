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

import { questions } from "./questions";

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const quizTitle = document.getElementById("quiz-title");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerOptionElement = document.getElementById("answer-options");
const resultsHeading = document.getElementById("results-heading");
const resultsValue = document.getElementById("total-score");

let totalScore = 0;
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  //console.log("Started");
  totalScore = 0;
  startButton.classList.add("hide");
  quizTitle.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  answerOptionElement.classList.remove("hide");
  resultsHeading.classList.add("hide");
  resultsValue.classList.add("hide");
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
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    showResults();
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
    nextButton.classList.add("hide");
  }
  document.getElementById("total-score").innerHTML =
    totalScore + "/" + shuffledQuestions.length;
}

function showResults() {
  questionContainerElement.classList.add("hide");
  answerOptionElement.classList.add("hide");
  resultsHeading.classList.remove("hide");
  resultsValue.classList.remove("hide");
}
