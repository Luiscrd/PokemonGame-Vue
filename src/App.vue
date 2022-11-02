<template>
  <Header />
  <PokemonPage />
  <Footer />
</template>

<script>
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'
import PokemonPage from './pages/PokemonPage.vue'

export default {
  name: 'App',
  components: {
    Header,
    PokemonPage,
    Footer
  }
}
</script>

<style>
html, body{
  margin: 0;
  padding: 0;
}

body{
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app{
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
