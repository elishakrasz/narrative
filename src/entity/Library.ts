import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany
} from "typeorm"
import { User } from './User'
import { Community } from './Community'

@Entity("library")
export class Library extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", { length: 100} )
    name: string;

    @Column("varchar", { length: 100} )
    filename: string;

    @Column("varchar", { nullable: true} )
    mimetype: string;

    @Column("varchar", { nullable: true} )
    encoding: string;

    @Column("varchar")
    description: string;

    @Column("varchar")
    fileUrl: string;

    @OneToMany(() => User, user => user.library)
    user: User;

    @OneToMany(() => Community, community => community.library)
    community: Community;
}