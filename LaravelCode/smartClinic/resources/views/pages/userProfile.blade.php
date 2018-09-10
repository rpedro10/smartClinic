@extends('layouts.app')

@section('navbar')
@include('partials.navbarNotLoggedIn')
@endsection



@section('content')

<div class="container" id="clinicInfo" style="margin-top:2em;">
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
            <img class="img-fluid" src="./img/logo-clinica.png" alt="clinic-logo">
          </div>
          <br>
          <div class="container container-gallery">
            <div id="clinicGallery" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#clinicGallery" data-slide-to="0" class="active"></li>
                <li data-target="#clinicGallery" data-slide-to="1"></li>
                <li data-target="#clinicGallery" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="./img/cl1.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="./img/cl2.jpg" alt="Second slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="./img/cl3.jpg " alt="Third slide">
                </div>
              </div>
              <a class="carousel-control-prev" href="#clinicGallery" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#clinicGallery" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
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
            <div class="col-lg-3 col-yellow">
              <div class="container container-yellow text-right">
                <span> Email </span>
                <i class="fa fa-envelope"></i>

              </div>

            </div>
            <div class="col-lg-9 col-yellow">
              <div class="container container-yellow">
                <span>r2321@example.pt.com</span>

              </div>

            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-yellow">
              <div class="container container-yellow text-right">
                <span>Contactos</span>
                <i class="fa fa-phone"></i>

              </div>

            </div>
            <div class="col-lg-9 col-yellow">
              <div class="container container-yellow">
                <span>212212112 / 93121122</span>

              </div>

            </div>
          </div>
          <div class="row row-yellow">
            <div class="col-lg-3 col-xs-6 col-yellow text-right">
              <div class="container container-yellow">
                <span>Localização</span>
                <i class="fa fa-map-marker"></i>

              </div>

            </div>
            <div class="col-lg-9  col-xs-6  col-yellow">
              <div class="container container-yellow">
                <span>Rua Ferreira Borges, 173C 1350-130 Lisboa</span>

              </div>

            </div>
          </div>
          <div class="row ">
            <div class="col-lg-3 col-yellow ">
              <div class="container container-yellow text-right">
                <span>Website </span>
                <i class="fab fa-chrome"></i>
              </div>
            </div>
            <div class="col-lg-9 col-yellow">
              <div class="container container-yellow">
                <a class="link" href="http://www.clinicaferreiraborges.pt/" target="_blank">
                  Clinica ferreira Borges
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-black">
              <div class="container container-black text-right">
                <span>Horário
                  <i class="fa fa-clock"></i>
                </span>

              </div>

            </div>
            <div class="col-lg-9 col-black">
              <div class="container container-black">
                <span>2ª feira a 6ª feira: 10h às 20h
                  <br> Sábado: 10h às 14h
                  <br> Domingo: Encerrado</span>
              </div>

            </div>
          </div>
          <div class="row row-white">
            <div class="container container-links">
              <ul class="nav ">
                <li class="nav-social-media">
                  <a class="link " href="https://instagram.com" target="_blank">
                    <i class="fab fa-instagram fa-lg mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                </li>
                <li class="nav-social-media">
                  <a class="link" href="https://facebook.pt" target="_blank">
                    <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                </li>
                <li class="nav-social-media">
                  <a class="link" href="https://google.pt" target="_blank">
                    <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
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

  <br>

  <hr class="my-4">

  <br>
  <div class="container" id="packs">
    <div class="row row-header">
      <h1 class="title1">Os nossos</h1>
      <h1 class="title2"> Pacotes </h1>

    </div>
    <div class="row">
      <div class="container text-center">
        <br>
        <br>
        <p>Temos à sua disposição vários pacotes de serviços de comunicação e marketing digital. Escolha
            aquele que mais se adequa às suas necessidades. Pode sempre fazer upgrade, em qualquer altura.
        </p>
        <br>
        <br>

      </div>

    </div>
    <div class="card-deck mb-3 text-center">
      <div class="card mb-4 shadow-sm" style="border:1px solid #ffd43f">
        <div class="card-header" style="border-bottom:1px solid #ffd43f">
          <h4 class="my-0 font-weight-normal">Pack1</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">250€
            <small class="text-muted">/ mês</small>
          </h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Identidade Digital</li>
            <li>Copyright</li>
            <li>Gestão das Redes Sociais</li>
            <li>Analytics</li>
          </ul>
          <br>
          <br>
          <button type="button" class="btn btn-lg btn-block btn-outline-secondary">Plano Atual</button>
        </div>
      </div>
      <div class="card mb-4 shadow-sm">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Pack2</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">475€
            <small class="text-muted">/ mês</small>
          </h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Gestão de Blog do Site (2 artigos/sem)</li>
            <li>Chatbox - Assistente Virtual </li>
            <li>Criação de Vídeos para Campanhas (1 por mês)</li>
          </ul>
          <br>
          <br>
          <button type="button" class="btn btn-lg btn-block btn-secondary">Quero Pack2</button>
        </div>
      </div>
      <div class="card mb-4 shadow-sm">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Pack3</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">600€
            <small class="text-muted">/ mês</small>
          </h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Campanhas – Facebook & Instagram
            </li>
            <li>SEO / SEM</li>
            <li>Google Ads</li>
            <li>E-mail / SMS Marketing</li>
            <li>Publicação de conteúdos & Social Media Engagement
            </li>
          </ul>
          <button type="button" class="btn btn-lg btn-block btn-secondary">Quero Pack3</button>
        </div>
      </div>
    </div>
  </div>




@endsection

@section('footer')
@include('partials.footerNotLogged')
@endsection


