import superHero from "../models/SuperHero.mjs";
import IRepository from '../repositories/IRepository.mjs';

    class SuperHeroRepository extends IRepository{ 
        //busquedas por id 
    async obtenerPorId(id) {
        console.log(`[Repo] Buscar superhéroe por ID: ${id}`);
        const result = await superHero.findById(id);
        console.log(result 
            ? `[Repo] Superhéroe encontrado: ${result.nombreSuperHeroe}` 
            : '[Repo] Superhéroe no encontrado');
        return result;
    }

    //busqueda de todos los superheroes

    async obtenerTodos() {
        console.log(' [Repo] Consultando todos los superhéroes');
        const result = await superHero.find({});
        console.log(` [Repo] Se encontraron ${result.length} superhéroes`);
        return result;
    }
    //Busqueda por atributo 
    async buscarPorAtributo(atributo, valor) {
        // Normalizamos el valor de búsqueda: eliminamos acentos y pasamos a minúsculas
        const valorNormalizado = valor
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();

        // Traemos todos los documentos y filtramos en memoria
        const resultados = await superHero.find({ [atributo]: { $exists: true } });

        // Filtramos los que coincidan normalizando cada elemento del array o string
        const filtrados = resultados.filter(doc => {
            const campo = doc[atributo];

            if (Array.isArray(campo)) {
                return campo.some(item => 
                    item.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() === valorNormalizado
                );
            } else if (typeof campo === "string") {
                return campo.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() === valorNormalizado;
            }
            return false;
        });

    console.log(`[Repo] Se encontraron ${filtrados.length} superhéroes con ${atributo} = "${valor}" (ignorando acentos y mayúsculas)`);

    return filtrados;
}

    //obtener mayores de 30
    async obtenerMayoresDe30() {
        console.log('[Repo] Buscando superhéroes mayores de 30 años');
        const result = await superHero.find({ edad: { $gt: 30 } });
        console.log(`[Repo] Se encontraron ${result.length} superhéroes mayores de 30 años`);
        return result;
    }
    

}

export default new SuperHeroRepository();




