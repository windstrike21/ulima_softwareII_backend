import { Router } from "express";

import { createUsuario, getCitasPaciente, getUsuarios, getUsuariosTipo,getUsuarioTipoNombre,resetUsuario,updateUsuarioTipo } from "../controllers/Usuario.js";

const router = Router();

router.get('/usuarios', getUsuarios);
router.post('/usuarios',createUsuario);
router.get('/usuarios/:tipo',getUsuariosTipo)
router.put('/usuarios/:tipo/:id',updateUsuarioTipo)
router.get('/usuarios/:tipo/:nombre',getUsuarioTipoNombre)
router.get('/citas/Paciente/:id',getCitasPaciente)
export default router;