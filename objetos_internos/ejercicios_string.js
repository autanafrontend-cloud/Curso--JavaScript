/*
•	Escribir una función que elimine todas las ocurrencias de una subcadena específica de una cadena dada. eliminar("que queso es un paquete","que")–>" so es un pate"
*/
function eliminar(texto, subcadena) {
  return texto.split(subcadena).join('');
}

// Ejemplo
console.log(eliminar("que queso es un paquete", "que")); // " so es un pate"

/*
•	Escribir una función que reemplace todas las ocurrencias de un carácter específico en una cadena dada con otro carácter. cambiar("hola que tal","a","@")–>"hol@ que t@l"
*/
function cambiar(texto, original, nuevo) {
  return texto.split(original).join(nuevo);
}

// Ejemplo
console.log(cambiar("hola que tal", "a", "@")); // "hol@ que t@l"

/*
•	Escribir una función que invierta el orden de los caracteres de una cadena dada. invertir("hola")–>"aloh"
*/
function invertir(texto) {
  return texto.split('').reverse().join('');
}

// Ejemplo
console.log(invertir("hola")); // "aloh"

/*
•	Escribir una función que cuente el número de veces que se repite un carácter específico en una cadena dada. contarChar("gola que tal",'a')–>2
*/
function contarChar(texto, char) {
  return texto.split('').filter(c => c === char).length;
}

// Ejemplo
console.log(contarChar("gola que tal", "a")); // 2

/*
•	Escribir una función que elimine los espacios en blanco al principio y al final de una cadena dada, y que si hay espacios dobles en el interior los cambie por un solo espacio. sinEspacios(" hola que tal ")–>"hola que tal"
*/
function sinEspacios(texto) {
  return texto.trim().replace(/\s+/g, ' ');
}

// Ejemplo
console.log(sinEspacios(" hola   que tal ")); // "hola que tal"


/*
•	Escribir una función que compruebe si una cadena es un palíndromo (una palabra o frase que se lee igual de izquierda a derecha y de derecha a izquierda). palindromo("hola")–> false palindromo("ana")–>true
*/
function palindromo(texto) {
  const limpio = texto.toLowerCase();
  return limpio === limpio.split('').reverse().join('');
}

// Ejemplo
console.log(palindromo("hola")); // false
console.log(palindromo("ana"));  // true 

/*
•	Escribir una función que nos cuente las vocales que tiene una cadena. vocales("Alegría")–>4
*/

function vocales(texto) {
  const coincidencias = texto.match(/[aeiouáéíóú]/gi);
  return coincidencias ? coincidencias.length : 0;
}

// Ejemplo
console.log(vocales("Alegría")); // 4