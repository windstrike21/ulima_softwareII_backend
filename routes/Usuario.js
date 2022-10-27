import { Router } from "express";

import { createUsuario, getCitas, getUsuarios, getUsuariosTipo,getUsuarioTipoId,getUsuarioTipoNombre,updateUsuarioTipo } from "../controllers/Usuario.js";

const router = Router();

router.get('/usuarios', getUsuarios);
router.post('/usuarios',createUsuario);
router.get('/usuarios/:tipo',getUsuariosTipo)
router.put('/usuarios/:tipo/:id',updateUsuarioTipo)
router.get('/usuariosNombre/:tipo/:nombre',getUsuarioTipoNombre)
router.get('/usuariosId/:tipo/:id',getUsuarioTipoId)
router.get('/citas/:tipo/:id',getCitas)
export default router;