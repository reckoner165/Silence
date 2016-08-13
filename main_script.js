

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

        var url = 'https://data.cityofnewyork.us/resource/fhrw-4uyv.json?$where=latitude > ' + sw.lat() + ' AND latitude < ' + ne.lat() + ' AND longitude > ' + sw.lng() + ' AND longitude < ' + ne.lng() + '&$$app_token=09sIcqEhoY0teGY5rhupZGqhW';
        // console.log(url);
        AJAXcall(url);

        

      }
      
      // console.log(ne.lat());
     
      //FLAGS



   function AJAXcall(url) {

      // var responseStatus = 'default';
      var loudTalking = 0;
      var loudMusic = 0;
      var construction = 0;
      var traffic = 0;
      // $.ajaxSetup();
      $.get(url, function(data, status){

          // console.log(data);
        
          $.each(data, function(i, entry) {

            // console.log(entry.descriptor);
            if (entry.descriptor === 'Loud Talking') {
              loudTalking += 1;
              // console.log('Loud Talking' + loudTalking);
              

            } else if (entry.descriptor === 'Loud Music/Party') {
              loudMusic += 1;

              // console.log('Music' + loudMusic);


            } else if (entry.descriptor === 'Engine Idling') {
              traffic += 1;

              // console.log('Traffic' + traffic);

            } else if (entry.descriptor === 'Noise: Construction Before/After Hours (NM1)') {
              construction +=1 ;

            }
            else {
              // console.log('sup');
            }

          });
          
          console.log(status);
          console.log('Loud Talking' + loudTalking);
              console.log('Music' + loudMusic);
              console.log('Traffic' + traffic);
          
        
      });
      
      // if (status === 'success') {
      //       setTimeout(function() {
      //         console.log('Loud Talking' + loudTalking);
      //         console.log('Music' + loudMusic);
      //         console.log('Traffic' + traffic);

      //       },10);
      // }

   }



