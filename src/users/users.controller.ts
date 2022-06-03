import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from "./dto/create-user.dto";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('')
  getAll(): CreateUserDto[] {
    return this.usersService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string): CreateUserDto {
    return this.usersService.getById(id);
  }

  @Post('')
  create(@Body() user: CreateUserDto): CreateUserDto {
    return this.usersService.create(user);
  }

  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() user: UpdateUserDto,
  ): CreateUserDto | string {
    return this.usersService.update(id, user);
  }

  @Delete('/:id')
  delete(@Param('id') id: string): number | string {
    return this.usersService.delete(id);
  }
}
