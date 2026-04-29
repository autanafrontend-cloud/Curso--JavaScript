/*Ejercicio 4.5 • Promesas en carrera
Construye tres promesas con tiempos distintos y compara qué devuelve `Promise.all`, `Promise.any` y `Promise.race`.
Entrega esperada:
• Código funcional y legible.
• Breve explicación del razonamiento usado.
• Salida esperada o caso de prueba mínimo.
*/
const p1 = new Promise(resolve => setTimeout(() => resolve("primera"), 300));
const p2 = new Promise(resolve => setTimeout(() => resolve("segunda"), 100));
const p3 = new Promise((_, reject) => setTimeout(() => reject("tercera falla"), 200));

Promise.all([p1, p2])
    .then(result => console.log("all:", result));

Promise.any([p3, p1, p2])
    .then(result => console.log("any:", result));

Promise.race([p1, p2, p3])
    .then(result => console.log("race:", result))
    .catch(error => console.log("race error:", error));

/*Explicación
`Promise.all` espera a que todas las promesas se resuelvan y devuelve un array con todos los resultados.
`Promise.any` devuelve la primera que se resuelve correctamente, ignorando rechazos mientras exista alguna resolución válida.
`Promise.race` devuelve la primera que termine, ya sea resolución o rechazo.
Por eso cada combinador responde a una necesidad distinta.
Salida esperada / prueba mínima
Resultado esperado aproximado:
- `all` -> ['primera', 'segunda']
- `any` -> 'segunda'
- `race` -> 'segunda'
*/
