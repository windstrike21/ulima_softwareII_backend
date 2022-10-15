import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Cita } from "./Cita.js";

export const Consulta = sequelize.define('Consultas', {

    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },         
    mensaje: {
        type: DataTypes.STRING
    },
    id_usuario:{
        type:DataTypes.INTEGER
    },
    id_usuario2:{
        type:DataTypes.INTEGER
    }


}, {
    //esto sirve para quitar las tablas de createdAt y updatedAt
    timestamps: true
});

