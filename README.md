Для запуска требуется докер (на нем вертится база данных) и yarn (для установки зависимостей)

Далее для запуска проекта:
docker-compose up --build (поднятие докера)
yarn install (установка зависимостей)
yarn typeorm migration:run (запуск миграций для наполнения БД)
yarn start (старт бэка)

Сервер запустится на http://localhost:28080

После написания новых entities необходимо запустить генерацию новых миграций (в старые залезать категорически запрещено):
yarn typeorm migration:generate -n "Название миграции"


mutation createCountry {
  saveCountry(input: { name: "USA" }) {
    countryId
  }
}

mutation createCategory {
  saveCategory(input: {name: "Detective" }) {
    categoryId
  }
}


mutation createPublisher {
  savePublisher(input: {name: "Rose", countryId: 1, type: PRINTED }) {
    publisherId
  }
}

mutation createAuthor {
  saveAuthor(input: { firstName: "John", lastName: "Doe", birthDate: "1982-05-10" }) {
    authorId
  }
}


mutation createBook {
  saveBook(input: { authorId: 1, publisherId: 1, name: "Exodus 2", pageCount: 666, categoryId: 1 }) {
    bookId
  }
}

fragment bookInfo on GqBook {
  name,
  pageCount,

  category {
    name
  },
  publisher {
    name,
    country {
      name
    }
  },
}

fragment bookInfoWithAuthor on GqBook {
  ...bookInfo,
  author {
    firstName,
    lastName,
    birthDate
  }
}

query getBook {
  books(input: { booksIds: [8, 9] }) {
    ...bookInfo,
    author {
      firstName,
      lastName,
      birthDate
    }
  }
}

query getAuthorsBooks {
  author(input: { authorsIds: [1] }) {
    books {
      name,
      pageCount,
      category {
        name
      },
      publisher {
        name,
        country {
            name
        }
      },
    }
  }
}

query getPublishersBooks {
  publisher(input: { publishersIds: [11] }) {
    books {
      ...bookInfo,
      author {
        firstName,
        lastName,
        birthDate
      }
    }
  }
}

query getBooksFromCategory {
  category(input: { categoriesIds: 1 }) {
    name,
    books {
      ...bookInfoWithAuthor
    }
  }
}

query getPublishers {
  publisher(input: { publishersIds: [2] }) {
    name,
    country {
      name
    }
  }
}

mutation deleteBook {
  dropBook(input: {booksIds: [3]}) {
    bookId
  }
} 
