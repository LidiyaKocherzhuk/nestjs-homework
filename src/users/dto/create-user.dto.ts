export class CreateUserDto {
  public id: number;
  public username: string;
  public email: string;
  public age: number;
  readonly password: string;
}

export class UpdateUserDto {
  public email: string;
  readonly password: string;
}
