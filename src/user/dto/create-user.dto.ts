import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 30)
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsNumber()
  public age?: number;

  @IsString()
  public city?: string;

  @IsBoolean()
  public status?: boolean;
}
