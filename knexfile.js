// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './car-dealer.db3'
    },
    useNullAsDefault: true,

    migrations: {
      directory: './migrations'
    },

    seeds: {
      directory: './seeds'
    }
  }

};
