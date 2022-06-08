import { IsString, Length } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @Length(2, 30)
  public name: string;

  @IsString()
  @Length(8)
  readonly password: string;

  @IsString()
  public city: string;
}
