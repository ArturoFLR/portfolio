import styles from "./GenericLink.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LaunchIcon from "@mui/icons-material/Launch";

type IconType = "github" | "linkedin" | "document" | "launch";

type GenericLinkProps = {
  hrefValue: string;
  icon: IconType;
  children: React.ReactNode;
};

function GenericLink({ icon, hrefValue, children }: GenericLinkProps) {
  return (
    <a
      className={styles.genericLinkMainContainer}
      target={icon !== "document" ? "_blank" : ""}
      rel="noopener"
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

          {icon === "launch" && (
            <LaunchIcon color="inherit" fontSize="inherit" />
          )}
        </div>
        <p className={styles.linkText}>{children}</p>
      </div>
    </a>
  );
}

export default GenericLink;
