import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne
} from "typeorm"
import { User } from './User'

@Entity("community")
export class Community extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", { length: 100} )
    name: string;

    @Column("varchar", { length: 100} )
    country: string;

    @Column("text", { nullable: true} )
    pictureUrl: string;

    @Column("varchar")
    description: string;
    
    @Column("uuid")
    userId: string;

    @OneToOne(() => User, user => user.community)
    user: User;
}