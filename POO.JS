// Ejercicio: Programación Orientada a Objetos (OOP) en JS
// Objetivo:
// Tu objetivo es practicar los conceptos de POO (Programación Orientada a Objetos)
// y la sintaxis de clases en JavaScript.

// Ejercicio 1
//
// Partiendo del ejemplo visto en clase, crea una clase padre llamada Person
// con propiedades para name, pets, residence y hobbies.
// La clase Person también tendrá los métodos info() y soundOff().
//
// Usa la sintaxis de clases para crear una clase llamada Person.
//
// Declara el método constructor() con los parámetros:
// - name (string)
// - pets (number)
// - residence (string)
// - hobbies (array)
//
// El método constructor asigna las propiedades usando this.
//
// Declara un método addHobby() en la clase que reciba un nuevo hobby (string)
// y lo añada al array de hobbies del objeto.
//
// Declara un método removeHobby() que reciba un hobby (string)
// y lo elimine del array de hobbies del objeto.
//
// Declara un método greeting() que imprima en consola un saludo genérico
// para una persona. Ejemplo:
// greeting() { console.log("Hello fellow person!") }

class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  // añadir un hobby
  addHobby(newHobby) {
    this.hobbies.push(newHobby);
  }

  // eliminar un hobby
  removeHobby(hobby) {
    this.hobbies = this.hobbies.filter(h => h !== hobby);
  }

  // saludo genérico
  greeting() {
    console.log("Hello fellow person!");
  }

  // info básica de la persona
  info() {
    return `${this.name} lives in ${this.residence}, has ${this.pets} pets, and enjoys ${this.hobbies.join(", ")}.`;
  }

  // método adicional (opcional del enunciado)
  soundOff() {
    console.log(`${this.name} says hello!`);
  }
}
//ejemplo de uso de la clase Person
/*const person1 = new Person("Frodo", 1, "Shire", ["eating", "adventuring"]);

person1.greeting();
console.log(person1.info());

person1.addHobby("walking");
console.log(person1.hobbies);

person1.removeHobby("eating");
console.log(person1.hobbies);

person1.soundOff();*/


// Ejercicio 2
//
// Ahora vamos a crear una subclase Coder que hereda de la clase Person.
//
// Usa la sintaxis de clases para crear una clase llamada Coder
// que herede de la clase Person.
//
// Declara el método constructor() con los parámetros:
// - name (string)
// - pets (number)
// - residence (string)
// - hobbies (array)
//
// Dentro del constructor, llama a super() y pásale los parámetros.
//
// Dentro del constructor también, asigna:
// this.occupation = "Full Stack Web Developer"
//
// Sobrescribe (override) el método greeting() para que imprima
// un saludo personalizado de un programador (coder).

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);

    this.occupation = "Full Stack Web Developer";
  }

  // override del método greeting
  greeting() {
    console.log(`Hey! I'm a coder and I love building web apps`);
  }
}
/*
extends Person  hereda de la clase Person
super(...)  llama al constructor del padre (obligatorio)
this.occupation  nueva propiedad solo de Coder
greeting()  se sobrescribe (override) del método original
*/


// Ejercicio 3
//
// Vamos a crear instancias de nuestras clases.
//
// Crea una variable y asigna un objeto Person usando la palabra clave new
// seguida del constructor de la clase.
//
// Crea una variable y asigna un objeto Coder usando la palabra clave new
// seguida del constructor de la clase.
//
// Llama a los métodos de los objetos y usa console.log para mostrar
// las propiedades y comprobar que todo funciona correctamente.

// instancia de Person
const person1 = new Person(
  "Frodo",
  1,
  "Shire",
  ["eating", "adventuring"]
);

// instancia de Coder
const coder1 = new Coder(
  "Sam",
  0,
  "Shire",
  ["gardening", "cooking"]
);

// probar Person
console.log(person1.name);
console.log(person1.residence);
console.log(person1.hobbies);
person1.greeting();
console.log(person1.info());
person1.soundOff();

// probar Coder
console.log(coder1.name);
console.log(coder1.occupation);
console.log(coder1.hobbies);
coder1.greeting(); // método sobrescrito
console.log(coder1.info());
coder1.soundOff();

/*
new Person() crea un objeto normal
new Coder() crea un objeto que hereda de Person
puedes usar propiedades (name, hobbies, etc.)
puedes llamar métodos (greeting, info, etc.)
Coder usa el greeting() sobrescrito
*/

// Ejercicio 4
//
// En este ejercicio final, vamos a crear una clase con la funcionalidad
// de una calculadora básica.
//
// Crea una clase llamada Calculator.
//
// Inicializa una propiedad result dentro del constructor con valor 0.
//
// Declara métodos en la clase que representen operaciones básicas:
// add(), subtract(), multiply(), divide().
//
// Estos métodos deben recibir 2 parámetros y asignar el resultado
// de la operación a la propiedad result del objeto.
//
// Deben devolver (return) el resultado.
//
// EXTRA:
// Si solo se pasa un valor, usa el valor actual de result como primer número.
//
// Declara un método displayResult() que muestre en consola
// el valor de result.
//
// Prueba tu clase creando una instancia y llamando a los métodos.


class Calculator {
  constructor() {
    this.result = 0;
  }

  add(a, b) {
    if (b === undefined) {
      b = a;
      a = this.result;
    }
    this.result = a + b;
    return this.result;
  }

  subtract(a, b) {
    if (b === undefined) {
      b = a;
      a = this.result;
    }
    this.result = a - b;
    return this.result;
  }

  multiply(a, b) {
    if (b === undefined) {
      b = a;
      a = this.result;
    }
    this.result = a * b;
    return this.result;
  }

  divide(a, b) {
    if (b === undefined) {
      b = a;
      a = this.result;
    }

    if (b === 0) {
      console.log("Error: no se puede dividir por 0");
      return this.result;
    }

    this.result = a / b;
    return this.result;
  }

  displayResult() {
    console.log(this.result);
  }
}

/*
const calc = new Calculator();

console.log(calc.add(10, 5));      // 15
console.log(calc.subtract(20, 3)); // 17
console.log(calc.multiply(2));     // 34 (usa result anterior * 2)
console.log(calc.divide(2));       // 17

calc.displayResult(); // 17

this.result guarda el estado de la calculadora
Cada método modifica ese estado
Si falta un número → usa el valor anterior (this.result)
Es un ejemplo clásico de estado en clases (OOP real)
*/