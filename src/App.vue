

<template>
  <Navbar></Navbar>
  <RouterView></RouterView>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  export default {
      name: "Home", 
      components: {
          Navbar
      },
      data () {
          return {
            
          }
      }, 
      methods: { 
         
      },
      mounted () {
          
      }
  }
</script>