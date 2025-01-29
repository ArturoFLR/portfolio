import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./SliderSmall.module.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

type SliderSmallProps = {
  animated: boolean;
  imagesList: string[];
  imagesMobileList: string[];
  changeComments: (newIndex: number) => void;
  handlePictureOnClick: (pictureUrl: string) => void;
};

function SliderSmall({
  animated,
  imagesList,
  imagesMobileList,
  changeComments,
  handlePictureOnClick,
}: SliderSmallProps) {
  const [shownImageIndex, setShownImageIndex] = useState<number>(0);

  // It´s necesary to use a ref to store the current value of the shownImageIndex because the value of the state is not updated correctly in the swipe functions
  const shownImageIndexRef = useRef<number>(shownImageIndex);

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

  // This variable is used to prevent the user from clicking the next or previous image button or doing swipe while the animation is active
  const isAnimationActive = useRef<boolean>(false);

  // Theese variables are used to store the initial and final coordinates of the touch event (swipe)
  const touchStartX = useRef<number>(0); // Initial touch coordinate
  const touchEndX = useRef<number>(0); // Final touch coordinate

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

  function resetAnimationClasses() {
    sliderContainerElement.current?.classList.remove(styles.prevImageAnimation);
    sliderContainerElement.current?.classList.remove(styles.nextImageAnimation);
  }

  function handlePrevImgClick(currentIndex = shownImageIndex) {
    if (isAnimationActive.current) return;
    isAnimationActive.current = true;

    clearTimeout(noiseAnimationTimeout.current);
    clearTimeout(firstSparkTimeout.current);

    resetAnimationClasses();
    sliderContainerElement.current?.classList.add(styles.prevImageAnimation);

    let newIndex: number;
    if (currentIndex === 0) {
      newIndex = imagesList.length - 1;
    } else {
      newIndex = currentIndex - 1;
    }

    changeComments(newIndex);

    prevImgTimeout.current = window.setTimeout(() => {
      setShownImageIndex(newIndex);
      isAnimationActive.current = false;
    }, 1250);
  }

  function handleNextImgClick(currentIndex = shownImageIndex) {
    if (isAnimationActive.current) return;
    isAnimationActive.current = true;

    clearTimeout(noiseAnimationTimeout.current);
    clearTimeout(firstSparkTimeout.current);

    resetAnimationClasses();
    sliderContainerElement.current?.classList.add(styles.nextImageAnimation);

    let newIndex: number;

    if (currentIndex === imagesList.length - 1) {
      newIndex = 0;
    } else {
      newIndex = currentIndex + 1;
    }

    changeComments(newIndex);

    nextImgTimeout.current = window.setTimeout(() => {
      setShownImageIndex(newIndex);
      isAnimationActive.current = false;
    }, 1250);
  }

  // Theese functions are used to handle the swipe event

  function touchstart(e: TouchEvent) {
    if (isAnimationActive.current) return;

    if (e.changedTouches.length > 0) {
      touchStartX.current = e.changedTouches[0].clientX;
    }
  }

  function touchend(e: TouchEvent) {
    if (isAnimationActive.current) return;

    if (e.changedTouches.length > 0) {
      touchEndX.current = e.changedTouches[0].clientX;
      const SWIPE_THRESHOLD = 40;

      if (touchStartX.current - touchEndX.current > SWIPE_THRESHOLD) {
        handleNextImgClick(shownImageIndexRef.current);
      }

      if (touchStartX.current - touchEndX.current < -SWIPE_THRESHOLD) {
        handlePrevImgClick(shownImageIndexRef.current);
      }
    }
  }

  useEffect(() => {
    shownImageIndexRef.current = shownImageIndex;
  }, [shownImageIndex]);

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
    // Activates tv noise and sparks animations if the animated prop is true
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

    // This part add the swipe events
    if (shownImageContainerElement.current) {
      shownImageContainerElement.current!.addEventListener(
        "touchstart",
        touchstart,
      );
      shownImageContainerElement.current!.addEventListener(
        "touchend",
        touchend,
      );
    }

    return () => {
      clearTimeout(noiseAnimationTimeout.current);
      clearTimeout(firstSparkTimeout.current);

      if (shownImageContainerElement.current) {
        shownImageContainerElement.current.removeEventListener(
          "touchstart",
          touchstart,
        );
        shownImageContainerElement.current.removeEventListener(
          "touchend",
          touchend,
        );
      }
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
              onClick={() => handlePictureOnClick(imagesList[previousImgIndex])}
              className={styles.allButtons}
              aria-label="Ver imagen a pantalla completa"
              tabIndex={-1}
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
              onClick={() => handlePictureOnClick(imagesList[shownImageIndex])}
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
                alt={`Captura del proyecto ${shownImageIndex + 1}`}
              />
            </button>
          </div>

          <div className={styles.nextImageMainContainer}>
            <button
              type="button"
              onClick={() => handlePictureOnClick(imagesList[nextImgIndex])}
              className={styles.allButtons}
              tabIndex={-1}
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
          onClick={() => handlePrevImgClick()}
          className={styles.prevImgIcon}
        >
          <ArrowLeftIcon className={styles.arrowLeftIcon} />
        </button>

        <button
          type="button"
          aria-label="Imagen Siguiente"
          onClick={() => handleNextImgClick()}
          className={styles.nextImgIcon}
        >
          <ArrowRightIcon className={styles.arrowRightIcon} />
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
