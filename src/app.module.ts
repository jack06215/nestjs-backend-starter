import { Module } from '@nestjs/common';
import { HelloController } from './presentation/controllers/hello.controller';
import { SayHelloUseCase } from './usecase/say-hello-world-usecase';

@Module({
  imports: [],
  controllers: [HelloController],
  providers: [SayHelloUseCase],
})
export class AppModule {}
