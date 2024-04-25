import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

const logger = new Logger("main");

const microserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: 'localhost',
    port: 9090,
  },
} ;

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  app.listen();
  logger.log("microservice is listening... ");
}
bootstrap();
