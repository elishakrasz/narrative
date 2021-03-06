import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    OneToMany
} from "typeorm"
import { User } from './User'
import { Library } from "./Library";

@Entity("community")
export class Community extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", { length: 100} )
    name: string;

    @Column("varchar", { length: 100} )
    country: string;

    @Column("varchar", { nullable: true} )
    pictureUrl: string;

    @Column("varchar", { nullable: true} )
    avatarUrl: string;

    @Column("varchar")
    description: string;

    @OneToOne(() => User, user => user.community)
    user: User;

    @OneToMany(() => Library, library => library.community)
    library: Library[]
}