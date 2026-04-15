// Ejercicio: Funciones de orden superior en JS
//
// Objetivo:
//
// Tu objetivo es escribir una función que reciba un número como parámetro
// y devuelva una función que sume ese número con un nuevo número que se le pase
// como parámetro.

// Ejercicio 1:
//
// Escribe una función que reciba un número como parámetro
// y devuelva una función que sume ese número con otro número nuevo.
//
// Declara una función llamada plus que reciba un parámetro number.
//
// Dentro del cuerpo de plus, usa return para devolver una función anónima.
//
// La función devuelta recibirá un parámetro llamado plusNumber
// y devolverá la suma de plusNumber con el primer parámetro number.
//
// Luego, declara una variable plus15 que sea igual a plus(15).
//
// Finalmente, usa console.log para imprimir el resultado de llamar
// a plus15(10).
//
// El resultado esperado debe ser:
// console.log(plus15(10)) // 25

function plus(number) {
  return function (plusNumber) {
    return number + plusNumber;
    //Esta función “recuerda” el valor number = 15 (esto se llama closure), y cuando se llama a plus15(10), se suma 15 + 10 y se devuelve el resultado, que es 25.
  };
}

const plus15 = plus(15);//Aquí estás ejecutando la función plus con el argumento 15, lo que devuelve una nueva función que suma 15 a su argumento. Esa nueva función se asigna a la variable plus15.
//Le pasas el valor 15
//Entonces number = 15
//se guarda la función anónima que suma plusNumber + number (que es 15) en plus15
console.log(plus15(10)); // 25

// Ejercicio 2: forEach
//
// Usa el método forEach de los arrays para imprimir los nombres
// de cada usuario dentro de la lista.
//
// Comienza con el siguiente código:
//
/*
let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];
*/
let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

// recorrer el array e imprimir los nombres
users.forEach((user) => {
  console.log(user.name);
});


// Ejercicio 3: map
//
// Usa el método map de los arrays para devolver un nuevo array
// que contenga solo objetos con los nombres y las puntuaciones (score).
//
// Comienza con el array users definido anteriormente.

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

// crear nuevo array solo con name y score
let result = users.map((user) => {
  return {
    name: user.name,
    score: user.score,
  };
});

console.log(result);

// Ejercicio 4: filter
//
// Usa el método filter de los arrays para devolver un nuevo array
// que solo contenga los usuarios que estén marcados como activos (isActive = true).
//
// Comienza con el array users definido anteriormente.

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

// filtrar solo usuarios activos
let activeUsers = users.filter((user) => {
  return user.isActive === true;
});

console.log(activeUsers);

// Ejercicio 5: sort
//
// Usa el método sort de los arrays para ordenar el array users
// "in-place" (modificando el mismo array original).
//
// Debes ordenar los usuarios en orden descendente según su score.
//
// Comienza con el array users definido anteriormente.

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

// ordenar en orden descendente por score (mayor a menor)
users.sort((a, b) => {
  return b.score - a.score;
});

console.log(users);

// Ejercicio 6: reduce
//
// Usa el método reduce de los arrays para devolver la suma total
// de los scores de todos los usuarios.
//
// Una vez tengas la suma total, calcula el promedio (average)
// de los scores de los usuarios.
//
// Comienza con el array users definido anteriormente.


let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

// 1. sumar todos los scores
let totalScore = users.reduce((acc, user) => {
  return acc + user.score;
}, 0);

// 2. calcular el promedio
let averageScore = totalScore / users.length;

console.log("Total score:", totalScore);
console.log("Average score:", averageScore);
