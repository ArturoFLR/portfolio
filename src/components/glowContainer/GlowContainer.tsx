import styles from "./GlowContainer.module.scss";

type GlowContainerProps = {
  glowColor: "mono" | "multi";
  children: React.ReactNode;
};

function GlowContainer({ glowColor, children }: GlowContainerProps) {
  return (
    <div
      className={
        glowColor === "mono"
          ? styles.containerMonoColor
          : styles.containerMultiColor
      }
    >
      {children}
    </div>
  );
}

export default GlowContainer;
