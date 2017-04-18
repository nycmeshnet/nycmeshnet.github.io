
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
        var styledMap = new google.maps.StyledMapType(styles,
          {name: "Styled Map"});

        map = new google.maps.Map(document.getElementById('map-div'), {
          center: {lat: 40.7281809, lng: -73.9595798},
          zoom: 12,
          disableDefaultUI: true,
          zoomControl: true,
          scrollwheel: false
        });
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');

        map.data.setStyle(function(feature) {
          var status = feature.f.status;
          var fillColor = (status == 'Installed') ? 'red' : 'gray';
          var opacity = (status == 'Installed') ? .9 : .5;
          var zIndex = (status == 'Installed') ? 100 : 1;
          var scale = 8;
          var strokeWeight = 1;
          // supernode
          if (feature.f.id == 227) {
            scale = 10;
            strokeWeight = 2;
          }

          return {
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              fillColor: fillColor,
              fillOpacity: opacity,
              strokeOpacity: opacity,
              scale: scale,
              strokeColor: 'white',
              strokeWeight: strokeWeight,
              clickable: true,
            },
            title: 'Node #'+feature.f.id,
            zIndex: zIndex
          }
        });

        map.data.loadGeoJson('./nodes.json');

        var infowindow = new google.maps.InfoWindow();


        map.data.addListener('click', function(event) {
          var content = "<div class='pv3 tl'>"
          content += "<p class='f4 fw7 di pr2 tl'>Node "+event.feature.f.id+"</p>"

          if (event.feature.f.status == 'Installed') {
            content += "<p class='di green f5 fw4'>Active</p>"
          }else {
            content += "<p class='di gray f5 fw4'>Potential</p>"
          }

          content += "</div>"

          var panoramas = event.feature.f.panoramas
          if (panoramas) {
            content += "<p class='pv0 mv0 near-black fw4 tl'>View from this location:</p>"
            for (var i = 0; i < panoramas.length; i++) {
              var image = "<a href='../panorama/"+panoramas[i]+"'>"
              image += "<div class='bg-near-white h5 w6 cover pv0 mt1 mb3' style='background-image: url(\"../panorama/"+panoramas[i]+"\")'></div>"
              image += "</a>"

              content += image;
            }
          }
           infowindow.setContent(content);
           infowindow.setPosition(event.feature.getGeometry().get());
           infowindow.setOptions({pixelOffset: new google.maps.Size(-1,0)});
           infowindow.open(map);
        });

        map.addListener("click", function(event) {
          infowindow.close();
        })


      }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBNClp7oJsw-eleEoR3-PQKV23tpeW-FpE&libraries=visualization&callback=initMap"
    async defer></script>
</body>
</html>
