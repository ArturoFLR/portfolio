import styles from "./Paragraph.module.scss";

type ParagraphProps = {
  text: string;
};

function Paragraph({ text }: ParagraphProps) {
  return <p className={styles.pTag}>{text}</p>;
}

export default Paragraph;
