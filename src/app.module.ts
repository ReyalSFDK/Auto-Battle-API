import { Module } from '@nestjs/common';
import { CharactersModule } from "src/characters/characters.module";
import { PortalsModule } from "src/portals/portals.module";

@Module({
  imports: [CharactersModule, PortalsModule],
})
export class AppModule {}
