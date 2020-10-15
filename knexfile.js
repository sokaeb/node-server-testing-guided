const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/hobbits";
// connection string provided by Heroku OR local
 // a connection string has all the info needed to connect to a db server
 // postgres : the username
 // @localhost : the address of my server
 // /hobbits : name of the db I want to use on the server


 // the knexfile defines the ways to connect to the db with this configuration object
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/hobbits.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },


  // use this configuration for Heroku
  // install postgres: npm i pg 
  production: {
    client: "pg", // targeting pg db
    connection: pgConnection, // connection string, being read from the env or define a default 
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
