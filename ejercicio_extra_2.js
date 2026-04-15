// Crear una array con los numeros del 0 al 9.
// Calcular la suma de los numeros: 
// Calcular la suma de los pares. 2+4+6+8
// Calcular la suma de los impares: 1+3+5+7+9
// Calcular la suma de los primos: 
// function esPrimo(numero) {
//   if (numero <= 1) return false; // 1 y menores no son primos
//   for (let i = 2; i <= Math.sqrt(numero); i++) {
//     if (numero % i === 0) return false; // Divisible, no es primo
//   }
//   return true; // Es primo
// }

// Calcular la suma de los numeros perfectos:
// function esNumeroPerfecto(n) {
//     if (n < 2) return false;
//     let suma = 0;
//     for (let i = 1; i < n; i++) {
//         if (n % i === 0) {
//             suma += i; // Suma los divisores propios
//         }
//     }
//     return suma === n; // Compara la suma con el número original
// }



// 1. Crear un array con números del 0 al 9
// Array.from genera un array de longitud 10
// (_, i) => i significa que usamos el índice como valor
const numeros = Array.from({ length: 10 }, (_, i) => i);

// ===============================
// FUNCIONES AUXILIARES
// ===============================

// Función que comprueba si un número es primo
const esPrimo = (numero) => {
    // Los números menores o iguales a 1 NO son primos
    if (numero <= 1) return false;

    // Recorremos desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        // Si es divisible entre otro número, no es primo
        if (numero % i === 0) return false;
    }

    // Si no tiene divisores, es primo
    return true;
};

// Función que comprueba si un número es perfecto
const esNumeroPerfecto = (n) => {
    // Los números menores que 2 no pueden ser perfectos
    if (n < 2) return false;

    let suma = 0;

    // Buscamos todos los divisores propios (sin incluir el propio número)
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            suma += i; // sumamos los divisores
        }
    }

    // Si la suma de divisores es igual al número → es perfecto
    return suma === n;
};

// ===============================
// CÁLCULOS (PROGRAMACIÓN FUNCIONAL)
// ===============================

// 🔹 Suma total de todos los números
// reduce acumula valores: acc (acumulador) + n (valor actual)
const sumaTotal = numeros.reduce((acc, n) => acc + n, 0);

// 🔹 Suma de números pares
const sumaPares = numeros
    // filter crea un nuevo array solo con pares
    .filter((n) => n % 2 === 0)
    // luego sumamos esos valores
    .reduce((acc, n) => acc + n, 0);

// 🔹 Suma de números impares
const sumaImpares = numeros
    .filter((n) => n % 2 !== 0)
    .reduce((acc, n) => acc + n, 0);

// 🔹 Suma de números primos
const sumaPrimos = numeros
    // usamos la función esPrimo como filtro
    .filter(esPrimo)
    .reduce((acc, n) => acc + n, 0);

// 🔹 Suma de números perfectos
const sumaPerfectos = numeros
    .filter(esNumeroPerfecto)
    .reduce((acc, n) => acc + n, 0);

// ===============================
// RESULTADOS
// ===============================

// Mostramos todo en consola
console.log("Array:", numeros);

console.log("Suma total:", sumaTotal);
console.log("Suma pares:", sumaPares);
console.log("Suma impares:", sumaImpares);
console.log("Suma primos:", sumaPrimos);
console.log("Suma números perfectos:", sumaPerfectos);

// ===============================
// EXTRA (VERSIÓN PRO - UNA SOLA PASADA)
// ===============================

// Aquí usamos UN SOLO reduce para hacer TODO
const resultado = numeros.reduce(
    (acc, n) => {
        // acumulamos la suma total
        acc.total += n;

        // comprobamos si es par o impar
        if (n % 2 === 0) {
            acc.pares += n;
        } else {
            acc.impares += n;
        }

        // comprobamos si es primo
        if (esPrimo(n)) {
            acc.primos += n;
        }

        // comprobamos si es perfecto
        if (esNumeroPerfecto(n)) {
            acc.perfectos += n;
        }

        return acc; // devolvemos el acumulador actualizado
    },
    {
        total: 0,
        pares: 0,
        impares: 0,
        primos: 0,
        perfectos: 0,
    }
);

// mostramos resultado final
console.log("Resultado en una sola pasada:", resultado);