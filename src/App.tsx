import { useEffect, useRef, useState } from "react";
import styles from "./App.module.scss";
import LoadingContainerHero from "./components/loadingContainers/loadingContainerHero/LoadingContainerHero";
import LetterTranslator from "./components/letterTranslator/LetterTranslator";
import SkipAnimationButton from "./components/buttons/skipAnimationButton/SkipAnimationButton";
import GenericButton from "./components/links/genericLink/GenericLink";
import Profile from "./components/profile/profile";

type MainStateType = "loading1" | "loading2" | "loading3" | "loaded";

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

        {mainState !== "loading1" && mainState !== "loading2" && (
          <div className={styles.mainButtonsContainer}>
            <GenericButton
              handleClick={() => console.log("Click!")}
              icon="github"
            >
              GitHub
            </GenericButton>

            <GenericButton
              handleClick={() => console.log("Click!")}
              icon="linkedin"
            >
              LinkedIn
            </GenericButton>

            <GenericButton
              handleClick={() => console.log("Click!")}
              icon="document"
            >
              Descargar CV
            </GenericButton>
          </div>
        )}
      </header>

      {mainState === "loaded" && (
        <section className={styles.profilePositioner}>
          <Profile />
        </section>
      )}
    </main>
  );
}

export default App;
