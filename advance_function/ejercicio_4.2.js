/*Ejercicio 4.2 • Cuotas con closure
Implementa `makeQuota(limit)` que devuelva una función capaz de consumir una unidad por llamada hasta quedarse sin cupo.
Entrega esperada:
• Código funcional y legible.
• Breve explicación del razonamiento usado.
• Salida esperada o caso de prueba mínimo.
*/
function makeQuota(limit) {
    let remaining = limit;

    return function () {
        if (remaining > 0) {
            remaining--;
            return `Acceso permitido. Quedan ${remaining}`;
        }
        return "Sin cupo disponible";
    };
}

const quota = makeQuota(3);
console.log(quota());
console.log(quota());
console.log(quota());
console.log(quota());

/*El closure aparece porque la función devuelta sigue teniendo acceso a la variable `remaining` aunque `makeQuota` ya haya terminado.
Eso permite mantener estado privado entre llamadas sin usar variables globales.
Cada invocación consume una unidad del cupo hasta agotarlo.
Salida esperada / prueba mínima
Salida esperada:
Acceso permitido. Quedan 2
Acceso permitido. Quedan 1
Acceso permitido. Quedan 0
Sin cupo disponible
*/