"use strict";

var socket = io();
var selectedCanvas;

function startGame() {
	selectedCanvas = new gameArea();
	socket.on('message', function(data) {
		console.log(data);
	});
	
	socket.on('game_update', function() {
		console.log('Updating game state');
	});
	
	socket.on('created_character', selectedCanvas.addCharacter);
}

// --- Events listeners --- //

window.addEventListener('keydown', function(e) {
	selectedCanvas.keyDown(e);
});
window.addEventListener('keyup', function(e) {
	selectedCanvas.keyUp(e);
});
window.addEventListener('mousedown', function(e) {
	if (e.button == 0) {
		selectedCanvas.lMouseDown(e);
	}
});
window.addEventListener('mouseup', function(e) {
	if (e.button == 0) {
		selectedCanvas.lMouseUp(e);
	}
});
window.addEventListener('mousemove', function(e) {
	selectedCanvas.mouseMove(e);
});