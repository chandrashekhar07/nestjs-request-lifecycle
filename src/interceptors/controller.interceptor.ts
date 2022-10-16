import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ControllerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(
      `Inside controller interceptor (pre controller) at ${new Date().getTime()}`,
    );

    return next
      .handle()
      .pipe(
        tap(() =>
          console.log(
            `Inside controller interceptor (post controller) at ${new Date().getTime()}`,
          ),
        ),
      );
  }
}
