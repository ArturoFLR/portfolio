import { Link } from "react-router";
import styles from "./CheckMate.module.scss";
import MainNav from "../components/mainNav/MainNav";

function CheckMate() {
  return (
    <>
      <MainNav animated={false} />

      <div className={styles.proyectMainContainer}>
        <Link to="/">Volver a Home</Link>
      </div>
    </>
  );
}

export default CheckMate;
