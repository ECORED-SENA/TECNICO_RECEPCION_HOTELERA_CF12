export default {
  global: {
    componenteFormativo: 'Formas de pago',
    descripcionCurso:
      'De la misma forma que el cliente ingresa al hotel, debe salir de él al final de su estancia. En esta unidad se revisarán los conceptos para llevar a cabo con eficiencia un <em>Check out</em> que es el último paso de la estancia del huésped y se tiene la responsabilidad de cerrar la estadía en forma impecable. Cualquier error en este momento puede dar al traste con toda la experiencia del usuario en el hotel.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '<em>Check out</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '<em>Late Check out</em>',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Confirmación de salidas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Salidas anticipadas',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'fas fa-video',
        numero: '2',
        titulo: 'Procedimiento técnico',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Métodos de pago',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Moneda nacional',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Divisas',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Tarjetas débito y crédito',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Pago virtual (no presencial)',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Cuentas compañía (<em>Bill to</em>)',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Cheques',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Cierre de factura',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Evaluación del servicio',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Sacar huésped del sistema',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Pase de salida',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Organizar documentación',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Situaciones especiales',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Cierre de caja',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Harbey Castelblanco Muñoz',
        cargo: 'Experto temático',
        centro: 'Centro Colombo Alemán',
      },
      {
        nombre: 'Leidy Carolina Aris Aguirre',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Pérez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Carlos Julián Ramírez Benítez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación y vinculación en plataforma LMS'],
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Banco de España. (2021). Billetes de euro. ',
      link:
        'https://www.bde.es/bde/es/areas/billemone/Publico_general/Billetes_de_euro/',
    },
    {
      referencia:
        'Banco de España. (2021). Guía resumida sobre los elementos de seguridad de los billetes en euros. ',
      link:
        'https://www.bde.es/f/webbde/EYC/billemone/euro/billetes/ficheros/es/Guia_resumida.pdf',
    },
    {
      referencia: 'Banco de la República. (2021). Billetes y monedas. ',
      link: 'https://www.banrep.gov.co/es/billetes-y-monedas',
    },
    {
      referencia: 'Credibanco. (2021). Guía rápida del datáfono. ',
      link:
        'https://www.credibanco.com/wp-content/uploads/2021/01/guia-rapida-del-datafono.pdf',
    },
    {
      referencia: 'Dolarcolombia.com (2021). Tasa representativa del mercado. ',
      link:
        'https://www.dolar-colombia.com/como-se-calcula-la-trm-del-dolar-en-colombia.php#:~:text=La%20Tasa%20Representativa%20del%20Mercado,como%20en%20el%20sector%20privado',
    },
    {
      referencia:
        'Incocrédito. (2021). Recomendaciones de seguridad para el comercio. ',
      link:
        'https://scotiabankfiles.azureedge.net/scotiabank-colombia/Colpatria/pdf/personas/tarjetas/Recomendaciones-de-seguridad-para-el-comercio.pdf',
    },
    {
      referencia:
        'Simón, M. (2016). <em>Recepción Front Office</em>. Ediciones Turísticas. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/78933?page=83&page=84',
    },
    {
      referencia:
        'U.S. <em>Currency Educatión Program</em>. (01 de 06 de 2021). <em>Dollars In Detail.</em> ',
      link:
        'https://www.uscurrency.gov/sites/default/files/download-materials/es/CEP_Dollars_In_Detail_Brochure.pdf',
    },
    {
      referencia: 'Urrutia, M. (2006). Billete de mil pesos. ',
      link:
        'https://www.banrep.gov.co/es/billetes-y-monedas/billete-1000-pesos',
    },
  ],
  glosario: [
    {
      termino: 'Overbooking',
      significado:
        'momento en el cual se venden o reservan más habitaciones de las disponibles. También se conoce como sobre venta.',
    },
    {
      termino: 'Código único de Incocrédito',
      significado:
        'número que asigna Incocrédito (asociación especializada en la seguridad en la industria de medios de pago en Colombia) con el fin de identificar cada punto de venta y sobre él registrar las transacciones realizadas con tarjeta crédito o débito.',
    },
    {
      termino: 'Norma PCI DSS',
      significado:
        ' <em>Payment Card Industry Data Security Standards</em> recopila los estándares y políticas que se deben implementar para proteger las transacciones con tarjeta de crédito, en lo referente a <em>software</em>, redes y almacenamiento de información. ',
    },
    {
      termino: 'VPN',
      significado:
        ' <em>Virtual Private Network</em>: una red de conexión a internet privada y encriptada, para realizar las operaciones a través de ella.',
    },
    {
      termino: 'DES o AES',
      significado:
        'cifrado de datos AES es un algoritmo criptográfico más elegante y eficiente, pero su principal fortaleza reside en la opción de utilizar diferentes longitudes de clave. Pudiéndose elegir entre claves de 128, 192 o 256 bits, lo que lo hace mucho más robusta que la clave de solo 56 bits empleada en DES. (https://www.analyticslane.com/2019/07/08/comparacion-entre-los-cifrados-des-y-aes/)',
    },
  ],
  complementario: [
    {
      texto: 'Banco de la República. (2021). Moneda de 1000.',
      tipo: 'Folleto',
      link:
        'https://www.banrep.gov.co/sites/default/files/paginas/Moneda_de_1000.pdf',
    },
    {
      texto: 'Banco de la República. (2021). Moneda de 500.',
      tipo: 'Folleto',
      link:
        'https://www.banrep.gov.co/sites/default/files/paginas/Moneda_de_500.pdf',
    },
    {
      texto: 'Banco de la República. (2021). Moneda de 200.',
      tipo: 'Folleto',
      link:
        'https://www.banrep.gov.co/sites/default/files/paginas/Moneda_de_200.pdf',
    },
    {
      texto: 'Banco de la República. (2021). Moneda de 100.',
      tipo: 'Folleto',
      link:
        'https://www.banrep.gov.co/sites/default/files/paginas/Moneda_de_100_0.pdf',
    },
    {
      texto: 'uscurrency.gov. (2021). U.S. Currency Education Program. ',
      tipo: 'Folleto',
      link:
        'https://www.uscurrency.gov/sites/default/files/download-materials/es/CEP_Dollars_In_Detail_Brochure.pdf',
    },
    {
      texto:
        'Banco de España. (2021). Guía resumida sobre los elementos de seguridad de los billetes en euros. ',
      tipo: 'Folleto',
      link:
        'https://www.bde.es/f/webbde/EYC/billemone/euro/billetes/ficheros/es/Guia_resumida.pdf',
    },
    {
      texto: 'Credibanco. (2021). Guía rápida del datáfono. ',
      tipo: 'Folleto',
      link:
        'https://www.credibanco.com/wp-content/uploads/2021/01/guia-rapida-del-datafono.pdf',
    },
    {
      texto:
        'Incocrédito. (2021). Recomendaciones de seguridad para el comercio. ',
      tipo: 'Folleto',
      link:
        'https://scotiabankfiles.azureedge.net/scotiabank-colombia/Colpatria/pdf/personas/tarjetas/Recomendaciones-de-seguridad-para-el-comercio.pdf',
    },
  ],
}
