import { Link, useLocation } from "react-router";
import styles from "./CheckMate.module.scss";
import ProyectsNav from "../components/navigation/proyectsNav/ProyectsNav";

function CheckMate() {
  const location = useLocation();
  if (location.state === null) location.state = { animated: true };

  return (
    <main className={styles.mainTag}>
      <ProyectsNav animated={location.state.animated === true ? true : false} />
      <div className={styles.proyectMainContainer}>
        <Link to="/">Volver a Home</Link>
      </div>
    </main>
  );
}

export default CheckMate;
