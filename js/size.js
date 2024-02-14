const container = document.querySelector(".container");

const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
container.style.height = (screenHeight - 100) + "px";
