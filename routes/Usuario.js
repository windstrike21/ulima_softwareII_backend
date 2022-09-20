import { Router } from "express";

import { createUsuario, getUsuario, getUsuarios, updateUsuario } from "../controllers/Usuario.js";

const router = Router();

router.get('/usuarios', getUsuarios);
router.post('/usuarios',createUsuario);
router.put('/usuarios/:id',updateUsuario)
router.get('/usuarios/:id',getUsuario)
export default router;