<!--  contacts modal   -->
<div class="modal fade" id="leave_contact">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Deixe-nos o seu contacto:</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body ">
          <p>Se está interessado e pretende aderir deixe-nos os seus dados e nós contactomo-lo:</p>
          <form >
            <label for="Clinicname">Dados Pessoais:</label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-building"></i>
                </span>
              </div>
              <input id="Clinicname" type="text" name="Clinicname" class="form-control" placeholder="Nome da Clínica" required autofocus>
            </div>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <span class="input-group-text" >
                  <i class="fas fa-user fa-fw"></i>
                </span>
              </div>
              <input id="Respname" type="text" name="Respname" class="form-control" placeholder="Nome do responsável" required >
            </div>
            <label for="number">Contactos:</label>
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
                <span class="input-group-text" >
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
              <input id="email" type="text" name="email" class="form-control" placeholder="Email" required>
            </div>
            <hr>
            <button type="submit" class="btn btn-block btn-success mb-2">Enviar</button>
          </form>
        </div>
      </div>
    </div>
    </div>