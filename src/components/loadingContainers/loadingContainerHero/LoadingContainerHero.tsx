import { ThreeCircles } from "react-loader-spinner";
import styles from "./LoadingContainerHero.module.scss";

type LoadingContainerHeroProps = {
  animated: boolean;
};

function LoadingContainerHero({ animated }: LoadingContainerHeroProps) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <h1
          className={`${styles.text} ${animated ? styles.textAnimation : null}`}
        >
          Arturo López Rosa
        </h1>
      </div>
      <div
        className={`${styles.iconContainer} ${animated ? styles.iconContainerAnimation : null}`}
      >
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
      <div
        className={`${styles.animatedLine} ${animated ? styles.animatedLineAnimation : null}`}
      ></div>
    </div>
  );
}

export default LoadingContainerHero;
