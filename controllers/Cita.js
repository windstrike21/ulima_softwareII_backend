import { Cita } from "../models/Cita.js";
import { CitaMedicamento } from "../models/CitaMedicamento.js";

export const createCita = async (req, res) => {
    
    try {
        const {id_Paciente,id_Medico,fecha,especialidad,hora,doctor,diagnostico} = req.body;
        const newcita= await Cita.create({
            id_Paciente:id_Paciente,
            id_Medico:id_Medico,
            fecha:fecha,
            especialidad:especialidad,
            hora:hora,
            doctor:doctor,
            diagnostico:diagnostico
        })

        //console.log(newProject);
        //res.send('creating projects');
        res.json(newcita);
        
    } catch (error) {
        return res.status(500).json({message : error.message});
    }    
    
}

export const getCitas = async (req, res) => {

    try {
        const Citas = await Cita.findAll();
        res.json(Citas);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateCita = async (req, res) => {

    try {

        let prop;
        const cita = await Cita.findByPk(req.params.id);
        for (prop in req.body) {
            cita[prop] = req.body[prop]
        }

        await cita.save();
        res.json({ message: "Datos actualizados" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
export const getCitasMedicamentos = async (req, res) => {

    try {
        const citasMedicamentos = await CitaMedicamento.findAll();
        res.json(citasMedicamentos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getCitaUsuarios = async (req, res) => {

    try {
        const {idPaciente,idMedico}=req.body
        const Cita = await Cita.findAll({
            where:{
                id_Paciente:idPaciente,
                id_Medico:idMedico
            }
        });
        res.json(Cita);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const createCitaMedicamento = async (req, res) => {
    
    try {
        const {CitaId,nombre,frecuencia,duracion,unidades} = req.body;

        const newCitaMedicamento = await CitaMedicamento.create({
            CitaId:CitaId,
            nombre:nombre,
            frecuencia:frecuencia,
            duracion:duracion,
            unidades:unidades
        })
        

        //console.log(newProject);
        //res.send('creating projects');
        res.json(newCitaMedicamento);
        
    } catch (error) {
        return res.status(500).json({message : error.message});
    }    
    
}