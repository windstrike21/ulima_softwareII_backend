import { Router } from "express";
import { getConsultasChat, createConsulta, deleteConsulta, getConsultas} from "../controllers/Consulta.js";


const router = Router();

router.post('/Consultas', createConsulta);
router.delete('/Consultas/:id',deleteConsulta);
router.get('/Consultas',getConsultas)
router.post('/Consultas/Chat/:id',getConsultasChat)

export default router;