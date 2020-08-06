class Explorer {
	constructor (name, x, y, pic, fpic) {
		// need to define:
		// player name
		// player health
		// player attack
		// player defense
		// equipment slots
		
		this.matrixPosition = createVector(x, y);
		this.pixelPosition = createVector(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);
		this.pic = pic
		this.fpic = fpic
		this.movingThisPiece = false;
		this.selectingThisPiece = false;
		this.canSelect = true;
		this.canControl = true;
		this.facingRight = true;
		
		this.movesRemaining = 2;
		this.moveSpeed = 1;
		
		this.name = name;
		this.maxHealth = 4;
		this.health = this.maxHealth;
		this.attack = 2;
		this.defense = 2;
		this.equipment = {
			head:{},
			body:{},
			arms:{},
			legs:{},
			relic:{},
			weapon:{},
			offhand:{},
			secondary:{
				weapon:{},
				offhand:{}
			}
		};
	}
	
	show() {
		this.pixelPosition = createVector(this.matrixPosition.x * tileSize + tileSize / 2, this.matrixPosition.y * tileSize + tileSize / 2);
		imageMode(CENTER);
		var xFlip;
		if (!this.facingRight) {
			if (this.movingThisPiece) {
				// text(this.letter, mouseX,mouseY);
				image(this.fpic, mouseX, mouseY, tileSize * 1.5, tileSize * 1.5);
			}
			else if (this.selectingThisPiece) {
				// text(this.letter, mouseX,mouseY);
				image(this.fpic, this.pixelPosition.x + xOffset, this.pixelPosition.y + yOffset, tileSize * 1.5, tileSize * 1.5);
			}	
			else {
				// text(this.letter, this.pixelPosition.x,this.pixelPosition.y);
				image(this.fpic, this.pixelPosition.x + xOffset, this.pixelPosition.y + yOffset, tileSize, tileSize);
			}
		}
		else {
			if (this.movingThisPiece) {
				// text(this.letter, mouseX,mouseY);
				image(this.pic, mouseX, mouseY, tileSize * 1.5, tileSize * 1.5);
			}
			else if (this.selectingThisPiece) {
				// text(this.letter, mouseX,mouseY);
				image(this.pic, this.pixelPosition.x + xOffset, this.pixelPosition.y + yOffset, tileSize * 1.5, tileSize * 1.5);
			}	
			else {
				// text(this.letter, this.pixelPosition.x,this.pixelPosition.y);
				image(this.pic, this.pixelPosition.x + xOffset, this.pixelPosition.y + yOffset, tileSize, tileSize);
			}
		}
		
	}
	
	canMove(x, y, board) {
		if (!this.withinBounds(x, y)) {
			return false;
		}
		if (board.world.layout[x][y].tileType == 1) {
			return false;
		}
		if (board.getPieceAt(x, y)) {
			return false;
		}
		if (sqrt(((this.matrixPosition.x - x) ** 2) + ((this.matrixPosition.y - y) ** 2)) > (this.moveSpeed + 0.5)) {
			return false;
		}
		if (this.movesRemaining <= 0) {
			return false;
		}
		return true;
	}
	
	withinBounds(x, y) {
		if (x >= 0 && y >= 0 && x < 16 && y < 16) {
			return true;
		}
		return false;
	}
	
	move(x, y, board) {
		var attacking = level.rooms[level.loadedRoomPos[0]][level.loadedRoomPos[1]].getPieceAt(x, y);
		if (this.matrixPosition.x > x) {
			this.facingRight = false;
		}
		else if (this.matrixPosition.x == x) {
			this.facingRight = !this.facingRight;
		}
		else {
			this.facingRight = true;
		}
		console.log(this.facingRight)
		this.matrixPosition = createVector(x, y);
		this.pixelPosition = createVector(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);
	}
}

// explorers

class Warrior extends Explorer {
	constructor (name, x, y, pic) {
		super(name, x, y)
		this.pic = images.explorers[0];
		this.fpic = images.flippedexplorers[0];
		
		this.movesRemaining = 3;
		this.moveSpeed = 1;
		
		this.maxHealth = 5;
		this.health = this.maxHealth;
		this.attack = 2;
		this.defense = 1;
		this.equipment = {
			head:{},
			body:{},
			arms:{},
			legs:{},
			relic:{},
			weapon:{},
			offhand:{},
			secondary:{
				weapon:{},
				offhand:{}
			}
		};
	}
	
	move(x, y, board) {
		var attacking = level.rooms[level.loadedRoomPos[0]][level.loadedRoomPos[1]].getPieceAt(x, y);
		if (this.matrixPosition.x > x) {
			this.facingRight = false;
		}
		else if (this.matrixPosition.x == x) {
			this.facingRight = !this.facingRight;
		}
		else {
			this.facingRight = true;
		}
		console.log(this.facingRight)
		this.matrixPosition = createVector(x, y);
		this.pixelPosition = createVector(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);
		this.movesRemaining--;
	}
}

class Paladin extends Explorer {
	constructor (name, x, y, pic) {
		super(name, x, y)
		this.pic = images.explorers[1];
		this.fpic = images.flippedexplorers[1];
		
		this.movesRemaining = 3;
		this.moveSpeed = 1;
		
		this.maxHealth = 4;
		this.health = this.maxHealth;
		this.attack = 1;
		this.defense = 2;
		this.equipment = {
			head:{},
			body:{},
			arms:{},
			legs:{},
			relic:{},
			weapon:{},
			offhand:{},
			secondary:{
				weapon:{},
				offhand:{}
			}
		};
	}
	
	move(x, y, board) {
		var attacking = level.rooms[level.loadedRoomPos[0]][level.loadedRoomPos[1]].getPieceAt(x, y);
		if (this.matrixPosition.x > x) {
			this.facingRight = false;
		}
		else if (this.matrixPosition.x == x) {
			this.facingRight = !this.facingRight;
		}
		else {
			this.facingRight = true;
		}
		console.log(this.facingRight)
		this.matrixPosition = createVector(x, y);
		this.pixelPosition = createVector(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);
		this.movesRemaining--;
	}
}

class Rogue extends Explorer {
	constructor (name, x, y, pic) {
		super(name, x, y)
		this.pic = images.explorers[2];
		this.fpic = images.flippedexplorers[2];
		
		this.movesRemaining = 3;
		this.moveSpeed = 2;
		
		this.maxHealth = 3;
		this.health = this.maxHealth;
		this.attack = 3;
		this.defense = 0;
		this.equipment = {
			head:{},
			body:{},
			arms:{},
			legs:{},
			relic:{},
			weapon:{},
			offhand:{},
			secondary:{
				weapon:{},
				offhand:{}
			}
		};
	}
	
	move(x, y, board) {
		var attacking = level.rooms[level.loadedRoomPos[0]][level.loadedRoomPos[1]].getPieceAt(x, y);
		if (this.matrixPosition.x > x) {
			this.facingRight = false;
		}
		else if (this.matrixPosition.x == x) {
			this.facingRight = !this.facingRight;
		}
		else {
			this.facingRight = true;
		}
		console.log(this.facingRight)
		this.matrixPosition = createVector(x, y);
		this.pixelPosition = createVector(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);
		this.movesRemaining--;
	}
}

class Hunter extends Explorer {
	constructor (name, x, y, pic) {
		super(name, x, y)
		this.pic = images.explorers[3];
		this.fpic = images.flippedexplorers[3];
		
		this.movesRemaining = 3;
		this.moveSpeed = 1.5;
		
		this.maxHealth = 3;
		this.health = this.maxHealth;
		this.attack = 2;
		this.defense = 1;
		this.equipment = {
			head:{},
			body:{},
			arms:{},
			legs:{},
			relic:{},
			weapon:{},
			offhand:{},
			secondary:{
				weapon:{},
				offhand:{}
			}
		};
	}
	
	move(x, y, board) {
		var attacking = level.rooms[level.loadedRoomPos[0]][level.loadedRoomPos[1]].getPieceAt(x, y);
		if (this.matrixPosition.x > x) {
			this.facingRight = false;
		}
		else if (this.matrixPosition.x == x) {
			this.facingRight = !this.facingRight;
		}
		else {
			this.facingRight = true;
		}
		console.log(this.facingRight)
		this.matrixPosition = createVector(x, y);
		this.pixelPosition = createVector(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);
		this.movesRemaining--;
	}
}

class Lancer extends Explorer {
	constructor (name, x, y, pic) {
		super(name, x, y)
		this.pic = images.explorers[4];
		this.fpic = images.flippedexplorers[4];
		
		this.movesRemaining = 3;
		this.moveSpeed = 1;
		
		this.maxHealth = 4;
		this.health = this.maxHealth;
		this.attack = 2;
		this.defense = 1;
		this.equipment = {
			head:{},
			body:{},
			arms:{},
			legs:{},
			relic:{},
			weapon:{},
			offhand:{},
			secondary:{
				weapon:{},
				offhand:{}
			}
		};
	}
	
	move(x, y, board) {
		var attacking = level.rooms[level.loadedRoomPos[0]][level.loadedRoomPos[1]].getPieceAt(x, y);
		if (this.matrixPosition.x > x) {
			this.facingRight = false;
		}
		else if (this.matrixPosition.x == x) {
			this.facingRight = !this.facingRight;
		}
		else {
			this.facingRight = true;
		}
		console.log(this.facingRight)
		this.matrixPosition = createVector(x, y);
		this.pixelPosition = createVector(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);
		this.movesRemaining--;
	}
}

class Brawler extends Explorer {
	constructor (name, x, y, pic) {
		super(name, x, y)
		this.pic = images.explorers[5];
		this.fpic = images.flippedexplorers[5];
		
		this.movesRemaining = 3;
		this.moveSpeed = 1.5;
		
		this.maxHealth = 5;
		this.health = this.maxHealth;
		this.attack = 2;
		this.defense = 0;
		this.equipment = {
			head:{},
			body:{},
			arms:{},
			legs:{},
			relic:{},
			weapon:{},
			offhand:{},
			secondary:{
				weapon:{},
				offhand:{}
			}
		};
	}
	
	move(x, y, board) {
		var attacking = level.rooms[level.loadedRoomPos[0]][level.loadedRoomPos[1]].getPieceAt(x, y);
		if (this.matrixPosition.x > x) {
			this.facingRight = false;
		}
		else if (this.matrixPosition.x == x) {
			this.facingRight = !this.facingRight;
		}
		else {
			this.facingRight = true;
		}
		console.log(this.facingRight)
		this.matrixPosition = createVector(x, y);
		this.pixelPosition = createVector(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);
		this.movesRemaining--;
	}
}

class Spellcaster extends Explorer {
	constructor (name, x, y, pic) {
		super(name, x, y)
		this.pic = images.explorers[6];
		this.fpic = images.flippedexplorers[6];
		
		this.movesRemaining = 3;
		this.moveSpeed = 1;
		
		this.maxHealth = 4;
		this.health = this.maxHealth;
		this.attack = 3;
		this.defense = 0;
		this.equipment = {
			head:{},
			body:{},
			arms:{},
			legs:{},
			relic:{},
			weapon:{},
			offhand:{},
			secondary:{
				weapon:{},
				offhand:{}
			}
		};
	}
	
	move(x, y, board) {
		var attacking = level.rooms[level.loadedRoomPos[0]][level.loadedRoomPos[1]].getPieceAt(x, y);
		if (this.matrixPosition.x > x) {
			this.facingRight = false;
		}
		else if (this.matrixPosition.x == x) {
			this.facingRight = !this.facingRight;
		}
		else {
			this.facingRight = true;
		}
		console.log(this.facingRight)
		this.matrixPosition = createVector(x, y);
		this.pixelPosition = createVector(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);
		this.movesRemaining--;
	}
}

// enemies

class Skeleton extends Explorer {
	constructor (name, x, y, pic) {
		super(name, x, y)
		this.pic = images.enemies[0];
		this.fpic = images.flippedenemies[0];
		
		this.movesRemaining = 2;
		this.moveSpeed = 1;
		this.canSelect = true;
		this.canControl = false;
		
		this.maxHealth = 2;
		this.health = this.maxHealth;
		this.attack = 1;
		this.defense = 0;
		this.equipment = {
			head:{},
			body:{},
			arms:{},
			legs:{},
			relic:{},
			weapon:{},
			offhand:{},
			secondary:{
				weapon:{},
				offhand:{}
			}
		};
	}
	
	move(x, y, board) {
		var attacking = level.rooms[level.loadedRoomPos[0]][level.loadedRoomPos[1]].getPieceAt(x, y);
		if (this.matrixPosition.x > x) {
			this.facingRight = false;
		}
		else if (this.matrixPosition.x == x) {
			this.facingRight = !this.facingRight;
		}
		else {
			this.facingRight = true;
		}
		console.log(this.facingRight)
		this.matrixPosition = createVector(x, y);
		this.pixelPosition = createVector(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);
		this.movesRemaining--;
	}
}


