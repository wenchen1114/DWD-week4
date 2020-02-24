      var map, infoWindow, marker;
      function initMap() {
        map = new google.maps.Map(document.getElementById('left_1'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 15,
          scale: 2
        });
        infoWindow = new google.maps.InfoWindow;
        
        // marker = new google.maps.Marker(document.getElementById('left_1'), {
        //     position: {lat: -34.397, lng: 150.644},
        //     map: map,
        //   });
        
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            lng = position.coords.longitude;
            lat = position.coords.latitude;
            if (lon>0){
              lngO = lng-180;
            }else{
              lngO = lng+180;
            }
    
            latO = lat*-1;
            var pos = {
              lat: latO,
              lng: lngO,
            };
            let infoString = '<p style= "color: black; text-size: 3rem;">'+'This is the opposite side of you.'+'</p>';
            //marker.setMap(map);
            infoWindow.setPosition(pos);
            infoWindow.setContent(infoString);
            infoWindow.open(map);
            map.setCenter(pos);

            document.getElementById('current').addEventListener('click',function(){
              pos = {
                  lat: lat,
                  lng: lng,
              };
              let infoString = '<p style= "color: black; text-size: 3rem;">'+'This is your current position.'+'</p>';
              //marker.setMap(map);
              infoWindow.setPosition(pos);
              infoWindow.setContent(infoString);
              infoWindow.open(map);
              map.setCenter(pos);
              })
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }