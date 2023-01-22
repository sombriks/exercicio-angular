// Update with your config settings.
const basic = {
    client: 'better-sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: './dev.sqlite3',
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        loadExtensions: [".mjs"],
    },
}
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {...basic},
    test: {
        ...basic,
        connection: {
            filename: ':memory:',
        }
    },
    production: {
        ...basic,
        client: 'postgresql',
        connection: process.env.PG_CONNECTION_URL
    }
};
