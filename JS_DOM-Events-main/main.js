// Ejercicio 1: Selección y manipulación de elementos (DOM)
//
// Selecciona el Node #1 usando el método getElementById()
// y cambia su texto a:
// “I used the getElementById(“node1”) method to access this”
//
// Selecciona el Node #2 usando el método getElementsByClassName()
// y cambia su texto a:
// "I used the getElementByClassName("node2") method to access this"
//
// Selecciona TODOS los h3 usando el método getElementsByTagName()
// y cambia su texto a:
// "I used the getElementByTagName("h3") method to access all of these"

// 1. Seleccionar por ID
// 1. getElementById()
const node1 = document.getElementById("node1");
node1.textContent =
  'I used the getElementById("node1") method to access this';

// 2. getElementsByClassName()
const node2 = document.getElementsByClassName("node2")[0];
node2.textContent =
  'I used the getElementByClassName("node2") method to access this';

// 3. getElementsByTagName()
const headings = document.getElementsByTagName("h3");

for (let i = 0; i < headings.length; i++) {
  headings[i].textContent =
    'I used the getElementByTagName("h3") method to access all of these';
}
/*
getElementById() → devuelve 1 elemento
getElementsByClassName() → devuelve una lista (HTMLCollection)
getElementsByTagName() → devuelve todos los elementos del tag
Para listas siempre necesitas recorrer con for o acceder con [0]
*/

// Ejercicio 2: Crear / añadir / insertar elementos (DOM)
//
// 1. Crea un elemento <p> usando document.createElement()
//    y añade el texto:
//    "This node was created using the createElement() method"
//
// 2. Añade ese nodo al nodo padre usando appendChild()
//    (primero debes seleccionar el nodo padre)
//
// 3. Crea un elemento <a> usando document.createElement()
//    y añade el texto:
//    "I am a <a> tag"
//
// 4. Inserta el <a> dentro del nodo padre,
//    pero antes del <p> que acabas de crear usando insertBefore()
//
// 5. Añade un enlace al <a> usando la propiedad href

// Selecciona el contenedor correcto del HTML
const parent = document.getElementById("parent");

// Crear <p>
const paragraph = document.createElement("p");
paragraph.textContent =
  "This node was created using the createElement() method";

// Añadir <p> al DOM
parent.appendChild(paragraph);

// Crear <a>
const link = document.createElement("a");
link.textContent = "I am a <a> tag";
link.href = "https://www.google.com";

// Insertar <a> antes del <p>
parent.insertBefore(link, paragraph);

/*
createElement() → crea el elemento
textContent → añade texto dentro del elemento
appendChild() → lo añade al final
insertBefore() → lo inserta antes de otro nodo
href → define el enlace del <a>
*/


// Ejercicio 3: Eliminar / reemplazar elementos (DOM)
//
// 1. Reemplaza el "Child Node" con un nuevo elemento <p>
//    que diga "New Child Node" usando el método replaceChild()
//
// 2. Elimina el "New Child Node" usando el método remove()
//    o removeChild()

// Selecciona el contenedor del ejercicio 3
const exercise3Parent = document.getElementById("exercise-container3");

// Nodo original
const oldChild = document.getElementById("N1");

// Crear nuevo nodo
const newChild = document.createElement("p");
newChild.textContent = "New Child Node";

// Reemplazar nodo
exercise3Parent.replaceChild(newChild, oldChild);

// (Opcional) eliminar después de 2 segundos
setTimeout(() => {
  newChild.remove();
}, 2000);

//solucion alternativa
// si quieres usar removeChild en lugar de remove()

//parent.removeChild(newChild);

/*
replaceChild(nuevo, viejo) → sustituye un nodo por otro
remove() → elimina el elemento directamente
removeChild() → elimina desde el padre
El DOM siempre funciona como un “árbol” (padre → hijos)
*/

// Ejercicio 4: Elementos desde un array
//
// Usa el siguiente array de valores para generar una lista en el DOM:
/*
let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)"
]; */
//
// 1. Crea un elemento <ul> (lista desordenada)
// 2. Recorre el array y crea un <li> por cada elemento
// 3. Añade cada <li> al <ul>
// 4. Añade el <ul> al div#container del ejercicio 4

// Array de datos
const list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)"
];

// Crear lista
const ul = document.createElement("ul");

// Contenedor del ejercicio 4
const container = document.getElementById("container");

// Crear <li> por cada elemento
list.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});

// Añadir lista al DOM
container.appendChild(ul);

/*
createElement("ul") → crea la lista
createElement("li") → crea cada elemento
forEach() → recorre el array
appendChild() → inserta en el DOM
div#container → es el contenedor donde se muestra todo
*/

// Ejercicio 5: Eventos del DOM
//
// Escribe una función llamada show() que cree un nuevo <div>
// con un mensaje para el usuario:
//
// "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
//
// Este <div> debe comportarse como un "modal", es decir,
// debe cubrir el contenido principal de la pantalla.
//
// BONUS:
// El modal debe poder cerrarse.
// Refactoriza el código para permitir esta funcionalidad.

function show() {
  // Crear overlay
  const modal = document.createElement("div");

  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.7)";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "1000";

  // Crear caja del modal
  const box = document.createElement("div");
  box.style.background = "white";
  box.style.padding = "20px";
  box.style.borderRadius = "10px";
  box.style.maxWidth = "400px";
  box.style.textAlign = "center";

  box.textContent =
    "Clicking the button triggers the onclick event, which calls show()...";

  // Botón cerrar
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "Close";
  closeBtn.style.marginTop = "10px";

  closeBtn.addEventListener("click", () => {
    modal.remove();
  });

  // Ensamblar modal
  box.appendChild(closeBtn);
  modal.appendChild(box);
  document.body.appendChild(modal);
}


// Conectar botón del HTML con la función show
document.getElementById("btn").addEventListener("click", show);

//como se usa en html
//<button onclick="show()">Open Modal</button>

/*
show() → función que se ejecuta al hacer click
createElement() → crea el modal dinámicamente
position: fixed → lo hace cubrir toda la pantalla
zIndex → lo pone encima de todo
addEventListener("click") → permite cerrar el modal
remove() → elimina el modal del DOM
*/


