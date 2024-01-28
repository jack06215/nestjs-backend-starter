import { EntityRepository } from '@mikro-orm/postgresql';
import { User } from 'src/domain/user.model';
import { UserRepository } from 'src/domain/user.repository';
import { InjectRepository } from '@mikro-orm/nestjs';
import { UserEntity } from '../database/postgres/entities/user.entity';

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
