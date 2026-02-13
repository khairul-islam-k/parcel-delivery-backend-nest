import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

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

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('email/:email')
  finByEmail(@Param('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @Get('provider/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post('socialRegistration')
  socialRegister(@Body() body: UserRegistration) {
    return this.usersService.socialRegister(body);
  }

  @Post('registration')
  registration(@Body() body: UserRegistration) {
    return this.usersService.registration(body);
  }

  @Post('loginPoint')
  loginPoint(@Body() body: TLogin) {
    return this.usersService.loginPoint(body);
  }
}
