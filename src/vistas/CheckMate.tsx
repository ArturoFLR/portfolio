import { Link, useLocation } from "react-router";
import styles from "./CheckMate.module.scss";
import ProyectsNav from "../components/navigation/proyectsNav/ProyectsNav";

function CheckMate() {
  const location = useLocation();

  return (
    <>
      <ProyectsNav animated={location.state.animated === true ? true : false} />
      <div className={styles.proyectMainContainer}>
        <Link to="/">Volver a Home</Link>
      </div>
    </>
  );
}

export default CheckMate;
