function initialize() {
  var location = {lat: -33.936005, lng: 18.860582};

  var mapOptions = {
    center: location,
    zoom: 15,
    scrollwheel: false,
    draggable: false
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
