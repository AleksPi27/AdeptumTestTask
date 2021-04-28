import 'reflect-metadata'
import { Service } from 'typedi'
import {CreateAuthorInput} from '../inputs/CreateAuthorInput'
import {AuthorRepository} from '../repositories/AuthorRepository'
import {Author} from '../entities/Author'
import {getCustomRepository} from 'typeorm'

@Service()
export class AuthorService {
    private authorRepository: AuthorRepository

    constructor() {
        this.authorRepository = getCustomRepository(AuthorRepository)
    }

    getAuthor(authorId: number): Promise<Author> {
        return this.authorRepository.getById(authorId)
    }

    public createAndSaveAuthor(data: CreateAuthorInput): Promise<Author> {
        return this.authorRepository.createAndSave(data)
    }
}
