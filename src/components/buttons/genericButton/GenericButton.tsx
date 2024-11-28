import styles from "./GenericButton.module.scss";

type GenericButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

function GenericButton({ children }: GenericButtonProps) {
  return (
    <div className={styles.genericButtonMainContainer}>
      <div className={styles.genericButtonContentContainer}>{children}</div>
    </div>
  );
}

export default GenericButton;
