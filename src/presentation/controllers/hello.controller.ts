import { Controller, Get } from '@nestjs/common';
import { SayHelloUseCase } from 'src/usecase/say-hello-world-usecase';

@Controller()
export class HelloController {
  constructor(private readonly sayHelloUseCase: SayHelloUseCase) {}

  @Get()
  getHello(): string {
    return this.sayHelloUseCase.execute();
  }
}
