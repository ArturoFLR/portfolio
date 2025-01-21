import styles from "./PictureViewer.module.scss";

type PictureViewerProps = {
  pictureUrl: string;
};

function PictureViewer({ pictureUrl }: PictureViewerProps) {
  return (
    <div className={styles.pictureViewerScreenDarkener}>
      <div className={styles.pictureViewerFrame}>
        <img src={pictureUrl} alt="Imagen del proyecto" />
      </div>

      <div className={styles.pictureViewerCloseButton}>X</div>
    </div>
  );
}

export default PictureViewer;
