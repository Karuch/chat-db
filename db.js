const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "1598",
  host: "localhost",
  port: 5432,
  database: "messages"
});

module.exports = pool;