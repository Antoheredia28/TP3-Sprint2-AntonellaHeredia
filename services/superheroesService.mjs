import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";


export async function obtenerSuperheroePorID(id) {
    console.log(`[Servicio] Buscando superhéroe por ID: ${id}`);
    return await SuperHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
    console.log("[Servicio] Obteniendo todos los superhéroes");
    return await SuperHeroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
    console.log(`[Servicio] Buscando superhéroes con ${atributo} = ${valor}`);
    return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperHeroesMayoresDe30() {
    console.log("[Servicio] Obteniendo superhéroes mayores de 30 años");
    return await SuperHeroRepository.obtenerMayoresDe30();
}
