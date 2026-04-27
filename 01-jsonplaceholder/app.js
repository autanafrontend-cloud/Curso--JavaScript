const statusBox = document.getElementById('status');
const results = document.getElementById('results');

document.querySelector('.buttons').addEventListener('click', async (event) => {
  const action = event.target.dataset.action;
  if (!action) return;

  try {
    if (action === 'users') await loadUsers();
    if (action === 'posts') await loadPosts();
    if (action === 'create') await createPost();
    if (action === 'update') await updatePost();
    if (action === 'delete') await deletePost();
  } catch (error) {
    statusBox.textContent = `Error: ${error.message}`;
  }
});

async function loadUsers() {
  statusBox.textContent = 'GET /users';
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  results.innerHTML = data.slice(0, 6).map(user => `
    <article class="item">
      <h3>${user.name}</h3>
      <p>${user.email}</p>
      <small>${user.company.name}</small>
    </article>`).join('');
}

async function loadPosts() {
  statusBox.textContent = 'GET /posts?_limit=6';
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const data = await response.json();
  results.innerHTML = data.map(post => `
    <article class="item">
      <h3>#${post.id} · ${post.title}</h3>
      <p>${post.body}</p>
    </article>`).join('');
}

async function createPost() {
  statusBox.textContent = 'POST /posts';
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Curso JS', body: 'Creado desde clase', userId: 99 })
  });
  const data = await response.json();
  results.innerHTML = `<article class="item success"><h3>Post creado</h3><pre>${JSON.stringify(data, null, 2)}</pre></article>`;
}

async function updatePost() {
  statusBox.textContent = 'PUT /posts/1';
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: 1, title: 'Título actualizado', body: 'Contenido actualizado', userId: 1 })
  });
  const data = await response.json();
  results.innerHTML = `<article class="item success"><h3>Post actualizado</h3><pre>${JSON.stringify(data, null, 2)}</pre></article>`;
}

async function deletePost() {
  statusBox.textContent = 'DELETE /posts/1';
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'DELETE' });
  results.innerHTML = `<article class="item danger"><h3>Eliminación simulada</h3><p>Status HTTP: ${response.status}</p></article>`;
}
