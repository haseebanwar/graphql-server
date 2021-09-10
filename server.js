const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadSchemaSync } = require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const graphqlResolver = require('./resolvers');

const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

const schema = makeExecutableSchema({
  typeDefs: loadSchemaSync('schemas/**/*.graphql', {
    loaders: [new GraphQLFileLoader()],
  }),
  resolvers: graphqlResolver,
});

axios.get('https://jsonplaceholder.typicode.com/users').then(({ data }) => {
  const a = data.map(({ id, name, email, phone, website }, idx) => {
    if (idx <= 4) {
      return {
        id,
        name,
        email,
        phone,
        website,
      };
    }
    return null;
  });

  console.log(`a`, a);
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
