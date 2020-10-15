const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/hobbits";
// connection string provided by Heroku OR local
 // a connection string has all the info needed to connect to a db server
 // postgres : the username
 // @localhost : the address of my server
 // /hobbits : name of the db I want to use on the server

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
    client: "pg",
    connection: pgConnection, // connection string
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
