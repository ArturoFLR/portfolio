import styles from "./Profile.module.scss";

function Profile() {
  return (
    <div className={styles.profileMainContainer}>
      <div className={styles.textContainer}>
        <h2 className={styles.header}>
          Sobre
          <span className={styles.headerSpan}> mí</span>
        </h2>
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
