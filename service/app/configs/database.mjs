import Knex from "knex";
import cfg from "../../knexfile.cjs"

export const database = Knex(cfg[process.env.NODE_ENV || "development"]);