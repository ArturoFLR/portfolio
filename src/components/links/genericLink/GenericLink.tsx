import styles from "./GenericLink.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

type IconType = "github" | "linkedin" | "document";

type GenericLinkProps = {
  handleClick: () => void;
  icon: IconType;
  children: React.ReactNode;
};

function GenericLink({ icon, handleClick, children }: GenericLinkProps) {
  let hrefValue: string;

  switch (icon) {
    case "github":
      hrefValue = "https://github.com/ArturoFLR";
      break;

    case "linkedin":
      hrefValue = "https://www.linkedin.com/in/arturo-lopez-rosa/";
      break;

    case "document":
      hrefValue = "documents/cv2024.pdf";
      break;

    default:
      hrefValue = "";
      break;
  }

  return (
    <a
      className={styles.genericLinkMainContainer}
      onClick={handleClick}
      target={icon !== "document" ? "_blank" : ""}
      href={hrefValue}
      download={icon === "document" ? "CV Arturo López Rosa 2024.pdf" : ""}
    >
      <div className={styles.genericLinkContentContainer}>
        <div className={styles.iconContainer}>
          {icon === "github" && (
            <GitHubIcon color="inherit" fontSize="inherit" />
          )}

          {icon === "linkedin" && (
            <LinkedInIcon color="inherit" fontSize="inherit" />
          )}

          {icon === "document" && (
            <PictureAsPdfIcon color="inherit" fontSize="inherit" />
          )}
        </div>
        <p className={styles.linkText}>{children}</p>
      </div>
    </a>
  );
}

export default GenericLink;
