/*Ejercicio 4.6 • Fetch helper
Escribe una función `fetchJson(url)` basada en `async/await` que valide `response.ok`, devuelva JSON o lance un error.
Entrega esperada:
• Código funcional y legible.
• Breve explicación del razonamiento usado.
• Salida esperada o caso de prueba mínimo.
*/

async function fetchJson(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }

    return await response.json();
}

// Ejemplo de uso
fetchJson("https://jsonplaceholder.typicode.com/users/1")
    .then(data => console.log(data))
    .catch(error => console.error(error.message));

/*Explicación
La función encapsula un patrón muy habitual: pedir datos JSON y validar si la respuesta HTTP fue correcta.
`await fetch(url)` espera la respuesta; después se comprueba `response.ok`.
Si el servidor responde con error, lanzamos una excepción para que el código cliente la capture en `catch`.
Si todo va bien, devolvemos el JSON ya parseado.
Salida esperada / prueba mínima
Caso de prueba mínimo:
- Con una URL válida devuelve un objeto JSON.
- Con una URL que responda 404 o 500 lanza un error controlado.
*/