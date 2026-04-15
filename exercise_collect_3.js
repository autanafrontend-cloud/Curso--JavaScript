/*
Pensando que el dia de mañana podemos filtrar o computar cosas por otros criterios, usar funciones y no lambdas
let arrayDeNombres = ["juan","mariano","luis","ana","luisa"];
let arrayDeNombres = ["pepe","luisa","perico","isabel"];
juntar las dos cadenas (concat)
eliminar los duplicados (set)
quiero ordenar las palabras por el numero de letras de menor a mayor. order()
quiero transformar las palabras a una array en Mayúsculas (map)
Cada elemento lo quiero mostrar poniendo "nombre: "+elemento (forEach)
Quiero saber cual es el total de letras de todas las palabras en la colección (reduce)
*/


var arrayDeNombres1 = ["juan", "mariano", "luis", "ana", "luisa"];
var arrayDeNombres2 = ["pepe", "luisa", "perico", "isabel"];

function concatenarArrays(arrs1, arrs2) {
    return arrs1.concat(arrs2);
}

function eliminarDuplicados(arr) {
    return Array.from(new Set(arr));
}

function ordenarPorLongitud(arr) {
    return arr.sort(function (a, b) {
        return a.length - b.length;
    });
}

function convertirMayusculas(arr) {
    return arr.map(function (elemento) {
        return elemento.toUpperCase();
    });
}

function mostrarElementos(arr) {
    arr.forEach(function (elemento) {
        console.log("nombre: " + elemento);
    });
}

function totalLetras(arr) {
    return arr.reduce(function (acumulador, elemento) {
        return acumulador + elemento.length;
    }, 0);
}

var concatenado = concatenarArrays(arrayDeNombres1, arrayDeNombres2);
var sinDuplicados = eliminarDuplicados(concatenado);
var ordenado = ordenarPorLongitud(sinDuplicados);
var enMayusculas = convertirMayusculas(ordenado);

mostrarElementos(enMayusculas);

var total = totalLetras(enMayusculas);
console.log("Total de letras:", total);