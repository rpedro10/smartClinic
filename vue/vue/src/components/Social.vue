<template>
  <div id="social">
          <Navbar></Navbar>


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
