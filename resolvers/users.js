const users = require('../data/users');

module.exports = {
  Query: {
    users: () => users,
    user: (parent, { id }) => {
      return users.find((user) => user.id === id);
    },
  },
};
