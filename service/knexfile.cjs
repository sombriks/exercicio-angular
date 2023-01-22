// Update with your config settings.
const sqlite = {
    client: 'better-sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: './dev.sqlite3',
    },
    migrations: {
        loadExtensions: [".mjs"],
    },
}
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {...sqlite},
    test: {
        ...sqlite,
        connection: {
            filename: ':memory:',
        }
    },
    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            loadExtensions: [".mjs"],
            tableName: 'knex_migrations'
        }
    }
};
