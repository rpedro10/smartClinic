
  /**
   
    $(document).ready(function(){
    let form = document.getElementById("form-select-clinic");
    console.log(form);
    let option = form.options[form.selectedIndex].text;
    console.log(option);

    if(form.options[form.selectedIndex]){

    }



    
    
  });
  */
/**
  $(document).ready(function(){
  var form = document.getElementById("select-clinic");
  console.log(form);
  if(form){
    let option = form.options[form.selectedIndex].text;
    console.log(option);      
    changeMap(option);
    form.addEventListener("change", function() {
      let option = form.options[form.selectedIndex].text;
      console.log(option);      
      //changeMap(option);
      changeFocus();
      
  });


  }
});

*/
/**
 * 
 * 40.2030616,-8.4356745
 * 
 */

 
/** 
clinics.addEventListener("change", function() {
  console.log(clinics.value );
});*/
map2="<div class='map-responsive' id='map2'>"+

"<iframe id='frame2'src='https://snazzymaps.com/embed/87379' width='100%' height='432px' style='border:none;'></iframe> "
+                 
"</div>  ";
map1="<div class='map-responsive' id='map1'>"+

"<iframe id='frame1' src='https://snazzymaps.com/embed/86952' width='100%' height='432px' style='border:none;'></iframe> "
+                 
"</div>  ";


$(document).ready(function(){
  var form = document.getElementById("select-clinic");
  if(form){
    let option = form.options[form.selectedIndex].text;
    form.addEventListener("change", function() {
      let option = form.options[form.selectedIndex].text;
      changeFocus(option);
  });


  }
});
var MAP;
var c1 = {lat: 38.7200324, lng: -9.1664412};  //ferreira borges
var c2 = {lat: 41.1484633, lng: -8.6134978};  // clinica X-porto
function myMap() {
  var mapProp= {
      center:new google.maps.LatLng(38.7200324,-9.1664412), // centro na clinica ferreira borges
      zoom:7,
  };

  var marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 59.327, lng: 18.067}
  });

  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker = new google.maps.Marker({position: c1, map: map,    animation: google.maps.Animation.DROP});
  var marker2 = new google.maps.Marker({position: c2,map: map,animation: google.maps.Animation.DROP});
  MAP=map;

   // Zoom to 11 when clicking on marker
   google.maps.event.addListener(marker,'click',function() {
    map.setZoom(11);
    map.setCenter(marker.getPosition());
  });
  google.maps.event.addListener(marker2,'click',function() {
    map.setZoom(11);
    map.setCenter(marker2.getPosition());
  });

  
  }

 


function changeFocus(option){
  if(option=='Clinica X'){
    MAP.setCenter( c2); 
    MAP.setZoom(9);    
    
  }
  else{
    MAP.setCenter( c1); 
    MAP.setZoom(9);
    
  }
}
/** 

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


/** 
  function addEventListeners() {
    
  clinic = document.querySelectorAll('#form-select-clinic');
  for (let i = 0; i < clinic.length; i++) {
    btns_banUser[i].addEventListener('click', function () {
      currentUser = i;
      sendBanUserRequest();
    });
  }
}
  */
