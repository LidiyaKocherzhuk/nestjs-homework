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
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('')
  getAll(): CreateUserDto[] {
    return this.usersService.getAll();
  }

  @Get('/:id')
  getById(@Param() id: string): CreateUserDto {
    return this.usersService.getById(id);
  }

  @Post('')
  create(@Body() user: CreateUserDto): CreateUserDto {
    return this.usersService.create(user);
  }

  @Patch('/:id')
  update(
    @Param() id: string,
    @Body() user: Partial<CreateUserDto>,
  ): CreateUserDto | string {
    return this.usersService.update(id, user);
  }

  @Delete('/:id')
  delete(@Param() id: string): number | string {
    return this.usersService.delete(id);
  }
}
