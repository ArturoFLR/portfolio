import HeaderH2 from "../headers/headerH2/HeaderH2";
import styles from "./Profile.module.scss";

type ProfileProps = {
  animated: boolean;
};

function Profile({ animated }: ProfileProps) {
  return (
    <div className={styles.profileMainContainer}>
      <div className={styles.textContainer}>
        <HeaderH2 animated={animated ? true : false}>
          Sobre
          <span> mí</span>
        </HeaderH2>

        <div
          className={`${styles.imageContainerMobile} ${animated ? styles.imageContainerAnimated : null}`}
        >
          <img
            className={`${styles.image} ${animated ? styles.imageAnimated : null}`}
            src="images/arturoImg.webp"
            alt="Fotografía de Arturo López"
          />
        </div>

        <p
          className={`${styles.paragraph} ${animated ? styles.paragraphAnimated : null}`}
        >
          Desarrollador front-end <span>junior</span> especializado en{" "}
          <span>React y TypeScript.</span> Mi intensa formación autodidacta y
          varias colaboraciones en <span>equipos internacionales</span> me han
          preparado para enfrentar nuevos desafíos tecnológicos con agilidad y
          autonomía.
        </p>
      </div>
      <div
        className={`${styles.imageContainer} ${animated ? styles.imageContainerAnimated : null}`}
      >
        <img
          className={`${styles.image} ${animated ? styles.imageAnimated : null}`}
          src="images/arturoImg.webp"
          alt="Fotografía de Arturo López"
        />
      </div>
    </div>
  );
}

export default Profile;
