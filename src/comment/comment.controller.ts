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
import { Comment } from '@prisma/client';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@ApiTags('Comments')
@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiOperation({ summary: 'Get All Comments' })
  @ApiResponse({
    status: 200,
    schema: {
      example: [
        {
          id: 3,
          name: 'Maryna',
          text: 'hello Maryna',
          postId: 1,
        },
      ],
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get()
  getAll(): Promise<Comment[]> {
    return this.commentService.getAll();
  }

  @ApiOperation({ summary: 'Get One Comment By Id' })
  @ApiResponse({
    status: 200,
    schema: {
      example: {
        id: 3,
        name: 'Maryna',
        text: 'hello Maryna',
        postId: 1,
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getById(@Param('id') id: string): Promise<Comment> {
    return this.commentService.getById(id);
  }

  @ApiOperation({ summary: 'Create Comment' })
  @ApiResponse({
    status: 201,
    schema: {
      example: {
        id: 3,
        name: 'Maryna',
        text: 'hello Maryna',
        postId: 1,
      },
    },
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() data: CreateCommentDto): Promise<Comment> {
    return this.commentService.create(data);
  }

  @ApiOperation({ summary: 'Update Comment' })
  @ApiResponse({
    status: 200,
    schema: {
      example: {
        id: 3,
        name: 'Maryna',
        text: 'hello Maryna',
        postId: 1,
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  update(
    @Param('id') id: string,
    updateData: UpdateCommentDto,
  ): Promise<Comment> {
    return this.commentService.update(id, updateData);
  }

  @ApiOperation({ summary: 'Delete Comment' })
  @ApiResponse({
    status: 200,
    schema: {
      example: {
        id: 3,
        name: 'Maryna',
        text: 'hello Maryna',
        postId: 1,
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Delete('/:id')
  delete(@Param('id') id: string): Promise<Comment> {
    return this.commentService.delete(id);
  }
}
