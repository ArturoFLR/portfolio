import styles from "./AnimatedNormalLetter.module.scss";

type AnimatedNormalLetterProps = {
  letter: string;
};

function AnimatedNormalLetter({ letter }: AnimatedNormalLetterProps) {
  return (
    <span className={styles.normalLetterContainer}>
      {letter}
      <span className={styles.flashEffectContainer}></span>
    </span>
  );
}

export default AnimatedNormalLetter;
