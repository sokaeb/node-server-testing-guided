const knex = require("knex");

const config = require("../knexfile.js");

// const environment = 
// is picking the dev obj if there's not DB_ENV
// it's not defined on heroku, so the app is still picking dev (this is why we have to manually add it)
// if app relies on DB_ENV being on the environment (which is Heroku), we have to provide it on HEroku that points to production
const environment = process.env.DB_ENV || "development";

module.exports = knex(config[environment]);
