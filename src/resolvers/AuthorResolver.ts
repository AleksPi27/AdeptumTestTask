import 'reflect-metadata'
import {Resolver, Query, Mutation, Arg, ResolverInterface} from 'type-graphql'
import {Service} from 'typedi'
import {Author} from '../entities/Author'
import {AuthorService} from '../services/AuthorService'
import {CreateAuthorInput} from '../inputs/CreateAuthorInput'

@Service()
@Resolver(() => Author)
export default class AuthorResolver {
    constructor(
        private authorService: AuthorService
    ) {}

    @Query(() => Author)
    author(@Arg('authorId') authorId: number): Promise<Author> {
        return this.authorService.getAuthor(authorId)
    }

    @Mutation(() => Author)
    createAuthor(@Arg('data') data: CreateAuthorInput): Promise<Author> {
        return this.authorService.createAndSaveAuthor(data)
    }
}
