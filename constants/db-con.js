/*
File contains secrets, intentionally left here.
Can be overridden during the build step pre prod
*/
const DB_CONSTANTS = {
  user: "me",
  host: "localhost",
  database: "remotelock",
  password: "password",
  port: 5432
};

module.exports = {
  DB_CONSTANTS
};
