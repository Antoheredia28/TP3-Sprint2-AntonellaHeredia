import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";


export async function obtenerSuperheroePorID(id) {
    console.log(`[SERV] Buscando superhéroe por ID: ${id}`);
    return await SuperHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
    console.log("[SERV] Obteniendo todos los superhéroes");
    return await SuperHeroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
    console.log(`[SERV] Buscando superhéroes con ${atributo} = ${valor}`);
    return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperHeroesMayoresDe30() {
    console.log("[SERV] Obteniendo superhéroes mayores de 30 años");
    return await SuperHeroRepository.obtenerMayoresDe30();
}

