import { Router } from "express";

import { createUsuario, getCitas, getUsuarios, getUsuariosTipo,getUsuarioTipoNombre,updateUsuarioTipo,getUsuarioTipoId, deleteUsuario, iniciarSesionUsuario } from "../controllers/Usuario.js";

const router = Router();

router.get('/usuarios', getUsuarios);
router.post('/usuarios',createUsuario);
router.get('/usuarios/:tipo',getUsuariosTipo)
router.put('/usuarios/:id',updateUsuarioTipo)
router.get('/usuariosNombre/:tipo/:nombre',getUsuarioTipoNombre)
router.get('/usuariosId/:tipo/:id',getUsuarioTipoId)
router.get('/citas/:tipo/:id',getCitas)
router.delete('/usuarios/:id',deleteUsuario)
router.post('/iniciarSesion',iniciarSesionUsuario)
export default router;