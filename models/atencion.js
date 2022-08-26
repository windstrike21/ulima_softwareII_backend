import { DataTypes } from "sequelize";
import {sequelize} from "../database/database.js";

export const Atencion = sequelize.define('Atencions', {
    id: {
       type: DataTypes.INTEGER,
       primaryKey: true,

    },
    fecha: {
        type: DataTypes.DATE
    },
    email: {
        type: DataTypes.STRING
    },
    historial : {
        type: DataTypes.STRING,
        defaultValue: false
    },
    diagnostico : {
        type: DataTypes.STRING,
        defaultValue: false
    },
    receta : {
        type: DataTypes.STRING,
        defaultValue: false
    },
    recomendaciones : {
        type: DataTypes.STRING,
        defaultValue: false
    },
    puntuacion : {
        type: DataTypes.INTEGER,
        
    }

}, {
    timestamps: false
})
