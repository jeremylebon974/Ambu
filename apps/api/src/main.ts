import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { startKeepAlive } from './keep-alive';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'https://holdingbsc.re',
      'https://www.holdingbsc.re',
      'https://ambu-zeta.vercel.app',
      'http://localhost:3000',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`🚀 Serveur démarré sur http://localhost:${port}`);
  startKeepAlive(port);
}

void bootstrap();
