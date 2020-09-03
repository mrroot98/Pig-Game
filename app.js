

var scores,activePlayer,currentscores,dice,gameplaying;
var diceDom = document.querySelector('.dice');
scores = [0,0];
currentscores = 0;
activePlayer = 0;
win_score = 50;
gameplaying = true;



diceDom.style.display='none';

function active_player_0(){
	document.querySelector('.player-1-panel').classList.remove('active');
	activePlayer = 0;
	document.querySelector('.player-0-panel').classList.add('active');
	diceDom.style.display='none';
}

function active_player_1(){
	document.querySelector('.player-0-panel').classList.remove('active');
	activePlayer=1
	document.querySelector('.player-1-panel').classList.add('active');
	diceDom.style.display='none';
}

document.querySelector('.btn-new').addEventListener('click',function(){
	document.querySelector('#name-' + activePlayer).innerHTML = 'Player '+ (activePlayer + 1);
	// document.querySelector('#name-1').classList.remove('winner');
	scores = [0,0];
	currentscores = 0;
	activePlayer = 0;
	gameplaying = true;
	active_player_0();
	document.querySelector('#current-0').innerHTML=0;
	document.querySelector('#current-1').innerHTML=0;
	document.querySelector('#score-0').innerHTML=0;
	document.querySelector('#score-1').innerHTML=0;
});



document.querySelector('.btn-roll').addEventListener('click',function(){
	if(gameplaying){
		dice = Math.floor(Math.random() * 6) + 1;
		//alert(dice1);
		var diceimage="dice-" + dice +".png";
		diceDom.style.display='block';
		diceDom.setAttribute("src",diceimage);
		if (dice===1) {
			currentscores = 0;
			document.querySelector('#current-' + activePlayer).innerHTML=currentscores;
			if (activePlayer === 1) {
				active_player_0();
			}else{
				active_player_1();
			}
		} 
		else{
			currentscores = currentscores + dice;
			document.querySelector('#current-' + activePlayer).innerHTML=currentscores;
		}
	}

});

document.querySelector('.btn-hold').addEventListener('click',function(){
	if(gameplaying){
		scores[activePlayer] = scores[activePlayer] + currentscores;
		document.querySelector('#score-' + activePlayer).innerHTML=scores[activePlayer];
		currentscores = 0;
		document.querySelector('#current-' + activePlayer).innerHTML=currentscores;
		if(scores[activePlayer] >= win_score){
			document.querySelector('#name-' + activePlayer).classList.add('winner');
			document.querySelector('#name-' + activePlayer).innerHTML = 'Winner!';
			gameplaying = false;
			document.querySelector('.player-1-panel').classList.remove('active');
			document.querySelector('.player-0-panel').classList.remove('active');
			diceDom.style.display='none';
		} else{
			if (activePlayer === 1) {
				active_player_0();
			}else{
				active_player_1();
			}
		}
	}
});
