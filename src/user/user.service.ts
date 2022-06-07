import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';

import { PrismaService } from '../core/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  getAll(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  getById(userId: string): Promise<User> {
    return this.prismaService.user.findUnique({
      where: { id: Number(userId) },
    });
  }

  create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prismaService.user.create({ data });
  }

  update(updateData: Prisma.UserUpdateInput, userId: string): Promise<User> {
    return this.prismaService.user.update({
      where: { id: Number(userId) },
      data: {
        name: updateData.name,
        password: updateData.password,
        city: updateData.city,
      },
    });
  }

  delete(userId: string): Promise<User> {
    return this.prismaService.user.delete({ where: { id: Number(userId) } });
  }
}
