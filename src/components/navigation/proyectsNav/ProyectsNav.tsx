import NavLink from "../../links/navLinks/NavLink";
import styles from "./ProyectsNav.module.scss";

type ProyectsNavProps = {
  animated: boolean;
};

function ProyectsNav({ animated }: ProyectsNavProps) {
  return (
    <nav
      className={`${styles.proyectsNavMainContainer} ${animated ? styles.proyectsNavMainContainerAnimated : null}`}
      role="navigation"
    >
      <ul className={styles.proyectsNavUlTag}>
        <ol className={styles.proyectsNavOlTag}>
          <NavLink linkType="anchor" linkHref="#proyects">
            Proyectos
          </NavLink>
        </ol>
        <ol className={styles.proyectsNavOlTag}>
          <NavLink linkType="anchor" linkHref="#technologies">
            Tecnologías
          </NavLink>
        </ol>
        <ol className={styles.proyectsNavOlTag}>
          <NavLink linkType="anchor" linkHref="#aboutMe">
            Sobre mí
          </NavLink>
        </ol>
      </ul>
    </nav>
  );
}

export default ProyectsNav;
