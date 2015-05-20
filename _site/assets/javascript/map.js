L.mapbox.accessToken = 'pk.eyJ1Ijoib28iLCJhIjoiWXFoMHRIWSJ9.ZdI5DZEZ0qE6J0IcsR3w1w';
var map_element = 'map';
if (document.getElementById("map-header"))
  map_element = 'map-header';

var map = L.mapbox.map(map_element, 'oo.k9efp640', {
  zoomControl: false,
  showMarkers: false,
  maxZoom: 19,
  minZoom: 10
}),
heat = L.heatLayer([], { maxZoom: 15.0 }).addTo(map);

// Add each marker point to the heatmap.
var layer = L.mapbox.featureLayer('oo.k9efp640').on('ready', function() {
  layer.eachLayer(function(l) {
    heat.addLatLng(l.getLatLng());
  });
});

// hide all markers
map.featureLayer
.setFilter(function() { return false; })
.addTo(map);

map.scrollWheelZoom.disable();
map.doubleClickZoom.disable();
map.touchZoom.disable();
map.dragging.disable();

var processBegan = false;
var addedMarker = false;
var marker;

//function makeActive() {
  //map.setZoom(12);
  //map.doubleClickZoom.enable();
  //map.touchZoom.enable();
  //map.dragging.enable();
  //map.addLayer(L.mapbox.tileLayer('oo.kbip7077'));
  //new L.Control.Zoom({position:'bottomright'}).addTo(map);
//}

function addNode() {
  if (!processBegan) {
    processBegan = true;
  map.scrollWheelZoom.enable();
  map.doubleClickZoom.enable();
  map.touchZoom.enable();
  map.dragging.enable();
  new L.Control.Zoom({position:'topright'}).addTo(map);


  // document.getElementById("map").style.zIndex = 0;
  document.getElementById("main_text").style.display = "none";
  document.getElementById("location").style.display = "inherit";
  document.getElementById("logo").href = "index.html";
  setTimeout(function(){
    document.getElementById("logo").style.zIndex = 1;
    document.getElementById("map").style.zIndex = 0;
    document.getElementById("location").style.display = "none";
  }, 3000);
  map.addLayer(L.mapbox.tileLayer('oo.kbip7077'));
  }
}

function showForm() {
  document.getElementById("join").style.display = "inherit";
  document.getElementById("submit").style.display = "inherit";
  document.getElementById("next").style.display = "none";
  document.getElementById("map").style.zIndex = -1;
}

function submit() {
  document.getElementById("thanks").style.display = "inherit";
  document.getElementById("join").style.display = "none";
  document.getElementById("submit").style.display = "none";
}

map.on('click', function(click) {

  document.getElementById("location").style.display = "none";
  document.getElementById("next").style.display = "inherit";

  if (!addedMarker) {
    addedMarker = true;
    marker = L.marker(click.latlng, {
      draggable: true
    });
    marker.addTo(map);
  }
  else {
    marker._latlng = click.latlng;
    marker.update();
  }
});
