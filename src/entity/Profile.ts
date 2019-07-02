import { Community } from './Community';
import { User } from './User'

import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToOne,
} from "typeorm";

@Entity("profile")
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column("varchar", { length: 255 })
  gender: number;

  @Column("varchar", { length: 255 })
  age: number;

  @Column("varchar", { length: 255 })
  city: string;

  @Column("varchar", { length: 255 })
  state: string;

  @Column("varchar", { length: 255 })
  region: number;

  @Column("double precision")
  longitude: number;

  @Column("double precision")
  latitude: number;

  @Column("varchar") 
  education: number;

  @Column("varchar")
  profession: string;

  @Column("varchar")
  avatar: string;

  @Column("varchar")
  language: number;

  @Column("varchar")
  photoUrl: string;

  @Column("varchar")
  phone: number;

  @OneToOne(() => Profile, profile => profile.community)
  community: Community;

  @OneToOne(() => Profile, profile => profile.user)
  user: User;
}
