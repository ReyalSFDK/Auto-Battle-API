import { Module } from '@nestjs/common';
import { CharactersModule } from "src/characters/characters.module";
import { ChaptersModule } from "src/chapters/chapters.module";

@Module({
  imports: [CharactersModule, ChaptersModule],
})
export class AppModule {}
