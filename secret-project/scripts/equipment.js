class Item {
	constructor (name) {
		this.name = name;
		
	}
}

class Armour extends Item {
	constructor (name, slot, def) {
		super(name);
		this.slot = slot;
		this.def = def;
	}
}