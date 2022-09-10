import { DataTypes } from "sequelize";
import {sequelize} from "../database/database.js";
import { Atencion } from "./atencion.js";

export const Medico = sequelize.define('Medicos' , {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    name : {
        type: DataTypes.STRING
    },
    email : {
        type : DataTypes.STRING
    },
    password : {
        type: DataTypes.STRING
    },
    especialidad : {
        type: DataTypes.STRING
    },
    numcolegio : {
        type: DataTypes.STRING
    },
    phone : {
        type: DataTypes.INTEGER
    },
    direccion : {
        type: DataTypes.STRING
    },
    preciop : {
        type: DataTypes.INTEGER
    },
    precioo : {
        type: DataTypes.INTEGER
    },
    puntuacion : {
        type: DataTypes.INTEGER
    },
    comentarios : {
        type: DataTypes.STRING
    }
    
 
},{
    //esto sirve para quitar las tablas de createdAt y updatedAt
    timestamps: true
}); 

Medico.hasMany(Atencion, {
    foreignKey: 'medico_id',
    sourceKey: 'id'
})

Atencion.belongsTo(Medico, {
    foreignKey: 'medico_id',
    targetId: 'id'
})