import { Resolver, Query } from 'type-graphql'
import { Book } from '../entities/Book'

@Resolver()
export class BookResolver {
    @Query(() => [Book])
    books() {
        return Book.find()
    }
}
