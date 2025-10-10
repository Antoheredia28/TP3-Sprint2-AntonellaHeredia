import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";

export async function obtenerSuperheroePorID(id){
    return await SuperHeroRepository.obtenerPorId(id);
}
export async function obtenerTodosLosSuperheroes(){
    return await SuperHeroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo (atributo,valor){
    return await SuperHeroRepository.buscarPorAtributo(atributo,valor);
}
export async function obtenerSuperHeroesMayoresDe30(){
    return await SuperHeroRepository.obtenerMayoresDe30();
}