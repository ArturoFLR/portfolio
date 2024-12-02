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
                    description="Proyecto personal. Juego de ajedrez online para uno o dos jugadores, con varios niveles de dificultas y posibilidad de guardar y cargar partida."
                    techIcons={[
                      "icons/html5.webp",
                      "icons/css3.webp",
                      "icons/typescript.webp",
                      "icons/react.webp",
                      "icons/sass.webp",
                    ]}
                    online="https://arturoflr.github.io/checkmate/"
                    github="https://github.com/ArturoFLR/checkmate"
                  />

                  <ProyectCard
                    imageSrc="images/proyects/checkmate/checkmate-1-miniature.webp"
                    imageAlt="Imagen de CHECKMATE!"
                    title="CHECKMATE!"
                    description="Proyecto personal. Juego de ajedrez online para uno o dos jugadores, con varios niveles de dificultas y posibilidad de guardar y cargar partida."
                    techIcons={[
                      "icons/html5.webp",
                      "icons/css3.webp",
                      "icons/typescript.webp",
                      "icons/react.webp",
                      "icons/sass.webp",
                    ]}
                    github="https://github.com/ArturoFLR/checkmate"
                  />

                  <ProyectCard
                    imageSrc="images/proyects/checkmate/checkmate-1-miniature.webp"
                    imageAlt="Imagen de CHECKMATE!"
                    title="CHECKMATE!"
                    description="Proyecto personal. Juego de ajedrez online para uno o dos jugadores, con varios niveles de dificultas y posibilidad de guardar y cargar partida."
                    techIcons={[
                      "icons/html5.webp",
                      "icons/css3.webp",
                      "icons/typescript.webp",
                      "icons/react.webp",
                      "icons/sass.webp",
                    ]}
                    online="https://arturoflr.github.io/checkmate/"
                    github="https://github.com/ArturoFLR/checkmate"
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
