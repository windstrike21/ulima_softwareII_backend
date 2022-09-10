import { Router } from "express";
import { getMedicos,createMedico } from "../controllers/registros_med.controller.js";


const router = Router();

router.get('/registros_med', getMedicos);
router.post('/registros_med',createMedico);

export default router;