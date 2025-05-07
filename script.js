// Quiz Data - 10 questions per language
const quizData = {
    python: [
      {
        question: "What is the correct way to create a function in Python?",
        answers: [
          { text: "function myFunc():", correct: false },
          { text: "def myFunc():", correct: true },
          { text: "create myFunc():", correct: false },
          { text: "func myFunc():", correct: false }
        ]
      },
      {
        question: "Which of these is used to comment a single line in Python?",
        answers: [
          { text: "// Comment", correct: false },
          { text: "/* Comment */", correct: false },
          { text: "# Comment", correct: true },
          { text: "-- Comment", correct: false }
        ]
      },
      {
        question: "What does the 'range()' function return?",
        answers: [
          { text: "A list of numbers", correct: false },
          { text: "A sequence of numbers", correct: true },
          { text: "A random number", correct: false },
          { text: "A boolean value", correct: false }
        ]
      },
      {
        question: "How do you create a virtual environment in Python?",
        answers: [
          { text: "python create venv", correct: false },
          { text: "python -m venv myenv", correct: true },
          { text: "python virtual env", correct: false },
          { text: "python make environment", correct: false }
        ]
      },
      {
        question: "Which operator is used for exponentiation in Python?",
        answers: [
          { text: "^", correct: false },
          { text: "**", correct: true },
          { text: "^^", correct: false },
          { text: "//", correct: false }
        ]
      },
      {
        question: "What is the output of 'print(3 * 'abc')' in Python?",
        answers: [
          { text: "abcabcabc", correct: true },
          { text: "3abc", correct: false },
          { text: "abc3", correct: false },
          { text: "Error", correct: false }
        ]
      },
      {
        question: "Which method is used to get the length of a list in Python?",
        answers: [
          { text: "length()", correct: false },
          { text: "size()", correct: false },
          { text: "len()", correct: true },
          { text: "count()", correct: false }
        ]
      },
      {
        question: "What is the correct way to import a module in Python?",
        answers: [
          { text: "include math", correct: false },
          { text: "import math", correct: true },
          { text: "require math", correct: false },
          { text: "using math", correct: false }
        ]
      },
      {
        question: "Which of these is NOT a Python data type?",
        answers: [
          { text: "list", correct: false },
          { text: "tuple", correct: false },
          { text: "array", correct: true },
          { text: "dictionary", correct: false }
        ]
      },
      {
        question: "What does the 'pass' statement do in Python?",
        answers: [
          { text: "Terminates the program", correct: false },
          { text: "Skips the current iteration", correct: false },
          { text: "Does nothing (placeholder)", correct: true },
          { text: "Passes arguments to a function", correct: false }
        ]
      }
    ],
    c: [
      {
        question: "What is the correct way to declare a pointer in C?",
        answers: [
          { text: "int ptr;", correct: false },
          { text: "int *ptr;", correct: true },
          { text: "pointer int ptr;", correct: false },
          { text: "int pointer ptr;", correct: false }
        ]
      },

      {
        question: "What is the size of an int on a 32-bit system?",
        answers: [
          { text: "1 byte", correct: false },
          { text: "2 bytes", correct: false },
          { text: "4 bytes", correct: true },
          { text: "8 bytes", correct: false }
        ]
      },
      {
        question: "Which operator is used to compare two values?",
        answers: [
          { text: "=", correct: false },
          { text: "==", correct: true },
          { text: "!=", correct: false },
          { text: "&&", correct: false }
        ]
      },
      
      {
        question: "How do you write a comment in C?", 
        answers: [
          { text: "# This is a comment", correct: false },  
          { text: "// This is a comment", correct: true },
          { text: "-- This is a comment", correct: false },
          { text: "/* This is a comment */", correct: true }
        ]
      },

      {
        question: "Which header file is required for printf() and scanf()?",
        answers: [
          { text: "#include <conio.h>", correct: false },
          { text: "#include <stdlib.h>", correct: false },
          { text: "#include <stdio.h>", correct: true },
          { text: "#include <math.h>", correct: false }
        ]
      },

      {
        question: "What is the keyword to define a constant in C?",   
        answers: [
          { text: "static", correct: false },
          { text: "const", correct: true },
          { text: "final", correct: false },
          { text: "#define", correct: true }
        ]
      },  
{
  question: "Which of the following is a loop structure in C?",   
  answers: [
    { text: " repeat", correct: false },
    { text: "loop", correct: false },
    { text: "for", correct: true},
    { text: "iteratee", correct: true }
  ]
},



{
  question: "What is the correct format specifier for float in printf()?",   
  answers: [
    { text: " %d", correct: false },
    { text: "%f", correct: false },
    { text: "%c", correct: true},
    { text: "%s", correct: true }
  ]
},


{
  question: "Which of the following is used to allocate memory dynamically in C?",    
  answers: [
    { text: "malloc()", correct: true },
    { text: "alloc()", correct: false },
    { text: "new", correct: false },
    { text: "realloc()", correct: false }
  ] 
  
},
{
  question: "Which of the following is a correct format specifier for float in C?", 
  answers: [
    { text: "%f", correct: true },
    { text: "%d", correct: false },
    { text: "%lf", correct: false },
    { text: "%c", correct: false }
  ]
},





      
      // Add 9 more C questions...
    ],
    cpp: [
      {
        question: "Which operator is used for dynamic memory allocation in C++?",
        answers: [
          { text: "alloc", correct: false },
          { text: "malloc", correct: false },
          { text: "new", correct: true },
          { text: "create", correct: false }
        ]
      },
      {
        question: "Which of the following is the correct way to declare a class in C++?",
        answers: [
          { text: "class MyClass {}", correct: true },
          { text: "MyClass class {}", correct: false },
          { text: "class = MyClass {}", correct: false },
          { text: "class MyClass [] {}", correct: false }
        ]
      },
{
        question: "Which concept allows the same function name to have different meanings in C++?", 
        answers: [
          { text: "Encapsulation", correct: false },
          { text: "Inheritance", correct: false },
          { text: "Polymorphism", correct: true },
          { text: "Abstraction", correct: false }
        ]
      },
{
        question: "What is the default access specifier for class members in C++?",
        answers: [
          { text: "public", correct: false },
          { text: "private", correct: true },
          { text: "protected", correct: false },
          { text: "global", correct: false }
        ]
},
{
        question: "Which of the following is used to dynamically allocate memory in C++?",  
        answers: [
          { text: "malloc()", correct: false },
          { text: "alloc()", correct: false },
          { text: "new", correct: true },
          { text: "calloc()", correct: false }
        ]
},
{
  question: "What is function overloading in C++?",
  answers: [
    { text: "Calling multiple functions at once", correct: false },
    { text: "Two functions with same name but different parameters", correct: true },
    { text: "Functions with different names", correct: false },
    { text: "Multiple functions in one class", correct: false }
  ]
},
{
question: "Which operator is used to access members of a structure using a pointer?",
answers: [
  { text: ".", correct: false },
  { text: "->", correct: true },
  { text: "*", correct: false },
  { text: "&", correct: false }
]
},
{
  question: "Which of the following is a correct constructor declaration in C++?",
  answers: [
    { text: "void constructor() {}", correct: false },
    { text: "int MyClass() {}", correct: false },
    { text: "MyClass() {}", correct: true },
    { text: "constructor() {}", correct: false }
  ]
},


{
  question: "What is the purpose of the 'virtual' keyword in C++?",
  answers: [
    { text: "To declare a virtual function", correct: true },
    { text: "To create a virtual class", correct: false },
    { text: "To allocate virtual memory", correct: false },
    { text: "To define a virtual constructor", correct: false }
  ]
},
  {
    question: "What is the purpose of a virtual function in C++?",
    answers: [
      { text: "To create a copy of a function", correct: false },
      { text: "To override base class function in derived class", correct: true },
      { text: "To call constructor automatically", correct: false },
      { text: "To define a constant function", correct: false }
    ]
  },


      // Add 9 more C++ questions...
    ],
    java: [
      {
        question: "How do you declare a constant variable in Java?",
        answers: [
          { text: "const int x = 5;", correct: false },
          { text: "final int x = 5;", correct: true },
          { text: "constant int x = 5;", correct: false },
          { text: "let x = 5;", correct: false }
        ]
      },
      {
        question: "Which of the following is NOT a Java access modifier?",
        answers: [
          { text: "public", correct: false },
          { text: "private", correct: false },
          { text: "protected", correct: false },
          { text: "internal", correct: true }
        ]
      },
{
  question: "What is the size of an int in Java?",
  answers: [
    { text: "2 bytes", correct: false },
    { text: "4 bytes", correct: true },
    { text: "8 bytes", correct: false },
    { text: "Depends on the system", correct: false }
  ]
},
{
  question: "Which keyword is used to create a subclass in Java?",
  answers: [
    { text: "extends", correct: true },
    { text: "implements", correct: false },
    { text: "inherits", correct: false },
    { text: "super", correct: false }
  ]
},
{
  question: "Which of the following is not a primitive data type in Java?",
  answers: [
    { text: "int", correct: false },
    { text: "float", correct: false },
    { text: "boolean", correct: false },
    { text: "String", correct: true }
  ]
},



{
  question: "Which method is the entry point of a Java program?", 
answers: [  
  { text: "start()", correct: false },
  { text: "run()", correct: false },
  { text: "main()", correct: true },
  { text: "init()", correct: false }
]
},

{
  question: "Which of the following is used to handle exceptions in Java?",
  answers: [
    { text: "try-catch", correct: true },
    { text: "throw-catch", correct: false },
    { text: "catch-throw", correct: false },
    { text: "exception-catch", correct: false }
  ]
},
{
  question: "What is the default value of a boolean variable in Java?",
  answers: [
    { text: "true", correct: false },
    { text: "false", correct: true },
    { text: "0", correct: false },
    { text: "1", correct: false },
  ]
},
{
  question: "Which of the following is used to create an interface in Java?", 
  answers: [
    { text: "interface MyInterface {}", correct: true },  
    { text: "MyInterface interface {}", correct: false },
    { text: "class MyInterface {}", correct: false },
    { text: "create MyInterface {}", correct: false }
  ]
},
{
  question: "Which of the following is a valid way to create an array in Java?",
  answers: [
    { text: "int arr[] = new int[5];", correct: true },
    { text: "int arr = new int[5];", correct: false },
    { text: "int arr[5];", correct: false },

    { text: "int arr[] = int[5];", correct: false },
  ]
},




      // Add 9 more Java questions...
    ],
    javascript: [
      {
        question: "Which keyword is used to declare variables in JavaScript?",
        answers: [
          { text: "var", correct: false },
          { text: "let", correct: false },
          { text: "const", correct: false },
          { text: "All of the above", correct: true }
        ]
      },

      {
        question: "Which of the following is a JavaScript data type?",
        answers: [
          { text: "String", correct: true },
          { text: "Integer", correct: false },
          { text: "Character", correct: false },
          { text: "Float", correct: false }
        ]
      },
      {
        question: "What is the correct way to write a comment in JavaScript?",
        answers: [
          { text: "// This is a comment", correct: true },
          { text: "# This is a comment", correct: false },
          { text: "<!-- This is a comment -->", correct: false },
          { text: "/* This is a comment */", correct: true }
        ]
      },
      {
        question: "Which of the following is used to define a function in JavaScript?",
        answers: [
          { text: "function myFunc()", correct: true },
          { text: "myFunc() function", correct: false },
          { text: "define myFunc()", correct: false },
          { text: "func myFunc()", correct: false }
        ]
      },
      {
        question: "Which operator is used to assign a value to a variable in JavaScript?",
        answers: [
          { text: "=", correct: true },
          { text: "==", correct: false },
          { text: "===", correct: false },
          { text: ":=", correct: false }
        ]
      },
      {
        question: "What is the output of 'console.log(typeof 42)' in JavaScript?",
        answers: [
          { text: "number", correct: true },
          { text: "string", correct: false },
          { text: "undefined", correct: false },
          { text: "object", correct: false }
        ]
      },
      {
        question: "Which of the following is a JavaScript framework?",
        answers: [
          { text: "Django", correct: false },
          { text: "Flask", correct: false },
          { text: "React", correct: true },
          { text: "Laravel", correct: false }
        ]
      },
      {
        question: "Which method is used to convert a JSON string into a JavaScript object?",
        answers: [
          { text: "JSON.parse()", correct: true },
          { text: "JSON.stringify()", correct: false },
          { text: "JSON.object()", correct: false },
          { text: "JSON.convert()", correct: false }
        ]
      },
      {
        question: "Which of the following is used to create an array in JavaScript?",
        answers: [
          { text: "var arr = [];", correct: true },
          { text: "var arr = new Array();", correct: true },
          { text: "var arr = array();", correct: false },
          { text: "var arr = {}; ", correct: false }
        ]
      },
      {
        question: "Which of the following is a JavaScript event?",
        answers: [
          { text: "onclick", correct: true },
          { text: "onmouseover", correct: true },
          { text: "onload", correct: true },
          { text: "All of the above", correct: true }
        ]
      },

      // Add 9 more JavaScript questions...
    ],
    html: [
      {
        question: "Which HTML tag is used to create a hyperlink?",
        answers: [
          { text: "<link>", correct: false },
          { text: "<a>", correct: true },
          { text: "<href>", correct: false },
          { text: "<url>", correct: false }
        ]
      },


      {
        question: "Which HTML element is used to define the title of a document?",
        answers: [
          { text: "<head>", correct: false },
          { text: "<title>", correct: true },
          { text: "<meta>", correct: false },
          { text: "<header>", correct: false }
        ]
      },
      {
        question: "Which HTML tag is used to create a list?",
        answers: [
          { text: "<list>", correct: false },
          { text: "<ul>", correct: true },
          { text: "<ol>", correct: false },
          { text: "<li>", correct: false }
        ]
      },
      {
        question: "Which attribute is used to specify the URL of a link in HTML?",
        answers: [
          { text: "src", correct: false },
          { text: "href", correct: true },
          { text: "link", correct: false },
          { text: "url", correct: false }
        ]
      },
      {
        question: "Which HTML tag is used to define an image?",
        answers: [
          { text: "<img>", correct: true },
          { text: "<image>", correct: false },
          { text: "<picture>", correct: false },
          { text: "<photo>", correct: false }
        ]
      },

      {
        question: "Which HTML tag is used to create a table?",
        answers: [
          { text: "<table>", correct: true },
          { text: "<tab>", correct: false },
          { text: "<tr>", correct: false },
          { text: "<td>", correct: false }
        ]
      },
      {
        question: "Which HTML element is used to define a paragraph?",
        answers: [
          { text: "<p>", correct: true },
          { text: "<para>", correct: false },
          { text: "<text>", correct: false },
          { text: "<section>", correct: false }
        ]
      },
      {
        question: "Which HTML tag is used to create a form?",
        answers: [
          { text: "<form>", correct: true },
          { text: "<input>", correct: false },
          { text: "<field>", correct: false },
          { text: "<submit>", correct: false }
        ]
      },
      {
        question: "Which HTML tag is used to create a checkbox?",
        answers: [
          { text: "<checkbox>", correct: false },
          { text: "<input type='checkbox'>", correct: true },
          { text: "<check>", correct: false },
          { text: "<input type='check'>", correct: false }
        ]
      },
      {
        question: "Which HTML tag is used to create a dropdown list?",
        answers: [
          { text: "<select>", correct: true },
          { text: "<dropdown>", correct: false },
          { text: "<list>", correct: false },
          { text: "<option>", correct: false }
        ]
      },
     
      // Add 9 more HTML questions...
    ],
    css: [
      {
        question: "Which CSS property is used to change the text color?",
        answers: [
          { text: "text-color", correct: false },
          { text: "font-color", correct: false },
          { text: "color", correct: true },
          { text: "text-style", correct: false }
        ]
      },

      {
        question: "Which CSS property is used to change the background color?",
        answers: [
          { text: "background-color", correct: true },
          { text: "bgcolor", correct: false },
          { text: "color", correct: false },
          { text: "background", correct: false }
        ]
      },
      {
        question: "Which CSS property is used to set the font size?",
        answers: [
          { text: "font-size", correct: true },
          { text: "text-size", correct: false },
          { text: "size", correct: false },
          { text: "text-font", correct: false }
        ]
      },
      {
        question: "Which CSS property is used to set the margin of an element?",
        answers: [
          { text: "padding", correct: false },
          { text: "margin", correct: true },
          { text: "space", correct: false },
          { text: "border", correct: false }
        ]
      },
      {
        question: "Which CSS property is used to set the border of an element?",
        answers: [
          { text: "border-style", correct: false },
          { text: "border-width", correct: false },
          { text: "border", correct: true },
          { text: "outline", correct: false }
        ]
      },
      {
        question: "Which CSS property is used to set the display type of an element?",
        answers: [
          { text: "display", correct: true },
          { text: "visibility", correct: false },
          { text: "position", correct: false },
          { text: "float", correct: false }
        ]
      },
      {
        question: "Which CSS property is used to set the font family?",
        answers: [
          { text: "font-family", correct: true },
          { text: "font-type", correct: false },
          { text: "text-family", correct: false },
          { text: "font-style", correct: false }
        ]
      },
      {
        question: "Which CSS property is used to set the width of an element?",
        answers: [
          { text: "width", correct: true },
          { text: "size", correct: false },
          { text: "length", correct: false },
          { text: "height", correct: false }
        ]
      },
      {
        question: "Which CSS property is used to set the height of an element?",  

        answers: [
          { text: "height", correct: true },
          { text: "size", correct: false },
          { text: "length", correct: false },
          { text: "width", correct: false }
        ]
      },
      {
        question: "Which CSS property is used to set the text alignment?",
        answers: [
          { text: "text-align", correct: true },
          { text: "align", correct: false },
          { text: "text-position", correct: false },
          { text: "alignment", correct: false }
        ]
      },
      // Add 9 more CSS questions...
    ],
    php: [
      {
        question: "Which symbol is used to prefix all PHP variables?",
        answers: [
          { text: "!", correct: false },
          { text: "&", correct: false },
          { text: "$", correct: true },
          { text: "#", correct: false }
        ]
      },
      {
        question: "Which function is used to include a file in PHP?",
        answers: [
          { text: "include()", correct: true },
          { text: "require()", correct: false },
          { text: "import()", correct: false },
          { text: "load()", correct: false }
        ]
      },
      {
        question: "Which of the following is a valid PHP comment?",
        answers: [
          { text: "// This is a comment", correct: true },
          { text: "# This is a comment", correct: true },
          { text: "/* This is a comment */", correct: true },
          { text: "<!-- This is a comment -->", correct: false }
        ]
      },
      {
        question: "Which function is used to get the length of a string in PHP?",
        answers: [
          { text: "strlen()", correct: true },
          { text: "str_length()", correct: false },
          { text: "length()", correct: false },
          { text: "size()", correct: false }
        ]
      },
      {
        question: "Which of the following is used to start a session in PHP?",
        answers: [
          { text: "session_start()", correct: true },
          { text: "start_session()", correct: false },
          { text: "begin_session()", correct: false },
          { text: "init_session()", correct: false }
        ]
      },
      {
        question: "Which function is used to connect to a MySQL database in PHP?",
        answers: [
          { text: "mysql_connect()", correct: true },
          { text: "mysqli_connect()", correct: true },
          { text: "db_connect()", correct: false },
          { text: "connect_db()", correct: false }
        ]
      },
      { 
        question: "Which of the following is used to declare a constant in PHP?",
        answers: [
          { text: "const", correct: false },
          { text: "define", correct: true },
          { text: "constant", correct: false },
          { text: "let", correct: false }
        ]
      },
      {
        question: "Which of the following is used to create an array in PHP?",
        answers: [
          { text: "array()", correct: true },
          { text: "[]", correct: true },
          { text: "new Array()", correct: false },
          { text: "list()", correct: false }
        ]
      },
      {
        question: "Which of the following is used to check if a variable is set in PHP?",
        answers: [
          { text: "isset()", correct: true },
          { text: "is_set()", correct: false },
          { text: "check_set()", correct: false },
          { text: "set()", correct: false }
        ]
      },
      {
        question: "Which of the following is used to include a file in PHP?",
        answers: [
          { text: "include()", correct: true },
          { text: "require()", correct: true },
          { text: "import()", correct: false },
          { text: "load()", correct: false }
        ]
      },
      
      // Add 9 more PHP questions...
    ]
  };
  
  // Main Application
  document.addEventListener('DOMContentLoaded', function() {
    // Registration Page
    if (document.getElementById('registration-form')) {
      const form = document.getElementById('registration-form');
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const user = {
          name: document.getElementById('name').value,
          college: document.getElementById('college').value,
          department: document.getElementById('department').value,
          dob: document.getElementById('dob').value,
          age: document.getElementById('age').value,
          language: document.querySelector('input[name="language"]:checked').value,
          date: new Date().toLocaleDateString()
        };
        
        localStorage.setItem('quizUser', JSON.stringify(user));
        window.location.href = 'index.html';
      });
      return;
    }
  
    // Certificate Page
    if (document.getElementById('cert-name')) {
      const user = JSON.parse(localStorage.getItem('quizUser'));
      const result = JSON.parse(localStorage.getItem('quizResult'));
      
      if (!user || !result) {
        window.location.href = 'register.html';
        return;
      }
      
      // Fill certificate data
      document.getElementById('cert-name').textContent = user.name;
      document.getElementById('cert-score').textContent = `${result.score}/100`;
      document.getElementById('cert-language').textContent = user.language.toUpperCase();
      document.getElementById('cert-college').textContent = user.college;
      document.getElementById('cert-dept').textContent = user.department;
      document.getElementById('cert-dob').textContent = user.dob;
      document.getElementById('cert-date').textContent = user.date;
      
      // Button events
      document.getElementById('print-btn').addEventListener('click', function() {
        window.print();
      });
      
      document.getElementById('retake-btn').addEventListener('click', function() {
        window.location.href = 'register.html';
      });
      
      return;
    }
  
    // Quiz Page
    const user = JSON.parse(localStorage.getItem('quizUser'));
    if (!user) {
      window.location.href = 'register.html';
      return;
    }
  
    // Quiz State
    const quiz = {
      questions: quizData[user.language] || [],
      currentQuestion: 0,
      score: 0,
      timeLeft: 300, // 5 minutes in seconds
      timerInterval: null,
      selectedAnswer: null,
      
      init: function() {
        if (this.questions.length === 0) {
          alert('No questions available for selected language');
          window.location.href = 'register.html';
          return;
        }
        
        this.setupEventListeners();
        this.startTimer();
        this.loadQuestion();
      },
      
      setupEventListeners: function() {
        document.getElementById('answer-options').addEventListener('click', (e) => {
          if (e.target.classList.contains('answer-option')) {
            this.selectAnswer(e.target);
          }
        });
        
        document.getElementById('prev-btn').addEventListener('click', () => this.prevQuestion());
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('submit-btn').addEventListener('click', () => this.submitQuiz());
      },
      
      startTimer: function() {
        this.updateTimerDisplay();
        this.timerInterval = setInterval(() => {
          this.timeLeft--;
          this.updateTimerDisplay();
          
          if (this.timeLeft <= 0) {
            this.timeUp();
          }
        }, 1000);
      },
      
      timeUp: function() {
        clearInterval(this.timerInterval);
        alert('Time is up! Quiz submitted automatically.');
        this.submitQuiz();
      },
      
      updateTimerDisplay: function() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        document.getElementById('timer').textContent = 
          `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
          
        // Change color when time is running out
        if (this.timeLeft < 60) {
          document.getElementById('timer').style.color = 'var(--danger)';
        }
      },
      
      loadQuestion: function() {
        const question = this.questions[this.currentQuestion];
        document.getElementById('question').textContent = question.question;
        document.getElementById('current-q').textContent = this.currentQuestion + 1;
        
        const answersContainer = document.getElementById('answer-options');
        answersContainer.innerHTML = '';
        
        // Shuffle answers
        const shuffledAnswers = [...question.answers].sort(() => Math.random() - 0.5);
        
        shuffledAnswers.forEach((answer, index) => {
          const answerEl = document.createElement('div');
          answerEl.className = 'answer-option';
          answerEl.textContent = answer.text;
          answerEl.dataset.correct = answer.correct;
          answersContainer.appendChild(answerEl);
        });
        
        this.updateProgress();
        this.updateNavigation();
        this.selectedAnswer = null;
      },
      
      selectAnswer: function(answerEl) {
        // Deselect all answers
        document.querySelectorAll('.answer-option').forEach(el => {
          el.classList.remove('selected');
        });
        
        // Select clicked answer
        answerEl.classList.add('selected');
        this.selectedAnswer = answerEl;
      },
      
      checkAnswer: function() {
        if (!this.selectedAnswer) return false;
        
        const isCorrect = this.selectedAnswer.dataset.correct === 'true';
        if (isCorrect) {
          this.score += 10;
          document.getElementById('score').textContent = this.score;
        }
        
        // Show correct answer if wrong
        if (!isCorrect) {
          document.querySelectorAll('.answer-option').forEach(el => {
            if (el.dataset.correct === 'true') {
              el.classList.add('correct-answer');
            }
          });
        }
        
        return isCorrect;
      },
      
      nextQuestion: function() {
        this.checkAnswer();
        
        if (this.currentQuestion < this.questions.length - 1) {
          this.currentQuestion++;
          this.loadQuestion();
        } else {
          this.submitQuiz();
        }
      },
      
      prevQuestion: function() {
        if (this.currentQuestion > 0) {
          this.currentQuestion--;
          this.loadQuestion();
        }
      },
      
      submitQuiz: function() {
        clearInterval(this.timerInterval);
        this.checkAnswer();
        
        // Save result
        const result = {
          score: this.score,
          total: this.questions.length * 10,
          passed: this.score >= 70, // 70% to pass
          language: user.language,
          date: new Date().toLocaleDateString()
        };
        
        localStorage.setItem('quizResult', JSON.stringify(result));
        window.location.href = 'certificate.html';
      },
      
      updateProgress: function() {
        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
      },
      
      updateNavigation: function() {
        document.getElementById('prev-btn').disabled = this.currentQuestion === 0;
        
        const isLastQuestion = this.currentQuestion === this.questions.length - 1;
        document.getElementById('next-btn').classList.toggle('hide', isLastQuestion);
        document.getElementById('submit-btn').classList.toggle('hide', !isLastQuestion);
      }
    };
    
    quiz.init();
  });