import { Character } from "../character.model";

export class FireSlime extends Character {
	constructor() {
		super({
			identifier: "fire-slime",
			baseHealth: 2,
			baseAttack: 1,
		});
	}
}
