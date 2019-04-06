
let topic=["restaurant","stadiumsarenas","shopping"]
for(let i=0;i<=topic.length;i++){
var API_KEY = 'HAYOJZ9OtK2eKFqerVsFRG73lttXlxbFYnS3zysVua3xHZPAhjK7LQJsTQfdp5a8S3a9b9bdsMNOj-Fuf1vSrs43wSROe-ldP55_B3JSNdE58PnbHWv0kBIfO5WdXHYx';
var URL1 = `https://api.yelp.com/v3/businesses/search?location=losangeles&term&categories=${topic[i]}&limit=10`;
var queryURL1 = `https://cors-anywhere.herokuapp.com/${URL1}`;



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
       
        let placeElem = document.getElementById(`card${i}`)
        placeElem.setAttribute('src', data.businesses[5].image_url)
        let placeName = document.getElementById(`card-head${i}`)
        placeName.innerHTML = data.businesses[5].name
        let placeLocation = document.getElementById(`card-body${i}`)
        placeLocation.innerHTML = data.businesses[5].location.display_address[0]+" "+data.businesses[5].location.display_address[1]
        function initMap() {
            // The location of Uluru
            //    let Mypo = {lat: this.x, lng: this.y};
            // var uluru = {lat: -25.344, lng: 131.036};
            // function showPosition(position) {
            // var uluru = position.coords.latitude + "," + position.coords.longitude;}
            var place = { lat: data.businesses[5].coordinates.latitude, lng: data.businesses[5].coordinates.longitude };

        
            var map = new google.maps.Map(
                
                document.getElementById(`map${i}`), { zoom: 15, center: place });
            
        
        
            var marker1 = new google.maps.Marker({ position: place, map: map });

        }
        initMap();
        
    });
}
// var URL2 = 'https://api.yelp.com/v3/businesses/search?location=losangeles&term&categories=stadiumsarenas&limit=20';
// var queryURL2 = `https://cors-anywhere.herokuapp.com/${URL2}`;



// fetch(queryURL2, {

//     method: "GET",
//     headers: {
//         "accept": "application/json",
//         "x-requested-with": "xmlhttprequest",
//         "Access-Control-Allow-Origin": "*",
//         "Authorization": `Bearer ${API_KEY}`
//     }
// }).then(res => res.json())

//     .then(data => {
//         console.log(data)
//         let placeElem = document.getElementById("card2")
//         placeElem.setAttribute('src', data.businesses[10].image_url)
//         let placeName = document.getElementById("card-head2")
//         placeName.innerHTML = data.businesses[10].name
//         let placeLocation = document.getElementById("card-body2")
//         placeLocation.innerHTML = data.businesses[10].location.address1 + " " + data.businesses[10].location.address2 + " " + data.businesses[10].location.address3 + " " + data.businesses[10].location.city

//     });
// var URL3 = 'https://api.yelp.com/v3/businesses/search?location=losangeles&term&categories=shopping&limit=20';
// var queryURL3 = `https://cors-anywhere.herokuapp.com/${URL3}`;



// fetch(queryURL3, {

//     method: "GET",
//     headers: {
//         "accept": "application/json",
//         "x-requested-with": "xmlhttprequest",
//         "Access-Control-Allow-Origin": "*",
//         "Authorization": `Bearer ${API_KEY}`
//     }
// }).then(res => res.json())

//     .then(data => {
//         console.log(data)
//         let placeElem = document.getElementById("card3")
//         placeElem.setAttribute('src', data.businesses[1].image_url)
//         let placeName = document.getElementById("card-head3")
//         placeName.innerHTML = data.businesses[1].name
//         let placeLocation = document.getElementById("card-body3")
//         placeLocation.innerHTML = data.businesses[1].location.address1 + " " + data.businesses[1].location.address2 + " " + data.businesses[1].location.address3 + " " + data.businesses[1].location.city

//     });


