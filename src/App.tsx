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
        <div className={styles.mainLetterTranslatorContainer}>
          {mainState !== "loading1" && (
            <LetterTranslator
              text="Front-End  Developer"
              activate={true}
              alienLettersTimer={100}
              normalLettersTimer={150}
            />
          )}
        </div>

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
              <div className={styles.mainButtonsContainer}>
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
                    description1="Proyecto personal."
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
                      "express",
                      "react",
                      "sass",
                    ]}
                    online="https://www.lringenieros.es/"
                    github="https://github.com/ArturoFLR/lr_ingenieros"
                  />

                  <ProyectCard
                    imageSrc="images/proyects/plantin/plant_in-1-miniature.webp"
                    imageAlt="Imagen de Plant-In!"
                    title="Plant-In"
                    description1="Proyecto en Equipo."
                    description2="Web App diseñada para promocionar las huertas agroecológicas dentro del territorio nacional Argentino. Principal responsable del Front-End."
                    techIcons={[
                      "netlify",
                      "css3",
                      "typescript",
                      "react",
                      "sass",
                      "javascript",
                    ]}
                    online="https://plant-in.netlify.app/"
                    github="https://github.com/Mgll3/agro-plantation-app"
                  />
                </div>
              </section>

              <div className={styles.animatedLinePositioner}>
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
