import { Character } from "../character.model";

export class SkeletonMage extends Character {
	constructor() {
		super({
			identifier: "skeleton-mage",
			baseHealth: 2,
			baseAttack: 2,
		});
	}
}
