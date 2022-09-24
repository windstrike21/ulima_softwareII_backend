import { DataTypes } from "sequelize";
import {sequelize} from "../database/database.js";
import { Cita } from "./Cita.js";

export const Usuario = sequelize.define('Usuarios' , {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    
    fecha_emision : {
        type: DataTypes.STRING
    },
    edad : {
        type: DataTypes.INTEGER
    },
    email : {
        type: DataTypes.STRING
    },
    celular : {
        type: DataTypes.INTEGER
    },
    apellidos : {
        type: DataTypes.STRING
    },
    nombres : {
        type: DataTypes.STRING
    },
    fecha_nacimiento : {
        type: DataTypes.STRING
    },
    estado_civil : {
        type: DataTypes.STRING
    },
    nombre_padre : {
        type: DataTypes.STRING
    },
    nombre_madre : {
        type: DataTypes.STRING
    },
    num_hist_cli : {
        type: DataTypes.INTEGER
    },
    sexo : {
        type: DataTypes.STRING
    },
    tipo_seguro : {
        type: DataTypes.STRING
    },
    fallecido_padre : {
        type: DataTypes.STRING
    },
    fallecido_madre : {
        type: DataTypes.STRING
    },

    
    departamento : {
        type: DataTypes.STRING
    },
    provincia : {
        type: DataTypes.STRING
    },
    distrito : {
        type: DataTypes.STRING
    },
    direccion : {
        type: DataTypes.STRING
    },
    localidad : {
        type: DataTypes.STRING
    },
    sector : {
        type: DataTypes.STRING
    },
    referencia : {
        type: DataTypes.STRING
    },
    num_telefono : {
        type: DataTypes.STRING
    },
    num_celular : {
        type: DataTypes.STRING
    },
    tipo : {
        type:DataTypes.STRING
    }
 
},{
    //esto sirve para quitar las tablas de createdAt y updatedAt
    timestamps: true
}); 

Usuario.hasMany(Cita, {
    foreignKey: 'paciente_id',
    sourceKey: 'id'
})

Cita.belongsTo(Usuario, {
    foreignKey: 'paciente_id',
    targetId: 'id'
})