import express from 'express';
import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';
import { connect } from 'http2';


const app = express();
const PORT = process.env.PORT || 3000;


//Middleware para parsear JSON 

app.use(express.json());

//Conexion a Mongo DB

connectDB();

//Comfiguracion de rutas

app.use('/api', superHeroRoutes);

//Manejo de erroes para rutas no encontradas

app.use((req, res)=>{
    res.status(404).send ({mensaje:"Ruta no encontrada"});
});

//Iniciar servidor.

app.listen(PORT, () =>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});