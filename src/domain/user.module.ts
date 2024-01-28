import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UserEntity } from 'src/infrastructure/sample1-database/entities/user.entity';
import { UserRepository } from './user.repository';
import { UserMikroOrmRepository } from 'src/infrastructure/sample1-database/repositries/user.mikroorm.repository';
import { Module } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { HelloController } from 'src/presentation/controllers/hello.controller';
import { SayHelloUseCase } from 'src/usecase/say-hello-usecase';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [UserEntity] })],
  controllers: [HelloController],
  providers: [
    {
      provide: UserRepository,
      useFactory: (em) => new UserMikroOrmRepository(em.getRepository(UserEntity)),
      inject: [EntityManager],
    },
    SayHelloUseCase,
  ],
  exports: [],
})
export class UserModule {}
