<template>
  <div class="layout">
    <Popup />
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Popup from '~/components/Popup.vue'

export default {
  components: {
    Header,
    Footer,
    Popup
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600&display=swap');

html, body {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: 'Jost';
  color: $dark-blue;
  background: $white;
}
</style>
