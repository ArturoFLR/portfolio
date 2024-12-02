import styles from "./ProyectCardImage.module.scss";

type ProyectCardImageProps = {
  imageSrc: string;
  imageAlt: string;
};

function ProyectCardImage({ imageSrc, imageAlt }: ProyectCardImageProps) {
  return (
    <div className={styles.proyectCardImageMainContainer}>
      <img className={styles.image} src={imageSrc} alt={imageAlt}></img>
    </div>
  );
}

export default ProyectCardImage;
