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



onBtn.addEventListener('click', () => {
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
});

// offBtn.addEventListener('click', () => {
//     clearInterval(runner);
// })

offBtn.addEventListener('click', () => {
    const runTime = setInterval(function(){
        degreeOne++
        degreeTwo++
        degreeThree++
        degreeFour++
        degreeFive++
        hONE.style.transform = 'rotate(' + degreeOne + 'deg)'
        hTWO.style.transform = 'rotate(' + degreeTwo + 'deg)'
        hTHREE.style.transform = 'rotate(' + degreeThree + 'deg)'
        hFOUR.style.transform = 'rotate(' + degreeFour + 'deg)'
        hFIVE.style.transform = 'rotate(' + degreeFive + 'deg)'}, 10);

    const lowTime = setInterval(function(){
        degreeOne++
        degreeTwo++
        degreeThree++
        degreeFour++
        degreeFive++
        hONE.style.transform = 'rotate(' + degreeOne + 'deg)'
        hTWO.style.transform = 'rotate(' + degreeTwo + 'deg)'
        hTHREE.style.transform = 'rotate(' + degreeThree + 'deg)'
        hFOUR.style.transform = 'rotate(' + degreeFour + 'deg)'
        hFIVE.style.transform = 'rotate(' + degreeFive + 'deg)'}, 0);
    for (let runner = runTime;  runner = lowTime;) {
            
    }
})