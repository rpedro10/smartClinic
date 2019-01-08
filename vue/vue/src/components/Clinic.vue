<template>
  <div id="profile">
    <Navbar></Navbar>


    <div class="container" id="clinicInfo" style="margin-top:5em;">
    <div class="container container-clinicName">
      <h3>
        <strong>Clínica Ferreira Borges</strong>
      </h3>
    </div>
    <br>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6 col-lg-4">
          <div class="container image-container">
            <img class="img-fluid" src="/static/assets/img/website.png" alt="clinic-logo">
          </div>
          <br>
          <br>
          <div class="container">
            <div class="card">
              <div class="card-body ">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Username:
                    <i class="fas fa-user fa-fw"></i>FerrBorges</li>
                  <li class="list-group-item">Responsavel:
                    <i class="fas fa-user-md"></i>Drª ANA</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-xs-12 col-md-6">
          <div class="row">
            <div class="col-lg-3 col-yellow1">
              <div class="container container-yellow text-right">
                <span> Email </span>
                <i class="fa fa-envelope"></i>

              </div>
            </div>
            <div class="col-lg-9 col-yellow2">
              <div class="container container-yellow">
                <span>r2321@example.pt.com</span>

              </div>

            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-yellow1">
              <div class="container container-yellow text-right">
                <span>Contactos</span>
                <i class="fa fa-phone"></i>

              </div>

            </div>
            <div class="col-lg-9 col-yellow2">
              <div class="container container-yellow">
                <span>212212112 / 93121122</span>

              </div>

            </div>
          </div>
          <div class="row row-yellow1">
            <div class="col-lg-3 col-xs-6 col-yellow1 text-right">
              <div class="container container-yellow">
                <span>Localização</span>
                <i class="fa fa-map-marker"></i>

              </div>

            </div>
            <div class="col-lg-9  col-xs-6  col-yellow2">
              <div class="container container-yellow">
                <span>Rua Ferreira Borges, 173C 1350-130 Lisboa</span>

              </div>

            </div>
          </div>
          <div class="row ">
            <div class="col-lg-3 col-yellow1 ">
              <div class="container container-yellow text-right">
                <span>Website </span>
                <i class="fab fa-chrome"></i>
              </div>
            </div>
            <div class="col-lg-9 col-yellow2">
              <div class="container container-yellow">
                <a class="link" href="http://www.clinicaferreiraborges.pt/" target="_blank">
                  Clinica ferreira Borges
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-black1">
              <div class="container container-black text-right">
                <span>Horário
                  <i class="fa fa-clock"></i>
                </span>

              </div>

            </div>
            <div class="col-lg-9 col-black2">
              <div class="container container-black">
                <span>2ª feira a 6ª feira: 10h às 20h
                  <br> Sábado: 10h às 14h
                  <br> Domingo: Encerrado</span>
              </div>

            </div>
          </div>
          <div class="row row-white">
            <div class="container container-links">
              <ul class="nav">
                <li class="nav-social-media">
                  <a class="link " href="https://instagram.com" target="_blank">
                    <i class="fab fa-instagram fa-lg mr-md-5 mr-3 fa-2x"> </i>
                    instagram
                  </a>
                </li>
                <li class="nav-social-media">
                  <a class="link" href="https://facebook.pt" target="_blank">
                    <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                    facebook
                  </a>
                </li>
                <li class="nav-btn">
                  <a href="editProfile.html" role="button"  class="btn btn-secondary">
                    <span class="pr-1">
                      <i class="far fa-edit"></i>
                    </span>
                    Editar Informação
                  </a>
                </li>
              </ul>
              <br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container" id="seguros_especialidades" style="margin-top:3em">
    <div class="row">
      <div class="col-lg-3 col-xs-12 col-md-4">
        <div class="container container-seguros">
          <div class="row row-title">
            <h3>
              <strong>Seguros</strong>
            </h3>

          </div>
          <br>

          <div class="row">
            <div class="container list-container">
              <ul class="list-seguros">
                <li>Medicare</li>
                <li>The Future Healthcare</li>
                <li> Saúde Prime</li>
                <li>Vitória Seguros </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <div class="col-lg-9 col-xs-12 col-md-8 col-especialidades">
        <div class="container container-seguros">
          <div class="row row-title2">
            <h3>
              <strong>Especialidades</strong>
            </h3>
          </div>
          <br>
          <div class="row">

            <ul class="list-especialidades">
              <li>Oclusão</li>
              <li>Endodontia</li>
              <li> Higiene Oral</li>
              <li>Implantologia </li>
              <li>Ortodontia</li>
              <li>Odontopediatria</li>
              <li> Periodontologia</li>
              <li>Prostodontia </li>
              <li>Prostodontia</li>
              <li> Cirurgia Oral</li>
              <li> Medicina e Patologia Oral</li>
              <li>Estética Dentária </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

    <myFooter></myFooter>

  </div>

</template>

<script>
import Navbar from './Navbar'
import myFooter from './Footer'

export default {
  name: 'profile',
  data () {
    return {
      error: ''
    }
  },
  methods: {
  },
  components: {
    Navbar,
    myFooter
  }
}

</script>

<style scoped>


  .list-especialidades {
    list-style-type: disc;
    -webkit-columns: 2;
    -moz-columns: 2;
    columns: 2;
    list-style-position: inside;
}

.container-clinicName{
  background-color: lightgrey;
   padding:22px;
}


#clinicInfo .container-yellow{

  padding:11px;
  background-color: #ffd43f;
  font-weight: bold;
  
}
.col-yellow1, .col-black1{
    padding-right: 0px;
}




#clinicInfo .container-black{
  background-color:rgb(59, 59, 59);
  color:white;
  min-height: 93px;
  padding-top:11px;
  padding-bottom: 11px;
}
/**
#clinicInfo .nav-social-media a{
  color:rgb(59, 59, 59);
}
*/
#clinicInfo li{
  padding:8px;
}
#clinicInfo .row-white .btn {
background-color:rgb(59, 59, 59);
border-radius: 0px;

}
#clinicInfo .row-white {
  background-color: lightgrey;
 
}
#seguros_especialidades .container-seguros{
  border: 1px solid #ffd43f;
  padding-right: 0px;
  padding-left: 0px;
  padding-top: 22px;
  
}
#seguros_especialidades .row-title{
 background-color:lightgray;
 text-align: center;
 padding:11px;
 padding-left:33px;
  
}
#seguros_especialidades .row-title2{
  background-color:rgb(59, 59, 59);
  text-align: center;
  padding:11px;
  
  padding-left:33px;
  color:#ffd43f;
   
 }
 #seguros_especialidades .col-especialidades{  
  padding-left:44px;
 }



</style>
