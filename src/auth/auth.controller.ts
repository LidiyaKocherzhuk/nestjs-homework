import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Tokens } from '@prisma/client';

import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './jwt-auth.guard';
import { LoginUserDto } from './dto/login-user.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Registration user' })
  @ApiResponse({
    schema: {
      example: {
        id: 19,
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphaG9ka2E4QGdtYWlsLmNvbSIsIm5hbWUiOiJMaWRpeWEiLCJpZCI6MjAsImlhdCI6MTY1NDg2MDA1OX0.QzctQ_aVrEoQQVVxx-AdAPI3yokcmyUEKCR9M1wBRIc',
        refreshToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphaG9ka2E4QGdtYWlsLmNvbSIsIm5hbWUiOiJMaWRpeWEiLCJpZCI6MjAsImlhdCI6MTY1NDg2MDA1OX0.NHxzrRWP9YKTwGjpQVk3Tc-PdHY-3nRtGrpe1fBoipE',
        userId: 20,
      },
    },
  })
  @HttpCode(HttpStatus.CREATED)
  @Post('/registration')
  registration(@Body() userDto: CreateUserDto): Promise<Tokens> {
    return this.authService.registration(userDto);
  }

  @ApiOperation({ summary: 'Login user' })
  @ApiResponse({
    schema: {
      example: {
        id: 19,
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphaG9ka2E4QGdtYWlsLmNvbSIsIm5hbWUiOiJMaWRpeWEiLCJpZCI6MjAsImlhdCI6MTY1NDg2MDA1OX0.QzctQ_aVrEoQQVVxx-AdAPI3yokcmyUEKCR9M1wBRIc',
        refreshToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphaG9ka2E4QGdtYWlsLmNvbSIsIm5hbWUiOiJMaWRpeWEiLCJpZCI6MjAsImlhdCI6MTY1NDg2MDA1OX0.NHxzrRWP9YKTwGjpQVk3Tc-PdHY-3nRtGrpe1fBoipE',
        userId: 20,
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Post('/login')
  login(@Body() loginUser: LoginUserDto): Promise<Tokens> {
    return this.authService.login(loginUser);
  }

  // @Post('/refresh')
  // refresh() {
  //   return 'refreshed';
  // }
}
