import { Link } from "react-router";
import styles from "./CheckMate.module.scss";

function CheckMate() {
  return (
    <div className={styles.proyectMainContainer}>
      <Link to="/">Volver a Home</Link>
    </div>
  );
}

export default CheckMate;
