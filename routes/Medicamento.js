import { Router } from "express";

import { createCitaMedicamento, createMedicamento, deleteCitaMedicamento, deleteMedicamento, getCitaMedicamento, getMedicamentos, getMedicamentosCita} from "../controllers/Medicamento.js";

const router = Router();

router.post('/medicamentos', createMedicamento);
router.get('/medicamentos', getMedicamentos);
router.post('/citaMedicamentos', createCitaMedicamento);
router.get('/citaMedicamentos', getCitaMedicamento);
router.get('/medicamentos/Cita/:id',getMedicamentosCita)
router.delete('/medicamentos/:id',deleteMedicamento)
router.delete('/citaMedicamentos/:id',deleteCitaMedicamento)


export default router;