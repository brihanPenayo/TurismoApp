//hola mundo3
//¯\_( ͡❛ ͜ʖ ͡❛)_/¯
import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const usuarioSchema = new Schema(
    {
        nombre: {
            type: String,
            minlength: [2, "El nombre debe tener al menos 2 caracteres"],
            required: [true, "El nombre es obligatorio"],
        },
        apellido: {
            type: String,
            minlength: [2, "El apellido debe tener al menos 2 caracteres"],
            required: [true, "El apellido es obligatorio"],
        },
        email: {
            type: String,
            required: [true, "El email es obligatorio"],
            minlength: [5, "El email debe tener al menos 5 caracteres"],
            unique: [true, "El email ya existe"],
            validate: {
                validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val), // Expresión regular para validar el email
                message: "El email no es válido"
            }
        },
        contraseña: {
            type: String,
            required: [true, "La contraseña es obligatoria"],
            minlength: [8, "La contraseña debe tener al menos 8 caracteres"],
            validate: {
                validator: val => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(val), // Al menos una mayúscula, una minúscula y un número
                message: "La contraseña debe tener al menos una mayúscula, una minúscula y un número"
            }
        },
        rol: {
            type: String,
            enum: ["Admin", "Usuario"],
            required: [true, "El rol es obligatorio"],
        },
        activo: {
            type: Boolean,
            default: true,
        },
    }, { timestamps: true, versionKey: false });

usuarioSchema.virtual("confirmarContraseña") // Campo virtual para confirmar la contraseña
    .get(() => this._confirmarContraseña)
    .set((value) => this._confirmarContraseña = value);

usuarioSchema.pre("validate", function (next) { // Validar que las contraseñas coincidan
    if ((this.isModified('contraseña') || (this.isModified('confirmarContraseña')) && this.contraseña !== this.confirmarContraseña)) {
        this.invalidate("confirmarContraseña", "Las contraseñas no coinciden");
    }
    next();
});

usuarioSchema.pre("save", function (next) {
    if (!this.isNew) return next(); // No hacer nada si el usuario ya existe
    bcrypt.hash(this.contraseña, 10) // Encriptar la contraseña
        .then(hash => { // Si se encripta correctamente
            this.contraseña = hash;
            next();
        })
        .catch(next); // Enviar el error al siguiente middleware
});

export const Usuario = model("Usuario", usuarioSchema);