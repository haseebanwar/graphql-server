const { authors, books } = require('../data');

const booksResolvers = {
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
    createBook: (parent, { newBook }) => {
      const createdBook = { id: books.length + 1, ...newBook };
      books.push(createdBook);
      return createdBook;
    },
  },
};

module.exports = booksResolvers;
