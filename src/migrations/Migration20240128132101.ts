import { Migration } from '@mikro-orm/migrations';

export class Migration20240128132101 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "posts" ("id" serial primary key, "title" varchar(255) not null, "content" varchar(255) not null);',
    );

    this.addSql(
      'create table "users" ("id" uuid not null, "name" varchar(48) not null, "email" varchar(128) not null, "is_ready_to_play" boolean not null default true, "created_at" timestamptz not null, "updated_at" timestamptz not null, constraint "users_pkey" primary key ("id"));',
    );
    this.addSql('comment on column "users"."id" is \'User ID (UUID v4)\';');
    this.addSql('comment on column "users"."name" is \'User name\';');
    this.addSql('comment on column "users"."email" is \'User email\';');
    this.addSql('comment on column "users"."is_ready_to_play" is \'Flag: User ready to play now\';');
    this.addSql('comment on column "users"."created_at" is \'Entity create datetime\';');
    this.addSql('comment on column "users"."updated_at" is \'Entity update datetime\';');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "posts" cascade;');

    this.addSql('drop table if exists "users" cascade;');
  }
}
