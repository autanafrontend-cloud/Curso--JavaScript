const statusBox = document.getElementById('status');
const jokeBox = document.getElementById('joke');

document.querySelector('.buttons').addEventListener('click', (event) => {
  const category = event.target.dataset.category;
  if (!category) return;

  statusBox.textContent = `Solicitando categoría: ${category}`;
  jokeBox.innerHTML = '<p>Cargando…</p>';

  fetch(`https://v2.jokeapi.dev/joke/${category}?lang=es&type=single,twopart&safe-mode`)
    .then(response => response.json())
    .then(data => {
      if (data.type === 'single') {
        jokeBox.innerHTML = `<h3>Chiste simple</h3><p>${data.joke}</p>`;
        console.log(data.joke);
      } else {
        jokeBox.innerHTML = `<h3>Chiste en dos partes</h3><p><strong>${data.setup}</strong></p><p>${data.delivery}</p>`;
        console.log(data.setup);
        console.log(data.delivery);
      }
    })
    .catch(error => {
      jokeBox.innerHTML = `<p>No se pudo recuperar el chiste.</p>`;
      statusBox.textContent = `Error: ${error.message}`;
    })
    .finally(() => {
      statusBox.textContent += 'Petición finalizada.';
    });
});
