//Ejercicio: Objetos en JavaScript – Objetivo

//Tu objetivo es practicar el uso de objetos para almacenar y utilizar datos dentro de tu program
//jercicio 1: La suma de un array
//El objeto Array en JavaScript tiene un método incorporado llamado reduce que recorre cada valor de un array y devuelve un resultado. Es muy útil para calcular sumas.
//Escribe una función que tome un array de números como parámetro y devuelva la suma de todos los números del array (es decir, crea tu propia versión de reduce()).
//Usa el siguiente array:
//const numbers = [2, 22, 12, 17, 18, 39, 129];
//Instrucciones:
//Declara una función llamada arraySum que reciba numbers como parámetro
//Declara una variable sum e inicialízala en 0
//Dentro de la función, recorre el array usando forEach
//Usa forEach((number, index) => {...})
//En cada iteración, suma el valor actual al total sum
//Devuelve sum
//Muestra el resultado con console.log(arraySum(numbers))

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(numbers) {
  let sum = 0;

  numbers.forEach((number, index) => {
    sum += number;
  });

  return sum;
}

console.log(arraySum(numbers));

// Ejercicio 2: Libro favorito

// Escribe un objeto “Book” (Libro).
// Tu objeto debe tener el título del libro, el autor,
// el número de páginas y si has leído el libro o no.
// Declara una variable llamada book y asígnale un objeto ({}).
// Usando notación de punto:
// asigna el título de tu libro favorito a una propiedad llamada title,
// asigna el número de páginas a una propiedad llamada pages,
// y asigna cuántas veces has leído el libro a la propiedad readCount.
// Usando notación de punto, añade un método llamado info al objeto book
// que devuelva un string que combine el título, las páginas y readCount
// como una cadena informativa.
// Ejemplo:
// The Hobbit by J.R.R. Tolkien, 295 páginas, leído 3 veces.
// Después de añadir las propiedades y el método al objeto,
// llama al método book.info() dentro de console.log para imprimir el resultado.

const book = {};

// propiedades del libro
book.title = "The Hobbit";
book.author = "J.R.R. Tolkien";
book.pages = 295;
book.readCount = 3;

// método info
book.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, read ${this.readCount} times.`;
};

// imprimir resultado
console.log(book.info());

// Ejercicio 3: Invertir una cadena
// Se te dará una frase (string). Tu tarea es invertir cada palabra de la oración.
// Comienza con el siguiente código:
// let sentence = "The quick brown fox jumps over the lazy dog";
// Convierte la frase en un array de palabras
// Itera sobre cada palabra
// Convierte cada palabra en un array de caracteres
// Invierte cada array de caracteres y actualiza el array de palabras
// Convierte el array de palabras invertidas de nuevo en un string
// El resultado final, dada la frase inicial, debe ser:
// ehT kciuq nworb xof spmuj revo eht yzal god

let sentence = "The quick brown fox jumps over the lazy dog";

// convertir la frase en un array de palabras
let words = sentence.split(" ");

// recorrer cada palabra y revertirla
let reversedWords = words.map(word => {
  return word.split("").reverse().join("");
});

// unir el array de palabras invertidas en una frase
let result = reversedWords.join(" ");

console.log(result);


// Ejercicio 4: Parsear un CSV
// Tu tarea es convertir una cadena CSV en un objeto.
// CSV significa "Valores Separados por Comas" y es un formato común
// para trabajar y almacenar datos en forma de tabla.
// Cada campo está separado por comas,
// y cada fila está separada por un salto de línea (\n).
// Comienza con el siguiente código:
// let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
// Convierte el string en un array de filas (separando por \n)
// Separa la primera fila para obtener los encabezados (headers)
// Usa los headers para construir objetos para cada fila
// Convierte los datos en un array de objetos
// Resultado esperado:
// [
//   { name: "Frodo", age: "50" },
//   { name: "Sam", age: "38" },
//   { name: "Merry", age: "36" },
//   { name: "Pippin", age: "26" }
// ]

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

// 1. Separar filas
let rows = csvData.split("\n");

// 2. Obtener headers (primera fila)
let headers = rows[0].split(",");

// 3. Crear array de objetos
let result = [];

for (let i = 1; i < rows.length; i++) {
  let values = rows[i].split(",");

  let obj = {};

  // asignar cada valor a su header correspondiente
  for (let j = 0; j < headers.length; j++) {
    obj[headers[j]] = values[j];
  }

  result.push(obj);
}

console.log(result);