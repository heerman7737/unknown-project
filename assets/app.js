
function initMap() {
    // The location of Uluru
    //    let Mypo = {lat: this.x, lng: this.y};
    var uluru = {lat: -25.344, lng: 131.036};
    // function showPosition(position) {
        // var uluru = position.coords.latitude + "," + position.coords.longitude;}
    var uluru = {lat: 33.6450458, lng: -117.83493920000001};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        // document.getElementById('map'), {zoom: 4, center: Mypo});
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
    // var marker = new google.maps.Marker({position: Mypo, map: map});
    
  }

