/*Ejercicio 1.1 • Catálogo mutable controlado
Diseña un objeto `catalog` con productos anidados. Añade, modifica y elimina propiedades; después documenta qué operaciones cambian la estructura y cuáles solo cambian el valor.
Entrega esperada:
• Código funcional y legible.
• Breve explicación del razonamiento usado.
• Salida esperada o caso de prueba mínimo.
*/

const catalog = {
    products: {
        p1: { name: "Teclado", price: 30 },
        p2: { name: "Ratón", price: 18 }
    }
};

// Añadir una propiedad estructural
catalog.products.p3 = { name: "Monitor", price: 220 };

// Modificar un valor existente
catalog.products.p2.price = 20;

// Eliminar una propiedad estructural
delete catalog.products.p1;

// Caso de prueba mínimo
console.log(catalog);

/*Salida esperada aproximada:
{
  products: {
    p2: { name: "Ratón", price: 20 },
    p3: { name: "Monitor", price: 220 }
  }
}
*/
/*En JavaScript, el código define una estructura de datos basada en un objeto literal (catalog) que contiene una propiedad (products) cuyo valor es a su vez otro objeto, estableciendo una jerarquía de objetos anidados (composición), donde cada clave (p1, p2, p3) referencia a un objeto independiente con sus propias propiedades (name, price); este patrón ilustra la llamada “anidación” (a veces confundida con anidación de clases, aunque aquí no hay clases sino objetos), que consiste en encapsular entidades dentro de otras para representar relaciones estructurales y permitir acceso jerárquico mediante notación de punto, lo que implica resolución de propiedades en cadena (catalog → products → p2 → price); sobre esta estructura se aplican operaciones fundamentales de manipulación: extensión dinámica del objeto al añadir p3 (aprovechando que los objetos son mutables y extensibles en tiempo de ejecución), actualización de estado al modificar una propiedad interna (price) mediante acceso por referencia (no se copia el objeto, se altera directamente en memoria), y reestructuración mediante el operador delete, que elimina completamente la clave p1 del objeto contenedor (afectando su forma y no solo su valor); en conjunto, el código ejemplifica el uso de objetos como mapas dinámicos, la gestión de estructuras anidadas y las operaciones tipo CRUD (Create, Read, Update, Delete) aplicadas a distintos niveles de profundidad dentro de un mismo grafo de objetos.*/

/*Ejercicio 1.2 • Acceso con claves calculadas
Recibe un array de nombres de propiedad y construye un objeto resumen leyendo esas claves desde otro objeto fuente. Debes usar bracket notation.
Entrega esperada:
• Código funcional y legible.
• Breve explicación del razonamiento usado.
• Salida esperada o caso de prueba mínimo.
*/

const source = {
    name: "Curso JS",
    level: "JSA",
    hours: 30,
    teacher: "Jacinto"
};

const keys = ["name", "hours", "teacher"];

function buildSummary(sourceObject, propertyNames) {
    const summary = {};
    for (const key of propertyNames) {
        if (key in sourceObject) {
            summary[key] = sourceObject[key]; // bracket notation
        }
    }
    return summary;
}

console.log(buildSummary(source, keys));

/*Salida esperada / prueba mínima
Salida esperada:
{ name: 'Curso JS', hours: 30, teacher: 'Jacinto' }
*/
/*
En JavaScript, los parámetros sourceObject y propertyNames son identificadores locales de la función, no palabras reservadas ni estructuras vinculadas semánticamente al objeto source. Su relación con los datos reales no depende del nombre, sino del mecanismo de paso de argumentos por posición: cuando se ejecuta buildSummary(source, keys), el motor del lenguaje asigna el valor de source al parámetro sourceObject y el valor de keys al parámetro propertyNames, independientemente de cómo se llamen internamente. Esto significa que los nombres de los parámetros son únicamente alias locales dentro del scope de la función, utilizados para referenciar los valores recibidos durante la ejecución.

Desde un punto de vista técnico, la función opera sobre referencias a objetos: source es un objeto que se pasa por referencia (en realidad, se copia la referencia, no el objeto), lo que permite que la función acceda a sus propiedades sin necesidad de duplicarlo. Sin embargo, la relación entre el objeto y el parámetro es puramente estructural, no nominal: sourceObject podría llamarse a, data, o cualquier otro identificador válido sin afectar el comportamiento. Lo mismo ocurre con propertyNames, que simplemente representa un array de strings utilizado para iterar dinámicamente sobre claves del objeto.

En resumen, este código ilustra dos conceptos fundamentales: (1) los parámetros de función en JavaScript son variables locales independientes del contexto externo, y su nombre no tiene impacto en la lógica del programa; y (2) la comunicación entre datos y función se realiza mediante asignación posicional de argumentos y paso de referencias de objetos, lo que permite manipulación flexible de estructuras de datos sin dependencia del nombre de los identificadores.
*/

/*
*Ejercicio 1.3 • Comparación y clonado
Crea dos objetos con el mismo contenido, compara referencias, haz una copia superficial y muestra un caso en el que una propiedad anidada genere efecto colateral.
Entrega esperada:
• Código funcional y legible.
• Breve explicación del razonamiento usado.
• Salida esperada o caso de prueba mínimo.
*/

const original = {
    title: "Curso",
    meta: { level: "basic" }
};

const sameContent = {
    title: "Curso",
    meta: { level: "basic" }
};

console.log(original === sameContent); // false

const shallowCopy = { ...original };
console.log(original === shallowCopy); // false

shallowCopy.meta.level = "advanced";

console.log(original.meta.level);   // 'advanced'
console.log(shallowCopy.meta.level); // 'advanced'

/*En JavaScript, el código ilustra el comportamiento de la comparación por referencia de objetos y la diferencia entre copia superficial (shallow copy) y duplicación profunda de estructuras anidadas.

Los objetos original y sameContent, aunque tienen la misma estructura y valores, son instancias distintas en memoria, por lo que original === sameContent devuelve false, ya que la igualdad estricta en objetos compara referencias y no contenido. Al crear shallowCopy mediante el spread operator ({ ...original }), se genera una nueva referencia para el objeto de primer nivel, por lo que original === shallowCopy también es false, pero la copia es superficial: solo se clonan las propiedades del nivel superior.

Sin embargo, las propiedades anidadas como meta no se duplican, sino que se comparten por referencia, lo que implica que tanto original.meta como shallowCopy.meta apuntan al mismo objeto en memoria. Por ello, al modificar shallowCopy.meta.level, la mutación se refleja en ambos objetos. Esto demuestra que el spread operator no realiza una deep copy, sino una copia estructural de primer nivel, manteniendo referencias compartidas en niveles internos.
*/

/*Ejercicio 1.4 • Cuenta bancaria con accessors
Implementa un objeto `bankAccount` con getter y setter para `balance`, validando ingresos y rechazando saldos negativos.
Entrega esperada:
• Código funcional y legible.
• Breve explicación del razonamiento usado.
• Salida esperada o caso de prueba mínimo.
*/

const bankAccount = {
    _balance: 0,

    get balance() {
        return this._balance;
    },

    set balance(value) {
        if (typeof value !== "number" || Number.isNaN(value)) {
            console.log("El saldo debe ser numérico.");
            return;
        }
        if (value < 0) {
            console.log("No se permite saldo negativo.");
            return;
        }
        this._balance = value;
    }
};

bankAccount.balance = 150;
console.log(bankAccount.balance);

bankAccount.balance = -20; // rechazado
console.log(bankAccount.balance);

/* salida esperada
150
No se permite saldo negativo.
150

En JavaScript, el código define un objeto literal que implementa encapsulación a nivel de propiedad mediante descriptores de acceso (accessor properties), utilizando un getter y un setter para la propiedad balance, mientras que _balance actúa como slot interno de almacenamiento. El getter (get balance) permite la lectura controlada del estado interno devolviendo this._balance, mientras que el setter (set balance(value)) intercepta las operaciones de escritura y aplica validación de tipo y dominio antes de mutar el estado: verifica que el valor sea de tipo number y no sea NaN, y además impone una restricción semántica (no permitir valores negativos). Si la validación falla, se aborta la operación sin modificar el estado interno, preservando la inmutabilidad lógica frente a entradas inválidas. Este patrón desacopla la interfaz pública (balance) del almacenamiento real (_balance), permitiendo introducir lógica de control, integridad y reglas de negocio en el acceso a propiedades, y demuestra el uso de acceso indirecto, control de mutación y encapsulación sin necesidad de clases ni campos privados formales (#).
*/

/*Ejercicio 1.5 • Bloqueo de configuración
Configura un objeto `settings` con `Object.defineProperty` y aplica `preventExtensions`, `seal` y `freeze` en tres variantes. Explica qué operación falla en cada variante.
Entrega esperada:
• Código funcional y legible.
• Breve explicación del razonamiento usado.
• Salida esperada o caso de prueba mínimo.
*/

const base = {};
Object.defineProperty(base, "mode", {
    value: "light",
    writable: true,
    enumerable: true,
    configurable: true
});

const noExtensions = { ...base };
Object.preventExtensions(noExtensions);

const sealed = { ...base };
Object.seal(sealed);

const frozen = { ...base };
Object.freeze(frozen);

// preventExtensions
noExtensions.mode = "dark";   // sí
// noExtensions.theme = "blue"; // no se puede añadir

// seal
sealed.mode = "dark";         // sí, mientras writable sea true
// delete sealed.mode;        // no se puede borrar

// freeze
// frozen.mode = "dark";      // no se puede modificar

/* Salida esperada
- preventExtensions: falla al añadir nuevas propiedades.
- seal: falla al añadir y al borrar.
- freeze: falla al añadir, borrar y modificar.
El código demuestra cómo controlar la extensibilidad, configurabilidad y mutabilidad de un objeto en JavaScript mediante Object.preventExtensions, Object.seal y Object.freeze, partiendo de un descriptor de propiedad explícito; estos métodos establecen distintos niveles de inmutabilidad estructural, desde impedir la adición de nuevas propiedades (preventExtensions), hasta bloquear la reconfiguración (seal) y finalmente impedir cualquier modificación del estado (freeze), actuando todos a nivel superficial y dependiendo de los atributos internos ([[Writable]], [[Configurable]], [[Extensible]]) del objeto.



/*Ejercicio 1.6 • Herencia prototípica sin clases
Usa `Object.create` para crear un objeto hijo que herede un método del prototipo y añada estado propio. Comprueba la búsqueda en la cadena prototípica.
Entrega esperada:
• Código funcional y legible.
• Breve explicación del razonamiento usado.
• Salida esperada o caso de prueba mínimo.
*/
const personProto = {
    greet() {
        return `Hola, soy ${this.name}`;
    }
};

const student = Object.create(personProto);
student.name = "Lucía";
student.track = "JavaScript";

console.log(student.greet());
console.log(student.track);
console.log(Object.getPrototypeOf(student) === personProto);


/* Salida esperada
Hola, soy Lucía
JavaScript
true

Este código demuestra el funcionamiento del modelo de herencia prototípica en JavaScript, donde un objeto (student) delega comportamiento a otro (personProto) mediante su enlace interno [[Prototype]], permitiendo reutilización sin duplicación de métodos; la resolución de propiedades sigue un mecanismo de búsqueda en cadena (prototype chain lookup), y el valor de this se vincula dinámicamente al objeto receptor durante la invocación, lo que permite que métodos definidos en el prototipo operen sobre datos específicos de cada instancia.
*/