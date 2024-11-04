import { Module } from "@nestjs/common";
import { CharactersModule } from "src/characters/characters.module";
import { ChaptersController } from "./chapters.controller";
import { ChaptersService } from "./chapters.service";

@Module({
	imports: [CharactersModule],
	controllers: [ChaptersController],
	providers: [ChaptersService]
})
export class ChaptersModule { }
