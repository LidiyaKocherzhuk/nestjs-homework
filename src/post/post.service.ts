import { Injectable } from '@nestjs/common';
import { Posts, Prisma } from '@prisma/client';

import { PrismaService } from '../core/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) {}

  getAll(): Promise<Posts[]> {
    return this.prismaService.posts.findMany();
  }

  getById(postId: string): Promise<Posts> {
    return this.prismaService.posts.findUnique({
      where: { id: Number(postId) },
    });
  }

  create(data: Prisma.PostsCreateInput): Promise<Posts> {
    return this.prismaService.posts.create({ data });
  }

  update(updateData: Prisma.PostsUpdateInput, postId: string): Promise<Posts> {
    return this.prismaService.posts.update({
      where: { id: Number(postId) },
      data: {
        title: updateData.title,
        content: updateData.content,
      },
    });
  }

  delete(postId: string): Promise<Posts> {
    return this.prismaService.posts.delete({
      where: { id: Number(postId) },
    });
  }
}
