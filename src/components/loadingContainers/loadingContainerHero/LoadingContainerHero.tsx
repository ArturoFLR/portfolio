import { ThreeCircles } from "react-loader-spinner";
import styles from "./LoadingContainerHero.module.scss";

function LoadingContainerHero() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.text}>Arturo López Rosa</h1>
      </div>
      <div className={styles.iconContainer}>
        <ThreeCircles
          visible={true}
          height="100%"
          width="100%"
          color="#00ffff"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
      <div className={styles.animatedLine}></div>
    </div>
  );
}

export default LoadingContainerHero;
