import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(
      `Inside global interceptor (pre controller) at ${new Date().getTime()}`,
    );

    return next.handle().pipe(
      map((data) => {
        console.log(
          `Inside global interceptor (post controller) at ${new Date().getTime()}`,
        );

        return {
          data,
        };
      }),
    );
  }
}
