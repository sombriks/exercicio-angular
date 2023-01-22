import chai from "chai"
import chaiHttp from "chai-http"

import {app} from "./index.mjs"
import {database} from "./configs/database.mjs";

chai.should();
chai.use(chaiHttp);

describe("Teste base de API", () => {

    before(async () => await database.migrate.latest())
    after(async () => await database.destroy())

    it("Deveria estar em modo de teste", done => {
        if (!process.env.NODE_ENV) return done(new Error("NODE_ENV vazio"));
        process.env.NODE_ENV.should.be.eql("test");
        done();
    })

    it("Deveria retornar status 'online'", done => {
        chai
            .request(app.callback())
            .get('/status')
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(200);
                res.text.should.be.eql("online");
                done();
            });
    });

    it("deveria listar perfis", done => {
        chai
            .request(app.callback())
            .get('/perfis')
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(200);
                res.body.should.be.an('Array');
                done();
            });
    });

    it("deveria listar pessoas", done => {
        chai
            .request(app.callback())
            .get('/pessoas')
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(200);
                res.body.should.be.an('Array');
                done();
            });
    });

    it("deveria recuperar uma pessoa", done => {
        chai
            .request(app.callback())
            .get('/pessoas/1')
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(200);
                res.body.should.be.an('Object');
                done();
            });
    });

    it("deveria inserir uma pessoa", done => {
        chai
            .request(app.callback())
            .post('/pessoas')
            .send({nome: "Evangelista", senha: "", perfis_id: 2})
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(200);
                res.body.should.be.an('Array');
                done();
            });
    });

    it("deveria atualizar uma pessoa", done => {
        chai
            .request(app.callback())
            .put('/pessoas/1')
            .send({nome: "Judas", senha: "", perfis_id: 1})
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(200);
                res.body.should.be.an('number');
                done();
            });
    });

    it("deveria excluir uma pessoa", done => {
        chai
            .request(app.callback())
            .del('/pessoas/6')
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(200);
                res.body.should.be.an('number');
                done();
            });
    });

    it("deveria listar setores", done => {
        chai
            .request(app.callback())
            .get('/setores')
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(200);
                res.body.should.be.an('Array');
                done();
            });
    });

    // TODO testar rotas de autenticação
})