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

function selctAnswer() {

}