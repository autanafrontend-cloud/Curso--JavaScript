const statusBox = document.getElementById('status');
const gallery = document.getElementById('gallery');

document.getElementById('one').addEventListener('click', () => loadImages(1));
document.getElementById('three').addEventListener('click', () => loadImages(3));
document.getElementById('breed').addEventListener('click', loadBreeds);

async function loadImages(amount) {
  statusBox.textContent = `GET /breeds/image/random/${amount}`;
  const endpoint = amount === 1
    ? 'https://dog.ceo/api/breeds/image/random'
    : `https://dog.ceo/api/breeds/image/random/${amount}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  const images = Array.isArray(data.message) ? data.message : [data.message];
  gallery.innerHTML = images.map(url => `<img src="${url}" alt="Perro aleatorio" />`).join('');
}

async function loadBreeds() {
  statusBox.textContent = 'GET /breeds/list/all';
  const response = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await response.json();
  const breeds = Object.keys(data.message).slice(0, 28);
  gallery.innerHTML = `<div class="breed-list">${breeds.map(b => `<span>${b}</span>`).join('')}</div>`;
}

loadImages(1);    //Se lanza al abrir la pagina con una sola imagen
