/*
Ejercicio 4.1 • buildReport con objeto de opciones
Diseña una función que reciba un objeto con `title`, `level`, `students` y valores por defecto. Debe devolver un resumen formateado.
Entrega esperada:
• Código funcional y legible.
• Breve explicación del razonamiento usado.
• Salida esperada o caso de prueba mínimo.
*/
function buildReport({ title = "Sin título", level = "No definido", students = 0 } = {}) {
    return `Informe: ${title} | Nivel: ${level} | Alumnos: ${students}`;
}

console.log(buildReport({ title: "JavaScript", level: "JSA", students: 18 }));
console.log(buildReport());

/*Explicación
La función usa desestructuración en los parámetros y valores por defecto.
Eso permite recibir un solo objeto de opciones sin depender del orden de los argumentos y sin fallar cuando falten propiedades.
Es una técnica muy útil cuando una función tiene varios parámetros opcionales.
Salida esperada / prueba mínima
Salida esperada:
Informe: JavaScript | Nivel: JSA | Alumnos: 18
Informe: Sin título | Nivel: No definido | Alumnos: 0
*/