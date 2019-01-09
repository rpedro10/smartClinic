<template>
  <div id="social">
    <Navbar></Navbar>
    <main class="main">
        <div class="jumbotron">

            <div class="container">

                <h2 class="display-4">Gestão das Redes Sociais</h2>
                <br>
                <p>As Redes Sociais são um importante meio para envolver os clientes com a sua clínica. Para sua
                    comodidade, adicionamos a esta plataforma um sistema de gestão de redes sociais inovador, onde
                    pode realizar diretamente pedidos para novos posts e campanhas de publicidade.<br><br> É possível
                    igualmente consultar o seu arquivo de conteúdos que já foram usados na sua comunicação digital
                    (posts, imagens e vídeos).
                </p>
                <br>
                <p>

                    <a class="btn btn-secondary btn-md" href="#" data-toggle="modal" data-target="#request_post" role="button">Sugerir
                        Post</a>
                    <a class="btn btn-secondary btn-md" href="#" data-toggle="modal" data-target="#request_campaign"
                        role="button"> Sugerir Campanha</a>

                    <hr>

                    <ul class="nav ">
                        <li class="nav">
                            <a class="nav  " href="https://instagram.com" target="_blank">
                                <i class="fab fa-instagram fa-lg mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                        </li>
                        <li class="nav-social-media">
                            <a class="nav" href="https://facebook.pt" target="_blank">
                                <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                        </li>
                        <li class="nav-social-media">
                            <a class="nav" href="https://google.pt" target="_blank">
                                <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                        </li>
                    </ul>
            </div>
        </div>

        



    </main>


    <myFooter></myFooter>

  </div>

</template>

<script>
import Navbar from './Navbar'
import myFooter from './Footer'

export default {
  name: 'social',
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


</style>
