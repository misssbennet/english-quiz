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
  
  school: [
    { "question": "What day comes after Monday?", "options": ["Sunday", "Tuesday", "Wednesday", "Thursday"], "answer": "Tuesday" },
    { "question": "What day comes before Friday?", "options": ["Wednesday", "Thursday", "Saturday", "Sunday"], "answer": "Thursday" },
    { "question": "What is the first day of the week?", "options": ["Monday", "Tuesday", "Sunday", "Saturday"], "answer": "Monday" },
    { "question": "What day is the weekend?", "options": ["Monday and Tuesday", "Wednesday and Thursday", "Saturday and Sunday", "Friday and Saturday"], "answer": "Saturday and Sunday" },
    { "question": "What subject do you study numbers in?", "options": ["English", "Math", "Art", "Music"], "answer": "Math" },
    { "question": "What subject do you study colors and drawing in?", "options": ["Math", "Art", "Science", "English"], "answer": "Art" },
    { "question": "What subject do you study animals and plants in?", "options": ["Math", "English", "Science", "Art"], "answer": "Science" },
    { "question": "What subject do you study reading and writing in?", "options": ["Math", "English", "Science", "Art"], "answer": "English" },
    { "question": "What do you use to write with?", "options": ["Book", "Pencil", "Eraser", "Ruler"], "answer": "Pencil" },
    { "question": "What do you sit on in class?", "options": ["Desk", "Chair", "Floor", "Table"], "answer": "Chair" },
    { "question": "What do you put your books in?", "options": ["Backpack", "Pencil", "Eraser", "Ruler"], "answer": "Backpack" },
    { "question": "What do you use to erase mistakes?", "options": ["Pencil", "Eraser", "Pen", "Ruler"], "answer": "Eraser" },
    { "question": "What time does school usually start?", "options": ["6 AM", "8 AM", "12 PM", "6 PM"], "answer": "8 AM" },
    { "question": "What do you eat at school?", "options": ["Lunch", "Dinner", "Breakfast", "Snack"], "answer": "Lunch" },
    { "question": "What do you play during recess?", "options": ["Games", "Sleep", "Study", "Eat"], "answer": "Games" },
    { "question": "What do you wear to school?", "options": ["Pajamas", "Uniform", "Swimsuit", "Costume"], "answer": "Uniform" },
    { "question": "What do you do in the library?", "options": ["Eat", "Sleep", "Read books", "Play games"], "answer": "Read books" },
    { "question": "What do you use to measure things?", "options": ["Pencil", "Ruler", "Eraser", "Book"], "answer": "Ruler" },
    { "question": "What do you call your teacher?", "options": ["Mom", "Dad", "Teacher", "Friend"], "answer": "Teacher" },
    { "question": "What do you do when school ends?", "options": ["Go home", "Stay forever", "Sleep", "Eat"], "answer": "Go home" }
  ],
  
  food: [
    { "question": "What do you drink when you're thirsty?", "options": ["Food", "Water", "Book", "Toy"], "answer": "Water" },
    { "question": "What do you eat for breakfast?", "options": ["Dinner", "Cereal", "Lunch", "Snack"], "answer": "Cereal" },
    { "question": "What is orange and sweet?", "options": ["Apple", "Orange", "Banana", "Grape"], "answer": "Orange" },
    { "question": "What do you drink that's white and comes from cows?", "options": ["Water", "Milk", "Juice", "Tea"], "answer": "Milk" },
    { "question": "What is round and red and used in salads?", "options": ["Apple", "Tomato", "Orange", "Banana"], "answer": "Tomato" },
    { "question": "What do you eat that's made from wheat?", "options": ["Bread", "Meat", "Fruit", "Vegetable"], "answer": "Bread" },
    { "question": "What is yellow and long and monkeys love?", "options": ["Apple", "Banana", "Orange", "Grape"], "answer": "Banana" },
    { "question": "What do you drink that's hot and brown?", "options": ["Water", "Coffee", "Milk", "Juice"], "answer": "Coffee" },
    { "question": "What is green and rabbits love to eat?", "options": ["Carrot", "Lettuce", "Apple", "Banana"], "answer": "Lettuce" },
    { "question": "What do you eat that's sweet and comes from bees?", "options": ["Sugar", "Honey", "Salt", "Pepper"], "answer": "Honey" },
    { "question": "What is red and small and grows on bushes?", "options": ["Apple", "Strawberry", "Orange", "Banana"], "answer": "Strawberry" },
    { "question": "What do you drink that's made from fruits?", "options": ["Water", "Juice", "Milk", "Coffee"], "answer": "Juice" },
    { "question": "What is white and you put it in coffee?", "options": ["Sugar", "Milk", "Salt", "Pepper"], "answer": "Milk" },
    { "question": "What do you eat that's made from potatoes?", "options": ["Bread", "Chips", "Rice", "Pasta"], "answer": "Chips" },
    { "question": "What is green and you eat it with salad?", "options": ["Apple", "Lettuce", "Banana", "Orange"], "answer": "Lettuce" },
    { "question": "What do you drink that's cold and sweet?", "options": ["Hot tea", "Ice cream", "Cold water", "Warm milk"], "answer": "Cold water" },
    { "question": "What is brown and you eat it with bread?", "options": ["Butter", "Jam", "Cheese", "Meat"], "answer": "Butter" },
    { "question": "What do you eat that's round and has cheese on top?", "options": ["Bread", "Pizza", "Cake", "Cookie"], "answer": "Pizza" },
    { "question": "What is yellow and you put it on bread?", "options": ["Butter", "Jam", "Cheese", "Meat"], "answer": "Butter" },
    { "question": "What do you drink that's hot and you add sugar?", "options": ["Cold water", "Tea", "Milk", "Juice"], "answer": "Tea" }
  ],
  
  holidays: [
    { "question": "What holiday is in December with presents?", "options": ["Halloween", "Christmas", "Easter", "Birthday"], "answer": "Christmas" },
    { "question": "What holiday is in October with costumes?", "options": ["Christmas", "Halloween", "Easter", "Birthday"], "answer": "Halloween" },
    { "question": "What do you wear on Halloween?", "options": ["Uniform", "Costume", "Pajamas", "Swimsuit"], "answer": "Costume" },
    { "question": "What do you get on Christmas?", "options": ["Homework", "Presents", "Vegetables", "Medicine"], "answer": "Presents" },
    { "question": "What sport do you play with a ball and goal?", "options": ["Basketball", "Soccer", "Tennis", "Swimming"], "answer": "Soccer" },
    { "question": "What sport do you play in water?", "options": ["Running", "Swimming", "Jumping", "Walking"], "answer": "Swimming" },
    { "question": "What game do you play with cards?", "options": ["Soccer", "Swimming", "Card game", "Running"], "answer": "Card game" },
    { "question": "What do you do on your birthday?", "options": ["Study", "Work", "Celebrate", "Sleep"], "answer": "Celebrate" },
    { "question": "What do you eat on your birthday?", "options": ["Vegetables", "Cake", "Medicine", "Homework"], "answer": "Cake" },
    { "question": "What sport do you play with a racket?", "options": ["Soccer", "Tennis", "Swimming", "Running"], "answer": "Tennis" },
    { "question": "What do you wear on Halloween to scare people?", "options": ["Nice clothes", "Costume", "Uniform", "Pajamas"], "answer": "Costume" },
    { "question": "What do you say on Christmas?", "options": ["Happy Halloween", "Merry Christmas", "Happy Birthday", "Good luck"], "answer": "Merry Christmas" },
    { "question": "What game do you play with dice?", "options": ["Soccer", "Board game", "Swimming", "Running"], "answer": "Board game" },
    { "question": "What do you do in summer vacation?", "options": ["Study", "Work", "Play and relax", "Sleep all day"], "answer": "Play and relax" },
    { "question": "What sport do you play with a basket?", "options": ["Soccer", "Basketball", "Tennis", "Swimming"], "answer": "Basketball" },
    { "question": "What do you give someone on their birthday?", "options": ["Homework", "Presents", "Vegetables", "Medicine"], "answer": "Presents" },
    { "question": "What do you do on Easter?", "options": ["Study", "Work", "Look for eggs", "Sleep"], "answer": "Look for eggs" },
    { "question": "What game do you play with a ball and bat?", "options": ["Soccer", "Baseball", "Tennis", "Swimming"], "answer": "Baseball" },
    { "question": "What do you wear on Christmas?", "options": ["Costume", "Nice clothes", "Uniform", "Pajamas"], "answer": "Nice clothes" },
    { "question": "What do you do on New Year's Eve?", "options": ["Study", "Work", "Celebrate", "Sleep"], "answer": "Celebrate" }
  ],
  
  home: [
    { "question": "Where do you cook food?", "options": ["Bedroom", "Kitchen", "Bathroom", "Living room"], "answer": "Kitchen" },
    { "question": "Where do you sleep?", "options": ["Kitchen", "Bedroom", "Bathroom", "Living room"], "answer": "Bedroom" },
    { "question": "Where do you take a shower?", "options": ["Kitchen", "Bedroom", "Bathroom", "Living room"], "answer": "Bathroom" },
    { "question": "Where do you watch TV?", "options": ["Kitchen", "Bedroom", "Bathroom", "Living room"], "answer": "Living room" },
    { "question": "What do you sit on in the living room?", "options": ["Table", "Sofa", "Bed", "Chair"], "answer": "Sofa" },
    { "question": "What do you sleep on?", "options": ["Sofa", "Bed", "Table", "Chair"], "answer": "Bed" },
    { "question": "What do you eat on?", "options": ["Bed", "Table", "Sofa", "Chair"], "answer": "Table" },
    { "question": "What do you sit on at the table?", "options": ["Bed", "Sofa", "Chair", "Table"], "answer": "Chair" },
    { "question": "Where do you keep your clothes?", "options": ["Kitchen", "Closet", "Bathroom", "Living room"], "answer": "Closet" },
    { "question": "What do you use to open doors?", "options": ["Key", "Book", "Toy", "Food"], "answer": "Key" },
    { "question": "What do you use to see in the dark?", "options": ["Candle", "Lamp", "Flashlight", "All of the above"], "answer": "All of the above" },
    { "question": "Where do you keep food cold?", "options": ["Oven", "Refrigerator", "Microwave", "Stove"], "answer": "Refrigerator" },
    { "question": "What do you use to cook food?", "options": ["Refrigerator", "Stove", "Microwave", "Both B and C"], "answer": "Both B and C" },
    { "question": "Where do you wash dishes?", "options": ["Bedroom", "Kitchen sink", "Bathroom", "Living room"], "answer": "Kitchen sink" },
    { "question": "What do you use to clean the floor?", "options": ["Broom", "Vacuum", "Mop", "All of the above"], "answer": "All of the above" },
    { "question": "Where do you keep books?", "options": ["Kitchen", "Bookshelf", "Bathroom", "Refrigerator"], "answer": "Bookshelf" },
    { "question": "What do you use to brush your teeth?", "options": ["Toothbrush", "Hairbrush", "Broom", "Mop"], "answer": "Toothbrush" },
    { "question": "Where do you keep your toothbrush?", "options": ["Kitchen", "Bedroom", "Bathroom", "Living room"], "answer": "Bathroom" },
    { "question": "What do you use to turn on lights?", "options": ["Key", "Switch", "Button", "Both B and C"], "answer": "Both B and C" },
    { "question": "Where do you keep your toys?", "options": ["Kitchen", "Toy box", "Bathroom", "Refrigerator"], "answer": "Toy box" }
  ],
  
  mixed: [
    { "question": "What color is the sky on a clear day?", "options": ["Blue", "Green", "Red", "Yellow"], "answer": "Blue" },
    { "question": "Which animal says 'Meow'?", "options": ["Dog", "Cat", "Cow", "Horse"], "answer": "Cat" },
    { "question": "What fruit is yellow and long?", "options": ["Apple", "Banana", "Grape", "Orange"], "answer": "Banana" },
    { "question": "How do you say 'Привет' in English?", "options": ["Bye", "Hello", "Thanks", "Good night"], "answer": "Hello" },
    { "question": "What day comes after Monday?", "options": ["Sunday", "Tuesday", "Wednesday", "Thursday"], "answer": "Tuesday" },
    { "question": "What do you drink when you're thirsty?", "options": ["Food", "Water", "Book", "Toy"], "answer": "Water" },
    { "question": "What holiday is in December with presents?", "options": ["Halloween", "Christmas", "Easter", "Birthday"], "answer": "Christmas" },
    { "question": "Where do you cook food?", "options": ["Bedroom", "Kitchen", "Bathroom", "Living room"], "answer": "Kitchen" },
    { "question": "What color is grass?", "options": ["Red", "Green", "Blue", "Orange"], "answer": "Green" },
    { "question": "Which animal is the king of the jungle?", "options": ["Tiger", "Lion", "Elephant", "Monkey"], "answer": "Lion" },
    { "question": "What subject do you study numbers in?", "options": ["English", "Math", "Art", "Music"], "answer": "Math" },
    { "question": "What do you eat for breakfast?", "options": ["Dinner", "Cereal", "Lunch", "Snack"], "answer": "Cereal" },
    { "question": "What sport do you play with a ball and goal?", "options": ["Basketball", "Soccer", "Tennis", "Swimming"], "answer": "Soccer" },
    { "question": "Where do you sleep?", "options": ["Kitchen", "Bedroom", "Bathroom", "Living room"], "answer": "Bedroom" },
    { "question": "How do you say 'Спасибо' in English?", "options": ["Sorry", "Please", "Thanks", "Welcome"], "answer": "Thanks" },
    { "question": "What do you use to write with?", "options": ["Book", "Pencil", "Eraser", "Ruler"], "answer": "Pencil" },
    { "question": "What is orange and sweet?", "options": ["Apple", "Orange", "Banana", "Grape"], "answer": "Orange" },
    { "question": "What do you wear on Halloween?", "options": ["Uniform", "Costume", "Pajamas", "Swimsuit"], "answer": "Costume" },
    { "question": "What do you sit on in the living room?", "options": ["Table", "Sofa", "Bed", "Chair"], "answer": "Sofa" },
    { "question": "What do you get on Christmas?", "options": ["Homework", "Presents", "Vegetables", "Medicine"], "answer": "Presents" }
  ]
};

let questions = [];
let teamAName = 'Team A';
let teamBName = 'Team B';

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
  console.log('startGame called');
  
  // Получаем данные из формы
  teamAName = el.teamANameInput.value.trim() || 'Team A';
  teamBName = el.teamBNameInput.value.trim() || 'Team B';
  const selectedTopic = el.topicSelect.value;
  
  console.log('Team A:', teamAName, 'Team B:', teamBName, 'Topic:', selectedTopic);
  
  // Загружаем вопросы по выбранной теме
  questions = questionSets[selectedTopic];
  console.log('Questions loaded:', questions.length);
  
  // Обновляем заголовок игры
  const topicNames = {
    colors: 'Цвета',
    animals: 'Животные', 
    fruits: 'Фрукты и овощи',
    phrases: 'Фразы',
    school: 'Школа',
    food: 'Еда и напитки',
    holidays: 'Праздники и увлечения',
    home: 'Дом и предметы',
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
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, setting up events');
  
  if (el.startGameBtn) {
    el.startGameBtn.addEventListener('click', startGame);
    console.log('Start game button event added');
  } else {
    console.error('Start game button not found');
  }
  
  if (el.resetBtn) {
    el.resetBtn.addEventListener('click', restart);
  }
  
  if (el.nextBtn) {
    el.nextBtn.addEventListener('click', nextQuestion);
  }
  
  if (el.restartBtn) {
    el.restartBtn.addEventListener('click', backToStart);
  }
  
  // Показываем стартовую страницу
  if (el.startPage) {
    el.startPage.style.display = 'flex';
  }
  if (el.gamePage) {
    el.gamePage.style.display = 'none';
  }
});

