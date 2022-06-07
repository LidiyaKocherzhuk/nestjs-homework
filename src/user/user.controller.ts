import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  getAll() {
    return this.userService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.userService.getById(id);
  }

  @Post()
  create(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }

  @Patch('/:id')
  update(@Body() data: UpdateUserDto, @Param('id') id: string) {
    return this.userService.update(data, id);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
