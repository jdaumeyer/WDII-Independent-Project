var canvas = document.getElementById("game");
var namePlate = document.getElementById("name");
var ctx = canvas.getContext("2d");

// The Frames Per Second to run the game at
var FPS = 60;

/**
 *	Keyboard input variables
 */
var leftPressed  = false;
var rightPressed = false;
var upPressed    = false;
var downPressed  = false;


// A Collection of several random names for the player
var firstNames = ["Jessica", "Jeremy", "Josh", "Charles", "Charley", "Brenard", "Samantha", "Virginia", "Nathanial", "Henry", "Emily", "Edgar", "Tim", "Preston", "Cassendra", "Lilith", "George", "Sam", "Jane"];
var lastNames = ["Tarley", "Brentsworth", "Wolf", "Higgins", "?"]

// The array that holds all entities in the world
// !!!EXCEPT the local player!!!
var ENTITIES = [];

// The map of the playfield
// w = Wall
// t = Tree
// p = Path
// e = Zombie Spawn
// p = Player Spawn
// Grass Covers all undefined tiles
var MAP = [
					['w','w','w','w','w','w','w','w','w','w'],
					['w',' ',' ',' ',' ','w',' ',' ',' ','w'],
					['w','w','w','w',' ','w',' ','w',' ','w'],
					['w',' ',' ',' ',' ',' ',' ','w',' ','w'],
					['w',' ','w','w',' ','w',' ',' ',' ','w'],
					['w',' ','w',' ',' ','w',' ','w',' ','w'],
					['w','w','w','w','w','w',' ','w',' ','w'],
					[' ','w',' ',' ',' ','w',' ','w',' ','w'],
					[' ',' ',' ','w',' ',' ',' ',' ',' ','w'],
					['w','w','w','w','w','w','w','w','w','w']
];


//Create Event Listeners:
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
	switch (e.keyCode) {
		case 39: // Right Arrow
		case 68: // 'D' Key
			rightPressed = true;
			break;

		case 37: // Left Arrow
		case 65: // 'A' Key
			leftPressed = true;
			break;

		case 38: // Up Arrow
		case 87: // 'W' Key
			upPressed = true;
			break;

		case 40: // Down Arrow
		case 83: // 'S' Key
			downPressed = true;
			break;
	}
}

function keyUpHandler(e) {
	switch (e.keyCode) {

		case 39:
		case 68:
			rightPressed = false;
			break;

		case 37:
		case 65:
			leftPressed = false;
			break;

		case 38:
		case 87:
			upPressed = false;
			break;

		case 40:
		case 83:
			downPressed = false;
			break;

	}
}

function degToRad(deg) {
	return deg * (Math.PI / 180);
}

function drawMap () {
	var count = 0;
	for (var col = 0; col < MAP.length; col++) {
		for(var row = 0; row < MAP[col].length; row++) {
			if (MAP[col][row] == 'w') {
				ENTITIES.push(new Wall(row * 60, col * 60));
				count++;
			}
		}
	}
}

function main () {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	if (leftPressed) {
		p.moveDir(180);
	}
	if (rightPressed) {
		p.moveDir(0);
	}
	if (upPressed) {
		p.moveDir(270);
	}
	if (downPressed) {
		p.moveDir(90);
	}
	p.draw();
	
	for (var i = 0; i < ENTITIES.length; i++) {
		ENTITIES[i].draw();
	}
}


//Create Relevent Objects:
var p = new Player(200, 210, 2, "#00FF00"); 
namePlate.getElementsByTagName("h1").innerHTML = p.name;
//ENTITIES[0] = new Wall(200, 200); 
setInterval(main, 1000/FPS)
