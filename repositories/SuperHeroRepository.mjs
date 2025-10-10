import superHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroRepository extends IRepository {

    async obtenerPorId(id) {
        return await superHero.findById(id);
    }

    async obtenerTodos() {
        return await superHero.find({});
    }

    // Se Buscara por atributo dinámico (por ejemplo: nombreSuperHeroe, planetaOrigen, etc.)
    async buscarPorAtributo(atributo, valor) {
        // Creamos un objeto dinámico: { atributo: valor }
        const filtro = {};
        filtro[atributo] = valor;
        return await superHero.find(filtro);
    }

    // Se Buscara héroes mayores de 30 años
    async obtenerMayoresDe30() {
        return await superHero.find({ edad: { $gt: 30 } });
    }
}

export default new SuperHeroRepository();
