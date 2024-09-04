// let question = prompt('who is the player of the match in this')

// if(question=='baeed'){
//     alert('you are correct')
//     }
//     else{
//         alert('you are wrong')
        
// }


// var wrong = document.getElementsByClassName('wrong')
// var right = document.getElementsByClassName('right')

// var wrongValue = wrong.Value
// var rightValue = right.Value
//  console.log(wrongValue)
//  console.log(rightValue)


const questions = [
    // {
    //     question: "What is the capital of France?",
    //     options: ["Paris", "London", "Rome", "Berlin"],
    //     answer: "Paris"
    // },
    // {
    //     question: "Which planet is known as the Red Planet?",
    //     options: ["Earth", "Mars", "Jupiter", "Saturn"],
    //     answer: "Mars"
    // },
    // {
    //     question: "What is the largest ocean on Earth?",
    //     options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    //     answer: "Pacific Ocean"
    // },
    // {
    //     question: "Which country is known as the Land of the Rising Sun?",
    //     options: ["China", "Japan", "India", "South Korea"],
    //     answer: "Japan"
    //     },
    //     {
    //         question: "What is the largest mammal on Earth?",
    //         options: ["Blue whale", "Fin whale", "Humpback whale", "Sperm"],
    //             answer:["whale"],
    //             },
                {
                    question: "who won the last t20 world cup",
                    options: ["India", "Pakistan", "Australia", "England"],
                    answer: "India",
                    },
                    {
                        question: "who won last odi world cup ",
                        options: [,"Pakistan","India","England", "Australia"],
                        answer: "Australia"
                    },
                    {
                        question: "who won last world test championship ",
                        options: ["India", "south africa", "Australia", "new zealand"],
                        answer: "Australia",
                    },
                    {
                        question: "kya babar azam ghante ka king hai",
                        options: ["ha", "na"],
                        answer: "ha",
                    },
                    {
                        question: "kya shan masood charsi hai",
                        options: ["ha", "na"],
                        answer: "ha",
                    },
                    {
                        question: "pakistan last t20 worldcup kab jita tha",
                        options: ["2010", "2012", "2016", "2009"],
                        answer: "2009",
                    }
                    
                ];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    
    // Clear previous options
    optionsContainer.innerHTML = '';

    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const question = questions[currentQuestionIndex];
    questionContainer.textContent = question.question;

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'option';
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    const resultContainer = document.getElementById('result');

    resultContainer.textContent = `You scored ${score} out of ${questions.length}`;
    document.getElementById('next-button').style.display = 'none';
}

document.getElementById('next-button').addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});

// Load the first question
loadQuestion();