import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Plate } from './plate.entity';

@Entity()
export class Place {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Plate, (plate) => plate.north)
  north: Plate[];

  @OneToMany(() => Plate, (plate) => plate.south)
  south: Plate[];

  @OneToMany(() => Plate, (plate) => plate.east)
  east: Plate[];

  @OneToMany(() => Plate, (plate) => plate.west)
  west: Plate[];
}
