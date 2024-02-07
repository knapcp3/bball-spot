import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// create game service
// game schema
// next app with list of games
// add codegenerator
// docker compose with db

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (process.env.NODE_ENV !== 'production') {
    app.enableCors();
  }

  await app.listen(3333);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
