import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Cita } from "./Cita.js";
import { Consulta } from "./Consulta.js";

export const Usuario = sequelize.define('Usuarios', {

    // Común para todos
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombres: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.STRING
    },
    fecha_nacimiento: {
        type: DataTypes.STRING
    },
    edad: {
        type: DataTypes.INTEGER
    },
    sexo: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    celular: {
        type: DataTypes.INTEGER
    },
    num_telefono: {
        type: DataTypes.STRING
    },
    num_celular: {
        type: DataTypes.STRING
    },
    tipo: { //tipo de usuario
        type: DataTypes.STRING
    },

    // Médico


    // Paciente
    fecha_emision: {
        type: DataTypes.STRING
    },
    tipo_seguro: {
        type: DataTypes.STRING
    },
    fallecido_padre: {
        type: DataTypes.STRING
    },
    fallecido_madre: {
        type: DataTypes.STRING
    },
    estado_civil: {
        type: DataTypes.STRING
    },
    nombre_padre: {
        type: DataTypes.STRING
    },
    nombre_madre: {
        type: DataTypes.STRING
    },
    num_hist_cli: {
        type: DataTypes.INTEGER
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

    // Personal


    // Administrador


}, {
    //esto sirve para quitar las tablas de createdAt y updatedAt
    timestamps: true
});

// Usuario.hasMany(Cita, {
//     foreignKey: 'paciente_id',
//     sourceKey: 'id'
// })

// Cita.belongsTo(Usuario, {
//     foreignKey: 'paciente_id',
//     targetId: 'id'
// })

//  Usuario.belongsToMany(Usuario,{
//      as: "usuario1",
//      through:Consulta,
//      foreignKey: 'id_usuario',
//      sourceKey: 'id'
//  })
//  Usuario.belongsToMany(Usuario,{
//      as: "usuario2",
//      through:Consulta,
//      foreignKey: 'id_usuario2',
//      sourceKey: 'id'
//  })


// Usuario.hasMany(Consulta, {
//     foreignKey: 'id_usuario',
//     sourceKey: 'id'
// })

// Consulta.belongsTo(Usuario, {
//     foreignKey: 'id_usuario',
//     targetId: 'id'
// })
// Usuario.hasMany(Consulta, {
//     foreignKey: 'id_usuario2',
//     sourceKey: 'id'
// })

// Consulta.belongsTo(Usuario, {
//     foreignKey: 'id_usuario2',
//     targetId: 'id'
// })
