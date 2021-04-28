import 'reflect-metadata'
import {Author} from '../entities/Author'
import {Field, InputType} from 'type-graphql'

@InputType()
export class CreateAuthorInput implements Partial<Author> {

    @Field(() => String)
    name: string
}
