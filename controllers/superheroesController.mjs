import {
  obtenerSuperheroePorID,
  obtenerTodosLosSuperheroes,
  buscarSuperheroesPorAtributo,
  obtenerSuperHeroesMayoresDe30,
  obtenerPorEdad,
} from "../services/superheroesService.mjs";
import {
  renderizarSuperheroe,
  renderizarListaSuperheroes,
} from "../views/responsiveView.mjs";

//Funcion para obtener los SH por ID
export async function obtenerSuperheroePorIDController(req, res) {
  try {
    const { id } = req.params;
    console.log(`[CONT] GET /heroes/${id} → buscando superhéroe por ID`);

    const superheroe = await obtenerSuperheroePorID(id);
    if (!superheroe) {
      console.warn(`No se encontró superhéroe con ID: ${id}`);
      return res.status(404).send({ mensaje: "Superhéroe no encontrado" });
    }

    // Log del héroe original
    console.log(`Superhéroe encontrado: ${superheroe.nombreSuperHeroe}`);

    // Renderizado
    const superheroeFormateado = renderizarSuperheroe(superheroe);
    console.log("Superhéroe formateado:", superheroeFormateado);

    res.status(200).json(superheroeFormateado);
  } catch (error) {
    console.error(
      `[CONT] Error en obtenerSuperheroePorIDController: ${error.message}`
    );
    res
      .status(500)
      .send({
        mensaje: "Error al obtener el superhéroe",
        error: error.message,
      });
  }
}

// Obtener todos lo SH
export async function obtenerTodosLosSuperheroesController(req, res) {
  try {
    console.log("[CONT] GET /heroes → obteniendo todos los superhéroes");
    const superheroes = await obtenerTodosLosSuperheroes();
    console.log(`Se obtuvieron ${superheroes.length} superhéroes`);

    const superheroesFormateados = renderizarListaSuperheroes(superheroes);
    res.status(200).json(superheroesFormateados);
  } catch (error) {
    console.error(
      `Error en obtenerTodosLosSuperheroesController: ${error.message}`
    );
    res
      .status(500)
      .send({ mensaje: "Error al obtener superhéroes", error: error.message });
  }
}

// Buscar por atributo/valor
export async function buscarSuperheroesPorAtributoController(req, res) {
  try {
    const { atributo, valor } = req.params;
    console.log(
      `[CONT] GET /heroes/buscar/${atributo}/${valor} → buscando por atributo`
    );

    const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
    if (superheroes.length === 0) {
      console.warn(`No se encontraron superhéroes con ${atributo} = ${valor}`);
      return res
        .status(404)
        .send({ mensaje: "No se encontraron superhéroes con este atributo" });
    }

    console.log(
      `Se encontraron ${superheroes.length} superhéroes con ${atributo} = ${valor}`
    );
    const superheroesFormateados = renderizarListaSuperheroes(superheroes);
    res.status(200).json(superheroesFormateados);
  } catch (error) {
    console.error(
      `Error en buscarSuperheroesPorAtributoController: ${error.message}`
    );
    res
      .status(500)
      .send({
        mensaje: "Error al buscar los superhéroes",
        error: error.message,
      });
  }
}

// Obtener mayores de 30
export async function obtenerMayoresDe30Controller(req, res) {
  try {
    console.log(
      "[CONT] GET /heroes/mayores-30 → buscando superhéroes mayores de 30"
    );
    const superheroes = await obtenerSuperHeroesMayoresDe30();

    if (superheroes.length === 0) {
      console.warn("No se encontraron superhéroes mayores de 30 años");
      return res
        .status(404)
        .send({ mensaje: "No se encontraron superhéroes mayores de 30 años" });
    }

    console.log(
      `Se encontraron ${superheroes.length} superhéroes mayores de 30 años`
    );
    const superheroesFormateados = renderizarListaSuperheroes(superheroes);
    res.status(200).json(superheroesFormateados);
  } catch (error) {
    console.error(`Error en obtenerMayoresDe30Controller: ${error.message}`);
    res
      .status(500)
      .send({
        mensaje: "Error al obtener superhéroes mayores de 30",
        error: error.message,
      });
  }
}

