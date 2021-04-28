query author {
  author(input: { authorsIds: [1] }) {
    authorId
    name
    books {
      bookId
      name
      pageCount
    }
  }
}

mutation createAuthor {
  createAuthor(input: { name: "test" }) {
    authorId
    name
  }
}

query books {
  books(input: { authorsIds: [1] }) {
    bookId
    name
    pageCount
    authorId
    author {
      name
    }
  }
}

mutation createBook {
  createBook(input: { name: "test", authorId: 1, pageCount: 10 }) {
    bookId
    name
    pageCount
    authorId
  }
}

