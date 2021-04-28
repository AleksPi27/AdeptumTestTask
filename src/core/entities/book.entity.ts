import "reflect-metadata";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { ObjectType, Field, ID, Int, InputType } from "type-graphql";
import { AuthorEntity } from "./author.entity";

@InputType({ isAbstract: true })
@ObjectType({ isAbstract: true })
export class BookFields {
  @Field({
    description: "Имя книги",
  })
  @Column("varchar", {
    comment: "Имя книги",
  })
  name: string;

  @Field(() => Int, {
    description: "Количество страниц",
  })
  @Column("int", {
    unsigned: true,
    comment: "Количество страниц",
  })
  pageCount: number;

  @Field(() => ID, {
    description: "ID автора",
  })
  @Column("int", {
    unsigned: true,
    comment: "ID автора",
  })
  authorId: number;
}

@Entity({ name: "books" })
@ObjectType({ isAbstract: true })
export class BookEntity extends BookFields {
  @Field(() => ID, {
    description: "Id книги",
  })
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  bookId: number;

  @ManyToOne(() => AuthorEntity)
  @JoinColumn({
    name: "authorId",
  })
  author: AuthorEntity;
}
