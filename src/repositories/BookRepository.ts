import 'reflect-metadata'
import {AbstractRepository, EntityRepository} from 'typeorm'
import {Book} from '../entities/Book'
import {Service} from 'typedi'
import {CreateBookInput} from '../inputs/CreateBookInput'

@Service()
@EntityRepository(Book)
export class BookRepository extends AbstractRepository<Book> {
    public getAll(): Promise<Book[]> {
        return this.repository.find()
    }

    public async createAndSave(data: CreateBookInput) {
        const book = this.repository.create(data)
        return await this.repository.save(book)
    }
}
