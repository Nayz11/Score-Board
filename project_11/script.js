let homeScore = document.querySelector('.home-score');
let awayScore = document.querySelector('.away-score');

let countHome = 0;
let countAway = 0;

function plusOneHome() {
    homeScore.textContent = countHome += 1;
};

function plusOneAway() {
    awayScore.textContent = countAway += 1;
};

function plusTwoHome() {
    homeScore.textContent = countHome += 2;
};

function plusTwoAway() {
    awayScore.textContent = countAway += 2;
};

function plusThreeHome() {
    homeScore.textContent = countHome += 3;
};

function plusThreeAway() {
    awayScore.textContent = countAway += 3;
};