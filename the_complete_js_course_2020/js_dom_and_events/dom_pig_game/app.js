/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

let scores, round_score, active_player;

scores = [0,0];
round_score = 0;
active_player = 0;



//document.querySelector(`#current-${active_player}`).textContent = dice;
// document.querySelector(`#current-${active_player}`).innerHTMl = '<em>' + dice +'</em>';

document.querySelector('.dice').style.display = 'none';

 document.getElementById('score-0').textContent = '0';
 document.getElementById('current-0').textContent = '0';
 document.getElementById('score-1').textContent = '0';
 document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function() {
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
			// ternary way of writing if else statment.
			active_player === 0 ? active_player = 1 : active_player = 0;
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
		}

});


// Hold Button

document.querySelector('.btn-hold').addEventListener('click', function(){
	// Add current score to global score
	
	// Update the UI

	// Check if player won the game
});