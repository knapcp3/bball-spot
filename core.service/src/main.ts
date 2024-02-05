import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// create game service
// game schema
// next app with list of games
// add codegenerator
// docker compose with db

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
