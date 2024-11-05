import { Portal } from "@portals/model/portal.model";
import { Character } from "@characters/model/character.model";

export class CreateLobbyDto {
	portal: Portal;
	initialCharacters: Character[];
	attemptsRemaining: number;
	team: Character[];
	reserve: Character[];
}
