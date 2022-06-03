import { Injectable } from '@nestjs/common';

import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = [];

  getAll(): CreateUserDto[] {
    return this.users;
  }

  getById(id: string): CreateUserDto {
    return this.users.find((user) => user.id == id);
  }

  create(createUser: CreateUserDto): CreateUserDto {
    this.users.push({
      ...createUser,
      id: new Date().valueOf(),
    });
    return createUser;
  }

  update(id: string, updateUser: UpdateUserDto): CreateUserDto | string {
    const userFromArr = this.users.find((user) => user.id == id);

    if (userFromArr) {
      this.delete(userFromArr.id);

      this.users = [
        ...this.users,
        {
          ...userFromArr,
          email: updateUser.email,
          password: updateUser.password,
        },
      ];
      return this.getById(userFromArr.id);
    }
    return 'user not exist';
  }

  delete(id: string): number | string {
    const userIndex = this.users.findIndex((user) => user.id == id);
    if (userIndex >= 0) {
      this.users.splice(userIndex, 1);
      return userIndex;
    }
    return 'user not exist';
  }
}
