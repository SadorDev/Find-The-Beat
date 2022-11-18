// Modal window ---how to use---
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

const startBtn = document.querySelector('#start-btn');
const levelBtn = document.querySelector('#level');
const resetBtn = document.querySelector('#reset');
const score = document.querySelector('#score');
const timer = document.querySelector('#timer');
const lives = document.querySelector('#lives');

// console.log(startBtn,levelBtn,resetBtn,score,timer,lives);
score.textContent = "Score = 0"
timer.textContent = "Time = 00:00:00"
lives.textContent = "Lives = 5"
