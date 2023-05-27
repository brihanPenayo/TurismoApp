import { Paciente } from '../models/paciente.js';
const SECRET_KEY = "ClaveHospitalREG7ma"

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
      res.status(401).json({ error: 'Credenciales inválidas' })
      return
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    )

    if (!isPasswordValid) {
      res.status(401).json({ error: 'Credenciales inválidas' })
      return
    }
    const payload = { _id: user._id, rol: user.rol }

    const myJWT = jwt.sign(payload, SECRET_KEY, { expiresIn: '1d' })

    res.cookie("usertoken", myJWT, {
      httpOnly: true
    }).json(user)
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

export const logout = (req, res) => {
  res.clearCookie('usertoken');
  res.status(200).json({ message: "Cerramos Sesión!" });
}