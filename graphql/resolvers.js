const { authors, books } = require('../data');

module.exports = {
  RootQuery: {
    books: () => books,
    book: (parent, { id }) => {
      return books.find((book) => book.id === id);
    },
    authors: () => authors,
    author: (parent, { id }) => {
      return authors.find((author) => author.id === id);
    },
  },
  Author: {
    books: (author) => {
      return books.filter((book) => book.authorId === author.id);
    },
  },
  Book: {
    author: (book) => {
      return authors.find((author) => author.id === book.authorId);
    },
  },
  RootMutation: {
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
