import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

interface TParcel {
  delivery_instruction: string;
  pickup_instruction: string;
  receiver_address: string;
  receiver_center: string;
  receiver_contact: string;
  receiver_name: string;
  receiver_region: string;
  sender_address: string;
  sender_center: string;
  sender_contact: string;
  sender_name: string;
  sender_region: string;
  title: string;
  type: string;
  weight: string;
  cost: number;
  email: string;
}

@Injectable()
export class ParcelsService {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string) {
    return await this.prisma.parcel.findMany({
      where: { email },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async sendParcel(body: TParcel) {
    return await this.prisma.parcel.create({
      data: body,
    });
  }

  async deleteById(id: string) {
    return await this.prisma.parcel.delete({
      where: { id },
    });
  }
}
