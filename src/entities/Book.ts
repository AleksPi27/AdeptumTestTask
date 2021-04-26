import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne} from 'typeorm'
import { Author } from './Author'
import { ObjectType, Field, ID } from 'type-graphql'

@Entity()
@ObjectType()
export class Book extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    bookId: number

    @Field(() => String)
    @Column()
    name: string

    @Field(() => Number)
    @Column()
    pageCount: number

    @Field(() => Number)
    @Column({ nullable: true })
    authorId: number

    @Field(() => Author)
    @ManyToOne(() => Author, author => author.authorId)
    @JoinColumn()
    author: Author
}
