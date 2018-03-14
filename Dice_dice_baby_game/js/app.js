/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gameOn;
// start the game
init();

document.querySelector('.btn-play').addEventListener('click', function () {
    if(gameOn) {
        // random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        // display result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'img/dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'img/dice-' + dice2 + '.png';
        // update the score of the player if a random number !==6
        if (dice1 !== 6 && dice2 !== 6) {
        // Update the round score
        roundScore += dice1 + dice2; // = roundScore = roundScore + dice
        // Display the score on the user side
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
        changePlayer();
        }
    }
});

// hold action
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gameOn) {
        // add the current score to the global score
        scores[activePlayer] += roundScore; // scores[activePlayer] + roundScore
        // update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // check if player won a game (reached 100 points)
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            // hide the dice
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            // add the winnner class
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-box').classList.add('hide');
            // play a sound
            var audio = new Audio('sound/applause.mp3');
            audio.play()
            gameOn = false;
        } else {
            changePlayer();
        }
    }
});

function changePlayer() {
    // next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // reset score to 0
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textConter = 0;
    // toggle the active class
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
    // hide the dice
    hideDice();
}

// call the init function when someone wants to start a new game
document.querySelector('.btn-new-game').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gameOn = true;
    // do not display dices when starting a game
    hideDice();
    // set initial results to 0
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    // set first player to active
    document.querySelector('.player-0-panel').classList.add('active');
};

function hideDice() {
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
};


// pridat trophy a zvuk pro vyhraneho