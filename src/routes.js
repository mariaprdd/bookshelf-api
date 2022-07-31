/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const {
    menambahkanBukuHandler,
    menampilkanSemuaBukuHandler,
    menampilkanBukubyIdHandler,
    mengubahBukuByIdHandler,
    menghapusBukuByIdHandler,
  } = require('./handler');
  
  const routes = [
    {
      method: 'POST',
      path: '/books',
      handler: menambahkanBukuHandler,
    },
    {
      method: 'GET',
      path: '/books',
      handler: menampilkanSemuaBukuHandler,
    },
    {
      method: 'GET',
      path: '/books/{bookId}',
      handler: menampilkanBukubyIdHandler,
    },
    {
      method: 'PUT',
      path: '/books/{bookId}',
      handler: mengubahBukuByIdHandler,
    },
    {
      method: 'DELETE',
      path: '/books/{bookId}',
      handler: menghapusBukuByIdHandler,
    },
  ];
  
  module.exports = routes;
  // eslint-disable-next-line no-multiple-empty-lines
