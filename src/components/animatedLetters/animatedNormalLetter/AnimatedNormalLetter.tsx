import styles from "./AnimatedNormalLetter.module.scss";

type AnimatedNormalLetterProps = {
  letter: string;
  forMainPage?: boolean;
};

function AnimatedNormalLetter({
  letter,
  forMainPage = false,
}: AnimatedNormalLetterProps) {
  return (
    <span
      className={`${styles.normalLetterContainer} ${forMainPage ? styles.normalLetterContForMainPage : null}`}
    >
      {letter}
      <span className={styles.flashEffectContainer}></span>
    </span>
  );
}

export default AnimatedNormalLetter;
