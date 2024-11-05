import { Character } from "../character.model";

export class SkeletonArcher extends Character {
	constructor() {
		super({
			identifier: "skeleton-archer",
			baseHealth: 1,
			baseAttack: 1,
		});
	}
}
