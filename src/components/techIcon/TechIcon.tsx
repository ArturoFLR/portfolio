import styles from "./TechIcon.module.scss";

export type TechIconType =
  | "css3"
  | "docker"
  | "express"
  | "git"
  | "html5"
  | "javascript"
  | "netlify"
  | "poo"
  | "react"
  | "reactrouter"
  | "sass"
  | "tailwind"
  | "typescript"
  | "vscode"
  | "leaflet"
  | "jest"
  | "cypress"
  | "axios"
  | "vite"
  | "azure"
  | "jira";

type TechIconProps = {
  iconName: TechIconType;
};

function TechIcon({ iconName }: TechIconProps) {
  let colorClassname: string = "";
  let dataTitle: string = "";
  let src: string = "";
  let alt: string = "";

  switch (iconName) {
    case "css3":
      colorClassname = styles.blueIconContainer;
      dataTitle = "CSS3";
      src = "icons/css3.webp";
      alt = "CSS3 icon";
      break;

    case "docker":
      colorClassname = styles.blueIconContainer;
      dataTitle = "Docker";
      src = "icons/docker.webp";
      alt = "Docker icon";
      break;

    case "express":
      colorClassname = styles.greyIconContainer;
      dataTitle = "Express";
      src = "icons/express.webp";
      alt = "Express icon";
      break;

    case "git":
      colorClassname = styles.redIconContainer;
      dataTitle = "Git";
      src = "icons/git.webp";
      alt = "Git icon";
      break;

    case "html5":
      colorClassname = styles.redIconContainer;
      dataTitle = "HTML5";
      src = "icons/html5.webp";
      alt = "HTML5 icon";
      break;

    case "javascript":
      colorClassname = styles.yellowIconContainer;
      dataTitle = "JavaScript";
      src = "icons/javascript.webp";
      alt = "JavaScript icon";
      break;

    case "netlify":
      colorClassname = styles.greenIconContainer;
      dataTitle = "Netlify";
      src = "icons/netlify.webp";
      alt = "Netlify icon";
      break;

    case "poo":
      colorClassname = styles.whiteIconContainer;
      dataTitle = "Programación Orientada a Objetos";
      src = "icons/poo.webp";
      alt = "POO icon";
      break;

    case "react":
      colorClassname = styles.lightBlueIconContainer;
      dataTitle = "React";
      src = "icons/react.webp";
      alt = "React icon";
      break;

    case "reactrouter":
      colorClassname = styles.redIconContainer;
      dataTitle = "React Router";
      src = "icons/react_router.webp";
      alt = "React Router icon";
      break;

    case "sass":
      colorClassname = styles.pinkIconContainer;
      dataTitle = "SASS";
      src = "icons/sass.webp";
      alt = "SASS icon";
      break;

    case "tailwind":
      colorClassname = styles.lightBlueIconContainer;
      dataTitle = "Tailwind";
      src = "icons/tailwind.webp";
      alt = "Tailwind icon";
      break;

    case "typescript":
      colorClassname = styles.blueIconContainer;
      dataTitle = "TypeScript";
      src = "icons/typescript.webp";
      alt = "TypeScript icon";
      break;

    case "vscode":
      colorClassname = styles.lightBlueIconContainer;
      dataTitle = "Visual Studio Code";
      src = "icons/vscode.webp";
      alt = "VScode icon";
      break;

    case "leaflet":
      colorClassname = styles.greenIconContainer;
      dataTitle = "Leaflet Maps";
      src = "icons/leaflet.webp";
      alt = "Leaflet icon";
      break;

    case "jest":
      colorClassname = styles.pinkIconContainer;
      dataTitle = "Jest";
      src = "icons/jest.webp";
      alt = "Jest icon";
      break;

    case "cypress":
      colorClassname = styles.greenIconContainer;
      dataTitle = "Cypress";
      src = "icons/cypress.webp";
      alt = "Cypress icon";
      break;

    case "axios":
      colorClassname = styles.violetIconContainer;
      dataTitle = "Axios";
      src = "icons/axios.webp";
      alt = "Axios icon";
      break;

    case "vite":
      colorClassname = styles.orangeIconContainer;
      dataTitle = "Vite";
      src = "icons/vite.webp";
      alt = "Vite icon";
      break;

    case "azure":
      colorClassname = styles.greenIconContainer;
      dataTitle = "Azure";
      src = "icons/azure.webp";
      alt = "Azure icon";
      break;

    case "jira":
      colorClassname = styles.blueIconContainer;
      dataTitle = "Jira";
      src = "icons/jira.webp";
      alt = "Jira icon";
      break;

    default:
      break;
  }

  return (
    <div
      className={`${styles.techIconContainer} ${colorClassname}`}
      data-title={dataTitle}
    >
      <img className={styles.techIcon} src={src} alt={alt} />
    </div>
  );
}

export default TechIcon;
