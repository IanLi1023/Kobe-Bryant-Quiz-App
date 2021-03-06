const submitHighScoreButton = document.getElementById('submit-btn')
const restartQuizButton = document.getElementById('restart-btn')
const myStorage = window.localStorage;
const score = localStorage.getItem('score');
const time = localStorage.getItem('time');
const highScoresTable = document.getElementById('high-scores-table');
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
    highScores.sort(compareScores)
    createHighScoreTable()
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
    highScores.sort(compareScores)

    if (myStorage.getItem('isSet') == null)
    {myStorage.setItem('isSet', JSON.stringify(false)) }
    } 
    createHighScoreTable()
}

function createHighScoreTable() {
    highScoresTable.innerHTML = ''
highScores.forEach(highscore => {
    let row = document.createElement('div')
row.innerHTML = highscore.initials + ': ' + highscore.score + ': ' + highscore.time 
highScoresTable.appendChild(row) 
});

}

function restartQuiz() {
    document.location.replace("index.html")
}

function compareScores(a,b) {
    if (a.score > b.score) {
        return a.score - b.score
    } else if (a.score < b.score) {
        return b.score - a.score   
    } else if (a.time < b.time) {
        return a.time - b.time
    } else if (a.time > b.time) {
        return b.time - a.time
    } else {
        return 0
    }    
}

    