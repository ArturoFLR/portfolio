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
  comments: string[];
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
    "images/proyects/checkmate/checkmate-2-big.webp",
    "images/proyects/checkmate/checkmate-3-miniature.webp",
    "images/proyects/checkmate/checkmate-4-miniature.webp",
    "images/proyects/checkmate/checkmate-5-miniature.webp",
    "images/proyects/checkmate/checkmate-6-miniature.webp",
  ],
  comments: [],
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
