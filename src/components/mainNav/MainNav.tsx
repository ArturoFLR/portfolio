import NavLink from "../links/navLinks/NavLink";
import styles from "./MainNav.module.scss";

function MainNav() {
  return (
    <nav className={styles.mainNavMainContainer} role="navigation">
      <ul className={styles.mainNavUlTag}>
        <ol className={styles.mainNavOlTag}>
          <NavLink linkHref="#proyects">Proyectos</NavLink>
        </ol>
        <ol className={styles.mainNavOlTag}>
          <NavLink linkHref="#technologies">Tecnologías</NavLink>
        </ol>
        <ol className={styles.mainNavOlTag}>
          <NavLink linkHref="#aboutMe">Sobre mí</NavLink>
        </ol>
      </ul>
    </nav>
  );
}

export default MainNav;
