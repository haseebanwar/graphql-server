const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const server = express();
const PORT = process.env.PORT || 5000;

const schema = makeExecutableSchema({
  typeDefs: `type Query {
    _empty: String
  }`,
  resolvers: {},
});

server.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

server.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
