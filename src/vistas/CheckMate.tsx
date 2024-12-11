import { useLocation } from "react-router";
import styles from "./CheckMate.module.scss";
import ProyectsNav from "../components/navigation/proyectsNav/ProyectsNav";
import SliderSmall from "../components/proyectDetails/sliderSmall/SliderSmall";
import proyectsData from "../data/proyectsData";

function CheckMate() {
  const location = useLocation();
  if (location.state === null) location.state = { animated: true };

  return (
    <main className={styles.mainTag}>
      <ProyectsNav animated={location.state.animated === true ? true : false} />
      <SliderSmall
        imagesList={proyectsData.checkmateImagesAndComments.images}
        imagesMobileList={proyectsData.checkmateImagesAndComments.imagesMobile}
        changeComments={() => console.log("click!")}
      />
    </main>
  );
}

export default CheckMate;
