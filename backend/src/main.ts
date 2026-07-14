import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

require('../prisma.config.js');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Habilitar peticiones desde la web
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
