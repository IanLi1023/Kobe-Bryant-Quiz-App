const submitHighScoreButton = document.getElementById('submit-btn')
const restartQuizButton = document.getElementById('restart-btn')
const myStorage = window.localStorage;
const score = localStorage.getItem('score');
const time = localStorage.getItem('time');
const highScoresTable = document.getElementById('high-score-table');
let highScores = new Array();

submitHighScoreButton.addEventListener('click', submitScore)
restartQuizButton.addEventListener('click', restartQuiz)

replacePlaceHolders()
setupHighScores()

class HighScore {
    constructor (initials, score, time) {
        this.initials = initials
        this.score = score
        this.time = time
    }
}

function submitScore() {
    if (JSON.parse(myStorage.getItem('isSet')) == true) {
        alert("Score Already Submitted!")
        console.log (highScores.getItem(0))
        return;
    }
    let initials = document.getElementById('Name').value
    if (initials.replace(/^\s+|\s+$/gm,'').length == 0) {
        alert("Initials Required!!")
        return;
    }
    let highscore = new HighScore (initials, score, time)
    highScores.push(highscore)
    myStorage.setItem('isSet', JSON.stringify(true))
    myStorage.setItem('HighScores', JSON.stringify(highScores))
    console.log (highScores)
}

function replacePlaceHolders() {
    document.getElementById ('score-place-holder').innerHTML = score
    document.getElementById ('time-place-holder').innerHTML = time
}

function setupHighScores() {
    if (myStorage.getItem('HighScores') == null) {
        myStorage.setItem('HighScores', JSON.stringify(new Array()))
    } {
        let str = myStorage.getItem('HighScores')
    highScores = JSON.parse(str)

    if (myStorage.getItem('isSet') == null)
    {myStorage.setItem('isSet', JSON.stringify(false)) }
    } 
}

function createHighScoreTable() {
let row = document.createElement('div')
row.innerHTML = score
highScoresTable.appendChild(row)
}

function restartQuiz() {
    document.location.replace("index.html")
}
