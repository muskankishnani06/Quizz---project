# 🧠 JavaScript Quiz App

A simple, responsive quiz app built with **HTML, CSS, JavaScript and Bootstrap 5**. Answer 10 JavaScript questions against a 30-second timer per question, then see your score along with a full review of your answers.

## ✨ Features

- 10 multiple-choice questions on JavaScript fundamentals
- 30-second countdown timer for each question
- Auto-advance when you pick an answer or when time runs out
- Final score screen
- Review summary showing your answer vs. the correct answer for every question
- Unanswered questions are marked as "not selected"
- Responsive layout that works on desktop, tablet and mobile
- Smooth animations, with `prefers-reduced-motion` support

## 🛠️ Tech Stack

- **HTML5**
- **CSS3** (custom styling on top of Bootstrap)
- **Vanilla JavaScript** (no frameworks or build tools)
- **Bootstrap 5.3.8** (loaded via CDN)

## 📁 Project Structure

```
quiz-app/
├── index.html   # Page structure and Bootstrap layout
├── style.css    # Custom styles, animations and responsive rules
└── script.js    # Quiz data, timer, scoring and result logic
```

## 🚀 Getting Started

No installation needed.

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. **Open the project folder**
   ```bash
   cd your-repo-name
   ```
3. **Run it** by opening `index.html` in your browser (or use the VS Code *Live Server* extension).

> Bootstrap is loaded from a CDN, so you need an internet connection the first time you open the app.

## 🎮 How It Works

1. The quiz starts at question 1 and the 30-second timer begins.
2. Click an option to submit your answer and move on to the next question.
3. If the timer reaches zero, the question is recorded as unanswered.
4. After the last question, you see your final score and a review of every question.

## ✏️ Customizing the Questions

All questions live in the `quizData` array at the top of `script.js`. Each question follows this format:

```js
{
  qns: "Your question here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correctAnswer: 2, // index of the correct option (starts at 0)
}
```

Add, remove or edit objects in the array and the quiz updates automatically, including the question counter and the score total.

## 🔮 Future Improvements

- Show correct/incorrect feedback right after answering
- Low-time warning on the timer (the style is already in `style.css`)
- Restart button on the result screen
- Shuffle questions and options
- Different quiz categories and difficulty levels
- Save high scores with `localStorage`


## 👤 Author

Muskan Kishnani

