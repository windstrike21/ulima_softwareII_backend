import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Atencion } from "./atencion.js";
import { Cita } from "./Cita.js";
import { Medicamento } from "./Medicamento.js";

export const CitaMedicamento = sequelize.define('cita_medicamento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    frecuencia:{
        type:DataTypes.STRING
    },
    duracion:{
        type:DataTypes.STRING
    },
    unidades:{
        type:DataTypes.INTEGER
    },

}, {
    //esto sirve para quitar las tablas de createdAt y updatedAt
    timestamps: true
});

