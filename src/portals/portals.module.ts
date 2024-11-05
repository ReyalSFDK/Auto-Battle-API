import { Module } from "@nestjs/common";
import { CharactersModule } from "@characters/characters.module";
import { PortalsController } from "@portals/portals.controller";
import { PortalsService } from "@portals/portals.service";

@Module({
	imports: [CharactersModule],
	controllers: [PortalsController],
	providers: [PortalsService]
})
export class PortalsModule { }
