import { Router } from "express";
import { createCita, createCitaMedicamento, getCitas, getCitasMedicamentos, getCitaUsuarios, updateCita } from "../controllers/Cita.js";



const router = Router();

router.get('/citas', getCitas);
router.post('/citas', createCita);
router.put('/citas/:id', updateCita);
router.get('/citasMedicamentos',getCitasMedicamentos)
router.post('/citaUsuarios',getCitaUsuarios)
router.post('/citaMedicamento',createCitaMedicamento)

export default router;