import {registerEnumType} from 'type-graphql'

/* todo Странное решение выноса в отдельный файл, т.к. в runtime BookType undefined, если использовать его, импортируя из book.entity */
export enum BookType {
    ELECTRONIC,
    PRINTED
}

registerEnumType(BookType, {
    name: 'GqBookType',
    description: 'Тип книги',
});
