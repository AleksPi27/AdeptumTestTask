import 'reflect-metadata'
import {EntityRepository, Repository} from 'typeorm'
import {Author} from '../entities/Author'
import {Service} from 'typedi'
import {CreateAuthorInput} from '../inputs/CreateAuthorInput'

@Service()
@EntityRepository(Author)
export class AuthorRepository extends Repository<Author> {

    public getById(authorId: number): Promise<Author> {
        return this.findOneOrFail(authorId)
        // return this
        //     .createQueryBuilder('author')
        //     .where('author.authorId = :authorId', { authorId })
        //     .getOneOrFail()
    }

    public createAndSave(data: CreateAuthorInput): Promise<Author> {
        return this.save(data)
    }
}
