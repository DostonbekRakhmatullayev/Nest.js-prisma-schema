import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/create')
  async createUser(@Body() data: any) {
    return await this.userService.createUser(data);
  }

  @Get('/list')
  async fetchAll() {
    return this.userService.fetchAll();
  }
}
