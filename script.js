// Наборы вопросов по темам
const questionSets = {
  colors: [
    { "question": "What color is the sky on a clear day?", "options": ["Blue", "Green", "Red", "Yellow"], "answer": "Blue" },
    { "question": "What color is grass?", "options": ["Red", "Green", "Blue", "Orange"], "answer": "Green" },
    { "question": "What color is a lemon?", "options": ["Yellow", "Purple", "Pink", "Black"], "answer": "Yellow" },
    { "question": "What color are strawberries?", "options": ["Red", "Brown", "White", "Blue"], "answer": "Red" },
    { "question": "What color is snow?", "options": ["Black", "White", "Green", "Orange"], "answer": "White" },
    { "question": "What color is the sun?", "options": ["Blue", "Yellow", "Green", "Purple"], "answer": "Yellow" },
    { "question": "What color are bananas?", "options": ["Red", "Yellow", "Blue", "Green"], "answer": "Yellow" },
    { "question": "What color is chocolate?", "options": ["White", "Brown", "Red", "Blue"], "answer": "Brown" },
    { "question": "What color is an orange?", "options": ["Red", "Orange", "Yellow", "Green"], "answer": "Orange" },
    { "question": "What color is a tomato?", "options": ["Green", "Red", "Blue", "Yellow"], "answer": "Red" },
    { "question": "What color is milk?", "options": ["Blue", "White", "Red", "Green"], "answer": "White" },
    { "question": "What color is a leaf?", "options": ["Red", "Green", "Blue", "Yellow"], "answer": "Green" },
    { "question": "What color is a cherry?", "options": ["Green", "Red", "Blue", "Yellow"], "answer": "Red" },
    { "question": "What color is the ocean?", "options": ["Red", "Blue", "Green", "Yellow"], "answer": "Blue" },
    { "question": "What color is a carrot?", "options": ["Green", "Orange", "Red", "Blue"], "answer": "Orange" },
    { "question": "What color is a grape?", "options": ["Red", "Purple", "Green", "Yellow"], "answer": "Purple" },
    { "question": "What color is a cloud?", "options": ["Black", "White", "Red", "Blue"], "answer": "White" },
    { "question": "What color is a rose?", "options": ["Blue", "Red", "Green", "Yellow"], "answer": "Red" },
    { "question": "What color is a lemon?", "options": ["Green", "Yellow", "Red", "Blue"], "answer": "Yellow" },
    { "question": "What color is a tree trunk?", "options": ["Green", "Brown", "Red", "Blue"], "answer": "Brown" }
  ],
  
  animals: [
    { "question": "Which animal says 'Meow'?", "options": ["Dog", "Cat", "Cow", "Horse"], "answer": "Cat" },
    { "question": "Which animal is the king of the jungle?", "options": ["Tiger", "Lion", "Elephant", "Monkey"], "answer": "Lion" },
    { "question": "Which animal gives us milk?", "options": ["Sheep", "Cow", "Pig", "Dog"], "answer": "Cow" },
    { "question": "Which animal has a long trunk?", "options": ["Giraffe", "Elephant", "Rhino", "Hippo"], "answer": "Elephant" },
    { "question": "Which animal is very slow and has a shell?", "options": ["Rabbit", "Snail", "Turtle", "Frog"], "answer": "Turtle" },
    { "question": "Which animal barks?", "options": ["Cat", "Dog", "Bird", "Fish"], "answer": "Dog" },
    { "question": "Which animal is very tall?", "options": ["Elephant", "Giraffe", "Horse", "Cow"], "answer": "Giraffe" },
    { "question": "Which animal lives in water?", "options": ["Cat", "Dog", "Fish", "Bird"], "answer": "Fish" },
    { "question": "Which animal can fly?", "options": ["Dog", "Cat", "Bird", "Fish"], "answer": "Bird" },
    { "question": "Which animal is black and white and lives in China?", "options": ["Tiger", "Panda", "Lion", "Elephant"], "answer": "Panda" },
    { "question": "Which animal is very fast?", "options": ["Turtle", "Cheetah", "Snail", "Sloth"], "answer": "Cheetah" },
    { "question": "Which animal has stripes?", "options": ["Lion", "Tiger", "Elephant", "Bear"], "answer": "Tiger" },
    { "question": "Which animal is very big and gray?", "options": ["Mouse", "Elephant", "Cat", "Dog"], "answer": "Elephant" },
    { "question": "Which animal lives in the ocean?", "options": ["Dog", "Whale", "Cat", "Bird"], "answer": "Whale" },
    { "question": "Which animal is very small and can jump?", "options": ["Elephant", "Frog", "Cow", "Horse"], "answer": "Frog" },
    { "question": "Which animal has a long neck?", "options": ["Elephant", "Giraffe", "Horse", "Cow"], "answer": "Giraffe" },
    { "question": "Which animal is very strong?", "options": ["Mouse", "Ant", "Elephant", "Bird"], "answer": "Elephant" },
    { "question": "Which animal is very cute and fluffy?", "options": ["Snake", "Rabbit", "Fish", "Frog"], "answer": "Rabbit" },
    { "question": "Which animal is very smart?", "options": ["Dolphin", "Fish", "Bird", "Frog"], "answer": "Dolphin" },
    { "question": "Which animal is very big and orange?", "options": ["Cat", "Tiger", "Dog", "Bird"], "answer": "Tiger" }
  ],
  
  fruits: [
    { "question": "What fruit is yellow and long?", "options": ["Apple", "Banana", "Grape", "Orange"], "answer": "Banana" },
    { "question": "What vegetable is orange and rabbits love it?", "options": ["Potato", "Carrot", "Onion", "Cabbage"], "answer": "Carrot" },
    { "question": "What fruit is green outside and red inside with black seeds?", "options": ["Pear", "Watermelon", "Kiwi", "Peach"], "answer": "Watermelon" },
    { "question": "Which of these is a fruit?", "options": ["Tomato", "Cucumber", "Potato", "Carrot"], "answer": "Tomato" },
    { "question": "Which fruit is small and purple or green, often used for wine?", "options": ["Grapes", "Plum", "Cherry", "Peach"], "answer": "Grapes" },
    { "question": "What fruit is red and round?", "options": ["Banana", "Apple", "Grape", "Orange"], "answer": "Apple" },
    { "question": "What fruit is orange and round?", "options": ["Apple", "Orange", "Grape", "Banana"], "answer": "Orange" },
    { "question": "What vegetable is green and looks like a tree?", "options": ["Carrot", "Broccoli", "Potato", "Onion"], "answer": "Broccoli" },
    { "question": "What fruit is small and red?", "options": ["Apple", "Cherry", "Banana", "Orange"], "answer": "Cherry" },
    { "question": "What vegetable is white and makes you cry?", "options": ["Carrot", "Onion", "Potato", "Tomato"], "answer": "Onion" },
    { "question": "What fruit is green and sour?", "options": ["Apple", "Lemon", "Banana", "Orange"], "answer": "Lemon" },
    { "question": "What vegetable is brown and grows underground?", "options": ["Carrot", "Potato", "Tomato", "Cabbage"], "answer": "Potato" },
    { "question": "What fruit is pink and has seeds on the outside?", "options": ["Apple", "Strawberry", "Banana", "Orange"], "answer": "Strawberry" },
    { "question": "What vegetable is green and long?", "options": ["Carrot", "Cucumber", "Potato", "Onion"], "answer": "Cucumber" },
    { "question": "What fruit is yellow and sour?", "options": ["Banana", "Lemon", "Apple", "Orange"], "answer": "Lemon" },
    { "question": "What vegetable is red and round?", "options": ["Carrot", "Tomato", "Potato", "Onion"], "answer": "Tomato" },
    { "question": "What fruit is green and sweet?", "options": ["Apple", "Grape", "Banana", "Orange"], "answer": "Grape" },
    { "question": "What vegetable is orange and long?", "options": ["Potato", "Carrot", "Onion", "Cabbage"], "answer": "Carrot" },
    { "question": "What fruit is red and has a pit?", "options": ["Apple", "Cherry", "Banana", "Orange"], "answer": "Cherry" },
    { "question": "What vegetable is green and leafy?", "options": ["Carrot", "Lettuce", "Potato", "Onion"], "answer": "Lettuce" }
  ],
  
  phrases: [
    { "question": "How do you say 'Привет' in English?", "options": ["Bye", "Hello", "Thanks", "Good night"], "answer": "Hello" },
    { "question": "How do you say 'Спасибо' in English?", "options": ["Sorry", "Please", "Thanks", "Welcome"], "answer": "Thanks" },
    { "question": "How do you say 'Пока' in English?", "options": ["Bye", "Good morning", "Hello", "Good evening"], "answer": "Bye" },
    { "question": "How do you say 'Извини' in English?", "options": ["Sorry", "Hello", "Yes", "Goodbye"], "answer": "Sorry" },
    { "question": "How do you say 'Доброе утро' in English?", "options": ["Good night", "Good morning", "Goodbye", "Hello"], "answer": "Good morning" },
    { "question": "How do you say 'Пожалуйста' in English?", "options": ["Please", "Thanks", "Sorry", "Hello"], "answer": "Please" },
    { "question": "How do you say 'Да' in English?", "options": ["No", "Yes", "Maybe", "Why"], "answer": "Yes" },
    { "question": "How do you say 'Нет' in English?", "options": ["Yes", "No", "Maybe", "Why"], "answer": "No" },
    { "question": "How do you say 'Добрый день' in English?", "options": ["Good morning", "Good afternoon", "Good evening", "Good night"], "answer": "Good afternoon" },
    { "question": "How do you say 'Добрый вечер' in English?", "options": ["Good morning", "Good afternoon", "Good evening", "Good night"], "answer": "Good evening" },
    { "question": "How do you say 'Спокойной ночи' in English?", "options": ["Good morning", "Good afternoon", "Good evening", "Good night"], "answer": "Good night" },
    { "question": "How do you say 'Как дела?' in English?", "options": ["How are you?", "What's up?", "How do you do?", "All of the above"], "answer": "All of the above" },
    { "question": "How do you say 'До свидания' in English?", "options": ["Hello", "Goodbye", "Thanks", "Please"], "answer": "Goodbye" },
    { "question": "How do you say 'Помогите' in English?", "options": ["Please", "Help", "Thanks", "Sorry"], "answer": "Help" },
    { "question": "How do you say 'Понятно' in English?", "options": ["I understand", "I see", "Got it", "All of the above"], "answer": "All of the above" },
    { "question": "How do you say 'Не знаю' in English?", "options": ["I know", "I don't know", "I think", "I see"], "answer": "I don't know" },
    { "question": "How do you say 'Хорошо' in English?", "options": ["Bad", "Good", "Okay", "Both B and C"], "answer": "Both B and C" },
    { "question": "How do you say 'Плохо' in English?", "options": ["Good", "Bad", "Okay", "Great"], "answer": "Bad" },
    { "question": "How do you say 'Большое спасибо' in English?", "options": ["Thank you", "Thank you very much", "Thanks a lot", "All of the above"], "answer": "All of the above" },
    { "question": "How do you say 'Не за что' in English?", "options": ["You're welcome", "No problem", "Don't mention it", "All of the above"], "answer": "All of the above" }
  ],
  
  mixed: [
    { "question": "What color is the sky on a clear day?", "options": ["Blue", "Green", "Red", "Yellow"], "answer": "Blue" },
    { "question": "Which animal says 'Meow'?", "options": ["Dog", "Cat", "Cow", "Horse"], "answer": "Cat" },
    { "question": "What fruit is yellow and long?", "options": ["Apple", "Banana", "Grape", "Orange"], "answer": "Banana" },
    { "question": "How do you say 'Привет' in English?", "options": ["Bye", "Hello", "Thanks", "Good night"], "answer": "Hello" },
    { "question": "What color is grass?", "options": ["Red", "Green", "Blue", "Orange"], "answer": "Green" },
    { "question": "Which animal is the king of the jungle?", "options": ["Tiger", "Lion", "Elephant", "Monkey"], "answer": "Lion" },
    { "question": "What vegetable is orange and rabbits love it?", "options": ["Potato", "Carrot", "Onion", "Cabbage"], "answer": "Carrot" },
    { "question": "How do you say 'Спасибо' in English?", "options": ["Sorry", "Please", "Thanks", "Welcome"], "answer": "Thanks" },
    { "question": "What color is a lemon?", "options": ["Yellow", "Purple", "Pink", "Black"], "answer": "Yellow" },
    { "question": "Which animal gives us milk?", "options": ["Sheep", "Cow", "Pig", "Dog"], "answer": "Cow" },
    { "question": "What fruit is green outside and red inside with black seeds?", "options": ["Pear", "Watermelon", "Kiwi", "Peach"], "answer": "Watermelon" },
    { "question": "How do you say 'Пока' in English?", "options": ["Bye", "Good morning", "Hello", "Good evening"], "answer": "Bye" },
    { "question": "What color are strawberries?", "options": ["Red", "Brown", "White", "Blue"], "answer": "Red" },
    { "question": "Which animal has a long trunk?", "options": ["Giraffe", "Elephant", "Rhino", "Hippo"], "answer": "Elephant" },
    { "question": "Which of these is a fruit?", "options": ["Tomato", "Cucumber", "Potato", "Carrot"], "answer": "Tomato" },
    { "question": "How do you say 'Извини' in English?", "options": ["Sorry", "Hello", "Yes", "Goodbye"], "answer": "Sorry" },
    { "question": "What color is snow?", "options": ["Black", "White", "Green", "Orange"], "answer": "White" },
    { "question": "Which animal is very slow and has a shell?", "options": ["Rabbit", "Snail", "Turtle", "Frog"], "answer": "Turtle" },
    { "question": "Which fruit is small and purple or green, often used for wine?", "options": ["Grapes", "Plum", "Cherry", "Peach"], "answer": "Grapes" },
    { "question": "How do you say 'Доброе утро' in English?", "options": ["Good night", "Good morning", "Goodbye", "Hello"], "answer": "Good morning" }
  ]
};

let questions = [];
let teamAName = 'Team A';
let teamBName = 'Team B';
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
  startPage: document.getElementById('startPage'),
  gamePage: document.getElementById('gamePage'),
  teamANameInput: document.getElementById('teamAName'),
  teamBNameInput: document.getElementById('teamBName'),
  topicSelect: document.getElementById('topicSelect'),
  startGameBtn: document.getElementById('startGameBtn'),
  gameTitle: document.getElementById('gameTitle'),
  resetBtn: document.getElementById('resetBtn'),
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

function startGame(){
  // Получаем данные из формы
  teamAName = el.teamANameInput.value.trim() || 'Team A';
  teamBName = el.teamBNameInput.value.trim() || 'Team B';
  const selectedTopic = el.topicSelect.value;
  
  // Загружаем вопросы по выбранной теме
  questions = questionSets[selectedTopic];
  
  // Обновляем заголовок игры
  const topicNames = {
    colors: 'Цвета',
    animals: 'Животные', 
    fruits: 'Фрукты и овощи',
    phrases: 'Фразы',
    mixed: 'Смешанная тема'
  };
  el.gameTitle.textContent = `Викторина: ${topicNames[selectedTopic]}`;
  
  // Обновляем названия команд в панелях
  el.panelA.querySelector('.panel-title').textContent = teamAName;
  el.panelB.querySelector('.panel-title').textContent = teamBName;
  
  // Обновляем названия команд в счёте
  el.scoreA.parentElement.innerHTML = `${teamAName}: <strong id="scoreA">0</strong>`;
  el.scoreB.parentElement.innerHTML = `${teamBName}: <strong id="scoreB">0</strong>`;
  
  // Переопределяем элементы после обновления DOM
  el.scoreA = document.getElementById('scoreA');
  el.scoreB = document.getElementById('scoreB');
  
  // Скрываем стартовую страницу и показываем игру
  el.startPage.style.display = 'none';
  el.gamePage.style.display = 'block';
  
  // Инициализируем игру
  restart();
}

function setActiveTeam(team){
  activeTeam = team;
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
  // Переключаем команду после каждого вопроса
  activeTeam = activeTeam === 'A' ? 'B' : 'A';
  setActiveTeam(activeTeam);
  
  if(currentQuestionIndex < questions.length - 1){
    currentQuestionIndex += 1;
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult(){
  let result;
  if(scoreA > scoreB){ result = `Победила ${teamAName}! 🎉`; }
  else if(scoreB > scoreA){ result = `Победила ${teamBName}! 🏆`; }
  else { result = 'Ничья! 🤝'; }
  el.resultText.textContent = `${teamAName}: ${scoreA} — ${teamBName}: ${scoreB}. ${result}`;
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

function backToStart(){
  el.gamePage.style.display = 'none';
  el.startPage.style.display = 'flex';
  el.modal.setAttribute('aria-hidden', 'true');
}


// events
el.startGameBtn.addEventListener('click', startGame);
el.resetBtn.addEventListener('click', restart);
el.nextBtn.addEventListener('click', nextQuestion);
el.restartBtn.addEventListener('click', backToStart);

// init - показываем стартовую страницу

