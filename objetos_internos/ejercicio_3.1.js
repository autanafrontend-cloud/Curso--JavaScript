/* Ejercicio 3.1 • Informe numérico
Recibe una lista de precios como strings, conviértela a números válidos, elimina los no numéricos y devuelve mínimo, máximo, suma y media formateada.
Entrega esperada:
• Código funcional y legible.
• Breve explicación del razonamiento usado.
• Salida esperada o caso de prueba mínimo.
*/
function numericReport(priceStrings) {
  const values = priceStrings
    .map(v => Number(v))
    .filter(v => !Number.isNaN(v));

  const min = Math.min(...values);
  const max = Math.max(...values);
  const sum = values.reduce((acc, n) => acc + n, 0);
  const avg = (sum / values.length).toFixed(2);

  return { min, max, sum, avg };
}

console.log(numericReport(["10", "25.5", "abc", "40"]));

/* Explicación
Primero convertimos cada string a número. 
Después eliminamos los valores no válidos con `Number.isNaN`.
Con la colección limpia ya podemos usar `Math.min`, `Math.max` y `reduce` para calcular suma y media.
La media se formatea con dos decimales para que el informe quede más presentable.
Salida esperada / prueba mínima
Salida esperada:
{ min: 10, max: 40, sum: 75.5, avg: '25.17' }
*/

