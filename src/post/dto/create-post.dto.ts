import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ example: 'loren ipsum', description: 'title' })
  @IsString()
  @IsNotEmpty()
  public title: string;

  @ApiProperty({ example: 'loren ipsum ...', description: 'content' })
  @IsString()
  @IsNotEmpty()
  public content: string;

  @ApiProperty({ example: true, description: 'published' })
  @IsBoolean()
  public published?: boolean;

  @ApiProperty({ example: 1, description: 'authorId' })
  @IsNumber()
  public authorId?: number;
}
