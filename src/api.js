
// exportar para poder utilizar la funcion en otros archivos
export async function obtenerPokemons() {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");

    if (!respuesta.ok) {
        throw new Error("No se pudieron cargar los Pokémon");
    }

    const datos = await respuesta.json(); // convertir a json para trabajar en js

    return datos.results;
}