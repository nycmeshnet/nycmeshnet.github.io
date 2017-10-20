var map;
var currentNode = {};
var searchQuery = ""

function matchesSearch(query, id) {
  if (String(id) === String(query))
    return true
  // var queryIsSupernode = String(query) === "supernode" || String(query) === "Supernode"
  // if (queryIsSupernode && String(id) == String(227))
  //   return true
  return false
}

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
              // { lightness: 100 },
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
  var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });

  var mapOptions = {
    center: { lat: 40.7281809, lng: -73.9595798 },
    zoom: 13,
    disableDefaultUI: false,
    zoomControl: true,
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl: false
  };

  var map = new google.maps.Map(document.getElementById("map-div"), mapOptions);
  map.mapTypes.set("map_style", styledMap);
  map.setMapTypeId("map_style");

  var activeNodesLayer = new google.maps.Data();
  var potentialNodesLayer = new google.maps.Data();
  var linksLayer = new google.maps.Data();
  var linkNYCLayer = new google.maps.Data();
  // var beamsLayer = new google.maps.Data();
  activeNodesLayer.loadGeoJson("./nodes/active.json");
  potentialNodesLayer.loadGeoJson("./nodes/potential.json");
  linksLayer.loadGeoJson("./nodes/links.json");
  linkNYCLayer.loadGeoJson("./nodes/linkNYC.json");


  //changing icon opacity to show it has panoramas, also set supernode icon
  activeNodesLayer.setStyle(function(feature) {
    var url = "../assets/images/active.svg";
    var opacity = 0.75;
    var visible = true;
    var notes = feature.getProperty("notes").toLowerCase();
    if (notes.indexOf("supernode") !== -1) {
      url = "../assets/images/supernode.svg";
    }
    if (feature.getProperty("panoramas")) {
      //url = '../assets/images/activepano.svg';
      opacity = 1;
    }
    if (searchQuery.length > 0 && !matchesSearch(searchQuery, feature.getProperty('id'))) {
      visible = false;
    }
    return {
      scaledSize: new google.maps.Size(50, 50),
      title: feature.getProperty("id"),
      opacity: opacity,
      zIndex: 200,
      visible: visible,
      icon: {
        url: url,
        anchor: new google.maps.Point(10, 10),
        labelOrigin: new google.maps.Point(28, 10)
      },
      shadow: 1
        // label: {
        //   color: "#ff3b30",
        //   fontSize: "14",
        //   fontWeight: "bold",
        //   paddingLeft: "20",
        //   text: feature.getProperty("id"),
        // }
    };
  });

  potentialNodesLayer.setStyle(function(feature) {
    var url = "../assets/images/potential.svg";
    var opacity = 0.5;
    var visible = true;
    var notes = feature.getProperty("notes").toLowerCase();
    if (notes.indexOf("supernode") !== -1) {
      url = "../assets/images/supernode-potential.svg";
    }
    if (feature.getProperty("panoramas")) {
      //url = '../assets/images/potentialpano.svg';
      opacity = 1;
    }
    if (searchQuery.length > 0 && !matchesSearch(searchQuery, feature.getProperty('id'))) {
      visible = false;
    }
    return {
      scaledSize: new google.maps.Size(50, 50),
      title: feature.getProperty("id"),
      opacity: opacity,
      zIndex: 100,
      visible: visible,
      icon: {
        url: url,
        anchor: new google.maps.Point(10, 10),
        labelOrigin: new google.maps.Point(28, 10)
      }
    };
  });

  linksLayer.setStyle(function(link) {
    var strokeColor = "#ff3b30";
    var opacity = 0.5;
    var visible = true
    if (link.getProperty("status") != "active") {
      strokeColor = "gray";
      opacity = 0.25;
    }


    if (searchQuery.length > 0) {
      var linkMatches = matchesSearch(searchQuery, link.getProperty("from")) || matchesSearch(searchQuery, link.getProperty("to"))
      if (!linkMatches)
        visible = false;
    }

    return {
      visible: visible,
      zIndex: 999,
      strokeWeight: 3,
      strokeColor: strokeColor,
      strokeOpacity: opacity
    };
  });

  linkNYCLayer.setStyle(function(feature) {
    var url = "../assets/images/linkNYC.svg";
    var opacity = 0.5;
    return {
      scaledSize: new google.maps.Size(50, 50),
      title: feature.getProperty("id"),
      opacity: opacity,
      zIndex: 9,
      icon: {
        url: url,
        anchor: new google.maps.Point(10, 10)
      }
    };
  });

  var infowindow = new google.maps.InfoWindow();
  activeNodesLayer.addListener("click", openInfoWindow); // or newer showDetails
  potentialNodesLayer.addListener("click", openInfoWindow); //showDetails

  linksLayer.setMap(map);
  linkNYCLayer.setMap(map);
  potentialNodesLayer.setMap(map);
  activeNodesLayer.setMap(map);
}

function filterToSearch() {

}

function showImage(panorama) {
  var lightbox = document.getElementById('lightbox');
  var image = lightbox.children[0];
  image.src = "../panorama/"+panorama // bh changed path up level
  image.classList.remove('dn');
  lightbox.classList.add('fixed');
  lightbox.classList.remove('dn');
}

 function openInfoWindow(event) {
    // replace this with a fully custom overlay
    var content = "<div class='pv3'>"
    content += "<h2 class='di pr2'>Node "+event.feature.f.id+""+event.feature.f.otherNodes+"</h2>"

    if (event.feature.f.status == 'Installed') {
      content += "<h3 class='di green fw4'>Active</h3><br>"+event.feature.f.notes
    }
    else {
      content += "<h3 class='di gray fw4'>Potential</h3><br>"+event.feature.f.notes
    }

    content += "</div>"

    var panoramas = event.feature.f.panoramas
    if (panoramas) {
      content += "<h4 class='pb2 mv0 mb3 near-black fw4'>View from this node:</h3>"
      for (var i = 0; i < panoramas.length; i++) {
        var image = "<div class='w6'>"+
        "<a href='"+'../panorama/'+panoramas[i]+"'>"
        image += "<img class='w-100 h-100 contain' src='"+'../panorama/'+panoramas[i]+"'></img>"
        image += "</a>"+
        "</div";

        content += image;
      }
    }
     infowindow.setContent(content);
     infowindow.setPosition(event.feature.getGeometry().get());
     infowindow.setOptions({pixelOffset: new google.maps.Size(-1,-8)});
     infowindow.open(map);
     //setTimeout(infowindow.close(map), 0) // needs a timeout delay to force the autoscroll !!
     setTimeout(infowindow.open(map), 10000) // needs a timeout delay to force the autoscroll !!
 }

function hideDetails() {
  var infoWindow = document.getElementById('infoWindow')
  infoWindow.classList.remove('db');
}
