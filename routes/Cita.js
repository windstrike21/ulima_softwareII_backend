import { Router } from "express";
import { createCita } from "../controllers/Cita.js";



const router = Router();


router.post('/citas',createCita);

export default router;