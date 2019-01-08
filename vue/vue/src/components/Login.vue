<template>
  <div id="login">
          <Navbar></Navbar>


        <!-- Page's content -->
    <div id="wrapper" style="min-height: 100%">
      <div id="main" style="overflow: auto; padding-bottom: 60px">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h2 class="text-center">Bem-vindo de volta!</h2>
              <div class="panel panel-default">
                <div class="panel-body">
                  <img src="/static/assets/img/website.png" class="img-fluid"  width="180" alt="smartClinic">
                  <form v-on:submit.prevent="onSubmit">
                    <div class="form-group">
                      <label for="username">Username:</label>
                      <div class="input-group">
                        <div class="input-group-addon"><span class="glyphicon glyphicon-user"></span></div>
                        <input type="text" id="username" name="username" v-model="username" placeholder="Username" class="form-control" required>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="password">Password:</label>
                      <div class="input-group">
                        <div class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></div>
                        <input type="password" id="password" name="password" v-model="password" placeholder="Password" class="form-control" required>
                      </div>
                    </div>
                    <div class="form-group">
                      <input type="checkbox" id="remember" name="remember" v-model="remember">
                      <label for="remember">Remember Me</label>
                    </div>
                    <div class="text-center">
                      <input type="submit" name="login" value="Log In" class="btn btn-primary btn-block">
                    </div>
                  </form>
                </div>
                <div class="panel-footer">
                  <p class="text-center" style="padding-bottom:10px;">Ainda não tem conta? <router-link to="/">Clique aqui!</router-link></p>
                </div>
              </div>
              <div v-if="error" class="alert alert-danger alert-dismissible">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <span v-if="error === 'server'"><b>Error: </b>Something went wrong with the server. Please try again later!</span>
                <span v-else-if="error === 'credentials'"><b>Error: </b>The username and/or the password are wrong. Please try again!</span>
              </div>
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
  name: 'login',
  data () {
    return {
      error: '',
      username: '',
      password: '',
      remember: false
    }
  },
  methods: {
    onSubmit () {
      console.log(this.username)
      console.log(this.password)

      this.axios.post('http://localhost:5000/api/login', {
        username: this.username.trim(),
        password: this.password.trim()
      })
      .then((res) => {
        console.log('resposta: ' + JSON.stringify(res))
        if (res.data.status === 'Success') {
          console.log('login successful')
          console.log(res.data.message)
        }
        if (res.data.status === 'ERROR') {
          console.log('login unsuccessful')
          console.log(res.data.message)
        }
      })
      .catch((err) => {
        this.error = 'server'
        console.error(err)
      })
    }
  },
  components: {
    Navbar,
    myFooter
  }
}

</script>

<style scoped>

#login{
    background-color: lightgrey;
}

h2 { margin-top: 0; }

img {
  margin: auto;
  display: block;
  margin-bottom: 15px;
}

.alert.alert-danger {
  width: 350px;
  margin: 0 auto 20px auto;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.16), 0 1px 1px rgba(0, 0, 0, 0.23);
}

.panel.panel-default {
  width: 350px;
  margin: 0 auto 20px auto;
  background-color: #F8F7F7;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.16), 0 1px 1px rgba(0, 0, 0, 0.23);
}

.panel-body { padding: 20px; }

#login {
  width: 100%;
  height: 100%;
  padding-top: 80px;
}

</style>
