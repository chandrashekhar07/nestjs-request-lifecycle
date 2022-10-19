import { NestFactory } from '@nestjs/core';
import { globalMiddleWare } from './middlewares';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { GlobalGuard } from './guards';
import { GlobalInterceptor } from './interceptors/global.interceptor';
import { GlobalPipe } from './pipes/global.pipe';
import { GlobalExceptionFilter } from './exception-filters/global.exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(globalMiddleWare);
  app.useGlobalGuards(new GlobalGuard());
  app.useGlobalInterceptors(new GlobalInterceptor());
  app.useGlobalPipes(new GlobalPipe());
  app.useGlobalFilters(new GlobalExceptionFilter());

  createSwaggerApp(app);

  await app.listen(4000);
}
bootstrap();

function createSwaggerApp(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Request Lifecycle')
    .setDescription('Request Lifecycle Description')
    .setVersion('1.0')
    .addTag('request-lifecycle')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
}
