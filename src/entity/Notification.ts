import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    ManyToOne,
    Column
} from "typeorm"
import { User } from './User'

@Entity("notifications")
export class Notification extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text")
    label: string

    @Column("varchar")
    notification: string

    @ManyToOne(() => User)
    user: User;
}