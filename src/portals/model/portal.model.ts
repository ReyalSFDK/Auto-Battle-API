import { Character } from "@characters/model/character.model";

export class Portal {
	constructor(
		public id: number,
		ranking: string,
		public stages: Character[][],
		public attempts: number,
	) { }
}
