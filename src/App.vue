

<template>
  <Navbar></Navbar>
  <div style="margin: 0px 100px">
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
  li .router-link-active {
    color: green;
    padding-bottom: 8px;
    border-bottom: 3px solid green;
  }
</style>