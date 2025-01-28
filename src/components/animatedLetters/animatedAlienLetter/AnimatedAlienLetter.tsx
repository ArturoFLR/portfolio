import alienCharacters from "./alienCharacters";
import styles from "./AnimatedAlienLetter.module.scss";
import { useEffect, useRef, useState } from "react";

type AnimatedAlienLetterProps = {
  isCharacterSpace: boolean;
  forMainPage?: boolean;
};

function AnimatedAlienLetter({
  isCharacterSpace,
  forMainPage = false,
}: AnimatedAlienLetterProps) {
  const initialCharacter = Math.floor(Math.random() * alienCharacters.length);
  const [showedCharacter, setShowedCharacter] =
    useState<number>(initialCharacter);
  let changeInterval = useRef<number>(0);

  useEffect(() => {
    changeInterval.current = window.setInterval(() => {
      setShowedCharacter(Math.floor(Math.random() * alienCharacters.length));
    }, 100);
    return () => {
      clearTimeout(changeInterval.current);
    };
  }, []);

  return (
    <span
      className={`${styles.alienLetterContainer} ${forMainPage ? styles.alienLetterContForMainPage : null}`}
    >
      {isCharacterSpace
        ? " "
        : forMainPage
          ? " "
          : alienCharacters[showedCharacter]}
    </span>
  );
}

export default AnimatedAlienLetter;
