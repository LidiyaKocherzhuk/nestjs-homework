import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = [];

  getAll(): CreateUserDto[] {
    return this.users;
  }

  getById(id: string): CreateUserDto {
    return this.users.find((user) => user.id === id);
  }

  create(createUser: CreateUserDto): CreateUserDto {
    this.users.push({
      ...createUser,
      id: new Date().valueOf(),
    });
    return createUser;
  }

  update(
    id: string,
    updateUser: Partial<CreateUserDto>,
  ): CreateUserDto | string {
    return this.users.find((user) => {
      if (user.id === id) {
        user = { ...user, updateUser };
        return user;
      }
      return 'user not exist';
    });
  }

  delete(id: string): number | string {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex >= 0) {
      this.users.splice(userIndex, 1);
      return userIndex;
    }
    return 'user not exist';
  }
}
