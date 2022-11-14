import { HojaFiliacion } from "../models/HojaFiliacion.js";

export const createHojaFiliacion = async (req, res) => {

    try {
        let dato;
        let datosHojaFiliacion = {};
        for (dato in req.body) {
            datosHojaFiliacion[dato] = req.body[dato]
        }
        const newHojaFiliacion = await HojaFiliacion.create(datosHojaFiliacion)
        
        res.json(newHojaFiliacion);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }


}
export const getHojasFiliacion = async (req, res) => {

    try {
        
        const hojasFiliacion = await HojaFiliacion.findAll();
        
        res.json(hojasFiliacion);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
export const updateHojaFiliacion = async (req, res) => {

    try {
        //console.log(id);
        //console.log(req.body);
        //res.send('updating projects');
        let prop;
        const hojaFiliacion = await HojaFiliacion.findByPk(req.params.id);
        for (prop in req.body) {
            hojaFiliacion[prop] = req.body[prop]
        }


        //para guardar las modificaciones al objeto en la base de datos
        await hojaFiliacion.save();
        res.json({ message: "Datos actualizados" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
export const deleteHojaFiliacion = async (req, res) => {

    try {
        const { id } = req.params;
        const hojaFiliacion = await HojaFiliacion.destroy({
            where: {
                id: id
            }
        })
        //console.log(newProject);
        //res.send('creating projects');
        res.json(hojaFiliacion);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}