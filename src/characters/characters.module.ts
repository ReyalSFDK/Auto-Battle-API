import { Module } from "@nestjs/common";
import { CharactersController } from "src/characters/charaters.controller";
import { CharactersService } from "src/characters/characters.service";

@Module({
	controllers: [CharactersController],
	providers: [CharactersService],
})
export class CharactersModule {}
