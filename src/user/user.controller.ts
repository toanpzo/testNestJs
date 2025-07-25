import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users') // Endpoint gốc: /users
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async addUser(
    @Body('name') name: string,
    @Body('pass') pass: string,
  ) {
    return this.userService.addUser(name, pass);
  }

  @Get(':id')
  async getUser(@Param('id') id: number) {
    return this.userService.getUser(id);
  }

  @Get()
  async searchUser(@Query('name') name: string) {
    return this.userService.searchUser(name);
  }

  @Patch(':id')
  async editUser(
    @Param('id') id: number,
    @Body('name') name?: string,
    @Body('pass') pass?: string,
  ) {
    return this.userService.editUser(id, name, pass);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
