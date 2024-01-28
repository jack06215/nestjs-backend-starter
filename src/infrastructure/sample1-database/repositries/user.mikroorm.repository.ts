import { EntityRepository } from '@mikro-orm/postgresql';
import { User } from 'src/domain/user.model';
import { UserRepository } from 'src/domain/user.repository';
import { UserEntity } from '../entities/user.entity';
import { InjectRepository } from '@mikro-orm/nestjs';

export class UserMikroOrmRepository extends UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly ormRepo: EntityRepository<UserEntity>,
  ) {
    super();
  }
  allUsers(): User[] {
    return [
      {
        id: '1',
        email: 'johnsmith@example.com',
      },
    ];
  }
}
