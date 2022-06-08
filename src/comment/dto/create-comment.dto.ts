import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({ example: 'Katya', description: 'name' })
  @IsString()
  @Length(2, 30)
  @IsNotEmpty()
  public name: string;

  @ApiProperty({
    example:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    description: 'text',
  })
  @IsString()
  @IsNotEmpty()
  public text: string;

  @ApiProperty({ example: 1, description: 'postId' })
  @IsNumber()
  public postId: number;
}
