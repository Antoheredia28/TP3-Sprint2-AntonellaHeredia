//Importa la libreria mongoose
import mongoose from 'mongoose';

//exporta la funcion a app.mjs para poder conectarse a la base de datos
export async function connectDB(){
    try{
        await mongoose.connect('mongodb+srv://Grupo-20:grupo20@cursadanodejs.ls9ii.mongodb.net/Node-js');
    }
    catch (error){
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1);
    }
}