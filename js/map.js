function initialize() {
  var location = {lat: -33.9370833, lng: 18.8626944};

  var mapOptions = {
    center: location,
    zoom: 15,
    scrollwheel: false
  };

  var map = new google.maps.Map(document.getElementById('map'),
      mapOptions);

  var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Marula'
      });
}

google.maps.event.addDomListener(window, 'load', initialize);