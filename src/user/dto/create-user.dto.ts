import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Lidiya', description: 'name' })
  @IsString()
  @Length(2, 30)
  @IsNotEmpty()
  public name: string;

  @ApiProperty({ example: 'user@gmail.com', description: 'email' })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @ApiProperty({ example: 'user123Q*', description: 'password' })
  @IsString()
  @IsNotEmpty()
  @Length(8)
  readonly password: string;

  @ApiProperty({ example: 20, description: 'age' })
  @IsNumber()
  public age?: number;

  @ApiProperty({ example: 'Lviv', description: 'city' })
  @IsString()
  public city?: string;

  @IsBoolean()
  public status?: boolean;
}
