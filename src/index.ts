import "reflect-metadata";
import { createConnection } from "typeorm";
import { SERVER_PORT } from "./common/constants";
import { initGraphQLServer } from "./graphql-server";

async function main() {
  await createConnection();

  const graphqlServer = await initGraphQLServer();

  await graphqlServer.listen(SERVER_PORT);
}

main()
  .then(() =>
    console.log(`Server has started on http://localhost:${SERVER_PORT}`)
  )
  .catch((e) => console.error(e));
