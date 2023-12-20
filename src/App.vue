

<template>
  <Navbar></Navbar>
  <div style="margin: 0px 100px 100px 100px" class="h-full">
    <RouterView></RouterView> 
  </div>
  
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

<style>
  .router-link-active {
    color: green;
    border-bottom: 3px solid green !important;
    border-radius: 0% !important;
  }
</style>