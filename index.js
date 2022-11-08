import app from "./app.js";
import {sequelize} from "./database/database.js"
//estos import sirven para crear las tablas en base a modelos
//cuando la base de datos esta vacia
//import "./models/Project.js";
//import "./models/Task.js";
//import "./models/paciente.js";
import "./models/medico.js";
//import "./models/atencion.js";
//import { CitaMedicamento } from "./models/CitaMedicamento.js";

async function main() {

    try {
        //await sequelize.authenticate();
        //la función sync() sirve para crear los modelos en la base de datos
        //pero para que los reconozca es necesario importar el modelo
        //force:false
        await sequelize.sync({force: false});
        // await CitaMedicamento.sync({force:true})
        console.log("Coneccion establecida con exito");
        var PORT = process.env.PORT || 5000;
        app.listen(PORT);
    
        console.log("servidor corriendo en el puerto", PORT);
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
   
}

main();