'use strict';

// Var
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnRoll2 = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Dice rolling
btnRoll.addEventListener('click', function() {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random()*6) + 1;
    console.log(dice);
    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true, switch to next player
    if(dice !== 1) {
        // Add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    } else {        
        // Reset currentScore
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        
        // Switch players
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
});

// Hold
btnHold.addEventListener('click', function() {
    // Add currentScore to scores
    scores[activePlayer] += currentScore;
    score0El.textContent = scores[0];
    score1El.textContent = scores[1];

    // Winner
    if (scores[activePlayer]>=100) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        diceEl.classList.add('hidden');
    }

    // Switch players
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

    // Reset currentScore
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
});

// New game
btnNew.addEventListener('click', function() {
    scores = [0, 0];
    activePlayer = 0;
});