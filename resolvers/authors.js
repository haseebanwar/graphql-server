const { composeResolvers } = require('@graphql-tools/resolvers-composition');
const { authors, books } = require('../data');
const { isAuthenticated } = require('../utils/auth');

const authorsResolvers = {
  Query: {
    authors: () => {
      return authors;
    },
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

const resolversComposition = {
  '*.*': [isAuthenticated],
};

module.exports = composeResolvers(authorsResolvers, resolversComposition);
