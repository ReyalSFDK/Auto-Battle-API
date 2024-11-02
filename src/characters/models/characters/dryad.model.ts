import { Character } from "../character.model";

export class Dryad extends Character {
	constructor() {
		super({
			identifier: "dryad",
			baseHealth: 1,
			baseAttack: 4,
		});
	}
}
