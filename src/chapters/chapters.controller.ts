import { Controller, Get } from "@nestjs/common";
import { ChaptersService } from "./chapters.service";

@Controller('chapters')
export class ChaptersController {
	constructor(
		private readonly chapterService: ChaptersService,
	) { }

	@Get()
	public getChapterList() {
		return this.chapterService.getChapterList();
	}
}
