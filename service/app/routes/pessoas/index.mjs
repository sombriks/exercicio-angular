import Router from "@koa/router"

import {database} from "../../configs/database.mjs";

export const listPessoas = (q) => database("pessoas")
    .select().whereLike("nome",`%${q}%`)

export const pessoaRouter = new Router()

pessoaRouter.get("/pessoas", async ctx => ctx.body = await listPessoas(ctx.query.q))