import express from 'express';
import { compare } from 'bcryptjs';
import User from '../models/user.mjs'; // Asegúrate de que la ruta sea correcta
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';  // Para cargar variables del archivo .env

dotenv.config(); 

const router = express.Router();


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('Usuario no encontrado');
    }

    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Contraseña incorrecta');
    }

    const role = user.rol || 'user';
    const token = jwt.sign(
      { id: user._id, rol: role },
      process.env.JWT_SECRET, 
      {
        expiresIn: '1h',
      }
    );
    res.status(200).json({ message: 'Login exitoso', token, rol: role });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
});

export default router;
