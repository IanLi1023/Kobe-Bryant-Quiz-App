const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-box')


startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
}

function setNextQuestion() {

}

function selectAnswer() {

}

// Kobe was drafted right out of high school in 1996 by what NBA team?
// Answer: Charlotte Hornets

// How many times was he an All-Star?
// A: 18 times.

// How many NBA championships did Bryant win?
// A: Five.

// He played his entire 20-season professional career in the league with what team?
// A: The Los Angeles Lakers.

// Kobe became accustomed to his new lifestyle and learned to do what?
// A: Speak fluent Italian.

// What was Kobe Bryant's first NBA Jersey number? 
// A: 8

// What was the most points Kobe ever scored in a game? 
// A: 81