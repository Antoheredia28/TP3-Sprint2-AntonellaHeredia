import { obtenerSuperheroePorID,obtenerTodosLosSuperheroes,buscarSuperheroesPorAtributo, obtenerSuperHeroesMayoresDe30 } from "../services/superheroesService.mjs"; 
import { renderizarSuperheroe,renderizarListaSuperheroes } from "../views/responsiveView.mjs";

export async function obtenerSuperheroePorIDController(req,res){
    try{
        const {id} = req.params;
        const superheroe = await obtenerSuperheroePorID(id);
        if(!superheroe){
            return res.status(404).send({mensaje: 'Superheroe no encontrado'});
        }
        const superheroesFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroesFormateado);
    }
    catch (error){
        res.status(500).send({mensaje : 'Error al obtener el superheroe',error: error.message});
    }
}

export async function  obtenerTodosLosSuperheroesController(req ,res) {
    try{
        const superheroes = await obtenerTodosLosSuperheroes();
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    }
    catch (error){
        res.status(500).send({mensaje: 'Error al obtener superheroes',error: error.message });
    }
    
}

export async function buscarSuperheroesPorAtributoController (req,res){

    try {
        const{atributo,valor} = req.params;
        const superheroes = await buscarSuperheroesPorAtributo(atributo,valor);
        if(superheroes.length === 0 ) {
            return res.status(404).send({mensaje :'No se encontraron superheores con este atributo'});
        }
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
       } 
       catch (error){
        res.status(500).send({mensaje:'Error al buscar los superheroes',error: error.message});
       }
}

export async function obtenerMayoresDe30Controller(req,res){
    try {
        const superheroes = await obtenerSuperHeroesMayoresDe30();
        if(superheroes.length === 0)
        {
            return res.status(404).send({mensaje: 'No se econtraron superheores mayores de 30 años'});
        }
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    }
    catch (error) {
        res.status(500).send({mensaje: 'Error al obtener superheroes mayores de 30', error:error.message});
    }
}