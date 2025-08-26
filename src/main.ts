import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for frontend integration
  app.enableCors();
  
  // Get port from environment or use 3000
  const port = process.env.PORT || 3000;
  
  await app.listen(port);
  console.log(`🚀 Application is running on port ${port}`);
}
bootstrap();
