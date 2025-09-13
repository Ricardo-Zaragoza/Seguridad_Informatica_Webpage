import mongoose from "mongoose";
//const mongoose  = ('mongoose');
const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    rol:{
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },  
});

const user = mongoose.model('user', userSchema);
export default user;