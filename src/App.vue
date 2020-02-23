<template>
  <div id="app">
    <Header/>
    <router-view />
    <Footer/>
  </div>
</template>
<script>
  import Header from './components/Header/main'
  import Footer from './components/Footer/footer'
  export default {
    components: {
      Header,
      Footer
      
    }
  }
</script>
<style>
</style>