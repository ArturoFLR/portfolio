import NavLink from "../../links/navLinks/NavLink";
import styles from "./MainNav.module.scss";

type MainNavProps = {
  animated: boolean;
};

function MainNav({ animated }: MainNavProps) {
  return (
    <nav
      className={`${styles.mainNavMainContainer} ${animated ? styles.mainNavMainContainerAnimated : null}`}
      role="navigation"
    >
      <ul className={styles.mainNavUlTag}>
        <ol className={styles.mainNavOlTag}>
          <NavLink linkType="anchor" linkHref="#proyects">
            Proyectos
          </NavLink>
        </ol>
        <ol className={styles.mainNavOlTag}>
          <NavLink linkType="anchor" linkHref="#technologies">
            Tecnologías
          </NavLink>
        </ol>
        <ol className={styles.mainNavOlTag}>
          <NavLink linkType="anchor" linkHref="#aboutMe">
            Sobre mí
          </NavLink>
        </ol>
      </ul>
    </nav>
  );
}

export default MainNav;
