import 'reflect-metadata'
import { Service } from 'typedi'
import {Book} from '../entities/Book'
import {BookRepository} from '../repositories/BookRepository'
import {AuthorRepository} from '../repositories/AuthorRepository'
import {CreateBookInput} from '../inputs/CreateBookInput'
import {getCustomRepository} from 'typeorm'

@Service()
export class BookService {
    private books: BookRepository
    private authors: AuthorRepository

    constructor() {
        this.books = getCustomRepository(BookRepository);
        this.authors = getCustomRepository(AuthorRepository)
    }

    async getAllBooks() {
        return await this.books.getAll()
    }

    async getBooksAuthor(book: Book) {
        return await this.authors.getById(book.authorId)
    }

    async createAndSaveBook(data: CreateBookInput) {
        const author = this.authors.getById(data.authorId)
        if (!author) throw Error('Unknown authorId!')

        return await this.books.createAndSave(data);
    }
}
