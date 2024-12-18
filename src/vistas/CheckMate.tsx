import { useLocation } from "react-router";
import styles from "./CheckMate.module.scss";
import ProyectsNav from "../components/navigation/proyectsNav/ProyectsNav";
import SliderSmall from "../components/proyectDetails/sliderSmall/SliderSmall";
import proyectsData from "../data/proyectsData";
import { useEffect, useRef, useState } from "react";
import CommentsViewer from "../components/proyectDetails/commentsViewer/CommentsViewer";

function CheckMate() {
  const [actualIndex, setActualIndex] = useState<number>(0);
  const changeCommentsTimeout = useRef<number>(0);

  const location = useLocation();
  if (location.state === null) location.state = { animated: true };

  function changeComments(newIndex: number) {
    changeCommentsTimeout.current = window.setTimeout(() => {
      setActualIndex(newIndex);
    }, 1300);
  }

  useEffect(() => {
    return () => {
      clearTimeout(changeCommentsTimeout.current);
    };
  }, []);

  return (
    <main className={styles.mainTag}>
      <ProyectsNav animated={location.state.animated === true ? true : false} />

      <div className={styles.sliderSmallAndCommentsContainer}>
        <div className={styles.sliderSmallContainer}>
          <SliderSmall
            animated={true}
            imagesList={proyectsData.checkmateImagesAndComments.images}
            imagesMobileList={
              proyectsData.checkmateImagesAndComments.imagesMobile
            }
            changeComments={changeComments}
          />
        </div>

        <div className={styles.commentsViewerContainer}>
          <CommentsViewer
            comments={
              proyectsData.checkmateImagesAndComments.comments[actualIndex]
            }
          />
        </div>
      </div>
    </main>
  );
}

export default CheckMate;
