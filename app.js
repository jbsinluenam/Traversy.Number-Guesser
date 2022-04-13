//Game values

let min = 1,
  max = 10,
  winningNum = Math.floor(Math.random() * 10) + 1,
  guessesLeft = 3;

// UI elements
const game = document.querySelector(".game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play again event listener
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Listen for guess

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}.`, "red");
  } else if (guess === winningNum) {
    gameOver(true, `${winningNum} is correst! YOU WIN!`);
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      gameOver(false, `YOU LOSE. The correct number is ${winningNum}`);
    } else {
      guessInput.value = "";
      setMessage(
        `Your guess is wrong. You have ${guessesLeft} guess left.`,
        "red"
      );
    }
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  guessInput.disabled = true;
  setMessage(msg, color);
  guessBtn.value = "Play again.";
  guessBtn.className += "play-again";
}

// Set message
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
  guessInput.style.borderColor = color;
}
