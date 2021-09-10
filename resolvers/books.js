const { authors, books } = require('../data');

module.exports = {
  Query: {
    books: () => books,
    book: (parent, { id }) => {
      return books.find((book) => book.id === id);
    },
  },
  Book: {
    author: (book) => {
      return authors.find((author) => author.id === book.authorId);
    },
  },
  Mutation: {
    addBook: (parent, { newBook }) => {
      const book = {
        id: books.length + 1,
        name: newBook.name,
        authorId: newBook.authorId,
      };
      books.push(book);
      return book;
    },
  },
};
