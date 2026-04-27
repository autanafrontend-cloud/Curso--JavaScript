/*Ejercicio 1. Figura mínima
Crear una clase base `Figura` con constructor `(x, y)`. Debe guardar ambas coordenadas y exponer un método `descripcion()` que devuelva un texto como `Figura en (10, 20)`.
Pistas de trabajo
•	Usa `class` y un constructor.
•	No calcules todavía área ni perímetro.
•	Comprueba el resultado con un `console.log`.
*/

class Figura {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    /*constructor se ejecuta cuando haces new Figura(...) / this.x y this.y guardan los valores dentro del objeto
    
    */
    descripcion() {
        return `Figura en (${this.x}, ${this.y})`; //Es una función que pertenece al objeto  y Usa this para acceder a sus propios datos
    }
}
const figura1 = new Figura(10, 20);
console.log(figura1.descripcion());


/*Ejercicio 2. Validación de coordenadas
Modifica `Figura` para validar que `x` e `y` sean números y además sean mayores o iguales que 0. Si no lo son, debe lanzarse `throw new Error(...)`.
Pistas de trabajo
•	Puedes usar un método privado `#validarPosicion` o un método normal si prefieres compatibilidad.
•	Diferencia entre `valor < 0` y `valor <= 0`.
*/

class Figura {
    constructor(x, y) {
        this.#validarPosicion(x, y);
        this.x = x;
        this.y = y;
    }
    //# significa que es privado y solo se puede usar dentro de la clase
    #validarPosicion(x, y) {
        if (typeof x !== "number" || typeof y !== "number") {
            throw new Error("Las coordenadas deben ser números");
        }

        if (x < 0 || y < 0) {
            throw new Error("Las coordenadas deben ser mayores o iguales a 0");
        }
    }

    descripcion() {
        return `Figura en (${this.x}, ${this.y})`;
    }
}

const f1 = new Figura(5, 10);
console.log(f1.descripcion());

/*Ejercicio 3. Clase Circulo
Crea `Circulo` que herede de `Figura`. Debe recibir `(x, y, radio)` y definir `dameArea()` y `damePerimetro()`.
Pistas de trabajo
•	Usa `extends` y `super(x, y)`.
•	Valida también que el radio sea mayor que 0.
Espacio para notas del alumno
*/

class Circulo extends Figura {
    constructor(x, y, radio) {
        super(x, y); // llama al constructor de Figura

        this.#validarRadio(radio);
        this.radio = radio;
    }

    #validarRadio(radio) {
        if (typeof radio !== "number") {
            throw new Error("El radio debe ser un número");
        }

        if (radio <= 0) {
            throw new Error("El radio debe ser mayor que 0");
        }
    }

    dameArea() {
        return Math.PI * this.radio ** 2;
    }

    damePerimetro() {
        return 2 * Math.PI * this.radio;
    }
}

const c1 = new Circulo(0, 0, 5);

console.log(c1.descripcion());   // heredado de Figura
console.log(c1.dameArea());
console.log(c1.damePerimetro());

/*Ejercicio 4. Clase Rectangulo
Crea `Rectangulo` que herede de `Figura`. Debe recibir `(x, y, ancho, alto)` y calcular área y perímetro.
Pistas de trabajo
•	Área = ancho × alto.
•	Perímetro = 2 × (ancho + alto).
*/
class Rectangulo extends Figura {
    constructor(x, y, ancho, alto) {
        super(x, y); // reutiliza validación de Figura

        this.#validarDimensiones(ancho, alto);
        this.ancho = ancho;
        this.alto = alto;
    }

    #validarDimensiones(ancho, alto) {
        if (typeof ancho !== "number" || typeof alto !== "number") {
            throw new Error("Ancho y alto deben ser números");
        }

        if (ancho <= 0 || alto <= 0) {
            throw new Error("Ancho y alto deben ser mayores que 0");
        }
    }

    dameArea() {
        return this.ancho * this.alto;
    }

    damePerimetro() {
        return 2 * (this.ancho + this.alto);
    }
}

const r1 = new Rectangulo(0, 0, 4, 5);

console.log(r1.descripcion());
console.log(r1.dameArea());
console.log(r1.damePerimetro());

/*Ejercicio 5. Clase Cuadrado reutilizando Rectangulo
Implementa `Cuadrado` como una subclase de `Rectangulo`. Debe recibir `(x, y, lado)` y reutilizar el constructor del padre.
Pistas de trabajo
•	No repitas la lógica de área ni perímetro.
•	Piensa en cómo convertir un lado en ancho y alto.
*/
class Cuadrado extends Rectangulo {
    constructor(x, y, lado) {
        // reutilizamos el constructor de Rectangulo
        super(x, y, lado, lado);
    }
}

const c1 = new Cuadrado(0, 0, 4);

console.log(c1.descripcion());     // heredado de Figura
console.log(c1.dameArea());        // heredado de Rectangulo
console.log(c1.damePerimetro());   // heredado de Rectangulo


/*Ejercicio 6. Sobrescritura de métodos
Añade un método `descripcion()` en `Figura` y sobrescríbelo en `Circulo`, `Rectangulo` y `Cuadrado` para que cada uno devuelva un texto más específico.
Pistas de trabajo
•	Ejemplo: `Círculo en (10, 20) de radio 5`.
•	Esto es un caso típico de override.
*/

class Figura {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    descripcion() {
        return `Figura en (${this.x}, ${this.y})`;
    }
}

class Circulo extends Figura {
    constructor(x, y, radio) {
        super(x, y);
        this.radio = radio;
    }

    descripcion() {
        return `Círculo en (${this.x}, ${this.y}) de radio ${this.radio}`;
    }
}

class Rectangulo extends Figura {
    constructor(x, y, ancho, alto) {
        super(x, y);
        this.ancho = ancho;
        this.alto = alto;
    }

    descripcion() {
        return `Rectángulo en (${this.x}, ${this.y}) de ${this.ancho}x${this.alto}`;
    }
}

class Cuadrado extends Rectangulo {
    constructor(x, y, lado) {
        super(x, y, lado, lado);
    }

    descripcion() {
        return `Cuadrado en (${this.x}, ${this.y}) de lado ${this.ancho}`;
    }
}

const f = new Figura(1, 2);
const c = new Circulo(0, 0, 5);
const r = new Rectangulo(2, 3, 4, 6);
const q = new Cuadrado(5, 5, 3);

console.log(f.descripcion());
console.log(c.descripcion());
console.log(r.descripcion());
console.log(q.descripcion());

/*Ejercicio 7. Wrapper por composición
Crea una clase `Wrapper` que contenga un array de figuras. Debe tener `add(figura)` y además `dameArea()` y `damePerimetro()` que calculen el total del array.
Pistas de trabajo
•	Empieza con una versión imperativa usando `for...of`.
•	Valida que solo se añadan instancias de `Figura`.
*/

class Wrapper {
    constructor() {
        this.figuras = [];
    }

    add(figura) {
        if (!(figura instanceof Figura)) {
            throw new Error("Solo se pueden añadir instancias de Figura");
        }

        this.figuras.push(figura);
    }

    dameArea() {
        let total = 0;

        for (const figura of this.figuras) {
            total += figura.dameArea();
        }

        return total;
    }

    damePerimetro() {
        let total = 0;

        for (const figura of this.figuras) {
            total += figura.damePerimetro();
        }

        return total;
    }
}

const w = new Wrapper();

w.add(new Circulo(0, 0, 5));
w.add(new Rectangulo(0, 0, 4, 6));
w.add(new Cuadrado(0, 0, 3));

console.log(w.dameArea());
console.log(w.damePerimetro());


/*Ejercicio 8. Wrapper funcional
Reescribe los métodos de cálculo del `Wrapper` usando programación funcional en lugar de `for...of`.
Pistas de trabajo
Usa `map` y `reduce`.
Deja un valor inicial 0 en el `reduce`.
*/
/*
la idea es transformar + acumular usando map y reduce.
map → transforma cada figura en su área/perímetro
reduce → suma todos esos valores
*/

class Wrapper {
    constructor() {
        this.figuras = [];
    }

    add(figura) {
        if (!(figura instanceof Figura)) {
            throw new Error("Solo se pueden añadir instancias de Figura");
        }

        this.figuras.push(figura);
    }

    dameArea() {
        return this.figuras
            .map(figura => figura.dameArea())  //map convierte [figura1, figura2, figura3] en [area1, area2, area3]
            .reduce((total, area) => total + area, 0);  // reduce hace esto 0 + area1 + area2 + area3, 0 es el valor inicial para total
    }

    damePerimetro() {
        return this.figuras
            .map(figura => figura.damePerimetro())
            .reduce((total, perimetro) => total + perimetro, 0);
    }
}

/*
Ejercicio 9. Triángulo como ampliación
Añade una clase `Triangulo` que herede de `Figura` y reciba tres lados `(a, b, c)`. Calcula el perímetro y el área usando la fórmula de Herón.
Pistas de trabajo
Debes validar que los tres lados sean positivos.
Además, deben cumplir la desigualdad triangular.
*/

class Triangulo extends Figura {
    constructor(x, y, a, b, c) {
        super(x, y);

        this.#validarLados(a, b, c);

        this.a = a;
        this.b = b;
        this.c = c;
    }

    #validarLados(a, b, c) {
        // tipo
        if ([a, b, c].some(l => typeof l !== "number")) {
            throw new Error("Los lados deben ser números");
        }

        // positivos
        if ([a, b, c].some(l => l <= 0)) {
            throw new Error("Los lados deben ser mayores que 0");
        }

        // desigualdad triangular
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("No cumple la desigualdad triangular");
        }
    }

    damePerimetro() {
        return this.a + this.b + this.c;
    }

    dameArea() {
        const s = this.damePerimetro() / 2;
        return Math.sqrt(
            s * (s - this.a) * (s - this.b) * (s - this.c)
        );
    }

    descripcion() {
        return `Triángulo en (${this.x}, ${this.y}) de lados ${this.a}, ${this.b}, ${this.c}`;
    }
}

const t1 = new Triangulo(0, 0, 3, 4, 5);

console.log(t1.descripcion());
console.log(t1.damePerimetro()); // 12
console.log(t1.dameArea());      // 6

/*Ejercicio 10. Polimorfismo
Crea un array con objetos `Circulo`, `Rectangulo`, `Cuadrado` y `Triangulo`. Recorre la colección y muestra el nombre del tipo, su área y su perímetro.
Pistas de trabajo
No necesitas preguntar por el tipo para calcular área.
Cada objeto responde a los mismos mensajes: `dameArea()` y `damePerimetro()`.
*/
/*NO necesitas saber qué tipo de figura es para usarla
Todas responden a:
dameArea()
damePerimetro()
*/
const figuras = [
    new Circulo(0, 0, 5),
    new Rectangulo(0, 0, 4, 6),
    new Cuadrado(0, 0, 3),
    new Triangulo(0, 0, 3, 4, 5)
];

for (const figura of figuras) {
    console.log(
        figura.constructor.name, // nombre de la clase
        "Área:", figura.dameArea(), // cuando haces figura.dameArea() JavaScript decide automáticamente: Si es Circulo → usa su fórmula, si es Rectangulo → usa su fórmula, etc. Esto es polimorfismo. Sin if, sin switch, sin preguntar tipo.
        "Perímetro:", figura.damePerimetro()
    );
}

/*Ejercicio 11. Gestión de errores
Escribe pequeñas pruebas que intenten construir figuras inválidas y captura el error con `try...catch`.
Pistas de trabajo
Ejemplos: radio negativo, `x` con texto, triángulo imposible.
Muestra el mensaje del error por consola.
*/

// 1. Radio negativo. Try Intenta ejecutar código que puede fallar: const c = new Circulo(0, 0, -5);
try {
    const c = new Circulo(0, 0, -5);
} catch (error) { //catch Captura el error: catch (error). Y puedes acceder a: error.message
    console.log("Error círculo:", error.message);
}

// 2. Coordenadas inválidas (texto)
try {
    const f = new Figura("a", 10);
} catch (error) {
    console.log("Error figura:", error.message);
}

// 3. Rectángulo con dimensiones inválidas
try {
    const r = new Rectangulo(0, 0, -4, 5);
} catch (error) {
    console.log("Error rectángulo:", error.message);
}

// 4. Triángulo imposible
try {
    const t = new Triangulo(0, 0, 1, 2, 10);
} catch (error) {
    console.log("Error triángulo:", error.message);
}


probarCaso("Círculo inválido", () => new Circulo(0, 0, -5));
probarCaso("Figura inválida", () => new Figura("x", 10));
probarCaso("Triángulo imposible", () => new Triangulo(0, 0, 1, 2, 10));

/*
Ejercicio 12. Reto final integrador
Construye un `Wrapper`, añade varias figuras válidas, imprime las descripciones, el área total, el perímetro total y demuestra que las validaciones funcionan.
Pistas de trabajo
Combina todo lo aprendido en un único programa.
Intenta dejar el código limpio y bien comentad
*/
// ===== CLASE BASE =====
class Figura {
    constructor(x, y) {
        this.#validarPosicion(x, y);
        this.x = x;
        this.y = y;
    }

    #validarPosicion(x, y) {
        if (typeof x !== "number" || typeof y !== "number") {
            throw new Error("Las coordenadas deben ser números");
        }
        if (x < 0 || y < 0) {
            throw new Error("Las coordenadas deben ser >= 0");
        }
    }

    descripcion() {
        return `Figura en (${this.x}, ${this.y})`;
    }

    dameArea() {
        throw new Error("Método dameArea no implementado");
    }

    damePerimetro() {
        throw new Error("Método damePerimetro no implementado");
    }
}

// ===== CÍRCULO =====
class Circulo extends Figura {
    constructor(x, y, radio) {
        super(x, y);
        if (typeof radio !== "number" || radio <= 0) {
            throw new Error("Radio inválido");
        }
        this.radio = radio;
    }

    dameArea() {
        return Math.PI * this.radio ** 2;
    }

    damePerimetro() {
        return 2 * Math.PI * this.radio;
    }

    descripcion() {
        return `Círculo en (${this.x}, ${this.y}) de radio ${this.radio}`;
    }
}

// ===== RECTÁNGULO =====
class Rectangulo extends Figura {
    constructor(x, y, ancho, alto) {
        super(x, y);
        if (ancho <= 0 || alto <= 0) {
            throw new Error("Dimensiones inválidas");
        }
        this.ancho = ancho;
        this.alto = alto;
    }

    dameArea() {
        return this.ancho * this.alto;
    }

    damePerimetro() {
        return 2 * (this.ancho + this.alto);
    }

    descripcion() {
        return `Rectángulo en (${this.x}, ${this.y}) de ${this.ancho}x${this.alto}`;
    }
}

// ===== CUADRADO =====
class Cuadrado extends Rectangulo {
    constructor(x, y, lado) {
        super(x, y, lado, lado);
        this.lado = lado;
    }

    descripcion() {
        return `Cuadrado en (${this.x}, ${this.y}) de lado ${this.lado}`;
    }
}

// ===== TRIÁNGULO =====
class Triangulo extends Figura {
    constructor(x, y, a, b, c) {
        super(x, y);

        if ([a, b, c].some(l => typeof l !== "number" || l <= 0)) {
            throw new Error("Lados inválidos");
        }

        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Triángulo imposible");
        }

        this.a = a;
        this.b = b;
        this.c = c;
    }

    damePerimetro() {
        return this.a + this.b + this.c;
    }

    dameArea() {
        const s = this.damePerimetro() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }

    descripcion() {
        return `Triángulo en (${this.x}, ${this.y}) de lados ${this.a}, ${this.b}, ${this.c}`;
    }
}

// ===== WRAPPER =====
class Wrapper {
    constructor() {
        this.figuras = [];
    }

    add(figura) {
        if (!(figura instanceof Figura)) {
            throw new Error("Solo figuras válidas");
        }
        this.figuras.push(figura);
    }

    dameArea() {
        return this.figuras.reduce((total, f) => total + f.dameArea(), 0);
    }

    damePerimetro() {
        return this.figuras.reduce((total, f) => total + f.damePerimetro(), 0);
    }
}

// ===== PROGRAMA PRINCIPAL =====
const w = new Wrapper();

// Añadir figuras válidas
w.add(new Circulo(0, 0, 5));
w.add(new Rectangulo(1, 1, 4, 6));
w.add(new Cuadrado(2, 2, 3));
w.add(new Triangulo(0, 0, 3, 4, 5));

// Mostrar descripciones (polimorfismo)
console.log("=== FIGURAS ===");
for (const f of w.figuras) {
    console.log(f.descripcion());
}

// Totales
console.log("\n=== TOTALES ===");
console.log("Área total:", w.dameArea());
console.log("Perímetro total:", w.damePerimetro());

// ===== PRUEBAS DE ERRORES =====
console.log("\n=== PRUEBAS DE ERRORES ===");

try {
    new Circulo(0, 0, -1);
} catch (e) {
    console.log("Error:", e.message);
}

try {
    new Figura("x", 2);
} catch (e) {
    console.log("Error:", e.message);
}

try {
    new Triangulo(0, 0, 1, 2, 10);
} catch (e) {
    console.log("Error:", e.message);
}
/*
Qué estás demostrando aquí

Encapsulación → validaciones internas
Herencia → extends
Polimorfismo → mismo método, distinto comportamiento
Composición → Wrapper
Programación funcional → reduce
Gestión de errores → try...catch
*/

/*Ejercicio 8. Wrapper funcional
Reescribe los métodos de cálculo del `Wrapper` usando programación funcional en lugar de `for...of`.
Pistas de trabajo
Usa `map` y `reduce`.
Deja un valor inicial 0 en el `reduce`.
*/
/*
la idea es transformar + acumular usando map y reduce.
map → transforma cada figura en su área/perímetro
reduce → suma todos esos valores
*/

class Wrapper {
    constructor() {
        this.figuras = [];
    }

    add(figura) {
        if (!(figura instanceof Figura)) {
            throw new Error("Solo se pueden añadir instancias de Figura");
        }

        this.figuras.push(figura);
    }

    dameArea() {
        return this.figuras
            .map(figura => figura.dameArea())  //map convierte [figura1, figura2, figura3] en [area1, area2, area3]
            .reduce((total, area) => total + area, 0);  // reduce hace esto 0 + area1 + area2 + area3, 0 es el valor inicial para total
    }

    damePerimetro() {
        return this.figuras
            .map(figura => figura.damePerimetro())
            .reduce((total, perimetro) => total + perimetro, 0);
    }
}

/*
Ejercicio 9. Triángulo como ampliación
Añade una clase `Triangulo` que herede de `Figura` y reciba tres lados `(a, b, c)`. Calcula el perímetro y el área usando la fórmula de Herón.
Pistas de trabajo
Debes validar que los tres lados sean positivos.
Además, deben cumplir la desigualdad triangular.
*/

class Triangulo extends Figura {
    constructor(x, y, a, b, c) {
        super(x, y);

        this.#validarLados(a, b, c);

        this.a = a;
        this.b = b;
        this.c = c;
    }

    #validarLados(a, b, c) {
        // tipo
        if ([a, b, c].some(l => typeof l !== "number")) {
            throw new Error("Los lados deben ser números");
        }

        // positivos
        if ([a, b, c].some(l => l <= 0)) {
            throw new Error("Los lados deben ser mayores que 0");
        }

        // desigualdad triangular
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("No cumple la desigualdad triangular");
        }
    }

    damePerimetro() {
        return this.a + this.b + this.c;
    }

    dameArea() {
        const s = this.damePerimetro() / 2;
        return Math.sqrt(
            s * (s - this.a) * (s - this.b) * (s - this.c)
        );
    }

    descripcion() {
        return `Triángulo en (${this.x}, ${this.y}) de lados ${this.a}, ${this.b}, ${this.c}`;
    }
}

const t1 = new Triangulo(0, 0, 3, 4, 5);

console.log(t1.descripcion());
console.log(t1.damePerimetro()); // 12
console.log(t1.dameArea());      // 6

/*Ejercicio 10. Polimorfismo
Crea un array con objetos `Circulo`, `Rectangulo`, `Cuadrado` y `Triangulo`. Recorre la colección y muestra el nombre del tipo, su área y su perímetro.
Pistas de trabajo
No necesitas preguntar por el tipo para calcular área.
Cada objeto responde a los mismos mensajes: `dameArea()` y `damePerimetro()`.
*/
/*NO necesitas saber qué tipo de figura es para usarla
Todas responden a:
dameArea()
damePerimetro()
*/
const figuras = [
    new Circulo(0, 0, 5),
    new Rectangulo(0, 0, 4, 6),
    new Cuadrado(0, 0, 3),
    new Triangulo(0, 0, 3, 4, 5)
];

for (const figura of figuras) {
    console.log(
        figura.constructor.name, // nombre de la clase
        "Área:", figura.dameArea(), // cuando haces figura.dameArea() JavaScript decide automáticamente: Si es Circulo → usa su fórmula, si es Rectangulo → usa su fórmula, etc. Esto es polimorfismo. Sin if, sin switch, sin preguntar tipo.
        "Perímetro:", figura.damePerimetro()
    );
}

/*Ejercicio 11. Gestión de errores
Escribe pequeñas pruebas que intenten construir figuras inválidas y captura el error con `try...catch`.
Pistas de trabajo
Ejemplos: radio negativo, `x` con texto, triángulo imposible.
Muestra el mensaje del error por consola.
*/

// 1. Radio negativo. Try Intenta ejecutar código que puede fallar: const c = new Circulo(0, 0, -5);
try {
    const c = new Circulo(0, 0, -5);
} catch (error) { //catch Captura el error: catch (error). Y puedes acceder a: error.message
    console.log("Error círculo:", error.message);
}

// 2. Coordenadas inválidas (texto)
try {
    const f = new Figura("a", 10);
} catch (error) {
    console.log("Error figura:", error.message);
}

// 3. Rectángulo con dimensiones inválidas
try {
    const r = new Rectangulo(0, 0, -4, 5);
} catch (error) {
    console.log("Error rectángulo:", error.message);
}

// 4. Triángulo imposible
try {
    const t = new Triangulo(0, 0, 1, 2, 10);
} catch (error) {
    console.log("Error triángulo:", error.message);
}


probarCaso("Círculo inválido", () => new Circulo(0, 0, -5));
probarCaso("Figura inválida", () => new Figura("x", 10));
probarCaso("Triángulo imposible", () => new Triangulo(0, 0, 1, 2, 10));

/*
Ejercicio 12. Reto final integrador
Construye un `Wrapper`, añade varias figuras válidas, imprime las descripciones, el área total, el perímetro total y demuestra que las validaciones funcionan.
Pistas de trabajo
Combina todo lo aprendido en un único programa.
Intenta dejar el código limpio y bien comentad
*/
// ===== CLASE BASE =====
class Figura {
    constructor(x, y) {
        this.#validarPosicion(x, y);
        this.x = x;
        this.y = y;
    }

    #validarPosicion(x, y) {
        if (typeof x !== "number" || typeof y !== "number") {
            throw new Error("Las coordenadas deben ser números");
        }
        if (x < 0 || y < 0) {
            throw new Error("Las coordenadas deben ser >= 0");
        }
    }

    descripcion() {
        return `Figura en (${this.x}, ${this.y})`;
    }

    dameArea() {
        throw new Error("Método dameArea no implementado");
    }

    damePerimetro() {
        throw new Error("Método damePerimetro no implementado");
    }
}

// ===== CÍRCULO =====
class Circulo extends Figura {
    constructor(x, y, radio) {
        super(x, y);
        if (typeof radio !== "number" || radio <= 0) {
            throw new Error("Radio inválido");
        }
        this.radio = radio;
    }

    dameArea() {
        return Math.PI * this.radio ** 2;
    }

    damePerimetro() {
        return 2 * Math.PI * this.radio;
    }

    descripcion() {
        return `Círculo en (${this.x}, ${this.y}) de radio ${this.radio}`;
    }
}

// ===== RECTÁNGULO =====
class Rectangulo extends Figura {
    constructor(x, y, ancho, alto) {
        super(x, y);
        if (ancho <= 0 || alto <= 0) {
            throw new Error("Dimensiones inválidas");
        }
        this.ancho = ancho;
        this.alto = alto;
    }

    dameArea() {
        return this.ancho * this.alto;
    }

    damePerimetro() {
        return 2 * (this.ancho + this.alto);
    }

    descripcion() {
        return `Rectángulo en (${this.x}, ${this.y}) de ${this.ancho}x${this.alto}`;
    }
}

// ===== CUADRADO =====
class Cuadrado extends Rectangulo {
    constructor(x, y, lado) {
        super(x, y, lado, lado);
        this.lado = lado;
    }

    descripcion() {
        return `Cuadrado en (${this.x}, ${this.y}) de lado ${this.lado}`;
    }
}

// ===== TRIÁNGULO =====
class Triangulo extends Figura {
    constructor(x, y, a, b, c) {
        super(x, y);

        if ([a, b, c].some(l => typeof l !== "number" || l <= 0)) {
            throw new Error("Lados inválidos");
        }

        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Triángulo imposible");
        }

        this.a = a;
        this.b = b;
        this.c = c;
    }

    damePerimetro() {
        return this.a + this.b + this.c;
    }

    dameArea() {
        const s = this.damePerimetro() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }

    descripcion() {
        return `Triángulo en (${this.x}, ${this.y}) de lados ${this.a}, ${this.b}, ${this.c}`;
    }
}

// ===== WRAPPER =====
class Wrapper {
    constructor() {
        this.figuras = [];
    }

    add(figura) {
        if (!(figura instanceof Figura)) {
            throw new Error("Solo figuras válidas");
        }
        this.figuras.push(figura);
    }

    dameArea() {
        return this.figuras.reduce((total, f) => total + f.dameArea(), 0);
    }

    damePerimetro() {
        return this.figuras.reduce((total, f) => total + f.damePerimetro(), 0);
    }
}

// ===== PROGRAMA PRINCIPAL =====
const w = new Wrapper();

// Añadir figuras válidas
w.add(new Circulo(0, 0, 5));
w.add(new Rectangulo(1, 1, 4, 6));
w.add(new Cuadrado(2, 2, 3));
w.add(new Triangulo(0, 0, 3, 4, 5));

// Mostrar descripciones (polimorfismo)
console.log("=== FIGURAS ===");
for (const f of w.figuras) {
    console.log(f.descripcion());
}

// Totales
console.log("\n=== TOTALES ===");
console.log("Área total:", w.dameArea());
console.log("Perímetro total:", w.damePerimetro());

// ===== PRUEBAS DE ERRORES =====
console.log("\n=== PRUEBAS DE ERRORES ===");

try {
    new Circulo(0, 0, -1);
} catch (e) {
    console.log("Error:", e.message);
}

try {
    new Figura("x", 2);
} catch (e) {
    console.log("Error:", e.message);
}

try {
    new Triangulo(0, 0, 1, 2, 10);
} catch (e) {
    console.log("Error:", e.message);
}
/*
Qué estás demostrando aquí

Encapsulación → validaciones internas
Herencia → extends
Polimorfismo → mismo método, distinto comportamiento
Composición → Wrapper
Programación funcional → reduce
Gestión de errores → try...catch
*/