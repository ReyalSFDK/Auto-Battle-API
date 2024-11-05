import { Body, Controller, Post } from "@nestjs/common";
import { CreateLobbyDto } from "@lobbies/dto/create-lobby.dto";

@Controller('lobbies')
export class LobbiesController {
	constructor() { }

	@Post()
	public createLobby(@Body() body:  CreateLobbyDto) {
		return 'createLobby';
	}
}
