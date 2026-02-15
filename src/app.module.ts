import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { PartnersModule } from './partners/partners.module';

@Module({
  imports: [UsersModule, PrismaModule, PartnersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
