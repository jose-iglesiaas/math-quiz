let score;
let hScore = document.getElementById("score");
let correctAnswers = ["24-1", "16-2", "2-3", "49-4", "15-5"];

const formQuiz = document.getElementById('form-quiz');
let submitButton = document.getElementById('submit-button');
let restartButton = document.getElementById('restart-button')

formQuiz.addEventListener('submit', function(e){
    score = 0;
    e.preventDefault();
    for (let i = 0; i < correctAnswers.length; i++) {
        if(document.getElementById(correctAnswers[i]).checked){
            score++;
        }
    }
    submitButton.hidden = true;
    restartButton.hidden = false;
    hScore.hidden = false
    hScore.textContent = "Score: " + score;
    switch (score) {
        case 0:
            restartButton.textContent = "TRY AGAIN!";
            break;
        case 1:
        case 2:
            restartButton.textContent = "DON'T GIVE UP!"
            break;
        case 3:
            restartButton.textContent = "YOU CAN DO BETTER!"
            break;
        case 4:
            restartButton.textContent = "ALMOST PERFECT!"
            break;
        case 5:
            restartButton.textContent = "PERFECT!"
            break;
        default:
            restartButton.textContent = "WTF?"
            break;
    }
});
restartButton.addEventListener('click', function(){
    location.reload();
})
