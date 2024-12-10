import HeaderH3 from "../headers/headerH3/HeaderH3";
import GenericLink from "../links/genericLink/GenericLink";
import Paragraph from "../paragraph/Paragraph";
import TechIcon, { TechIconType } from "../techIcon/TechIcon";
import styles from "./ProyectCard.module.scss";
import ProyectCardImage from "./proyectCardImage/ProyectCardImage";

type ProyectCardProps = {
  imageSrc: string;
  imageAlt: string;
  proyectRoute: string;
  title: string;
  description1: string;
  description2: string;
  github?: string;
  online?: string;
  techIcons: TechIconType[];
};

function ProyectCard({
  imageSrc,
  imageAlt,
  proyectRoute,
  title,
  description1,
  description2,
  github,
  online,
  techIcons,
}: ProyectCardProps) {
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

  return (
    <article className={styles.proyectCardMainContainer}>
      <div className={styles.imagePositioner}>
        <ProyectCardImage
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          proyectRoute={proyectRoute}
        />
      </div>

      <div className={styles.titlePositioner}>
        <HeaderH3>{title}</HeaderH3>
      </div>

      <div className={styles.description1Positioner}>
        <Paragraph>{description1}</Paragraph>
      </div>
      <div className={styles.description2Positioner}>
        <Paragraph>{description2}</Paragraph>
      </div>

      <div className={styles.linksContainer}>
        {github && (
          <GenericLink animated={true} hrefValue={github} icon="github">
            Ver Código
          </GenericLink>
        )}
        {online && (
          <GenericLink animated={true} hrefValue={online} icon="launch">
            Ver Online
          </GenericLink>
        )}
      </div>

      <div className={styles.techContainer}>{techIconsGenerator()}</div>
    </article>
  );
}

export default ProyectCard;
