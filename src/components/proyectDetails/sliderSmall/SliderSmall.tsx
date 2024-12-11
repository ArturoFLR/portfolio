import { useState } from "react";
import styles from "./SliderSmall.module.scss";

type SliderSmallProps = {
  imagesList: string[];
  changeComments: () => void;
};

function SliderSmall({ imagesList, changeComments }: SliderSmallProps) {
  const [shownImageIndex, setShownImageIndex] = useState<number>(0);

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

  return (
    <div className={styles.sliderSmallMainContainer}>
      <div className={styles.prevImageMainContainer}></div>
      <div className={styles.shownImageMainContainer}>
        <img src={imagesList[shownImageIndex]} alt="Captura del proyecto" />
      </div>
      <div className={styles.nextImageMainContainer}></div>
    </div>
  );
}

export default SliderSmall;
