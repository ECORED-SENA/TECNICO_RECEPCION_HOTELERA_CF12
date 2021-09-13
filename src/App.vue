<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>

<style lang="sass">

.app

.contenedor-principal
  display: flex
  align-items: flex-start

.seccion-principal
  width: 100%

  &--barra-avance-open
    .curso-main-container
      padding-bottom: 80px !important
body
  padding-right: 0px !important
.modal
  z-index: 9999999 !important
.modal-backdrop
  z-index: 999999 !important
.boton span, .boton--sm span, .boton i, .boton--sm i
    color: #ffffff !important
.banner-principal__img
  padding: 0 !important
.titulo-principal__numero .h1
  color: white !important
  text-align: center
  padding-top: 4px
.banner-principal__descripcion p
  color: inherit !important
.banner-principal__componente h1
  color: inherit !important
.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
  padding: 0 !important
.banner-principal__info
    flex: 1
.banner-principal__img
    flex: 1
.banner-principal__img img
    filter: drop-shadow(8px 1px 1px rgba(0,0,0,.19))
.curso-main-container > .container
    overflow-x: clip !important
</style>
