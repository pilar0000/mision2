import "./style.css";
import { obtenerPokemons } from "./api.js";

// estructura de la pagina
document.querySelector("#app").innerHTML = `
  <main>
    <h1>Pokédex</h1>

    <p id="estado">Cargando Pokémon...</p>

    <section id="pokemon-container"></section>
  </main>
`;

// elemento donde se muestra el estado
const estado = document.querySelector("#estado");

// contenedor donde van a aparecer los pokemon
const contenedor = document.querySelector("#pokemon-container");

// funcion principal
async function iniciar() {

    try {

        const pokemons = await obtenerPokemons();

        estado.textContent = "Pokémon cargados correctamente";

        // recorrer pokemon y crear un elemento <p> con el nombre del pok
        pokemons.forEach(pokemon => {

            const elemento = document.createElement("p");

            elemento.textContent = pokemon.name;

            // añadir pokemon al contenedor
            contenedor.appendChild(elemento);
        });

    // si hay algun error se notifica al usuario
    } catch (error) {

        estado.textContent = "Error al cargar los Pokémon";

    }
}

// iniciar la app
iniciar();