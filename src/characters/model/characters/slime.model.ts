import { Character } from "../character.model";

export class Slime extends Character {
	constructor() {
		super({
			identifier: "slime",
			baseHealth: 1,
			baseAttack: 1,
		});
	}
}
