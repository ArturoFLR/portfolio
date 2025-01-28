import { useEffect, useRef } from "react";
import styles from "./SkipAnimationButton.module.scss";

type SkipAnimationButtonProps = {
  children: React.ReactNode;
  handleClick: () => void;
};

function SkipAnimationButton({
  handleClick,
  children,
}: SkipAnimationButtonProps) {
  const mainContainerElement = useRef<HTMLButtonElement>(null);
  const outroTimer = useRef<number>(0);

  function onClickMainHandler() {
    mainContainerElement.current?.classList.add(styles.animatedOutro);
    outroTimer.current = window.setTimeout(() => {
      handleClick();
    }, 500);
  }

  useEffect(() => {
    return () => {
      clearTimeout(outroTimer.current);
    };
  }, []);

  return (
    <button
      type="button"
      ref={mainContainerElement}
      className={styles.mainContainer}
      onClick={onClickMainHandler}
    >
      <div className={`${styles.content} ${styles.contentAnimated}`}>
        {children}
      </div>
    </button>
  );
}

export default SkipAnimationButton;
