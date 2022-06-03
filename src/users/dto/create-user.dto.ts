export class CreateUserDto {
  public id: number;
  public username: string;
  public email: string;
  public age: number;
  readonly password: string;
}
