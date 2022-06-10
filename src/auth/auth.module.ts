import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PrismaService } from '../core/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtService, PrismaService],
  imports: [UserModule],
})
export class AuthModule {}
