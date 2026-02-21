import { Body, Controller, Post } from '@nestjs/common';
import { ParcelsService } from './parcels.service';

@Controller('parcels')
export class ParcelsController {
  constructor(private readonly parcelsService: ParcelsService) {}

  @Post('sendParcel')
  sendParcel(@Body() body: any) {
    return this.parcelsService.sendParcel(body);
  }
}
