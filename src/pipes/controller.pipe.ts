import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ControllerPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: any, _metadata: ArgumentMetadata) {
    console.log(`Inside controller pipe at ${new Date().getTime()}`);

    return value;
  }
}
