import styles from "./HeaderH2.module.scss";

type HeaderH2Props = {
  animated: boolean;
  children: React.ReactNode;
};

function HeaderH2({ animated, children }: HeaderH2Props) {
  return (
    <h2 className={`${styles.h2Tag} ${animated ? styles.h2tagAnimated : null}`}>
      {children}
    </h2>
  );
}

export default HeaderH2;
