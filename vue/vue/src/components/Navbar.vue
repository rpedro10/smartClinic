<template>

  <nav id="navbar" class="navbar navbar-expand-lg navbar-dark  fixed-top">

    <router-link to="/">
     <a class="navbar-brand offset-5"> 
        <img id="logo" src="/static/assets/img/logo.png" alt="smartClinic" width="180" height="40">
   </a>
    </router-link>
   
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <br>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item1">
          <a id="vision" class="nav-link" > VISÃO</a>
        </li>
        <li class="nav-item2">
          <a id="network" class="nav-link" >ENCONTRE UMA SMARTCLINIC </a>

        </li>
        <li class="nav-item3" id="nav-login">
          <router-link to="/login">
            <a class="nav-link">
              <i class="fas fa-sign-in-alt fa-fw"></i> LOGIN
            </a>
          </router-link>

        </li>

      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      msg: 'navbar'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/**navbar**/
#network,#become,#vision,#tv,#camps,#profile{
  color:rgb(59, 59, 59);
  font-size: small;
  font-weight: bold;
}

#nav-login{
  background-color:rgb(59, 59, 59);
  color:white;
  font-size: small;
  padding:10px;
}

.nav-item0{
  padding-top:10px;
  padding-left: 10px;
}
.nav-item1{
  padding-top:10px;
  padding-left: 10px;
}
.nav-item2{
  padding-top:10px;
  padding-right:55px;
  padding-left: 10px;
  
}

#vision:hover,#become:hover,#network:hover,#tv:hover,#camps:hover,#profile:hover{
  color:white;
  
}

#navbar { 
  background-color:#ffd43f;
    padding: 0px;
    
}

</style>
