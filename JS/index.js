const hONE = document.querySelector('[data-hand-one]');
const hTWO = document.querySelector('[data-hand-two]');
const hTHREE = document.querySelector('[data-hand-three]');
const hFOUR = document.querySelector('[data-hand-four]');
const hFIVE = document.querySelector('[data-hand-five]');

const onBtn = document.getElementById('start');
const offBtn = document.getElementById('off');

let runner;
let degreeOne = 0;
let degreeTwo = 72;
let degreeThree = 144;
let degreeFour = 216;
let degreeFive= 288;

function startLook () {
        degreeOne++;
        degreeTwo++;
        degreeThree++;
        degreeFour++;
        degreeFive++;
        hONE.style.transform = 'rotate(' + degreeOne + 'deg)';
        hTWO.style.transform = 'rotate(' + degreeTwo + 'deg)';
        hTHREE.style.transform = 'rotate(' + degreeThree + 'deg)';
        hFOUR.style.transform = 'rotate(' + degreeFour + 'deg)';
        hFIVE.style.transform = 'rotate(' + degreeFive + 'deg)';
}

startLook();

function onIt () {
    runner = setInterval(function(){
        degreeOne++;
        degreeTwo++;
        degreeThree++;
        degreeFour++;
        degreeFive++;
        hONE.style.transform = 'rotate(' + degreeOne + 'deg)';
        hTWO.style.transform = 'rotate(' + degreeTwo + 'deg)';
        hTHREE.style.transform = 'rotate(' + degreeThree + 'deg)';
        hFOUR.style.transform = 'rotate(' + degreeFour + 'deg)';
        hFIVE.style.transform = 'rotate(' + degreeFive + 'deg)';
    }, 25);
}

onBtn.addEventListener('click', onIt);

offBtn.addEventListener('click', () => {
    clearInterval(runner);
})
