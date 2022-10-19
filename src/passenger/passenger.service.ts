// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class PassengerService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getPassengers(_id: number) {
    console.log(`Inside passenger service at ${new Date().getTime()}`);

    // throw new BadRequestException(`method not implemented`);

    return `Passengers for flight ${_id}`;
  }
}
