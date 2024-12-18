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
  images: [],
  imagesMobile: [],
  comments: [],
};

const platinImagesAndComments: ImagesAndComments = {
  images: [],
  imagesMobile: [],
  comments: [],
};

const eatsqualityImagesAndComments: ImagesAndComments = {
  images: [],
  imagesMobile: [],
  comments: [],
};

const en256coloresImagesAndComments: ImagesAndComments = {
  images: [],
  imagesMobile: [],
  comments: [],
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
