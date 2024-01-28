import { Injectable } from '@nestjs/common';

@Injectable()
export class SayHelloUseCase {
  constructor() {}
  execute(): string {
    return 'Hello World!';
  }
}
