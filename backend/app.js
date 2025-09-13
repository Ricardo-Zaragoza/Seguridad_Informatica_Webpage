import express from 'express'; 
import mongoose from 'mongoose';
import registerRouter from './routes/register.mjs';
import loginRouter  from './routes/login.mjs';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());
app.use('/api', registerRouter);
app.use('/api', loginRouter);
// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => {
        console.log('Servidor conectado');
    });
  })
  .catch(err => console.log('Error al conectar', err));
