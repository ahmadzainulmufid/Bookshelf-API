const { addBooksHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    updateBooksByIdHandler,
    deleteBooksByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',  // Perhatikan parameter id yang digunakan disini adalah bookId
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',  // Perhatikan parameter id yang digunakan disini adalah bookId
    handler: updateBooksByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',  // Perhatikan parameter id yang digunakan disini adalah bookId
    handler: deleteBooksByIdHandler,
  },
];

module.exports = routes;
