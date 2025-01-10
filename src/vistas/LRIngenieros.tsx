import styles from "./LRIngenieros.module.scss";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import TechIcon, { TechIconType } from "../components/techIcon/TechIcon";
import ProyectsNav from "../components/navigation/proyectsNav/ProyectsNav";
import LetterTranslator from "../components/letterTranslator/LetterTranslator";
import CommentsViewer from "../components/proyectDetails/commentsViewer/CommentsViewer";
import proyectsData from "../data/proyectsData";
import SliderSmall from "../components/proyectDetails/sliderSmall/SliderSmall";
import GenericLink from "../components/links/genericLink/GenericLink";

function LRIngenieros() {
  const [actualIndex, setActualIndex] = useState<number>(0);
  const changeCommentsTimeout = useRef<number>(0);

  const location = useLocation();
  if (location.state === null) location.state = { animated: true };

  const techIcons: TechIconType[] = [
    "html5",
    "css3",
    "typescript",
    "react",
    "reactrouter",
    "sass",
    "vite",
    "netlify",
    "vscode",
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
    if (location.state.animated === false) {
      //This line resets the 'state' set by the <Link /> that refer to Home from other routes, since otherwise the 'animated: false' property of the 'state' is maintained even when reloaded with F5 and the Home animations will never be shown again.
      window.history.replaceState({}, document.title);
    }

    return () => {
      clearTimeout(changeCommentsTimeout.current);
    };
  }, []);

  return (
    <main className={styles.mainTag}>
      <ProyectsNav animated={location.state.animated === true ? true : false} />

      <h1 className={styles.letterTranslatorContainer}>
        <LetterTranslator
          text="L&R Ingenieros"
          activate={true}
          alienLettersTimer={70}
          normalLettersTimer={100}
        />
      </h1>

      <div className={styles.sliderSmallAndCommentsContainer}>
        <div className={styles.commentsViewerContainer}>
          <CommentsViewer
            proyectTitle="L&R Ingenieros"
            comments={
              proyectsData.lringenierosImagesAndComments.comments[actualIndex]
            }
          />
        </div>

        <SliderSmall
          animated={location.state.animated === true ? true : false}
          imagesList={proyectsData.lringenierosImagesAndComments.images}
          imagesMobileList={
            proyectsData.lringenierosImagesAndComments.imagesMobile
          }
          changeComments={changeComments}
        />
      </div>

      <div className={styles.linksAndTechIconsContainer}>
        <div className={styles.linksContainer}>
          <GenericLink
            animated={true}
            hrefValue="https://github.com/ArturoFLR/lr_ingenieros"
            icon="github"
          >
            Ver Código
          </GenericLink>

          <GenericLink
            animated={true}
            hrefValue="https://www.lringenieros.es/"
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

export default LRIngenieros;
