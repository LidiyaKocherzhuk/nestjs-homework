import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UserService } from '../user/user.service';
import { PrismaService } from '../core/prisma.service';
import { LoginUserDto } from './dto/login-user.dto';
import { config } from './config/config';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private prismaService: PrismaService,
  ) {}

  async registration(userDto: Prisma.UserCreateInput) {
    const { email, password } = userDto;
    const userFromDb = await this.userService.getByEmail(email);

    if (userFromDb) {
      throw new HttpException('user is already exist', HttpStatus.BAD_REQUEST);
    }

    const hashPass = await AuthService._hashPassword(password);
    const user = await this.userService.create({
      ...userDto,
      password: hashPass,
    });
    return this._generateTokenPair(user);
  }

  async login(loginUser: LoginUserDto) {
    const user = await this.isUserExist(loginUser);
    return this._generateTokenPair(user);
  }

  private static _hashPassword(password: string) {
    return bcrypt.hash(password, 7);
  }

  private async _generateTokenPair(user: User) {
    const { email, name, id } = user;

    const accessToken = this.jwtService.sign(
      { email, name, id },
      { secret: config.accessKey, expiresIn: '1m' },
    );
    const refreshToken = this.jwtService.sign(
      { email, name, id },
      { secret: config.refreshKey, expiresIn: '24h' },
    );

    return this.prismaService.tokens.create({
      data: { userId: id, accessToken, refreshToken },
    });
  }

  async isUserExist({ email, password }: LoginUserDto) {
    const user = await this.prismaService.user.findUnique({ where: { email } });
    const passUnique = await bcrypt.compare(password, user.password);

    if (user && passUnique) {
      return user;
    }
    throw new UnauthorizedException({ message: 'wrong email or password' });
  }
}
