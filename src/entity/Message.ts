import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    ManyToOne,
    Column
} from "typeorm"
import { User } from './User'
import { Community } from './Community'

@Entity("messages")
export class Message extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text")
    text: string

    @ManyToOne(() => User)
    user: User;

    @ManyToOne(() => Community)
    community: Community;
}