//Ejercicio 1
// 1. Inicializa un número entero para representar un número favorito y asígnale un valor a tu elección o puedes asignar un número aleatorio a esta variable.
// 2. Usa window.prompt() para pedir al usuario que introduzca un número y guarda el resultado en una variable.
// 3. Crea una sentencia if que, si el número adivinado es menor que el valor inicial, imprima "demasiado bajo".
// 4. Crea una sentencia else if que, si el número es mayor que el valor inicial, imprima "demasiado alto".
// 5. Crea una sentencia else que imprima "¡Felicidades!".

//  Número favorito (puedes cambiarlo o hacerlo random)
let favoriteNumber = Math.floor(Math.random() * 10) + 1;

// 2. Pedir número al usuario
let guess = Number(window.prompt("Adivina el número (1-10):"));

// 3, 4 y 5. Condiciones
if (guess < favoriteNumber) {
    console.log("too low");
} else if (guess > favoriteNumber) {
    console.log("too high");
} else {
    console.log("Congratulations!!!");
}

// Ejercicio 2
// Tu objetivo es tomar el mes de nacimiento de un usuario y mostrar la estación del año en la que nació.
// 1. Declara una variable llamada birthMonth y asígnale el valor del resultado de window.prompt("¿Cuál es tu mes de nacimiento?").
// 2. Crea una estructura switch-case con varios casos y un caso por defecto (default).
// 3. Muestra un mensaje en la consola que indique la estación en la que nació el usuario según el mes introducido.

let birthMonth = window.prompt("What is your birth month?");

// Convertimos a minúsculas para evitar errores
birthMonth = birthMonth.toLowerCase();

switch (birthMonth) {
    case "december":
    case "january":
    case "february":
        console.log("You were born in Winter ");
        break;

    case "march":
    case "april":
    case "may":
        console.log("You were born in Spring ");
        break;

    case "june":
    case "july":
    case "august":
        console.log("You were born in Summer ");
        break;

    case "september":
    case "october":
    case "november":
        console.log("You were born in Autumn ");
        break;

    default:
        console.log("Invalid month");
}

//Ejercicio 3
//Dada una lógica de negocio escrita en forma de sentencias if/else, reescribe el programa utilizando sentencias switch.

//Comienza con el siguiente código:

// let typeId = "01";
// let colorId = "PU";
// let sizeId = "L";

// let type = "";
// let color = "";
// let size = "";

// if (typeId == "01") {
//   type = "Tank top";
// } else if (typeId == "02") {
//   type = "T-Shirt";
// } else if (typeId == "03") {
//   type = "Long Sleeve";
// } else if (typeId == "04") {
//   type == "Sweat Shirt";
// } else {
//   type = "Other";
// }

// if (colorId == "BL") {
//   color = "Black";
// } else if (colorId == "BL") {
//   color = "Blue";
// } else if (colorId == "RD") {
//   color = "Red";
// } else if (colorId == "PU") {
//   color = "Purple";
// } else {
//   color = "White";
// }

// if (sizeId == "S") {
//   size = "Small";
// } else if (sizeId == "M") {
//   size = "Medium";
// } else if (sizeId == "L") {
//   size = "Large";
// } else if (sizeId == "XL") {
//   size = "Extra Large";
// } else {
//   size = "One Size Fits All";
// }

// console.log(`Product: ${size} ${color} ${type}`);

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

// TYPE
switch (typeId) {
    case "01":
        type = "Tank top";
        break;
    case "02":
        type = "T-Shirt";
        break;
    case "03":
        type = "Long Sleeve";
        break;
    case "04":
        type = "Sweat Shirt";
        break;
    default:
        type = "Other";
}

// COLOR
switch (colorId) {
    case "BL":
        color = "Black";
        break;
    case "BU":
        color = "Blue";
        break;
    case "RD":
        color = "Red";
        break;
    case "PU":
        color = "Purple";
        break;
    default:
        color = "White";
}

// SIZE
switch (sizeId) {
    case "S":
        size = "Small";
        break;
    case "M":
        size = "Medium";
        break;
    case "L":
        size = "Large";
        break;
    case "XL":
        size = "Extra Large";
        break;
    default:
        size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);
