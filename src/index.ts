import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server';
import {buildSchema} from 'type-graphql'
import {SERVER_PORT} from './common/constants'
import {resolvers} from './resolvers/resolvers'
import {Container} from 'typedi'

async function main() {
    await createConnection()
    const schema = await buildSchema({
        resolvers,
        container: Container
    });
    const server = new ApolloServer({
        schema,
        playground: true
    })
    await server.listen(SERVER_PORT)
}

main()
    .then(() => console.log(`Server has started on http://localhost:${SERVER_PORT}`))
    .catch(e => console.error(e))
