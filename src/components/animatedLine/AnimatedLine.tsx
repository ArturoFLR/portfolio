import styles from "./AnimatedLine.module.scss";

type AnimatedLineProps = {
  animated: boolean;
};

function AnimatedLine({ animated }: AnimatedLineProps) {
  return (
    <div
      className={`${styles.animatedLine} ${animated ? styles.animatedLineAnimated : null}`}
    ></div>
  );
}

export default AnimatedLine;
