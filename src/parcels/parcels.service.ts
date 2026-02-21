import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ParcelsService {
    constructor(private readonly prisma: PrismaService) { }

    async sendParcel(body: any) {
        return await this.prisma.parcel.create({
            data: body,
        });
    }
}
