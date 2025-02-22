import { useEffect, useRef, useState } from "react";
import styles from "./Home.module.scss";
import LoadingContainerHero from "../components/loadingContainers/loadingContainerHero/LoadingContainerHero";
import LetterTranslator from "../components/letterTranslator/LetterTranslator";
import MainNav from "../components/navigation/mainNav/MainNav";
import SkipAnimationButton from "../components/buttons/skipAnimationButton/SkipAnimationButton";
import Profile from "../components/profile/Profile";
import GenericLink from "../components/links/genericLink/GenericLink";
import AnimatedLine from "../components/animatedLine/AnimatedLine";
import HeaderH2 from "../components/headers/headerH2/HeaderH2";
import ProyectCard from "../components/proyectCard/ProyectCard";
import { useLocation } from "react-router";
import TechIcon, { TechIconType } from "../components/techIcon/TechIcon";
import { Helmet } from "react-helmet";

type MainStateType =
  | "loading1"
  | "loading2"
  | "loading3"
  | "loading4"
  | "loaded"
  | "noAnimations";

function Home() {
  const [mainState, setMainState] = useState<MainStateType>("loading1");
  const mainStateTimeout = useRef<number>(0);
  const location = useLocation();

  if (location.state === null) location.state = { animated: true };

  const techIcons: TechIconType[] = [
    "css3",
    "docker",
    "express",
    "git",
    "html5",
    "javascript",
    "netlify",
    "poo",
    "react",
    "reactrouter",
    "sass",
    "tailwind",
    "typescript",
    "vscode",
    "leaflet",
    "jest",
    "cypress",
    "axios",
    "vite",
    "azure",
    "jira",
  ];

  function handleSkipAnimationButtonClick() {
    clearTimeout(mainStateTimeout.current);
    setMainState("noAnimations");
  }

  useEffect(() => {
    if (location.state.animated === false) {
      setMainState("noAnimations");
      //This line resets the 'state' set by the <Link /> that refer to Home from other routes, since otherwise the 'animated: false' property of the 'state' is maintained even when reloaded with F5 and the Home animations will never be shown again.
      window.history.replaceState({}, document.title);
    }

    if (mainState === "loading1") {
      mainStateTimeout.current = window.setTimeout(() => {
        setMainState("loading2");
      }, 2500);
    }

    if (mainState === "loading2") {
      mainStateTimeout.current = window.setTimeout(() => {
        setMainState("loading3");
      }, 3000);
    }

    if (mainState === "loading3") {
      mainStateTimeout.current = window.setTimeout(() => {
        setMainState("loading4");
      }, 0);
    }

    if (mainState === "loading4") {
      mainStateTimeout.current = window.setTimeout(() => {
        setMainState("loaded");
      }, 500);
    }

    return () => {
      clearTimeout(mainStateTimeout.current);
    };
  }, [mainState]);

  return (
    <main className={styles.mainTag}>
      <Helmet>
        <title>Arturo López Rosa | Desarrollador Frontend</title>
        <meta
          name="description"
          content="Portfolio of Arturo López Rosa, desarrollador Front-End especializado en React y TypeScript. Conóceme y explora mis proyectos."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <header className={styles.headerTag}>
        <LoadingContainerHero
          animated={mainState === "noAnimations" ? false : true}
        />

        <div className={styles.mainLetterTranslatorContainer} id="aboutMe">
          {mainState !== "loading1" && (
            <>
              <LetterTranslator
                text="Front-End  Developer"
                activate={mainState === "noAnimations" ? false : true}
                alienLettersTimer={mainState === "noAnimations" ? 10 : 50}
                normalLettersTimer={mainState === "noAnimations" ? 15 : 90}
                forMainPage={true}
              />
              <p className={styles.ariaOnly}>Font-End Developer</p>
            </>
          )}
        </div>

        {mainState !== "loading1" && mainState !== "loading2" && (
          <MainNav animated={mainState === "noAnimations" ? false : true} />
        )}

        {mainState !== "loaded" && mainState !== "noAnimations" && (
          <div className={styles.skipAnimationButtonPositioner}>
            <SkipAnimationButton handleClick={handleSkipAnimationButtonClick}>
              Saltar Intro
            </SkipAnimationButton>
          </div>
        )}
      </header>

      {(mainState === "loading3" ||
        mainState === "loading4" ||
        mainState === "loaded" ||
        mainState === "noAnimations") && (
        <>
          <section className={styles.profilePositioner}>
            <Profile animated={mainState === "noAnimations" ? false : true} />

            {(mainState === "loading4" ||
              mainState === "loaded" ||
              mainState === "noAnimations") && (
              <div className={styles.mainButtonsContainer} id="proyects">
                <GenericLink
                  animated={mainState === "noAnimations" ? false : true}
                  hrefValue="https://github.com/ArturoFLR"
                  icon="github"
                >
                  GitHub
                </GenericLink>

                <GenericLink
                  animated={mainState === "noAnimations" ? false : true}
                  hrefValue="https://www.linkedin.com/in/arturo-lopez-rosa/"
                  icon="linkedin"
                >
                  LinkedIn
                </GenericLink>

                <GenericLink
                  animated={mainState === "noAnimations" ? false : true}
                  hrefValue="documents/cv2025.pdf"
                  icon="document"
                >
                  Descargar CV
                </GenericLink>
              </div>
            )}
          </section>

          {(mainState === "loaded" || mainState === "noAnimations") && (
            <>
              <div className={styles.animatedLinePositioner}>
                <AnimatedLine
                  animated={mainState === "noAnimations" ? false : true}
                />
              </div>

              <section
                className={`${styles.projectsSectionContainer} ${styles.fadeInAnimation} ${styles.sectionsCommonStyles}`}
              >
                <div className={styles.sectionHeaderContainer}>
                  <HeaderH2
                    animated={mainState === "noAnimations" ? false : true}
                  >
                    Proyectos
                  </HeaderH2>
                </div>

                <div className={styles.proyectCardsContainer}>
                  <ProyectCard
                    imageSrc="images/proyects/lringenieros/l&rIngenieros-1-miniature.webp"
                    imageAlt="Imagen de L&R Ingenieros"
                    proyectRoute="/lringenieros"
                    title="L&R Ingenieros"
                    description1="Trabajo Freelance."
                    description2="Sitio Web oficial de L&R Ingenieros. Diseño UX/UI responsive, implementación con React y TypeScript y despliegue final con dominio propio."
                    techIcons={[
                      "typescript",
                      "react",
                      "reactrouter",
                      "sass",
                      "netlify",
                      "git",
                    ]}
                    online="https://www.lringenieros.es/"
                    github="https://github.com/ArturoFLR/lr_ingenieros"
                  />

                  <ProyectCard
                    imageSrc="images/proyects/plantin/plant_in-1-miniature.webp"
                    imageAlt="Imagen de Plant-In!"
                    proyectRoute="/plantin"
                    title="Plant-In"
                    description1="Proyecto en Equipo para ID for Ideas."
                    description2="Web App diseñada para promocionar las huertas agroecológicas dentro del territorio nacional Argentino. Principal responsable del Front-End."
                    techIcons={[
                      "typescript",
                      "react",
                      "docker",
                      "leaflet",
                      "tailwind",
                      "azure",
                      "netlify",
                    ]}
                    online="https://plant-in.netlify.app/"
                    github="https://github.com/Mgll3/agro-plantation-app"
                  />

                  <ProyectCard
                    imageSrc="images/proyects/eatsquality/eatsquality-1-miniature.webp"
                    imageAlt="Imagen de Eatsquality"
                    proyectRoute="/eatsquality"
                    title="Eatsquality"
                    description1="Proyecto en Equipo para No Country."
                    description2="Web App de comida a domicilio. En menos de 4 semanas se pudo entregar un MVP con los roles de cliente y restaurante operativos."
                    techIcons={[
                      "typescript",
                      "react",
                      "reactrouter",
                      "tailwind",
                      "vite",
                      "git",
                      "jira",
                    ]}
                    github="https://github.com/No-Country/c17-113-ft-csharp"
                  />

                  <ProyectCard
                    imageSrc="images/proyects/checkmate/checkmate-1-miniature.webp"
                    imageAlt="Imagen de CHECKMATE!"
                    proyectRoute="/checkmate"
                    title="CHECKMATE!"
                    description1="Proyecto Personal."
                    description2="Juego de ajedrez online para uno o dos jugadores con varios niveles de dificultad, avatares y posibilidad de guardar y cargar partida."
                    techIcons={[
                      "poo",
                      "typescript",
                      "react",
                      "sass",
                      "axios",
                      "vite",
                      "git",
                    ]}
                    online="https://arturoflr.github.io/checkmate/"
                    github="https://github.com/ArturoFLR/checkmate"
                  />

                  <ProyectCard
                    imageSrc="images/proyects/en256colores/en256colores-1-miniature.webp"
                    imageAlt="Imagen de En 256 Colores"
                    proyectRoute="en256colores"
                    title="En 256 Colores"
                    description1="Proyecto Personal."
                    description2="Sitio Web personal orientado a los videojuegos clásicos. Mi primera toma de contacto con el diseño web antes de plantearme un cambio laboral."
                    techIcons={["html5", "css3", "javascript", "vscode"]}
                    online="https://www.en256colores.com/index.html"
                  />
                </div>
              </section>

              <div className={styles.animatedLinePositioner} id="technologies">
                <AnimatedLine
                  animated={mainState === "noAnimations" ? false : true}
                />
              </div>

              <section
                className={`${styles.techSectionContainer} ${styles.sectionsCommonStyles}`}
              >
                <div className={styles.sectionHeaderContainer}>
                  <HeaderH2
                    animated={mainState === "noAnimations" ? false : true}
                  >
                    Tecnologías
                  </HeaderH2>
                </div>

                <div className={styles.techItemsContainer}>
                  {techIcons.map((element, index) => {
                    return (
                      <TechIcon
                        key={index}
                        iconName={element}
                        bigVersion={true}
                      />
                    );
                  })}
                </div>
              </section>
            </>
          )}
        </>
      )}
    </main>
  );
}

export default Home;
