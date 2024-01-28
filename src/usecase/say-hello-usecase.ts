import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/domain/user.repository';
import { SayHelloResponse } from 'src/presentation/responses/say-hello';

@Injectable()
export class SayHelloUseCase {
  constructor(private readonly userRepository: UserRepository) {}
  execute(): SayHelloResponse {
    const res = this.userRepository.allUsers();
    return {
      message: 'Hello World',
      result: res,
    };
  }
}
