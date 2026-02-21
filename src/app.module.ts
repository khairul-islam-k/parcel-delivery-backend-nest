import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { PartnersModule } from './partners/partners.module';
import { ParcelsModule } from './parcels/parcels.module';

@Module({
  imports: [UsersModule, PrismaModule, PartnersModule, ParcelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
