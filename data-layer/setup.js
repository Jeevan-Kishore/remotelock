const { DB_CONSTANTS } = require("../constants/db-con");
const Pool = require("pg").Pool;
const poolObject = new Pool(DB_CONSTANTS);

module.exports = {
  poolObject
};
