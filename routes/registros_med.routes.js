import { Router } from "express";
import { getregistrosmedicos,createmedico } from "../controllers/registros_med.controller.js";


const router = Router();

router.get('/registros_med', getregistrosmedicos);
router.post('/registros_med',createmedico);

export default router;