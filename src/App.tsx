import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import LoadingContainerHero from "./components/loadingContainers/loadingContainerHero/LoadingContainerHero";
import LetterTranslator from "./components/letterTranslator/LetterTranslator";

type MainStateType = "loading1" | "loading2";

function App() {
  const [mainState, setMainState] = useState<MainStateType>("loading1");

  useEffect(() => {
    let mainStateTimeout: number = 0;

    if (mainState === "loading1") {
      mainStateTimeout = window.setTimeout(() => {
        setMainState("loading2");
      }, 5500);
    }

    return () => {
      clearTimeout(mainStateTimeout);
    };
  }, []);

  return (
    <main className={styles.mainTag}>
      <header className={styles.headerTag}>
        <LoadingContainerHero />
        <div className={styles.mainLetterTranslatorContainer}>
          {mainState !== "loading1" && (
            <LetterTranslator text="Front-End Developer" activate={true} />
          )}
        </div>
      </header>
    </main>
  );
}

export default App;
