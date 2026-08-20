mapboxgl.accessToken = mapToken;

const coordinates = (listing && listing.geometry && listing.geometry.coordinates && listing.geometry.coordinates.length === 2) 
    ? listing.geometry.coordinates 
    : [77.2090, 28.6139];

const map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/mapbox/streets-v12",
    center: coordinates,
    zoom: 10,
});

const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h4>${listing ? listing.location : 'Location'}</h4>
             <p>Exact Location will be provided after booking</p>`
            )
    )
    .addTo(map);
