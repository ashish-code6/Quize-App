let questions = [
  {
    question: "In JavaScript, which of the following is a valid variable name?",
    answer: [
      { text: "2names", correct: false },
      { text: "$name", correct: true },
      { text: "-name", correct: false },
      { text: "name-2", correct: false },
    ],
  },
  {
    question: " JavaScript is the programming language of the____",
    answer: [
      { text: "Desktop", correct: false },
      { text: "Mobile", correct: false },
      { text: "Web", correct: true },
      { text: "Server", correct: false },
    ],
  },
  {
    question:
      "Which JavaScript method is used to access an HTML element by id?",
    answer: [
      { text: "getElementById()", correct: false },
      { text: "getElement(id)", correct: false },
      { text: "getElementById(id)", correct: true },
      { text: "elementById(id)", correct: false },
    ],
  },
  {
    question: " The const keyword is used to define a ______.",
    answer: [
      { text: "Function scopes variable", correct: false },
      { text: "Block scoped variable", correct: false },
      { text: "Constant with no initial value", correct: false },
      { text: "Constant", correct: true },
    ],
  },
  {
    question: "Which of the following is not a valid comparison operator in JavaScript?",
    answer: [
      { text: "==", correct: false },
      { text: "===", correct: false },
      { text: "<>", correct: true },
      { text: "!=", correct: false },
    ],
  },
  {
    question: "What is the purpose of the `break` statement in a loop?",
    answer: [
      { text: "To exit the loop", correct: true },
      { text: "To continue to the next iteration", correct: false },
      { text: "To skip the current iteration", correct: false },
      { text: "To stop the script", correct: false },
    ],
  },
];
const questionElement = document.querySelector("#question");
const answerButton = document.querySelector("#answer-button");
const nextButton = document.querySelector("#submit-button");

let currentquestionIndex = 0;
let marks = 0;

function startQuiz() {
  currentquestionIndex = 0;
  marks = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetbutton();
  let currentQuestion = questions[currentquestionIndex];
  let questionNumber = currentquestionIndex + 1;
  questionElement.innerHTML = `${questionNumber}. ${currentQuestion.question}`;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}
let resetbutton = () => {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
};
let selectAnswer = (e) => {
  const selectbtn = e.target;
  const right = selectbtn.dataset.correct === "true";
//   marks++;
  if (right) {
    selectbtn.classList.add("correct");
    marks++;
  } else {
    selectbtn.classList.add("wrong");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (answerButton.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
};

let showAnswer=()=>{
    resetbutton();
    question.innerHTML=`your Score ${marks} out of ${questions.length}`;
    nextButton.innerHTML="Play Again!!"
    nextButton.style.display="block";
}

let handelNextbutton=()=>{
    currentquestionIndex++;
    if(currentquestionIndex<questions.length){
        showQuestion();
    }
    else{
        showAnswer();
    }

}

nextButton.addEventListener('click',()=>{
    if(currentquestionIndex<questions.length){
        handelNextbutton();
    }
    else{
        startQuiz();
    }
})
// console.log(questions)
startQuiz();
