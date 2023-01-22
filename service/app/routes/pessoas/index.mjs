import Router from "@koa/router"

import {database} from "../../configs/database.mjs";

export const listPessoas = (q) => database("pessoas")
    .select().whereLike("nome", `%${q}%`);

export const findPessoa = (id) => database("pessoas")
    .select().where({id}).first();

export const insertPessoa = (pessoa) => database("pessoas").insert(pessoa);
export const updatePessoa = (id, pessoa) => database("pessoas")
    .update(pessoa).where({id});

export const deletePessoa = (id) => database("pessoas").del().where({id});

export const pessoaRouter = new Router();

pessoaRouter.get("/pessoas", async ctx =>
    ctx.body = await listPessoas(ctx.query.q || ""));

pessoaRouter.get("/pessoas/:id", async ctx =>
    ctx.body = await findPessoa(ctx.params.id) || ctx.throw(404, "NOT_FOUND"));

pessoaRouter.post("/pessoas", async ctx =>
    ctx.body = await insertPessoa(ctx.request.body))

pessoaRouter.put("/pessoas/:id", async ctx =>
    ctx.body = await updatePessoa(ctx.params.id, ctx.request.body));

pessoaRouter.del("/pessoas/:id", async ctx =>
    ctx.body = await deletePessoa(ctx.params.id));