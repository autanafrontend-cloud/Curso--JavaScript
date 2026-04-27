
const KEY = 'demo.todo.items';
const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');
const count = document.getElementById('count');
const clearBtn = document.getElementById('clearBtn');
const filters = [...document.querySelectorAll('.filter')];

let filter = 'all';
let items = JSON.parse(localStorage.getItem(KEY) || '[]');

function save() {
  localStorage.setItem(KEY, JSON.stringify(items));
}
function render() {
  list.innerHTML = '';
  const visible = items.filter(item => filter === 'all' ? true : filter === 'done' ? item.done : !item.done);
  visible.forEach(item => {
    const li = document.createElement('li');
    li.className = 'item' + (item.done ? ' done' : '');
    li.innerHTML = `
      <input type="checkbox" ${item.done ? 'checked' : ''} />
      <div>
        <div class="text">${item.text}</div>
        <small>${item.done ? 'Completada' : 'Pendiente'}</small>
      </div>
      <button class="icon-btn" aria-label="Eliminar">🗑</button>
    `;
    li.querySelector('input').addEventListener('change', () => {
      item.done = !item.done;
      save(); render();
    });
    li.querySelector('button').addEventListener('click', () => {
      items = items.filter(x => x.id !== item.id);
      save(); render();
    });
    list.appendChild(li);
  });
  count.textContent = items.length + (items.length === 1 ? ' tarea' : ' tareas');
}
function add() {
  const text = input.value.trim();
  if (!text) return;
  items.unshift({ id: Date.now(), text, done: false });
  input.value = '';
  save(); render();
}
addBtn.addEventListener('click', add);
input.addEventListener('keydown', e => e.key === 'Enter' && add());
clearBtn.addEventListener('click', () => {
  items = items.filter(i => !i.done);
  save(); render();
});
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filter = btn.dataset.filter;
  render();
}));
if (!items.length) {
  items = [
    { id: 1, text: 'Estudiar JavaScript', done: true },
    { id: 2, text: 'Preparar clase', done: false },
    { id: 3, text: 'Hacer ejercicios', done: false }
  ];
  save();
}
render();
