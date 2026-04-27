/*Ejercicio 2.1 • StudentProfile con accessors
Modela una clase `StudentProfile` con nombre, track y un getter que devuelva una etiqueta completa, además de un setter que normalice el track a mayúsculas.
Entrega esperada:
• Código funcional y legible.
• Breve explicación del razonamiento usado.
• Salida esperada o caso de prueba mínimo.
*/

// Definición de la clase StudentProfile
class StudentProfile {

    // Constructor: se ejecuta al crear una nueva instancia
    constructor(name, track) {
        this.name = name;       // Propiedad pública: nombre del estudiante
        this.track = track;     // Se usa el setter (no asigna directamente)
    }

    // Getter: devuelve una etiqueta completa (nombre + track)
    get fullLabel() {
        return `${this.name} - ${this.track}`; // Usa el getter de track
    }

    // Setter: se ejecuta cuando asignamos un valor a "track"
    set track(value) {
        // Normaliza el valor a mayúsculas antes de guardarlo
        this._track = value.toUpperCase();
    }

    // Getter: permite acceder al valor interno de track
    get track() {
        return this._track; // Devuelve la propiedad interna
    }
}

// ==============================
// Uso de la clase
// ==============================

// Se crea una instancia de StudentProfile
const student = new StudentProfile("Ana", "frontend");

// Se accede al getter fullLabel (como si fuera una propiedad)
console.log(student.fullLabel);
// Salida esperada: "Ana - FRONTEND"
