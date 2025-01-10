import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./SliderSmall.module.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

type SliderSmallProps = {
  animated: boolean;
  imagesList: string[];
  imagesMobileList: string[];
  changeComments: (newIndex: number) => void;
};

function SliderSmall({
  animated,
  imagesList,
  imagesMobileList,
  changeComments,
}: SliderSmallProps) {
  const [shownImageIndex, setShownImageIndex] = useState<number>(0);
  const [isMobileResolution, setIsMobileResolution] = useState<boolean>(
    window.innerWidth > 600 ? false : true,
  );
  const [showSparks, setShowSparks] = useState<boolean>(false);

  const sliderContainerElement = useRef<HTMLDivElement>(null);
  const shownImageContainerElement = useRef<HTMLDivElement>(null);
  const prevImgTimeout = useRef<number>(0);
  const nextImgTimeout = useRef<number>(0);
  const noiseAnimationTimeout = useRef<number>(0);
  const firstSparkTimeout = useRef<number>(0);

  //This part defines in which index of the array the images that will be on both sides of the displayed image should be searched.
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
  //END

  function handlePrevImgClick() {
    clearTimeout(noiseAnimationTimeout.current);
    clearTimeout(firstSparkTimeout.current);
    sliderContainerElement.current?.classList.remove(styles.prevImageAnimation);
    sliderContainerElement.current?.classList.remove(styles.nextImageAnimation);
    sliderContainerElement.current?.classList.add(styles.prevImageAnimation);

    let newIndex: number;

    if (shownImageIndex === 0) {
      newIndex = imagesList.length - 1;
    } else {
      newIndex = shownImageIndex - 1;
    }

    changeComments(newIndex);

    prevImgTimeout.current = window.setTimeout(() => {
      setShownImageIndex(newIndex);
    }, 1250);
  }

  function handleNextImgClick() {
    clearTimeout(noiseAnimationTimeout.current);
    clearTimeout(firstSparkTimeout.current);
    sliderContainerElement.current?.classList.remove(styles.prevImageAnimation);
    sliderContainerElement.current?.classList.remove(styles.nextImageAnimation);
    sliderContainerElement.current?.classList.add(styles.nextImageAnimation);

    let newIndex: number;

    if (shownImageIndex === imagesList.length - 1) {
      newIndex = 0;
    } else {
      newIndex = shownImageIndex + 1;
    }

    changeComments(newIndex);

    nextImgTimeout.current = window.setTimeout(() => {
      setShownImageIndex(newIndex);
    }, 1250);
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
      clearTimeout(prevImgTimeout.current);
      clearTimeout(nextImgTimeout.current);
    };
  }, [isMobileResolution]);

  useEffect(() => {
    if (animated) {
      firstSparkTimeout.current = window.setTimeout(() => {
        setShowSparks(true);

        noiseAnimationTimeout.current = window.setTimeout(() => {
          shownImageContainerElement.current?.classList.add(
            styles.tvTurningOn,
            styles.imageDistortion,
          );
        }, 300);
      }, 2500);
    }

    return () => {
      clearTimeout(noiseAnimationTimeout.current);
      clearTimeout(firstSparkTimeout.current);
    };
  }, []);

  useLayoutEffect(() => {
    sliderContainerElement.current?.classList.remove(styles.prevImageAnimation);
    sliderContainerElement.current?.classList.remove(styles.nextImageAnimation);
  });

  return (
    <div className={styles.sliderMainFrame}>
      <div className={styles.sliderMainContainer}>
        <div className={styles.allImagesContainer} ref={sliderContainerElement}>
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

          <div
            ref={shownImageContainerElement}
            className={styles.shownImageMainContainer}
          >
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
          aria-label="Imagen Anterior"
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
          aria-label="Imagen Siguiente"
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

      {showSparks === true && (
        <>
          <div className={styles.sparkAnimated}>
            <img src="images/gifs/sparks.png" alt="" />
          </div>

          <div className={styles.sparkAnimated2}>
            <img src="images/gifs/sparks.png" alt="" />
          </div>
        </>
      )}
    </div>
  );
}

export default SliderSmall;
