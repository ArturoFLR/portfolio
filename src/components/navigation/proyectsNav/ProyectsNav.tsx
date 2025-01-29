import { useLocation } from "react-router";
import NavLink from "../../links/navLinks/NavLink";
import styles from "./ProyectsNav.module.scss";
import proyectsData from "../../../data/proyectsData";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

type ProyectsNavProps = {
  animated: boolean;
};

function ProyectsNav({ animated }: ProyectsNavProps) {
  //This function normalizes the path, removing the trailing "/" if any. This is because both the paths "/project_name" and "/project_name/" are valid.
  const normalizePath = (path: string) => {
    return path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;
  };

  //It is used to know which route we are on and, therefore, which project we are looking at, to modify the navigation links accordingly. This is done by searching at which index of the project path array the current path is located. The indexes of the routes array match those of the proyects names array.
  const location = useLocation();
  const normalizedPath = normalizePath(location.pathname);

  const proyectIndex = proyectsData.proyectsRoutes.findIndex(
    (element) => element === normalizedPath,
  );

  const prevLinkIndex =
    proyectIndex === 0
      ? proyectsData.proyectsRoutes.length - 1
      : proyectIndex - 1;
  const nextLinkIndex =
    proyectIndex === proyectsData.proyectsRoutes.length - 1
      ? 0
      : proyectIndex + 1;

  return (
    <nav
      className={`${styles.proyectsNavMainContainer} ${animated ? styles.proyectsNavMainContainerAnimated : null}`}
      role="navigation"
    >
      <ul className={styles.proyectsNavUlTag}>
        <li className={styles.proyectsNavOlTag}>
          <NavLink
            linkType="link"
            linkHref={proyectsData.proyectsRoutes[prevLinkIndex]}
            animatedLinkState={false}
            ariaLabel={`Ir a ${proyectsData.proyectsNames[prevLinkIndex]}`}
          >
            <div className={styles.prevLinkContainer}>
              <DoubleArrowIcon className={styles.prevLinkIconContainer} />

              <div className={styles.prevLinkTextContainer}>
                {proyectsData.proyectsNames[prevLinkIndex]}
              </div>
            </div>
          </NavLink>
        </li>
        <li className={styles.proyectsNavOlTag}>
          <NavLink linkType="link" linkHref="/" animatedLinkState={false}>
            <div className={styles.homeLinkContainer}>Home</div>
          </NavLink>
        </li>
        <li className={styles.proyectsNavOlTag}>
          <NavLink
            linkType="link"
            linkHref={proyectsData.proyectsRoutes[nextLinkIndex]}
            animatedLinkState={false}
            ariaLabel={`Ir a ${proyectsData.proyectsNames[nextLinkIndex]}`}
          >
            <div className={styles.nextLinkContainer}>
              <div className={styles.nextLinkTextContainer}>
                {proyectsData.proyectsNames[nextLinkIndex]}
              </div>

              <DoubleArrowIcon className={styles.nextLinkIconContainer} />
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default ProyectsNav;
