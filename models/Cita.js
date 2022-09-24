import { DataTypes } from "sequelize";
import {sequelize} from "../database/database.js";
import { Atencion } from "./atencion.js";

export const Cita = sequelize.define('Citas' , {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    fecha : {
        type: DataTypes.STRING
    },
    especialidad : {
        type: DataTypes.STRING
    },
    hora : {
        type: DataTypes.STRING
    },
    doctor : {
        type: DataTypes.STRING
    },
 
},{
    //esto sirve para quitar las tablas de createdAt y updatedAt
    timestamps: true
}); 

