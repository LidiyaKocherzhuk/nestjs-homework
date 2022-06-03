import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-pots.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get('')
  getAll(): CreatePostDto[] {
    return this.postService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string): CreatePostDto {
    return this.postService.getById(id);
  }

  @Post('')
  create(@Body() post: CreatePostDto): string {
    return this.postService.create(post);
  }

  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() post: UpdatePostDto,
  ): CreatePostDto | string {
    return this.postService.update(id, post);
  }

  @Delete('/:id')
  delete(@Param('id') id: string): string {
    return this.postService.delete(id);
  }
}
