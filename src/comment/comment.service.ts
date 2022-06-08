import { Injectable } from '@nestjs/common';
import { Comment, Prisma } from '@prisma/client';

import { PrismaService } from '../core/prisma.service';

@Injectable()
export class CommentService {
  constructor(private readonly prismaService: PrismaService) {}

  getAll(): Promise<Comment[]> {
    return this.prismaService.comment.findMany();
  }

  getById(commentId: string): Promise<Comment> {
    return this.prismaService.comment.findUnique({
      where: { id: Number(commentId) },
    });
  }

  create(data: Prisma.CommentCreateInput): Promise<Comment> {
    return this.prismaService.comment.create({ data });
  }

  update(
    commentId: string,
    updatedData: Prisma.CommentUpdateInput,
  ): Promise<Comment> {
    return this.prismaService.comment.update({
      where: { id: Number(commentId) },
      data: {
        name: updatedData.name,
        text: updatedData.text,
      },
    });
  }

  delete(commentId: string): Promise<Comment> {
    return this.prismaService.comment.delete({
      where: { id: Number(commentId) },
    });
  }
}
