import { useEffect, useRef, useState } from "react";
import styles from "./App.module.scss";
import LoadingContainerHero from "./components/loadingContainers/loadingContainerHero/LoadingContainerHero";
import LetterTranslator from "./components/letterTranslator/LetterTranslator";
import SkipAnimationButton from "./components/buttons/skipAnimationButton/SkipAnimationButton";
import GenericLink from "./components/links/genericLink/GenericLink";
import Profile from "./components/profile/Profile";
import AnimatedLine from "./components/animatedLine/AnimatedLine";
import HeaderH2 from "./components/headers/headerH2/HeaderH2";
import ProyectCard from "./components/proyectCard/ProyectCard";
import MainNav from "./components/mainNav/MainNav";

type MainStateType =
  | "loading1"
  | "loading2"
  | "loading3"
  | "loading4"
  | "loaded";

function App() {
  const [mainState, setMainState] = useState<MainStateType>("loading1");
  const mainStateTimeout = useRef<number>(0);

  function handleSkipAnimationButtonClick() {
    clearTimeout(mainStateTimeout.current);
    setMainState("loaded");
  }

  useEffect(() => {
    if (mainState === "loading1") {
      mainStateTimeout.current = window.setTimeout(() => {
        setMainState("loading2");
      }, 5500);
    }

    if (mainState === "loading2") {
      mainStateTimeout.current = window.setTimeout(() => {
        setMainState("loading3");
      }, 5300);
    }

    if (mainState === "loading3") {
      mainStateTimeout.current = window.setTimeout(() => {
        setMainState("loading4");
      }, 2000);
    }

    if (mainState === "loading4") {
      mainStateTimeout.current = window.setTimeout(() => {
        setMainState("loaded");
      }, 1000);
    }

    return () => {
      clearTimeout(mainStateTimeout.current);
    };
  }, [mainState]);

  return (
    <main className={styles.mainTag}>
      <header className={styles.headerTag}>
        <LoadingContainerHero />
        <div className={styles.mainLetterTranslatorContainer} id="aboutMe">
          {mainState !== "loading1" && (
            <LetterTranslator
              text="Front-End  Developer"
              activate={true}
              alienLettersTimer={100}
              normalLettersTimer={150}
            />
          )}
        </div>

        {mainState !== "loading1" && mainState !== "loading2" && <MainNav />}

        {mainState !== "loaded" && (
          <div className={styles.skipAnimationButtonPositioner}>
            <SkipAnimationButton handleClick={handleSkipAnimationButtonClick}>
              Saltar Intro
            </SkipAnimationButton>
          </div>
        )}
      </header>

      {(mainState === "loading3" ||
        mainState === "loading4" ||
        mainState === "loaded") && (
        <>
          <section className={styles.profilePositioner}>
            <Profile />

            {(mainState === "loading4" || mainState === "loaded") && (
              <div className={styles.mainButtonsContainer} id="proyects">
                <GenericLink
                  hrefValue="https://github.com/ArturoFLR"
                  icon="github"
                >
                  GitHub
                </GenericLink>

                <GenericLink
                  hrefValue="https://www.linkedin.com/in/arturo-lopez-rosa/"
                  icon="linkedin"
                >
                  LinkedIn
                </GenericLink>

                <GenericLink hrefValue="documents/cv2024.pdf" icon="document">
                  Descargar CV
                </GenericLink>
              </div>
            )}
          </section>

          {mainState === "loaded" && (
            <>
              <div className={styles.animatedLinePositioner}>
                <AnimatedLine />
              </div>

              <section
                className={`${styles.projectsSectionContainer} ${styles.fadeInAnimation} ${styles.sectionsCommonStyles}`}
              >
                <HeaderH2>Proyectos</HeaderH2>
                <div className={styles.proyectCardsContainer}>
                  <ProyectCard
                    imageSrc="images/proyects/checkmate/checkmate-1-miniature.webp"
                    imageAlt="Imagen de CHECKMATE!"
                    title="CHECKMATE!"
                    description1="Proyecto Personal."
                    description2="Juego de ajedrez online para uno o dos jugadores con varios niveles de dificultad, avatares y posibilidad de guardar y cargar partida."
                    techIcons={[
                      "html5",
                      "css3",
                      "poo",
                      "typescript",
                      "react",
                      "sass",
                    ]}
                    online="https://arturoflr.github.io/checkmate/"
                    github="https://github.com/ArturoFLR/checkmate"
                  />

                  <ProyectCard
                    imageSrc="images/proyects/lringenieros/lr_ingenieros-1-miniature.webp"
                    imageAlt="Imagen de L&R Ingenieros"
                    title="L&R Ingenieros"
                    description1="Trabajo Freelance."
                    description2="Sitio Web oficial de L&R Ingenieros. Diseño UX/UI responsive, implementación con React y TypeScript y despliegue final con dominio propio en Netlify."
                    techIcons={[
                      "html5",
                      "css3",
                      "typescript",
                      "react",
                      "reactrouter",
                      "sass",
                      "netlify",
                    ]}
                    online="https://www.lringenieros.es/"
                    github="https://github.com/ArturoFLR/lr_ingenieros"
                  />

                  <ProyectCard
                    imageSrc="images/proyects/plantin/plant_in-1-miniature.webp"
                    imageAlt="Imagen de Plant-In!"
                    title="Plant-In"
                    description1="Proyecto en Equipo para ID for Ideas."
                    description2="Web App diseñada para promocionar las huertas agroecológicas dentro del territorio nacional Argentino. Principal responsable del Front-End."
                    techIcons={[
                      "html5",
                      "docker",
                      "typescript",
                      "react",
                      "reactrouter",
                      "leaflet",
                      "tailwind",
                    ]}
                    online="https://plant-in.netlify.app/"
                    github="https://github.com/Mgll3/agro-plantation-app"
                  />

                  <ProyectCard
                    imageSrc="images/proyects/eatsquality/eatsquality-1-miniature.webp"
                    imageAlt="Imagen de Eatsquality"
                    title="Eatsquality"
                    description1="Proyecto en Equipo para No Country."
                    description2="Web App de comida a domicilio. En menos de 4 semanas se pudo entregar un MVP con los roles de cliente y restaurante operativos."
                    techIcons={[
                      "html5",
                      "css3",
                      "typescript",
                      "react",
                      "reactrouter",
                      "tailwind",
                    ]}
                    github="https://github.com/No-Country/c17-113-ft-csharp"
                  />

                  <ProyectCard
                    imageSrc="images/proyects/en256colores/en256colores-1-miniature.webp"
                    imageAlt="Imagen de En 256 Colores"
                    title="En 256 Colores"
                    description1="Proyecto Personal."
                    description2="Sitio Web personal orientado a los videojuegos clásicos. Mi primera toma de contacto con el diseño web antes de plantearme un cambio laboral."
                    techIcons={["html5", "css3", "javascript"]}
                    online="https://www.en256colores.com/index.html"
                  />
                </div>
              </section>

              <div className={styles.animatedLinePositioner} id="technologies">
                <AnimatedLine />
              </div>

              <section
                className={`${styles.techSectionContainer} ${styles.sectionsCommonStyles}`}
              >
                <HeaderH2>Tecnologías</HeaderH2>
              </section>
            </>
          )}
        </>
      )}
    </main>
  );
}

export default App;
