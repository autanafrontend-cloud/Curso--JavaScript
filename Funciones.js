// Ejercicio: Funciones en JavaScript

// Objetivo:
// Tu objetivo es practicar funciones en JavaScript con diferentes valores de parámetros y resultados.

// Ejercicio 1: Imprimir impares (continuación)

// En el pasado, creamos una estructura condicional dentro de un bucle que contaba del 1 al 100
// e imprimía solo los números impares.

// Tu tarea es escribir una función printOdds() que reciba un parámetro (count)
// y use un bucle y una estructura condicional para contar hasta el número pasado,
// imprimiendo solo los números impares.

// Declara una función llamada printOdds usando la notación de declaración:
// function <nombre>() { ... }

// La función debe recibir un parámetro llamado count.

// El cuerpo de la función debe:
// - contener un bucle for que cuente hasta el número pasado como parámetro
// - una estructura if/else que determine si el valor actual es impar
// - y luego usar console.log() para imprimir el valor impar

// BONUS: Como no sabes qué número se puede pasar como count,
// usa un if para manejar el caso de que se pase un número negativo.

function printOdds(count) {
  // BONUS: manejar números negativos
  if (count < 0) {
    console.log("Por favor, introduce un número positivo");
    return;
  }

  for (let i = 1; i <= count; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

// Ejercicio 2: ¿Legal?

// Escribe una función que reciba un nombre y una edad, e imprima un mensaje de saludo en la consola usando el nombre.

// Declara una función llamada checkAge usando notación de declaración:
// function <nombre>() { ... }

// La función debe recibir dos parámetros: userName y age

// El cuerpo de la función debe:
// - declarar e inicializar una variable local aboveSixteen con el string:
//   "¡Felicidades ${userName}, puedes conducir!"
// - declarar e inicializar una variable local belowSixteen con el string:
//   "Lo siento ${userName}, pero debes esperar hasta tener 16 años."
// - usar una estructura if/else para determinar si la edad es menor de 16
// - imprimir el mensaje correcto en la consola

// BONUS: Los parámetros son opcionales, puede que no se pase userName o age.
// Maneja correctamente el caso en el que no se pasen valores.

function checkAge(userName, age) {
  // BONUS: valores por defecto si no se pasan parámetros
  if (userName === undefined) {
    userName = "usuario";
  }

  if (age === undefined) {
    console.log("No se proporcionó una edad válida.");
    return;
  }

  let aboveSixteen = `¡Felicidades ${userName}, puedes conducir!`;
  let belowSixteen = `Lo siento ${userName}, pero debes esperar hasta tener 16 años.`;

  if (age < 16) {
    console.log(belowSixteen);
  } else {
    console.log(aboveSixteen);
  }
}

// Ejercicio 3: ¿En qué cuadrante?

// Escribe una función que reciba dos parámetros, x e y (coordenadas en el plano cartesiano),
// e imprima un mensaje indicando si el punto (x, y) está sobre el eje X o el eje Y,
// o en qué cuadrante se encuentra.

// Ejemplos:
// (0, 2) está sobre el eje X
// (1, 2) está en el Cuadrante 1
// (-6, 18) está en el Cuadrante 2

function checkQuadrant(x, y) {
  // Caso: punto en el origen
  if (x === 0 && y === 0) {
    console.log("El punto está en el origen");
    return;
  }

  // Caso: sobre el eje Y
  if (x === 0) {
    console.log(`(${x}, ${y}) está sobre el eje Y`);
    return;
  }

  // Caso: sobre el eje X
  if (y === 0) {
    console.log(`(${x}, ${y}) está sobre el eje X`);
    return;
  }

  // Cuadrantes
  if (x > 0 && y > 0) {
    console.log(`(${x}, ${y}) está en el Cuadrante 1`);
  } else if (x < 0 && y > 0) {
    console.log(`(${x}, ${y}) está en el Cuadrante 2`);
  } else if (x < 0 && y < 0) {
    console.log(`(${x}, ${y}) está en el Cuadrante 3`);
  } else if (x > 0 && y < 0) {
    console.log(`(${x}, ${y}) está en el Cuadrante 4`);
  }
}

// Ejercicio 4: ¿Qué tipo de triángulo?

// Escribe una función que reciba tres números que representan las longitudes de los lados de un triángulo.
// Si los tres lados no forman un triángulo válido (la suma de dos lados siempre debe ser mayor que el tercer lado),
// debes devolver un mensaje indicando que es un triángulo inválido.

// Si es válido, devuelve un string indicando el tipo de triángulo:
// - equilátero: todos los lados iguales
// - isósceles: solo dos lados iguales
// - escaleno: todos los lados diferentes

// Ejemplos:
// Lados 1, 2, 2 → triángulo isósceles
// Lados 1, 1, 2 → triángulo inválido

function triangleType(a, b, c) {
  // 1. Validar si es un triángulo válido
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Triángulo inválido";
  }

  // 2. Equilátero: todos iguales
  if (a === b && b === c) {
    return "Triángulo equilátero";
  }

  // 3. Isósceles: dos iguales
  if (a === b || a === c || b === c) {
    return "Triángulo isósceles";
  }

  // 4. Escaleno: todos diferentes
  return "Triángulo escaleno";
}

// Ejercicio 5: Estado del plan de datos

// Escribe una función que muestre retroalimentación sobre el uso de datos móviles.
// Los planes de esta compañía dan una cantidad fija de datos cada 30 días, que deben usarse en ese período (no se acumulan).

// Queremos calcular el uso promedio diario y avisar al usuario si está usando demasiados datos o si puede usar más.

// La función debe recibir los siguientes parámetros:
// - planLimit: cantidad total de datos del plan en 30 días
// - day: el día actual dentro del período de 30 días
// - usage: la cantidad total de datos usados hasta ahora

// La función debe calcular si el usuario está por encima, por debajo o justo en el uso promedio esperado.
// También debe indicar cuánto datos le quedan y cuánto puede usar en promedio por día para el resto del mes.
// Si ya se quedó sin datos, también debe informarlo.

// Ejemplo:
// planLimit = 100, day = 15, usage = 56

// 15 días usados, 15 días restantes
// Uso promedio diario: 3.333 GB/día
// Estás EXCEDIENDO tu uso promedio diario (3.73 GB/día),
// si continúas así, excederás tu plan en 11.9 GB.
// Para mantenerte dentro del plan, usa no más de 2.93 GB/día.

function dataPlanStatus(planLimit, day, usage) {
  const totalDays = 30;

  const daysRemaining = totalDays - day;
  const avgDailyUse = usage / day;
  const idealDailyUse = planLimit / totalDays;

  console.log(`${day} días usados, ${daysRemaining} días restantes`);
  console.log(`Uso promedio diario: ${avgDailyUse.toFixed(3)} GB/día`);

  const projectedUsage = avgDailyUse * totalDays;

  if (usage >= planLimit) {
    console.log("Ya has agotado tu plan de datos.");
    return;
  }

  if (avgDailyUse > idealDailyUse) {
    const excess = projectedUsage - planLimit;
    const remainingData = planLimit - usage;
    const recommended = remainingData / daysRemaining;

    console.log(
      `Estás EXCEDIENDO tu uso promedio diario (${avgDailyUse.toFixed(2)} GB/día),`
    );
    console.log(
      `si continúas así, excederás tu plan en ${excess.toFixed(1)} GB.`
    );
    console.log(
      `Para mantenerte dentro del plan, usa no más de ${recommended.toFixed(2)} GB/día.`
    );
  } else {
    const remainingData = planLimit - usage;
    const recommended = remainingData / daysRemaining;

    console.log(
      `Estás dentro del uso promedio diario (${avgDailyUse.toFixed(2)} GB/día).`
    );
    console.log(
      `Puedes usar hasta ${recommended.toFixed(2)} GB/día para mantenerte dentro del plan.`
    );
  }
}



