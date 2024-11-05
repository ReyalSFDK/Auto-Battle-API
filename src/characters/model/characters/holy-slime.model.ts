import { Character } from "../character.model";

export class HolySlime extends Character {
	constructor() {
		super({
			identifier: "holy-slime",
			baseHealth: 2,
			baseAttack: 1,
		});
	}
}
