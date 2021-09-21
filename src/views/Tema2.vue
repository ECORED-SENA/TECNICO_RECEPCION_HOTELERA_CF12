<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Procedimiento técnico

    p(data-aos="fade-up") La salida de los huéspedes del hotel puede ser un momento de la verdad. En algunas oportunidades se experimentan largas filas, y en general se podría catalogar este instante como una prueba de la paciencia tanto del huésped como del cajero. Al ocupar esta posición siempre hay que tratar de ponerse en el lugar del huésped, pues este enfoque servirá a lo largo de la carrera en la industria hotelera y permitirá dar un mejor servicio.

    p.mt-4(data-aos="fade-up") Este apartado le ayuda a desarrollar un entendimiento del procedimiento de pago de los huéspedes, y aunque este no es un proceso difícil de entender y aplicar, sí requiere planificación para organizar los detalles de esta parte de la estancia del huésped.

    p.mt-4(data-aos="fade-up") #[strong A continuación, se verán los pasos básicos para realizar la salida del huésped de una forma técnica y lograr dominar la rutina básica del proceso.]

    .row.mt-5
      .col-md-4.mb-3
        .tarjeta-avatar.tarjeta__tema2
          img.image_floating(src='@/assets/curso/tema2/1.svg' alt='' style="z-index:1;")
          .tarjeta.caja_flotante_azul(style="background-color:#C7D1FF;border-radius:0px;" data-aos="zoom-in")
            .text-white.p-5
              h3.mt-4(data-aos="fade-up") El cliente solicita el registro de salida
              p(data-aos="fade-up") Una vez el huésped anuncia su retirada, se da inicio al procedimiento de pago, pregunte sobre la estancia del huésped. Mantenga un buen contacto visual y escuche atentamente.
      .col-md-4.mb-3
        .tarjeta-avatar.tarjeta__tema2
          img.image_floating(src='@/assets/curso/tema2/2.svg' alt='' style="z-index:1;")
          .tarjeta.caja_flotante_rosada(style="background-color:#FFF1DB;border-radius:0px;" data-aos="zoom-in")
            .text-white.p-5
              h3.mt-4(data-aos="fade-up") Recuperar las llaves
              p(data-aos="fade-up") De una forma cortés se deben solicitar la llave y ubicarla en el respectivo Rack. Si la solicitud se recibe telefónicamente se debe ofrecer ayuda para bajar el equipaje y en caso de respuesta positiva, informar al botones.
      .col-md-4.mb-3
        .tarjeta-avatar.tarjeta__tema2
          img.image_floating(src='@/assets/curso/tema2/3.svg' alt='' style="z-index:1;")
          .tarjeta.caja_flotante_azul(style="background-color:#C7D1FF;border-radius:0px;" data-aos="zoom-in")
            .text-white.p-5
              h3.mt-4(data-aos="fade-up") Revisión habitación
              p(data-aos="fade-up") En paralelo con el proceso anterior, el departamento de habitaciones debe realizar la inspección física del estado en que se deja la unidad habitacional, su equipamiento y dotación. De igual manera, verifica que el huésped no haya olvidado nada en su habitación.

    .row.mt-4
      .col-md-4.mb-3
        .tarjeta-avatar.tarjeta__tema2
          img.image_floating(src='@/assets/curso/tema2/4.svg' alt='' style="z-index:1;")
          .tarjeta.caja_flotante_rosada(style="background-color:#FFF1DB;border-radius:0px;" data-aos="zoom-in")
            .text-white.p-5
              h3.mt-4(data-aos="fade-up") Anunciar #[em(style="color:#12263F !important") Check out] a las áreas
              p(data-aos="fade-up") Avisar a las demás áreas del hotel que la habitación va saliendo, para que los centros de facturación cierren las cuentas que tengan abiertas y el departamento encargado verifique los últimos consumos de minibar.
      .col-md-4.mb-3
        .tarjeta-avatar.tarjeta__tema2
          img.image_floating(src='@/assets/curso/tema2/5.svg' alt='' style="z-index:1;")
          .tarjeta.caja_flotante_azul(style="background-color:#C7D1FF;border-radius:0px;" data-aos="zoom-in")
            .text-white.p-5
              h3.mt-4(data-aos="fade-up") Organizar la cuenta y últimos cargos
              p(data-aos="fade-up") Una vez recibidos los reportes de las diferentes áreas, se procede a realizar los cargos a que haya lugar, confirmando esto con el huésped. En caso de requerirse más de una factura, se realiza y/o verifica la distribución de cargos por cuenta.
      .col-md-4.mb-3
        .tarjeta-avatar.tarjeta__tema2
          img.image_floating(src='@/assets/curso/tema2/6.svg' alt='' style="z-index:1;")
          .tarjeta.caja_flotante_rosada(style="background-color:#FFF1DB;border-radius:0px;" data-aos="zoom-in")
            .text-white.p-5
              h3.mt-4(data-aos="fade-up") Pre-cuenta
              p(data-aos="fade-up") Ya verificados los folios y los cargos, se muestra al huésped esta información para que él la valide. Es importante que en los casos de CxC o cuenta compañía que se encuentran respaldados por un #[em(style="color:#12263F !important") Bill to], la cuenta que va para la empresa quede firmada. 

    .col-md-4.m-auto.mt-4
        .tarjeta-avatar.tarjeta__tema2
          img.image_floating(src='@/assets/curso/tema2/7.svg' alt='' style="z-index:1;")
          .tarjeta.caja_flotante_rosada(style="background-color:#FFF1DB;border-radius:0px;" data-aos="zoom-in")
            .text-white.p-5
              h3.mt-4(data-aos="fade-up") Cierre de la cuenta
              p(data-aos="fade-up") Con todo revisado y aprobado, el cajero procede a corroborar la forma de pago, realizando el respectivo proceso de cobro e ingresándolo al sistema para la emisión de la respectiva factura.

    br
    .tarjeta.text-white.p-3.mt-5.col-md-10.m-auto(data-aos="zoom-in" style="background: linear-gradient(#ff9800, rgb(255 221 172))")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2.text-center
          img.image_floating(src="@/assets/curso/tema2/8.svg" style="max-width:100px;display:inline;")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mt-3.text-white(data-aos="fade-up" style="color: #12263F !important;") Ejemplo de procedimiento técnico en PMS.
              p.mt-3(style="color: #12263F !important;") En la mayoría de los sistemas PMS, este proceso es bastante intuitivo, lo que ayudará a minimizar los tiempos en el proceso. A continuación, se puede ver un video con el proceso de #[em(style="color: #12263F !important;") Check out] en un sistema de gestión de propiedad:
            .col-sm-auto
              a.boton.boton--b.color-acento-botones(href="https://www.youtube.com/watch?v=QTEzACI8q1g" target="_blank")
                span Ir a la web
                i.fas.fa-globe


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {},
}
</script>
<style lang="sass">
.image_floating
  filter: drop-shadow(10px 5px 4px rgba(0,0,0,.1))
@keyframes float
  0%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
  50%
    filter: drop-shadow(26px 9px 1px rgba(0, 0, 0, 0.09))
    transform: translatey(-20px)
  100%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
.imagen_flotante_animada
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
  transform: translatey(0px)
  animation: float 6s ease-in-out infinite
.caja_flotante
  -webkit-box-shadow: -11px 10px 0px -1px #f3f3f3
  -moz-box-shadow: -11px 10px 0px -1px #f3f3f3
  box-shadow: -11px 10px 0px -1px #f3f3f3
.caja_escalada_hover
  transition: transform 0.5s linear
  -o-transition: transform 0.5s linear
  -ms-transition: transform 0.5s linear
  -moz-transition: transform 0.5s linear
  -webkit-transition: transform 0.5s linear
.caja_escalada_hover:hover
  transition: transform .5s ease
  transform: scale(1.06)
.fade-in-image
  animation: fadeIn 3s
  -webkit-animation: fadeIn 3s
  -moz-animation: fadeIn 3s
  -o-animation: fadeIn 3s
  -ms-animation: fadeIn 3s
@keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1
.tarjeta--azul
  background-color: #DBFBFF !important
.tarjeta-avatar-b > img
  min-width: 16%
  max-width: 16%
  top: -9%
.caja_flotante_azul
  box-shadow: -11px 10px 0px -1px #f1fcfd
.caja_flotante_rosada
  box-shadow: -11px 10px 0px -1px #fff6f6
.cajon.color-acento-botones
  background-color: #FFE7C4
.bloque-texto-a.color-secundario
  background-color: #F3F9FF !important
.title__tab_1 .pre
  background-color: #FFCA28
  padding: 1rem 1.5rem 1rem 1.5rem
  border-radius: 50%
  color: inherit
  font-weight: bold
  font-size: 1.3rem
  position: relative
  left: calc(100% - 147%)
  top: 2.3rem
.title__tab_1 .title
 background-color: #4DD0E1
 padding: 1rem 1rem 1rem 2rem
 border-radius: 30px
.title__tab_1
  transition: transform 0.4s linear
  -o-transition: transform 0.4s linear
  -ms-transition: transform 0.4s linear
  -moz-transition: transform 0.4s linear
  -webkit-transition: transform 0.4s linear
.title__tab_1:hover
  transition: transform .4s ease
  transform: scale(1.1)
.nav-link
  border: none !important
.nav-link.active .title__tab_1 .pre

.nav-link.active .title__tab_1 .title
  color: white
  background-color: #1565C0
.caja__mostrar
  transition: transform .5s linear
  -o-transition: transform .5s linear
  -ms-transition: transform .5s linear
  -moz-transition: transform .5s linear
  -webkit-transition: transform .5s linear
.caja__mostrar:hover
  transition: transform .5s linear
  -o-transition: transform .5s linear
  -ms-transition: transform .5s linear
  -moz-transition: transform .5s linear
  -webkit-transition: transform .5s linear
  transform: scale(1.04)
.bloque-texto-a.color-secundario:before
  background-color: #A9EBF4
.pasos-a.color-primario .pasos-a__circle
  background-color: #4DD0E1
.pasos-a.color-primario .pasos-a__circle div
  color: white
.pasos-a.color-primario .pasos-a__numero::after
  border-left-color: #4DD0E1
.pasos-a.color-primario .pasos-a__linea .hor-line
  border-top-color: #4dd0e1
.pasos-a.color-primario .pasos-a__linea__esquina__linea
  border-color: #4dd0e1
.tarjeta.tarjeta__1
  background-color: #FFF1C7
.img-infografica__item
  width: 3.5% !important
.img-infografica.color-secundario .img-infografica__item__dot:before, .img-infografica.color-secundario .img-infografica__item__dot:after
  background-color: #FFCA28
.caja__1:before
  content: ''
  left: -19px
  width: 0px
  height: 0px
  border-top: 20px solid transparent
  border-bottom: 20px solid transparent
  border-right: 20px solid #a9ebf4
  position: absolute
.caja__2:before
  content: ''
  left: -19px
  width: 0px
  height: 0px
  border-top: 20px solid transparent
  border-bottom: 20px solid transparent
  border-right: 20px solid #FFF1C7
  position: absolute
.bloque-texto-a.color-primario
    background-color: #FFF1DB
.bloque-texto-a.color-primario:before
    background-color: #FFD494
.tarjeta__tema2 h3,.tarjeta__tema2 p
  color: #12263F !important
</style>
