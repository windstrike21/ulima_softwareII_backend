import { Router } from "express";
import { createCita, getCita, updateCita } from "../controllers/Cita.js";



const router = Router();

router.get('/citas', getCita);
router.post('/citas',createCita);
router.put('/citas/:id', updateCita)

export default router;