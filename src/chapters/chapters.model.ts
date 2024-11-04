import { Character } from "src/characters/models/character.model";

export class Chapter {
	constructor(
		public id: number,
		public title: string,
		public stages: Character[][],
		public attempts: number,
	) { }
}
