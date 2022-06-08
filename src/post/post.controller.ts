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
import { Posts } from '@prisma/client';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@ApiTags('Posts')
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @ApiOperation({ summary: 'Get All Posts' })
  @ApiResponse({
    status: 200,
    schema: {
      example: [
        {
          id: 1,
          title: 'lorem ipsum...',
          content: 'user',
          published: true,
          authorId: 1,
        },
      ],
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get()
  getAll(): Promise<Posts[]> {
    return this.postService.getAll();
  }

  @ApiOperation({ summary: 'Get One Post By Id' })
  @ApiResponse({
    status: 200,
    schema: {
      example: {
        id: 1,
        title: 'lorem ipsum...',
        content: 'user',
        published: true,
        authorId: 1,
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getById(@Param('id') id: string): Promise<Posts> {
    return this.postService.getById(id);
  }

  @ApiOperation({ summary: 'Create Post' })
  @ApiResponse({
    status: 201,
    schema: {
      example: {
        id: 1,
        title: 'lorem ipsum...',
        content: 'user',
        published: true,
        authorId: 1,
      },
    },
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() data: CreatePostDto): Promise<Posts> {
    return this.postService.create(data);
  }

  @ApiOperation({ summary: 'Update Post' })
  @ApiResponse({
    status: 200,
    schema: {
      example: {
        id: 1,
        title: 'lorem ipsum...',
        content: 'user',
        published: true,
        authorId: 1,
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/id')
  update(@Param('id') id: string, @Body() data: UpdatePostDto): Promise<Posts> {
    return this.postService.update(data, id);
  }

  @ApiOperation({ summary: 'Delete Post' })
  @ApiResponse({
    status: 200,
    schema: {
      example: {
        id: 1,
        title: 'lorem ipsum...',
        content: 'user',
        published: true,
        authorId: 1,
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Delete('/:id')
  delete(@Param('id') id: string): Promise<Posts> {
    return this.postService.delete(id);
  }
}
