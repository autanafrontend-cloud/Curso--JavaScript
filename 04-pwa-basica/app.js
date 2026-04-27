
const NOTES_KEY = 'demo.pwa.notes';
const statusEl = document.getElementById('networkStatus');
const notesEl = document.getElementById('notes');

function updateStatus() {
  const online = navigator.onLine;
  statusEl.textContent = online ? 'Conexión activa' : 'Sin conexión';
  statusEl.className = 'pill ' + (online ? 'online' : 'offline');
}
window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);
updateStatus();

notesEl.value = localStorage.getItem(NOTES_KEY) || 'Recordatorio: explica que AppCache es histórico y que hoy se usa Service Worker.';
document.getElementById('saveNoteBtn').addEventListener('click', () => {
  localStorage.setItem(NOTES_KEY, notesEl.value);
  alert('Nota guardada');
});
document.getElementById('cacheBtn').addEventListener('click', async () => {
  const reg = await navigator.serviceWorker.getRegistration();
  if (reg) {
    reg.update();
    alert('Comprobación de actualización lanzada');
  }
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(console.error);
}
