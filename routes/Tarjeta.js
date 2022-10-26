import { Router } from "express";
import { createTarjeta } from "../controllers/Tarjeta";
import router from "./registros_med.routes";

const router = Router();

router.post('/paciente/tipo',createTarjeta);

export default router;