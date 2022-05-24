const { poolObject } = require('./setup');

const getByName = (request, response) => {
  const { name } = request.params;
  poolObject.query(
    'SELECT * FROM items WHERE name ilike $1',
    [`%${name}%`],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    },
  );
};

module.exports = {
  getByName,
};
