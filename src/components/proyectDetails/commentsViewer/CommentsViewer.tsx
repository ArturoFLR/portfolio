import { useEffect, useRef, useState } from "react";
import LetterTranslator from "../../letterTranslator/LetterTranslator";
import styles from "./CommentsViewer.module.scss";

type CommentsViewerProps = {
  proyectTitle: string;
  comments: string[];
  alienLettersTimer: number;
  normalLettersTimer: number;
};

function CommentsViewer({
  proyectTitle,
  comments,
  alienLettersTimer,
  normalLettersTimer,
}: CommentsViewerProps) {
  const [currentComments, setCurrentComments] = useState<string[]>(comments);
  const [fading, setFading] = useState("in"); //Controls the fade-in and fade-out animations when the component is re-rendered
  const fadingTimeout = useRef<number>(0);

  useEffect(() => {
    if (comments !== currentComments) {
      // Activate the fade-out animation
      setFading("out");

      // Waits for the animation to end before update the comments
      fadingTimeout.current = window.setTimeout(() => {
        setCurrentComments(comments);
        setFading("in");
      }, 300); //It must be the same as that of the animations

      return () => clearTimeout(fadingTimeout.current);
    }
  }, [comments]);

  return (
    <div className={styles.commentsViewerMainContainer}>
      <h1 className={styles.letterTranslatorPositioner} aria-hidden="true">
        <LetterTranslator
          text={proyectTitle}
          activate={true}
          alienLettersTimer={alienLettersTimer}
          normalLettersTimer={normalLettersTimer}
        />
      </h1>

      <p className={styles.ariaOnly} role="heading" aria-level={1}>
        {proyectTitle}
      </p>

      <div className={styles.olTagContainer}>
        <ol
          className={`${styles.olTag} ${fading === "in" ? styles.olTagFadeIn : styles.olTagFadeOut}`}
        >
          {currentComments.map((element, index) => {
            return (
              <li key={index}>
                <p
                  className={`${styles.paragraph} ${index === currentComments.length - 1 ? styles.lastParagraph : ""}`}
                >
                  {element}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default CommentsViewer;
