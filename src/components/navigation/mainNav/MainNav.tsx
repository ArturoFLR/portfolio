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
        <li className={styles.mainNavOlTag}>
          <NavLink linkType="anchor" linkHref="#proyects">
            Proyectos
          </NavLink>
        </li>
        <li className={styles.mainNavOlTag}>
          <NavLink linkType="anchor" linkHref="#technologies">
            Tecnologías
          </NavLink>
        </li>
        <li className={styles.mainNavOlTag}>
          <NavLink linkType="anchor" linkHref="#aboutMe">
            Sobre mí
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
