import { useEffect, useState } from "react";
import styles from "./SliderSmall.module.scss";

type SliderSmallProps = {
  imagesList: string[];
  imagesMobileList: string[];
  changeComments: () => void;
};

function SliderSmall({
  imagesList,
  imagesMobileList,
  changeComments,
}: SliderSmallProps) {
  const [shownImageIndex, setShownImageIndex] = useState<number>(0);
  const [isMobileResolution, setIsMobileResolution] = useState<boolean>(
    window.innerWidth > 600 ? false : true,
  );

  let previousImgIndex: number = 0;
  let nextImgIndex: number = 0;

  if (shownImageIndex === 0) {
    previousImgIndex = imagesList.length - 1;
  } else {
    previousImgIndex = shownImageIndex - 1;
  }

  if (shownImageIndex === imagesList.length - 1) {
    nextImgIndex = 0;
  } else {
    nextImgIndex = shownImageIndex + 1;
  }

  useEffect(() => {
    function checkNewResolution() {
      if (window.innerWidth <= 600 && !isMobileResolution) {
        setIsMobileResolution(true);
      } else if (window.innerWidth > 600 && isMobileResolution) {
        setIsMobileResolution(false);
      }
    }

    window.addEventListener("resize", checkNewResolution);

    return () => {
      window.removeEventListener("resize", checkNewResolution);
    };
  }, [isMobileResolution]);

  return (
    <div className={styles.sliderSmallMainContainer}>
      <div className={styles.prevImageMainContainer}>
        <button aria-label="Ver imagen a pantalla completa">
          <img
            src={
              isMobileResolution
                ? imagesMobileList[previousImgIndex]
                : imagesList[previousImgIndex]
            }
            alt="Captura del proyecto"
          />
        </button>
      </div>

      <div className={styles.shownImageMainContainer}>
        <button aria-label="Ver imagen a pantalla completa">
          <img
            src={
              isMobileResolution
                ? imagesMobileList[shownImageIndex]
                : imagesList[shownImageIndex]
            }
            alt="Captura del proyecto"
          />
        </button>
      </div>

      <div className={styles.nextImageMainContainer}>
        <button aria-label="Ver imagen a pantalla completa">
          <img
            src={
              isMobileResolution
                ? imagesMobileList[nextImgIndex]
                : imagesList[nextImgIndex]
            }
            alt="Captura del proyecto"
          />
        </button>
      </div>
    </div>
  );
}

export default SliderSmall;
