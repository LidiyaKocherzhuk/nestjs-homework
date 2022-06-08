import { IsString, Length } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCommentDto {
  @ApiProperty({ example: 'Bohdan', description: 'name' })
  @IsString()
  @Length(2, 30)
  public name: string;

  @ApiProperty({ example: 'Bohdan is fine', description: 'text' })
  @IsString()
  public text: string;
}
