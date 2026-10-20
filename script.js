const quizData = [
  {
    qns: "What is JavaScript primarily used for?",
    options: [
      "Styling web pages",
      "Creating database tables",
      "Adding interactivity to websites",
      "Designing images",
    ],
    correctAnswer: 2,
  },
  {
    qns: "Which keyword is used to declare a variable in modern JavaScript?",
    options: ["var", "let", "const", "Both let and const"],
    correctAnswer: 3,
  },
  {
    qns: "Which method adds an element to the end of an array?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    correctAnswer: 1,
  },
  {
    qns: "What is the output of typeof null in JavaScript?",
    options: ["null", "object", "undefined", "string"],
    correctAnswer: 1,
  },
  {
    qns: "Which operator checks both value and data type?",
    options: ["==", "=", "===", "!="],
    correctAnswer: 2,
  },
  {
    qns: "Which method converts a JSON string into a JavaScript object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.object()",
    ],
    correctAnswer: 1,
  },
  {
    qns: "Which array method creates a new array by transforming each element?",
    options: ["filter()", "map()", "reduce()", "forEach()"],
    correctAnswer: 1,
  },
  {
    qns: "What is the value of a declared but uninitialized variable?",
    options: ["null", "0", "undefined", "false"],
    correctAnswer: 2,
  },
  {
    qns: "Which event occurs when a user clicks an HTML element?",
    options: ["onchange", "onclick", "onload", "onsubmit"],
    correctAnswer: 1,
  },
  {
    qns: "Which method removes the last element from an array?",
    options: ["push()", "pop()", "shift()", "splice()"],
    correctAnswer: 1,
  },
];

const qns = document.getElementById("qns");
const options = document.getElementById("options");
const qnsNumber = document.getElementById("qnsNumber");
const nextQnsBtn = document.getElementById("next-btn");

let currentIndex = 0;

let selectedAnswer = null;

let userAnswer = [];

let score = 0;

let timer = null;

let timeLeft = 30;

function loadQns() {
  let currentQns = quizData[currentIndex];

  qnsNumber.innerText = `Qns ${currentIndex + 1}/${quizData.length}`;

  qns.innerText = quizData[currentIndex].qns;

  qns.innerText = currentQns.qns;

  options.innerHTML = "";

  currentQns.options.forEach((option, index) => {
    const col = document.createElement("div");

    col.classList.add("col-md-6");

    const button = document.createElement("button");

    button.innerText = option;

    button.classList.add("btn", "btn-outline-primary", "option-btn");

    button.onclick = function () {
      selectedAnswer = index;

      console.log("user answer", userAnswer);
      nextQns();
    };

    options.appendChild(col);

    col.appendChild(button);
  });

  startTimer();
}

loadQns();

function startTimer() {
  let timeElement = document.getElementById("timer");

  clearInterval(timer);

  timeLeft = 30;

  timeElement.innerText = `Time Left ${timeLeft}`;

  timer = setInterval(() => {
    timeLeft--;
    timeElement.innerText = `Time Left ${timeLeft}`;

    if (timeLeft <= 0) {
      clearInterval(timer);

      selectedAnswer = null;
      nextQns();
      loadQns();
    }
  }, 1000);
}

function nextQns() {
  clearInterval(timer);

  if (selectedAnswer === null) {
  }

  userAnswer.push({
    qns: quizData[currentIndex].qns,
    userSelect: selectedAnswer,
    options: quizData[currentIndex].options,
    correctAnswer: quizData[currentIndex].correctAnswer,
  });

  if (selectedAnswer === quizData[currentIndex].correctAnswer) {
    score++;
  }
  if (currentIndex < quizData.length - 1) {
    selectedAnswer = null;
    currentIndex++;
    loadQns();
  } else {
    result();
  }
}

function result() {
  let result = document.querySelector(".quiz-card");

  result.innerHTML = "";

  result.innerHTML = `

  <h3 class="text-center mt-3">Quiz result </h3>
  <h4 class=text-center result>Result :-${score}/ ${quizData.length} </h4>

  <div class="mt-4">
  <h3 class="text-center">Review summary</h3>
  <ul class="list-group"> 
  ${userAnswer.map(
    (ans, index) => `

     <li class="list-group-item">
     <h5 class="text-center">Question No:- ${index + 1} :- ${ans.qns}</h5>
     <br>

     <h5 class="text-center">Your answer:- ${ans.userSelect !== null ? ans.options[ans.userSelect] : "not selected"} </h5>
     <br>

     <h5 class="text-center">Correct answer:- ${ans.options[ans.correctAnswer]}</h5>
     </li>
    `,
  )}
  
 
  </ul>
  </div>
  `;
}
