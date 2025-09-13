import { Router } from 'express';
import { genSalt, hash } from 'bcryptjs';
import mongoose from 'mongoose';
import user from '../models/user.mjs'; 

const router = Router();

router.post('/register', async (req,res) => {
    const{ nombre,email, password, confirmpassword} = req.body;
    console.log(req.body)


    if (password !=confirmpassword){
        return res.status(400).json({mensaje:'Las contraseñas no coinciden'});
    }

    const existinguser = await user.findOne({ email });
    if (existinguser) {
    return res.status(400).json({mensaje:'El correo ya está registrado'});
    }
    
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const newuser = user({
        nombre,
        email,
        password: hashedPassword,
        rol: 'user',
    });

    try{
        await newuser.save();
        res.status(201).json({mensaje:'El usuario creado correctamente'});
    } catch(err){
        res.status(400).json({mensaje:'Error al registrar'});
    }

});
export default router;