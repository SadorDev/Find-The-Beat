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
