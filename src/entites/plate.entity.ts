import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Place } from './place.entity';
import { UserLocationHistory } from './userLocationHistory.entity';

@Entity()
export class Plate {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Place, (place) => place.north)
  north: number;

  @ManyToOne(() => Place, (place) => place.south)
  south: number;

  @ManyToOne(() => Place, (place) => place.east)
  east: number;

  @ManyToOne(() => Place, (place) => place.west)
  west: number;

  @Column({ length: 255, nullable: false })
  northType: string;

  @Column({ length: 255, nullable: false })
  southType: string;

  @Column({ length: 255, nullable: false })
  eastType: string;

  @Column({ length: 255, nullable: false })
  westType: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(
    () => UserLocationHistory,
    (userLocationHistory) => userLocationHistory.plate,
  )
  userLocationHistory: UserLocationHistory;
}
