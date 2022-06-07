import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Posts } from '@prisma/client';

import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getAll(): Promise<Posts[]> {
    return this.postService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string): Promise<Posts> {
    return this.postService.getById(id);
  }

  @Post()
  create(@Body() data: CreatePostDto): Promise<Posts> {
    return this.postService.create(data);
  }

  @Patch('/id')
  update(@Param('id') id: string, @Body() data: UpdatePostDto): Promise<Posts> {
    return this.postService.update(data, id);
  }

  @Delete('/:id')
  delete(@Param('id') id: string): Promise<Posts> {
    return this.postService.delete(id);
  }
}
