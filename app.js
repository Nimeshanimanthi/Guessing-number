const correctNumber = 4;
let attempts = 3;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("guess").value);
    const result = document.getElementById("result");

    if (attempts > 1) {
        if (userGuess === correctNumber) {
            result.innerHTML = `<div class="alert alert-success">Correct! YOU WIN &#x1F60A; &#x1F389; </div>`;
            disableGame();
        } else {
            attempts--;
            if (userGuess < correctNumber) {
                result.innerHTML = `<div class="alert alert-success "  >Too low! ${attempts} chances left.</div>`;
            } else {
                result.innerHTML = `<div class="alert alert-success">Too high! ${attempts} chances left.</div>`;
            }
        }
    } else {
        result.innerHTML = `<div class="alert alert-danger"> The correct number was ${correctNumber}.</div>`;
        disableGame();
    }
}

function disableGame() {
    document.getElementById("guess").disabled = true;
}

function resetGame() {
    attempts = 3;
    document.getElementById("guess").disabled = false;
    document.getElementById("guess").value = '';
    document.getElementById("result").innerHTML = '';
}
