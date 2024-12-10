import styles from "./HeaderH1.module.scss";

type HeaderH1Props = {
  animated: boolean;
  children: React.ReactNode;
};

function HeaderH1({ animated, children }: HeaderH1Props) {
  return (
    <h1 className={`${styles.h1Tag} ${animated ? styles.h1tagAnimated : null}`}>
      {children}
    </h1>
  );
}

export default HeaderH1;
