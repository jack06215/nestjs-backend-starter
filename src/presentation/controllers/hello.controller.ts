import { Controller, Get } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { SayHelloUseCase } from 'src/usecase/say-hello-usecase';
import { SayHelloResponse } from '../responses/say-hello';

@ApiTags('Hello')
@Controller()
export class HelloController {
  constructor(private readonly sayHelloUseCase: SayHelloUseCase) {}

  @ApiCreatedResponse({
    description: 'Return Hello World',
  })
  @Get()
  getHello(): SayHelloResponse {
    return this.sayHelloUseCase.execute();
  }
}
