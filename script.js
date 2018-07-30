
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
      changeMap(option);
  });


  }
});

 
/** 
clinics.addEventListener("change", function() {
  console.log(clinics.value );
});*/
map2="<div class='map-responsive' id='map2'>"+

"<iframe src='https://snazzymaps.com/embed/87379' width='100%' height='432px' style='border:none;'></iframe> "
+                 
"</div>  ";
map1="<div class='map-responsive' id='map1'>"+

"<iframe src='https://snazzymaps.com/embed/86952' width='100%' height='432px' style='border:none;'></iframe> "
+                 
"</div>  ";



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
  
  
}


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
