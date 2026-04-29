/*Ejercicio 4.4 • Iterable personalizado
Crea un objeto `range` que implemente el protocolo iterable y produzca números dentro de un intervalo.
Entrega esperada:
• Código funcional y legible.
• Breve explicación del razonamiento usado.
• Salida esperada o caso de prueba mínimo.
*/
const range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        let current = this.from;
        const end = this.to;

        return {
            next() {
                if (current <= end) {
                    return { value: current++, done: false };
                }
                return { value: undefined, done: true };
            }
        };
    }
};

for (const n of range) {
    console.log(n);
}
/*Explicación
Para que un objeto sea iterable debe implementar `Symbol.iterator`.
Ese método devuelve un iterador con un método `next()` que va entregando valores uno a uno hasta marcar `done: true`.
Así conseguimos que un objeto propio funcione con `for...of` igual que un array o un string.
Salida esperada / prueba mínima
Salida esperada:
1
2
3
4
5
*/