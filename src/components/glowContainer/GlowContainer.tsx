import styles from "./GlowContainer.module.scss";

function GlowContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.spark}></div>
      <p className={styles.content}>CONTENIDO</p>
    </div>
  );
}

export default GlowContainer;
