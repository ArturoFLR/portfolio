import { Link } from "react-router";
import styles from "./NavLink.module.scss";

type NavLinkType = "anchor" | "link";

type NavLinkProps = {
  linkHref: string;
  linkType: NavLinkType;
  animatedLinkState?: boolean;
  children: React.ReactNode;
  tabIndex?: number;
};

function NavLink({
  linkHref,
  linkType,
  animatedLinkState,
  children,
  tabIndex,
}: NavLinkProps) {
  if (!tabIndex) tabIndex = 500;

  if (tabIndex === 500) {
    return linkType === "anchor" ? (
      <a className={styles.navLink} href={linkHref}>
        {children}
      </a>
    ) : (
      <Link
        className={styles.navLink}
        to={linkHref}
        state={{ animated: animatedLinkState }}
      >
        {children}
      </Link>
    );
  } else {
    return linkType === "anchor" ? (
      <a className={styles.navLink} href={linkHref} tabIndex={tabIndex}>
        {children}
      </a>
    ) : (
      <Link
        className={styles.navLink}
        to={linkHref}
        state={{ animated: animatedLinkState }}
        tabIndex={tabIndex}
      >
        {children}
      </Link>
    );
  }
}

export default NavLink;
