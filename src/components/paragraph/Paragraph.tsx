import styles from "./Paragraph.module.scss";

type ParagraphProps = {
  children: React.ReactNode;
};

function Paragraph({ children }: ParagraphProps) {
  return <p className={styles.pTag}>{children}</p>;
}

export default Paragraph;
