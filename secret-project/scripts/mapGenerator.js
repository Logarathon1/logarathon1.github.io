class Level {
	constructor	() {
		this.rooms = [];
		
		// determine special room locations (boss, exit, etc)
		var specialRooms = []
		do {
			specialRooms = [{type:"boss",location:{x:Math.floor(Math.random() * 5),y:Math.floor(Math.random() * 5)}},{type:"exit",location:{x:Math.floor(Math.random() * 5),y:Math.floor(Math.random() * 5)}}]
		}
		while (!checkRooms(specialRooms))
		
		for (i = 0; i < 5; i++) {
			this.rooms.push([]);
			for (j = 0; j < 5; j++) {
				// check if this is the entry
				if (i == 2 && j == 2) {
					this.rooms[i].push(new Room ("Entry 1"));
					this.rooms[i][j].hasLoaded = true;
				}
				// determine room type
				// boss room
				else if (specialRooms[0].location.x == i && specialRooms[0].location.y == j) {
					this.rooms[i].push(new Room ("Boss Room 1"));
				}
				
				// exit room
				else if (specialRooms[1].location.x == i && specialRooms[1].location.y == j) {
					this.rooms[i].push(new Room ("Exit 1"));
				}
				
				// not special, assign random regular room
				else {
					this.rooms[i].push(new Room ("Room 1"));
				}
			}
		}
		
		this.loadedRoomPos = [2,2];
		console.log(this.loadedRoomPos)
		console.log(this.rooms[this.loadedRoomPos[0]][this.loadedRoomPos[1]])
	}
}

class Room {
	constructor (roomID) {
		var tempLayout = loadJSON("./assets/rooms/JSON/" + roomID + ".json");
		this.world = tempLayout
		this.hasLoaded = false;
	}
	
	getPieceAt(x, y) {
		for (var i = 0; i < explorers.length; i++) {
			if (explorers[i].matrixPosition.x == x && explorers[i].matrixPosition.y == y) {
				return explorers[i];
			}
		}
		for (var i = 0; i < enemies.length; i++) {
			if (enemies[i].matrixPosition.x == x && enemies[i].matrixPosition.y == y) {
				return enemies[i];
			}
		}
		return null;
	}
	
	
}

/*
function generateDungeon (dungeonType) {
	map = {rooms:[]};
	
	// determine special room locations (boss, exit, etc)
	var specialRooms = []
	do {
		specialRooms = [{type:"boss",location:{x:Math.floor(Math.random() * 5),y:Math.floor(Math.random() * 5)}},{type:"exit",location:{x:Math.floor(Math.random() * 5),y:Math.floor(Math.random() * 5)}}]
	}
	while (!checkRooms(specialRooms))
	
	for (i = 0; i < 5; i++) {
		map.rooms.push([]);
		for (j = 0; j < 5; j++) {
			// check if this is the entry
			if (i == 2 && j == 2) {
				map.rooms[i].push(convertRoom(roomTemplates.entryrooms[0]));
				map.rooms[i][j].hasLoaded = true;
			}
			// determine room type
			// boss room
			else if (specialRooms[0].location.x == i && specialRooms[0].location.y == j) {
				map.rooms[i].push(convertRoom(roomTemplates.bossrooms[0]));
			}
			
			// exit room
			else if (specialRooms[1].location.x == i && specialRooms[1].location.y == j) {
				map.rooms[i].push(convertRoom(roomTemplates.exitrooms[0]));
			}
			
			// not special, assign random regular room
			else {
				map.rooms[i].push(convertRoom(roomTemplates.rooms[Math.floor(Math.random() * roomTemplates.rooms.length)]));
			}
		}
	}
	map.loadedRoomPos = [2,2];
	dungeon = map.rooms[2][2].layout;
	console.log(dungeon)
	return dungeon;
}
*/

function convertRoom (roomIMG) {
	var room = {hasLoaded:false,layout:[],enemies:[]}
	
	// place structure tiles and enemy spawns
	for (roomI = 0; roomI < 16; roomI++) {
		room.layout.push([]);
		for (roomJ = 0; roomJ < 16; roomJ++) {
			tileCol = roomIMG.getPixelColor(roomI,roomJ);
			for (tileIndex = 0; tileIndex < dungeonTiles.length; tileIndex++) {
				if (tileCol == dungeonTiles[tileIndex].fileColour) {
					room.layout[roomI].push({tileType:dungeonTiles[tileIndex].fileID})
				}
			}
			if (tileCol == Jimp.rgbaToInt(255,0,0,255)) {
				room.layout[roomI].push({tileType:0,enemySpawn:true});
			}
		}
	}
	return room;
}

function checkRooms (specialRooms) {
	for (i = 0; i < specialRooms.length; i++) {
		if (specialRooms[i].location.x == 2 && specialRooms[i].location.x == 2) {
			return false;
		}
		for (j = 0; j < specialRooms.length; j++) {
			if (i == j) {continue}
			if (specialRooms[i].location.x == specialRooms[j].location.x && specialRooms[i].location.x == specialRooms[j].location.x) {
				return false;
			}
		}
	}
	return true;
}