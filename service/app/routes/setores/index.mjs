import Router from "@koa/router"

import {database} from "../../configs/database.mjs";

export const listSetores = (q) => database("setores")
    .select().whereLike("nome", `%${q}%`)

export const setorRouter = new Router()

setorRouter.get("/setores", async ctx => ctx.body = await listSetores(ctx.query.q || ""))