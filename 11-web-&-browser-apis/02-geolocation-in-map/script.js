const map = L.map('map').setView([0, 0], 5);// pokazuje jak daleko ma być ten marker, postion i masztab

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const marker = L.marker([0, 0]).addTo(map)
.bindPopup('<strong>Hello</strong><br>World !') // text nad markerem 
.openPopup();// write here geolocation 

navigator.geolocation.getCurrentPosition(function(pos){
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    marker.setLatLng([lat, lng]).update();
}); // show me my position but my laptop has vpn so show me enother city
