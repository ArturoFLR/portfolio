const proyectsNames: string[] = [
  "Checkmate",
  "L&R Ingenieros",
  "Plant In",
  "EatsQuality",
  "En 256 Colores",
];

const proyectsRoutes: string[] = [
  "/checkmate",
  "/lringenieros",
  "/plantin",
  "/eatsquality",
  "/en256colores",
];

type ImagesAndComments = {
  images: string[];
  imagesMobile: string[];
  comments: string[][];
};

const checkmateImagesAndComments: ImagesAndComments = {
  images: [
    "images/proyects/checkmate/checkmate-1-big.webp",
    "images/proyects/checkmate/checkmate-2-big.webp",
    "images/proyects/checkmate/checkmate-3-big.webp",
    "images/proyects/checkmate/checkmate-4-big.webp",
    "images/proyects/checkmate/checkmate-5-big.webp",
    "images/proyects/checkmate/checkmate-6-big.webp",
  ],
  imagesMobile: [
    "images/proyects/checkmate/checkmate-1-miniature.webp",
    "images/proyects/checkmate/checkmate-2-miniature.webp",
    "images/proyects/checkmate/checkmate-3-big.webp",
    "images/proyects/checkmate/checkmate-4-miniature.webp",
    "images/proyects/checkmate/checkmate-5-miniature.webp",
    "images/proyects/checkmate/checkmate-6-miniature.webp",
  ],
  comments: [
    [
      "Programado mediante POO (Programación Orientada a Objetos) desde cero, sin utilizar ningún tipo de librería ni ejemplos a la hora de modelar la lógica del juego.",
      "Cada pieza del tablero es un objeto con los métodos y propiedades necesarios para moverse, comer a otra pieza, ser comidos... activando en cada caso las animaciones y cambios necesarios en su entorno.",
      "Se muestran al usuario diversas ayudas visuales: cuándo está en jaque, las casillas a las que puede moverse, aquellas donde no (en el caso del rey)...",
    ],
    [
      "Posibilidad de enfrentarse a otro jugador en el mismo dispositivo o jugar contra la IA (Robotín). Tres niveles de dificultad.",
      "La IA se genera consumiendo la API pública de Stockfish mediante solicitudes HTTP/JSON.",
      "Fue necesario desarrollar un sistema de traducción bidireccional entre el estado del tablero en la aplicación y la notación oficial del ajedrez FEN (Forsyth-Edwards Notation), requerida en las comunicaciones con la API de Stockfish.",
    ],
    [
      "Diseño completamente responsive y funcional en todo tipo de dispositivos, desde móviles a televisiones 4K.",
    ],
    [
      "Se utilizan todo tipo de animaciones CSS en las piezas, menús y pantallas de fin de juego, con el fin de hacer la experiencia más dinámica y atractiva para el usuario.",
      "Al jugar contra la IA se muestran diversos emojis animados para darle más personalidad a esta y hacer más llevaderos los tiempos de espera mientras se realizan las peticiones HTTP.",
    ],
    [
      "Es posible salvar la partida en cualquier momento, guardándose todas las variables y estados necesarios en el Local Storage del equipo del usuario.",
    ],
    [
      "Los jugadores pueden seleccionar su avatar, su nombre y la dificultad deseada antes de comenzar la partida.",
    ],
  ],
};

const lringenierosImagesAndComments: ImagesAndComments = {
  images: [
    "images/proyects/lringenieros/l&rIngenieros-1-big.webp",
    "images/proyects/lringenieros/l&rIngenieros-2-big.webp",
    "images/proyects/lringenieros/l&rIngenieros-3-big.webp",
    "images/proyects/lringenieros/l&rIngenieros-4-big.webp",
  ],
  imagesMobile: [
    "images/proyects/lringenieros/l&rIngenieros-1-miniature.webp",
    "images/proyects/lringenieros/l&rIngenieros-2-miniature.webp",
    "images/proyects/lringenieros/l&rIngenieros-3-miniature.webp",
    "images/proyects/lringenieros/l&rIngenieros-4-big.webp",
  ],
  comments: [
    [
      "Sitio Web corporativo para L&R Ingenieros, especializados en la realización de proyectos de instalaciones en edificación.",
      "Diseño UX/UI e implementación mediante React y TypeScript.",
      "Desarrollo de un slider animado y personalizado para la página de inicio, sin utilizar librerías de terceros.",
    ],
    [
      "Efectos animados activados por el desplazamiento del usuario mediante scroll (scroll-triggered effects).",
    ],
    [
      "Visor de imágenes de proyectos personalizado. Cuando se detecta más de una imagen en el proyecto se activa el modo slider, permitiendo al usuario navegar entre ellas.",
    ],
    [
      "Diseño completamente responsive y funcional en todo tipo de dispositivos, desde móviles a televisiones 4K.",
    ],
  ],
};

const platinImagesAndComments: ImagesAndComments = {
  images: [],
  imagesMobile: [],
  comments: [],
};

const eatsqualityImagesAndComments: ImagesAndComments = {
  images: [
    "images/proyects/eatsquality/eatsquality-1-big.webp",
    "images/proyects/eatsquality/eatsquality-2-big.webp",
    "images/proyects/eatsquality/eatsquality-3-big.webp",
    "images/proyects/eatsquality/eatsquality-4-big.webp",
    "images/proyects/eatsquality/eatsquality-5-big.webp",
    "images/proyects/eatsquality/eatsquality-6-big.webp",
  ],
  imagesMobile: [
    "images/proyects/eatsquality/eatsquality-1-miniature.webp",
    "images/proyects/eatsquality/eatsquality-2-miniature.webp",
    "images/proyects/eatsquality/eatsquality-3-miniature.webp",
    "images/proyects/eatsquality/eatsquality-4-miniature.webp",
    "images/proyects/eatsquality/eatsquality-5-miniature.webp",
    "images/proyects/eatsquality/eatsquality-6-miniature.webp",
  ],
  comments: [
    [
      "Proyecto gestionado por la web No Country, en la que se crean grupos de trabajo formados por diversos perfiles (front-end, back-end, ux/ui...) y se les asigna un jefe de proyecto, con el objetivo de desarrollar una proyecto en 5 semanas. En este caso se decidió crear una Web App de comida a domicilio.",
      "En la 2º semana el equipo de back-end dejó el proyecto, por lo que tuve que hacerme cargo también de este aspecto con NodeJs + Express.",
      "A pesar de los contratiempos, se pudo entregar un MVP funcional con los roles de cliente y restaurante en el plazo establecido.",
    ],
    [
      "El cliente puede acceder al menú de cada restaurante para crear su pedido.",
      "Este puede ser modificado en cualquier momento, añadiendo o eliminando productos, o cancelándolo si es necesario.",
      "Un usuario puede tener a la vez los roles de cliente y restaurante, pudiendo cambiar entre ellos en cualquier momento sin necesidad de deslogarse. La interfaz de usuario se adaptará en consecuencia.",
    ],
    [
      'Desde el apartado "comidas" se pueden realizar pedidos a varios restaurantes a la vez, generándose en la base de datos un pedido independiente para cada restaurante implicado.',
    ],
    [
      "El cliente puede ver el estado de sus pedidos en curso, así como el histórico de pedidos anteriores.",
      "Cuando el restaurante modifica el estado, la información se actualiza inmediatamente en la vista de cliente.",
    ],
    [
      "El restaurante también puede consultar los pedidos pendientes y realizados, así como modificar su estado.",
      "En cada pedido se muestran los datos necesarios para hacer la entrega o contactar con el cliente.",
    ],
    [
      "El restaurante puede crear y modificar su menú, añadiendo o eliminando categorías de comidas, productos y precios.",
      "Esto se realiza mediante un formulario que genera dinámicamente los campos necesarios.",
      "El formulario implementa validación de campos.",
    ],
  ],
};

const en256coloresImagesAndComments: ImagesAndComments = {
  images: [
    "images/proyects/en256colores/en256colores-1-big.webp",
    "images/proyects/en256colores/en256colores-2-big.webp",
    "images/proyects/en256colores/en256colores-3-big.webp",
    "images/proyects/en256colores/en256colores-4-big.webp",
    "images/proyects/en256colores/en256colores-5-big.webp",
    "images/proyects/en256colores/en256colores-6-big.webp",
  ],
  imagesMobile: [
    "images/proyects/en256colores/en256colores-1-miniature.webp",
    "images/proyects/en256colores/en256colores-2-miniature.webp",
    "images/proyects/en256colores/en256colores-3-miniature.webp",
    "images/proyects/en256colores/en256colores-4-miniature.webp",
    "images/proyects/en256colores/en256colores-5-miniature.webp",
    "images/proyects/en256colores/en256colores-6-big.webp",
  ],
  comments: [
    [
      "Página web sobre videojuegos clásicos, creada como pasatiempo personal. Realizada con HTML, CSS y JavaScript, sin ningún tipo de librería o framework.",
      "Fue mi primera toma de contacto con el mundo del desarrollo web, y la experiencia me resultó tan interesante que a la larga me hizo plantearme seriamente un cambio laboral.",
    ],
    [
      "A pesar de desconocer en aquel momento herramientas como CSS Grid o Flexbox, se logró una maquetación de cierta complejidad mediante el uso de la propiedad 'float' y el posicionamiento relativo y absoluto.",
    ],
    [
      "El objetivo de la página, desde el punto de vista del diseño, era emular la estética de las revistas de videojuegos de los años 80 y 90, con multitud de imágenes en diversas configuraciones.",
      "Para ello se crearon diversas clases CSS reutilizables que permitían utilizar una o varias imágenes alineadas horizontal o verticalmente, con o sin pie de foto, fácilmente.",
    ],
    [
      "También se utilizaron elementos 'aside' con información adicional sobre tecnologías, creadores, anécdotas...",
    ],
    [
      "La página cuenta con un visor de imágenes que se convierte en slider si el usuario pulsa sobre una serie con varias imágenes.",
    ],
    [
      "Diseño completamente responsive y funcional en todo tipo de dispositivos.",
      "Los elementos 'aside' son minimizados en la versión móvil para facilitar la navegación, siendo posible desplegarlos pulsando con el ratón.",
    ],
  ],
};

const proyectsData = {
  proyectsNames: proyectsNames,
  proyectsRoutes: proyectsRoutes,
  checkmateImagesAndComments: checkmateImagesAndComments,
  lringenierosImagesAndComments: lringenierosImagesAndComments,
  platinImagesAndComments: platinImagesAndComments,
  eatsqualityImagesAndComments: eatsqualityImagesAndComments,
  en256coloresImagesAndComments: en256coloresImagesAndComments,
};

export default proyectsData;
