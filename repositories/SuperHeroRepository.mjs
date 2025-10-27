import superHero from "../models/SuperHero.mjs";
import IRepository from '../repositories/IRepository.mjs';

    class SuperHeroRepository extends IRepository{ 

    async obtenerPorId(id) {
        console.log(`[Repo] Buscar superhéroe por ID: ${id}`);
        const result = await superHero.findById(id);
        console.log(result 
            ? `[Repo] Superhéroe encontrado: ${result.nombreSuperHeroe}` 
            : '[Repo] Superhéroe no encontrado');
        return result;
    }

    async obtenerTodos() {
        console.log(' [Repo] Consultando todos los superhéroes');
        const result = await superHero.find({});
        console.log(` [Repo] Se encontraron ${result.length} superhéroes`);
        return result;
    }

    async buscarPorAtributo(atributo, valor) {
        const filtro = {};
        filtro[atributo] = valor;
        console.log(` [Repo] Buscando superhéroes con ${atributo} = ${valor}`);
        const result = await superHero.find(filtro);
        console.log(`[Repo] Se encontraron ${result.length} superhéroes con ${atributo} = ${valor}`);
        return result;
    }

    async obtenerMayoresDe30() {
        console.log('[Repo] Buscando superhéroes mayores de 30 años');
        const result = await superHero.find({ edad: { $gt: 30 } });
        console.log(`[Repo] Se encontraron ${result.length} superhéroes mayores de 30 años`);
        return result;
    }
}

export default new SuperHeroRepository();




