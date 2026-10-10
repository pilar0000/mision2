# 🌴 POKÉDEX TROPICAL 🌺

Misión 2 - Aplicación con API

## Cómo probarlo

1. Abrir el proyecto con VS Code.
2. Ejecutar en la terminal:

   npm install

3. Después ejecutar:

   npm run dev

4. Abrir en el navegador la dirección que muestra Vite, normalmente:

   http://localhost:5173/

5. La aplicación cargará 40 Pokémon desde PokéAPI.
6. Se puede utilizar el buscador para filtrar Pokémon por nombre.
7. Si no existe ningún resultado, se muestra un mensaje informando al usuario.

## Características

- Consumo de una API pública con `fetch`.
- Uso de `async` y `await`.
- Gestión de errores con `try/catch`.
- Comprobación de respuestas con `response.ok`.
- Estado de carga mientras llegan los datos.
- Mensaje de error si falla la API.
- 40 Pokémon con nombre, imagen y tipo.
- Buscador de Pokémon.
- Filtrado mediante `filter()`.
- Transformación de datos mediante `map()`.
- Uso de `Promise.all()` para cargar los detalles de los Pokémon.
- Código separado en módulos.
- Creación de elementos del DOM desde JavaScript.
- Uso de `localStorage` para guardar los Pokémon y evitar repetir peticiones innecesarias.

## Estructura del proyecto

Los archivos principales son:

- `src/main.js`: coordina la aplicación, controla el buscador y los estados de carga y error.
- `src/api.js`: realiza las peticiones a PokéAPI y gestiona los datos guardados en `localStorage`.
- `src/render.js`: crea y muestra las tarjetas de los Pokémon.
- `src/style.css`: contiene el diseño de la aplicación.
- `index.html`: contiene la base HTML utilizada por Vite.

## Uso de IA

Durante el desarrollo he utilizado ChatGPT para resolver dudas y revisar algunas partes del proyecto.

Me ha ayudado a entender el uso de `fetch`, `async/await`, `Promise.all()`, `map()`, `filter()` y `localStorage`.

He ido probando cada cambio en el navegador antes de seguir con el siguiente paso.

Algunos prompts utilizados:

- ¿Cómo muestro las imágenes y tipos de cada Pokémon?
- ¿Cómo puedo hacer un buscador?
- ¿Se pueden guardar los datos de alguna forma para no repetir las peticiones?

## Autopsia

### 1. Obtener los detalles de cada Pokémon

La primera petición a PokéAPI devuelve una lista con el nombre y la URL de cada Pokémon.

Para conseguir también la imagen y los tipos he realizado una petición adicional para cada uno y he esperado a que todas terminen utilizando `Promise.all()`.

Otra posibilidad habría sido mostrar solo la información de la primera petición, pero tendría menos datos para cada tarjeta.

### 2. Uso de `localStorage`

He decidido guardar los Pokémon en `localStorage` después de obtenerlos de la API.

De esta forma, cuando se vuelve a cargar la página, primero se comprueba si los datos ya están guardados y se pueden utilizar sin repetir todas las peticiones.

La alternativa habría sido consultar PokéAPI cada vez que se abre la aplicación, pero eso haría más peticiones y la carga sería más lenta.