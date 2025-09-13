import express from 'express'; 
import mongoose from 'mongoose';
import registerRouter from './routes/register.mjs';
import dotenv from 'dotenv';
import cors from 'cors';  // Importa cors

dotenv.config();
const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());
app.use('/api', registerRouter);
app.get('/api/ejemplo', (req, res) => {
    const data = {
        mensaje: "Hola, este es un JSON de ejemplo",
        fecha: new Date(),
        usuario: {
            nombre: "Alan",
            rol: "admin"
        }
    };
    res.json(data); // Express automáticamente convierte el objeto a JSON
});
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => {
        console.log('Servidor conectado');
    });
  })
  .catch(err => console.log('Error al conectar', err));