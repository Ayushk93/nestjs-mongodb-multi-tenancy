import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const queue = require('express-queue');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(queue({ activeLimit: 3, queuedLimit: -1 }));
  await app.listen(3000);
}
bootstrap();
