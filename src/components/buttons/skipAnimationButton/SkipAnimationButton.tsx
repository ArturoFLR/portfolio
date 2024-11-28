import { useEffect, useRef } from "react";
import styles from "./SkipAnimationButton.module.scss";

type SkipAnimationButtonProps = {
  children: React.ReactNode;
  ariaLabel?: string;
  handleClick: () => void;
};

function SkipAnimationButton({
  ariaLabel,
  handleClick,
  children,
}: SkipAnimationButtonProps) {
  const mainContainerElement = useRef<HTMLDivElement>(null);
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
    <div
      ref={mainContainerElement}
      className={styles.mainContainer}
      aria-label={ariaLabel}
      onClick={onClickMainHandler}
    >
      <div className={`${styles.content} ${styles.contentAnimated}`}>
        {children}
      </div>
    </div>
  );
}

export default SkipAnimationButton;
