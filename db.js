const {Pool} = require("pg");

const pool = new Pool({
    user: 'Ben Symons',
    database: 'auth',
    password: 'password',
    port: 5432,
    host: 'localhost',
  })

  module.exports = pool