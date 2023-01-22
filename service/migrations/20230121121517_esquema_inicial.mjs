/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
    return knex.schema
        .createTable("perfis", tb => {
            tb.increments("id");
            tb.string("nome").notNullable();
            tb.timestamps(true, true);
        })
        .createTable("pessoas", tb => {
            tb.increments("id");
            tb.string("nome").notNullable();
            tb.string("senha").notNullable();
            tb.integer("perfis_id").notNullable()
                .references("perfis.id").onDelete("cascade");
            tb.timestamps(true, true);
        })
        .createTable("setores", tb => {
            tb.increments("id");
            tb.string("nome").notNullable();
            tb.timestamps(true, true);
        })
        .createTable("varas", tb => {
            tb.increments("id");
            tb.integer("setores_id").notNullable()
                .references("setores.id").onDelete("cascade");
            tb.string("nome").notNullable();
            tb.timestamps(true, true);
        })
        .createTable("gabinetes", tb => {
            tb.increments("id");
            tb.integer("varas_id").notNullable()
                .references("varas.id").onDelete("cascade");
            tb.string("nome").notNullable();
            tb.timestamps(true, true);
        })
        .createTable("lotacoes", tb => {
            tb.integer("pessoas_id").notNullable()
                .references("pessoas.id").onDelete("cascade");
            tb.integer("gabinetes_id").notNullable()
                .references("gabinetes.id").onDelete("cascade");
            tb.primary(["pessoas_id", "gabinetes_id"]);
            tb.timestamps(true, true);
        })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
    return knex.schema
        .dropTable("lotacoes")
        .dropTable("gabinetes")
        .dropTable("varas")
        .dropTable("setores")
        .dropTable("pessoas")
        .dropTable("perfis")
};
