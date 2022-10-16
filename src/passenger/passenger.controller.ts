/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Query,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ControllerExceptionFilter } from '../exception-filters/controller.exception-filter';
import { RouteExceptionFilter } from '../exception-filters/route.exception-filter';
import { ControllerGuard } from '../guards';
import { RouteGuard } from '../guards/route.guard';
import { ControllerInterceptor } from '../interceptors/controller.interceptor';
import { RouteInterceptor } from '../interceptors/route.interceptor';
import { ControllerPipe } from '../pipes/controller.pipe';
import { RouteParameterPipe } from '../pipes/route-parameter.pipe';
import { RoutePipe } from '../pipes/route.pipe';
import { PassengerService } from './passenger.service';

// @UseFilters(ControllerExceptionFilter)
@UseInterceptors(ControllerInterceptor)
@UseGuards(ControllerGuard)
@UsePipes(ControllerPipe)
@ApiTags('Passenger')
@Controller('passenger')
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  // @UseFilters(RouteExceptionFilter)
  @UsePipes(RoutePipe)
  @UseGuards(RouteGuard)
  @UseInterceptors(RouteInterceptor)
  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getPassenger(@Query('id', new RouteParameterPipe()) _id: number) {
    console.log(`Inside getPassenger() at ${new Date().getTime()}`);

    return this.passengerService.getPassengers(_id);
  }

  @Post()
  postPassenger() {
    console.log(`Inside postPassenger() at ${new Date().getTime()}`);
  }
}
