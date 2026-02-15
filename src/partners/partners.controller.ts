import { Controller, Get } from '@nestjs/common';
import { PartnersService } from './partners.service';

@Controller('partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) {}

  @Get('all')
  findPartner() {
    return this.partnersService.findPartner();
  }
}
