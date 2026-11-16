// 1. Initialiser la carte [lat, lng], niveau de zoom
const map = L.map('planParis').setView([48.8566, 2.3522], 13);

// 2. Ajouter le fond de carte OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// 3. Ajouter un marqueur (optionnel)
L.marker([48.8566, 2.3522]).addTo(map);
