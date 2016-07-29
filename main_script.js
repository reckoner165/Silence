

      var citymap = {
        	newyork: {
          center: {lat: 40.714, lng: -74.005},
          population: 8405837
        }
      };


//       var cityCircle; 

    function initMap() {
        // Create the map.
			map = new google.maps.Map(document.getElementById('map'), {
	        zoom: 13,
	        center: {lat: 40.714, lng: -74.005},
	        mapTypeId: 'terrain'
	    });

        // Construct the circle for each value in citymap.
        // Note: We scale the area of the circle based on the population.
        // for (var city in citymap) {
          // Add the circle for this city to the map.
        //    	cityCircle = new google.maps.Circle({
        //     strokeColor: '#FF0000',
        //     strokeOpacity: 0.8,
        //     strokeWeight: 2,
        //     fillColor: '#FF0000',
        //     fillOpacity: 0.35,
        //     draggable: true,
        //     map: map,
        //     center: citymap.newyork.center,
        //     radius: Math.sqrt(citymap.newyork.population) * 0.5,
        //     editable: true
        //   });
        // // }
        // console.log(cityCircle.center);
      }
      
      var url = 'https://data.cityofnewyork.us/resource/fhrw-4uyv.json?$where=latitude > 40.729720 AND latitude < 40.729920 AND longitude < -73.997158';
      
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

        	dispFlag();
        }
      });

