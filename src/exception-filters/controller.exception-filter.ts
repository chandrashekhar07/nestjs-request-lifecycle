import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';

@Catch()
export class ControllerExceptionFilter implements ExceptionFilter {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log(
      `Inside Controller Exception Filter at ${new Date().getTime()}`,
    );

    throw exception;
  }
}
