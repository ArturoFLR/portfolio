import { Link } from "react-router";
import styles from "./NavLink.module.scss";

type NavLinkType = "anchor" | "link";

type NavLinkProps = {
  linkHref: string;
  linkType: NavLinkType;
  children: React.ReactNode;
};

function NavLink({ linkHref, linkType, children }: NavLinkProps) {
  return linkType === "anchor" ? (
    <a className={styles.navLink} href={linkHref}>
      {children}
    </a>
  ) : (
    <Link className={styles.navLink} to={linkHref}>
      {children}
    </Link>
  );
}

export default NavLink;
