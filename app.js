let randomNumber = Math.floor(Math.random() * 10) + 1;


let attempts = 0;
const maxAttempts = 3;

function submitGuess() {
    let guess = document.getElementById("guessNoInput").value;
    let message = document.getElementById("message");

    attempts++;

    if (guess == randomNumber) {
        message.innerHTML = `<h3 class="text-success">CONGRATULATIONS YOU GOT IT RIGHT</h3>`;
        disableInput();
    } else {
        if (attempts < maxAttempts) {
            message.innerHTML = `<h3 class="text-danger">SORRY YOU GOT IT WRONG. TRY AGAIN (${attempts}/${maxAttempts})</h3>`;
        } else {
            message.innerHTML = `<h3 class="text-danger">SORRY YOU GOT IT WRONG. NO MORE ATTEMPTS LEFT. THE NUMBER WAS ${randomNumber}</h3>`;
            disableInput();
        }
    }
}

function disableInput() {
    document.getElementById("guessNoInput").disabled = true;
    document.querySelector("button").disabled = true;
    document.getElementById("message").innerHTML += '<div class="text-center"> <button class="btn btn-secondary mt-3" onclick="window.location.reload()">Play Again</button></div>';
}
