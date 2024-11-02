import { Character } from "../character.model";

export class FatSlime extends Character {
	constructor() {
		super({
			identifier: "fat-slime",
			baseHealth: 1,
			baseAttack: 2,
		});
	}
}
