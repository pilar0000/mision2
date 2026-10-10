// obtener 12 pokemon desde la api
export async function obtenerPokemons() {

    const respuesta = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=12"
    );

    if (!respuesta.ok) {
        throw new Error("No se pudieron cargar los Pokémon");
    }

    // convertir los datos a json
    const datos = await respuesta.json();


    // pedir la informacion de cada pokemon
    const pokemons = await Promise.all(

        datos.results.map(async (pokemon) => {

            const respuestaDetalle = await fetch(pokemon.url);

            if (!respuestaDetalle.ok) {
                throw new Error("Error al cargar un Pokémon");
            }

            const detalle = await respuestaDetalle.json();


            // devolver los datos que necesitamos
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


    return pokemons;
}