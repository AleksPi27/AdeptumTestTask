import 'reflect-metadata'
import {InputType, Field, ID} from 'type-graphql'
import {Book} from '../entities/Book'

@InputType()
export class CreateBookInput implements Partial<Book> {
    @Field(() => String)
    name: string

    @Field(() => Number)
    pageCount: number

    @Field(() => Number)
    authorId: number
}
