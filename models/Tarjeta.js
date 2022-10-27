import { DataTypes } from "sequelize";
import {sequelize} from "../database/database.js";
import { Usuario } from "./Usuario.js";

export const Tarjeta = sequelize.define('Tarjeta', {
    id : {
    type: DataTypes.INTEGER,
    }, 

    numcard:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },

    procesador:{
        type:DataTypes.STRING
    },

    banco:{
        type:DataTypes.STRING
    },

    cvv:{
        type:DataTypes.INTEGER
    },

    nombre:{
        type:DataTypes.STRING
    },

});

Usuario.hasMany(Tarjeta, {
    foreignKey: 'paciente_id',
    sourceKey: 'id'
})

Tarjeta.belongsTo(Usuario, {
    foreignKey: 'paciente_id',
})