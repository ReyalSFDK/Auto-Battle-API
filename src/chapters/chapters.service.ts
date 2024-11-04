import { Injectable } from "@nestjs/common";
import { CharactersService } from "src/characters/characters.service";
import { Character } from "src/characters/models/character.model";
import { Chapter } from "./chapters.model";

@Injectable()
export class ChaptersService {
	constructor(
		private characterService: CharactersService,
	) {
	}

	public getChapterList(): Chapter[] {
		this.characterService.generateAllCharacters();
		const characterList = this.characterService.generateCharacterInstances();


		const stagesChapter1 = this.generateStages(characterList);
		const chapter1 = new Chapter(
			1,
			"Chapter 1",
			stagesChapter1,
			3,
		);

		return [chapter1]
	}

	private generateStages(characterList: Character[]): Character[][] {
		const stages = [];
		for (let i = 0; i < 3; i++) {
			const stage = [];
			for (let j = 0; j < 5; j++) {
				const randomIndex = Math.floor(Math.random() * characterList.length);
				stage.push(characterList[randomIndex]);
			}
			stages.push(stage);
		}

		return stages;
	}
}
