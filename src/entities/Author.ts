import 'reflect-metadata'
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql'

@Entity()
@ObjectType('Author')
export class Author {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    authorId: number

    @Field(() => String)
    @Column()
    name: string
}
