<template>
  <div class="layout">
    <Popup />
    <Header />
    <transition name="fade" appear>
      <transition name="fade" appear>
        <div class="slot-wrapper">
          <slot />
        </div>
      </transition>
    </transition>
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

.fade-enter-active:nth-of-type(2) {
  transition: all 300ms;
}

.fade-enter:nth-of-type(2) {
  transform: scale(.975) translateY(.25rem);
  opacity: 0;
}
</style>
