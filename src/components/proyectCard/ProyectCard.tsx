import HeaderH3 from "../headers/headerH3/HeaderH3";
import GenericLink from "../links/genericLink/GenericLink";
import styles from "./ProyectCard.module.scss";
import ProyectCardImage from "./proyectCardImage/ProyectCardImage";

type ProyectCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  github: string;
  online?: string;
  techIcons: string[];
};

function ProyectCard({
  imageSrc,
  imageAlt,
  title,
  description,
  github,
  online,
  techIcons,
}: ProyectCardProps) {
  return (
    <article className={styles.proyectCardMainContainer}>
      <div className={styles.imagePositioner}>
        <ProyectCardImage imageSrc={imageSrc} imageAlt={imageAlt} />
      </div>

      <div className={styles.titlePositioner}>
        <HeaderH3>{title}</HeaderH3>
      </div>

      <div className={styles.descriptionPositioner}>{description}</div>

      <div className={styles.linksContainer}>
        {online && (
          <GenericLink hrefValue="" icon="">
            Ver Online{" "}
          </GenericLink>
        )}
      </div>

      <div className={styles.techContainer}></div>
    </article>
  );
}

export default ProyectCard;
