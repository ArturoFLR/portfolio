import { useEffect, useRef, useState } from "react";
import styles from "./LetterTranslator.module.scss";
import AnimatedAlienLetter from "../animatedLetters/animatedAlienLetter/AnimatedAlienLetter";
import AnimatedNormalLetter from "../animatedLetters/animatedNormalLetter/AnimatedNormalLetter";

type LetterTranslatorProps = {
  text: string;
  activate: boolean;
  alienLettersTimer: number;
  normalLettersTimer: number;
  forMainPage?: boolean;
};

function LetterTranslator({
  text,
  activate,
  alienLettersTimer,
  normalLettersTimer,
  forMainPage = false,
}: LetterTranslatorProps) {
  const textArray: string[] = [];
  for (let i = 0; i < text.length; i++) {
    textArray.push("*");
  }

  const [textToShow, setTextToShow] = useState<string[]>([]);
  //Guardamos el estado en una referencia, ya que dentro del "interval" que creamos en el useEffect() no se tiene acceso al valor actualizado de "textToShow", siempre trabaja con el valor que tenía cuando se creó el interval.
  const textToShowRef = useRef<string[]>(textToShow);
  //Se utiliza como index para ir transformando los "*" en letras normales dentro de textArray
  const translatorCounter = useRef<number>(0);

  function returnLetterComponents() {
    const result: React.ReactNode[] = [];
    if (textToShow.length > 0) {
      textToShow.map((element, index) => {
        if (element === "*") {
          result.push(
            <AnimatedAlienLetter key={index} forMainPage={forMainPage} />,
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
            textArray[textToShow.length],
          ];
          setTextToShow(newTextToShow);
        } else if (translatorCounter.current < textArray.length) {
          //Terminamos el intervalo creado en el 1º bloque del "if" antes de crear uno nuevo.
          clearInterval(interval);

          interval = window.setInterval(() => {
            //Una vez creado el intervalo no se vuelve a comprobar si se cumplen las condiciones para que pare, por lo que las ponemos dentro del propio interval
            if (translatorCounter.current >= textArray.length - 1) {
              clearInterval(interval);
            }

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
    <p className={styles.letterTranslatorMainContainer} aria-label={text}>
      {returnLetterComponents()}
    </p>
  );
}

export default LetterTranslator;
