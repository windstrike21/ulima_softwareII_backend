import { medico } from "../models/medico.js";
import { Atencion } from "../models/atencion.js";

export const getregistrosmedicos = async (req, res) => {

    try {
        //el throw de abajo es para probar si el try catch funciona
        // el try catch es necesario para que en caso ocurriera un error
        // el servidor responda que error es y que el servidor no se detenga y pueda seguir
        // realizando sus funciones en otros endpoints y hacien peticiones
        //throw new Error('query failed')
        const registrosmedicos = await medico.findAll();
        //console.log(projects)
        res.json(registrosmedicos);
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
    
}



export const createmedico = async (req, res) => {
    
    try {
        const {id,name,lastname,email,password,especialidad,num_colegio,phone,direccion,preciop,precioo,puntuacion,comentarios} = req.body;
        const newmedico= await medico.create({
            id:id,
            name:name,
            lastname:lastname,
            email:email,
            password:password,
            especialidad:especialidad,
            num_colegio:num_colegio,
            phone:phone,
            direccion:direccion,
            preciop:preciop,
            precioo:precioo,
            puntuacion:puntuacion,
            comentarios:comentarios
        })

        //console.log(newProject);
        //res.send('creating projects');
        res.json(newmedico);
        
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
    
    
}

export const updatemedico = async (req,res) => {
    
    try {
        const {id} = req.params;
        const {email,phone,preciop,precioo} = req.body;

        //console.log(id);
        //console.log(req.body);
        //res.send('updating projects');
        const registrod= await medico.findByPk(id);
        registrod.email = email;
        registrod.phone = phone;
        registrod.preciop = preciop;
        registrod.precioo = precioo;
        //para guardar las modificaciones al objeto en la base de datos
        await project.save();
        res.json({message: "Datos actualizados"});
    } catch (error) {
       return res.status(500).json({message: error.message}); 
    }
    
}

export const getmedicoatencion = async (req, res) => {
    try {
        const {id} = req.params;
        const atencion = await atencion.findAll({
            where : {
                registro_medico_id : id
            }
        })
        
        res.json(atencion);
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
    
}