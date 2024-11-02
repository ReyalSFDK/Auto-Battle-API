import * as _ from "lodash";
import { Injectable } from "@nestjs/common";
import { Character } from "src/characters/models/character.model";
import * as characters from "src/characters/models/characters";

type CharacterMap = {
	[characterName: string]: new () => Character;
};

@Injectable()
export class CharactersService {
	private charactersMap: CharacterMap;

	public generateAllCharacters() {
		this.charactersMap = {};
		console.log(characters);
		_.forEach(characters, (character, characterName) => {
			if (typeof character === "function") {
				this.charactersMap[characterName] = character;
			}
		});
	}

	public generateCharacterInstances(): Character[] {
		return _.map(this.charactersMap, (Character) => new Character());
	}
}
