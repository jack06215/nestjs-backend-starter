import { Injectable } from '@nestjs/common';
import { SayHelloResponseModel } from 'src/presentation/models/say-hello';

@Injectable()
export class SayHelloUseCase {
  constructor() {}
  execute(): SayHelloResponseModel {
    return {
      message: 'Hello World',
    };
  }
}
