
/**
 * Coimbra coords:
 * 40.2030616,-8.4356745
 */


$(document).ready(function () { //scroll in the homepage
  // from: https://www.w3schools.com/bootstrap/bootstrap_ref_js_scrollspy.asp
  // Add scrollspy to <body>
  $('body').scrollspy({ target: ".navbar", offset: 50 });

  // Add smooth scrolling on all links inside the navbar
  $("#navbar a").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});

$(document).ready(function () { //scroll in the homepage
  // from: https://www.w3schools.com/bootstrap/bootstrap_ref_js_scrollspy.asp

  // Add scrollspy to <body>
  $('body').scrollspy({ target: "#banner1", offset: 0 });

  // Add smooth scrolling on all links inside the navbar
  $(".btn_more ").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});


$(document).ready(function () {
  var form = document.getElementById("select-clinic");
  if (form) {
    let option = form.options[form.selectedIndex].text;
    console.log(option);

    form.addEventListener("change", function () {
      let option = form.options[form.selectedIndex].text;
      console.log(option);
      changeFocus(option);
    });


  }
});
var MAP;
var c1 = { lat: 38.7200324, lng: -9.1664412 };  //ferreira borges
var c2 = { lat: 41.1484633, lng: -8.6134978 };  // clinica X-porto
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.2030616, -8.4356745), // centro em coimbra
    zoom: 7,
    mapTypeControl: false,      // para desaparecer a opçao de satelite
    //MAP STYLE
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ],
  };



  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  var marker = new google.maps.Marker({
    position: c1, map: map, title: 'CLINICA FERREIRA BORGES',
    animation: google.maps.Animation.DROP, icon: "./img/pin3.png"
  });
  var marker2 = new google.maps.Marker({
    position: c2, map: map, title: 'CLINICA X-PORTO',
    animation: google.maps.Animation.DROP, icon: "./img/pin3.png"
  });

  //TO show INFO WINDOW about the clinic
  var contentString =
    '<div id="content">' +
    '<a class="link" role="button" href="clinicProfile.html" ><h6 id="firstHeading" class="firstHeading">Clinica Ferreira Borges </h6> </a>' +
    '<div id="bodyContent">' +
    '<p>' +
    ' Nºde telefone:91254444 ' + '<br>' +
    'RUA FERREIRA BORGES 113C ,1234-130 LISBOA ' +
    '</p>' + '<a class="btn btn-secondary btn-sm" href="clinicProfile.html" role="button">Mais Informação</a>'
    +
    '</div>' +

    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  // Zoom to 11 when clicking on marker
  google.maps.event.addListener(marker, 'click', function () {
    map.setZoom(15);
    map.setCenter(marker.getPosition());
    infowindow.open(map, marker);
  });

  google.maps.event.addListener(marker2, 'click', function () {
    map.setZoom(15);
    map.setCenter(marker2.getPosition());
    // infowindow.open(map, marker2);

  });

  MAP = map;

}

function changeFocus(option) {
  if (option == 'Clinica X') {
    MAP.setCenter(c2);
    MAP.setZoom(9);
  }
  else {
    MAP.setCenter(c1);
    MAP.setZoom(9);
  }
}
/** 
OLD WAY OF CHANGING MAPS
function changeMap(option) {
  var col = document.getElementById("column2");
  if(option=='Clinica X'){
    //<iframe src="https://snazzymaps.com/embed/87379" width="100%" height="600px" style="border:none;"></iframe>
    $("#map1").remove();
    $("#column2").append(map2);
  }
  else{
    $("#map2").remove();
    $("#column2").append(map1);
  }
}*/

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  // window.alert("latitude:"+position.coords.latitude+ "   longitude:"+position.coords.longitude);
  console.log(position.coords);
  getClosestClinic(position);
}

function getDistance(lat1, lon1, lat2, lon2, unit) {
  //https://www.geodatasource.com/developers/javascript
  var radlat1 = Math.PI * lat1 / 180;
  var radlat2 = Math.PI * lat2 / 180;
  var theta = lon1 - lon2;
  var radtheta = Math.PI * theta / 180;
  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  if (dist > 1) {
    dist = 1;
  }
  dist = Math.acos(dist);
  dist = dist * 180 / Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit == "K") { dist = dist * 1.609344 }
  if (unit == "N") { dist = dist * 0.8684 }

  return dist;
}

function getClosestClinic(position) {

  var distance1 = getDistance(position.coords.latitude, position.coords.longitude, c1.lat, c1.lng, 'K');
  var distance2 = getDistance(position.coords.latitude, position.coords.longitude, c2.lat, c2.lng, 'K');

  console.log(distance1);
  console.log(distance2);
  var option;
  if (distance1 < distance2) {
    option = "Clinica Ferreira Borges";
    changeFocus(option);
  }
  else {
    option = "Clinica X";
    changeFocus(option);

  }

}


$(document).ready(function () {
  var video = document.getElementById('myVideo');
  if (video != null) {
    document.getElementById('myVideo').addEventListener('ended', myHandler, false);
    function myHandler(e) {
      console.log("ended");
      $("#myVideo").fadeOut('slow', function() {
        // will be called when the element finishes fading out
        // if selector matches multiple elements it will be called once for each
        var video = document.getElementById('myVideo');
        video.src = "./img/video.mp4"
        $("#myVideo").fadeIn('slow');
        
    });
    /** 
      $("#myVideo").fadeOut();
      $("#myVideo").promise().done(function(){
        $("#myVideo").fadeOut();
        */
       
     
      
    }

  }



});

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);

}
function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}

$(document).ready(function () {
  var monthNames = ["janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  var dayNames = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
  var newDate = new Date();
  newDate.setDate(newDate.getDate());
  $('#Date').html(dayNames[newDate.getDay()] + ", " + newDate.getDate() + ' de ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
  var dt = new Date();

  

});
/** 
function getWeatherDemo() {
  $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast ' +
        'where woeid in (select woeid from geo.places(1) where text="Porto")&format=json', function (data) {
      console.log(data);
      alert("The temperatute in London is " +
          data.query.results.channel.item.condition.temp +
          data.query.results.channel.units.temperature
      );
  });
}
*/


$(document).ready(function () {

  if(document.getElementById('weather')!=null){
    var we = document.getElementById('weather');    
    console.log("aqui");
    $.get('https://api.openweathermap.org/data/2.5/weather?q=Lisboa,pt&appid=fd3e104e149005930241670a34b67079&lang=pt', function (data) {
        console.log(data);
        var tempo= data.weather[0].icon;
        //var desc= data.weather[0].description;
        
        var ic= data.main.temp;
        ic-=272.15;
        ic= Math.round(ic);
        document.getElementById("weather").innerHTML = data.name + ', ' + ic +'°C ';

        var src='https://openweathermap.org/img/w/' + tempo +'.png';
        document.getElementById("temp-icon").src=src;
        
      });

  }
  
  

});

/**
 * 
 *  

$(document).ready(function(){
  var video = document.getElementById('myVideo');
  if(video!=null){
    
    video.autoplay = true;
    video.load();
    

  }
  

 
}); */

