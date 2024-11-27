import { useState } from "react";
import styles from "./App.module.scss";
import LoadingContainerHero from "./components/loadingContainers/loadingContainerHero/LoadingContainerHero";
import LetterTranslator from "./components/letterTranslator/LetterTranslator";

type MainStateType = "loading1" | "loading2";

function App() {
  const [mainState, setMainState] = useState<MainStateType>("loading1");

  return (
    <main className={styles.mainTag}>
      <header>
        <h1>
          <LoadingContainerHero />
          <span>
            {mainState !== "loading1" && (
              <LetterTranslator text="Front-End Developer" activate={true} />
            )}
          </span>
        </h1>
      </header>
    </main>
  );
}

export default App;
