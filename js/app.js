// Modal window --- Instructions---
const modalOpen = document.querySelector(".modal-open");
const modalClose = document.querySelector(".modal-close");
const modal = document.querySelector(".modal-wrapper");

modalOpen.addEventListener("click", () => {
  modal.classList.add("show");
});
modalClose.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Update and display current year in footer
document
  .querySelector(".date")
  .appendChild(document.createTextNode(new Date().getFullYear()));

// !!!!!!!Game code below!!!!!!!!!!

const menu = document.querySelector("#menu");
const countdown = document.querySelector("#countdown-container");
const game = document.querySelector("#game");
const startGameBtn = document.querySelector("#start-game-btn");
// const startBtn = document.querySelector('#start-btn');
const levelBtn = document.querySelector("#level");
const resetBtn = document.querySelector("#reset");
const score = document.querySelector("#score");
const timer = document.querySelector("#timer");
const lives = document.querySelector("#lives");
const countdownTimer = document.querySelector("#countdown");

// console.log(startBtn,levelBtn,resetBtn,score,timer,lives);
score.textContent = "Score = 0";
timer.textContent = "Time = 00:00:00";
lives.textContent = "Lives = 5";

let count = 3;
let gameArray = [];
let userArray = [];

function createGameArray() {
	for (i = 0; i < 7; i++){
		let soundNum = Math.trunc(Math.random()*12) + 1
		gameArray.push(soundNum);
	};
};

function endCountdown() {
  countdown.style.display = "none";
  game.style.display = "block";
}

function handleCountdownTimer() {
  if (count === 0) {
    clearInterval(timer);
    endCountdown();
  } else {
    countdownTimer.innerText = count;
    count--;
  }
}

startGameBtn.addEventListener('click', function () {
    menu.style.display = 'none';
    countdown.style.display = 'block';
	game.style.display = 'none';
	let timer = setInterval(function() { handleCountdownTimer(count); }, 1000);
});
