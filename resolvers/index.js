const authorsResolvers = require('./authors');
const booksResolvers = require('./books');

const rootResolver = {};

const resolvers = [rootResolver, authorsResolvers, booksResolvers];

module.exports = resolvers;
