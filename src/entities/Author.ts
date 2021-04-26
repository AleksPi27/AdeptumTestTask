import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql'

@Entity()
@ObjectType()
export class Author extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    authorId: number

    @Field(() => String)
    @Column()
    name: string
}
