<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Cierre de caja

    p(data-aos="fade-up") Es la operación de consolidación de la facturación de los clientes durante el turno, el cuadre de los ingresos y posterior remisión de fondos a la caja general, lo cual marca la finalización del turno de caja. Ahora, se indica el paso a paso de este procedimiento.

    .col-md-10.mt-5
      .p-5.caja_flotante(style="background-color:#FFF1DB" data-aos="fade-right")
        .row.mt-4
          .col-md-5(style="place-self:end;")
            span.contenedor__numero 1
            p.mt-3(data-aos="fade-up") En primer lugar, como cajero imprima un reporte, organizado por formas de pago, de lo recibido en el turno.
          .col-md-7(style="place-self:start")
            figure.text-center
              img.image_floating(src="@/assets/curso/tema5/1.svg" data-aos="fade-up" style="display:inline;max-width:150px;")

    .row.mt-4
      .col-md-4
      .col-md-8
        .p-5.caja_flotante(style="background-color:#E3E8FF" data-aos="fade-left")
          .row.mt-4
            .col-md-5(style="place-self:end;")
              span.contenedor__numero(style="background-color:#111E61 !important;color:#fff !important;") 2
              p.mt-3(data-aos="fade-up") En primer lugar, como cajero imprima un reporte, organizado por formas de pago, de lo recibido en el turno.
            .col-md-7(style="place-self:start")
              figure.text-center
                img.image_floating(src="@/assets/curso/tema5/2.svg" data-aos="fade-up" style="display:inline;max-width:100px;")

    .col-md-10.mt-5
      .p-5.caja_flotante(style="background-color:#FFF1DB" data-aos="fade-right")
        .row.mt-4
          .col-md-5(style="place-self:end;")
            span.contenedor__numero 3
            p.mt-3(data-aos="fade-up") Con los documentos organizados, empiece a revisar cada factura, su forma de pago contra el reporte de formas de pago. Allí comprobará si el movimiento fue registrado adecuadamente.
          .col-md-7(style="place-self:start")
            figure.text-center
              img.image_floating(src="@/assets/curso/tema5/3.svg" data-aos="fade-up" style="display:inline;max-width:150px;")

    .row.mt-4
      .col-md-4
      .col-md-8
        .p-5.caja_flotante(style="background-color:#E3E8FF" data-aos="fade-left")
          .row.mt-4
            .col-md-5(style="place-self:end;")
              span.contenedor__numero(style="background-color:#111E61 !important;color:#fff !important;") 4
              p.mt-3(data-aos="fade-up") Si en la revisión anterior se detecta algún movimiento que no coincida, (forma de pago ingresada erróneamente, u otro anomalía) corríjala.
            .col-md-7(style="place-self:start")
              figure.text-center
                img.image_floating(src="@/assets/curso/tema5/4.svg" data-aos="fade-up" style="display:inline;max-width:100px;")

    .col-md-10.mt-5
      .p-5.caja_flotante(style="background-color:#FFF1DB" data-aos="fade-right")
        .row.mt-4
          .col-md-5(style="place-self:end;")
            span.contenedor__numero 5
            p.mt-3(data-aos="fade-up") Una vez tenga los movimientos revisados, haga un conteo del efectivo, y sume todos los voucher de tarjetas de crédito por franquicia. Estos totales deben coincidir con el valor registrado en el reporte de formas de pago.
          .col-md-7(style="place-self:start")
            figure.text-center
              img.image_floating(src="@/assets/curso/tema5/5.svg" data-aos="fade-up" style="display:inline;max-width:150px;")

    .row.mt-4
      .col-md-4
      .col-md-8
        .p-5.caja_flotante(style="background-color:#E3E8FF" data-aos="fade-left")
          .row.mt-4
            .col-md-5(style="place-self:end;")
              span.contenedor__numero(style="background-color:#111E61 !important;color:#fff !important;") 6
              p.mt-3(data-aos="fade-up") Una vez consolidados los montos a remitir, llene el sobre de remisión de fondos y deposite en él los valores recibidos.
            .col-md-7(style="place-self:start")
              figure.text-center
                img.image_floating(src="@/assets/curso/tema5/6.svg" data-aos="fade-up" style="display:inline;max-width:100px;")

    .col-md-10.mt-5
      .p-5.caja_flotante(style="background-color:#FFF1DB" data-aos="fade-right")
        .row.mt-4
          .col-md-5(style="place-self:end;")
            span.contenedor__numero 7
            p.mt-3(data-aos="fade-up") Una vez este seguro de que el movimiento esta correcto, haga el cierre en el sistema PMS y adjunte los reportes generados al movimiento. Luego deposite el sobre de remisión en la caja, esto se hace en presencia de un testigo. 
          .col-md-7(style="place-self:start")
            figure.text-center
              img.image_floating(src="@/assets/curso/tema5/7.svg" data-aos="fade-up" style="display:inline;max-width:150px;")

    .row.mt-4
      .col-md-4
      .col-md-8
        .p-5.caja_flotante(style="background-color:#E3E8FF" data-aos="fade-left")
          .row.mt-4
            .col-md-5(style="place-self:end;")
              span.contenedor__numero(style="background-color:#111E61 !important;color:#fff !important;") 8
              p.mt-3(data-aos="fade-up") Organice los documentos para la entrega a la auditoría y reporte cualquier novedad que haya surgido en el proceso. 
            .col-md-7(style="place-self:start")
              figure.text-center
                img.image_floating(src="@/assets/curso/tema5/8.svg" data-aos="fade-up" style="display:inline;max-width:100px;")







</template>

<script>
export default {
  name: 'Tema5',
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
span.contenedor__numero
  padding: 10px 17px 10px 17px
  background-color: #FF9800
  font-size: 23px
  font-weight: bold
  border-radius: 50%
  border: 2px white solid
</style>
