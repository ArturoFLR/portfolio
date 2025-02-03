import styles from "./Profile.module.scss";
import HeaderH2 from "../headers/headerH2/HeaderH2";
import CustomLightbulbIcon from "../customIconsMUI/CustomLightBulb";

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
          Desarrollador Front-End <span>junior</span> especializado en{" "}
          <span>React y TypeScript.</span> Mi formación mediante un bootcamp,
          cursos especializados y muchas horas de aprendizaje autónomo, junto
          con varias colaboraciones en <span>equipos internacionales</span>, me
          han preparado para trabajar con agilidad y autonomía.
        </p>

        <div
          className={`${styles.learningSectionContainer} ${animated ? styles.learningSectionContainerAnimated : null}`}
        >
          <div className={styles.learningSectionMainTextAndIconContainer}>
            <p className={styles.learningSectionMainText}>Ahora Aprendiendo:</p>
          </div>

          <ul>
            <li>
              <div className={styles.learningSectionLoadingIcon}>
                <CustomLightbulbIcon />
              </div>
              Next.js
            </li>
            <li>
              <div className={styles.learningSectionLoadingIcon}>
                <CustomLightbulbIcon />
              </div>
              Styled Components
            </li>
          </ul>
        </div>
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
