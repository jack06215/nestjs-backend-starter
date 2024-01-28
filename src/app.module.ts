import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { HelloController } from './presentation/controllers/hello.controller';
import { SayHelloUseCase } from './usecase/say-hello-usecase';
import { Sample1Database } from './infrastructure/sample1-database/sample1-database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
      }),
    }),
    Sample1Database,
  ],
  controllers: [HelloController],
  providers: [SayHelloUseCase],
})
export class AppModule {}
