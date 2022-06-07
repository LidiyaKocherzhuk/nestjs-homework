import { Injectable } from '@nestjs/common';
import { PrismaService } from "../core/prisma.service";

@Injectable()
export class CommentService {
  constructor(private readonly prismaService: PrismaService) {
  }

}
