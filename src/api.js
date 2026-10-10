const CLAVE_CACHE = "pokemons40";

// obtener los pokemon desde la api
export async function obtenerPokemons() {

    // comprobamos si ya tenemos los pokemon
    const datosGuardados = localStorage.getItem(CLAVE_CACHE);

    // si existen, los convertimos de texto a js y los devolvemos
    if (datosGuardados) {
        return JSON.parse(datosGuardados);
    }


    // si no estan guardados, pedimos a la api
    const respuesta = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=40"
    );

    if (!respuesta.ok) {
        throw new Error("No se pudieron cargar los Pokémon");
    }

    const datos = await respuesta.json();


    // pedir los detalles de cada Pokémon
    const pokemons = await Promise.all(

        datos.results.map(async (pokemon) => {

            const respuestaDetalle = await fetch(pokemon.url);

            if (!respuestaDetalle.ok) {
                throw new Error("Error al cargar un Pokémon");
            }

            const detalle = await respuestaDetalle.json();

            return {
                id: detalle.id,
                nombre: detalle.name,
                imagen: detalle.sprites.front_default,

                tipos: detalle.types.map(tipo => {
                    return tipo.type.name;
                })
            };
        })
    );


    // guardar los pokemon en localStorage
    localStorage.setItem(
        CLAVE_CACHE,
        JSON.stringify(pokemons)
    );


    return pokemons;
}