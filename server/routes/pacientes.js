import express from 'express'
const router = express.Router()
import {obtenerPaciente, crearPaciente, obtenerPacientes,actualizarPaciente, eliminarPaciente} from '../controllers/paciente.js'

router.get('/', obtenerPacientes);
router.post('/', crearPaciente);
router.get('/:id', obtenerPaciente);
router.put('/:id', actualizarPaciente);
router.delete('/:id', eliminarPaciente);

export default router;
