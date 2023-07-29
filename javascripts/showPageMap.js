//mapboxgl.accessToken = 'pk.eyJ1IjoiYWRpdHlhMjgiLCJhIjoiY2t5ZW41N2c2MGZyYzMwcXBrNmR1b2s0aiJ9.wtPdA8hCU7R3ec3tPNK3LQ';
//mapboxgl.accessToken = '<%-process.env.MAPBOX_TOKEN%>'
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: campground.geometry.coordinates, // starting position [lng, lat]
    zoom: 10 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${campground.title}</h3><p>${campground.location}</p>`
            )
    )
    .addTo(map);