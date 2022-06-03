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

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get('')
  getAll(): CreatePostDto[] {
    return this.postService.getAll();
  }

  @Get('/:id')
  getById(@Param() id: string): CreatePostDto {
    return this.postService.getById(id);
  }

  @Post('')
  create(@Body() post: CreatePostDto): string {
    return this.postService.create(post);
  }

  @Patch('/:id')
  update(
    @Param() id: string,
    @Body() post: Partial<CreatePostDto>,
  ): CreatePostDto | string {
    return this.postService.update(id, post);
  }

  @Delete('/:id')
  delete(@Param() id: string): string {
    return this.postService.delete(id);
  }
}
