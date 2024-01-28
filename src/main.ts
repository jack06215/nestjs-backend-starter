import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configure api doc
  const config = new DocumentBuilder()
    .setTitle('Nestjs Clean Architecture Server')
    .addTag('Hello API', 'Say hello world and does nothing else')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(8080);
}
bootstrap();
