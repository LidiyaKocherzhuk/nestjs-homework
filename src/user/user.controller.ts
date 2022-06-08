import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Get All Users' })
  @ApiResponse({
    status: 200,
    schema: {
      example: [
        {
          id: 1,
          name: 'Vasyl',
          email: 'li@gmail.com',
          password: 'asd1254fg',
          age: 26,
          city: 'Lviv',
          status: true,
        },
      ],
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get('/')
  getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @ApiOperation({ summary: 'Get One User By Id' })
  @ApiResponse({
    status: 200,
    schema: {
      example: {
        id: 1,
        name: 'Vasyl',
        email: 'li@gmail.com',
        password: 'asd1254fg',
        age: 26,
        city: 'Lviv',
        status: true,
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getById(@Param('id') id: string): Promise<User> {
    return this.userService.getById(id);
  }

  @ApiOperation({ summary: 'Create User' })
  @ApiResponse({
    status: 201,
    schema: {
      example: {
        id: 1,
        name: 'User',
        email: 'user@gmail.com',
        password: 'uSer1245',
        age: 26,
        city: 'Lviv',
        status: true,
      },
    },
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }

  @ApiOperation({ summary: 'Update User' })
  @ApiResponse({
    status: 200,
    schema: {
      example: {
        id: 1,
        name: 'Vasyl',
        email: 'li@gmail.com',
        password: 'asd1254fg',
        age: 26,
        city: 'Lviv',
        status: true,
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  update(@Body() data: UpdateUserDto, @Param('id') id: string): Promise<User> {
    return this.userService.update(data, id);
  }

  @ApiOperation({ summary: 'Delete User' })
  @ApiResponse({
    status: 200,
    schema: {
      example: {
        id: 1,
        name: 'Vasyl',
        email: 'li@gmail.com',
        password: 'asd1254fg',
        age: 26,
        city: 'Lviv',
        status: true,
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Delete('/:id')
  delete(@Param('id') id: string): Promise<User> {
    return this.userService.delete(id);
  }
}
