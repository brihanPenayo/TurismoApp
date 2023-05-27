import { Paciente } from '../models/paciente.js';

export const obtenerPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.json(pacientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener los pacientes' });
  }
};

export const crearPaciente = async (req, res) => {
  try {
    const paciente = new Paciente(req.body);
    await paciente.save();
    res.json({ mensaje: 'Paciente creado exitosamente', paciente });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear el paciente' });
  }
};

export const obtenerPaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    if (!paciente) {
      return res.status(404).json({ mensaje: 'Paciente no encontrado' });
    }
    res.json(paciente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener el paciente' });
  }
};

export const actualizarPaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!paciente) {
      return res.status(404).json({ mensaje: 'Paciente no encontrado' });
    }
    res.json({ mensaje: 'Paciente actualizado exitosamente', paciente });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al actualizar el paciente' });
  }
};

export const eliminarPaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findByIdAndDelete(req.params.id);
    if (!paciente) {
      return res.status(404).json({ mensaje: 'Paciente no encontrado' });
    }
    res.json({ mensaje: 'Paciente eliminado exitosamente', paciente });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar el paciente' });
  }
};