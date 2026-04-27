const statusBox = document.getElementById('status');
const pokemonBox = document.getElementById('pokemon');
const input = document.getElementById('name');

document.getElementById('search').addEventListener('click', searchPokemon);

async function searchPokemon() {
  const KEY = 'demo.pokemon';
  const name = input.value.trim().toLowerCase();
  if (!name) return;

  try {
    statusBox.textContent = `GET /pokemon/${name}`;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) throw new Error('Pokémon no encontrado');
    const data = await response.json();

    const types = data.types.map(t => t.type.name).join(', ');
    const abilities = data.abilities.map(a => a.ability.name).join(', ');

    //items.unshift({ id: Date.now(), text, done: false });
    //localStorage.setItem(KEY, ({ id: Date.now(), data.name }));

    pokemonBox.innerHTML = `
      <article class="poke-card">
        <img src="${data.sprites.other['official-artwork'].front_default || data.sprites.front_default}" alt="${data.name}" />
        <div>
          <h3>${data.name.toUpperCase()}</h3>
          <p><strong>ID:</strong> ${data.id}</p>
          <p><strong>Tipos:</strong> ${types}</p>
          <p><strong>Habilidades:</strong> ${abilities}</p>
          <p><strong>Peso:</strong> ${data.weight}</p>
        </div>
      </article>`;
  } catch (error) {
    pokemonBox.innerHTML = `<p>${error.message}</p>`;
    statusBox.textContent = `Error: ${error.message}`;
  }
}

searchPokemon();
