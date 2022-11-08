import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Atencion } from "./atencion.js";
import { CitaMedicamento } from "./CitaMedicamento.js";
import { Medicamento } from "./Medicamento.js";

export const Cita = sequelize.define('Citas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATEONLY
    },
    especialidad: {
        type: DataTypes.STRING
    },
    hora: {
        type: DataTypes.STRING
    },
    doctor: {
        type: DataTypes.STRING
    },
    diagnostico: {
        type: DataTypes.STRING
    },
    id_Paciente: {
        type: DataTypes.INTEGER
    },
    id_Medico: {
        type: DataTypes.INTEGER
    }
}, {
    //esto sirve para quitar las tablas de createdAt y updatedAt
    timestamps: true
});


// Cita.belongsToMany(Medicamento, { through: CitaMedicamento });
// Medicamento.belongsToMany(Cita, { through: CitaMedicamento });

Cita.belongsToMany(Medicamento, {
    
    through: CitaMedicamento,
    foreignKey: 'CitaId',
    sourceKey: 'id'
})
Medicamento.belongsToMany(Cita, {
    
    through: CitaMedicamento,
    foreignKey: 'nombre',
    sourceKey: 'nombre'
})