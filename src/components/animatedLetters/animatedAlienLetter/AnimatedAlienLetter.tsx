import alienCharacters2 from "./alienCharacters2";
import styles from "./AnimatedAlienLetter.module.scss";
import { useEffect, useRef, useState } from "react";

type AnimatedAlienLetterProps = {
  forMainPage?: boolean;
};

function AnimatedAlienLetter({
  forMainPage = false,
}: AnimatedAlienLetterProps) {
  const initialCharacter = Math.floor(Math.random() * alienCharacters2.length);
  const [showedCharacter, setShowedCharacter] =
    useState<number>(initialCharacter);
  let changeInterval = useRef<number>(0);

  useEffect(() => {
    changeInterval.current = window.setInterval(() => {
      setShowedCharacter(Math.floor(Math.random() * alienCharacters2.length));
    }, 100);
    return () => {
      clearTimeout(changeInterval.current);
    };
  }, []);

  return (
    <span
      className={`${styles.alienLetterContainer} ${forMainPage ? styles.alienLetterContForMainPage : null}`}
    >
      {alienCharacters2[showedCharacter]}
    </span>
  );
}

export default AnimatedAlienLetter;
