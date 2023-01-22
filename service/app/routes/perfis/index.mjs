import Router from "@koa/router"

import {database} from "../../configs/database.mjs";

export const listPerfil = () => database("perfis").select()

export const perfilRouter = new Router()

perfilRouter.get("/perfis", async ctx => ctx.body = await listPerfil())