
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
    var myLatlng = new google.maps.LatLng(20.2278, 85.8583);
    // Assotech World - Avenue 01, Rudrapur, Bhubaneswar, Odisha 751032
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 14,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map. 
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            }
        ]
    };

    

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
    if (!mapElement) {
        return;
    }

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    var addresses = ['Assotech World - Avenue 01, Plot No. 274, adjacent to NH-16, Rudrapur, Bhubaneswar, Odisha 751032'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(addresses[x])+'&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s', null, function (data) {
            if (!data.results || !data.results[0]) {
                return;
            }
            var p = data.results[0].geometry.location;
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map,
                icon: 'images/loc.png'
            });
            map.setCenter(latlng);
            map.setZoom(15);

        });
    }
    
}
google.maps.event.addDomListener(window, 'load', init);