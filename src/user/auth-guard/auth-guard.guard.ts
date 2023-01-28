import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuardGuard implements CanActivate {
  constructor(private reflector: Reflector) {
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const jwt = this.reflector.get<string>('jwt', context.getHandler());
    if (!jwt) return false;
    const request = context.switchToHttp().getRequest();


    return true;
  }
}
