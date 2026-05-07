document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map').setView([51.1997, 4.4327], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.1997, 4.4327])
        .addTo(map)
        .bindPopup('<strong>Berchem</strong><br>Antwerpen')
        .openPopup();
});