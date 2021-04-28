import { buildSchema as gqBuildSchema } from "type-graphql";
import { container } from "tsyringe";
import { BookResolver, AuthorResolver } from "./schemas";

export const resolvers = [BookResolver, AuthorResolver] as const;

class ContainerType {
  get(cls: string) {
    return container.resolve(cls);
  }
}

export const buildSchema = () =>
  gqBuildSchema({
    resolvers: [BookResolver, AuthorResolver],
    container: new ContainerType(),
  });
