/* 
Crea una jerarquía `Content -> VideoLesson -> LiveSession` y comprueba las relaciones de `instanceof` de varias instancias.
Entrega esperada:
• Código funcional y legible.
• Breve explicación del razonamiento usado.
• Salida esperada o caso de prueba mínimo.
*/

class Content {
    constructor(title) {
        this.title = title;
    }
}

class VideoLesson extends Content {
    constructor(title, duration) {
        super(title);
        this.duration = duration;
    }
}

class LiveSession extends VideoLesson {
    constructor(title, duration, date) {
        super(title, duration);
        this.date = date;
    }
}

const lesson = new VideoLesson("Closures", 40);
const session = new LiveSession("Async/Await", 60, "2026-04-21");

console.log(lesson instanceof VideoLesson); // true
console.log(lesson instanceof Content);     // true
console.log(session instanceof LiveSession); // true
console.log(session instanceof VideoLesson); // true
console.log(session instanceof Content);     // true
