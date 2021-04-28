import { AuthorEntity, BookEntity } from "../../core/entities";
import { NullableDataLoader } from "./utils";
import { booksForAuthors } from "./books.dataloader";
import { author } from "./authors.dataloader";

export interface DataLoadersContext {
  dataLoaders: AppDataLoaders;
}

interface AppDataLoaders {
  author: NullableDataLoader<number, AuthorEntity | null>;
  booksForAuthors: NullableDataLoader<number, BookEntity[] | null>;
}

export function createDataLoaders(): AppDataLoaders {
  return {
    author: new NullableDataLoader(author),
    booksForAuthors: new NullableDataLoader(booksForAuthors),
  };
}
