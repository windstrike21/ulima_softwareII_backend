import { Medico } from "../models/medico.js";
import { Atencion } from "../models/atencion.js";

export const getMedicos = async (req, res) => {

    try {
        //el throw de abajo es para probar si el try catch funciona
        // el try catch es necesario para que en caso ocurriera un error
        // el servidor responda que error es y que el servidor no se detenga y pueda seguir
        // realizando sus funciones en otros endpoints y hacien peticiones
        //throw new Error('query failed')
        const Medicos = await Medico.findAll();
        //console.log(projects)
        res.json(Medicos); 
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
    
}



export const createMedico = async (req, res) => {
    
    try {
        const {name,lastname,email,password,especialidad} = req.body;
        const newmedico= await Medico.create({
            name:name,
            lastname:lastname,
            email:email,
            password:password,
            especialidad:especialidad,
            // num_colegio:num_colegio,
            // phone:phone,
            // direccion:direccion,
            // preciop:preciop,
            // precioo:precioo,
            // puntuacion:puntuacion,
            // comentarios:comentarios
        })

        //console.log(newProject);
        //res.send('creating projects');
        res.json(newmedico);
        
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
    
    
}

export const updateMedico = async (req,res) => {
    
    try {
        const {id} = req.params;
        const {email,phone,preciop,precioo} = req.body;

        //console.log(id);
        //console.log(req.body);
        //res.send('updating projects');
        const registrod= await Medico.findByPk(id);
        registrod.email = email;
        registrod.phone = phone;
        registrod.preciop = preciop;
        registrod.precioo = precioo;
        //para guardar las modificaciones al objeto en la base de datos
        await Medico.save();
        res.json({message: "Datos actualizados"});
    } catch (error) {
       return res.status(500).json({message: error.message}); 
    }
    
}

export const getAtencionsMedico = async (req, res) => {
    try {
        const {id} = req.params;
        const atencions = await Atencion.findAll({
            where : {
                registro_medico_id : id
            }
        })
        
        res.json(atencions);
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
    
}