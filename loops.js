// Ejercicio 1: Ignorar números pares
// En este ejercicio, contarás del 1 al 100. Para cada número impar, imprimirás el número en la consola. Si el número es par, no hagas nada.
// Crea un bucle for que evalúe los números del 1 al 100.
// Dentro del cuerpo del bucle, escribe una estructura condicional if/else que verifique si un número es impar.
// Si el número es impar, imprímelo en la consola; de lo contrario, no hagas nada y continúa con el siguiente número.

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Ejercicio 2: FIZZBUZZ
// FIZZBUZZ es un problema muy común en entrevistas de programación. A continuación están las instrucciones para resolverlo:

// Crea un bucle for que evalúe los números del 1 al 100 como en el ejercicio anterior.

// Escribe una estructura if/else dentro del bucle que verifique lo siguiente:
// Si el número es divisible entre 3, entonces imprime en consola "FIZZ"
// Si el número es divisible entre 5, entonces imprime en consola "BUZZ"
// Si el número es divisible entre 3 y 5, entonces imprime en consola "FIZZBUZZ"

// Ejemplo: 15 imprimiría "FIZZBUZZ", 33 imprimiría "FIZZ" y 35 imprimiría "BUZZ"

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZBUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  }
}

// Ejercicio 3: Repetir con while y do/while

// Para este ejercicio, repite los ejercicios 1 y 2 usando soluciones con bucles while y do/while.

// while

let i = 1;

while (i <= 100) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

//do -while

let i = 1;

do {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
} while (i <= 100);

//FIZZBUZZ con WHILE

let i = 1;

while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZBUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  }
  i++;
}

//FIZZBUZZ con DO/WHILE

let i = 1;

do {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZBUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  }
  i++;
} while (i <= 100);


