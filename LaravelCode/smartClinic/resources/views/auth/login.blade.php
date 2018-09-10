@extends('layouts.app')

@section('navbar')
@include('partials.navbarNotLoggedIn')
@endsection



@section('content')


<div class="container">
    <div class="jumbotron " id="jumbotron_login" style="margin-top:3em">
      <h3 class="text-center"><strong>Login</strong></h3>
      <p>Se a sua clínica dentária já pertence à nossa rede:</p>
      <hr>
      <form >
        <label for="username">Username</label>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-user fa-fw"></i>
            </span>
          </div>
          <input id="username" type="text" name="username" class="form-control" placeholder="Username" required autofocus>
        </div>
        <label for="password">Password</label>
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fas fa-lock fa-fw"></i>
            </span>
          </div>
          <input id="password" type="password" name="password" class="form-control" placeholder="Password" required>
  
        </div>

        <hr>
  
        <button type="submit" class="btn btn-block btn-success mb-2">Login</button>
    </form>
  
    </div>
  
    </div>




@endsection

@section('footer')
@include('partials.footerNotLogged')
@endsection