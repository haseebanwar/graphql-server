const authorsResolvers = require('./authors');
const booksResolvers = require('./books');
const usersResolvers = require('./users');

const rootResolver = {};

const resolvers = [
  rootResolver,
  authorsResolvers,
  booksResolvers,
  usersResolvers,
];

module.exports = resolvers;
