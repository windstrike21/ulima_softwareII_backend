import { Cita } from "../models/Cita.js";

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