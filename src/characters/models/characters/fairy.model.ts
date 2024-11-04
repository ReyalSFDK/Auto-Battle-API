import { Character } from "../character.model";

export class Fairy extends Character {
	constructor() {
		super({
			identifier: "fairy",
			baseHealth: 3,
			baseAttack: 1,
		});
	}
}
