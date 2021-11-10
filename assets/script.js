const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionBoxElement = document.getElementById('question-box')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('started')
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    questionBoxElement.classList.remove('hide');
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('answer-buttons')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove('hide')
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add ('correct')
    } else {
      element.classList.add ('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove ('wrong')
}

const questions = [
    {
        question: 'Kobe was drafted right out of high school in 1996 by what NBA team?',
        answers: [
            { text: 'Charlotte Hornets', correct: true },
            { text: 'Denver Nuggets', correct: false },
            { text: 'Los Angeles Lakers', correct: false },
            { text: 'Chicago Bulls', correct: false },
        ]
    },
    {
        question: 'How many NBA championships did Bryant win?',
        answers: [
            { text: 'Two', correct: false },
            { text: 'Five', correct: true },
            { text: 'Ten', correct: false },
            { text: 'Six', correct: false },  
        ]
    },
    {
        question: 'He played his entire 20-season professional career in the league with what team?',
        answers: [
            { text: 'Charlotte Hornets', correct: false },
            { text: 'Los Angeles Lakers', correct: true },
            { text: 'Houston Rockets', correct: false },
            { text: 'Clevland Cavaliers', correct: false },  
        ]
    }, 
    {
        question: 'Kobe became accustomed to his new lifestyle and learned to do what?',
        answers: [
            { text: 'Work to become a pro body builder.', correct: false },
            { text: 'Become a dog trainer.', correct: false },
            { text: 'Cook.', correct: false },
            { text: 'Speak fluent Italian.', correct: true },  
        ]
    }, 
    {
        question: 'What was Kobe Bryant\'s first NBA Jersey number?',
        answers: [
            { text: '24', correct: false },
            { text: '45', correct: false },
            { text: '8', correct: true },
            { text: '23', correct: false },  
        ]
    }, 
    
]     