import { CanActivate, ExecutionContext } from '@nestjs/common';

export class RouteGuard implements CanActivate {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  canActivate(_context: ExecutionContext): boolean {
    console.log(`Inside route guard at ${new Date().getTime()}`);
    return true;
  }
}
