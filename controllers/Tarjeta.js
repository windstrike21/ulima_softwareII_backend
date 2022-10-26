import { Tarjeta } from "../models/Tarjeta";
import { Usuario } from "../models/Usuario";

export const createTarjeta = async (req, res) => {
    
    try {
        
        let dato;
        let datosTarjeta={};

        for (dato in req.body) {
            datosTarjeta[dato]=req.body[dato]
        }
        const newTarjeta = await Tarjeta.create(datosTarjeta)


        //console.log(newProject);
        //res.send('creating projects');
        res.json(newTarjeta);
        res.json(newTarjeta);
        
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
}

