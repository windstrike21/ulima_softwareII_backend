import { Router } from "express";

import { createUsuario, getUsuarios, getUsuariosTipo,getUsuarioTipoNombre,updateUsuarioTipo } from "../controllers/Usuario.js";

const router = Router();

router.get('/usuarios', getUsuarios);
router.post('/usuarios',createUsuario);
router.get('/usuarios/:tipo',getUsuariosTipo)
router.put('/usuarios/:tipo/:id',updateUsuarioTipo)
router.get('/usuarios/:tipo/:nombre',getUsuarioTipoNombre)

export default router;