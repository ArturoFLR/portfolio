import styles from "./HeaderH2.module.scss";

type HeaderH2Props = {
  children: React.ReactNode;
};

function HeaderH2({ children }: HeaderH2Props) {
  return <h2 className={styles.h2Tag}>{children}</h2>;
}

export default HeaderH2;
