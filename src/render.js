// funcion que muestra los pokemon en la pantalla
export function renderPokemons(pokemons, contenedor) {

    // limpiar primero el contenedor
    contenedor.innerHTML = "";


    pokemons.forEach(pokemon => {

        // crear una tarjeta
        const tarjeta = document.createElement("article");

        tarjeta.classList.add("pokemon-card");


        // crear el nombre
        const nombre = document.createElement("h2");

        nombre.textContent = pokemon.nombre;


        // crear la imagen
        const imagen = document.createElement("img");

        imagen.src = pokemon.imagen;
        imagen.alt = pokemon.nombre;


        // crear el texto del tipo
        const tipo = document.createElement("p");

        tipo.textContent = "Tipo: " + pokemon.tipos.join(", ");


        // añadir todo dentro de la tarjeta
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(tipo);


        // añadir la tarjeta al contenedor
        contenedor.appendChild(tarjeta);
    });
}