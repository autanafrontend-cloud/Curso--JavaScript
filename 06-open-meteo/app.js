const statusBox = document.getElementById('status');
const forecastBox = document.getElementById('forecast');
const cityInput = document.getElementById('city');

document.getElementById('weather').addEventListener('click', loadWeather);

async function loadWeather() {
  const city = cityInput.value.trim();
  if (!city) return;

  statusBox.textContent = `1) Geocodificando ${city}...`;
  const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=es&format=json`);
  const geoData = await geoResponse.json();
  const place = geoData.results?.[0];

  if (!place) {
    forecastBox.innerHTML = '<p>No se encontró la ciudad.</p>';
    return;
  }

  statusBox.textContent = `2) Consultando tiempo para ${place.name} (${place.latitude}, ${place.longitude})...`;
  const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=3`);
  const weatherData = await weatherResponse.json();

  forecastBox.innerHTML = `
    <article class="weather-card">
      <h3>${place.name}, ${place.country}</h3>
      <p><strong>Actual:</strong> ${weatherData.current.temperature_2m} °C · viento ${weatherData.current.wind_speed_10m} km/h</p>
      <div class="weather-grid">
        ${weatherData.daily.time.map((date, i) => `
          <div>
            <strong>${date}</strong>
            <p>Máx: ${weatherData.daily.temperature_2m_max[i]} °C</p>
            <p>Mín: ${weatherData.daily.temperature_2m_min[i]} °C</p>
          </div>`).join('')}
      </div>
    </article>`;
}

loadWeather();
