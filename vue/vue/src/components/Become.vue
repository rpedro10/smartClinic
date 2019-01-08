<template>
  <div id="become">
    <!-- Navbar -->
    <Navbar></Navbar>

    <!-- Page's content -->
    <div id="wrapper" style="margin-top:3em;">
          <ContactModal></ContactModal>

      <main class="main" id="banner1">
        <div class="row row1">
          <div class="col-xs-12 col-sm-3 col-lg-6" id="col1">
            <div class="container container-text">
              <h3>
                <strong>Pequeno investimento, grande retorno</strong>
              </h3>
              <p>
                Ao integrar a rede SMART CLINIC está a dar um impulso extra à sua clínica e a alargar a base de pacientes que podem realizar
                um tratamento no seu consultório.
              </p>
            </div>
            <div class="row">
              <div class="container button-container">
                <a  href="#" data-toggle="modal" data-target="#leave_contact" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-plus"></span> Add Survey</a>
               <!--   <a v-if="option === 'Survey'" href="#" data-toggle="modal" data-target="#leave_contact" class="btn btn-primary btn-sm"><span class="glyphicon glyphicon-plus"></span> Add Survey</a>
                  <b-btn v-b-modal.modalPrevent>Launch demo modal</b-btn>
-->
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-3 col-lg-6" id="col2">
            <div class="row">
              <div class="container">
                <div class="container container-text">
                  <h4>
                    <strong>O maior agregador de clínicas dentárias</strong>
                  </h4>
                  <p>
                    Faça parte do maior portal agregador de clínicas dentárias e deixe que os pacientes o encontrem à distância de um clique,
                    a qualquer hora e em todos os distritos.
                  </p>
                  <a class="btn btn-primary btn-md btn_more" role="button" href="#about">Saiba Mais</a>
                </div>
              </div>
            </div>
            <div class="row row2">
              <div class="container container-text">
                <h4>
                  <strong>Um hub de serviços digitais</strong>
                </h4>
                <p>
                  Investir na rede é investir na sua própria clínica. Os nossos serviços de marketing digital estão acessíveis
                  a todas as clínicas que integram o hub, a preços competitivos.
                </p>
                <a class="btn btn-primary btn-md btn_more" role="button" href="#services">Saiba Mais</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div class="container">
        <div class="row">
          <div class="container image-container">
            <img src="/static/assets/img/seta.png" class="img" id="seta" alt="vision-icon1">
          </div>
        </div>
      </div>
      <div id="about" class="container">
        <div class="section-headline text-center">
          <h1>Vantagens</h1>
        </div>
        <div class="row">
          <ul class="list">
            <li>
              Acesso facilitado a uma plataforma de transferência de conhecimento, constituída por parceiros de referência na área da Investigação
              em Saúde.
            </li>
            <li>Portal de comunicação digital amplificado, com área de cliente, onde cada clínica parceira tem um destaque adicional.</li>
            <li>
              Garantia de exclusividade regional da comunicação do seu negócio, para que possa diferenciar-se da concorrência. Prevemos
              que a sua empresa seja a única SMART CLINIC num raio de ação expressivo.
            </li>
            <li>Custos fixos mais competitivos na aquisição de equipamento médico.</li>
          </ul>
        </div>
        <div class="container button-container">
          <button
            type="button"
            data-toggle="modal"
            data-target="#leave_contact"
            class="btn btn-secondary btn-lg"
          >Torne-se SmartClinic</button>
        </div>
      </div>

      <div class="container" id="services">
        <h1>Os nossos Serviços</h1>
        <br>
        <div class="container">
          <div class="row">
            <div class="col-sm-4" id="service1">
              <div class="about-move">
                <div class="services-details">
                  <div class="single-services">
                    <div class="services-icon">
                      <img src="/static/assets/img/identidade.png" width="55" alt="vision-icon1">
                    </div>
                    <h6>
                      <strong>Criação de Identidade Digital</strong>
                    </h6>
                  </div>
                </div>
                <!-- end about-details -->
              </div>
            </div>
            <div class="col-sm-4" id="service2">
              <div class="about-move">
                <div class="services-details">
                  <div class="single-services">
                    <div class="services-icon">
                      <img src="/static/assets/img/website.png" width="55" alt="vision-icon1">
                    </div>
                    <h6>
                      <strong>Website</strong>
                    </h6>
                  </div>
                </div>
                <!-- end about-details -->
              </div>
            </div>
            <div class="col-sm-4" id="service3">
              <div class="about-move">
                <div class="services-details">
                  <div class="single-services">
                    <div class="services-icon">
                      <img src="/static/assets/img/pub.png" width="55" alt="ads-icon">
                    </div>
                    <h6>
                      <strong>Publicidade</strong>
                    </h6>
                  </div>
                </div>
                <!-- end about-details -->
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4" id="service4">
              <div class="about-move">
                <div class="services-details">
                  <div class="single-services">
                    <div class="services-icon">
                      <img src="/static/assets/img/redes.png" width="55" alt="vision-icon1">
                    </div>
                    <h6>
                      <strong>Redes Sociais</strong>
                    </h6>
                  </div>
                </div>
                <!-- end about-details -->
              </div>
            </div>
            <div class="col-sm-4">
              <div class="about-move">
                <div class="services-details">
                  <div class="single-services">
                    <div class="services-icon">
                      <img src="/static/assets/img/analytics.png" width="55" alt="vision-icon1">
                    </div>
                    <h6>
                      <strong>Analytics</strong>
                    </h6>
                  </div>
                </div>
                <!-- end about-details -->
              </div>
            </div>
            <div class="col-sm-4">
              <div class="about-move">
                <div class="services-details">
                  <div class="single-services">
                    <div class="services-icon">
                      <img src="/static/assets/img/copy.png" width="55" alt="vision-icon1">
                    </div>
                    <h6>
                      <strong>Copywriting</strong>
                    </h6>
                  </div>
                </div>
                <!-- end about-details -->
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-4">
              <div class="about-move">
                <div class="services-details">
                  <div class="single-services">
                    <div class="services-icon">
                      <img src="/static/assets/img/seo.png" width="55" alt="vision-icon1">
                    </div>
                    <h6>
                      <strong>SEO</strong>
                    </h6>
                  </div>
                </div>
                <!-- end about-details -->
              </div>
            </div>
            <div class="col-sm-4">
              <div class="about-move">
                <div class="services-details">
                  <div class="single-services">
                    <div class="services-icon">
                      <img src="/static/assets/img/chat.png" width="55" alt="vision-icon1">
                    </div>
                    <h6>
                      <strong>Chatbox</strong>
                    </h6>
                  </div>
                </div>
                <!-- end about-details -->
              </div>
            </div>
            <div class="col-sm-4">
              <div class="about-move">
                <div class="services-details">
                  <div class="single-services">
                    <div class="services-icon">
                      <img src="/static/assets/img/blog.png" width="55" alt="vision-icon1">
                    </div>
                    <h6>
                      <strong>Gestão do blog do site</strong>
                    </h6>
                  </div>
                </div>
                <!-- end about-details -->
              </div>
            </div>
          </div>
        </div>
        <br>
        <div class="container button-container">
          <button
            type="button"
            data-toggle="modal"
            data-target="#leave_contact"
            class="btn btn-secondary btn-lg"
          >Torne-se SmartClinic</button>
        </div>
      </div>
      <hr class="my-4">
      <div id="contact" class="contact-area" style="margin-top:5em">
        <div class="contact-inner area-padding">
          <div class="contact-overly"></div>
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="section-headline text-center">
                  <h1>Contactos</h1>
                  <br>
                  <br>
                </div>
              </div>
            </div>
            <div class="row">
              <!-- Start contact icon column -->
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="contact-icon text-center">
                  <div class="single-icon">
                    <i class="fa fa-mobile"></i>
                    <p>
                      <span>Telefone:(+351) 96 814 30 04</span>
                    </p>
                  </div>
                </div>
              </div>
              <!-- Start contact icon column -->
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="contact-icon text-center">
                  <div class="single-icon">
                    <i class="fa fa-envelope"></i>
                    <p>Email: geral@brightdigital.pt
                      <br>
                    </p>
                  </div>
                </div>
              </div>
              <!-- Start contact icon column -->
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="contact-icon text-center">
                  <div class="single-icon">
                    <i class="fa fa-map-marker"></i>
                    <p>Morada: Praça Coronel Pacheco nº60 1º andar
                      <br>
                      <span>4050-453 Porto</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="partners" class="container" style="margin-top: 5em">
        <div class="row">
          <div class="col-xs-6 col-sm-3 col-lg-6">
            <div class="section-headline" style="padding-top:22px;">
              <h3>
                <strong>Parcerias</strong>
              </h3>
              <br>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-lg-4">
                <div class="single-awesome-project">
                  <div class="awesome-img">
                    <img
                      src="/static/assets/img/logo-uporto.png"
                      style="width:110px"
                      alt="partner1"
                    >
                  </div>
                </div>
              </div>
              <!-- Start contact icon column -->
              <div class="col-xs-12 col-sm-6 col-lg-4">
                <div class="awesome-img">
                  <img
                    src="/static/assets/img/logo-utaustin.png"
                    style="width:110px"
                    alt="partner2"
                  >
                </div>
              </div>
              <!-- Start contact icon column -->
              <div class="col-xs-12 col-sm-6 col-lg-4">
                <div class="awesome-img">
                  <img src="/static/assets/img/logo-matter.png" style="width:110px" alt="partner3">
                </div>
              </div>
            </div>
          </div>

          <div class="col-xs-6 col-sm-6 col-lg-6">
            <div class="section-headline" style="padding-top:22px;">
              <h3>
                <strong>Prémios</strong>
              </h3>
              <br>
            </div>
            <div class="row">
              <div class="col-xs-4 col-sm-4 col-lg-4" style="border-left: 1px solid lightgrey">
                <div class="awesome-img">
                  <img src="/static/assets/img/award1.png" style="width:110px" alt="partner3">
                </div>
              </div>
              <div class="col-xs-4 col-sm-4 col-lg-4">
                <div class="awesome-img">
                  <img src="/static/assets/img/award2.png" style="width:110px" alt="partner3">
                </div>
              </div>
              <div class="col-xs-4 col-sm-4 col-lg-4">
                <div class="awesome-img">
                  <img src="/static/assets/img/award3.png" style="width:110px" alt="partner3">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <myFooter></myFooter>
  </div>

  <!-- Footer -->
</template>

<script>
import Navbar from './Navbar'
import myFooter from './Footer'
import ContactModal from './ContactModal'

export default {
  name: 'become',
  components: {
    Navbar,
    ContactModal,
    myFooter
  }

}
</script>

<style scoped>
#contact {
  background-color: #ffd43f;
  padding: 33px;
  font-weight: bold;
}

#about {
  padding: 33px;
  text-align: left;
  font-weight: bold;
}

#services {
  text-align: center;
}

#about .container-box {
  border: 2px solid #ffd43f;
  padding: 22px;
}
#about li {
  list-style-image: url("/static/assets/img/checked.png");
  padding: 5px;
}
#about {
  padding-top: 0px;
}

#about .row {
  text-align: justify;
  padding: 22px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
#seta {
  padding-top: 15px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 76px;
  height: 88px;
}

.button-container {
  text-align: center;
}

#about .btn-secondary,
#services .btn-secondary {
  background-color: #ffd43f;
  color: rgb(59, 59, 59);
  border-color: #ffd43f;
  font-weight: bold;
}
#about .btn-secondary:hover,
#services .btn-secondary:hover {
  background-color: #ffd43f;
  border-color: rgb(59, 59, 59);
}

#services .row {
  padding: 11px;
}
#services .services-icon {
  padding-bottom: 11px;
}

#banner1 {
  background-image: url("/static/assets/img/background.jpg ");
  background-repeat: repeat;
  padding: 0px;
}
#banner1 {
  background-color: white;
  color: white;
}

#banner1 .row {
  padding: 0px;
}
#banner1 p {
  padding: 5px;
}

#banner1 .row {
  padding: 25px;
}

.container-text {
  width: 70%;
  text-align: center;
}

#banner1 .row1 {
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  margin-right: 0em;
}
#col1 {
  padding-top: 190px;
  color: white;
  padding-right: 33px;
  background-color: rgba(0, 0, 0, 0.71);
  padding-right: 0px;
}

#banner_row1 {
  padding-left: 0px;
}
#col1:hover {
  background-color: rgba(0, 0, 0, 0.81);
}

#col2 .row {
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 50px;
  background-color: rgba(2, 102, 102, 0.55);
}
#col2 .row:hover {
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 50px;
  background-color: rgba(2, 102, 102, 0.77);
}

#col2 .row2 {
  padding-left: 0px;
  padding-right: 0px;
  background-color: rgba(203, 153, 4, 0.66);
  text-align: center;
}
#col2 .row2:hover {
  padding-left: 0px;
  padding-right: 0px;
  background-color: rgba(203, 153, 4, 0.88);
  text-align: center;
}

.btn_more {
  background-color: Transparent;
  background-repeat: no-repeat;
  border: 2px solid white; /* Green */
  cursor: pointer;
  overflow: hidden;
  outline: none;
  color: white;
}
.btn_more:hover {
  background-color: white;
  background-repeat: no-repeat;
  border: 2px solid white; /* Green */
  cursor: pointer;
  overflow: hidden;
  outline: none;
  color: black;
}
#modal-link:hover {
  color: black;
}

#services small {
  display: block;
}
</style>