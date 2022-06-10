import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

import { config } from './config/config';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    try {
      const token = request.headers.authorization;

      if (!token) {
        throw new UnauthorizedException({ message: 'user is not auth' });
      }

      const user = this.jwtService.verify(token, { secret: config.accessKey });
      request.user = user;
      console.log(user);

      return true;
    } catch (err) {
      console.log(err);
      throw new UnauthorizedException({ message: 'user is not auth' });
    }
  }
}
