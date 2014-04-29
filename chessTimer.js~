

var turn = 'black';
var state = 'play';

duration = 1200000;
var elems = document.getElementsByClassName("timer");
var timerWhite = new Stopwatch(duration, elems[0], {delay: 1000});
var timerBlack = new Stopwatch(duration, elems[1], {delay: 1000});

function start(){
	if (turn == 'black'){
		timerBlack.stop();
		timerWhite.start();
		turn = 'white';
	}
	else {
		timerWhite.stop();
		timerBlack.start();
		turn = 'black';
	}
}

function pause(){
	if(state == 'play'){
		timerWhite.stop();
		timerBlack.stop();
		state = 'pause';
	}
	else {
		if (turn == 'black'){
			timerBlack.start();
		}
		else {
			timerWhite.start();
		}
		state = 'play';
	}
}

function reset(){
	turn = 'black';
	timerWhite.stop();
	timerBlack.stop();
	timerWhite.reset();
	timerBlack.reset();
}

//var buttons=[start, pause, reset];
$(document).ready(function() {
	$('button.start').click(function(){
		start();
	})
	$('button.reset').click(function(){
		reset();
	})
	$('button.pause').click(function(){
		pause();
	})
});



