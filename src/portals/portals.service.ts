import { Injectable } from "@nestjs/common";
import { CharactersService } from "@characters/characters.service";
import { Character } from "@characters/model/character.model";
import { Portal } from "@portals/model/portal.model";

@Injectable()
export class PortalsService {
	constructor(
		private characterService: CharactersService,
	) {
	}

	public getPortalList(): Portal[] {
		this.characterService.generateAllCharacters();
		const characterList = this.characterService.generateCharacterInstances();

		const portalE = new Portal(
			1,
			"E",
			this.generateStages(characterList, 2),
			3,
		);

		const portalD = new Portal(
			2,
			"D",
			this.generateStages(characterList, 3),
			3,
		);

		const portalC = new Portal(
			3,
			"C",
			this.generateStages(characterList, 5),
			3,
		);

		return [portalE, portalD, portalC];
	}

	private generateStages(characterList: Character[], stagesAmount = 3): Character[][] {
		const stages = [];
		for (let i = 0; i < stagesAmount; i++) {
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
