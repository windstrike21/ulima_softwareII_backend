import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Cita } from "./Cita.js";

export const Medicamento = sequelize.define('Medicamentos', {

    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },         
    nombre:{
        type:DataTypes.STRING,
        primaryKey:true
    },
    disponibilidad:{
        type:DataTypes.BOOLEAN
    },
    precio_unitario:{
        type:DataTypes.FLOAT
    }

}, {
    //esto sirve para quitar las tablas de createdAt y updatedAt
    timestamps: true
});
