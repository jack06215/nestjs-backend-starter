import { Injectable } from '@nestjs/common';
import { SayHelloResponse } from 'src/presentation/responses/say-hello';

@Injectable()
export class SayHelloUseCase {
  constructor() {}
  execute(): SayHelloResponse {
    return {
      message: 'Hello World',
    };
  }
}
