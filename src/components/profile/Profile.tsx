import HeaderH2 from "../headers/headerH2/HeaderH2";
import styles from "./Profile.module.scss";

function Profile() {
  return (
    <div className={styles.profileMainContainer}>
      <div className={styles.textContainer}>
        <HeaderH2>
          Sobre
          <span> mí</span>
        </HeaderH2>
        <p className={styles.paragraph}>
          Desarrollador front-end <span>junior</span> especializado en{" "}
          <span>React y TypeScript.</span> Mi intensa formación autodidacta y
          varias colaboraciones en <span>equipos internacionales</span> me han
          preparado para enfrentar nuevos desafíos tecnológicos con agilidad y
          autonomía.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="images/arturoImg.webp"
          alt="Fotografía de Arturo López"
        />
      </div>
    </div>
  );
}

export default Profile;
