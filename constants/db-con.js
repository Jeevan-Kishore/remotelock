/*
  File contains secrets, intentionally left here for development.
  Can be overridden during pre prod builds
*/
const DB_CONSTANTS = {
  user: 'me',
  host: 'localhost',
  database: 'remotelock',
  password: 'password',
  port: 5432,
};

module.exports = {
  DB_CONSTANTS,
};
