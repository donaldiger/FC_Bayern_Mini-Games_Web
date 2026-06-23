window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
      loader.classList.add('fade-out');
    }, 1000);
  });
  
const questions = [
    {
        question: "Who is Bayern Munich's all-time top scorer?",
        answers: ["Robert Lewandowski", "Gerd Müller", "Thomas Müller", "Karl-Heinz Rummenigge"],
        correctAnswerIndex: 1 
    },
    {
        question: "How many Champions League titles has Bayern Munich won?",
        answers: ["3", "5", "6", "7"],
        correctAnswerIndex: 2 
    },
    {
        question: "What is Bayern Munich's nickname?",
        answers: ["Die Roten ", "Die Mannschaft", "Der FCB", "Die Adler"],
        correctAnswerIndex: 0
    },
    {
        question: "When was FC Bayern Munich founded?",
        answers: ["1899", "1900", "1912", "1921"],
        correctAnswerIndex: 1 // Index of the correct answer (Die Roten)
    },
    {
        question: "What is the name of Bayern Munich’s home stadium?",
        answers: ["Signal Iduna Park", "Allianz Arena", "Olympiastadion", "Mercedes-Benz Arena"],
        correctAnswerIndex: 1 // Index of the correct answer (Die Roten)
    },
    {
        question: "What are Bayern Munich’s team colors?",
        answers: ["Red and white", "Blue and gold", "Red and Gold", "White and Gold"],
        correctAnswerIndex: 0 // Index of the correct answer (Die Roten)
    },
    {
        question: "Which rival club plays in the “Der Klassiker” against Bayern Munich?",
        answers: ["Schalke 04", "RB Leipzig", "Borussia Dortmund", "Bayer Leverkusen"],
        correctAnswerIndex: 2 // Index of the correct answer (Die Roten)
    },
    {
        question: "Who was Bayern Munich’s manager during their 2019–20 treble-winning season?",
        answers: ["Pep Guardiola", "Jupp Heynckes", "Hansi Flick", "Julian Nagelsmann"],
        correctAnswerIndex: 2 // Index of the correct answer (Die Roten)
    },
    {
        question: "Which former Bayern player won the Ballon d'Or in 1970?",
        answers: ["Franz Beckenbauer", "Gerd Müller", "Lothar Matthäus", "Sepp Maier"],
        correctAnswerIndex: 1 // Index of the correct answer (Die Roten)
    },
    {
        question: "Which of the following players did NOT play for Bayern Munich?",
        answers: ["Arjen Robben", "Miroslav Klose", "Luka Modrić", "Philipp Lahm"],
        correctAnswerIndex: 2 // Index of the correct answer (Die Roten)
    },
    {
        question: "In which year did Bayern Munich first win the UEFA Champions League (then European Cup)?",
        answers: ["1970", "1972", "1974", "1976"],
        correctAnswerIndex: 2 // Index of the correct answer (Die Roten)
    },
    {
        question: "Who was Bayern Munich’s captain before Manuel Neuer took the role?",
        answers: ["Bastian Schweinsteiger", "Thomas Müller", "Philipp Lahm", "Oliver Kahn"],
        correctAnswerIndex: 2 // Index of the correct answer (Die Roten)
    },
    {
        question: "What is the name of Bayern Munich's women's team?",
        answers: ["FC Bayern Ladies", "Bayern München Damen", "Bayern Munich W.F.C.", "FC Bayern Frauen"],
        correctAnswerIndex: 3 // Index of the correct answer (Die Roten)
    },
    {
        question: "Which team did Bayern defeat in the 2013 UEFA Champions League Final?",
        answers: ["Real Madrid", "Manchester United", "Chelsea", "Borussia Dortmund"],
        correctAnswerIndex: 3 // Index of the correct answer (Die Roten)
    },
    {
        question: "What is the name of Bayern Munich’s youth academy?",
        answers: ["Säbener Campus", "Allianz Academy", "Bayern Future School", "FC Bayern Campus"],
        correctAnswerIndex: 3 // Index of the correct answer (Die Roten)
    },
    {
        question: "Which country is former Bayern star Arjen Robben from?",
        answers: ["Germany", "Netherlands", "Belgium", "Denmark"],
        correctAnswerIndex: 1 // Index of the correct answer (Die Roten)
    },
    {
        question: "Who is known as Der Titan and played goalkeeper for Bayern from 1994 to 2008?",
        answers: ["Jens Lehmann", "Sepp Maier", "Oliver Kahn", "Manuel Neuer"],
        correctAnswerIndex: 2 // Index of the correct answer (Die Roten)
    },
    {
        question: "Which sponsor is prominently featured on Bayern Munich’s jersey (as of 2024/2025)?",
        answers: ["Audi", "Deutsche Bank", "Qatar Airways", "Telekom (T-Mobile)"],
        correctAnswerIndex: 3 // Index of the correct answer (Die Roten)
    },
    {
        question: "Which Bayern Munich legend was nicknamed 'Der Kaiser'?",
        answers: ["Gerd Müller", "Franz Beckenbauer", "Lothar Matthäus", "Sepp Maier"],
        correctAnswerIndex: 1 // Franz Beckenbauer
    },
    {
        question: "Which brand manufactures Bayern Munich’s kits (as of 2024/2025)?",
        answers: ["Nike", "Adidas", "Puma", "Under Armour"],
        correctAnswerIndex: 1 // Adidas
    },
    {
        question: "Which of these clubs is NOT based in Bavaria, like Bayern Munich?",
        answers: ["1. FC Nürnberg", "Augsburg", "TSV 1860 München", "Eintracht Frankfurt"],
        correctAnswerIndex: 3 // Eintracht Frankfurt
    },
    {
        question: "Which number did Arjen Robben wear during his Bayern career?",
        answers: ["7", "10", "11", "9"],
        correctAnswerIndex: 1 // 10
    },
    {
        question: "Which famous German goalkeeper came through Bayern’s youth system?",
        answers: ["Jens Lehmann", "Timo Horn", "Manuel Neuer", "Thomas Kraft"],
        correctAnswerIndex: 3 // Thomas Kraft (Neuer joined from Schalke)
    },
    {
        question: "Which club did Robert Lewandowski play for before joining Bayern?",
        answers: ["RB Leipzig", "Borussia Dortmund", "Werder Bremen", "Hamburger SV"],
        correctAnswerIndex: 1 // Borussia Dortmund
    },
    {
        question: "How many Bundesliga titles had Bayern won by the end of the 2023–24 season?",
        answers: ["28", "30", "33", "32"],
        correctAnswerIndex: 2 // 33
    },
    {
        question: "Which team famously beat Bayern in the 2012 Champions League Final on penalties?",
        answers: ["Barcelona", "Manchester United", "Chelsea", "Inter Milan"],
        correctAnswerIndex: 2 // Chelsea
    },
    {
        question: "Which country is Kingsley Coman from?",
        answers: ["France", "Belgium", "Ivory Coast", "Switzerland"],
        correctAnswerIndex: 0 // France
    },
    {
        question: "Which club did Bayern face in the 2020 UEFA Super Cup?",
        answers: ["Chelsea", "Sevilla", "Villarreal", "Paris Saint-Germain"],
        correctAnswerIndex: 1 // Sevilla
    },
    {
        question: "Who scored the winning goal for Bayern in the 2020 Champions League Final?",
        answers: ["Serge Gnabry", "Robert Lewandowski", "Joshua Kimmich", "Kingsley Coman"],
        correctAnswerIndex: 3 // Kingsley Coman
    },
    {
        question: "How many goals did Gerd Müller score in the Bundesliga during his career?",
        answers: ["365", "287", "312", "401"],
        correctAnswerIndex: 0 // 365
    },
    {
        question: "Which of these clubs did NOT eliminate Bayern from a Champions League knockout round?",
        answers: ["Real Madrid", "Liverpool", "PSG", "Benfica"],
        correctAnswerIndex: 3 // Benfica
    },
    {
        question: "Which stadium did Bayern use before moving to the Allianz Arena?",
        answers: ["Olympiastadion München", "Signal Iduna Park", "Mercedes-Benz Arena", "Volksparkstadion"],
        correctAnswerIndex: 0 // Olympiastadion München
    },
    {
        question: "Who was Bayern Munich’s manager immediately before Julian Nagelsmann?",
        answers: ["Carlo Ancelotti", "Hansi Flick", "Niko Kovač", "Pep Guardiola"],
        correctAnswerIndex: 1 // Hansi Flick
    },
    {
        question: "Which team did Bayern beat 8–2 in the 2020 Champions League quarter-final?",
        answers: ["Real Madrid", "Manchester City", "Barcelona", "Liverpool"],
        correctAnswerIndex: 2 // Barcelona
    },
    {
        question: "Who did Bayern sign Jamal Musiala from?",
        answers: ["Chelsea", "Arsenal", "RB Leipzig", "Stuttgart"],
        correctAnswerIndex: 0 // Chelsea
    },
    {
        question: "Which club legend famously scored 5 goals in 9 minutes for Bayern in 2015?",
        answers: ["Gerd Müller", "Robert Lewandowski", "Thomas Müller", "Mario Gómez"],
        correctAnswerIndex: 1 // Robert Lewandowski
    },
    {
        question: "What is the name of Bayern Munich’s training ground?",
        answers: ["Olympic Park", "Säbener Straße", "Bayern Arena", "München Campus"],
        correctAnswerIndex: 1 // Säbener Straße
    },
    {
        question: "Which of the following players is a Bayern youth academy graduate?",
        answers: ["Serge Gnabry", "Philipp Lahm", "Kingsley Coman", "Alphonso Davies"],
        correctAnswerIndex: 1 // Philipp Lahm
    },
    {
        question: "What is Bayern Munich's motto?",
        answers: ["Mia san mia", "Bayern über alles", "Stern des Südens", "Ein Verein, eine Familie"],
        correctAnswerIndex: 0 // Mia san mia
    },
    {
        question: "Who succeeded Jupp Heynckes as Bayern manager in 2013?",
        answers: ["Louis van Gaal", "Pep Guardiola", "Niko Kovač", "Carlo Ancelotti"],
        correctAnswerIndex: 1 // Pep Guardiola
    },
    {
        question: "Which Bayern player was named UEFA Men’s Player of the Year in 2020?",
        answers: ["Manuel Neuer", "Joshua Kimmich", "Robert Lewandowski", "Thomas Müller"],
        correctAnswerIndex: 2 // Robert Lewandowski
    },
    {
        question: "What year did Bayern Munich win their first Bundesliga title?",
        answers: ["1963", "1969", "1972", "1955"],
        correctAnswerIndex: 1 // 1969
    },
    {
        question: "In what year did Bayern Munich last play in the 2. Bundesliga?",
        answers: ["1955", "1965", "1963", "1974"],
        correctAnswerIndex: 1 // 1965
    },
    {
        question: "Which club did Bayern Munich sign Serge Gnabry from?",
        answers: ["Werder Bremen", "Arsenal", "Stuttgart", "Hoffenheim"],
        correctAnswerIndex: 0 // Werder Bremen
    },
    {
        question: "Who was the youngest Bayern player to appear in a Bundesliga match (as of 2024)?",
        answers: ["Alphonso Davies", "Paul Wanner", "Jamal Musiala", "David Alaba"],
        correctAnswerIndex: 1 // Paul Wanner
    },
    {
        question: "What is the seating capacity of the Allianz Arena (as of 2024)?",
        answers: ["65,000", "70,000", "75,000", "80,000"],
        correctAnswerIndex: 2 // 75,000
    },
    {
        question: "Which of these clubs has Arjen Robben NOT played for?",
        answers: ["Chelsea", "Real Madrid", "PSV Eindhoven", "Ajax"],
        correctAnswerIndex: 3 // Ajax
    },
    {
        question: "Who was Bayern’s longest-serving manager in the 21st century (by tenure)?",
        answers: ["Julian Nagelsmann", "Jupp Heynckes", "Ottmar Hitzfeld", "Pep Guardiola"],
        correctAnswerIndex: 2 // Ottmar Hitzfeld
    },
    {
        question: "Who wore the number 10 shirt for Bayern before Leroy Sané?",
        answers: ["Arjen Robben", "Franck Ribéry", "Philippe Coutinho", "Douglas Costa"],
        correctAnswerIndex: 2 // Philippe Coutinho
    },
    {
        question: "Which Bayern Munich legend was nicknamed 'Der Bomber'?",
        answers: ["Lothar Matthäus", "Karl-Heinz Rummenigge", "Gerd Müller", "Franz Roth"],
        correctAnswerIndex: 2 // Gerd Müller
    },
  
  ];

const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const nextQuestionBtn = document.getElementById("next-question-btn");
const restartBtn = document.getElementById("restart-btn");
const scoreDisplay = document.getElementById("score-display");
const maxQuestions = 20;

// Game state variables
let currentQuestionIndex = -1;
let score = 0;
let answeredQuestions = 0;
let usedQuestionIndices = [];

// Function to get a random unused question index
function getRandomUnusedQuestionIndex() {
    if (usedQuestionIndices.length === questions.length) {
        return -1; // All questions have been used
    }
    
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestionIndices.includes(randomIndex));
    
    return randomIndex;
}

// Function to load a random question
function loadRandomQuestion() {
    // Check if we've reached the max questions
    if (answeredQuestions >= maxQuestions) {
        endQuiz();
        return;
    }
    
    // Get a random unused question
    currentQuestionIndex = getRandomUnusedQuestionIndex();
    if (currentQuestionIndex === -1) {
        endQuiz();
        return;
    }
    
    usedQuestionIndices.push(currentQuestionIndex);
    answeredQuestions++;
    
    // Get the selected question
    const currentQuestion = questions[currentQuestionIndex];
    
    // Display the question text
    questionText.textContent = currentQuestion.question;
    
    // Clear previous answers and add new ones
    answersContainer.innerHTML = "";
    
    currentQuestion.answers.forEach((answer, index) => {
        const answerBtn = document.createElement("button");
        answerBtn.className = "answer-btn";
        answerBtn.textContent = answer;
        
        // Add click event listener to check if the answer is correct
        answerBtn.addEventListener("click", () => checkAnswer(index));
        
        answersContainer.appendChild(answerBtn);
    });
    
    // Hide the next button until an answer is selected
    nextQuestionBtn.style.display = "none";
}

// Function to end the quiz
function endQuiz() {
    questionText.textContent = `Quiz Completed! Your score: ${score}/${maxQuestions}`;
    answersContainer.innerHTML = "";
    nextQuestionBtn.style.display = "none";
    restartBtn.style.display = "block";
}

// Function to check if the selected answer is correct
function checkAnswer(selectedAnswerIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll(".answer-btn");
    
    answerButtons.forEach((btn, index) => {
        if (index === currentQuestion.correctAnswerIndex) {
            btn.style.backgroundColor = "green";
            btn.style.color = "white";
        } else if (index === selectedAnswerIndex) {
            btn.style.backgroundColor = "red";
            btn.style.color = "white";
        }
    });
    
    if (selectedAnswerIndex === currentQuestion.correctAnswerIndex) {
        score++;
        scoreDisplay.textContent = score;
    }
    
    // Disable all answer buttons after selection
    disableAnswers();
    
    // Show the next question button
    nextQuestionBtn.style.display = "block";
}

// Function to disable all answer buttons
function disableAnswers() {
    const answerButtons = document.querySelectorAll(".answer-btn");
    answerButtons.forEach(button => {
        button.disabled = true;
        button.style.opacity = 0.6;
        button.style.cursor = "not-allowed";
    });
}

// Event listeners
nextQuestionBtn.addEventListener("click", loadRandomQuestion);

restartBtn.addEventListener("click", () => {
    score = 0;
    answeredQuestions = 0;
    usedQuestionIndices = [];
    scoreDisplay.textContent = score;
    restartBtn.style.display = "none";
    loadRandomQuestion();
});

// Initialize the quiz
loadRandomQuestion();

// Header scroll behavior
let lastScroll = window.scrollY;

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.scrollY;
    const bottom = document.documentElement.scrollHeight - window.innerHeight;
    
    if (currentScroll < lastScroll && currentScroll > 60 && currentScroll < bottom - 10) {
        header.classList.remove('hide');
    } else if (currentScroll > lastScroll && currentScroll > 60) {
        header.classList.add('hide');
    }

    lastScroll = currentScroll;
});