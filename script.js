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

var currentIndex = 0;

qns.innerText = quizData[currentIndex].qns;

