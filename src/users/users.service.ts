import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import bcrypt from 'bcrypt';

interface UserRegistration {
  provider?: string;
  providerAccountId?: string;
  role: string;
  name: string;
  email: string;
  image: string;
  password: string;
}

interface TLogin {
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.prismaClient.user.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.prismaClient.user.findMany({
      where: { providerAccountId: id },
    });
  }

  async findByEmail(email: string) {
    console.log(email);
    return this.prisma.prismaClient.user.findUnique({
      where: { email },
    });
  }

  async registration(body: UserRegistration) {
    const { password, ...resData } = body;
    const user = await this.prisma.prismaClient.user.findUnique({
      where: { email: body.email },
    });

    if (user) {
      return {
        id: false,
        success: false,
      };
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newData = { password: hashPassword, ...resData };

    return await this.prisma.prismaClient.user.create({
      data: newData,
    });
  }

  async socialRegister(body: UserRegistration) {
    return this.prisma.prismaClient.user.create({
      data: body,
    });
  }

  async loginPoint(body: TLogin) {
    const { email, password } = body;
    const user = await this.prisma.prismaClient.user.findUnique({
      where: { email },
    });

    if (!user) {
      return null;
    }

    if (!user?.password) {
      return null;
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (isPassword) {
      return user;
    } else {
      return null;
    }
  }
}
