import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Cita } from "./Cita.js";
import { Consulta } from "./Consulta.js";
import { HojaFiliacion } from "./HojaFiliacion.js";

export const Usuario = sequelize.define('Usuarios', {

    // Común para todos
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true
    },
    nombre:{
        type:DataTypes.STRING
    },
    fecha_emision: {
        type: DataTypes.STRING
    },
    edad: {
        type: DataTypes.STRING
    },
    sexo: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true

    },
    password:{
        type:DataTypes.STRING,
        unique: true

    },
    celular: {
        type: DataTypes.INTEGER,
        unique: true

    },  
    tipo: { //tipo de usuario
        type: DataTypes.STRING
    },

    // Médico
    especialidad:{
        type:DataTypes.STRING
    }

    // Paciente

    
    // Personal


    // Administrador


}, {
    //esto sirve para quitar las tablas de createdAt y updatedAt
    timestamps: true
});

 Usuario.hasOne(HojaFiliacion,{
     foreignKey: 'num_documento',
     sourceKey: 'id'
 })
 HojaFiliacion.belongsTo(Usuario,{
     foreignKey: 'num_documento',
     targetId: 'id'
 })
 
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
