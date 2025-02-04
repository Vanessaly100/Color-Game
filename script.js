
const colors = ["red", "blue", "green", "yellow", "purple", "orange","pink", "brown", "cyan", "lime", "magenta", "teal"];

let targetColor = "";
let score = 0;

const colorBox = document.getElementById("colorBox");
const colorOptionBtn = document.querySelectorAll(".color-Btn")
const Score = document.getElementById("Score")
const gameStatus = document.getElementById("gameStatus")
const newGameButton = document.getElementById("newGameButton")


// Function to ShuffleArray
function shuffleArray(array) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; 
    }
    return shuffled;
}

// Function to set up new round (but keep the score)
function newRound() {
    // Shuffle colors and select a new target color
    const shuffledColors = shuffleArray( colors).slice(0, 6);
    targetColor = shuffledColors[Math.floor(Math.random() * shuffledColors.length)];
    colorBox.style.backgroundColor = targetColor;
    // Assign shuffled colors to buttons
    colorOptionBtn.forEach((button, index) => {
        button.style.backgroundColor = shuffledColors[index];
        button.onclick = () => checkGuess(shuffledColors[index]);
    });
    // Reset only the game status message
    gameStatus.textContent = "";
    gameStatus.style.display = "none";
}

// Function to check user's guess
function checkGuess(selectedColor) {
    gameStatus.style.display = "block"
    if (selectedColor === targetColor) {
        gameStatus.textContent = "Correct you got it right! 🎉👏😍";
        gameStatus.classList.add("status-good");
        gameStatus.classList.remove("status-bad");

        score++;
    } else {
    gameStatus.textContent = "Wrong! Try again. 😢😭";
    gameStatus.classList.remove("status-good");
    gameStatus.classList.add("status-bad");
}
    // Update score
    Score.textContent = score;
    setTimeout(newRound, 1500)
}

newGameButton.addEventListener("click", () => {
    score = 0;  
    Score.textContent = score;
    newRound(); 
});

newRound()