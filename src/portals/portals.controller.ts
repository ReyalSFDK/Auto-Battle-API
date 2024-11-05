import { Controller, Get } from "@nestjs/common";
import { PortalsService } from "@portals/portals.service";

@Controller('portals')
export class PortalsController {
	constructor(
		private readonly portalsService: PortalsService,
	) { }

	@Get()
	public getPortalsList() {
		return this.portalsService.getPortalList();
	}
}
