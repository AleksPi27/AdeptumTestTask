import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server';
import {buildSchema} from 'type-graphql'
import {BookResolver} from './resolvers/BookResolver'
import {SERVER_PORT} from './common/constants'


async function main() {
    const connection = await createConnection()
    const schema = await buildSchema({
        resolvers: [BookResolver]
    });
    const server = new ApolloServer({ schema })
    await server.listen(SERVER_PORT)
}

main()
    .then(() => console.log(`Server has started on http://localhost:${SERVER_PORT}`))
    .catch(e => console.error(`Server error: ${e}`))
