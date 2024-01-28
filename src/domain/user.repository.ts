import { User } from './user.model';

export abstract class UserRepository {
  abstract allUsers(): User[];
}
