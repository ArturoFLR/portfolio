import { useEffect, useRef, useState } from "react";
import styles from "./ProyectsStyles.module.scss";
import { useLocation } from "react-router";
import TechIcon, { TechIconType } from "../components/techIcon/TechIcon";
import ProyectsNav from "../components/navigation/proyectsNav/ProyectsNav";
import LetterTranslator from "../components/letterTranslator/LetterTranslator";
import CommentsViewer from "../components/proyectDetails/commentsViewer/CommentsViewer";
import SliderSmall from "../components/proyectDetails/sliderSmall/SliderSmall";
import GenericLink from "../components/links/genericLink/GenericLink";
import proyectsData from "../data/proyectsData";
import PictureViewer from "../components/proyectDetails/pictureViewer/PictureViewer";
import { Helmet } from "react-helmet";

function En256Colores() {
  const [actualIndex, setActualIndex] = useState<number>(0);
  const [showPictureViewer, setShowPictureViewer] = useState<boolean>(false);
  const [pictureUrlForViewer, setPictureUrlForViewer] = useState<string>("");
  const changeCommentsTimeout = useRef<number>(0);

  const location = useLocation();
  if (location.state === null) location.state = { animated: true };

  const techIcons: TechIconType[] = ["html5", "css3", "javascript", "vscode"];

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

  function handlePictureOnClick(pictureUrl: string) {
    setPictureUrlForViewer(pictureUrl);
    setShowPictureViewer(true);
  }

  function handlePictureViewerClose() {
    setShowPictureViewer(false);
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
      <Helmet>
        <title>En 256 Colores | Proyecto de Arturo López Rosa</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Página web sobre videojuegos clásicos. Contiene artículos sobre videojuegos y sus creadores, así como críticas de juegos y sus bandas sonoras."
        />
      </Helmet>

      <ProyectsNav animated={location.state.animated === true ? true : false} />

      <h1 className={styles.letterTranslatorContainer} aria-hidden="true">
        <LetterTranslator
          text="En 256 Colores"
          activate={true}
          alienLettersTimer={50}
          normalLettersTimer={80}
        />
      </h1>

      <p className={styles.ariaOnly} role="heading" aria-level={1}>
        En 256 Colores
      </p>

      <div className={styles.sliderSmallAndCommentsContainer}>
        <div className={styles.commentsViewerContainer}>
          <CommentsViewer
            proyectTitle="En 256 Colores"
            comments={
              proyectsData.en256coloresImagesAndComments.comments[actualIndex]
            }
            alienLettersTimer={50}
            normalLettersTimer={80}
          />
        </div>

        <SliderSmall
          animated={location.state.animated === true ? true : false}
          imagesList={proyectsData.en256coloresImagesAndComments.images}
          imagesMobileList={
            proyectsData.en256coloresImagesAndComments.imagesMobile
          }
          changeComments={changeComments}
          handlePictureOnClick={handlePictureOnClick}
        />
      </div>

      <div
        className={`${styles.linksAndTechIconsContainer} ${location.state.animated === true ? styles.linksAndTechIconsContainerAnimated : null}`}
      >
        <div className={styles.linksContainer}>
          <GenericLink
            animated={true}
            hrefValue="https://www.en256colores.com/index.html"
            icon="launch"
          >
            Ver Online
          </GenericLink>
        </div>

        <div className={styles.techIconsContainer}>{techIconsGenerator()}</div>
      </div>

      {showPictureViewer ? (
        <PictureViewer
          pictureUrl={pictureUrlForViewer}
          handlePictureViewerClose={handlePictureViewerClose}
        />
      ) : null}
    </main>
  );
}

export default En256Colores;
