import { Character } from "../character.model";

export class BogWine extends Character {
	constructor() {
		super({
			identifier: "bog-wine",
			baseHealth: 1,
			baseAttack: 3,
		});
	}
}
