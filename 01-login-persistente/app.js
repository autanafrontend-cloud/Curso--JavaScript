
const form = document.getElementById('loginForm');
const userInput = document.getElementById('user');
const rememberInput = document.getElementById('remember');
const status = document.getElementById('status');
const logoutBtn = document.getElementById('logoutBtn');

const KEY = 'demo.login.user';

function hydrate() {
  const saved = localStorage.getItem(KEY);
  if (saved) {
    userInput.value = saved;
    status.textContent = 'Sesión restaurada para ' + saved;
  } else {
    status.textContent = 'Sin sesión activa';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const user = userInput.value.trim();
  if (!user) return;
  if (rememberInput.checked) {
    localStorage.setItem(KEY, user);
  } else {
    sessionStorage.setItem(KEY, user);
  }
  status.textContent = 'Bienvenido, ' + user;
});

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem(KEY);
  sessionStorage.removeItem(KEY);
  userInput.value = '';
  status.textContent = 'Sesión eliminada';
});

hydrate();
