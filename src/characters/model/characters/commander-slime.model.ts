import { Character } from "../character.model";

export class CommanderSlime extends Character {
	constructor() {
		super({
			identifier: "commander-slime",
			baseHealth: 1,
			baseAttack: 2,
		});
	}
}
