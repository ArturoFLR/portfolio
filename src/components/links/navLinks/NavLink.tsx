import styles from "./NavLink.module.scss";

type NavLinkProps = {
  linkHref: string;
  children: React.ReactNode;
};

function NavLink({ linkHref, children }: NavLinkProps) {
  return (
    <a className={styles.navLink} href={linkHref}>
      {children}
    </a>
  );
}

export default NavLink;
