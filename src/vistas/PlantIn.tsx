import { useEffect, useRef, useState } from "react";
import styles from "./ProyectsStyles.module.scss";
import { useLocation } from "react-router";
import TechIcon, { TechIconType } from "../components/techIcon/TechIcon";
import ProyectsNav from "../components/navigation/proyectsNav/ProyectsNav";
import LetterTranslator from "../components/letterTranslator/LetterTranslator";
import CommentsViewer from "../components/proyectDetails/commentsViewer/CommentsViewer";
import SliderSmall from "../components/proyectDetails/sliderSmall/SliderSmall";
import GenericLink from "../components/links/genericLink/GenericLink";
import PictureViewer from "../components/proyectDetails/pictureViewer/PictureViewer";
import proyectsData from "../data/proyectsData";

function PlantIn() {
  const [actualIndex, setActualIndex] = useState<number>(0);
  const [showPictureViewer, setShowPictureViewer] = useState<boolean>(false);
  const [pictureUrlForViewer, setPictureUrlForViewer] = useState<string>("");
  const changeCommentsTimeout = useRef<number>(0);

  const location = useLocation();
  if (location.state === null) location.state = { animated: true };

  const techIcons: TechIconType[] = [
    "html5",
    "css3",
    "typescript",
    "react",
    "docker",
    "leaflet",
    "tailwind",
    "netlify",
    "azure",
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
      <ProyectsNav animated={location.state.animated === true ? true : false} />

      <h1 className={styles.letterTranslatorContainer}>
        <LetterTranslator
          text="Plant-In"
          activate={true}
          alienLettersTimer={70}
          normalLettersTimer={100}
        />
      </h1>

      <div className={styles.sliderSmallAndCommentsContainer}>
        <div className={styles.commentsViewerContainer}>
          <CommentsViewer
            proyectTitle="Plant-In"
            comments={
              proyectsData.platinImagesAndComments.comments[actualIndex]
            }
            alienLettersTimer={70}
            normalLettersTimer={100}
          />
        </div>

        <SliderSmall
          animated={location.state.animated === true ? true : false}
          imagesList={proyectsData.platinImagesAndComments.images}
          imagesMobileList={proyectsData.platinImagesAndComments.imagesMobile}
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
            hrefValue="https://github.com/Mgll3/agro-plantation-app"
            icon="github"
          >
            Ver Código
          </GenericLink>

          <GenericLink
            animated={true}
            hrefValue="https://plant-in.netlify.app/"
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

export default PlantIn;
