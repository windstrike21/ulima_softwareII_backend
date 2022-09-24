import { Cita } from "../models/Cita.js";

export const createCita = async (req, res) => {
    
    try {
        const {paciente_id,fecha,especialidad,hora,doctor} = req.body;
        const newcita= await Cita.create({
            paciente_id:paciente_id,
            fecha:fecha,
            especialidad:especialidad,
            hora:hora,
            doctor:doctor
        })

        //console.log(newProject);
        //res.send('creating projects');
        res.json(newcita);
        
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
    
    
}