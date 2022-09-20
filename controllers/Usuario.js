import { Usuario } from "../models/Usuario.js";

export const createUsuario = async (req, res) => {
    
    try {
        const {id,fecha_emision,edad,sexo,email,celular} = req.body;
        const newUsuario= await Usuario.create({
            id:id,
            fecha_emision:fecha_emision,
            edad:edad,
            sexo:sexo,
            email:email,
            celular:celular
        })

        //console.log(newProject);
        //res.send('creating projects');
        res.json(newUsuario);
        
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
    
    
}
export const updateUsuario = async (req,res) => {
    
    try {
        
        const {id,apellidos,nombres,fecha_nacimiento,estado_civil,
            nombre_padre,nombre_madre,num_hist_cli,sexo,tipo_seguro
            ,fallecido_padre,fallecido_madre} = req.body;

        //console.log(id);
        //console.log(req.body);
        //res.send('updating projects');
        const usuario= await Usuario.findByPk(req.params.id);
        usuario.id=id,
        usuario.apellidos=apellidos,
        usuario.nombres=nombres,
        usuario.fecha_nacimiento=fecha_nacimiento,
        usuario.estado_civil=estado_civil,
        usuario.nombre_padre=nombre_padre,
        usuario.nombre_madre=nombre_madre,
        usuario.num_hist_cli=num_hist_cli,
        usuario.sexo=sexo,
        usuario.tipo_seguro=tipo_seguro,
        usuario.fallecido_padre=fallecido_padre,
        usuario.fallecido_madre=fallecido_madre
        
        //para guardar las modificaciones al objeto en la base de datos
        await usuario.save();
        res.json({message: "Datos actualizados"});
    } catch (error) {
       return res.status(500).json({message: error.message}); 
    }
    
}
export const getUsuarios = async (req, res) => {

    try {
        //el throw de abajo es para probar si el try catch funciona
        // el try catch es necesario para que en caso ocurriera un error
        // el servidor responda que error es y que el servidor no se detenga y pueda seguir
        // realizando sus funciones en otros endpoints y hacien peticiones
        //throw new Error('query failed')
        const Usuarios = await Usuario.findAll();
        //console.log(projects)
        res.json(Usuarios); 
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
    
}
export const getUsuario = async (req, res) => {

    try {
        //el throw de abajo es para probar si el try catch funciona
        // el try catch es necesario para que en caso ocurriera un error
        // el servidor responda que error es y que el servidor no se detenga y pueda seguir
        // realizando sus funciones en otros endpoints y hacien peticiones
        //throw new Error('query failed')
        const {id} = req.params;
        const usuario = await Usuario.findByPk(id);
        //console.log(projects)
        res.json(usuario); 
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
    
}