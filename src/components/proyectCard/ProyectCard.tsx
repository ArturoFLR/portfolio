import HeaderH3 from "../headers/headerH3/HeaderH3";
import GenericLink from "../links/genericLink/GenericLink";
import Paragraph from "../paragraph/paragraph";
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
  console.log(techIcons);
  function techIconsGenerator() {
    const iconElementList: React.ReactNode[] = [];

    techIcons.map((element, index) => {
      iconElementList.push(
        <img className={styles.techIcon} src={element} alt="" key={index} />,
      );
    });

    return iconElementList;
  }

  return (
    <article className={styles.proyectCardMainContainer}>
      <div className={styles.imagePositioner}>
        <ProyectCardImage imageSrc={imageSrc} imageAlt={imageAlt} />
      </div>

      <div className={styles.titlePositioner}>
        <HeaderH3>{title}</HeaderH3>
      </div>

      <div className={styles.descriptionPositioner}>
        <Paragraph>{description}</Paragraph>
      </div>

      <div className={styles.linksContainer}>
        <GenericLink hrefValue={github} icon="github">
          Ver Código
        </GenericLink>
        {online && (
          <GenericLink hrefValue={online} icon="launch">
            Ver Online
          </GenericLink>
        )}
      </div>

      <div className={styles.techContainer}>{techIconsGenerator()}</div>
    </article>
  );
}

export default ProyectCard;
