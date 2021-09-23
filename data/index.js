const authors = [
  { id: 1, name: 'J. K. Rowling' },
  { id: 2, name: 'Winston Groom' },
  { id: 3, name: 'Brent Weeks' },
];

const books = [
  { id: 1, title: 'Harry Potter and the Chamber of Secrets', authorId: 1 },
  { id: 2, title: 'Harry Potter and the Prisoner of Azkaban', authorId: 1 },
  { id: 3, title: 'Harry Potter and the Goblet of Fire', authorId: 1 },
  { id: 4, title: 'Shrouds of glory', authorId: 2 },
  { id: 5, title: 'Better Times Than These', authorId: 2 },
  { id: 6, title: 'Forrest Gump', authorId: 2 },
  { id: 7, title: 'The Way of Shadows', authorId: 3 },
  { id: 8, title: 'Beyond the Shadows', authorId: 3 },
];

exports.authors = authors;
exports.books = books;
