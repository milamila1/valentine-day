const openBtn = document.querySelector(".open-button");
const closeBtn = document.querySelector(".close-button");
const modalWindow = document.querySelector(".positive-modal");

closeBtn.addEventListener('click', () => {
    modalWindow.classList.add("is-hidden")
});

openBtn.addEventListener('click', () => {
    modalWindow.classList.remove("is-hidden")
});



