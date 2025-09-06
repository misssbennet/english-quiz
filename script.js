// Массив из 20 вопросов (из предоставленного JSON)
const questions = [
  {
    "question": "What color is the sky on a clear day?",
    "options": ["Blue", "Green", "Red", "Yellow"],
    "answer": "Blue",
    "category": "Colors"
  },
  {
    "question": "What color is grass?",
    "options": ["Red", "Green", "Blue", "Orange"],
    "answer": "Green",
    "category": "Colors"
  },
  {
    "question": "What color is a lemon?",
    "options": ["Yellow", "Purple", "Pink", "Black"],
    "answer": "Yellow",
    "category": "Colors"
  },
  {
    "question": "What color are strawberries?",
    "options": ["Red", "Brown", "White", "Blue"],
    "answer": "Red",
    "category": "Colors"
  },
  {
    "question": "What color is snow?",
    "options": ["Black", "White", "Green", "Orange"],
    "answer": "White",
    "category": "Colors"
  },

  {
    "question": "What fruit is yellow and long?",
    "options": ["Apple", "Banana", "Grape", "Orange"],
    "answer": "Banana",
    "category": "Fruits & Vegetables"
  },
  {
    "question": "What vegetable is orange and rabbits love it?",
    "options": ["Potato", "Carrot", "Onion", "Cabbage"],
    "answer": "Carrot",
    "category": "Fruits & Vegetables"
  },
  {
    "question": "What fruit is green outside and red inside with black seeds?",
    "options": ["Pear", "Watermelon", "Kiwi", "Peach"],
    "answer": "Watermelon",
    "category": "Fruits & Vegetables"
  },
  {
    "question": "Which of these is a fruit?",
    "options": ["Tomato", "Cucumber", "Potato", "Carrot"],
    "answer": "Tomato",
    "category": "Fruits & Vegetables"
  },
  {
    "question": "Which fruit is small and purple or green, often used for wine?",
    "options": ["Grapes", "Plum", "Cherry", "Peach"],
    "answer": "Grapes",
    "category": "Fruits & Vegetables"
  },

  {
    "question": "Which animal says 'Meow'?",
    "options": ["Dog", "Cat", "Cow", "Horse"],
    "answer": "Cat",
    "category": "Animals"
  },
  {
    "question": "Which animal is the king of the jungle?",
    "options": ["Tiger", "Lion", "Elephant", "Monkey"],
    "answer": "Lion",
    "category": "Animals"
  },
  {
    "question": "Which animal gives us milk?",
    "options": ["Sheep", "Cow", "Pig", "Dog"],
    "answer": "Cow",
    "category": "Animals"
  },
  {
    "question": "Which animal has a long trunk?",
    "options": ["Giraffe", "Elephant", "Rhino", "Hippo"],
    "answer": "Elephant",
    "category": "Animals"
  },
  {
    "question": "Which animal is very slow and has a shell?",
    "options": ["Rabbit", "Snail", "Turtle", "Frog"],
    "answer": "Turtle",
    "category": "Animals"
  },

  {
    "question": "How do you say 'Привет' in English?",
    "options": ["Bye", "Hello", "Thanks", "Good night"],
    "answer": "Hello",
    "category": "Phrases"
  },
  {
    "question": "How do you say 'Спасибо' in English?",
    "options": ["Sorry", "Please", "Thanks", "Welcome"],
    "answer": "Thanks",
    "category": "Phrases"
  },
  {
    "question": "How do you say 'Пока' in English?",
    "options": ["Bye", "Good morning", "Hello", "Good evening"],
    "answer": "Bye",
    "category": "Phrases"
  },
  {
    "question": "How do you say 'Извини' in English?",
    "options": ["Sorry", "Hello", "Yes", "Goodbye"],
    "answer": "Sorry",
    "category": "Phrases"
  },
  {
    "question": "How do you say 'Доброе утро' in English?",
    "options": ["Good night", "Good morning", "Goodbye", "Hello"],
    "answer": "Good morning",
    "category": "Phrases"
  }
];

let currentQuestionIndex = 0;
let activeTeam = 'A';
let scoreA = 0;
let scoreB = 0;
let answered = false;

const el = {
  teamA: document.getElementById('teamA'),
  teamB: document.getElementById('teamB'),
  qNumber: document.getElementById('qNumber'),
  qText: document.getElementById('questionText'),
  answers: document.getElementById('answers'),
  nextBtn: document.getElementById('nextBtn'),
  scoreA: document.getElementById('scoreA'),
  scoreB: document.getElementById('scoreB'),
  panelA: document.getElementById('panelA'),
  panelB: document.getElementById('panelB'),
  panelALabel: document.getElementById('panelALabel'),
  panelBLabel: document.getElementById('panelBLabel'),
  modal: document.getElementById('resultModal'),
  resultText: document.getElementById('resultText'),
  restartBtn: document.getElementById('restartBtn')
};

function setActiveTeam(team){
  activeTeam = team;
  el.teamA.setAttribute('aria-pressed', team === 'A');
  el.teamB.setAttribute('aria-pressed', team === 'B');
  // подсветка панелей
  const isA = team === 'A';
  el.panelA.classList.toggle('active', isA);
  el.panelB.classList.toggle('active', !isA);
  el.panelA.setAttribute('aria-current', String(isA));
  el.panelB.setAttribute('aria-current', String(!isA));
  el.panelALabel.textContent = isA ? 'Сейчас отвечает' : 'Ожидает';
  el.panelBLabel.textContent = isA ? 'Ожидает' : 'Сейчас отвечает';
}

function renderQuestion(){
  const q = questions[currentQuestionIndex];
  el.qNumber.textContent = `Вопрос ${currentQuestionIndex + 1} из ${questions.length}`;
  el.qText.textContent = q.question;
  el.answers.innerHTML = '';
  answered = false;
  el.nextBtn.disabled = true;

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => onAnswer(idx));
    el.answers.appendChild(btn);
  });
}

function onAnswer(selectedIndex){
  if(answered) return;
  answered = true;
  const q = questions[currentQuestionIndex];
  const correctIndex = q.options.indexOf(q.answer);
  const buttons = Array.from(el.answers.children);
  buttons.forEach((b, idx) => {
    if(idx === correctIndex){
      b.classList.add('correct');
    }
    if(idx === selectedIndex && idx !== correctIndex){
      b.classList.add('wrong');
    }
    b.disabled = true;
  });

  const isCorrect = selectedIndex === correctIndex;
  if(isCorrect){
    if(activeTeam === 'A'){ scoreA += 1; el.scoreA.textContent = scoreA; }
    else { scoreB += 1; el.scoreB.textContent = scoreB; }
  }
  el.nextBtn.disabled = false;
}

function nextQuestion(){
  if(currentQuestionIndex < questions.length - 1){
    currentQuestionIndex += 1;
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult(){
  let result;
  if(scoreA > scoreB){ result = 'Победила Team A! 🎉'; }
  else if(scoreB > scoreA){ result = 'Победила Team B! 🏆'; }
  else { result = 'Ничья! 🤝'; }
  el.resultText.textContent = `Team A: ${scoreA} — Team B: ${scoreB}. ${result}`;
  el.modal.setAttribute('aria-hidden', 'false');
}

function restart(){
  currentQuestionIndex = 0;
  scoreA = 0; scoreB = 0;
  el.scoreA.textContent = '0';
  el.scoreB.textContent = '0';
  setActiveTeam('A');
  el.modal.setAttribute('aria-hidden', 'true');
  renderQuestion();
}


// events
el.teamA.addEventListener('click', ()=> setActiveTeam('A'));
el.teamB.addEventListener('click', ()=> setActiveTeam('B'));
el.nextBtn.addEventListener('click', nextQuestion);
el.restartBtn.addEventListener('click', restart);

// init
renderQuestion();

