var mymap = L.map('mapid').setView([-7.5677801, 110.789656], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibmlyZWRvY3oiLCJhIjoiY2tnb2g4bmhkMGUxZzJxbWo5YjZtYTR3cCJ9.UfH4BCO3K82kOgqPrCfSPA'
    }).addTo(mymap);

var marker = L.marker([-7.5677801, 110.789656]).addTo(mymap);