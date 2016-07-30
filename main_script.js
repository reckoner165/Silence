

      var citymap = {
        	newyork: {
          center: {lat: 40.714, lng: -74.005},
          population: 8405837
        }
      };


      var rectangle;

    function initMap() {
        // Create the map.
			map = new google.maps.Map(document.getElementById('map'), {
	        zoom: 13,
	        center: {lat: 40.714, lng: -74.005},
	        mapTypeId: 'terrain'
	    });

      rectangle = new google.maps.Rectangle({
        strokeColor: '#CC9999',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FFAAAA',
        fillOpacity: 0.35,
        map: map,
        bounds: {
          north: 40.728920,
          south: 40.729720,
          east: -73.996158,
          west: -73.997158
        },
        visible: true,
        draggable: true,
        editable: true
      });  

      rectangle.addListener('bounds_changed', showNewRect);

      }

      
      function showNewRect(event) {
        var ne = rectangle.getBounds().getNorthEast();
        var sw = rectangle.getBounds().getSouthWest();

        // console.log('NE LAT' + ne.lat() + 'NE LONG' + ne.lng());
        // console.log('SW LAT' + sw.lat() + 'SW LONG' + sw.lng());

        var url = 'https://data.cityofnewyork.us/resource/fhrw-4uyv.json?$where=latitude > ' + sw.lat() + ' AND latitude < ' + ne.lat() + ' AND longitude < ' + sw.lng() + ' AND longitude > ' + ne.lng();
  
        setTimeout(AJAXcall(url),2000);

      }
      
      // console.log(ne.lat());
     
      //FLAGS

      var loudTalking = 0;
      var loudMusic = 0;
      var construction = 0;
      var traffic = 0;

    function dispFlag() {
      console.log('Loud Talking' + loudTalking);
      console.log('Music' + loudMusic);
      console.log('Traffic' + traffic);

	 }

   function AJAXcall(url) {
      $.get(url, function(data, status){
        $.each(data, function(i, entry) {

          if (entry.descriptor === 'Loud Talking') {
            loudTalking += 1;

          } else if (entry.descriptor === 'Loud Music/Party') {
            loudMusic += 1;

          } else if (entry.descriptor === 'Engine Idling') {
            traffic += 1;

          } else if (entry.descriptor === 'Noise: Construction Before/After Houses (NM1)') {
            construction +=1 ;
          }

        });
        if (status === 'success') {

          setTimeout(dispFlag(),3000);
        }
      });

   }



