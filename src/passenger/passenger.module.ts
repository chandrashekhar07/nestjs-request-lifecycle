import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PassengerService } from './passenger.service';
import { PassengerController } from './passenger.controller';
import { ModuleMiddleware } from '../middlewares';

@Module({
  controllers: [PassengerController],
  providers: [PassengerService],
})
export class PassengerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ModuleMiddleware).forRoutes(PassengerController);
  }
}
