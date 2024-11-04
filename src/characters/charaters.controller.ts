import { Controller, Get } from '@nestjs/common';
import { CharactersService } from "src/characters/characters.service";

@Controller('characters')
export class CharactersController {
	constructor(
		private readonly charactersService: CharactersService
	) {}

	@Get()
	getCharacter() {
		this.charactersService.generateAllCharacters();
		return this.charactersService.generateCharacterInstances();
	}
}
