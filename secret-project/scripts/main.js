var tileSize = 50;
var movingPiece;
var room;
var explorers = [];
var enemies = [];
var moving = false;
var namePara;
var healthPara;
var attackPara;
var defensePara;
var movesPara;
var endTurn;
var xOffset = 0;
var yOffset = 0;

var images = {
	explorers:[],
	flippedexplorers:[],
	enemies:[],
	flippedenemies:[],
	walls:[],
	floors:[]
}

function preload () {
	// load explorers
	for (var i = 1; i < 8; i++) {
		images.explorers.push(loadImage("assets/explorers/0" + i + ".png"));
	}
	
	for (var i = 1; i < 8; i++) {
		images.flippedexplorers.push(loadImage("assets/explorers/0" + i + "f.png"));
	}
	
	// load enemies
	for (var i = 1; i < 2; i++) {
		images.enemies.push(loadImage("assets/enemies/0" + i + ".png"));
	}
	
	for (var i = 1; i < 2; i++) {
		images.flippedenemies.push(loadImage("assets/enemies/0" + i + "f.png"));
	}
	
	// load walls
	for (var i = 1; i < 2; i++) {
		images.walls.push(loadImage("assets/wall-tiles/0" + i + ".png"));
	}
	
	// load floors
	for (var i = 1; i < 2; i++) {
		images.floors.push(loadImage("assets/floor-tiles/0" + i + ".png"));
	}
	
	level = new Level();
	
}

function setup () {
	gameCanvas = createCanvas(800, 800);
	line(0, 0, width, height);
	centerGameCanvas();
	namePara = createDiv("name");
	healthPara = createDiv("health");
	attackPara = createDiv("attack");
	defensePara = createDiv("defense");
	movesPara = createDiv("moves");
	turnEnd = createButton("End Turn");
	

	
	explorers.push(new Warrior("Warrior", 2, 2));
	explorers.push(new Paladin("Paladin", 4, 4));
	explorers.push(new Rogue("Rogue", 2, 4));
	explorers.push(new Hunter("Hunter", 4, 2));
	explorers.push(new Lancer("Lancer", 4, 6));
	explorers.push(new Brawler("Brawler", 2, 6));
	explorers.push(new Spellcaster("Spellcaster", 6, 2));
	
	enemies.push(new Skeleton("Skeleton", 10, 4));
	
	console.log(enemies[0].canSelect)
	
	console.log(explorers[0])
	namePara.html("");
	healthPara.html("");
	attackPara.html("");
	defensePara.html("");
	
	background(20);
	showGrid();
	for (i = 0; i < explorers.length; i++) {
		explorers[i].show();
	}
	
	for (i = 0; i < enemies.length; i++) {
		enemies[i].show();
	}
}

function mousePressed() {
	if (mouseButton == LEFT) {
		var x = floor((mouseX - xOffset) / tileSize);
		var y = floor((mouseY - yOffset) / tileSize);
		if (!moving) {
			tempMovingPiece = level.rooms[level.loadedRoomPos[0]][level.loadedRoomPos[1]].getPieceAt(x, y);
			if (movingPiece && tempMovingPiece && movingPiece != tempMovingPiece) {
				movingPiece.movingThisPiece = false;
				movingPiece.selectingThisPiece = false;
			}
			movingPiece = level.rooms[level.loadedRoomPos[0]][level.loadedRoomPos[1]].getPieceAt(x, y);
			if (movingPiece != null) {
				if (movingPiece.selectingThisPiece && movingPiece.canControl) {
					movingPiece.movingThisPiece = true;
					moving = true;
				}
				else if (movingPiece.canSelect) {
					movingPiece.selectingThisPiece = true;
					moving = false;
				}
			} else {
				for (i = 0; i < explorers.length; i++) {
					explorers[i].movingThisPiece = false;
					explorers[i].selectingThisPiece = false;
				}
				
				for (i = 0; i < enemies.length; i++) {
					enemies[i].movingThisPiece = false;
					enemies[i].selectingThisPiece = false;
				}
				return;
			}
		} else {
			if (movingPiece.canMove(x, y, level.rooms[level.loadedRoomPos[0]][level.loadedRoomPos[1]])) {
				movingPiece.move(x, y, level.rooms[level.loadedRoomPos[0]][level.loadedRoomPos[1]]);
				movingPiece.movingThisPiece = false;
				movingPiece.selectingThisPiece = true;
				moving = false;
			} else {
				movingPiece.movingThisPiece = false;
				movingPiece.selectingThisPiece = false;
				moving = false;
			}
		}
	} else {
		movingPiece.movingThisPiece = false;
		movingPiece.selectingThisPiece = false;
		moving = false;
	}
}

function mouseWheel(event) {
	print(event.delta);
	//move the square according to the vertical scroll amount
	console.log(event.delta)
	if ((tileSize - (event.delta / 20)) >= 50 && (tileSize - (event.delta / 20)) <= 100) {
		tileSize -= (event.delta)/20;
	}
	//uncomment to block page scrolling
	//return false;
}

function draw () {
	
	if (keyIsDown(LEFT_ARROW)) {
		xOffset += 5;
	}
	if (keyIsDown(RIGHT_ARROW)) {
		xOffset -= 5;
	}
	if (keyIsDown(UP_ARROW)) {
		yOffset += 5;
	}
	if (keyIsDown(DOWN_ARROW)) {
		yOffset -= 5;
	}
	
	background(20);
	showGrid();
	
	for (i = 0; i < explorers.length; i++) {
		explorers[i].show();
	}
	
	for (i = 0; i < enemies.length; i++) {
		enemies[i].show();
	}
	
	htmlStuff();
}

function centerGameCanvas () {
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	gameCanvas.position(x, y);
}

function windowResized() {
	centerCanvas();
}

function htmlStuff () {
	if (movingPiece) {
		namePara.html("Name: " + movingPiece.name);
		healthPara.html("Health: " + movingPiece.health + "/" + movingPiece.maxHealth);
		attackPara.html("Attack: " + movingPiece.attack);
		defensePara.html("Defense: " + movingPiece.defense);
		movesPara.html("Moves Left: " + movingPiece.movesRemaining);
	}
	
	turnEnd.mousePressed(endTurn);
}

function showGrid() {
	for (var i = 0; i < level.rooms[level.loadedRoomPos[0]][level.loadedRoomPos[1]].world.layout.length; i++) {
		for (var j = 0; j < level.rooms[level.loadedRoomPos[0]][level.loadedRoomPos[1]].world.layout[0].length; j++) {
			if (level.rooms[level.loadedRoomPos[0]][level.loadedRoomPos[1]].world.layout[i][j].tileType == 1) {
				image(images.walls[0], i * tileSize + (tileSize / 2) + xOffset, j * tileSize + (tileSize / 2) + yOffset, tileSize, tileSize);
			} else {
				image(images.floors[0], i * tileSize + (tileSize / 2) + xOffset, j * tileSize + (tileSize / 2) + yOffset, tileSize, tileSize);
			}	
		}
	}
}

function endTurn() {
	namePara.html("	");
	healthPara.html("	");
	movesPara.html("	");
	for (k = 0; k < explorers.length; k++) {
		explorers[k].movesRemaining = 3;
	}
}
