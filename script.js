function startQuiz() {
    let answer = prompt("What is our anniversary date? (Format: MM/DD/YYYY)");
    if (answer === "11/30/2023") { // Change this to your real anniversary date
        document.getElementById("quiz-result").innerHTML = "Awwwwwwww yourrr my Wifeyyyyy ❤";
    } else {
        document.getElementById("quiz-result").innerHTML = "Oops! Try again. 😊";
    }
}

function revealSurprise() {
    document.getElementById("gift-message").style.display = "block";
}