import Router from "@koa/router"

import {database} from "../../configs/database.mjs";

export const listPessoas = () => database("perfis").select()

export const pessoaRouter = new Router()

pessoaRouter.get("/pessoas", async ctx => ctx.body = await listPessoas())