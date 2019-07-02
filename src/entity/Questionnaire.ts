import { Community } from './Community';
import { User } from './User'

import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne
} from "typeorm";

@Entity("questionnaire")
export class Questionnaire extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column("varchar", { length: 255 })
  questionId: number;

  @Column("boolean", { default: false })
  answer: boolean;

  @Column("varchar", { length: 255 })
  text_answer: string;

  @Column("varchar", { length: 255 })
  title: string;

  @Column("varchar", { length: 255 })
  description: string;

  @Column("varchar", { length: 255 })
  tribe: string;

  @ManyToOne(() => Questionnaire, questionnaire => questionnaire.user)
  user: User;

  @ManyToOne(() => Questionnaire, questionnaire => questionnaire.community)
  community: Community;
}