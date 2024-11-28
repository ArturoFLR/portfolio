import { useEffect, useRef, useState } from "react";
import styles from "./App.module.scss";
import LoadingContainerHero from "./components/loadingContainers/loadingContainerHero/LoadingContainerHero";
import LetterTranslator from "./components/letterTranslator/LetterTranslator";
import SkipAnimationButton from "./components/buttons/skipAnimationButton/SkipAnimationButton";

type MainStateType = "loading1" | "loading2" | "loaded";

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

    return () => {
      clearTimeout(mainStateTimeout.current);
    };
  }, []);

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
    </main>
  );
}

export default App;
