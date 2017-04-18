var map;

function initMap() {
  var styles = [
    {
      featureType: "administrative.locality",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "on" }
      ]
    },{
      featureType: "poi",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "transit",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];
  var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

  var mapOptions = {
    center: {lat: 40.7281809, lng: -73.9595798},
    zoom: 13,
    disableDefaultUI: true,
    zoomControl: true,
    scrollwheel: false
  }

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  var activeNodesLayer = new google.maps.Data();
  var potentialNodesLayer = new google.maps.Data();
  var linksLayer = new google.maps.Data();
  // var beamsLayer = new google.maps.Data();
  activeNodesLayer.loadGeoJson('./nodes/active.json');
  potentialNodesLayer.loadGeoJson('./nodes/potential.json');
  linksLayer.loadGeoJson('./nodes/links.json');
  // beamsLayer.addGeoJson({"type":"Feature","geometry":{"coordinates":[-74.001122,40.711137],"type":"Point"}});

  activeNodesLayer.setStyle({
    icon: {
      url: '../images/active.svg',
      anchor: new google.maps.Point(10, 10),
    }
  })

  potentialNodesLayer.setStyle({
    icon: {
      url: '../images/potential.svg',
      anchor: new google.maps.Point(10, 10),
    },
    zIndex: -1
  })

  linksLayer.setStyle(function (link) {
    var strokeColor = 'red';
    var opacity = 1;
    if (link.getProperty('status') != 'active') {
      strokeColor = 'gray';
      opacity = 0.5
    }
    return {
      zIndex: 999,
      strokeWeight: 4,
      strokeColor: strokeColor,
      strokeOpacity: opacity
    }
  })

  // beamsLayer.setStyle({
  //   icon: {
  //     url: '../images/supernode.svg',
  //     anchor: new google.maps.Point(0, 0),
  //   },
  //   zIndex: -1
  // })

  var infowindow = new google.maps.InfoWindow();
  activeNodesLayer.addListener('click', openInfoWindow);
  potentialNodesLayer.addListener('click', openInfoWindow);

  linksLayer.setMap(map)
  activeNodesLayer.setMap(map)
  potentialNodesLayer.setMap(map)
  beamsLayer.setMap(map)

  function openInfoWindow(event) {
    // replace this with a fully custom overlay
    var content = "<div class='pv3'>"
    content += "<h2 class='di pr2'>Node "+event.feature.f.id+"</h2>"

    if (event.feature.f.status == 'Installed') {
      content += "<h3 class='di green fw4'>Active</h3>"
    }
    else {
      content += "<h3 class='di gray fw4'>Potential</h3>"
    }

    content += "</div>"

    var panoramas = event.feature.f.panoramas
    if (panoramas) {
      content += "<h4 class='pb2 mv0 mb3 near-black fw4'>View from this node:</h3>"
      for (var i = 0; i < panoramas.length; i++) {
        var image = "<div class='w6'>"+
        "<a href='"+'../panoramas/'+panoramas[i]+"'>"
        image += "<img class='w-100 h-100 contain' src='"+'../panoramas/'+panoramas[i]+"'></img>"
        image += "</a>"+
        "</div";

        content += image;
      }
    }
     infowindow.setContent(content);
     infowindow.setPosition(event.feature.getGeometry().get());
     infowindow.setOptions({pixelOffset: new google.maps.Size(-1,-8)});
     infowindow.open(map);
  }
}
