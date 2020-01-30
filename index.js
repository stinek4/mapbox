//*********MAP**********
mapboxgl.accessToken = 'pk.eyJ1Ijoic3RpbmVrNCIsImEiOiJjazUzbHVjcG0wYTE0M2xxdmoxcHZjMGxtIn0.l5vsPsDq82fSr15vLQH75g';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    });

//*********DESTINASJONER**********
const gizaSettings = {
    center: [31.132517, 29.977556],
        zoom: 16,
        duration: 20000,
        bearing: 40, 
        pitch: 0
}

const londonEyeSettings = {
    center: [-0.119564, 51.503491],
        zoom: 17,
        duration: 30000,
        bearing: 120,
        pitch: 130 
}

const atlantisSettings = {
    center: [-77.323522, 25.084886],
        zoom: 17,
        duration: 25000,
        bearing: 100,
        pitch: 2
}

const disneyWorldSettings = {
    center: [-81.549431, 28.375847],
        zoom: 15,
        duration: 20000,
        bearing: 130,
        pitch: 30
}

//*********FLY FUNSKJONER**********

const flyTilGiza = () => {
    map.flyTo(gizaSettings);
}

const flyTilLondonEye = () => {
    map.flyTo(londonEyeSettings);
}

const flyTilAtlantis = () => {
    map.flyTo(atlantisSettings);
}

const flyTilDisneyWorld = () => {
    map.flyTo(disneyWorldSettings);
}

map.on("load", () => {
    setTimeout(flyTilGiza, 30);
//     setTimeout(flyTilLondonEye, 15000);
//     setTimeout(flyTilAtlantis, 40000);
//     setTimeout(flyTilDisneyWorld, 60000);
})