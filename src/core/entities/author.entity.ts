import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ObjectType, Field, ID, InputType } from "type-graphql";
import { BookEntity } from "./book.entity";

@InputType({ isAbstract: true })
@ObjectType({ isAbstract: true })
export class AuthorFields {
  @Field({
    description: "Имя автора",
  })
  @Column("varchar", {
    comment: "Имя автора",
  })
  name: string;
}

@Entity({ name: "authors" })
@ObjectType({ isAbstract: true })
export class AuthorEntity extends AuthorFields {
  @Field(() => ID, {
    description: "Id автора",
  })
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  authorId: number;

  @OneToMany(() => BookEntity, (books) => books.author)
  books?: BookEntity[];
}
