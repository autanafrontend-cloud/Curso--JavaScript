/*
Ejercicio 2.3 • Reservation segura
Implementa una clase `Reservation` con un setter que impida reservar menos de 1 plaza y un getter que exponga el estado de disponibilidad.
Entrega esperada:
• Código funcional y legible.
• Breve explicación del razonamiento usado.
• Salida esperada o caso de prueba mínimo.
*/

class Reservation {
    constructor(totalSeats) {
        this.totalSeats = totalSeats;
        this.reservedSeats = 0;
    }

    set seats(value) {
        if (value < 1) {
            throw new Error("Debe reservarse al menos 1 plaza.");
        }
        if (value > this.totalSeats) {
            throw new Error("No hay suficientes plazas.");
        }
        this.reservedSeats = value;
    }

    get availability() {
        return this.totalSeats - this.reservedSeats;
    }
}

const r = new Reservation(20);
r.seats = 5;
console.log(r.availability);
