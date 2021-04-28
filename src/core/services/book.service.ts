import "reflect-metadata";
import { singleton } from "tsyringe";
import { getRepository } from "typeorm";
import { BookEntity, BookFields } from "../entities";
import { AuthorService } from "./author.service";
import { BooksQB, FindBooksByParams } from "./query-builders";

@singleton()
export class BookService {
  private bookRepository = getRepository(BookEntity);

  constructor(private authorService: AuthorService) {}

  booksQB() {
    return new BooksQB();
  }

  async findBy(params: FindBooksByParams) {
    return await this.booksQB().findBy(params).qb.getMany();
  }

  async save(params: BookFields) {
    const author = this.authorService.findOneBy({
      authorsIds: [params.authorId],
    });

    if (!author) {
      throw Error("Unknown authorId!");
    }

    return await this.bookRepository.save(params);
  }
}
