import { useEffect, useRef, useState } from "react";
import styles from "./LetterTranslator.module.scss";
import AnimatedAlienLetter from "../animatedLetters/animatedAlienLetter/AnimatedAlienLetter";
import AnimatedNormalLetter from "../animatedLetters/animatedNormalLetter/AnimatedNormalLetter";

type LetterTranslatorProps = {
  text: string;
  activate: boolean;
  alienLettersTimer: number;
  normalLettersTimer: number;
  forMainPage?: boolean; // This prop is used to change the style of AnimatedAlienLetter and AnimatedNormalLetter for the main page (bigger size).
};

function LetterTranslator({
  text,
  activate,
  alienLettersTimer,
  normalLettersTimer,
  forMainPage = false,
}: LetterTranslatorProps) {
  const textArray: string[] = [];

  for (const letter of text) {
    if (letter === " ") {
      textArray.push("?"); // We use "?" as a placeholder for spaces.
    } else {
      textArray.push("*");
    }
  }

  const [textToShow, setTextToShow] = useState<string[]>([]);

  // We store the state in a reference because inside the "interval" created in useEffect(),
  // there is no access to the updated value of "textToShow"; it always works with the value it had when the interval was created.
  const textToShowRef = useRef<string[]>(textToShow);

  //It is used as an index to progressively add the elements of textArray to textToShow. We don't use the "textToShow" length directly because it is not updated immediately.
  const textArrayCounter = useRef<number>(0);

  // It is used as an index to progressively transform the "*" characters into regular letters within textArray.
  const translatorCounter = useRef<number>(0);

  function returnLetterComponents() {
    const result: React.ReactNode[] = [];
    if (textToShow.length > 0) {
      textToShow.map((element, index) => {
        if (element === "*" || element === "?") {
          result.push(
            <AnimatedAlienLetter
              key={index}
              forMainPage={forMainPage}
              isCharacterSpace={element === "?" ? true : false}
            />,
          );
        } else {
          result.push(
            <AnimatedNormalLetter
              key={index}
              letter={element}
              forMainPage={forMainPage}
            />,
          );
        }
      });
    }

    return result;
  }

  useEffect(() => {
    textToShowRef.current = textToShow;
  }, [textToShow]);

  useEffect(() => {
    let interval: number;

    if (activate) {
      interval = window.setInterval(() => {
        if (textToShowRef.current.length < textArray.length) {
          const newTextToShow = [
            ...textToShowRef.current,
            textArray[textArrayCounter.current],
          ];

          textArrayCounter.current++;

          setTextToShow(newTextToShow);
        } else if (translatorCounter.current < textArray.length) {
          // We only reach this "if" block if textToShow already contains all the elements of textArray (all the AnimatedAlienLetter elements are already rendered).
          // We clear the previously created interval before creating a new one.
          clearInterval(interval);

          interval = window.setInterval(() => {
            // Once the interval is created, the conditions to stop it are not rechecked, so we include them within the interval itself.
            if (translatorCounter.current >= textArray.length - 1) {
              clearInterval(interval);
            }

            // Now we will gradually replace the "*" and "?" with the corresponding letters from the "text" prop.
            const newTextToShow = [...textToShowRef.current];
            newTextToShow.splice(
              translatorCounter.current,
              1,
              text[translatorCounter.current],
            );

            translatorCounter.current++;
            setTextToShow(newTextToShow);
          }, normalLettersTimer);
        }
      }, alienLettersTimer);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <p className={styles.letterTranslatorMainContainer} aria-hidden="true">
      {returnLetterComponents()}
    </p>
  );
}

export default LetterTranslator;
