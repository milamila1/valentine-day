const noBtn = document.querySelector(".button-no");
const yesBtn = document.querySelector(".button-yes");
const modalNegative = document.querySelector(".negative-modal");

let mouseOverCount = 0;

const scrWidth = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) / 5;
const scrHeight = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) / 6;


function generateNumber(a, b) {
    let random;

    do {
        random = Math.floor(Math.random() * (a * 2 + 1)) - a;
    } while (random >= -b && random <= b);

    return random
}

function addHiddenClass() {
    setTimeout(function () {
        modalNegative.classList.add('is-hidden')
    }, 2000)
}

function showHiddenClass() {
    modalNegative.classList.remove("is-hidden");
    addHiddenClass();
}

function counterMouseOver() {
    mouseOverCount++;
    if (mouseOverCount === 8) {
        showHiddenClass();
        noBtn.style.display = "none";
        yesBtn.style.width = "250px";
    }
}

function runButton() {
    noBtn.style.bottom = generateNumber(scrHeight, 30) + "px";
    noBtn.style.right = generateNumber(scrWidth, 50) + "px";
}


noBtn.addEventListener('mouseover', () => {
    runButton();
    counterMouseOver();
})

noBtn.addEventListener('click', () => {
    runButton();
    counterMouseOver();
} )