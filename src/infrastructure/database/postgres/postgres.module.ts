import { Logger, Module } from '@nestjs/common';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import PostEntity from './entities/post.entity';
import { UserEntity } from './entities/user.entity';
import { Migrator } from '@mikro-orm/migrations';
import { EntityGenerator } from '@mikro-orm/entity-generator';
import { SeedManager } from '@mikro-orm/seeder';

const logger = new Logger('MikroORM');

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        driver: PostgreSqlDriver,
        metadataProvider: TsMorphMetadataProvider,
        highlighter: new SqlHighlighter(),
        dbName: configService.get('POSTGRES_DB'),
        user: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        debug: true,
        logger: logger.log.bind(logger),
        entities: [PostEntity, UserEntity],
        baseDir: process.cwd(),
        forceUtcTimezone: true,
        autoLoadEntities: true,
        extensions: [Migrator, EntityGenerator, SeedManager],
      }),
    }),
  ],
})
export class Sample1Database { }
