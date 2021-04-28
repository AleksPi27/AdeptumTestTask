import 'reflect-metadata'
import {Resolver, Query, FieldResolver, Root, Mutation, Arg} from 'type-graphql'
import {Book} from '../entities/Book'
import {Inject, Service} from 'typedi'
import {BookService} from '../services/BookService'
import {Author} from '../entities/Author'
import {CreateBookInput} from '../inputs/CreateBookInput'

@Service()
@Resolver(() => Book)
export default class BookResolver {
    constructor(private bookService: BookService) {}

    @Query(() => [Book])
    async books(): Promise<Book[]> {
        return await this.bookService.getAllBooks()
    }

    @Mutation(() => Book)
    async createBook(@Arg('data') data: CreateBookInput) {
       return await this.bookService.createAndSaveBook(data)
    }

    @FieldResolver(() => Author)
    async author(@Root() book: Book) {
        return await this.bookService.getBooksAuthor(book)
    }
}
