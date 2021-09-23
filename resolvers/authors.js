const { authors, books } = require('../data');

const authorsResolvers = {
  Query: {
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
};

module.exports = authorsResolvers;
