import { Cita } from "../models/Cita.js";
import { Usuario } from "../models/Usuario.js";

export const createUsuario = async (req, res) => {

    try {
        
        let dato;
        let datosUsuario={};

        for (dato in req.body) {
            datosUsuario[dato]=req.body[dato]
        }
        const newUsuario = await Usuario.create(datosUsuario)


        //console.log(newProject);
        //res.send('creating projects');
        res.json(newUsuario);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }


}
export const updateUsuarioTipo = async (req, res) => {

    try {
        //console.log(id);
        //console.log(req.body);
        //res.send('updating projects');
        let prop;
        const usuario = await Usuario.findByPk(req.params.id);
        for (prop in req.body) {
            usuario[prop] = req.body[prop]
        }


        //para guardar las modificaciones al objeto en la base de datos
        await usuario.save();
        res.json({ message: "Datos actualizados" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
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
        return res.status(500).json({ message: error.message });
    }

}
export const getUsuariosTipo = async (req, res) => {

    try {
        //el throw de abajo es para probar si el try catch funciona
        // el try catch es necesario para que en caso ocurriera un error
        // el servidor responda que error es y que el servidor no se detenga y pueda seguir
        // realizando sus funciones en otros endpoints y hacien peticiones
        //throw new Error('query failed')
        const { tipo } = req.params;
        const usuariosTipo = await Usuario.findAll({
            where: {
                tipo: tipo
            }
        })

        //console.log(projects)
        res.json(usuariosTipo);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
export const getUsuarioTipoNombre = async (req, res) => {

    try {
        //el throw de abajo es para probar si el try catch funciona
        // el try catch es necesario para que en caso ocurriera un error
        // el servidor responda que error es y que el servidor no se detenga y pueda seguir
        // realizando sus funciones en otros endpoints y hacien peticiones
        //throw new Error('query failed')
        const { tipo, nombre } = req.params;
        let usuarioTipo;



        usuarioTipo = await Usuario.findAll({
            where: {
                tipo: tipo,
                nombres: nombre
            }
        })



        //console.log(projects)
        res.json(usuarioTipo);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
export const getCitasPaciente = async (req, res) => {
    try {
        const {id} = req.params;
        const citas = await Cita.findAll({
            where : {
                paciente_id:id
            }
        })
        
        res.json(citas);
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
    
}
