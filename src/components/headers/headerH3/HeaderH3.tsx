import styles from "./HeaderH3.module.scss";

type HeaderH3Props = {
  children: React.ReactNode;
};

function HeaderH3({ children }: HeaderH3Props) {
  return <h3 className={styles.h3Tag}>{children}</h3>;
}

export default HeaderH3;
