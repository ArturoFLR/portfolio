import styles from "./PictureViewer.module.scss";

type PictureViewerProps = {
  pictureUrl: string;
  handlePictureViewerClose: () => void;
};

function PictureViewer({
  pictureUrl,
  handlePictureViewerClose,
}: PictureViewerProps) {
  return (
    <div className={styles.pictureViewerScreenDarkener}>
      <div className={styles.pictureViewerContainer}>
        <div className={styles.pictureViewerFrame}>
          <img src={pictureUrl} alt="Imagen del proyecto" />
          <button
            aria-label="Cerrar visor de imágenes"
            type="button"
            className={styles.pictureViewerCloseButton}
            onClick={handlePictureViewerClose}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default PictureViewer;
