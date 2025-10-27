

export function renderizarSuperheroe(superheroe) { 
    console.log(`Renderizando superhéroe: ${superheroe.nombreSuperHeroe}`);

    return {
        Nombre: superheroe.nombreSuperHeroe,
        "Nombre Real": superheroe.nombreReal,
        Edad: superheroe.edad,
        "Planeta de Origen": superheroe.planetaOrigen, 
        Debilidad: superheroe.debilidad,
        Poderes: superheroe.poderes,
        Aliados: superheroe.aliados,
        Enemigos: superheroe.enemigos
    };
}

export function renderizarListaSuperheroes(superheroes) {
    console.log(`Renderizando lista de ${superheroes.length} superhéroes`);
    return superheroes.map(superheroe => renderizarSuperheroe(superheroe));
}
