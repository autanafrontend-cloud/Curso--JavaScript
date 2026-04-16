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
