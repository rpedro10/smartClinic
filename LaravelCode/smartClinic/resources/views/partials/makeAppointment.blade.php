<div class="modal fade" id="add_appointment">
    <div class="modal-dialog modal-dialog-centered modal-md">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Marcação de Consulta</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body ">
          <form>
            <label for="name">Nome</label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-user fa-fw"></i>
                </span>
              </div>
              <input id="name" type="text" name="name" class="form-control" placeholder="Nome do utente" required autofocus>
            </div>
            <label for="number">Contactos</label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-phone"></i>
                </span>
              </div>
              <input id="number" type="text" name="number" class="form-control" placeholder="Número de telefone" required>

            </div>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
              <input id="email" type="text" name="email" class="form-control" placeholder="email" required>
            </div>
            <label for="date">Data</label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-calendar-alt fa-fw"></i>
                </span>
              </div>
              <input type="datetime-local" id="date" class="form-control">
            </div>
            <label for="form-select-clinic-modal">Escolha a Clínica</label>
            <select id="form-select-clinic-modal" class="form-control">
              <option selected>Clinica Ferreira Borges</option>
              <option>Clinica X</option>
              <option>Cllinica Y</option>
              <option>...</option>
            </select>
            <hr>
            <button type="submit" class="btn btn-block btn-success mb-2">Marcar Consulta</button>
          </form>

        </div>
      </div>
    </div>
  </div>