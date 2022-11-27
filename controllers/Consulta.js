import { Op } from "sequelize";
import { Consulta } from "../models/Consulta.js";
let numChat = 0;

export const createConsulta = async (consulta) => {

    try {
        
         const { mensaje, id_usuario, id_usuario2} = req.body;
         let newConsulta=[];
         let mensajeEnviado=false;
         let count1=0;
         if(id_usuario2 != null){
             count1=await Consulta.count({
               where:{
                 id_usuario: {[Op.not]:id_usuario} ,
                 id_usuario2:id_usuario2
               }
             })
         }
        
         if(count1 == 0){
            mensajeEnviado=true;
            newConsulta=await Consulta.create({
              mensaje: mensaje,
              id_usuario: id_usuario,
              id_usuario2:id_usuario2
            }) 
         }
        
        
         res.json(mensajeEnviado)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }


}
export const deleteConsulta = async (req, res) => {

    try {
        const { id } = req.params;
        const consulta = await Consulta.destroy({
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
export const getConsultas = async (req,res) => {

    try {
        const consultas = await Consulta.findAll()
        res.json(consultas)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }


}
export const getConsultasChat = async (req, res) => {

    try {
        
         const { id_usuario, id_usuario2} = req.body;
         let consultas=[]
         if(id_usuario2 == null){
             consultas=await Consulta.findAll({
             where:{
                 [Op.or]: [
                     { id_usuario:id_usuario,id_usuario2:null },
                     { id_usuario:{[Op.not]:id_usuario},id_usuario2:id_usuario}///*
                 ]
                
             }
            })
         }else{
             const count1=await Consulta.count({
                 where:{
                     id_usuario:{[Op.not]:id_usuario},
                     id_usuario2:id_usuario2
                 }
             })
             if(count1 == 0){
                 consultas=await Consulta.findAll({
                 where:{
                     [Op.or]: [
                        { id_usuario:id_usuario,id_usuario2:id_usuario2 },
                        { id_usuario:id_usuario2,id_usuario2:null }///*
                     ]
                        
                   }
                 })
             }
            
         }
        
        
        res.json(consultas)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }


}

