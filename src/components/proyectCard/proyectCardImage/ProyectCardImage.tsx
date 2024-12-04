import { Link } from "react-router";
import styles from "./ProyectCardImage.module.scss";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

type ProyectCardImageProps = {
  imageSrc: string;
  imageAlt: string;
  proyectRoute: string;
};

function ProyectCardImage({
  imageSrc,
  imageAlt,
  proyectRoute,
}: ProyectCardImageProps) {
  return (
    <Link className={styles.proyectCardImageMainContainer} to={proyectRoute}>
      <div className={styles.moreDetailsContainer}>
        <div className={styles.iconContainer}>
          <ZoomInIcon color="inherit" fontSize="inherit" />
        </div>
        <p>Ver Detalles del Proyecto</p>
      </div>
      <img className={styles.image} src={imageSrc} alt={imageAlt}></img>
    </Link>
  );
}

export default ProyectCardImage;
