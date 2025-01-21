import HeaderH1 from "../headers/headerH1/HeaderH1";
import HeaderH2 from "../headers/headerH2/HeaderH2";
import NavLink from "../links/navLinks/NavLink";
import styles from "./WrongPath.module.scss";

function WrongPath() {
  return (
    <main className={styles.mainTag}>
      <div className={styles.h1Positioner}>
        <HeaderH1 animated={false}>Página No Encontrada</HeaderH1>
      </div>

      <div className={styles.h2Positioner}>
        <HeaderH2 animated={false}>Error 404</HeaderH2>
      </div>

      <div className={styles.mainTextPositioner}>
        <p>¡Vaya! Parece que la URL introducida no existe...</p>
        <NavLink linkType="link" linkHref="/" animatedLinkState={false}>
          Volver al Inicio
        </NavLink>
      </div>
    </main>
  );
}

export default WrongPath;
