// Pedir dos numeros por ejemplo: 1 y 9
// Calcular la suma de los numeros: 1+2+3+4+5+6+7+8+9
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

let num1 = Number(prompt("Introduce el primer número:"));
let num2 = Number(prompt("Introduce el segundo número:"));

// Asegurar orden
let min = Math.min(num1, num2);
let max = Math.max(num1, num2);

// Variables acumuladoras
let sumaTotal = 0;
let sumaPares = 0;
let sumaImpares = 0;
let sumaPrimos = 0;
let sumaPerfectos = 0;

// Función primo
function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

// Función número perfecto
function esNumeroPerfecto(n) {
    if (n < 2) return false;

    let suma = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            suma += i;
        }
    }
    return suma === n;
}

// Recorrer rango
for (let i = min; i <= max; i++) {
    sumaTotal += i;

    if (i % 2 === 0) {
        sumaPares += i;
    } else {
        sumaImpares += i;
    }

    if (esPrimo(i)) {
        sumaPrimos += i;
    }

    if (esNumeroPerfecto(i)) {
        sumaPerfectos += i;
    }
}

// Resultados
console.log("Suma total:", sumaTotal);
console.log("Suma pares:", sumaPares);
console.log("Suma impares:", sumaImpares);
console.log("Suma primos:", sumaPrimos);
console.log("Suma números perfectos:", sumaPerfectos);