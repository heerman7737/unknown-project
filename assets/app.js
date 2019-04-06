
var API_KEY = 'HAYOJZ9OtK2eKFqerVsFRG73lttXlxbFYnS3zysVua3xHZPAhjK7LQJsTQfdp5a8S3a9b9bdsMNOj-Fuf1vSrs43wSROe-ldP55_B3JSNdE58PnbHWv0kBIfO5WdXHYx';
var URL1 = 'https://api.yelp.com/v3/businesses/search?location=losangeles&term&categories=restaurant&limit=20';
var queryURL1 = `https://cors-anywhere.herokuapp.com/${URL1}`;


// document.addEventListener('click', ({ target }) => {
//     if (target.className === 'result') {
fetch(queryURL1, {

    method: "GET",
    headers: {
        "accept": "application/json",
        "x-requested-with": "xmlhttprequest",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${API_KEY}`
    }
}).then(res => res.json())

    .then(data => {
        console.log(data)
        let placeElem = document.getElementById("card1")
        placeElem.setAttribute('src', data.businesses[1].image_url)
        let placeName = document.getElementById("card-head1")
        placeName.innerHTML = data.businesses[1].name
        let placeLocation = document.getElementById("card-body1")
        placeLocation.innerHTML = data.businesses[1].location.address1 + " " + data.businesses[1].location.address2 + " " + data.businesses[1].location.address3 + " " + data.businesses[1].location.city

    });
var URL2 = 'https://api.yelp.com/v3/businesses/search?location=losangeles&term&categories=stadiumsarenas&limit=20';
var queryURL2 = `https://cors-anywhere.herokuapp.com/${URL2}`;


// document.addEventListener('click', ({ target }) => {
//     if (target.className === 'result') {
fetch(queryURL2, {

    method: "GET",
    headers: {
        "accept": "application/json",
        "x-requested-with": "xmlhttprequest",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${API_KEY}`
    }
}).then(res => res.json())

    .then(data => {
        console.log(data)
        let placeElem = document.getElementById("card2")
        placeElem.setAttribute('src', data.businesses[10].image_url)
        let placeName = document.getElementById("card-head2")
        placeName.innerHTML = data.businesses[10].name
        let placeLocation = document.getElementById("card-body2")
        placeLocation.innerHTML = data.businesses[10].location.address1 + " " + data.businesses[10].location.address2 + " " + data.businesses[10].location.address3 + " " + data.businesses[10].location.city

    });
var URL3 = 'https://api.yelp.com/v3/businesses/search?location=losangeles&term&categories=shopping&limit=20';
var queryURL3 = `https://cors-anywhere.herokuapp.com/${URL3}`;


// document.addEventListener('click', ({ target }) => {
//     if (target.className === 'result') {
fetch(queryURL3, {

    method: "GET",
    headers: {
        "accept": "application/json",
        "x-requested-with": "xmlhttprequest",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${API_KEY}`
    }
}).then(res => res.json())

    .then(data => {
        console.log(data)
        let placeElem = document.getElementById("card3")
        placeElem.setAttribute('src', data.businesses[1].image_url)
        let placeName = document.getElementById("card-head3")
        placeName.innerHTML = data.businesses[1].name
        let placeLocation = document.getElementById("card-body3")
        placeLocation.innerHTML = data.businesses[1].location.address1 + " " + data.businesses[1].location.address2 + " " + data.businesses[1].location.address3 + " " + data.businesses[1].location.city

    });


function initMap() {
    // The location of Uluru
    //    let Mypo = {lat: this.x, lng: this.y};
    // var uluru = {lat: -25.344, lng: 131.036};
    // function showPosition(position) {
    // var uluru = position.coords.latitude + "," + position.coords.longitude;}
    var howlin = { lat: 34.088037, lng: -118.396508 };
    var dodger = { lat: 34.088037, lng: -118.396508 };
    var uluru = { lat: 34.088037, lng: -118.396508 };
    // The map, centered at Uluru
    var map1 = new google.maps.Map(
        
        document.getElementById('map1'), { zoom: 15, center: howlin });

    var map2 = new google.maps.Map(
        document.getElementById('map2'), { zoom: 15, center: dodger });

    var map3 = new google.maps.Map(
        document.getElementById('map3'), { zoom: 15, center: uluru });
    

    // The marker, positioned at Uluru
    var marker1 = new google.maps.Marker({ position: howlin, map: map1 });
    var marker2 = new google.maps.Marker({ position: dodger, map: map2 });
    var marker3 = new google.maps.Marker({ position: uluru, map: map3 });
    

}

fitText(document.querySelector("#card-body2"), 0.38);
// $('#card-head2').textfill({
//     maxFontPixels: 200
//   });
