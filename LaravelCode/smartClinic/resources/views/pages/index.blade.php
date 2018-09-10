
@extends('layouts.app')

@section('navbar')
@include('partials.navbarNotLoggedIn')

@endsection


@section('content')
@include('partials.makeAppointment')

  
  <!-- Page Content -->
  <div class="main">
    <!--container retirado-->
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner w-100  ">
        <div class="carousel-item active">
          <img class="d-block w-100" src="./img/slide1.png " alt="First slide">
          <div class="carousel-caption" id="caption1">
            <h2> A sua marca de referência em saúde oral
            </h2>
            <br>
            <p>
              Encontre as clínicas que lhe prestam os melhores cuidados dentários. Faça já a sua pesquisa e descubra uma SMART CLINIC perto
              de si.
            </p>
          </div>
        </div>
        <div class="carousel-item ">
          <img class="d-block w-100" src="./img/slide0.png " alt="First slide">
          <div class="carousel-caption" id="caption2">
            <h2> Todas as especialidades num só portal
            </h2>
            <br>

            <p>
              Porque a relação com o seu médico é uma prioridade para nós, agregámos todas as especialidades dentárias numa única plataforma.
              Os melhores médicos só trabalham para si.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="./img/slide3.png" alt="Second slide">
          <div class="carousel-caption" id="caption3">
            <h2> Acordos e Convenções à medida <br>do seu plano de saúde
            </h2>
            <br>
            <p>Pesquise pela clínica dentária que é abrangida pelo seu seguro de saúde.
            </p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>

  <div class="container" id="vision_container" style="margin-top:4em">
    <div class="row row-header">
      <h1 class="title1">A nossa</h1>
      <h1 class="title2"> Visão </h1>      
      
    </div>
    <br>    
    <br>
    <div class="row">
      <div class="container">
        <h5 class="text-center">Criámos, para si, uma marca de referência na área da saúde oral. </h5>
      </div>

    </div>
    <br>
    <br>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-lg-4">
        <div class="vision-icon">
          <img src="./img/icon1.png" width="55" alt="vision-icon1">
          <br>
          <br>
          <div class="text">
            <h6> Estabelecemos critérios de qualidade de excelência no atendimento, acessibilidade e satisfação nos serviços oferecidos
            </h6>
          </div>
        </div>

      </div>
      <div class="col-xs-12 col-sm-12 col-lg-4">
        <div class="vision-icon">
          <div class="vision-icon">
            <img src="./img/icon2.png  " width="55" alt="vision-icon2">
          </div>
          <br>

          <div class="text">
            <h6> Fomos ao encontro das clínicas familiares que cumprem estes requisitos </h6>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-lg-4">
        <div class="vision-icon">
          <div class="vision-icon">
            <img src="./img/icon3.png  " width="55" alt="vision-icon3">
          </div>
          <br>
          <div class="text">
            <h6>Convidamo-las a fazer parte de uma rede de referência para a sua comodidade.
            </h6>
          </div>

        </div>
      </div>
    </div>
  </div>

  <br>

  <hr class="my-4">


  <br>

  <div class="container container-fluid" id="info_map_container">
    <div class="row row-header">
      <h1 class="title1">A rede</h1>
      <h1 class="title2"> SmartClinic </h1>
    </div>
    <br>
    <br>
    <div class="row">
      <div class="col-xs-12 col-md-12 col-lg-4" id="col-clinicList">
        <br>
        <div class="container">
          <h5 class="text-left">Encontre a SmartClinic mais perto de si: </h5>
          <br>
          <form id="form-select-clinic">
            <label> Lista das Clínicas:</label>
            <select id="select-clinic" class="form-control">
              <option value="0">escolha a clinica</option>
              <option value="1">Clinica X</option>
              <option value="2">Clinica Ferreira Borges</option>
            </select>
          </form>
          <br>
          <a class="btn btn-primary btn-block" id="btn_find" onclick="getLocation()" role="button">Descubra a Clinica mais perto de si!
            <i class="fas fa-map-marker-alt fa-fw"></i>
          </a>
        </div>
        <br>
        <br>
        <div class="container">
          <div class="row">
            <div class="col-6">
              <a class="btn btn-primary btn-block btn-md" href="tel:+351912511239"  id="call" role="button">
                <i class="fa fa-phone fa-3x"></i>
                <br>
                <strong>Linha Smart</strong>
              </a>
            </div>
            <div class="col-6">
              <a class="btn btn-secondary btn-block btn-md"  data-toggle="modal" data-target="#add_appointment" id="appointment"
                role="button">
                <i class="fas fa-calendar-alt fa-3x"></i>
                <br>
                <strong>Marcação Online</strong>
              </a>
            </div>
          </div>
        </div>
        <br>
      </div>
      <div class="col-xs-12 col-md-12 col-lg-8" style="padding-left:0px">
        <div class="container container-fluid" id="googleMap" style="height:400px;">
          <!-- map goes here-->
        </div>
      </div>
    </div>
  </div>

  <hr class="my-4">

  <div class="container container-fluid" id="testimonies_container" style="margin-top:4em">
    <div class="container">
      <div class="row row-header">
        <h1 class="title1">Os nossos</h1>
        <h1 class="title2"> Utentes </h1>
      </div>
      <br>
    </div>
    <div id="carousel2" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li class="carousel-indicator" data-target="#carousel2" data-slide-to="0"></li>
        <li class="carousel-indicator" data-target="#carousel2" data-slide-to="1"></li>
        <li class="carousel-indicator" data-target="#carousel2" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" style="background-color: #e9ecef">
        <div class="carousel-item active">
          <!--<div class="jumbotron">-->
          <div class="container">
            <div class="row">
              <div class="col-xs-3 col-sm-5 col-lg-5 text-center" style="padding-bottom:55px">
                <img class="img-fluid" src="./img/test1.png " style="width: 300px;" alt="test1">
              </div>
              <div class="col-xs-9 col-sm-7 col-lg-7" style="padding-right:100px">
                <h4 style=" line-height:150%;">
                  <br>
                  <br>
                  <i class="fas fa-quote-left"></i> Prefiro os pequenos consultórios clínicos à confusão de grandes centros, e a Smart Clinic permitiu-me
                  conhecer os melhores serviços a este nível.
                  <i class="fas fa-quote-right"></i>
                </h4>
                <small>João Semedo</small>
              </div>
            </div>
          </div>
          <!-- </div>-->
        </div>
        <div class="carousel-item " style="padding-bottom:55px">

          <div class="container">
            <div class="row">
              <div class="col-xs-3 col-sm-5 col-lg-5 text-center">
                <img class="img-fluid" src="./img/test3.png " style="width: 300px;" alt="test1">
              </div>
              <div class="col-xs-9 col-sm-7 col-lg-7" style="padding-right:100px">
                <h4 style=" line-height:150%;">
                  <br>
                  <br>
                  <i class="fas fa-quote-left"></i> Desde pequena que sou atendida pelo mesmo dentista. Com a mudança para outra cidade, procurei o mesmo
                  tipo de atendimento e a Smart Clinic foi essencial nesta escolha.
                  <i class="fas fa-quote-right"></i>
                </h4>
                <small>Marta Pereira
                </small>
              </div>
            </div>
          </div>

        </div>
        <div class="carousel-item" style="padding-bottom:55px">
          <div class="container">
            <div class="row">
              <div class="col-xs-3 col-sm-5 col-lg-5 text-center">
                <img class="img-fluid" src="./img/test2.png " style="width: 300px;" alt="test1">
              </div>
              <div class="col-xs-9 col-sm-7 col-lg-7" style="padding-right:100px">
                <h4 style=" line-height:150%;">
                  <br>
                  <br>
                  <i class="fas fa-quote-left"></i> Utilizei a rede Smart Clinic para procurar o dentista mais indicado e de confiança para acompanhar
                  os meus filhos. Eu e os miúdos estamos muito satisfeitos.
                  <i class="fas fa-quote-right"></i>
                </h4>
                <small>Júlia Nunes</small>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- SETAS 
            <a class="carousel-control-prev" href="#carousel2" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel2" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>-->
    </div>
  </div>
  

@endsection

@section('footer')
@include('partials.footerNotLogged')
@endsection
