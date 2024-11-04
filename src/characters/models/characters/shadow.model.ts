import { Character } from "../character.model";

export class Shadow extends Character {
	constructor() {
		super({
			identifier: "shadow",
			baseHealth: 2,
			baseAttack: 3,
		});
	}
}
