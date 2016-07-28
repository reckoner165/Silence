// GOOGLE MAPS API KEY AIzaSyCTClh_W-kntpjfKgEt3321kGpQJXQvK1M 



// Construct the query string
url = 'https://data.ct.gov/resource/9k2y-kqxn.json?'
      + 'organization_type=Public%20School%20Districts'
      + '&$$app_token=CGxaHQoQlgQSev4zyUh5aR5J3';

      // Intialize our map
var center = new google.maps.LatLng(41.7656874,-72.680087);
var mapOptions = {
  zoom: 8,
  center: center
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);