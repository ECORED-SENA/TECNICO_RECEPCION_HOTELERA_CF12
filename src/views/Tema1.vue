<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 #[em Check out]

    .bloque-texto-a.color-primario.p-4.p-md-5.mt-5.caja_flotante(data-aos="fade-left")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.text-center
            img.image_floating(src="@/assets/curso/tema1/1.svg" style="max-width:200px;display:inline;" data-aos="fade-left")
        .col-lg-8
          .bloque-texto-a__texto.p-5.caja_escalada_hover(style="background-color: rgb(255 255 255 / 95%);height:100%;")
            p(data-aos="fade-up") Se denomina así al proceso en el que el huésped termina su estadía, liquida su cuenta y deja el hotel, culminando el denominado ciclo del huésped; este procedimiento se informa a los otros departamentos.

    p.mt-5(data-aos="fade-up") Aunque no existe una hora estándar, la mayoría de los establecimientos de alojamiento fijan su hora de #[em Check out] alrededor del mediodía, ya que de esta depende también la implementación de una hora de #[em Check in], teniendo en cuenta que la diferencia es el tiempo utilizado para aplicar los protocolos de limpieza y desinfección, garantizando la correcta asepsia de la habitación. Una vez establecida la hora de salida, es importante comunicársela al huésped al momento de su ingreso al hotel, como parte del proceso de registro (#[em Check in]).

    .row.mt-5
      .col-md-5
        p(data-aos="fade-left") Como se mencionó, el horario establecido para la salida del huésped depende de los parámetros de cada hotel, sin embargo, las necesidades de permanencia del huésped son variadas, por lo que la mayoría de alojamientos ofrecen la posibilidad de dejar allí el equipaje hasta el momento de emprender el viaje para dejar el destino visitado. En caso de presentarse esta situación, el hotel debe disponer de un espacio para la custodia temporal de las pertenencias del huésped y contar con un mecanismo de identificación de estas, que usualmente es un sticker en el cual se plasma la información básica y posteriormente se relaciona en la bitácora de botones o recepción según aplique la responsabilidad.

      .col-md-7
        figure
          img.image_floating(src="@/assets/curso/tema1/2.svg" data-aos="fade-right")

    br
    br
    .titulo-segundo.mt-5
      h2#t_1_1 1.1  #[em Late Check out]

    p(data-aos="fade-up") El #[em Late Check out] se presenta cuando el huésped solicita dejar la habitación más tarde de lo establecido. Este es un servicio cuya demanda está en aumento en ciertos destinos, pues ofrece nuevas posibilidades a la hora de organizar el viaje y con ello, se permite al cliente dejar tarde la habitación: a las dos de la tarde (2:00 p. m.) o incluso a las seis (6:00 p. m.), según el caso. Esto da nuevas oportunidades a los clientes dependiendo de su motivo de viaje, así, unos podrán disfrutar de su última noche en el hotel y no tener que madrugar, otros podrán aprovechar la mañana tranquilamente sin tener que estar pendientes de la hora de salida.

    p.mt-4(data-aos="fade-up") También es un servicio muy útil para clientes que tengan una reunión por la mañana del día de #[em Check out], estos podrán dejar sus maletas en la habitación y, después de la reunión, volver al hotel para darse una ducha o reposar un rato antes de salir; este servicio se ofrece, según disponibilidad y puede conllevar un costo. El #[em Early check-in] (registro antes de la hora) es una práctica menos extendida pero que también existe.

    br
    br
    .titulo-segundo.mt-5
      h2#t_1_2 1.2 Confirmación de salidas

    .tarjeta-avatar-b.mb-5
        img.image_floating(src='@/assets/curso/tema1/3.svg' alt='' data-aos="fade-left")
        .tarjeta.caja_flotante(style="background-color: #FFF1DB;")
          .p-5(data-aos="fade-up") Es un procedimiento que se debe realizar en el turno de la tarde, cuyo propósito es verificar que las personas con fecha de salida para ese día y que aún no han legalizado su salida lo hagan o informen si van a tomar el servicio de alojamiento más tiempo. Este proceso es utilizado en los días en que la disponibilidad es restringida y previene de una posible sobreventa (#[em Overbooking]).

    br
    br
    .titulo-segundo.mt-5
      h2#t_1_3 1.3 Salidas anticipadas

    .tarjeta-avatar-b.mb-5
        img.image_floating(src='@/assets/curso/tema1/4.svg' alt='' data-aos="fade-left")
        .tarjeta.caja_flotante(style="background-color: #FFF1DB;")
          .p-5(data-aos="fade-up") También conocidas como #[em Early Departure], son aquellas reservas que no completan el periodo de estadía planteado inicialmente, dejando el hotel antes de lo previsto. En muchos establecimientos, cuando esto se anuncia posterior a la hora fijada como límite de #[em Check out], se realiza un cobro que va entre el 50 % y el 100 % del valor de la noche, dependiendo de la política fijada, la cual depende, básicamente, de la demanda y la posibilidad de ocupar esa habitación que va a quedar disponible.




</template>

<script>
export default {
  name: 'Tema1',
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
</style>
