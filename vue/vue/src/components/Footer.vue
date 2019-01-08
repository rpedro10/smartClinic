<template>
<footer class="page-footer" style="margin-top:2em;">
    <div class="container">
      <div class="row" id="footer-row1">
        <div class="col-xs-12 col-sm-4 col-lg-7">
          <ul class="nav ">
            <li class="nav-footer">
                 <router-link to="/">
              <a class="nav-link" >Home</a>
                </router-link>
            </li>
            <li class="nav-footer">
              <a class="nav-link">Visão</a>
            </li>
            <li class="nav-footer">
              <a class="nav-link" >Rede SmartClinic</a>
            </li>
            <li class="nav-footer">
                    <router-link to="/become">
              <a class="nav-link">Torne-se SmartClinic</a>
                  </router-link>

            </li>

          </ul>
        </div>
        <div class="col-xs-4 col-sm-6 col-lg-4">
          <ul class="nav ">
            <li class="nav-social-media">
              <a class="nav-link  " href="https://instagram.com" target="_blank">
                <i class="fab fa-instagram fa-lg mr-md-5 mr-3 fa-2x"> </i>
              </a>
            </li>
            <li class="nav-social-media">
              <a class="nav-link" href="https://facebook.pt" target="_blank">
                <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
            </li>
            <li class="nav-social-media">
              <a class="nav-link" href="https://google.pt" target="_blank">
                <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
            </li>
          </ul>

        </div>
      </div>
      <div class="row" id="footer-row2">
        <div class="col-lg-12">
          <ul class="nav">
            <li class="nav-footer">
              <a class="nav-link">Termos e Condições</a>
            </li>
            <li class="nav-footer">
              <a class="nav-link">Politica de Privacidade e cookies</a>
            </li>
            <li class="nav-footer">
              <p>| © 2018 Todos os direitos reservados
              </p>
            </li>
          </ul>

        </div>

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: 'footer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.page-footer{
  background-color: rgb(59, 59, 59);  
  padding:50px;
  text-align: left;
  bottom:0;
}
.nav-footer .nav-link,.nav-social-media .nav-link
{
  color:white;
  display: inline;    
  
}
.nav-footer .nav-link:hover{
  text-decoration: underline;
  color:white;
  
}
.nav-footer p{
  color:white;
}

#footer-row1{
  border-bottom: 1px solid #ffd43f;
  padding-bottom: 20px;
}
#footer-row2{
  padding-top: 20px;
  
}

</style>
