import { useEffect, useState } from "react";
import styles from "./SliderSmall.module.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

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

  function handlePrevImgClick() {
    let newIndex: number;

    if (shownImageIndex === 0) {
      newIndex = imagesList.length - 1;
    } else {
      newIndex = shownImageIndex - 1;
    }
    console.log(newIndex);
    setShownImageIndex(newIndex);
  }

  function handleNextImgClick() {
    let newIndex: number;

    if (shownImageIndex === imagesList.length - 1) {
      newIndex = 0;
    } else {
      newIndex = shownImageIndex + 1;
    }
    console.log(newIndex);
    setShownImageIndex(newIndex);
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
    <div className={styles.sliderMainFrame}>
      <div className={styles.allImagesContainer}>
        <div className={styles.prevImageMainContainer}>
          <button
            type="button"
            className={styles.allButtons}
            aria-label="Ver imagen a pantalla completa"
          >
            <img
              className={styles.allImgTags}
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
          <button
            type="button"
            className={styles.allButtons}
            aria-label="Ver imagen a pantalla completa"
          >
            <img
              className={styles.allImgTags}
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
          <button
            type="button"
            className={styles.allButtons}
            aria-label="Ver imagen a pantalla completa"
          >
            <img
              className={styles.allImgTags}
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

      <button
        type="button"
        onClick={handlePrevImgClick}
        className={styles.prevImgIcon}
      >
        <ArrowLeftIcon
          color="inherit"
          fontSize="inherit"
          style={{ display: "block" }}
        />
      </button>

      <button
        type="button"
        onClick={handleNextImgClick}
        className={styles.nextImgIcon}
      >
        <ArrowRightIcon
          color="inherit"
          fontSize="inherit"
          style={{ display: "block" }}
        />
      </button>
    </div>
  );
}

export default SliderSmall;
