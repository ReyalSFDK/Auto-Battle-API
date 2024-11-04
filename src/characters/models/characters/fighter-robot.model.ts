import { Character } from "../character.model";

export class FighterRobot extends Character {
	constructor() {
		super({
			identifier: "fighter-robot",
			baseHealth: 2,
			baseAttack: 2,
		});
	}
}
