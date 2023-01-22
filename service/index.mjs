import {app} from "./app/index.mjs"
import {database} from "./app/configs/database.mjs"

console.log("Iniciando banco e serviço");
database.migrate.latest().then(() => {
    const modo = process.env.NODE_ENV || "development";
    const porta = process.env.PORT || 3000;
    console.log(`modo [${modo}] porta [${porta}]`)
    app.listen(porta);
})