/*Ejercicio 4.3 • Call/apply/bind comparados
Usa la misma función de impresión con tres contextos distintos y demuestra la diferencia entre `call`, `apply` y `bind`.
Entrega esperada:
• Código funcional y legible.
• Breve explicación del razonamiento usado.
• Salida esperada o caso de prueba mínimo.
*/
function showCourse(prefix, suffix) {
    return `${prefix} ${this.name} ${suffix}`;
}

const courseA = { name: "JavaScript" };
const courseB = { name: "Azure" };

console.log(showCourse.call(courseA, "Curso:", "[activo]"));
console.log(showCourse.apply(courseB, ["Curso:", "[cerrado]"]));

const boundFn = showCourse.bind(courseA, "Programa:");
console.log(boundFn("[premium]"));

/*Explicación
Las tres técnicas cambian el valor de `this`, pero no se usan igual:
- `call` invoca la función inmediatamente y pasa los argumentos uno a uno.
- `apply` también invoca inmediatamente, pero recibe los argumentos en un array.
- `bind` no ejecuta la función; devuelve una nueva función con `this` y, si se desea, algunos argumentos ya fijados.
Salida esperada / prueba mínima
Salida esperada:
Curso: JavaScript [activo]
Curso: Azure [cerrado]
Programa: JavaScript [premium]
*/
