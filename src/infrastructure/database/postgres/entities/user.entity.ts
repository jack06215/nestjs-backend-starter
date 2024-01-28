import { BaseEntity, Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from '../../../../domain/user.model';
import { v4 as uuidv4 } from 'uuid';

@Entity({ tableName: 'users' })
export class UserEntity extends BaseEntity {
  /**
   * User ID (UUID v4)
   *
   * @example '3422b448-2460-4fd2-9183-8000de6f8343'
   */
  @PrimaryKey({
    type: 'uuid',
    onCreate: () => uuidv4(),
    nullable: false,
    comment: 'User ID (UUID v4)',
  })
  id: string;

  /**
   * User name
   */
  @Property({ length: 48, nullable: false, comment: 'User name' })
  name: string;

  /**
   * User email
   */
  @Property({ length: 128, nullable: false, comment: 'User email' })
  email: string;

  /**
   * Flag: User ready to play now
   *
   * @example true
   */
  @Property({
    name: 'is_ready_to_play',
    default: true,
    nullable: false,
    comment: 'Flag: User ready to play now',
  })
  isReadyToPlay: boolean;

  /**
   * Entity create datetime
   *
   * @example '1980-12-08T12:01:01Z'
   */
  @Property({
    onCreate: () => new Date(),
    name: 'created_at',
    nullable: false,
    comment: 'Entity create datetime',
  })
  createdAt: Date;

  /**
   * Entity update datetime
   *
   * @example '1980-12-08T12:01:01Z'
   */
  @Property({
    name: 'updated_at',
    onCreate: () => new Date(),
    onUpdate: () => new Date(),
    nullable: false,
    comment: 'Entity update datetime',
  })
  updatedAt: Date;

  toDomainEntity(): User {
    const entity = new User();
    return Object.assign(entity, this);
  }

  static fromDomainEntity(entity: User): UserEntity {
    const entityOrm = new UserEntity();
    return Object.assign(entityOrm, entity);
  }
}
