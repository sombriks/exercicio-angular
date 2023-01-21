import chai from "chai"
import chaiHttp from "chai-http"

import {app} from "./index.mjs"

chai.should();
chai.use(chaiHttp);

describe("Teste base de API", () => {

    it("Deveria retornar status 'online'", done => {
        chai
            .request(app.callback())
            .get('/')
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(200);
                res.text.should.be.eql("online");
                done();
            })
    })
})