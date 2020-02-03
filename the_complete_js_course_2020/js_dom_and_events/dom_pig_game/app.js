/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

let scores, round_score, active_player, game_playing;
init_game();
roll_dice();
hold_btn();

// Roll Dice
function roll_dice(){
	document.querySelector('.btn-roll').addEventListener('click', function() {
		if (game_playing){

		}
		// 1. Random number
			let	dice = Math.floor(Math.random() * 6) + 1;
		// 2. Display the reults
			let dice_dom = document.querySelector('.dice');
			dice_dom.style.display = 'block';
			dice_dom.src = `dice-${dice}.png`;

		// 3. Update the round score IF the rolled number was NOT a 1
			if (dice !== 1){
				// Add score
				round_score += dice;
				// Updated the active player with the round score 
				document.querySelector(`#current-${active_player}`).textContent = round_score;
			} else {
				// Next player
				next_player();
			}
	});
};

// Hold Button
function hold_btn() {
	document.querySelector('.btn-hold').addEventListener('click', function(){
		// Add current score to global score
		scores[active_player] += round_score;
		// Update the UI
		document.getElementById(`score-${active_player}`).textContent = scores[active_player];
		next_player();
		// Check if player won the game
		if (scores[active_player] >= 100){
			document.getElementById(`name-${active_player}`).textContent = 'WINNER!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector(`.player-${active_player}`).classList.toggle('winner');
			document.querySelector(`.player-${active_player}`).classList.toggle('active');
		} else {
			next_player();
		}
	});
};
	
// Next Player
	function next_player(){
		// ternary way of writing if else statment.
				active_player == 0 ? active_player = 1 : active_player = 0;
				// old school way of writing the if else statement.
					/* if (active_player === 0){
						active_player = 0;
					} else {
						active_player = 1;
						document.quearySelector().classList
					} */
				
				// Setting scores back to 0
				round_score = 0;
				document.getElementById('current-0').textContent = '0';
				document.getElementById('current-1').textContent = '0';

				// Swtich active_player css
				document.querySelector('.player-0-panel').classList.toggle('active');
				document.querySelector('.player-1-panel').classList.toggle('active');
				// Don't show dice when switching active player
				document.querySelector('.dice').style.display = 'none';
	};

// New game
	document.querySelector('.btn-new').addEventListener('click', init_game);

function init_game(){
	scores = [0,0];
	round_score = 0;
	active_player = 0;

	document.querySelector('.dice').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById(`name-0`).textContent = 'Player 1';
	document.getElementById(`name-1`).textContent = 'Player 2';

	document.querySelector(`.player-0-panel`).classList.add('active');
	document.querySelector(`.player-1-panel`).classList.remove('active');
};

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rols two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/ 






