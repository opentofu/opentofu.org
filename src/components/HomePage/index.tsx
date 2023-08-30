import React from "react";
import cslx from "clsx";
import LogoUrl from "@site/static/img/logo.png";
import Link from "@docusaurus/Link";

import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <img src={LogoUrl} width="500px" alt="Logo" />
      <p className={styles.heading}>
        Supporting an impartial, open, and community-driven Terraform.
      </p>
      <div className={styles.buttons}>
        <Link to="/intro" className={cslx(styles.button, styles.buttonPrimary)}>
          Documentation
        </Link>
        <Link
          to="https://github.com/opentffoundation/opentf"
          className={cslx(styles.button, styles.buttonSecondary)}
        >
          GitHub Repository
        </Link>
      </div>
    </div>
  );
}
