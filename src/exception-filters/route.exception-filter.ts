import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';

@Catch()
export class RouteExceptionFilter implements ExceptionFilter {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log(`Inside route exception filter at ${new Date().getTime()}`);

    throw exception;
  }
}
