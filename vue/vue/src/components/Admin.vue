<template>
  <div id="login">
    <Navbar></Navbar>
    

    <div class="container" style="background-color:rgb(59,59,59);margin-top:1em;">
        <br>
        <h1 class="display-4 text-white">Administração</h1>
        <hr>
        <ul class="nav nav-tabs nav-justified" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#events">
                    <h4>Notificações</h4>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#users">
                    <h4>Utilizadores</h4>
                </a>
            </li>
        </ul>

        <div class="tab-content">
            <div id="events" class="container tab-pane fade show active">
                <br>
                <br>
                <table class="table table-hover">
                    <thead>
                        <tr class="d-flex">
                            <th class="col-5 text-white">Pedido</th>
                            <th class="col-6 text-white">Utilizador</th>
                            <th class="col-1 text-white">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="d-flex">
                            <td class="col-5 text-white">
                                <details>
                                    <summary>Post</summary>
                                    <p> Data: 12/12/2012.</p>
                                    <p>Descrição: All content and graphics on this web site are the property of the
                                        company
                                        Refsnes Data.</p>
                                </details>
                            </td>
                            <td class="col-6">
                                <a href="./tiagoc.html" class="text-white">FerrBorges</a>
                            </td>
                            <td class="col-1">
                                <button type="button" class="btn btn-danger btn-sm" data-toggle="tooltip"
                                    data-placement="left" title="Delete Event">
                                    <i class="fas fa-trash-alt fa-fw"></i>
                                </button>
                            </td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-5 text-white">
                                <details>
                                    <summary>Campanha</summary>
                                    <p> 12/12/2012 --- 17/12/2013</p>
                                    <p>Desconto:122$</p>
                                    <p> Custo Estiamdo: 20$</p>
                                    <p>Descrição: All content and graphics on this web site are the property of the
                                        company
                                        Refsnes Data.</p>
                                </details>
                            </td>
                            <td class="col-6">
                                <a href="#" class="text-white">FerrBorges</a>
                            </td>
                            <td class="col-1">
                                <button type="button" class="btn btn-danger btn-sm" data-toggle="tooltip"
                                    data-placement="left" title="Delete Event">
                                    <i class="fas fa-trash-alt fa-fw"></i>
                                </button>
                            </td>
                        </tr>
                        <tr class="d-flex">
                            <td class="col-5 text-white">
                                <details>
                                    <summary>Vídeo</summary>
                                    <p> 17/12/2013</p>
                                    <p>Tema: Aniversário da Ema</p>
                                    <p>Descrição: All content and graphics on this web site are the property of the
                                        company
                                        Refsnes Data.</p>
                                </details>
                            </td>
                            <td class="col-6">
                                <a href="#" class="text-white">FerrBorges</a>
                            </td>
                            <td class="col-1">
                                <button type="button" class="btn btn-danger btn-sm" data-toggle="tooltip"
                                    data-placement="left" title="Delete Event">
                                    <i class="fas fa-trash-alt fa-fw"></i>
                                </button>
                            </td>
                        </tr>
                        <tr class="d-flex">
                            <td class="col-5 text-white">
                                    <details>
                                            <summary>Mudança de Pacote</summary>
                                            <p> Atualmente tem o pacote X, pretende mudar para o pacote Y</p>
                                          
                                        </details>
                                      </td>
                            <td class="col-6">
                                <a href="#" class="text-white">FerrBorges</a>
                            </td>
                            <td class="col-1">
                                <button type="button" class="btn btn-danger btn-sm" data-toggle="tooltip"
                                    data-placement="left" title="Delete Event">
                                    <i class="fas fa-trash-alt fa-fw"></i>
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div id="users" class="container tab-pane fade">
                <div class="row mt-3">
                    <div class="col-12 col-sm-6 offset-sm-3 col-lg-4 offset-lg-4">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Search Users">
                            <span class="input-group-append">
                                <button type="button" class="btn btn-secondary">
                                    <i class="fas fa-search fa-fw"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <table class="table table-hover">
                    <thead>
                        <tr class="d-flex">
                            <th class="col-5 text-white">Username</th>
                            <th class="col-6 text-white">Localização</th>
                            <th class="col-1 text-white">Ban</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="d-flex">
                            <td class="col-5"><a href="./tiagoc.html" class="text-white">FerrBorges</a></td>
                            <td class="col-6 text-white">Lisboa</td>
                            <td class="col-1">
                                <button type="button" class="btn btn-danger btn-sm" data-toggle="tooltip"
                                    data-placement="left" title="Ban User">
                                    <i class="fas fa-ban fa-fw"></i>
                                </button>
                            </td>
                        </tr>
                        <tr class="d-flex">
                            <td class="col-5"><a href="./tiagoc.html" class="text-white">CliX</a></td>
                            <td class="col-6 text-white">Porto</td>
                            <td class="col-1">
                                <button type="button" class="btn btn-danger btn-sm" data-toggle="tooltip"
                                    data-placement="left" title="Ban User">
                                    <i class="fas fa-ban fa-fw"></i>
                                </button>
                            </td>
                        </tr>
                        <tr class="d-flex">
                            <td class="col-5"><a href="./tiagoc.html" class="text-white">CliESTE</a></td>
                            <td class="col-6 text-white">Braga</td>
                            <td class="col-1">
                                <button type="button" class="btn btn-danger btn-sm" data-toggle="tooltip"
                                    data-placement="left" title="Ban User">
                                    <i class="fas fa-ban fa-fw"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
  },
  components: {
    Navbar,
    myFooter
  }
}

</script>

<style scoped>

</style>
