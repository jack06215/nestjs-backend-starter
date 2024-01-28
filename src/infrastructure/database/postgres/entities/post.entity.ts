import { Entity, Property, PrimaryKey } from '@mikro-orm/core';

@Entity({ tableName: 'posts' })
class PostEntity {
  @PrimaryKey()
  id: number;

  @Property()
  title: string;

  @Property()
  content: string;
}

export default PostEntity;
