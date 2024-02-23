let you;
let yourScore = 0;
let opponent;
let opponentScore = 0;

let choices = ["🪨", "🌿", "✂️"]


window.onload = function() {
  for (let i = 0; i < 3; i++) {
    let choice = document.createElement("div");
    // choice.id = choices[i];
    choice.innerText = choices[i];
    // choice.src = choices[i];
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);
  }
}

function selectChoice() {
  you = this.innerText;
  document.getElementById("your-choice").innerText = you;

  opponent = choices[Math.floor(Math.random() * 3)];
  document.getElementById("opponent-choice").innerText = opponent;

  if ( you == opponent ) {
    yourScore += 1;
    opponentScore += 1;
  } else {
    if ( you == "🪨" ) {
      if ( opponent = "✂️" ) {
        yourScore += 1;
      } else if ( opponent = "🌿") {
        opponentScore += 1;
      }
    }
    else if ( you == "🌿" ) {
      if ( opponent = "✂️" ) {
        opponentScore += 1;
      } else if ( opponent = "🪨") {
        yourScore += 1;
      }
    }
    else if ( you == "✂️" ) {
      if ( opponent = "🪨" ) {
        opponentScore += 1;
      } else if ( opponent = "🌿") {
        yourScore += 1;
      }
    }
  }

  document.getElementById("your-score").innerText = "You: " + yourScore;
  document.getElementById("opponent-score").innerText = "Them: " + opponentScore;
}
