import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: [
        'http://localhost:3000',
        'https://parcel-delivery-client-three.vercel.app',
      ],
      credentials: true,
    },
  });
  await app.listen(process.env.PORT ?? 1000);
}
bootstrap();
