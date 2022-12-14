
import { Cita } from "../models/Cita.js";
import { CitaMedicamento } from "../models/CitaMedicamento.js";
import { Medicamento } from "../models/Medicamento.js";

export const createMedicamento = async (req, res) => {

    try {
        const { nombre, disponibilidad,precio_unitario } = req.body;

        const newmedicamento = await Medicamento.create({
            nombre: nombre,
            disponibilidad:disponibilidad,
            precio_unitario:precio_unitario
        })
        //console.log(newProject);
        //res.send('creating projects');
        res.json(newmedicamento);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }


}
export const getMedicamentos = async (req, res) => {

    try {
        //el throw de abajo es para probar si el try catch funciona
        // el try catch es necesario para que en caso ocurriera un error
        // el servidor responda que error es y que el servidor no se detenga y pueda seguir
        // realizando sus funciones en otros endpoints y hacien peticiones
        //throw new Error('query failed')
        const medicamentos = await Medicamento.findAll();
        //console.log(projects)
        res.json(medicamentos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
export const createCitaMedicamento = async (req, res) => {

    try {
        const { nombre, frecuencia, duracion, unidades, CitaId } = req.body;

        const newCitaMedicamento = await CitaMedicamento.create({
            CitaId:CitaId,
            nombre: nombre,
            frecuencia: frecuencia,
            duracion: duracion,
            unidades: unidades
        })
       

        //console.log(newProject);
        //res.send('creating projects');
        res.json(newCitaMedicamento);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }


}
export const getCitaMedicamento = async (req, res) => {

    try {
        //el throw de abajo es para probar si el try catch funciona
        // el try catch es necesario para que en caso ocurriera un error
        // el servidor responda que error es y que el servidor no se detenga y pueda seguir
        // realizando sus funciones en otros endpoints y hacien peticiones
        //throw new Error('query failed')
        const citaMedicamento = await CitaMedicamento.findAll();
        //console.log(projects)
        res.json(citaMedicamento);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

export const getMedicamentosCita = async (req, res) => {

    try {
        //el throw de abajo es para probar si el try catch funciona
        // el try catch es necesario para que en caso ocurriera un error
        // el servidor responda que error es y que el servidor no se detenga y pueda seguir
        // realizando sus funciones en otros endpoints y hacien peticiones
        //throw new Error('query failed')
        const {id}=req.params
        
        
        
        const medRecetados= await Cita.findAll({
            include:Medicamento,
            attributes: [],
            where:{
                id:id
            }
        })
        
        //console.log(projects)
        res.json(medRecetados);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
export const deleteMedicamento = async (req, res) => {

    try {
        const { id } = req.params;
        const consulta = await Medicamento.destroy({
            where: {
                id: id
            }
        })
        //console.log(newProject);
        //res.send('creating projects');
        res.json(consulta);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
export const deleteCitaMedicamento = async (req, res) => {

    try {
        const { id } = req.params;
        const consulta = await CitaMedicamento.destroy({
            where: {
                id: id
            }
        })
        //console.log(newProject);
        //res.send('creating projects');
        res.json(consulta);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
