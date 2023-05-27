import { Schema, model } from 'mongoose'

const pacienteSchema = new Schema({
  nombre: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  genero: {
    type: String,
    enum: ['Masculino', 'Femenino', 'Otro'],
    required: true,
  },
  direccion: { type: String, required: true },
  telefono: { type: String },
  email: { type: String },
  antecedentesPersonales: { type: String },
  antecedentesFamiliares: { type: String },
  notas: { type: String },
},
{
  timestamps: true,
})

export const Paciente = model('Paciente', pacienteSchema)
