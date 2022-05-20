const { poolObject } = require('./setup');

const getAllItems = (request, response) => {
  poolObject.query('SELECT * FROM items', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getUsers: getAllItems,
};
