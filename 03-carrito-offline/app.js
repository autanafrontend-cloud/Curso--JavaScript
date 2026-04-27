
const KEY = 'demo.cart.items';
const products = [
  { id: 1, emoji: '🎧', name: 'Auriculares Bluetooth', price: 49.99 },
  { id: 2, emoji: '⌨️', name: 'Teclado Mecánico', price: 89.90 },
  { id: 3, emoji: '🖱️', name: 'Ratón Inalámbrico', price: 29.50 },
  { id: 4, emoji: '🎒', name: 'Mochila', price: 54.00 },
  { id: 5, emoji: '⌚', name: 'Reloj', price: 69.00 },
  { id: 6, emoji: '📷', name: 'Mini cámara', price: 95.00 }
];
let cart = JSON.parse(localStorage.getItem(KEY) || '[]');

const productsEl = document.getElementById('products');
const cartItemsEl = document.getElementById('cartItems');
const totalEl = document.getElementById('total');

function money(n){ return n.toFixed(2).replace('.', ',') + ' €'; }
function save(){ localStorage.setItem(KEY, JSON.stringify(cart)); }

function renderProducts() {
  productsEl.innerHTML = products.map(p => `
    <article class="card">
      <div class="pic">${p.emoji}</div>
      <div class="name">${p.name}</div>
      <div class="price">${money(p.price)}</div>
      <button data-id="${p.id}">Añadir</button>
    </article>
  `).join('');
  productsEl.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => add(+btn.dataset.id)));
}
function add(id){
  const found = cart.find(item => item.id === id);
  if(found) found.qty++;
  else {
    const p = products.find(x => x.id === id);
    cart.push({ ...p, qty: 1 });
  }
  save(); renderCart();
}
function change(id, delta){
  const item = cart.find(i => i.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) cart = cart.filter(i => i.id !== id);
  save(); renderCart();
}
function renderCart(){
  if(!cart.length){
    cartItemsEl.innerHTML = '<div class="empty">Tu carrito está vacío.</div>';
    totalEl.textContent = money(0);
    return;
  }
  cartItemsEl.innerHTML = cart.map(item => `
    <div class="item">
      <div class="row">
        <div class="meta">
          <strong>${item.emoji} ${item.name}</strong>
          <small>${money(item.price)} / unidad</small>
        </div>
        <div class="qty">
          <button data-act="minus" data-id="${item.id}">-</button>
          <span>${item.qty}</span>
          <button data-act="plus" data-id="${item.id}">+</button>
        </div>
      </div>
    </div>
  `).join('');
  cartItemsEl.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
    change(+btn.dataset.id, btn.dataset.act === 'plus' ? 1 : -1);
  }));
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  totalEl.textContent = money(total);
}
document.getElementById('clearBtn').addEventListener('click', () => { cart = []; save(); renderCart(); });
document.getElementById('saveBtn').addEventListener('click', () => { save(); alert('Carrito guardado en localStorage'); });
if(!cart.length){
  cart = [
    { ...products[0], qty: 1 },
    { ...products[1], qty: 1 },
    { ...products[2], qty: 2 }
  ];
  save();
}
renderProducts(); renderCart();
