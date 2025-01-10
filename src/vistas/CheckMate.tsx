import { useLocation } from "react-router";
import styles from "./CheckMate.module.scss";
import ProyectsNav from "../components/navigation/proyectsNav/ProyectsNav";
import SliderSmall from "../components/proyectDetails/sliderSmall/SliderSmall";
import proyectsData from "../data/proyectsData";
import { useEffect, useRef, useState } from "react";
import CommentsViewer from "../components/proyectDetails/commentsViewer/CommentsViewer";
import TechIcon, { TechIconType } from "../components/techIcon/TechIcon";
import GenericLink from "../components/links/genericLink/GenericLink";
import LetterTranslator from "../components/letterTranslator/LetterTranslator";

function CheckMate() {
  const [actualIndex, setActualIndex] = useState<number>(0);
  const changeCommentsTimeout = useRef<number>(0);

  const location = useLocation();
  if (location.state === null) location.state = { animated: true };

  const techIcons: TechIconType[] = [
    "html5",
    "css3",
    "poo",
    "typescript",
    "react",
    "sass",
    "axios",
    "vite",
    "git",
  ];

  function techIconsGenerator() {
    const iconElementList: React.ReactNode[] = [];

    techIcons.map((element, index) => {
      iconElementList.push(
        <div key={index}>
          <TechIcon iconName={element} />
        </div>,
      );
    });

    return iconElementList;
  }

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

      <h1 className={styles.letterTranslatorContainer}>
        <LetterTranslator
          text="CHECKMATE!"
          activate={true}
          alienLettersTimer={70}
          normalLettersTimer={100}
        />
      </h1>

      <div className={styles.sliderSmallAndCommentsContainer}>
        <div className={styles.commentsViewerContainer}>
          <CommentsViewer
            proyectTitle="CHECKMATE!"
            comments={
              proyectsData.checkmateImagesAndComments.comments[actualIndex]
            }
          />
        </div>

        <SliderSmall
          animated={true}
          imagesList={proyectsData.checkmateImagesAndComments.images}
          imagesMobileList={
            proyectsData.checkmateImagesAndComments.imagesMobile
          }
          changeComments={changeComments}
        />
      </div>

      <div className={styles.linksAndTechIconsContainer}>
        <div className={styles.linksContainer}>
          <GenericLink
            animated={true}
            hrefValue="https://github.com/ArturoFLR/checkmate"
            icon="github"
          >
            Ver Código
          </GenericLink>

          <GenericLink
            animated={true}
            hrefValue="https://arturoflr.github.io/checkmate/"
            icon="launch"
          >
            Ver Online
          </GenericLink>
        </div>

        <div className={styles.techIconsContainer}>{techIconsGenerator()}</div>
      </div>
    </main>
  );
}

export default CheckMate;
