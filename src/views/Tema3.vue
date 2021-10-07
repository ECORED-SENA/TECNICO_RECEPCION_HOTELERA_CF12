<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Métodos de pago

    .bloque-texto-a.color-primario.p-4.p-md-5.mt-5.caja_flotante(data-aos="fade-left")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.text-center
            img.image_floating(src="@/assets/curso/tema3/1.svg" style="max-width:200px;display:inline;" data-aos="fade-left")
        .col-lg-8
          .bloque-texto-a__texto.p-5.caja_escalada_hover(style="background-color: rgb(255 255 255 / 95%);height:100%;")
            p(data-aos="fade-up") Siempre que se va a cerrar una cuenta y a expedir una factura, se debe recibir un pago. En este apartado se hará referencia a las formas de pago legalmente aceptadas y avaladas por el Estado colombiano y el establecimiento de alojamiento. Es muy importante revisar este tema a profundidad para el desempeño y saber cómo actuar en cada caso.

    br
    br
    .titulo-segundo.mt-5
      h2#t_3_1 3.1 Moneda nacional

    p(data-aos="fade-up") En la república de Colombia, incluyendo sus islas de San Andrés y Providencia, la moneda nacional es el peso colombiano, identificado con el signo del mismo nombre ($) y cuya abreviatura es COP.

    p.mt-4(data-aos="fade-up") De otra parte, dentro de las funciones del Banco de la República se encuentra emitir de manera exclusiva e indelegable la moneda legal colombiana, constituida por billetes y monedas metálicas. En consecuencia, realiza la producción, emisión, provisión y destrucción de especies monetarias.

    p.mt-4(data-aos="fade-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000") #[strong Actualmente circulan cinco tipos de monedas y seis valores distintos de billetes; a continuación, se verán en detalle sus características y elementos de seguridad.]

    h3.mt-5(data-aos="fade-up") Billetes colombianos

    p.mt-3(data-aos="fade-up") Con la familia de billetes colombianos se da continuidad al concepto de biodiversidad presentado en la familia de monedas que comenzó a circular desde 2012, exaltando la riqueza natural del país. Como parte de la noción de familia, estos billetes cuentan con elementos de seguridad, cuya ubicación y manera de verificar son comunes en todas las denominaciones, facilitándole al público su comprobación y reconocimiento de la autenticidad. Actualmente, esta familia está circulando de manera simultánea con los billetes de anterior diseño, sirviendo ambos para hacer transacciones (Banco de la República, 2021).

    .mt-4.p-5.caja_flotante(style="background-color:#FFF1DB;")
      p(data-aos="zoom-in") Los billetes colombianos tiene diferentes características de seguridad las que se evidencian tocando, observando detenidamente, comprobando y/o girando. #[strong A continuación elige cada billete y  reconoce cada una de las formas para identificar su autenticidad.]

    .row.mt-4
      .col-md-4.mb-3
        figure.indicador__container
          img.image_floating.image__modal(src="@/assets/curso/tema3/2.svg" @click="modal1 = true" data-aos="zoom-in" @mouseover="mostrarIndicador = false")
        .indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal1")
          .p-5.caja_flotante(style="background-color:#E8EFE0;")
            h3 Billete de cien mil pesos
            p.mt-2 A partir del 31 de marzo de 2016 el Banco de la República introdujo al mercado el nuevo billete de $100 mil, el primero de la nueva familia. La imagen del presidente Carlos Lleras Restrepo junto con el pájaro barranquero y la flor del sietecueros son la imagen del nuevo billete.

            .row.mt-5
              .col-md-3(style="display:inline-flex;")
                p.bullet(style="background-color:#B01A29;")
                h4.mt-1 &nbsp;&nbsp;&nbsp;&nbsp;Tocar
              .col-md-3(style="display:inline-flex;")
                p.bullet(style="background-color:#E8A817;")
                h4.mt-1 &nbsp;&nbsp;&nbsp;&nbsp;Observar
              .col-md-3(style="display:inline-flex;")
                p.bullet(style="background-color:#4A762E;")
                h4.mt-1 &nbsp;&nbsp;&nbsp;&nbsp;Girar
              .col-md-3(style="display:inline-flex;")
                p.bullet(style="background-color:#642A95;")
                h4.mt-1 &nbsp;&nbsp;&nbsp;&nbsp;Comprobar

          div(v-if="!reverso100")
            .img-infografica.color-secundario.mt-4(data-aos="zoom-in")
              .img-infografica__img
                figure
                  img.image__base.image_floating(src='@/assets/curso/tema3/2.svg' alt='')
              .img-infografica__content
                .img-infografica__item(style='top: 15%; left: 11%;' @click="mostrar_item1")
                  .img-infografica__item__dot.bullet_rojo
                  .img-infografica__item_raya.bullet_rojo(style="top: 15%;" v-if="item__1")
                .img-infografica__item(style='top: 80%; left: 33%;' @click="mostrar_item2")
                  .img-infografica__item__dot.bullet_rojo
                  .img-infografica__item_raya.bullet_rojo(style="top: 50%;" v-if="item__2")
                .img-infografica__item(style='top: 78%; left: 98%;' @click="mostrar_item3")
                  .img-infografica__item__dot.bullet_rojo
                  .img-infografica__item_raya.bullet_rojo(style="top: 70%;" v-if="item__3")
                .img-infografica__item(style='top: 68%; left: 24%;' @click="mostrar_item4")
                  .img-infografica__item__dot.bullet_amarillo
                  .img-infografica__item_raya.bullet_amarillo(style="top: 70%;" v-if="item__4")
                .img-infografica__item(style='top: 24%; left: 74%;' @click="mostrar_item5")
                  .img-infografica__item__dot.bullet_verde
                  .img-infografica__item_raya.bullet_verde(style="top: 70%;" v-if="item__5")
                .img-infografica__item(style='top: 49%; left: 30%;' @click="mostrar_item6")
                  .img-infografica__item__dot.bullet_verde
                  .img-infografica__item_raya.bullet_verde(style="top: 70%;" v-if="item__6")
                .img-infografica__item(style='top: 16%; left: 91%;' @click="mostrar_item7")
                  .img-infografica__item__dot.bullet_morado
                  .img-infografica__item_raya.bullet_morado(style="top: 70%;" v-if="item__7")
                .img-infografica__item(style='top: 25%; left: 91%;' @click="mostrar_item8")
                  .img-infografica__item__dot.bullet_morado
                  .img-infografica__item_raya.bullet_morado(style="top: 70%;" v-if="item__8")
            
            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__1" data-aos="zoom-in")
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/3.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white El texto 100 mil pesos del extremo superior izquierdo está en relieve

              .row.mt-5.content__info_billete(v-if="item__2" data-aos="zoom-in")
                .col-md-3
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/4.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white El número cien en sistema braille, en la parte inferior central (levemente a la izquierda).

              .row.mt-5.content__info_billete(v-if="item__3" data-aos="zoom-in")
                .col-md-5
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white En los bordes laterales siete líneas diagonales
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/5.svg" style="max-width:200px;" data-aos="fade-up")

              .row.mt-5.content__info_billete(v-if="item__4" data-aos="zoom-in")
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/6.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white La imagen del pájaro barranquero, que está impresas parcialmente por anverso y reverso y se complementan en su totalidad al observarlas al trasluz.

              .row.mt-5.content__info_billete(v-if="item__5" data-aos="zoom-in")
                .col-md-3
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white Se rinde homenaje al presidente de Colombia Carlos Lleras Restrepo (1966-1970), en cumplimiento de la Ley 1167 de 2007. Se incluye una imagen del rostro del presidente y otra de cuerpo entero. De esta última, se proyectan dos sombras que contienen los seudónimos que él utilizaba como periodista: “El bachiller Cleofás Pérez” y “Hefestos”.
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/7.svg" style="max-width:200px;" data-aos="fade-up")

              .row.mt-5.content__info_billete(v-if="item__6" data-aos="zoom-in")
                .col-md-2
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/8.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white La imagen de la flor del sietecueros ubicada al lado izquierdo presenta un efecto de cambio de color de verde a azul y, simultáneamente, el círculo de color verde intenso, dentro de la flor, presenta movimiento.

              .row.mt-5.content__info_billete(v-if="item__7" data-aos="zoom-in")
                .col-md-5
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white En la línea vertical azul turquesa, a la derecha del billete, se encuentra el texto “BANCO DE LA REPÚBLICA”.
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/9.svg" style="max-width:200px;" data-aos="fade-up")

              .row.mt-5.content__info_billete(v-if="item__8" data-aos="zoom-in")
                .col-md-5
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white Textos para leer con lupa. En la franja verde se leen los textos “BANCO DE LA REPÚBLICA” y “BRC”
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/10.svg" style="max-width:200px;" data-aos="fade-up")

          div(v-if="reverso100")
            .img-infografica.color-secundario.mt-4(data-aos="zoom-in")
              .img-infografica__img
                figure
                  img.image__base.image_floating(src='@/assets/curso/tema3/13.svg' alt='')
              .img-infografica__content
                .img-infografica__item(style='top: 15%; left: 11%;' @click="mostrar_item1")
                  .img-infografica__item__dot.bullet_rojo
                  .img-infografica__item_raya.bullet_rojo(style="top: 15%;" v-if="item__1")
                .img-infografica__item(style='top: 75%; left: 25%;' @click="mostrar_item2")
                  .img-infografica__item__dot.bullet_verde
                  .img-infografica__item_raya.bullet_verde(style="top: 50%;" v-if="item__2")
                .img-infografica__item(style='top: 37%; left: 31%;' @click="mostrar_item3")
                  .img-infografica__item__dot.bullet_morado
                  .img-infografica__item_raya.bullet_morado(style="top: 50%;" v-if="item__3")
                .img-infografica__item(style='top: 24%; left: 42%;' @click="mostrar_item4")
                  .img-infografica__item__dot.bullet_amarillo
                  .img-infografica__item_raya.bullet_amarillo(style="top: 50%;" v-if="item__4")
                .img-infografica__item(style='top: 79%; left: 72%;' @click="mostrar_item5")
                  .img-infografica__item__dot.bullet_amarillo
                  .img-infografica__item_raya.bullet_amarillo(style="top: 50%;" v-if="item__5")
                .img-infografica__item(style='top: 19%; left: 93%;' @click="mostrar_item6")
                  .img-infografica__item__dot.bullet_rojo
                  .img-infografica__item_raya.bullet_rojo(style="top: 50%;" v-if="item__6")
                .img-infografica__item(style='top: 53%; left: 39%;' @click="mostrar_item7")
                  .img-infografica__item__dot.bullet_verde
                  .img-infografica__item_raya.bullet_verde(style="top: 50%;" v-if="item__7")
            
            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__1" data-aos="zoom-in")
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/15.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white El texto 100 mil pesos del extremo superior izquierdo está en relieve

              .row.mt-5.content__info_billete(v-if="item__2" data-aos="zoom-in")
                .col-md-2
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/16.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white IMAGEN PRINCIPAL - A la izquierda, sobresale una palma de cera, árbol nacional, y en el tronco un recolector de cera∗

              .row.mt-5.content__info_billete(v-if="item__3" data-aos="zoom-in")
                .col-md-3
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/17.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white Al utilizar una lupa, se puede observar el texto "BRC" en dos nervaduras de las hojas de la palma de cera principal, en dos de los troncos de las palmas inferiores y en la silueta de las montañas.

              .row.mt-5.content__info_billete(v-if="item__4" data-aos="zoom-in")
                .col-md-4
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/18.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white CINTA DE SEGURIDAD - Cinta de seguridad introducida en el papel que incluye el texto "BRC" y la silueta del pájaro barranquero, al observarla al trasluz.

              .row.mt-5.content__info_billete(v-if="item__5" data-aos="zoom-in")
                .col-md-4
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/19.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white IMÁGENES COINCIDENTES - Al lado izquierdo, se observan el texto "BRC" y la imagen del pájaro barranquero, que están impresas parcialmente por anverso y reverso y se complementan en su totalidad al observarlas al trasluz.

              .row.mt-5.content__info_billete(v-if="item__6" data-aos="zoom-in")
                .col-md-5
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white Textos: "BANCO DE LA REPÚBLICA" y "COLOMBIA"
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/20.svg" style="max-width:200px;" data-aos="fade-up")

              .row.mt-5.content__info_billete(v-if="item__7" data-aos="zoom-in")
                .col-md-4
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/21.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white CINTA DE SEGURIDAD - Al girar el billete, la parte izquierda de la cinta de seguridad cambia de color fucsia a amarillo verdoso.

          div.pt-5.pb-5(style="position:relative;background-color:white;z-index:1;" v-if="!reverso100")
            figure
              img.caja_escalada_hover(src="@/assets/curso/tema3/11.svg" style="max-width:150px;cursor:pointer;" @click="reverso100 = true")

          div.pt-5.pb-5(style="position:relative;background-color:white;z-index:1;" v-if="reverso100")
            figure
              img.caja_escalada_hover(src="@/assets/curso/tema3/14.svg" style="max-width:150px;cursor:pointer;" @click="reverso100 = false")

          div(style="background-color: white;z-index: 2;position: relative;")
            a.anexo.mb-lg-0.col-md-6(href="https://youtu.be/ln0AFdoFK7w" target="_blank" data-aos="fade-up")
              .anexo__icono
                img(src="@/assets/curso/tema3/12.svg")
              .anexo__texto
                p(style="color: #111E61;") Consulte el video educativo “Cinco pasos para reconocer el billete de 100 mil pesos”

      .col-md-4.mb-3
        figure
          img.image_floating.image__modal(src="@/assets/curso/tema3/22.svg" @click="modal2 = true" data-aos="zoom-in" @mouseover="mostrarIndicador = false")
        .indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal2")
          .p-5.caja_flotante(style="background-color:#F2E8E8;")
            h3 Billete de cincuenta mil pesos
            p.mt-2 A partir del viernes 19 de agosto de 2016 el Banco de la República introdujo al mercado el nuevo billete de $50 mil, el tercero de la nueva familia. Ciudad Perdida (núcleo de la cultura Tayrona), la Sierra Nevada de Santa Marta, un colibrí picando una flor y un caracol burgao, junto con el nobel de literatura Gabriel García Márquez son la imagen del nuevo billete. Este billete circulará simultáneamente con el actual.

            .row.mt-5
              .col-md-3(style="display:inline-flex;")
                p.bullet(style="background-color:#B01A29;")
                h4.mt-1 &nbsp;&nbsp;&nbsp;&nbsp;Tocar
              .col-md-3(style="display:inline-flex;")
                p.bullet(style="background-color:#E8A817;")
                h4.mt-1 &nbsp;&nbsp;&nbsp;&nbsp;Observar
              .col-md-3(style="display:inline-flex;")
                p.bullet(style="background-color:#4A762E;")
                h4.mt-1 &nbsp;&nbsp;&nbsp;&nbsp;Girar
              .col-md-3(style="display:inline-flex;")
                p.bullet(style="background-color:#642A95;")
                h4.mt-1 &nbsp;&nbsp;&nbsp;&nbsp;Comprobar 

          div(v-if="!reverso50")
            .img-infografica.color-secundario.mt-4(data-aos="zoom-in")
              .img-infografica__img
                figure
                  img.image__base.image_floating(src='@/assets/curso/tema3/22.svg' alt='')
              .img-infografica__content
                .img-infografica__item(style='top: 42%; left: 5%;' @click="mostrar_item1_50")
                  .img-infografica__item__dot.bullet_amarillo
                  .img-infografica__item_raya.bullet_amarillo(style="top: 15%;" v-if="item__1_50")
                .img-infografica__item(style='top: 11%; left: 14%;' @click="mostrar_item2_50")
                  .img-infografica__item__dot.bullet_rojo
                  .img-infografica__item_raya.bullet_rojo(style="top: 15%;" v-if="item__2_50")
                .img-infografica__item(style='top: 16%; left: 37%;' @click="mostrar_item3_50")
                  .img-infografica__item__dot.bullet_morado
                  .img-infografica__item_raya.bullet_morado(style="top: 15%;" v-if="item__3_50")
                .img-infografica__item(style='top: 48%; left: 36%;' @click="mostrar_item4_50")
                  .img-infografica__item__dot.bullet_verde
                  .img-infografica__item_raya.bullet_verde(style="top: 15%;" v-if="item__4_50")
                .img-infografica__item(style='top: 39%; left: 64%;' @click="mostrar_item5_50")
                  .img-infografica__item__dot.bullet_verde
                  .img-infografica__item_raya.bullet_verde(style="top: 15%;" v-if="item__5_50")
                .img-infografica__item(style='top: 73%; left: 30%;' @click="mostrar_item6_50")
                  .img-infografica__item__dot.bullet_amarillo
                  .img-infografica__item_raya.bullet_amarillo(style="top: 15%;" v-if="item__6_50")
                .img-infografica__item(style='top: 88%; left: 38%;' @click="mostrar_item7_50")
                  .img-infografica__item__dot.bullet_rojo
                  .img-infografica__item_raya.bullet_rojo(style="top: 15%;" v-if="item__7_50")
                .img-infografica__item(style='top: 60%; left: 54%;' @click="mostrar_item8_50")
                  .img-infografica__item__dot.bullet_morado
                  .img-infografica__item_raya.bullet_morado(style="top: 15%;" v-if="item__8_50")
                .img-infografica__item(style='top: 81%; left: 98%;' @click="mostrar_item9_50")
                  .img-infografica__item__dot.bullet_rojo
                  .img-infografica__item_raya.bullet_rojo(style="top: 15%;" v-if="item__9_50")
            
            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__1_50" data-aos="zoom-in")
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/23.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white IMÁGENES COINCIDENTES - Al lado izquierdo se observa el texto "BRC", que está impreso parcialmente por anverso y reverso, y se complementa en su totalidad al observarlo al trasluz.

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__2_50" data-aos="zoom-in")
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/24.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white El texto 50 mil pesos del extremo superior izquierdo está en relieve

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__3_50" data-aos="zoom-in")
                .col-md-3
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/25.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white La cinta de seguridad muestra fluorescencia en rojo y amarillo, de forma intercalada bajo luz ultravioleta.

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__4_50" data-aos="zoom-in")
                .col-md-3
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/26.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white IMAGEN CON CAMBIO DE COLOR Y MOVIMIENTO - La imagen del colibrí picando una flor, ubicada al lado izquierdo, presenta un efecto de cambio de color de verde a azul y, simultáneamente, el círculo de color verde intenso dentro de esta imagen presenta movimiento.

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__5_50" data-aos="zoom-in")
                .col-md-2
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white IMAGEN OCULTA (LATENTE) - Al lado izquierdo del rostro, en la franja de color azul, al observar el billete en posición casi horizontal desde la esquina inferior derecha a la altura de los ojos, se visualiza el texto "BRC".
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/27.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-2

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__6_50" data-aos="zoom-in")
                .col-md-3
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/28.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white IMÁGENES COINCIDENTES - Al mismo lado, al observar al trasluz, un caracol burgao impreso por el anverso se complementa con otro caracol burgao, impreso por el reverso.

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__7_50" data-aos="zoom-in")
                .col-md-3
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/29.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white El número cincuenta en sistema braille, en la parte inferior central (levemente a la izquierda). 

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__8_50" data-aos="zoom-in")
                .col-md-5
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/30.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white En algunas figuras ovaladas, a los lados del personaje de pie, se encuentra el texto "BANCO DE LA REPÚBLICA".

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__9_50" data-aos="zoom-in")
                .col-md-5
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white En los bordes laterales seis líneas diagonales.
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/31.svg" style="max-width:200px;" data-aos="fade-up")

          div(v-if="reverso50")
            .img-infografica.color-secundario.mt-4(data-aos="zoom-in")
              .img-infografica__img
                figure
                  img.image__base.image_floating(src='@/assets/curso/tema3/32.svg' alt='')
              .img-infografica__content
                .img-infografica__item(style='top: 15%; left: 16%;' @click="mostrar_item1_50")
                  .img-infografica__item__dot.bullet_rojo
                  .img-infografica__item_raya.bullet_rojo(style="top: 15%;" v-if="item__1_50")
                .img-infografica__item(style='top: 34%; left: 14%;' @click="mostrar_item2_50")
                  .img-infografica__item__dot.bullet_rojo
                  .img-infografica__item_raya.bullet_rojo(style="top: 15%;" v-if="item__2_50")
                .img-infografica__item(style='top: 29%; left: 40%;' @click="mostrar_item3_50")
                  .img-infografica__item__dot.bullet_amarillo
                  .img-infografica__item_raya.bullet_amarillo(style="top: 15%;" v-if="item__3_50")
                .img-infografica__item(style='top: 75%; left: 71%;' @click="mostrar_item4_50")
                  .img-infografica__item__dot.bullet_amarillo
                  .img-infografica__item_raya.bullet_amarillo(style="top: 15%;" v-if="item__4_50")
                .img-infografica__item(style='top: 60%; left: 14%;' @click="mostrar_item5_50")
                  .img-infografica__item__dot.bullet_morado
                  .img-infografica__item_raya.bullet_morado(style="top: 15%;" v-if="item__5_50")
                .img-infografica__item(style='top: 26%; left: 49%;' @click="mostrar_item6_50")
                  .img-infografica__item__dot.bullet_rojo
                  .img-infografica__item_raya.bullet_rojo(style="top: 15%;" v-if="item__6_50")
                .img-infografica__item(style='top: 52%; left: 40%;' @click="mostrar_item7_50")
                  .img-infografica__item__dot.bullet_verde
                  .img-infografica__item_raya.bullet_verde(style="top: 15%;" v-if="item__7_50")
               
            
            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__1_50" data-aos="zoom-in")
                .col-md-1
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/33.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white Textos "50 MIL PESOS" y "CINCUENTA MIL PESOS".

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__2_50" data-aos="zoom-in")
                .col-md-1
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/34.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white Imagen de dos indígenas de la Sierra Nevada de Santa Marta.

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__3_50" data-aos="zoom-in")
                .col-md-4
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/35.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white Imagen de dos indígenas de la Sierra Nevada de Santa Marta.

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__4_50" data-aos="zoom-in")
                .col-md-2
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white IMÁGENES COINCIDENTES - Al mismo lado, al observar al trasluz, un caracol burgao impreso por el reverso se complementa con otro caracol burgao, impreso por el anverso.
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/36.svg" style="max-width:200px;" data-aos="fade-up")

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__5_50" data-aos="zoom-in")
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/37.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white Se puede observar el texto "BRC" en las siluetas de algunas de las montañas y en los bordes de las prendas que visten los indígenas.

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__6_50" data-aos="zoom-in")
                .col-md-5
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/38.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white Se puede observar el texto "BRC" en las siluetas de algunas de las montañas y en los bordes de las prendas que visten los indígenas.

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__7_50" data-aos="zoom-in")
                .col-md-4
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/38-1.png" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white CINTA DE SEGURIDAD - Al girar el billete, la parte central de la cinta de seguridad cambia de color cobre a verde.



          div.pt-5.pb-5(style="position:relative;background-color:white;z-index:1;" v-if="!reverso50")
            figure
              img.caja_escalada_hover(src="@/assets/curso/tema3/11.svg" style="max-width:150px;cursor:pointer;" @click="reverso50 = true")

          div.pt-5.pb-5(style="position:relative;background-color:white;z-index:1;" v-if="reverso50")
            figure
              img.caja_escalada_hover(src="@/assets/curso/tema3/14.svg" style="max-width:150px;cursor:pointer;" @click="reverso50 = false")

          div(style="background-color: white;z-index: 2;position: relative;")
            a.anexo.mb-lg-0.col-md-6(href="https://youtu.be/XsPcVefiP9U" target="_blank" data-aos="fade-up")
              .anexo__icono
                img(src="@/assets/curso/tema3/12.svg")
              .anexo__texto
                p(style="color: #111E61;") Consulte el video educativo "Cinco pasos para reconocer el billete de 50 mil pesos"

      .col-md-4.mb-3
        figure
          img.image_floating.image__modal(src="@/assets/curso/tema3/39.svg" @click="modal3 = true" data-aos="zoom-in" @mouseover="mostrarIndicador = false")
        .indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal3")
          .p-5.caja_flotante(style="background-color:#F2E8E8;")
            h3 Billete de veinte mil pesos
            p.mt-2 A partir del jueves 30 de junio de 2016 el Banco de la República introdujo al mercado el nuevo billete de $20 mil, el segundo de la nueva familia. Los canales de La Mojana en la región donde se asentó el pueblo zenú, el fruto del anón, la orejera zenú y el sombrero vueltia’o, junto con el presidente Alfonso López Michelsen, son la imagen del nuevo billete. Este billete circulará simultáneamente con el actual.

            .row.mt-5
              .col-md-3(style="display:inline-flex;")
                p.bullet(style="background-color:#B01A29;")
                h4.mt-1 &nbsp;&nbsp;&nbsp;&nbsp;Tocar
              .col-md-3(style="display:inline-flex;")
                p.bullet(style="background-color:#E8A817;")
                h4.mt-1 &nbsp;&nbsp;&nbsp;&nbsp;Observar
              .col-md-3(style="display:inline-flex;")
                p.bullet(style="background-color:#4A762E;")
                h4.mt-1 &nbsp;&nbsp;&nbsp;&nbsp;Girar
              .col-md-3(style="display:inline-flex;")
                p.bullet(style="background-color:#642A95;")
                h4.mt-1 &nbsp;&nbsp;&nbsp;&nbsp;Comprobar 

          div(v-if="!reverso20")
            .img-infografica.color-secundario.mt-4(data-aos="zoom-in")
              .img-infografica__img
                figure
                  img.image__base.image_floating(src='@/assets/curso/tema3/39.svg' alt='')
              .img-infografica__content
                .img-infografica__item(style='top: 15%; left: 7%;' @click="mostrar_item1_20")
                  .img-infografica__item__dot.bullet_rojo
                  .img-infografica__item_raya.bullet_rojo(style="top: 15%;" v-if="item__1_20")
                .img-infografica__item(style='top: 41%; left: 6%;' @click="mostrar_item2_20")
                  .img-infografica__item__dot.bullet_amarillo
                  .img-infografica__item_raya.bullet_amarillo(style="top: 15%;" v-if="item__2_20")
                .img-infografica__item(style='top: 61%; left: 16%;' @click="mostrar_item3_20")
                  .img-infografica__item__dot.bullet_amarillo
                  .img-infografica__item_raya.bullet_amarillo(style="top: 15%;" v-if="item__3_20")
                .img-infografica__item(style='top: 34%; left: 60%;' @click="mostrar_item4_20")
                  .img-infografica__item__dot.bullet_verde
                  .img-infografica__item_raya.bullet_verde(style="top: 15%;" v-if="item__4_20")
                .img-infografica__item(style='top: 94%; left: 17%;' @click="mostrar_item5_20")
                  .img-infografica__item__dot.bullet_verde
                  .img-infografica__item_raya.bullet_verde(style="top: 15%;" v-if="item__5_20")
                .img-infografica__item(style='top: 83%; left: 38%;' @click="mostrar_item6_20")
                  .img-infografica__item__dot.bullet_verde
                  .img-infografica__item_raya.bullet_verde(style="top: 15%;" v-if="item__6_20")
                .img-infografica__item(style='top: 68%; left: 63%;' @click="mostrar_item7_20")
                  .img-infografica__item__dot.bullet_verde
                  .img-infografica__item_raya.bullet_verde(style="top: 15%;" v-if="item__7_20")
                .img-infografica__item(style='top: 26%; left: 89%;' @click="mostrar_item8_20")
                  .img-infografica__item__dot.bullet_morado
                  .img-infografica__item_raya.bullet_morado(style="top: 15%;" v-if="item__8_20")
            
            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__1_20" data-aos="zoom-in")
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/40.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white Texto: "20 MIL PESOS", en la esquina superior izquierda.

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__2_20" data-aos="zoom-in")
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/41.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white IMÁGENES COINCIDENTES - Al lado izquierdo se observa el texto "BRC", que está impreso parcialmente por anverso y reverso, y se complementa en su totalidad al observarlo al trasluz.

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__3_20" data-aos="zoom-in")
                .col-md-1
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/44.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white MARCAS DE AGUA - Al lado izquierdo del billete se descubre al trasluz el rostro del presidente, con efecto tridimensional, y el número "20".

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__4_20" data-aos="zoom-in")
                .col-md-1
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white  IMAGEN OCULTA (LATENTE - Al lado izquierdo del rostro, en la franja de tonalidades café y naranja, al observar el billete en posición casi horizontal desde la esquina inferior derecha a la altura de los ojos, se visualiza el texto "BRC".
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/42.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-3

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__5_20" data-aos="zoom-in")
                .col-md-1
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/45.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white Textos: "BANCO DE LA REPÚBLICA" y "COLOMBIA".

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__6_20" data-aos="zoom-in")
                .col-md-4
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/46.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white Nombre común y científico del fruto del ANÓN.

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__7_20" data-aos="zoom-in")
                .col-md-1
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white Franjas onduladas a los lados del rostro.
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/46-1.png" style="max-width:200px;" data-aos="fade-up")
                .col-md-3

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__8_20" data-aos="zoom-in")
                .col-md-4
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white En la franja de color naranja, ubicada a la derecha del rostro, se encuentran los textos "BANCO DE LA REPÚBLICA" y "BRC".
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/43.svg" style="max-width:200px;" data-aos="fade-up")

          div(v-if="reverso20")
            .img-infografica.color-secundario.mt-4(data-aos="zoom-in")
              .img-infografica__img
                figure
                  img.image__base.image_floating(src='@/assets/curso/tema3/47.svg' alt='')
              .img-infografica__content
                .img-infografica__item(style='top: 19%; left: 6%;' @click="mostrar_item1_20")
                  .img-infografica__item__dot.bullet_rojo
                  .img-infografica__item_raya.bullet_rojo(style="top: 15%;" v-if="item__1_20")
                .img-infografica__item(style='top: 79%; left: 39%;' @click="mostrar_item2_20")
                  .img-infografica__item__dot.bullet_amarillo
                  .img-infografica__item_raya.bullet_amarillo(style="top: 15%;" v-if="item__2_20")
                .img-infografica__item(style='top: 67%; left: 74%;' @click="mostrar_item3_20")
                  .img-infografica__item__dot.bullet_amarillo
                  .img-infografica__item_raya.bullet_amarillo(style="top: 15%;" v-if="item__3_20")
                .img-infografica__item(style='top: 28%; left: 39%;' @click="mostrar_item4_20")
                  .img-infografica__item__dot.bullet_verde
                  .img-infografica__item_raya.bullet_verde(style="top: 15%;" v-if="item__4_20")
                .img-infografica__item(style='top: 84%; left: 12%;' @click="mostrar_item5_20")
                  .img-infografica__item__dot.bullet_verde
                  .img-infografica__item_raya.bullet_verde(style="top: 15%;" v-if="item__5_20")
                .img-infografica__item(style='top: 17%; left: 90%;' @click="mostrar_item6_20")
                  .img-infografica__item__dot.bullet_verde
                  .img-infografica__item_raya.bullet_verde(style="top: 15%;" v-if="item__6_20")
                .img-infografica__item(style='top: 79%; left: 55%;' @click="mostrar_item7_20")
                  .img-infografica__item__dot.bullet_morado
                  .img-infografica__item_raya.bullet_morado(style="top: 15%;" v-if="item__7_20")
                .img-infografica__item(style='top: 21%; left: 83%;' @click="mostrar_item8_20")
                  .img-infografica__item__dot.bullet_morado
                  .img-infografica__item_raya.bullet_morado(style="top: 15%;" v-if="item__8_20")
               
            
            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__1_20" data-aos="zoom-in")
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/48.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white Textos "20 MIL PESOS" y "VEINTE MIL PESOS".

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__2_20" data-aos="zoom-in")
                .col-md-4
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/49.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white Los detalles junto a la banda de seguridad cambian.

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__3_20" data-aos="zoom-in")
                .col-md-3
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white Al mismo lado, al observar al trasluz, una orejera zenú impresa por el anverso se complementa con otra orejera, impresa por el reverso, para formar un sombrero vueltiao visto desde arriba.
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/50.svg" style="max-width:200px;" data-aos="fade-up")

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__4_20" data-aos="zoom-in")
                .col-md-4
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/51.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white CINTA DE SEGURIDAD - Al girar el billete, la parte derecha de la cinta de seguridad cambia de verde a violeta.

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__5_20" data-aos="zoom-in")
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/52.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white IMAGEN PRINCIPAL - En la esquina inferior izquierda sobresale el sombrero vueltiao, dando cumplimiento a la Ley 908 de 2004.

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__6_20" data-aos="zoom-in")
                .col-md-5
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white IMAGEN PRINCIPAL - En la esquina superior derecha se observa el logo del Banco de la República.
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/53.svg" style="max-width:200px;" data-aos="fade-up")

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__7_20" data-aos="zoom-in")
                .col-md-1
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white IMAGEN PRINCIPAL - Sistema hidráulico prehispánico de los zenúes. Diseño artístico inspirado en la ilustración de Nicolás Lozano
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/54.svg" style="max-width:200px;" data-aos="fade-up")

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__8_20" data-aos="zoom-in")
                .col-md-4
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white En la parte superior derecha está impreso en alto relieve el poema de Benjamín Puche Villadiego, alusivo al sombrero vueltiao.
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/55.svg" style="max-width:200px;" data-aos="fade-up")


          div.pt-5.pb-5(style="position:relative;background-color:white;z-index:1;" v-if="!reverso20")
            figure
              img.caja_escalada_hover(src="@/assets/curso/tema3/11.svg" style="max-width:150px;cursor:pointer;" @click="reverso20 = true")

          div.pt-5.pb-5(style="position:relative;background-color:white;z-index:1;" v-if="reverso20")
            figure
              img.caja_escalada_hover(src="@/assets/curso/tema3/14.svg" style="max-width:150px;cursor:pointer;" @click="reverso20 = false")

          div.pb-5(style="background-color: white;z-index: 2;position: relative;")
            a.anexo.mb-lg-0.col-md-6(href="https://youtu.be/xaRTmgXddro " target="_blank" data-aos="fade-up")
              .anexo__icono
                img(src="@/assets/curso/tema3/12.svg")
              .anexo__texto
                p(style="color: #111E61;") Consulte el video educativo "Cinco pasos para reconocer el billete de 20 mil pesos"

      .col-md-4.mb-3
        figure
          img.image_floating.image__modal(src="@/assets/curso/tema3/56.svg" @click="modal4 = true" data-aos="zoom-in" @mouseover="mostrarIndicador = false")
        .indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal4")
          .p-5.caja_flotante(style="background-color:#F2E8E8;")
            h3 Billete de diez mil pesos
            p.mt-2 A partir del miércoles 07 de diciembre de 2016 el Banco de la República introdujo al mercado el nuevo billete de $10 mil, el sexto y último de la nueva familia. La antropóloga Virginia Gutiérrez, junto con la región amazónica, la flor de la Victoria regia y la rana arborícola son la imagen del nuevo billete.

            .row.mt-5
              .col-md-3(style="display:inline-flex;")
                p.bullet(style="background-color:#B01A29;")
                h4.mt-1 &nbsp;&nbsp;&nbsp;&nbsp;Tocar
              .col-md-3(style="display:inline-flex;")
                p.bullet(style="background-color:#E8A817;")
                h4.mt-1 &nbsp;&nbsp;&nbsp;&nbsp;Observar
              .col-md-3(style="display:inline-flex;")
                p.bullet(style="background-color:#4A762E;")
                h4.mt-1 &nbsp;&nbsp;&nbsp;&nbsp;Girar
              .col-md-3(style="display:inline-flex;")
                p.bullet(style="background-color:#642A95;")
                h4.mt-1 &nbsp;&nbsp;&nbsp;&nbsp;Comprobar 

          div(v-if="!reverso10")
            .img-infografica.color-secundario.mt-4(data-aos="zoom-in")
              .img-infografica__img
                figure
                  img.image__base.image_floating(src='@/assets/curso/tema3/56.svg' alt='')
              .img-infografica__content
                .img-infografica__item(style='top: 18%; left: 6%;' @click="mostrar_item1_10")
                  .img-infografica__item__dot.bullet_rojo
                  .img-infografica__item_raya.bullet_rojo(style="top: 15%;" v-if="item__1_10")
                .img-infografica__item(style='top: 18%; left: 90%;' @click="mostrar_item2_10")
                  .img-infografica__item__dot.bullet_rojo
                  .img-infografica__item_raya.bullet_rojo(style="top: 15%;" v-if="item__2_10")
                .img-infografica__item(style='top: 84%; left: 6%;' @click="mostrar_item3_10")
                  .img-infografica__item__dot.bullet_rojo
                  .img-infografica__item_raya.bullet_rojo(style="top: 15%;" v-if="item__3_10")
                .img-infografica__item(style='top: 32%; left: 5%;' @click="mostrar_item4_10")
                  .img-infografica__item__dot.bullet_amarillo
                  .img-infografica__item_raya.bullet_amarillo(style="top: 15%;" v-if="item__4_10")
                .img-infografica__item(style='top: 48%; left: 19%;' @click="mostrar_item5_10")
                  .img-infografica__item__dot.bullet_amarillo
                  .img-infografica__item_raya.bullet_amarillo(style="top: 15%;" v-if="item__5_10")
                .img-infografica__item(style='top: 69%; left: 30%;' @click="mostrar_item6_10")
                  .img-infografica__item__dot.bullet_amarillo
                  .img-infografica__item_raya.bullet_amarillo(style="top: 15%;" v-if="item__6_10")
                .img-infografica__item(style='top: 44%; left: 30%;' @click="mostrar_item7_10")
                  .img-infografica__item__dot.bullet_verde
                  .img-infografica__item_raya.bullet_verde(style="top: 15%;" v-if="item__7_10")
                .img-infografica__item(style='top: 34%; left: 61%;' @click="mostrar_item8_10")
                  .img-infografica__item__dot.bullet_verde
                  .img-infografica__item_raya.bullet_verde(style="top: 15%;" v-if="item__8_10")
                .img-infografica__item(style='top: 36%; left: 40%;' @click="mostrar_item9_10")
                  .img-infografica__item__dot.bullet_morado
                  .img-infografica__item_raya.bullet_morado(style="top: 15%;" v-if="item__9_10")
            
            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__1_10" data-aos="zoom-in")
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/57.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white Texto "10 MIL PESOS", en la esquina superior izquierda.

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__2_10" data-aos="zoom-in")
                .col-md-5
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white Franjas que incorporan figuras geométricas a los lados del rostro.
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/58.svg" style="max-width:200px;" data-aos="fade-up")

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__3_10" data-aos="zoom-in")
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/59.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white Firmas del gerente general y del gerente ejecutivo.

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__4_10" data-aos="zoom-in")
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/60.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white IMÁGENES COINCIDENTES - Al lado izquierdo se observa el texto "BRC", que está impreso parcialmente por anverso y reverso, y se complementa en su totalidad al observarlo al trasluz.

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__5_10" data-aos="zoom-in")
                .col-md-2
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/61.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white MARCAS DE AGUA - Al lado izquierdo del billete se descubren al trasluz el rostro de la antropóloga, con efecto tridimensional, y el número "10".

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__6_10" data-aos="zoom-in")
                .col-md-2
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/62.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white IMÁGENES COINCIDENTES - Al mismo lado, al observar al trasluz, la imagen de la flor de la Victoria regia impresa por el anverso se complementa con otra flor de la Victoria regia, impresa por el reverso.

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__7_10" data-aos="zoom-in")
                .col-md-2
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/63.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white IMAGEN CON CAMBIO DE COLOR - La Victoria regia y la rana arborícola están impresas en tinta de color cobre y, al girar el billete, la rana cambia a color verde.

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__8_10" data-aos="zoom-in")
                .col-md-1
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white IMAGEN OCULTA (LATENTE) - Al lado izquierdo del rostro, en la franja de color rojo, al observar el billete en posición casi horizontal desde la esquina inferior derecha a la altura de los ojos, se visualiza el texto "BRC".
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/64.svg" style="max-width:200px;" data-aos="fade-up")

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__9_10" data-aos="zoom-in")
                .col-md-4
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/65.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white Dos líneas verticales, una verde a la izquierda del personaje de pie y otra violeta a la derecha del rostro, con el texto "BANCO DE LA REPÚBLICA".

          div(v-if="reverso10")
            .img-infografica.color-secundario.mt-4(data-aos="zoom-in")
              .img-infografica__img
                figure
                  img.image__base.image_floating(src='@/assets/curso/tema3/66.svg' alt='')
              .img-infografica__content
                .img-infografica__item(style='top: 22%; left: 39%;' @click="mostrar_item1_10")
                  .img-infografica__item__dot.bullet_amarillo
                  .img-infografica__item_raya.bullet_amarillo(style="top: 15%;" v-if="item__1_10")
                .img-infografica__item(style='top: 68%; left: 69%;' @click="mostrar_item2_10")
                  .img-infografica__item__dot.bullet_amarillo
                  .img-infografica__item_raya.bullet_amarillo(style="top: 15%;" v-if="item__2_10")
                .img-infografica__item(style='top: 52%; left: 39%;' @click="mostrar_item3_10")
                  .img-infografica__item__dot.bullet_verde
                  .img-infografica__item_raya.bullet_verde(style="top: 15%;" v-if="item__3_10")
                .img-infografica__item(style='top: 89%; left: 28%;' @click="mostrar_item4_10")
                  .img-infografica__item__dot.bullet_morado
                  .img-infografica__item_raya.bullet_morado(style="top: 15%;" v-if="item__4_10")
                .img-infografica__item(style='top: 17%; left: 77%;' @click="mostrar_item5_10")
                  .img-infografica__item__dot.bullet_morado
                  .img-infografica__item_raya.bullet_morado(style="top: 15%;" v-if="item__5_10")
            
            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__1_10" data-aos="zoom-in")
                .col-md-4
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/67.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white CINTA DE SEGURIDAD - Cinta de seguridad introducida en el papel, que incluye el texto "BRC" y la silueta de la flor de la Victoria regia, al observarla al trasluz.

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__2_10" data-aos="zoom-in")
                .col-md-2
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white IMÁGENES COINCIDENTES - Al mismo lado, al observar al trasluz, la flor de la Victoria regia por el reverso se complementa con otra flor de la Victoria regia, impresa por el anverso.
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/68.svg" style="max-width:200px;" data-aos="fade-up")

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__3_10" data-aos="zoom-in")
                .col-md-4
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/69.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white CINTA DE SEGURIDAD - Al girar el billete, la cinta de seguridad cambia de color verde a fucsia.

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__4_10" data-aos="zoom-in")
                .col-md-2
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/70.svg" style="max-width:200px;" data-aos="fade-up")
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white Se puede leer el texto "BRC" en una de las ondas del río debajo de la canoa.

            div(style="position:relative;z-index:2;background-color:white;")
              .mt-5.row.content__info_billete(v-if="item__5_10" data-aos="zoom-in")
                .col-md-3
                .col-md-5(style="place-self:center;")
                  .p-3(style="background-color:#FF9800;border-radius:8px;" data-aos="fade-up")
                    p.mb-0.text-white En la parte superior derecha están impresos fragmentos de la dedicatoria de uno de los libros más representativos de Virginia Gutiérrez: Familia y cultura en Colombia.
                .col-md-2
                  figure
                    img.image_floating(src="@/assets/curso/tema3/71.svg" style="max-width:200px;" data-aos="fade-up")


          div.pt-5.pb-5(style="position:relative;background-color:white;z-index:1;" v-if="!reverso10")
            figure
              img.caja_escalada_hover(src="@/assets/curso/tema3/11.svg" style="max-width:150px;cursor:pointer;" @click="reverso10 = true")

          div.pt-5.pb-5(style="position:relative;background-color:white;z-index:1;" v-if="reverso10")
            figure
              img.caja_escalada_hover(src="@/assets/curso/tema3/14.svg" style="max-width:150px;cursor:pointer;" @click="reverso10 = false")

          div.pb-5(style="background-color: white;z-index: 2;position: relative;")
            a.anexo.mb-lg-0.col-md-6(href="https://youtu.be/3KKEPDkmMZI" target="_blank" data-aos="fade-up")
              .anexo__icono
                img(src="@/assets/curso/tema3/12.svg")
              .anexo__texto
                p(style="color: #111E61;") Consulte el video educativo "Cinco pasos para reconocer el billete de 10 mil pesos"

      .col-md-4.mb-3
        figure
          img.image_floating.image__modal(src="@/assets/curso/tema3/72.svg" @click="modal5 = true" data-aos="zoom-in" @mouseover="mostrarIndicador = false")
        .indicador--click(v-if="mostrarIndicador")
      .col-md-4.mb-3
        figure
          img.image_floating.image__modal(src="@/assets/curso/tema3/73.svg" @click="modal5_1 = true" data-aos="zoom-in" @mouseover="mostrarIndicador = false")
        .indicador--click(v-if="mostrarIndicador")
      .col-md-4.mb-3.m-auto
        figure
          img.image_floating.image__modal(src="@/assets/curso/tema3/74.svg" @click="modal5_2 = true" data-aos="zoom-in" @mouseover="mostrarIndicador = false")
        .indicador--click(v-if="mostrarIndicador")

        ModalA(:abrir-modal.sync="modal5")
          h3 Billetes denominaciones menores

          .row.mt-5
            .col-md-6
              figure
                img.image_floating(src="@/assets/curso/tema3/72.svg")
            .col-md-6
              h4 Billete de cinco mil pesos
              p.mt-3 Desde del 9 de noviembre de 2016, empezó a circular el billete de 5 mil pesos. El poeta José Asunción Silva, los páramos colombianos, una planta de puya y un abejorro son la imagen del nuevo billete.
              a.anexo.mb-lg-0.mt-4(href="https://www.youtube.com/watch?v=fop771ZJ5CM" target="_blank")
                .anexo__icono
                  img(src="@/assets/curso/tema3/12.svg")
                .anexo__texto
                  p(style="color: #111E61;") Consulte el video educativo “Cinco pasos para reconocer el billete de 5 mil pesos” 

        ModalA(:abrir-modal.sync="modal5_1")
          h3 Billetes denominaciones menores
          .row.mt-5
            .col-md-6
              figure
                img.image_floating(src="@/assets/curso/tema3/73.svg")
            .col-md-6
              h4 Billete de dos mil pesos
              p.mt-3 Desde del 29 de noviembre de 2016, empezó a circular el billete de 2 mil pesos, el quinto de la nueva familia. La artista Débora Arango, caño Cristales (el río de los cinco colores), las hojas y el fruto del árbol lechoso y la representación gráfica del pájaro de la obra Las monjas y el cardenal son la imagen del nuevo billete. Este circulará simultáneamente con el billete actual. 
              a.anexo.mb-lg-0.mt-4(href="https://www.youtube.com/watch?v=EGhj45-hToM" target="_blank")
                .anexo__icono
                  img(src="@/assets/curso/tema3/12.svg")
                .anexo__texto
                  p(style="color: #111E61;") Consulte el video educativo “Cinco pasos para reconocer el billete de 2 mil pesos” 

        ModalA(:abrir-modal.sync="modal5_2")
          h3 Billetes denominaciones menores
          .row.mt-5
            .col-md-6
              figure
                img.image_floating(src="@/assets/curso/tema3/74.svg")
            .col-md-6
              h4 Billete de mil pesos
              p.mt-3 Este billete es una edición conmemorativa de Jorge Eliécer Gaitán, que salió a circulación el 17 de noviembre de 2006. Este billete tiene fecha de edición 1° de noviembre de 2005. Estos billetes tienen el mismo diseño e idénticas características generales y dispositivos de seguridad mencionados en otras denominaciones.
    br
    .row.mt-5
      .col-md-6(style="place-self:center")
        h3(data-aos="fade-up") Monedas colombianas
        p.mt-3(data-aos="fade-up") Las nuevas monedas colombianas siguen la tendencia de resaltar el concepto de biodiversidad presentado en la familia de billetes, exaltando la riqueza natural de Colombia.

      .col-md-6
        figure
          img(data-aos="fade-left" src="@/assets/curso/tema3/75.svg")

    .row.mt-3
      .col-md-3.mb-3
        figure.indicador__container
          img.caja_escalada_hover(src="@/assets/curso/tema3/76.svg" style="cursor:pointer;" @mouseover="mostrarIndicador2 = false" @click="modal6 = true")
        .indicador--click(v-if="mostrarIndicador2")
        .p-3.caja_flotante(style="background-color:#FF9800" data-aos="fade-up")
          h4.text-center Moneda de mil pesos #[br] ($1000)

        ModalA(:abrir-modal.sync="modal6")
          .p-5.caja_flotante_azul(style="background-color:#E8EFE0")
            h3 Moneda de mil pesos ($1000) 
            p.mt-2 El diseño de la moneda, a cargo del artista colombiano José Antonio Suárez, presenta unas líneas onduladas continuas en diversos niveles que representan ondas de agua, ubicadas desde el centro hacia la circunferencia exterior de la moneda con un fondo de líneas rectas finas en sentido radial y una leyenda sobre una franja circular con la palabra AGUA repetida siete veces en forma consecutiva e invertida cada una respecto de la anterior. Así mismo, muestra a la tortuga entrando a las ondas del agua, e incluye el nombre común y científico de esta especie.

          .row.mt-5
            .col-md-6.mb-3
              figure.text-center
                img(src="@/assets/curso/tema3/76.svg" style="max-width:300px;display:inline;")
              h4.mt-4 Anverso (cara)
              p.mt-3 Una tortuga caguama, especie marina altamente migratoria, es la imagen en el anverso (cara) de la nueva moneda bimetálica de $1.000, denominación que está en manos de los colombianos desde el segundo semestre de 2012.
            .col-md-6.mb-3
              figure.text-center
                img(src="@/assets/curso/tema3/82.svg" style="max-width:300px;display:inline;")
              h4.mt-4 Reverso (sello)
              p.mt-3 Ocupando la mitad inferior de la moneda, se pueden apreciar líneas onduladas continuas en sentido horizontal sobre un fondo de líneas rectas con la leyenda CUIDAR EL AGUA repetida cuatro veces en forma consecutiva e invertida cada una respecto de la anterior. Ocupando la mitad superior de la moneda se observa la denominación de la especie monetaria, el número 1000, y debajo de éste la palabra PESOS. También incluye el texto REPÚBLICA DE COLOMBIA, el año de emisión y una imagen latente que genera un efecto visual dependiendo del ángulo en que se aprecie. En una posición de la moneda se puede leer la palabra MIL, que cambia a BRC (iniciales del Banco de la República de Colombia) al cambiar el ángulo desde el cual se observa la moneda (Banco de la República, 2021).

          a.anexo.mb-lg-0.mt-4.col-md-6(:href="obtenerLink('downloads/Anexo_1_Moneda_de_1000_antigua.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/curso/tema3/12.svg")
            .anexo__texto
              p(style="color: #111E61;") Anexo Moneda de 1.000 pesos Antigua

      .col-md-3.mb-3
        figure
          img.caja_escalada_hover(src="@/assets/curso/tema3/77.svg" style="cursor:pointer;" @mouseover="mostrarIndicador2 = false" @click="modal7 = true")
        .indicador--click(v-if="mostrarIndicador2")
        .p-3.caja_flotante(style="background-color:#FF9800" data-aos="fade-up")
          h4.text-center Moneda de quinientos pesos #[br] ($500)

        ModalA(:abrir-modal.sync="modal7")
          .p-5.caja_flotante_azul(style="background-color:#E8EFE0")
            h3 Moneda de quinientos pesos ($500) 
            p.mt-2 El diseño de la moneda, a cargo de la artista colombiana Johana Calle, incluye, además, el nombre común y científico de esta especie y unas líneas onduladas finas, que simulan agua en movimiento y que atraviesan en el costado inferior derecho parte de la corona y parte del núcleo de la especie monetaria.

          .row.mt-5
            .col-md-6.mb-3
              figure.text-center
                img(src="@/assets/curso/tema3/77.svg" style="max-width:300px;display:inline;")
              h4.mt-4 Anverso (cara)
              p.mt-3 Una rana de cristal, habitante del piedemonte y las estribaciones de los Andes (una de las zonas de mayor riqueza biológica de Colombia), será la imagen ubicada en el anverso (cara) de la nueva moneda bimetálica de $500 que el Banco de la República puso en circulación a partir del segundo semestre de 2012.
            .col-md-6.mb-3
              figure.text-center
                img(src="@/assets/curso/tema3/83.svg" style="max-width:300px;display:inline;")
              h4.mt-4 Reverso (sello)
              p.mt-3 En el reverso (sello) se observan la palabra REPÚBLICA DE COLOMBIA, la denominación de la moneda, el número 500, debajo de la cual está la palabra PESOS y el año de emisión, que se encuentra en la parte inferior del núcleo. La corona presenta líneas onduladas que aluden al agua en movimiento.

          a.anexo.mb-lg-0.mt-4.col-md-6(:href="obtenerLink('downloads/Anexo_2_Moneda_de_500_antigua.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/curso/tema3/12.svg")
            .anexo__texto
              p(style="color: #111E61;") Anexo Moneda de 500 pesos Antigua

      .col-md-3.mb-3
        figure
          img.caja_escalada_hover(src="@/assets/curso/tema3/78.svg" style="cursor:pointer;" @mouseover="mostrarIndicador2 = false" @click="modal8 = true")
        .indicador--click(v-if="mostrarIndicador2")
        .p-3.caja_flotante(style="background-color:#FF9800" data-aos="fade-up")
          h4.text-center Moneda de doscientos pesos #[br] ($200)

        ModalA(:abrir-modal.sync="modal8")
          .p-5.caja_flotante_azul(style="background-color:#E8EFE0")
            h3 Moneda de doscientos pesos ($200) 
            p.mt-2 El diseño de la moneda fue encargado al artista José Antonio Suárez, presenta en números arábigos el valor 200, debajo del cual aparece la unidad monetaria PESOS, el texto REPÚBLICA DE COLOMBIA y el año de emisión. Adicionalmente, el contorno presenta ondas en alto relieve que aluden al movimiento del agua, reiterando el interés del Emisor por la promoción y protección de nuestros recursos naturales. 

          .row.mt-5
            .col-md-6.mb-3
              figure.text-center
                img(src="@/assets/curso/tema3/78.svg" style="max-width:300px;display:inline;")
              h4.mt-4 Anverso (cara)
              p.mt-3 La guacamaya bandera es uno de los representantes de la biodiversidad colombiana, está presente en el anverso (cara) de las nuevas monedas de $200, que el Banco de la República puso en circulación a partir del segundo semestre de 2012. 
            .col-md-6.mb-3
              figure.text-center
                img(src="@/assets/curso/tema3/84.svg" style="max-width:300px;display:inline;")
              h4.mt-4 Reverso (sello)
              p.mt-3 Integrada por sucesión de puntos en alto relieve y muy definidos, formando un círculo paralelo al marco, líneas en alto relieve con forma de ondas, cuyo conjunto forma un círculo. el texto “REPÚBLICA DE COLOMBIA” y año de emisión en alto relieve. Al principio y al final del texto hay un punto en alto relieve.

          a.anexo.mb-lg-0.mt-4.col-md-6(:href="obtenerLink('downloads/Anexo_3_Moneda_de_200_antigua.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/curso/tema3/12.svg")
            .anexo__texto
              p(style="color: #111E61;") Anexo Moneda de 200 pesos Antigua

      .col-md-3.mb-3
        figure
          img.caja_escalada_hover(src="@/assets/curso/tema3/79.svg" style="cursor:pointer;" @mouseover="mostrarIndicador2 = false" @click="modal9 = true")
        .indicador--click(v-if="mostrarIndicador2")
        .p-3.caja_flotante(style="background-color:#FF9800" data-aos="fade-up")
          h4.text-center Moneda de cien pesos #[br] ($100)

        ModalA(:abrir-modal.sync="modal9")
          .p-5.caja_flotante_azul(style="background-color:#E8EFE0")
            h3 Moneda de cien pesos ($100) 
            p.mt-2 El frailejón (#[strong Espeletia grandiflora]), es la especie de la biodiversidad colombiana, que está presente en el anverso (cara) de las nuevas monedas de $100, que el Banco de la República puso en circulación a partir del segundo semestre de 2012. Esta especie característica de los páramos sudamericanos solo está presente en la cordillera de los Andes de Venezuela, Colombia y Ecuador. De las ocho especies que se conocen, cinco se encuentran en la Cordillera Oriental de Colombia. Esta moneda fue diseñada (anverso) por la artista Johana Calle y el reverso por José Antonio Suárez.

          .row.mt-5
            .col-md-6.mb-3
              figure.text-center
                img(src="@/assets/curso/tema3/79.svg" style="max-width:300px;display:inline;")
              h4.mt-4 Anverso (cara)
              p.mt-3 Texto: “FRAILEJÓN” y en microtexto “Espeletia grandiflora” en alto relieve, ubicados en el semicírculo superior. #[br] Imagen del frailejón: ubicada en el centro de la moneda, elaborada con volumen y detalles finos en su diseño, con relieves y alta definición. #[br] Diseños finos: líneas horizontales finas en alto relieve en la parte inferior izquierda, cuya distancia se va ampliando en la parte derecha 
            .col-md-6.mb-3
              figure.text-center
                img(src="@/assets/curso/tema3/85.svg" style="max-width:300px;display:inline;")
              h4.mt-4 Reverso (sello)
              p.mt-3  Textos circunscritos: el texto “REPÚBLICA DE COLOMBIA” y año de emisión en alto relieve. Al comienzo y al final del texto hay un punto en alto relieve. #[br] Denominación: los textos “100” y “PESOS” en alto relieve. Antes y después de esta última palabra hay un punto en alto relieve. #[br] Zona lisa: como fondo de la moneda, plana y brillante.

          a.anexo.mb-lg-0.mt-4.col-md-6(:href="obtenerLink('downloads/Anexo_4_Moneda_de_100_antigua.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/curso/tema3/12.svg")
            .anexo__texto
              p(style="color: #111E61;") Anexo Moneda de cien pesos Antigua

    .row.col-md-6.m-auto
      .col-md-6.mb-3
        figure
          img.caja_escalada_hover(src="@/assets/curso/tema3/80.svg" style="cursor:pointer;" @mouseover="mostrarIndicador2 = false" @click="modal10 = true")
        .indicador--click(v-if="mostrarIndicador2")
        .p-3.caja_flotante(style="background-color:#FF9800" data-aos="fade-up")
          h4.text-center Moneda de cincuenta pesos #[br] ($50)

        ModalA(:abrir-modal.sync="modal10")
          .p-5.caja_flotante_azul(style="background-color:#E8EFE0")
            h3 Moneda de cincuenta pesos ($50) 

          .row.mt-5
            .col-md-6.mb-3
              figure.text-center
                img(src="@/assets/curso/tema3/80.svg" style="max-width:300px;display:inline;")
              h4.mt-4 Anverso (cara)
              p.mt-3 El oso de anteojos (#[strong Tremarctos ornatus]), es la especie que aparece en la moneda de cincuenta pesos, esta moneda al igual que las de 200 y 100 está en circulación desde segundo semestre de 2012. El oso de anteojos, también conocido como oso andino o suramericano, habita exclusivamente en los bosques húmedos andinos que cuentan con precipitaciones anuales superiores a los 1.000 mm (zonas perhúmedas), aunque también se le encuentra en páramos y zonas semiáridas cuyas precipitaciones rondan los 250 mm anuales.
            .col-md-6.mb-3
              figure.text-center
                img.mt-3(src="@/assets/curso/tema3/86.svg" style="max-width:300px;display:inline;")
              h4.mt-4 Reverso (sello)
              p.mt-3 Las características de diseño de esta moneda son el grabado en el anverso del escudo de armas de Colombia rodeado por la leyenda “REPÚBLICA DE COLOMBIA” y el año de emisión al pie. 

      .col-md-6.mb-3
        figure
          img.caja_escalada_hover(src="@/assets/curso/tema3/81.svg" style="cursor:pointer;" @mouseover="mostrarIndicador2 = false" @click="modal11 = true")
        .indicador--click(v-if="mostrarIndicador2")
        .p-3.caja_flotante(style="background-color:#FF9800" data-aos="fade-up")
          h4.text-center Denominaciones #[br] menores

        ModalA(:abrir-modal.sync="modal11")
          .p-5.caja_flotante_azul(style="background-color:#E8EFE0")
            h3 Denominaciones menores

          .row
            .col-md-6.m-auto
              figure.text-center
                img(src="@/assets/curso/tema3/81.svg" style="max-width:300px;display:inline;")
              p.mt-3 Existen adicionalmente en circulación monedas de veinte ($20), diez ($10) y cinco ($5) pesos.

    h3.mt-5(data-aos="fade-up") Políticas de manejo
    
    p.mt-4(data-aos="fade-up") En la mayoría de los hoteles, hostales, vivienda turística y demás establecimientos de alojamiento, el manejo del efectivo en moneda nacional es responsabilidad del recepcionista y/o cajero, por lo tanto, es la única persona autorizada para recibir dinero y registrarlo en los movimientos del día, información que da origen a los reportes y cierre de caja. En la caja de recepción debe tenerse dispuesto un cajón, una caja con llave, una caja fuerte o cualquier otro elemento que garantice la custodia de los valores.

    p.mt-3(data-aos="fade-up") Siempre que la base o la caja general se afecten por pagos realizados, disminuyendo el efectivo reportado en el movimiento diario, debe contarse junto con el respectivo soporte y la autorización del jefe de recepción, gerente de turno o quien haga sus veces en la estructura organizacional.

    p.mt-3(data-aos="fade-up") Todo ingreso que se reciba en la caja invariablemente debe tener su respectivo soporte y el correspondiente asiento, ya sea emitido manualmente o generado por el sistema PMS. El personal responsable de manejo de efectivo debe estar capacitado para ello y tener las precauciones del caso, por ello la información consignada en los numerales anteriores, es vital para su trabajo diario.

    br
    br
    .titulo-segundo
      h2#t_3_2 3.2 Divisas

    .row
      .col-md-7.mb-3
        p(data-aos="fade-up") Se entienden estas como la moneda extranjera que se maneja en el comercio internacional. Como es lógico, cada país cuenta con su propia moneda, por tanto, sería demasiado extenso explicar cada una de ellas, por lo que aquí se hará énfasis en las que comúnmente se aceptan en los hoteles como pago o garantía y que por lo general son dólares y euros, las cuales son las monedas oficiales de Estados Unidos de América y de la Unión Europea, respectivamente.
      .col-md-5
        figure.text-center
          img.image_floating(src="@/assets/curso/tema3/87.svg" data-aos="fade-left" style="display:inline;max-width:200px")

    h3.mt-5(data-aos="fade-up") Dólares
    p.mt-3(data-aos="fade-up") La Junta de la Reserva Federal de los EE. UU. emite billetes de USD 1, USD 2, USD 5, USD 10, USD 20, USD 0 y USD 100. El Gobierno de los EE. UU. rediseña periódicamente los billetes de la Reserva Federal para que sean más fáciles de usar, pero más difíciles de falsificar. El estilo actual de billetes se muestra a continuación:

    .col-md-6.m-auto
      h4.mt-5.text-center(data-aos="fade-up") Elementos de seguridad de billetes

      p.mt-3.text-center Para verificar la autenticidad de los dólares estadounidenses, #[strong TOQUE, INCLINE, MIRE]. Toque el papel, incline el billete y mire a contraluz y con ampliación.

    .col-md-8.m-auto.mt-4
      figure.text-center
          img.image_floating(src="@/assets/curso/tema3/88.svg" data-aos="zoom-in")

    .row.mt-4
      .col-md-2.mb-4
        .p-4.text-center.caja__activa.caja__interactiva.caja_escalada_hover(style="background-color:#FF9800;position:relative;cursor:pointer;" @click="setInfoDolar('Toque el papel:','pase sus dedos por el billete. Deberá sentir que es algo áspero al tacto como resultado del proceso de impresión intaglio y la composición única del papel. El papel de la moneda de los EE. UU. es una mezcla de 75 por ciento de algodón y 25 por ciento de lino.')")
          h5.mb-0 Toque el papel
      .col-md-2.mb-4
        .p-4.text-center.caja__interactiva.caja_escalada_hover(style="background-color:#FF9800;position:relative;cursor:pointer;" @click="setInfoDolar('Incline el billete:','tinta que cambia de color. Incline el billete para ver cómo la tinta de los números en la esquina inferior derecha cambia de cobre a verde en las denominaciones de $10 en adelante. La campana en el tintero del billete de USD 100 también cambia de cobre a verde.')")
          h5.mb-0 Incline el billete
      .col-md-2.mb-4
        .p-4.text-center.caja__interactiva.caja_escalada_hover(style="background-color:#FF9800;position:relative;cursor:pointer;" @click="setInfoDolar('Mire a contraluz:','hilo de seguridad. Sostenga el billete a contraluz para ver un hilo de seguridad incrustado verticalmente en las denominaciones de USD 5 en adelante. El hilo está incrustado en una posición diferente en cada denominación y se ilumina de un color diferente cuando se sostiene ante la luz ultravioleta (UV). El hilo de seguridad es visible desde ambos lados del billete.')")
          h5.mb-0 Mire a contraluz
      .col-md-2.mb-4
        .p-4.text-center.caja__interactiva.caja_escalada_hover(style="background-color:#FF9800;position:relative;cursor:pointer;" @click="setInfoDolar('Marca de agua','sostenga el billete a contraluz para ver una imagen tenue a la derecha del retrato en las denominaciones de USD 5 en adelante. Las marcas de agua son visibles desde ambos lados del billete. En las denominaciones de USD 10 en adelante, la marca de agua coincide con el retrato. El billete de USD 5 de estilo actual tiene dos marcas de agua y ambas son del número 5.')")
          h5.mb-0 Marca de agua
      .col-md-4
        .p-4.text-center.caja__interactiva.caja_escalada_hover(style="background-color:#FF9800;position:relative;cursor:pointer;" @click="setInfoDolar('Banda de seguridad en 3-D:','el billete de USD 100 presenta una banda de seguridad en 3-D de color azul con imágenes de campanas y números 100. Cuando inclina el billete hacia adelante y atrás, las campanas y los números 100 de la banda se mueven de un lado a otro. Si inclina el billete de un lado a otro, las campanas y los números 100 se mueven hacia arriba y abajo. La banda de seguridad en 3-D está tejida en el papel, no impresa.')")
          h5.mb-0 Banda de seguridad en 3-D 

    .mt-5.p-5.caja_flotante(style="background-color:#FFF1DB" data-aos="fade-up")
      p #[strong(v-html="title_dolar")] #[span(v-html="text_dolar")]

    h4.mt-5.text-center(data-aos="fade-up") Mire con ampliación

    p.mt-4(data-aos="fade-up") #[strong.h5 Microimpresión:] la microimpresión puede ayudar en la autenticación y se ofrece en varios lugares en las denominaciones de $5 en adelante. Estas pequeñas palabras impresas deben ser claras, aunque pueden requerir la ampliación para poder verse. La microimpresión o corresponde a la denominación o contiene frases como “#[em THE UNITED STATES OF AMERICA]”, “#[em USA]” o “#[em E PLURIBUS UNUM].”

    p.mt-4(data-aos="fade-up") #[strong.h5 Fibras rojas y azules:] el papel de la moneda de los EE. UU. tiene pequeñas fibras de seguridad de color rojo y azul que están incrustadas por todo el billete.

    .tarjeta.text-white.p-3.mt-5.col-md-10.m-auto(data-aos="zoom-in" style="background: linear-gradient(#ff9800, rgb(255 221 172))")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2.text-center
          img.image_floating(src="@/assets/curso/tema3/89.svg" style="max-width:100px;display:inline;")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mt-3(data-aos="fade-up" style="color: #12263F !important;") Elementos de seguridad en dólares.
              p.mt-3(style="color: #12263F !important;") Para obtener mayor información sobre los elementos de seguridad de los billetes y monedas estadounidenses consulte el siguiente documento 
            .col-sm-auto
              a.boton.boton--b.color-acento-botones(:href="obtenerLink('downloads/Anexo_5_CEP_Dollars_In_Detail_Brochure.pdf')" target="_blank")
                span Descargar
                i.fas.fa-download

    h3.mt-5(data-aos="fade-up") Euros

    p.mt-3(data-aos="fade-up") En Europa la emisión de moneda es diferente ya que la gran mayoría de los países de este continente están asociados a la Unión Europea (UE), desde 1993, que es una comunidad política de derecho constituida en régimen de organización internacional nacida para propiciar y acoger la integración y gobernanza en común de los Estados y los pueblos de Europa. Una de las consecuencias de esta unión es que en los veintisiete (27) países miembros se usa una sola moneda, el “Euro” que es expedido por el Banco Central Europeo.

    p.mt-3(data-aos="fade-up") Los billetes y las monedas en euros son el único medio de pago de curso legal en los países de la zona del euro, desde el 1 de enero de 2002, siete son las denominaciones de los billetes de curso legal de la zona del euro: 5 €, 10 €, 20 €, 50 €, 100 €, 200 € y 500 €. Los billetes, que plasman los estilos arquitectónicos representativos de siete épocas de la historia cultural europea, son idénticos para todos los países que han adoptado el euro como moneda única.

    p.mt-3(data-aos="fade-up") En el año 2013 comenzó la puesta en circulación de billetes de la serie Europa, con la emisión del billete de 5 € y continuó en 2014, 2015 y 2017 con la emisión de los billetes de 10 €, 20 € y 50 €, respectivamente. El 28 de mayo de 2019 entraron en circulación los nuevos billetes de 100 € y de 200 €, dándose por finalizada la emisión de los billetes de la serie Europa, ya que esta segunda serie no incluye billetes de 500 €. La denominada serie Europa presenta un nuevo diseño y mejoras en la seguridad (Banco de España, 2021).

    .col-md-9.m-auto
      h4.mt-5.text-center(data-aos="fade-up") Elementos de seguridad de billetes - Euros

      p.mt-3.text-center Los billetes de euros incorporan medidas de seguridad muy avanzadas para facilitar el reconocimiento de los billetes legítimos, lo que, por contraste, ayudará a detectar los ejemplares falsos con solo prestarles un mínimo de atención.

    .col-md-8.m-auto.mt-4
      figure.text-center
          img.image_floating(src="@/assets/curso/tema3/90.svg" data-aos="zoom-in")

    .row.mt-4.col-md-8.m-auto
      .col-md-4.mb-4
        .p-4.text-center.caja__activa.caja__interactiva.caja_escalada_hover(style="background-color:#FF9800;position:relative;cursor:pointer;" @click="setInfoEuro('Toque el papel:','los billetes en euros se imprimen en un papel hecho a base de fibras de algodón que les confiere una textura característica. Varias zonas del anverso están impresas en relieve y pueden identificarse al tacto. En general los billetes tienen una sensación al tacto inconfundible y una textura firme y resistente, que suele sentirse más gruesa en algunas partes del billete.')")
          h5.mb-0 Toque el papel 
      .col-md-4.mb-4
        .p-4.text-center.caja__activa.caja__interactiva.caja_escalada_hover(style="background-color:#FF9800;position:relative;cursor:pointer;" @click="setInfoEuro('Mire:','mirando al trasluz se hacen visibles la marca de agua, el hilo de seguridad y el valor según la denominación. En los billetes de 20 €, 50 €, 100 € y 200 € también se aprecia la ventana con retrato.')")
          h5.mb-0 Mire
      .col-md-4.mb-4
        .p-4.text-center.caja__activa.caja__interactiva.caja_escalada_hover(style="background-color:#FF9800;position:relative;cursor:pointer;" @click="setInfoEuro('Gire:','la banda plateada muestra un retrato de Europa en una ventana transparente y el número verde esmeralda produce un reflejo metálico que se desplaza verticalmente.')")
          h5.mb-0 Gire

    .mt-5.p-5.caja_flotante(style="background-color:#FFF1DB" data-aos="fade-up")
      p #[strong(v-html="title_euro")] #[span(v-html="text_euro")]

    .tarjeta.text-white.p-3.mt-5.col-md-10.m-auto(data-aos="zoom-in" style="background: linear-gradient(#ff9800, rgb(255 221 172))")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2.text-center
          img.image_floating(src="@/assets/curso/tema3/91.svg" style="max-width:100px;display:inline;")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mt-3(data-aos="fade-up" style="color: #12263F !important;") Más información sobre el Euro
              p.mt-3(style="color: #12263F !important;") Para obtener mayor información sobre los elementos de seguridad de los billetes y las monedas en euros consulte el siguiente documento: 
            .col-sm-auto
              a.boton.boton--b.color-acento-botones(:href="obtenerLink('downloads/Anexo_6_SEC_features_es.pdf')" target="_blank")
                span Descargar
                i.fas.fa-download

    br
    h3.mt-5(data-aos="fade-up") Tasa Representativa del Mercado (TRM)

    p.mt-3(data-aos="fade-up") La TRM es la cantidad de pesos colombianos que se otorgan por un dólar estadounidense. Es un referente para transacciones y valoraciones en moneda extranjera tanto del sector público, como del privado.

    .mt-5.p-5(style="background-color:#FFF1DB;border-radius:20px;")
      h4.text-center(data-aos="fade-up") ¿Cómo se calcula la TRM?
      figure.mt-4.text-center
        img.imagen_flotante_animada(src="@/assets/curso/tema3/92.svg" style="max-width:300px;display:inline;")

      .row.mt-5
        .col-md-3.pr-0.pl-0
          figure(style="text-align:right;")
            img.image_floating.image__formating(src="@/assets/curso/tema3/93.svg" style="max-width:200px;display:inline;margin-right: -3.5rem;z-index: 4;position: relative;" data-aos="zoom-in")
        .col-md-5.pr-0.pl-0
          .p-5(style="background-color:white;border-radius:20px;" data-aos="zoom-in")
            p(data-aos="fade-up") Para calcular la TRM se hace un promedio de las tasas las operaciones de compra y venta de dólares americanos del día.
        .col-md-2.pr-0.pl-0(style="place-self:end")
          figure(style="text-align:left;")
            img.image_floating.image__formating(src="@/assets/curso/tema3/94.svg" style="max-width:150px;display:inline;margin-left: -4rem;z-index: 4;position: relative;" data-aos="zoom-in")
      .row.mt-4
        .col-md-3
        .col-md-3
          figure(style="text-align:right;")
            img.image_floating.image__formating(src="@/assets/curso/tema3/95.svg" style="max-width:200px;display:inline;margin-right: -3rem;z-index: 4;position: relative;" data-aos="zoom-in")
        .col-md-5.pr-0.pl-0
          .p-5(style="background-color:white;border-radius:20px;" data-aos="zoom-in")
            p(data-aos="fade-up") La tasa oficial se publica entre las 5:30 y 6:00 de la tarde con vigencia hasta el próximo día hábil y con base en el promedio de las operaciones de ese día
      .row.mt-4
        .col-md-3.pr-0.pl-0
          figure(style="text-align:right;")
            img.image_floating.image__formating(src="@/assets/curso/tema3/96.svg" style="max-width:200px;display:inline;margin-right: -2rem;z-index: 4;position: relative;" data-aos="zoom-in")
        .col-md-5.pr-0.pl-0
          .p-5(style="background-color:white;border-radius:20px;" data-aos="zoom-in")
            p(data-aos="fade-up") Para que el cálculo sea representativo, se ponderan las transacciones según su monto y se realiza un promedio aritmético simple.
        .col-md-2.pr-0.pl-0(style="place-self:start")
          figure(style="text-align:left;")
            img.image_floating.image__formating(src="@/assets/curso/tema3/97.svg" style="max-width:80px;display:inline;margin-top:-4rem;;z-index: 4;position: relative;" data-aos="zoom-in")
      .row.mt-1
        .col-md-3
        .col-md-3
          figure(style="text-align:right;")
            img.image_floating.image__formating(src="@/assets/curso/tema3/98.svg" style="max-width:80px;display:inline;margin-top: -3rem;z-index: 4;position: relative;" data-aos="zoom-in")
        .col-md-5.pr-0.pl-0
          .p-5(style="background-color:white;border-radius:20px;" data-aos="zoom-in")
            p(data-aos="fade-up") Esto quiere decir que cuando un día es festivo en Colombia, festivo en Estados Unidos, o es sábado o domingo, la tasa oficial (TRM) seguirá siendo la calculada en el último día que operó el mercado, y tendrá vigencia hasta el día siguiente.  
      .row.mt-3
        .col-md-5
        .col-md-2(style="place-self:center")
          figure(style="text-align:right;")
            img.image_floating.image__formating(src="@/assets/curso/tema3/99.svg" style="max-width:200px;display:inline;margin-right: -4rem;z-index: 4;position: relative;" data-aos="zoom-in")
        .col-md-4.pr-0.pl-0.row(style="background-color:#FFE3B9;border-radius:20px;" data-aos="zoom-in")
          .col-md-2
          .p-4.col-md-10
            p(data-aos="fade-up") Por ejemplo, en un día de puente en Colombia, la tasa de cambio calculada con las operaciones del viernes aplicará para el sábado, domingo, lunes festivo y martes.

    .mt-5.p-5(style="background-color:#FFF1DB;border-radius:20px;")
      h4.text-center(data-aos="fade-up") ¿Quién calcula la TRM?

      .row.mt-5
        .col-md-5.pr-0.pl-0.order-xs-2
          .p-5(style="background-color:white;border-radius:20px;" data-aos="zoom-in")
            p(data-aos="fade-up") La entidad encargada de calcular y certificar la TRM diaria es la Superintendencia Financiera de Colombia. 
        .col-md-2.pr-0.pl-0.order-xs-1(style="place-self:end")
          figure(style="text-align:left;")
            img.image_floating.image__formating(src="@/assets/curso/tema3/100.svg" style="max-width:150px;display:inline;margin-left: -3rem;z-index: 4;position: relative;" data-aos="zoom-in")

      .row.mt-3
        .col-md-2
        .col-md-1.pr-0.pl-0(style="place-self:start")
          figure(style="text-align:left;")
            img.image_floating.image__formating(src="@/assets/curso/tema3/101.svg" style="max-width:80px;display:inline;margin-top: -3rem;z-index: 4;position: relative;" data-aos="zoom-in")
        .col-md-2.pr-0.pl-0(style="place-self:center")
          figure(style="text-align:right;")
            img.image_floating.image__formating(src="@/assets/curso/tema3/102.svg" style="max-width:150px;display:inline;margin-right: -2rem;z-index: 4;position: relative;" data-aos="zoom-in")
        .col-md-5.pr-0.pl-0
          .p-5(style="background-color:white;border-radius:20px;" data-aos="zoom-in")
            p(data-aos="fade-up") Sin embargo, el Banco de la República es el encargado de definir la metodología con la que se calcula la TRM a través del Manual del Departamento de Operaciones y Desarrollo de Mercados. 

      .row.mt-4
        .col-md-7.pr-0.pl-0.order-xs-2
          .p-4(style="background-color:white;border-radius:20px;" data-aos="zoom-in")
            p(data-aos="fade-up") Los cambios en la metodología del cálculo se definen mediante resoluciones que luego se anuncian con una circular reglamentaria. Por ejemplo, el último cambio antes de escribir este artículo fue publicado el 15 de diciembre del 2015, en el que se aclara que a partir del 1 de febrero de 2016 se excluyen del cálculo las operaciones por montos inferiores a cinco mil dólares estadounidenses (Dólar Colombia, 2021). 
        .col-md-2.pr-0.pl-0.order-xs-3(style="place-self:center")
          figure(style="text-align:left;")
            img.image_floating.image__formating(src="@/assets/curso/tema3/104.svg" style="max-width:200px;display:inline;margin-left: -4rem;z-index: 4;position: relative;" data-aos="zoom-in")
        .col-md-2.pr-0.pl-0.order-xs-1(style="place-self:left")
          figure(style="text-align:left;")
            img.image_floating.image__formating(src="@/assets/curso/tema3/103.svg" style="max-width:80px;display:inline;margin-top: -4rem;z-index: 4;position: relative;" data-aos="zoom-in")

    br
    h3.mt-5(data-aos="fade-up") Políticas
    p.mt-3(data-aos="fade-up") Según la Real Academia de la Lengua Española – RAE, una política es el conjunto de orientaciones o directrices que rigen la actuación de una persona o entidad en un asunto o campo determinado. Por ello, abordaremos de manera general lo estipulado por la ley colombiana para el manejo de divisas y los lineamientos operativos y administrativos de los establecimientos de alojamiento para el mismo objetivo.

    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta__custom")
      .row.primero(titulo="Procedimientos cambiarios")
        p El conjunto de normas que regulan los cambios internacionales se conoce como régimen cambiario, y este abarca todas las transacciones que impliquen pago en moneda extranjera o manejo de divisas, tanto en ámbito estatal como privado, tal como veremos ahora.

      .row(titulo="Estatales")
        p El cambio de divisas se encuentra incluido dentro del concepto de venta de bienes o prestación de los servicios de que trata el artículo 77 de la Resolución Externa 8 de 2000.

      .row(titulo="Compra y venta a clientes")
        p Cuando las empresas de turismo y los hoteles los prestan a sus clientes, dentro de los cuales se encuentran los huéspedes o compradores de paquetes de viajes y turismo. Por ello, la norma citada exige el conocimiento del cliente. En efecto, la regulación prevé que se debe identificar plenamente la persona con la cual realizó la transacción y conservar la información relativa a su nombre, dirección, clase de documento de identidad extranjero, monto, fecha de la operación y forma de pago de la transacción.

      .row(titulo="Compra y venta de divisas público en general")
        p Si la actividad de compra y venta de divisas se realiza al público en general, sin que el vendedor o comprador de las divisas acceda a paquetes de viaje o turismo o sea un huésped del hotel, debe entenderse que dicha actividad es permitida siempre y cuando la agencia de viajes o el hotel se constituya en un profesional de compra y venta de divisas de acuerdo con lo dispuesto en el inciso 2 del artículo 75 del régimen cambiario.

    br
    h3.mt-5(data-aos="fade-up") Términos jurídicos
    .row.mt-4
      .col-md-8
        p(data-aos="fade-up") En este caso la agencia de viajes o el hotel que adquiere el carácter de profesional debe cumplir la inscripción en el registro mercantil y en el registro de profesionales de compra y venta de divisas que establezca la DIAN. Así mismo, tiene la obligación de exigir y conservar una declaración de cambio por cada una de las operaciones de compra y venta de divisas y de cheques de viajero que realicen. La negociación profesional (numeral 2, artículo 75 Resolución 8) no incluye ofrecer directa ni indirectamente, servicios tales como negociación de cheques o títulos en divisas, pagos, giros, remesas internacionales distribución y venta de tarjetas débito prepago, recargables o no e instrumentos similares emitidos por entidades del exterior, ni ningún servicio de canalización a través del mercado cambiario a favor de terceros. El régimen cambiario permite dicha actividad de manera exclusiva a las entidades financieras autorizadas para actuar como intermediario del mercado cambiario.
      .col-md-4(style="place-self:center")
        figure.text-center
          img.image_floating(data-aos="fade-left" src="@/assets/curso/tema3/105.svg" style="max-width:150px;display:inline;")

    .cajon.color-primario.mt-5.p-5(data-aos="zoom-in" style="background-color: #FFF1DB;")
      p(data-aos="fade-up") Ahora bien, en relación con la certificación que expide el contador público o revisor fiscal de las agencias de turismo y de los hoteles al intermediario del mercado cambiario (artículo 77 de la Resolución Externa 8 de 2000).

    p.mt-5(data-aos="fade-up") Lo anterior no significa que el revisor o contador deba discriminar cada transacción en la certificación que expida. No se trata de la conservación de un archivo paralelo donde estén los mismos datos de los que dispone el hotel o la agencia de viajes. Son las sociedades mencionadas las únicas obligadas a conservar la información relativa al conocimiento del cliente con el cual se realizó la transacción para que en cualquier caso pueda ser identificada plenamente.

    h3.mt-5(data-aos="fade-up") Organizacionales

    p.mt-4(data-aos="fade-up") En consecuencia de las políticas estatales, se fijan los lineamientos organizacionales, que cuyo propósito es dar cumplimiento a la normatividad y satisfacer las necesidades de aquellos huéspedes que requieren pagar sus gastos de viaje con moneda extranjera.

    p.mt-3(data-aos="fade-up") Como vimos, es importante establecer claramente la identidad del huésped, para ello, cada vez que se realice un cambio de moneda o se reciban dólares como parte de pago de la cuenta, el cajero debe anexar una copia del documento de identidad. De igual forma, además de hacer la respectiva comprobación de la validez de los billetes, es importante relacionar la denominación y el serial de cada uno de los recibidos.

    p.mt-3(data-aos="fade-up") La base o fondo de recepción no cuenta con moneda extranjera, por lo tanto, cuando haya lugar a devoluciones, estas deberán hacerse en moneda nacional, generando lo que llamamos un #[em Paid Out].

    p.mt-3(data-aos="fade-up") Al momento de recibir pagos en dólares, no se tiene establecido un límite, pero cuando se trata de cambio por pesos colombianos, cada establecimiento es responsable de fijar el monto máximo, siempre asegurando que no se agote la base o fondo de caja y previniendo fraudes.

    p.mt-5(data-aos="fade-up") #[strong Para aplicar todo lo aquí expuesto, se recomienda el uso de un formato que va acompañado del documento del huésped y se denomina relación moneda extranjera, el cual se ve de la siguiente manera:]

    figure.mt-5.col-md-11.m-auto
      img.image_floating(src="@/assets/curso/tema3/106.svg" data-aos="fade-up")

    br
    br
    .titulo-segundo.mt-5
      h2#t_3_3 3.3 Tarjetas débito y crédito

    .row
      .col-md-6
        p(data-aos="fade-up") Cuando un establecimiento de alojamiento toma la decisión de recibir el llamado “dinero plástico” como una forma de pago, busca realizar transacciones de una forma rápida y segura mediante el traslado de fondos desde la cuenta o los fondos del cliente hacia la del hotel.
        p.mt-3(data-aos="fade-up") Una vez decidido, se debe determinar la cuenta bancaria que se vinculará a dichas transacciones y con ese banco iniciar el proceso de solicitud de los datáfonos con las dos franquicias que manejan este requerimiento en Colombia, como Redeban y Credibanco. Para evitar fraudes en las transacciones con tarjetas crédito o débito es importante tomar precauciones mínimas, a saber:
      .col-md-6(style="place-self:center;text-align:right")
        figure
          img.image_floating(src="@/assets/curso/tema3/107.svg" style="display:inline;max-width:400px")

    h3.mt-5(data-aos="fade-up") Elementos de seguridad
    p.mt-3(data-aos="fade-up") Para adentrarse en los elementos de seguridad de una tarjeta de crédito o débito, lo primero que se debe conocer es la composición de esta, por lo tanto, se detallarán los elementos a tener en cuenta cuando se recibe un pago por este medio.

    //.col-md-3.m-auto.p-2.mt-5(style="background-color:#FF9800;border-radius:7px;" data-aos="fade-up")
      h5.text-center.mb-0 Nombre y Logo del Banco Emisor

    .img-infografica.color-secundario.mt-3.col-md-6.m-auto(data-aos="zoom-in")
      .img-infografica__img
        figure
          img.image__base(src='@/assets/curso/tema3/108.svg' alt='')
      .img-infografica__content
        .img-infografica__item(style='top: 37%; left: 9%;' @click="mostrar_item1_tarjeta")
          .img-infografica__item__dot
          .img-infografica__item_raya(style="top: 15%;height:50vh;" v-if="item__1_tarjeta")
        .img-infografica__item(style='top: 52%; left: 9%;' @click="mostrar_item2_tarjeta")
          .img-infografica__item__dot
          .img-infografica__item_raya(style="top: 15%;height:50vh;" v-if="item__2_tarjeta")
        .img-infografica__item(style='top: 15%; left: 18%;' @click="mostrar_item3_tarjeta")
          .img-infografica__item__dot
          .img-infografica__item_raya(style="top: 15%;height:50vh;" v-if="item__3_tarjeta")
        .img-infografica__item(style='top: 15%; left: 89%;' @click="mostrar_item4_tarjeta")
          .img-infografica__item__dot
          .img-infografica__item_raya(style="top: 15%;height:50vh;" v-if="item__4_tarjeta")
        .img-infografica__item(style='top: 69%; left: 49%;' @click="mostrar_item5_tarjeta")
          .img-infografica__item__dot
          .img-infografica__item_raya(style="top: 15%;height:40vh;" v-if="item__5_tarjeta")
        .img-infografica__item(style='top: 86%; left: 22%;' @click="mostrar_item6_tarjeta")
          .img-infografica__item__dot
          .img-infografica__item_raya(style="top: 15%;height:35vh;" v-if="item__6_tarjeta")
        .img-infografica__item(style='top: 86%; left: 80%;' @click="mostrar_item7_tarjeta")
          .img-infografica__item__dot
          .img-infografica__item_raya(style="top: 15%;height:30vh;" v-if="item__7_tarjeta")
    
    div(style="position:relative;z-index:2;background-color:white;")
      .mt-4.p-5.col-md-8.m-auto.content__info_billete.caja_flotante(v-if="item__1_tarjeta" data-aos="zoom-in" style="background-color:#FFF1DB;")
        h4 Chip EMV
        p.mt-3 La información que hasta hace unos años solo se almacenaba en la banda magnética, hoy se encuentra en un chip que brinda mayor seguridad y durabilidad. Con la aparición de este dispositivo, se abrió una nueva posibilidad de hacer transacciones con “dinero plástico”. Si al lado del chip se encuentran cuatro líneas semicurvas, representando el símbolo #[em Wifi], significa que también podemos realizar el cobro sin contacto, es decir que la tarjeta únicamente la manipula el propietario. A la hora de recibir un pago con tarjeta, el datáfono recibe información básica contenida en el chip y la transmite a la entidad emisora para que valide la transacción, este es un proceso que tarda segundos y por lo que cobra vital importancia el uso del TPV, tal como veremos más adelante.

      .mt-4.p-5.col-md-8.m-auto.content__info_billete.caja_flotante(v-if="item__2_tarjeta" data-aos="zoom-in" style="background-color:#FFF1DB;")
        h4 Número tarjeta
        p.mt-3 Los primeros dígitos de todas las tarjetas corresponden al número del emisor de la empresa o franquiciante, la entidad financiera y el país. En Colombia, las franquicias más conocidas son Visa y MasterCard, cuyos plásticos cuentan con 4 bloques de 4 números cada uno, para un total de 16 dígitos. Las tarjetas Visa comienzan todas por 4, ya sean de crédito o débito, estás últimas conocidas como Visa Electrón. Para el caso de MasterCard tiene asignado como primer número el 5, de igual forma en sus tarjetas de crédito o débito, que son identificadas como Maestro. Otras menos conocidas y aceptadas, pero también vigentes, son las franquicias Diners Club y American Express, teniendo la primera 14 dígitos y 15 la segunda, siendo en ambos casos el 3 su número inicial.

      .mt-4.p-5.col-md-8.m-auto.content__info_billete.caja_flotante(v-if="item__3_tarjeta" data-aos="zoom-in" style="background-color:#FFF1DB;")
        h4 Nombre y logo del banco emisor
        p.mt-3 Es el banco que emite la tarjeta, piense en un banco que conozca

      .mt-4.p-5.col-md-8.m-auto.content__info_billete.caja_flotante(v-if="item__4_tarjeta" data-aos="zoom-in" style="background-color:#FFF1DB;")
        h4 Tipo de tarjeta
        p.mt-3 Si es débito o crédito

      .mt-4.p-5.col-md-8.m-auto.content__info_billete.caja_flotante(v-if="item__5_tarjeta" data-aos="zoom-in" style="background-color:#FFF1DB;")
        h4 Fecha de vencimiento o fecha caducidad tarjeta
        p.mt-3 Aunque se puede asumir que, si la tarjeta está vencida, el datáfono rechazará la transacción, es inevitable prevenir y verificar que el mes y año (MM/AA) aquí impresos no sean anteriores a la fecha en que se recibe el pago. Esta fecha es aún más relevante, cuando la tarjeta se recibe como garantía, mediante un voucher manual. Debe tener una fecha de validez superior a la fecha del pago.

      .mt-4.p-5.col-md-8.m-auto.content__info_billete.caja_flotante(v-if="item__6_tarjeta" data-aos="zoom-in" style="background-color:#FFF1DB;")
        h4 Nombre del tarjetahabiente o nombre del titular
        p.mt-3 El nombre del titular se encuentra en la parte frontal de la tarjeta y una vez revisado el estado del plástico, debe compararse el nombre que aquí aparece, con el que se muestra en el documento de identidad. Una vez realizada la transacción, el datáfono emite un comprobante de esta y allí debe verificarse una vez más que los nombres coincidan.

      .mt-4.p-5.col-md-8.m-auto.content__info_billete.caja_flotante(v-if="item__7_tarjeta" data-aos="zoom-in" style="background-color:#FFF1DB;")
        h4 Franquicia internacional
        p.mt-3 Son los emisores principales de la tarjeta: Visa, MasterCard, American Express, Diners.

    .img-infografica.color-secundario.mt-5.col-md-6.m-auto(data-aos="zoom-in")
      .img-infografica__img
        figure
          img.image__base(src='@/assets/curso/tema3/109.svg' alt='')
      .img-infografica__content
        .img-infografica__item(style='top: 45%; left: 10%;' @click="mostrar_item1_tarjeta2")
          .img-infografica__item__dot
          .img-infografica__item_raya(style="top: 15%;height:40vh;" v-if="item__1_tarjeta2")
        .img-infografica__item(style='top: 48%; left: 86%;' @click="mostrar_item2_tarjeta2")
          .img-infografica__item__dot
          .img-infografica__item_raya(style="top: 15%;height:50vh;" v-if="item__2_tarjeta2")
        .img-infografica__item(style='top: 21%; left: 88%;' @click="mostrar_item3_tarjeta2")
          .img-infografica__item__dot
          .img-infografica__item_raya(style="top: 15%;height:50vh;" v-if="item__3_tarjeta2")
    
    div(style="position:relative;z-index:2;background-color:white;")
      .mt-4.p-5.col-md-8.m-auto.content__info_billete.caja_flotante(v-if="item__1_tarjeta2" data-aos="zoom-in" style="background-color:#FFF1DB;")
        h4 Holograma de seguridad
        p.mt-3 Es una imagen o logo de la franquicia principal, que brinda seguridad extra ya que son imposibles de falsificar por impresoras o escáneres. En algunas ocasiones están al frente.

      .mt-4.p-5.col-md-8.m-auto.content__info_billete.caja_flotante(v-if="item__2_tarjeta2" data-aos="zoom-in" style="background-color:#FFF1DB;")
        h4 Código Seguridad o CVV
        p.mt-3 (#[em Card Verification Value]), se encuentra en la parte de atrás del plástico y obedece a tres dígitos que son ajenos al número de la tarjeta. Este es un refuerzo de seguridad que se utiliza en transacciones no presenciales. En el caso de American Express, estas tarjetas llevan el código de seguridad impreso al frente en la parte superior derecha del número de la tarjeta. Permite al banco verificar la originalidad de la tarjeta. En las tarjetas American Express este código va impreso en la parte frontal de la tarjeta.

      .mt-4.p-5.col-md-8.m-auto.content__info_billete.caja_flotante(v-if="item__3_tarjeta2" data-aos="zoom-in" style="background-color:#FFF1DB;")
        h4 Banda magnética
        p.mt-3 Contiene información única e intransferible, que activa el proceso de validación entre el datáfono y la entidad, pero que se puede prestar para sobreponerse de una tarjeta a otra, cobrando importancia nuevamente la comparación del #[em voucher] o soporte emitido por el TPV con la tarjeta física. Este elemento de seguridad guarda información de la tarjeta.

    br
    .row.mt-5
      .col.md-6(style="place-self:end")
        h3(data-aos="fade-up") Operación del datáfono
        p.mt-3(data-aos="fade-up") El datáfono, también conocido como TPV por las iniciales de Terminal Punto de Venta, es un dispositivo móvil o fijo que permite realizar el cobro de los servicios tomados por el huésped mediante tarjeta, ya sea de crédito o de débito. En Colombia, estos dispositivos son emitidos en su mayoría por las franquicias Credibanco y Redeban, pero sin importar quién lo otorgue o por cuál se decida el hotel, la operatividad es bastante similar.
        p.mt-3(data-aos="fade-up") Contar con un datáfono amplía las formas de pago no solo dentro del establecimiento, sino también fuera de él, ya que cuenta con tecnología satelital y permitiendo conectividad exterior. En la actualidad los cobros que se pueden realizar son:
      .col-md-6(style="place-self:start")
        figure.text-center
          img.image_floating(src="@/assets/curso/tema3/110.svg" data-aos="fade-left" style="display:inline;max-width:350px;margin-bottom: -70px;")

    .p-5.caja_flotante(style="background-color:#FFF1DB" data-aos="zoom-in")
      h4(data-aos="fade-up") Por banda magnética
      ol.lista-ol--cuadro.mt-5
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span a
          | Deslizar la tarjeta verificando que esta pase por el lector.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span b
          | Seleccionar el tipo de tarjeta, crédito o débito.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span c
          | Digitar los últimos 4 dígitos y presionar ENTER.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span d
          | Ingresar el monto de la transacción y terminar con ENTER.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span e
          | El datáfono solicita el monto del impuesto, se ingresa y confirma con ENTER.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span f
          | Si la tarjeta seleccionada es de crédito, a continuación, solicita el número de cuotas.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span g
          | Por último, se genera un comprobante de venta para el establecimiento y deberá preguntarse al huésped si desea una copia, de lo contrario, se termina con la tecla roja.

    .p-5.mt-4.caja_flotante(style="background-color:#FFF1DB" data-aos="zoom-in")
      h4(data-aos="fade-up") Por chip
      ol.lista-ol--cuadro.mt-5
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span a
          | Presionar la tecla ENTER para activar el dispositivo.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span b
          | Ingresar el monto de la transacción y termine con ENTER.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span c
          | El datáfono solicita que se inserte la tarjeta, es importante tener presente que se debe hacer con el chip hacia arriba.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span d
          | Si la tarjeta es crédito, pedirá el número de cuotas.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span e
          | Para finalizar, emite el comprobante de venta para el hotel y el cajero deberá indagar al cliente si requiere una copia.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span f
          | Retirar y entregar la tarjeta al propietario.

    h4.mt-5(data-aos="fade-up") Nota:
    p.mt-3(data-aos="fade-up") Si la tarjeta lleva impreso el símbolo de #[em Wifi], significa que permite transacciones sin contacto, denominadas “#[em Contact Less]” en cuyo caso se siguen los mismos pasos de la venta con chip, pero en lugar de insertar el chip, se solicitará al huésped que acerque su plástico al lector del datáfono.

    p.mt-5(data-aos="fade-up") #[strong Al realizar ventas a través de TPV, es posible que se presenten algunas novedades, por lo que es relevante saber cómo actuar en ese caso.]

    .p-5.mt-4.caja_flotante(style="background-color:#FFF1DB" data-aos="zoom-in")
      h4(data-aos="fade-up") Anulaciones
      ol.lista-ol--cuadro.mt-5
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span a
          | Desplazarse hasta encontrar la opción y seleccionar.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span b
          | El equipo dará la opción de anular la última transacción o una anterior, elegir y dar ENTER.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span c
          | Si es anterior, se ingresa el número de comprobante.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span d
          | Se solicita ingresar la clave y a continuación ENTER. Esta clave debe ser recibida al momento de obtener el dispositivo.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span e
          | Validar la información en pantalla y terminar con ENTER.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span f
          | Se imprime un recibo que muestra la transacción anulada.

    .p-5.mt-4.caja_flotante(style="background-color:#FFF1DB" data-aos="zoom-in")
      h4(data-aos="fade-up") Duplicados
      ol.lista-ol--cuadro.mt-5
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span a
          | Desplazarse hasta encontrar la opción y seleccionar.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span b
          | El dispositivo permite reimprimir la última transacción o una anterior, elegir y dar ENTER.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span c
          | Si no es la última, digitar el número de comprobante.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span d
          | Se solicita la clave del equipo, ingresar y terminar con ENTER.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span e
          | Se imprime un recibo que aparece con el texto DUPLICADO.

    .p-5.mt-4.caja_flotante(style="background-color:#FFF1DB" data-aos="zoom-in")
      h4(data-aos="fade-up") Cierre
      ol.lista-ol--cuadro.mt-5
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span a
          | Desplazarse hasta encontrar la opción y seleccionar.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span b
          | Ingresar la clave y presionar ENTER.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span c
          | El equipo muestra los totales en pantalla.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span d
          | Validar la información y oprimir ENTER.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span e
          | La terminal inicia la impresión del movimiento del día.

    .tarjeta.text-white.p-3.mt-5.col-md-10.m-auto(data-aos="zoom-in" style="background: linear-gradient(#ff9800, rgb(255 221 172))")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2.text-center
          img.image_floating(src="@/assets/curso/tema3/111.svg" style="max-width:100px;display:inline;")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mt-3.text-white(data-aos="fade-up" style="color: #12263F !important;") ¿Cómo usar el datáfono?
              p.mt-3(style="color: #12263F !important;") Credibanco muestra a continuación una guía de operación del datáfono; para evitar inconvenientes en la práctica se debe guardar y tener presente sus pasos (Credibanco, 2021).
            .col-sm-auto
              a.boton.boton--b.color-acento-botones(:href="obtenerLink('downloads/Anexo_7_Guia-rapida-del-datafono.pdf')" target="_blank")
                span Descargar
                i.fas.fa-download

    h3.mt-5(data-aos="fade-up") Políticas de aceptación
    p.mt-3(data-aos="fade-up") Las franquicias más conocidas y utilizadas en Colombia son Visa y MasterCard, por lo que son estas las que vienen con aceptación por defecto en los datáfonos, esto significa que para recibirlas no se requieren trámites adicionales, como sí sucede con American Express y Diners Club, las cuales deben solicitarse al banco receptor de fondos en caso de pretender recibirlas en el hotel.
    p.mt-3(data-aos="fade-up") Un caso similar a las dos últimas franquicias se presenta cuando el establecimiento contempla la inclusión de tarjetas marca propia, como son las emitidas por grandes superficies o empresas de servicios públicos.
    p.mt-5(data-aos="fade-up") #[strong Adicionalmente, las políticas de aceptación básicamente quedan cubiertas por las recomendaciones de seguridad para evitar fraudes:]

    .p-5.mt-4.caja_flotante(style="background-color:#FFF1DB" data-aos="zoom-in")
      h4(data-aos="fade-up") Transacciones presenciales
      ul.lista-ul.mt-4
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | En una transacción con tarjeta siempre debe haber presencia del titular de la tarjeta, la tarjeta de crédito y el documento de identidad.
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | Solicitar y verificar el documento de identidad y la tarjeta de crédito antes de la transacción.
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | Revisar las características de seguridad tanto del documento de identidad como de la tarjeta.
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | Confrontar los datos del documento de identidad contra los de la tarjeta.
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | Validar en el comprobante diligenciado los 4 últimos números de la tarjeta, fecha de vencimiento, tipo de tarjeta, franquicia o marca.
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | Verificar que la firma en el comprobante coincida con la firma registrada en el panel de la tarjeta.
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | Verificar que el número de cédula en el comprobante coincida con el del documento de identidad.
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | Cuando en el establecimiento se requiera el mantenimiento de los datáfonos, se debe tener presente que solo las personas autorizadas por Credibanco o Redeban Multicolor pueden tener acceso a la terminal, para lo cual se deben contactar a los números telefónicos autorizados para confirmar la identidad del funcionario.
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | Llevar un control de las visitas realizadas para el mantenimiento de datáfonos. No permitir que personas extrañas manipulen o abran las terminales o que estas sean retiradas temporalmente del establecimiento así sea por corto tiempo.
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | Mantener al personal del establecimiento capacitado.

    .p-5.mt-4.caja_flotante(style="background-color:#FFF1DB" data-aos="zoom-in")
      h4(data-aos="fade-up") Transacciones a domicilio
      ul.lista-ul.mt-4
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | Se recomienda asignar un datáfono exclusivo por cada domiciliario.
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | Desarrollar e implementar un proceso diario de validación del inventario de datáfonos asignados al punto de venta.
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | Garantizar la custodia de estos dispositivos en horarios no hábiles.

    .tarjeta.text-white.p-3.mt-5.col-md-10.m-auto(data-aos="zoom-in" style="background: linear-gradient(#ff9800, rgb(255 221 172))")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-2.col-lg-2.text-center
          img.image_floating(src="@/assets/curso/tema3/112.svg" style="max-width:100px;display:inline;")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mt-3.text-white(data-aos="fade-up" style="color: #12263F !important;") Recomendaciones para comercios:
              p.mt-3(style="color: #12263F !important;") Seguir estas recomendaciones, logrará que el establecimiento tenga formas de pago seguras (Incocrédito, 2021).
            .col-sm-auto
              a.boton.boton--b.color-acento-botones(:href="obtenerLink('downloads/Anexo_8_Recomendaciones-de-seguridad-para-el-comercio.pdf')" target="_blank")
                span Descargar
                i.fas.fa-download

    br
    br
    .titulo-segundo.mt-5
      h2#t_3_4 3.4  Pago virtual (no presencial)

    p(data-aos="fade-up") Un sistema de pago electrónico o también llamado sistema de pago en línea (por dispositivo electrónico), también conocido por EPS por sus siglas en inglés, es un sistema de pago que facilita la aceptación de pagos para las transacciones en línea a través de Internet. Los EPS, o sistemas de pagos electrónicos, realizan la transferencia del dinero entre compradores y vendedores en una acción de compraventa electrónica a través de una entidad financiera autorizada por ambos. Es, por ello, una pieza fundamental en el proceso de compraventa dentro del comercio electrónico.

    figure.col-md-4.m-auto.mt-5
      img.image_floating(src="@/assets/curso/tema3/113.svg" data-aos="zoom-in")
    .p-5.caja_flotante.col-md-10.m-auto(style="background-color:#FFF1DB")
      p(data-aos="fade-up") #[strong Como ejemplos de sistemas de pago electrónico están las pasarelas de pago o TPV virtual para el pago con tarjeta, los sistemas de monedero electrónico y los sistemas que se conectan directamente con la banca electrónica del usuario.]
      p.mt-3(data-aos="fade-up") El comercio electrónico por internet se ofrece como un nuevo canal de distribución sencillo, económico y con alcance mundial las 24 horas del día todos los días del año, y esto sin los gastos y limitaciones de una tienda clásica: personal, local, horario, infraestructura, etc.

    .mt-5.p-5.contenedor1
      figure.col-md-9.m-auto
        img.image_floating(src="@/assets/curso/tema3/114.svg")
      p.mt-5(data-aos="fade-up") Estos pagos ocurren a través de las “pasarelas de pago”, que son servicios de pago electrónicos que puede ser utilizado #[em online] en una #[em web] (tienda #[em online] o cualquier otro tipo de #[em web]) o en una tienda física tradicional, para que los clientes puedan realizar sus pagos de forma segura y eficaz. Estas plataformas integran múltiples formas de pago, a saber:
       ul.lista-ul.mt-5
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | Tarjetas de crédito.
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | Tarjetas débito: PSE.
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | Movimientos en efectivo: terminales de recaudo como Baloto, Efecty, Todo Pagos.
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | Billeteras Digitales: Nequi, Daviplata.

      p.mt-5.text-center(data-aos="fade-up") #[strong Estos pagos se envían a los clientes de varias formas:]

      .col-md-10.m-auto.mt-4.row
        .col-md-3.mb-4
          figure.text-center.caja_escalada_hover.boton__interactiva.boton__activa(style="background-color:#fff;border-radius:20px;padding:10px 0px 10px 0px;cursor:pointer;position:relative;" @click="setInfoOption('Links de pago:','son enlaces web creados por la plataforma, de manera personalizada (cliente: transacción) y que el cliente recibe de forma segura vía correo electrónico. Al abrir el enlace, se accede al formulario donde en unos pocos pasos se escoge la forma de pago y se realiza el pago desde la entidad donde el cliente tiene sus fondos.')")
            img(src="@/assets/curso/tema3/116.svg" style="display:inline;max-width:100px;max-height:80px;")
          h6.mt-2.text-center(data-aos="fade-up") #[strong Links de pago]
        .col-md-3.mb-4
          figure.text-center.caja_escalada_hover.boton__interactiva(style="background-color:#fff;border-radius:20px;padding:10px 0px 10px 0px;cursor:pointer;position:relative;" @click="setInfoOption('Códigos QR:','los códigos QR (<em>Quick Response Code</em> - código de respuesta rápida) funcionan a través de los teléfonos inteligentes con los cuales se decodifica el código que puede contener un enlace, un sitio web, un correo electrónico o una imagen. Su operación es similar a la de los enlaces, ya que se generan de forma personalizada (cliente: transacción).')")
            img(src="@/assets/curso/tema3/117.svg" style="display:inline;max-width:100px;max-height:80px;")
          h6.mt-2.text-center(data-aos="fade-up") #[strong Códigos QR]
        .col-md-3.mb-4
          figure.text-center.caja_escalada_hover.boton__interactiva(style="background-color:#fff;border-radius:20px;padding:10px 0px 10px 0px;cursor:pointer;position:relative;" @click="setInfoOption('Botón de pago:','esta integración no es otra cosa que un enlace que lleva a cliente a la web de pagos y que se personaliza (forma; color; mensaje) dentro de la <em>web</em> de la empresa. Al ser una redirección a la página de pagos, es un sistema que tiende a ser demorado en términos de clics, porque la plataforma hace varias verificaciones.')")
            img(src="@/assets/curso/tema3/118.svg" style="display:inline;max-width:100px;max-height:80px;")
          h6.mt-2.text-center(data-aos="fade-up") #[strong Botón de pago]
        .col-md-3.mb-4
          figure.text-center.caja_escalada_hover.boton__interactiva(style="background-color:#fff;border-radius:20px;padding:10px 0px 10px 0px;cursor:pointer;position:relative;" @click="setInfoOption('Integración a página web:','en esta lo que se hace es que la plataforma de pagos genera un código de programación que se integra al contenido de la web en un “<em>frame</em>”. Es decir, que la pasarela de pagos funciona dentro de la página <em>web</em> sin salir de ella, por lo que minimiza clics y mejora la experiencia de usuario, pero además da una sensación de pago más segura. Para esto hay que cumplir requisitos adicionales como tener certificados SSL y certificados de seguridad web para el procesamiento de pagos.')")
            img(src="@/assets/curso/tema3/119.svg" style="display:inline;max-width:100px;max-height:80px;")
          h6.mt-2.text-center(data-aos="fade-up") #[strong Integración a página #[em web]]

      .mt-4.p-5.caja__mostrar(style="background-color:#fff;border-radius:20px;")
        div(data-aos="fade-up")
          p #[strong.h5(v-html="title_option")] #[span(v-html="text_option")]

    h3.mt-5(data-aos="fade-up") Procedimiento de confirmación y manejo

    figure.mt-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/zkAIxjlqmV4" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .mt-5.p-5(style="background-color:#FFF1DB")
      .row
        .col-md-6(style="place-self:center")
          p(data-aos="fade-up") Al igual que con los pagos presenciales, para los pagos online o virtuales, se deben tener las siguientes precauciones:
        .col-md-6
          figure(style="text-align:left")
            img.image_floating(src="@/assets/curso/tema3/120.svg" style="display:inline;max-width:100px" data-aos="fade-left")
      ul.lista-ul.mt-5
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | La página web del comercio debe ser una página segura certificada por una empresa idónea y reconocida.
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | La información del tarjetahabiente debe viajar por un canal dedicado (VPN) o red privada virtual (#[em Virtual Private Network]).
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | La información debe ser encriptada con software de alto nivel y reconocimiento, la norma PCI DSS exige la utilización de Triple DES o AES.
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | Se recomienda certificarse con los sistemas de tarjetas para realizar transacciones seguras por internet.
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | Se sugiere hacer validaciones con el cliente vía telefónica.
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | Se recomienda contar con un servicio de atención telefónica 7 x 24 y una línea nacional para atender las inquietudes del cliente.
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | Es importante que en el establecimiento se tengan definidas políticas de facturación, cambios, reembolsos y cancelaciones.
        li(data-aos="fade-up")
          i.fas.fa-check(style="color:#FF9800;")
          | Es recomendable contar con antivirus para evitar la instalación de troyanos o virus que faciliten el robo de información.

    p.mt-5(data-aos="fade-up") La implementación de estos estándares de seguridad, con el apoyo de las plataformas de pago es cada día más sencillo (Incocrédito, 2021).

    br
    br
    .titulo-segundo.mt-5
      h2#t_3_5 3.5 Cuentas compañía (#[em Bill to])

    p(data-aos="fade-up") Son una forma de pago característica de los hoteles y se configura cuando el departamento de ventas y mercadeo, en desarrollo de su función comercial, establece relaciones comerciales con empresas y dentro de esas negociaciones, fija las condiciones de estas. Entre ellas las tarifas y las normas de crédito aplicables.

    p.mt-3(data-aos="fade-up") Una vez se establece el convenio, los huéspedes del hotel asociados a esas cuentas corporativas pueden usar el cupo de crédito preautorizado que les permite procesar sus cargos en un ciclo de facturación regular sin el uso de una tarjeta de crédito y bajo el amparo de esa cuenta corporativa para liquidar la cuenta.

    .row.mt-5
      .col-md-6
        h4(data-aos="fade-up") Características
        p.mt-4(data-aos="fade-up") Del lado del hotel, la facturación directa requiere la aprobación previa del límite de crédito a una empresa. Por lo general, la compañía solicitante completa una solicitud de aprobación de crédito. El contralor del establecimiento de alojamiento realiza una verificación del perfil crediticio para determinar una calificación, la capacidad de pago y un límite de crédito. 
        p.mt-3(data-aos="fade-up") Este límite de crédito es establecido por cada hotel y a cada compañía de forma individual, varía con la cantidad de cargos proyectados (noches + consumos) y el período de tiempo permitido para que se paguen los cargos (generalmente se hacen cortes mensuales).
        p.mt-3(data-aos="fade-up") Del lado de la organización, se debe determinar una persona de contacto autorizada para indicarle al hotel que personas están aprobadas a usar la cuenta (cupo de crédito) y que cargos pueden ser posteados a dicha cuenta. 
      .col-md-6.text-center
        figure
          img.image_floating(src="@/assets/curso/tema3/121.svg" data-aos="fade-left" style="display:inline;max-width:400px")

    .mt-5.p-5(style="background-color:#FFF1DB")
      .p-4.row(style="background-color:#fff")
        .col-md-5(style="place-self:center")
          h5(data-aos="fade-up" style="color:#FF9800;") De esta manera el hotel requiere que, con cada reserva hecha, se envié una carta de garantía, en papel membretado y firmada por el contacto, donde se estipula:
        .col-md-1(style="place-self:center")
          figure.text-center
            img(src="@/assets/curso/tema3/122.svg" style="display:inline;max-width:100px;max-height:150px;")
        .col-md-4(style="place-self:center")
          ul.lista-ul
            li(data-aos="fade-up")
              i.fas.fa-check(style="color:#FF9800;")
              | Nombre del cliente.
            li(data-aos="fade-up")
              i.fas.fa-check(style="color:#FF9800;")
              | Fechas de estancia.
            li(data-aos="fade-up")
              i.fas.fa-check(style="color:#FF9800;")
              | Cargos cubiertos por el convenio.
        .col-md-2(style="place-self:center")
          figure.text-center
            img.image_floating(src="@/assets/curso/tema3/123.svg" style="display:inline;max-width:100px;")
      p.mt-3.mb-0(data-aos="fade-up") Es responsabilidad de la corporación que solicita crédito monitorear el uso autorizado del crédito.

    h3.mt-5(data-aos="fade-up") Procedimiento de manejo
    p.mt-3(data-aos="fade-up") El siguiente procedimiento se utiliza para procesar un pago de factura a cuenta:

    br
    br
    .row.mt-5
      .col-md-6
        div.caja_flotante(style="background-color:#FFF1DB;border-radius:6px;height:100%;")
          figure.text-center
            img.image_floating(src="@/assets/curso/tema3/124.svg" style="display:inline;max-width:100px;margin-top:-3rem;" data-aos="fade-up")
          .p-5
            h4(data-aos="fade-up") En la reserva
            ol.lista-ol--cuadro.mt-5
              li(data-aos="fade-up")
                .lista-ol--cuadro__vineta
                  span a
                | La reserva se debe efectuar por un método corporativo válido, por ejemplo, un correo electrónico corporativo.
              li.mt-3(data-aos="fade-up")
                .lista-ol--cuadro__vineta
                  span b
                | La empresa envía una carta, firmada por el autorizado, indicando el nombre del cliente, las fechas de estadía.
              li.mt-3(data-aos="fade-up")
                .lista-ol--cuadro__vineta
                  span c
                | La reserva se ingresa al sistema PMS, y se enrutan los cargos autorizados a un folio a nombre de la compañía. Este proceso se realiza en el PMS mediante la función “routing”. También se digitan en el sistema las notas relativas a la reserva. Adicionalmente se imprime la carta y se entrega a recepción.

      .col-md-6
        div.caja_flotante_azul(style="background-color:#C7D1FF;border-radius:6px;height:100%;")
          figure.text-center
            img.image_floating(src="@/assets/curso/tema3/125.svg" style="display:inline;max-width:100px;margin-top:-3rem;" data-aos="fade-up")
          .p-5
            h4(data-aos="fade-up") En el registro (#[em Check in])
            ol.lista-ol--cuadro.mt-5
              li(data-aos="fade-up")
                .lista-ol--cuadro__vineta(style="background-color: #111E61;")
                  span a
                | Solicitar identificación corporativa o personal.
              li.mt-3(data-aos="fade-up")
                .lista-ol--cuadro__vineta(style="background-color: #111E61;")
                  span b
                | Verifique que exista la carta de garantía, para asegurarse de que el individuo está autorizado por el titular de la cuenta para facturar a la compañía.
              li.mt-3(data-aos="fade-up")
                .lista-ol--cuadro__vineta(style="background-color: #111E61;")
                  span c
                | Tenga en cuenta el límite de crédito.
              li.mt-3(data-aos="fade-up")
                .lista-ol--cuadro__vineta(style="background-color: #111E61;")
                  span d
                | Diligencie el registro y verifique que el “#[em routing]” sea correcto.
              li.mt-3(data-aos="fade-up")
                .lista-ol--cuadro__vineta(style="background-color: #111E61;")
                  span e
                | Tenga en cuenta las señales de alerta en el crédito de la empresa, debido a la falta de pago de facturas.

    br
    br
    .titulo-segundo.mt-5
      h2#t_3_6 3.6 Cheques

    p(data-aos="fade-up") El cheque es un título valor que consiste en la orden de pago que se libra contra un banco a favor de una persona o empresa, y para ello cuentahabiente libra la orden de pago mediante un cheque para que el banco pague el valor correspondiente a quien presente el cheque al banco, o al beneficiario que figure en el cheque.

    p.mt-3(data-aos="fade-up") La mayoría de los hoteles no aceptan cheques personales para el pago de facturas, excepto que medie una autorización expresa por parte de la gerencia. Los únicos cheques aceptados sin condicionamientos son los librados por agencias de viajes, empresas comerciales, organismos estatales y privados, asociaciones, etc. que operan con el hotel en cuenta corriente (Simón, 2016, p. 85).

    p.mt-3(data-aos="fade-up") En general, los cheques son una forma de pago utilizada sobre todo entre empresas y por montos por lo general elevados, ya que el manejo de estos títulos tiene un valor financiero más alto. Los cheques (cuenta corriente) aunque están disponibles para personas naturales, han sido desplazados por las formas de pago electrónicas y por las tarjetas que ya se han visto.

    figure.col-md-7.m-auto.mt-5
      img(src="@/assets/curso/tema3/126.svg" data-aos="zoom-in")

    p.mt-5(data-aos="fade-up") A manera informativa también se pueden mencionar los cheques de viajero, una forma de pago que existió hasta el final de la década de los 90 y que era un cheque que tenía preimpreso el valor y que se validaba cuando al momento de recibirlo, el cliente firmaba en presencia del cajero, la cual debía coincidir con la que venía impresa en los cheques.



</template>

<script>
import $ from 'jquery'
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicador: true,
    mostrarIndicador2: true,
    modal5_1: false,
    modal5_2: false,
    text_dolar:
      'pase sus dedos por el billete. Deberá sentir que es algo áspero al tacto como resultado del proceso de impresión intaglio y la composición única del papel. El papel de la moneda de los EE. UU. es una mezcla de 75 por ciento de algodón y 25 por ciento de lino.',
    title_dolar: 'Toque el papel:',
    text_euro:
      'los billetes en euros se imprimen en un papel hecho a base de fibras de algodón que les confiere una textura característica. Varias zonas del anverso están impresas en relieve y pueden identificarse al tacto. En general los billetes tienen una sensación al tacto inconfundible y una textura firme y resistente, que suele sentirse más gruesa en algunas partes del billete.',
    title_euro: 'Toque el papel:',
    text_option:
      'son enlaces web creados por la plataforma, de manera personalizada (cliente: transacción) y que el cliente recibe de forma segura vía correo electrónico. Al abrir el enlace, se accede al formulario donde en unos pocos pasos se escoge la forma de pago y se realiza el pago desde la entidad donde el cliente tiene sus fondos.',
    title_option: 'Links de pago:',
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
    modal10: false,
    modal11: false,
    item__1: true,
    item__2: false,
    item__3: false,
    item__4: false,
    item__5: false,
    item__6: false,
    item__7: false,
    item__8: false,
    item__9: false,
    item__1_50: true,
    item__2_50: false,
    item__3_50: false,
    item__4_50: false,
    item__5_50: false,
    item__6_50: false,
    item__7_50: false,
    item__8_50: false,
    item__9_50: false,
    item__1_20: true,
    item__2_20: false,
    item__3_20: false,
    item__4_20: false,
    item__5_20: false,
    item__6_20: false,
    item__7_20: false,
    item__8_20: false,
    item__9_20: false,
    item__1_10: true,
    item__2_10: false,
    item__3_10: false,
    item__4_10: false,
    item__5_10: false,
    item__6_10: false,
    item__7_10: false,
    item__8_10: false,
    item__9_10: false,
    reverso100: false,
    reverso50: false,
    reverso20: false,
    reverso10: false,
    item__1_tarjeta: true,
    item__2_tarjeta: false,
    item__3_tarjeta: false,
    item__4_tarjeta: false,
    item__5_tarjeta: false,
    item__6_tarjeta: false,
    item__7_tarjeta: false,
    item__1_tarjeta2: true,
    item__2_tarjeta2: false,
    item__3_tarjeta2: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
    $('.caja__interactiva').click(function() {
      $('.caja__interactiva').removeClass('caja__activa')
      $(this).addClass('caja__activa')
    })
    $('.boton__interactiva').click(function() {
      $('.boton__interactiva').removeClass('boton__activa')
      $(this).addClass('boton__activa')
    })
    $(document).hover(function() {
      $('.tarjeta__custom').click(function() {
        $('.tarjeta__custom').removeClass('acordion_activo')
        $(this).addClass('acordion_activo')
      })
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    setInfoDolar(title_dolar, text_dolar) {
      this.text_dolar = text_dolar
      this.title_dolar = title_dolar
    },
    setInfoEuro(title_euro, text_euro) {
      this.text_euro = text_euro
      this.title_euro = title_euro
    },
    setInfoOption(title_option, text_option) {
      this.text_option = text_option
      this.title_option = title_option
    },
    mostrar_item1() {
      this.item__2 = false
      this.item__3 = false
      this.item__4 = false
      this.item__5 = false
      this.item__6 = false
      this.item__7 = false
      this.item__8 = false
      this.item__9 = false
      this.item__1 = true
    },
    mostrar_item2() {
      this.item__2 = true
      this.item__3 = false
      this.item__4 = false
      this.item__5 = false
      this.item__6 = false
      this.item__7 = false
      this.item__8 = false
      this.item__9 = false
      this.item__1 = false
    },
    mostrar_item3() {
      this.item__2 = false
      this.item__3 = true
      this.item__4 = false
      this.item__5 = false
      this.item__6 = false
      this.item__7 = false
      this.item__8 = false
      this.item__9 = false
      this.item__1 = false
    },
    mostrar_item4() {
      this.item__2 = false
      this.item__3 = false
      this.item__4 = true
      this.item__5 = false
      this.item__6 = false
      this.item__7 = false
      this.item__8 = false
      this.item__9 = false
      this.item__1 = false
    },
    mostrar_item5() {
      this.item__2 = false
      this.item__3 = false
      this.item__4 = false
      this.item__5 = true
      this.item__6 = false
      this.item__7 = false
      this.item__8 = false
      this.item__9 = false
      this.item__1 = false
    },
    mostrar_item6() {
      this.item__2 = false
      this.item__3 = false
      this.item__4 = false
      this.item__5 = false
      this.item__6 = true
      this.item__7 = false
      this.item__8 = false
      this.item__9 = false
      this.item__1 = false
    },
    mostrar_item7() {
      this.item__2 = false
      this.item__3 = false
      this.item__4 = false
      this.item__5 = false
      this.item__6 = false
      this.item__7 = true
      this.item__8 = false
      this.item__9 = false
      this.item__1 = false
    },
    mostrar_item8() {
      this.item__2 = false
      this.item__3 = false
      this.item__4 = false
      this.item__5 = false
      this.item__6 = false
      this.item__7 = false
      this.item__8 = true
      this.item__9 = false
      this.item__1 = false
    },
    mostrar_item9() {
      this.item__2 = false
      this.item__3 = false
      this.item__4 = false
      this.item__5 = false
      this.item__6 = false
      this.item__7 = false
      this.item__8 = false
      this.item__9 = true
      this.item__1 = false
    },
    mostrar_item1_50() {
      this.item__2_50 = false
      this.item__3_50 = false
      this.item__4_50 = false
      this.item__5_50 = false
      this.item__6_50 = false
      this.item__7_50 = false
      this.item__8_50 = false
      this.item__9_50 = false
      this.item__1_50 = true
    },
    mostrar_item2_50() {
      this.item__2_50 = true
      this.item__3_50 = false
      this.item__4_50 = false
      this.item__5_50 = false
      this.item__6_50 = false
      this.item__7_50 = false
      this.item__8_50 = false
      this.item__9_50 = false
      this.item__1_50 = false
    },
    mostrar_item3_50() {
      this.item__2_50 = false
      this.item__3_50 = true
      this.item__4_50 = false
      this.item__5_50 = false
      this.item__6_50 = false
      this.item__7_50 = false
      this.item__8_50 = false
      this.item__9_50 = false
      this.item__1_50 = false
    },
    mostrar_item4_50() {
      this.item__2_50 = false
      this.item__3_50 = false
      this.item__4_50 = true
      this.item__5_50 = false
      this.item__6_50 = false
      this.item__7_50 = false
      this.item__8_50 = false
      this.item__9_50 = false
      this.item__1_50 = false
    },
    mostrar_item5_50() {
      this.item__2_50 = false
      this.item__3_50 = false
      this.item__4_50 = false
      this.item__5_50 = true
      this.item__6_50 = false
      this.item__7_50 = false
      this.item__8_50 = false
      this.item__9_50 = false
      this.item__1_50 = false
    },
    mostrar_item6_50() {
      this.item__2_50 = false
      this.item__3_50 = false
      this.item__4_50 = false
      this.item__5_50 = false
      this.item__6_50 = true
      this.item__7_50 = false
      this.item__8_50 = false
      this.item__9_50 = false
      this.item__1_50 = false
    },
    mostrar_item7_50() {
      this.item__2_50 = false
      this.item__3_50 = false
      this.item__4_50 = false
      this.item__5_50 = false
      this.item__6_50 = false
      this.item__7_50 = true
      this.item__8_50 = false
      this.item__9_50 = false
      this.item__1_50 = false
    },
    mostrar_item8_50() {
      this.item__2_50 = false
      this.item__3_50 = false
      this.item__4_50 = false
      this.item__5_50 = false
      this.item__6_50 = false
      this.item__7_50 = false
      this.item__8_50 = true
      this.item__9_50 = false
      this.item__1_50 = false
    },
    mostrar_item9_50() {
      this.item__2_50 = false
      this.item__3_50 = false
      this.item__4_50 = false
      this.item__5_50 = false
      this.item__6_50 = false
      this.item__7_50 = false
      this.item__8_50 = false
      this.item__9_50 = true
      this.item__1_50 = false
    },
    mostrar_item1_20() {
      this.item__2_20 = false
      this.item__3_20 = false
      this.item__4_20 = false
      this.item__5_20 = false
      this.item__6_20 = false
      this.item__7_20 = false
      this.item__8_20 = false
      this.item__9_20 = false
      this.item__1_20 = true
    },
    mostrar_item2_20() {
      this.item__2_20 = true
      this.item__3_20 = false
      this.item__4_20 = false
      this.item__5_20 = false
      this.item__6_20 = false
      this.item__7_20 = false
      this.item__8_20 = false
      this.item__9_20 = false
      this.item__1_20 = false
    },
    mostrar_item3_20() {
      this.item__2_20 = false
      this.item__3_20 = true
      this.item__4_20 = false
      this.item__5_20 = false
      this.item__6_20 = false
      this.item__7_20 = false
      this.item__8_20 = false
      this.item__9_20 = false
      this.item__1_20 = false
    },
    mostrar_item4_20() {
      this.item__2_20 = false
      this.item__3_20 = false
      this.item__4_20 = true
      this.item__5_20 = false
      this.item__6_20 = false
      this.item__7_20 = false
      this.item__8_20 = false
      this.item__9_20 = false
      this.item__1_20 = false
    },
    mostrar_item5_20() {
      this.item__2_20 = false
      this.item__3_20 = false
      this.item__4_20 = false
      this.item__5_20 = true
      this.item__6_20 = false
      this.item__7_20 = false
      this.item__8_20 = false
      this.item__9_20 = false
      this.item__1_20 = false
    },
    mostrar_item6_20() {
      this.item__2_20 = false
      this.item__3_20 = false
      this.item__4_20 = false
      this.item__5_20 = false
      this.item__6_20 = true
      this.item__7_20 = false
      this.item__8_20 = false
      this.item__9_20 = false
      this.item__1_20 = false
    },
    mostrar_item7_20() {
      this.item__2_20 = false
      this.item__3_20 = false
      this.item__4_20 = false
      this.item__5_20 = false
      this.item__6_20 = false
      this.item__7_20 = true
      this.item__8_20 = false
      this.item__9_20 = false
      this.item__1_20 = false
    },
    mostrar_item8_20() {
      this.item__2_20 = false
      this.item__3_20 = false
      this.item__4_20 = false
      this.item__5_20 = false
      this.item__6_20 = false
      this.item__7_20 = false
      this.item__8_20 = true
      this.item__9_20 = false
      this.item__1_20 = false
    },
    mostrar_item9_20() {
      this.item__2_20 = false
      this.item__3_20 = false
      this.item__4_20 = false
      this.item__5_20 = false
      this.item__6_20 = false
      this.item__7_20 = false
      this.item__8_20 = false
      this.item__9_20 = true
      this.item__1_20 = false
    },
    mostrar_item1_10() {
      this.item__2_10 = false
      this.item__3_10 = false
      this.item__4_10 = false
      this.item__5_10 = false
      this.item__6_10 = false
      this.item__7_10 = false
      this.item__8_10 = false
      this.item__9_10 = false
      this.item__1_10 = true
    },
    mostrar_item2_10() {
      this.item__2_10 = true
      this.item__3_10 = false
      this.item__4_10 = false
      this.item__5_10 = false
      this.item__6_10 = false
      this.item__7_10 = false
      this.item__8_10 = false
      this.item__9_10 = false
      this.item__1_10 = false
    },
    mostrar_item3_10() {
      this.item__2_10 = false
      this.item__3_10 = true
      this.item__4_10 = false
      this.item__5_10 = false
      this.item__6_10 = false
      this.item__7_10 = false
      this.item__8_10 = false
      this.item__9_10 = false
      this.item__1_10 = false
    },
    mostrar_item4_10() {
      this.item__2_10 = false
      this.item__3_10 = false
      this.item__4_10 = true
      this.item__5_10 = false
      this.item__6_10 = false
      this.item__7_10 = false
      this.item__8_10 = false
      this.item__9_10 = false
      this.item__1_10 = false
    },
    mostrar_item5_10() {
      this.item__2_10 = false
      this.item__3_10 = false
      this.item__4_10 = false
      this.item__5_10 = true
      this.item__6_10 = false
      this.item__7_10 = false
      this.item__8_10 = false
      this.item__9_10 = false
      this.item__1_10 = false
    },
    mostrar_item6_10() {
      this.item__2_10 = false
      this.item__3_10 = false
      this.item__4_10 = false
      this.item__5_10 = false
      this.item__6_10 = true
      this.item__7_10 = false
      this.item__8_10 = false
      this.item__9_10 = false
      this.item__1_10 = false
    },
    mostrar_item7_10() {
      this.item__2_10 = false
      this.item__3_10 = false
      this.item__4_10 = false
      this.item__5_10 = false
      this.item__6_10 = false
      this.item__7_10 = true
      this.item__8_10 = false
      this.item__9_10 = false
      this.item__1_10 = false
    },
    mostrar_item8_10() {
      this.item__2_10 = false
      this.item__3_10 = false
      this.item__4_10 = false
      this.item__5_10 = false
      this.item__6_10 = false
      this.item__7_10 = false
      this.item__8_10 = true
      this.item__9_10 = false
      this.item__1_10 = false
    },
    mostrar_item9_10() {
      this.item__2_10 = false
      this.item__3_10 = false
      this.item__4_10 = false
      this.item__5_10 = false
      this.item__6_10 = false
      this.item__7_10 = false
      this.item__8_10 = false
      this.item__9_10 = true
      this.item__1_10 = false
    },
    mostrar_item1_tarjeta() {
      this.item__2_tarjeta = false
      this.item__3_tarjeta = false
      this.item__4_tarjeta = false
      this.item__5_tarjeta = false
      this.item__6_tarjeta = false
      this.item__7_tarjeta = false
      this.item__8_tarjeta = false
      this.item__9_tarjeta = false
      this.item__1_tarjeta = true
    },
    mostrar_item2_tarjeta() {
      this.item__2_tarjeta = true
      this.item__3_tarjeta = false
      this.item__4_tarjeta = false
      this.item__5_tarjeta = false
      this.item__6_tarjeta = false
      this.item__7_tarjeta = false
      this.item__8_tarjeta = false
      this.item__9_tarjeta = false
      this.item__1_tarjeta = false
    },
    mostrar_item3_tarjeta() {
      this.item__2_tarjeta = false
      this.item__3_tarjeta = true
      this.item__4_tarjeta = false
      this.item__5_tarjeta = false
      this.item__6_tarjeta = false
      this.item__7_tarjeta = false
      this.item__8_tarjeta = false
      this.item__9_tarjeta = false
      this.item__1_tarjeta = false
    },
    mostrar_item4_tarjeta() {
      this.item__2_tarjeta = false
      this.item__3_tarjeta = false
      this.item__4_tarjeta = true
      this.item__5_tarjeta = false
      this.item__6_tarjeta = false
      this.item__7_tarjeta = false
      this.item__8_tarjeta = false
      this.item__9_tarjeta = false
      this.item__1_tarjeta = false
    },
    mostrar_item5_tarjeta() {
      this.item__2_tarjeta = false
      this.item__3_tarjeta = false
      this.item__4_tarjeta = false
      this.item__5_tarjeta = true
      this.item__6_tarjeta = false
      this.item__7_tarjeta = false
      this.item__8_tarjeta = false
      this.item__9_tarjeta = false
      this.item__1_tarjeta = false
    },
    mostrar_item6_tarjeta() {
      this.item__2_tarjeta = false
      this.item__3_tarjeta = false
      this.item__4_tarjeta = false
      this.item__5_tarjeta = false
      this.item__6_tarjeta = true
      this.item__7_tarjeta = false
      this.item__8_tarjeta = false
      this.item__9_tarjeta = false
      this.item__1_tarjeta = false
    },
    mostrar_item7_tarjeta() {
      this.item__2_tarjeta = false
      this.item__3_tarjeta = false
      this.item__4_tarjeta = false
      this.item__5_tarjeta = false
      this.item__6_tarjeta = false
      this.item__7_tarjeta = true
      this.item__8_tarjeta = false
      this.item__9_tarjeta = false
      this.item__1_tarjeta = false
    },
    mostrar_item1_tarjeta2() {
      this.item__2_tarjeta2 = false
      this.item__3_tarjeta2 = false
      this.item__4_tarjeta2 = false
      this.item__5_tarjeta2 = false
      this.item__6_tarjeta2 = false
      this.item__7_tarjeta2 = false
      this.item__8_tarjeta2 = false
      this.item__9_tarjeta2 = false
      this.item__1_tarjeta2 = true
    },
    mostrar_item2_tarjeta2() {
      this.item__2_tarjeta2 = true
      this.item__3_tarjeta2 = false
      this.item__4_tarjeta2 = false
      this.item__5_tarjeta2 = false
      this.item__6_tarjeta2 = false
      this.item__7_tarjeta2 = false
      this.item__8_tarjeta2 = false
      this.item__9_tarjeta2 = false
      this.item__1_tarjeta2 = false
    },
    mostrar_item3_tarjeta2() {
      this.item__2_tarjeta2 = false
      this.item__3_tarjeta2 = true
      this.item__4_tarjeta2 = false
      this.item__5_tarjeta2 = false
      this.item__6_tarjeta2 = false
      this.item__7_tarjeta2 = false
      this.item__8_tarjeta2 = false
      this.item__9_tarjeta2 = false
      this.item__1_tarjeta2 = false
    },
  },
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
.pulse__animate
  box-shadow: 0 0 0 rgba(204,169,44, 0.4)
  animation: pulse 2s infinite
@-webkit-keyframes pulse
  0%
    -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4)
  70%
      -webkit-box-shadow: 0 0 0 10px rgba(204,169,44, 0)
  100%
      -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0)
@keyframes pulse
  0%
    -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4)
    box-shadow: 0 0 0 0 rgba(204,169,44, 0.4)
  70%
      -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0)
      box-shadow: 0 0 0 10px rgba(204,169,44, 0)
  100%
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0)
      box-shadow: 0 0 0 0 rgba(204,169,44, 0)
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
.content__info_billete
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
.image__modal
  cursor: pointer
.image__modal:hover
  opacity: .7 !important
.item__image
  position: absolute
  top: 0
  width: 35px
  height: 35px
  background-color: white
  border-radius: 50px
  border: 1px #FF9800 solid
  text-align: center
  display: flex
  place-content: center
  align-items: center
  cursor: pointer
.item__image:hover
  opacity: .9 !important
  animation: none !important
  box-shadow: 0px 5px 17px #ffc978
.img-infografica__item_raya
  content: ''
  position: absolute
  width: 3px
  background-color: #ff9802
  top: 33px
  right: 45%
  z-index: 1
  height: 56vh
.item__image div
  background-color: #FF9800
  width: 25px
  height: 25px
  border-radius: 50px
.container__infografico
  position: sticky
.modal-a__content
  max-height: 83vh
.img-infografica.color-secundario .img-infografica__item__dot:before, .img-infografica.color-secundario .img-infografica__item__dot:after
  background-color: #FF9800
  border: 3px white solid
.img-infografica__item__dot:before, .img-infografica__item__dot:after
  opacity: 1 !important
.caja__activa:after
  content: ''
  width: 0
  height: 0
  border-left: 20px solid transparent
  border-right: 20px solid transparent
  border-top: 20px solid #ff9802
  position: absolute
  bottom: -26px
  transform: translate(-50%,-50%)
.pl-0
  padding-left: 0
.pr-0
  padding-right: 0
@media (max-width: 990px)
  .image__formating
    margin:0px !important
@media (max-width: 500px)
  .order-xs-1
    order: 1
  .order-xs-2
    order: 2
  .order-xs-3
    order: 3
.contenedor1
  background: url('../assets/curso/tema3/115.svg')
  background-size: cover
  background-position: center 130px
  background-repeat: no-repeat
.boton__activa
  background-color: #FF9800 !important
.boton__activa:after
  content: ''
  width: 0
  height: 0
  border-left: 20px solid transparent
  border-right: 20px solid transparent
  border-bottom: 20px solid #ffffff
  position: absolute
  bottom: -94px
  transform: translate(-50%, -50%)
  left: 50%
  z-index: 9
.tarjeta__custom
  background-color: #FFF1DB
.acordion_activo
  background-color: #DEE4F0 !important
.bullet
  padding: 1rem
  border-radius: 50%
  box-shadow: 0px 0px 10px #c1c1c1
  border: 3px white solid
.bullet_rojo:before,.bullet_rojo:after,.img-infografica__item_raya.bullet_rojo
  background-color: #B01A29 !important
.bullet_amarillo:before,.bullet_amarillo:after,.img-infografica__item_raya.bullet_amarillo
  background-color: #E8A817 !important
.bullet_verde:after,.bullet_verde:before,.img-infografica__item_raya.bullet_verde
  background-color: #4A762E !important
.bullet_morado:before,.bullet_morado:after,.img-infografica__item_raya.bullet_morado
  background-color: #642A95 !important
</style>
