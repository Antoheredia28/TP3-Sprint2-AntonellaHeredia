class IRepository {
    obtenerPorId (id) {
        throw new Error ("Metodo 'obtenerPorId()' no implementado");
    }
    obtenerTodos(){
        throw new Error ("Metodo 'obtenerTodos()' no implementado");
    }
    buscarPorAtributo (atributo, valor){
        throw new Error ("Metodos buscarPorAtributo()' no implementado");
    }
    obtenerMayoresDe30(){
        throw new Error ("Metodo 'obtenerMayoresDe30()'no implementado");
    }
    obtenerPorEdad(edad){
        throw new Error("Metodo 'obtenerPorEdad'no implementado");
    }
}

export default IRepository;