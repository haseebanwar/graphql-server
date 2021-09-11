const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadSchemaSync } = require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const graphqlResolver = require('./resolvers');

const app = express();
const PORT = process.env.PORT || 5000;

const schema = makeExecutableSchema({
  typeDefs: loadSchemaSync('schemas/**/*.graphql', {
    loaders: [new GraphQLFileLoader()],
  }),
  resolvers: graphqlResolver,
});

app.use((req, res, next) => {
  const token = req.header('Authorization');

  // verify token

  // bind user to req

  // add property to req object
  req.isAuthenticated = token;
  next();
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
