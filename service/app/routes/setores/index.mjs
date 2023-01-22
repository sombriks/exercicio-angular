import Router from "@koa/router"

import {database} from "../../configs/database.mjs";

export const listSetores = () => database("setores").select()

export const setorRouter = new Router()

setorRouter.get("/setores", async ctx => ctx.body = await listSetores())