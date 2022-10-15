import { Router } from "express";
import { createCita, getCitas, updateCita } from "../controllers/Cita.js";



const router = Router();

router.get('/citas', getCitas);
router.post('/citas', createCita);
router.put('/citas/:id', updateCita);

export default router;