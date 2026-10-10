import "./style.css";

// importar la funcion que tiene los pokemon
import { obtenerPokemons } from "./api.js";

// importar la funcion que los muestra
import { renderPokemons } from "./render.js";


// estructura de la pagina
document.querySelector("#app").innerHTML = `
    <main>

        <h1>Pokédex</h1>

        <input 
            type="text" 
            id="buscador" 
            placeholder="Buscar Pokémon..."
        >

        <p id="estado">
            Cargando Pokémon...
        </p>

        <section id="pokemon-container"></section>

    </main>
`;


// elementos del DOM
const estado = document.querySelector("#estado");
const contenedor = document.querySelector("#pokemon-container");
const buscador = document.querySelector("#buscador");

let listaPokemons = [];

// funcion principal
async function iniciar() {

    try {

        // esperar datos de la API
        listaPokemons = await obtenerPokemons();
        // mostrar pokemons
        renderPokemons(listaPokemons, contenedor);
        // cambiar el estado
        estado.textContent = "Pokémon cargados correctamente";

    } catch (error) {

        estado.textContent =
            "Error al cargar los Pokémon. Inténtalo de nuevo.";

    }
}

// buscar pokemon mientras escribimos
buscador.addEventListener("input", () => {

    // obtener lo que escribe el usuario
    const texto = buscador.value.toLowerCase();

    // filtrar pokemons
    const filtrados = listaPokemons.filter(pokemon => {
        return pokemon.nombre.includes(texto);
    });

    // mostrar pokemons filtrados
    renderPokemons(filtrados, contenedor);
});

// iniciar la app
iniciar();