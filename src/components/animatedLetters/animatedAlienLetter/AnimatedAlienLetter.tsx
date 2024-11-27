import alienCharacters from "./alienCharacters";
import styles from "./AnimatedAlienLetter.module.scss";
import { useEffect, useRef, useState } from "react";

function AnimatedAlienLetter() {
  const [showedCharacter, setShowedCharacter] = useState<number>(0);
  let changeInterval = useRef<number>(0);

  useEffect(() => {
    changeInterval.current = window.setInterval(() => {
      setShowedCharacter(Math.floor(Math.random() * alienCharacters.length));
    }, 110);
    return () => {
      clearTimeout(changeInterval.current);
    };
  }, []);

  return (
    <span className={styles.alienLetterContainer}>
      {alienCharacters[showedCharacter]}
    </span>
  );
}

export default AnimatedAlienLetter;
