import { Controller, Get } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { SayHelloUseCase } from 'src/usecase/say-hello-world-usecase';

@ApiTags('Hello')
@Controller()
export class HelloController {
  constructor(private readonly sayHelloUseCase: SayHelloUseCase) { }

  @ApiCreatedResponse({
    description: 'Return Hello World',
  })
  @Get()
  getHello(): string {
    return this.sayHelloUseCase.execute();
  }
}
