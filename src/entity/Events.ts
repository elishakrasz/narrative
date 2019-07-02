import { Community } from './Community';
import { User } from './User'

import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne
} from "typeorm";

@Entity("events")
export class Events extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column("varchar", { length: 255 })
  title: string;

  @Column("varchar", { length: 255 })
  description: string;

  @Column("varchar", { length: 255 })
  city: string;

  @Column("varchar", { length: 255 })
  state: string;

  @Column("varchar", { length: 255 })
  country: number;

  @Column("varchar", { length: 255 })
  tribe: string;

  @ManyToOne(() => Events, events => events.user)
  user: User;

  @ManyToOne(() => Events, events => events.community)
  community: Community;
}