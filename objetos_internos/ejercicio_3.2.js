/*Ejercicio 3.2 • Normalizador de títulos
Limpia un conjunto de títulos: trim, minúsculas, reemplazo de espacios múltiples y detección de coincidencia parcial con una palabra clave.
Entrega esperada:
• Código funcional y legible.
• Breve explicación del razonamiento usado.
• Salida esperada o caso de prueba mínimo.
*/
function normalizeTitles(titles, keyword) {
  return titles.map(title => {
    const normalized = title
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");

    return {
      original: title,
      normalized,
      hasKeyword: normalized.includes(keyword.toLowerCase())
    };
  });
}

console.log(normalizeTitles(
  ["  Introducción   a JS ", "PROMESAS en JavaScript", "CSS básico"],
  "js"
));

/*Explicación
Aquí se combinan varias utilidades de `String` y una expresión regular. 
`trim()` quita espacios sobrantes en los extremos, `toLowerCase()` normaliza mayúsculas y minúsculas, y `replace(/\s+/g, " ")` reduce grupos de espacios a uno solo.
Luego usamos `includes()` para detectar una coincidencia parcial con la palabra clave.
Salida esperada / prueba mínima
Salida esperada aproximada:
[
  { original: '  Introducción   a JS ', normalized: 'introducción a js', hasKeyword: true },
  { original: 'PROMESAS en JavaScript', normalized: 'promesas en javascript', hasKeyword: false },
  { original: 'CSS básico', normalized: 'css básico', hasKeyword: false }
]
