<template>
  <div>    
    <!-- Modal Component -->
    <b-modal id="modalPrevent"
             ref="modal"
             title="Submit your name"
             @ok="handleOk"
             @shown="clearName">
      
      
  <!--  contacts modal   -->
  
          <form >
            <label for="Clinicname">Nome da Clinica</label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-building"></i>
                </span>
              </div>
              <input id="Clinicname" type="text" name="Clinicname" class="form-control" placeholder="Nome da Clinica" required autofocus>
            </div>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <span class="input-group-text" >
                  <i class="fas fa-user fa-fw"></i>
                </span>
              </div>
              <input id="Respname" type="text" name="Respname" class="form-control" placeholder="Nome do responsável" required >
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
                <span class="input-group-text" >
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
              <input id="email" type="text" name="email" class="form-control" placeholder="email" required>
            </div>
            <hr>
            <button type="submit" class="btn btn-block btn-success mb-2">Enviar</button>
          </form>
       

    </b-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      names: []
    }
  },
  methods: {
    clearName () {
      this.name = ''
    },
    handleOk (evt) {
      // Prevent modal from closing
      evt.preventDefault()
      if (!this.name) {
        alert('Please enter your name')
      } else {
        this.handleSubmit()
      }
    },
    handleSubmit () {
      this.names.push(this.name)
      this.clearName()
      this.$refs.modal.hide()
    }
  }
}
</script>