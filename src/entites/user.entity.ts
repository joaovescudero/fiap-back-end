import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';

import { UserResponsible } from './userResponsible.entity';
import { UserLocationHistory } from './userLocationHistory.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 255, unique: true })
  document: string;

  @Column()
  birthday: Date;

  @Column({ length: 255, unique: true })
  mobile: string;

  @Column({ default: true })
  isEnabled: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => UserResponsible, (userResponsible) => userResponsible.user)
  responsible: UserResponsible;

  @OneToMany(
    () => UserLocationHistory,
    (userLocationHistory) => userLocationHistory.user,
  )
  userLocationHistory: UserLocationHistory;
}
