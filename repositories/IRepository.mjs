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
    obtenerMayoresDe30ConFiltros(){
        throw new Error ("Metodo 'obtenerMayoresDe()'no implementado");
    }
    
}

export default IRepository;