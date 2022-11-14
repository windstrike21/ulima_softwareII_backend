import { Router } from "express";

import { createHojaFiliacion, deleteHojaFiliacion, getHojasFiliacion, updateHojaFiliacion } from "../controllers/HojaFiliacion.js";

const router = Router();

router.get('/hojasFiliacion', getHojasFiliacion);
router.post('/hojasFiliacion',createHojaFiliacion);
router.put('/hojasFiliacion/:id',updateHojaFiliacion);
router.delete('/hojasFiliacion/:id',deleteHojaFiliacion)
export default router;