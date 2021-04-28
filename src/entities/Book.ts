import 'reflect-metadata'
import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne} from 'typeorm'
import { Author } from './Author'
import {ObjectType, Field, ID, Int} from 'type-graphql'

@Entity()
@ObjectType('Book')
export class Book {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    bookId: number

    @Field(() => String)
    @Column()
    name: string

    @Field(() => Int)
    @Column()
    pageCount: number

    @Field(() => Int)
    @Column({ nullable: true })
    authorId: number

    @Field(type => Author)
    @ManyToOne(() => Author, author => author.authorId)
    @JoinColumn()
    author: Author
}
