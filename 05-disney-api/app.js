const statusBox = document.getElementById('status');
const charactersBox = document.getElementById('characters');
const termInput = document.getElementById('term');

document.getElementById('rest').addEventListener('click', loadRest);
document.getElementById('graphql').addEventListener('click', loadGraphQL);

function renderCharacters(items, label) {
  charactersBox.innerHTML = items.map(item => `
    <article class="item">
      <h3>${item.name}</h3>
      <p><strong>Fuente:</strong> ${label}</p>
      <p>${(item.films || []).slice(0, 3).join(', ') || 'Sin películas registradas'}</p>
      ${item.imageUrl ? `<img src="${item.imageUrl}" alt="${item.name}" />` : ''}
    </article>`).join('');
}

async function loadRest() {
  const term = encodeURIComponent(termInput.value.trim());
  statusBox.textContent = 'REST · GET /character?name=' + term;
  const response = await fetch(`https://api.disneyapi.dev/character?name=${term}`);
  const data = await response.json();
  renderCharacters((data.data || []).slice(0, 6), 'REST');
}

async function loadGraphQL() {
  const term = termInput.value.trim();
  statusBox.textContent = 'GraphQL · POST /graphql';
  const query = `query Buscar($term: String) {
  characters(page: 1, pageSize: 6, filter: { name: $term }) {
    items {
      name
      films
      imageUrl
    }
  }
}`;
  const response = await fetch('https://api.disneyapi.dev/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { term } })
  });
  const payload = await response.json();
  if (payload.errors) {
    charactersBox.innerHTML = `<article class="item danger"><h3>GraphQL devolvió errores</h3><pre>${JSON.stringify(payload.errors, null, 2)}</pre></article>`;
    return;
  }
  renderCharacters((payload.data.characters.items || []).slice(0, 6), 'GraphQL');
}
