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
  animated: boolean;
};

function GenericLink({
  icon,
  hrefValue,
  children,
  animated,
}: GenericLinkProps) {
  return (
    <a
      className={`${styles.genericLinkMainContainer} ${animated ? styles.genericLinkMainContainerAnimated : null}`}
      target={icon !== "document" ? "_blank" : ""}
      rel="noopener"
      href={hrefValue}
      download={icon === "document" ? "CV Arturo López Rosa 2024.pdf" : ""}
    >
      <div
        className={`${styles.genericLinkContentContainer} ${animated ? styles.genericLinkContentContainerAnimated : null}`}
      >
        <div className={styles.iconContainer}>
          {icon === "github" && (
            <GitHubIcon
              color="inherit"
              fontSize="inherit"
              style={{ display: "block" }}
            />
          )}

          {icon === "linkedin" && (
            <LinkedInIcon
              color="inherit"
              fontSize="inherit"
              style={{ display: "block" }}
            />
          )}

          {icon === "document" && (
            <PictureAsPdfIcon
              color="inherit"
              fontSize="inherit"
              style={{ display: "block" }}
            />
          )}

          {icon === "launch" && (
            <LaunchIcon
              color="inherit"
              fontSize="inherit"
              style={{ display: "block" }}
            />
          )}
        </div>
        <p className={styles.linkText}>{children}</p>
      </div>
    </a>
  );
}

export default GenericLink;
