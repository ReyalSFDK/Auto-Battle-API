import { Character } from "../character.model";

export class Mermaid extends Character {
	constructor() {
		super({
			identifier: "mermaid",
			baseHealth: 3,
			baseAttack: 2,
		});
	}
}
