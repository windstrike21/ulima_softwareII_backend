import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Cita } from "./Cita.js";
import { Consulta } from "./Consulta.js";

export const HojaFiliacion = sequelize.define('HojasFiliacion', {

    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    apellidos: {
        type: DataTypes.STRING
    },
    num_hist_cli: {
        type: DataTypes.INTEGER,
        unique: true
    },
    nombres: {
        type: DataTypes.STRING
    },
    sexo: {
        type: DataTypes.STRING
    },
    fecha_nacimiento: {
        type: DataTypes.STRING
    },
    tipo_seguro: {
        type: DataTypes.STRING
    },
    estado_civil: {
        type: DataTypes.STRING
    },
    nombre_padre: {
        type: DataTypes.STRING
    },
    fallecido_padre: {
        type: DataTypes.STRING
    },
    nombre_madre: {
        type: DataTypes.STRING
    },
    fallecido_madre: {
        type: DataTypes.STRING
    },
    departamento: {
        type: DataTypes.STRING
    },
    provincia: {
        type: DataTypes.STRING
    },
    distrito: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    localidad: {
        type: DataTypes.STRING
    },
    sector: {
        type: DataTypes.STRING
    },
    referencia: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.INTEGER,
        unique: true
    },
    celular: {
         type: DataTypes.INTEGER,
         unique: true
    }
    
    


}, {
    //esto sirve para quitar las tablas de createdAt y updatedAt
    timestamps: true
});