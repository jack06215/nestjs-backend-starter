import { User } from "src/domain/user.model";

export class SayHelloResponse {
  message: string;
  result: Array<User>;
}
